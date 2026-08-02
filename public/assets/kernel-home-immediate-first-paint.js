(() => {
  "use strict";

  if (window.KernelHomeImmediateFirstPaint) return;

  const HOME_ROUTES = new Set(["", "home", "portada"]);

  function route() {
    return window.location.hash
      .replace(/^#\/?/, "")
      .split(/[/?]/)[0]
      .trim()
      .toLowerCase();
  }

  function isHome() {
    return HOME_ROUTES.has(route());
  }

  function paint() {
    if (!isHome()) return false;

    const main = document.getElementById("main");
    if (!main) return false;

    if (main.querySelector('[data-kernel-platform-page="home-2b"]')) {
      return true;
    }

    const english = String(document.documentElement.lang || "")
      .toLowerCase()
      .startsWith("en");

    const text = english
      ? {
          welcome: "Welcome to",
          group: "Research Group",
          intro: "Research, scientific services and intelligent tools for universities, public institutions, companies and research teams.",
          work: "Explore our research",
          lab: "Open the Laboratory",
          status: "Updating institutional data in the background…"
        }
      : {
          welcome: "Bienvenidos a",
          group: "Grupo de Investigación",
          intro: "Investigación, servicios científicos y herramientas inteligentes para universidades, instituciones públicas, empresas y equipos de investigación.",
          work: "Conocer la investigación",
          lab: "Abrir el Laboratorio",
          status: "Actualizando los datos institucionales en segundo plano…"
        };

    main.style.maxWidth = "none";
    main.style.padding = "0";
    main.style.marginTop = "0";
    main.style.marginBottom = "0";

    main.innerHTML = `
      <section class="kernel-home-2b kernel-home-first-paint" data-kernel-platform-page="home-2b" data-kernel-home-first-paint="true">
        <style>
          .kernel-home-first-paint{width:100%;min-height:620px;background:#eef4f8;color:#fff;font-family:inherit}
          .kernel-home-first-paint__hero{min-height:500px;padding:clamp(2rem,6vw,5rem);display:grid;align-content:center;background:radial-gradient(circle at 70% 25%,rgba(45,154,255,.35),transparent 24%),linear-gradient(135deg,#06141f,#06355f 56%,#071820)}
          .kernel-home-first-paint__eyebrow{margin:0;color:#c9e7ff;font-size:clamp(1rem,2vw,1.35rem);font-weight:750}
          .kernel-home-first-paint h1{margin:.25rem 0 0;font-size:clamp(3.2rem,8vw,6.4rem);line-height:.92;letter-spacing:-.055em;font-weight:950}
          .kernel-home-first-paint__group{margin:.65rem 0 0;color:#eaf6ff;font-size:clamp(1.25rem,3vw,2.1rem);font-weight:850}
          .kernel-home-first-paint__intro{max-width:720px;margin:1.35rem 0 0;color:#d3e0eb;font-size:clamp(1rem,1.8vw,1.18rem);line-height:1.7}
          .kernel-home-first-paint__actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.6rem}
          .kernel-home-first-paint button{min-height:48px;padding:.8rem 1.15rem;border:1px solid rgba(255,255,255,.42);border-radius:.75rem;background:rgba(255,255,255,.08);color:#fff;font:inherit;font-weight:900;cursor:pointer}
          .kernel-home-first-paint button:first-child{border-color:#2679df;background:#1267ca}
          .kernel-home-first-paint__status{padding:1rem 1.4rem;background:#fff;color:#475569;text-align:center;font-size:.88rem;font-weight:700}
          @media(max-width:680px){.kernel-home-first-paint__hero{min-height:430px;padding:2.2rem 1.1rem}.kernel-home-first-paint button{width:100%}}
        </style>
        <div class="kernel-home-first-paint__hero">
          <p class="kernel-home-first-paint__eyebrow">${text.welcome}</p>
          <h1>El Kernel</h1>
          <p class="kernel-home-first-paint__group">${text.group}</p>
          <p class="kernel-home-first-paint__intro">${text.intro}</p>
          <div class="kernel-home-first-paint__actions">
            <button type="button" data-kernel-home-route="lineas">${text.work} →</button>
            <button type="button" data-kernel-home-route="laboratorioKernel">${text.lab} →</button>
          </div>
        </div>
        <div class="kernel-home-first-paint__status" role="status" aria-live="polite">${text.status}</div>
      </section>
    `;

    return true;
  }

  function navigate(event) {
    const button = event.target.closest("[data-kernel-home-route]");
    if (!button) return;
    const target = button.dataset.kernelHomeRoute;
    if (!target) return;
    event.preventDefault();
    window.location.hash = `#/${target}`;
  }

  document.addEventListener("click", navigate);

  if (!paint()) {
    document.addEventListener("DOMContentLoaded", paint, { once: true });
  }

  window.addEventListener("pageshow", paint);

  window.KernelHomeImmediateFirstPaint = Object.freeze({
    version: "1.0.0",
    paint,
    diagnostics: () => ({
      route: route() || "home",
      painted: Boolean(
        document.querySelector('[data-kernel-home-first-paint="true"]')
      ),
      ready: Boolean(
        document.querySelector('[data-kernel-platform-page="home-2b"]')
      )
    })
  });
})();
