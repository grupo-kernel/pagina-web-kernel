import { contenidoCards } from "./CardContenido.js";
export function CardEquipo(){
        const card = `<div class="relative flex flex-col gap-7  lg:w-full ">

                <div class="  rounded-xl  relative m-auto flex  items-center justify-between gap-8  " > 
                
                <!----card1------->
                <div class="flex bg-white border rounded-xl  cursor-pointer  shadow-2xl border-black  w-89.5 h-139  flex-col items-center text-center  justify-center p-2 gap-4  ">

                                <div class="flex items-center justify-center flex-col gap-1.5 " >
                                    <img src="./src/assets/sep.png" alt=""  class=" w-34  border-3 border-sky-600 rounded-full  "  >
                                    <h2 class=" text-lg  font-bold  " >Miguel A. Leonardo Sepúlveda, Ph.D</h2>
                                    <p class=" font-mono text-textMs " >Investigador en Métodos Numéricos, EDPs y Educación Matemática</p>
                                </div>

                                <div class="flex items-center text-center justify-center flex-col gap-1.5  " >
                                        <p><b>Áreas:</b> Métodos iterativos de alto orden, métodos libres de Jacobiano,
                                         EDPs no lineales, optimización, diseño curricular,
                                         educación matemática, formación docente.</p>
                                         <p><b>Afiliaciones:</b> ITLA, ISFODOSU, APEC</p>

                                         <div></div>
                                        <p>Doctor en Matemática con enfoque en métodos numéricos avanzados.
                                         Asesor de tesis de posgrado y pregrado. Diseñador y rediseñador de programas curriculares universitarios.
                                          Investigador en métodos libres de Jacobiano, análisis numérico y
                                         formación de docentes.</p>
                                </div>
                        </div>

                          
                <!----card2------->
                        <div class="lg:flex hidden bg-white border rounded-xl shadow-2xl border-black  w-89.5 h-139  flex-col items-center text-center  justify-center p-2 gap-4  ">
                                <div class="flex items-center justify-center flex-col gap-1.5 " >
                                    <img src="./src/assets/sep.png" alt=""  class=" w-34  border-3 border-sky-600 rounded-full  "  >
                                    <h2 class=" text-lg  font-bold  " >Miguel A. Leonardo Sepúlveda, Ph.D</h2>
                                    <p class=" font-mono text-textMs " >Investigador en Métodos Numéricos, EDPs y Educación Matemática</p>
                                </div>

                                <div class="flex  items-center text-center justify-center flex-col gap-1.5  " >
                                        <p><b>Áreas:</b> Métodos iterativos de alto orden, métodos libres de Jacobiano,
                                         EDPs no lineales, optimización, diseño curricular,
                                         educación matemática, formación docente.</p>
                                         <p><b>Afiliaciones:</b> ITLA, ISFODOSU, APEC</p>

                                         <div></div>
                                        <p>Doctor en Matemática con enfoque en métodos numéricos avanzados.
                                         Asesor de tesis de posgrado y pregrado. Diseñador y rediseñador de programas curriculares universitarios.
                                          Investigador en métodos libres de Jacobiano, análisis numérico y
                                         formación de docentes.</p>
                                </div>
                        </div>


                          
                <!----card3------->
                        <div class="lg:flex bg-white border hidden  border-black  w-89.5 h-139 rounded-xl shadow-2xl  flex-col items-center text-center  justify-center p-2 gap-4  ">
                                <div class="flex items-center justify-center flex-col gap-1.5 " >
                                    <img src="./src/assets/sep.png" alt=""  class=" w-34  border-3 border-sky-600 rounded-full  "  >
                                    <h2 class=" text-lg  font-bold  " >Miguel A. Leonardo Sepúlveda, Ph.D</h2>
                                    <p class=" font-mono text-textMs " >Investigador en Métodos Numéricos, EDPs y Educación Matemática</p>
                                </div>

                                <div class="flex items-center text-center justify-center flex-col gap-1.5  " >
                                        <p><b>Áreas:</b> Métodos iterativos de alto orden, métodos libres de Jacobiano,
                                         EDPs no lineales, optimización, diseño curricular,
                                         educación matemática, formación docente.</p>
                                         <p><b>Afiliaciones:</b> ITLA, ISFODOSU, APEC</p>

                                         <div></div>
                                        <p>Doctor en Matemática con enfoque en métodos numéricos avanzados.
                                         Asesor de tesis de posgrado y pregrado. Diseñador y rediseñador de programas curriculares universitarios.
                                          Investigador en métodos libres de Jacobiano, análisis numérico y
                                         formación de docentes.</p>
                                </div>
                        </div>

                </div>


            <div class=" absolute w-full hidden inset-0 md:flex  items-center justify-between p-4 lg:p-0  "> 
                    <i class="bx bx-caret-left  cursor-pointer  text-4xl  lg:text-7xl  "></i>
                    <i class="bx bx-caret-right cursor-pointer   text-4xl  lg:text-7xl "></i>
            </div>
            
            <div class="bg-sky-800 rounded-xl w-89.5  lg:w-full min-h-14 p-2 text-center text-lg  lg:text-xl text-white " > 
                <h1>Conoce más sobre el trabajo de nuestros investigadores </h1>
                <p class=" cursor-pointer font-bold underline   " >Leer más</p>
            </div>

        </div>`;

    return card;    
}