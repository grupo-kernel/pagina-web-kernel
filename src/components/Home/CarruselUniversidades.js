import isfodosu from "../../assets/isfodosu.png";
import uasd from "../../assets/uasd.png";
import unapec from "../../assets/apec.png";

const INTERVALO_ROTACION = 6000;

const INSTITUCIONES = Object.freeze([
    Object.freeze({
        id: "isfodosu",
        sigla: "ISFODOSU",
        nombre: "Instituto Superior de Formación Docente Salomé Ureña",
        descripcion:
            "Formación docente, educación matemática e investigación educativa.",
        imagen: isfodosu,
        enlace: "https://www.isfodosu.edu.do/"
    }),
    Object.freeze({
        id: "uasd",
        sigla: "UASD",
        nombre: "Universidad Autónoma de Santo Domingo",
        descripcion:
            "Ciencias básicas, optimización, matemática aplicada y colaboración interdisciplinaria.",
        imagen: uasd,
        enlace: "https://uasd.edu.do/"
    }),
    Object.freeze({
        id: "unapec",
        sigla: "UNAPEC",
        nombre: "Universidad APEC",
        descripcion:
            "Matemática aplicada, computación científica, docencia y proyectos de investigación.",
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

function crearPestana(institucion, indice) {
    const activa = indice === 0;

    return `
        <button
            type="button"
            role="tab"
            id="pestana-${escapar(institucion.id)}"
            aria-controls="panel-universidad-portada"
            aria-selected="${activa}"
            tabindex="${activa ? "0" : "-1"}"
            data-universidad-control
            data-indice="${indice}"
            class="group min-w-0 rounded-2xl border px-2.5 py-2 text-left transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40 md:px-3 ${activa ? "border-sky-300 bg-sky-400/15 shadow-lg ring-2 ring-sky-300/30" : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"}"
        >
            <span class="flex items-center gap-2.5">
                <span class="flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm md:h-12 md:w-14">
                    <img src="${institucion.imagen}" alt="" class="h-full w-full object-contain" loading="eager" />
                </span>
                <span class="min-w-0">
                    <span class="block truncate text-xs font-black tracking-wide text-white md:text-sm">${escapar(institucion.sigla)}</span>
                    <span class="mt-0.5 hidden truncate text-[11px] text-slate-300 md:block">Ver institución</span>
                </span>
            </span>
        </button>
    `;
}

export function CrearCarruselUniversidades() {
    const primera = INSTITUCIONES[0];
    const aside = document.createElement("aside");

    aside.className =
        "flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:p-5";
    aside.setAttribute("aria-label", "Instituciones principales vinculadas al Grupo El Kernel");

    aside.innerHTML = `
        <div class="mb-4 flex items-start justify-between gap-4">
            <div>
                <p class="text-xs font-black uppercase tracking-[0.20em] text-sky-300">Instituciones principales</p>
                <h2 class="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">Vinculación académica</h2>
                <p class="mt-2 text-sm leading-relaxed text-slate-300">Seleccione una pestaña o permita que las tres instituciones roten automáticamente.</p>
            </div>
            <span data-universidad-contador class="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black text-sky-100">01 / 03</span>
        </div>

        <div role="tablist" aria-label="Universidades vinculadas" class="grid grid-cols-3 gap-2">
            ${INSTITUCIONES.map(crearPestana).join("")}
        </div>

        <article
            id="panel-universidad-portada"
            role="tabpanel"
            tabindex="0"
            aria-labelledby="pestana-${primera.id}"
            aria-live="polite"
            data-universidad-escenario
            class="relative mt-4 min-h-[330px] flex-1 overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-xl md:min-h-[390px]"
        >
            <img
                data-universidad-imagen
                src="${primera.imagen}"
                alt="Imagen institucional de ${escapar(primera.sigla)}"
                class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/5"></div>

            <div class="absolute right-3 top-3 z-10 flex gap-2 md:right-4 md:top-4">
                <button type="button" data-action="universidad-anterior" aria-label="Mostrar la institución anterior" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    <i aria-hidden="true" class="bx bx-chevron-left text-2xl"></i>
                </button>
                <button type="button" data-action="universidad-siguiente" aria-label="Mostrar la institución siguiente" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    <i aria-hidden="true" class="bx bx-chevron-right text-2xl"></i>
                </button>
            </div>

            <div class="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                <p data-universidad-sigla class="text-4xl font-black leading-none text-white md:text-5xl">${escapar(primera.sigla)}</p>
                <p data-universidad-nombre class="mt-2 text-base font-bold leading-tight text-white md:text-xl">${escapar(primera.nombre)}</p>
                <p data-universidad-descripcion class="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">${escapar(primera.descripcion)}</p>
                <a data-universidad-enlace href="${primera.enlace}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    Visitar institución
                    <i aria-hidden="true" class="bx bx-link-external text-lg"></i>
                </a>
            </div>
        </article>

        <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div data-universidad-progreso class="h-full w-1/3 rounded-full bg-sky-400 transition-transform duration-500"></div>
        </div>
        <p data-universidad-estado class="sr-only" aria-live="polite"></p>
    `;

    const imagen = aside.querySelector("[data-universidad-imagen]");
    const sigla = aside.querySelector("[data-universidad-sigla]");
    const nombre = aside.querySelector("[data-universidad-nombre]");
    const descripcion = aside.querySelector("[data-universidad-descripcion]");
    const enlace = aside.querySelector("[data-universidad-enlace]");
    const contador = aside.querySelector("[data-universidad-contador]");
    const estado = aside.querySelector("[data-universidad-estado]");
    const escenario = aside.querySelector("[data-universidad-escenario]");
    const progreso = aside.querySelector("[data-universidad-progreso]");
    const controles = [...aside.querySelectorAll("[data-universidad-control]")];
    const anterior = aside.querySelector("[data-action='universidad-anterior']");
    const siguiente = aside.querySelector("[data-action='universidad-siguiente']");
    const preferenciaMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    const controladorEventos = new AbortController();
    const opcionesEvento = { signal: controladorEventos.signal };

    let indice = 0;
    let temporizador = null;
    let inicioToque = null;
    let estuvoConectado = false;

    function normalizar(valor) {
        return (valor % INSTITUCIONES.length + INSTITUCIONES.length) % INSTITUCIONES.length;
    }

    function renderizar(anunciar = false) {
        const institucion = INSTITUCIONES[indice];

        imagen.src = institucion.imagen;
        imagen.alt = `Imagen institucional de ${institucion.sigla}`;
        sigla.textContent = institucion.sigla;
        nombre.textContent = institucion.nombre;
        descripcion.textContent = institucion.descripcion;
        enlace.href = institucion.enlace;
        contador.textContent = `${String(indice + 1).padStart(2, "0")} / ${String(INSTITUCIONES.length).padStart(2, "0")}`;
        escenario.setAttribute("aria-labelledby", `pestana-${institucion.id}`);
        progreso.style.transform = `translateX(${indice * 100}%)`;

        controles.forEach((control, posicion) => {
            const activo = posicion === indice;
            control.setAttribute("aria-selected", String(activo));
            control.tabIndex = activo ? 0 : -1;
            control.classList.toggle("border-sky-300", activo);
            control.classList.toggle("bg-sky-400/15", activo);
            control.classList.toggle("shadow-lg", activo);
            control.classList.toggle("ring-2", activo);
            control.classList.toggle("ring-sky-300/30", activo);
            control.classList.toggle("border-white/10", !activo);
            control.classList.toggle("bg-white/5", !activo);
        });

        if (anunciar) {
            estado.textContent = `${institucion.sigla}: ${institucion.nombre}`;
        }
    }

    function detenerRotacion() {
        if (temporizador !== null) {
            window.clearInterval(temporizador);
            temporizador = null;
        }
    }

    function iniciarRotacion() {
        detenerRotacion();
        if (preferenciaMovimiento.matches || document.hidden) return;

        temporizador = window.setInterval(() => {
            if (!aside.isConnected) return;
            indice = normalizar(indice + 1);
            renderizar(false);
        }, INTERVALO_ROTACION);
    }

    function seleccionar(nuevoIndice, anunciar = true, enfocar = false) {
        indice = normalizar(nuevoIndice);
        renderizar(anunciar);
        if (enfocar) controles[indice]?.focus();
        iniciarRotacion();
    }

    anterior?.addEventListener("click", () => seleccionar(indice - 1), opcionesEvento);
    siguiente?.addEventListener("click", () => seleccionar(indice + 1), opcionesEvento);

    controles.forEach((control) => {
        control.addEventListener(
            "click",
            () => seleccionar(Number(control.dataset.indice)),
            opcionesEvento
        );
        control.addEventListener(
            "keydown",
            (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    seleccionar(indice - 1, true, true);
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    seleccionar(indice + 1, true, true);
                } else if (event.key === "Home") {
                    event.preventDefault();
                    seleccionar(0, true, true);
                } else if (event.key === "End") {
                    event.preventDefault();
                    seleccionar(INSTITUCIONES.length - 1, true, true);
                }
            },
            opcionesEvento
        );
    });

    aside.addEventListener("mouseenter", detenerRotacion, opcionesEvento);
    aside.addEventListener("mouseleave", iniciarRotacion, opcionesEvento);
    aside.addEventListener("focusin", detenerRotacion, opcionesEvento);
    aside.addEventListener(
        "focusout",
        (event) => {
            if (!aside.contains(event.relatedTarget)) iniciarRotacion();
        },
        opcionesEvento
    );

    escenario?.addEventListener(
        "touchstart",
        (event) => {
            inicioToque = event.changedTouches[0]?.clientX ?? null;
            detenerRotacion();
        },
        { ...opcionesEvento, passive: true }
    );
    escenario?.addEventListener(
        "touchend",
        (event) => {
            const finalToque = event.changedTouches[0]?.clientX ?? null;

            if (inicioToque !== null && finalToque !== null) {
                const desplazamiento = finalToque - inicioToque;
                if (Math.abs(desplazamiento) > 45) {
                    seleccionar(indice + (desplazamiento < 0 ? 1 : -1));
                } else {
                    iniciarRotacion();
                }
            }

            inicioToque = null;
        },
        { ...opcionesEvento, passive: true }
    );

    document.addEventListener(
        "visibilitychange",
        () => {
            if (document.hidden) detenerRotacion();
            else iniciarRotacion();
        },
        opcionesEvento
    );
    preferenciaMovimiento.addEventListener(
        "change",
        () => {
            if (preferenciaMovimiento.matches) detenerRotacion();
            else iniciarRotacion();
        },
        opcionesEvento
    );

    const observadorConexion = new MutationObserver(() => {
        if (aside.isConnected) {
            estuvoConectado = true;
            return;
        }

        if (estuvoConectado) {
            detenerRotacion();
            controladorEventos.abort();
            observadorConexion.disconnect();
        }
    });

    observadorConexion.observe(document.body, {
        childList: true,
        subtree: true
    });

    renderizar(false);
    iniciarRotacion();

    return aside;
}
