// keyup event occurs when a key is released.

//htmlElement.addEventListener("keyup",callbackFunction);

let inputElement = document.createElement("input");

function printKeyup(){
    console.log("Key released");
}

inputElement.addEventListener("keyup", printKeyup);
document.body.appendChild(inputElement);



