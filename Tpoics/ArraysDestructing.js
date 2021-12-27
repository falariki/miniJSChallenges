// Desrtructuring arrays - ES6 feature - break data structure into smaller parts

const restaurant = {
  name: "Bella Italia",
  location: "Downtown Toronto, ON, Canada",
  categories: ["Italian", "Vegiterian", "Organic", "Fancy"],
  starterMenu: ["Garlic Bread", "Cesar Salad", "Bruschetta"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[[mainIndex]]];
  },
};

//distracturing arrays
const arrEx = [2, 3, 4];
//one way
const a = arrEx[0];
const b = arrEx[1];
const c = arrEx[2];

const [x, y, z] = arrEx; // x = 2, y = 3, z = 4
arrEx; // not destroyed - destructured - if we call it returns [ 2, 3, 4 ]

const [first, second] = restaurant.categories;
first; // Italian
second; // Vegiterian

const [fst, , third] = restaurant.categories; //to grab first and third just leave a blank to skip a secind element
fst; // Italian
third; //Organic

//Switching variables

let [main, , secondary] = restaurant.categories; //main - Italian, secondary - Organic

[main, secondary] = [secondary, main]; // here main becomes secondary and secondary becomes main // Main = Organic; Secondary = Italian

//after adding order method to the restaurant Object
//recive 2 return value from a function

restaurant.order(2, 0); // [ 'Bruschetta', 'Pizza' ]

const [starter, mainCourse] = restaurant.order(2, 0);
starter; // 'Bruschetta'
mainCourse; // 'Pizza'

//nested array distructuring

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested; // i = 2, j = 5, k = 6

//set default values

const [p = 1, q = 1, r = 1] = [8, 9]; //setting up default values so if there's no data the variable is going to remain as default
p, q, r; // 8, 9, 1 (instead of undefined)
