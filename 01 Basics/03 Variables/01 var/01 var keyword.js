// Variables

// var


/* -----> we can do Declaration & Initialization separately <----- */

// Initialization is not mandatory
// Declaring a variable
// we can create a variable using var keyword
var message;

// Assigning a value
// we can put data into a variable using assignment operator Equality Symbol (=)
message = 'Hello world';
console.log(message);  // Hello world


/* -----> we can do Declaration & Initialization At a time <----- */
// we can write variable declaration and value assignment in a single line also.
var myName = "Ande Praveen";
console.log(myName);  // Ande Praveen


/* ----->  we can re-declare the same variableName <----- */
var myName = "Brendan Eich";
console.log(myName)  // Brendan Eich


/* ----->  we can change the variable Value <----- */
// Variables can be reassigned
var myValue = "Old Value";
myValue = "New Value";
console.log(myValue);  // New Value

// Error
// we can get undefined error when not assigning a value to the variable.
// printing a variable without assigning a value will give the output => undefined
let myVariable;
console.log(myVariable);  // undefined


