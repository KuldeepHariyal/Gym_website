window.addEventListener("scroll", function () {
    var header = document.querySelector(".menu");
    header.classList.toggle('sticky', window.scrollY > 0);
});

menubtn=document.querySelector(".menu_btn");
menubtn.onclick=function(){
    navbar=document.querySelector(".navbar");
    navbar.classList.toggle("active");
}