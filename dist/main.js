(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\r\n  background-color: #f6f6f6;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.todo-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  width: 40%;\r\n  min-width: 280px;\r\n  height: auto;\r\n  padding: 20px 0 0 0;\r\n  background: rgba(225, 253, 255, 0.25);\r\n  box-shadow: 0 8px 32px 0 rgba(31, 88, 135, 0.37);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  border: 1px solid rgba(255, 255, 255, 0.18);\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #5c5c5c;\r\n  padding: 10px 20px;\r\n}\r\n\r\n.heading {\r\n  margin: 0;\r\n}\r\n\r\n.add-item {\r\n  width: 100%;\r\n  height: 30px;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n}\r\n\r\n.add-item::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.enter-button {\r\n  transform: rotate(90deg);\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.description {\r\n  margin: 0;\r\n  padding: 15px 20px 0 20px;\r\n  width: 100%;\r\n  border: none;\r\n  background: none;\r\n  resize: none;\r\n  outline: none;\r\n}\r\n\r\n.task-button,\r\n.clear,\r\n.enter-button {\r\n  padding: 5px;\r\n  font-size: 15px;\r\n  border: none;\r\n  color: #414141;\r\n  background: none;\r\n}\r\n\r\n.clear-completed {\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  color: #414141;\r\n  border: none;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.clear:hover i,\r\n.enter-button:hover .level.down,\r\n.clear-completed:hover {\r\n  font-weight: bold;\r\n  color: #09ff00;\r\n}\r\n\r\n.task-button:hover .trash.alternate {\r\n  color: #f00;\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let h=[{index:0,description:"First task",completed:!1},{index:1,description:"Second task",completed:!1}];const v=e=>{const n={index:0,description:"",completed:!1};n.description=e,h.push(n),(()=>{for(let e=0;e<h.length;e+1)h[e].index=e})(),localStorage.setItem("todo_list",JSON.stringify(h)),window.location.reload()},b=()=>{const e=document.querySelector(".todo-list-container");let n=document.createElement("li");n.className="todo-item";const t=document.createElement("h2");t.className="heading",t.textContent="Today's To Do",n.appendChild(t);const r=document.createElement("button");r.className="clear",r.innerHTML="<i class='sync alternate icon'></i>",n.appendChild(r),e.appendChild(n),n=document.createElement("li"),n.className="todo-item";const o=document.createElement("input");o.className="add-item",o.placeholder="Add to your list",o.value="",n.appendChild(o);const a=document.createElement("button");a.className="enter-button",a.innerHTML="<i class='level down alternate icon'></i>",n.appendChild=a,e.appendChild(n),o.addEventListener("keydown",(e=>{13===e.keycode&&v(o.value)})),a.addEventListener("click",(()=>{v(o.value)})),h.forEach((t=>{n=document.createElement("li"),n.className="todo-item";const r=document.createElement("input");r.type="checkbox",r.className="checkbox",r.checked=t.completed,n.appendChild(r);const o=document.createElement("textarea");o.className="description",o.rows="auto",o.value=t.description.toLowerCase().charAt(0).toUpperCase(),o.value+=t.description.slice(1),n.appendChild(o);const a=document.createElement("button");a.className="task-button",a.innerHTML="<i class='ellipsis vertical icon'></i>",n.appendChild(a),e.appendChild(n)})),n=document.createElement("li");const i=document.createElement("button");i.className="clear-completed",i.innerHTML="Clear all completed",n.appendChild(i),e.appendChild(n)};window.onload=()=>{null!==localStorage.getItem("todo_list")?(h=JSON.parse(localStorage.getItem("todo_list")),b()):b()}})()})();