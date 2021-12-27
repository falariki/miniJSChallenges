//Dates

// Date - build-in object - represents single moment is time

//new function - constructor function - standard JS way to create a new object

let s = new String("You are, absolutely, going to be, a CHAMP in JS"); //just created a string
s; // [String: 'You are, absolutely, going to be, a CHAMP in JS']
s.split(", "); // [ 'You are', 'absolutely', 'going to be', 'a CHAMP in JS' ]

//another one

let a = new Array();
a; // []
a.push(78); // 1
a.push(2); // 2
a.push("LFG"); // 3
a; // [ 78, 2, 'LFG' ]
a.pop();
("LFG");

//Dates have no literal constructor - got to use New

let now = new Date();
now; // 2021-12-18T14:42:22.353Z

let moonLanding = new Date("July 20, 1969 20:18"); //1969-07-21T00:18:00.000Z
now - moonLanding; // 1654007062353  - WTF - number of milliseconds since the moon landing until now

now.getFullYear(); // 2021
now.getMonth(); // showing 11 because January is 0
now.getDay(); // 6 because Sunday is 0

let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
daysOfTheWeek[now.getDay()]; // 'Saturday'

let myBirthday = new Date("09-12-1994"); //1994-12-09T05:00:00.000Z
myBirthday - moonLanding; // 801117720000
