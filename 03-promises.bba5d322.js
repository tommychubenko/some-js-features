var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const l=document.querySelector("[name=delay]"),u=document.querySelector("[name=step]"),i=document.querySelector("[name=amount]");function d(){const e=Math.random()>.3;return new Promise(((o,n)=>{e?o():n()}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault(),function(e,o,n){for(let t=1;t<=n;t+=1)setTimeout((()=>d().then((()=>{r.Notify.success(`Fullfilled promise ${t} in ${t*o+e} mseconds`)})).catch((()=>{r.Notify.failure(`Rejected promise ${t} in ${t*o+e} mseconds`)}))),t*o+e)}(Number(l.value),u.value,i.value),console.log(typeof Number(l.value))}));
//# sourceMappingURL=03-promises.bba5d322.js.map