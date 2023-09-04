/// Operators

// conditional operators

// ==   ===   !=   !===   <   >   <=   >=

x = 10;
y = 20;
z = "10";

//  loose equal to
// It checks only value not its datatype
// Loose equality compares two values for equality but does not compare types of values.
console.log(x == z);  // true

// strict equal to
// It checks both value and datatype also.
// Strict equality compares two values for equality including types of values.
console.log(x === z);  // false

// loose not equal to
// It checks only value not its checks datatype
console.log(x != z);  // false


// strict not equal to
// It checks only value not its checks datatype
console.log(x !== z);  // true


// less than
console.log(x < y);  // true

// greater than
console.log(x > y);  // false


// less than or equal to
console.log(x <= y);  // true

// greater than or equal to
console.log(x >= y);  // false

