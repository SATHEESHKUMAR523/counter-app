let decrease=document.getElementById("decreasebtn");
let reset=document.getElementById("resetbtn");
let increase=document.getElementById("increasebtn");
let countervalue=document.getElementById("counter")

let count=0;
increase.onclick=function (){
    count++;
    countervalue.textContent=count;

}
 decrease.onclick=function (){
    count--;
    countervalue.textContent=count;
 }
 reset.onclick=function(){
    count=0;
    countervalue.textContent=count;
 }