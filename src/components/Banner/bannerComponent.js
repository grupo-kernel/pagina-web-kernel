import { primerPeriodoComponent } from "./primerPeriodoComponent.js";
import { segundoPeriodoComponent } from "./segundoPeriodoComponent.js";
import { calificacionFinalComponent } from "./calificacionFinalComponent.js";

export function bannerComponent() {
    const container = document.createElement("section");

    container.className = "w-full max-w-7xl mx-auto px-4 py-10";

    container.innerHTML = `
        <div id="banner-menu">
            <div class="mb-10 text-center">
                <p class="mb-2 text-sm font-black uppercase tracking-widest text-[#5580C1]">
                    Universidad APEC · Ellucian Banner
                </p>

                <h1 class="text-3xl font-black text-slate-800 md:text-5xl">
                    Generador de Publicaciones de Calificaciones
                </h1>

                <p class="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg">
                    Selecciona el período académico que deseas preparar.
                    Cada herramienta permite organizar, validar y generar
                    los datos necesarios para la publicación de calificaciones
                    en Banner.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <article
                    class="group flex h-full flex-col rounded-3xl border border-blue-100 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                    <div class="mb-6 flex items-center justify-between">
                        <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                        <i class="bx bx-check-circle text-4xl text-emerald-600"></i>
                        </div>

                        <span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#5580C1]">
                            Primer corte
                        </span>
                    </div>

                    <h2 class="text-2xl font-black text-slate-800">
                        Primer período
                    </h2>

                    <p class="mt-3 leading-relaxed text-slate-600">
                        Prepara las calificaciones correspondientes al primer
                        corte académico.
                    </p>

                    <div class="mt-5 space-y-3">
                        <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p class="text-sm font-black text-slate-800">
                                1AC · Acumulado Primer Parcial
                            </p>

                            <p class="mt-1 text-sm text-slate-500">
                                Prácticas y actividades acumuladas. Valor máximo:
                                15 puntos.
                            </p>
                        </div>

                        <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p class="text-sm font-black text-slate-800">
                                2PP · Primer Parcial
                            </p>

                            <p class="mt-1 text-sm text-slate-500">
                                Evaluación del primer parcial. Valor máximo:
                                20 puntos.
                            </p>
                        </div>
                    </div>

                    <button
                        id="open-primer-periodo"
                        type="button"
                        class="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#5580C1] px-5 py-3 font-black text-white transition hover:bg-[#416aa8]"
                    >
                        Abrir herramienta
                        <i class="bx bx-right-arrow-alt text-2xl"></i>
                    </button>
                </article>

                <article
                    class="group flex h-full flex-col rounded-3xl border border-emerald-100 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                    <div class="mb-6 flex items-center justify-between">
                        <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                            <i class="bx bx-bar-chart-alt-2 text-4xl text-emerald-600"></i>
                        </div>

                        <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-700">
                            Segundo corte
                        </span>
                    </div>

                    <h2 class="text-2xl font-black text-slate-800">
                        Segundo período
                    </h2>

                    <p class="mt-3 leading-relaxed text-slate-600">
                        Prepara la calificación total correspondiente al segundo
                        corte académico.
                    </p>

                    <div class="mt-5">
                        <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p class="text-sm font-black text-slate-800">
                                3SP · Segundo Parcial
                            </p>

                            <p class="mt-1 text-sm text-slate-500">
                                Incluye las prácticas acumuladas y la evaluación
                                del segundo parcial. Valor máximo: 35 puntos.
                            </p>
                        </div>
                    </div>

                    <button
                        id="open-segundo-periodo"
                        type="button"
                        class="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700"
                    >
                        Abrir herramienta
                        <i class="bx bx-right-arrow-alt text-2xl"></i>
                    </button>
                </article>

                <article
                    class="group flex h-full flex-col rounded-3xl border border-rose-100 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                    <div class="mb-6 flex items-center justify-between">
                        <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50">
                            <i class="bx bx-check-circle text-4xl text-rose-600"></i>
                        </div>

                        <span class="rounded-full bg-rose-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-rose-700">
                            Evaluación final
                        </span>
                    </div>

                    <h2 class="text-2xl font-black text-slate-800">
                        Calificación final
                    </h2>

                    <p class="mt-3 leading-relaxed text-slate-600">
                        Prepara las calificaciones correspondientes al examen
                        final de la asignatura.
                    </p>

                    <div class="mt-5">
                        <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p class="text-sm font-black text-slate-800">
                                4EF · Examen Final
                            </p>

                            <p class="mt-1 text-sm text-slate-500">
                                Evaluación final de la asignatura. Valor máximo:
                                30 puntos.
                            </p>
                        </div>
                    </div>

                    <button
                        id="open-calificacion-final"
                        type="button"
                        class="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 font-black text-white transition hover:bg-rose-700"
                    >
                        Abrir herramienta
                        <i class="bx bx-right-arrow-alt text-2xl"></i>
                    </button>
                </article>
            </div>

            <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div class="flex gap-3">
                    <i class="bx bx-info-circle mt-0.5 text-2xl text-amber-700"></i>

                    <div>
                        <p class="font-black text-amber-900">
                            Distribución de la calificación
                        </p>

                        <p class="mt-1 text-sm leading-relaxed text-amber-800">
                            Primer período: 35 puntos. Segundo período:
                            35 puntos. Examen final: 30 puntos. Total:
                            100 puntos.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div id="banner-tool-view" class="hidden">
            <div class="mb-6">
                <button
                    id="banner-back"
                    type="button"
                    class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                >
                    <i class="bx bx-left-arrow-alt text-2xl"></i>
                    Volver a los períodos
                </button>
            </div>

            <div id="banner-tool-content"></div>
        </div>
    `;

    const menu = container.querySelector("#banner-menu");
    const toolView = container.querySelector("#banner-tool-view");
    const toolContent = container.querySelector("#banner-tool-content");

    const primerButton = container.querySelector("#open-primer-periodo");
    const segundoButton = container.querySelector("#open-segundo-periodo");
    const finalButton = container.querySelector("#open-calificacion-final");
    const backButton = container.querySelector("#banner-back");

    function openTool(componentFactory) {
        toolContent.innerHTML = "";

        try {
            const component = componentFactory();

            if (!(component instanceof HTMLElement)) {
                throw new Error(
                    "El componente seleccionado no devolvió un elemento HTML válido."
                );
            }

            toolContent.appendChild(component);

            menu.classList.add("hidden");
            toolView.classList.remove("hidden");

            container.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } catch (error) {
            console.error(
                "No fue posible abrir la herramienta de Banner:",
                error
            );

            toolContent.innerHTML = `
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                    <p class="font-black">
                        No fue posible abrir esta herramienta
                    </p>

                    <p class="mt-2 text-sm">
                        Revisa que el componente esté correctamente creado
                        y exportado.
                    </p>
                </div>
            `;

            menu.classList.add("hidden");
            toolView.classList.remove("hidden");
        }
    }

    function returnToMenu() {
        toolContent.innerHTML = "";
        toolView.classList.add("hidden");
        menu.classList.remove("hidden");

        container.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    primerButton.addEventListener("click", () => {
        openTool(primerPeriodoComponent);
    });

    segundoButton.addEventListener("click", () => {
        openTool(segundoPeriodoComponent);
    });

    finalButton.addEventListener("click", () => {
        openTool(calificacionFinalComponent);
    });

    backButton.addEventListener("click", returnToMenu);

    return container;
}
