
// Class
// The Class is a special type of function used for creating multiple objects.

/*
 constructor method
 The constructor method is a special method of a class for creating and initializing an object of that class.
 */


class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName(){
        return this.firstName + " " + this.lastName;
    }
}


///
// creating objects

let person1 = new Person("Virat", "Kohli");
console.log(person1);  // Person { firstName: 'Virat', lastName: 'Kohli' }

let person2 = new Person("Sachin", "Tendulkar");
console.log(person2);  // Person { firstName: 'Sachin', lastName: 'Tendulkar' }


///
// Prototype property of a class
console.log(Person.prototype);  // {}


///
// prototype of an Instance
// The Instance prototype refers to the prototype object of the constructor function.
console.log(Object.getPrototypeOf(person2));  // {}



