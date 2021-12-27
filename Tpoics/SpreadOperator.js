//Spread operator

const arr = [5, 6, 7];

const oldMethod = [1, 2, 3, arr[0], arr[1], arr[2]];

const newMethod = [1, 2, ...arr];
console.log(...newMethod, newMethod); // just digints not in array any longer
//looks like this 1 2 5 6 7 // just newMethod [1, 2, 5, 6, 7]

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasts with ${ing1}, ${ing2} and ${ing3}`);
  },
};

const newItem = [...restaurant.mainMenu, "Lasanga"]; //creating a new array
console.log(...newItem);
console.log(newItem);

//Copy array - shallow copy

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//Join 2 arrays( or more ) together

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets but NOT objects

const nameFirst = "Fatima";
const letters = [...nameFirst, " ", "A."]; //array unpacked
console.log(...nameFirst, letters);
console.log(letters.join(""));

//Only use the spread operator when building an array or when we pass values into function
//Not going to work with tamplete literals

//Example

const ingridients = [
  // prompt("We're making pasta! Ingridient 1?"),
  // prompt("Ingridient 2?"),
  // prompt("Ingridient 3?"),
];
console.log(ingridients); // array of ingridients

//old way
restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);

//new way with the spread operator - gives same result
restaurant.orderPasta(...ingridients);
console.log(...restaurant.categories); // just to check it returns not an array but

//Objects - works on Objects as well even though they aren't iterables

const newRestaurant = {
  foundedIn: 1912,
  ...restaurant,
  founder: "Francheso Totti",
};
console.log(newRestaurant);

//Shallow copy of object

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "La Bella Italia";
console.log(restaurantCopy.name, restaurant.name);
