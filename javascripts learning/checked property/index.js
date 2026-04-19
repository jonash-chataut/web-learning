const myCheckbox = document.getElementById("myCheckbox");
const cricket = document.getElementById("cricket");
const football = document.getElementById("football");
const basketball = document.getElementById("basketball");
const isITstu = document.getElementById("isITstu");
const hobby = document.getElementById("hobby");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick=function(){
    if(myCheckbox.checked)
    {
        isITstu.textContent="You are a IT student";
    }
    else{
         isITstu.textContent = "You are not IT student";
    }

    if(cricket.checked)
    {
        hobby.textContent="You are interested in cricket";
    }
    else if(football.checked)
    {
        hobby.textContent="You are interested in football";
    }
    else if(basketball.checked)
    {
        hobby.textContent="You are interested in basketball";
    }
    else{
        hobby.textContent="Select one of the three sports";
    }
}




