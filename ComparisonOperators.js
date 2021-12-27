//Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function compare(a,b) {
    if((typeof a) === (typeof b) && a === b ){
        return true;
    } else {
        return false;
    }
}
//when using strict equality no need to use type 
//another one 

function comarison(a, b){
    return a === b;
}

console.log(compare(2,3));
console.log(compare(3,3));
console.log(compare(1,'1'));
console.log(compare('10','10'));
