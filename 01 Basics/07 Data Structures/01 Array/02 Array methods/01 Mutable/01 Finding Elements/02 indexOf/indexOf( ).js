

/// Array Methods

// Finding Elements

/*

 indexOf() method
 The indexOf() method returns the first index at which a given item can be found in the array. If no item is found, it returns -1.
 myArray.indexOf(item);

 */



let myArray = [1, 2, 3, 4, 5, 3];
console.log(myArray); // [ 1, 2, 3, 4, 5, 3 ]

// Existing Element
let threeNumberIndex = myArray.indexOf(3);
console.log(threeNumberIndex);  // 2

// Non-Existing Element
let nonExistingElementIndex = myArray.indexOf(10);
console.log(nonExistingElementIndex);  // -1

