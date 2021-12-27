//Let's see how the filer works

const numArr = [1, 2, 3, 4, 5, 6, 7, 8];

//we want to see only even/odd numbers

const even = numArr.filter((n) => n % 2 === 0);
const odd = numArr.filter((n) => n % 2 === 1);

console.log(even, odd);

console.log(...even, ...odd);

//Based on out Map function

const provinces = ["Ontario", "British Columbia", "Alberta", "New Brunswick"];
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
//Single word provinces name - Imperative way

const longWay = (set) => {
  let singles = [];
  set.forEach((item) => {
    if (item.split(" ").length === 1) {
      singles.push(item);
    }
  });
  return singles;
};
console.log(longWay(provinces));

//Functional programming way

const shortWay = (set) => {
  return set.filter((item) => item.split(" ").length === 1);
};
console.log(shortWay(provinces));

//show states that includes 'Dakota'

const dakotaStates = (elements) => {
  return elements.filter((item) => item.includes("Dakota"));
};
console.log(dakotaStates(states));

const dakotaAgain = (elements) => {
  return elements.filter((item) => item.split(" ").length === 2);
};
console.log(dakotaStates(states));
