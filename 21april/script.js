// type conversion

// string to number conversion
var a="5.67";
a=parseFloat(a);
console.log(a,typeof a);

var a="5.67";
a=parseint(a);
console.log(a,typeof a);

var a="5.67";
a=Number(a);
console.log(a,typeof a);

// number to string
var b=45;
b=b.tostring();
console.log(b,typeof b);

var b=45;
b=String(b);
console.log(b,typeof b);

// boolean
b=Boolean(b);
console.log(b,typeof b);


// String
var name="Aditya";
var age=20;

// concatenation
var text="My name is " + name + "I am " + age + "years old";
console.log(text);

// template literals or string or backticks
var text2 = `My name is ${name} and i am ${age} years old`;
console.log(text2);

var x = "Hello World"

// type of
console.log(typeof x);

// length
var output = x.length;
console.log( output);

// charAt - return the char of specfic index number
var output = x.charAt(4);
console.log( output);

// indexof - gives the first index of any character
var output = x.indexOf(4);
console.log( output);

// trim - remove widespace
var output = x.trim();
console.log( output);

// includes - returns true or false
var output = x.includes("adi");
console.log( output);

// replace - replace the char or word
var output = x.replace("hello","bye");
console.log( output);

// substring - (starting index & ending index)
var output = x.substring(0,5);
console.log( output);

// slice - (starting index & ending index)
var output = x.slice(0,5);
console.log( output);

// uppercase
var output = x.toUpperCase();
console.log( output);

// lowercase
var output = x.toLowerCase();
console.log( output);