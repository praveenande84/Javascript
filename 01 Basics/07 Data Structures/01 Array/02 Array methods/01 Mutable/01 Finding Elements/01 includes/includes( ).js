
/// Array Methods

// Finding Elements

/*

 includes() method
 The includes() method returns true if the provided item exists in the Array. If no item found, it returns false.
 myArray.includes(item);

 */

let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

// Existing Element
let output1 = myArray.includes(2);
console.log(output1);  // true

// Non-Existing Element
let output2 = myArray.includes(10);
console.log(output2);  // false

