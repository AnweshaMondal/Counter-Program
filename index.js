//COUNTER PROGRAM

//accessing  the buttons
let count=0;

//increase function 
document.getElementById("increase").onclick=function(){
count++;
document.getElementById("countLabel").textContent=count;
}

//decrease  function
document.getElementById("decrease").onclick=function(){
    count--;
    document.getElementById("countLabel").textContent=count;
}

//reset function
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("countLabel").textContent=count;
}

