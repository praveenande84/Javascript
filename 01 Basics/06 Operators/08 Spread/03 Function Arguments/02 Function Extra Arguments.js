/// Operators

// Spread Operator

function add(a, b, c){
    return a + b + c;
}

let numbers = [1, 2, 3, 4, 5];

let output = add(...numbers);  // Extra values can be ignored
console.log(output);  // 6
