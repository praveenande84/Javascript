// JS Class

// creat a single object with class
class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName(){
        return this.firstName + " " + this.lastName;
    }
}




let person1 = new Person("virat", "kohli");
let person2 = new Person("Sachin", "Tendulkar");

console.log(person1);  // Person { firstName: 'virat', lastName: 'kohli' }
console.log(person2);  // Person { firstName: 'Sachin', lastName: 'Tendulkar' }


console.log(typeof(Person));  // function


