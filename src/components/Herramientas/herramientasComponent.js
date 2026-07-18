export function herramientasComponent() {
  const container = document.createElement("section");

  container.className =
    "w-full max-w-7xl mx-auto px-4 py-8";

  container.innerHTML = `
    <div class="mb-8 text-center">
      <p class="text-sky-600 font-bold uppercase tracking-wide text-sm mb-2">
        Grupo de Investigación Kernel
      </p>

      <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
        Herramientas Académicas
      </h1>

      <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
        Utilidades digitales para facilitar tareas docentes, académicas
        y administrativas.
      </p>
    </div>

    <div class="bg-white rounded-3xl shadow-xl border border-sky-100 p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <p class="text-sky-600 text-sm font-bold uppercase tracking-wide mb-2">
            Primera herramienta
          </p>

          <h2 class="text-2xl md:text-3xl font-black text-slate-800">
            Generador de calificaciones para Xmera
          </h2>

          <p class="text-slate-500 mt-3 max-w-3xl leading-relaxed">
            Permitirá introducir matrículas y calificaciones para generar
            automáticamente el código utilizado en la plataforma Xmera del ITLA.
          </p>
        </div>

        <div class="shrink-0">
          <i class="bx bx-code-alt text-6xl text-sky-600"></i>
        </div>
      </div>

      <div class="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6">
        <p class="font-bold text-slate-800">
          Herramienta en construcción
        </p>

        <p class="text-slate-500 mt-2">
          La estructura inicial está correctamente conectada con la navegación
          del sitio.
        </p>
      </div>
    </div>
  `;

  return container;
}
