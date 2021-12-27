// //Arrays
const c = "Chrismas".split("");
c[0], c[1]; //C h

const d = [
  "New Years",
  2022,
  "Another Covid Year",
  turnIntoArray.includes("rower"), //true
];
d; // going to show the array d

const honey = "honey badger".split("");
honey.length; //12
for (i = 0; i < honey.length; i++) {
  honey[i]; //going to spell the whole thing h o n ...etc every letter on separate line
}

// //Array slicing

const numArr = [8, 12, 90, 102];
numArr.slice(1); // [12, 90, 102] - starts from the first element
numArr.slice(2); //[90, 102] - starts from the second element
numArr.slice(1, 3); // [12,90] - grabs from first but doesn't include third

numArr[numArr.length - 1]; // 102  shows the last element of array

numArr.slice(-1); // [102] selects the last element too - array with the one element
numArr.slice(-1)[0]; // 102 going to show the last element as an element - NOT as array

// let numArr = [];
// for (i = 1; i <= 10; i++) {
//   numArr.push(i);
// }
// console.log(numArr.slice(2, -2));

const yetAnotherArr = [23, 17, 5, 9];

yetAnotherArr.includes(9); //true
yetAnotherArr.includes("Toronto"); //false

//sorting and reversing
yetAnotherArr.sort(); // [12,32,55,9] - because it looks at first digit - super weird
yetAnotherArr.reverse(); //[9, 55, 32, 12]

//pushing and popping - push and pop

yetAnotherArr.push(6); // 5 - as number of elements
yetAnotherArr; // [9, 55, 32, 12, 6] - with 6 in the array

yetAnotherArr.push("Toronto"); // 6 - again as a number of elements
yetAnotherArr; //  [9, 55, 32, 12, 6, 'Toronto']

yetAnotherArr.pop(); //Toronto - last element; pop returns the value itself
yetAnotherArr; // [9, 55, 32, 12, 6] - no more Toronto

let lastElement = yetAnotherArr.pop();
lastElement; // 6
yetAnotherArr; // [9, 55, 32, 12]

//Undoing a split - join
const cities = ["Toronto", "Monteral", "Ottawa"];
cities.join(); // Toronto,Monteral,Ottawa
cities.join(", "); //Toronto, Monteral, Ottawa
cities.join("_"); //Toronto_Monteral_Ottawa
cities.join(""); //TorontoMonteralOttawa - join on empty space

//push and pop on to the front of the array
cities.shift(); //Toronto - grabs the first element
cities.unshift("New York"); //add to the front of the array New York

for (i = 0; i < cities.length; i++) {
  cities[i]; //returns all the elements of the array New York Montreal Ottawa
}

let total = "";
for (i = 0; i < cities.length; i++) {
  total += cities[i];
}

total; // if show in the console - New YorkMonteralOttawa
