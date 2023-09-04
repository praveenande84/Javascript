
/// Functions

// Built-in Constructor Functions

/* -----> without Arguments <----- */

/*
    without passing any arguments to the new Date() constructor function,
    creates a new date object with the current date and local time.
    let now = new Date();
 */



let now = new Date();
console.log(now);  // 2023-06-05T16:17:00.276Z
console.log(typeof(now));  // object

/* -----> with Arguments <----- */

// dateString
/*
 let date1 = new Date(dateString);
 The new Date(dateString) creates a new date object from a date string.
 */
let dateString1 = "2023-6-5"
let date1 = new Date(dateString1);
console.log(date1);  // 2023-06-04T18:30:00.000Z

let dateString2 = "2023"
let date2 = new Date(dateString2);
console.log(date2);  // 2023-01-01T00:00:00.000Z

// short date format
// "MM/DD/YYYY"
let dateString3 = "03/25/2020"
let date3 = new Date(dateString3);
console.log(date3);  // 2023-01-01T00:00:00.000Z

// long date format
// "MMM DD YYYY"
let dateString4 = "jul 1 2021"
let date4 = new Date(dateString4);
console.log(date4);  // 2021-06-30T18:30:00.000Z


// Specific date & time
/*
    let date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    Here, months are counted from 0 to 11. january is 0 and December is 11.
    The passed argument has a specific order.
    If two numbers are passed, It represents the year, month.
 */
let date5 = new Date(2021, 1, 20, 4, 12,11,0);
console.log(date5);  // 2021-02-19T22:42:11.000Z

 // Auto Correction in Date Object
/*
 when you assign out of range values in the Date object, it auto-Corrects itself.
 let date9 = new Date(2018,0, 33);
 Jan doesn't have 33 days.
 33 days are auto corrected to 31 (jan) + 2 days in feb.
 */
let date6 = new Date(2018,0, 33);
console.log(date6);  // 2018-02-01T18:30:00.000Z


