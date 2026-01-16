export function CreateHome() {
        const wrapper  = `<section class="relative flex flex-col h-auto w-auto   " >
            <div class =" flex  justify-center bg-white shadow-2xl p-2  border-l-2 border-t-2  w-89.5 h-85  rounded-t-2xl"> 
                <div class=" w-70.5 h-46.5 flex flex-col mt-4 mb-3 " >
                       <h3 class=" text-2xl font-bold w-55 mb-1.5  "> Grupo de investigación </h3>
                        <p class=" text-xs mb-2 leading-4.5    " >Exploramos EDPs no lineales, Métodos iterativos, Análisis Matricial, Diseño de algoritmos y Educación Matemática.</p>
                        <p class=" text-xs italic leading-4 " >“Innovando en la frontera entre matemática y educación” </p>
                        <div class="flex items-center justify-center gap-2  " >
                                <span class=" cursor-pointer flex flex-col items-center hover:-translate-y-2  transition transform  " >
                                    <p class=" text-family-size font-bold " >7 +</p>                
                                    <p class=" text-xs text-nowrap " >Miembros principales</p>
                                </span>
                                <span class=" cursor-pointer flex flex-col items-center  hover:-translate-y-2  transition transform " >
                                    <p class=" text-family-size font-bold " >15 +</p>                
                                    <p class=" text-xs text-nowrap " >Publicaciones</p>
                                </span>
                                <span class=" cursor-pointer flex flex-col items-center hover:-translate-y-2  transition transform  " >
                                    <p class=" text-family-size font-bold " >0</p>                
                                    <p class=" text-xs text-nowrap " >Proyectos en curso</p>
                                </span>
                        </div> 
                </div>
                <div class="flex flex-col w-6.25 h-35.75 gap-2.5  " >
                       <span  class=" cursor-pointer  rounded-full p-1 bg-black items-center justify-center "  >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" bg-white" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                                    
                       </span>
                     <span  class=" cursor-pointer  rounded-full p-1 bg-black items-center justify-center "  >
                        <svg xmlns="../assets/linkeding.svg" width="15" height="15" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16">
            
                       </span>
                        <span  class=" cursor-pointer  rounded-full p-1 bg-black items-center justify-center "  >
                        <svg xmlns="../assets/linkeding.svg" width="15" height="15" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16">
            
                       </span>
                        <span  class=" cursor-pointer  rounded-full p-1 bg-black items-center justify-center "  >
                        <svg xmlns="../assets/linkeding.svg" width="15" height="15" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16">
            
                       </span>
                            
                </div>

            </div>
            <div class="absolute bottom-0 left-0 bg-footer-primary z-10 translate-y-1/2 w-89.5 h-47.5  rounded-2xl " >
                    <div class=" ">
                         <div class="flex items-center justify-between p-4 " >
                                <i class=" text-4xl absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-white   bxr  bx-arrow-left"></i> 
                                <i class=" text-4xl absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white   bxr  bx-arrow-right"></i> 
                         </div>
                        
                    </div>

                    
            </div>
        
        </section>`;

        return wrapper;
}