
// Data Structures

// Object

/*

  CRUD :
        Create
        Read
        Update
        Delete

 */


/// Create
// Create Empty Object

let myObject = {};
console.log(myObject);  // {}
console.log(typeof(myObject));  // object

// Initialize the properties of Object
myObject.name = "Praveen";
myObject.age = 27;
myObject.gender = "Male";

console.log(myObject);  // { name: 'Praveen', age: 27, gender: 'Male' }

/// Read
// Access the Object Properties
console.log(myObject.name);  // Praveen

/// Update
// Modify the Object Properties
myObject.name = "Brendan Eich";
myObject["age"] = 42;

console.log(myObject);  // { name: 'Brendan Eich', age: 42, gender: 'Male' }


/// Delete
// Delete the property
delete myObject.name;
console.log(myObject);  // { age: 42, gender: 'Male' }

delete myObject["age"];
console.log(myObject);  // { gender: 'Male' }

