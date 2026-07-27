(() => {
  "use strict";
  if (window.KernelFinalUiPolish) return;

  const STYLE_ID = "kernel-final-ui-polish-styles";

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      :root{
        --kernel-polish-navy:#071820;
        --kernel-polish-navy-2:#0b2f3b;
        --kernel-polish-teal:#0f5b5d;
        --kernel-polish-teal-dark:#0a4648;
        --kernel-polish-soft:#eef8f7;
        --kernel-polish-border:#cfe0df;
        --kernel-polish-gold:#d5a54a;
        --kernel-polish-gold-soft:#fff8e8;
      }

      /* Quiénes somos: sustituir negro y azul brillante por la paleta institucional. */
      html[data-kernel-route="quienessomos"] #main .bg-\[\#1E1E1E\]{
        background:linear-gradient(135deg,var(--kernel-polish-navy),var(--kernel-polish-navy-2))!important;
        border:1px solid rgba(213,165,74,.2)!important;
      }
      html[data-kernel-route="quienessomos"] #main .bg-\[\#5580C1\]{
        background:linear-gradient(135deg,var(--kernel-polish-teal),var(--kernel-polish-teal-dark))!important;
        border:1px solid rgba(213,165,74,.2)!important;
      }
      html[data-kernel-route="quienessomos"] #main .text-\[\#96B4E1\]{color:var(--kernel-polish-gold)!important}
      html[data-kernel-route="quienessomos"] #main article.bg-\[\#1E1E1E\] p:first-of-type,
      html[data-kernel-route="quienessomos"] #main article.bg-\[\#5580C1\] p:first-of-type{color:var(--kernel-polish-gold)!important}

      /* Líneas: unificar el panel de detalle, etiquetas y tarjetas de resumen. */
      html[data-kernel-route="lineas"] #main .bg-\[\#1E1E1E\]{
        background:linear-gradient(135deg,var(--kernel-polish-navy),var(--kernel-polish-teal-dark))!important;
      }
      html[data-kernel-route="lineas"] #main .bg-orange-500{
        background:var(--kernel-polish-gold)!important;
        color:var(--kernel-polish-navy)!important;
      }
      html[data-kernel-route="lineas"] #main .bg-\[\#5580C1\]:not([data-kernel-line-card]){
        background:var(--kernel-polish-teal)!important;
      }
      html[data-kernel-route="lineas"] #main .bg-\[\#96B4E1\]\/20{
        background:var(--kernel-polish-soft)!important;
        border-color:var(--kernel-polish-border)!important;
      }
      html[data-kernel-route="lineas"] #main .border-\[\#96B4E1\]\/40{border-color:var(--kernel-polish-border)!important}
      html[data-kernel-route="lineas"] #main .text-\[\#5580C1\]{color:var(--kernel-polish-teal-dark)!important}
      html[data-kernel-route="lineas"] #main .bg-\[\#96B4E1\]\/30{background:rgba(213,165,74,.22)!important}

      /* Herramientas: conservar la diferenciación de periodos dentro de la paleta Kernel. */
      html[data-kernel-route="herramientas"] #main .bg-blue-600,
      html[data-kernel-route="herramientas"] #main .bg-sky-600,
      html[data-kernel-route="herramientas"] #main .bg-emerald-600{
        background:var(--kernel-polish-teal)!important;
      }
      html[data-kernel-route="herramientas"] #main .bg-blue-500,
      html[data-kernel-route="herramientas"] #main .bg-sky-500{background:var(--kernel-polish-navy-2)!important}
      html[data-kernel-route="herramientas"] #main .bg-green-500,
      html[data-kernel-route="herramientas"] #main .bg-emerald-500{background:var(--kernel-polish-teal)!important}
      html[data-kernel-route="herramientas"] #main .bg-red-500,
      html[data-kernel-route="herramientas"] #main .bg-rose-500,
      html[data-kernel-route="herramientas"] #main .bg-red-600,
      html[data-kernel-route="herramientas"] #main .bg-rose-600{
        background:var(--kernel-polish-gold)!important;
        color:var(--kernel-polish-navy)!important;
      }
      html[data-kernel-route="herramientas"] #main .border-blue-100,
      html[data-kernel-route="herramientas"] #main .border-sky-100,
      html[data-kernel-route="herramientas"] #main .border-green-100,
      html[data-kernel-route="herramientas"] #main .border-emerald-100,
      html[data-kernel-route="herramientas"] #main .border-red-100,
      html[data-kernel-route="herramientas"] #main .border-rose-100{border-color:var(--kernel-polish-border)!important}
      html[data-kernel-route="herramientas"] #main .bg-blue-50,
      html[data-kernel-route="herramientas"] #main .bg-sky-50,
      html[data-kernel-route="herramientas"] #main .bg-green-50,
      html[data-kernel-route="herramientas"] #main .bg-emerald-50{background:var(--kernel-polish-soft)!important}
      html[data-kernel-route="herramientas"] #main .bg-red-50,
      html[data-kernel-route="herramientas"] #main .bg-rose-50{background:var(--kernel-polish-gold-soft)!important}
      html[data-kernel-route="herramientas"] #main .text-blue-600,
      html[data-kernel-route="herramientas"] #main .text-blue-700,
      html[data-kernel-route="herramientas"] #main .text-sky-600,
      html[data-kernel-route="herramientas"] #main .text-sky-700,
      html[data-kernel-route="herramientas"] #main .text-green-600,
      html[data-kernel-route="herramientas"] #main .text-green-700,
      html[data-kernel-route="herramientas"] #main .text-emerald-600,
      html[data-kernel-route="herramientas"] #main .text-emerald-700{color:var(--kernel-polish-teal-dark)!important}
      html[data-kernel-route="herramientas"] #main .text-red-600,
      html[data-kernel-route="herramientas"] #main .text-red-700,
      html[data-kernel-route="herramientas"] #main .text-rose-600,
      html[data-kernel-route="herramientas"] #main .text-rose-700{color:#8a5a0a!important}

      /* Laboratorio: decoraciones suaves en verde petróleo, sin azul ajeno a la marca. */
      html[data-kernel-route="laboratoriokernel"] #main .bg-sky-50,
      html[data-kernel-route="laboratoriokernel"] #main .bg-blue-50{background:var(--kernel-polish-soft)!important}
      html[data-kernel-route="laboratoriokernel"] #main .bg-indigo-50{background:var(--kernel-polish-gold-soft)!important}
      html[data-kernel-route="laboratoriokernel"] #main .border-sky-200,
      html[data-kernel-route="laboratoriokernel"] #main .border-blue-200{border-color:var(--kernel-polish-border)!important}

      /* El foco visible usa siempre el dorado institucional. */
      html[data-kernel-route] #main button:focus-visible,
      html[data-kernel-route] #main a:focus-visible,
      html[data-kernel-route] #main input:focus-visible,
      html[data-kernel-route] #main select:focus-visible,
      html[data-kernel-route] #main textarea:focus-visible{
        outline:3px solid var(--kernel-polish-gold)!important;
        outline-offset:2px!important;
      }
    `;
    document.head.appendChild(style);
  }

  window.KernelFinalUiPolish = {
    version: "1.0.0",
    apply: installStyles,
    diagnostics: () => ({ installed: Boolean(document.getElementById(STYLE_ID)) })
  };

  installStyles();
})();
