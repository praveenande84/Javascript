/// Functions

// Callback Function


function displayGreeting(displayName) {
    console.log("Hello");
    displayName();  // Praveen
    console.log("Good Morning!");
}
function displayPraveen() {
    console.log("Praveen");
}

// passing a Function Name as an Argument
displayGreeting(displayPraveen);

/*
output:
        Hello
        Rahul
        Good Morning!
 */
