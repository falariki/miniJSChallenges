//Final third method reduce - data transformation
//adding up all th enumbers in array
//reduce callback function

const movemtns = [200, 450, -400, 3000, -650, -130, 70, 13300];

const balance = movemtns.reduce((accumulator, currentBalance) => {
  console.log(
    ` You have now ${accumulator}$ let's change it, ${currentBalance}$`
  );
  return accumulator + currentBalance;
}, 0);

console.log(balance);

console.log("-----Another example: OLD approach----");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oldLong = (digits) => {
  let total = 0;
  digits.forEach((digit) => (total += digit));
  return total;
};

console.log(oldLong(numbers));

console.log("-----Reduce method once again-----");

const newMethod = (digits) => {
  return digits.reduce((accumulator, curValue) => {
    return accumulator + curValue;
  }, 0);
};

console.log(newMethod(numbers));

const provinces = ["Ontario", "British Columbia", "Alberta", "New Brunswick"];

//count the lenght of each 'province'
//old approach
console.log("-----Not Reduce - another example -----");
const oldLenght = (items) => {
  let lenghts = {};
  let sum = 0;
  items.forEach((item) => {
    lenghts[item] = item.length;
    sum += item.length;
  });
  console.log(sum);
  return lenghts;
};

console.log(oldLenght(provinces));

console.log("-----NOW Reduce-----");

const newLenght = (items) => {
  return items.reduce((lengths, item) => {
    lengths[item] = item.length;
    return lengths;
  }, {});
};

console.log(newLenght(provinces));

// working again with numbers array

const productOfElements = (digits) => {
  return digits.reduce((total, digit) => {
    return (total *= digit);
  });
};

console.log(productOfElements(numbers));
