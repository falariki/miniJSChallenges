// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

numArray = [3,4,5];

//console.log(numArray.length);


function myFunction(nums) {
    let sum = 0;
 
    for (let i = 0; i < nums.length; i++) {
       sum += nums[i];
       
   }
   console.log(sum)
    return sum / nums.length
 }

 console.log(myFunction(numArray));