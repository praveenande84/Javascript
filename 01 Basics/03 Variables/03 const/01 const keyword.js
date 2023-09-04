// Variables

// const

/*
// -----> we can't do Declaration & Initialization separately <-----

// Initialization is  mandatory
// Declaring a variable
// we can create a variable using const keyword

const message;  // SyntaxError: Missing initializer in const declaration
*/


/* -----> we can do Declaration & Initialization At a time <----- */
// we must write variable declaration and value assignment in a single line.
const myName = "Ande Praveen";
console.log(myName);  // Ande Praveen


/*

//  we can't re-declare the same variableName
let myName = "Brendan Eich";
console.log(myName)  // SyntaxError: Identifier 'myName' has already been declared

*/



/*

// ----->  we can't change the variable Value <-----
// Variables can't be reassigned
// Once a value is initialized, then it can't be reassigned.

const myValue = "Old Value";
myValue = "New Value";
console.log(myValue);  // TypeError: Assignment to constant variable.

*/



