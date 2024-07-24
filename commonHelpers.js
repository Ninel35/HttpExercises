import{i as c}from"./assets/vendor-0e6a7602.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a="https://pixabay.com/api/",l="40348092-da5e0a767129707faba1470d8";async function u(o){return await fetch(`${a}?key=${l}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f=document.querySelector(".search-form"),d=document.querySelector(".search-list");f.addEventListener("submit",o=>{o.preventDefault(),u(o.target.elements.search.value).then(({hits:t})=>p(t)).catch(t=>console.log(t))});function p(o){o.length===0&&(console.log("dziala"),c.show({message:"Sorry, there are no images matching your search query. Please try again!"}));const t=o.map(s=>`
          <li>
          <img src='${s.previewURL}'>
            <p><b>Likes</b>: ${s.q}</p>
            <p><b>Views</b>: ${s.image_type}</p>
            <p><b>Comments</b>: ${s.comments}</p>
            <p><b>Downloads</b>: ${s.safesearch}</p>
          </li>
      `).join("");d.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
