
// this

// this refers to the Object on which we call our function.


// Object Method as Function Declaration
const myObject = {
    firstName:"Ande",
    lastName:"Praveen",
    displayName:function(){
        console.log(this);  // myObject
    }
};
myObject.displayName();  
