const para = document.querySelectorAll(".para");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");


for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",()=>{
        plus[i].classList.toggle("hide");
        minus[i].classList.toggle("hide");
        para[i].classList.toggle("hide");
    })
}

for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",()=>{
        plus[i].classList.toggle("hide");
        minus[i].classList.toggle("hide");
        para[i].classList.toggle("hide");
    })
}