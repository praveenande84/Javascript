/// operators

/*

 spread operator (...)
 three dots is a spread operator => ...

 */

// spread operator used to unpack the values

let myArray1 = [1,2,3];
let myArray2 = [4,5,6];

// Merging
// concatenate arrays with spread operator
let myArray3 = [...myArray1, ...myArray2];
console.log(myArray3);  // [ 1, 2, 3, 4, 5, 6 ]