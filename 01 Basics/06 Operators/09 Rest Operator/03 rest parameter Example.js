
// Rest Parameter

function sum(...args){
    let result = 0;
    for (let element of args){
        result = result + element;
    }
    return result;
}


console.log(sum(1,2,3));  // 6
console.log(sum(1,2,3,4,5,6));  // 21
