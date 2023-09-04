// Data Structures

// Object
// Accessing Object Properties

/*

 Accessing Object Properties by Dot Notation

 */

// creating an Object
let person = {
    name:"Praveen",
    age:26,
    city:"Hyderabad",
    "my choice" : "Value1"
}
console.log(person);  // { name: 'Praveen', age: 26, city: 'Hyderabad' }

/// Dot Notation  .

// Accessing Existing Property
console.log(person.name);  // praveen
// console.log(person.my choice);  // SyntaxError:

// Accessing Non-existing Property
console.log(person.gender);  // undefined

// use variable as key
let key = "name";
console.log(person.key);  // undefined

let city = "name"
console.log(person.city);  // Hyderabad