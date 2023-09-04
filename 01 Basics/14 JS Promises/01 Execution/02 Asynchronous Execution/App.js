

// Asynchronous Execution

const url = "https://apis.ccbp.in/jokes/random";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        // statement 1
        console.log(jsonData)
    });


// statement 2
console.log("fetching done");


// The second statement won't wait until the first statement execution.
// In JS fetch() works asynchronously.
