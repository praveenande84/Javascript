
// Object Destructuring with rest parameter

let myObject = {
    first_name:"Praveen",
    last_name:"Ande",
    age:27
};

let {first_name, ...rest} = myObject;

console.log(first_name);  // Praveen
console.log(rest);  // { last_name: 'Ande', age: 27 }


