
/// Functions

// Factory Function

/*
  A factory function is any function that returns a new object for every function call.
  The function name should follow the camelCase naming convention.
*/

function createCar(color, brand){
    return{
        color:color,
        brand:brand,
        start:function(){
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


