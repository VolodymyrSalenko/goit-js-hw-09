const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.body;let o=0;t.addEventListener("click",(function(){t.setAttribute("disabled","true"),o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.d2293b06.js.map
