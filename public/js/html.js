let divP = document.createElement("div");
document.body.appendChild(divP);
divP.setAttribute("class", "principale");

let input= document.createElement("input");
divP.appendChild(input);
input.setAttribute("class", "calcul");

let divGlob = document.createElement("div");
divP.appendChild(divGlob);
divGlob.setAttribute("class", 'globale');

let divNumber=document.createElement("div");
divGlob.appendChild(divNumber);
divNumber.setAttribute("class", "number");

let divOper=document.createElement("div");
divGlob.appendChild(divOper);
divOper.setAttribute("class", "operation");

let Equal = document.createElement("div");
divP.appendChild(Equal);
Equal.setAttribute("class", "equal");
Equal.textContent="="


let TabNumber = ["0","1", "2", "3", "4", "5", "6", "7", "8","9","C","."];

TabNumber.forEach(elem =>{
    let btnC = document.createElement("div");
    divNumber.appendChild(btnC);
    btnC.textContent=elem;
    btnC.setAttribute("class", "numberTaille");

});

let Tabop = ["+", "-", "/", "*"];

Tabop.forEach(elem=>{
    let btnC2 = document.createElement("div");
    divOper.appendChild(btnC2);
    btnC2.textContent=elem;
    btnC2.setAttribute("class", "numberTaille2");
})

