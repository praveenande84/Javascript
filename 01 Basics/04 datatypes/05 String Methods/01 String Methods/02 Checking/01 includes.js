
// Checking
// Checks a part of the string

// It checks given part is included or not.
// It returns true if the string contains the value, otherwise it returns false.
// myString.includes(part);

let myString = "Hello World";
console.log(myString);  // Hello World

let part = "Hello"
let output1 = myString.includes(part);
console.log(output1);  // true

let wrongPart = "Helo";
let output2 = myString.includes(wrongPart);
console.log(output2);  // false
