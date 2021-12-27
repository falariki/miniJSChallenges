// this keyword

"use strict";

console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAge(1994);

//Arrow function doesn't get it's 'this' keyword

//using this keyword inside the object

const fatima = {
  year: 1994,
  calcAge: function () {
    //console.log(this);
    console.log(2021 - this.year);
  },
};
fatima.calcAge();

const alex = {
  year: 1991,
};

alex.calcAge = fatima.calcAge; // very interesting
alex.calcAge();

const f = fatima.calcAge;
f(); //regular function that is not attached to any object any more
