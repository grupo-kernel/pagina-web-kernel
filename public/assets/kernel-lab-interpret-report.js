(() => {
  "use strict";

  const VERSION = "1.0.0";
  const SECTION_ID = "herramientas-interpretar-reportar";
  const STORAGE_KEY = "kernel:interpretacion-resultados";
  const STYLE_ID = "kernel-interpret-report-styles";

  const route = () =>
    (location.hash.replace(/^#\/?/, "").split(/[/?]/)[0] || "home")
      .toLowerCase();

  const escapeHtml = value =>
    String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);

  const numeric = value => {
    const parsed = Number(String(value ?? "").replace(",", "."));
    return Number.isFinite(parsed) ? parsed : null;
  };

  const formatNumber = value => {
    const number = numeric(value);
    if (number === null) return "";
    return new Intl.NumberFormat("es-DO", {
      maximumFractionDigits: 4
    }).format(number);
  };

  const formatP = value => {
    const p = numeric(value);
    if (p === null) return "";
    if (p < 0.001) return "p < .001";
    return `p = ${p.toFixed(3).replace(/^0/, "")}`;
  };

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-ir{scroll-margin-top:7rem;margin-top:4rem}
      .kernel-ir *{box-sizing:border-box}
      .kernel-ir__head{max-width:820px;margin-bottom:1.6rem}
      .kernel-ir__eyebrow{margin:0 0 .45rem;color:#6d28d9;font-size:.78rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}
      .kernel-ir__head h2{margin:0;color:#0f172a;font-size:clamp(1.8rem,4vw,2.5rem);font-weight:950;line-height:1.08}
      .kernel-ir__head p{margin:.8rem 0 0;color:#59677c;line-height:1.7}
      .kernel-ir__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem}
      .kernel-ir__card{scroll-margin-top:7rem;border:1px solid #d9e2ec;border-radius:1.5rem;background:#fff;padding:1.45rem;box-shadow:0 10px 30px rgba(15,23,42,.07)}
      .kernel-ir__card--interpret{border-top:5px solid #d97706}
      .kernel-ir__card--report{border-top:5px solid #7c3aed}
      .kernel-ir__title{display:flex;align-items:flex-start;gap:.9rem;margin-bottom:1rem}
      .kernel-ir__icon{display:grid;width:48px;height:48px;flex:0 0 auto;place-items:center;border-radius:14px;font-size:1.45rem}
      .kernel-ir__card--interpret .kernel-ir__icon{background:#fef3c7;color:#b45309}
      .kernel-ir__card--report .kernel-ir__icon{background:#ede9fe;color:#6d28d9}
      .kernel-ir__title h3{margin:0;color:#0f172a;font-size:1.35rem;font-weight:950}
      .kernel-ir__title p{margin:.35rem 0 0;color:#64748b;font-size:.9rem;line-height:1.55}
      .kernel-ir__fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.85rem}
      .kernel-ir__field--wide{grid-column:1/-1}
      .kernel-ir label{display:block;color:#334155;font-size:.78rem;font-weight:850}
      .kernel-ir input,.kernel-ir select,.kernel-ir textarea{width:100%;margin-top:.38rem;border:1px solid #cbd5e1;border-radius:.8rem;background:#fff;padding:.72rem .8rem;color:#0f172a;font:inherit;font-size:.88rem;outline:none}
      .kernel-ir textarea{min-height:92px;resize:vertical}
      .kernel-ir input:focus,.kernel-ir select:focus,.kernel-ir textarea:focus{border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.14)}
      .kernel-ir__actions{display:flex;flex-wrap:wrap;gap:.65rem;margin-top:1rem}
      .kernel-ir__button{display:inline-flex;align-items:center;justify-content:center;gap:.45rem;border:0;border-radius:.8rem;padding:.72rem 1rem;font:inherit;font-size:.84rem;font-weight:900;cursor:pointer}
      .kernel-ir__button--interpret{background:#d97706;color:#fff}
      .kernel-ir__button--report{background:#7c3aed;color:#fff}
      .kernel-ir__button--secondary{border:1px solid #cbd5e1;background:#fff;color:#334155}
      .kernel-ir__output{margin-top:1rem;border-radius:1rem;background:#f8fafc;padding:1rem;color:#334155;line-height:1.65;white-space:pre-wrap}
      .kernel-ir__output[hidden]{display:none}
      .kernel-ir__notice{margin-top:.8rem;border-left:4px solid #f59e0b;background:#fffbeb;padding:.75rem .85rem;color:#7c2d12;font-size:.79rem;line-height:1.5}
      .kernel-ir__status{min-height:1.2rem;margin-top:.7rem;color:#475569;font-size:.78rem;font-weight:750}
      @media(max-width:900px){.kernel-ir__grid{grid-template-columns:1fr}}
      @media(max-width:560px){.kernel-ir__fields{grid-template-columns:1fr}.kernel-ir__field--wide{grid-column:auto}}
    `;
    document.head.appendChild(style);
  }

  function markup() {
    return `
      <section id="${SECTION_ID}" class="kernel-ir" aria-labelledby="kernel-ir-title">
        <header class="kernel-ir__head">
          <p class="kernel-ir__eyebrow">Etapas activas 03 y 04</p>
          <h2 id="kernel-ir-title">Interpretar y reportar resultados</h2>
          <p>Convierta la salida de una calculadora en una interpretación metodológicamente prudente y, después, en una redacción científica lista para revisar y utilizar.</p>
        </header>
        <div class="kernel-ir__grid">
          <article id="interpretador-resultados" tabindex="-1" class="kernel-ir__card kernel-ir__card--interpret">
            <div class="kernel-ir__title">
              <div class="kernel-ir__icon" aria-hidden="true">↗</div>
              <div><h3>Interpretar resultado</h3><p>Evalúa significación, intervalo de confianza y tamaño del efecto sin confundir significación estadística con importancia práctica.</p></div>
            </div>
            <form data-kernel-interpret-form novalidate>
              <div class="kernel-ir__fields">
                <label class="kernel-ir__field--wide">Prueba estadística<input name="prueba" required placeholder="Ej.: t de Welch para muestras independientes"></label>
                <label>Estadístico<input name="simbolo" placeholder="Ej.: t, F, U, χ², r"></label>
                <label>Valor del estadístico<input name="estadistico" inputmode="decimal" placeholder="Ej.: 2.97"></label>
                <label>Grados de libertad<input name="gl" inputmode="decimal" placeholder="Opcional"></label>
                <label>Valor p<input name="p" required inputmode="decimal" placeholder="Ej.: 0.013"></label>
                <label>Nivel α<input name="alpha" inputmode="decimal" value="0.05"></label>
                <label>Valor nulo del intervalo<select name="nulo"><option value="0">0 · diferencias, correlaciones y coeficientes</option><option value="1">1 · odds ratio, riesgo relativo y razones</option></select></label>
                <label>Límite inferior del IC<input name="icInferior" inputmode="decimal" placeholder="Opcional"></label>
                <label>Límite superior del IC<input name="icSuperior" inputmode="decimal" placeholder="Opcional"></label>
                <label>Medida del efecto<input name="efectoNombre" placeholder="Ej.: g de Hedges"></label>
                <label>Valor del efecto<input name="efectoValor" inputmode="decimal" placeholder="Opcional"></label>
                <label class="kernel-ir__field--wide">Contexto o comparación<textarea name="contexto" placeholder="Ej.: diferencia del promedio de calificaciones entre el grupo A y el grupo B"></textarea></label>
              </div>
              <div class="kernel-ir__actions">
                <button class="kernel-ir__button kernel-ir__button--interpret" type="submit">Interpretar resultado</button>
                <button class="kernel-ir__button kernel-ir__button--secondary" type="button" data-copy-target="interpretacion">Copiar</button>
              </div>
              <div class="kernel-ir__status" data-interpret-status aria-live="polite"></div>
              <div class="kernel-ir__output" data-interpret-output hidden></div>
              <div class="kernel-ir__notice">La interpretación automática es una ayuda de redacción. Debe revisarse junto con el diseño, los supuestos, la calidad de los datos y el contexto sustantivo del estudio.</div>
            </form>
          </article>

          <article id="generador-reporte" tabindex="-1" class="kernel-ir__card kernel-ir__card--report">
            <div class="kernel-ir__title">
              <div class="kernel-ir__icon" aria-hidden="true">✎</div>
              <div><h3>Generar reporte</h3><p>Construye un párrafo científico con objetivo, prueba, estadístico, valor p, intervalo y efecto.</p></div>
            </div>
            <form data-kernel-report-form novalidate>
              <div class="kernel-ir__fields">
                <label class="kernel-ir__field--wide">Objetivo del análisis<textarea name="objetivo" required placeholder="Ej.: comparar el promedio de calificaciones de dos grupos independientes"></textarea></label>
                <label>Tamaño muestral<input name="muestra" placeholder="Ej.: n = 64"></label>
                <label>Prueba estadística<input name="prueba" required placeholder="Ej.: t de Welch"></label>
                <label>Estadístico y valor<input name="estadistico" placeholder="Ej.: t(58.4) = 2.97"></label>
                <label>Valor p<input name="p" inputmode="decimal" placeholder="Ej.: 0.013"></label>
                <label class="kernel-ir__field--wide">Intervalo de confianza<input name="intervalo" placeholder="Ej.: IC 95 % [1.24, 8.76]"></label>
                <label>Medida del efecto<input name="efectoNombre" placeholder="Ej.: g de Hedges"></label>
                <label>Valor del efecto<input name="efectoValor" inputmode="decimal" placeholder="Ej.: 0.80"></label>
                <label class="kernel-ir__field--wide">Conclusión sustantiva<textarea name="conclusion" placeholder="Explique qué significa el resultado en el contexto del estudio, sin afirmar causalidad si el diseño no la permite."></textarea></label>
              </div>
              <div class="kernel-ir__actions">
                <button class="kernel-ir__button kernel-ir__button--secondary" type="button" data-use-interpretation>Usar interpretación anterior</button>
                <button class="kernel-ir__button kernel-ir__button--report" type="submit">Generar reporte</button>
                <button class="kernel-ir__button kernel-ir__button--secondary" type="button" data-copy-target="reporte">Copiar</button>
                <button class="kernel-ir__button kernel-ir__button--secondary" type="button" data-download-report>Descargar TXT</button>
              </div>
              <div class="kernel-ir__status" data-report-status aria-live="polite"></div>
              <div class="kernel-ir__output" data-report-output hidden></div>
            </form>
          </article>
        </div>
      </section>
    `;
  }

  function readInterpretation(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    const p = numeric(data.p);
    const alpha = numeric(data.alpha);
    const low = numeric(data.icInferior);
    const high = numeric(data.icSuperior);
    const nullValue = numeric(data.nulo) ?? 0;

    if (!data.prueba.trim()) throw new Error("Indique la prueba estadística.");
    if (p === null || p < 0 || p > 1) throw new Error("El valor p debe estar entre 0 y 1.");
    if (alpha === null || alpha <= 0 || alpha >= 1) throw new Error("El nivel α debe estar entre 0 y 1.");
    if ((low === null) !== (high === null)) throw new Error("Introduzca ambos límites del intervalo de confianza o deje ambos vacíos.");
    if (low !== null && high !== null && low > high) throw new Error("El límite inferior no puede exceder el superior.");

    const significant = p < alpha;
    const statisticParts = [];
    if (data.simbolo.trim() && data.estadistico.trim()) {
      const df = data.gl.trim() ? `(${escapeHtml(data.gl.trim())})` : "";
      statisticParts.push(`${escapeHtml(data.simbolo.trim())}${df} = ${escapeHtml(formatNumber(data.estadistico))}`);
    }
    statisticParts.push(formatP(p));

    const sentences = [
      `La prueba ${escapeHtml(data.prueba.trim())} produjo un resultado ${significant ? "estadísticamente significativo" : "no estadísticamente significativo"} al nivel α = ${formatNumber(alpha)} (${statisticParts.filter(Boolean).join(", ")}).`,
      significant
        ? "La evidencia observada permite rechazar la hipótesis nula en este contraste."
        : "La evidencia observada no permite rechazar la hipótesis nula; esto no demuestra que el efecto sea exactamente cero."
    ];

    if (low !== null && high !== null) {
      const includesNull = low <= nullValue && high >= nullValue;
      sentences.push(`El intervalo [${formatNumber(low)}, ${formatNumber(high)}] ${includesNull ? "incluye" : "no incluye"} el valor nulo ${formatNumber(nullValue)}, por lo que ${includesNull ? "es compatible con ausencia del efecto definido por ese valor" : "respalda un efecto distinto del valor nulo dentro del nivel de confianza utilizado"}.`);
    }

    if (data.efectoNombre.trim() && data.efectoValor.trim()) {
      sentences.push(`El tamaño del efecto reportado fue ${escapeHtml(data.efectoNombre.trim())} = ${escapeHtml(formatNumber(data.efectoValor))}; su magnitud debe interpretarse con criterios propios de esa medida y del área de estudio.`);
    }

    if (data.contexto.trim()) {
      sentences.push(`En contexto, el resultado se refiere a ${escapeHtml(data.contexto.trim())}.`);
    }

    return {
      raw: data,
      significant,
      p,
      alpha,
      interpretation: sentences.join(" "),
      reportStatistic: statisticParts.filter(Boolean).join(", ")
    };
  }

  function buildReport(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.objetivo.trim()) throw new Error("Indique el objetivo del análisis.");
    if (!data.prueba.trim()) throw new Error("Indique la prueba estadística.");

    const p = numeric(data.p);
    if (data.p.trim() && (p === null || p < 0 || p > 1)) {
      throw new Error("El valor p debe estar entre 0 y 1.");
    }

    const parts = [`Para ${data.objetivo.trim()}, se aplicó ${data.prueba.trim()}`];
    if (data.muestra.trim()) parts[0] += ` en ${data.muestra.trim()}`;
    parts[0] += ".";

    const resultBits = [];
    if (data.estadistico.trim()) resultBits.push(data.estadistico.trim());
    if (p !== null) resultBits.push(formatP(p));
    if (data.intervalo.trim()) resultBits.push(data.intervalo.trim());
    if (data.efectoNombre.trim() && data.efectoValor.trim()) {
      resultBits.push(`${data.efectoNombre.trim()} = ${formatNumber(data.efectoValor)}`);
    }
    if (resultBits.length) parts.push(`El análisis produjo ${resultBits.join(", ")}.`);
    if (data.conclusion.trim()) parts.push(data.conclusion.trim().replace(/\s+/g, " "));
    else parts.push("La conclusión debe completarse atendiendo al diseño, los supuestos y el contexto sustantivo del estudio.");

    return parts.join(" ");
  }

  async function copyText(text, status) {
    if (!text.trim()) {
      status.textContent = "Primero genere un resultado.";
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "Texto copiado al portapapeles.";
    } catch {
      status.textContent = "No fue posible copiar automáticamente; seleccione el texto manualmente.";
    }
  }

  function bind(section) {
    if (section.dataset.kernelInterpretReportBound === "true") return;
    section.dataset.kernelInterpretReportBound = "true";

    const interpretForm = section.querySelector("[data-kernel-interpret-form]");
    const reportForm = section.querySelector("[data-kernel-report-form]");
    const interpretOutput = section.querySelector("[data-interpret-output]");
    const reportOutput = section.querySelector("[data-report-output]");
    const interpretStatus = section.querySelector("[data-interpret-status]");
    const reportStatus = section.querySelector("[data-report-status]");

    interpretForm.addEventListener("submit", event => {
      event.preventDefault();
      try {
        const result = readInterpretation(interpretForm);
        interpretOutput.textContent = result.interpretation;
        interpretOutput.hidden = false;
        interpretStatus.textContent = result.significant
          ? "Resultado significativo: revise también magnitud, precisión y supuestos."
          : "Resultado no significativo: evite interpretarlo como prueba de igualdad exacta.";
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      } catch (error) {
        interpretStatus.textContent = error.message;
        interpretOutput.hidden = true;
      }
    });

    reportForm.addEventListener("submit", event => {
      event.preventDefault();
      try {
        reportOutput.textContent = buildReport(reportForm);
        reportOutput.hidden = false;
        reportStatus.textContent = "Reporte generado. Revise la conclusión antes de utilizarlo.";
      } catch (error) {
        reportStatus.textContent = error.message;
        reportOutput.hidden = true;
      }
    });

    section.querySelector("[data-use-interpretation]").addEventListener("click", () => {
      try {
        const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
        if (!saved?.raw) throw new Error();
        reportForm.elements.prueba.value = saved.raw.prueba || "";
        reportForm.elements.estadistico.value = saved.reportStatistic || "";
        reportForm.elements.p.value = saved.p ?? "";
        if (saved.raw.icInferior && saved.raw.icSuperior) {
          reportForm.elements.intervalo.value = `IC [${formatNumber(saved.raw.icInferior)}, ${formatNumber(saved.raw.icSuperior)}]`;
        }
        reportForm.elements.efectoNombre.value = saved.raw.efectoNombre || "";
        reportForm.elements.efectoValor.value = saved.raw.efectoValor || "";
        reportForm.elements.conclusion.value = saved.interpretation || "";
        reportStatus.textContent = "Se cargó la interpretación anterior. Complete el objetivo y revise el texto.";
      } catch {
        reportStatus.textContent = "Todavía no hay una interpretación guardada en esta sesión.";
      }
    });

    section.querySelector('[data-copy-target="interpretacion"]').addEventListener("click", () => {
      copyText(interpretOutput.textContent || "", interpretStatus);
    });
    section.querySelector('[data-copy-target="reporte"]').addEventListener("click", () => {
      copyText(reportOutput.textContent || "", reportStatus);
    });
    section.querySelector("[data-download-report]").addEventListener("click", () => {
      const text = reportOutput.textContent || "";
      if (!text.trim()) {
        reportStatus.textContent = "Primero genere un reporte.";
        return;
      }
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "reporte-estadistico-kernel.txt";
      link.click();
      URL.revokeObjectURL(url);
      reportStatus.textContent = "Reporte TXT descargado.";
    });
  }

  function install() {
    if (route() !== "laboratoriokernel") return;
    addStyles();

    const catalog = document.getElementById("catalogo-analisis");
    const laboratory = catalog?.closest("section.w-full");
    if (!catalog || !laboratory) return;

    let section = document.getElementById(SECTION_ID);
    if (!section) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = markup().trim();
      section = wrapper.firstElementChild;
      laboratory.insertBefore(section, catalog);
    }
    bind(section);
  }

  let timer = 0;
  function schedule() {
    clearTimeout(timer);
    timer = window.setTimeout(install, 40);
  }

  const observer = new MutationObserver(schedule);
  const main = document.getElementById("main");
  if (main) observer.observe(main, { childList: true, subtree: true });

  window.KernelInterpretReport = Object.freeze({
    version: VERSION,
    install,
    formatP
  });

  schedule();
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
})();
