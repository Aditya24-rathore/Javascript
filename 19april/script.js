// reference data type
// array
const number = [1,2,3,4];
console.log(number,typeof number);

const person = {
    name : "john",
    age : 34,
    city : "Bhopal",
};

console.log(person,typeof person);

// function
// function declaration
function sayhello(){
    console.log("hello");
}

sayhello();
console.log(sayhello,typeof sayhello);

// Operators
// Arthemetic operator

let x;
x = 5+5;
console.log(x);
x = 5-5;
x = 5/5;
x = 5%5;
x = 5*5;
console.log(x);

// Concatenation
x = "Hello"+" "+"World";
console.log(x);

// equality operator
x=2 == "2";
console.log(x);
// it only check value
x=2 === "2";
console.log(x);
// it check value along with datatype