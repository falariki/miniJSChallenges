//Regular expressions - regexes or regexps - regex101.com to learn mow
// Not sure what it is yet

//Any white space character \s
//Any non - white space character \S
//Any digit  \d
//Any non-digit  \D
//Any word character \w
//Any non- word character \W
//Any Unicode sequence, linebreaks included \X
//Match one data unit \C
//Unicode newlines \R

// g globl flag - to match all occurance '

//Regex method

let zipCode = new RegExp("\\d{5}"); // d - represent any digit (0-9)
let result = zipCode.exec("Beverly Hills 90210"); // exec method that 'executes' the regex on a string
result; // [ '90210', index: 14, input: 'Baverly Hills 90210'] - very weird resulr
result.length; // 1

//String method
zipCode = /\d{5}/; // /\d{5}/

let myExp = "Grandma's postal code is 90120";
myExp += ". And then mom's is 11234 probably bit I'm not sure";
myExp; // "Grandma's postal code is 90120. And then mom's is 11234 probably bit I'm not sure"

//match method - to find out if the string matches regexp

myExp.match(zipCode); // [ '90120', index: 25, input: "Grandma's postal code is 90120. And then mom's is 11234 probably bit I'm not sure", groups: undefined ]

!!myExp.match(zipCode); //true

//g - global flag

zipCode = /\d{5}/g;
myExp.match(zipCode); //[ '90120', '11234' ]

//split method but regexp instead

const r = "eat,    train\t , learn JS \n, repeat";
r.split(/\s+/);

//Exersices

let myNewZipCode = /\d{5}\D\d{4}/; // /\d{5}\D\d{4}/
let moved = "My new ZIP code is 90120-7654";
moved.match(myNewZipCode); // ['90120-7654', index: 19, input: 'My new ZIP code is 90120-7654' groups: undefined]

myNewZipCode = /\d{5}\D\d{4}/g; //added g flag
moved.match(myNewZipCode); // [ '90120-7654' ]

//Regex that splits only on new line

let q = /\n/; //   /\n/
const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let funEx = sonnet.split(q); // splits on new line
sonnet.length; // 583
funEx.length; // 14

//Such a weird stuff
