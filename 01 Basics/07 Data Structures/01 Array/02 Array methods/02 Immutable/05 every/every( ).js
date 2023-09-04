

// Array Methods

// Immutable

/*

 every()
 This method Iterates over an array and performs an operation.
 The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 let finalBool = myArray.every(function(currentValue, index, arr))
    => Here index and arr are optional arguments

 */


let myArray = [1, 2, 3, 4, 5];
const isAllPositive = myArray.every((eachItem) => eachItem > 0);
console.log(isAllPositive);  // true
