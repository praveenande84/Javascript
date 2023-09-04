
// this

// Arrow Function
// where was the Function defined.

const myObject1 = {
    sayHello:function(){
        var hello = function(){
            console.log("Hello", this);
        }
        hello();
    }
};

const myObject2 = {
    sayBye:function(){
        var bye = () => {
            console.log("Bye", this);
        }
        bye()

    }
};

myObject1.sayHello();
myObject2.sayBye();