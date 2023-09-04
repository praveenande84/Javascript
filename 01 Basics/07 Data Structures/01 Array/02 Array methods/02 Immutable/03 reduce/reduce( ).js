

// Array Methods

// Immutable

/*

 reduce()
 This method Iterates over an array and performs an operation.
 let finalValue = myArray.reduce(function(accumulator, currentValue, index, arr));
  => Here accumulator is the initialValue or the previously returned value of the function and currentValue is the value of the current element, index and arr are optional arguments.

 */


const myArray = [1,2,3,4];
const output = myArray.reduce((accumulator,eachItem) => (accumulator + eachItem));
console.log(output); // 10


