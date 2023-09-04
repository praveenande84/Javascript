/// Event
// onDoubleClick

// Element selection through id
let headingElement = document.getElementById("heading-element");
let buttonElement = document.getElementById("click-event");

// This Function will Run when Double-Click on the Button.
function changeTextContent(){
  headingElement.textContent = "New Text Content";
};

buttonElement.ondblclick = function() {
  changeTextContent();
};



