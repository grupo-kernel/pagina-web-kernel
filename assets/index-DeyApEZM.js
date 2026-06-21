(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const B=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function V(){return`<div class="flex items-center px-2.5   w-full  ">
        <img  class="object-fill " width="80px" heigth="80px" src="${B}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function Q(){return`<div class="lg:hidden  border-b-zinc-500 border-b  pb-2.5  w-full  flex px-2.5  justify-between items-center  mb-7">
              <span class="text-4xl font-medium ">El Kernel</span>
                    <i data-action="close-navBar"  class=" text-6xl cursor-pointer bx  bx-x"></i>
                </div>

                <ul class="flex w-full text-black flex-col lg:flex-row p-4 gap-4 xl:gap-9">
                
                
                   <li data-route="home" class="flex gap-1 text-nowrap hover:cursor-pointer  justify-between font-medium  2xl:text-3xl  items-center  text-lg xl:text-2xl" >
                        <span>Portada</span>
                        <i class="bx bx-home text-3xl" ></i>
                    </li>

                  <li data-action="open-subMenu" class="gap-1 text-nowrap lg:relative  2xl:text-3xl  hover:cursor-pointer 
                       font-medium  items-center text-lg xl:text-2xl " >
                       <div class="flex justify-between" >
                         <span > Nosotros </span>
                        <i class=" text-3xl bx bx-caret-down"></i> 
                    </div> 

                      <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full   lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56  lg:bg-white lg:shadow-2xl " >
                            <li data-route="quienesSomos" class="px-2 py-1.5 2xl:text-3xl  hover:bg-sky-800 hover:text-white " ><span  >Quienes Somos</span></li>
                            <li data-route="equipment" class=" px-2 py-1.5 2xl:text-3xl  hover:bg-sky-800 hover:text-white  " ><span >Equipo</span></li>
                        </ul>
                        
                      </li>  

                      <li data-action="open-subMenu" class="lg:relative gap-1 2xl:text-3xl  text-nowrap hover:cursor-pointer   font-medium  items-center  text-lg xl:text-2xl ">
                        <div class="flex  justify-between">
                            <span> Nuestro Trabajo </span>
                            <i class=" text-3xl bx  bx-caret-down"></i> 
                        </div>   

                      <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full   lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56   lg:bg-white lg:shadow-2xl ">
                            <li  data-route="lineas" class="  2xl:text-3xl  px-2 py-1.5 hover:bg-sky-800 hover:text-white " ><span> Líneas</span></li>
                            <li data-route="proyectos" class=" 2xl:text-3xl   px-2 py-1.5 hover:bg-sky-800 hover:text-white " ><span> Proyectos</span></li> 
                            <li data-route="publicaciones"  class=" 2xl:text-3xl  px-2 py-1.5 hover:bg-sky-800 hover:text-white " ><span> Publicaciones</span></li> 
                      </ul>

                      </li>  

                      <li data-route="noticias" class=" flex gap-1  2xl:text-3xl  text-nowrap hover:cursor-pointer  justify-between font-medium  items-center  text-lg xl:text-2xl  ">
                        <span> Noticias </span>
                        <i class="text-3xl bx  bx-news"></i> 
                    </li>  

                       <li data-route="contacto" class="flex gap-1 text-nowrap hover:cursor-pointer  2xl:text-3xl  justify-between font-medium  items-center  text-lg xl:text-2xl" >
                        <span>Contacto</span>
                        <i class="bx bx-envelope text-3xl" ></i>
                    </li>
                       

                    </ul>`}function Y(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${B}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
                    </div>
                <div class="flex flex-col">
                     <h5 class=" text-xs lg:text-xl  md:text-sm  font-bold ">Grupo de Investigación</h5>   
                     <p class=" text-xs lg:text-lg  font-light mt-1.5 ">Explorando EDPs no lineales, Métodos iterativos y más.</p>
                </div>

        </div>
        <div class=" mt-6 md:mt-0 flex flex-col text-white " >
                <h5 class=" text-footer-contacto text-xs md:text-sm  lg:text-xl font-bold mb-2 ">Contacto</h5>
                <ul class=" md:text-sm  text-xs lg:text-lg lg:leading-9 ">
                        <li><a class=" underline " target="_blank" href="mailto:mleonardos@unapec.edu.do">mleonardos@unapec.edu.do</a></li>
                        <li>República Dominicana</li>
                        <li><a class=" underline text-footer-contacto " target="_blank" href="https://www.grupoelkernel.com" _blank >grupoelkernel.com</a></li>
                </ul>
        </div>
        <div class=" mt-6 md:mt-0 " >
                    <ul class="flex items-center justify-between md:gap-5 lg:gap-8  gap-3 " >
                        <li><a class=" text-footer-contacto font-medium text-xs   md:text-sm lg:text-lg hover:underline "  title ="ISFOOSU" href="https://www.isfodosu.edu.do"    target="_blank" >ISFOOSU</a></li>
                        <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm lg:text-lg hover:underline "  title ="UASD" href="https://uasd.edu.do"    target=" _blan"k >UASD</a></li>
                         <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm  lg:text-lg hover:underline "  title ="APEC" href="https://unapec.edu.do"      target="_blank" >APEC</a></li>
                    </ul>
        </div> 
        </div>
        <div class="max-w-7xl mx-auto px-3 text-white text-xs md:text-sm lg:text-lg md:mt-8 mt-2.5">
                <h5>© 2025 Grupo de Investigación El Kernel — Todos los derechos reservados</h5>
        </div>
        `}function L(e){e.querySelectorAll('[data-action ="open-subMenu"]').forEach(a=>{const i=a.querySelector("ul"),o=a.querySelector("i");let n=!i.classList.contains("hidden");a.addEventListener("click",r=>{r.preventDefault(),n?(o.classList.replace("bx-caret-up","bx-caret-down"),i.classList.replace("flex","hidden"),n=!1):(o.classList.replace("bx-caret-down","bx-caret-up"),i.classList.replace("hidden","flex"),n=!0)})})}function K(e,t){e.addEventListener("click",()=>{t.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function W(e){e.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{e.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}function Z(){return`<div class =" flex justify-center 
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

                    <span  class="transform cursor-pointer  2xl:w-16 2xl:h-16 2xl:p-3.5  w-6.5 h-6.5 lg:w-8 lg:h-8 rounded-full p-1  bg-black items-center justify-center lg:p-2 "  >

                       <a href="https://www.linkedin.com" target="_blank" class="social-link">
                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-linkedin 2xl:w-16 2xl:h-16" viewBox="0 0 32 32">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            </a>
                    </span>

                    <span  class="transform  cursor-pointer  2xl:w-16 2xl:h-16 2xl:p-3.5 w-6.5 h-6.5  lg:w-8 lg:h-8  rounded-full p-1  bg-black items-center justify-center  lg:p-2 "  >

                     <a href="https://github.com/grupo-kernel" target="_blank" class="social-link">
                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-github 2xl:w-16 2xl:h-16"" viewBox="0 0 32 32">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg> 
                        </a>
                    </span>

                    <span  class="transform  cursor-pointer w-6.5 h-6.5   2xl:w-16 2xl:h-16 2xl:p-3.5  lg:w-8 lg:h-8   rounded-full p-1 bg-black items-center justify-center lg:p-2  "  >
                      
                    <a href="https://wa.me/?text=Hola,%20mira%20este%20enlace:%20https://https://www.grupoelkernel.com" target="_blank" class="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-share 2xl:w-16 2xl:h-16"" viewBox="0 0 32 32">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                                </svg>
                                      </a>  
                    </span>

                    <span  class="transform  cursor-pointer w-6.5 h-6.5  2xl:w-16 2xl:h-16 2xl:p-3.5   lg:w-8 lg:h-8   rounded-full p-1 bg-black items-center justify-center lg:p-2  "  >
                        <a href="mailto:mleonardos@unapec.edu.do" class="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-envelope  2xl:w-16 2xl:h-16" viewBox="0 0 32 32">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            </a>
                    </span>
                            
                </div>

            </div> 
            <!-- Fin tarjeta principal  -->  `}function U(e,t){e.addEventListener("click",a=>{const i=a.target.closest(["[data-route]"]);i&&(a.preventDefault(),t(i.dataset.route))})}function X(e){U(e,D)}const T=""+new URL("apec-ConmXkrT.png",import.meta.url).href,_=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,ee=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,I=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${T}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${_}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${ee}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function te(e){const t=e.querySelector("#arrowR"),a=e.querySelector("#arrowL"),i=e.querySelector("#contenedorSlide");if(!t||!a||!i)return;const o=I.length,n=1500;let r=0,c=null;function m(b){return(b%o+o)%o}function l(){i.innerHTML=I[r].content}function s(b){r=m(r+b),l()}function g(){p(),c=setInterval(()=>s(1),n)}function p(){c&&(clearInterval(c),c=null)}function x(){g()}l(),g(),t.addEventListener("click",()=>{s(1),x()}),a.addEventListener("click",()=>{s(-1),x()})}function ae(){const e=`
    <div class="absolute bottom-0 col-span-4
            left-0 bg-slider-primary z-10 translate-y-1/2
            w-89.5 h-47.5 md:h-64 
            rounded-2xl md:w-184 
            lg:static 
            lg:w-130 lg:translate-y-0  
            lg:h-130  lg:rounded-none lg:rounded-tr-2xl lg:rounded-br-2xl
            2xl:w-500 2xl:h-187.5 
            min-[2000px]:w-125 min-[2000px]:h-150 3xl:w-160 3xl:h-140
            ">

                    <div id="containerFather"  class="justify-center  flex p-2.5 2xl:p-20 flex-col items-center">
                         <div class="hidden md:flex items-center justify-between p-4 gap-5 z-10 " >
                                <i  id="arrowL" class=" text-4xl absolute left-4 top-1/2 lg:top-1/3   lg:text-5xl -translate-y-1/2 cursor-pointer text-white   bg-black rounded-full  bxr  bx-arrow-left"></i> 
                                <i  id="arrowR" class=" text-4xl absolute right-4 top-1/2 lg:top-1/3  lg:text-5xl    -translate-y-1/2 cursor-pointer text-white bg-black rounded-full    bxr  bx-arrow-right"></i> 
                         </div>
                            <div id="contenedorSlide" class="p-3 md:p-0 " >
                            <div id="1" class="relative flex flex-col justify-center items-center w-full h-full">
                                <img id="img1" src="${T}" alt="UNAPEC"
                                title="UNAPEC" 
                                class="w-70.5 h-32.5 2xl:mt-9 md:w-142.5 md:h-38.5 rounded-3xl object-cover lg:w-137.75 lg:h-64.5  ">
                                <span class="md:border md:border-black md:px-2.5 md:w-32 text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2  " >UNAPEC</span>                            </div>

                    </div>
 
                    </div>

                    <div id="btnsGroup" class=" flex justify-center mt-4 md:mt-8.5  items-center gap-10.75  " >
                        <span data-route="equipment" class=" hover:-translate-y-2.5 cursor-pointer  transition transform bg-black rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-group" ></i> 
                        </span>
                       <span data-route="publicaciones" class=" hover:-translate-y-2.5  cursor-pointer transition transform bg-black rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-article" ></i> 
                        </span>
                        <span  data-route="noticias"class=" hover:-translate-y-2.5  cursor-pointer transition transform bg-black rounded-full flex justify-center items-center w-15 h-15 p-2  " >
                            <i class=" text-4xl text-white bxr  bx-megaphone" ></i> 
                        </span>

                </div>

            </div>`,t=document.createElement("div");t.innerHTML=e;const a=t.firstElementChild;return te(a.querySelector("#containerFather")),X(a.querySelector("#btnsGroup")),a}function ie(){const e=document.createElement("section");e.classList.add("relative","w-full","flex","flex-col","m-auto","tabletBig:flex-row","md:mb-50","tabletBig:w-7xl","tabletBig:px-20","xl:mb-0","xl:pb-0","xl:w-full","xl:px-0","2xl:w-450","2xl:h-187.5"),e.innerHTML=`${Z()}`;const t=document.createElement("div");return t.appendChild(ae()),e.appendChild(t.firstElementChild),e}function oe(){return ie()}const ne=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function se(){return`
    <section role="banner" class="relative w-full min-h-screen overflow-hidden">
     
    <!-- Imagen del banner -->
      <img src="${ne}" alt="QuienesSomos" class="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
      
    <!-- Overlay -->
      <div class="absolute inset-0 bg-[#1A2B48]/55"></div>

    <!-- Titulo -->
      <div class="absolute inset-0 flex items-center justify-center px-6 sm:px-12 lg:px-24 text-center">
        
      <div>

    <!-- Texto -->
      <h1 class="font-sans font-bold italic text-white text-5xl md:text-6xl lg:text-8xl inline-block ">
      ¿Quiénes Somos?        
      </h1>

    <!-- Barra decorativa -->
      <div class="h-3 w-1/2 mx-auto mt-4 rounded-full bg-[#E68143] shadow-lg" ></div>
    
        </div>
    </div>
    </section>

  `}function re(e=["El Grupo de Investigación El Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en métodos numéricos, ecuaciones en derivadas parciales no lineales, optimización, álgebra y educación matemática.","Nuestro grupo está formado por docentes e investigadores adscritos a prestigiosas instituciones de educación superior de la República Dominicana, con una fuerte vocación hacia el desarrollo científico, tecnológico y pedagógico del país y de la región."]){return`

    <section class="w-full px-6 sm:px-12 lg:px-14 py-12 overflow-x-hidden">
    
        <div data-description-text
        class="text-black text-base md:text-xl lg:text-2xl leading-relaxed font-sans 
        space-y-6 line-clamp-4 sm:line-clamp-none">

            ${e.map(a=>`<p>${a}</p>`).join("")}
        </div>
    
      <!-- BUTTON READ MORE -->
      <button data-description-btn
        class="mt-4 text-[#E68143] font-semibold sm:hidden">
        Leer más
      </button>

    </section>
  `}const le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",pe=[{icon:le,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:ce,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:de,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:me,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function xe(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${pe.map(a=>ge(a)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function ge({icon:e,title:t,content:a}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${e}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${t}</h3>
        </div>

        <img src="${ue}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${a}
        </div>
      </div>
    </div>
  `}function fe(){const e=document.createElement("section");return e.classList.add("w-full","lg:w-320"),e.innerHTML=`
    ${se()}
    ${re()}
    ${xe()}
  `,e}function be(e){e.querySelectorAll("[data-accordion-header]").forEach(a=>{a.addEventListener("click",()=>{const i=a.nextElementSibling,o=a.querySelector("[data-accordion-icon]"),n=i.classList.contains("max-h-[1000px]");e.querySelectorAll("[data-accordion-content]").forEach(r=>{r.classList.remove("max-h-[1000px]"),r.classList.add("max-h-0")}),e.querySelectorAll("[data-accordion-icon]").forEach(r=>{r.classList.remove("rotate-180")}),n||(i.classList.remove("max-h-0"),i.classList.add("max-h-[1000px]"),o.classList.add("rotate-180"))})})}function he(e){const t=e.querySelector("[data-description-text]"),a=e.querySelector("[data-description-btn]");if(!t||!a)return;let i=!1;a.addEventListener("click",()=>{i=!i,t.classList.toggle("line-clamp-4",!i),a.textContent=i?"Leer menos":"Leer más"})}function ve(){const e=fe();return be(e),he(e),e}function we(e){const t=document.createElement("div");t.className="flex bg-white border rounded-xl shadow-2xl border-black w-89.5 h-139 flex-col items-center text-center justify-between p-4 gap-4 transition-all hover:scale-[1.02]";const a=e.redes.map(i=>`
        <a href="${i.url}" 
           target="_blank" 
           class="text-3xl text-sky-600 hover:text-sky-800 transition-colors"
           title="${i.name}">
            <i class='${i.icon}'></i>
        </a>
    `).join("");return t.innerHTML=`
        <div class="flex items-center justify-center flex-col gap-1.5">
            <img src="${e.img}" class="w-34 border-3 border-sky-600 rounded-full object-cover h-34">
            <h2 class="text-lg font-bold">${e.title}</h2>
            <p class="font-mono text-xs text-gray-500">${e.subtitle}</p>
        </div>
           <div class="flex justify-center gap-4 my-2">
                ${a}
            </div>
        <div class="flex flex-col gap-2 text-sm">
            <p class="text-[13px]"><b>Áreas:</b> ${e.areas}</p>
            <p class="text-[13px]"><b>Afiliaciones:</b> ${e.afilaciones}</p>
            

            <p class="text-gray-700 text-[12px] leading-tight line-clamp-4">
                ${e.description}
            </p>
        </div>
    `,t}const M=""+new URL("sep-BCMURSaM.png",import.meta.url).href,E=""+new URL("nat-CaDYa76I.png",import.meta.url).href,N=""+new URL("rad-B3ff1btG.png",import.meta.url).href,S=""+new URL("ant-D2J2W27b.png",import.meta.url).href,z=""+new URL("mar-Cru0HERG.png",import.meta.url).href,y=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,A=""+new URL("jos-BToFZdIf.png",import.meta.url).href,C=[{img:M,title:"Miguel A. Miguel A. Leonardo Sepúlveda, Ph.D",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente.",afilaciones:" ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{mame:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&amp;hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con enfoque en métodos numéricos avanzados. Asesor de tesis de posgrado y pregrado. Diseñador y rediseñador de programas curriculares universitarios. Investigador en métodos libres de Jacobiano, análisis numérico y formación de docentes."},{img:E,title:"Natanael Ureña Castillo, M.Sc",subtitle:"Optimización, entrenamiento de redes neuronales, formación docente",areas:"Métodos iterativos, optimización, redes neuronales, ciencias actuariales, matemática computacional, formación docente.",afilaciones:" ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{mame:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Especialista en métodos iterativos, optimización y redes neuronales aplicadas a problemas complejos y riesgos. Docente universitario y asesor en proyectos de investigación matemática."},{img:N,title:"Randy Leonardo, M.Sc",subtitle:"Álgebra Lineal, Matrices combinadas, Educación Matemática",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa..",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{mame:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador en álgebra y docencia, co-investigador de proyectos de matrices combinadas. Ponente en congresos nacionales."},{img:S,title:"Antmel Rodríguez Cabral, Ph.D",subtitle:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales",rec:"Recientemente defendió su tesis doctoral (Doctor en Matemática).",areas:" EDPs, sistemas no lineales, planos/dinámicas compleja y real, análisis complejo, educación matemática.",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{mame:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Profesor universitario e investigador en métodos numéricos, EDPs y planos dinámicos; ponente en congresos internacionales."},{img:z,title:"Marino Brito Guillén, M.Sc",subtitle:"Gestión universitaria, Matemática Educativa, Educación",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente.",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Ex-vicerrector académico, profesor universitario y consultor educativo. Experto en desarrollo curricular y formación docente."},{img:y,title:"Marc-Kelly Jean Philippe Jean, Ph.D",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",areas:"Álgebra, matemática pura, educación matemática, recursos educativos.",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{mame:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-researchgate"},{name:"google",url:"https://scholar.google.com/citations?hl=es&amp;user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Profesor adjunto, asesor y conferencista en álgebra, con experiencia en investigación y divulgación científica internacional."},{img:A,title:"José Alberto Reyes Reyes, M.Sc",subtitle:"Métodos Iterativos, Educación Matemática",areas:"Matemática pura, métodos iterativos, análisis de estabilidad, innovación educativa.",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{mame:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Docente universitario y de postgrado. Investigador en métodos numéricos y asesor de tesis en análisis de estabilidad y convergencia."}];function ye(){let e=0,t;const a=document.createElement("div");a.className="relative flex flex-col gap-7 w-full items-center";const i=()=>window.innerWidth>=1024?3:window.innerWidth>=768?2:1,o=()=>{const l=i();e+l>=C.length?e=0:e++,m()},n=()=>{const l=i();e<=0?e=C.length-l:e--,m()},r=()=>{c(),t=setInterval(o,3500)},c=()=>{t&&clearInterval(t)},m=()=>{const l=i();a.innerHTML=`
            <div id="cards-wrapper" class="flex items-center justify-center gap-8 w-full lg:w-full md:w-2xl min-h-150">
            </div>
            <div class="absolute w-full flex items-center justify-between inset-y-0 -px-4 pointer-events-none"> 
                <button id="prev-btn" class="pointer-events-auto bg-white/80 rounded-full shadow-lg hover:bg-sky-100 transition p-2">
                    <i class="bx bx-caret-left text-5xl lg:text-7xl"></i>
                </button>
                <button id="next-btn" class="pointer-events-auto bg-white/80 rounded-full shadow-lg hover:bg-sky-100 transition p-2">
                    <i class="bx bx-caret-right text-5xl lg:text-7xl"></i>
                </button>
            </div>
            <div class="bg-sky-800 rounded-xl w-full max-w-300 p-4 text-center text-white"> 
                <h1>Conoce más sobre el trabajo de nuestros investigadores</h1>
                <p class="cursor-pointer font-bold underline">Leer más</p>
            </div>
        `;const s=a.querySelector("#cards-wrapper");C.slice(e,e+l).forEach(p=>{s.appendChild(we(p))}),a.querySelector("#prev-btn").onclick=()=>{n(),r()},a.querySelector("#next-btn").onclick=()=>{o(),r()}};return document.addEventListener("visibilitychange",()=>{document.hidden?c():r()}),window.addEventListener("resize",()=>{e=0,m()}),m(),r(),a}function Ae(e){e.addEventListener("click",t=>{const a=t.target.closest("[data-route]");if(!a)return;const i=window.location.hash.replace("#/","")||"equipment";a.dataset.route!==i&&D(a.dataset.route)})}function $(){const e=window.location.hash.replace("#/","")||"equipment",t=document.createElement("div"),a="bg-sky-800 text-white border-b-sky-800",i="bg-transparent text-black hover:bg-gray-50";return t.innerHTML=`
    <nav class="bg-white overflow-hidden w-90 md:mb-5 min-h-11 border border-black rounded-t-xl md:w-119.25 lg:w-148">
        <ul class="flex items-stretch justify-center text-center h-full">
            <li data-route="equipment" 
                class="flex-1 flex items-center justify-center lg:text-xl p-2 cursor-pointer font-bold text-lg transition-colors
                ${e==="equipment"?a:i}">
                Equipo
            </li>
            <li data-route="FormacionAcademica" 
                class="flex-1 flex items-center justify-center lg:text-xl p-2 cursor-pointer font-bold text-lg transition-colors
                ${e==="FormacionAcademica"?a:i}">
                Formación  Academica
            </li>
        </ul>
    </nav>`,Ae(t.firstElementChild),t.firstElementChild}function Ce(){const e=document.createElement("section");e.classList.add("flex","flex-col","gap-5","m-auto","p-4","max-w-7xl","tabletBig:w-7xl","xl:w-full"),e.appendChild($());const t=ye();return e.appendChild(t),e}function Me(){return Ce()}function Ee(e="default"){const t=document.getElementById("main");t.classList.remove("p-2","mt-8","md:mt-12"),e=="full"?(t.classList.add("mt-0","pt-0"),t.classList.remove("max-w-7xl")):e=="left"?(t.classList.add("p-2","mt-8","md:mt-12"),t.classList.remove("m-auto")):(t.classList.add("p-2","mt-8","md:mt-12"),t.classList.add("m-auto"))}function Se(e,t=!1){return`
        <div data-id="${e.id}" 
             class="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all 
             ${t?"bg-sky-500 text-white shadow-lg scale-105":"bg-white hover:bg-sky-100 border border-gray-200"}">
            <img src="${e.img}" class="w-16 h-16 rounded-full border-2 border-white object-cover">
            <h3 class="font-bold text-sm md:text-base leading-tight">${e.name}</h3>
        </div>
    `}function ke(e){const t=e.formacion.map(i=>`
        <div class="mb-4">
            <p class="font-bold text-sky-400 text-sm md:text-base">${i.name}</p>
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed">${i.descripcion}</p>
        </div>
    `).join(""),a=e.experiencia?e.experiencia.map(i=>`
        <li class="text-xs md:text-sm text-gray-300 mb-3 list-disc ml-4">${i.contenido}</li>
    `).join(""):'<p class="text-xs text-gray-400">No disponible</p>';return`
        <div class="flex flex-col h-full text-white">
            <div class="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <h2 class="text-xl font-bold text-white pr-8">${e.name}</h2>
                <button id="close-modal" class="md:hidden text-white hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                <section class="mb-8">
                    <h3 class="text-sky-500 uppercase text-xs font-black tracking-widest mb-4">Formación Académica</h3>
                    ${t}
                </section>
                
                <section>
                    <h3 class="text-sky-500 uppercase text-xs font-black tracking-widest mb-4">Experiencia Relevante</h3>
                    <ul class="space-y-1">
                        ${a}
                    </ul>
                </section>
            </div>
        </div>
    `}const j=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:M,formacion:[{name:"Doctorado en Matemática",descripcion:" INTEC (2019-2024). Estancias doctorales en Universitat Politècnica de València (España). Defendido con éxito en 2024."},{name:"Maestría en Matemática ",descripcion:" Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores (Ciencias Físico-Químicas y Matemáticas)."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física, ISFODOSU."},{id:2,contenido:"Docente de Matemática, ITLA e ISFODOSU (2016-presente)."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales, Variable Compleja (INTEC, 2017-2024)."},{id:4,contenido:"Docente de secundaria y preuniversitaria (2007–2016), coordinador y asesor de diplomados y planes educativos."}]},{id:2,name:"Natanael Ureña Castillo",img:E,formacion:[{name:"Doctorado en Matemática",descripcion:" INTEC (en curso, 2019-actualidad)."},{name:"Maestría en Matemática Pura ",descripcion:"  UASD (2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"INTEC."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"UASD (2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"UASD (2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales (INTEC, UASD)."},{id:2,contenido:"Director de secundaria y asesor en competencias académicas y economía."},{id:3,contenido:"Ponente en congresos nacionales e internacionales."}]},{id:3,name:"Antmel Rodríguez Cabral",img:S,formacion:[{name:"Doctorado en Matemática Pura ",descripcion:" INTEC (defendido con éxito, 2025, con máxima calificación)."},{name:"Maestría en Matemática Pura ",descripcion:"  UASD (2015-2017)."},{name:"Ingeniería Civil",descripcion:"INTEC."},{name:"Investigador Adscrito",descripcion:" Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas (UASD, UFHEC, UAPA, UTESA, UTESUR)."},{id:2,contenido:"Ponente y colaborador en congresos (RELME, MESCyT, UASD, entre otros)."},{id:3,contenido:"Capacitación en inglés avanzado, AutoCAD, ajedrez y plataformas tecnológicas."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:N,formacion:[{name:"Maestría en Matemática",descripcion:" INTEC (2011)."},{name:"Licenciatura en Matemática ",descripcion:"  UASD (2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM ",descripcion:"ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU (2009–presente)."},{id:2,contenido:"Co-investigador en Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:z,formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:" Universidades Alcalá de Henares, La Rioja, Castilla La Mancha y Rey Juan Carlos"},{name:"Maestría en Matemática ",descripcion:"  Pontificia Universidad Católica Madre y Maestra (1996)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)"}],cursos:[{name:"Máster Internacional en Gestión Universitaria ",descripcion:" Universidades Alcalá de Henares, La Rioja, Castilla La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática ",descripcion:"  PUCMM (1996)."},{name:"Postgrado en Matemática ",descripcion:" PUCMM (1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas ",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:" Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:" Pontificia Universidad Javeriana, Colombia (2009)."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D",img:y,formacion:[{name:"Doctorado en Matemática",descripcion:" Programa interuniversitario UASD-INTEC-PUCMM (defendido con éxito, 2025, con máxima calificación)."},{name:"Maestría en Matemática ",descripcion:"  UASD (2023)."},{name:"Maestría en Matemática ",descripcion:" UTESA (2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"UASD (2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD (2012–actualidad)."},{id:2,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:3,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:4,contenido:"Ponente en congresos nacionales e internacionales (MESCYT, UASD, APEC, REDOME)."}]},{id:7,name:"José Alberto Reyes Reyes, M.Sc",img:A,formacion:[{name:"Doctorado en Matemática",descripcion:" INTEC (en proceso, tesis en curso)."},{name:"Maestría en Matemática Pura ",descripcion:"   UASD (2014-2016)."},{name:"Magíster en Matemáticas ",descripcion:"  UTESA (2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"UDIMA, España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:" UASD (2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real ",descripcion:"UCE (2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas, UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad y convergencia."},{id:3,contenido:"Consultor en innovación educativa y tecnologías para la educación matemática."}]}];function De(){let e=1,t=!1;const a=document.createElement("div");a.className="relative flex flex-col md:mb-10 lg:shadow-2xl lg:rounded-2xl  w-full max-w-6xl mx-auto p-4 min-h-[600px] tabletBig:w-7xl xl:w-full  ";const i=()=>{const o=j.find(c=>c.id===e);a.innerHTML="",a.appendChild($());const n=document.createElement("div");n.className="flex flex-col md:flex-row gap-6 w-full h-full",n.innerHTML=`
            <div id="profesores-list" class="flex flex-col gap-4 w-full md:w-1/3 overflow-y-auto pr-2 custom-scrollbar bg-white p-4 rounded-2xl border border-gray-200 lg:border-none shadow-sm lg:shadow-none">
                ${j.map(c=>Se(c,c.id===e)).join("")}
            </div>

            <div id="detalle-container" class="
                fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 
                md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                ${window.innerWidth<768&&!t?"hidden":"flex"} 
            ">
                <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative animate-fade-in">
                    ${ke(o)}
                </div>
            </div>
        `,a.appendChild(n),a.querySelectorAll("[data-id]").forEach(c=>{c.onclick=m=>{e=parseInt(c.dataset.id),window.innerWidth<768&&(t=!0),i()}});const r=a.querySelector("#close-modal");r&&(r.onclick=()=>{t=!1,i()})};return window.addEventListener("resize",i),i(),a}function Le(){return De()}const Ie=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,je=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,Oe=""+new URL("marckelly_tesis-CB89IDtl.jpg",import.meta.url).href,q=[{id:"nw1",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Ie,excerpt:"Se publicó el artículo sobre la estabilidad de familias con parámetros autoacelerados en métodos iterativos sin memoria usando dinámica discreta.",content:{paragraphs:["El artículo analiza dos subfamilias paramétricas (p₁ y p₂) de métodos iterativos sin memoria para sistemas no lineales, evaluando estabilidad vs. orden de convergencia. Usando herramientas de dinámica discreta (planos y diagramas de bifurcación) se muestran regiones con órbitas periódicas y zonas de caos."],list:["Miembros de orden 4 muestran mayor estabilidad práctica que el esquema de orden 5.","Pruebas en problemas académicos.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw2",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:je,excerpt:"Se lanzó la “Guía Didáctica de Lógica Matemática y Teoría de Conjuntos”, con ejercicios y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["Recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones para evaluación formativa."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes (planeación) y estudiantes (autonomía y refuerzo)."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw3",title:"Robust Family of High-Order Derivative-Free Methods (Axioms, Q2)",date:"15 de junio de 2025",image:A,excerpt:"Métodos de alto orden sin derivadas para resolver ecuaciones no lineales, con análisis de convergencia y pruebas numéricas comparativas.",content:{paragraphs:["Se propone una familia robusta de métodos sin derivadas y de alto orden para ecuaciones no lineales.","Incluye análisis teórico de convergencia y experimentación numérica comparativa."],list:[]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw4",title:"Groups with triangle-free graphs on p-regular classes",date:"10 de junio de 2025",image:y,excerpt:"Resultados en teoría de grupos finitos con propiedades combinatorias de clases p-regulares y sus grafos asociados.",content:{paragraphs:["El trabajo analiza grafos asociados a clases p-regulares en teoría de grupos finitos.","Se estudian condiciones bajo las cuales dichos grafos son libres de triángulos y sus implicaciones estructurales."],list:[]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"},{id:"nw5",title:"Defensa de Tesis doctoral de Marck-Kelly Jean Philippe",date:"Junio de 2025",image:Oe,excerpt:"Defensa exitosa de tesis doctoral en teoría de grupos, explorando estructuras asociadas a clases p-regulares y grafos libres de triángulos.",content:{paragraphs:["La tesis aborda aspectos combinatorios y estructurales en teoría de grupos, con énfasis en clases p-regulares y sus grafos asociados.","Se presentan nuevas cotas y caracterizaciones relacionadas con conectividad y ausencia de triángulos."],list:["Direcciones futuras: extensiones a otras familias de grafos y aplicaciones a problemas de factorización.","Próxima disponibilidad del manuscrito para consulta institucional."]},articleURL:null}];function Pe(){return`    
    <section role="news-hero" class="w-full py-16 md:py-20 px-6 sm:px-12 lg:px-24 text-center">

        <div class="max-w-3xl mx-auto space-y-6">

        <!-- Titulo -->
        <h1 class="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900">
          Noticias y Actividades del Grupo
        </h1>

        <!-- Subtitulo --> 
        <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
          ¡Descubre lo más reciente en publicaciones, logros académicos y actividades del Grupo Kernel! 
        </p>

      </div>
    </section>

    `}function Re({id:e,title:t,date:a,image:i,excerpt:o}){return`

    <article class="bg-white rounded-2xl overflow-hidden shadow-sm 
    hover:shadow-md transition duration-300 cursor-pointer 
    border border-gray-100 flex flex-col h-full">

      <div class="h-44 overflow-hidden rounded-t-2xl">
        <img src="${i}" alt="${t}" class="w-full h-full object-cover"/>
      </div>

      <div class="p-3 space-y-3 flex flex-col flex-1">
        <span class="text-sm 2xl:text-2xl text-gray-500">
          ${a}
        </span>

        <h3 class="text-lg 2xl:text-2xl font-bold text-gray-800">
          ${t}
        </h3>

        <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
          ${o}
        </p>

        <button data-news-btn="${e}"
          class="mt-auto self-start lg:text-base 2xl:text-xl font-medium text-blue-600 
          hover:text-blue-700 transition underline-offset-4 hover:underline">
          Más detalles
        </button>

      </div>
    </article>
    
    `}function Be(e=[]){return`
    <section role="news-grid" class="sm:px-10 lg:px-20 p-8">
       <div class="max-w-7xl mx-auto px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         ${e.map(i=>Re(i)).join("")}
        </div>
    </section>
    `}function Ue(){return`
    <section class="w-full py-10">
      <div class="max-w-7xl mx-auto px-8 text-center">

        <p class="text-gray-600 text-base sm:text-xl  lg:text-2xl md:text-lg">
          ¿Quieres que tu actividad aparezca aquí? Escríbenos a
          <a href="mailto:mleonardos@unapec.edu.do" 
          target="_blank" rel="noopener noreferrer"
             class="text-blue-600 hover:underline">
             mleonardos@unapec.edu.do
          </a>
        </p>

      </div>
    </section>
  `}function Te(){const e=document.createElement("section");return e.classList.add("w-full","tabletBig:w-7xl","xl:w-full"),e.innerHTML=`
    ${Pe()}
    ${Be(q)}
    ${Ue()}
    
    `,e}function Ne({title:e,content:t,articleURL:a}){const i=t.paragraphs.map(r=>`<p>${r}<p>`).join(""),o=t.list.length?` 
    <ul class="list-disc pl-6 space-y-2">
        ${t.list.map(r=>`<li>${r}</li>`).join("")}
    </ul> `:"";return`
  
      <div role="news-modal" id="newsModal" 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm 
        flex items-center justify-center z-50 p-4">

      <div class="bg-white w-full md:max-w-lg
        rounded-2xl md:rounded-xl shadow-2xl relative animate-modalIn
        max-h-[85vh] flex flex-col">
      
      <!-- Header  -->
        <div class="relative p-5 border-b border-gray-200">

          <h2 class="text-xl md:text-2xl font-bold text-gray-800 pr-10">
            ${e}
          </h2>
        
        <!-- Botón X -->
          <button data-close-modal
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full
          bg-white/80 hover:bg-gray-200 text-gray-600 text-lg font-bold transition">
            ✕
          </button>
        </div>

      <!-- Contenido -->
        <div class="p-6 overflow-y-auto flex-1 space-y-4 text-gray-600 leading-relaxed ">

            ${i} 
            ${o}

        </div>
      
        <!-- Footer -->
          <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

            ${a?` <a href="${a}" target="_blank"class="px-4 py-2 rounded-lg 
            bg-blue-600 text-white hover:bg-blue-700 transition"> 
            Leer artículo 
            </a>`:""}

          <button data-close-modal class="px-4 py-2 rounded-lg
            border border-gray-300 hover:bg-gray-400 transition">
            Cerrar
          </button>
          
      </div>
      </div>
      </div>

    `}function ze(e){e&&(e.addEventListener("click",$e),document.addEventListener("click",qe),document.addEventListener("keydown",Fe))}function $e(e){const t=e.target.closest("[data-news-btn]");if(!t)return;const a=t.dataset.newsBtn,i=q.find(o=>o.id===a);i&&Ge(i)}function qe(e){const t=e.target.closest("[data-close-modal]"),a=e.target.id==="newsModal";(t||a)&&k()}function Fe(e){e.key==="Escape"&&k()}function Ge(e){k(),document.body.insertAdjacentHTML("beforeend",Ne(e)),document.body.classList.add("overflow-hidden")}function k(){const e=document.getElementById("newsModal");e&&(e.remove(),document.body.classList.remove("overflow-hidden"))}function Je(){const e=Te();return ze(e),e}const h=[{id:1,img:M,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:S,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:E,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:y,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:A,name:"José Alberto Reyes Reyes, M.Sc",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function u(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function F(e){return e?.name||e?.title||"Investigador"}function O(e){return e?.title||e?.tile||"Revista no especificada"}function G(e){return String(e?.DOI||e?.doi||"").trim()}function He(e){const t=G(e);return e?.url?e.url:t?t.startsWith("http")?t:`https://doi.org/${t}`:"#"}function Ve(e){return[...e?.publicaciones||[]].sort((t,a)=>{const i=Number(t.year||0),o=Number(a.year||0);return i!==o?o-i:String(t.contenido||"").localeCompare(String(a.contenido||""))})}function Qe(e,t=!1){const a=F(e),i=e.publicaciones||[],o=i.length,n=i.map(c=>Number(c.year)).filter(Boolean),r=n.length?Math.max(...n):"";return`
        <button data-id="${e.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${t?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${e.img}"
                    alt="${u(a)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${t?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${t?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${u(a)}
                </h3>

                <p class="text-xs leading-snug ${t?"text-sky-50":"text-gray-500"}">
                    ${o} publicación${o===1?"":"es"}
                    ${r?` · Última: ${r}`:""}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${t?"text-white/80":"text-gray-400"}">
                                ${u(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Ye(e){if(!e)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const t=F(e),a=Ve(e),i=a.length,o=a.map(s=>Number(s.year)).filter(Boolean),n=o.length?Math.min(...o):"",r=o.length?Math.max(...o):"",c=[...new Set(a.map(s=>s.q).filter(Boolean))],m=[...new Set(a.map(s=>O(s)).filter(Boolean))],l=a.map(s=>{const g=O(s),p=G(s),x=He(s);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${u(s.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${u(g)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${u(s.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${u(s.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${u(s.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${p?`
                                <a href="${u(x)}"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="inline-flex items-center gap-2 text-sky-500 hover:text-sky-700 transition-colors text-sm md:text-base font-mono font-bold">

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         class="h-4 w-4 shrink-0"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>

                                    <span class="pub-doi-text">
                                        DOI: ${u(p)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${s.pdf?`
                                <a href="${u(s.pdf)}"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold transition-colors">
                                    PDF
                                </a>
                              `:""}
                </div>
            </article>
        `}).join("");return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img src="${e.img}"
                         alt="${u(t)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${u(t)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${u(e.area)}
                                    </p>
                                  `:""}
                    </div>
                </div>

                <button id="close-modal"
                    type="button"
                    class="md:hidden text-3xl leading-none text-white hover:text-sky-300 transition-colors">
                    &times;
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Publicaciones
                    </p>
                    <p class="text-2xl font-bold">
                        ${i}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-2xl font-bold">
                        ${n&&r?`${n}–${r}`:"—"}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Cuartiles
                    </p>
                    <p class="text-2xl font-bold">
                        ${c.length?c.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${m.slice(0,4).map(s=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${u(s)}
                    </span>
                `).join("")}

                ${m.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${m.length-4} revistas
                            </span>
                          `:""}
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                ${l||`
                            <div class="bg-white rounded-2xl p-6 text-gray-600 text-center">
                                No hay publicaciones registradas para este investigador.
                            </div>
                          `}
            </div>
        </div>
    `}function Ke(){let e=h[0]?.id||1,t=!1,a=null;const i=document.createElement("section");i.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function o(l){const s=String(l.DOI||l.doi||"").trim().toLowerCase();return s||`${l.year||""}-${l.title||l.tile||""}-${l.contenido||""}`.trim().toLowerCase()}function n(){const l=new Map;return h.forEach(s=>{(s.publicaciones||[]).forEach(g=>{const p=o(g);l.has(p)||l.set(p,g)})}),Array.from(l.values())}function r(){const l=n(),s=l.map(b=>Number(b.year)).filter(Boolean),g=s.length?Math.max(...s):"—",p=s.length?Math.min(...s):"—",x=l.filter(b=>b.q==="Q1").length;return{totalPublicaciones:l.length,investigadores:h.length,q1:x,primerYear:p,ultimoYear:g}}const c=()=>{const l=h.find(x=>x.id===e)||h[0],s=r(),g=window.innerWidth<768&&!t;i.innerHTML=`
            <div class="mb-8 text-center">
                <p class="text-sky-600 font-bold uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Producción científica
                </h1>

                <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                    Publicaciones recientes del grupo en métodos iterativos, análisis numérico,
                    optimización, teoría de grupos y matemática aplicada.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos únicos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.primerYear}–${s.ultimoYear}
                    </p>
                </div>
            </div>

            <div class="relative flex flex-col md:shadow-2xl md:rounded-3xl md:flex-row gap-6 w-full mx-auto p-4 md:p-6 min-h-[650px] md:min-h-[720px] bg-white/70 border border-white/70 backdrop-blur-sm">

                <aside id="profesores-list"
                    class="flex flex-col gap-4 w-full md:w-1/3 max-h-[430px] md:max-h-none overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-4 rounded-2xl border border-gray-200">

                    <div class="mb-2">
                        <h2 class="text-slate-800 font-black text-lg">
                            Investigadores
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione un investigador para ver su producción científica registrada.
                        </p>
                    </div>

                    ${h.map(x=>Qe(x,x.id===e)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${g?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Ye(l)}
                    </div>
                </div>
            </div>
        `,i.querySelectorAll("[data-id]").forEach(x=>{x.onclick=()=>{e=parseInt(x.dataset.id),window.innerWidth<768&&(t=!0),c()}});const p=i.querySelector("#close-modal");p&&(p.onclick=()=>{t=!1,c()})},m=()=>{clearTimeout(a),a=setTimeout(()=>{window.innerWidth>=768&&(t=!1),c()},120)};return window.addEventListener("resize",m),c(),i}function We(){return Ke()}const v=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function Ze(){let e=0;const t=v.length,a=document.createElement("section");a.className="w-full max-w-6xl mx-auto p-4 mt-10 mb-20 font-sans tabletBig:w-7xl tabletBig:px-20 xl:w-full xl:px-0 ";const i=()=>{const o=(e+1)%t,n=(e+2)%t,r=v[e],c=v[o],m=v[n];a.innerHTML=`
            <h2 class="text-2xl font-bold mb-8 text-gray-800 ml-2">Líneas de investigación</h2>
            
            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                
                <div class="relative h-full">
                    ${P(r,"bg-[#5580C1] text-white")}
                    
                    <button id="next-btn" class="absolute -bottom-6 cursor-pointer -right-3 z-30 bg-white text-gray-800 w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-transform active:scale-90 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div class="h-full hidden md:block">
                    ${P(c,"bg-[#96B4E1] text-[#1A2B49]")}
                </div>

                <div class="md:col-span-2 flex justify-center mt-4">
                    <div class="w-full md:w-3/4">
                        ${Xe(m)}
                    </div>
                </div>
            </div>
        `,a.querySelector("#next-btn").onclick=()=>{e=o,i()}};return i(),a}function P(e,t){return`
        <div class="${t} rounded-[20px] p-8 shadow-lg flex flex-col h-112.5 md:h-125 transition-all duration-500">
            <h3 class="font-bold text-2xl mb-6 leading-tight">
                ${e.title}
            </h3>
            <div class="overflow-y-auto pr-2 grow custom-scrollbar">
                <p class="text-sm md:text-base opacity-90 leading-relaxed mb-6">
                    ${e.desarrollo}
                </p>
            </div>

            
        </div>
    `}function Xe(e){return`
        <div class="bg-[#1E1E1E] text-white rounded-[20px]  p-8 shadow-2xl relative overflow-hidden min-h-30 flex items-center justify-center transition-all duration-500">
            <h3 class="font-bold text-lg md:text-xl text-center md:text-center w-full md:w-2/3 leading-tight">
                ${e.title}
            </h3>
            
            <div class="absolute -bottom-10 -right-10 w-20 h-20 bg-white rounded-full"></div>
        </div>
    `}function _e(){return Ze()}const f=[{id:1,title:"Plataforma de Simulación para Ecuaciones Diferenciales Parciales No Lineales",contenido:"Diseño e implementación de un software web para la simulación y visualización de soluciones aproximadas a EDPs no lineales utilizando métodos numéricos avanzados. El objetivo es crear una herramienta didáctica y de investigación abierta a estudiantes y científicos."},{id:2,title:"Entrenamiento de Redes Neuronales para la Solución de Problemas Matemáticos",contenido:"Proyecto orientado al desarrollo y entrenamiento de arquitecturas de redes neuronales profundas para el aprendizaje y la resolución automatizada de ecuaciones diferenciales y problemas complejos en optimización matemática."},{id:3,title:"Métodos Cuasi-Newton de Memoria Limitada Aplicados a Grandes Sistemas",contenido:"Investigación sobre el diseño y análisis de métodos cuasi-Newton híbridos de memoria limitada, dirigidos a la resolución eficiente de sistemas de ecuaciones de gran escala, con énfasis en aplicaciones de ingeniería y finanzas."},{id:4,title:"Modelización Matemática de Riesgo Actuarial y Financiero",contenido:"Elaboración de modelos para la evaluación y gestión del riesgo en problemas actuariales y financieros, combinando técnicas de optimización y simulación para ofrecer soluciones robustas a la toma de decisiones en estos campos."},{id:5,title:"Innovación en la Enseñanza y Evaluación de la Matemática",contenido:"Diseño de estrategias y recursos innovadores para la enseñanza de las matemáticas en distintos niveles educativos, incorporando metodologías activas, plataformas tecnológicas y evaluación por competencias."},{id:6,title:"Desarrollo de Métodos Metaheurísticos Híbridos",contenido:"Propuesta de integración de algoritmos metaheurísticos con métodos iterativos clásicos y cuasi-Newton para abordar problemas no lineales de alta complejidad en diferentes áreas de la ciencia y la ingeniería."}];function d(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function et(e){return f.find(t=>t.id===e)||f[0]}function tt(e=[]){return e.map(t=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${d(t)}
        </span>
    `).join("")}function R(e=[]){return e.map(t=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${d(t)}</span>
        </li>
    `).join("")}function at(e=[]){return e.map(t=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${d(t)}
        </span>
    `).join("")}function it(){const e=f.length,t=new Set(f.map(o=>o.institucion)).size,a=f.filter(o=>String(o.convocatoria).includes("FONDOCyT")||String(o.convocatoria).includes("FONDOCYT")).length,i=f.filter(o=>String(o.estado).toLowerCase().includes("pendiente")).length;return{total:e,instituciones:t,fondocyt:a,pendientes:i}}function ot(e,t=!1){return`
        <button 
            type="button"
            data-proyecto-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${t?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${d(e.convocatoria)}
                </span>

                <span class="inline-block ${t?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${d(e.tipo)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${d(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${t?"text-white/90":"text-slate-500"}">
                ${d(e.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${t?"text-white/90":"text-slate-500"}">
                    ${d(e.institucion)}
                </span>
                <span class="text-xs font-bold ${t?"text-white/90":"text-slate-500"}">
                    · ${d(e.duracion)}
                </span>
            </div>
        </button>
    `}function nt(e){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${d(e.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${d(e.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${d(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${d(e.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${d(e.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración</p>
                        <p class="text-slate-800 font-bold mt-1">${d(e.duracion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Periodo previsto</p>
                        <p class="text-slate-800 font-bold mt-1">${d(e.fechaInicio)} – ${d(e.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto del proyecto
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${d(e.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${d(e.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${R(e.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${R(e.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${at(e.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${tt(e.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function st(){let e=f[0]?.id||1;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=()=>{const i=et(e),o=it();t.innerHTML=`
            <div class="mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Proyectos de investigación
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Propuestas de investigación sometidas a FONDOCyT, actualmente pendientes de aprobación,
                    orientadas al desarrollo de métodos numéricos avanzados, modelización matemática,
                    optimización, inteligencia artificial y aplicaciones interdisciplinarias.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Proyectos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.total}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        FONDOCyT
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.fondocyt}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Instituciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.instituciones}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        En evaluación
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.pendientes}
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 items-start">
                <aside class="bg-slate-50 border border-slate-200 rounded-[24px] p-4 shadow-sm">
                    <div class="mb-4 px-1">
                        <h2 class="text-xl font-black text-slate-800">
                            Propuestas sometidas
                        </h2>
                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione un proyecto para ver sus detalles principales.
                        </p>
                    </div>

                    <div class="space-y-4">
                        ${f.map(n=>ot(n,n.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${nt(i)}
                </div>
            </div>
        `,t.querySelectorAll("[data-proyecto-id]").forEach(n=>{n.onclick=()=>{e=parseInt(n.dataset.proyectoId),a()}})};return a(),t}function rt(){return st()}function lt(){return`
    <div class="flex flex-col h-full justify-center space-y-10 md:pl-10 md:border-l md:border-gray-100">
      
      <div class="hidden md:block mb-8">
        <h3 class="text-2xl font-bold text-slate-800 tracking-tight">
          Información de contacto
        </h3>
        <div class="h-1.5 w-12 bg-blue-600 mt-2 rounded-full"></div>
      </div>

      <div class="space-y-8">
    
    <!-- CORREO -->        
        <div class="flex items-center gap-5 group">
          <div class="w-14 h-14 shrink-0 flex items-center justify-center bg-blue-50 text-blue-600
             rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <i class='bx bxs-envelope text-2xl'></i>
          </div>
          <div>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Correo</p>
            <a href="mailto:mleonardos@unapec.edu.do" target="_blank" rel="noopener noreferrer"
               class="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              mleonardos@unapec.edu.do
            </a>
          </div>
        </div>

    <!-- UBICACIÓN -->
        <div class="flex items-center gap-5 group">
          <div class="w-14 h-14 shrink-0 flex items-center justify-center bg-blue-50 text-blue-600 
            rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <i class='bx bxs-map text-2xl'></i>
          </div>
          <div>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Ubicación</p>
            <p class="text-lg font-semibold text-slate-700">
              República Dominicana
            </p>
          </div>
        </div>

    <!-- SITIO WEB -->
        <div class="flex items-center gap-5 group">
          <div class="w-14 h-14 shrink-0 flex items-center justify-center bg-blue-50 text-blue-600 
            rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <i class='bx bxs-globe text-2xl'></i>
          </div>
          <div>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Web</p>
            <a href="https://www.grupoelkernel.com" target="_blank" rel="noopener noreferrer"
               class="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              www.grupoelkernel.com
            </a>
          </div>
        </div>

      </div>
    </div>
    `}function ct(){return`
    
    <div class="max-w-6xl mx-auto px-2 py-12">
      <div class="relative bg-white shadow-2xl rounded-4xl p-8 md:p-12 overflow-hidden border border-gray-100">
        
        <div class="absolute left-0 top-0 h-full w-3 bg-linear-to-b from-blue-950 via-blue-800 to-blue-600"></div>
        <div class="grid md:grid-cols-2 gap-12">
          
          <div>
          <h2 class="text-4xl font-bold mb-12 text-slate-800 tracking-wider flex items-center justify-center gap-3">
            <i class="text-4xl bx bx-mail-open"></i> 
              Contacto
          </h2>

            <form id="contactForm" class="space-y-5">
          
            <!-- NOMBRE COMPLETO -->
              <div>
                <label for="nombre" class="inline-block text-sm   lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-tr-lg">
                  Nombre completo
                </label>
                <input type="text" id="nombre" name="nombre" minlength="3" maxlength="80" required
                  class="w-full border border-gray-300  lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                  placeholder="Ej: Carlos Santana"/>
              </div>

          <!-- CORREO ELECTRONICO -->
              <div>
                <label for="correo" class="inline-block text-sm  lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-t">
                  Correo electrónico
                </label>
                <input type="email" id="correo" name="correo" maxlength="100" required
                  class="w-full border border-gray-300 lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Ej: nombre@correo.com"/>
              </div>

          <!-- ASUNTO -->
              <div>
                <label for="asunto" class="inline-block text-sm lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-t">
                  Asunto
                </label>
                <input type="text" id="asunto" name="asunto" maxlength="100" required
                  class="w-full border border-gray-300  lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            
          <!-- MENSAJE -->
              <div>
                <label for="mensaje" class="inline-block text-sm lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-t ">
                  Mensaje
                </label>                
                <textarea id="mensaje" name="mensaje" maxlength="1000" rows="4" required
                  class="resize-none w-full border border-gray-300 lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
              </div>
          
          <!-- BUTTON -->
              <div class="text-center pt-4">
                <button type="submit" id="submitBtn"
                  class="bg-blue-600 hover:bg-blue-700 lg:text-xl text-white font-semibold w-full md:w-auto px-12  py-2 rounded-md transition duration-200">
                  Enviar
                </button>
              </div>

            </form>
          </div>

          <!-- INFO -->
          <div>
            ${lt()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function dt(){const e=document.createElement("section");return e.classList.add("w-full","tabletBig:w-7xl"),e.innerHTML=`
    ${ct()}
    `,e}function mt(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",ut)}async function ut(e){e.preventDefault();const t=e.target,a=new FormData(t),i=Object.fromEntries(a.entries()),o=pt(i);if(o.length>0){gt(o);return}await ft(t,i)}function pt(e){const t=[];return e.nombre?.trim()||t.push("El nombre es obligatorio."),e.asunto?.trim()||t.push("El asunto es obligatorio."),e.mensaje?.trim()||t.push("El mensaje es obligatorio."),e.correo?.trim()?xt(e.correo)||t.push("El formato del correo no es válido."):t.push("El correo es obligatorio."),t}function xt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function gt(e){w(e[0],"error")}function w(e,t="success"){const a=document.querySelector(".custom-toast");a&&a.remove();const i=document.createElement("div");i.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,t==="success"?i.classList.add("bg-green-600"):i.classList.add("bg-red-600"),i.textContent=e,document.body.appendChild(i),setTimeout(()=>{i.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{i.classList.add("translate-x-full","opacity-0"),setTimeout(()=>i.remove(),300)},3e3)}async function ft(e,t){const a=document.getElementById("submitBtn");a.disabled=!0,a.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})).ok?(w("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),e.reset()):w("Hubo un problema al enviar el mensaje.","error")}catch{w("Error de conexión. Intenta nuevamente.","error")}a.disabled=!1,a.textContent="Enviar"}function bt(){const e=dt();return setTimeout(()=>{mt()},0),e}const ht={home:{page:oe,layout:"default"},quienesSomos:{page:ve,layout:"full"},equipment:{page:Me,layout:"default"},FormacionAcademica:{page:Le,layout:"default"},noticias:{page:Je,layout:"full"},publicaciones:{page:We,layout:"default"},proyectos:{page:rt,layout:"default"},lineas:{page:_e,layout:"default"},contacto:{page:bt,layout:"default"}};function D(e){window.location.hash=`/${e}`}function vt(){const e=()=>{const t=window.location.hash.replace("#/","")||"home";wt(t)};window.addEventListener("hashchange",e),e()}function wt(e){const t=document.querySelector("main"),a=ht[e];t&&(t.innerHTML="",a&&(Ee(a.layout),t.appendChild(a.page())))}function yt(e,t){U(e,D),vt();const a=window.matchMedia("(max-width: 768px)");let i=!1;function o(r){r.matches&&!i&&(L(e),i=!0)}a.addEventListener("change",o),o(a),L(e);const n=t.querySelector('[data-action ="open-menu"]');K(n,e),W(e)}const J=document.querySelector("#header");J.innerHTML=V();const H=document.querySelector("#navBar");H.innerHTML=Q();const At=document.querySelector("#footer");At.innerHTML=Y();yt(H,J);
