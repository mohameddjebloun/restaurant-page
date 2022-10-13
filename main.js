(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(853),t.b),l=new URL(t(956),t.b),u=c()(o()),p=s()(d),f=s()(l);u.push([e.id,'@font-face {\n    font-family: "Montserrat";\n    src: url('+p+') format("ttf"),\n        url('+f+') format("ttf");\n    font-weight: 600;\n    font-style: normal;\n}\n:root {\n    --darkGray: #8c8b7b;\n    --whiteYellow: #f2edd5;\n    --lightBlack: #26211c;\n    --black: #0d0000;\n    --lightGray: #f2f2f2;\n}\nbody,\nhtml {\n    font-size: 16px;\n    border: 0;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n}\n#content {\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--lightGray);\n}\n#navbar {\n    display: flex;\n    justify-content: center;\n    background-color: var(--darkGray);\n    width: 100vw;\n    gap: 10px;\n}\n#navbar > button {\n    border: 0;\n    font-size: 2rem;\n    font-family: "Montserrat";\n    background-color: var(--whiteYellow);\n}\n#navbar > button:hover {\n    text-decoration: underline;\n}\n.container {\n    background-color: var(--whiteYellow);\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.container > h1 {\n    font-size: 4rem;\n    margin-bottom: 0;\n}\n.container > img {\n    max-width: 70%;\n    height: 300px;\n}\n.polygon {\n    font-size: 2rem;\n    font-family: "Montserrat";\n    text-align: center;\n    background-color: var(--darkGray);\n    clip-path: polygon(\n        0 20%,\n        10% 0,\n        90% 0,\n        100% 20%,\n        100% 80%,\n        90% 100%,\n        10% 100%,\n        0 80%\n    );\n}\n',""]);const m=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},956:(e,n,t)=>{e.exports=t.p+"3faa3eef13649db02044.ttf"},853:(e,n,t)=>{e.exports=t.p+"2c155811b35513d5beaa.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"ce9caf892b4f7a54a620.jpg",v=t.p+"1d0533924930d9576f78.jpg",g=t.p+"a416abc868e2cf96adcd.jpg",b=t.p+"74079122bbb9943fa41f.jpg",y=t.p+"ae666cd92199559e0889.jpg",x=t.p+"5c6396603f134e9dbf83.jpg";!function(){const e=document.querySelector("#content"),n=document.createElement("div");n.id="navbar";const t=document.createElement("button");t.innerText="Home";const r=document.createElement("button");r.innerText="Menu";const o=document.createElement("button");o.innerText="Contact",n.append(t,r,o),e.appendChild(n)}(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("container");const t=document.createElement("h1");t.innerText="Menu",t.classList.add("polygon");const r=document.createElement("div");r.classList.add("container","polygon");const o=document.createElement("h2");o.innerText="Au Gratin";const a=new Image;a.src=h,r.append(o,a);const c=document.createElement("div");c.classList.add("container","polygon");const i=document.createElement("h2");i.innerText="Creamy Mashed";const s=new Image;s.src=v,c.append(i,s);const d=document.createElement("div");d.classList.add("container","polygon");const l=document.createElement("h2");l.innerText="French Fries";const u=new Image;u.src=g,d.append(l,u);const p=document.createElement("div");p.classList.add("container","polygon");const f=document.createElement("h2");f.innerText="Greek Salad";const m=new Image;m.src=b,p.append(f,m);const w=document.createElement("div");w.classList.add("container","polygon");const E=document.createElement("h2");E.innerText="Pierogi";const T=new Image;T.src=y,w.append(E,T);const M=document.createElement("div");M.classList.add("container","polygon");const S=document.createElement("h2");S.innerText="Southern Fried";const j=new Image;j.src=x,M.append(S,j),n.append(t,r,c,d,p,w,M),e.appendChild(n)}()})()})();