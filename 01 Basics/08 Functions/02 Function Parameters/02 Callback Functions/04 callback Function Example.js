
// Callback Function Examples

// callback functions
let sum = function(a, b){
	return a + b;
};

let mul = function(a, b){
	return a * b;
};


// Common Function
let calculate = function(a, b, callback){
	let result = 0;
    result = callback(a, b);
	return result;
};


let output = calculate(10,20,sum);
console.log(output);  // 30

output = calculate(10,20,mul);
console.log(output);  // 200


// function declaration
output = calculate(10,20,function(a,b){
	// subtraction
	return a - b;
});
console.log(output);  // -10


//arrow function
output = calculate(10,20,(a,b) => {
	// division
	return a / b;
});
console.log(output);  // 0.5







// Old way
/*

let calculate = function(a,b,calType){
	let result = 0;
	if (calType === 'sum'){
		result = a+b;
	}
	else if (calType === 'mul'){
		result = a*b;
	}
	return result;
};


let output = calculate(10,20,"sum");
console.log(output)

output = calculate(10,20,"mul");
console.log(output)

*/