
let profile = {
    name:"praveen",
    age:26,
    city:"Hyderabad"
};

// convert from js object to JSON object
let stringifiedProfile = JSON.stringify(profile);

console.log(profile);  // { name: 'praveen', age: 26, city: 'Hyderabad' }
console.log(stringifiedProfile);  // {"name":"praveen","age":26,"city":"Hyderabad"} // JSON object keys are must in between double Quotations.
console.log(typeof(stringifiedProfile));  // string


// convert from JSON object to js object
let parsedProfile = JSON.parse(stringifiedProfile);

console.log(parsedProfile);  // { name: 'praveen', age: 26, city: 'Hyderabad' }
console.log(typeof(parsedProfile));  // object
