// const { use } = require("react");
let fullName="Jonash Chataut"
let age=20;
let isStudent=true

//variables and display 
document.getElementById("p1").textContent=`Your full name is ${fullName}`;
document.getElementById("p2").textContent=`Your age is ${age}`;
document.getElementById("p3").textContent=`Enrolled: ${isStudent}`;
// console.log(`You are ${age} year old`);

//Input taking methods
//1. using window prompt
// userName=window.prompt("What is your username");
// console.log(userName);

//2. using html textbox
let username;
document.getElementById("mysubmit").onclick=function () {
    username=document.getElementById("myinput").value;
    console.log(username);
    
}

//Change the data type

let x="50"
y=Number(x)
console.log(y,typeof(y))

//Constants
const PI=3.14










