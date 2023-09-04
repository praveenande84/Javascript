
/// Operators

// Spread Operator

let person = {
    name:"praveen",
    age:27
};


// Merging
let personDetailsExtend = {...person, city:"Hyderabad"};
console.log(personDetailsExtend);  // { name: 'praveen', age: 27, city: 'Hyderabad' }