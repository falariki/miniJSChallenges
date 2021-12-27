//#1
//Write a function that takes a number as argument
//If the number is even, return true 
//Otherwise, return false 

console.log("-----Challenge #1-----", '\n');
function evenOrOdd (number){
    return (number % 2 === 0) ? true : false;
     
}
//values to check

console.log(evenOrOdd(10));
console.log(evenOrOdd(-4));
console.log(evenOrOdd(5));
console.log(evenOrOdd(-111));

//#2
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

console.log('\n' ,"-----Challenge #2-----", '\n');

function comarison(a, b){
    return a === b;
}

console.log(comarison(2,3));
console.log(comarison(3,3));
console.log(comarison(1,'1'));
console.log(comarison('10','10'));


//#3

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

console.log('\n' ,"-----Challenge #3-----", '\n');
randomNums = [3,45,18,11,32,65];

console.log(`Here is the array of numbers ${randomNums}`);

function aveNum(nums) {
    let sum = 0;
 
    for (let i = 0; i < nums.length; i++) {
       sum += nums[i];
       
   }
   //console.log(sum);
    return sum / nums.length;
};
console.log(`The average of numbers of this array is ${aveNum(randomNums)}`);

//#4

// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

console.log('\n' ,"-----Challenge #4-----", '\n');

function test(data, key) {

    return data[key]
};

console.log(test({continent: 'Asia', country: 'Japan'}, 'continent'));
console.log(test({country: 'Sweeden', continent: 'Europe'}, 'country'));


//#5

// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

console.log('\n' ,"-----Challenge #5-----", '\n');


function percentage(num,perc){
    return (num*(perc/100)).toFixed(2);
}

console.log(`50% of 100 is ${percentage(100,50)}`);
console.log(`2% of 777 is ${percentage(777,2)}`);
console.log(`99% of 500 is ${percentage(500,99)}`, '\n');

