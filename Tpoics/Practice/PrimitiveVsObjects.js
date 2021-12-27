let age = 26;
let oldAge = age;
age = 27;

//if we run it throughthe console
//age = 27
//oldAge = 26

//it doesn't work the same with objects

const me = {
  myName: "Fatima",
  age: 27,
};

const friend = me;
friend.age = 30;

console.log("Myself:", me);
//{myName: 'Fatima', age: 30}
console.log("Friend:", friend);
//{myName: 'Fatima', age: 30}

//age changed for both even though we changed it for a friend only

//Another example
//Primitive types
let lastName = "Alariki";
let oldLastName = lastName;
lastName = "Cox";
console.log(lastName, oldLastName);
//each primitive value is saved into its own piece of memory into the stack

//Reference types
const alex = {
  firstName: "Alex",
  lastName: "Brown",
  age: 23,
};

const marriedAlex = alex;
marriedAlex.lastName = "Medvedev";

//console.log("Before marrige:", alex);
//{firstName: 'Alex', lastName: 'Medvedev', age: 23}

//console.log("After marrige:", marriedAlex);
//{firstName: 'Alex', lastName: 'Medvedev', age: 23}

//how to copy an object

const kate = {
  firstName: "Kate",
  lastName: "Fraser",
  age: 23,
  family: ["Anne", "Lucas"],
};

const marriedKate = Object.assign({}, kate);
marriedKate.lastName = "Vellner";

//console.log("Before marrige:", kate);
//{firstName: 'Kate', lastName: 'Fraser', age: 23}
//console.log("After marrige:", marriedKate);
//{firstName: 'Kate', lastName: 'vellner', age: 23}

//It did get changed but the problem is
//it works only for the first level
//If we have another object inside this object
//inner object still be the same
//Object.assign creates a shallow copy not a deep copy

//let's see how it works
marriedKate.family.push("Emma");
marriedKate.family.push("Laura");

console.log("Before marrige:", kate);
//both objects now have 4 members
console.log("After marrige:", marriedKate);

//We need external library to create a clone copy
