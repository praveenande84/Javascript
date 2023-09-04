
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

class Dog extends Animal{
    constructor(name, breed) {
        super(name);
        this.bread = breed;
    }
    sniff(){
        return `${this.name} is sniffing`;
    }
}


let someDog = new Dog("someDog", "German shepherd");
console.log(someDog);  // Dog { name: 'someDog', bread: 'German shepherd' }

console.log(someDog.sniff());  // someDog is sniffing

console.log(someDog.eat());  // someDog is eating
console.log(someDog.makeSound());  // someDog is shouting