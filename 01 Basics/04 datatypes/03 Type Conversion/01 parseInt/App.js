/// Type conversion

/*

 In javascript, when we combine the number and string, it returns a string.
 number + string => string

 */

/* -----> without parseInt() <----- */
let a = 10;
let b = "20";
let c = a + b;
console.log(c);  // 1020
console.log(typeof(c));  // string

/* -----> with parseInt() <----- */
// parseInt() function accepts a string and converts it into an integer.

console.log(typeof(b));  // string

// conversion from string to integer
let d = parseInt(b);
console.log(typeof(d));  // number

let total = a + d;
console.log(total);  // 30
console.log(typeof(total)); // number




