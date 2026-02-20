// Size icon Redes Sociales
// Slider Componenent size 

export function CreateCardFirstHome() {

    const card = `<div class =" flex justify-center 
            bg-white shadow-2xl p-2 
                border-l-2 border-t-2 
                w-89.5 h-85 md:w-184
                md:h-85 rounded-tl-2xl rounded-bl-2xl 
                md:justify-between md:mb-8
                lg:w-178 lg:h-130 lg:p-6
                2xl:w-275 2xl:h-187.5 2xl:p-12
                  "> 

                <div class=" w-70.5 h-46.5 md:w-123  flex flex-col mt-4 mb-3  lg:w-118.75 lg:h-76.75 2xl:w-190 2xl:h-auto 2xl:mt-14 " >

                       <h3 class="text-2xl font-bold w-55 mb-1.5 xsM:w-full lg:w-96.75 lg:text-5xl 2xl:w-160 2xl:text-7xl 2xl:mb-3.5 2xl:leading-tight"> Grupo de investigación </h3>

                        <p class="text-xs mb-2 leading-4.5 md:mb-3.5 md:w-120.75 lg:w-116.75 lg:text-xl 2xl:text-3xl 2xl:w-170 2xl:mb-12 md:leading-6 2xl:leading-10 " >
                        Exploramos EDPs no lineales, Métodos iterativos,
                        Análisis Matricial, Diseño de algoritmos y Educación Matemática.</p>

                        <p class=" text-xs italic leading-4 lg:text-lg lg:mt-4 md:text-lg 2xl:text-2xl 2xl:mt-4 " >“Innovando en la frontera entre matemática y educación” </p>

                        <div class="flex items-center w-full justify-center gap-2 md:justify-between md:mt-3.5 md:w-171.5 lg:w-165.75 lg:mt-2 2xl:mt-20 2xl:gap-4">

                                <span class=" cursor-pointer flex flex-col items-center  transition transform  " >
                                    <p class=" text-family-size font-bold 2xl:text-4xl" >7 +</p>                
                                    <p class=" text-xs text-nowrap lg:text-lg md:text-lg 2xl:text-xl" >Miembros principales</p>
                                </span>
                                <span class=" cursor-pointer flex flex-col items-center   transition transform " >
                                    <p class=" text-family-size font-bold 2xl:text-4xl" >15 +</p>                
                                    <p class=" text-xs text-nowrap  lg:text-lg md:text-lg 2xl:text-xl" >Publicaciones</p>
                                </span>
                                <span class=" cursor-pointer flex flex-col items-center  transition transform  " >
                                    <p class=" text-family-size font-bold 2xl:text-4xl" >0</p>                
                                    <p class=" text-xs text-nowrap  lg:text-lg md:text-lg 2xl:text-xl" >Proyectos en curso</p>
                                </span>
                        </div> 
                </div>

                <!-- Redes Sociales  -->

                <div class="flex flex-col w-6.25 h-35.75 gap-2.5 lg:gap-5.5 lg:w-8 lg:h-59.5 2xl:w-12 2xl:gap-10">

                    <span  class="transform cursor-pointer  w-6.5 h-6.5 lg:w-8 lg:h-8 rounded-full p-1  bg-black items-center justify-center lg:p-2 "  >

                       <a href="https://www.linkedin.com" target="_blank" class="social-link">
                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-linkedin" viewBox="0 0 32 32">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            </a>
                    </span>

                    <span  class="transform  cursor-pointer  w-6.5 h-6.5  lg:w-8 lg:h-8  rounded-full p-1  bg-black items-center justify-center  lg:p-2 "  >

                     <a href="https://github.com/grupo-kernel" target="_blank" class="social-link">
                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-github" viewBox="0 0 32 32">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg> 
                        </a>
                    </span>

                    <span  class="transform  cursor-pointer w-6.5 h-6.5   lg:w-8 lg:h-8   rounded-full p-1 bg-black items-center justify-center lg:p-2  "  >
                      
                    <a href="https://wa.me/?text=Hola,%20mira%20este%20enlace:%20https://https://www.grupoelkernel.com" target="_blank" class="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-share" viewBox="0 0 32 32">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                                </svg>
                                      </a>  
                    </span>

                    <span  class="transform  cursor-pointer w-6.5 h-6.5   lg:w-8 lg:h-8   rounded-full p-1 bg-black items-center justify-center lg:p-2  "  >
                        <a href="mailto:mleonardos@unapec.edu.do" class="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-envelope" viewBox="0 0 32 32">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            </a>
                    </span>
                            
                </div>

            </div> 
            <!-- Fin tarjeta principal  -->  `;

    return card;
}
