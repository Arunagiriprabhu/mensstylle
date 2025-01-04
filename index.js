let height=document.getElementById("height1")
let weight=document.getElementById("weight1")
let button=document.getElementById("btn")

let container=document.getElementById("container2");
let result=document.querySelector("output")

button.addEventListener("click",()=>{
    let newheight=height.value;
    let newweight=weight.value;
    
    newheight=newheight / 100;
    sqrheight = newheight * newheight;

    let bmi=newweight / sqrheight;
    container.textContent=bmi.toFixed(2);
    result.style.display="block";
    
})




let form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})



var pop1= document.querySelector(".overlay1")
var popup1= document.querySelector(".popup1")                                   

function show()
{
   popup1.style.display="block"
   popupoverlay.style.display="block"
} 
 function closepopup()
 {
         popup1.style.display="none"
         popupoverlay.style.display="none"
 }
 
 var pop2= document.querySelector(".overlay2")
var popup2= document.querySelector(".popup2")                                   

function show()
{
   popup1.style.display="block"
   popupoverlay.style.display="block"
} 
 function closepopup()
 {
         popup1.style.display="none"
         popupoverlay.style.display="none"
 }
 
 let pop3= document.querySelector(".overlay3")
let popup3= document.querySelector(".popup3")                                   

function show()
{
   popup1.style.display="block"
   popupoverlay.style.display="block"
} 
 function closepopup()
 {
         popup1.style.display="none"
         popupoverlay.style.display="none"
 }
 


