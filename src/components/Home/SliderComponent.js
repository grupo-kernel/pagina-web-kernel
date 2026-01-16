export function CreateSliderComponentHome(){

    const slider = `<div class="absolute bottom-0 col-span-4
             left-0 bg-footer-primary z-10 translate-y-1/2  w-89.5 h-47.5 md:h-56 
               rounded-2xl md:w-184 lg:static lg:w-174 lg:translate-y-0  lg:h-130  lg:rounded-none lg:rounded-tr-2xl lg:rounded-br-2xl" >

                    <div class="justify-center flex flex-col items-center " >
                         <div class="flex items-center justify-between p-4 gap-5 " >
                                <i class=" text-4xl absolute left-4 top-1/2 lg:top-1/3   lg:text-6xl -translate-y-1/2 cursor-pointer text-white   bxr  bx-arrow-left"></i> 
                                <i class=" text-4xl absolute right-4 top-1/2 lg:top-1/3  lg:text-6xl   -translate-y-1/2 cursor-pointer text-white   bxr  bx-arrow-right"></i> 
                         </div>
                        <div class=" mb-1.5 lg:mb-0 " >
                            <div id="1" class="relative flex flex-col justify-center items-center w-full h-full">
                                <img id="img1" src="./assets/ITLA.jpg" alt="Itla"
                                title="Instituto Tecnológico de Las Américas ITLA" 
                                class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">

                                <span class="md:border md:border-footer-contacto md:px-2.5 md:w-32 text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2  " >ITLA</span>
                            </div>

                    </div>
 
                    </div>
                    <div class=" flex justify-center mt-8.5 items-center gap-10.75  " >
                        <span class=" hover:-translate-y-2.5 cursor-pointer  transition transform bg-widgets-bg rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-group" ></i> 
                        </span>
                       <span class=" hover:-translate-y-2.5  cursor-pointer transition transform bg-widgets-bg rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-article" ></i> 
                        </span>
                        <span class=" hover:-translate-y-2.5  cursor-pointer transition transform bg-widgets-bg rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-megaphone" ></i> 
                        </span>

                </div>

            </div>`;

    return slider;
}