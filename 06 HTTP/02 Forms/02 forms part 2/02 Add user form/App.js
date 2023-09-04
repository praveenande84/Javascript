let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};

let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    // console.log(formData);
});

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

let genderFemaleEl = document.getElementById("genderFemale");
genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});


let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 40a295fcbe815a229e01bb85aad312cb10d4131d85169838b03ad5b622ea959b"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public-api/users/";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422){
                if (jsonData.data[0].message === "has already been taken"){
                    emailErrMsgEl.textContent = "Email Already Exists";
                }
            }
        });
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    // Form validations
    submitFormData(formData);

});