
/// Operators

// Rest operator

//  ...

// rest parameter
// with rest parameter, we can pack multiple values into an array.

function numbers(...rest){
    console.log(rest);
}

numbers(1, 2, 3);  // [ 1, 2, 3 ]