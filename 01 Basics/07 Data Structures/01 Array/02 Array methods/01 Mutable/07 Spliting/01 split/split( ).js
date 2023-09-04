
/// Array Methods

// Splitting a String

/*

 split() method
 The split() method splits the string into an Array items by using separator.
 let arrayItems = myString.split(separator);

 */

let myString = "1/2/3/four/five/six";
console.log(myString);  // 1/2/3/four/five/six

let separator = "/";
let outputArray = myString.split(separator);
console.log(outputArray);  // [ '1', '2', '3', 'four', 'five', 'six' ]