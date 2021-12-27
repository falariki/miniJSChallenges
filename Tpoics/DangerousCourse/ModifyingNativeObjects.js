//In this section we're going to add the reverse function
//as a mthod on String objects

//This is the bad practice
//Extensions of native prototypes

//Adds 'reverse' to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};
let myName = "Fatima";

//return true if the string is empty
String.prototype.blank = function () {
  return /^\s*$/.test(this);
};

//returns last element of the array

Array.prototype.last = function () {
  return this.splice(-1).pop();
};

//   /\s/ - for whitespace characters
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function (string) {
    return string.toLowerCase();
  };

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}

let saying = new Phrase("Able was I ere I saw Elba");
console.log(saying.palindrome());
