let toggle=document.querySelector(".toggle");
let body=document.querySelector("body");
let btn=document.querySelector(".btn");
let sidebar=document.querySelector(".sidebar");
let nav=document.querySelector(".navbar");
let texthtml=document.querySelector(".textHTML");
let labelHtml=document.querySelector(".labelHtml");
let iframe=document.querySelector(".previewFrame").contentWindow.document;
let previewLabel=document.querySelector(".previewLabel");
let textcss=document.querySelector(".textCSS");
let textjs=document.querySelector(".textJS");
let labelCss=document.querySelector(".labelCss");
let labelJs=document.querySelector(".labelJs");
let textHtml=document.querySelector(".texthtml");
let textCss=document.querySelector(".textcss");
let textJs=document.querySelector(".textjs");
let preview=document.querySelector(".preview");
let editor=CodeMirror.fromTextArea(texthtml, {
    mode: "htmlmixed", 
    lineNumbers: true,
    theme: "default",
    extraKeys: {"Ctrl-/": "toggleComment"}
    });

let editorCSS=CodeMirror.fromTextArea(textcss, {
    mode: "css",
    lineNumbers: true,
    theme: "default",
    autoCloseBrackets: true,
    extraKeys: {"Ctrl-/":"toggleComment"}
});
let editorJS=CodeMirror.fromTextArea(textjs, {
    mode:"javascript", 
    lineNumbers: true,
    theme: "default",
    extraKeys: {"Ctrl-/":"toggleComment"}
});
toggle.addEventListener("click", ()=>{
    if(window.getComputedStyle(document.body).backgroundColor==="rgba(255, 255, 255, 0.404)"){
        toggle.classList.add("toggle-dark");
        btn.classList.add("btn-dark");
        body.classList.add("docBody-dark");
        nav.classList.add("navbar-dark");
        sidebar.classList.add("sidebar-dark");
        labelHtml.classList.add("labelHtml-dark");
        previewLabel.classList.add("previewLabel-dark");
        labelCss.classList.add("labelCss-dark");
        labelJs.classList.add("labelJs-dark");
        editor.setOption("theme", "dracula");
        editorCSS.setOption("theme", "dracula");
        editorJS.setOption("theme", "dracula");
        textHtml.classList.add("texthtml-dark");
        textCss.classList.add("textcss-dark");
        textJs.classList.add("textjs-dark");
        preview.classList.add("preview-dark");
    }else{
        toggle.classList.remove("toggle-dark");
        btn.classList.remove("btn-dark");
        body.classList.remove("docBody-dark");
        nav.classList.remove("navbar-dark");
        sidebar.classList.remove("sidebar-dark");
        labelHtml.classList.remove("labelHtml-dark");
        previewLabel.classList.remove("previewLabel-dark");
        labelCss.classList.remove("labelCss-dark");
        labelJs.classList.remove("labelJs-dark");
        editor.setOption("theme", "default");
        editorCSS.setOption("theme", "default");
        editorJS.setOption("theme", "default");
        textHtml.classList.remove("texthtml-dark");
        textCss.classList.remove("textcss-dark");
        textJs.classList.remove("textjs-dark");
        preview.classList.remove("preview-dark");
    }
})
btn.addEventListener("click", ()=>{
    let value=editor.getValue();
    let cssvalue=`<style>${editorCSS.getValue()}</style>`;
    let jsvalue=`<script>${editorJS.getValue()}</script>`;
    iframe.open();
    iframe.write(value+cssvalue+jsvalue);
    iframe.close();
})
