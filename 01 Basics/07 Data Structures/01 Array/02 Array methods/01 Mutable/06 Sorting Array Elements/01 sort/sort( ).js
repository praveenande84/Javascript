

/// Array Methods

// Sorting Array Elements

/*

 sort() method
 The sort() method sorts the items of an array and returns the sorted array. The default sort order is ascending.
 myArray.sort();

 */


// Numbers Sorting
let myArray = [2, 4, 1, 5, 3];
console.log(myArray);  // [ 2, 4, 1, 5, 3 ]

myArray.sort();
console.log(myArray);  // [ 1, 2, 3, 4, 5 ]

// String Items Sorting

myArray = ["one", "two", "three"];
console.log(myArray);  // [ 'one', 'two', 'three' ]

myArray.sort();
console.log(myArray);  // [ 'one', 'three', 'two' ]