let rightIcon = document.querySelector(".general .icons .right");
let leftIcon = document.querySelector(".general .icons .left");

let sliderMain = document.querySelector("#slider-wrap .slider-main");
let item = document.querySelectorAll(".card")

rightIcon.addEventListener("click",function(){
    sliderMain.append(item[0])
})
 
leftIcon.addEventListener("click",function(){
    sliderMain.prepend(item[item.length-1])
})