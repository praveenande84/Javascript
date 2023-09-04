
// const with an object

// Mutating Object properties
const car = {
    color:"blue",
    brand:"Audi"
};
console.log(car);  // { color: 'blue', brand: 'Audi' }

//Internal properties can be changed.
car.color = "red";
console.log(car.color);  // red

// But, object can't be reassigned
// const car = {}; // TypeError: Assignment to constant variable

