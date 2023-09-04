
// block scoping
let a = 10;
{
	let b = 20;
	console.log(a); // 10
	console.log(b); // 20
}

console.log(a); // 10
// console.log(b); // Error


// if condition with scoping
let course = 'Engineering';
if (course === 'Engineering'){
	let job = 'software';
	console.log(course);// Engineering
} 
console.log(course); // Engineering
// console.log(job); // Error


// for loop with scoping
for (let i=0; i<=10; i++){
	console.log(i);  // Ok
}
// console.log(i); // Error


// functions with scoping
let greet = function(){
	let message1 = "Good Morning";
	let message2 = "Good Night";
	return message2
};
// console.log(message1); // Error

let output = greet();
console.log(output); // Good Night


// Nested functions with scopes
let x = 10;
let outerFn = () => {
	let y = 20;
	let innerFn = () => {
		let z = 30;
		console.log(x);
		console.log(y);
		console.log(z);
	};
};

outerFn();  // No output






