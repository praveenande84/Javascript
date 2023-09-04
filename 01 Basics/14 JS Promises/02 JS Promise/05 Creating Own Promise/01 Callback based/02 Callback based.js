// JS Promises

/*
 promises concept using callbacks
 promises has two arguments
 */


// callback JS Promise
let doTask = function(success,failure){
    // doing the task
    let isDone = true;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is Not Done');
    }
};


doTask(
    (message) => {
    console.log(message);
},
    (message) => {
    console.log(message);
}
);