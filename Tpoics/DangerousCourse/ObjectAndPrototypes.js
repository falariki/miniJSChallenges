//Very interesting
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Chevy", "Cruz", 2012);

console.log(car1);
console.log(car1.make);

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

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
    return this.processedContent() === reverse(this.processedContent());
  };

  //   this.louder = function lounder() {
  //     return this.content.toUpperCase();
  //   };
}

let phrase = new Phrase("Racecar");
console.log(`${phrase.palindrome()} Racecar is the same as racecar`);

//Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  };
}

TranslatedPhrase.prototype = new Phrase();

let frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.palindrome());
