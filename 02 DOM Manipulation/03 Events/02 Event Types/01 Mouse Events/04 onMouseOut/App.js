/// Event
// onMouseOut

// Element selection through id
let headingElement = document.getElementById("heading-element");
let buttonElement = document.getElementById("click-event");

// This Function will Run when cursor left from Button.
function changeTextContent(){
  headingElement.textContent = "New Text Content";
};

buttonElement.onmouseout = function() {
  changeTextContent();
};



