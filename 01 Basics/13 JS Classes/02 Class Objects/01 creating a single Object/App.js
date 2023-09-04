
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
let output1 = person1.displayFullName();
console.log(output1);  // virat kohli

