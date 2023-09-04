/// Operators

// Spread Operator

function add(a, b, c){
    return a + b + c;
}

let numbers = [1, 2, 3];

let output = add(...numbers);
console.log(output);  // 6