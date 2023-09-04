
/// Functions

// Callback Function

function displayGreeting(displayName) {
    console.log("Hello");
    displayName();  // Praveen
    console.log("Good Morning!");
}

let displayPraveen = function() {
    console.log("Praveen");
};

// passing Function Expression as an Argument
displayGreeting(displayPraveen);

/*
output:
        Hello
        Praveen
        Good Morning!
 */