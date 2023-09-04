
// Fetch Methods

// PUT
// The PUT method can be used to update the existing resource.

let data = {
    name: "Swathi",
};

let userId = 2330494;

let url = `https://gorest.co.in/public-api/users/${userId}`;

let options = {
    method: "PUT",
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
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
    });