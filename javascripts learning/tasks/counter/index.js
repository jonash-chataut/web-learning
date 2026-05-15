const decreasebtn=document.getElementById("decreasebtn");
const increasebtn=document.getElementById("increasebtn");
const resetbtn=document.getElementById("resetbtn");
const counterLabel=document.getElementById("counterLabel");
let count=0;

increasebtn.onclick=function(){
    count++;
    counterLabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    counterLabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    counterLabel.textContent=count;
}
