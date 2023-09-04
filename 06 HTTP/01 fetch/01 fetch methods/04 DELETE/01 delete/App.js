
// Fetch Methods

// DELETE
// The DELETE method can be used to delete the specified resource.

let userId = 2330494;
let url = `https://gorest.co.in/public-api/users/${userId}`;

let options = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 40a295fcbe815a229e01bb85aad312cb10d4131d85169838b03ad5b622ea959b"
    }

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