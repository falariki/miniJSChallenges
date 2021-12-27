// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const testArray = ['test', 'test', 'test']

const checkArray = function(arr){
    if (testArray[0] === testArray[1]=== testArray[2]){
        return true;
    }else {
        return false;
    }
}

checkArray(testArray);

function myFunction(data, key) {

    return data[key]
 }
function myFunction1(arr) {
   
    return arr.every(el => el === arr[0])
 }

