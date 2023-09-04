
/// Array Methods

// Finding Elements

/*

 lastIndexOf() method
 The lastIndexOf() method returns the last index at which a given item can be found in the array. If no item is found, it returns -1.
 myArray.lastIndexOf(item);

 */

let myArray = [1, 2, 3, 4, 5, 3];
console.log(myArray); // [ 1, 2, 3, 4, 5, 3 ]

// Existing Element
let threeNumberIndex = myArray.lastIndexOf(3);
console.log(threeNumberIndex);  // 5

// Non-Existing Element
let nonExistingElementIndex = myArray.lastIndexOf(10);
console.log(nonExistingElementIndex);  // -1

