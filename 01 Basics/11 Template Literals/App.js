// Template Literals (Template Strings)


/*
   The Template Literals are enclosed by the backticks. => ` `
   we can include the variable or expressions using a dollar sign with curly braces. => ${}
 */


// backticks => ``

let myName = "Ande Praveen";
let output = `Hello ${myName}`;
console.log(output);  // Hello Ande Praveen


console.log(`Addition is ${4 + 5}.`);  // Addition is 9.


// Access object property

let person = {
    city: "Hyderabad"
};

console.log(`My city name is ${person.city}`);  // My city name is Hyderabad


// Multiline string

console.log(
`firstLine
SecondLine
ThirdLine`
);


// output :
/*
    firstLine
    SecondLine
    ThirdLine
 */


