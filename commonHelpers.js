import{a as E,i as m,S as $}from"./assets/vendor-550cebad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();async function g(e,s,l){const i="43065562-482e0c4e1ab6b062f2c90306d",t="https://pixabay.com/api/",r=await E.get(t,{params:{key:i,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:l}});if(r.data.hits.length===0){m.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}return r.data}const S=document.querySelector(".gallery"),q={captionsData:"alt",captionDelay:250},I=new $(".gallery a",q);function P(e){return`<li class="gallery-list-item">
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
      </li>`}function y(e){const s=e.hits.map(P).join("");S.insertAdjacentHTML("beforeend",s),I.refresh()}const R=document.querySelector(".form"),h=document.querySelector(".loader"),L=document.querySelector(".gallery"),f=document.querySelector(".load-more-btn");let a="",o=1;const n=15;R.addEventListener("submit",B);f.addEventListener("click",O);async function B(e){if(e.preventDefault(),o=1,L.innerHTML="",c(),v(),a=e.target.search.value.trim(),a===""){p(),u("Please enter a search word");return}try{const s=await g(a,o,n);if(y(s),w(),s.totalHits<=n){c(),b("We're sorry, but you've reached the end of search results.");return}}catch{u("Error fetching images")}finally{p(),e.target.reset()}}async function O(){o++,c(),v();try{const e=await g(a,o,n);if(y(e),o*n>=e.totalHits){c(),b("We're sorry, but you've reached the end of search results.");return}w();const s=L.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch{u("Error fetching images")}finally{p()}}function u(e){m.error({title:"Error",position:"topRight",message:`${e}`})}function b(e){m.info({title:"Info",position:"topRight",message:`${e}`})}function v(){h.classList.add("is-open")}function p(){h.classList.remove("is-open")}function w(){f.classList.add("is-open")}function c(){f.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map
