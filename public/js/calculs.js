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
document.body.addEventListener("keydown", (e)=>{
   if (e.keyCode=="48"){

    if (input.getAttribute("check") == "ok") {
        temp += 0;
        
        input.value += 0;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=0;
        input.value += 0;
        
        
    } 
   } else if (e.keyCode=="49"){
    if (input.getAttribute("check") == "ok") {
        temp += 1;
        
        input.value += 1;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=1;
        input.value += 1;
        
    } 
   
   } else if (e.keyCode=="50"){
    if (input.getAttribute("check") == "ok") {
        temp += 2;
        
        input.value += 2;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=2;
        input.value += 2;
        
        
    } 
   } else if (e.keyCode=="51"){
    if (input.getAttribute("check") == "ok") {
        temp += 3;
        
        input.value += 3;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=3;
        input.value += 3;
        
        
    } 
   }
   else if (e.keyCode=="52"){
    if (input.getAttribute("check") == "ok") {
        temp += 4;
        
        input.value += 4;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=4;
        input.value += 4;
        
        
    } 
   }else if (e.keyCode=="53"){
    if (input.getAttribute("check") == "ok") {
        temp += 5;
        
        input.value += 5;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=5;
        input.value += 5;
        
        
    } 
   }else if (e.keyCode=="54"){
    if (input.getAttribute("check") == "ok") {
        temp += 6;
        
        input.value += 6;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=6;
        input.value += 6;
        
        
    } 
   }else if (e.keyCode=="55"){
    if (input.getAttribute("check") == "ok") {
        temp += 7;
        
        input.value += 7;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=7;
        input.value += 7;
        
        
    } 
   }else if (e.keyCode=="56"){
    if (input.getAttribute("check") == "ok") {
        temp += 8;
        
        input.value += 8;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=8;
        input.value += 8;
        
        
    } 
   }else if (e.keyCode=="57"){
    if (input.getAttribute("check") == "ok") {
        temp += 9;
        
        input.value += 9;
        
    }
    else if(input.getAttribute("check") == "not ok") {
        temp2 +=9;
        input.value += 9;
    }
}
    
        
        
    
})


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

document.body.addEventListener("keydown", (e) => {
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




