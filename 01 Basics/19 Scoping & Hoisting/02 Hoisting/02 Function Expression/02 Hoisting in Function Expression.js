

// Hosting
// Function Expression

// Function expressions in javascript are not hoisted.

myFunction();  // we get error.


// Cannot access 'myFunction' before initialization
let myFunction = function(){
    let x = 5;
    console.log(x);  // ReferenceError: Cannot access 'myFunction' before initialization
}

