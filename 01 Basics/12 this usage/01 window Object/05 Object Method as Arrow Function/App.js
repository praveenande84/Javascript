
// this

// this refers to the Object on which we call our function.


// Object Method as Arrow Function
const myObject = {
    firstName:"Ande",
    lastName:"Praveen",
    displayName:() => {
        console.log(this);
    }
};
myObject.displayName();  // window Object
