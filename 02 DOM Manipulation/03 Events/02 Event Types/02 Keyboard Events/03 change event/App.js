
// change

// selectBox
let selectBox = document.getElementById("courseSelect");
selectBox.addEventListener("change", function(){
    let displayedOptionElement = document.getElementById("displayedOption");
    let selectedOption = selectBox.value;
    displayedOptionElement.textContent = selectedOption;
});



// checkbox

let currentAddressElement = document.getElementById("currentAddress");
let permanentAddressElement = document.getElementById("permanentAddress");
let checkBoxElement = document.getElementById("addCheck");
checkBoxElement.addEventListener("change", function(){
    if (checkBoxElement.checked){
        let currentAddress = currentAddressElement.value;
        permanentAddressElement.value = currentAddress;
    }
    else{
        permanentAddressElement.value = "";
    }
    
});


