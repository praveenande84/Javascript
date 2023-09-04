// Data Structures

// Object

/*
-----> Object Destructuring <-----
  To unpack properties from objects, we use Object Destructuring.
  we must match the Object key name and variable name.
  we can use 'key-value' pair of an object as 'variable & value' through Object Destructuring.
*/

let myObject = {
    name:"Praveen",
    age:27,
    gender:"Male",
    city:"Hyderabad"
};

console.log(myObject);  // { name: 'Praveen', age: 27, gender: 'Male', city: 'Hyderabad' }
let {age, city} = myObject;


// Existing Property
console.log(age);  // 27
console.log(city);  // Hyderabad

// Non-Existing Property
let {salary} = myObject;
console.log(salary);  // undefined

// Non-Destructuring Property
// console.log(name);  // ReferenceError: name is not defined

/// another way Destructuring
let gender = myObject.gender;
console.log(gender);  // Male

