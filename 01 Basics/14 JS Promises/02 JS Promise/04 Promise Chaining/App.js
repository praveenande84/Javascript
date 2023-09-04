// JS Promises

/*
Promise Chaining
combining multiple .then() or .catch() to a single promise is called promise chaining.
Fetch with Error Handling
check the behaviour of code with valid and invalid URLs.
 */


const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise
    .then((response) => {
        return response.json();
    })
    .then((jsonDate) => {
        console.log(jsonDate);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("fetching done");  // fetching done

