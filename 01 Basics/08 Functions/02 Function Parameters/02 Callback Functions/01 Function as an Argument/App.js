/// Functions

// Callback Function

function displayGreeting(displayName) {
    console.log("Hello");
    displayName();  // Praveen
    console.log("Good Morning!");
}

// passing Function as an Argument
displayGreeting(function() {
    console.log("Praveen");
});

/*
output:
        Hello
        Praveen
        Good Morning!
 */

