

// Hoisting
// Arrow Function

// Arrow Functions in javascript are not hoisted.

myFunction();

// Cannot access 'myFunction' before initialization
let myFunction = () => {
    let x = 5;
    console.log(x);  // ReferenceError: Cannot access 'myFunction' before initialization
};
