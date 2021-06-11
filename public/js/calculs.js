import "./html.js";

let tabBtnNumber= document.querySelector(".number").querySelectorAll("div");
let input = document.querySelector("input");

let temp = "";
let temp2 = "";
let op = "";
let reset =

tabBtnNumber.forEach(element => {
    element.addEventListener("click", () => {
        if(element.textContent=="C"){
            document.location.reload();
            
        }
        else if (input.getAttribute("check") == "ok") {
            temp += element.textContent;
            
            input.value += element.textContent;
        }
        else if(input.getAttribute("check") == "not ok") {
            temp2 += element.textContent;
            input.value += element.textContent;
        } 
    });
});


let tabOperation = document.querySelector(".operation").querySelectorAll(".numberTaille2");

tabOperation.forEach(element => {
    element.addEventListener("click", (e) => {
        input.setAttribute("check", "not ok");
        input.value = element.textContent;
        op = e.target.textContent;
    })
});

let egual = document.querySelector(".equal");
console.log(egual);

egual.addEventListener("click", (e) => {
    if (op == "+") {
        input.value = parseInt(temp) + parseInt(temp2);
    }
    else if (op == "-") {
        input.value = parseInt(temp) - parseInt(temp2);
    }
    else if (op == "*") {
        input.value = Math.floor(parseInt(temp) * parseInt(temp2));
    }
    else if (op == "/") {
        input.value = Math.floor(parseInt(temp) / parseInt(temp2));
    }
});
