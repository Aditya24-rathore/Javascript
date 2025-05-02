const person={
    name:"harry potter",
    age:34,
    city:"London",
    id:1,
};

// object convert to json string
const data=JSON.stringify(person)
console.log(data)
console.log(person)

// Json string to object
const mydata=JSON.parse(data)
console.log(mydata)


const library=[
    {
        title:"War and peace",
        author:"Leo Tolstoy",
        status:{
            own:true,
            reading:false,
            read:false,
        },
    }
]

library[0].status.read=true
library2=JSON.stringify(library)
console.log(library2)