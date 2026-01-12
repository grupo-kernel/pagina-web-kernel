export function createNavBar(){
        const wrapper = `<div class="lg:hidden flex px-2.5  justify-between items-center  mb-7">
                    <span class="text-4xl font-medium ">El Kernel</span>
                    <i class=" text-6xl cursor-pointer bx  bx-x"></i>
                </div>

                  <ul class="flex text-black flex-col lg:flex-row p-4 gap-8 lg:gap-9  lg:w-3xl">
                    
                  <li data-action="open-subMenu" class=" flex   lg:gap-3 lg:relative group hover:cursor-pointer 
                       justify-between font-medium  items-center text-2xl " >
                        <a href="#" class="" > Nosotros </a>
                        <i class="text-3xl bx bx-caret-down"></i> 
                        
                      <ul class="flex-col text-base hidden  lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56  group-hover:block lg:bg-white lg:shadow-2xl " >
                            <li class=" px-2 py-1.5 hover:bg-sky-800 hover:text-white " ><a href="#" >Quienes Somos</a></li>
                            <li class=" px-2 py-1.5 hover:bg-sky-800 hover:text-white  " ><a href="#" >Equipo</a></li>
                        </ul>
                      </li>  

                      <li data-action="open-subMenu" class="  flex relative lg:gap-3 hover:cursor-pointer group  justify-between font-medium  items-center  text-2xl ">
                          <a href="#"> Nuestro Trabajo </a>
                          <i class=" text-3xl bx  bx-caret-down"></i> 

                      <ul class="group-hover:block absolute top-full w-56 left-0 mt-2 text-base bg-white shadow-2xl  hidden">
                            <li class=" px-2 py-1.5 hover:bg-sky-800 hover:text-white " ><a href="#">Líneas</a></li>
                            <li class=" px-2 py-1.5 hover:bg-sky-800 hover:text-white " ><a href="#"> Proyectos</a></li> 
                            <li class=" px-2 py-1.5 hover:bg-sky-800 hover:text-white " ><a href="#"> Publicaciones</a></li> 
                      </ul>

                      </li>  

                      <li class=" flex lg:gap-3 hover:cursor-pointer  justify-between font-medium  items-center  text-2xl ">
                        <a href="#"> Noticias </a>
                      <i class=" text-3xl bx  bx-news"></i> 
                    </li>  

                    <li class=" flex lg:gap-3 hover:cursor-pointer  justify-between  font-medium items-center  text-2xl ">
                      <a href="#"> Noticias </a>
                      <i class=" text-3xl bx  bx-contact-book"></i> 
                      </li>  
                    </ul>`;

                
                  
        return wrapper;
}