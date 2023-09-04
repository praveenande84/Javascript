
// JS Class

// this Usage in Class


/// super class
// In class, this refers to the instance object.

class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        return this;
    }
    makeSound(){
        return `${this.name} is shouting!`;
    }
}

let animal1 = new Animal("dog");
// Here, this refers to the animal1.
console.log(animal1.eat());  // Animal { name: 'dog' }


/// sub Class
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    sniff(){
        return this;
    }
}

let dog = new Dog("dog", "german shepherd");
console.log(dog.sniff());  // Dog { name: 'dog', breed: 'german shepherd' }

