// opposite from spread operator

//SPREAD because on the right side =
const arr = [1, 2, ...[3, 4]];
console.log(...arr, arr);

//REST, because of the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Again to back to our restaurant example

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasts with ${ing1}, ${ing2} and ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

//Destracturing

const [pizza, , , foca, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, foca, otherFoods); // doesn't include any skipped elements
//the rest elements must be the last element and can be used only once
//the rest elements are collected into the arra

//Same works for Objects
const { sat, ...weekdays } = restaurant.openingHours; //destracturing object
console.log(weekdays, sat);

//Functions
//Rest parametrs
const add = (...numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};

//all arrays now
console.log(add(2, 3)); //[2, 3] and now we got 5
console.log(add(12, 34, 5, 9)); //[12, 34, 5, 9] //6-
add(1, 3, 5, 6, 7, 9, 12, 67); //[1, 3, 5, 6, 7, 9, 12, 67]

//and now let's say we want to add numbers from the array
const x = [5, 3, 9];
//spreading them and calling add function
console.log(add(...x)); //17

//using it on Our restaurant object

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
//mushrooms
//['onion', 'olives', 'spinach']
restaurant.orderPizza("chicken"); //chicken, and [] - empty array
