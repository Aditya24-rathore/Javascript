// for in loop - for in loop variable denote index number
const person={
    name:"john",
    age:23,
    city:"Bhopal",
    country:"India",
};

for(let x in person){
    console.log(person[x]);
}

const numbers=[10,20,30,40,50];

for(let x in numbers){
    console.log(numbers[x]);
}

// for of loop - for of loop variable denote element
const fruits=["apple","kiwi","orange","cherry"];
for (let x of fruits){
    console.log(x)
}

const str="javascript"
for (let x of str){
    console.log(x)
}


const arr=[1,2,3,4,5]
const square=()=>{
    for(let x of arr){
        console.log(x+x)
    }
}

square()