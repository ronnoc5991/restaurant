!function(e){var t={};function l(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(n,s,function(t){return e[t]}.bind(null,s));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=()=>{const e=document.createElement("div");e.id="lowerDisplay",e.style.display="flex",e.style.flexWrap="wrap",e.style.width="1000px",e.style.height="500px",e.style.margin="auto";const t=document.createElement("div");return t.className="lowerImage clickable",t.style.flexBasis="70%",t.style.height="500px",t.style.backgroundImage="url(../photos/menu.jpg)",t.style.backgroundSize="cover",t.style.margin="auto",e.appendChild(t),e};var s=()=>{const e=document.createElement("div");e.id="lowerDisplay",e.style.display="flex",e.style.width="1000px",e.style.height="500px",e.style.margin="auto",e.style.backgroundColor="rgba(255, 255, 255, 0.5)";const t=document.createElement("div");t.className="lowerImage clickable",t.style.flexBasis="32%",t.style.height="480px",t.style.backgroundImage="url(../photos/breakfast.jpg)",t.style.backgroundSize="cover",t.style.margin="auto",t.style.filter="grayscale(30%) blur(1px)";const l=document.createElement("div");l.className="lowerImage clickable",l.style.flexBasis="32%",l.style.height="480px",l.style.backgroundImage="url(../photos/pour.jpg)",l.style.backgroundSize="cover",l.style.margin="auto",l.style.filter="grayscale(30%) blur(1px)";const n=document.createElement("div");n.className="lowerImage clickable",n.style.flexBasis="32%",n.style.height="480px",n.style.backgroundImage="url(../photos/cake.jpg)",n.style.backgroundSize="cover",n.style.margin="auto",n.style.filter="grayscale(30%) blur(1px)",e.appendChild(t),e.appendChild(l),e.appendChild(n);const s=e.querySelectorAll(".lowerImage");for(let e=0;e<s.length;e++)s[e].addEventListener("mouseover",i),s[e].addEventListener("mouseout",r);function i(){this.style.filter="grayscale(0%)",this.style.transform="scale(1.01)",this.style.cursor="pointer"}function r(){this.style.filter="grayscale(30%) blur(1px)",this.style.transform="scale(1)",this.style.cursor="auto"}return e};var i=()=>{const e=document.createElement("div");e.id="lowerDisplay",e.style.display="flex",e.style.flexWrap="wrap",e.style.width="1000px",e.style.height="500px",e.style.margin="auto";const t=document.createElement("div");return t.className="lowerImage clickable",t.style.flexBasis="80%",t.style.height="500px",t.style.backgroundImage="url(../photos/contact.jpg)",t.style.backgroundSize="cover",t.style.margin="auto",e.appendChild(t),e};const r=document.getElementById("content"),o=document.createElement("div");o.id="container",o.style.backgroundImage="url(../photos/coffee.jpg)",o.style.backgroundSize="cover",o.style.flexBasis="100%",o.style.height="100%",o.style.width="100%",o.style.display="grid",o.style.gridTemplateRows="1fr 4fr",r.appendChild(o);const a=document.createElement("div");a.style.gridRowStart="1",a.style.gridRowEnd="2",a.style.display="flex",a.style.width="100%",o.appendChild(a);const c=document.createElement("div");c.id="topDiv",c.style.display="flex",c.style.justifyContent="space-evenly",c.style.alignItems="center",c.style.flexBasis="60%",c.style.height="cover",c.style.margin="auto",a.appendChild(c);const d=document.createElement("div");d.id="link1",d.style.display="flex",d.style.flexBasis="10%",d.style.height="50px",c.appendChild(d);const y=document.createElement("div");y.innerHTML="MENU",y.className="link clickable",y.id="menuLink",d.appendChild(y);const u=document.createElement("div");u.id="nameDiv",u.className="title clickable",u.style.height="110px",u.style.width="270px",u.style.display="flex",u.style.border="10px solid white",c.appendChild(u);const p=document.createElement("div");p.style.margin="auto",p.className="title clickable",p.innerHTML="El Cafe",p.style.fontSize="40px",p.style.color="white",p.style.fontWeight="bold",p.style.fontFamily="Arial",u.appendChild(p);const m=document.createElement("div");m.id="link2",m.style.display="flex",m.style.flexBasis="10%",m.style.height="50px",c.appendChild(m);const h=document.createElement("div");h.innerHTML="CONTACT",h.className="link clickable",h.id="contactLink",m.appendChild(h);const g=document.createElement("div");g.style.display="flex",g.style.gridRowStart="2",g.style.gridRowEnd="3",o.appendChild(g);var f=c.querySelectorAll(".link");for(let e=0;e<f.length;e++)f[e].style.margin="auto",f[e].style.color="#dbc1ac",f[e].style.fontSize="25px",f[e].style.fontFamily="Arial",f[e].style.fontWeight="bold",f[e].addEventListener("mouseover",k),f[e].addEventListener("mouseout",E);var v=c.querySelectorAll(".title");for(let e=0;e<v.length;e++)v[e].addEventListener("mouseover",b),v[e].addEventListener("mouseout",x);function b(){p.style.color="#ece0d1",this.style.borderColor="#ece0d1",this.style.cursor="pointer"}function x(){p.style.color="white",this.style.borderColor="white",this.style.cursor="auto"}function k(){this.style.transform="scale(1.01)",this.style.color="#ece0d1",this.style.cursor="pointer"}function E(){this.style.transform="scale(1)",this.style.color="#dbc1ac",this.style.cursor="auto"}document.getElementById("menuLink").addEventListener("click",(function(){w(),g.appendChild(n())})),document.getElementById("contactLink").addEventListener("click",(function(){w(),g.appendChild(i())})),document.getElementById("nameDiv").addEventListener("click",(function(){C()}));function w(){g.removeChild(g.childNodes[0])}function C(){w(),g.appendChild(s())}C()}]);