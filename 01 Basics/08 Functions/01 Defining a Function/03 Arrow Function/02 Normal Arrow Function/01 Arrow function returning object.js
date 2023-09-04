
/// Functions

// Arrow function

/* -----> Arrow function returning object <----- */

let createUser1 = (first, last) => {
    return{
        firstName:first,
        lastName:last
    };
};

let output1 = createUser1("Ande", "Praveen");

console.log(output1);  // { firstName: 'Ande', lastName: 'Praveen' }



// Arrow function returning object with single line
// compulsory we use round brackets for returning object
let createUser2 = (first, last) => ({firstName:first, lastName:last});

let output2 = createUser2("Brendan", "Eich");

console.log(output2);  // { firstName: 'Brendan', lastName: 'Eich' }
