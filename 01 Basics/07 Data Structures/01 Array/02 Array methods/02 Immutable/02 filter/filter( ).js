
// Array Methods

// Immutable

/*
 filter()
 This method Iterates over an array and performs an operation.
 let newArray = myArray.filter(function(currentValue, index, arr));
 => Here index and arr are optional arguments.

 */

const myArray = [1,2,3,4,-5,-7,12];
const filteredArray = myArray.filter((eachItem) => eachItem > 0);
console.log(filteredArray); // [ 1, 2, 3, 4, 12 ]
