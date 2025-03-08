let toggle=document.querySelector(".toggle");
let body=document.querySelector("body");
let btn=document.querySelector(".btn");
let sidebar=document.querySelector(".sidebar");
let nav=document.querySelector(".navbar");
let texthtml=document.querySelector(".textHTML");
let labelHtml=document.querySelector(".labelHtml");
let iframe=document.querySelector(".previewFrame").contentWindow.document;
let previewLabel=document.querySelector(".previewLabel");
let editor=CodeMirror.fromTextArea(texthtml, {
    mode: "htmlmixed", 
    lineNumbers: true,
    theme: "default", 
}
);
toggle.addEventListener("click", ()=>{
    if(window.getComputedStyle(document.body).backgroundColor==="rgba(239, 239, 239, 0.404)"){
        toggle.classList.add("toggle-dark");
        btn.classList.add("btn-dark");
        body.classList.add("docBody-dark");
        nav.classList.add("navbar-dark");
        sidebar.classList.add("sidebar-dark");
        labelHtml.classList.add("labelHtml-dark");
        previewLabel.classList.add("previewLabel-dark");
    }else{
        toggle.classList.remove("toggle-dark");
        btn.classList.remove("btn-dark");
        body.classList.remove("docBody-dark");
        nav.classList.remove("navbar-dark");
        sidebar.classList.remove("sidebar-dark");
        labelHtml.classList.remove("labelHtml-dark");
        previewLabel.classList.remove("previewLabel-dark");
    }
})
btn.addEventListener("click", ()=>{
    let value=editor.getValue();
    iframe.open();
    iframe.write(value);
    iframe.close();
})