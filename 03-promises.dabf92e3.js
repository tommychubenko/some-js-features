!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),c=document.querySelector("[name=delay]"),i=document.querySelector("[name=step]"),u=document.querySelector("[name=amount]");function l(e,n,o){for(var t=function(o){setTimeout((function(){return(t=Math.random()>.3,new Promise((function(e,n){t?e():n()}))).then((function(t){r.Notify.success("Fullfilled promise ".concat(o," in ").concat(o*n+e," mseconds"))})).catch((function(){r.Notify.failure("Rejected promise ".concat(o," in ").concat(o*n+e," mseconds"))}));var t}),o*n+e)},c=1;c<=o;c+=1)t(c)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault(),l(1e3,i.value,u.value),console.log(c.value)}))}();
//# sourceMappingURL=03-promises.dabf92e3.js.map
