
// JS Promises
// Resolved State

const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise.then((response) => {
    console.log(response);
});

console.log("fetching done");  // fetching done

