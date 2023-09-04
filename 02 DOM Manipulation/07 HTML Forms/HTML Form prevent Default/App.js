
// Whenever we click a button or press Enter key while editing any input field in the form, the submit event will be triggered.

// preventDefault()
// The preventDefault() method prevents the occurence of default action.

let myFormEl = document.getElementById("myForm");

myFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});

