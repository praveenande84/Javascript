
/// this

/*
 var keyword
 this refers to the Object on which we call our function.
 */

// This variable is stored in window Object (Global Scope).
var name = "Ande Praveen";


// This Function Declaration is stored in window Object (Global Scope).
function displayName(){
    console.log(this.name)
}

window.displayName();  // Ande Praveen