let myFormEl = document.getElementById("myForm");

myFormEl.addEventListener("submit", function(event) {
    // prevent the Default behaviour
    event.preventDefault();
});

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
nameEl.addEventListener("blur", function(event) {
    // console.log("Blur event triggered!");
    // if (nameEl.value === ""){}
    if (event.target.value === "") {
        // required* warning message
        nameErrMsgEl.textContent = "Required*";
    } else {
        // nothing
        nameErrMsgEl.textContent = "";
    }
});

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
emailEl.addEventListener("blur", function(event) {
    // console.log("Blur event triggered!");
    // if (nameEl.value === ""){}
    if (event.target.value === "") {
        // show required* warning message
        emailErrMsgEl.textContent = "Required*";
    } else {
        // show nothing
        emailErrMsgEl.textContent = "";
    }
});