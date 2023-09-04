// GET

// http request
// fetch(url, options);
let url = "https://gorest.co.in/public-api/users";
let options = {
    method:"GET"
};

fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
            console.log(jsonData);
        }
    );



