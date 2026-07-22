import unapec from "../../assets/apec.png";
import isfodosu from "../../assets/isfodosu.png";
import uasd from "../../assets/uasd.png";

function crearSlide(imagen, nombre, descripcion) {
   return {
      content: `
         <article class="flex h-full w-full flex-col items-center justify-center text-center">
            <div class="flex h-44 w-full max-w-xl items-center justify-center rounded-3xl border border-white/30 bg-white p-6 shadow-2xl md:h-56 md:p-8">
               <img
                  src="${imagen}"
                  alt="Logo de ${nombre}"
                  title="${nombre}"
                  class="h-full w-full object-contain"
                  loading="lazy"
               />
            </div>
            <p class="mt-5 text-2xl font-black text-white md:text-3xl">${nombre}</p>
            <p class="mt-2 max-w-lg text-sm leading-relaxed text-sky-100 md:text-base">${descripcion}</p>
         </article>
      `
   };
}

export const slideElement = [
   crearSlide(
      unapec,
      "UNAPEC",
      "Vinculación académica, docencia de posgrado y producción científica."
   ),
   crearSlide(
      isfodosu,
      "ISFODOSU",
      "Formación docente, educación matemática e investigación educativa."
   ),
   crearSlide(
      uasd,
      "UASD",
      "Colaboración académica y fortalecimiento de la investigación matemática."
   )
];
