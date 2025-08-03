import{S as p,a as m,i as n}from"./assets/vendor-CDfGN_m0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const i=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:d})=>`<li class="gallery-item">
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
            <p class="info-value">${s}</p>
        </div>
        <div class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${u}</p>
        </div>
        <div class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${d}</p>
        </div>
    </div>
</li>`).join("");c.insertAdjacentHTML("beforeend",i),g.refresh()}function h(){c.innerHTML=""}function v(){f.classList.add("visible")}function b(){f.classList.remove("visible")}const L="51602245-fcbe599c3dab331c74561bb82";function q(r){return m("https://pixabay.com/api/",{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".form");l.addEventListener("submit",r=>{r.preventDefault();const i=r.target.elements["search-text"].value.trim();if(i===""){n.warning({icon:"ico-error",message:"Поле пошуку не може бути порожнім.",position:"topRight"});return}h(),v(),q(i).then(o=>{o.data.hits.length===0?n.info({icon:"ico-error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(o.data.hits)}).catch(o=>{n.error({icon:"ico-error",message:"Помилка сервера. Спробуйте ще раз.",position:"topRight"})}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map
