

/// Functions

// Factory Function

/*
    Factory Function shorthand
    variableName and variableValue name must match.
 */

function createCar(color, brand){
    return{
        color,
        brand,
        start(){
            console.log("started");
        }
    };
}

let car1 = createCar("Blue", "Audi");
let car2 = createCar("Green", "Tata");
let car3 = createCar("White", "BMW");

console.log(car1);  // { color: 'Blue', brand: 'Audi', start: [Function: start] }
console.log(car2);  // { color: 'Green', brand: 'Tata', start: [Function: start] }
console.log(car3);  // { color: 'White', brand: 'BMW', start: [Function: start] }