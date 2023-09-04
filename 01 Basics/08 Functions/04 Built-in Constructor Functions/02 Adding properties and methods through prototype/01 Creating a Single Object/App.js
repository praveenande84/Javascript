
/// prototype

// creating single object
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


Person.prototype.displayFullName = function(){
    return this.firstName + " " + this.lastName;
}

let person1 = new Person("Virat", "Kohli");
let person2 = new Person("Sachin", "Tendulakar");

console.log(person1);  // Person { firstName: 'Virat', lastName: 'Kohli' }
console.log(person2);  // Person { firstName: 'Sachin', lastName: 'Tendulakar' }

console.log(person1.displayFullName());  // Virat Kohli
console.log(person2.displayFullName());  // Sachin Tendulakar



console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));  // true