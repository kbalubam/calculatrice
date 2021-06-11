import "./html.js";

let tabBtnNumber= document.querySelector(".number").querySelectorAll("div");
let input = document.querySelector("input");
console.log(tabBtnNumber);
tabBtnNumber.forEach(elem=>{
    elem.addEventListener("click",()=>{
        if(elem.textContent=="C"){
            input.value="";
        }else{
        input.value+=elem.textContent;
        }
        
    })
});

