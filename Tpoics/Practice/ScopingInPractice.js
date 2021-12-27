//Scoping in practice
//Just to see how scoping works

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true;
    //Creating NEW variable with the same name as outer scope's variable

    const fistName = "Sergey";
    //Reassigning outer scope's variable
    output = "New Output";

    const str = `Looks like You Are a millenial, ${firstName}`;
    console.log(str);

    function add(a, b) {
      return a + b;
    }
  }
  console.log(millenial);
  console.log(output);

  printAge();

  return age;
}

const firstName = "Fatima";
calcAge(1994);

const fatima = {
  firstName: "fatima",
  year: 1994,
  calcAge: function () {
    return 2021 - this.year;
  },
};

fatima.calcAge;
