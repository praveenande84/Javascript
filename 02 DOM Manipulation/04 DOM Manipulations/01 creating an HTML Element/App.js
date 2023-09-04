/// DOM Manipulations

// createElement()
// appendChild()

// Element selection through id
let myContainer = document.getElementById("myContainer");

// creating an HTML element
let headingElement = document.createElement('h1');
headingElement.textContent = "Hello World";
console.log(headingElement);

// adding an Element at End.
// Appending to Existing myContainer Element
myContainer.appendChild(headingElement);

