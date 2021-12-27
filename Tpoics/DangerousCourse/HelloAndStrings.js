// console.log("Hey guys", "How is it going?");

// let password = "foobar";
// let login = "";
// if (password.length === 0 && login.length === 0) {
//   console.log("Both strings are empty");
// } else {
//   console.log("At least one string is not empty");
// }

// if (password.length === 0 || login.length === 0) {
//   console.log("At thest one of the strings is empty");
// } else {
//   console.log("Neither if the strings is empty");
// }

// if (!(password.length === 0)) {
//   //true
//   console.log("password is not empty");
// } else {
//   console.log("password is empty");
// }

// const x = "foo";
// const y = "";

// const someString = "Hello, I want to be a Pro in JavaScript";
// const L = someString.length;

// console.log(someString);
// sum = 0;
// for (let i = 0; i <= L; i++) {
//   sum += i;
//   //console.log(i); //prints 0 to 39
//   //console.log(someString); //prints someString 39 times
//   console.log(someString.charAt(i));
//   //console.log(someString[i]);
// }
// console.log(sum);

// counter = 0;
// sum = 0;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   counter++;
//   sum += i;
// }

// console.log(`This is ${counter} meaning how may elements we've got`);
// console.log(`and this is ${sum} of all those elements (0 to 4) - should 10`);

// const someString = "Hello, I want to be a Pro in JavaScript";

// const L = someString.length;
// console.log(L);

// const turnIntoArray = "dumbbell barbell rower";
// console.log(turnIntoArray.split(" "));

// const splitSomethingElse = "I_am_a_software_engineer";
// console.log(splitSomethingElse.split("_"));

// const splitWord = "Christmas";
// console.log(splitWord.split(""));

// //Excersise

// const a = "A man, a plan, a canal, Panama".split(", ");
// const b = "A man, a plan, a canal, Panama".split(", ").reverse();
// console.log(a, a.length, typeof a);
// console.log(b);

const evenOdd = (number) => {
  const check = number % 2;
  return check === 0 ? `${number} is even` : `${number} is odd`;
};

console.log(evenOdd(37));

// sum = 0;

// for (let i = 1; i < 9; i++) {
//   sum += i;
//   console.log(i);
// }

// console.log("\n" + sum);

const sumation = (num) => {
  sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const anotherSummation = (num) => (num * (num + 1)) / 2; //good to know
console.log(anotherSummation(8));

//
