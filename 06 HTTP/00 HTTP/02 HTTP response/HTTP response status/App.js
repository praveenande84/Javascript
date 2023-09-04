

// HTTP response properties and methods

let url = "https://gorest.co.in/public-api/users"

let options = {
    method:"GET"
};

fetch(url, options)
    .then(function(response){
        return response.status;
    })
    .then(function(status){

        // 200 when the request is success
        console.log(status);  // 200

    });


// check out these also
// url, text(), json() ...etc