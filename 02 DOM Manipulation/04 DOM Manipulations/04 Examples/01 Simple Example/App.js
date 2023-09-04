

// createElement()
// creating an HTML Element
let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";
console.log(h1Element);  // <h1>Web Technologies</h1>



// appendChild()
// Appending to an HTML Element
document.body.appendChild(h1Element);

// Appending to Existing Container Element
let pElement = document.createElement("p");
pElement.textContent = "Web Technologies are very important now a days."
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(pElement);
