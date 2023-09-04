

// Array Methods

// Immutable

/*

 flat()
  The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  let newArray = myArray.flat(depth);

 */


let myArray = [[1, [2, [[3, 4]], 5]]];
console.log(myArray);  // [[1, [2, [[3, 4]], 5]]]

let flatArray = myArray.flat(4);
console.log(flatArray);  // [ 1, 2, 3, 4, 5 ]