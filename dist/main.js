(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),d=new URL(n(68),n.b),l=i()(o()),u=c()(d);l.push([t.id,"/* Global styling */\n\n@font-face {\n    font-family: 'lato-light';\n    src: url("+u+") format('truetype');\n}\n\n:root {\n    --theme-color: rgb(207, 55, 113);\n    --theme-contrast: rgb(233, 233, 233);\n}\n\n* {\n    box-sizing: border-box;\n    user-select: none;\n    font-family: 'lato-light', Arial, Helvetica, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n\n/* Main layout */\n\nbody {\n    height: 100vh;\n    width: auto;\n    \n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 40px 1fr;\n}\n\n.header {\n    grid-column: span 2;\n}\n\n\n/* Sidebar */\n\n.sidebar {\n    background-color: var(--theme-contrast);\n    padding-top: 25px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.sidebar .title {\n    font-weight: bold;\n    align-self: center;\n}\n\n.sidebar .project {\n    display: flex;\n    align-items: center;\n    padding-left: 25px;\n    height: 40px;\n}\n\n.sidebar .project:hover {\n    transform: translateX(5px);\n    cursor: pointer;\n}\n\n.sidebar .project.active {\n    background-color: white;\n    font-weight: bold;\n}\n\n.sidebar .svg {\n    height: 20px;\n}\n\n.sidebar .title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n\n/* Header */\n\n.header .svg {\n    height: 20px;\n    filter: invert(100%);\n}\n\n.img {\n    border-radius: 100%;\n    height: 25px;\n    width: auto;\n}\n\n.header {\n    background-color: var(--theme-color);\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 20px;\n    padding: 0 2rem;\n}\n\n.search-bar {\n    display: flex;\n    align-items: center;\n    margin-right: auto;\n    gap: 10px;\n}\n\n.search-bar input {\n    flex: auto;\n    background-color: rgba(0,0,0,0.2);\n    border: none;\n    border-radius: 1rem;\n    height: 1.5rem;\n    color: white;\n    padding-left: 10px;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n\n/* Main content */\n\n.main {\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main button {\n    margin-top: 50px;\n    padding: 1.5rem 3rem;\n    border: none;\n    background-color: var(--theme-contrast);\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 200px;\n\n    padding-top: 50px;\n    width: 100%;\n}\n\n.container .svg {\n    height: 25px;\n    filter: invert(50%);\n}\n\n.module {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 5px;\n    padding: 20px 0;\n\n    border-bottom: 2px solid var(--theme-contrast);\n    color: black;\n    width: 100%;\n}\n\n.module > img {\n    grid-row: span 2;\n    align-self: center;\n    margin-right: 20px;\n}\n\n.module > img:hover {\n    cursor: pointer;\n}\n\n.module > .due-date {\n    color: rgb(127,127,127);\n}\n\n.module > .title {\n    font-size: 1.1rem;\n}\n\n\n/* Form popup */\n\n.form-popup {\n    display: none;\n\tposition: fixed;\n\ttop: 25%;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tborder: 2px solid rgb(127,127,127);\n\tz-index: 2;\n\theight: 500px;\n\twidth: 300px;\n\tbackground-color: var(--theme-contrast);\n}\n\n.form-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\nform button {\n    border-radius: 0.25rem;\n    height: 2rem;\n    width: 10rem;\n    background-color: white;\n    border: none;\n    font-weight: bold;\n}\n\nform button:hover {\n    cursor: pointer;\n}\n\nlabel {\n\tfont-weight: bold;\n}\n\ninput {\n\tfont-size: 1.1rem;\n\tpadding: 5px;\n    width: 70%;\n}\n\n.submit {\n    margin-top: 50px;\n}",""]);const p=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},68:(t,e,n)=>{t.exports=n.p+"c7400fcad9e48ca9043f.ttf"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector("body"),h=(t,e)=>{const n=document.createElement("div");e&&(n.id=e);const r=t.split(" ");for(const t of r)n.classList.add(t);return n},b=(t,e,n)=>{const r=document.createElement("img"),o=n.split(" ");for(const t of o)r.classList.add(t);return r.setAttribute("alt",e),r.setAttribute("src",`../src/images/${t}`),r},v=(t,e,n)=>{const r=document.createElement("label");r.setAttribute("for",t);const o=document.createElement("input");return o.setAttribute("type",e),o.setAttribute("name",t),o.setAttribute("id",t),o.setAttribute("required",""),[r,o]};let x=[];const y=()=>{localStorage.setItem("projectObject",JSON.stringify(x))},w=()=>{const t=document.querySelector(".sidebar");t&&t.remove();const e=h("sidebar"),n=h("title");n.textContent="Projects";const r=b("add.svg","add project","svg add");r.addEventListener("mousedown",(()=>{document.querySelector(".form-popup.proj").style.display="block"})),n.append(r),e.append(n),e.append(...function(){let t=[];for(let e=0;e<x.length;e++){const n=h("project",`${e}`);n.textContent=x[e].name,e===x.length-1&&n.classList.add("active"),n.addEventListener("mousedown",(()=>{document.querySelectorAll(".sidebar > div").forEach((t=>t.classList.remove("active"))),n.classList.add("active"),E(n.id)})),t.push(n)}return t}()),g.append(e)},E=t=>{const e=document.querySelector(".main");e&&e.remove();const n=h("main"),r=document.createElement("button");r.id="add-task",r.setAttribute("type","button"),r.textContent="Add task",r.addEventListener("mousedown",(()=>{document.querySelector(".task").style.display="block"}));const o=h("container");o.append(...function(t){let e=[],n=x[t],r=n.tasks;for(let t=0;t<r.length;t++){const o=r[t].task,a=r[t].inputDate,i=h("module",`module-${t}`);i.addEventListener("mousedown",(e=>{n.remove(r[t]),y(),i.remove()}));const s=b("circle.svg","checkbox","svg check-box"),c=h("title");c.textContent=o;const d=h("due-date");d.textContent=a,i.append(s,c,d),e.push(i)}return e}(t)),n.append(r,o),g.append(n)};(()=>{let t=localStorage.getItem("projectObject");if(t){x=JSON.parse(t);for(let t of x)t.add=e=>{t.tasks.push(e)},t.remove=e=>{const n=t.tasks.indexOf(e);n>-1&&t.tasks.splice(n,1)}}(()=>{const t=h("form-popup proj"),e=document.createElement("form");e.classList.add("form-container"),e.setAttribute("action","");const n=document.createElement("h1");n.textContent="New Project";const r=v("name","text"),o=document.createElement("button");o.setAttribute("type","submit"),o.classList.add("submit"),o.textContent="Add project",o.addEventListener("mousedown",(()=>{""!==r[1].value&&(x.push((t=>{let e=[];return{name:t,tasks:e,add:t=>{e.push(t)},remove:t=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}})(`${r[1].value}`)),r[1].value="",t.style.display="none",y(),w(),E(x.length-1))}));const a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("exit"),a.textContent="Exit",a.addEventListener("mousedown",(()=>{r[1].value="",t.style.display="none"})),e.append(n,...r,o,a),t.append(e),g.append(t)})(),(()=>{const t=h("form-popup task"),e=document.createElement("form");e.classList.add("form-container"),e.setAttribute("action","");const n=document.createElement("h1");n.textContent="New Task";const r=v("title","text"),o=v("date","date"),a=v("time","time"),i=document.createElement("button");i.setAttribute("type","submit"),i.classList.add("submit"),i.textContent="Add task",i.addEventListener("mousedown",(()=>{const e=document.querySelector(".active");let n=((t,e)=>({task:t,inputDate:e}))(r[1].value,`${o[1].value}   ${a[1].value}`);x[Number(e.id)].add(n),r[1].value="",o[1].value="",a[1].value="",t.style.display="none",y(),E(e.id)}));const s=document.createElement("button");s.setAttribute("type","button"),s.classList.add("exit"),s.textContent="Exit",e.append(n,...r,...o,...a,i,s),t.append(e),g.append(t)})(),(()=>{const t=h("header"),e=b("menu.svg","menu button","svg menu-button"),n=h("search-bar"),r=b("search.svg","search-button","svg search-button"),o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("maxlength","100"),n.append(r,o);const a=b("add.svg","add project","svg add"),i=b("bell.svg","notifications","svg notification"),s=b("profile-pic.png","profile picture","img profile-pic");t.append(e,n,a,i,s),g.append(t)})(),w(),E(x.length-1)})()})()})();