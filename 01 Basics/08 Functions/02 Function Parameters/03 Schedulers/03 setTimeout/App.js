
/// Functions

// callback Function

// Schedulers

/*
	The setTimeout() method executes a function after the specified time.
	setTimeout(function, delay);
	function => a callback function that is called after the specified time(delay).
	delay => time in milliseconds
*/

let setTimeoutBtnEl = document.getElementById("setTimeoutBtn")



function myMessage(){
	let message = "I am after 3 seconds";
	console.log(message)
}

// setTimeout()
setTimeoutBtnEl.onclick = function() {
    setTimeout(myMessage, 3000);
};

