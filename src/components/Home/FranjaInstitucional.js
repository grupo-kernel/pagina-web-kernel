import isfodosu from "../../assets/isfodosu.png";
import uasd from "../../assets/uasd.png";
import unapec from "../../assets/apec.png";

const INSTITUCIONES = Object.freeze([
    Object.freeze({
        sigla: "ISFODOSU",
        nombre: "Instituto Superior de Formación Docente Salomé Ureña",
        imagen: isfodosu,
        enlace: "https://www.isfodosu.edu.do/"
    }),
    Object.freeze({
        sigla: "UASD",
        nombre: "Universidad Autónoma de Santo Domingo",
        imagen: uasd,
        enlace: "https://uasd.edu.do/"
    }),
    Object.freeze({
        sigla: "UNAPEC",
        nombre: "Universidad APEC",
        imagen: unapec,
        enlace: "https://unapec.edu.do/"
    })
]);

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function tarjetaInstitucion(institucion) {
    return `
        <a
            href="${institucion.enlace}"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0f5b5d]/30 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
            aria-label="Visitar el sitio institucional de ${escapar(institucion.sigla)}"
        >
            <span class="flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-1.5 ring-1 ring-slate-200">
                <img
                    src="${institucion.imagen}"
                    alt="Logo de ${escapar(institucion.sigla)}"
                    class="h-full w-full object-contain"
                    loading="eager"
                />
            </span>
            <span class="min-w-0">
                <span class="block text-sm font-black text-slate-950 group-hover:text-[#0f5b5d]">${escapar(institucion.sigla)}</span>
                <span class="mt-0.5 block text-xs leading-snug text-slate-500">${escapar(institucion.nombre)}</span>
            </span>
        </a>
    `;
}

function metrica(valor, etiqueta) {
    return `
        <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
            <p class="text-2xl font-black text-white md:text-3xl">${escapar(valor)}</p>
            <p class="mt-1 text-xs font-semibold leading-tight text-slate-300">${escapar(etiqueta)}</p>
        </div>
    `;
}

export function CrearFranjaInstitucional({ integrantes, servicios, lineas, publicaciones }) {
    const section = document.createElement("section");
    section.className = "mx-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg sm:mx-6 lg:mx-8 xl:mx-10";
    section.setAttribute("aria-labelledby", "titulo-confianza-portada");

    section.innerHTML = `
        <div class="grid grid-cols-1 xl:grid-cols-[1.25fr_0.75fr]">
            <div class="p-5 md:p-7">
                <div class="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Vinculación y confianza institucional</p>
                        <h2 id="titulo-confianza-portada" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Una red académica visible, sin competir con la propuesta principal</h2>
                    </div>
                    <p class="max-w-xl text-sm leading-relaxed text-slate-600">Las tres instituciones principales se mantienen siempre visibles y enlazadas desde una franja compacta.</p>
                </div>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
                    ${INSTITUCIONES.map(tarjetaInstitucion).join("")}
                </div>
            </div>

            <aside class="bg-[#071820] p-5 text-white md:p-7" aria-label="Indicadores y principios de confianza">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#d7a955]">Capacidad institucional</p>
                <div class="mt-4 grid grid-cols-2 gap-3">
                    ${metrica(integrantes, "Integrantes")}
                    ${metrica(servicios, "Áreas de servicio")}
                    ${metrica(lineas, "Líneas de investigación")}
                    ${metrica(publicaciones, "Publicaciones registradas")}
                </div>
                <div class="mt-5 flex flex-wrap gap-2" aria-label="Principios de trabajo">
                    ${["Confidencialidad", "Reproducibilidad", "Transferencia"].map((principio) => `
                        <span class="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">${principio}</span>
                    `).join("")}
                </div>
            </aside>
        </div>
    `;

    return section;
}
