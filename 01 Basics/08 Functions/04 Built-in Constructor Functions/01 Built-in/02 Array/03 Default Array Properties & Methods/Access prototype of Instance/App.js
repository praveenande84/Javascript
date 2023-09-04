
// prototypal Inheritance

// Accessing the prototype of a Constructor Function
console.log(Array.prototype);


// Accessing the shared prototype of an Instance
let myArray = new Array(1, 2, 3);
console.log(Object.getPrototypeOf(myArray));

