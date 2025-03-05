let toggle=document.querySelector(".toggle");
let body=document.querySelector("body");
let btn=document.querySelector(".btn");
let sidebar=document.querySelector(".sidebar");
let nav=document.querySelector(".navbar");
toggle.addEventListener("click", ()=>{
    if(window.getComputedStyle(document.body).backgroundColor==="rgb(255, 255, 255)"){
        toggle.classList.add("toggle-dark");
        btn.classList.add("btn-dark");
        body.classList.add("docBody-dark");
        nav.classList.add("navbar-dark");
        sidebar.classList.add("sidebar-dark");
    }else{
        toggle.classList.remove("toggle-dark");
        btn.classList.remove("btn-dark");
        body.classList.remove("docBody-dark");
        nav.classList.remove("navbar-dark");
        sidebar.classList.remove("sidebar-dark");
    }
})