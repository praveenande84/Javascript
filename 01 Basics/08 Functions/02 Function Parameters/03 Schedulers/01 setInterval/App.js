
/// Functions

// callback Function
// schedulers

// setInterval()

/* 
	setInterval(function, delay)
	The setInterval() method allows us to run a function at the specified interval of time repeatedly.
	1 second = 1000 milliseconds
	delay must in milliseconds
*/

let counter = 0;

function countIncrease(){
    console.log(counter)
    counter += 1
}

// In the setInterval() method, the callback function repeatedly executes until the browser tab is closed or the scheduler is cancelled.
// when we call the setInterval() method, it returns a unique 'Id'. This unique 'Id' is used to cancel the callback function execution.
setInterval(countIncrease, 1000);