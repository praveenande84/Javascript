/// Object

// Array as a property value

let person = {
    name:"Praveen",
    age: 27,
    car:{
        brand: "Audi",
        model: "A6",
        color: "White",
    }
};

console.log(person.car.brand);  // Audi
console.log(person.car["model"]);  // A6