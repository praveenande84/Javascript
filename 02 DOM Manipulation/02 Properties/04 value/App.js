/// value
// take input from user

// Element selection through id
let inputElement = document.getElementById("inputElement");
let clickButton = document.getElementById("displayName");
let resultElement = document.getElementById("result");

clickButton.onclick = function (){
    let inputValue = inputElement.value;
    resultElement.textContent = "Hello " + inputValue;
}
