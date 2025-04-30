var colors=["red","yellow","blue","white"]
colors.splice(0,2,"green","black","pink")
console.log(colors)

var colors=["red","yellow","blue","white"]
colors.reverse()
console.log(colors)

// array to string
let colours=colors.toString();
console.log(colours,typeof colours);
console.log(colors)

// string to array
colours=colours.split(",")
console.log(colours)

let x=Array.isArray(colours)
console.log(x)

// concatenation
let num1=[1,2,3,4]
let num2 =[5,6,7,8]
let numbers=num1.concat(num2)
console.log(numbers)

// spread operator(...)
let number=[...num1,...num2]
console.log(number);

// 
const arr=[1,2,3,4,5]
arr.reverse()
arr.push(0)
arr.unshift(6)
console.log(arr)

// 
const arr1=[1,2,3,4,5]
const arr2=[5,6,7,8,9,10]
const arr3=arr1.concat(arr2)
arr3.splice(5,1)
console.log(arr3);