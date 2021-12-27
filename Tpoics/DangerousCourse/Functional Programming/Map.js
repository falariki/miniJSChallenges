//Function that convert string into lower case then splits it into array (on empty space) and then join those two elements on hythen

//champs.com/Fatima Alariki -> champs.com/fatima-alariki

const convertString = (string) => {
  return string.toLowerCase().split(" ").join("-");
  //   const wedsite = "https://canada.ca/";
  //   return wedsite.concat(readyToUse);
};

//instead of split(" ") can use regex split(/\s+/) - more rubust way

const myName = "Fatima Alariki";
console.log(convertString(myName));

// Let's do it with array of strings

const provinces = ["Ontario", "British Columbia", "Alberta", "New Brunswick"];

//function that converts string into Url string
// Example Fatima Alariki -> fatima-alariki
const urlString = (string) => {
  return string.toLowerCase().split(" ").join("-");
};

//Imperative version - mutating
const convertArray = (set) => {
  let newUrl = [];
  //   for (i = 0; i < set.length; i++) {
  //     //console.log(set[i]);
  //     newUrl.push(set[i].toLowerCase());
  //   }
  //   console.log(newUrl);

  set.forEach((item) => {
    newUrl.push(item.toLowerCase().split(" ").join("-"));
  });
  return newUrl;
};
console.log(convertArray(provinces)); // ['ontario', 'british-columbia', 'alberta', 'new-brunswick']

//Map easy example

const exA = [12, 15, 2, 4];

const sqr = exA.map((i) => {
  const a = i * i;
  return "Hello " + a + ". It's me testing stuff";
}); //[144, 225, 4, 16]
console.log(sqr);

// Functional programming version - using map

// const Urls = provinces.map((province) => {
//   return province.toLowerCase().split(" ").join("-");
// });

const functionalUse = (set) => {
  return set.map((items) => {
    return `https://canada.ca/${urlString(items)}`;
  });
};

const friends = ["Fatima Alariki", "John Fernandez", "Valik Vaselenko"];

const arrOfProvinses = functionalUse(provinces);
console.log(arrOfProvinses);
console.log(...arrOfProvinses); //just to see what it's going to return
console.log(functionalUse(friends));
