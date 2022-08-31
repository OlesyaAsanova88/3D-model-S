(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let l;l=setInterval((()=>{(()=>{let e=(()=>{let e=(new Date("26 august 2022").getTime()-(new Date).getTime())/1e3,t=0,o=0,a=0,c=0;return e>0&&(t=Math.floor(e/60/60/24),o=Math.floor(e/60/60%24),a=Math.floor(e/60%60),c=Math.floor(e%60)),{timeRemaining:e,days:t,hours:o,minutes:a,seconds:c}})();1==e.days?t.textContent=`${e.days} день`:e.days<5?t.textContent=`${e.days} дня`:t.textContent=`${e.days} дней`,t.textContent=e.days>=10?e.days:`0${e.days}`,o.textContent=e.hours>=10?e.hours:`0${e.hours}`,a.textContent=e.minutes>=10?e.minutes:`0${e.minutes}`,c.textContent=e.seconds>=10?e.seconds:`0${e.seconds}`,e.timeRemaining<0||clearInterval(l)})()}),1e3)})(),(()=>{document.querySelector(".menu");const e=document.querySelector("menu");document.addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.toggle("active-menu"):(t.target.closest(".close-btn")||t.target.closest("ul>li>a"),e.classList.remove("active-menu"))}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((o=>{o.addEventListener("click",(()=>{window.innerWidth<768?e.style.display="block":(e.style.display="block",t())}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}));const t=()=>{let e=document.querySelector(".popup-content"),t=0,o=setInterval((function(){250==t?clearInterval(o):(t++,e.style.top=t+"px")}),10)}})(),(()=>{const e=document.querySelectorAll(".calc-block>input[type = text]"),t=document.querySelectorAll('[placeholder="Ваше имя"]'),o=document.querySelectorAll('[placeholder="E-mail"]'),a=document.querySelectorAll('[placeholder="Номер телефона"]'),c=document.querySelector('[placeholder="Ваше сообщение"]');e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/g,"")}))})),a.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+() 0-9 -]+(.*)/,"$1")})))),o.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z 0-9]+(.*)/,"$1")})))),t.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ]/g,"")})))),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ]/g,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let a,c=0;t.forEach((()=>{const e=document.createElement("li");e.classList.add("dot"),o.appendChild(e)})),o.children[0].classList.add("dot-active"),console.log(o);const l=document.querySelectorAll(".dot"),n=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{n(t,c,"portfolio-item-active"),n(l,c,"dot-active"),c++,c>=t.length&&(c=0),r(t,c,"portfolio-item-active"),r(l,c,"dot-active")},d=(e=1500)=>{a=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,c,"portfolio-item-active"),n(l,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&l.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),r(t,c,"portfolio-item-active"),r(l,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(2e3)}),!0),d(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),n=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==a&&t.target!==c&&t.target!==l||(()=>{const t=+o.options[o.selectedIndex].value,r=a.value;let s=0,d=1,u=1;l.value&&l.value<5?d=2:l.value&&l.value,c.value>1&&(d+=+c.value/10),s=o.value&&a.value?e*t*r:0,n.textContent=s})()}))})(100)})();