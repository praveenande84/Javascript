
/// Array Methods

// Combining & Slicing Arrays

/*

 concat() method
 The concat() method can be used to merge two or more arrays.
 This method does not change the existing arrays but instead returns a new array.
 let newArray = myArray1.concat(myArray2);

 */

let myArray1 = [1,2,3];
console.log(myArray1);  // [ 1, 2, 3 ]

let myArray2 = ["four", "five", "six"];
console.log(myArray2);  // [ 'four', 'five', 'six' ]

let newArray = myArray1.concat(myArray2);
console.log(newArray);  // [ 1, 2, 3, 'four', 'five', 'six' ]
