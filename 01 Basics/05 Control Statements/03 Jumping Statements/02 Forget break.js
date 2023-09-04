
// Jumping Statements

// switch

// switch Example for Forget break

/*

 If there is no break statement, then the execution continues with the next case until the break statement is met.

 */


let day = 4;

switch (day){
    case 0:
        console.log("Sunday");

    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    case 4:
        console.log("Thursday");  // Thursday

    case 5:
        console.log("Friday");  // Friday

    case 6:
        console.log("Saturday");  // Saturday

    default:
        console.log("Invalid");  // Invalid
}

/*
        output:

        Thursday
        Friday
        Saturday
        Invalid

 */
