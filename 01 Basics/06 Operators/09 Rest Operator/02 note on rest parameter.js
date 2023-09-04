

// Rest Parameter


// The Rest parameter should be the last parameter
function numbers(a, b, ...rest) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // [3, 4, 5]
}
numbers(1, 2, 3, 4, 5);