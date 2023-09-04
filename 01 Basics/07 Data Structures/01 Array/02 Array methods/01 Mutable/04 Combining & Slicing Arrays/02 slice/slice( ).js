

/// Array Methods

// Combining & Slicing Arrays

/*

 slice() method
 The slice() method returns a portion between the specified start index and end index(end index not included) of an array into a new array.
 let arrayPart = myArray.slice(startIndex, endIndex);

 */

let myArray = [1, 2, 3, 4, 5];
console.log(myArray);  // [ 1, 2, 3, 4, 5 ]

let arrayPart = myArray.slice(2, 4);
console.log(arrayPart);  // [ 3, 4 ]


/// Array copy
// Default startingIndex is 0 Index
// Default endingIndex is last Item Index
let copiedArray = myArray.slice();
console.log(copiedArray);  //  [ 1, 2, 3, 4, 5 ]