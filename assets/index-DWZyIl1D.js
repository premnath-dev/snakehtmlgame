(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();const u=20;let c=[{x:10,y:10}],s=h(),y=0,i="right",d,n=350,a=!1;const p=document.querySelector("#game-board"),x=document.querySelector("#instruction-text"),b=document.querySelector("#logo"),q=document.querySelector("#score"),g=document.querySelector("#highScore");function w(){p.innerHTML="",C(),M(),I()}function C(){c.forEach(e=>{const t=k("div","snake");v(t,e),p.appendChild(t)})}function k(e,t){const l=document.createElement(e);return l.className=t,l}function v(e,t){e.style.gridColumn=t.x,e.style.gridRow=t.y}function M(){if(a){const e=k("div","food");v(e,s),p.appendChild(e)}}function h(){const e=Math.floor(Math.random()*u)+1,t=Math.floor(Math.random()*u)+1;return{x:e,y:t}}function L(){const e={...c[0]};switch(i){case"up":e.y--;break;case"down":e.y++;break;case"left":e.x--;break;case"right":e.x++;break}c.unshift(e),e.x===s.x&&e.y===s.y?(s=h(),A(),clearInterval(d),d=setInterval(()=>{L(),E(),w()},n)):c.pop()}function O(){a=!0,x.style.display="none",b.style.display="none",d=setInterval(()=>{L(),E(),w()},n)}function P(e){if(!a&&e.code==="Space"||!a&&e.key===" ")O();else switch(e.key){case"ArrowUp":i="up";break;case"ArrowDown":i="down";break;case"ArrowLeft":i="left";break;case"ArrowRight":i="right";break}}document.addEventListener("keydown",P);function A(){n>150?n-=5:n>100?n-=3:n>50?n-=2:n>25&&(n-=1)}function E(){const e=c[0];(e.x<1||e.x>u||e.y<1||e.y>u)&&S();for(let t=1;t<c.length;t++)e.x===c[t].x&&e.y===c[t].y&&S()}function S(){G(),T(),c=[{x:10,y:10}],s=h(),i="right",n=200,I()}function I(){const e=c.length-1;q.textContent=e.toString().padStart(3,"0")}function T(){clearInterval(d),a=!1,x.style.display="block",b.style.display="block"}function G(){const e=c.length-1;e>y&&(y=e,g.textContent=y.toString().padStart(3,"0")),g.style.display="block"}
