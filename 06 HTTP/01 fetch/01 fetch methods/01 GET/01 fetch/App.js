
// GET
// The GET method can be used to retrieve (get) data from a specified resource.

let url = "https://gorest.co.in/public-api/users";

let options = {
    method:"GET"
};

fetch(url, options);

// promise Object
console.log(fetch(url, options));


