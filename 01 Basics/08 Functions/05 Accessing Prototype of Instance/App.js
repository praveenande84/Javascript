
/// Functions

function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("started");
    };
}

console.log(Car.prototype);

let car1 = new Car("blue", "Audi");
console.log(Object.getPrototypeOf(car1));
