// The word object is used in various contexts in JavaScript, usually referring to the abstract idea of a collection of data (properties) and functions (methods).

//Plain objects - key value pairs

let user = {}; //empty object
user["firstName"] = "Fatima"; //key 'firstName', value 'Fatima'
user["lastName"] = "Alariki";
user; // {firstName: 'Fatima', lastName: 'Alariki}

// The keys in our object the properties
// Undefined key/property name simply returns undefined
user["dude"]; // undefined
user.dude; //undefined - undefined is false in a boolean conext
!!user.dude; //false
!!user.firstName; //true

//Exersice
let car = new Object();
car; // {} - empty object
car["model"] = "Chevrolette";
car["make"] = 2012;
car; // {model: 'Chevrolette', make; 2012}

//check file ExersiceObject.js for more stuff
