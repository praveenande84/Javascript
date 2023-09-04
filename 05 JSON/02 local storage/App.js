
let person = {
    name:"praveen",
    age:26,
    city:"Hyderabad"
};

let stringifiedProfile = JSON.stringify(person);
localStorage.setItem("profileDetails", stringifiedProfile);

let stringifiedProfileFromLocalStorage = localStorage.getItem("profileDetails");
let parsedProfile = JSON.parse(stringifiedProfileFromLocalStorage);
console.log(parsedProfile);
console.log(typeof(parsedProfile));



