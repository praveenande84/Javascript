
/// Functions

// callback Function
// schedulers

// setInterval & clearInterval

let setIntervalBtnEl = document.getElementById("setIntervalBtn");
let clearIntervalBtnEl = document.getElementById("clearIntervalBtn");

let uniqueId = null;

setIntervalBtnEl.onclick = function() {
    let counter = 0;
    uniqueId = setInterval(function() {
        console.log(counter);
        counter = counter + 1;
    }, 1000);
};

// clearInterval()

/*
    clearInterval() cancels a schedule previously set up calling setInterval().
    To execute clearInterval(), we need to pass the uniqueId returned by setInterval().
	let uniqueId = setInterval(function, delay);
    uniqueId variable that saves the id returned by setInterval()
*/

// cancelling setInterval()
clearIntervalBtnEl.onclick = function() {
    clearInterval(uniqueId);
    console.log("Interval cleared");
};