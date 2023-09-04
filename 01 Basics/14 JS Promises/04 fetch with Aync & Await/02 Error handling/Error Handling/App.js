
// Error Handling with Async and Await

const url = "https://a.ccbp.in/jokes/random";

const doNetworkCall = async () => {
    try {
        const response = await fetch(url);
        const jsonDate = await response.json();
        console.log(jsonDate);
    }
    catch(error){
        console.log(error);
    }
};

doNetworkCall();