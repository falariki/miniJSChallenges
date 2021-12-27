//Short Curcuting

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

// Use ANY data type, return ANY data type,
//short-circuiting
//if the first value is the truthy value it will be returned
//and the othe rone won't be evaluated
console.log(12 || "Fatima"); //12 thruthy value
console.log("" || "Fatima"); //Fatima
console.log(true || 0); //true  - thruthy value
console.log(undefined || null); //null; undefined - falthy value
console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello - first thruthy value

//More practical

//not going to work with 0 - because it's a falthy value
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//Same can be done with && Operator
console.log("-------AND---------");
//works on exact opposite way

console.log(0 && "Fatima"); //0 is falthy - so it's not even looking any further
console.log(7 && "Fatima "); // 7 is thruthy so eval continues
//evaluation continues until it finds a falthy value

console.log("Hello" && 23 && null && "Fatima"); //null is first falthy value

//checking if method exists - example
if (restaurant.orderPizza) {
  restaurant.orderPizza("chicken", "pinapple");
}
//same thing as before but using && operator
restaurant.orderPizza && restaurant.orderPizza("cheese", "tomato");

console.log("-----Nullish Coalescing Operator (??)-----");
//Nullish Coalescing Operator
restaurant.numG = 0;
const guest = restaurant.numG || 10;
console.log(guest);

//Nulish: null and undefined (NOT 0 or '') - similar idea as falthy and thruthy
const guestCorrect = restaurant.numG ?? 10;
console.log(guestCorrect);

console.log("-----Logical Assignment-----");

const team1 = {
  name: "Chealsea",
  coach: "Ben Bergeron",
  numPlayers: 0,
};

const team2 = {
  name: "Man United",
  coach: "Mat Fraser",
  city: "Manchester",
};

//OR Assignment operator

// team1.numPlayers = team1.numPlayers || 10;
// team2.numPlayers = team2.numPlayers || 10;

// team1.numPlayers ||= 10;
// team2.numPlayers ||= 10;

// Nullish assignment operator (null or undefined)

team1.numPlayers ??= 10;
team2.numPlayers ??= 10;

//AND assignment Operator
// team1.city = team1.city && "<NONE>";
// team2.city = team2.city && "<NONE>";
//return the first falthy value

team1.city &&= "<SECRET>";
team2.city &&= "<SECRET>";

console.log(team1);
console.log(team2);
