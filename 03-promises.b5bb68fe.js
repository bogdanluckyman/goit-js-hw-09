function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const s=document.querySelector(".form");function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}s.addEventListener("submit",(function(t){t.preventDefault();const n=parseInt(s.elements.delay.value),o=parseInt(s.elements.step.value);!function(t,n,o){const r=[];if(s.reset(),o<0||n<0||t<=0)return e(i).Notify.info("🤌Сhoose the correct value");for(let s=1;s<=t;s++){const t=l(s,n+(s-1)*o);t.then((({position:t,delay:n})=>e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`))).catch((({position:t,delay:n})=>e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`))),r.push(t)}}(parseInt(s.elements.amount.value),n,o)}));
//# sourceMappingURL=03-promises.b5bb68fe.js.map
