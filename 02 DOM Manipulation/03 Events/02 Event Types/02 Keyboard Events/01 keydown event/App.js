// keydown event occurs when a key is presses down.

//htmlElement.addEventListener("keydown",callbackFunction);

let inputElement = document.createElement("input");

function printKeydown(){
    console.log("Key pressed");
}

inputElement.addEventListener("keydown", printKeydown);
document.body.appendChild(inputElement);



