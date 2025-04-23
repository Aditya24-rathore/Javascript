// it return the value of pi
var a=Math.PI;
console.log(a);

// it return the square root of a number
console.log(Math.sqrt(100));

// ceil,floor,tofixed,abs,max,min
let output;
output=Math.abs(-78);
console.log(output);

// takes the upper value and round off
output=Math.ceil(-78.06);
console.log(output);

// takes the lower value and round off
output=Math.floor(78.6);
console.log(output);

// takes the roundoff value
output=Math.round(78.6);
console.log(output);

// return the integer value
output=Math.trunc(78.6);
console.log(output);

// returns -1 if negative and 0 if positive
output=Math.sign(0);
console.log(output);

// (x,y) returns x to the power of y
output=Math.pow(2,4);
console.log(output);

// returns the smallest num among all
output=Math.min(10,20,2,0);
console.log(output);

// returns the largest num among all
output=Math.max(10,20,2,0);
console.log(output);

// returns the random num between 0 and 1
output=Math.random();
console.log(output);

// returns the  integer random num between 0 and num
output=Math.floor(Math.random()*10);
console.log(output);

var x=Math.floor(Math.random()*100)+1;
var y=Math.floor(Math.random()*50)+1;
let sum,diff,mul,div;
sum=x+y;
diff=x-y;
mul=x*y;
div=x%y;
console.log(sum);
console.log(diff);
console.log(mul);
console.log(div);
