import { primerPeriodoComponent } from "./primerPeriodoComponent.js";
import { segundoPeriodoComponent } from "./segundoPeriodoComponent.js";
import { calificacionFinalComponent } from "./calificacionFinalComponent.js";

export function bannerComponent() {

    const container = document.createElement("section");

    container.className =
        "w-full max-w-7xl mx-auto px-4 py-10";

    container.innerHTML = `
        <div class="mb-10 text-center">

            <p class="text-[#5580C1] font-black uppercase tracking-widest text-sm mb-2">
                Universidad APEC · Ellucian Banner
            </p>

            <h1 class="text-4xl md:text-5xl font-black text-slate-800">
                Generador de Publicaciones de Calificaciones
            </h1>

            <p class="mt-4 max-w-4xl mx-auto text-slate-600 leading-relaxed text-lg">
                Esta herramienta permite preparar los archivos de importación
                para la plataforma Banner de APEC, organizando las
                calificaciones por período académico y validando
                automáticamente los datos antes de exportarlos.
            </p>

        </div>

        <div class="grid gap-8">

            <div id="banner-primer-periodo"></div>

            <div id="banner-segundo-periodo"></div>

            <div id="banner-calificacion-final"></div>

        </div>
    `;

    container
        .querySelector("#banner-primer-periodo")
        .appendChild(primerPeriodoComponent());

    container
        .querySelector("#banner-segundo-periodo")
        .appendChild(segundoPeriodoComponent());

    container
        .querySelector("#banner-calificacion-final")
        .appendChild(calificacionFinalComponent());

    return container;

}
