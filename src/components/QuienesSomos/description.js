export function createDescription(
  paragraphs = [
    "El Grupo de Investigación El Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en métodos numéricos, ecuaciones en derivadas parciales no lineales, optimización, álgebra y educación matemática.",
    "Nuestro grupo está formado por docentes e investigadores adscritos a prestigiosas instituciones de educación superior de la República Dominicana, con una fuerte vocación hacia el desarrollo científico, tecnológico y pedagógico del país y de la región."
  ]
) {

  const descriptionContent = `

    <section class="w-full px-6 sm:px-12 lg:px-14 py-12 overflow-x-hidden">
    
        <div data-description-text
        class="text-black text-base md:text-xl lg:text-2xl leading-relaxed font-sans 
        space-y-6 line-clamp-4 sm:line-clamp-none">

            ${paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
    
      <!-- BUTTON READ MORE -->
      <button data-description-btn
        class="mt-4 text-[#E68143] font-semibold sm:hidden">
        Leer más
      </button>

    </section>
  `;
  return descriptionContent;
}