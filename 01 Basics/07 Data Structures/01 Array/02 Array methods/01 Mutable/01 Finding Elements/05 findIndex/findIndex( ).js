
/// Array Methods

// Finding Elements

/*

 findIndex() method
 This method returns the index of the first item that satisfies the provided testing function. if no item found returns -1.
 myArray.findIndex(Testing Function);

 */



let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

// Existing Element
let twoIndexNumber = myArray.findIndex(function(eachItem){
    // console.log(eachItem);
    if (eachItem === 2){
        return true;
    }
    else{
        return false;
    }
});

console.log(twoIndexNumber);  // 1


// Non-Existing Element
let notSatisfiedCondtition = myArray.findIndex(function(eachItem){
    // console.log(eachItem);
    if (eachItem === 10){
        return true;
    }
    else{
        return false;
    }
});

console.log(notSatisfiedCondtition);  // -1

//----------------------------//

// find object index number
let customerData = [
    {
        name: "praveen",
        id:101
    },
    {
        name: "swathi",
        id:102
    },
    {
        name: "navya",
        id:103
    }
];


let objectIndex = customerData.findIndex(function (eachItem){
    // console.log(eachItem);
    if (eachItem.id == 103){
        return true;
    }
    else{
        return false;
    }
});
console.log(objectIndex);  // 2