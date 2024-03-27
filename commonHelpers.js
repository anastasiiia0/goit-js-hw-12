import{a as v,i,S as w}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();async function f(e,o,c){const a="43065562-482e0c4e1ab6b062f2c90306d",t="https://pixabay.com/api/",r=await v.get(t,{params:{key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:c}});if(r.data.hits.length===0){i.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}return r.data}const E=document.querySelector(".gallery"),R={captionsData:"alt",captionDelay:250},S=new w(".gallery a",R);function q(e){return`<li class="gallery-list-item">
       <a href="${e.largeImageURL}"> <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
        <ul class="img-description">
          <li class="img-description-item">
            <p class="description-key">Likes</p>
            <p class="description-value">${e.likes}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Views</p>
            <p class="description-value">${e.views}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Comments</p>
            <p class="description-value">${e.comments}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Downloads</p>
            <p class="description-value">${e.downloads}</p>
          </li>
        </ul>
      </li>`}function g(e){const o=e.hits.map(q).join("");E.insertAdjacentHTML("beforeend",o),S.refresh()}const $=document.querySelector(".form"),y=document.querySelector(".loader"),h=document.querySelector(".gallery"),m=document.querySelector(".load-more-btn");let n="",s=1;const p=15;$.addEventListener("submit",I);m.addEventListener("click",P);async function I(e){if(e.preventDefault(),s=1,h.innerHTML="",u(),L(),n=e.target.search.value.trim(),n===""){d(),i.error({title:"Error",position:"topRight",message:"Please enter a search word"});return}try{const o=await f(n,s,p);g(o),b()}catch{i.error({title:"Error",position:"topRight",message:"Error fetching images"})}finally{d(),e.target.reset()}}async function P(){s++,u(),L();try{const e=await f(n,s,p);if(s*p>=e.totalHits)u(),i.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."});else{b(),g(e);const o=h.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}catch{i.error({title:"Error",position:"topRight",message:"Error fetching images"})}finally{d()}}function L(){y.classList.add("is-open")}function d(){y.classList.remove("is-open")}function b(){m.classList.add("is-open")}function u(){m.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map
