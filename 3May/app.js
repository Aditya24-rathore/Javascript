// Function

// no return and no parameter
function display(){
    console.log("Hello");
}
display();

// no return with parameter
function add(num1,num2){
    console.log(num1+num2)
}
add(10,20);

// return with parameter
function multiply(num1,num2){
    return num1*num2;
}
let result=multiply(10,20)
console.log(result);

// return with no parameter
function show(){
    return("Hello");
}
let result1=show()
console.log(result1)

// Cube of a number
function cube(num){
    return num*num*num;
}
let cubic=cube(4)
console.log(cubic)


// function expression
let square=function(x){
return x*x;
}

console.log(square(10))

// arrow function-es6
const print=(name)=>{
    console.log(name)
};

print("Harry potter")


// immediately invoke function
( function (length,width){
    const area=length*width
    console.log(area)
}
) ();


