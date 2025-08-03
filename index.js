import{S as d,a as p,i as n}from"./assets/vendor-DTWVMNYS.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const i=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:r,comments:f,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${o}">
		<img
		  class="gallery-image"
		  src="${a}"
		  alt="${e}"
		/>
	</a>
   <div class="image-info">
        <div class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${t}</p>
        </div>
        <div class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${r}</p>
        </div>
        <div class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${f}</p>
        </div>
        <div class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${u}</p>
        </div>
    </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",i),m.refresh()}function g(){l.innerHTML=""}function h(){c.classList.add("visible")}function v(){c.classList.remove("visible")}const b="51602245-fcbe599c3dab331c74561bb82";async function L(s){return(await p("https://pixabay.com/api/",{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const i=s.target.elements["search-text"].value.trim();if(i===""){n.warning({icon:"ico-error",message:"Поле пошуку не може бути порожнім.",position:"topRight"});return}g(),h();const o=(await L(i)).hits;o.length===0?n.info({icon:"ico-error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(o),v()});
//# sourceMappingURL=index.js.map
