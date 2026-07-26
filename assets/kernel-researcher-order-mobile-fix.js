(() => {
  "use strict";

  if (window.KernelResearcherOrderMobileFix) return;

  const ORDER = [
    "miguel-leonardo",
    "antmel-rodriguez",
    "natanael-urena",
    "marino-brito",
    "randy-leonardo",
    "marc-kelly-jean-philippe",
    "jose-alberto-reyes",
    "alicia-cordero",
    "juan-torregrosa"
  ];

  const PHOTO = {
    "miguel-leonardo": "./assets/img/researchers-20260726/miguel.jpg",
    "antmel-rodriguez": "./assets/img/researchers-20260726/antmel.jpg",
    "natanael-urena": "./assets/img/researchers-20260726/natanael.jpg",
    "marino-brito": "./assets/img/researchers-20260726/marino.png",
    "randy-leonardo": "./assets/img/researchers-20260726/randy.jpg",
    "marc-kelly-jean-philippe": "./assets/img/researchers-20260726/marckelly.jpg",
    "jose-alberto-reyes": "./assets/img/researchers-20260726/josealberto.jpg",
    "alicia-cordero": "./assets/img/researchers-20260726/alicia.jpg",
    "juan-torregrosa": "./assets/img/researchers-20260726/juan-ramon.jpg"
  };

  const indexOf = id => {
    const index = ORDER.indexOf(String(id || ""));
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  };

  function installStyles() {
    if (document.getElementById("kernel-researcher-order-mobile-styles")) return;
    const style = document.createElement("style");
    style.id = "kernel-researcher-order-mobile-styles";
    style.textContent = `
      /* Formación académica: evitar crecimiento vertical infinito en móvil. */
      @media(max-width:900px){
        .kernel-academic-layout{
          display:block!important;
          min-height:0!important;
          height:auto!important;
          overflow:visible!important;
        }
        .kernel-academic-list{
          position:static!important;
          display:flex!important;
          flex-flow:row nowrap!important;
          gap:.75rem!important;
          width:100%!important;
          height:auto!important;
          min-height:0!important;
          max-height:132px!important;
          margin:1.25rem 0!important;
          padding:.75rem!important;
          overflow-x:auto!important;
          overflow-y:hidden!important;
          overscroll-behavior-x:contain;
          scrollbar-width:thin;
          -webkit-overflow-scrolling:touch;
        }
        .kernel-academic-person{
          display:flex!important;
          flex:0 0 min(78vw,310px)!important;
          width:auto!important;
          min-width:220px!important;
          min-height:88px!important;
          height:88px!important;
          max-height:88px!important;
          align-items:center!important;
          overflow:hidden!important;
        }
        .kernel-academic-person > span:not(.kernel-academic-avatar){
          min-width:0!important;
          overflow:hidden!important;
        }
        .kernel-academic-person strong{
          display:block!important;
          overflow:hidden!important;
          text-overflow:ellipsis!important;
          white-space:normal!important;
          line-height:1.25!important;
          max-height:3.8em!important;
        }
        .kernel-academic-avatar{
          display:grid!important;
          width:58px!important;
          height:68px!important;
          flex:0 0 58px!important;
          margin:0!important;
        }
        .kernel-academic-profile{
          width:100%!important;
          min-height:0!important;
          height:auto!important;
          overflow:hidden!important;
        }
      }

      /* Investigación: tipografía general más legible. */
      .kernel-research-hero p{font-size:clamp(1rem,1.2vw,1.14rem)!important;font-weight:600!important}
      .kernel-research-stat span{font-size:.9rem!important;line-height:1.35!important;font-weight:850!important}
      .kernel-research-filters label{font-size:.9rem!important;line-height:1.35!important;font-weight:950!important}
      .kernel-research-filters input,
      .kernel-research-filters select{font-size:1rem!important;line-height:1.4!important;font-weight:650!important;min-height:46px!important}
      .kernel-research-clear{font-size:.95rem!important;min-height:46px!important}
      .kernel-research-count{font-size:1rem!important}
      .kernel-research-chip{font-size:.78rem!important;line-height:1.25!important;padding:.4rem .65rem!important}
      .kernel-project-card h2,.kernel-publication-card h2{font-size:clamp(1.12rem,1.35vw,1.3rem)!important;line-height:1.45!important}
      .kernel-project-note{font-size:.94rem!important;line-height:1.6!important}
      .kernel-project-detail{font-size:.9rem!important;line-height:1.55!important}
      .kernel-project-detail strong{font-size:.8rem!important;line-height:1.4!important}
      .kernel-project-people a,
      .kernel-publication-actions a,
      .kernel-publication-actions button{font-size:.86rem!important;line-height:1.35!important;min-height:44px!important}
    `;
    document.head.appendChild(style);
  }

  function setImage(image, id) {
    const source = PHOTO[id];
    if (!image || !source) return;
    if (!image.src.includes(source.replace(/^\.\//, ""))) {
      image.src = source;
      image.loading = "eager";
      image.decoding = "async";
      image.fetchPriority = "high";
    }
  }

  function researcherIdFromElement(element) {
    return element?.dataset?.kernelTeamOpen ||
      element?.dataset?.kernelAcademicSelect ||
      element?.dataset?.kernelResearcher ||
      element?.dataset?.kernelProfilePanel ||
      "";
  }

  function reorderChildren(container, selector, resolver) {
    if (!container) return;
    const nodes = [...container.querySelectorAll(`:scope > ${selector}`)];
    if (nodes.length < 2) return;
    nodes.sort((a, b) => indexOf(resolver(a)) - indexOf(resolver(b)));
    const fragment = document.createDocumentFragment();
    nodes.forEach(node => fragment.appendChild(node));
    container.appendChild(fragment);
  }

  function applyTeam() {
    const grid = document.querySelector(".kernel-team-core__grid");
    reorderChildren(grid, ".kernel-team-core__card", card => card.querySelector("[data-kernel-team-open]")?.dataset.kernelTeamOpen);

    document.querySelectorAll(".kernel-team-core__card").forEach(card => {
      const id = card.querySelector("[data-kernel-team-open]")?.dataset.kernelTeamOpen;
      setImage(card.querySelector("img"), id);
    });

    document.querySelectorAll("[data-kernel-profile-panel]").forEach(panel => {
      setImage(panel.querySelector("img"), panel.dataset.kernelProfilePanel);
    });
  }

  function applyAcademic() {
    const list = document.querySelector(".kernel-academic-list");
    reorderChildren(list, ".kernel-academic-person", button => button.dataset.kernelAcademicSelect);

    document.querySelectorAll("[data-kernel-academic-select]").forEach(button => {
      setImage(button.querySelector("img"), button.dataset.kernelAcademicSelect);
    });
    document.querySelectorAll(".kernel-academic-profile[data-kernel-researcher]").forEach(profile => {
      setImage(profile.querySelector("img"), profile.dataset.kernelResearcher);
    });
  }

  function applyResearchFilters() {
    document.querySelectorAll("select").forEach(select => {
      const researcherOptions = [...select.options].filter(option => ORDER.includes(option.value));
      if (researcherOptions.length < 2) return;
      researcherOptions.sort((a, b) => indexOf(a.value) - indexOf(b.value));
      researcherOptions.forEach(option => select.appendChild(option));
    });
  }

  let timer = 0;
  let applying = false;
  function apply() {
    if (applying) return;
    applying = true;
    try {
      installStyles();
      applyTeam();
      applyAcademic();
      applyResearchFilters();
    } finally {
      applying = false;
    }
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(apply, 80);
  }

  const observer = new MutationObserver(mutations => {
    if (applying) return;
    const relevant = mutations.some(mutation =>
      [...mutation.addedNodes].some(node => node.nodeType === 1 && (
        node.matches?.(".kernel-team-core,.kernel-academic-page,.kernel-research-page") ||
        node.querySelector?.(".kernel-team-core,.kernel-academic-page,.kernel-research-page")
      ))
    );
    if (relevant) schedule();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("resize", schedule, { passive: true });
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelResearcherOrderMobileFix = { order: [...ORDER], photos: { ...PHOTO }, apply };
  apply();
})();
