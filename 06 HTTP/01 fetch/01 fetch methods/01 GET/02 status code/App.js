// GET

// http request
// fetch(url, options);
let url = "https://gorest.co.in/public-api/users";
let options = {
    method:"GET"
};

fetch(url, options)
.then(function(response){
	let statusCode = response.status;
    return statusCode;
})
.then(function(statusCode){
    console.log(statusCode);
    });


