

// setAttribute()
// To set a value of an attribute for a specified element, we use setAttribute() method.
// If the attribute already exists, the value of the attribute gets updated.

// element.setAttribute(attribute, value);

// create checkbox
let inputElement = document.createElement("input");
inputElement.setAttribute("type", "checkbox");
inputElement.setAttribute("id", "myCheckBox");

document.body.appendChild(inputElement);

// create label
let labelElement = document.createElement("label");
labelElement.textContent = "Graduated";
labelElement.setAttribute("for", "myCheckBox");  // we use direct attribute name

document.body.appendChild(labelElement);