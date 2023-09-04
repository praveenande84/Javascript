

// creating own Promise

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    });
};

console.log(myPromise());  // Promise { <pending> }


///
// Accessing Arguments from Resolve
// when resolve() is executed, callback inside then() will be executed.
const myPromiseResolve = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Resolved");
        }, 1000)
    });
};
myPromiseResolve().then((fromResolve) => {
    console.log(fromResolve);  // Promise Resolved
});


///
// Accessing Arguments from reject
// when reject() is executed, callback inside catch() will be executed.

const myPromiseReject = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise Rejected");
        }, 2000)
    });
};
myPromiseReject().then((fromResolve) => {
    console.log(fromResolve);
})
.catch((fromReject) => {
    console.log(fromReject); // Promise Rejected
});