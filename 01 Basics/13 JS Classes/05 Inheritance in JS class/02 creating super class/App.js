// JS Class


class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        return `${this.name} is eating`;
    }
    makeSound(){
        return `${this.name} is shouting`;
    }
}


let gorillaObj = new Animal("Gorilla");

console.log(gorillaObj);  // Animal { name: 'Gorilla' }
console.log(gorillaObj.eat());  // Gorilla is eating


