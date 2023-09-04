

/// Array Methods

// Finding Elements

/*

 find() method
 The find() method returns the first item's value that satisfies the provided testing function. If no item is found, It returns undefined.
 Array.find(Testing Function);

 */


let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

// Existing Element
let firstItem = myArray.find(
    function(eachItem){
        if (eachItem > 3){
            return true;
        }
    }
);
console.log(firstItem);  // 4

// Non-Existing Element
let notSatisfiedCondtition = myArray.find(
    function(eachItem){
        if (eachItem > 10){
            return true;
        }
    }
);
console.log(notSatisfiedCondtition);  // undefined


