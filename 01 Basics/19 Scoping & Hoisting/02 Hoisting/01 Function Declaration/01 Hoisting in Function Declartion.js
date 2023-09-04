

// Hosting

//  function Declarations
/*
 Hoisting is a javascript mechanism where function declarations are moved to the top of their scope before code execution.
 */

let x = 15;
let y = 10;
let result = add(x, y);
console.log(result);  // 25

function add(a, b){
    return a + b;
}

