
/// Operators

// Spread Operator

let person1 = {
    name:"praveen",
    age:27
};

// Object copy
let person2 = {...person1};
console.log(person2);  // { name: 'praveen', age: 27 }

person1.name = "Brendan Eich";

console.log(person1);  // { name: 'Brendan Eich', age: 27 }
console.log(person2);  // { name: 'praveen', age: 27 }

