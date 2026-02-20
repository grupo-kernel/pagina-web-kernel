
import { navSliderBtns } from "../../Controllers/navSliderBtns/navSliderBtns.js";
import { SliderController } from "../../Controllers/Slider/Slider.controller.js";

// Imagenes
import unappec from "../../assets/apec.png";


export function CreateSliderComponentHome() {
    const slider = `
    <div class="absolute bottom-0 col-span-4
            left-0 bg-footer-primary z-10 translate-y-1/2
            w-89.5 h-47.5 md:h-64 
            rounded-2xl md:w-184 
            lg:static xl:174 
            lg:w-130 lg:translate-y-0  
            lg:h-130  lg:rounded-none lg:rounded-tr-2xl lg:rounded-br-2xl
            2xl:w-150 2xl:h-187.5">

                    <div id="containerFather"  class="justify-center flex p-2.5 flex-col items-center">
                         <div class="hidden md:flex items-center justify-between p-4 gap-5 z-10 " >
                                <i  id="arrowL" class=" text-4xl absolute left-4 top-1/2 lg:top-1/3   lg:text-5xl -translate-y-1/2 cursor-pointer text-white   bg-footer-primary rounded-full  bxr  bx-arrow-left"></i> 
                                <i  id="arrowR" class=" text-4xl absolute right-4 top-1/2 lg:top-1/3  lg:text-5xl    -translate-y-1/2 cursor-pointer text-white bg-footer-primary rounded-full    bxr  bx-arrow-right"></i> 
                         </div>
                            <div id="contenedorSlide" class="p-3 md:p-0 " >
                            <div id="1" class="relative flex flex-col justify-center items-center w-full h-full">
                                <img id="img1" src="${unappec}" alt="UNAPEC"
                                title="UNAPEC" 
                                class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
                                <span class="md:border md:border-footer-contacto md:px-2.5 md:w-32 text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2  " >UNAPEC</span>                            </div>

                    </div>
 
                    </div>

                    <div id="btnsGroup" class=" flex justify-center mt-4 md:mt-8.5  items-center gap-10.75  " >
                        <span data-route="equipment" class=" hover:-translate-y-2.5 cursor-pointer  transition transform bg-widgets-bg rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-group" ></i> 
                        </span>
                       <span data-route="publicaciones" class=" hover:-translate-y-2.5  cursor-pointer transition transform bg-widgets-bg rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-article" ></i> 
                        </span>
                        <span  data-route="noticias"class=" hover:-translate-y-2.5  cursor-pointer transition transform bg-widgets-bg rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-megaphone" ></i> 
                        </span>

                </div>

            </div>`;

    const element = document.createElement('div');
    element.innerHTML = slider;
    const slideNode = element.firstElementChild;
    SliderController(slideNode.querySelector('#containerFather'));
    navSliderBtns(slideNode.querySelector('#btnsGroup'));


    return slideNode;
}