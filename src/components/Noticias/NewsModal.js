// Refactorizar e optimizar el controllers
//Verificar que sean los mismos parrafos y listados.
export function newsModal({ title, content, articleURL }) {

  //Manejo de listado y parrafos.
  const paragraphs = content.paragraphs
    .map(p => `<p>${p}<p>`).join("");

  const list = content.list.length
    ? ` 
    <ul class="list-disc pl-6 space-y-2">
        ${content.list.map(item => `<li>${item}</li>`).join("")}
    </ul> `
    : "";


  const nwModal = `
  
      <div role="news-modal" id="newsModal" 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm 
        flex items-center justify-center z-50 p-4">

      <div class="bg-white w-full md:max-w-lg
        rounded-2xl md:rounded-xl shadow-2xl relative animate-modalIn
        max-h-[85vh] flex flex-col">
      
      <!-- Header  -->
        <div class="relative p-5 border-b border-gray-200">

          <h2 class="text-xl md:text-2xl font-bold text-gray-800 pr-10">
            ${title}
          </h2>
        
        <!-- Botón X -->
          <button data-close-modal
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full
          bg-white/80 hover:bg-gray-200 text-gray-600 text-lg font-bold transition">
            ✕
          </button>
        </div>

      <!-- Contenido -->
        <div class="p-6 overflow-y-auto flex-1 space-y-4 text-gray-600 leading-relaxed ">

            ${paragraphs} 
            ${list}

        </div>
      
        <!-- Footer -->
          <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

            ${articleURL ? ` <a href="${articleURL}" target="_blank"class="px-4 py-2 rounded-lg 
            bg-blue-600 text-white hover:bg-blue-700 transition"> 
            Leer artículo 
            </a>`: ""}

          <button data-close-modal class="px-4 py-2 rounded-lg
            border border-gray-300 hover:bg-gray-400 transition">
            Cerrar
          </button>
          
      </div>
      </div>
      </div>

    `;
  return nwModal;
}
