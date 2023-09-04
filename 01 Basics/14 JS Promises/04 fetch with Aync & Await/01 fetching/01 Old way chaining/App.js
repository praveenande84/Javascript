
// then & catch

// Fetching with Chaining

const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            // statement 1
            console.log(jsonData)
        });
}

doNetworkCall();