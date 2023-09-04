
/// Functions

// Default JS Function Properties

// constructor function
function MyCar(color, brand){
    this.color =color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
}

/* -----> name <----- */
// The name property returns the name of the function.
console.log(MyCar.name);  // MyCar


/* -----> length <----- */
// The length property returns the number of parameters passed to the function.
console.log(MyCar.length);  // 2

/* -----> typeof <----- */
// The typeof function returns the type
console.log(typeof(MyCar));  // function


/* -----> constructor <----- */
// Every Object in javascript has a constructor property.
// The constructor property refers to the constructor function that is used to create the object.
let car1 = new MyCar("blue", "Audi");
console.log(car1.constructor);  // [Function: MyCar]




