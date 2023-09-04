// Mutable

// All Objects are Mutable.
// Object, Array, Function


let x = {value:5};
let y = x;

let z = {value:20};
y.value = 10;

console.log(x);  // { value: 10 }
console.log(y);  // { value: 10 }

y = z;
console.log(x);  // { value: 10 }
console.log(y);  // { value: 20 }



