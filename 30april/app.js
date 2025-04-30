const person={
    name:"aditya",
    age:20,
    iseligible:true,
    address:{
        state:"Mp",
    },
    hobby:["sports","learning"],
    hello:function() {
        console.log("hello")
    },
}



// update value
person.name="Aditya Rathore";
console.log(person)

// add new property
person.address.city="Bhopal";
console.log(person)

// call function
person.hello()

// spread operator - copies a part of an array or object into another arry or object respectively

const obj={
    a:1,
    b:2,
}

const obj1={
    c:3,
    d:4,
}

const obj2={...obj,...obj1}
console.log(obj2)

// array of object
const list=[
    {name:"harry",age:45},
    {name:"ron",age:20},
    {name:"hagrid",age:56},
    {name:"dumbledoor",age:60}
];

console.log(list[1].name)
console.log(`${list[3].name} ${list[3].age} `)

// destructuring with spread operator
const arr=[1,2,3,4,5,6,7,8,9]
const [a,b,c,d,...x]=arr;
console.log(`${a} ${b} ${c} ${d}`);
console.log(`${x}`)

// destructuring in object
const car ={
    color:"black",
    model:"BMW",
    year:2025
};

const{color,model,year}=car;
console.log(color+model+year);

