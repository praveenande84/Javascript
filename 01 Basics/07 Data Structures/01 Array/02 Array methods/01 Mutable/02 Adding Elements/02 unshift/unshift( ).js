
/// Array Methods

// Adding Elements

/*

 unshift() method
 The unshift() method adds one or more items to the beginning of an array and returns the new array length.
 myArray.unshift(firstItem);

 */


let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

let firstItem = "zero";

myArray.unshift(firstItem);
console.log(myArray);  // [ 'zero', 1, 2, 3, 4, 5 ]