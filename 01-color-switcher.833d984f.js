const t={startBtn:document.querySelector("[data-start]"),stoptBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.disabled=!0,t.stoptBtn.disabled=!1})),t.stoptBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1,t.stoptBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.833d984f.js.map
