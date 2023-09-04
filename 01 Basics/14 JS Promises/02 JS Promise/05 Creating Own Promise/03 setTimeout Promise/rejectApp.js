
const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("rejected");
        }, 2000);
    });
};

// console.log(myPromise());

myPromise().then((fromResolve) => {
    console.log(fromResolve);  
})
    .catch((fromReject) => {
        console.log(fromReject); 
    });
