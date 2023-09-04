
// this

// this refers to the Object on which we call our function.



const myObject = {
    // sayHello function is stored in Local Scope(myObject).
    sayHello:function(){
        console.log("Hello", this);  // myObject
        // sayBye function is stored in Global Scope(window)
        var sayBye = function(){
            console.log("Bye", this)  // window
        }
        sayBye();
    }
};

myObject.sayHello();