
// Checking
// Checks a part of the string

// It checks given part is in ending of the String or not.
// It returns true if the string contains the value, otherwise it returns false.
// myString.endsWith(part);

let myString = "Hello World";
console.log(myString);  // Hello World

let frontPart = "Hello"
let output1 = myString.endsWith(frontPart);
console.log(output1);  // false

let lastPart = "World";
let output2 = myString.endsWith(lastPart);
console.log(output2);  // true
