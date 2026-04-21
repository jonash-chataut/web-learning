const max=6;
const min=1;

let randomNum
// console.log(randomNum);

const mybutton=document.getElementById("roll");
const mylabel=document.getElementById("label");

mybutton.onclick=function(){
    randomNum = Math.floor(Math.random() * (max - min) + min);
    mylabel.textContent=randomNum;
}
