
/// this

/*
  Arrow Functions
  this refers to the Object on which we call our function.
 */

// This Arrow Function stored in window object.
const displayName = () => {
    console.log(this);
}


// this Arrow Function stored in window object, So it refers to the window Object.
displayName();