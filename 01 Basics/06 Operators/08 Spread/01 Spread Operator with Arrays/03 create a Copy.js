/// operators

/*

 spread operator (...)
 three dots is a spread operator => ...

 */

// spread operator used to unpack the values

let myArray1 = [1,2,3];

// create a Copy
let myArray2 = [...myArray1];
console.log(myArray2);  // [ 1, 2, 3 ]

myArray1[0] = "One";
console.log(myArray1);  // [ 'One', 2, 3 ]
console.log(myArray2);  // [ 1, 2, 3 ]