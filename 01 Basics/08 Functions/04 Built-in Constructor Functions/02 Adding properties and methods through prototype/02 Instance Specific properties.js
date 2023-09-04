
// prototype
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let person1 = new Person("Virat", "kohli");
console.log(Object.getOwnPropertyNames(person1));  // [ 'firstName', 'lastName' ]