
// Checking
// Checks a part of the string

// It checks given part is in starting of the String or not.
// It returns true if the string contains the value, otherwise it returns false.
// myString.startsWith(part);

let myString = "Hello World";
console.log(myString);  // Hello World

let frontPart = "Hello"
let output1 = myString.startsWith(frontPart);
console.log(output1);  // true

let lastPart = "World";
let output2 = myString.startsWith(lastPart);
console.log(output2);  // false
