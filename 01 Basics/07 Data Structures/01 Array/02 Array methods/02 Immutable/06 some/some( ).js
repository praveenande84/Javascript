

// Array Methods

// Immutable

/*

 some()
  The some() method tests whether at least one element in the array passes the test implemented by the provided function.
  let finalBool = myrray.some(function(currentValue, index, arr))
    => Here index and arr are optional arguments.

 */


let myArray = [1, 2, 3, 4, 5, -6, -7, -8];
const isAnyOnePositive = myArray.some((eachItem) => eachItem > 0);
console.log(isAnyOnePositive);  // true
