
// this

// this refers to the Object on which we call our function.



// This function declaration is stored in window object.
function displayName(){
    console.log(this.name, this);
}

const myObject = {
    name:"Ande Praveen",
    displayName:displayName
};

var name = "Brendan Eich";


myObject.displayName();  // Ande Praveen
window.displayName();  // Brendan Eich