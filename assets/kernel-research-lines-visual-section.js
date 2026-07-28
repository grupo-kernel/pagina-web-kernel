(function () {
  "use strict";

  const VERSION = "20260728-2";
  const PENDING_ATTRIBUTE = "data-kernel-research-lines-pending";
  const routes = ["research-lines", "lineas", "research"];
  const cards = [
    {
      image: "assets/img/research-lines/newton-dynamics.svg",
      alt: "Plano dinámico estilizado del método de Newton",
      icon: "bx bx-bezier-curve",
      title: "Métodos iterativos para sistemas no lineales",
      description: "Diseño y análisis de métodos numéricos para resolver ecuaciones y sistemas no lineales, considerando convergencia, estabilidad y eficiencia computacional."
    },
    {
      image: "assets/img/research-lines/pde-simulation.svg",
      alt: "Simulación numérica de difusión y transporte sobre una malla",
      icon: "bx bx-grid-alt",
      title: "Análisis numérico y ecuaciones diferenciales parciales",
      description: "Desarrollo de técnicas numéricas para estudiar ecuaciones diferenciales y modelos matemáticos procedentes de las ciencias y la ingeniería."
    },
    {
      image: "assets/img/research-lines/optimization-contours.svg",
      alt: "Trayectoria cuasi-Newton sobre curvas de nivel",
      icon: "bx bx-line-chart",
      title: "Optimización numérica y métodos cuasi-Newton",
      description: "Construcción de algoritmos de optimización para problemas de gran dimensión, modelización matemática y aplicaciones computacionales."
    },
    {
      image: "assets/img/research-lines/math-education.svg",
      alt: "Pizarra con geometría, funciones y formación matemática",
      icon: "bx bx-chalkboard",
      title: "Matemática educativa y formación docente",
      description: "Estudio de los procesos de enseñanza y aprendizaje de las matemáticas, la formación docente y la innovación educativa."
    },
    {
      image: "assets/img/research-lines/scientific-ai.svg",
      alt: "Red neuronal conectada con ecuaciones y simulación científica",
      icon: "bx bx-brain",
      title: "Computación científica e inteligencia artificial aplicada a las matemáticas",
      description: "Aplicación de programación científica e inteligencia artificial a la resolución, análisis y visualización de problemas matemáticos."
    }
  ];

  const root = document.documentElement;
  let scheduled = false;
  let revealTicket = 0;
  let observedMain = null;
  let mainObserver = null;

  function isResearchLinesView() {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();

    if (hash) return routes.some(route => hash.includes(route));
    if (/\/lineas(?:\.html)?\/?$/.test(path)) return true;

    const main = document.getElementById("main");
    return Boolean(main && /líneas de investigación|research lines/i.test(main.textContent || ""));
  }

  function markPending() {
    root.setAttribute(PENDING_ATTRIBUTE, "true");
  }

  function clearPending() {
    root.removeAttribute(PENDING_ATTRIBUTE);
  }

  function ensureStyles() {
    if (document.getElementById("kernel-research-lines-style")) return;
    const style = document.createElement("style");
    style.id = "kernel-research-lines-style";
    style.textContent = `
      .kernel-lines{width:100%;max-width:1180px;margin:0 auto;padding:1rem 1rem 4rem;color:#071820}
      .kernel-lines__hero{background:linear-gradient(135deg,#071820,#0f5b5d);color:#fff;border-radius:2rem;padding:clamp(2rem,5vw,4rem);margin-bottom:2rem;box-shadow:0 22px 55px rgba(7,24,32,.18)}
      .kernel-lines__eyebrow{display:inline-flex;align-items:center;gap:.5rem;color:#f2d38d;font-weight:800;letter-spacing:.09em;text-transform:uppercase;font-size:.82rem}
      .kernel-lines__hero h1{font-size:clamp(2.2rem,5vw,4rem);line-height:1.05;margin:.8rem 0 1rem;font-weight:900}
      .kernel-lines__hero p{max-width:780px;font-size:clamp(1.05rem,2vw,1.3rem);line-height:1.7;color:#e7f0f1;margin:0}
      .kernel-lines__intro{margin:0 0 1.6rem}.kernel-lines__intro h2{font-size:clamp(1.6rem,3vw,2.35rem);font-weight:900;margin:0 0 .55rem}.kernel-lines__intro p{color:#52616a;font-size:1.05rem;margin:0}
      .kernel-lines__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.5rem}
      .kernel-lines__card{overflow:hidden;border:1px solid #d8e2e4;border-radius:1.35rem;background:#fff;box-shadow:0 16px 40px rgba(7,24,32,.09);height:100%;transition:transform .2s ease,box-shadow .2s ease}
      .kernel-lines__card:hover{transform:translateY(-4px);box-shadow:0 22px 50px rgba(7,24,32,.15)}
      .kernel-lines__media{aspect-ratio:5/3;overflow:hidden;background:#071820}.kernel-lines__media img{width:100%;height:100%;object-fit:cover;display:block}
      .kernel-lines__body{padding:1.35rem 1.4rem 1.55rem;border-top:4px solid #d5a54a}
      .kernel-lines__number{display:inline-flex;align-items:center;gap:.45rem;color:#0f5b5d;font-size:.82rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
      .kernel-lines__body h2{font-size:clamp(1.25rem,2vw,1.6rem);line-height:1.25;margin:.45rem 0 .7rem;font-weight:900;color:#071820}
      .kernel-lines__body p{color:#52616a;line-height:1.68;margin:0;font-size:1rem}
      .kernel-lines__card:last-child{grid-column:1/-1;max-width:calc(50% - .75rem);width:100%;justify-self:center}
      @media(max-width:760px){.kernel-lines{padding:.5rem .55rem 3rem}.kernel-lines__hero{border-radius:1.35rem;padding:2rem 1.25rem}.kernel-lines__grid{grid-template-columns:1fr}.kernel-lines__card:last-child{grid-column:auto;max-width:none}.kernel-lines__media{aspect-ratio:16/10}}
    `;
    document.head.appendChild(style);
  }

  function revealWhenStable(main) {
    const ticket = ++revealTicket;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (ticket !== revealTicket || !isResearchLinesView()) return;
        if (main.querySelector('[data-kernel-research-lines-page="true"]')) clearPending();
      });
    });
  }

  function render() {
    if (!isResearchLinesView()) {
      clearPending();
      return;
    }

    markPending();
    const main = document.getElementById("main");
    if (!main) return;

    ensureStyles();
    if (
      main.dataset.kernelResearchLines === VERSION &&
      main.querySelector('[data-kernel-research-lines-page="true"]')
    ) {
      revealWhenStable(main);
      return;
    }

    main.dataset.kernelResearchLines = VERSION;
    main.innerHTML = `
      <section class="kernel-lines" data-kernel-research-lines-page="true" aria-labelledby="kernel-lines-title">
        <header class="kernel-lines__hero">
          <span class="kernel-lines__eyebrow"><i class="bx bx-pulse"></i> Agenda científica</span>
          <h1 id="kernel-lines-title">Líneas de investigación</h1>
          <p>Áreas prioritarias que articulan la investigación matemática, computacional y educativa desarrollada por El Kernel.</p>
        </header>
        <div class="kernel-lines__intro">
          <h2>Investigación matemática con alcance científico y social</h2>
          <p>Cada línea presenta de forma breve su campo de trabajo y orientación general.</p>
        </div>
        <div class="kernel-lines__grid">
          ${cards.map((card, index) => `
            <article class="kernel-lines__card">
              <div class="kernel-lines__media"><img src="${card.image}?v=${VERSION}" alt="${card.alt}" loading="${index < 2 ? "eager" : "lazy"}"></div>
              <div class="kernel-lines__body">
                <span class="kernel-lines__number"><i class="${card.icon}"></i> Línea ${index + 1}</span>
                <h2>${card.title}</h2>
                <p>${card.description}</p>
              </div>
            </article>`).join("")}
        </div>
      </section>`;

    revealWhenStable(main);
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      render();
    });
  }

  function attachMainObserver() {
    const main = document.getElementById("main");
    if (!main || main === observedMain) return Boolean(main);

    if (mainObserver) mainObserver.disconnect();
    observedMain = main;
    mainObserver = new MutationObserver(() => {
      if (isResearchLinesView()) markPending();
      schedule();
    });
    mainObserver.observe(main, { childList: true, subtree: true });
    return true;
  }

  function handleRouteChange() {
    if (isResearchLinesView()) markPending();
    else clearPending();
    attachMainObserver();
    schedule();
  }

  if (isResearchLinesView()) markPending();
  ensureStyles();

  const documentObserver = new MutationObserver(() => {
    if (attachMainObserver()) documentObserver.disconnect();
    handleRouteChange();
  });
  documentObserver.observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", handleRouteChange, true);
  window.addEventListener("popstate", handleRouteChange, true);
  document.addEventListener("DOMContentLoaded", handleRouteChange, { once: true });

  attachMainObserver();
  schedule();

  setTimeout(() => {
    if (isResearchLinesView()) schedule();
  }, 250);
  setTimeout(() => {
    if (isResearchLinesView()) schedule();
  }, 900);
  setTimeout(() => {
    if (!document.querySelector('[data-kernel-research-lines-page="true"]')) clearPending();
  }, 3500);

  window.KernelResearchLinesVisualSection = {
    version: VERSION,
    render: schedule
  };
})();
