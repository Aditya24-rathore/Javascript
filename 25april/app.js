// Date
// new Date(year,month,day,hours,minutes,second,milisecond)
let d=new Date()
d=new Date(2019,2,24,13,45,43,54);
console.log(d);

// Date.now gives the current date in milisecond
const newDate=Date.now();
console.log(newDate);

// year
const year=d.getFullYear();
console.log(year)

// month
const month=d.getMonth();
console.log(month)

// Day
const day=d.getDay();
if(day==1){
    console.log("Monday");
}
else if(day==2){
    console.log("Tuesday");
}
else if(day==3){
    console.log("Wednesday");
}
else if(day==4){
    console.log("Thursday");
}
else if(day==5){
    console.log("Friday");
} 
else if(day==6){
    console.log("Saturday");
}
else if(day==7){
    console.log("Sunday");
}


