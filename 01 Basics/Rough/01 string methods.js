
// string

let firstName = "Ande";
let lastName = "Praveen";

// string concatenation
// Here, Addition operator is used to string concatenation
let fullName = firstName + lastName;
console.log(fullName); // AndePraveen

a = 10;
b = "20";
let result = a + b;
console.log(result);  // 1020
console.log(typeof(result));  // string

a = 10;
b = 20;
result = a + b + "hello" + a + b;
console.log(result);  // 30hello1020  // //calculations starts from left to right


///
// ES6 string concatenation
result = `my full is ${firstName} ${lastName}`;
console.log(result);  // my full is Ande Praveen