
// JS Object
let JSObject = {
    name: "Rahul",
    age: 29,
    designation: "Web Developer"
};

console.log(JSObject);

// JSON Object
// In JSON, all keys in an object must be enclosed with double-quotes. While in JS, this is not necessary.
let JSONObject = {
    "name": "Rahul",
    "age": 29,
    "designation": "Web Developer"
};

console.log(JSONObject);

// JSON methods

// JSON.stringify(value);
// It converts the given value into JSON string.
let stringifiedObject = JSON.stringify(JSObject);
console.log(stringifiedObject);  // {"name":"Rahul","age":29,"designation":"Web Developer"}

// JSON.parse(string);
// It parses a JSON string and returns a JS Object.
let myJSONString = '{"name": "Rahul","age": 29,"designation": "Web Developer"}';
let parsedObject = JSON.parse(myJSONString);
console.log(parsedObject);  // { name: 'Rahul', age: 29, designation: 'Web Developer' }



