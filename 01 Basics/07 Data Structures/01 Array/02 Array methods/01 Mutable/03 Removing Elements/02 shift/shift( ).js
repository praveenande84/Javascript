

/// Array Methods

// Removing Elements

/*

 shift() method
 The shift() method removes the first item from an array and returns that removed item.
 Array.shift(Testing Function);

 */


let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

let firstItem = myArray.shift();
console.log(firstItem);  // 1

console.log(myArray);  // [ 2, 3, 4, 5 ]