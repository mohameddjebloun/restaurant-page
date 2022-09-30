(()=>{"use strict";var e,t,n,r,o,a,i,c,s,u,l,d,p,m,f={426:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),u=new URL(n(853),n.b),l=new URL(n(956),n.b),d=i()(o()),p=s()(u),m=s()(l);d.push([e.id,'@font-face {\n    font-family: "Montserrat";\n    src: url('+p+') format("ttf"),\n        url('+m+') format("ttf");\n    font-weight: 600;\n    font-style: normal;\n}\n:root {\n    --darkGray: #8c8b7b;\n    --whiteYellow: #f2edd5;\n    --lightBlack: #26211c;\n    --black: #0d0000;\n    --lightGray: #f2f2f2;\n}\nbody,\nhtml {\n    font-size: 16px;\n    border: 0;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n}\n#content {\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--lightGray);\n}\n#navbar {\n    display: flex;\n    justify-content: center;\n    background-color: var(--darkGray);\n    width: 100vw;\n    gap: 10px;\n}\n#navbar > button {\n    border: 0;\n    font-size: 2rem;\n    font-family: "Montserrat";\n    background-color: var(--whiteYellow);\n}\n#navbar > button:hover {\n    text-decoration: underline;\n}\n.container {\n    background-color: var(--whiteYellow);\n    border-radius: 20px;\n}\n.container > h1 {\n    font-size: 4rem;\n}\n.polygon {\n    font-size: 2rem;\n    font-family: "Montserrat";\n    text-align: center;\n    background-color: var(--darkGray);\n    clip-path: polygon(\n        0 20%,\n        10% 0,\n        90% 0,\n        100% 20%,\n        100% 80%,\n        90% 100%,\n        10% 100%,\n        0 80%\n    );\n}\n',""]);const f=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},956:(e,t,n)=>{e.exports=n.p+"3faa3eef13649db02044.ttf"},853:(e,t,n)=>{e.exports=n.p+"2c155811b35513d5beaa.ttf"}},v={};function h(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return f[e](n,n.exports,h),n.exports}h.m=f,h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;h.g.importScripts&&(e=h.g.location+"");var t=h.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})(),h.b=document.baseURI||self.location.href,h.nc=void 0,e=h(379),t=h.n(e),n=h(795),r=h.n(n),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),u=h.n(s),l=h(589),d=h.n(l),p=h(426),(m={}).styleTagTransform=d(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="navbar";const n=document.createElement("button");n.innerText="Home";const r=document.createElement("button");r.innerText="Menu";const o=document.createElement("button");o.innerText="Contact",t.append(n,r,o),e.appendChild(t)}(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("h1");n.innerText="Batata's Potatoes Specials",n.classList.add("polygon");const r=document.createElement("p");r.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur tellus sem, sed tempus dolor tempor at. Nullam euismod lacinia leo, sit amet congue nisi auctor vel. Quisque sodales porta elit, dignissim rutrum orci rutrum ullamcorper. Ut eget orci eget elit congue varius vel vitae est. Cras fringilla libero in sapien vulputate, ac convallis lacus consequat. Fusce eleifend maximus velit ac pretium. Integer egestas rutrum ullamcorper. Quisque commodo gravida arcu, quis accumsan nunc faucibus quis.",r.classList.add("polygon");const o=document.createElement("p");o.innerText="Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm",o.classList.add("polygon");const a=document.createElement("p");a.innerText="123 Forest Drive, Forestville, Maine",a.classList.add("polygon"),t.append(n,r,o,a),e.appendChild(t)}()})();