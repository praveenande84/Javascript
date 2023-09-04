
// scope

// Block scope

/*
    If a variable is declared with const or let within a curly brace({}), then it is said to be defined in the Block Scope.
    if-else, function(){}, switch, for-of, ...etc
 */



let age = 27;
if(age > 18){
    let x = "block";
    console.log(x);  // block
}

console.log(x);  // Reference Error



