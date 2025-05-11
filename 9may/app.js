let heading=document.getElementById("demo")
console.log(heading)
//  heading=document.getElementsByClassName("head")
//   heading=document.getElementsByTagName("h1")
//  heading=document.querySelector(".head")
heading.style.cssText="color:red;background-color:yellow"

function change(){
    let para=document.getElementById("demo1")
    para.style.cssText="border:2px solid black;color:yellow;height:100px;width:200px;background-color:blue"
    let myid=document.getElementById("myid").value
    myid.value="indore"
    heading.innerHTML=myid
}

function display(){
    let name=document.getElementById("name").text
    let head=document.getElementById("name2")
    head.innerHTML=text
}