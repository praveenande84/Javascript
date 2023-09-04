// Fetch Methods

// POST
// The POST method can be used to send data to the server.


let data = {
    name: "Praveen",
    email: "praveenande85@gmail.com",
    gender: "Male",
    status: "Active"

};

let url = "https://gorest.co.in/public-api/users";
let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 40a295fcbe815a229e01bb85aad312cb10d4131d85169838b03ad5b622ea959b"
    },
    body: JSON.stringify(data)
};

// http request
// fetch(url, options);

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
    });