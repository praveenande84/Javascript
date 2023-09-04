
// scope
// Global scope
/*
   If a variable is declared outside all functions and curly braces({}), then it is said to be defined in the Global Scope.
   When a variable declared with let or const is accessed, javascript searches for the variable in the block scopes first followed by global scopes.
*/

const x = 30;
function myFunction(){
    if (x > 18){
        console.log(x);  // 30
    }
}

myFunction(); // 30
