let burgerMenu = document.querySelector(".burger-menu");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");

burgerMenu.addEventListener("click", function (){
    menu.style.top = 0 + "%";
});

close.addEventListener("click", function (){
    menu.style.top = -1000 + "%";
});