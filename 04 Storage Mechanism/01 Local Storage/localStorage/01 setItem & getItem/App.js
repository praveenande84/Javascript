// set in the local localStorage
// localStorage.setItem("key", "value");

localStorage.setItem("name", "praveen");
localStorage.setItem("gender", "male");
localStorage.setItem("city", "Hyderabad");

// get from localStorage
// localStorage.getItem("key");

let myName = localStorage.getItem("name");
console.log(myName);  // praveen

let myCity = localStorage.getItem("city");
console.log(myCity);  // Hyderabad

// Not save key-vaue pair in local storage output result
let occupation = localStorage.getItem("occupation")
console.log(occupation);  // null
console.log(typeof(occupation));  // object