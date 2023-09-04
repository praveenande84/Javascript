
// classList.toggle()
// the classList.toggle() method is used to toggle between adding and removing a class name from an HTML element.

// element selection through id
let headingElement = document.getElementById("headingElement");
let toggleButton = document.getElementById("toggleButton");

toggleButton.onclick = function (){
    headingElement.classList.toggle("heading-element");
}

// We can replace classList.add() and classList.remove() methods with classList.toggle() method.