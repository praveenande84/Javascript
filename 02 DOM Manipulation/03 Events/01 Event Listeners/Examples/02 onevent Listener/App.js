/// Event

// click
// adding Event Listener Dynamically

// Element selection through id
let headingElement = document.getElementById("heading-element");
let buttonElement = document.getElementById("click-event");

// This Function will Run when click on the Button
function changeTextContent(){
  headingElement.textContent = "New Text Content";
};

buttonElement.onclick = function() {
  changeTextContent();
};



