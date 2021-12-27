//Function that convert string into lower case then splits it into array (on empty space) and then join those two elements on hythen

//instead of split(" ") can use regex split(/\s+/) - more rubust way

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
  set.forEach((item) => {
    newUrl.push(item.toLowerCase().split(" ").join("-"));
  });
  return newUrl;
};
console.log(convertArray(provinces));
// ['ontario', 'british-columbia', 'alberta', 'new-brunswick']

// Functional programming version - using map

const functionalUse = (set) => {
  return set.map((items) => {
    return `https://canada.ca/${urlString(items)}`;
  });
};

const arrOfProvinses = functionalUse(provinces);
console.log(arrOfProvinses);
console.log(...arrOfProvinses); //just to see what it's going to return
