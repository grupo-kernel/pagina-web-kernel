(() => {
  "use strict";

  if (window.KernelReadabilityNavigationFix) return;

  const STYLE_ID = "kernel-readability-navigation-styles";
  const PROFILE_PARAM = "kernelProfile";

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      /* Equipo: tarjetas más legibles */
      .kernel-team-core__card h2{
        font-size:clamp(1.08rem,1.25vw,1.22rem)!important;
        line-height:1.28!important;
        font-weight:950!important;
      }
      .kernel-team-core__role{
        font-size:clamp(.91rem,1vw,1rem)!important;
        line-height:1.58!important;
        font-weight:800!important;
        color:#0b5557!important;
      }
      .kernel-team-core__affiliations{
        font-size:clamp(.83rem,.95vw,.92rem)!important;
        line-height:1.58!important;
        font-weight:700!important;
        color:#475569!important;
      }
      .kernel-team-core__tag{
        font-size:.75rem!important;
        line-height:1.3!important;
        font-weight:850!important;
        padding:.42rem .65rem!important;
      }
      .kernel-team-core__open button{
        min-height:46px!important;
        font-size:.86rem!important;
        font-weight:950!important;
        letter-spacing:.01em!important;
      }

      /* Perfil completo: jerarquía y lectura */
      .kernel-team-core__detail-head{
        grid-template-columns:clamp(112px,12vw,150px) minmax(0,1fr)!important;
        gap:clamp(1rem,2.4vw,1.75rem)!important;
      }
      .kernel-team-core__detail-photo{
        width:clamp(112px,12vw,150px)!important;
        height:clamp(142px,15vw,190px)!important;
      }
      .kernel-team-core__detail h2{
        max-width:100%!important;
        margin:.3rem 0 0!important;
        font-size:clamp(1.75rem,3.5vw,3rem)!important;
        line-height:1.08!important;
        overflow-wrap:anywhere!important;
        text-wrap:balance;
      }
      .kernel-team-core__detail h2 small{
        white-space:nowrap;
        font-size:.52em!important;
      }
      .kernel-team-core__detail-role{
        max-width:78ch!important;
        margin-top:.8rem!important;
        font-size:clamp(.98rem,1.25vw,1.12rem)!important;
        line-height:1.65!important;
        font-weight:650!important;
        color:#d7e3ec!important;
      }
      .kernel-team-core__eyebrow{
        font-size:clamp(.72rem,.9vw,.82rem)!important;
        line-height:1.45!important;
      }
      .kernel-team-core__back{
        min-height:48px!important;
        margin-top:1.05rem!important;
        padding:.72rem 1.1rem!important;
        font-size:.91rem!important;
        line-height:1.3!important;
        font-weight:950!important;
        cursor:pointer!important;
      }
      .kernel-team-core__section{
        padding:clamp(1rem,2vw,1.3rem)!important;
      }
      .kernel-team-core__section h3{
        margin-bottom:.85rem!important;
        font-size:clamp(.98rem,1.2vw,1.1rem)!important;
        line-height:1.35!important;
        font-weight:950!important;
      }
      .kernel-team-core__section li{
        font-size:clamp(.9rem,1vw,.99rem)!important;
        line-height:1.68!important;
        font-weight:620!important;
        color:#3f5260!important;
      }
      .kernel-team-core__links a{
        min-height:42px!important;
        display:inline-flex!important;
        align-items:center!important;
        font-size:.82rem!important;
        font-weight:900!important;
      }

      /* Publicaciones 2.0: texto más firme y visible */
      .kernel-publication-card{
        padding:clamp(1.15rem,2vw,1.45rem)!important;
      }
      .kernel-publication-card h2{
        font-size:clamp(1.08rem,1.45vw,1.28rem)!important;
        line-height:1.48!important;
        font-weight:950!important;
        color:#071820!important;
      }
      .kernel-publication-authors{
        font-size:clamp(.88rem,1vw,.98rem)!important;
        line-height:1.62!important;
        font-weight:750!important;
        color:#354755!important;
      }
      .kernel-publication-journal{
        font-size:clamp(.86rem,1vw,.96rem)!important;
        line-height:1.5!important;
        font-weight:950!important;
        color:#0b5557!important;
      }
      .kernel-publication-source{
        font-size:.78rem!important;
        line-height:1.5!important;
        font-weight:700!important;
        color:#64748b!important;
      }
      .kernel-publication-meta .kernel-research-chip{
        font-size:.72rem!important;
        line-height:1.25!important;
        font-weight:900!important;
      }
      .kernel-publication-actions a,
      .kernel-publication-actions button{
        min-height:42px!important;
        display:inline-flex!important;
        align-items:center!important;
        font-size:.79rem!important;
        font-weight:950!important;
      }
      .kernel-research-count{
        font-size:.91rem!important;
        font-weight:950!important;
      }
      .kernel-research-filters label{
        font-size:.79rem!important;
        font-weight:950!important;
      }
      .kernel-research-filters input,
      .kernel-research-filters select{
        font-size:.88rem!important;
        font-weight:650!important;
      }

      @media(max-width:700px){
        .kernel-team-core__detail-head{
          grid-template-columns:86px minmax(0,1fr)!important;
        }
        .kernel-team-core__detail-photo{
          width:86px!important;
          height:110px!important;
        }
        .kernel-team-core__detail h2{
          font-size:clamp(1.35rem,7vw,2rem)!important;
        }
        .kernel-team-core__detail h2 small{
          display:block;
          margin-top:.25rem;
          font-size:.58em!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function profileFreeUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete(PROFILE_PARAM);

    const parts = url.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);
    if (String(parts[0] || "").toLowerCase() === "equipment") {
      url.hash = "#/equipment";
    }
    return url;
  }

  function closeProfileImmediately(button) {
    const url = profileFreeUrl();
    const relativeUrl = `${url.pathname}${url.search}${url.hash}`;

    try {
      history.replaceState({ kernelProfile: "" }, "", relativeUrl);
    } catch {
      window.location.hash = "#/equipment";
    }

    document.querySelectorAll("[data-kernel-profile-panel]").forEach(panel => panel.remove());

    const main = document.getElementById("main");
    if (main) {
      delete main.dataset.kernelTeamSignature;
      delete main.dataset.kernelProfileSignature;
    }

    const filters = document.querySelector(".kernel-team-core__filters");
    const heading = document.querySelector(".kernel-team-core__hero h1");
    const destination = filters || heading;

    window.requestAnimationFrame(() => {
      document.querySelectorAll("[data-kernel-profile-panel]").forEach(panel => panel.remove());
      destination?.scrollIntoView({ behavior: "smooth", block: "start" });
      destination?.focus?.({ preventScroll: true });
      button?.blur?.();
      window.dispatchEvent(new PopStateEvent("popstate", { state: { kernelProfile: "" } }));
    });
  }

  function handleBack(event) {
    const button = event.target?.closest?.("[data-kernel-team-profile-back]");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    closeProfileImmediately(button);
  }

  function enhanceBackButtons(root = document) {
    root.querySelectorAll?.("[data-kernel-team-profile-back]").forEach(button => {
      button.type = "button";
      button.setAttribute("aria-controls", "kernel-team-grid");
      button.style.touchAction = "manipulation";
    });
  }

  const observer = new MutationObserver(() => {
    enhanceBackButtons();
  });

  window.addEventListener("click", handleBack, true);
  document.addEventListener("DOMContentLoaded", () => {
    installStyles();
    enhanceBackButtons();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.KernelReadabilityNavigationFix = {
    version: "1.0.0",
    closeProfile: closeProfileImmediately,
    installStyles
  };

  installStyles();
  enhanceBackButtons();
})();
