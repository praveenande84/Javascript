// JS Promises

/*
 promises concept using callbacks
 promises has two arguments
 */


// callback JS Promise
let doTask = function(success,failure){
	// doing the task
	let isDone = true;
	if(isDone){
		success('Task is Done');
	}
	else{
		failure('Task is Not Done');
	}
};

let yes = function(message){
    console.log(message);
};

let no = function(message){
    console.log(message);
};

doTask(yes,no);  // Task is Done
