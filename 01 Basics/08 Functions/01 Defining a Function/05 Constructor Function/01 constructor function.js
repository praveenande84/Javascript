
/// Functions

// constructor Function

/*
 A regular function that returns a new object on calling with the new operator. The created new object is called an Instance.
 The Function name should follow the PascalCase naming convention.

 The new Operator when a function is called with the new operator, it does the following steps:
    => creates an empty object and assigns it to this
    => returns 'this' object
*/


function MyCar(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
}

let car1 = new MyCar("blue", "Audi");
console.log(car1);  // MyCar { color: 'blue', brand: 'Audi', start: [Function (anonymous)] }

/*
 Here,
 car1 is an instance
 car1.start() is an instance method
 car1.color & car1.brand are instance properties
*/




