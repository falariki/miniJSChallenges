const sqaure = (number) => number * number;

// Method chaining
// we can't reverse a string

// 1. split string on empty string - to create an array of characters
// 2. Reverse arrat
// 3. Join the array on the empty string to create a reverse string

const str = "car";
console.log(str); //car
const strSplitted = str.split("");
console.log(strSplitted); //array  ['c', 'a', 'r']
const reversed = strSplitted.reverse();
console.log(reversed);
const backToString = strSplitted.join("");
console.log(backToString); //car

let word = "Fatima";
console.log(`My name is ${word}`);
const reversedWord = word.split("").reverse().join("");
console.log(`This one is reversed name - "${reversedWord}" - crazy isn't it`);

//Function to reverse words (strings)
const reversingWords = (anyString) => {
  return anyString.split("").reverse().join("");
};

//Returns true for palindrome, false otherwise
const palindrome = (anyString) => {
  let check = anyString.toLowerCase();
  return check === reversingWords(check);
};

const testWord = "racecar";
const anotherTest = "Level";
console.log(reversingWords(testWord), palindrome(testWord));
console.log(reversingWords(anotherTest), palindrome(anotherTest));

//Exersice - email and domain

const breakingEmail = (email) => {
  return email.toLowerCase().split("@");
};

const myEmail = "FATIMA.A@ROSEROCKET.COM";
console.log(breakingEmail(myEmail));

//Emoji challenge

const emoji = "Hey 😘";

//Create an Array from a string using Array.from() method

const createArr = Array.from(emoji);

//rewritting Reversing Words function

const emojiFunc = (stringWithEmoji) => {
  console.log(stringWithEmoji);
  return Array.from(stringWithEmoji).reverse().join("");
};

console.log(emojiFunc(emoji));

//forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 13300];

movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

movements.forEach(function (i) {
  console.log(i);
});

const myThought = "I want";
const myThoughtArray = Array.from(myThought);

myThoughtArray.forEach((letter) => console.log(letter));

let alfa = [8, 12, 90, 23];
const lets = alfa.sort((a, b) => a - b);

lets.forEach((num) => console.log(num));

// Let's try more - reinforsing forEach

console.log("-------REINFORSING FOR EACH----------");

const numsAndStrings = [23, "I know", 34, 12, 90, "sure"];

numsAndStrings.forEach(function (part) {
  //console.log(part);
  if (typeof part === "number") {
    console.log(`We've got ${part}`);
  } else {
    console.log(`Weird it's not a number but a string '${part}'`);
  }
});
