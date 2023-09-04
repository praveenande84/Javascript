
/// Array Methods

// Joining Array Elements

/*

 join() method
 The join() method creates and returns a new string by concatenating all items in an array, separated by commas or a specified separator string.
 If the array has only one item, then it will be returned without using the specified separator.
 Here separator is a string used to separate each item of the array. If omitted, the array items are separated with a comma.
 myArray.join(separator);

 */


let myArray = [1, 2, 3, "four", "five", "six"];
console.log(myArray);  // [ 1, 2, 3, 'four', 'five', 'six' ]

// to convert an array Items to string
let separator = "/";
let joinedStringArray = myArray.join(separator);
console.log(joinedStringArray);  // 1/2/3/four/five/six
console.log(typeof(joinedStringArray));  // string