import "./html.js";

let tabBtnNumber= document.querySelector(".number").querySelectorAll("div");
let input = document.querySelector("input");

let temp = "";
let temp2 = "";
let op = "";

tabBtnNumber.forEach(element => {
    element.addEventListener("click", () => {
        if (input.getAttribute("check") == "ok") {
            temp += element.textContent;
            console.log(temp);
            input.value += element.textContent;
        }
        else {
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


