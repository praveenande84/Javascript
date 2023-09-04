// addEventListener()

/*
	It is a modern approach to add an event listener.
	element.addEventListener(event, function);
	element => HTML element
	event => event name
	function => callback function
*/

// htmlElement.addEventListener(eventName, callbackFunction);
let greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function(){
    console.log("addEventListener is working");
});