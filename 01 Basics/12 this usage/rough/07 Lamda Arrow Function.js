// Creation of  functions in JavaScript
// 1) Normal Function
// 2) Function Expression
// 3) Arrow Function


//Limitation of an Arrow function with an object.
let student = {
	firstName : 'Arjun',
	lastName : 'Reddy',
	fullName : function(){
		return "Arjun Reddy";
	}
};
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName());  // fullName called as a fuunction


//Limitation of an Arrow function with an object.
student = {
	firstName : 'Arjun',
	lastName : 'Reddy',
	fullName : function(){
		return `${this.firstName} ${this.lastName}`;  // this means same object
	}
};
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName());  // fullName called as a function


//Limitation of an Arrow function with an object.
// convert to Arrow function
student = {
	firstName : 'Arjun',
	lastName : 'Reddy',
	fullName : () => {  // this keyword not work here
		return `${student.firstName} ${student.lastName}`;  // this means same object
	}
};
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName());  // fullName called as a fuunction






