
/// this

// Regular Functions

// this refers to the Object on which we call our function.

// This function declaration is stored in window object.
function displayName(){
    console.log(this);
}

// Javascript take default window Object
displayName(); // It refers to the window Object.

// we can call like this also.
window.displayName();// It refers to the window Object.