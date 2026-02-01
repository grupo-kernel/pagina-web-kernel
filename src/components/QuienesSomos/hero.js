export function createHero(
  title = "¿Quiénes Somos?",
  imageUrl = "./assets/QuienesSomos.png"
) {


  const heroContent = `
    <section role="banner" class="relative w-screen min-h-screen
     left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 md:-mt-14 -mx-2 overflow-hidden">
     
    <!-- Imagen del banner -->
      <img src="${imageUrl}" alt="${title}" class="absolute inset-0 w-full h-full object-cover loading="lazy"/>
      
    <!-- Overlay -->
      <div class="absolute inset-0 bg-[#1A2B48]/55"></div>

    <!-- Titulo -->
      <div class="absolute inset-0 flex items-center justify-center px-6 sm:px-12 lg:px-24 text-center">
        
      <div>

      <!-- Texto -->
        <h1 class="font-sans font-bold italic text-white text-5xl md:text-6xl lg:text-8xl inline-block ">
        ${title}        
        </h1>

      <!-- Barra decorativa -->
        <div class="h-3 w-1/2 mx-auto mt-4 rounded-full bg-[#E68143] shadow-lg" ></div>
    
        </div>
    </div>
    </section>
  `;
  return heroContent;
}