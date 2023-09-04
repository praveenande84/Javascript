
/// operators

/*

 spread operator (...)
 three dots is a spread operator => ...

 */

// spread operator used to unpack the values

let myArray1 = [2, 3];

let myArray2 = [1, myArray1, 4];
console.log(myArray2);  // [ 1, [ 2, 3 ], 4 ]

// Spreading
let myArray3 = [1, ...myArray1, 4];
console.log(myArray3);  // [ 1, 2, 3, 4 ]

