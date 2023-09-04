// Block Scoping

// Block Scoping in Control Statements

// var keyword does not support the block scoping concept, where 'let' & 'const' does.


/* -----> Conditional Control Statements <----- */

if (true){
    var myName = "Ande Praveen";
    let Age = 27;
    const Job = "Software Engineer";
}

console.log(myName);  // Ande Praveen
// console.log(Age);  // ReferenceError: Age is not defined
// console.log(Job);  // ReferenceError: Job is not defined


/* -----> Looping Control Statements <----- */

let iterationValues = [1, 2, 3, 4, 5];
for (let counter of iterationValues){
    var fatherName = "Ande Nageswara Rao";
    let fatherAge = 56;
    const fatherJob = "Farmer";
}

console.log(fatherName);  // Ande Nageswara Rao
// console.log(fatherAge);  // ReferenceError: fatherAge is not defined
// console.log(fatherJob);  // ReferenceError: fatherJob is not defined