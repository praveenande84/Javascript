/// textContent
// To manipulate the text within the HTML Element, we use textContent Property.

// Element selection through id
let headingElement = document.getElementById("heading-element");

// Element Old Content
// Select the text Content of html Element
console.log(headingElement.textContent);

// Element Content changed to New Content
// manipulating the text content of html Element
headingElement.textContent = "New Text Content";
console.log(headingElement);

// Element New Content
console.log(headingElement.textContent);