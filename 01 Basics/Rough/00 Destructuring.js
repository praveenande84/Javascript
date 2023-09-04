let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};

console.log(student);

// access the object
console.log(`'NAME' : ${student.name}
              'AGE' : ${student.age}
			  'COURSE' : ${student.course}`);

// access the object with Destructuring			
// we no need to mention student  
let {name, age, course} = student;
console.log(`'NAME' : ${name}  
             'AGE' : ${age}
			 'COURSE' : ${course}`);
			 
			 
// Access the nested objects with Destructuring
let {street, city, state} = student.address;
console.log(`STREET : ${street}
             CITY : ${city}
			 STATE : ${state}`);			 
			 
			 
			 