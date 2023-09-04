
/// Functions

// Built-in Constructor Functions

/// Date Object Instance methods

let myDate = new Date(1947,7,15,1,3,15,0);

/* -----> Access the Date Object <----- */

let year = myDate.getFullYear();
console.log(year);  // 1947

let month = myDate.getMonth();
console.log(month);  // 7

/* -----> Modify the Date Object <----- */

myDate.setFullYear(2023);
console.log(myDate);  // 2023-08-14T19:33:15.000Z

myDate.setMonth(5);
console.log(myDate);  // 2023-06-14T19:33:15.000Z
