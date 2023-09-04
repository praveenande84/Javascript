
// this in Arrow function with callbacks

let myObject = {
    color:"blue",
    brand:"Audi",
    start:function(){
        setTimeout(() => {
            console.log(this);  // myObject
        }, 1000)
    }
};
myObject.start();