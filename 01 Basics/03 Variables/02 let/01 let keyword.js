// Variables

// let


/* -----> we can do Declaration & Initialization separately <----- */

// Initialization is not mandatory
// Declaring a variable
// we can create a variable using let keyword
let message;

// Assigning a value
// we can put data into a variable using assignment operator Equality Symbol (=)
message = 'Hello world';
console.log(message);  // Hello world


/* -----> we can do Declaration & Initialization At a time <----- */
// we can write variable declaration and value assignment in a single line also.
let myName = "Ande Praveen";
console.log(myName);  // Ande Praveen

/*

//  we can't re-declare the same variableName
let myName = "Brendan Eich";
console.log(myName)  // SyntaxError: Identifier 'myName' has already been declared

*/


/* ----->  we can change the variable Value <----- */
// Variables can be reassigned
let myValue = "Old Value";
myValue = "New Value";
console.log(myValue);  // New Value

// Error
// we can get undefined error when not assigning a value to the variable.
// printing a variable without assigning a value will give the output => undefined
let myVariable;
console.log(myVariable);  // undefined


