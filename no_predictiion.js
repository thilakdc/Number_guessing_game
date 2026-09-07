let start=document.querySelector(".realstart");
if(start){
start.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("You want to start");
    window.location.href="no_prediction.html";
});
}
let submit=document.querySelector(".button");
let num=document.querySelector(".num");
let final=document.querySelector(".detail");
if(submit){
const inValid=()=>{
    final.textContent="Enter The Number Between 1 And 100";
    num.value=" ";
    num.focus();
    final.style.backgroundColor="black";
    final.style.color="white";
}
const lose =(human_num,number)=>{
    if(number>human_num){
    final.textContent=`Well Try.Your Number Is Smaller`;
    final.style.backgroundColor="red";
    num.value=" ";
    num.focus();
    final.style.Color="white";
    }
    else{
    final.textContent=`Well Try.Your Number Is Greater`;
    final.style.backgroundColor="red";
    num.value=" ";
    num.focus();
    final.style.Color="white";
    }
    }
let count=0;
num.focus();
const number=Math.floor(Math.random()*100+1);
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("clicked");
        human_num=Number(num.value);
        console.log(human_num)
        if(human_num===number){
            count++;
            window.location.href=`last_page.html?attempt=${count}`;
        }
        else if(human_num > 0 && human_num <=100) {
            count++;
            lose(human_num,number);
        }
        else{
            inValid();
        }
    });
}
const restart =document.querySelector(".button2");
const change =document.querySelector(".change");
if(restart){
const data = new URLSearchParams(window.location.search);
const attempt=data.get("attempt");
change.textContent=`You Took "${attempt}" attemts To Find It`;
    restart.addEventListener("click",(e)=>{
        e.preventDefault();
        window.location.href="no_prediction.html";
    });
}