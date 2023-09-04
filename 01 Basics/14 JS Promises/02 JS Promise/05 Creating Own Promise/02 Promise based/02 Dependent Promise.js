// JS Promises

/*
 promises concept using callbacks
 promises has two arguments
 */



// Dependent Promise
let doCourse = new Promise((resolve, reject) => {
    // doing course
    let isDone = true;
    if(isDone){
        resolve('Course is Completed');
    }
    else{
        reject('Course is NOT Completed');
    }
});

let doProject = new Promise((resolve, reject) => {
    // doing project
    let isDone = true;
    if(isDone){
        resolve('Project is Completed');
    }
    else{
        reject('Project is NOT Completed');
    }
});

let doTechnicalRound = new Promise((resolve, reject) => {
    // doing technical round
    let isDone = true;
    if(isDone){
        resolve('Technical round is Finished');
    }
    else{
        reject('Technical round is NOT Finished');
    }
});

let doManagerRound = new Promise((resolve, reject) => {
    // doing Manager round
    let isDone = true;
    if(isDone){
        resolve('Manager round is Finished');
    }
    else{
        reject('Manager round is NOT Finished');
    }
});

let doHRRound = new Promise((resolve, reject) => {
    // doing HR round
    let isDone = true;
    if(isDone){
        resolve('HR round is Finished , Got JOB');
    }
    else{
        reject('HR round is NOT Finished , Got Rejected');
    }
});


// execute the dependent promises
doCourse.then((message) => {
    let output = `${message} -> `;
    doProject.then((message) => {
        output += `${message} -> `;
        doTechnicalRound.then((message) => {
            output += `${message} -> `;
            doManagerRound.then((message) => {
                output += `${message} -> `;
                doHRRound.then((message) => {
                    output += `${message} `;
                    console.log(output);
                }).catch((message) => {
                    console.error(message);
                });
            }).catch((message) => {
                console.error(message);
            });
        }).catch((message) => {
            console.error(message);
        });
    }).catch((message) => {
        console.error(message);
    });
}).catch((message) => {
    console.error(message);
});


// output:
// Course is Completed -> Project is Completed -> Technical round is Finished -> Manager round is Finished -> HR round is Finished , Got JOB