/// Functions

// callback Function
// schedulers

// clearTimeout()

/*
	we can cancel the setTimeout() before it executes the callback function using the clearTimeout() method.
	To execute clearTimeout(), we need to pass the uniqueId returned by setTimeout() as an argument.
	clearTimeout(uniqueId);
*/

let setTimeoutBtnEl = document.getElementById("setTimeoutBtn");
let clearTimeoutBtnEl = document.getElementById("clearTimeoutBtn");


function myMessage(){
	let message = "I am after 3 seconds";
	console.log(message)
}

let uniqueId = null;

setTimeoutBtnEl.onclick = function() {
    uniqueId = setTimeout(myMessage, 3000);
};


// clearTimeout()
clearTimeoutBtnEl.onclick = function (){
    clearTimeout(uniqueId);
    console.log("Scheduler Cancelled");
};
