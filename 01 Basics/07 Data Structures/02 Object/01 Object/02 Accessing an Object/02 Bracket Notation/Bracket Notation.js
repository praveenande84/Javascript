// Data Structures

// Object
// Accessing Object Properties

/*

 Accessing Object Properties by Bracket Notation

 */

// creating an Object
let person = {
    name:"Praveen",
    age:26,
    city:"Hyderabad",
    "my choice" : "Value1"
}
console.log(person);  // { name: 'Praveen', age: 26, city: 'Hyderabad' }

/// Bracket Notation  []

// Accessing Existing Property
console.log(person["name"]);  // Praveen
console.log(person["my choice"]);  // Software

// Accessing Non-existing Property
console.log(person["gender"]);  // undefined

// use variable as key
let key = "name";
console.log(person[key]);  // praveen

let city = "name"
console.log(person[city]);  // praveen