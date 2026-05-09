const max = 10;
const min = 1;

let randomNum,guessNum;
// console.log(randomNum);

const mySubmit = document.getElementById("mySubmit");
const range = document.getElementById("range");
const guessNumbt=document.getElementById("guessNum");
const result=document.getElementById("result");

range.textContent=`Range ${min} - ${max}`;

randomNum = Math.floor(Math.random() * (max - min) + min);

mySubmit.onclick=function(){
    guessNum = Number(guessNumbt.value);
    if (randomNum > guessNum) {
        result.textContent = "Higher";
    } 
    else if (randomNum < guessNum) {
        result.textContent = "Lower";
    } 
    else {
        result.textContent = `${randomNum} Guessed it`;
    }
}
