//Math and Numbers

// Advanced math Oerations via Math - global object

Math.PI; //3.141592653589793
Math.pow(2, 3); // 8 - это 2 в степени 3
2 ** 3; //works the same as Math.pow(2, 3);
Math.sqrt(3); // 1.7320508075688772 square root - корень квадратный
Math.cos(2 * Math.PI); // 1 - cosinus
Math.sqrt(-1); //NaN - Not a Number

Math.E; // 2.718281828459045 - e math constant
Math.log(Math.E); // 1
Math.log(10); // 2.302585092994046

// Base-ten logarithms log10
Math.log10(10); // 1
Math.log10(1000000); // 6
Math.log10(Math.E); // 0.4342944819032518

// Math to string - convert number into a string
// toString() - method - doesn't work on bare integers

let t = 2 * Math.PI;
t.toString(); // '6.283185307179586'

// 100.toString(); //that's incorrect

(100.0).toString(); // works because this number is a float - '100'

//String object directly

String(567.0); // '567'
String(t); // '6.283185307179586' - works on variables

// Number object - to convert from string to number
Number("4.345692"); //4.345692
String(Number("9.345")); // '9.345'
Number("1.24e6"); //1240000 - interesting

String(Number("1.24e6")); // '1240000'
Math.log10(Number("1e19")); // 19
