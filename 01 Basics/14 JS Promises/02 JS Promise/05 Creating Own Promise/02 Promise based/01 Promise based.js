// JS Promises

/*
 promises concept using callbacks
 promises has two arguments
 */


// Declare a promise in javascript
let cleanLaptop = new Promise((resolve, reject) => {
    // doing the task
    let isDone = true;
    if (isDone){
        resolve('Tak is Done');
    }
    else{
        reject('Task is Not Done');
    }
});

// Execute a promise
// cleanLaptop.then(()=>{}).catch(()=>{});
cleanLaptop.then((message)=>{
    console.log(`from resolve:${message}`);
}).catch((message)=>{
    console.log(`from reject:${message}`);
});


// output :
// from resolve:Tak is Done