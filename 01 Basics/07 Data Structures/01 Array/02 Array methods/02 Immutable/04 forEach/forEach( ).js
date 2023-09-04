
// Array Methods

// Immutable

/*
 forEach()
 This method Iterates over an array and performs an operation.
 myArray.forEach(callback(currentValue, index, arr));
  => Here index and arr are optional arguments.
  => It always returns undefined.
 */

const myArray = [1, 2, 3, 4];

let squaresList = [];
let output = myArray.forEach((eachItem) => squaresList.push(eachItem * eachItem));
console.log(output); // undefined

console.log(squaresList);  // [ 1, 4, 9, 16 ]

