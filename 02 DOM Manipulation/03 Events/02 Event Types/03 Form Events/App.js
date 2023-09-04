// prevent the form Default action
let myFormEl = document.getElementById("myForm");
myFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});

///
// form events

// blur
// The blur event happens when a HTML element has lost focus.
let blurElement = document.getElementById("blurElement");
blurElement.addEventListener("blur", function(){
    console.log("blur event triggered");
});


// focus
let focusElement = document.getElementById("focusElement");
focusElement.addEventListener("focus", function(){
    console.log("focus event triggered");
});

// change
let changeElement = document.getElementById("changeElement");
changeElement.addEventListener("change", function(){
    console.log("change event triggered");
});

