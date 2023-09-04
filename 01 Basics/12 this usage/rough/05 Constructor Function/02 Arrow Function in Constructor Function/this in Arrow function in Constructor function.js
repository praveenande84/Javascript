
///
// this Arrow function in constructor function

// Arrow functions
function MyCar(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = () => {
        console.log(this);  // MyCar { color: 'blue', brand: 'Audi', start: [Function (anonymous)] }
    };
}

let car2 = new MyCar("blue", "Audi");
car2.start();

