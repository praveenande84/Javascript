
// Predefined Object

// Math

// Math.random()
// Every time random() method gives a different float value from 0 t0 less than 1.
console.log(Math.random());  // 0.36743209441713964

// Math.ceil(value)
// The Math.ceil() function always rounds a float number up to the next largest integer.
// convert float random number to integer random number
let floatRandom = Math.random();
console.log(floatRandom);  // 0.6541296582490979

floatRandom = floatRandom * 100
let integerRandom = Math.ceil(floatRandom);
console.log(integerRandom);  // 66

