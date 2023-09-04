
// Object

/*
 javascript Identifiers => names
 Rules:
      It can contain alphanumeric characters, _, $
      It cannot start with number
---------------------------------------
 Example:
         name
         $name
         _name
         name26

// To use Invalid Identifier as key we have to specify them in quotes.
// Invalid Identifiers are used is bad practice.

 */

let person ={
    firstName : "Ande",
    $lastName : "Praveen",
    _city:"Hyderabad",
    "1":"value1",  // Invalid Identifier use in between double quotations
    "my choice":"value2"  // Invalid Identifier use in between double quotations
}
console.log(person);  // { firstName: 'Ande', '$lastName': 'Praveen', _city: 'Hyderabad', '1': 'value1',  'my choice': 'value2'}
