
/// Array Methods

// Adding Elements

/*

 splice() method
 The splice() method use to Adding New Items, Removing Existing Items & Replacing Existing Items in the Array.
 myArray.splice(startingIndex, noOfItemsToRemove, replaceItems);

 */


let myArray = [1, 2, 5];
console.log(myArray); // [ 1, 2, 5 ]


/// Adding New Items
// myArray.splice(start, deleteCount, item1, item2...);
myArray.splice(2,0,"three", "four");
console.log(myArray);  // [ 1, 2, 'three', 'four', 5 ]


/// Removing Existing Items
// myArray.splice(start, deleteCount);
let deletedItems = myArray.splice(3,2);
console.log(deletedItems);  // [ 'four', 5 ]
console.log(myArray);  // [ 1, 2, 'three' ]


/// Replacing Existing Items
// myArray.splice(start, deleteCount, item1, item2...);
myArray.splice(0, 2, "one", "two");
console.log(myArray);  // [ 'one', 'two', 'three' ]
