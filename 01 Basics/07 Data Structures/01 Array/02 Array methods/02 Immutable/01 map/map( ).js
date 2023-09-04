
// Array Methods

// Immutable

/*
 map()
 This method Iterates over an array and performs an operation.
 let newArray = myArray.map(callback(currentValue, index, arr));
  => Here index and arr are optional arguments
 */

const myArray = [1, 2, 3, 4];
const output = myArray.map((eachItem) => eachItem * eachItem);
console.log(output); // [ 1, 4, 9, 16 ]
