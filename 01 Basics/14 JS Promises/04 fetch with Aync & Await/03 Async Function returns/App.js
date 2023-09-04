
// Async Function always returns Promise

const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
};

const asyncPromise = doNetworkCall();  // Promise
console.log(asyncPromise);  // Object

