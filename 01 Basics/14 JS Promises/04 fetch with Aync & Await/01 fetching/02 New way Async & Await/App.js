

// async/await
// Fetch with Async and Await

/*
 Use async keyword before the function only if it is performing async operations.
 should use await inside an async function only.
 */

const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
    const response = await fetch(url);
    const jsonDate = await response.json();
    console.log(jsonDate);
};

doNetworkCall();