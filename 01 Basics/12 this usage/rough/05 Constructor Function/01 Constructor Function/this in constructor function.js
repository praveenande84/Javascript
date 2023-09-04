
// this in constructor function
// In constructor function, this refers to the instance object.

function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
      console.log(this);  // Car { color: 'blue', brand: 'Audi', start: [Function (anonymous)] }
    };
}

let car1 = new Car("blue", "Audi");
car1.start();

// this refers to the car1 object.
