(() => {
  "use strict";

  if (window.KernelResearchVisualRefresh) return;

  const PHOTO_VERSION = "20260726";
  const PHOTO_ROOT = `assets/img/researchers-${PHOTO_VERSION}`;
  const PHOTO_BY_ID = Object.freeze({
    "miguel-leonardo": `${PHOTO_ROOT}/miguel.jpg`,
    "natanael-urena": `${PHOTO_ROOT}/natanael.jpg`,
    "randy-leonardo": `${PHOTO_ROOT}/randy.jpg`,
    "antmel-rodriguez": `${PHOTO_ROOT}/antmel.jpg`,
    "marino-brito": `${PHOTO_ROOT}/marino.png`,
    "marc-kelly-jean-philippe": `${PHOTO_ROOT}/marckelly.jpg`,
    "jose-alberto-reyes": `${PHOTO_ROOT}/josealberto.jpg`,
    "alicia-cordero": `${PHOTO_ROOT}/alicia.jpg`,
    "juan-torregrosa": `${PHOTO_ROOT}/juanr.jpg`
  });

  const originalFetch = window.fetch.bind(window);
  const preloadedImages = [];

  function isResearchersCatalog(input) {
    try {
      const raw = typeof input === "string" || input instanceof URL ? input : input?.url;
      const url = new URL(raw, document.baseURI);
      return url.pathname.endsWith("/core/data/researchers.v2.json");
    } catch {
      return false;
    }
  }

  function applyPhotoMap(payload) {
    if (!payload || !Array.isArray(payload.researchers)) return payload;
    payload.researchers = payload.researchers.map(member => {
      const source = PHOTO_BY_ID[member.id];
      if (!source) return member;
      return {
        ...member,
        image: {
          ...(member.image || {}),
          current: source
        }
      };
    });
    return payload;
  }

  window.fetch = async function kernelResearchFetch(input, init) {
    const response = await originalFetch(input, init);
    if (!isResearchersCatalog(input) || !response.ok) return response;

    try {
      const payload = applyPhotoMap(await response.clone().json());
      const headers = new Headers(response.headers);
      headers.set("content-type", "application/json; charset=utf-8");
      headers.delete("content-length");
      return new Response(JSON.stringify(payload), {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    } catch (error) {
      console.error("Kernel researcher photo mapping:", error);
      return response;
    }
  };

  function preloadPhotos() {
    if (preloadedImages.length) return;
    Object.values(PHOTO_BY_ID).forEach((source, index) => {
      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = index < 5 ? "high" : "auto";
      image.src = new URL(source, document.baseURI).href;
      preloadedImages.push(image);
    });
  }

  function installStyles() {
    if (document.getElementById("kernel-research-visual-refresh-styles")) return;
    const style = document.createElement("style");
    style.id = "kernel-research-visual-refresh-styles";
    style.textContent = `
      /* Investigación: escala tipográfica equivalente al resto de la plataforma */
      .kernel-research-page{
        font-size:1rem!important;
      }
      .kernel-research-eyebrow{
        font-size:clamp(.8rem,.9vw,.9rem)!important;
        line-height:1.45!important;
      }
      .kernel-research-hero p{
        max-width:75rem!important;
        font-size:clamp(1rem,1.15vw,1.12rem)!important;
        line-height:1.72!important;
        font-weight:600!important;
      }
      .kernel-research-stat{
        padding:clamp(1rem,1.6vw,1.3rem)!important;
      }
      .kernel-research-stat strong{
        font-size:clamp(1.8rem,3vw,2.5rem)!important;
      }
      .kernel-research-stat span{
        margin-top:.5rem!important;
        font-size:clamp(.86rem,.95vw,.98rem)!important;
        line-height:1.42!important;
        font-weight:850!important;
        color:#52636d!important;
      }
      .kernel-project-note{
        padding:1rem 1.15rem!important;
        font-size:clamp(.9rem,1vw,1rem)!important;
        line-height:1.65!important;
        font-weight:650!important;
      }
      .kernel-research-layout{
        grid-template-columns:minmax(265px,325px) minmax(0,1fr)!important;
        gap:1.15rem!important;
      }
      .kernel-research-filters{
        gap:1rem!important;
        padding:1.15rem!important;
      }
      .kernel-research-filters label{
        margin-bottom:.42rem!important;
        font-size:clamp(.86rem,.95vw,.96rem)!important;
        line-height:1.35!important;
        font-weight:950!important;
      }
      .kernel-research-filters input,
      .kernel-research-filters select{
        min-height:46px!important;
        padding:.72rem .82rem!important;
        font-size:clamp(.9rem,1vw,1rem)!important;
        line-height:1.4!important;
        font-weight:650!important;
      }
      .kernel-research-clear{
        min-height:46px!important;
        padding:.72rem .9rem!important;
        font-size:clamp(.9rem,1vw,1rem)!important;
        font-weight:950!important;
      }
      .kernel-research-count{
        margin-bottom:.9rem!important;
        font-size:clamp(.94rem,1vw,1.05rem)!important;
        line-height:1.4!important;
        font-weight:950!important;
      }
      .kernel-publication-list,
      .kernel-project-list{
        gap:1rem!important;
      }
      .kernel-publication-card,
      .kernel-project-card{
        padding:clamp(1.2rem,2vw,1.55rem)!important;
      }
      .kernel-publication-meta,
      .kernel-project-meta{
        gap:.55rem!important;
        margin-bottom:.85rem!important;
      }
      .kernel-research-chip{
        padding:.4rem .65rem!important;
        font-size:clamp(.72rem,.8vw,.82rem)!important;
        line-height:1.25!important;
        font-weight:950!important;
      }
      .kernel-publication-card h2,
      .kernel-project-card h2{
        font-size:clamp(1.12rem,1.45vw,1.35rem)!important;
        line-height:1.48!important;
        font-weight:950!important;
      }
      .kernel-publication-authors{
        margin-top:.72rem!important;
        font-size:clamp(.92rem,1vw,1.02rem)!important;
        line-height:1.65!important;
        font-weight:750!important;
      }
      .kernel-publication-journal{
        margin-top:.55rem!important;
        font-size:clamp(.9rem,1vw,1rem)!important;
        line-height:1.5!important;
        font-weight:950!important;
      }
      .kernel-publication-source{
        margin-top:.82rem!important;
        font-size:clamp(.78rem,.88vw,.88rem)!important;
        line-height:1.5!important;
        font-weight:700!important;
      }
      .kernel-project-details{
        gap:.7rem!important;
        margin-top:1rem!important;
      }
      .kernel-project-detail{
        padding:.9rem!important;
        font-size:clamp(.88rem,.98vw,.98rem)!important;
        line-height:1.58!important;
        font-weight:650!important;
      }
      .kernel-project-detail strong{
        margin-bottom:.18rem!important;
        font-size:clamp(.76rem,.82vw,.84rem)!important;
        line-height:1.35!important;
        font-weight:950!important;
      }
      .kernel-publication-actions,
      .kernel-project-people{
        gap:.65rem!important;
        margin-top:1rem!important;
      }
      .kernel-publication-actions a,
      .kernel-publication-actions button,
      .kernel-project-people a{
        min-height:43px!important;
        display:inline-flex!important;
        align-items:center!important;
        padding:.62rem .82rem!important;
        font-size:clamp(.78rem,.88vw,.9rem)!important;
        line-height:1.3!important;
        font-weight:950!important;
      }
      @media(max-width:1000px){
        .kernel-research-layout{grid-template-columns:1fr!important}
      }
      @media(max-width:620px){
        .kernel-research-page{font-size:1rem!important}
        .kernel-publication-card,.kernel-project-card{padding:1.05rem!important}
        .kernel-research-stat span{font-size:.92rem!important}
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener("DOMContentLoaded", preloadPhotos, { once: true });
  installStyles();
  preloadPhotos();

  window.KernelResearchVisualRefresh = {
    version: "1.0.0",
    photoVersion: PHOTO_VERSION,
    photoById: PHOTO_BY_ID,
    applyPhotoMap,
    diagnostics: () => ({
      photos: Object.keys(PHOTO_BY_ID).length,
      preloaded: preloadedImages.length,
      styleInstalled: Boolean(document.getElementById("kernel-research-visual-refresh-styles"))
    })
  };
})();
