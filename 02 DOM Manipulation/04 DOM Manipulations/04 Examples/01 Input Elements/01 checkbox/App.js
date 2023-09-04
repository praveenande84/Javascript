
/// create checkbox input
let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myDynamicCheckbox";
document.body.appendChild(inputElement);


/// create label Element
let labelElement = document.createElement("label");
labelElement.textContent = "Dynamic checkbox";
// we can use htmlFor property to add HTML for attribute to the HTML label element.
labelElement.htmlFor = "myDynamicCheckbox";
// The setAttribute() method
// we can use setAttribute() method to set any HTML attribute name and its corresponding value.
// If the attribute already exists, the value is updated.otherwise, a new attribute is added with the specified name and value.
// Element.setAttribute(name, value);
labelElement.setAttribute("for", "myDynamicCheckbox");
document.body.appendChild(labelElement);




