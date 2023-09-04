
// JS Promises

// Fetching
const url = "https://apis.ccbp.in/jokes/random";
let responseObject = fetch(url);

console.log(responseObject);  // Pending

console.log("fetching done"); // fetching done