/// Attribute
// manipulating the value of src attribute

// Element selection through id
let buttonElement = document.getElementById("button-element");
let flowerImage = document.getElementById("flower-image");

function changeImage() {
    flowerImage.src = "blue-rose.jpg";
}

buttonElement.onclick = function () {
    changeImage();
}


