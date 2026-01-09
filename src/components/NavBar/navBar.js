export function createNavBar(){
        const wrapper = `<nav class=" flex flex-col lg:flex-row  w-4/5 md:w-3/4 lg:w-3xl h-dvh lg:h-24">
        <div class="lg:hidden flex px-2.5  justify-between items-center w-96 mb-7">
                    <span class="text-4xl font-medium ">El Kernel</span>
                    <i class=" text-6xl cursor-pointer bx  bx-x"></i>
                </div>
                    <ul class="flex text-black flex-col lg:flex-row p-4 gap-8 lg:gap-9  w-96 lg:w-3xl">
                      <li class="flex lg:gap-3  justify-between font-medium  items-center text-2xl min-h-11" >
                      <a href="#"> Nosotros </a>
                      <i class=" text-3xl bx  bx-caret-down"></i> 
                      <ul class="hidden" >
                            <li><a href="#" >Quienes Somos</a></li>
                            <li><a href="#" >Equipo</a></li>
                        </ul>
                      </li>  
                      <li class=" flex lg:gap-3  justify-between font-medium  items-center  text-2xl min-h-11">
                      <a href="#"> Nuestro Trabajo </a>
                      <i class=" text-3xl bx  bx-caret-down"></i> 
                      <ul class="hidden">
                            <li><a href="#">Líneas</a></li>
                            <li><a href="#"> Proyectos</a></li> 
                            <li><a href="#"> Publicaciones</a></li> 
                      </ul>

                      </li>  
                      <li class=" flex lg:gap-3  justify-between font-medium  items-center  text-2xl min-h-11">
                      <a href="#"> Noticias </a>
                    <i class=" text-3xl bx  bx-news"></i> 
                    </li>  

                    <li class=" flex lg:gap-3  justify-between  font-medium items-center  text-2xl min-h-11">
                    <a href="#"> Noticias </a>
                    <i class=" text-3xl bx  bx-contact-book"></i> 
                      </li>  
                    </ul></nav>`;

        return wrapper;
}