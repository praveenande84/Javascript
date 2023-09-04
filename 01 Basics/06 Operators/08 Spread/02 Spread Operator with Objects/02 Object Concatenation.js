
/// Operators

// Spread Operator

let person = {
    name:"praveen",
    age:27
};

let address = {
    city:"Hyderabad",
    pincode:533211
};

// Object concatenation
let personDetails = {...person, ...address};
console.log(personDetails);  // { name: 'praveen', age: 27, city: 'Hyderabad', pincode: 533211 }


