
// JS Promises

// Rejected State

/*
 Fetching a resource can be failed for various reasons like:

URL is spelled incorrectly.
Server is taking too long to respond.
Network failure error,...etc
 */



const url = "https://a.ccbp.in/random";  // Wrong url
let responsePromise = fetch(url);

responsePromise.then((response) => {
    console.log(response);
});

responsePromise.catch((error) => {
    console.log(error);  // TypeError {"failed to fetch}
});

console.log("fetching done");  // fetching done



