const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let o="";function a(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,o=setInterval(a,1e3)})),d.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.bcca0f98.js.map