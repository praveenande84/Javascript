
// event object

let inputElement = document.createElement("input");

// event argument is used to know the event properties.
function printKeydown(event){ 
    console.log(event.type);  // keydown
    console.log(event.target);  // <input>
    console.log(event.key);  // k
}

inputElement.addEventListener("keydown", printKeydown);
document.body.appendChild(inputElement);



