!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=()=>{const e=document.createElement("div");e.id="container",e.style.backgroundImage="url(../photos/coffee.jpg)",e.style.backgroundSize="cover",e.style.flexBasis="100%",e.style.height="100%",e.style.width="100%",e.style.display="grid",e.style.gridTemplateRows="1fr 4fr";const t=document.createElement("div");t.style.gridRowStart="1",t.style.gridRowEnd="2",t.style.display="flex",t.style.width="100%";const l=document.createElement("div");l.id="topDiv",l.style.display="flex",l.style.justifyContent="space-evenly",l.style.alignItems="center",l.style.flexBasis="60%",l.style.height="cover",l.style.margin="auto";const n=document.createElement("div");n.id="link1",n.style.display="flex",n.style.flexBasis="10%",n.style.height="50px";const o=document.createElement("div");o.innerHTML="MENU",o.className="link",n.appendChild(o);const s=document.createElement("div");s.id="nameDiv",s.className="title",s.style.height="110px",s.style.width="270px",s.style.display="flex",s.style.border="10px solid white";const i=document.createElement("div");i.style.margin="auto",i.className="title",i.innerHTML="Dodo & Coco",i.style.fontSize="40px",i.style.color="white",i.style.fontWeight="bold",i.style.fontFamily="Arial";const r=document.createElement("div");r.id="link2",r.style.display="flex",r.style.flexBasis="10%",r.style.height="50px";const d=document.createElement("div");d.innerHTML="CONTACT",d.className="link",r.appendChild(d);const a=document.createElement("div");a.style.display="flex",a.style.gridRowStart="2",a.style.gridRowEnd="3";const c=document.createElement("div");c.style.display="flex",c.style.width="1000px",c.style.height="500px",c.style.margin="auto",c.style.backgroundColor="rgba(255, 255, 255, 0.5)";const y=document.createElement("div");y.style.flexBasis="32%",y.style.height="480px",y.style.backgroundImage="url(../photos/breakfast.jpg)",y.style.backgroundSize="cover",y.style.margin="auto";const u=document.createElement("div");u.style.flexBasis="32%",u.style.height="480px",u.style.backgroundImage="url(../photos/pour.jpg)",u.style.backgroundSize="cover",u.style.margin="auto";const p=document.createElement("div");p.style.flexBasis="32%",p.style.height="480px",p.style.backgroundImage="url(../photos/cake.jpg)",p.style.backgroundSize="cover",p.style.margin="auto",c.appendChild(y),c.appendChild(u),c.appendChild(p),a.appendChild(c),s.appendChild(i),l.appendChild(n),l.appendChild(s),l.appendChild(r),t.appendChild(l),e.appendChild(t),e.appendChild(a);var m=l.querySelectorAll(".link");for(let e=0;e<m.length;e++)m[e].style.margin="auto",m[e].style.color="#dbc1ac",m[e].style.fontSize="25px",m[e].style.fontFamily="Arial",m[e].style.fontWeight="bold",m[e].addEventListener("mouseover",v),m[e].addEventListener("mouseout",b);var f=l.querySelectorAll(".title");for(let e=0;e<f.length;e++)f[e].addEventListener("mouseover",h),f[e].addEventListener("mouseout",g);function h(){i.style.color="#ece0d1",this.style.borderColor="#ece0d1"}function g(){i.style.color="white",this.style.borderColor="white"}function v(){this.style.transform="scale(1.1)",this.style.color="#ece0d1"}function b(){this.style.transform="scale(1)",this.style.color="#dbc1ac"}return e};document.getElementById("content").appendChild(n())}]);