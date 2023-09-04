
// Scoping

// Functions scope var, let, const
let greeting = () => {
    var message1 = 'Good Morning';
    let message2 = 'Good Afternoon';
    const message3 = 'Good Evening';
};

// Any type of keyword we can't use outside of the function.

// console.log(message1) // ReferenceError: message1 is not defined
// console.log(message2) // ReferenceError: message2 is not defined
// console.log(message3) // ReferenceError: message3 is not defined