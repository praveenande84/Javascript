

// Modern way of creating an Array

let myArray = [1, 2, 3];
console.log(myArray);  // [ 1, 2, 3 ]
console.log(typeof(myArray));  // object

myArray.unshift("firstItem");
myArray.push("lastItem");

console.log(myArray);  // [ 'firstItem', 1, 2, 3, 'lastItem' ]