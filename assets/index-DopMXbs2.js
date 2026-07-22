(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();const Rn=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Nl(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${Rn}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function Sl(){return`
        <div class="lg:hidden border-b-zinc-500 border-b pb-2.5 w-full flex px-2.5 justify-between items-center mb-7">
            <span class="text-4xl font-medium">El Kernel</span>
            <i data-action="close-navBar" class="text-6xl cursor-pointer bx bx-x"></i>
        </div>

        <ul class="flex w-full text-black flex-col lg:flex-row lg:items-start p-4 gap-4 xl:gap-9">

            <li data-route="home"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Portada</span>
                <i class="bx bx-home text-3xl"></i>
            </li>

            <!-- Nosotros -->
            <li data-action="open-subMenu"
                class="gap-1 text-nowrap lg:relative 2xl:text-3xl hover:cursor-pointer font-medium items-center text-lg xl:text-2xl">

                <div class="flex justify-between">
                    <span>Nosotros</span>
                    <i class="text-3xl bx bx-caret-down"></i>
                </div>

                <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56 lg:bg-white lg:shadow-2xl">

                    <li data-route="quienesSomos"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Quiénes Somos</span>
                    </li>

                    <li data-route="equipment"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Equipo</span>
                    </li>

                </ul>

            </li>

            <!-- Nuestro Trabajo -->
            <li data-action="open-subMenu"
                class="lg:relative gap-1 2xl:text-3xl text-nowrap hover:cursor-pointer font-medium items-center text-lg xl:text-2xl">

                <div class="flex justify-between">
                    <span>Nuestro Trabajo</span>
                    <i class="text-3xl bx bx-caret-down"></i>
                </div>

                <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56 lg:bg-white lg:shadow-2xl">

                    <li data-route="lineas"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Líneas</span>
                    </li>

                    <li data-route="proyectos"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Proyectos</span>
                    </li>

                    <li data-route="publicaciones"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Publicaciones</span>
                    </li>

                    <li data-route="herramientas"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Herramientas</span>
                    </li>

                </ul>

            </li>

            <!-- Laboratorio Inteligente -->
<li
    data-route="laboratorioKernel"
    class="
        flex items-center justify-center gap-2
        hover:cursor-pointer
        font-medium
        text-base xl:text-xl 2xl:text-2xl
    "
>
    <span class="flex flex-col items-center text-center leading-none">
        <span class="whitespace-nowrap">
            Laboratorio Inteligente
        </span>

        <span
            class="
                mt-1 whitespace-nowrap
                text-sm xl:text-base 2xl:text-lg
                font-semibold text-slate-600
            "
        >
            de Investigación
        </span>
    </span>

    <i class="bx bx-bar-chart-alt-2 text-2xl shrink-0"></i>
</li>

            <!-- Noticias -->
            <li data-route="noticias"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Noticias</span>
                <i class="bx bx-news text-3xl"></i>
            </li>

            <!-- Contacto -->
            <li data-route="contacto"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Contacto</span>
                <i class="bx bx-envelope text-3xl"></i>
            </li>

        </ul>
    `}function zl(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${Rn}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
                        <li><a class=" text-footer-contacto font-medium text-xs   md:text-sm lg:text-lg hover:underline "  title ="ISFODOSU" href="https://www.isfodosu.edu.do"    target="_blank" >ISFODOSU</a></li>
                        <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm lg:text-lg hover:underline "  title ="UASD" href="https://uasd.edu.do"    target=" _blan"k >UASD</a></li>
                         <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm  lg:text-lg hover:underline "  title ="APEC" href="https://unapec.edu.do"      target="_blank" >APEC</a></li>
                    </ul>
        </div> 
        </div>
        <div class="max-w-7xl mx-auto px-3 text-white text-xs md:text-sm lg:text-lg md:mt-8 mt-2.5">
                <h5>© 2026 Grupo de Investigación El Kernel — Todos los derechos reservados</h5>
        </div>
        `}function ii(e){e.querySelectorAll('[data-action ="open-subMenu"]').forEach(r=>{const t=r.querySelector("ul"),n=r.querySelector("i");let c=!t.classList.contains("hidden");r.addEventListener("click",s=>{s.preventDefault(),c?(n.classList.replace("bx-caret-up","bx-caret-down"),t.classList.replace("flex","hidden"),c=!1):(n.classList.replace("bx-caret-down","bx-caret-up"),t.classList.replace("hidden","flex"),c=!0)})})}function _l(e,a){e.addEventListener("click",()=>{a.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function Dl(e){e.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{e.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const ql="modulepreload",Ol=function(e,a){return new URL(e,a).href},oi={},Go=function(a,r,t){let n=Promise.resolve();if(r&&r.length>0){let l=function(i){return Promise.all(i.map(o=>Promise.resolve(o).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const s=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),u=p?.nonce||p?.getAttribute("nonce");n=l(r.map(i=>{if(i=Ol(i,t),i in oi)return;oi[i]=!0;const o=i.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(t)for(let f=s.length-1;f>=0;f--){const g=s[f];if(g.href===i&&(!o||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${d}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":ql,o||(m.as="script"),m.crossOrigin="",m.href=i,u&&m.setAttribute("nonce",u),document.head.appendChild(m),o)return new Promise((f,g)=>{m.addEventListener("load",f),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})}))}function c(s){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=s,window.dispatchEvent(p),!p.defaultPrevented)throw s}return n.then(s=>{for(const p of s||[])p.status==="rejected"&&c(p.reason);return a().catch(c)})},ur=""+new URL("sep-BCMURSaM.png",import.meta.url).href,Mn=""+new URL("ant-D2J2W27b.png",import.meta.url).href,pr=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,nt=""+new URL("jos-BToFZdIf.png",import.meta.url).href,mr=""+new URL("nat-CaDYa76I.png",import.meta.url).href,Ae=[{id:1,img:ur,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:Mn,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:mr,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:pr,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:nt,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function Fl(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function Ul(e){const a=Fl(e);return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function jl(){const e=new Map;return Ae.forEach(a=>{(a.publicaciones||[]).forEach(r=>{const t=Ul(r);t&&!e.has(t)&&e.set(t,r)})}),e.size}function Vl(){const e=jl();return`
        <div class="
            relative bg-white shadow-2xl border border-slate-200
            w-full min-h-[520px]
            rounded-3xl
            lg:rounded-r-none lg:rounded-tl-3xl lg:rounded-bl-3xl
            lg:w-1/2 lg:min-h-[620px]
            px-6 py-8 md:px-10 lg:px-12
            flex flex-col justify-between
            overflow-hidden
        ">

            <div class="
                absolute -left-20 -bottom-20
                w-56 h-56 rounded-full
                bg-sky-100/60
            "></div>

            <div class="
                absolute right-10 top-10
                w-16 h-16 rounded-full
                border border-sky-100
            "></div>

            <div class="
                relative z-10
                flex flex-col lg:flex-row
                gap-6 h-full
            ">

                <div class="flex-1 flex flex-col justify-center">

                    <div class="flex items-center gap-3 mb-5">

                        <div class="
                            w-14 h-14 md:w-16 md:h-16
                            rounded-2xl bg-white
                            border border-slate-200
                            shadow-md
                            flex items-center justify-center
                            p-2
                        ">
                            <img
                                src="${Rn}"
                                alt="Logo del Grupo de Investigación Kernel"
                                class="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>

                        <div>
                            <p class="
                                text-[#0D6EFD]
                                font-black uppercase
                                tracking-widest
                                text-xs md:text-sm
                            ">
                                Grupo de Investigación
                            </p>

                            <p class="
                                text-slate-900
                                font-black
                                text-lg md:text-xl
                                leading-tight
                            ">
                                El Kernel
                            </p>
                        </div>

                    </div>

                    <h1 class="
                        text-4xl md:text-5xl lg:text-6xl
                        font-black text-slate-900
                        leading-tight mb-5
                    ">
                        Investigación matemática aplicada y computacional
                    </h1>

                    <p class="
                        text-slate-700
                        text-base md:text-lg lg:text-xl
                        leading-relaxed
                        max-w-2xl mb-5
                    ">
                        Exploramos ecuaciones diferenciales parciales no lineales,
                        métodos iterativos, análisis matricial, diseño de algoritmos,
                        optimización y educación matemática.
                    </p>

                    <p class="
                        text-slate-800 italic
                        text-sm md:text-base lg:text-lg
                        border-l-4 border-[#0D6EFD]
                        pl-4 mb-7
                    ">
                        “Innovando en la frontera entre matemática, computación y educación.”
                    </p>

                    <div class="flex flex-wrap gap-3 mb-8">

                        <a
                            href="#/publicaciones"
                            class="
                                inline-flex items-center justify-center gap-2
                                bg-[#0D6EFD] hover:bg-sky-700
                                text-white font-bold
                                px-5 py-3 rounded-full
                                transition-all
                                shadow-md hover:shadow-lg
                            "
                        >
                            <span>Ver publicaciones</span>
                            <i class="bx bx-article text-xl"></i>
                        </a>

                        <a
                            href="#/equipment"
                            class="
                                inline-flex items-center justify-center gap-2
                                bg-slate-900 hover:bg-black
                                text-white font-bold
                                px-5 py-3 rounded-full
                                transition-all
                                shadow-md hover:shadow-lg
                            "
                        >
                            <span>Conocer el equipo</span>
                            <i class="bx bx-group text-xl"></i>
                        </a>

                    </div>

                    <!-- Estadísticas de visitantes -->

                    <div
                        class="
                            grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
                            gap-3
                            w-full max-w-3xl
                        "
                        aria-label="Estadísticas de visitantes del sitio"
                    >

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-show
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-total"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Visitantes totales
                            </p>
                        </div>

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-calendar
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-hoy"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Visitantes hoy
                            </p>
                        </div>

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-line-chart
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-semana"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Últimos 7 días
                            </p>
                        </div>

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-calendar-check
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-mes"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Últimos 30 días
                            </p>
                        </div>

                    </div>

                    <p
                        id="analytics-actualizado"
                        class="
                            mt-3
                            text-xs text-slate-400
                            text-center sm:text-left
                        "
                    >
                        Cargando estadísticas…
                    </p>

                    <!-- Indicadores del grupo -->

                    <div class="
                        mt-5
                        grid grid-cols-2 md:grid-cols-4
                        gap-4
                        w-full max-w-3xl
                    ">

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                7+
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Miembros principales
                            </p>
                        </div>

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                ${e}
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Publicaciones
                            </p>
                        </div>

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                2
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Propuestas FONDOCyT
                            </p>
                        </div>

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                6
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Líneas activas
                            </p>
                        </div>

                    </div>

                </div>

                <!-- Redes sociales -->

                <div class="
                    flex lg:flex-col
                    items-center justify-center
                    gap-3 md:gap-4
                    lg:w-14
                ">

                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        aria-label="Visitar LinkedIn"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-brands fa-linkedin-in
                            text-xl md:text-2xl
                        "></i>
                    </a>

                    <a
                        href="https://github.com/grupo-kernel"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        aria-label="Visitar GitHub"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-brands fa-github
                            text-xl md:text-2xl
                        "></i>
                    </a>

                    <a
                        href="https://wa.me/?text=Hola,%20mira%20este%20enlace:%20https://www.grupoelkernel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Compartir"
                        aria-label="Compartir la página"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-solid fa-share-nodes
                            text-xl md:text-2xl
                        "></i>
                    </a>

                    <a
                        href="mailto:mleonardos@unapec.edu.do"
                        title="Correo"
                        aria-label="Enviar correo"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-regular fa-envelope
                            text-xl md:text-2xl
                        "></i>
                    </a>

                </div>

            </div>

        </div>
    `}function Ho(e,a){e.addEventListener("click",r=>{const t=r.target.closest(["[data-route]"]);t&&(r.preventDefault(),a(t.dataset.route))})}function Bl(e){Ho(e,ht)}const Wo=""+new URL("apec-ConmXkrT.png",import.meta.url).href,Gl=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,Hl=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,si=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Wo}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Gl}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Hl}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function Wl(e){const a=e.querySelector("#arrowR"),r=e.querySelector("#arrowL"),t=e.querySelector("#contenedorSlide");if(!a||!r||!t)return;const n=si.length,c=1500;let s=0,p=null;function u(f){return(f%n+n)%n}function l(){t.innerHTML=si[s].content}function i(f){s=u(s+f),l()}function o(){d(),p=setInterval(()=>i(1),c)}function d(){p&&(clearInterval(p),p=null)}function m(){o()}l(),o(),a.addEventListener("click",()=>{i(1),m()}),r.addEventListener("click",()=>{i(-1),m()})}function Kl(){const e=`
        <section class="
            relative bg-slider-primary overflow-hidden
            w-full min-h-[520px]
            rounded-3xl
            lg:rounded-l-none lg:rounded-tr-3xl lg:rounded-br-3xl
            shadow-2xl
            flex flex-col justify-center items-center
            px-5 py-8
            lg:w-1/2 lg:min-h-[620px]
        ">

            <div class="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10"></div>
            <div class="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-black/10"></div>
            <div class="absolute top-10 left-10 w-16 h-16 rounded-full border border-white/20"></div>

            <div class="relative z-10 w-full h-full flex flex-col justify-center items-center">

                <div class="text-center mb-6">
                    <p class="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-black uppercase tracking-widest mb-3">
                        Instituciones y alianzas
                    </p>

                    <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                        Investigación, colaboración y producción científica
                    </h2>

                    <p class="text-white/80 text-sm md:text-base max-w-xl mx-auto mt-3 leading-relaxed">
                        Vinculación académica con instituciones nacionales e internacionales para el desarrollo de matemática aplicada, análisis numérico y formación avanzada.
                    </p>
                </div>

                <div id="containerFather" class="relative w-full flex flex-col items-center justify-center">

                    <div class="hidden md:flex items-center justify-between p-4 gap-5 z-20">
                        <button id="arrowL"
                            type="button"
                            aria-label="Anterior"
                            class="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/90 hover:bg-black rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow-xl transition-all active:scale-95">
                            <i class="bxr bx-arrow-left text-3xl lg:text-4xl"></i>
                        </button>

                        <button id="arrowR"
                            type="button"
                            aria-label="Siguiente"
                            class="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/90 hover:bg-black rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow-xl transition-all active:scale-95">
                            <i class="bxr bx-arrow-right text-3xl lg:text-4xl"></i>
                        </button>
                    </div>

                    <div id="contenedorSlide" class="w-full flex justify-center px-3 md:px-10">
                        <div id="1" class="relative flex flex-col justify-center items-center w-full">

                            <div class="bg-white/15 border border-white/25 rounded-[28px] p-3 md:p-4 shadow-2xl backdrop-blur-sm w-full max-w-xl">
                                <img 
                                    id="img1" 
                                    src="${Wo}" 
                                    alt="UNAPEC"
                                    title="UNAPEC" 
                                    class="w-full h-52 md:h-64 lg:h-72 rounded-2xl object-cover object-center"
                                >
                            </div>

                            <span class="mt-4 inline-flex items-center justify-center border border-white/50 bg-white/10 px-6 py-1.5 min-w-40 text-center rounded-full text-white text-xl md:text-2xl lg:text-3xl font-black shadow-lg">
                                UNAPEC
                            </span>
                        </div>
                    </div>
                </div>

                <div id="btnsGroup" class="relative z-20 flex justify-center mt-8 items-center gap-5 md:gap-8">
                    <span 
                        data-route="equipment" 
                        title="Equipo de investigación"
                        class="group hover:-translate-y-2 cursor-pointer transition-all duration-300 bg-black rounded-full flex justify-center items-center w-14 h-14 md:w-16 md:h-16 p-2 shadow-xl">
                        <i class="text-3xl md:text-4xl text-white bxr bx-group group-hover:text-[#48E1F7] transition-colors"></i> 
                    </span>

                    <span 
                        data-route="publicaciones" 
                        title="Publicaciones científicas"
                        class="group hover:-translate-y-2 cursor-pointer transition-all duration-300 bg-black rounded-full flex justify-center items-center w-14 h-14 md:w-16 md:h-16 p-2 shadow-xl">
                        <i class="text-3xl md:text-4xl text-white bxr bx-article group-hover:text-[#48E1F7] transition-colors"></i> 
                    </span>

                    <span 
                        data-route="noticias"
                        title="Noticias y actividades"
                        class="group hover:-translate-y-2 cursor-pointer transition-all duration-300 bg-black rounded-full flex justify-center items-center w-14 h-14 md:w-16 md:h-16 p-2 shadow-xl">
                        <i class="text-3xl md:text-4xl text-white bxr bx-megaphone group-hover:text-[#48E1F7] transition-colors"></i> 
                    </span>
                </div>

                <div class="mt-7 flex flex-wrap justify-center gap-3 text-white/90 text-xs md:text-sm font-bold">
                    <span class="px-3 py-1 rounded-full bg-white/10 border border-white/20">ISFODOSU</span>
                    <span class="px-3 py-1 rounded-full bg-white/10 border border-white/20">UASD</span>
                    <span class="px-3 py-1 rounded-full bg-white/10 border border-white/20">UNAPEC</span>
                </div>

            </div>
        </section>
    `,a=document.createElement("div");a.innerHTML=e;const r=a.firstElementChild;return Wl(r.querySelector("#containerFather")),Bl(r.querySelector("#btnsGroup")),r}const Yl="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function Jl(){try{const e=await fetch(Yl,{method:"GET",cache:"no-store"});if(!e.ok)throw new Error(`La API de Analytics respondió con estado ${e.status}`);const a=await e.json();if(!a.ok||!a.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(a.visitantes.total)||0,hoy:Number(a.visitantes.hoy)||0,ultimos7Dias:Number(a.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(a.visitantes.ultimos30Dias)||0,actualizadoEn:a.actualizadoEn||null}}catch(e){return console.error("No fue posible obtener las estadísticas de Analytics:",e),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function xt(e){return new Intl.NumberFormat("es-DO").format(Number(e)||0)}function Ql(e){if(!e)return null;const a=new Date(e);return Number.isNaN(a.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(a)}async function Xl(e){const a=e.querySelector("#analytics-total"),r=e.querySelector("#analytics-hoy"),t=e.querySelector("#analytics-semana"),n=e.querySelector("#analytics-mes"),c=e.querySelector("#analytics-actualizado");if(!a||!r||!t||!n||!c){console.warn("No se encontraron los elementos de Analytics en la portada.");return}c.textContent="Cargando estadísticas…";try{const s=await Jl();a.textContent=xt(s.total),r.textContent=xt(s.hoy),t.textContent=xt(s.ultimos7Dias),n.textContent=xt(s.ultimos30Dias);const p=Ql(s.actualizadoEn);c.textContent=p?`Actualizado: ${p}`:"Estadísticas temporalmente no disponibles"}catch(s){console.error("Error al mostrar las estadísticas en la portada:",s),a.textContent="—",r.textContent="—",t.textContent="—",n.textContent="—",c.textContent="No fue posible cargar las estadísticas"}}function Zl(){const e=document.createElement("section");e.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,e.innerHTML=Vl();const a=Kl();return e.appendChild(a),Xl(e),e}function ec(){return Zl()}const ac=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function tc(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${ac}" 
                alt="Grupo de Investigación Kernel" 
                class="absolute inset-0 w-full h-full object-cover object-center" 
                loading="lazy"
            />

            <!-- Overlay profesional -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#1A2B48]/95 via-[#1A2B48]/78 to-[#0D6EFD]/55"></div>
            <div class="absolute inset-0 bg-black/20"></div>

            <!-- Elementos decorativos -->
            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10"></div>
            <div class="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#E68143]/20"></div>
            <div class="absolute right-10 bottom-10 w-20 h-20 rounded-full border border-white/20 hidden md:block"></div>

            <!-- Contenido principal -->
            <div class="relative z-10 min-h-[560px] md:min-h-[640px] flex items-center px-6 sm:px-10 lg:px-16 xl:px-20">

                <div class="max-w-4xl text-white">

                    <p class="inline-flex items-center bg-white/10 border border-white/25 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-5">
                        Grupo de Investigación Kernel
                    </p>

                    <h1 class="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-5">
                        ¿Quiénes somos?
                    </h1>

                    <div class="h-2 w-40 md:w-56 rounded-full bg-[#E68143] shadow-lg mb-6"></div>

                    <p class="text-white/90 text-base md:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-8">
                        Somos un grupo académico orientado a la investigación matemática, el análisis numérico,
                        la modelización aplicada, la optimización, el álgebra y la formación matemática avanzada.
                    </p>

                    <div class="flex flex-wrap gap-3 mb-8">
                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            Métodos iterativos
                        </span>

                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            EDPs no lineales
                        </span>

                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            Optimización
                        </span>

                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            Educación matemática
                        </span>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">7+</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">16+</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">2</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Propuestas FONDOCyT
                            </p>
                        </div>

                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">6</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Líneas activas
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    `}function rc(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function nc(e){const a=rc(e);return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function ic(){const e=new Map;return Array.isArray(Ae)?(Ae.forEach(a=>{(a?.publicaciones||[]).forEach(t=>{const n=nc(t);n&&!e.has(n)&&e.set(n,t)})}),Array.from(e.values())):[]}function oc(){const e=ic(),a=e.map(t=>Number(t.year)).filter(Boolean),r=e.filter(t=>String(t?.q||t?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:e.length,totalQ1:r,primerYear:a.length?Math.min(...a):"—",ultimoYear:a.length?Math.max(...a):"—"}}function sc(e=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const a=oc();return`
        <section class="w-full py-12 overflow-x-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">

                <div class="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
                    <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                        Identidad del grupo
                    </p>

                    <h2 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-5">
                        Investigación matemática con impacto académico, científico y formativo
                    </h2>

                    <div
                        data-description-text
                        class="text-slate-600 text-base md:text-lg leading-relaxed font-sans space-y-5 line-clamp-6 sm:line-clamp-none"
                    >
                        ${e.map(r=>`<p>${r}</p>`).join("")}
                    </div>

                    <button
                        type="button"
                        data-description-btn
                        class="mt-5 text-[#E68143] font-black sm:hidden"
                    >
                        Leer más
                    </button>

                    <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${Ae.length}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${a.totalPublicaciones}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${a.totalQ1}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones Q1
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-xl md:text-2xl font-black text-slate-900">
                                ${a.primerYear}–${a.ultimoYear}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Periodo registrado
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-5">
                    <article class="bg-[#1E1E1E] text-white rounded-3xl shadow-2xl p-6 md:p-7 relative overflow-hidden">
                        <div class="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-white/10"></div>

                        <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-2">
                            Misión
                        </p>

                        <h3 class="text-2xl font-black mb-3">
                            Generar conocimiento matemático avanzado
                        </h3>

                        <p class="text-white/75 leading-relaxed">
                            Desarrollar investigación científica en análisis numérico,
                            métodos iterativos, optimización, modelización matemática,
                            álgebra y educación matemática, promoviendo publicaciones,
                            formación académica y colaboración interdisciplinaria.
                        </p>
                    </article>

                    <article class="bg-[#5580C1] text-white rounded-3xl shadow-xl p-6 md:p-7 relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-white/15"></div>

                        <p class="text-white/80 text-xs font-black uppercase tracking-wide mb-2">
                            Visión
                        </p>

                        <h3 class="text-2xl font-black mb-3">
                            Consolidar un núcleo de referencia en matemática aplicada
                        </h3>

                        <p class="text-white/85 leading-relaxed">
                            Ser un grupo reconocido por su producción científica,
                            el diseño de métodos matemáticos y computacionales,
                            la formación de investigadores y la vinculación de la
                            matemática con problemas científicos, tecnológicos y educativos.
                        </p>
                    </article>

                    <article class="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-7">
                        <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                            Áreas de trabajo
                        </p>

                        <div class="flex flex-wrap gap-2">
                            ${["Métodos iterativos","EDPs no lineales","Optimización","Álgebra","Educación matemática","Modelización aplicada"].map(r=>`
                                    <span class="bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        ${r}
                                    </span>
                                `).join("")}
                        </div>
                    </article>
                </div>

            </div>
        </section>
    `}const lc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",cc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",dc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",uc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",pc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",mc=[{icon:lc,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:cc,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:dc,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:uc,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function fc(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${mc.map(r=>bc(r)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function bc({icon:e,title:a,content:r}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${e}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${a}</h3>
        </div>

        <img src="${pc}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${r}
        </div>
      </div>
    </div>
  `}function gc(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,e.innerHTML=`
        ${tc()}
        ${sc()}
        ${fc()}
    `,e}function hc(e){e.querySelectorAll("[data-accordion-header]").forEach(r=>{r.addEventListener("click",()=>{const t=r.nextElementSibling,n=r.querySelector("[data-accordion-icon]"),c=t.classList.contains("max-h-[1000px]");e.querySelectorAll("[data-accordion-content]").forEach(s=>{s.classList.remove("max-h-[1000px]"),s.classList.add("max-h-0")}),e.querySelectorAll("[data-accordion-icon]").forEach(s=>{s.classList.remove("rotate-180")}),c||(t.classList.remove("max-h-0"),t.classList.add("max-h-[1000px]"),n.classList.add("rotate-180"))})})}function xc(e){const a=e.querySelector("[data-description-text]"),r=e.querySelector("[data-description-btn]");if(!a||!r)return;let t=!1;r.addEventListener("click",()=>{t=!t,a.classList.toggle("line-clamp-4",!t),r.textContent=t?"Leer menos":"Leer más"})}function vc(){const e=gc();return hc(e),xc(e),e}function ve(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function yc(e=[]){return!e||e.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:e.map(a=>`
        <a href="${ve(a.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${ve(a.name)}">
            <i class="${ve(a.icon)} text-xl"></i>
        </a>
    `).join("")}function wc(e){return e?String(e).split(",").map(r=>r.trim()).filter(Boolean).slice(0,4).map(r=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${ve(r)}
        </span>
    `).join(""):""}function kc(e){const a=document.createElement("article");a.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const r=yc(e.redes||[]),t=wc(e.areas),n=e.estado||e.grado||e.subtitle||"Investigador";return a.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${e.img}" 
                        alt="${ve(e.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${ve(n)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${ve(e.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${ve(e.subtitle||"")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${r}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${t||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${ve(e.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${ve(e.afilaciones||e.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${ve(e.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,a}const Ko=""+new URL("rad-B3ff1btG.png",import.meta.url).href,Yo=""+new URL("mar-Cru0HERG.png",import.meta.url).href,ya=[{img:ur,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:mr,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:Ko,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:Mn,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:Yo,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:pr,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:nt,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function Ec(){let e=0,a=null,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const n=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,c=()=>{const m=n();return Math.max(ya.length-m,0)},s=()=>{const m=c();e>m&&(e=0),e<0&&(e=m)},p=()=>{const m=c();e>=m?e=0:e++,d()},u=()=>{const m=c();e<=0?e=m:e--,d()},l=()=>{i(),ya.length>n()&&(a=setInterval(p,4500))},i=()=>{a&&(clearInterval(a),a=null)},o=()=>{const m=n(),f=Math.max(ya.length-m+1,1);return Array.from({length:f}).map((g,b)=>`
            <button
                type="button"
                data-dot-index="${b}"
                aria-label="Ir al grupo ${b+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${b===e?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},d=()=>{if(!ya||ya.length===0){t.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}s();const m=n(),f=ya.slice(e,e+m);t.innerHTML=`
            <div class="w-full text-center">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h2 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Equipo de investigación
                </h2>

                <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                    Conoce a los investigadores que integran el grupo, sus áreas de trabajo y sus aportes
                    a la matemática aplicada, el análisis numérico, la optimización, el álgebra y la formación matemática.
                </p>
            </div>

            <div class="relative w-full">

                <div id="cards-wrapper"
                    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full min-h-[560px] items-stretch">
                </div>

                <button
                    id="prev-btn"
                    type="button"
                    aria-label="Anterior"
                    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-30
                    bg-white/90 text-slate-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl
                    flex items-center justify-center hover:bg-sky-100 transition active:scale-90 border border-slate-200">

                    <i class="bx bx-caret-left text-4xl md:text-5xl"></i>
                </button>

                <button
                    id="next-btn"
                    type="button"
                    aria-label="Siguiente"
                    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-30
                    bg-white/90 text-slate-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl
                    flex items-center justify-center hover:bg-sky-100 transition active:scale-90 border border-slate-200">

                    <i class="bx bx-caret-right text-4xl md:text-5xl"></i>
                </button>
            </div>

            <div class="flex items-center justify-center gap-2">
                ${o()}
            </div>

            <div class="w-full bg-[#1E1E1E] rounded-3xl p-6 md:p-8 text-center text-white shadow-2xl relative overflow-hidden">

                <div class="absolute -right-10 -bottom-10 w-28 h-28 bg-white/10 rounded-full"></div>
                <div class="absolute left-8 top-8 w-14 h-14 bg-[#96B4E1]/30 rounded-full"></div>

                <div class="relative z-10">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-2">
                        Equipo Kernel
                    </p>

                    <h3 class="text-xl md:text-2xl font-black mb-2">
                        Conoce más sobre el trabajo de nuestros investigadores
                    </h3>

                    <p class="text-white/70 max-w-2xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
                        Explora su formación académica, publicaciones, líneas de investigación y proyectos científicos.
                    </p>

                    <a href="#formacion-academica"
                       class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full transition-colors">
                        Leer más
                    </a>
                </div>
            </div>
        `;const g=t.querySelector("#cards-wrapper");f.forEach(y=>{g.appendChild(kc(y))});const b=t.querySelector("#prev-btn"),x=t.querySelector("#next-btn");b&&(b.onclick=()=>{u(),l()}),x&&(x.onclick=()=>{p(),l()}),t.querySelectorAll("[data-dot-index]").forEach(y=>{y.onclick=()=>{e=parseInt(y.dataset.dotIndex),d(),l()}})};return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",l),document.addEventListener("visibilitychange",()=>{document.hidden?i():l()}),window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{e=0,d(),l()},150)}),d(),l(),t}function Cc(e){e.addEventListener("click",a=>{const r=a.target.closest("[data-route]");if(!r)return;const t=window.location.hash.replace("#/","")||"equipment";r.dataset.route!==t&&ht(r.dataset.route)})}function Jo(){const e=window.location.hash.replace(/^#\/?/,"")||"equipment",a=document.createElement("nav"),r="bg-sky-800 text-white border-sky-800 shadow-md",t="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return a.className="w-full flex justify-center mb-6",a.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="equipment"?r:t}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="FormacionAcademica"?r:t}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,Cc(a),a}function $c(){const e=document.createElement("section");e.id="equipo-investigacion",e.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=document.createElement("div");a.className="mb-6",a.appendChild(Jo());const r=Ec();return e.appendChild(a),e.appendChild(r),e}function Ac(){return $c()}function Ic(e="default"){const a=document.getElementById("main");a.classList.remove("p-2","mt-8","md:mt-12"),e=="full"?(a.classList.add("mt-0","pt-0"),a.classList.remove("max-w-7xl")):e=="left"?(a.classList.add("p-2","mt-8","md:mt-12"),a.classList.remove("m-auto")):(a.classList.add("p-2","mt-8","md:mt-12"),a.classList.add("m-auto"))}function he(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Qo(e){return e.formacion?.length||0}function Xo(e){return e.experiencia?.length||0}function Pc(e,a=!1){const r=Qo(e),t=Xo(e);return`
        <button 
            type="button"
            data-id="${e.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${a?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${e.img}" 
                    alt="${he(e.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${a?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${a?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${he(e.name)}
                </h3>

                <p class="text-xs leading-snug ${a?"text-sky-50":"text-gray-500"}">
                    ${r} formación${r===1?"":"es"}
                    · ${t} experiencia${t===1?"":"s"}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${a?"text-white/80":"text-gray-400"}">
                                ${he(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Lc(e){const a=e.formacion||[],r=e.experiencia||[],t=a.length?a.map(p=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${he(p.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${he(p.descripcion)}
                        </p>

                        ${p.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${he(p.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,n=r.length?r.map(p=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${he(p.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,c=Qo(e),s=Xo(e);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${e.img}" 
                        alt="${he(e.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${he(e.name)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${he(e.area)}
                                    </p>
                                  `:""}
                    </div>
                </div>

                <button 
                    id="close-modal" 
                    type="button"
                    class="md:hidden text-white hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         class="h-8 w-8" 
                         fill="none" 
                         viewBox="0 0 24 24" 
                         stroke="currentColor">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Formación
                    </p>
                    <p class="text-2xl font-bold">
                        ${c}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-2xl font-bold">
                        ${s}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${he(e.area||"No especificada")}
                    </p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">

                <section class="mb-8">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Formación académica
                    </h3>

                    ${t}
                </section>

                <section class="bg-[#111827] rounded-2xl p-5 border border-white/10">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Experiencia relevante
                    </h3>

                    <ul class="space-y-1">
                        ${n}
                    </ul>
                </section>

            </div>
        </div>
    `}const Be=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:ur,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:mr,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:Mn,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:Ko,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:Yo,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:pr,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:nt,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Rc(){let e=Be[0]?.id||1,a=!1,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function n(){return Be.find(u=>u.id===e)||Be[0]}function c(){const u=Be.length,l=Be.reduce((d,m)=>d+(m.formacion?.length||0),0),i=Be.reduce((d,m)=>d+(m.experiencia?.length||0),0),o=Be.filter(d=>{const m=String(d.name||"").toLowerCase(),f=(d.formacion||[]).map(g=>`${g.name||""} ${g.descripcion||""}`).join(" ").toLowerCase();return m.includes("ph.d")||m.includes("phd")||m.includes("doctor")||f.includes("doctor")}).length;return{totalProfesores:u,totalFormacion:l,totalExperiencia:i,doctores:o}}const s=()=>{const u=n(),l=c(),i=window.innerWidth<768&&!a;t.innerHTML="",t.appendChild(Jo());const o=document.createElement("div");o.innerHTML=`
            <div class="mt-8 mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Formación académica
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Perfil académico, trayectoria formativa y experiencia relevante de los investigadores
                    vinculados al grupo.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${l.totalProfesores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Doctores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${l.doctores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Registros formativos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${l.totalFormacion}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${l.totalExperiencia}
                    </p>
                </div>
            </div>

            <div class="relative flex flex-col md:flex-row gap-6 w-full min-h-[650px] md:min-h-[720px] bg-white/70 border border-white/70 backdrop-blur-sm lg:shadow-2xl lg:rounded-3xl p-4 md:p-6">

                <aside id="profesores-list" 
                    class="flex flex-col gap-4 w-full md:w-1/3 max-h-[430px] md:max-h-none overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-4 rounded-2xl border border-gray-200">

                    <div class="mb-2">
                        <h2 class="text-slate-800 font-black text-lg">
                            Investigadores
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione un investigador para ver su formación académica y experiencia relevante.
                        </p>
                    </div>

                    ${Be.map(m=>Pc(m,m.id===e)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${i?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${Lc(u)}
                    </div>
                </div>

            </div>
        `,t.appendChild(o),t.querySelectorAll("[data-id]").forEach(m=>{m.onclick=()=>{e=parseInt(m.dataset.id),window.innerWidth<768&&(a=!0),s()}});const d=t.querySelector("#close-modal");d&&(d.onclick=()=>{a=!1,s()})},p=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(a=!1),s()},120)};return window.addEventListener("resize",p),s(),t}function Mc(){return Rc()}const Tc=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Nc=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,Sc=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,zc=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,_c=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Zo=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:_c,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Nc,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:Sc,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:nt,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:mr,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:ur,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Tc,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:zc,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:nt,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:pr,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function Ge(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Dc(e=null){const a=!!e,r=e?.imageFit==="cover"?"object-cover":"object-contain";return`    
        <section role="news-hero" class="w-full py-16 md:py-20 px-6 sm:px-12 lg:px-24">

            <div class="max-w-4xl mx-auto text-center space-y-6 mb-12">

                <p class="text-sky-600 font-black uppercase tracking-widest text-xs md:text-sm">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-black text-gray-900 leading-tight">
                    Noticias y Actividades del Grupo
                </h1>

                <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                    Descubre lo más reciente en publicaciones, logros académicos,
                    congresos, ponencias y actividades del Grupo Kernel.
                </p>

            </div>

            ${a?`
                        <div class="
                            max-w-7xl mx-auto
                            bg-white rounded-3xl shadow-2xl
                            border border-slate-100 overflow-hidden
                            grid grid-cols-1 lg:grid-cols-2
                        ">

                            <div class="
                                bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100
                                min-h-[360px] lg:min-h-[520px]
                                flex items-center justify-center
                                p-4 md:p-6
                            ">
                                ${e.image?`
                                            <img
                                                src="${Ge(e.image)}"
                                                alt="${Ge(e.imageAlt||e.title)}"
                                                class="w-full h-full max-h-[500px] ${r} rounded-2xl"
                                                loading="lazy"
                                            >
                                          `:`
                                            <div class="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                                                Imagen no disponible
                                            </div>
                                          `}
                            </div>

                            <div class="
                                p-6 md:p-10 lg:p-12
                                flex flex-col justify-center
                            ">

                                <div class="flex flex-wrap items-center gap-3 mb-5">
                                    <span class="
                                        inline-flex items-center rounded-full
                                        bg-sky-50 text-sky-700 border border-sky-100
                                        px-3 py-1 text-xs font-black uppercase tracking-wide
                                    ">
                                        ${Ge(e.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${Ge(e.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${Ge(e.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${Ge(e.excerpt)}
                                </p>

                                ${Array.isArray(e.tags)&&e.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${e.tags.map(n=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${Ge(n)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${Ge(e.id)}"
                                    class="
                                        self-start inline-flex items-center justify-center gap-2
                                        bg-sky-600 hover:bg-sky-700
                                        text-white font-black
                                        px-6 py-3 rounded-full
                                        shadow-lg transition-all hover:-translate-y-1
                                    "
                                >
                                    <span>Leer noticia destacada</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>
                        </div>
                      `:""}

        </section>
    `}function _e(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function qc({id:e,title:a,date:r,image:t,imageAlt:n,excerpt:c,category:s="Noticia",imageFit:p="contain"}){const u=p==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${_e(e)}"
            class="
                bg-white rounded-2xl overflow-hidden shadow-sm
                hover:shadow-xl transition duration-300 cursor-pointer
                border border-gray-100 flex flex-col h-full
            "
        >

            <div class="
                h-64 md:h-72 2xl:h-96
                overflow-hidden rounded-t-2xl
                bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100
                flex items-center justify-center
                p-3
            ">
                ${t?`
                            <img
                                src="${_e(t)}"
                                alt="${_e(n||a)}"
                                class="w-full h-full ${u} rounded-xl"
                                loading="lazy"
                            />
                          `:`
                            <div class="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                                Imagen no disponible
                            </div>
                          `}
            </div>

            <div class="p-4 space-y-3 flex flex-col flex-1">

                <div class="flex items-center justify-between gap-3">
                    <span class="
                        inline-flex items-center rounded-full
                        bg-sky-50 text-sky-700 border border-sky-100
                        px-3 py-1 text-xs 2xl:text-lg
                        font-black uppercase tracking-wide
                    ">
                        ${_e(s)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${_e(r)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${_e(a)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${_e(c)}
                </p>

                <button
                    type="button"
                    data-news-btn="${_e(e)}"
                    aria-label="Ver detalles de la noticia ${_e(a)}"
                    class="
                        mt-auto self-start lg:text-base 2xl:text-xl
                        font-bold text-blue-600
                        hover:text-blue-700 transition
                        underline-offset-4 hover:underline
                    "
                >
                    Más detalles
                </button>

            </div>
        </article>
    `}function Oc(e=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${e.map(t=>qc(t)).join("")}
            </div>
        </section>
    `}function Fc(){const e=encodeURIComponent("Propuesta de noticia para El Kernel"),a=encodeURIComponent(`Saludos,

Quiero proponer una actividad para publicar en la sección de noticias del Grupo de Investigación El Kernel.

Título de la actividad:
Fecha:
Descripción breve:
Imágenes o enlaces:

Gracias.`);return`
        <section class="w-full py-12">
            <div class="max-w-7xl mx-auto px-6 md:px-8">

                <div class="
                    relative overflow-hidden rounded-3xl
                    bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900
                    px-6 py-10 md:px-10 md:py-12
                    text-center shadow-2xl border border-sky-900/30
                ">

                    <div class="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-sky-500/10"></div>
                    <div class="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-400/10"></div>

                    <div class="relative z-10 max-w-3xl mx-auto">

                        <p class="
                            text-sky-300 font-black uppercase tracking-widest
                            text-xs md:text-sm mb-3
                        ">
                            Noticias del Grupo Kernel
                        </p>

                        <h2 class="
                            text-2xl md:text-4xl font-black text-white
                            leading-tight mb-4
                        ">
                            ¿Quieres que una actividad académica aparezca aquí?
                        </h2>

                        <p class="
                            text-slate-200 text-base md:text-lg
                            leading-relaxed mb-7
                        ">
                            Puedes enviarnos información sobre congresos, ponencias,
                            publicaciones, defensas, proyectos, reconocimientos o actividades
                            vinculadas con las líneas de investigación del grupo.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">

                            <a href="mailto:mleonardos@unapec.edu.do?subject=${e}&body=${a}"
                               class="
                                   inline-flex items-center justify-center gap-2
                                   bg-sky-500 hover:bg-sky-600
                                   text-white font-black
                                   px-6 py-3 rounded-full
                                   shadow-lg transition-all
                                   hover:-translate-y-1
                               "
                               aria-label="Enviar propuesta de noticia por correo">
                                <i class="fa-regular fa-envelope text-lg"></i>
                                <span>Enviar noticia</span>
                            </a>

                            <a href="#/publicaciones"
                               class="
                                   inline-flex items-center justify-center gap-2
                                   bg-white/10 hover:bg-white/20
                                   text-white font-black
                                   px-6 py-3 rounded-full
                                   border border-white/20
                                   transition-all hover:-translate-y-1
                               ">
                                <i class="fa-solid fa-book-open text-lg"></i>
                                <span>Ver publicaciones</span>
                            </a>

                        </div>

                        <p class="text-slate-400 text-sm mt-6">
                            Contacto:
                            <a href="mailto:mleonardos@unapec.edu.do"
                               class="text-sky-300 hover:text-sky-200 hover:underline font-bold">
                                mleonardos@unapec.edu.do
                            </a>
                        </p>

                    </div>
                </div>

            </div>
        </section>
    `}function Uc(e=[]){return[...e].sort((a,r)=>a.featured&&!r.featured?-1:!a.featured&&r.featured?1:0)}function jc(){const e=document.createElement("section");e.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const a=Uc(Zo),r=a.find(t=>t.featured)||a[0];return e.innerHTML=`
        ${Dc(r)}
        ${Oc(a)}
        ${Fc()}
    `,e}function Vc({title:e,content:a={paragraphs:[],list:[]},articleURL:r}){const t=(a.paragraphs||[]).map(s=>`<p>${s}</p>`).join(""),n=(a.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${a.list.map(s=>`<li>${s}</li>`).join("")}
            </ul>
        `:"";return`
        <div role="dialog" id="newsModal" 
            class="fixed inset-0 bg-black/60 backdrop-blur-sm 
            flex items-center justify-center z-50 p-4">

            <div class="bg-white w-full md:max-w-lg
                rounded-2xl md:rounded-xl shadow-2xl relative animate-modalIn
                max-h-[85vh] flex flex-col">

                <!-- Header -->
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
                <div class="p-6 overflow-y-auto flex-1 space-y-4 text-gray-600 leading-relaxed">
                    ${t}
                    ${n}
                </div>

                <!-- Footer -->
                <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

                    ${r?`
                                <a href="${r}" target="_blank" rel="noopener noreferrer"
                                   class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                    Leer artículo
                                </a>
                              `:""}

                    <button data-close-modal
                        class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                        Cerrar
                    </button>

                </div>
            </div>
        </div>
    `}function Bc(e){e&&e.addEventListener("click",a=>{const r=a.target.closest("[data-news-btn], [data-news-card]");if(!r||!e.contains(r))return;const t=r.dataset.newsBtn||r.dataset.newsCard,n=Zo.find(c=>String(c.id)===String(t));if(!n){console.warn("No se encontró la noticia con id:",t);return}Gc(n)})}function Gc(e){const a=document.querySelector("#newsModal");a&&a.remove();const r=document.createElement("div");r.innerHTML=Vc(e);const t=r.firstElementChild;if(!t){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(t),document.body.style.overflow="hidden";function n(){t.remove(),document.body.style.overflow="",document.removeEventListener("keydown",c)}function c(s){s.key==="Escape"&&n()}t.querySelectorAll("[data-close-modal]").forEach(s=>{s.addEventListener("click",n)}),t.addEventListener("click",s=>{s.target===t&&n()}),document.addEventListener("keydown",c)}function Hc(){const e=jc();return Bc(e),e}function se(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function es(e){return e?.name||e?.title||"Investigador"}function li(e){return e?.title||e?.tile||"Revista no especificada"}function as(e){return String(e?.DOI||e?.doi||"").trim()}function Wc(e){const a=as(e);return e?.url?e.url:a?a.startsWith("http")?a:`https://doi.org/${a}`:"#"}function Kc(e){return[...e?.publicaciones||[]].sort((a,r)=>{const t=Number(a.year||0),n=Number(r.year||0);return t!==n?n-t:String(a.contenido||"").localeCompare(String(r.contenido||""))})}function Yc(e,a=!1){const r=es(e),t=e.publicaciones||[],n=t.length,c=t.map(p=>Number(p.year)).filter(Boolean),s=c.length?Math.max(...c):"";return`
        <button data-id="${e.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${a?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${e.img}"
                    alt="${se(r)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${a?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${a?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${se(r)}
                </h3>

                <p class="text-xs leading-snug ${a?"text-sky-50":"text-gray-500"}">
                    ${n} publicación${n===1?"":"es"}
                    ${s?` · Última: ${s}`:""}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${a?"text-white/80":"text-gray-400"}">
                                ${se(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Jc(e){if(!e)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const a=es(e),r=Kc(e),t=r.length,n=r.map(i=>Number(i.year)).filter(Boolean),c=n.length?Math.min(...n):"",s=n.length?Math.max(...n):"",p=[...new Set(r.map(i=>i.q).filter(Boolean))],u=[...new Set(r.map(i=>li(i)).filter(Boolean))],l=r.map(i=>{const o=li(i),d=as(i),m=Wc(i);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${se(i.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${se(o)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${se(i.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${se(i.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${se(i.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${d?`
                                <a href="${se(m)}"
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
                                        DOI: ${se(d)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${i.pdf?`
                                <a href="${se(i.pdf)}"
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
                         alt="${se(a)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${se(a)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${se(e.area)}
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
                        ${t}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-2xl font-bold">
                        ${c&&s?`${c}–${s}`:"—"}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Cuartiles
                    </p>
                    <p class="text-2xl font-bold">
                        ${p.length?p.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${u.slice(0,4).map(i=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${se(i)}
                    </span>
                `).join("")}

                ${u.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${u.length-4} revistas
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
    `}function Qc(){let e=Ae[0]?.id||1,a=!1,r=null;const t=document.createElement("section");t.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function n(f){return String(f?.DOI||f?.doi||"").trim().toLowerCase()}function c(f){return String(f?.journal||f?.title||f?.tile||"").trim()}function s(f){return String(f?.articleTitle||f?.contenido||"").trim()}function p(f){return String(f?.q||f?.quartile||"").trim().toUpperCase()}function u(f){const g=n(f);return g||[f?.year||"",c(f),s(f)].join("-").trim().toLowerCase()}function l(){const f=new Map;return Ae.forEach(g=>{(g.publicaciones||[]).forEach(b=>{const x=u(b);x&&!f.has(x)&&f.set(x,b)})}),Array.from(f.values())}function i(){const f=l(),g=f.map(v=>Number(v.year)).filter(Boolean),b=g.length?Math.max(...g):"—",x=g.length?Math.min(...g):"—",y=f.filter(v=>p(v)==="Q1").length;return{totalPublicaciones:f.length,investigadores:Ae.length,q1:y,primerYear:x,ultimoYear:b}}function o(){return Ae.find(f=>Number(f.id)===Number(e))||Ae[0]}const d=()=>{const f=o(),g=i(),b=window.innerWidth<768&&!a;t.innerHTML=`
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
                        ${g.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${g.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${g.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${g.primerYear}–${g.ultimoYear}
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

                    ${Ae.map(y=>Yc(y,Number(y.id)===Number(e))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${b?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Jc(f)}
                    </div>
                </div>
            </div>
        `,t.querySelectorAll("[data-id]").forEach(y=>{y.onclick=()=>{e=Number(y.dataset.id),window.innerWidth<768&&(a=!0),d()}});const x=t.querySelector("#close-modal");x&&(x.onclick=()=>{a=!1,d()})},m=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(a=!1),d()},120)};return window.addEventListener("resize",m),d(),t}function Xc(){return Qc()}const ea=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function fe(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Zc(e){return ea.find(a=>a.id===e)||ea[0]}function Nr(e=[]){return e.map(a=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${fe(a)}</span>
        </li>
    `).join("")}function ed(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${fe(a)}
        </span>
    `).join("")}function ad(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${fe(a)}
        </span>
    `).join("")}function td(e,a=!1){return`
        <button 
            type="button"
            data-linea-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${a?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${fe(e.categoria)}
                </span>

                <span class="inline-block ${a?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${fe(e.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${fe(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${a?"text-white/90":"text-slate-500"}">
                ${fe(e.desarrollo).slice(0,185)}${String(e.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function rd(e){const a=e.proyectosAsociados&&e.proyectosAsociados.length>0,r=e.publicacionesClave&&e.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${fe(e.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${fe(e.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${fe(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${fe(e.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${fe(e.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${fe(e.prioridad)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Aplicaciones</p>
                        <p class="text-slate-800 font-bold mt-1">${e.aplicaciones?.length||0}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Aplicaciones principales
                        </h3>

                        <ul class="space-y-3">
                            ${Nr(e.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${ad(e.investigadores)}
                            </div>
                        </div>
                    </div>
                </div>

                ${a?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Propuestas o proyectos asociados
                                </h3>

                                <ul class="space-y-3">
                                    ${Nr(e.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${r?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${Nr(e.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${ed(e.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function nd(){const e=new Set(ea.map(t=>t.categoria)),a=ea.filter(t=>t.proyectosAsociados?.length>0).length,r=ea.filter(t=>t.publicacionesClave?.length>0).length;return{total:ea.length,categorias:e.size,conProyectos:a,conPublicaciones:r}}function id(){let e=ea[0]?.id||1;const a=document.createElement("section");a.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=Zc(e),n=nd();a.innerHTML=`
            <div class="mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Líneas de investigación
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Áreas de trabajo científico del grupo, articuladas alrededor del análisis numérico,
                    la matemática aplicada, la optimización, la modelización, el álgebra y la educación matemática.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Líneas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${n.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${n.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${n.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${n.conPublicaciones}
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 items-start">
                <aside class="bg-slate-50 border border-slate-200 rounded-[24px] p-4 shadow-sm">
                    <div class="mb-4 px-1">
                        <h2 class="text-xl font-black text-slate-800">
                            Áreas disponibles
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione una línea para ver su descripción, aplicaciones e investigadores vinculados.
                        </p>
                    </div>

                    <div class="space-y-4">
                        ${ea.map(c=>td(c,c.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${rd(t)}
                </div>
            </div>
        `,a.querySelectorAll("[data-linea-id]").forEach(c=>{c.onclick=()=>{e=parseInt(c.dataset.lineaId),r()}})};return r(),a}function od(){return id()}const Za=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function K(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function sd(e){return Za.find(a=>a.id===e)||Za[0]}function ci(e=[]){return e.map(a=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${K(a)}</span>
        </li>
    `).join("")}function ld(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${K(a)}
        </span>
    `).join("")}function cd(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${K(a)}
        </span>
    `).join("")}function dd(e,a=!1){return`
        <button 
            type="button"
            data-proyecto-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${a?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${K(e.estado)}
                </span>

                <span class="inline-block ${a?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${K(e.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${K(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${a?"text-white/90":"text-slate-500"}">
                ${K(e.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${a?"text-white/90":"text-slate-500"}">
                    ${K(e.institucion)}
                </span>
                <span class="text-xs font-bold ${a?"text-white/90":"text-slate-500"}">
                    · ${K(e.duracion)}
                </span>
            </div>
        </button>
    `}function ud(e){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${K(e.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${K(e.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${K(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${K(e.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${K(e.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${K(e.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${K(e.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${K(e.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${K(e.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${K(e.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${K(e.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${ci(e.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${ci(e.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${cd(e.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${ld(e.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function pd(){let e=Za[0]?.id||1;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=sd(e);a.innerHTML=`
            <div class="mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Posibles propuestas de investigación
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Esta sección presenta posibles propuestas sometidas a FONDOCyT por integrantes del grupo.
                    Su inclusión tiene carácter informativo y no implica aprobación, financiamiento ni ejecución formal.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Posibles propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${Za.length}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Convocatoria
                    </p>
                    <p class="text-xl font-black text-slate-800">
                        FONDOCyT
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Estado
                    </p>
                    <p class="text-xl font-black text-slate-800">
                        Posibles sometidas
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 items-start">
                <aside class="bg-slate-50 border border-slate-200 rounded-[24px] p-4 shadow-sm">
                    <div class="mb-4 px-1">
                        <h2 class="text-xl font-black text-slate-800">
                            Propuestas disponibles
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione una posible propuesta para ver sus detalles principales.
                        </p>
                    </div>

                    <div class="space-y-4">
                        ${Za.map(n=>dd(n,n.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${ud(t)}
                </div>
            </div>
        `,a.querySelectorAll("[data-proyecto-id]").forEach(n=>{n.onclick=()=>{e=parseInt(n.dataset.proyectoId),r()}})};return r(),a}function md(){return pd()}function fd(){return`
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
    `}function bd(){return`
    
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
            ${fd()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function gd(){const e=document.createElement("section");return e.classList.add("w-full","tabletBig:w-7xl"),e.innerHTML=`
    ${bd()}
    `,e}function hd(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",xd)}async function xd(e){e.preventDefault();const a=e.target,r=new FormData(a),t=Object.fromEntries(r.entries()),n=vd(t);if(n.length>0){wd(n);return}await kd(a,t)}function vd(e){const a=[];return e.nombre?.trim()||a.push("El nombre es obligatorio."),e.asunto?.trim()||a.push("El asunto es obligatorio."),e.mensaje?.trim()||a.push("El mensaje es obligatorio."),e.correo?.trim()?yd(e.correo)||a.push("El formato del correo no es válido."):a.push("El correo es obligatorio."),a}function yd(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function wd(e){Ut(e[0],"error")}function Ut(e,a="success"){const r=document.querySelector(".custom-toast");r&&r.remove();const t=document.createElement("div");t.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,a==="success"?t.classList.add("bg-green-600"):t.classList.add("bg-red-600"),t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{t.classList.add("translate-x-full","opacity-0"),setTimeout(()=>t.remove(),300)},3e3)}async function kd(e,a){const r=document.getElementById("submitBtn");r.disabled=!0,r.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)})).ok?(Ut("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),e.reset()):Ut("Hubo un problema al enviar el mensaje.","error")}catch{Ut("Error de conexión. Intenta nuevamente.","error")}r.disabled=!1,r.textContent="Enviar"}function Ed(){const e=gd();return setTimeout(()=>{hd()},0),e}function Cd(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-[#5580C1]">
                    Primer período
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del primer corte
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y las calificaciones
                    correspondientes a 1AC y 2PP. Cada estudiante debe ocupar
                    una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                <i class="bx bx-spreadsheet text-4xl text-[#5580C1]"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-primer-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula, 1AC y 2PP
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia tres columnas desde Excel en este orden:
                    matrícula Banner, acumulado del primer parcial y primer
                    parcial. La matrícula debe tener el formato A00108671.
                    No es necesario incluir encabezados.
                </p>

                <textarea
                    id="banner-primer-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-[#5580C1] focus:ring-2 focus:ring-blue-100"
                    placeholder="A00108671    8    2
A00122336    9    19
A00116736    13    7"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-primer-process"
                        type="button"
                        class="flex-1 rounded-xl bg-[#5580C1] px-5 py-3 font-black text-white transition hover:bg-[#416aa8]"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-primer-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-primer-message"
                    class="mt-4 hidden rounded-xl border px-4 py-3 text-sm font-semibold"
                ></div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-black text-slate-800">
                            Vista previa
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Comprueba los datos antes de descargar los archivos.
                        </p>
                    </div>

                    <span
                        id="banner-primer-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[520px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    1AC
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    2PP
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    Total
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-primer-preview">
                            <tr>
                                <td
                                    colspan="5"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        id="banner-primer-download-1ac"
                        type="button"
                        disabled
                        class="rounded-xl bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Descargar 1AC
                    </button>

                    <button
                        id="banner-primer-download-2pp"
                        type="button"
                        disabled
                        class="rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Descargar 2PP
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p class="text-sm font-black text-blue-900">
                    1AC · Acumulado
                </p>

                <p class="mt-2 text-sm text-blue-800">
                    Debe contener valores entre 0 y 15 puntos.
                </p>
            </div>

            <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p class="text-sm font-black text-emerald-900">
                    2PP · Primer parcial
                </p>

                <p class="mt-2 text-sm text-emerald-800">
                    Debe contener valores entre 0 y 20 puntos.
                </p>
            </div>

            <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p class="text-sm font-black text-amber-900">
                    Total del primer corte
                </p>

                <p class="mt-2 text-sm text-amber-800">
                    La suma de 1AC y 2PP no debe superar 35 puntos.
                </p>
            </div>
        </div>
    `;const a=e.querySelector("#banner-primer-input"),r=e.querySelector("#banner-primer-process"),t=e.querySelector("#banner-primer-clear"),n=e.querySelector("#banner-primer-message"),c=e.querySelector("#banner-primer-preview"),s=e.querySelector("#banner-primer-count"),p=e.querySelector("#banner-primer-download-1ac"),u=e.querySelector("#banner-primer-download-2pp");let l=[];function i(k,E="success"){n.textContent=k,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),E==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function o(){n.textContent="",n.classList.add("hidden")}function d(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function m(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function f(k){const E=String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return E.includes("	")?E.split("	").map(C=>C.trim()).filter(C=>C!==""):E.includes(";")?E.split(";").map(C=>C.trim()).filter(C=>C!==""):E.split(/\s+/).map(C=>C.trim()).filter(C=>C!=="")}function g(k){const E=k.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),C=[],$=[],I=new Set;return E.forEach((A,L)=>{const R=L+1,N=f(A);if(N.length!==3){$.push(`Línea ${R}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const V=d(N[0]),P=Number(m(N[1])),D=Number(m(N[2]));if(!/^A[0-9]{8}$/.test(V)){$.push(`Línea ${R}: la matrícula "${V}" no es válida. Debe tener el formato A00108671.`);return}if(I.has(V)){$.push(`Línea ${R}: la matrícula ${V} está repetida.`);return}if(!Number.isFinite(P)){$.push(`Línea ${R}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(D)){$.push(`Línea ${R}: la calificación 2PP no es numérica.`);return}if(P<0||P>15){$.push(`Línea ${R}: 1AC debe estar entre 0 y 15.`);return}if(D<0||D>20){$.push(`Línea ${R}: 2PP debe estar entre 0 y 20.`);return}const te=P+D;if(te>35){$.push(`Línea ${R}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}I.add(V),C.push({matricula:V,grade1AC:P,grade2PP:D,total:te})}),{records:C,errors:$}}function b(k){return Number.isInteger(k)?String(k):k.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function x(k){return String(k).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(k){if(k.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}c.innerHTML=k.map((E,C)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${C+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${x(E.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${b(E.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${b(E.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${b(E.total)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${k.length} estudiante${k.length===1?"":"s"}`}function v(k,E,C){return[["MATRICULA",C],...k.map(A=>[A.matricula,b(A[E])])].map(A=>A.join(";")).join(`\r
`)}function h(k,E){const $=new Blob(["\uFEFF"+k],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL($),A=document.createElement("a");A.href=I,A.download=E,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(I)},1e3)}function w(){l=[],a.value="",y([]),p.disabled=!0,u.disabled=!0,o(),a.focus()}return r.addEventListener("click",()=>{const k=a.value.trim();if(!k){l=[],y([]),p.disabled=!0,u.disabled=!0,i("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:E,errors:C}=g(k);if(C.length>0){l=[],y([]),p.disabled=!0,u.disabled=!0,i(C.join(" "),"error");return}l=E,y(l),p.disabled=!1,u.disabled=!1,i(`Los datos de ${E.length} estudiante${E.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",w),p.addEventListener("click",()=>{if(l.length===0)return;const k=v(l,"grade1AC","1AC");h(k,"Banner_APEC_Primer_Periodo_1AC.csv")}),u.addEventListener("click",()=>{if(l.length===0)return;const k=v(l,"grade2PP","2PP");h(k,"Banner_APEC_Primer_Periodo_2PP.csv")}),e}function $d(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-emerald-600">
                    Segundo período
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del segundo corte
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y la calificación total
                    correspondiente a 3SP. Cada estudiante debe ocupar una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                <i class="bx bx-book-reader text-4xl text-emerald-600"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-segundo-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula y 3SP
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia dos columnas desde Excel: matrícula Banner y
                    calificación del segundo período. La matrícula debe tener
                    el formato A00108671. No incluyas encabezados.
                </p>

                <textarea
                    id="banner-segundo-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    placeholder="A00108671    28
A00122336    32
A00116736    25"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-segundo-process"
                        type="button"
                        class="flex-1 rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-segundo-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-segundo-message"
                    class="mt-4 hidden rounded-xl border px-4 py-3 text-sm font-semibold"
                ></div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-black text-slate-800">
                            Vista previa
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Comprueba los datos antes de descargar el archivo.
                        </p>
                    </div>

                    <span
                        id="banner-segundo-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[420px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    3SP
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-segundo-preview">
                            <tr>
                                <td
                                    colspan="3"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button
                    id="banner-segundo-download"
                    type="button"
                    disabled
                    class="mt-5 w-full rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Descargar 3SP
                </button>
            </div>
        </div>

        <div class="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p class="font-black text-emerald-900">
                3SP · Segundo Parcial
            </p>

            <p class="mt-2 text-sm leading-relaxed text-emerald-800">
                Esta calificación ya contiene las prácticas acumuladas y el
                segundo parcial. Debe estar entre 0 y 35 puntos.
            </p>
        </div>
    `;const a=e.querySelector("#banner-segundo-input"),r=e.querySelector("#banner-segundo-process"),t=e.querySelector("#banner-segundo-clear"),n=e.querySelector("#banner-segundo-message"),c=e.querySelector("#banner-segundo-preview"),s=e.querySelector("#banner-segundo-count"),p=e.querySelector("#banner-segundo-download");let u=[];function l(h){return String(h).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(h){return String(h).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(h){const w=String(h).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function d(h){return Number.isInteger(h)?String(h):h.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function m(h){return String(h).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(h,w="success"){n.textContent=h,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(h){const w=h.split(/\r?\n/).map($=>$.trim()).filter(Boolean),k=[],E=[],C=new Set;return w.forEach(($,I)=>{const A=I+1,L=o($);if(L.length!==2){E.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const R=l(L[0]),N=Number(i(L[1]));if(!/^A[0-9]{8}$/.test(R)){E.push(`Línea ${A}: la matrícula "${R}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(R)){E.push(`Línea ${A}: la matrícula ${R} está repetida.`);return}if(!Number.isFinite(N)){E.push(`Línea ${A}: la calificación 3SP no es numérica.`);return}if(N<0||N>35){E.push(`Línea ${A}: 3SP debe estar entre 0 y 35.`);return}C.add(R),k.push({matricula:R,grade3SP:N})}),{records:k,errors:E}}function b(h){if(h.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}c.innerHTML=h.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${m(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${d(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${h.length} estudiante${h.length===1?"":"s"}`}function x(h){return[["MATRICULA","3SP"],...h.map(k=>[k.matricula,d(k.grade3SP)])].map(k=>k.join(";")).join(`\r
`)}function y(h,w){const k=new Blob(["\uFEFF"+h],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),C=document.createElement("a");C.href=E,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function v(){u=[],a.value="",b([]),p.disabled=!0,n.textContent="",n.classList.add("hidden"),a.focus()}return r.addEventListener("click",()=>{const h=a.value.trim();if(!h){u=[],b([]),p.disabled=!0,f("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:k}=g(h);if(k.length>0){u=[],b([]),p.disabled=!0,f(k.join(" "),"error");return}u=w,b(w),p.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",v),p.addEventListener("click",()=>{u.length!==0&&y(x(u),"Banner_APEC_Segundo_Periodo_3SP.csv")}),e}function Ad(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-rose-600">
                    Calificación final
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del examen final
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y las calificaciones
                    correspondientes a 4EF. Cada estudiante debe ocupar una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50">
                <i class="bx bx-award text-4xl text-rose-600"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-final-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula y 4EF
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia dos columnas desde Excel: matrícula Banner y
                    calificación del examen final. La matrícula debe tener el
                    formato A00108671. No incluyas encabezados.
                </p>

                <textarea
                    id="banner-final-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100"
                    placeholder="A00108671    24
A00122336    28
A00116736    20"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-final-process"
                        type="button"
                        class="flex-1 rounded-xl bg-rose-600 px-5 py-3 font-black text-white transition hover:bg-rose-700"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-final-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-final-message"
                    class="mt-4 hidden rounded-xl border px-4 py-3 text-sm font-semibold"
                ></div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-black text-slate-800">
                            Vista previa
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Comprueba los datos antes de descargar el archivo.
                        </p>
                    </div>

                    <span
                        id="banner-final-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[420px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    4EF
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-final-preview">
                            <tr>
                                <td
                                    colspan="3"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button
                    id="banner-final-download"
                    type="button"
                    disabled
                    class="mt-5 w-full rounded-xl bg-rose-600 px-5 py-3 font-black text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Descargar 4EF
                </button>
            </div>
        </div>

        <div class="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <p class="font-black text-rose-900">
                4EF · Examen Final
            </p>

            <p class="mt-2 text-sm leading-relaxed text-rose-800">
                La calificación del examen final debe estar entre 0 y
                30 puntos.
            </p>
        </div>
    `;const a=e.querySelector("#banner-final-input"),r=e.querySelector("#banner-final-process"),t=e.querySelector("#banner-final-clear"),n=e.querySelector("#banner-final-message"),c=e.querySelector("#banner-final-preview"),s=e.querySelector("#banner-final-count"),p=e.querySelector("#banner-final-download");let u=[];function l(h){return String(h).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(h){return String(h).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(h){const w=String(h).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function d(h){return Number.isInteger(h)?String(h):h.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function m(h){return String(h).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(h,w="success"){n.textContent=h,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(h){const w=h.split(/\r?\n/).map($=>$.trim()).filter(Boolean),k=[],E=[],C=new Set;return w.forEach(($,I)=>{const A=I+1,L=o($);if(L.length!==2){E.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const R=l(L[0]),N=Number(i(L[1]));if(!/^A[0-9]{8}$/.test(R)){E.push(`Línea ${A}: la matrícula "${R}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(R)){E.push(`Línea ${A}: la matrícula ${R} está repetida.`);return}if(!Number.isFinite(N)){E.push(`Línea ${A}: la calificación 4EF no es numérica.`);return}if(N<0||N>30){E.push(`Línea ${A}: 4EF debe estar entre 0 y 30.`);return}C.add(R),k.push({matricula:R,grade4EF:N})}),{records:k,errors:E}}function b(h){if(h.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}c.innerHTML=h.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${m(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${d(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${h.length} estudiante${h.length===1?"":"s"}`}function x(h){return[["MATRICULA","4EF"],...h.map(k=>[k.matricula,d(k.grade4EF)])].map(k=>k.join(";")).join(`\r
`)}function y(h,w){const k=new Blob(["\uFEFF"+h],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),C=document.createElement("a");C.href=E,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function v(){u=[],a.value="",b([]),p.disabled=!0,n.textContent="",n.classList.add("hidden"),a.focus()}return r.addEventListener("click",()=>{const h=a.value.trim();if(!h){u=[],b([]),p.disabled=!0,f("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:k}=g(h);if(k.length>0){u=[],b([]),p.disabled=!0,f(k.join(" "),"error");return}u=w,b(w),p.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",v),p.addEventListener("click",()=>{u.length!==0&&y(x(u),"Banner_APEC_Examen_Final_4EF.csv")}),e}function Id(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",e.innerHTML=`
        <div id="banner-menu">
            <header class="mx-auto mb-10 max-w-5xl text-center">
                <div
                    class="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#5580C1]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                        aria-hidden="true"
                    >
                        <path d="M3 21h18"></path>
                        <path d="M6 21V8l6-4 6 4v13"></path>
                        <path d="M9 21v-6h6v6"></path>
                        <path d="M9 10h.01"></path>
                        <path d="M15 10h.01"></path>
                    </svg>

                    Universidad APEC · Ellucian Banner
                </div>

                <h1
                    class="text-3xl font-black leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-5xl"
                >
                    Generador de Publicaciones de Calificaciones
                </h1>

                <p
                    class="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg"
                >
                    Selecciona el período académico que deseas preparar.
                    Cada herramienta permite organizar, validar y generar
                    los datos necesarios para la publicación de calificaciones
                    en Banner.
                </p>
            </header>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <!-- Primer período -->
                <article
                    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div class="h-2 bg-[#5580C1]"></div>

                    <div class="flex h-full flex-col p-6 md:p-7">
                        <div class="mb-7 flex items-center justify-between gap-4">
                            <div
                                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#5580C1] ring-1 ring-blue-100 transition duration-300 group-hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-9 w-9"
                                    aria-hidden="true"
                                >
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    <path d="M8 7h8"></path>
                                    <path d="M8 11h6"></path>
                                </svg>
                            </div>

                            <span
                                class="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#5580C1]"
                            >
                                Primer corte
                            </span>
                        </div>

                        <h2 class="text-2xl font-black text-slate-800">
                            Primer período
                        </h2>

                        <p class="mt-3 leading-relaxed text-slate-600">
                            Prepara las calificaciones correspondientes al
                            primer corte académico.
                        </p>

                        <div class="mt-6 space-y-3">
                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-black text-[#5580C1]"
                                    >
                                        1
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            1AC · Acumulado Primer Parcial
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Prácticas y actividades acumuladas.
                                            Valor máximo: 15 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-black text-[#5580C1]"
                                    >
                                        2
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            2PP · Primer Parcial
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Evaluación del primer parcial.
                                            Valor máximo: 20 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            id="open-primer-periodo"
                            type="button"
                            class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5580C1] px-5 py-3.5 font-black text-white shadow-sm transition hover:bg-[#416aa8] focus:outline-none focus:ring-4 focus:ring-blue-100"
                        >
                            Abrir herramienta

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m13 6 6 6-6 6"></path>
                            </svg>
                        </button>
                    </div>
                </article>

                <!-- Segundo período -->
                <article
                    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div class="h-2 bg-emerald-600"></div>

                    <div class="flex h-full flex-col p-6 md:p-7">
                        <div class="mb-7 flex items-center justify-between gap-4">
                            <div
                                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition duration-300 group-hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-9 w-9"
                                    aria-hidden="true"
                                >
                                    <path d="M4 19V9"></path>
                                    <path d="M10 19V5"></path>
                                    <path d="M16 19v-7"></path>
                                    <path d="M22 19H2"></path>
                                    <path d="m4 6 5-3 5 4 6-5"></path>
                                </svg>
                            </div>

                            <span
                                class="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-emerald-700"
                            >
                                Segundo corte
                            </span>
                        </div>

                        <h2 class="text-2xl font-black text-slate-800">
                            Segundo período
                        </h2>

                        <p class="mt-3 leading-relaxed text-slate-600">
                            Prepara la calificación total correspondiente al
                            segundo corte académico.
                        </p>

                        <div class="mt-6">
                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-black text-emerald-700"
                                    >
                                        3
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            3SP · Segundo Parcial
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Incluye las prácticas acumuladas y
                                            la evaluación del segundo parcial.
                                            Valor máximo: 35 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-auto pt-7">
                            <button
                                id="open-segundo-periodo"
                                type="button"
                                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 font-black text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                            >
                                Abrir herramienta

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m13 6 6 6-6 6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </article>

                <!-- Calificación final -->
                <article
                    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div class="h-2 bg-rose-600"></div>

                    <div class="flex h-full flex-col p-6 md:p-7">
                        <div class="mb-7 flex items-center justify-between gap-4">
                            <div
                                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100 transition duration-300 group-hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-9 w-9"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="8" r="5"></circle>
                                    <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"></path>
                                    <path d="m10 8 1.3 1.3L14 6.5"></path>
                                </svg>
                            </div>

                            <span
                                class="rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-rose-700"
                            >
                                Evaluación final
                            </span>
                        </div>

                        <h2 class="text-2xl font-black text-slate-800">
                            Calificación final
                        </h2>

                        <p class="mt-3 leading-relaxed text-slate-600">
                            Prepara las calificaciones correspondientes al
                            examen final de la asignatura.
                        </p>

                        <div class="mt-6">
                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-xs font-black text-rose-700"
                                    >
                                        4
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            4EF · Examen Final
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Evaluación final de la asignatura.
                                            Valor máximo: 30 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-auto pt-7">
                            <button
                                id="open-calificacion-final"
                                type="button"
                                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3.5 font-black text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-100"
                            >
                                Abrir herramienta

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m13 6 6 6-6 6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <aside
                class="mt-8 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50"
            >
                <div class="flex items-start gap-4 p-5 md:p-6">
                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>
                    </div>

                    <div>
                        <p class="font-black text-amber-900">
                            Distribución de la calificación
                        </p>

                        <p class="mt-1 text-sm leading-relaxed text-amber-800">
                            Primer período: 35 puntos. Segundo período:
                            35 puntos. Examen final: 30 puntos.
                            Total general: 100 puntos.
                        </p>

                        <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                            <div
                                class="rounded-xl border border-amber-200 bg-white/60 px-4 py-3"
                            >
                                <p class="text-xs font-bold uppercase tracking-wide text-amber-700">
                                    Primer período
                                </p>

                                <p class="mt-1 text-lg font-black text-amber-950">
                                    35 puntos
                                </p>
                            </div>

                            <div
                                class="rounded-xl border border-amber-200 bg-white/60 px-4 py-3"
                            >
                                <p class="text-xs font-bold uppercase tracking-wide text-amber-700">
                                    Segundo período
                                </p>

                                <p class="mt-1 text-lg font-black text-amber-950">
                                    35 puntos
                                </p>
                            </div>

                            <div
                                class="rounded-xl border border-amber-200 bg-white/60 px-4 py-3"
                            >
                                <p class="text-xs font-bold uppercase tracking-wide text-amber-700">
                                    Examen final
                                </p>

                                <p class="mt-1 text-lg font-black text-amber-950">
                                    30 puntos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>

        <div id="banner-tool-view" class="hidden">
            <div
                class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
                <button
                    id="banner-back"
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path d="M19 12H5"></path>
                        <path d="m11 18-6-6 6-6"></path>
                    </svg>

                    Volver a los períodos
                </button>

                <p class="text-sm font-semibold text-slate-500">
                    Universidad APEC · Publicación de calificaciones
                </p>
            </div>

            <div id="banner-tool-content"></div>
        </div>
    `;const a=e.querySelector("#banner-menu"),r=e.querySelector("#banner-tool-view"),t=e.querySelector("#banner-tool-content"),n=e.querySelector("#open-primer-periodo"),c=e.querySelector("#open-segundo-periodo"),s=e.querySelector("#open-calificacion-final"),p=e.querySelector("#banner-back");function u(){a.classList.add("hidden"),r.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}function l(d){console.error("No fue posible abrir la herramienta de Banner:",d),t.innerHTML=`
            <div
                class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800"
                role="alert"
            >
                <div class="flex items-start gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mt-0.5 h-6 w-6 shrink-0"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                    </svg>

                    <div>
                        <p class="font-black">
                            No fue posible abrir esta herramienta
                        </p>

                        <p class="mt-2 text-sm leading-relaxed">
                            Revisa que el componente correspondiente esté
                            correctamente creado y exportado.
                        </p>
                    </div>
                </div>
            </div>
        `,u()}function i(d){t.innerHTML="";try{if(typeof d!="function")throw new TypeError("El componente seleccionado no es una función válida.");const m=d();if(!(m instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");t.appendChild(m),u()}catch(m){l(m)}}function o(){t.replaceChildren(),r.classList.add("hidden"),a.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}return n.addEventListener("click",()=>{i(Cd)}),c.addEventListener("click",()=>{i($d)}),s.addEventListener("click",()=>{i(Ad)}),p.addEventListener("click",o),e}function Pd(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8",e.innerHTML=`
        <div class="mb-8 text-center">
            <p class="mb-2 text-sm font-bold uppercase tracking-wide text-sky-600">
                Grupo de Investigación Kernel
            </p>

            <h1 class="text-3xl font-black leading-tight text-slate-800 md:text-4xl">
                Herramientas Académicas
            </h1>

            <p class="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base">
                Utilidades digitales para facilitar tareas docentes, académicas
                y administrativas.
            </p>
        </div>

        <div class="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
                id="tab-xmera"
                type="button"
                class="rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition"
            >
                ITLA · Xmera
            </button>

            <button
                id="tab-banner"
                type="button"
                class="rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100"
            >
                APEC · Banner
            </button>
        </div>

        <div id="panel-xmera">
            <div class="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl md:p-8">
                <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-bold uppercase tracking-wide text-sky-600">
                            ITLA · Xmera
                        </p>

                        <h2 class="text-2xl font-black text-slate-800 md:text-3xl">
                            Generador de calificaciones para Xmera
                        </h2>

                        <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                            Pega las matrículas y calificaciones desde Excel o
                            escríbelas manualmente. Cada estudiante debe ocupar
                            una línea.
                        </p>
                    </div>

                    <div class="shrink-0">
                        <i class="bx bx-code-alt text-6xl text-sky-600"></i>
                    </div>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <label
                            for="xmera-input"
                            class="mb-2 block text-sm font-black text-slate-800"
                        >
                            Matrículas y calificaciones
                        </label>

                        <p class="mb-4 text-sm text-slate-500">
                            Ejemplo: matrícula, primera nota y segunda nota.
                            Puedes separar los valores con espacios,
                            tabulaciones, comas o punto y coma.
                        </p>

                        <textarea
                            id="xmera-input"
                            rows="14"
                            spellcheck="false"
                            class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            placeholder="20250893    18    4
20212267    13    5
202010828    19
20252000     0"
                        ></textarea>

                        <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                            <button
                                id="xmera-generate"
                                type="button"
                                class="flex-1 rounded-xl bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700"
                            >
                                Generar código
                            </button>

                            <button
                                id="xmera-clear"
                                type="button"
                                class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
                            >
                                Limpiar
                            </button>
                        </div>

                        <div
                            id="xmera-message"
                            class="mt-4 hidden rounded-xl px-4 py-3 text-sm font-semibold"
                        ></div>
                    </div>

                    <div class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="text-sm font-black text-white">
                                    Código generado
                                </p>

                                <p class="mt-1 text-xs text-slate-400">
                                    Copia este código y pégalo en Xmera.
                                </p>
                            </div>

                            <button
                                id="xmera-copy"
                                type="button"
                                disabled
                                class="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Copiar código
                            </button>
                        </div>

                        <pre
                            id="xmera-output"
                            class="min-h-[350px] max-h-[520px] overflow-auto whitespace-pre-wrap break-words rounded-xl bg-black/30 p-4 font-mono text-sm text-emerald-300"
                        >var data_todo = {
};</pre>
                    </div>
                </div>

                <div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <p class="font-black text-amber-900">
                        Formato admitido
                    </p>

                    <p class="mt-2 text-sm text-amber-800">
                        Cada línea debe comenzar con una matrícula y contener al
                        menos una calificación numérica. Las filas vacías serán
                        ignoradas.
                    </p>
                </div>
            </div>
        </div>

        <div id="panel-banner" class="hidden"></div>
    `;const a=e.querySelector("#xmera-input"),r=e.querySelector("#xmera-output"),t=e.querySelector("#xmera-generate"),n=e.querySelector("#xmera-copy"),c=e.querySelector("#xmera-clear"),s=e.querySelector("#xmera-message"),p=e.querySelector("#tab-xmera"),u=e.querySelector("#tab-banner"),l=e.querySelector("#panel-xmera"),i=e.querySelector("#panel-banner");function o(){r.textContent=`var data_todo = {
};`,n.disabled=!0}function d(b,x="success"){s.textContent=b,s.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),s.classList.add("border"),x==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function m(b){const x=b.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),y=[],v=[],h=new Set;return x.forEach((w,k)=>{const E=w.split(/[\t,; ]+/).map(L=>L.trim()).filter(Boolean),C=k+1,$=E[0],I=E.slice(1);if(!$){v.push(`Línea ${C}: falta la matrícula.`);return}if(!/^\d+$/.test($)){v.push(`Línea ${C}: la matrícula "${$}" no es válida.`);return}if(h.has($)){v.push(`Línea ${C}: la matrícula ${$} está repetida.`);return}if(I.length===0){v.push(`Línea ${C}: falta al menos una calificación.`);return}const A=I.map(L=>Number(L));if(A.some(L=>!Number.isFinite(L))){v.push(`Línea ${C}: existe una calificación no numérica.`);return}h.add($),y.push({matricula:$,grades:A})}),{records:y,errors:v}}function f(b){return`var data_todo = {
${b.map(({matricula:y,grades:v})=>`  "${y}":[${v.join(",")}]`).join(`,
`)}
};

var contenedor = document.querySelector(
  ".standardTable, form.form-table-special, table"
);

if (!contenedor) {
  console.log("No se encontró la tabla de calificaciones.");
} else {
  var filas = contenedor.querySelectorAll("tbody tr");

  if (filas.length === 0) {
    filas = contenedor.querySelectorAll("tr");
  }

  function asignarValor(input, valor) {
    var descriptor = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(input),
      "value"
    );

    if (descriptor && descriptor.set) {
      descriptor.set.call(input, valor);
    } else {
      input.value = valor;
    }

    input.dispatchEvent(
      new Event("input", { bubbles: true })
    );

    input.dispatchEvent(
      new Event("change", { bubbles: true })
    );

    input.dispatchEvent(
      new Event("blur", { bubbles: true })
    );
  }

  filas.forEach(function(fila) {
    try {
      var celdas = fila.querySelectorAll("td");

      if (celdas.length === 0) {
        return;
      }

      var matricula = celdas[0].innerText
        .trim()
        .replace(/[^0-9]/g, "");

      if (!matricula) {
        return;
      }

      if (
        Object.prototype.hasOwnProperty.call(
          data_todo,
          matricula
        )
      ) {
        var notas = data_todo[matricula];

        var inputs = fila.querySelectorAll(
          "input[type='number'], input[type='text']"
        );

        for (
          var i = 0;
          i < notas.length && i < inputs.length;
          i++
        ) {
          asignarValor(inputs[i], notas[i]);
        }

        console.log(
          matricula + " aplicada correctamente"
        );
      } else {
        console.log(
          matricula + " sin notas"
        );
      }
    } catch (error) {
      console.log(
        "Problema con una fila:",
        error
      );
    }
  });

  console.log("Proceso de asignación finalizado.");
}`}function g(b){const x=b==="xmera";l.classList.toggle("hidden",!x),i.classList.toggle("hidden",x),p.className=x?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",u.className=x?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}t.addEventListener("click",()=>{const b=a.value.trim();if(!b){o(),d("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:x,errors:y}=m(b);if(y.length>0){o(),d(y.join(" "),"error");return}r.textContent=f(x),n.disabled=!1,d(`Código generado correctamente para ${x.length} estudiante${x.length===1?"":"s"}.`)}),n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.textContent),d("El código fue copiado al portapapeles.")}catch(b){console.error("No fue posible copiar el código:",b),d("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),c.addEventListener("click",()=>{a.value="",o(),s.textContent="",s.classList.add("hidden"),a.focus()});try{const b=Id();if(b instanceof HTMLElement)i.appendChild(b);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(b){console.error("No fue posible cargar el módulo Banner:",b),i.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return p.addEventListener("click",()=>{g("xmera")}),u.addEventListener("click",()=>{g("banner")}),g("xmera"),e}function Ld(){return Pd()}const Rd=()=>{};var di={};const ts=function(e){const a=[];let r=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);n<128?a[r++]=n:n<2048?(a[r++]=n>>6|192,a[r++]=n&63|128):(n&64512)===55296&&t+1<e.length&&(e.charCodeAt(t+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++t)&1023),a[r++]=n>>18|240,a[r++]=n>>12&63|128,a[r++]=n>>6&63|128,a[r++]=n&63|128):(a[r++]=n>>12|224,a[r++]=n>>6&63|128,a[r++]=n&63|128)}return a},Md=function(e){const a=[];let r=0,t=0;for(;r<e.length;){const n=e[r++];if(n<128)a[t++]=String.fromCharCode(n);else if(n>191&&n<224){const c=e[r++];a[t++]=String.fromCharCode((n&31)<<6|c&63)}else if(n>239&&n<365){const c=e[r++],s=e[r++],p=e[r++],u=((n&7)<<18|(c&63)<<12|(s&63)<<6|p&63)-65536;a[t++]=String.fromCharCode(55296+(u>>10)),a[t++]=String.fromCharCode(56320+(u&1023))}else{const c=e[r++],s=e[r++];a[t++]=String.fromCharCode((n&15)<<12|(c&63)<<6|s&63)}}return a.join("")},rs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,a){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=a?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let n=0;n<e.length;n+=3){const c=e[n],s=n+1<e.length,p=s?e[n+1]:0,u=n+2<e.length,l=u?e[n+2]:0,i=c>>2,o=(c&3)<<4|p>>4;let d=(p&15)<<2|l>>6,m=l&63;u||(m=64,s||(d=64)),t.push(r[i],r[o],r[d],r[m])}return t.join("")},encodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?btoa(e):this.encodeByteArray(ts(e),a)},decodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?atob(e):Md(this.decodeStringToByteArray(e,a))},decodeStringToByteArray(e,a){this.init_();const r=a?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let n=0;n<e.length;){const c=r[e.charAt(n++)],p=n<e.length?r[e.charAt(n)]:0;++n;const l=n<e.length?r[e.charAt(n)]:64;++n;const o=n<e.length?r[e.charAt(n)]:64;if(++n,c==null||p==null||l==null||o==null)throw new Td;const d=c<<2|p>>4;if(t.push(d),l!==64){const m=p<<4&240|l>>2;if(t.push(m),o!==64){const f=l<<6&192|o;t.push(f)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nd=function(e){const a=ts(e);return rs.encodeByteArray(a,!0)},ns=function(e){return Nd(e).replace(/\./g,"")},is=function(e){try{return rs.decodeString(e,!0)}catch(a){console.error("base64Decode failed: ",a)}return null};function Sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const zd=()=>Sd().__FIREBASE_DEFAULTS__,_d=()=>{if(typeof process>"u"||typeof di>"u")return;const e=di.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Dd=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const a=e&&is(e[1]);return a&&JSON.parse(a)},Tn=()=>{try{return Rd()||zd()||_d()||Dd()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},qd=e=>Tn()?.emulatorHosts?.[e],os=()=>Tn()?.config,ss=e=>Tn()?.[`_${e}`];class ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,r)=>{this.resolve=a,this.reject=r})}wrapCallback(a){return(r,t)=>{r?this.reject(r):this.resolve(t),typeof a=="function"&&(this.promise.catch(()=>{}),a.length===1?a(r):a(r,t))}}}function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Fd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ud(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vd(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Bd(){try{return typeof indexedDB=="object"}catch{return!1}}function Gd(){return new Promise((e,a)=>{try{let r=!0;const t="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(t);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(t),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{a(n.error?.message||"")}}catch(r){a(r)}})}const Hd="FirebaseError";class oa extends Error{constructor(a,r,t){super(r),this.code=a,this.customData=t,this.name=Hd,Object.setPrototypeOf(this,oa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dt.prototype.create)}}class dt{constructor(a,r,t){this.service=a,this.serviceName=r,this.errors=t}create(a,...r){const t=r[0]||{},n=`${this.service}/${a}`,c=this.errors[a],s=c?Wd(c,t):"Error",p=`${this.serviceName}: ${s} (${n}).`;return new oa(n,p,t)}}function Wd(e,a){return e.replace(Kd,(r,t)=>{const n=a[t];return n!=null?String(n):`<${t}?>`})}const Kd=/\{\$([^}]+)}/g;function Yd(e){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a))return!1;return!0}function Ta(e,a){if(e===a)return!0;const r=Object.keys(e),t=Object.keys(a);for(const n of r){if(!t.includes(n))return!1;const c=e[n],s=a[n];if(ui(c)&&ui(s)){if(!Ta(c,s))return!1}else if(c!==s)return!1}for(const n of t)if(!r.includes(n))return!1;return!0}function ui(e){return e!==null&&typeof e=="object"}function ut(e){const a=[];for(const[r,t]of Object.entries(e))Array.isArray(t)?t.forEach(n=>{a.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):a.push(encodeURIComponent(r)+"="+encodeURIComponent(t));return a.length?"&"+a.join("&"):""}function Qa(e){const a={};return e.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,c]=t.split("=");a[decodeURIComponent(n)]=decodeURIComponent(c)}}),a}function Xa(e){const a=e.indexOf("?");if(!a)return"";const r=e.indexOf("#",a);return e.substring(a,r>0?r:void 0)}function Jd(e,a){const r=new Qd(e,a);return r.subscribe.bind(r)}class Qd{constructor(a,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{a(this)}).catch(t=>{this.error(t)})}next(a){this.forEachObserver(r=>{r.next(a)})}error(a){this.forEachObserver(r=>{r.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,r,t){let n;if(a===void 0&&r===void 0&&t===void 0)throw new Error("Missing Observer.");Xd(a,["next","error","complete"])?n=a:n={next:a,error:r,complete:t},n.next===void 0&&(n.next=Sr),n.error===void 0&&(n.error=Sr),n.complete===void 0&&(n.complete=Sr);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),c}unsubscribeOne(a){this.observers===void 0||this.observers[a]===void 0||(delete this.observers[a],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,a)}sendOne(a,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[a]!==void 0)try{r(this.observers[a])}catch(t){typeof console<"u"&&console.error&&console.error(t)}})}close(a){this.finalized||(this.finalized=!0,a!==void 0&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xd(e,a){if(typeof e!="object"||e===null)return!1;for(const r of a)if(r in e&&typeof e[r]=="function")return!0;return!1}function Sr(){}function Ne(e){return e&&e._delegate?e._delegate:e}function Nn(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zd(e){return(await fetch(e,{credentials:"include"})).ok}class Na{constructor(a,r,t){this.name=a,this.instanceFactory=r,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}const ma="[DEFAULT]";class eu{constructor(a,r){this.name=a,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){const r=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(r)){const t=new ls;if(this.instancesDeferred.set(r,t),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&t.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(a){const r=this.normalizeInstanceIdentifier(a?.identifier),t=a?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(t)return null;throw n}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,!!this.shouldAutoInitialize()){if(tu(a))try{this.getOrInitializeService({instanceIdentifier:ma})}catch{}for(const[r,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const c=this.getOrInitializeService({instanceIdentifier:n});t.resolve(c)}catch{}}}}clearInstance(a=ma){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){const a=Array.from(this.instances.values());await Promise.all([...a.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...a.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(a=ma){return this.instances.has(a)}getOptions(a=ma){return this.instancesOptions.get(a)||{}}initialize(a={}){const{options:r={}}=a,t=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:r});for(const[c,s]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);t===p&&s.resolve(n)}return n}onInit(a,r){const t=this.normalizeInstanceIdentifier(r),n=this.onInitCallbacks.get(t)??new Set;n.add(a),this.onInitCallbacks.set(t,n);const c=this.instances.get(t);return c&&a(c,t),()=>{n.delete(a)}}invokeOnInitCallbacks(a,r){const t=this.onInitCallbacks.get(r);if(t)for(const n of t)try{n(a,r)}catch{}}getOrInitializeService({instanceIdentifier:a,options:r={}}){let t=this.instances.get(a);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:au(a),options:r}),this.instances.set(a,t),this.instancesOptions.set(a,r),this.invokeOnInitCallbacks(t,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,t)}catch{}return t||null}normalizeInstanceIdentifier(a=ma){return this.component?this.component.multipleInstances?a:ma:a}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function au(e){return e===ma?void 0:e}function tu(e){return e.instantiationMode==="EAGER"}class ru{constructor(a){this.name=a,this.providers=new Map}addComponent(a){const r=this.getProvider(a.name);if(r.isComponentSet())throw new Error(`Component ${a.name} has already been registered with ${this.name}`);r.setComponent(a)}addOrOverwriteComponent(a){this.getProvider(a.name).isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);const r=new eu(a,this);return this.providers.set(a,r),r}getProviders(){return Array.from(this.providers.values())}}var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const nu={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},iu=j.INFO,ou={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},su=(e,a,...r)=>{if(a<e.logLevel)return;const t=new Date().toISOString(),n=ou[a];if(n)console[n](`[${t}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${a})`)};class cs{constructor(a){this.name=a,this._logLevel=iu,this._logHandler=su,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in j))throw new TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel=typeof a=="string"?nu[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if(typeof a!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...a),this._logHandler(this,j.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...a),this._logHandler(this,j.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,j.INFO,...a),this._logHandler(this,j.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,j.WARN,...a),this._logHandler(this,j.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...a),this._logHandler(this,j.ERROR,...a)}}const lu=(e,a)=>a.some(r=>e instanceof r);let pi,mi;function cu(){return pi||(pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function du(){return mi||(mi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ds=new WeakMap,mn=new WeakMap,us=new WeakMap,zr=new WeakMap,Sn=new WeakMap;function uu(e){const a=new Promise((r,t)=>{const n=()=>{e.removeEventListener("success",c),e.removeEventListener("error",s)},c=()=>{r(aa(e.result)),n()},s=()=>{t(e.error),n()};e.addEventListener("success",c),e.addEventListener("error",s)});return a.then(r=>{r instanceof IDBCursor&&ds.set(r,e)}).catch(()=>{}),Sn.set(a,e),a}function pu(e){if(mn.has(e))return;const a=new Promise((r,t)=>{const n=()=>{e.removeEventListener("complete",c),e.removeEventListener("error",s),e.removeEventListener("abort",s)},c=()=>{r(),n()},s=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",c),e.addEventListener("error",s),e.addEventListener("abort",s)});mn.set(e,a)}let fn={get(e,a,r){if(e instanceof IDBTransaction){if(a==="done")return mn.get(e);if(a==="objectStoreNames")return e.objectStoreNames||us.get(e);if(a==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return aa(e[a])},set(e,a,r){return e[a]=r,!0},has(e,a){return e instanceof IDBTransaction&&(a==="done"||a==="store")?!0:a in e}};function mu(e){fn=e(fn)}function fu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(a,...r){const t=e.call(_r(this),a,...r);return us.set(t,a.sort?a.sort():[a]),aa(t)}:du().includes(e)?function(...a){return e.apply(_r(this),a),aa(ds.get(this))}:function(...a){return aa(e.apply(_r(this),a))}}function bu(e){return typeof e=="function"?fu(e):(e instanceof IDBTransaction&&pu(e),lu(e,cu())?new Proxy(e,fn):e)}function aa(e){if(e instanceof IDBRequest)return uu(e);if(zr.has(e))return zr.get(e);const a=bu(e);return a!==e&&(zr.set(e,a),Sn.set(a,e)),a}const _r=e=>Sn.get(e);function gu(e,a,{blocked:r,upgrade:t,blocking:n,terminated:c}={}){const s=indexedDB.open(e,a),p=aa(s);return t&&s.addEventListener("upgradeneeded",u=>{t(aa(s.result),u.oldVersion,u.newVersion,aa(s.transaction),u)}),r&&s.addEventListener("blocked",u=>r(u.oldVersion,u.newVersion,u)),p.then(u=>{c&&u.addEventListener("close",()=>c()),n&&u.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),p}const hu=["get","getKey","getAll","getAllKeys","count"],xu=["put","add","delete","clear"],Dr=new Map;function fi(e,a){if(!(e instanceof IDBDatabase&&!(a in e)&&typeof a=="string"))return;if(Dr.get(a))return Dr.get(a);const r=a.replace(/FromIndex$/,""),t=a!==r,n=xu.includes(r);if(!(r in(t?IDBIndex:IDBObjectStore).prototype)||!(n||hu.includes(r)))return;const c=async function(s,...p){const u=this.transaction(s,n?"readwrite":"readonly");let l=u.store;return t&&(l=l.index(p.shift())),(await Promise.all([l[r](...p),n&&u.done]))[0]};return Dr.set(a,c),c}mu(e=>({...e,get:(a,r,t)=>fi(a,r)||e.get(a,r,t),has:(a,r)=>!!fi(a,r)||e.has(a,r)}));class vu{constructor(a){this.container=a}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(yu(r)){const t=r.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(r=>r).join(" ")}}function yu(e){return e.getComponent()?.type==="VERSION"}const bn="@firebase/app",bi="0.15.1";const je=new cs("@firebase/app"),wu="@firebase/app-compat",ku="@firebase/analytics-compat",Eu="@firebase/analytics",Cu="@firebase/app-check-compat",$u="@firebase/app-check",Au="@firebase/auth",Iu="@firebase/auth-compat",Pu="@firebase/database",Lu="@firebase/data-connect",Ru="@firebase/database-compat",Mu="@firebase/functions",Tu="@firebase/functions-compat",Nu="@firebase/installations",Su="@firebase/installations-compat",zu="@firebase/messaging",_u="@firebase/messaging-compat",Du="@firebase/performance",qu="@firebase/performance-compat",Ou="@firebase/remote-config",Fu="@firebase/remote-config-compat",Uu="@firebase/storage",ju="@firebase/storage-compat",Vu="@firebase/firestore",Bu="@firebase/ai",Gu="@firebase/firestore-compat",Hu="firebase",Wu="12.16.0";const gn="[DEFAULT]",Ku={[bn]:"fire-core",[wu]:"fire-core-compat",[Eu]:"fire-analytics",[ku]:"fire-analytics-compat",[$u]:"fire-app-check",[Cu]:"fire-app-check-compat",[Au]:"fire-auth",[Iu]:"fire-auth-compat",[Pu]:"fire-rtdb",[Lu]:"fire-data-connect",[Ru]:"fire-rtdb-compat",[Mu]:"fire-fn",[Tu]:"fire-fn-compat",[Nu]:"fire-iid",[Su]:"fire-iid-compat",[zu]:"fire-fcm",[_u]:"fire-fcm-compat",[Du]:"fire-perf",[qu]:"fire-perf-compat",[Ou]:"fire-rc",[Fu]:"fire-rc-compat",[Uu]:"fire-gcs",[ju]:"fire-gcs-compat",[Vu]:"fire-fst",[Gu]:"fire-fst-compat",[Bu]:"fire-vertex","fire-js":"fire-js",[Hu]:"fire-js-all"};const Yt=new Map,Yu=new Map,hn=new Map;function gi(e,a){try{e.container.addComponent(a)}catch(r){je.debug(`Component ${a.name} failed to register with FirebaseApp ${e.name}`,r)}}function it(e){const a=e.name;if(hn.has(a))return je.debug(`There were multiple attempts to register component ${a}.`),!1;hn.set(a,e);for(const r of Yt.values())gi(r,e);for(const r of Yu.values())gi(r,e);return!0}function ps(e,a){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(a)}function Pe(e){return e==null?!1:e.settings!==void 0}const Ju={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ta=new dt("app","Firebase",Ju);class Qu{constructor(a,r,t){this._isDeleted=!1,this._options={...a},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new Na("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw ta.create("app-deleted",{appName:this._name})}}const pt=Wu;function ms(e,a={}){let r=e;typeof a!="object"&&(a={name:a});const t={name:gn,automaticDataCollectionEnabled:!0,...a},n=t.name;if(typeof n!="string"||!n)throw ta.create("bad-app-name",{appName:String(n)});if(r||(r=os()),!r)throw ta.create("no-options");const c=Yt.get(n);if(c){if(Ta(r,c.options)&&Ta(t,c.config))return c;throw ta.create("duplicate-app",{appName:n})}const s=new ru(n);for(const u of hn.values())s.addComponent(u);const p=new Qu(r,t,s);return Yt.set(n,p),p}function Xu(e=gn){const a=Yt.get(e);if(!a&&e===gn&&os())return ms();if(!a)throw ta.create("no-app",{appName:e});return a}function Ia(e,a,r){let t=Ku[e]??e;r&&(t+=`-${r}`);const n=t.match(/\s|\//),c=a.match(/\s|\//);if(n||c){const s=[`Unable to register library "${t}" with version "${a}":`];n&&s.push(`library name "${t}" contains illegal characters (whitespace or "/")`),n&&c&&s.push("and"),c&&s.push(`version name "${a}" contains illegal characters (whitespace or "/")`),je.warn(s.join(" "));return}it(new Na(`${t}-version`,()=>({library:t,version:a}),"VERSION"))}const Zu="firebase-heartbeat-database",ep=1,ot="firebase-heartbeat-store";let qr=null;function fs(){return qr||(qr=gu(Zu,ep,{upgrade:(e,a)=>{switch(a){case 0:try{e.createObjectStore(ot)}catch(r){console.warn(r)}}}}).catch(e=>{throw ta.create("idb-open",{originalErrorMessage:e.message})})),qr}async function ap(e){try{const r=(await fs()).transaction(ot),t=await r.objectStore(ot).get(bs(e));return await r.done,t}catch(a){if(a instanceof oa)je.warn(a.message);else{const r=ta.create("idb-get",{originalErrorMessage:a?.message});je.warn(r.message)}}}async function hi(e,a){try{const t=(await fs()).transaction(ot,"readwrite");await t.objectStore(ot).put(a,bs(e)),await t.done}catch(r){if(r instanceof oa)je.warn(r.message);else{const t=ta.create("idb-set",{originalErrorMessage:r?.message});je.warn(t.message)}}}function bs(e){return`${e.name}!${e.options.appId}`}const tp=1024,rp=30;class np{constructor(a){this.container=a,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new op(r),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=xi();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(n=>n.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:r}),this._heartbeatsCache.heartbeats.length>rp){const n=sp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(n,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){je.warn(a)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=xi(),{heartbeatsToSend:r,unsentEntries:t}=ip(this._heartbeatsCache.heartbeats),n=ns(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(a){return je.warn(a),""}}}function xi(){return new Date().toISOString().substring(0,10)}function ip(e,a=tp){const r=[];let t=e.slice();for(const n of e){const c=r.find(s=>s.agent===n.agent);if(c){if(c.dates.push(n.date),vi(r)>a){c.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),vi(r)>a){r.pop();break}t=t.slice(1)}return{heartbeatsToSend:r,unsentEntries:t}}class op{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bd()?Gd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await ap(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(a){if(await this._canUseIndexedDBPromise){const t=await this.read();return hi(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:a.heartbeats})}else return}async add(a){if(await this._canUseIndexedDBPromise){const t=await this.read();return hi(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...a.heartbeats]})}else return}}function vi(e){return ns(JSON.stringify({version:2,heartbeats:e})).length}function sp(e){if(e.length===0)return-1;let a=0,r=e[0].date;for(let t=1;t<e.length;t++)e[t].date<r&&(r=e[t].date,a=t);return a}function lp(e){it(new Na("platform-logger",a=>new vu(a),"PRIVATE")),it(new Na("heartbeat",a=>new np(a),"PRIVATE")),Ia(bn,bi,e),Ia(bn,bi,"esm2020"),Ia("fire-js","")}lp("");var cp="firebase",dp="12.16.0";Ia(cp,dp,"app");function gs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const up=gs,hs=new dt("auth","Firebase",gs());const Jt=new cs("@firebase/auth");function pp(e,...a){Jt.logLevel<=j.WARN&&Jt.warn(`Auth (${pt}): ${e}`,...a)}function jt(e,...a){Jt.logLevel<=j.ERROR&&Jt.error(`Auth (${pt}): ${e}`,...a)}function ke(e,...a){throw zn(e,...a)}function Le(e,...a){return zn(e,...a)}function xs(e,a,r){const t={...up(),[a]:r};return new dt("auth","Firebase",t).create(a,{appName:e.name})}function ra(e){return xs(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zn(e,...a){if(typeof e!="string"){const r=a[0],t=[...a.slice(1)];return t[0]&&(t[0].appName=e.name),e._errorFactory.create(r,...t)}return hs.create(e,...a)}function M(e,a,...r){if(!e)throw zn(a,...r)}function Oe(e){const a="INTERNAL ASSERTION FAILED: "+e;throw jt(a),new Error(a)}function Ve(e,a){e||Oe(a)}function xn(){return typeof self<"u"&&self.location?.href||""}function mp(){return yi()==="http:"||yi()==="https:"}function yi(){return typeof self<"u"&&self.location?.protocol||null}function fp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mp()||Ud()||"connection"in navigator)?navigator.onLine:!0}function bp(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}class mt{constructor(a,r){this.shortDelay=a,this.longDelay=r,Ve(r>a,"Short delay should be less than long delay!"),this.isMobile=Od()||jd()}get(){return fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function _n(e,a){Ve(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return a?`${r}${a.startsWith("/")?a.slice(1):a}`:r}class vs{static initialize(a,r,t){this.fetchImpl=a,r&&(this.headersImpl=r),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const gp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const hp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xp=new mt(3e4,6e4);function xa(e,a){return e.tenantId&&!a.tenantId?{...a,tenantId:e.tenantId}:a}async function sa(e,a,r,t,n={}){return ys(e,n,async()=>{let c={},s={};t&&(a==="GET"?s=t:c={body:JSON.stringify(t)});const p=ut({...s,key:e.config.apiKey}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const l={method:a,headers:u,...c};return Fd()||(l.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&Nn(e.emulatorConfig.host)&&(l.credentials="include"),vs.fetch()(await ws(e,e.config.apiHost,r,p),l)})}async function ys(e,a,r){e._canInitEmulator=!1;const t={...gp,...a};try{const n=new yp(e),c=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const s=await c.json();if("needConfirmation"in s)throw vt(e,"account-exists-with-different-credential",s);if(c.ok&&!("errorMessage"in s))return s;{const p=c.ok?s.errorMessage:s.error.message,[u,l]=p.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vt(e,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw vt(e,"email-already-in-use",s);if(u==="USER_DISABLED")throw vt(e,"user-disabled",s);const i=t[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xs(e,i,l);ke(e,i)}}catch(n){if(n instanceof oa)throw n;ke(e,"network-request-failed",{message:String(n)})}}async function fr(e,a,r,t,n={}){const c=await sa(e,a,r,t,n);return"mfaPendingCredential"in c&&ke(e,"multi-factor-auth-required",{_serverResponse:c}),c}async function ws(e,a,r,t){const n=`${a}${r}?${t}`,c=e,s=c.config.emulator?_n(e.config,n):`${e.config.apiScheme}://${n}`;return hp.includes(r)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(s).toString():s}function vp(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((r,t)=>{this.timer=setTimeout(()=>t(Le(this.auth,"network-request-failed")),xp.get())})}}function vt(e,a,r){const t={appName:e.name};r.email&&(t.email=r.email),r.phoneNumber&&(t.phoneNumber=r.phoneNumber);const n=Le(e,a,t);return n.customData._tokenResponse=r,n}function wi(e){return e!==void 0&&e.enterprise!==void 0}class wp{constructor(a){if(this.siteKey="",this.recaptchaEnforcementState=[],a.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=a.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=a.recaptchaEnforcementState}getProviderEnforcementState(a){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===a)return vp(r.enforcementState);return null}isProviderEnabled(a){return this.getProviderEnforcementState(a)==="ENFORCE"||this.getProviderEnforcementState(a)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kp(e,a){return sa(e,"GET","/v2/recaptchaConfig",xa(e,a))}async function Ep(e,a){return sa(e,"POST","/v1/accounts:delete",a)}async function Qt(e,a){return sa(e,"POST","/v1/accounts:lookup",a)}function et(e){if(e)try{const a=new Date(Number(e));if(!isNaN(a.getTime()))return a.toUTCString()}catch{}}async function Cp(e,a=!1){const r=Ne(e),t=await r.getIdToken(a),n=Dn(t);M(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const c=typeof n.firebase=="object"?n.firebase:void 0,s=c?.sign_in_provider;return{claims:n,token:t,authTime:et(Or(n.auth_time)),issuedAtTime:et(Or(n.iat)),expirationTime:et(Or(n.exp)),signInProvider:s||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Or(e){return Number(e)*1e3}function Dn(e){const[a,r,t]=e.split(".");if(a===void 0||r===void 0||t===void 0)return jt("JWT malformed, contained fewer than 3 sections"),null;try{const n=is(r);return n?JSON.parse(n):(jt("Failed to decode base64 JWT payload"),null)}catch(n){return jt("Caught error parsing JWT payload as JSON",n?.toString()),null}}function ki(e){const a=Dn(e);return M(a,"internal-error"),M(typeof a.exp<"u","internal-error"),M(typeof a.iat<"u","internal-error"),Number(a.exp)-Number(a.iat)}async function st(e,a,r=!1){if(r)return a;try{return await a}catch(t){throw t instanceof oa&&$p(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function $p({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}class Ap{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(a){if(a){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(a=!1){if(!this.isRunning)return;const r=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(a){a?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class vn{constructor(a,r){this.createdAt=a,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=et(this.lastLoginAt),this.creationTime=et(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Xt(e){const a=e.auth,r=await e.getIdToken(),t=await st(e,Qt(a,{idToken:r}));M(t?.users.length,a,"internal-error");const n=t.users[0];e._notifyReloadListener(n);const c=n.providerUserInfo?.length?ks(n.providerUserInfo):[],s=Pp(e.providerData,c),p=e.isAnonymous,u=!(e.email&&n.passwordHash)&&!s?.length,l=p?u:!1,i={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new vn(n.createdAt,n.lastLoginAt),isAnonymous:l};Object.assign(e,i)}async function Ip(e){const a=Ne(e);await Xt(a),await a.auth._persistUserIfCurrent(a),a.auth._notifyListenersIfCurrent(a)}function Pp(e,a){return[...e.filter(t=>!a.some(n=>n.providerId===t.providerId)),...a]}function ks(e){return e.map(({providerId:a,...r})=>({providerId:a,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}async function Lp(e,a){const r=await ys(e,{},async()=>{const t=ut({grant_type:"refresh_token",refresh_token:a}).slice(1),{tokenApiHost:n,apiKey:c}=e.config,s=await ws(e,n,"/v1/token",`key=${c}`),p=await e._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:p,body:t};return e.emulatorConfig&&Nn(e.emulatorConfig.host)&&(u.credentials="include"),vs.fetch()(s,u)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Rp(e,a){return sa(e,"POST","/v2/accounts:revokeToken",xa(e,a))}class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){M(a.idToken,"internal-error"),M(typeof a.idToken<"u","internal-error"),M(typeof a.refreshToken<"u","internal-error");const r="expiresIn"in a&&typeof a.expiresIn<"u"?Number(a.expiresIn):ki(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,r)}updateFromIdToken(a){M(a.length!==0,"internal-error");const r=ki(a);this.updateTokensAndExpiration(a,null,r)}async getToken(a,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,a,"user-token-expired"),this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(a,r){const{accessToken:t,refreshToken:n,expiresIn:c}=await Lp(a,r);this.updateTokensAndExpiration(t,n,Number(c))}updateTokensAndExpiration(a,r,t){this.refreshToken=r||null,this.accessToken=a||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(a,r){const{refreshToken:t,accessToken:n,expirationTime:c}=r,s=new Pa;return t&&(M(typeof t=="string","internal-error",{appName:a}),s.refreshToken=t),n&&(M(typeof n=="string","internal-error",{appName:a}),s.accessToken=n),c&&(M(typeof c=="number","internal-error",{appName:a}),s.expirationTime=c),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return Oe("not implemented")}}function He(e,a){M(typeof e=="string"||typeof e>"u","internal-error",{appName:a})}class ye{constructor({uid:a,auth:r,stsTokenManager:t,...n}){this.providerId="firebase",this.proactiveRefresh=new Ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=r,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new vn(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(a){const r=await st(this,this.stsTokenManager.getToken(this.auth,a));return M(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(a){return Cp(this,a)}reload(){return Ip(this)}_assign(a){this!==a&&(M(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(r=>({...r})),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){const r=new ye({...this,auth:a,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(a){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,r=!1){let t=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),t=!0),r&&await Xt(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(ra(this.auth));const a=await this.getIdToken();return await st(this,Ep(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>({...a})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,r){const t=r.displayName??void 0,n=r.email??void 0,c=r.phoneNumber??void 0,s=r.photoURL??void 0,p=r.tenantId??void 0,u=r._redirectEventId??void 0,l=r.createdAt??void 0,i=r.lastLoginAt??void 0,{uid:o,emailVerified:d,isAnonymous:m,providerData:f,stsTokenManager:g}=r;M(o&&g,a,"internal-error");const b=Pa.fromJSON(this.name,g);M(typeof o=="string",a,"internal-error"),He(t,a.name),He(n,a.name),M(typeof d=="boolean",a,"internal-error"),M(typeof m=="boolean",a,"internal-error"),He(c,a.name),He(s,a.name),He(p,a.name),He(u,a.name),He(l,a.name),He(i,a.name);const x=new ye({uid:o,auth:a,email:n,emailVerified:d,displayName:t,isAnonymous:m,photoURL:s,phoneNumber:c,tenantId:p,stsTokenManager:b,createdAt:l,lastLoginAt:i});return f&&Array.isArray(f)&&(x.providerData=f.map(y=>({...y}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(a,r,t=!1){const n=new Pa;n.updateFromServerResponse(r);const c=new ye({uid:r.localId,auth:a,stsTokenManager:n,isAnonymous:t});return await Xt(c),c}static async _fromGetAccountInfoResponse(a,r,t){const n=r.users[0];M(n.localId!==void 0,"internal-error");const c=n.providerUserInfo!==void 0?ks(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!c?.length,p=new Pa;p.updateFromIdToken(t);const u=new ye({uid:n.localId,auth:a,stsTokenManager:p,isAnonymous:s}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:c,metadata:new vn(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!c?.length};return Object.assign(u,l),u}}const Ei=new Map;function Fe(e){Ve(e instanceof Function,"Expected a class definition");let a=Ei.get(e);return a?(Ve(a instanceof e,"Instance stored in cache mismatched with class"),a):(a=new e,Ei.set(e,a),a)}class Es{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,r){this.storage[a]=r}async _get(a){const r=this.storage[a];return r===void 0?null:r}async _remove(a){delete this.storage[a]}_addListener(a,r){}_removeListener(a,r){}}Es.type="NONE";const yn=Es;function Vt(e,a,r){return`firebase:${e}:${a}:${r}`}class La{constructor(a,r,t){this.persistence=a,this.auth=r,this.userKey=t;const{config:n,name:c}=this.auth;this.fullUserKey=Vt(this.userKey,n.apiKey,c),this.fullPersistenceKey=Vt("persistence",n.apiKey,c),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){const a=await this.persistence._get(this.fullUserKey);if(!a)return null;if(typeof a=="string"){const r=await Qt(this.auth,{idToken:a}).catch(()=>{});return r?ye._fromGetAccountInfoResponse(this.auth,r,a):null}return ye._fromJSON(this.auth,a)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,r,t="authUser"){if(!r.length)return new La(Fe(yn),a,t);const n=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let c=n[0]||Fe(yn);const s=Vt(t,a.config.apiKey,a.name);let p=null;for(const l of r)try{const i=await l._get(s);if(i){let o;if(typeof i=="string"){const d=await Qt(a,{idToken:i}).catch(()=>{});if(!d)break;o=await ye._fromGetAccountInfoResponse(a,d,i)}else o=ye._fromJSON(a,i);l!==c&&(p=o),c=l;break}}catch{}const u=n.filter(l=>l._shouldAllowMigration);return!c._shouldAllowMigration||!u.length?new La(c,a,t):(c=u[0],p&&await c._set(s,p.toJSON()),await Promise.all(r.map(async l=>{if(l!==c)try{await l._remove(s)}catch{}})),new La(c,a,t))}}function Ci(e){const a=e.toLowerCase();if(a.includes("opera/")||a.includes("opr/")||a.includes("opios/"))return"Opera";if(Is(a))return"IEMobile";if(a.includes("msie")||a.includes("trident/"))return"IE";if(a.includes("edge/"))return"Edge";if(Cs(a))return"Firefox";if(a.includes("silk/"))return"Silk";if(Ls(a))return"Blackberry";if(Rs(a))return"Webos";if($s(a))return"Safari";if((a.includes("chrome/")||As(a))&&!a.includes("edge/"))return"Chrome";if(Ps(a))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(r);if(t?.length===2)return t[1]}return"Other"}function Cs(e=ce()){return/firefox\//i.test(e)}function $s(e=ce()){const a=e.toLowerCase();return a.includes("safari/")&&!a.includes("chrome/")&&!a.includes("crios/")&&!a.includes("android")}function As(e=ce()){return/crios\//i.test(e)}function Is(e=ce()){return/iemobile/i.test(e)}function Ps(e=ce()){return/android/i.test(e)}function Ls(e=ce()){return/blackberry/i.test(e)}function Rs(e=ce()){return/webos/i.test(e)}function qn(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Mp(e=ce()){return qn(e)&&!!window.navigator?.standalone}function Tp(){return Vd()&&document.documentMode===10}function Ms(e=ce()){return qn(e)||Ps(e)||Rs(e)||Ls(e)||/windows phone/i.test(e)||Is(e)}function Ts(e,a=[]){let r;switch(e){case"Browser":r=Ci(ce());break;case"Worker":r=`${Ci(ce())}-${e}`;break;default:r=e}const t=a.length?a.join(","):"FirebaseCore-web";return`${r}/JsCore/${pt}/${t}`}class Np{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,r){const t=c=>new Promise((s,p)=>{try{const u=a(c);s(u)}catch(u){p(u)}});t.onAbort=r,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(a){if(this.auth.currentUser===a)return;const r=[];try{for(const t of this.queue)await t(a),t.onAbort&&r.push(t.onAbort)}catch(t){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t?.message})}}}async function Sp(e,a={}){return sa(e,"GET","/v2/passwordPolicy",xa(e,a))}const zp=6;class _p{constructor(a){const r=a.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??zp,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=a.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=a.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=a.forceUpgradeOnSignin??!1,this.schemaVersion=a.schemaVersion}validatePassword(a){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(a,r),this.validatePasswordCharacterOptions(a,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(a,r){const t=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;t&&(r.meetsMinPasswordLength=a.length>=t),n&&(r.meetsMaxPasswordLength=a.length<=n)}validatePasswordCharacterOptions(a,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let t;for(let n=0;n<a.length;n++)t=a.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(a,r,t,n,c){this.customStrengthOptions.containsLowercaseLetter&&(a.containsLowercaseLetter||(a.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(a.containsUppercaseLetter||(a.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(a.containsNumericCharacter||(a.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(a.containsNonAlphanumericCharacter||(a.containsNonAlphanumericCharacter=c))}}class Dp{constructor(a,r,t,n){this.app=a,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $i(this),this.idTokenSubscription=new $i(this),this.beforeStateQueue=new Np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(a,r){return r&&(this._popupRedirectResolver=Fe(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await La.create(this,a),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const a=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!a)){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUserFromIdToken(a){try{const r=await Qt(this,{idToken:a}),t=await ye._fromGetAccountInfoResponse(this,r,a);await this.directlySetCurrentUser(t)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(a){if(Pe(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(s,s))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let t=r,n=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,s=t?._redirectEventId,p=await this.tryRedirectSignIn(a);(!c||c===s)&&p?.user&&(t=p.user,n=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(t)}catch(c){t=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(a){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(a){try{await Xt(a)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=bp()}async _delete(){this._deleted=!0}async updateCurrentUser(a){if(Pe(this.app))return Promise.reject(ra(this));const r=a?Ne(a):null;return r&&M(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(a,r=!1){if(!this._deleted)return a&&M(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(ra(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(a){return Pe(this.app)?Promise.reject(ra(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(a))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(a){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(a)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const a=await Sp(this),r=new _p(a);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(a){this._errorFactory=new dt("auth","Firebase",a())}onAuthStateChanged(a,r,t){return this.registerStateListener(this.authStateSubscription,a,r,t)}beforeAuthStateChanged(a,r){return this.beforeStateQueue.pushCallback(a,r)}onIdTokenChanged(a,r,t){return this.registerStateListener(this.idTokenSubscription,a,r,t)}authStateReady(){return new Promise((a,r)=>{if(this.currentUser)a();else{const t=this.onAuthStateChanged(()=>{t(),a()},r)}})}async revokeAccessToken(a){if(this.currentUser){const r=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:a,idToken:r};this.tenantId!=null&&(t.tenantId=this.tenantId),await Rp(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(a,r){const t=await this.getOrInitRedirectPersistenceManager(r);return a===null?t.removeCurrentUser():t.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){const r=a&&Fe(a)||this._popupRedirectResolver;M(r,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[Fe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===a?this._currentUser:this.redirectUser?._redirectEventId===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=this.currentUser?.uid??null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,r,t,n){if(this._deleted)return()=>{};const c=typeof r=="function"?r:r.next.bind(r);let s=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(p,this,"internal-error"),p.then(()=>{s||c(this.currentUser)}),typeof r=="function"){const u=a.addObserver(r,t,n);return()=>{s=!0,u()}}else{const u=a.addObserver(r);return()=>{s=!0,u()}}}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!a||this.frameworks.includes(a)||(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=Ts(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(a["X-Firebase-Client"]=r);const t=await this._getAppCheckToken();return t&&(a["X-Firebase-AppCheck"]=t),a}async _getAppCheckToken(){if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const a=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return a?.error&&pp(`Error while retrieving App Check token: ${a.error}`),a?.token}}function Oa(e){return Ne(e)}class $i{constructor(a){this.auth=a,this.observer=null,this.addObserver=Jd(r=>this.observer=r)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let br={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qp(e){br=e}function Ns(e){return br.loadJS(e)}function Op(){return br.recaptchaEnterpriseScript}function Fp(){return br.gapiScript}function Up(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class jp{constructor(){this.enterprise=new Vp}ready(a){a()}execute(a,r){return Promise.resolve("token")}render(a,r){return""}}class Vp{ready(a){a()}execute(a,r){return Promise.resolve("token")}render(a,r){return""}}const Bp="recaptcha-enterprise",Ss="NO_RECAPTCHA",Ai="onFirebaseAuthREInstanceReady";class Ye{constructor(a){this.type=Bp,this.auth=Oa(a)}async verify(a="verify",r=!1){async function t(c){if(!r){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(s,p)=>{kp(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const l=new wp(u);return c.tenantId==null?c._agentRecaptchaConfig=l:c._tenantRecaptchaConfigs[c.tenantId]=l,s(l.siteKey)}}).catch(u=>{p(u)})})}function n(c,s,p){const u=window.grecaptcha;wi(u)?u.enterprise.ready(()=>{u.enterprise.execute(c,{action:a}).then(l=>{s(l)}).catch(()=>{s(Ss)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jp().execute("siteKey",{action:"verify"}):new Promise((c,s)=>{t(this.auth).then(async p=>{if(!r&&wi(window.grecaptcha)&&Ye.scriptInjectionDeferred)await Ye.scriptInjectionDeferred.promise,n(p,c,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Op();u.length!==0&&(u+=p+`&onload=${Ai}`),Ye.scriptInjectionDeferred=new ls,window[Ai]=()=>{Ye.scriptInjectionDeferred?.resolve()},Ns(u).then(()=>Ye.scriptInjectionDeferred?.promise).then(()=>{n(p,c,s)}).catch(l=>{s(l)})}}).catch(p=>{s(p)})})}}Ye.scriptInjectionDeferred=null;async function Ii(e,a,r,t=!1,n=!1){const c=new Ye(e);let s;if(n)s=Ss;else try{s=await c.verify(r)}catch{s=await c.verify(r,!0)}const p={...a};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const u=p.phoneEnrollmentInfo.phoneNumber,l=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const u=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return t?Object.assign(p,{captchaResp:s}):Object.assign(p,{captchaResponse:s}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Pi(e,a,r,t,n){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ii(e,a,r,r==="getOobCode");return t(e,c)}else return t(e,a).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ii(e,a,r,r==="getOobCode");return t(e,s)}else return Promise.reject(c)})}function Gp(e,a){const r=ps(e,"auth");if(r.isInitialized()){const n=r.getImmediate(),c=r.getOptions();if(Ta(c,a??{}))return n;ke(n,"already-initialized")}return r.initialize({options:a})}function Hp(e,a){const r=a?.persistence||[],t=(Array.isArray(r)?r:[r]).map(Fe);a?.errorMap&&e._updateErrorMap(a.errorMap),e._initializeWithPersistence(t,a?.popupRedirectResolver)}function Wp(e,a,r){const t=Oa(e);M(/^https?:\/\//.test(a),t,"invalid-emulator-scheme");const n=!1,c=zs(a),{host:s,port:p}=Kp(a),u=p===null?"":`:${p}`,l={url:`${c}//${s}${u}/`},i=Object.freeze({host:s,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!t._canInitEmulator){M(t.config.emulator&&t.emulatorConfig,t,"emulator-config-failed"),M(Ta(l,t.config.emulator)&&Ta(i,t.emulatorConfig),t,"emulator-config-failed");return}t.config.emulator=l,t.emulatorConfig=i,t.settings.appVerificationDisabledForTesting=!0,Nn(s)?Zd(`${c}//${s}${u}`):Yp()}function zs(e){const a=e.indexOf(":");return a<0?"":e.substr(0,a+1)}function Kp(e){const a=zs(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(a.length));if(!r)return{host:"",port:null};const t=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(t);if(n){const c=n[1];return{host:c,port:Li(t.substr(c.length+1))}}else{const[c,s]=t.split(":");return{host:c,port:Li(s)}}}function Li(e){if(!e)return null;const a=Number(e);return isNaN(a)?null:a}function Yp(){function e(){const a=document.createElement("p"),r=a.style;a.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",a.classList.add("firebase-emulator-warning"),document.body.appendChild(a)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}class On{constructor(a,r){this.providerId=a,this.signInMethod=r}toJSON(){return Oe("not implemented")}_getIdTokenResponse(a){return Oe("not implemented")}_linkToIdToken(a,r){return Oe("not implemented")}_getReauthenticationResolver(a){return Oe("not implemented")}}async function Jp(e,a){return sa(e,"POST","/v1/accounts:signUp",a)}async function Qp(e,a){return fr(e,"POST","/v1/accounts:signInWithPassword",xa(e,a))}async function Xp(e,a){return fr(e,"POST","/v1/accounts:signInWithEmailLink",xa(e,a))}async function Zp(e,a){return fr(e,"POST","/v1/accounts:signInWithEmailLink",xa(e,a))}class lt extends On{constructor(a,r,t,n=null){super("password",t),this._email=a,this._password=r,this._tenantId=n}static _fromEmailAndPassword(a,r){return new lt(a,r,"password")}static _fromEmailAndCode(a,r,t=null){return new lt(a,r,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){const r=typeof a=="string"?JSON.parse(a):a;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pi(a,r,"signInWithPassword",Qp);case"emailLink":return Xp(a,{email:this._email,oobCode:this._password});default:ke(a,"internal-error")}}async _linkToIdToken(a,r){switch(this.signInMethod){case"password":const t={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pi(a,t,"signUpPassword",Jp);case"emailLink":return Zp(a,{idToken:r,email:this._email,oobCode:this._password});default:ke(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}async function Ra(e,a){return fr(e,"POST","/v1/accounts:signInWithIdp",xa(e,a))}const em="http://localhost";class ba extends On{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){const r=new ba(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(r.idToken=a.idToken),a.accessToken&&(r.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(r.nonce=a.nonce),a.pendingToken&&(r.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(r.accessToken=a.oauthToken,r.secret=a.oauthTokenSecret):ke("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){const r=typeof a=="string"?JSON.parse(a):a,{providerId:t,signInMethod:n,...c}=r;if(!t||!n)return null;const s=new ba(t,n);return s.idToken=c.idToken||void 0,s.accessToken=c.accessToken||void 0,s.secret=c.secret,s.nonce=c.nonce,s.pendingToken=c.pendingToken||null,s}_getIdTokenResponse(a){const r=this.buildRequest();return Ra(a,r)}_linkToIdToken(a,r){const t=this.buildRequest();return t.idToken=r,Ra(a,t)}_getReauthenticationResolver(a){const r=this.buildRequest();return r.autoCreate=!1,Ra(a,r)}buildRequest(){const a={requestUri:em,returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),a.postBody=ut(r)}return a}}function am(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tm(e){const a=Qa(Xa(e)).link,r=a?Qa(Xa(a)).deep_link_id:null,t=Qa(Xa(e)).deep_link_id;return(t?Qa(Xa(t)).link:null)||t||r||a||e}class Fn{constructor(a){const r=Qa(Xa(a)),t=r.apiKey??null,n=r.oobCode??null,c=am(r.mode??null);M(t&&n&&c,"argument-error"),this.apiKey=t,this.operation=c,this.code=n,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(a){const r=tm(a);try{return new Fn(r)}catch{return null}}}class Fa{constructor(){this.providerId=Fa.PROVIDER_ID}static credential(a,r){return lt._fromEmailAndPassword(a,r)}static credentialWithLink(a,r){const t=Fn.parseLink(r);return M(t,"argument-error"),lt._fromEmailAndCode(a,t.code,t.tenantId)}}Fa.PROVIDER_ID="password";Fa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class _s{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}class ft extends _s{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class Je extends ft{constructor(){super("facebook.com")}static credential(a){return ba._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return Je.credentialFromTaggedObject(a)}static credentialFromError(a){return Je.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return Je.credential(a.oauthAccessToken)}catch{return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com";Je.PROVIDER_ID="facebook.com";class Qe extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(a,r){return ba._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:r})}static credentialFromResult(a){return Qe.credentialFromTaggedObject(a)}static credentialFromError(a){return Qe.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthIdToken:r,oauthAccessToken:t}=a;if(!r&&!t)return null;try{return Qe.credential(r,t)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";class Xe extends ft{constructor(){super("github.com")}static credential(a){return ba._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return Xe.credentialFromTaggedObject(a)}static credentialFromError(a){return Xe.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return Xe.credential(a.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";class Ze extends ft{constructor(){super("twitter.com")}static credential(a,r){return ba._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:r})}static credentialFromResult(a){return Ze.credentialFromTaggedObject(a)}static credentialFromError(a){return Ze.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthAccessToken:r,oauthTokenSecret:t}=a;if(!r||!t)return null;try{return Ze.credential(r,t)}catch{return null}}}Ze.TWITTER_SIGN_IN_METHOD="twitter.com";Ze.PROVIDER_ID="twitter.com";class Sa{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,r,t,n=!1){const c=await ye._fromIdTokenResponse(a,t,n),s=Ri(t);return new Sa({user:c,providerId:s,_tokenResponse:t,operationType:r})}static async _forOperation(a,r,t){await a._updateTokensIfNecessary(t,!0);const n=Ri(t);return new Sa({user:a,providerId:n,_tokenResponse:t,operationType:r})}}function Ri(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class Zt extends oa{constructor(a,r,t,n){super(r.code,r.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,Zt.prototype),this.customData={appName:a.name,tenantId:a.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(a,r,t,n){return new Zt(a,r,t,n)}}function Ds(e,a,r,t){return(a==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Zt._fromErrorAndOperation(e,c,a,t):c})}async function rm(e,a,r=!1){const t=await st(e,a._linkToIdToken(e.auth,await e.getIdToken()),r);return Sa._forOperation(e,"link",t)}async function nm(e,a,r=!1){const{auth:t}=e;if(Pe(t.app))return Promise.reject(ra(t));const n="reauthenticate";try{const c=await st(e,Ds(t,n,a,e),r);M(c.idToken,t,"internal-error");const s=Dn(c.idToken);M(s,t,"internal-error");const{sub:p}=s;return M(e.uid===p,t,"user-mismatch"),Sa._forOperation(e,n,c)}catch(c){throw c?.code==="auth/user-not-found"&&ke(t,"user-mismatch"),c}}async function qs(e,a,r=!1){if(Pe(e.app))return Promise.reject(ra(e));const t="signIn",n=await Ds(e,t,a),c=await Sa._fromIdTokenResponse(e,t,n);return r||await e._updateCurrentUser(c.user),c}async function im(e,a){return qs(Oa(e),a)}async function om(e){const a=Oa(e);a._getPasswordPolicyInternal()&&await a._updatePasswordPolicy()}function sm(e,a,r){return Pe(e.app)?Promise.reject(ra(e)):im(Ne(e),Fa.credential(a,r)).catch(async t=>{throw t.code==="auth/password-does-not-meet-requirements"&&om(e),t})}function lm(e,a){return Ne(e).setPersistence(a)}function cm(e,a,r,t){return Ne(e).onIdTokenChanged(a,r,t)}function dm(e,a,r){return Ne(e).beforeAuthStateChanged(a,r)}function um(e,a,r,t){return Ne(e).onAuthStateChanged(a,r,t)}function pm(e){return Ne(e).signOut()}const er="__sak";class Os{constructor(a,r){this.storageRetriever=a,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(er,"1"),this.storage.removeItem(er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(a,r){return this.storage.setItem(a,JSON.stringify(r)),Promise.resolve()}_get(a){const r=this.storage.getItem(a);return Promise.resolve(r?JSON.parse(r):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}const mm=1e3,fm=10;class Fs extends Os{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,r)=>this.onStorageEvent(a,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ms(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(const r of Object.keys(this.listeners)){const t=this.storage.getItem(r),n=this.localCache[r];t!==n&&a(r,n,t)}}onStorageEvent(a,r=!1){if(!a.key){this.forAllChangedKeys((s,p,u)=>{this.notifyListeners(s,u)});return}const t=a.key;r?this.detachListener():this.stopPolling();const n=()=>{const s=this.storage.getItem(t);!r&&this.localCache[t]===s||this.notifyListeners(t,s)},c=this.storage.getItem(t);Tp()&&c!==a.newValue&&a.newValue!==a.oldValue?setTimeout(n,fm):n()}notifyListeners(a,r){this.localCache[a]=r;const t=this.listeners[a];if(t)for(const n of Array.from(t))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,r,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:r,newValue:t}),!0)})},mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(r)}_removeListener(a,r){this.listeners[a]&&(this.listeners[a].delete(r),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(a,r){await super._set(a,r),this.localCache[a]=JSON.stringify(r)}async _get(a){const r=await super._get(a);return this.localCache[a]=JSON.stringify(r),r}async _remove(a){await super._remove(a),delete this.localCache[a]}}Fs.type="LOCAL";const bm=Fs;class Us extends Os{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,r){}_removeListener(a,r){}}Us.type="SESSION";const js=Us;function gm(e){return Promise.all(e.map(async a=>{try{return{fulfilled:!0,value:await a}}catch(r){return{fulfilled:!1,reason:r}}}))}class gr{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){const r=this.receivers.find(n=>n.isListeningto(a));if(r)return r;const t=new gr(a);return this.receivers.push(t),t}isListeningto(a){return this.eventTarget===a}async handleEvent(a){const r=a,{eventId:t,eventType:n,data:c}=r.data,s=this.handlersMap[n];if(!s?.size)return;r.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const p=Array.from(s).map(async l=>l(r.origin,c)),u=await gm(p);r.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:u})}_subscribe(a,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(r)}_unsubscribe(a,r){this.handlersMap[a]&&r&&this.handlersMap[a].delete(r),(!r||this.handlersMap[a].size===0)&&delete this.handlersMap[a],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gr.receivers=[];function Un(e="",a=10){let r="";for(let t=0;t<a;t++)r+=Math.floor(Math.random()*10);return e+r}class hm{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,r,t=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let c,s;return new Promise((p,u)=>{const l=Un("",20);n.port1.start();const i=setTimeout(()=>{u(new Error("unsupported_event"))},t);s={messageChannel:n,onMessage(o){const d=o;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(i),c=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(d.data.response);break;default:clearTimeout(i),clearTimeout(c),u(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:a,eventId:l,data:r},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}function Re(){return window}function xm(e){Re().location.href=e}function Vs(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function vm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ym(){return navigator?.serviceWorker?.controller||null}function wm(){return Vs()?self:null}const Bs="firebaseLocalStorageDb",km=1,ar="firebaseLocalStorage",Gs="fbase_key";class bt{constructor(a){this.request=a}toPromise(){return new Promise((a,r)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function hr(e,a){return e.transaction([ar],a?"readwrite":"readonly").objectStore(ar)}function Em(){const e=indexedDB.deleteDatabase(Bs);return new bt(e).toPromise()}function Hs(){const e=indexedDB.open(Bs,km);return new Promise((a,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(ar,{keyPath:Gs})}catch(n){r(n)}}),e.addEventListener("success",async()=>{const t=e.result;t.objectStoreNames.contains(ar)?a(t):(t.close(),await Em(),a(await Hs()))})})}async function Mi(e,a,r){const t=hr(e,!0).put({[Gs]:a,value:r});return new bt(t).toPromise()}async function Cm(e,a){const r=hr(e,!1).get(a),t=await new bt(r).toPromise();return t===void 0?null:t.value}function Ti(e,a){const r=hr(e,!0).delete(a);return new bt(r).toPromise()}const $m=800,Am=3;class Ws{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Hs(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(a){let r=0;for(;;)try{const t=await this._openDb();return await a(t)}catch(t){if(r++>Am)throw t;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Vs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gr._getInstance(wm()),this.receiver._subscribe("keyChanged",async(a,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(a,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await vm(),!this.activeServiceWorker)return;this.sender=new hm(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&a[0]?.fulfilled&&a[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){if(!(!this.sender||!this.activeServiceWorker||ym()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async a=>{await Mi(a,er,"1"),await Ti(a,er)}),!0):!1}catch{}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,r){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mi(t,a,r)),this.localCache[a]=r,this.notifyServiceWorker(a)))}async _get(a){const r=await this._withRetries(t=>Cm(t,a));return this.localCache[a]=r,r}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ti(r,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){const a=await this._withRetries(n=>{const c=hr(n,!1).getAll();return new bt(c).toPromise()});if(!a)return[];if(this.pendingWrites!==0)return[];const r=[],t=new Set;if(a.length!==0)for(const{fbase_key:n,value:c}of a)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(c)&&(this.notifyListeners(n,c),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(a,r){this.localCache[a]=r;const t=this.listeners[a];if(t)for(const n of Array.from(t))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(r)}_removeListener(a,r){this.listeners[a]&&(this.listeners[a].delete(r),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ws.type="LOCAL";const Im=Ws;new mt(3e4,6e4);function Pm(e,a){return a?Fe(a):(M(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}class jn extends On{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return Ra(a,this._buildIdpRequest())}_linkToIdToken(a,r){return Ra(a,this._buildIdpRequest(r))}_getReauthenticationResolver(a){return Ra(a,this._buildIdpRequest())}_buildIdpRequest(a){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(r.idToken=a),r}}function Lm(e){return qs(e.auth,new jn(e),e.bypassAuthState)}function Rm(e){const{auth:a,user:r}=e;return M(r,a,"internal-error"),nm(r,new jn(e),e.bypassAuthState)}async function Mm(e){const{auth:a,user:r}=e;return M(r,a,"internal-error"),rm(r,new jn(e),e.bypassAuthState)}class Ks{constructor(a,r,t,n,c=!1){this.auth=a,this.resolver=t,this.user=n,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(a,r)=>{this.pendingPromise={resolve:a,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(a){const{urlResponse:r,sessionId:t,postBody:n,tenantId:c,error:s,type:p}=a;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:r,sessionId:t,tenantId:c||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(u))}catch(l){this.reject(l)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return Lm;case"linkViaPopup":case"linkViaRedirect":return Mm;case"reauthViaPopup":case"reauthViaRedirect":return Rm;default:ke(this.auth,"internal-error")}}resolve(a){Ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){Ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const Tm=new mt(2e3,1e4);class Aa extends Ks{constructor(a,r,t,n,c){super(a,r,n,c),this.provider=t,this.authWindow=null,this.pollId=null,Aa.currentPopupAction&&Aa.currentPopupAction.cancel(),Aa.currentPopupAction=this}async executeNotNull(){const a=await this.execute();return M(a,this.auth,"internal-error"),a}async onExecution(){Ve(this.filter.length===1,"Popup operations only handle one event");const a=Un();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Aa.currentPopupAction=null}pollUserCancellation(){const a=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(a,Tm.get())};a()}}Aa.currentPopupAction=null;const Nm="pendingRedirect",Bt=new Map;class Sm extends Ks{constructor(a,r,t=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,t),this.eventId=null}async execute(){let a=Bt.get(this.auth._key());if(!a){try{const t=await zm(this.resolver,this.auth)?await super.execute():null;a=()=>Promise.resolve(t)}catch(r){a=()=>Promise.reject(r)}Bt.set(this.auth._key(),a)}return this.bypassAuthState||Bt.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if(a.type==="signInViaRedirect")return super.onAuthEvent(a);if(a.type==="unknown"){this.resolve(null);return}if(a.eventId){const r=await this.auth._redirectUserForId(a.eventId);if(r)return this.user=r,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zm(e,a){const r=qm(a),t=Dm(e);if(!await t._isAvailable())return!1;const n=await t._get(r)==="true";return await t._remove(r),n}function _m(e,a){Bt.set(e._key(),a)}function Dm(e){return Fe(e._redirectPersistence)}function qm(e){return Vt(Nm,e.config.apiKey,e.name)}async function Om(e,a,r=!1){if(Pe(e.app))return Promise.reject(ra(e));const t=Oa(e),n=Pm(t,a),s=await new Sm(t,n,r).execute();return s&&!r&&(delete s.user._redirectEventId,await t._persistUserIfCurrent(s.user),await t._setRedirectUser(null,a)),s}const Fm=600*1e3;class Um{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let r=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(a,t)&&(r=!0,this.sendToConsumer(a,t),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!jm(a)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=a,r=!0)),r}sendToConsumer(a,r){if(a.error&&!Ys(a)){const t=a.error.code?.split("auth/")[1]||"internal-error";r.onError(Le(this.auth,t))}else r.onAuthEvent(a)}isEventForConsumer(a,r){const t=r.eventId===null||!!a.eventId&&a.eventId===r.eventId;return r.filter.includes(a.type)&&t}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=Fm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ni(a))}saveEventToCache(a){this.cachedEventUids.add(Ni(a)),this.lastProcessedEventTime=Date.now()}}function Ni(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(a=>a).join("-")}function Ys({type:e,error:a}){return e==="unknown"&&a?.code==="auth/no-auth-event"}function jm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ys(e);default:return!1}}async function Vm(e,a={}){return sa(e,"GET","/v1/projects",a)}const Bm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gm=/^https?/;async function Hm(e){if(e.config.emulator)return;const{authorizedDomains:a}=await Vm(e);for(const r of a)try{if(Wm(r))return}catch{}ke(e,"unauthorized-domain")}function Wm(e){const a=xn(),{protocol:r,hostname:t}=new URL(a);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&t===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===a.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===t}if(!Gm.test(r))return!1;if(Bm.test(e))return t===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(t)}const Km=new mt(3e4,6e4);function Si(){const e=Re().___jsl;if(e?.H){for(const a of Object.keys(e.H))if(e.H[a].r=e.H[a].r||[],e.H[a].L=e.H[a].L||[],e.H[a].r=[...e.H[a].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function Ym(e){return new Promise((a,r)=>{function t(){Si(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{Si(),r(Le(e,"network-request-failed"))},timeout:Km.get()})}if(Re().gapi?.iframes?.Iframe)a(gapi.iframes.getContext());else if(Re().gapi?.load)t();else{const n=Up("iframefcb");return Re()[n]=()=>{gapi.load?t():r(Le(e,"network-request-failed"))},Ns(`${Fp()}?onload=${n}`).catch(c=>r(c))}}).catch(a=>{throw Gt=null,a})}let Gt=null;function Jm(e){return Gt=Gt||Ym(e),Gt}const Qm=new mt(5e3,15e3),Xm="__/auth/iframe",Zm="emulator/auth/iframe",ef={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},af=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tf(e){const a=e.config;M(a.authDomain,e,"auth-domain-config-required");const r=a.emulator?_n(a,Zm):`https://${e.config.authDomain}/${Xm}`,t={apiKey:a.apiKey,appName:e.name,v:pt},n=af.get(e.config.apiHost);n&&(t.eid=n);const c=e._getFrameworks();return c.length&&(t.fw=c.join(",")),`${r}?${ut(t).slice(1)}`}async function rf(e){const a=await Jm(e),r=Re().gapi;return M(r,e,"internal-error"),a.open({where:document.body,url:tf(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ef,dontclear:!0},t=>new Promise(async(n,c)=>{await t.restyle({setHideOnLeave:!1});const s=Le(e,"network-request-failed"),p=Re().setTimeout(()=>{c(s)},Qm.get());function u(){Re().clearTimeout(p),n(t)}t.ping(u).then(u,()=>{c(s)})}))}const nf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},of=500,sf=600,lf="_blank",cf="http://localhost";class zi{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function df(e,a,r,t=of,n=sf){const c=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-t)/2,0).toString();let p="";const u={...nf,width:t.toString(),height:n.toString(),top:c,left:s},l=ce().toLowerCase();r&&(p=As(l)?lf:r),Cs(l)&&(a=a||cf,u.scrollbars="yes");const i=Object.entries(u).reduce((d,[m,f])=>`${d}${m}=${f},`,"");if(Mp(l)&&p!=="_self")return uf(a||"",p),new zi(null);const o=window.open(a||"",p,i);M(o,e,"popup-blocked");try{o.focus()}catch{}return new zi(o)}function uf(e,a){const r=document.createElement("a");r.href=e,r.target=a;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(t)}const pf="__/auth/handler",mf="emulator/auth/handler",ff=encodeURIComponent("fac");async function _i(e,a,r,t,n,c){M(e.config.authDomain,e,"auth-domain-config-required"),M(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:t,v:pt,eventId:n};if(a instanceof _s){a.setDefaultLanguage(e.languageCode),s.providerId=a.providerId||"",Yd(a.getCustomParameters())||(s.customParameters=JSON.stringify(a.getCustomParameters()));for(const[i,o]of Object.entries({}))s[i]=o}if(a instanceof ft){const i=a.getScopes().filter(o=>o!=="");i.length>0&&(s.scopes=i.join(","))}e.tenantId&&(s.tid=e.tenantId);const p=s;for(const i of Object.keys(p))p[i]===void 0&&delete p[i];const u=await e._getAppCheckToken(),l=u?`#${ff}=${encodeURIComponent(u)}`:"";return`${bf(e)}?${ut(p).slice(1)}${l}`}function bf({config:e}){return e.emulator?_n(e,mf):`https://${e.authDomain}/${pf}`}const Fr="webStorageSupport";class gf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=js,this._completeRedirectFn=Om,this._overrideRedirectResult=_m}async _openPopup(a,r,t,n){Ve(this.eventManagers[a._key()]?.manager,"_initialize() not called before _openPopup()");const c=await _i(a,r,t,xn(),n);return df(a,c,Un())}async _openRedirect(a,r,t,n){await this._originValidation(a);const c=await _i(a,r,t,xn(),n);return xm(c),new Promise(()=>{})}_initialize(a){const r=a._key();if(this.eventManagers[r]){const{manager:n,promise:c}=this.eventManagers[r];return n?Promise.resolve(n):(Ve(c,"If manager is not set, promise should be"),c)}const t=this.initAndGetManager(a);return this.eventManagers[r]={promise:t},t.catch(()=>{delete this.eventManagers[r]}),t}async initAndGetManager(a){const r=await rf(a),t=new Um(a);return r.register("authEvent",n=>(M(n?.authEvent,a,"invalid-auth-event"),{status:t.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:t},this.iframes[a._key()]=r,t}_isIframeWebStorageSupported(a,r){this.iframes[a._key()].send(Fr,{type:Fr},n=>{const c=n?.[0]?.[Fr];c!==void 0&&r(!!c),ke(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){const r=a._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Hm(a)),this.originValidationPromises[r]}get _shouldInitProactively(){return Ms()||$s()||qn()}}const hf=gf;var Di="@firebase/auth",qi="1.13.3";class xf{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(a){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(a)}:null}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;const r=this.auth.onIdTokenChanged(t=>{a(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(a,r),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();const r=this.internalListeners.get(a);r&&(this.internalListeners.delete(a),r(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function vf(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yf(e){it(new Na("auth",(a,{options:r})=>{const t=a.getProvider("app").getImmediate(),n=a.getProvider("heartbeat"),c=a.getProvider("app-check-internal"),{apiKey:s,authDomain:p}=t.options;M(s&&!s.includes(":"),"invalid-api-key",{appName:t.name});const u={apiKey:s,authDomain:p,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ts(e)},l=new Dp(t,n,c,u);return Hp(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,r,t)=>{a.getProvider("auth-internal").initialize()})),it(new Na("auth-internal",a=>{const r=Oa(a.getProvider("auth").getImmediate());return(t=>new xf(t))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ia(Di,qi,vf(e)),Ia(Di,qi,"esm2020")}const wf=300,kf=ss("authIdTokenMaxAge")||wf;let Oi=null;const Ef=e=>async a=>{const r=a&&await a.getIdTokenResult(),t=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(t&&t>kf)return;const n=r?.token;Oi!==n&&(Oi=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Cf(e=Xu()){const a=ps(e,"auth");if(a.isInitialized())return a.getImmediate();const r=Gp(e,{popupRedirectResolver:hf,persistence:[Im,bm,js]}),t=ss("authTokenSyncURL");if(t&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(t,location.origin);if(location.origin===c.origin){const s=Ef(c.toString());dm(r,s,()=>s(r.currentUser)),cm(r,p=>s(p))}}const n=qd("auth");return n&&Wp(r,`http://${n}`),r}function $f(){return document.getElementsByTagName("head")?.[0]??document}qp({loadJS(e){return new Promise((a,r)=>{const t=document.createElement("script");t.setAttribute("src",e),t.onload=a,t.onerror=n=>{const c=Le("internal-error");c.customData=n,r(c)},t.type="text/javascript",t.charset="UTF-8",$f().appendChild(t)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yf("Browser");const Af={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},If=ms(Af),tr=Cf(If);async function Pf(e,a){return await lm(tr,yn),await sm(tr,e,a)}async function Lf(){return await pm(tr)}function Rf(e){return um(tr,e)}function Mf(e){const a=document.createElement("section");a.className=`
    min-h-[70vh]
    flex items-center justify-center
    px-6 py-12
  `,a.innerHTML=`
    <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">

      <h1 class="text-3xl font-black text-slate-900 mb-2">
        Laboratorio Inteligente
      </h1>

      <p class="text-slate-500 mb-8">
        Acceso exclusivo para investigadores autorizados.
      </p>

      <form id="kernel-login" class="space-y-5">

        <div>
          <label class="block mb-2 font-semibold">
            Correo electrónico
          </label>

          <input
            id="correo"
            type="email"
            class="w-full rounded-xl border px-4 py-3"
            required
          />
        </div>

        <div>
          <label class="block mb-2 font-semibold">
            Contraseña
          </label>

          <input
            id="password"
            type="password"
            class="w-full rounded-xl border px-4 py-3"
            required
          />
        </div>

        <button
          class="w-full bg-blue-700 text-white rounded-xl py-3 font-bold hover:bg-blue-800"
          type="submit">
          Iniciar sesión
        </button>

        <p
          id="login-error"
          class="hidden text-red-600 text-sm font-semibold">
        </p>

      </form>

    </div>
  `;const r=a.querySelector("#kernel-login"),t=a.querySelector("#login-error"),n=a.querySelector("#correo"),c=a.querySelector("#password"),s=r.querySelector('button[type="submit"]');return r.addEventListener("submit",async p=>{p.preventDefault(),t.classList.add("hidden"),t.textContent="";const u=n.value.trim(),l=c.value;if(!u||!l){t.textContent="Introduzca el correo electrónico y la contraseña.",t.classList.remove("hidden");return}s.disabled=!0,s.textContent="Verificando...";try{await Pf(u,l),e&&await e()}catch(i){console.error("Error de autenticación:",i);const o={"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo no está autorizado.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."};t.textContent=o[i.code]||`No fue posible iniciar sesión. Error: ${i.code||"desconocido"}`,t.classList.remove("hidden")}finally{s.disabled=!1,s.textContent="Iniciar sesión"}}),a}function Tf(){return new Promise(e=>{const a=Rf(r=>{a(),e(r)})})}async function Nf(){if(!await Tf())return Mf(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const a=document.createElement("section");return a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <!-- Encabezado principal -->
        <header class="
            relative overflow-hidden
            rounded-3xl
            bg-slate-950 text-white
            px-6 py-12 md:px-12 md:py-16
            shadow-2xl
        ">
            <div class="
                absolute -top-28 -right-24
                w-80 h-80 rounded-full
                bg-sky-500/20
            "></div>

            <div class="
                absolute -bottom-32 -left-24
                w-96 h-96 rounded-full
                bg-blue-700/25
            "></div>

            <div class="
                absolute top-10 right-10
                hidden lg:flex
                w-28 h-28 rounded-3xl
                bg-white/5 border border-white/10
                items-center justify-center
                rotate-6 text-sky-300
            ">
                ${xe("analisis","w-16 h-16")}
            </div>

            <button
            id="cerrar-sesion-kernel"
            type="button"
            class="
                absolute top-5 right-5 z-20
                rounded-xl
                bg-white/10 border border-white/20
                px-4 py-2
                text-sm font-bold text-white
                hover:bg-white/20
                transition-colors
            "
            >
            Cerrar sesión
            </button>

            <div class="relative z-10 max-w-4xl">
                <div class="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-sky-400/30
                    bg-sky-400/10
                    px-4 py-2 mb-5
                    text-sky-300
                ">
                    ${xe("cerebro","w-5 h-5")}

                    <span class="
                        uppercase tracking-[0.20em]
                        font-black text-xs md:text-sm
                    ">
                        Grupo de Investigación El Kernel
                    </span>
                </div>

                <h1 class="
                    text-4xl md:text-6xl
                    font-black leading-tight
                    mb-6 max-w-3xl
                ">
                    Laboratorio Inteligente de Investigación
                </h1>

                <p class="
                    text-slate-200
                    text-lg md:text-xl
                    leading-relaxed
                    max-w-3xl
                ">
                    Plataforma científica para comprender, seleccionar
                    y aplicar métodos estadísticos y metodológicos con
                    rigor, claridad y orientación práctica.
                </p>

                <div class="flex flex-wrap gap-3 mt-8">
                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-sky-300
                    ">
                        ${xe("libro","w-5 h-5")}

                        <span class="text-white">
                            Aprendizaje guiado
                        </span>
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-amber-300
                    ">
                        ${xe("cerebro","w-5 h-5")}

                        <span class="text-white">
                            Selección inteligente
                        </span>
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-emerald-300
                    ">
                        ${xe("calculadora","w-5 h-5")}

                        <span class="text-white">
                            Herramientas de análisis
                        </span>
                    </span>
                </div>
            </div>
        </header>

        <!-- Tres pilares -->
        <section class="
            grid grid-cols-1 md:grid-cols-3
            gap-6 mt-10
        ">
            ${Ur("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${Ur("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${Ur("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
        </section>

        <!-- Llamado al asistente -->
        <section class="
            mt-12 rounded-3xl
            bg-gradient-to-r
            from-blue-700 to-sky-600
            text-white
            px-6 py-8 md:px-10
            shadow-xl
        ">
            <div class="
                flex flex-col lg:flex-row
                lg:items-center lg:justify-between
                gap-6
            ">
                <div class="flex items-start gap-5">
                    <div class="
                        shrink-0 w-16 h-16
                        rounded-2xl
                        bg-white/15
                        flex items-center justify-center
                        text-white
                    ">
                        ${xe("pregunta","w-9 h-9")}
                    </div>

                    <div>
                        <p class="
                            uppercase tracking-widest
                            text-sky-100 text-xs
                            font-black mb-2
                        ">
                            Asistente metodológico
                        </p>

                        <h2 class="
                            text-2xl md:text-3xl
                            font-black mb-2
                        ">
                            ¿No sabe qué prueba estadística utilizar?
                        </h2>

                        <p class="
                            text-sky-50
                            leading-relaxed max-w-3xl
                        ">
                            Responda unas preguntas sobre su investigación
                            y el laboratorio le orientará hacia la prueba
                            más adecuada.
                        </p>
                    </div>
                </div>

                <button
                type="button"
                onclick="window.location.hash='/asistentePruebas'"
                class="
                    shrink-0 inline-flex
                    items-center justify-center gap-2
                    bg-white text-blue-700
                    font-black rounded-xl
                    px-6 py-4
                    shadow-lg
                    hover:bg-sky-50
                    transition-colors
                "
                    aria-label="Iniciar el asistente metodológico"
            >
                    ${xe("decision","w-6 h-6")}
                    Iniciar asistente
                </button>
            </div>
        </section>

        <!-- Áreas del laboratorio -->
        <section class="mt-14">
            <div class="
                flex flex-col lg:flex-row
                lg:items-end lg:justify-between
                gap-5 mb-8
            ">
                <div>
                    <p class="
                        text-[#0D6EFD]
                        font-black uppercase
                        tracking-widest
                        text-sm mb-2
                    ">
                        Áreas del laboratorio
                    </p>

                    <h2 class="
                        text-3xl md:text-4xl
                        font-black text-slate-900
                    ">
                        Explore según su necesidad de investigación
                    </h2>
                </div>

                <div class="
                    inline-flex items-center gap-2
                    text-slate-500 text-sm
                    font-semibold
                ">
                    ${xe("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${De("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200","calculadoraEstadisticaDescriptiva")}

                ${De("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","comparacionGrupos")}

                ${De("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200","correlacionAsociacion")}

                ${De("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${De("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${De("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${De("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${De("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${De("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,a.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await Lf(),window.location.reload()}),a}function Ur(e,a,r,t,n,c){return`
        <article class="
            h-full bg-white
            border border-slate-200
            rounded-3xl p-7
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="
                w-14 h-14 rounded-2xl
                ${t}
                ${n}
                border ${c}
                flex items-center justify-center
                mb-5
            ">
                ${xe(r,"w-8 h-8")}
            </div>

            <h2 class="
                text-2xl font-black
                text-slate-900 mb-3
            ">
                ${e}
            </h2>

            <p class="
                text-slate-600
                leading-relaxed
            ">
                ${a}
            </p>
        </article>
    `}function De(e,a,r,t,n,c,s=""){return`
        <article class="
            group h-full bg-white
            border border-slate-200
            rounded-3xl p-6
            shadow-md
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="flex items-start gap-4 h-full">
                <div class="
                    shrink-0
                    w-14 h-14
                    rounded-2xl
                    ${t}
                    ${n}
                    border ${c}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${xe(r,"w-8 h-8")}
                </div>

                <div class="
                    min-w-0 flex flex-col
                    h-full
                ">
                    <h3 class="
                        text-xl font-black
                        text-slate-900 mb-2
                    ">
                        ${e}
                    </h3>

                    <p class="
                        text-slate-600
                        leading-relaxed text-sm
                    ">
                        ${a}
                    </p>

                    <button
                        type="button"
                        ${s?`onclick="window.location.hash='/${s}'"`:""}
                        class="
                            inline-flex items-center gap-2
                            mt-auto pt-5
                            text-sm font-black
                            text-[#0D6EFD]
                            hover:text-blue-800
                            transition-colors
                        "
                        aria-label="Explorar ${e}"
                    >
                        Explorar
                        ${xe("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function xe(e,a="w-7 h-7"){const r=`
        class="${a}"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
    `,t={analisis:`
            <svg ${r}>
                <path d="M4 20V11"></path>
                <path d="M10 20V6"></path>
                <path d="M16 20V9"></path>
                <path d="M22 20V3"></path>
                <path d="M2 20H23"></path>
            </svg>
        `,cerebro:`
            <svg ${r}>
                <path d="M9.5 4.5A3 3 0 0 0 4 6.2a3 3 0 0 0 .2 5.3A3.5 3.5 0 0 0 7 17.4"></path>
                <path d="M14.5 4.5A3 3 0 0 1 20 6.2a3 3 0 0 1-.2 5.3 3.5 3.5 0 0 1-2.8 5.9"></path>
                <path d="M9.5 4.5V19"></path>
                <path d="M14.5 4.5V19"></path>
                <path d="M7 9h2.5"></path>
                <path d="M14.5 9H17"></path>
                <path d="M7.5 14h2"></path>
                <path d="M14.5 14h2"></path>
            </svg>
        `,libro:`
            <svg ${r}>
                <path d="M3.5 5.5c3-1.2 5.7-.7 8.5 1.2v12c-2.8-1.9-5.5-2.4-8.5-1.2z"></path>
                <path d="M20.5 5.5c-3-1.2-5.7-.7-8.5 1.2v12c2.8-1.9 5.5-2.4 8.5-1.2z"></path>
                <path d="M12 6.7V19"></path>
            </svg>
        `,calculadora:`
            <svg ${r}>
                <rect x="4" y="2.5" width="16" height="19" rx="2.5"></rect>
                <rect x="7" y="5.5" width="10" height="4" rx="1"></rect>
                <path d="M8 13h.01"></path>
                <path d="M12 13h.01"></path>
                <path d="M16 13h.01"></path>
                <path d="M8 17h.01"></path>
                <path d="M12 17h.01"></path>
                <path d="M16 17h.01"></path>
            </svg>
        `,decision:`
            <svg ${r}>
                <circle cx="12" cy="4" r="2"></circle>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="18" cy="19" r="2"></circle>
                <path d="M12 6v5"></path>
                <path d="M12 11H6v6"></path>
                <path d="M12 11h6v6"></path>
            </svg>
        `,pregunta:`
            <svg ${r}>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.8-2.4 2.1-2.4 4"></path>
                <path d="M12 17.5h.01"></path>
            </svg>
        `,cuadricula:`
            <svg ${r}>
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
            </svg>
        `,estadistica:`
            <svg ${r}>
                <path d="M3 20H21"></path>
                <rect x="5" y="12" width="3" height="6" rx="1"></rect>
                <rect x="10.5" y="7" width="3" height="11" rx="1"></rect>
                <rect x="16" y="4" width="3" height="14" rx="1"></rect>
                <path d="M5 8.5 11 5l6-3"></path>
            </svg>
        `,grupos:`
            <svg ${r}>
                <circle cx="9" cy="8" r="3"></circle>
                <circle cx="17" cy="9" r="2.5"></circle>
                <path d="M3.5 20c.4-4.2 2.2-6.5 5.5-6.5s5.1 2.3 5.5 6.5"></path>
                <path d="M14.5 14.5c3.6-.7 5.5 1.3 6 4.5"></path>
            </svg>
        `,correlacion:`
            <svg ${r}>
                <circle cx="5" cy="17" r="2.5"></circle>
                <circle cx="12" cy="7" r="2.5"></circle>
                <circle cx="19" cy="15" r="2.5"></circle>
                <path d="M6.5 15 10.5 9"></path>
                <path d="M14.2 8.5 17.2 13"></path>
                <path d="M7.5 17h9"></path>
            </svg>
        `,cuestionario:`
            <svg ${r}>
                <rect x="5" y="4" width="14" height="17" rx="2"></rect>
                <path d="M9 4V2.5h6V4"></path>
                <path d="m8 10 1.4 1.4L12 8.8"></path>
                <path d="M14 10h2"></path>
                <path d="m8 16 1.4 1.4L12 14.8"></path>
                <path d="M14 16h2"></path>
            </svg>
        `,evaluacion:`
            <svg ${r}>
                <path d="M6 3h9l3 3v15H6z"></path>
                <path d="M15 3v4h4"></path>
                <path d="m9 14 2 2 4-5"></path>
                <path d="M9 9h3"></path>
            </svg>
        `,muestra:`
            <svg ${r}>
                <circle cx="12" cy="12" r="8"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 2V4"></path>
                <path d="M12 20v2"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
            </svg>
        `,regresion:`
            <svg ${r}>
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <path d="m6.5 16 4-5 3 2 5-7"></path>
                <circle cx="6.5" cy="16" r="1"></circle>
                <circle cx="10.5" cy="11" r="1"></circle>
                <circle cx="13.5" cy="13" r="1"></circle>
                <circle cx="18.5" cy="6" r="1"></circle>
            </svg>
        `,biblioteca:`
            <svg ${r}>
                <rect x="3" y="5" width="4" height="15" rx="1"></rect>
                <rect x="8.5" y="3" width="4" height="17" rx="1"></rect>
                <path d="m14.5 5 3.2-1 4.2 14.5-3.2 1z"></path>
                <path d="M4.5 9h1"></path>
                <path d="M10 8h1"></path>
                <path d="m16.5 9 3.2-.9"></path>
            </svg>
        `,flecha:`
            <svg ${r}>
                <path d="M5 12h14"></path>
                <path d="m14 7 5 5-5 5"></path>
            </svg>
        `};return t[e]||t.estadistica}const Sf=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function zf(e,a){return Array.isArray(a)?a.includes(e):e===a}function _f(e,a){return Object.entries(a).every(([r,t])=>zf(e[r],t))}function Df(e){return Sf.filter(r=>_f(e,r.condiciones)).sort((r,t)=>Object.keys(t.condiciones).length-Object.keys(r.condiciones).length)[0]||null}function xr(e){const a=Df(e);return a?{id:a.id,...a.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const qf={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]},"t-student-independientes":{nombre:"t de Student para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y puede asumirse homogeneidad de varianzas.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas de los grupos pueden considerarse homogéneas."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","Homogeneidad de varianzas entre los grupos."],estadistico:"El estadístico t expresa la diferencia entre las medias muestrales en unidades de su error estándar, utilizando una estimación combinada de la varianza.",efecto:"d de Cohen y g de Hedges. Se recomienda g de Hedges cuando las muestras son pequeñas, debido a su corrección del sesgo.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Welch cuando las varianzas no pueden considerarse iguales.","U de Mann–Whitney cuando los datos son ordinales, presentan desviaciones importantes de la normalidad o contienen valores atípicos problemáticos.","Modelos lineales cuando se desea incorporar covariables o estructuras de diseño más complejas."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Elegir Student sin revisar la homogeneidad de varianzas.","Interpretar un valor p no significativo como prueba de igualdad entre las medias.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Concluir causalidad cuando el diseño de investigación no la permite."],ejemplo:"Se desea comparar la calificación media de estudiantes que recibieron dos estrategias didácticas diferentes, utilizando grupos independientes.",referencias:["Student. (1908). The probable error of a mean.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"t-welch-independientes":{nombre:"t de Welch para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y no puede asumirse igualdad entre las varianzas poblacionales.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas son diferentes o los tamaños muestrales están desequilibrados."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","No requiere homogeneidad de varianzas."],estadistico:"El estadístico t de Welch expresa la diferencia entre las medias muestrales en unidades de su error estándar, estimando por separado la contribución de la varianza de cada grupo. Los grados de libertad se calculan mediante la aproximación de Welch–Satterthwaite.",efecto:"d de Cohen y g de Hedges, indicando claramente el criterio utilizado para estandarizar la diferencia de medias. Se recomienda informar también el intervalo de confianza de la diferencia.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Student cuando las varianzas pueden considerarse homogéneas.","U de Mann–Whitney cuando los datos son ordinales o presentan desviaciones importantes de la normalidad.","Modelos lineales con errores estándar robustos cuando se desea incorporar covariables."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Redondear los grados de libertad antes de informar el resultado.","Interpretar un valor p no significativo como demostración de igualdad.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Confundir desigualdad de varianzas con ausencia de normalidad."],ejemplo:"Se desea comparar la calificación media de estudiantes de dos estrategias didácticas independientes, cuyos grupos presentan tamaños y varianzas diferentes.",referencias:["Welch, B. L. (1947). The generalization of Student's problem when several different population variances are involved.","Delacre, M., Lakens, D., & Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"mann-whitney":{nombre:"Prueba U de Mann–Whitney",definicion:"Prueba no paramétrica basada en rangos que permite comparar dos grupos independientes cuando la variable es ordinal o cuantitativa y no resulta adecuado aplicar una prueba paramétrica de comparación de medias.",cuandoUsar:["Se comparan exactamente dos grupos independientes.","La variable dependiente es ordinal o cuantitativa.","Las observaciones de un grupo no están relacionadas con las del otro.","Los datos presentan asimetría, valores atípicos importantes o incumplimiento de la normalidad.","El análisis pretende comparar la posición o distribución de los valores entre los grupos."],hipotesis:{h0:"Las distribuciones de los dos grupos son iguales.",h1:"Las distribuciones de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","La variable dependiente posee al menos una escala ordinal.","Los grupos son mutuamente independientes.","Las observaciones pueden ordenarse mediante rangos.","Para interpretar el resultado como una diferencia de medianas, las distribuciones deben tener formas semejantes."],estadistico:"El estadístico U se obtiene a partir de los rangos asignados conjuntamente a las observaciones de ambos grupos. Valores extremos de U indican una separación entre las distribuciones.",efecto:"Delta de Cliff, correlación biserial de rangos o correlación r basada en el estadístico z. El tamaño del efecto debe interpretarse junto con el valor p.",reporteAPA:"U = valor, z = valor, p = valor, delta de Cliff = valor o r = valor.",posthoc:[],alternativas:["t de Student cuando existe normalidad aproximada y homogeneidad de varianzas.","t de Welch cuando existe normalidad aproximada, pero las varianzas son diferentes.","Pruebas de permutación o métodos robustos cuando se desea comparar otros parámetros poblacionales."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas cuando las distribuciones tienen formas diferentes.","Aplicarla a mediciones relacionadas o pareadas.","Ignorar la presencia de numerosos empates.","Informar únicamente el valor p sin una medida de tamaño del efecto.","Concluir que los grupos son iguales cuando el resultado no es estadísticamente significativo."],ejemplo:"Se desea comparar el nivel de satisfacción, medido mediante una escala ordinal, entre estudiantes de dos estrategias didácticas independientes.",referencias:["Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Cliff, N. (1993). Dominance statistics: Ordinal analyses to answer ordinal questions."]}};function Of(e){return qf[e]||null}const Ff={"t-student-relacionadas":{nombre:"t de Student para muestras relacionadas",definicion:"Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.","La variable dependiente es cuantitativa.","La distribución de las diferencias pareadas es aproximadamente normal.","Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."],hipotesis:{h0:"La media poblacional de las diferencias pareadas es igual a cero.",h1:"La media poblacional de las diferencias pareadas es diferente de cero."},supuestos:["Las observaciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable dependiente es cuantitativa.","La distribución de las diferencias es aproximadamente normal.","No existen valores atípicos extremos en las diferencias pareadas."],estadistico:"El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",efecto:"d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",reporteAPA:"t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",posthoc:[],alternativas:["Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.","Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.","Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."],erroresFrecuentes:["Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.","Aplicar la prueba a grupos independientes.","Alterar el orden de los participantes entre las dos columnas.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",referencias:["Student. (1908). The probable error of a mean.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"wilcoxon-relacionadas":{nombre:"Prueba de rangos con signo de Wilcoxon",definicion:"Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","La variable dependiente es ordinal o cuantitativa.","Las diferencias no cumplen adecuadamente el supuesto de normalidad.","Existen valores atípicos importantes que desaconsejan la prueba t pareada.","Las observaciones pueden ordenarse y las parejas están correctamente identificadas."],hipotesis:{h0:"La distribución de las diferencias pareadas es simétrica alrededor de cero.",h1:"La distribución de las diferencias pareadas no está centrada en cero."},supuestos:["Las mediciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable posee al menos una escala ordinal.","Las diferencias pueden ordenarse mediante rangos.","Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."],estadistico:"El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",efecto:"Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",reporteAPA:"W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",posthoc:[],alternativas:["t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.","Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.","Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.","Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.","Informar únicamente el valor p sin tamaño del efecto.","Perder la correspondencia entre las filas de las dos mediciones."],ejemplo:"Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",referencias:["Wilcoxon, F. (1945). Individual comparisons by ranking methods.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."]}},Uf={"anova-un-factor":{nombre:"ANOVA de un factor",definicion:"Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las observaciones pertenecen a un solo grupo y son independientes entre sí.","Las distribuciones dentro de los grupos son aproximadamente normales.","Las varianzas poblacionales pueden considerarse homogéneas."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Normalidad aproximada dentro de cada grupo o de los residuos del modelo.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos extremos que dominen el resultado."],estadistico:"El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",efecto:"Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",reporteAPA:"F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",posthoc:["Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.","Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."],alternativas:["ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.","Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.","Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."],erroresFrecuentes:["Realizar numerosas pruebas t sin controlar el error familiar.","Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.","Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.","Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.","Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."],ejemplo:"Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",referencias:["Fisher, R. A. (1925). Statistical Methods for Research Workers.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"anova-welch":{nombre:"ANOVA de Welch",definicion:"Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.","Los tamaños muestrales pueden ser distintos.","Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Varianza positiva en cada grupo.","Normalidad aproximada dentro de los grupos o suficiente robustez muestral.","Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."],estadistico:"El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",efecto:"Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",reporteAPA:"F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",posthoc:["Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."],alternativas:["ANOVA clásico cuando la homogeneidad de varianzas es razonable.","Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.","Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."],erroresFrecuentes:["Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.","Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.","Interpretar un resultado global significativo sin realizar comparaciones posteriores.","Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.","Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."],ejemplo:"Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",referencias:["Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.","Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"kruskal-wallis":{nombre:"Prueba de Kruskal–Wallis",definicion:"Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable es al menos ordinal.","Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.","Las observaciones pueden ordenarse mediante rangos.","Se desea contrastar diferencias globales en la localización de las distribuciones."],hipotesis:{h0:"Los grupos proceden de distribuciones con la misma localización.",h1:"Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."},supuestos:["Independencia de las observaciones entre grupos.","Variable con escala ordinal, de intervalo o de razón.","Las observaciones pueden ordenarse.","Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.","Los empates deben incorporarse mediante la corrección correspondiente."],estadistico:"El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",efecto:"Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",reporteAPA:"H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",posthoc:["Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."],alternativas:["ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.","ANOVA de Welch cuando se comparan medias con varianzas desiguales.","Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.","Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.","Ignorar los empates durante el cálculo de rangos.","Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.","Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."],ejemplo:"Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",referencias:["Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.","Dunn, O. J. (1964). Multiple comparisons using rank sums.","Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."]}},jf={"anova-medidas-repetidas":{nombre:"ANOVA de medidas repetidas",definicion:"Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",cuandoUsar:["Se comparan tres o más momentos o condiciones relacionadas.","Las mismas personas participan en todas las mediciones.","La variable dependiente es cuantitativa.","Las diferencias entre condiciones son aproximadamente normales.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Todas las medias poblacionales de las condiciones son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Las observaciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable dependiente es cuantitativa.","No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.","Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."],estadistico:"El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",efecto:"Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",reporteAPA:"F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",posthoc:["Comparaciones t pareadas cuando el contraste global es significativo.","Ajuste de Holm para controlar las comparaciones múltiples.","Informe diferencias medias, intervalos de confianza y d_z."],alternativas:["Prueba de Friedman para datos ordinales o no paramétricos.","Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."],erroresFrecuentes:["Tratar las mediciones repetidas como grupos independientes.","Perder la correspondencia entre filas.","Ignorar la esfericidad o la corrección utilizada.","Realizar múltiples comparaciones sin ajuste.","Informar únicamente el valor p."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",referencias:["Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.","Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."]},friedman:{nombre:"Prueba de Friedman",definicion:"Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",cuandoUsar:["Se comparan tres o más mediciones relacionadas.","La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.","Las mismas personas son evaluadas en todas las condiciones.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Las condiciones tienen la misma distribución de rangos.",h1:"Al menos una condición presenta una distribución de rangos diferente."},supuestos:["Las mediciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable posee al menos escala ordinal.","Cada persona aporta una observación en cada condición."],estadistico:"El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",efecto:"W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",reporteAPA:"Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",posthoc:["Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.","Ajuste de Holm para controlar comparaciones múltiples.","Informe valores p ajustados y tamaños del efecto por rangos."],alternativas:["ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.","Modelos ordinales mixtos con datos faltantes o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Perder la correspondencia entre condiciones.","Concluir que todas las condiciones difieren por un resultado global significativo.","Realizar comparaciones de Wilcoxon sin ajuste.","Ignorar los empates."],ejemplo:"Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",referencias:["Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.","Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."]}},Fi={nombre:"Rho de Spearman",definicion:"Coeficiente no paramétrico basado en rangos que cuantifica la intensidad y dirección de una relación monotónica entre dos variables ordinales o cuantitativas.",cuandoUsar:["Las observaciones están emparejadas fila por fila.","Las variables poseen al menos una escala ordinal.","La relación esperada es monotónica, aunque no necesariamente lineal.","La normalidad no se cumple o existen valores atípicos que desaconsejan Pearson."],hipotesis:{h0:"El coeficiente rho poblacional es igual a cero; no existe asociación monotónica.",h1:"El coeficiente rho poblacional es diferente de cero."},supuestos:["Pares de observaciones independientes entre sí.","Correspondencia correcta entre las dos variables.","Variables ordenables mediante rangos.","Relación aproximadamente monotónica."],estadistico:"Rho de Spearman es la correlación de Pearson calculada sobre los rangos, asignando rangos promedio cuando existen empates.",efecto:"El propio coeficiente rho expresa dirección y magnitud de la asociación monotónica.",reporteAPA:"ρs = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Pearson para relaciones lineales entre variables cuantitativas con supuestos razonables.","Tau-b de Kendall cuando existen muchos empates o la muestra es pequeña.","Modelos no lineales cuando la relación cambia de dirección."],erroresFrecuentes:["Aplicarlo sin comprobar que la relación sea monotónica.","Interpretarlo como evidencia causal.","Ignorar valores atípicos y errores de correspondencia entre filas.","Informar únicamente el valor p sin el coeficiente ni su intervalo."],ejemplo:"Se estudia la relación monotónica entre participación en clase y nivel de logro académico.",referencias:["Spearman, C. (1904). The proof and measurement of association between two things.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},Vf={"relacion-no-monotonica":{nombre:"Análisis de una relación no monotónica",definicion:"Procedimiento exploratorio y de modelización utilizado cuando la relación entre dos variables cambia de dirección o presenta una forma curva que no puede resumirse adecuadamente mediante Pearson, Spearman o Kendall.",cuandoUsar:["El diagrama de dispersión muestra una relación curva o cambios de dirección.","La asociación no es aproximadamente lineal ni monotónica.","Un coeficiente próximo a cero contradice una estructura visible en el gráfico.","Se desea identificar una función o modelo que represente mejor la relación."],hipotesis:{h0:"La hipótesis nula dependerá del modelo finalmente seleccionado.",h1:"La variable explicativa contribuye a describir una estructura no lineal en la variable resultado."},supuestos:["Correspondencia correcta entre las observaciones de ambas variables.","Independencia entre los pares de observaciones.","Selección del modelo basada en teoría, diseño y examen gráfico.","Revisión de valores atípicos, residuos y observaciones influyentes.","Evitar elegir un modelo únicamente porque produce el mayor R²."],estadistico:"No existe un único estadístico universal. Según la estructura pueden utilizarse términos polinomiales, regresión segmentada, suavizadores LOESS, splines, modelos aditivos generalizados u otros modelos no lineales.",efecto:"R² y R² ajustado cuando sean pertinentes, reducción del error, parámetros del modelo, intervalos de confianza y medidas de ajuste predictivo.",reporteAPA:"Describa la forma observada en el diagrama, justifique el modelo utilizado, informe sus coeficientes e intervalos de confianza, medidas de ajuste y diagnóstico de residuos.",posthoc:[],alternativas:["Regresión polinómica cuando existe una curvatura simple y teóricamente justificable.","Regresión segmentada cuando la pendiente cambia a partir de uno o más puntos.","LOESS o splines para exploración flexible de la forma.","Modelos aditivos generalizados para estimar relaciones suaves no lineales.","Transformaciones de variables cuando sean interpretables y estén justificadas."],erroresFrecuentes:["Concluir que no existe relación porque Pearson o Spearman están próximos a cero.","Forzar una recta sobre una relación claramente curva.","Seleccionar polinomios de grado elevado sin justificación.","Interpretar una relación observacional como causal.","Informar únicamente R² sin revisar los residuos ni la estabilidad del modelo."],ejemplo:"La relación entre ansiedad y rendimiento puede mostrar un patrón de U invertida: niveles muy bajos y muy altos de ansiedad se asocian con menor rendimiento, mientras que niveles intermedios se relacionan con mejores resultados.",referencias:["Harrell, F. E. (2015). Regression Modeling Strategies.","Wood, S. N. (2017). Generalized Additive Models.","James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."]},pearson:{nombre:"Correlación de Pearson",definicion:"Coeficiente paramétrico que cuantifica la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",cuandoUsar:["Las dos variables son cuantitativas.","Las observaciones están emparejadas fila por fila.","La relación es aproximadamente lineal.","No existen valores atípicos influyentes importantes."],hipotesis:{h0:"El coeficiente de correlación poblacional es igual a cero.",h1:"El coeficiente de correlación poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre X e Y.","Relación lineal.","Ausencia de valores atípicos influyentes.","Para la inferencia clásica, normalidad bivariada aproximada."],estadistico:"El coeficiente r estandariza la covarianza mediante las desviaciones estándar de ambas variables; su significación se evalúa mediante una distribución t con n − 2 grados de libertad.",efecto:"El coeficiente r expresa la magnitud y dirección. R² puede informarse descriptivamente como proporción de variación lineal compartida.",reporteAPA:"r(gl) = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando la relación es monotónica, pero no lineal, o no se cumplen adecuadamente los supuestos.","Kendall para muestras pequeñas o numerosos empates.","Modelos de regresión cuando se desea predecir o controlar covariables."],erroresFrecuentes:["Calcular Pearson sin revisar el diagrama de dispersión.","Concluir causalidad a partir de una correlación.","Ignorar valores atípicos influyentes.","Interpretar R² como prueba de causalidad o ajuste de un modelo completo."],ejemplo:"Se analiza la relación lineal entre horas de estudio y calificación final.",referencias:["Pearson, K. (1896). Mathematical contributions to the theory of evolution.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"spearman-cuantitativas":Fi,"spearman-ordinales":Fi,kendall:{nombre:"Tau-b de Kendall",definicion:"Coeficiente ordinal basado en la comparación de pares concordantes y discordantes, con corrección por empates en ambas variables.",cuandoUsar:["Las variables son ordinales o cuantitativas ordenables.","La relación esperada es monotónica.","La muestra es pequeña o existen numerosos empates.","Las observaciones están correctamente emparejadas."],hipotesis:{h0:"El coeficiente tau-b poblacional es igual a cero.",h1:"El coeficiente tau-b poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre las variables.","Escala al menos ordinal.","Interpretación basada en concordancia y discordancia de pares."],estadistico:"Tau-b compara el número de pares concordantes y discordantes y ajusta el denominador por los empates observados en X e Y.",efecto:"Tau-b es una medida directa de dirección y magnitud de la concordancia ordinal.",reporteAPA:"τb = valor, z = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando los empates no son numerosos y se prefiere una correlación de rangos.","Pearson cuando las variables son cuantitativas y la relación es lineal.","Modelos ordinales para estructuras más complejas."],erroresFrecuentes:["Confundir tau-b con tau-a y omitir la corrección por empates.","No informar pares concordantes, discordantes o empates cuando son relevantes.","Interpretar asociación como causalidad.","Asignar códigos ordinales cuyo orden no representa la variable."],ejemplo:"Se estudia la concordancia entre nivel de participación y nivel de desempeño, ambos medidos ordinalmente.",referencias:["Kendall, M. G. (1938). A new measure of rank correlation.","Agresti, A. (2010). Analysis of Ordinal Categorical Data."]},"punto-biserial":{nombre:"Correlación punto-biserial",definicion:"Coeficiente que cuantifica la relación entre una variable dicotómica genuina y una variable cuantitativa.",cuandoUsar:["Una variable tiene exactamente dos categorías reales.","La segunda variable es cuantitativa.","Las observaciones son independientes.","Se desea expresar la diferencia entre los grupos mediante un coeficiente de correlación."],hipotesis:{h0:"El coeficiente punto-biserial poblacional es igual a cero.",h1:"El coeficiente punto-biserial poblacional es diferente de cero."},supuestos:["Variable dicotómica genuina, no creada artificialmente al dividir una variable continua.","Variable cuantitativa dentro de cada categoría.","Independencia de las observaciones.","Ausencia de valores atípicos extremos dentro de las categorías."],estadistico:"Es algebraicamente equivalente a la correlación de Pearson entre una codificación 0/1 y la variable cuantitativa, y a la prueba t para dos grupos bajo condiciones equivalentes.",efecto:"El coeficiente rpb expresa dirección y magnitud; el signo depende de la categoría codificada como 1.",reporteAPA:"rpb = valor, p = valor, IC 95 % [LI, LS], n = valor; indique la categoría codificada como 1.",posthoc:[],alternativas:["t de Student o Welch para presentar directamente la diferencia de medias.","Correlación biserial cuando la dicotomía procede de una variable continua subyacente.","Regresión lineal o logística según el objetivo analítico."],erroresFrecuentes:["No indicar cuál categoría fue codificada como 1.","Utilizarla con más de dos categorías.","Confundir punto-biserial con correlación biserial.","Interpretar el signo sin considerar la codificación."],ejemplo:"Se analiza la relación entre participar o no en tutoría y la calificación final.",referencias:["Cureton, E. E. (1956). Rank-biserial correlation.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]}},Ui={nombre:"Regresión lineal",definicion:"Modelo que representa el valor medio de una variable dependiente cuantitativa como combinación lineal de uno o varios predictores, estimando los coeficientes habitualmente mediante mínimos cuadrados ordinarios.",cuandoUsar:["La variable dependiente es cuantitativa continua.","Se desea explicar cambios medios, controlar covariables o realizar predicciones.","La relación entre la respuesta y cada predictor cuantitativo es aproximadamente lineal, manteniendo constantes los demás.","El diseño y la teoría justifican la inclusión de los predictores."],hipotesis:{h0:"En la prueba global, todos los coeficientes de pendiente son iguales a cero; para cada predictor, su coeficiente parcial es igual a cero.",h1:"Al menos un coeficiente de pendiente difiere de cero; en la prueba individual, el coeficiente del predictor evaluado difiere de cero."},supuestos:["Independencia entre las observaciones y estructura de dependencia correctamente modelada.","Relación aproximadamente lineal entre respuesta y predictores cuantitativos.","Varianza residual aproximadamente constante.","Residuos aproximadamente normales para la inferencia clásica, especialmente en muestras pequeñas.","Ausencia de multicolinealidad severa.","Ausencia de observaciones excesivamente influyentes sin explicación sustantiva."],estadistico:"El modelo se evalúa mediante una prueba F global y pruebas t para los coeficientes. R² resume la proporción de variabilidad explicada en la muestra y R² ajustado penaliza la inclusión de predictores adicionales.",efecto:"Coeficientes no estandarizados con intervalos de confianza, coeficientes estandarizados cuando sean comparables, R², R² ajustado y medidas de error como RMSE o MAE.",reporteAPA:"Informe F(gl1, gl2), p, R², R² ajustado, coeficientes B, errores estándar, t, p e IC 95 %. Describa los diagnósticos de residuos, colinealidad e influencia.",posthoc:[],alternativas:["Transformaciones o términos polinómicos cuando la forma no es lineal y existe justificación.","Regresión robusta cuando hay heterocedasticidad o valores influyentes que no pueden resolverse mediante revisión de datos.","Modelos mixtos o de medidas repetidas cuando las observaciones están agrupadas o correlacionadas.","Modelos generalizados cuando la variable dependiente no es continua y aproximadamente normal."],erroresFrecuentes:["Interpretar asociación como causalidad sin un diseño que la sustente.","Elegir predictores únicamente por valores p obtenidos en la misma muestra.","Informar R² sin revisar residuos, colinealidad y observaciones influyentes.","Extrapolar fuera del rango observado.","Comparar la magnitud de coeficientes no estandarizados medidos en escalas distintas.","Confundir un resultado estadísticamente significativo con utilidad práctica o predictiva."],ejemplo:"Se modela la calificación final a partir de horas de estudio, asistencia y puntuación diagnóstica inicial.",referencias:["Harrell, F. E. (2015). Regression Modeling Strategies.","Kutner, M. H., Nachtsheim, C. J., Neter, J., & Li, W. (2005). Applied Linear Statistical Models.","James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."]},ji={nombre:"Regresión logística binaria",definicion:"Modelo lineal generalizado que relaciona uno o varios predictores con la probabilidad de un evento dicotómico mediante la función logit y estima razones de probabilidades ajustadas.",cuandoUsar:["La variable dependiente contiene exactamente dos categorías codificadas, por ejemplo 0 y 1.","Se desea explicar o predecir la probabilidad de un evento.","Se requiere controlar simultáneamente uno o varios predictores.","La cantidad de eventos y no eventos es suficiente para la complejidad del modelo."],hipotesis:{h0:"En la prueba global, todos los coeficientes de los predictores son iguales a cero; en cada prueba Wald, el coeficiente evaluado es igual a cero y su odds ratio es igual a 1.",h1:"Al menos un coeficiente difiere de cero; para el predictor evaluado, su odds ratio difiere de 1."},supuestos:["Resultado correctamente codificado y definición explícita de la categoría considerada evento.","Independencia entre observaciones o estructura de dependencia modelada adecuadamente.","Relación aproximadamente lineal entre cada predictor cuantitativo y el logit del evento.","Ausencia de multicolinealidad severa.","Ausencia de separación completa o cuasicompleta.","Tamaño muestral y número de eventos suficientes para estimar los parámetros.","Revisión de observaciones influyentes, discriminación y calibración."],estadistico:"La prueba de razón de verosimilitudes compara el modelo con un modelo nulo. Las pruebas Wald evalúan coeficientes individuales. La curva ROC y el AUC resumen discriminación, mientras que la calibración compara probabilidades estimadas y frecuencias observadas.",efecto:"Odds ratios ajustadas con intervalos de confianza, pseudo-R², AUC, sensibilidad, especificidad, F1, medidas de calibración y criterios de información como AIC y BIC.",reporteAPA:"Informe χ² de razón de verosimilitudes, gl, p, pseudo-R², coeficientes B, errores estándar, z, p, OR e IC 95 %. Describa AUC, umbral, sensibilidad, especificidad, calibración y diagnósticos de influencia.",posthoc:[],alternativas:["Regresión logística penalizada cuando existe separación o alta dimensionalidad.","Regresión logística multinomial cuando el resultado tiene más de dos categorías nominales.","Regresión ordinal cuando las categorías poseen un orden natural.","Modelos mixtos o GEE cuando las observaciones están agrupadas o repetidas."],erroresFrecuentes:["Interpretar una odds ratio como riesgo relativo sin considerar la frecuencia del evento.","No indicar cuál categoría fue codificada como 1.","Usar la exactitud como única medida con clases desequilibradas.","Elegir automáticamente el umbral 0.50 sin considerar el costo de falsos positivos y falsos negativos.","Confundir discriminación elevada con buena calibración.","Interpretar significación estadística como causalidad o utilidad clínica/educativa automática."],ejemplo:"Se estima la probabilidad de aprobar una asignatura a partir de horas de estudio, asistencia y rendimiento previo.",referencias:["Hosmer, D. W., Lemeshow, S., & Sturdivant, R. X. (2013). Applied Logistic Regression.","Harrell, F. E. (2015). Regression Modeling Strategies.","Steyerberg, E. W. (2019). Clinical Prediction Models."]},Js={nombre:"Regresión de Poisson",definicion:"Modelo lineal generalizado con enlace logarítmico para una variable de conteo, cuya media condicional se modela como función exponencial de los predictores y de una exposición opcional.",cuandoUsar:["La variable dependiente contiene enteros no negativos.","Los conteos representan eventos observados durante una exposición, tiempo o población en riesgo.","La media y la varianza condicional son aproximadamente compatibles con Poisson.","Se desean estimar razones de tasas de incidencia ajustadas."],hipotesis:{h0:"En la prueba global, todos los coeficientes de los predictores son iguales a cero; individualmente, la IRR del predictor es igual a 1.",h1:"Al menos un coeficiente difiere de cero; individualmente, la IRR del predictor difiere de 1."},supuestos:["Conteos enteros no negativos y definición adecuada de la unidad de observación.","Independencia entre observaciones o estructura de dependencia modelada.","Exposición positiva correctamente incorporada mediante un offset cuando difiere entre observaciones.","Relación aproximadamente lineal entre predictores cuantitativos y el logaritmo de la tasa esperada.","Ausencia de multicolinealidad severa.","Dispersión condicional compatible con Poisson y ausencia de exceso grave de ceros no modelado.","Revisión de residuos, leverage y observaciones influyentes."],estadistico:"La prueba de razón de verosimilitudes compara el modelo con un modelo nulo. Las pruebas Wald evalúan coeficientes individuales. La dispersión de Pearson, la deviance, AIC y BIC ayudan a revisar el ajuste.",efecto:"Razones de tasas de incidencia —IRR— con intervalos de confianza, pseudo-R², deviance, AIC, BIC y medidas de error o calibración del conteo.",reporteAPA:"Informe χ² de razón de verosimilitudes, gl, p, coeficientes B, errores estándar, z, p, IRR e IC 95 %. Indique la exposición, el índice de dispersión, AIC, BIC y los diagnósticos de residuos e influencia.",posthoc:[],alternativas:["Regresión binomial negativa cuando existe sobredispersión.","Modelo inflado en ceros cuando hay más ceros de los esperados por el proceso de conteo.","Modelo hurdle cuando el proceso que genera ceros difiere del proceso que genera conteos positivos.","Modelos mixtos o GEE para conteos agrupados o repetidos."],erroresFrecuentes:["Aplicar Poisson sin comprobar la sobredispersión.","Omitir la exposición cuando los períodos o poblaciones en riesgo son diferentes.","Interpretar la IRR como diferencia absoluta de conteos.","Confundir asociación con causalidad.","Ignorar exceso de ceros y observaciones influyentes.","Comparar tasas sin mantener constante la unidad de exposición."],ejemplo:"Se modela el número de ausencias estudiantiles según carga académica, distancia al centro y meses de seguimiento.",referencias:["Cameron, A. C., & Trivedi, P. K. (2013). Regression Analysis of Count Data.","Hilbe, J. M. (2014). Modeling Count Data.","Agresti, A. (2015). Foundations of Linear and Generalized Linear Models."]},Bf={...Js,nombre:"Regresión binomial negativa",definicion:"Modelo lineal generalizado para conteos que amplía Poisson mediante un parámetro de dispersión, permitiendo que la varianza condicional sea mayor que la media.",cuandoUsar:["La variable dependiente contiene enteros no negativos.","Existe sobredispersión persistente bajo Poisson.","La varianza aumenta más rápidamente que la media condicional.","Se desean estimar razones de tasas ajustadas sin subestimar los errores estándar."],supuestos:["Conteos enteros no negativos.","Independencia entre observaciones o dependencia modelada adecuadamente.","Exposición positiva correctamente incorporada cuando corresponde.","Relación aproximadamente lineal entre predictores cuantitativos y el logaritmo de la tasa esperada.","Ausencia de multicolinealidad severa.","Forma de sobredispersión compatible con la parametrización binomial negativa utilizada.","Revisión de exceso de ceros, residuos e influencia."],estadistico:"La razón de verosimilitudes evalúa el modelo global. El parámetro de dispersión cuantifica la heterogeneidad adicional. AIC y BIC permiten comparar con Poisson cuando ambos modelos se ajustan a los mismos datos.",efecto:"IRR ajustadas con intervalos de confianza, parámetro de dispersión, pseudo-R², deviance, AIC y BIC.",reporteAPA:"Informe χ² global, gl, p, parámetro de dispersión, coeficientes B, errores estándar, z, p, IRR e IC 95 %. Compare AIC con Poisson y describa la exposición, los residuos y las observaciones influyentes.",alternativas:["Poisson cuando la dispersión es compatible con la igualdad media-varianza.","Modelos inflados en ceros o hurdle cuando existe un proceso específico que genera ceros.","Modelos mixtos binomiales negativos para datos agrupados o longitudinales.","Modelos de conteo con truncamiento cuando ciertos valores no pueden observarse por diseño."],erroresFrecuentes:["Seleccionarla únicamente porque produce un AIC ligeramente menor, sin evidencia de sobredispersión.","Interpretar el parámetro de dispersión como tamaño del efecto sustantivo.","Omitir la exposición o usar una unidad de exposición inconsistente.","Ignorar exceso de ceros, truncamiento o dependencia entre observaciones.","Interpretar IRR como efectos causales sin un diseño apropiado."],ejemplo:"Se modela el número de errores en evaluaciones digitales cuando la variabilidad entre estudiantes supera claramente la esperada bajo Poisson.",referencias:["Cameron, A. C., & Trivedi, P. K. (2013). Regression Analysis of Count Data.","Hilbe, J. M. (2011). Negative Binomial Regression.","Agresti, A. (2015). Foundations of Linear and Generalized Linear Models."]},Gf={"regresion-lineal-simple":{...Ui,nombre:"Regresión lineal simple"},"regresion-lineal-multiple":{...Ui,nombre:"Regresión lineal múltiple"},"regresion-logistica-binaria-simple":{...ji,nombre:"Regresión logística binaria simple"},"regresion-logistica-binaria-multiple":{...ji,nombre:"Regresión logística binaria múltiple"},"regresion-poisson":Js,"regresion-binomial-negativa":Bf},Hf={"fiabilidad-cuestionario":{nombre:"Consistencia interna de un cuestionario",definicion:"Evaluación del grado en que los ítems de una escala covarían entre sí y contribuyen a una puntuación común. El alfa de Cronbach y el omega de McDonald resumen aspectos diferentes de esa consistencia, pero no demuestran por sí solos validez ni unidimensionalidad.",cuandoUsar:["El instrumento contiene varios ítems destinados a medir un mismo constructo o una subescala claramente definida.","Las respuestas se registran en una escala numérica u ordinal tratada como aproximadamente continua.","Se desea estudiar la contribución de cada ítem antes de interpretar una puntuación total.","Los ítems invertidos han sido identificados y recodificados correctamente."],hipotesis:{h0:"La fiabilidad no suele formularse como una única prueba de hipótesis principal; se estiman coeficientes y se examina su precisión, dimensionalidad y coherencia sustantiva.",h1:"Los ítems comparten suficiente varianza común para sustentar una puntuación de escala interpretable dentro de la población y condiciones estudiadas."},supuestos:["Los ítems pertenecen teóricamente al mismo constructo o subescala.","Las observaciones de los participantes son independientes.","Los ítems invertidos están correctamente recodificados.","No existen ítems sin variabilidad ni errores sistemáticos de codificación.","Para interpretar alfa como fiabilidad bajo equivalencia tau, las cargas y errores deben satisfacer condiciones restrictivas.","Para omega unidimensional, una estructura factorial de un factor debe ser razonable.","La muestra y el patrón de datos ausentes deben describirse y justificarse."],estadistico:"El alfa utiliza las varianzas de los ítems y de la puntuación total. El alfa estandarizado se obtiene a partir de la correlación interítem media. El omega combina cargas factoriales y varianzas de error. La correlación ítem–total corregida y el alfa si se elimina el ítem ayudan a revisar el comportamiento individual.",efecto:"Informe alfa, alfa estandarizado, omega, correlación interítem media, correlaciones ítem–total corregidas y, cuando sea pertinente, intervalos de confianza obtenidos mediante bootstrap u otro procedimiento adecuado.",reporteAPA:"Describa la muestra, número de ítems, rango de respuesta, recodificación, tratamiento de datos ausentes, α, ω, correlación interítem media y rango de correlaciones ítem–total. Informe la evidencia de dimensionalidad utilizada para justificar la puntuación total.",posthoc:[],alternativas:["Fiabilidad por subescala cuando el instrumento es multidimensional.","Omega jerárquico cuando existe un factor general y factores específicos.","Coeficientes ordinales basados en correlaciones policóricas para ítems ordinales con pocas categorías.","Estabilidad test–retest para evaluar consistencia temporal.","Acuerdo entre evaluadores cuando las puntuaciones dependen de jueces o codificadores."],erroresFrecuentes:["Interpretar alfa elevado como evidencia de validez.","Calcular un único alfa para dimensiones diferentes.","Eliminar ítems únicamente porque aumenta el alfa.","No recodificar ítems invertidos.","Usar 0.70 como criterio universal sin considerar propósito, muestra y consecuencias.","Ignorar redundancia cuando alfa supera 0.90.","Reportar omega sin describir el modelo factorial que lo sustenta."],ejemplo:"Se evalúa una escala de autorregulación académica de seis ítems, uno de ellos redactado en sentido inverso, para determinar si la puntuación total puede interpretarse con suficiente consistencia interna.",referencias:["Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests.","McDonald, R. P. (1999). Test Theory: A Unified Treatment.","Dunn, T. J., Baguley, T., & Brunsden, V. (2014). From alpha to omega.","Revelle, W., & Condon, D. M. (2019). Reliability from alpha to omega."]}};function Qs(e){return Hf[e]||Gf[e]||Vf[e]||jf[e]||Uf[e]||Ff[e]||Of(e)}function Wf(){const e=document.createElement("section");e.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const a={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};e.innerHTML=`
        <div id="asistente-pruebas">
            ${Vi()}
        </div>
    `;const r=e.querySelector("#asistente-pruebas"),t=o=>{r.innerHTML=o,window.scrollTo({top:0,behavior:"auto"})},n=()=>{Object.assign(a,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},c=()=>{a.pantalla="resultado-comparacion",t(Jf(a))},s=()=>{a.pantalla="resultado-relacion",t(Qf(a))},p=()=>{a.pantalla="resultado-asociacion",t(Xf(a))},u=()=>{a.pantalla="resultado-prediccion",t(Zf(a))},l=o=>{if(a.pantalla==="objetivo"){if(Object.assign(a,{objetivo:o,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),o==="comparar"){a.pantalla="tipo-variable",t(Bi());return}if(o==="relacionar"){a.pantalla="tipo-relacion",t(kt());return}if(o==="asociar"){a.pantalla="tipo-asociacion",t(Hi());return}if(o==="predecir"){a.pantalla="tipo-resultado",t(Wi());return}t(nb(o)),a.pantalla="desarrollo";return}if(a.pantalla==="tipo-variable"){Object.assign(a,{tipoVariable:o,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),a.pantalla="numero-grupos",t(yt());return}if(a.pantalla==="numero-grupos"){if(Object.assign(a,{numeroGrupos:o,relacion:"",normalidad:"",varianzas:""}),o==="uno"){if(a.relacion="una-muestra",a.tipoVariable==="categorica"){c();return}a.pantalla="normalidad",t(wt());return}a.pantalla="relacion-muestras",t(jr(a));return}if(a.pantalla==="relacion-muestras"){if(Object.assign(a,{relacion:o,normalidad:"",varianzas:""}),a.tipoVariable==="categorica"){c();return}a.pantalla="normalidad",t(wt());return}if(a.pantalla==="normalidad"){if(a.normalidad=o,a.varianzas="",a.tipoVariable==="cuantitativa"&&o==="si"&&a.relacion==="independientes"&&a.numeroGrupos!=="uno"){a.pantalla="varianzas",t(Gi());return}c();return}if(a.pantalla==="varianzas"){a.varianzas=o,c();return}if(a.pantalla==="tipo-relacion"){if(Object.assign(a,{tipoRelacion:o,normalidad:"",linealidad:"",empates:""}),o==="dicotomica-cuantitativa"){s();return}if(o==="ordinales"){a.pantalla="empates",t(Qi());return}a.pantalla="normalidad-relacion",t(Br());return}if(a.pantalla==="normalidad-relacion"){a.normalidad=o,a.linealidad="",a.pantalla="linealidad",t(Ji());return}if(a.pantalla==="linealidad"){a.linealidad=o,s();return}if(a.pantalla==="empates"){a.empates=o,s();return}if(a.pantalla==="tipo-asociacion"){Object.assign(a,{tipoAsociacion:o,frecuenciasEsperadas:""}),a.pantalla="frecuencias-esperadas",t(Yi());return}if(a.pantalla==="frecuencias-esperadas"){a.frecuenciasEsperadas=o,p();return}if(a.pantalla==="tipo-resultado"){Object.assign(a,{tipoResultado:o,numeroPredictores:"",sobredispersion:""}),a.pantalla="numero-predictores",t(Vr());return}if(a.pantalla==="numero-predictores"){if(a.numeroPredictores=o,a.sobredispersion="",a.tipoResultado==="conteo"){a.pantalla="sobredispersion",t(Ki());return}u();return}if(a.pantalla==="sobredispersion"){a.sobredispersion=o,u();return}},i=()=>{const d={"tipo-variable":()=>["objetivo",wa()],"numero-grupos":()=>["tipo-variable",Bi()],"relacion-muestras":()=>["numero-grupos",yt()],normalidad:()=>a.numeroGrupos==="uno"?["numero-grupos",yt()]:["relacion-muestras",jr(a)],varianzas:()=>["normalidad",wt()],"tipo-relacion":()=>["objetivo",wa()],"normalidad-relacion":()=>["tipo-relacion",kt()],linealidad:()=>["normalidad-relacion",Br()],empates:()=>["tipo-relacion",kt()],"tipo-asociacion":()=>["objetivo",wa()],"tipo-resultado":()=>["objetivo",wa()],"numero-predictores":()=>["tipo-resultado",Wi()],sobredispersion:()=>["numero-predictores",Vr()],"resultado-prediccion":()=>a.tipoResultado==="conteo"?["sobredispersion",Ki()]:["numero-predictores",Vr()],"frecuencias-esperadas":()=>["tipo-asociacion",Hi()],"resultado-asociacion":()=>["frecuencias-esperadas",Yi()],"resultado-comparacion":()=>a.varianzas?["varianzas",Gi()]:a.tipoVariable==="categorica"?a.numeroGrupos==="uno"?["numero-grupos",yt()]:["relacion-muestras",jr(a)]:["normalidad",wt()],"resultado-relacion":()=>a.tipoRelacion==="ordinales"?["empates",Qi()]:a.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",kt()]:a.linealidad?["linealidad",Ji()]:["normalidad-relacion",Br()]}[a.pantalla];if(!d){a.pantalla="objetivo",t(wa());return}const[m,f]=d();a.pantalla=m,t(f)};return r.addEventListener("click",o=>{const d=o.target.closest("[data-action], [data-value]");if(!d)return;const m=d.dataset.action,f=d.dataset.value;if(f){l(f);return}if(m==="ejecutar-prueba"){const g=d.dataset.prueba;if(!g)return;const x={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"chi-cuadrado-independencia-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-exacta-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"chi-cuadrado-independencia-rxc":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-freeman-halton":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"}}[g];if(!x)return;sessionStorage.setItem(x.almacenamiento,g),window.location.hash=`/${x.ruta}`;return}if(m==="ver-ficha"){const g=d.dataset.fichaId,b=Qs(g);if(!b)return;a.pantallaAnterior=a.pantalla,a.fichaActual=g,a.pantalla="ficha-metodologica",t(ab(b,g));return}if(m==="volver-resultado"){if(a.objetivo==="comparar"){c();return}if(a.objetivo==="relacionar"){s();return}if(a.objetivo==="asociar"){p();return}a.objetivo==="predecir"&&u();return}m==="iniciar"&&(a.pantalla="objetivo",t(wa())),m==="volver"&&i(),(m==="volver-inicio"||m==="reiniciar")&&(n(),t(Vi())),m==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),e}function Vi(){return`
        <section class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-12 md:px-12 md:py-16 shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-bold hover:text-white transition-colors mb-8"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-4">
                    Asistente metodológico inteligente
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6">
                    ¿Qué prueba estadística debo utilizar?
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Responda algunas preguntas sobre el objetivo, las variables y el diseño de su investigación. El sistema le orientará hacia la prueba estadística más adecuada.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-4xl">
                    ${Ct("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${Ct("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${Ct("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${Ct("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
                </div>

                <button
                    type="button"
                    data-action="iniciar"
                    class="mt-10 inline-flex items-center justify-center bg-white text-blue-700 font-black text-lg rounded-xl px-8 py-4 shadow-lg hover:bg-sky-50 transition-colors"
                >
                    Iniciar asistente
                    <span class="ml-3" aria-hidden="true">→</span>
                </button>
            </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            ${Hr("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${Hr("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${Hr("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function wa(){return de({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function Bi(){return de({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function yt(){return de({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function jr(e){const a=e.numeroGrupos==="dos"?"los dos grupos":"los grupos";return de({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${a} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function wt(){return de({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function Gi(){return de({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function kt(){return de({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function Hi(){return de({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function Wi(){return de({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function Vr(){return de({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function Ki(){return de({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function Yi(){return de({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function Br(){return de({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function Ji(){return de({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function Qi(){return de({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function de({paso:e,total:a,tituloPaso:r,pregunta:t,descripcion:n,opciones:c,accionVolver:s="volver"}){const p=Math.round(e/a*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${e} de ${a}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${r}
                        </h1>
                    </div>

                    <span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Progreso: ${p} %
                    </span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div
                        class="h-full bg-sky-400 rounded-full"
                        style="width: ${p}%"
                    ></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                    ${t}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${n}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${c.map(([u,l,i])=>ib(u,l,i)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${s}"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver
                    </button>

                    <p class="text-sm text-slate-500 font-semibold">
                        Seleccione una opción para continuar.
                    </p>
                </div>
            </div>
        </section>
    `}function Kf(e){const{tipoVariable:a,numeroGrupos:r,relacion:t,normalidad:n,varianzas:c}=e;if(a==="categorica")return r==="uno"?G("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):t==="relacionadas"?r==="dos"?G("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):G("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):G("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const s=a==="ordinal"||n==="no"||n==="no-se";return r==="uno"?s?G("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):G("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):r==="dos"?t==="relacionadas"?s?G("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):G("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):s?G("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):c==="si"?G("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):G("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):t==="relacionadas"?s?G("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):G("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):s?G("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):c==="si"?G("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):G("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function Yf(e){return e.tipoRelacion==="dicotomica-cuantitativa"?G("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):e.tipoRelacion==="ordinales"?e.empates==="si"||e.empates==="no-se"?G("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):G("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="no-monotonica"?{id:"relacion-no-monotonica",nombre:"No resumir la relación con un único coeficiente de correlación",razon:"Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",categoria:"Relación entre variables",tipo:"Exploración gráfica y modelización no lineal",efecto:"Reporte gráfico, R² de un modelo adecuado y medidas de ajuste.",reporte:"Presente el diagrama de dispersión, describa la forma observada y ajuste un modelo coherente con esa estructura. Informe los parámetros del modelo, sus intervalos de confianza, R² o medidas de ajuste y el análisis de residuos. No utilice Pearson o Spearman como resumen principal."}:e.linealidad==="no-se"?G("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."):e.normalidad!=="si"?G("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="si"?G("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):e.linealidad==="monotonica"?G("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):G("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function G(e,a,r){return{nombre:e,razon:a,efecto:r}}function vr(e){return{id:e.id,nombre:e.prueba,razon:e.descripcion,categoria:e.categoria,tipo:e.tipo,efecto:e.efecto}}function Jf(e){const a=xr(e),r=a.id==="sin-regla"?Kf(e):vr(a);return yr(r)}function Qf(e){const a=xr(e),r=a.id==="sin-regla"?Yf(e):vr(a);return yr(r)}function Xf(e){const a=xr(e),r=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:vr(a);return yr(r)}function Zf(e){const a=xr(e),r=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:vr(a);return yr(r)}function eb(e){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial","chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-2x2","fisher-exacta-2x2":"fisher-exacta-2x2","chi-cuadrado-independencia-rxc":"chi-cuadrado-independencia-rxc","fisher-freeman-halton":"fisher-freeman-halton"}[e]||""}function yr(e){const a=e.id&&Qs(e.id),r=eb(e.id);return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h1>

                ${e.categoria||e.tipo?`
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${e.categoria?`
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${e.categoria}
                                            </span>
                                        `:""}

                                ${e.tipo?`
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${e.tipo}
                                            </span>
                                        `:""}
                            </div>
                        `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${Gr("¿Por qué?",e.razon)}

                    ${Gr("Tamaño del efecto",e.efecto)}

                    ${Gr("Reporte recomendado",e.reporte||"Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
                </div>

                <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h2 class="font-black text-amber-900 mb-2">
                        Advertencia metodológica
                    </h2>

                    <p class="text-amber-900 leading-relaxed">
                        Esta recomendación orienta la selección inicial. Antes del análisis definitivo deben revisarse el diseño muestral, los valores atípicos, el tamaño de la muestra, los supuestos específicos y la calidad de la medición.
                    </p>
                </div>

                ${r?`
                            <div class="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                                            Herramienta de análisis
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Ejecute esta prueba con sus propios datos
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Introduzca sus datos y obtenga el estadístico, el valor p, los descriptivos, el tamaño del efecto y, cuando corresponda, las comparaciones posteriores.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ejecutar-prueba"
                                        data-prueba="${r}"
                                        class="shrink-0 inline-flex items-center justify-center bg-emerald-700 text-white font-black rounded-xl px-6 py-4 hover:bg-emerald-800 transition-colors shadow-lg"
                                    >
                                        Ejecutar esta prueba
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `:""}

                ${a?`
                            <div class="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-blue-700 text-xs font-black mb-2">
                                            Biblioteca metodológica
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Consulte la ficha completa de esta prueba
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Revise sus hipótesis, supuestos, tamaño del efecto, reporte APA, alternativas, errores frecuentes y referencias.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ver-ficha"
                                        data-ficha-id="${e.id}"
                                        class="shrink-0 inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                                    >
                                        Ver ficha metodológica
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `:""}

                <div class="flex flex-col sm:flex-row gap-3 mt-10">
                    <button
                        type="button"
                        data-action="volver"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Revisar respuesta
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar de nuevo
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `}function ab(e,a){return`
        <section class="rounded-3xl border border-blue-200 bg-white shadow-xl overflow-hidden">
            <header class="relative overflow-hidden bg-slate-950 text-white px-6 py-10 md:px-10 md:py-12">
                <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20"></div>

                <div class="relative z-10">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                    >
                        ← Volver al resultado
                    </button>

                    <p class="uppercase tracking-[0.20em] text-sky-300 text-xs font-black mb-3">
                        Biblioteca metodológica
                    </p>

                    <h1 class="text-3xl md:text-5xl font-black leading-tight">
                        ${e.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${a}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${Et("¿Qué es?",e.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${ka("¿Cuándo utilizarla?",e.cuandoUsar)}

                    ${ka("Supuestos",e.supuestos)}
                </div>

                ${tb(e.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Et("Estadístico de prueba",e.estadistico)}

                    ${Et("Tamaño del efecto",e.efecto)}
                </div>

                ${rb(e.reporteAPA)}

                ${e.posthoc?.length?ka("Análisis posteriores",e.posthoc):""}

                ${e.alternativas?.length?ka("Pruebas y procedimientos alternativos",e.alternativas):""}

                ${e.erroresFrecuentes?.length?ka("Errores frecuentes",e.erroresFrecuentes,"advertencia"):""}

                ${Et("Ejemplo de investigación",e.ejemplo)}

                ${e.referencias?.length?ka("Referencias recomendadas",e.referencias,"referencias"):""}

                <div class="flex flex-col sm:flex-row gap-3 mt-10 pt-8 border-t border-slate-200">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver al resultado
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar otro análisis
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `}function Et(e,a){return a?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `:""}function ka(e,a=[],r="normal"){if(!a.length)return"";const t=r==="advertencia"?"border-amber-200 bg-amber-50":r==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",n=r==="advertencia"?"text-amber-950":r==="referencias"?"text-sky-950":"text-slate-900",c=r==="advertencia"?"text-amber-900":r==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${t} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${n} mb-4">
                ${e}
            </h2>

            <ul class="space-y-3">
                ${a.map(s=>`
                            <li class="flex items-start gap-3 ${c} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${s}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function tb(e){return e?`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-violet-950 mb-5">
                Hipótesis estadísticas
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis nula, H₀
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${e.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${e.h1}
                    </p>
                </div>
            </div>
        </article>
    `:""}function rb(e){return e?`
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${e}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `:""}function nb(e){return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${{predecir:"Predicción y modelización",instrumento:"Evaluación de instrumentos",otro:"Otros análisis"}[e]||"Módulo metodológico"}
            </h1>

            <p class="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Esta rama se incorporará en la siguiente fase. Ya están activas la comparación de grupos, la relación entre variables y la asociación categórica.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    type="button"
                    data-action="volver"
                    class="border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50"
                >
                    ← Elegir otro objetivo
                </button>

                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800"
                >
                    Volver al laboratorio
                </button>
            </div>
        </section>
    `}function Gr(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function Ct(e,a,r){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${e}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${a}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${r}
                </p>
            </div>
        </article>
    `}function Hr(e,a){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function ib(e,a,r){return`
        <button
            type="button"
            data-value="${e}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${a}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${r}
            </span>
        </button>
    `}function ob(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-indigo-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-indigo-300 text-xs md:text-sm font-black mb-3">
                    Módulo de comparación
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de grupos y mediciones
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione la estructura de sus datos según el número de grupos y si las observaciones proceden de personas distintas o de las mismas unidades medidas varias veces.
                </p>
            </div>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">
            ${$t({etiqueta:"Diseño independiente",titulo:"Dos grupos independientes",descripcion:"Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",pruebas:["t de Student para muestras independientes","t de Welch para muestras independientes","U de Mann–Whitney"],ruta:"calculadoraDosGrupos",textoBoton:"Abrir calculadora independiente",clases:{borde:"border-blue-200",fondo:"bg-blue-50",texto:"text-blue-700",boton:"bg-blue-700 hover:bg-blue-800"}})}

            ${$t({etiqueta:"Diseño relacionado",titulo:"Dos mediciones relacionadas",descripcion:"Utilice esta opción para diseños antes-después, dos mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",pruebas:["t de Student para muestras relacionadas","Rangos con signo de Wilcoxon"],ruta:"calculadoraDosMuestrasRelacionadas",textoBoton:"Abrir calculadora relacionada",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${$t({etiqueta:"Diseño independiente multigrupo",titulo:"Tres o más grupos independientes",descripcion:"Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",pruebas:["ANOVA de un factor","ANOVA de Welch","Kruskal–Wallis"],ruta:"calculadoraTresOMasGrupos",textoBoton:"Abrir calculadora multigrupo",clases:{borde:"border-emerald-200",fondo:"bg-emerald-50",texto:"text-emerald-700",boton:"bg-emerald-700 hover:bg-emerald-800"}})}

            ${$t({etiqueta:"Diseño relacionado multimedición",titulo:"Tres o más mediciones relacionadas",descripcion:"Utilice esta opción cuando las mismas personas son evaluadas en tres o más momentos, condiciones o tratamientos y cada fila conserva su correspondencia.",pruebas:["ANOVA de medidas repetidas","Prueba de Friedman"],ruta:"calculadoraTresOMasMedicionesRelacionadas",textoBoton:"Abrir calculadora de medidas repetidas",clases:{borde:"border-fuchsia-200",fondo:"bg-fuchsia-50",texto:"text-fuchsia-700",boton:"bg-fuchsia-700 hover:bg-fuchsia-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div>
                    <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                        Selección metodológica
                    </p>

                    <h2 class="text-2xl font-black text-slate-900 mb-2">
                        ¿No está seguro de cuál diseño corresponde?
                    </h2>

                    <p class="text-slate-700 leading-relaxed max-w-3xl">
                        Utilice el asistente para identificar la prueba según el tipo de variable, el número de grupos, la relación entre observaciones, la normalidad y los demás supuestos del análisis.
                    </p>
                </div>

                <button
                    type="button"
                    data-route="asistentePruebas"
                    class="shrink-0 inline-flex items-center justify-center rounded-xl bg-slate-950 text-white font-black px-6 py-4 hover:bg-slate-800 transition-colors shadow-lg"
                >
                    Abrir asistente
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </section>
    `,e.addEventListener("click",a=>{const r=a.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),e}function $t({etiqueta:e,titulo:a,descripcion:r,pruebas:t,ruta:n,textoBoton:c,clases:s}){return`
        <article class="h-full rounded-3xl border ${s.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${s.fondo} ${s.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${e}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${a}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
                </p>

                <div class="rounded-2xl ${s.fondo} border ${s.borde} p-5 mb-7">
                    <h3 class="font-black text-slate-900 mb-3">
                        Pruebas disponibles
                    </h3>

                    <ul class="space-y-2 text-slate-700">
                        ${t.map(p=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${s.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${p}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${n}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${s.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${c}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `}function sb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ht={exports:{}},lb=Ht.exports,Xi;function cb(){return Xi||(Xi=1,(function(e,a){(function(r,t){e.exports=t()})(lb,function(){var r=(function(t,n){var c=Array.prototype.concat,s=Array.prototype.slice,p=Object.prototype.toString;function u(y,v){var h=y>v?y:v;return t.pow(10,17-~~(t.log(h>0?h:-h)*t.LOG10E))}var l=Array.isArray||function(v){return p.call(v)==="[object Array]"};function i(y){return p.call(y)==="[object Function]"}function o(y){return typeof y=="number"?y-y===0:!1}function d(y){return c.apply([],y)}function m(){return new m._init(arguments)}m.fn=m.prototype,m._init=function(v){if(l(v[0]))if(l(v[0][0])){i(v[1])&&(v[0]=m.map(v[0],v[1]));for(var h=0;h<v[0].length;h++)this[h]=v[0][h];this.length=v[0].length}else this[0]=i(v[1])?m.map(v[0],v[1]):v[0],this.length=1;else if(o(v[0]))this[0]=m.seq.apply(null,v),this.length=1;else{if(v[0]instanceof m)return m(v[0].toArray());this[0]=[],this.length=1}return this},m._init.prototype=m.prototype,m._init.constructor=m,m.utils={calcRdx:u,isArray:l,isFunction:i,isNumber:o,toVector:d},m._random_fn=t.random,m.setRandom=function(v){if(typeof v!="function")throw new TypeError("fn is not a function");m._random_fn=v},m.extend=function(v){var h,w;if(arguments.length===1){for(w in v)m[w]=v[w];return this}for(h=1;h<arguments.length;h++)for(w in arguments[h])v[w]=arguments[h][w];return v},m.rows=function(v){return v.length||1},m.cols=function(v){return v[0].length||1},m.dimensions=function(v){return{rows:m.rows(v),cols:m.cols(v)}},m.row=function(v,h){return l(h)?h.map(function(w){return m.row(v,w)}):v[h]},m.rowa=function(v,h){return m.row(v,h)},m.col=function(v,h){if(l(h)){var w=m.arange(v.length).map(function(){return new Array(h.length)});return h.forEach(function(C,$){m.arange(v.length).forEach(function(I){w[I][$]=v[I][C]})}),w}for(var k=new Array(v.length),E=0;E<v.length;E++)k[E]=[v[E][h]];return k},m.cola=function(v,h){return m.col(v,h).map(function(w){return w[0]})},m.diag=function(v){for(var h=m.rows(v),w=new Array(h),k=0;k<h;k++)w[k]=[v[k][k]];return w},m.antidiag=function(v){for(var h=m.rows(v)-1,w=new Array(h),k=0;h>=0;h--,k++)w[k]=[v[k][h]];return w},m.transpose=function(v){var h=[],w,k,E,C,$;for(l(v[0])||(v=[v]),k=v.length,E=v[0].length,$=0;$<E;$++){for(w=new Array(k),C=0;C<k;C++)w[C]=v[C][$];h.push(w)}return h.length===1?h[0]:h},m.map=function(v,h,w){var k,E,C,$,I;for(l(v[0])||(v=[v]),E=v.length,C=v[0].length,$=w?v:new Array(E),k=0;k<E;k++)for($[k]||($[k]=new Array(C)),I=0;I<C;I++)$[k][I]=h(v[k][I],k,I);return $.length===1?$[0]:$},m.cumreduce=function(v,h,w){var k,E,C,$,I;for(l(v[0])||(v=[v]),E=v.length,C=v[0].length,$=w?v:new Array(E),k=0;k<E;k++)for($[k]||($[k]=new Array(C)),C>0&&($[k][0]=v[k][0]),I=1;I<C;I++)$[k][I]=h($[k][I-1],v[k][I]);return $.length===1?$[0]:$},m.alter=function(v,h){return m.map(v,h,!0)},m.create=function(v,h,w){var k=new Array(v),E,C;for(i(h)&&(w=h,h=v),E=0;E<v;E++)for(k[E]=new Array(h),C=0;C<h;C++)k[E][C]=w(E,C);return k};function f(){return 0}m.zeros=function(v,h){return o(h)||(h=v),m.create(v,h,f)};function g(){return 1}m.ones=function(v,h){return o(h)||(h=v),m.create(v,h,g)},m.rand=function(v,h){return o(h)||(h=v),m.create(v,h,m._random_fn)};function b(y,v){return y===v?1:0}m.identity=function(v,h){return o(h)||(h=v),m.create(v,h,b)},m.symmetric=function(v){var h=v.length,w,k;if(v.length!==v[0].length)return!1;for(w=0;w<h;w++)for(k=0;k<h;k++)if(v[k][w]!==v[w][k])return!1;return!0},m.clear=function(v){return m.alter(v,f)},m.seq=function(v,h,w,k){i(k)||(k=!1);var E=[],C=u(v,h),$=(h*C-v*C)/((w-1)*C),I=v,A;for(A=0;I<=h&&A<w;A++,I=(v*C+$*C*A)/C)E.push(k?k(I,A):I);return E},m.arange=function(v,h,w){var k=[],E;if(w=w||1,h===n&&(h=v,v=0),v===h||w===0)return[];if(v<h&&w<0)return[];if(v>h&&w>0)return[];if(w>0)for(E=v;E<h;E+=w)k.push(E);else for(E=v;E>h;E+=w)k.push(E);return k},m.slice=(function(){function y(h,w,k,E){var C,$=[],I=h.length;if(w===n&&k===n&&E===n)return m.copy(h);if(w=w||0,k=k||h.length,w=w>=0?w:I+w,k=k>=0?k:I+k,E=E||1,w===k||E===0)return[];if(w<k&&E<0)return[];if(w>k&&E>0)return[];if(E>0)for(C=w;C<k;C+=E)$.push(h[C]);else for(C=w;C>k;C+=E)$.push(h[C]);return $}function v(h,w){var k,E;if(w=w||{},o(w.row)){if(o(w.col))return h[w.row][w.col];var C=m.rowa(h,w.row);return k=w.col||{},y(C,k.start,k.end,k.step)}if(o(w.col)){var $=m.cola(h,w.col);return E=w.row||{},y($,E.start,E.end,E.step)}E=w.row||{},k=w.col||{};var I=y(h,E.start,E.end,E.step);return I.map(function(A){return y(A,k.start,k.end,k.step)})}return v})(),m.sliceAssign=function(v,h,w){var k,E;if(o(h.row)){if(o(h.col))return v[h.row][h.col]=w;h.col=h.col||{},h.col.start=h.col.start||0,h.col.end=h.col.end||v[0].length,h.col.step=h.col.step||1,k=m.arange(h.col.start,t.min(v.length,h.col.end),h.col.step);var C=h.row;return k.forEach(function(I,A){v[C][I]=w[A]}),v}if(o(h.col)){h.row=h.row||{},h.row.start=h.row.start||0,h.row.end=h.row.end||v.length,h.row.step=h.row.step||1,E=m.arange(h.row.start,t.min(v[0].length,h.row.end),h.row.step);var $=h.col;return E.forEach(function(I,A){v[I][$]=w[A]}),v}return w[0].length===n&&(w=[w]),h.row.start=h.row.start||0,h.row.end=h.row.end||v.length,h.row.step=h.row.step||1,h.col.start=h.col.start||0,h.col.end=h.col.end||v[0].length,h.col.step=h.col.step||1,E=m.arange(h.row.start,t.min(v.length,h.row.end),h.row.step),k=m.arange(h.col.start,t.min(v[0].length,h.col.end),h.col.step),E.forEach(function(I,A){k.forEach(function(L,R){v[I][L]=w[A][R]})}),v},m.diagonal=function(v){var h=m.zeros(v.length,v.length);return v.forEach(function(w,k){h[k][k]=w}),h},m.copy=function(v){return v.map(function(h){return o(h)?h:h.map(function(w){return w})})};var x=m.prototype;return x.length=0,x.push=Array.prototype.push,x.sort=Array.prototype.sort,x.splice=Array.prototype.splice,x.slice=Array.prototype.slice,x.toArray=function(){return this.length>1?s.call(this):s.call(this)[0]},x.map=function(v,h){return m(m.map(this,v,h))},x.cumreduce=function(v,h){return m(m.cumreduce(this,v,h))},x.alter=function(v){return m.alter(this,v),this},(function(y){for(var v=0;v<y.length;v++)(function(h){x[h]=function(w){var k=this,E;return w?(setTimeout(function(){w.call(k,x[h].call(k))}),this):(E=m[h](this),l(E)?m(E):E)}})(y[v])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(y){for(var v=0;v<y.length;v++)(function(h){x[h]=function(w,k){var E=this;return k?(setTimeout(function(){k.call(E,x[h].call(E,w))}),this):m(m[h](this,w))}})(y[v])})("row col".split(" ")),(function(y){for(var v=0;v<y.length;v++)(function(h){x[h]=function(){return m(m[h].apply(null,arguments))}})(y[v])})("create zeros ones rand identity".split(" ")),m})(Math);return(function(t,n){var c=t.utils.isFunction;function s(l,i){return l-i}function p(l,i,o){return n.max(i,n.min(l,o))}t.sum=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d];return o},t.sumsqrd=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d]*i[d];return o},t.sumsqerr=function(i){for(var o=t.mean(i),d=0,m=i.length,f;--m>=0;)f=i[m]-o,d+=f*f;return d},t.sumrow=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d];return o},t.product=function(i){for(var o=1,d=i.length;--d>=0;)o*=i[d];return o},t.min=function(i){for(var o=i[0],d=0;++d<i.length;)i[d]<o&&(o=i[d]);return o},t.max=function(i){for(var o=i[0],d=0;++d<i.length;)i[d]>o&&(o=i[d]);return o},t.unique=function(i){for(var o={},d=[],m=0;m<i.length;m++)o[i[m]]||(o[i[m]]=!0,d.push(i[m]));return d},t.mean=function(i){return t.sum(i)/i.length},t.meansqerr=function(i){return t.sumsqerr(i)/i.length},t.geomean=function(i){var o=i.map(n.log),d=t.mean(o);return n.exp(d)},t.median=function(i){var o=i.length,d=i.slice().sort(s);return o&1?d[o/2|0]:(d[o/2-1]+d[o/2])/2},t.cumsum=function(i){return t.cumreduce(i,function(o,d){return o+d})},t.cumprod=function(i){return t.cumreduce(i,function(o,d){return o*d})},t.diff=function(i){var o=[],d=i.length,m;for(m=1;m<d;m++)o.push(i[m]-i[m-1]);return o},t.rank=function(l){var i,o=[],d={};for(i=0;i<l.length;i++){var m=l[i];d[m]?d[m]++:(d[m]=1,o.push(m))}var f=o.sort(s),g={},b=1;for(i=0;i<f.length;i++){var m=f[i],x=d[m],y=b,v=b+x-1,h=(y+v)/2;g[m]=h,b+=x}return l.map(function(w){return g[w]})},t.mode=function(i){var o=i.length,d=i.slice().sort(s),m=1,f=0,g=0,b=[],x;for(x=0;x<o;x++)d[x]===d[x+1]?m++:(m>f?(b=[d[x]],f=m,g=0):m===f&&(b.push(d[x]),g++),m=1);return g===0?b[0]:b},t.range=function(i){return t.max(i)-t.min(i)},t.variance=function(i,o){return t.sumsqerr(i)/(i.length-(o?1:0))},t.pooledvariance=function(i){var o=i.reduce(function(m,f){return m+t.sumsqerr(f)},0),d=i.reduce(function(m,f){return m+f.length},0);return o/(d-i.length)},t.deviation=function(l){for(var i=t.mean(l),o=l.length,d=new Array(o),m=0;m<o;m++)d[m]=l[m]-i;return d},t.stdev=function(i,o){return n.sqrt(t.variance(i,o))},t.pooledstdev=function(i){return n.sqrt(t.pooledvariance(i))},t.meandev=function(i){for(var o=t.mean(i),d=[],m=i.length-1;m>=0;m--)d.push(n.abs(i[m]-o));return t.mean(d)},t.meddev=function(i){for(var o=t.median(i),d=[],m=i.length-1;m>=0;m--)d.push(n.abs(i[m]-o));return t.median(d)},t.coeffvar=function(i){return t.stdev(i)/t.mean(i)},t.quartiles=function(i){var o=i.length,d=i.slice().sort(s);return[d[n.round(o/4)-1],d[n.round(o/2)-1],d[n.round(o*3/4)-1]]},t.quantiles=function(i,o,d,m){var f=i.slice().sort(s),g=[o.length],b=i.length,x,y,v,h,w,k;for(typeof d>"u"&&(d=3/8),typeof m>"u"&&(m=3/8),x=0;x<o.length;x++)y=o[x],v=d+y*(1-d-m),h=b*y+v,w=n.floor(p(h,1,b-1)),k=p(h-w,0,1),g[x]=(1-k)*f[w-1]+k*f[w];return g},t.percentile=function(i,o,d){var m=i.slice().sort(s),f=o*(m.length+(d?1:-1))+(d?0:1),g=parseInt(f),b=f-g;return g+1<m.length?m[g-1]+b*(m[g]-m[g-1]):m[g-1]},t.percentileOfScore=function(i,o,d){var m=0,f=i.length,g=!1,b,x;for(d==="strict"&&(g=!0),x=0;x<f;x++)b=i[x],(g&&b<o||!g&&b<=o)&&m++;return m/f},t.histogram=function(i,o){o=o||4;var d=t.min(i),m=(t.max(i)-d)/o,f=i.length,g=[],b;for(b=0;b<o;b++)g[b]=0;for(b=0;b<f;b++)g[n.min(n.floor((i[b]-d)/m),o-1)]+=1;return g},t.covariance=function(i,o){var d=t.mean(i),m=t.mean(o),f=i.length,g=new Array(f),b;for(b=0;b<f;b++)g[b]=(i[b]-d)*(o[b]-m);return t.sum(g)/(f-1)},t.corrcoeff=function(i,o){return t.covariance(i,o)/t.stdev(i,1)/t.stdev(o,1)},t.spearmancoeff=function(l,i){return l=t.rank(l),i=t.rank(i),t.corrcoeff(l,i)},t.stanMoment=function(i,o){for(var d=t.mean(i),m=t.stdev(i),f=i.length,g=0,b=0;b<f;b++)g+=n.pow((i[b]-d)/m,o);return g/i.length},t.skewness=function(i){return t.stanMoment(i,3)},t.kurtosis=function(i){return t.stanMoment(i,4)-3};var u=t.prototype;(function(l){for(var i=0;i<l.length;i++)(function(o){u[o]=function(d,m){var f=[],g=0,b=this;if(c(d)&&(m=d,d=!1),m)return setTimeout(function(){m.call(b,u[o].call(b,d))}),this;if(this.length>1){for(b=d===!0?this:this.transpose();g<b.length;g++)f[g]=t[o](b[g]);return f}return t[o](this[0],d)}})(l[i])})("cumsum cumprod".split(" ")),(function(l){for(var i=0;i<l.length;i++)(function(o){u[o]=function(d,m){var f=[],g=0,b=this;if(c(d)&&(m=d,d=!1),m)return setTimeout(function(){m.call(b,u[o].call(b,d))}),this;if(this.length>1){for(o!=="sumrow"&&(b=d===!0?this:this.transpose());g<b.length;g++)f[g]=t[o](b[g]);return d===!0?t[o](t.utils.toVector(f)):f}return t[o](this[0],d)}})(l[i])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(l){for(var i=0;i<l.length;i++)(function(o){u[o]=function(){var d=[],m=0,f=this,g=Array.prototype.slice.call(arguments),b;if(c(g[g.length-1])){b=g[g.length-1];var x=g.slice(0,g.length-1);return setTimeout(function(){b.call(f,u[o].apply(f,x))}),this}else{b=void 0;var y=function(h){return t[o].apply(f,[h].concat(g))}}if(this.length>1){for(f=f.transpose();m<f.length;m++)d[m]=y(f[m]);return d}return y(this[0])}})(l[i])})("quantiles percentileOfScore".split(" "))})(r,Math),(function(t,n){t.gammaln=function(s){var p=0,u=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],l=1.000000000190015,i,o,d;for(d=(o=i=s)+5.5,d-=(i+.5)*n.log(d);p<6;p++)l+=u[p]/++o;return n.log(2.5066282746310007*l/i)-d},t.loggam=function(s){var p,u,l,i,o,d,m,f=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(p=s,m=0,s==1||s==2)return 0;for(s<=7&&(m=n.floor(7-s),p=s+m),u=1/(p*p),l=2*n.PI,o=f[9],d=8;d>=0;d--)o*=u,o+=f[d];if(i=o/p+.5*n.log(l)+(p-.5)*n.log(p)-p,s<=7)for(d=1;d<=m;d++)i-=n.log(p-1),p-=1;return i},t.gammafn=function(s){var p=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],u=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,i=0,o=0,d=0,m=s,f,g,b,x;if(s>171.6243769536076)return 1/0;if(m<=0)if(x=m%1+36e-17,x)l=(m&1?-1:1)*n.PI/n.sin(n.PI*x),m=1-m;else return 1/0;for(b=m,m<1?g=m++:g=(m-=i=(m|0)-1)-1,f=0;f<8;++f)d=(d+p[f])*g,o=o*g+u[f];if(x=d/o+1,b<m)x/=b;else if(b>m)for(f=0;f<i;++f)x*=m,m++;return l&&(x=l/x),x},t.gammap=function(s,p){return t.lowRegGamma(s,p)*t.gammafn(s)},t.lowRegGamma=function(s,p){var u=t.gammaln(s),l=s,i=1/s,o=i,d=p+1-s,m=1/1e-30,f=1/d,g=f,b=1,x=-~(n.log(s>=1?s:1/s)*8.5+s*.4+17),y;if(p<0||s<=0)return NaN;if(p<s+1){for(;b<=x;b++)i+=o*=p/++l;return i*n.exp(-p+s*n.log(p)-u)}for(;b<=x;b++)y=-b*(b-s),d+=2,f=y*f+d,m=d+y/m,f=1/f,g*=f*m;return 1-g*n.exp(-p+s*n.log(p)-u)},t.factorialln=function(s){return s<0?NaN:t.gammaln(s+1)},t.factorial=function(s){return s<0?NaN:t.gammafn(s+1)},t.combination=function(s,p){return s>170||p>170?n.exp(t.combinationln(s,p)):t.factorial(s)/t.factorial(p)/t.factorial(s-p)},t.combinationln=function(s,p){return t.factorialln(s)-t.factorialln(p)-t.factorialln(s-p)},t.permutation=function(s,p){return t.factorial(s)/t.factorial(s-p)},t.betafn=function(s,p){if(!(s<=0||p<=0))return s+p>170?n.exp(t.betaln(s,p)):t.gammafn(s)*t.gammafn(p)/t.gammafn(s+p)},t.betaln=function(s,p){return t.gammaln(s)+t.gammaln(p)-t.gammaln(s+p)},t.betacf=function(s,p,u){var l=1e-30,i=1,o=p+u,d=p+1,m=p-1,f=1,g=1-o*s/d,b,x,y,v;for(n.abs(g)<l&&(g=l),g=1/g,v=g;i<=100&&(b=2*i,x=i*(u-i)*s/((m+b)*(p+b)),g=1+x*g,n.abs(g)<l&&(g=l),f=1+x/f,n.abs(f)<l&&(f=l),g=1/g,v*=g*f,x=-(p+i)*(o+i)*s/((p+b)*(d+b)),g=1+x*g,n.abs(g)<l&&(g=l),f=1+x/f,n.abs(f)<l&&(f=l),g=1/g,y=g*f,v*=y,!(n.abs(y-1)<3e-7));i++);return v},t.gammapinv=function(s,p){var u=0,l=p-1,i=1e-8,o=t.gammaln(p),d,m,f,g,b,x,y;if(s>=1)return n.max(100,p+100*n.sqrt(p));if(s<=0)return 0;for(p>1?(x=n.log(l),y=n.exp(l*(x-1)-o),b=s<.5?s:1-s,f=n.sqrt(-2*n.log(b)),d=(2.30753+f*.27061)/(1+f*(.99229+f*.04481))-f,s<.5&&(d=-d),d=n.max(.001,p*n.pow(1-1/(9*p)-d/(3*n.sqrt(p)),3))):(f=1-p*(.253+p*.12),s<f?d=n.pow(s/f,1/p):d=1-n.log(1-(s-f)/(1-f)));u<12;u++){if(d<=0)return 0;if(m=t.lowRegGamma(p,d)-s,p>1?f=y*n.exp(-(d-l)+l*(n.log(d)-x)):f=n.exp(-d+l*n.log(d)-o),g=m/f,d-=f=g/(1-.5*n.min(1,g*((p-1)/d-1))),d<=0&&(d=.5*(d+f)),n.abs(f)<i*d)break}return d},t.erf=function(s){var p=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],u=p.length-1,l=!1,i=0,o=0,d,m,f,g;for(s<0&&(s=-s,l=!0),d=2/(2+s),m=4*d-2;u>0;u--)f=i,i=m*i-o+p[u],o=f;return g=d*n.exp(-s*s+.5*(p[0]+m*i)-o),l?g-1:1-g},t.erfc=function(s){return 1-t.erf(s)},t.erfcinv=function(s){var p=0,u,l,i,o;if(s>=2)return-100;if(s<=0)return 100;for(o=s<1?s:2-s,i=n.sqrt(-2*n.log(o/2)),u=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);p<2;p++)l=t.erfc(u)-o,u+=l/(1.1283791670955126*n.exp(-u*u)-u*l);return s<1?u:-u},t.ibetainv=function(s,p,u){var l=1e-8,i=p-1,o=u-1,d=0,m,f,g,b,x,y,v,h,w,k,E;if(s<=0)return 0;if(s>=1)return 1;for(p>=1&&u>=1?(g=s<.5?s:1-s,b=n.sqrt(-2*n.log(g)),v=(2.30753+b*.27061)/(1+b*(.99229+b*.04481))-b,s<.5&&(v=-v),h=(v*v-3)/6,w=2/(1/(2*p-1)+1/(2*u-1)),k=v*n.sqrt(h+w)/w-(1/(2*u-1)-1/(2*p-1))*(h+5/6-2/(3*w)),v=p/(p+u*n.exp(2*k))):(m=n.log(p/(p+u)),f=n.log(u/(p+u)),b=n.exp(p*m)/p,x=n.exp(u*f)/u,k=b+x,s<b/k?v=n.pow(p*k*s,1/p):v=1-n.pow(u*k*(1-s),1/u)),E=-t.gammaln(p)-t.gammaln(u)+t.gammaln(p+u);d<10;d++){if(v===0||v===1)return v;if(y=t.ibeta(v,p,u)-s,b=n.exp(i*n.log(v)+o*n.log(1-v)+E),x=y/b,v-=b=x/(1-.5*n.min(1,x*(i/v-o/(1-v)))),v<=0&&(v=.5*(v+b)),v>=1&&(v=.5*(v+b+1)),n.abs(b)<l*v&&d>0)break}return v},t.ibeta=function(s,p,u){var l=s===0||s===1?0:n.exp(t.gammaln(p+u)-t.gammaln(p)-t.gammaln(u)+p*n.log(s)+u*n.log(1-s));return s<0||s>1?!1:s<(p+1)/(p+u+2)?l*t.betacf(s,p,u)/p:1-l*t.betacf(1-s,u,p)/u},t.randn=function(s,p){var u,l,i,o,d;if(p||(p=s),s)return t.create(s,p,function(){return t.randn()});do u=t._random_fn(),l=1.7156*(t._random_fn()-.5),i=u-.449871,o=n.abs(l)+.386595,d=i*i+o*(.196*o-.25472*i);while(d>.27597&&(d>.27846||l*l>-4*n.log(u)*u*u));return l/u},t.randg=function(s,p,u){var l=s,i,o,d,m,f,g;if(u||(u=p),s||(s=1),p)return g=t.zeros(p,u),g.alter(function(){return t.randg(s)}),g;s<1&&(s+=1),i=s-1/3,o=1/n.sqrt(9*i);do{do f=t.randn(),m=1+o*f;while(m<=0);m=m*m*m,d=t._random_fn()}while(d>1-.331*n.pow(f,4)&&n.log(d)>.5*f*f+i*(1-m+n.log(m)));if(s==l)return i*m;do d=t._random_fn();while(d===0);return n.pow(d,1/l)*i*m},(function(c){for(var s=0;s<c.length;s++)(function(p){t.fn[p]=function(){return t(t.map(this,function(u){return t[p](u)}))}})(c[s])})("gammaln gammafn factorial factorialln".split(" ")),(function(c){for(var s=0;s<c.length;s++)(function(p){t.fn[p]=function(){return t(t[p].apply(null,arguments))}})(c[s])})("randn".split(" "))})(r,Math),(function(t,n){(function(l){for(var i=0;i<l.length;i++)(function(o){t[o]=function d(m,f,g){return this instanceof d?(this._a=m,this._b=f,this._c=g,this):new d(m,f,g)},t.fn[o]=function(d,m,f){var g=t[o](d,m,f);return g.data=this,g},t[o].prototype.sample=function(d){var m=this._a,f=this._b,g=this._c;return d?t.alter(d,function(){return t[o].sample(m,f,g)}):t[o].sample(m,f,g)},(function(d){for(var m=0;m<d.length;m++)(function(f){t[o].prototype[f]=function(g){var b=this._a,x=this._b,y=this._c;return!g&&g!==0&&(g=this.data),typeof g!="number"?t.fn.map.call(g,function(v){return t[o][f](v,b,x,y)}):t[o][f](g,b,x,y)}})(d[m])})("pdf cdf inv".split(" ")),(function(d){for(var m=0;m<d.length;m++)(function(f){t[o].prototype[f]=function(){return t[o][f](this._a,this._b,this._c)}})(d[m])})("mean median mode variance".split(" "))})(l[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(i,o,d){return i>1||i<0?0:o==1&&d==1?1:o<512&&d<512?n.pow(i,o-1)*n.pow(1-i,d-1)/t.betafn(o,d):n.exp((o-1)*n.log(i)+(d-1)*n.log(1-i)-t.betaln(o,d))},cdf:function(i,o,d){return i>1||i<0?(i>1)*1:t.ibeta(i,o,d)},inv:function(i,o,d){return t.ibetainv(i,o,d)},mean:function(i,o){return i/(i+o)},median:function(i,o){return t.ibetainv(.5,i,o)},mode:function(i,o){return(i-1)/(i+o-2)},sample:function(i,o){var d=t.randg(i);return d/(d+t.randg(o))},variance:function(i,o){return i*o/(n.pow(i+o,2)*(i+o+1))}}),t.extend(t.centralF,{pdf:function(i,o,d){var m,f,g;return i<0?0:o<=2?i===0&&o<2?1/0:i===0&&o===2?1:1/t.betafn(o/2,d/2)*n.pow(o/d,o/2)*n.pow(i,o/2-1)*n.pow(1+o/d*i,-(o+d)/2):(m=o*i/(d+i*o),f=d/(d+i*o),g=o*f/2,g*t.binomial.pdf((o-2)/2,(o+d-2)/2,m))},cdf:function(i,o,d){return i<0?0:t.ibeta(o*i/(o*i+d),o/2,d/2)},inv:function(i,o,d){return d/(o*(1/t.ibetainv(i,o/2,d/2)-1))},mean:function(i,o){return o>2?o/(o-2):void 0},mode:function(i,o){return i>2?o*(i-2)/(i*(o+2)):void 0},sample:function(i,o){var d=t.randg(i/2)*2,m=t.randg(o/2)*2;return d/i/(m/o)},variance:function(i,o){if(!(o<=4))return 2*o*o*(i+o-2)/(i*(o-2)*(o-2)*(o-4))}}),t.extend(t.cauchy,{pdf:function(i,o,d){return d<0?0:d/(n.pow(i-o,2)+n.pow(d,2))/n.PI},cdf:function(i,o,d){return n.atan((i-o)/d)/n.PI+.5},inv:function(l,i,o){return i+o*n.tan(n.PI*(l-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,o){return t.randn()*n.sqrt(1/(2*t.randg(.5)))*o+i}}),t.extend(t.chisquare,{pdf:function(i,o){return i<0?0:i===0&&o===2?.5:n.exp((o/2-1)*n.log(i)-i/2-o/2*n.log(2)-t.gammaln(o/2))},cdf:function(i,o){return i<0?0:t.lowRegGamma(o/2,i/2)},inv:function(l,i){return 2*t.gammapinv(l,.5*i)},mean:function(l){return l},median:function(i){return i*n.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return t.randg(i/2)*2},variance:function(i){return 2*i}}),t.extend(t.exponential,{pdf:function(i,o){return i<0?0:o*n.exp(-o*i)},cdf:function(i,o){return i<0?0:1-n.exp(-o*i)},inv:function(l,i){return-n.log(1-l)/i},mean:function(l){return 1/l},median:function(l){return 1/l*n.log(2)},mode:function(){return 0},sample:function(i){return-1/i*n.log(t._random_fn())},variance:function(l){return n.pow(l,-2)}}),t.extend(t.gamma,{pdf:function(i,o,d){return i<0?0:i===0&&o===1?1/d:n.exp((o-1)*n.log(i)-i/d-t.gammaln(o)-o*n.log(d))},cdf:function(i,o,d){return i<0?0:t.lowRegGamma(o,i/d)},inv:function(l,i,o){return t.gammapinv(l,i)*o},mean:function(l,i){return l*i},mode:function(i,o){if(i>1)return(i-1)*o},sample:function(i,o){return t.randg(i)*o},variance:function(i,o){return i*o*o}}),t.extend(t.invgamma,{pdf:function(i,o,d){return i<=0?0:n.exp(-(o+1)*n.log(i)-d/i-t.gammaln(o)+o*n.log(d))},cdf:function(i,o,d){return i<=0?0:1-t.lowRegGamma(o,d/i)},inv:function(l,i,o){return o/t.gammapinv(1-l,i)},mean:function(l,i){return l>1?i/(l-1):void 0},mode:function(i,o){return o/(i+1)},sample:function(i,o){return o/t.randg(i)},variance:function(i,o){if(!(i<=2))return o*o/((i-1)*(i-1)*(i-2))}}),t.extend(t.kumaraswamy,{pdf:function(i,o,d){return i===0&&o===1?d:i===1&&d===1?o:n.exp(n.log(o)+n.log(d)+(o-1)*n.log(i)+(d-1)*n.log(1-n.pow(i,o)))},cdf:function(i,o,d){return i<0?0:i>1?1:1-n.pow(1-n.pow(i,o),d)},inv:function(i,o,d){return n.pow(1-n.pow(1-i,1/d),1/o)},mean:function(l,i){return i*t.gammafn(1+1/l)*t.gammafn(i)/t.gammafn(1+1/l+i)},median:function(i,o){return n.pow(1-n.pow(2,-1/o),1/i)},mode:function(i,o){if(i>=1&&o>=1&&i!==1&&o!==1)return n.pow((i-1)/(i*o-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(i,o,d){return i<=0?0:n.exp(-n.log(i)-.5*n.log(2*n.PI)-n.log(d)-n.pow(n.log(i)-o,2)/(2*d*d))},cdf:function(i,o,d){return i<0?0:.5+.5*t.erf((n.log(i)-o)/n.sqrt(2*d*d))},inv:function(l,i,o){return n.exp(-1.4142135623730951*o*t.erfcinv(2*l)+i)},mean:function(i,o){return n.exp(i+o*o/2)},median:function(i){return n.exp(i)},mode:function(i,o){return n.exp(i-o*o)},sample:function(i,o){return n.exp(t.randn()*o+i)},variance:function(i,o){return(n.exp(o*o)-1)*n.exp(2*i+o*o)}}),t.extend(t.noncentralt,{pdf:function(i,o,d){var m=1e-14;return n.abs(d)<m?t.studentt.pdf(i,o):n.abs(i)<m?n.exp(t.gammaln((o+1)/2)-d*d/2-.5*n.log(n.PI*o)-t.gammaln(o/2)):o/i*(t.noncentralt.cdf(i*n.sqrt(1+2/o),o+2,d)-t.noncentralt.cdf(i,o,d))},cdf:function(i,o,d){var m=1e-14,f=200;if(n.abs(d)<m)return t.studentt.cdf(i,o);var g=!1;i<0&&(g=!0,d=-d);for(var b=t.normal.cdf(-d,0,1),x=m+1,y=x,v=i*i/(i*i+o),h=0,w=n.exp(-d*d/2),k=n.exp(-d*d/2-.5*n.log(2)-t.gammaln(3/2))*d;h<f||y>m||x>m;)y=x,h>0&&(w*=d*d/(2*h),k*=d*d/(2*(h+1/2))),x=w*t.beta.cdf(v,h+.5,o/2)+k*t.beta.cdf(v,h+1,o/2),b+=.5*x,h++;return g?1-b:b}}),t.extend(t.normal,{pdf:function(i,o,d){return n.exp(-.5*n.log(2*n.PI)-n.log(d)-n.pow(i-o,2)/(2*d*d))},cdf:function(i,o,d){return .5*(1+t.erf((i-o)/n.sqrt(2*d*d)))},inv:function(l,i,o){return-1.4142135623730951*o*t.erfcinv(2*l)+i},mean:function(l){return l},median:function(i){return i},mode:function(l){return l},sample:function(i,o){return t.randn()*o+i},variance:function(l,i){return i*i}}),t.extend(t.pareto,{pdf:function(i,o,d){return i<o?0:d*n.pow(o,d)/n.pow(i,d+1)},cdf:function(i,o,d){return i<o?0:1-n.pow(o/i,d)},inv:function(i,o,d){return o/n.pow(1-i,1/d)},mean:function(i,o){if(!(o<=1))return o*n.pow(i,o)/(o-1)},median:function(i,o){return i*(o*n.SQRT2)},mode:function(i){return i},variance:function(l,i){if(!(i<=2))return l*l*i/(n.pow(i-1,2)*(i-2))}}),t.extend(t.studentt,{pdf:function(i,o){return o=o>1e100?1e100:o,1/(n.sqrt(o)*t.betafn(.5,o/2))*n.pow(1+i*i/o,-((o+1)/2))},cdf:function(i,o){var d=o/2;return t.ibeta((i+n.sqrt(i*i+o))/(2*n.sqrt(i*i+o)),d,d)},inv:function(l,i){var o=t.ibetainv(2*n.min(l,1-l),.5*i,.5);return o=n.sqrt(i*(1-o)/o),l>.5?o:-o},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return t.randn()*n.sqrt(i/(2*t.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(i,o,d){return i<0||o<0||d<0?0:d/o*n.pow(i/o,d-1)*n.exp(-n.pow(i/o,d))},cdf:function(i,o,d){return i<0?0:1-n.exp(-n.pow(i/o,d))},inv:function(l,i,o){return i*n.pow(-n.log(1-l),1/o)},mean:function(l,i){return l*t.gammafn(1+1/i)},median:function(i,o){return i*n.pow(n.log(2),1/o)},mode:function(i,o){return o<=1?0:i*n.pow((o-1)/o,1/o)},sample:function(i,o){return i*n.pow(-n.log(t._random_fn()),1/o)},variance:function(i,o){return i*i*t.gammafn(1+2/o)-n.pow(t.weibull.mean(i,o),2)}}),t.extend(t.uniform,{pdf:function(i,o,d){return i<o||i>d?0:1/(d-o)},cdf:function(i,o,d){return i<o?0:i<d?(i-o)/(d-o):1},inv:function(l,i,o){return i+l*(o-i)},mean:function(i,o){return .5*(i+o)},median:function(i,o){return t.mean(i,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return i/2+o/2+(o/2-i/2)*(2*t._random_fn()-1)},variance:function(i,o){return n.pow(o-i,2)/12}});function c(l,i,o,d){for(var m=0,f=1,g=1,b=1,x=0,y=0,v;n.abs((g-y)/g)>d;)y=g,v=-(i+x)*(i+o+x)*l/(i+2*x)/(i+2*x+1),m=g+v*m,f=b+v*f,x=x+1,v=x*(o-x)*l/(i+2*x-1)/(i+2*x),g=m+v*g,b=f+v*b,m=m/b,f=f/b,g=g/b,b=1;return g/i}t.extend(t.binomial,{pdf:function(i,o,d){return d===0||d===1?o*d===i?1:0:t.combination(o,i)*n.pow(d,i)*n.pow(1-d,o-i)},cdf:function(i,o,d){var m,f=1e-10;if(i<0)return 0;if(i>=o)return 1;if(d<0||d>1||o<=0)return NaN;i=n.floor(i);var g=d,b=i+1,x=o-i,y=b+x,v=n.exp(t.gammaln(y)-t.gammaln(x)-t.gammaln(b)+b*n.log(g)+x*n.log(1-g));return g<(b+1)/(y+2)?m=v*c(g,b,x,f):m=1-v*c(1-g,x,b,f),n.round((1-m)*(1/f))/(1/f)}}),t.extend(t.negbin,{pdf:function(i,o,d){return i!==i>>>0?!1:i<0?0:t.combination(i+o-1,o-1)*n.pow(1-d,i)*n.pow(d,o)},cdf:function(i,o,d){var m=0,f=0;if(i<0)return 0;for(;f<=i;f++)m+=t.negbin.pdf(f,o,d);return m}}),t.extend(t.hypgeom,{pdf:function(i,o,d,m){if(i!==i|0)return!1;if(i<0||i<d-(o-m))return 0;if(i>m||i>d)return 0;if(d*2>o)return m*2>o?t.hypgeom.pdf(o-d-m+i,o,o-d,o-m):t.hypgeom.pdf(m-i,o,o-d,m);if(m*2>o)return t.hypgeom.pdf(d-i,o,d,o-m);if(d<m)return t.hypgeom.pdf(i,o,m,d);for(var f=1,g=0,b=0;b<i;b++){for(;f>1&&g<m;)f*=1-d/(o-g),g++;f*=(m-b)*(d-b)/((b+1)*(o-d-m+b+1))}for(;g<m;g++)f*=1-d/(o-g);return n.min(1,n.max(0,f))},cdf:function(i,o,d,m){if(i<0||i<d-(o-m))return 0;if(i>=m||i>=d)return 1;if(d*2>o)return m*2>o?t.hypgeom.cdf(o-d-m+i,o,o-d,o-m):1-t.hypgeom.cdf(m-i-1,o,o-d,m);if(m*2>o)return 1-t.hypgeom.cdf(d-i-1,o,d,o-m);if(d<m)return t.hypgeom.cdf(i,o,m,d);for(var f=1,g=1,b=0,x=0;x<i;x++){for(;f>1&&b<m;){var y=1-d/(o-b);g*=y,f*=y,b++}g*=(m-x)*(d-x)/((x+1)*(o-d-m+x+1)),f+=g}for(;b<m;b++)f*=1-d/(o-b);return n.min(1,n.max(0,f))}}),t.extend(t.poisson,{pdf:function(i,o){return o<0||i%1!==0||i<0?0:n.pow(o,i)*n.exp(-o)/t.factorial(i)},cdf:function(i,o){var d=[],m=0;if(i<0)return 0;for(;m<=i;m++)d.push(t.poisson.pdf(m,o));return t.sum(d)},mean:function(l){return l},variance:function(l){return l},sampleSmall:function(i){var o=1,d=0,m=n.exp(-i);do d++,o*=t._random_fn();while(o>m);return d-1},sampleLarge:function(i){var o=i,d,m,f,g,b,x,y,v,h,w;for(g=n.sqrt(o),b=n.log(o),y=.931+2.53*g,x=-.059+.02483*y,v=1.1239+1.1328/(y-3.4),h=.9277-3.6224/(y-2);;){if(m=n.random()-.5,f=n.random(),w=.5-n.abs(m),d=n.floor((2*x/w+y)*m+o+.43),w>=.07&&f<=h)return d;if(!(d<0||w<.013&&f>w)&&n.log(f)+n.log(v)-n.log(x/(w*w)+y)<=-o+d*b-t.loggam(d+1))return d}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),t.extend(t.triangular,{pdf:function(i,o,d,m){return d<=o||m<o||m>d?NaN:i<o||i>d?0:i<m?2*(i-o)/((d-o)*(m-o)):i===m?2/(d-o):2*(d-i)/((d-o)*(d-m))},cdf:function(i,o,d,m){return d<=o||m<o||m>d?NaN:i<=o?0:i>=d?1:i<=m?n.pow(i-o,2)/((d-o)*(m-o)):1-n.pow(d-i,2)/((d-o)*(d-m))},inv:function(i,o,d,m){return d<=o||m<o||m>d?NaN:i<=(m-o)/(d-o)?o+(d-o)*n.sqrt(i*((m-o)/(d-o))):o+(d-o)*(1-n.sqrt((1-i)*(1-(m-o)/(d-o))))},mean:function(i,o,d){return(i+o+d)/3},median:function(i,o,d){if(d<=(i+o)/2)return o-n.sqrt((o-i)*(o-d))/n.sqrt(2);if(d>(i+o)/2)return i+n.sqrt((o-i)*(d-i))/n.sqrt(2)},mode:function(i,o,d){return d},sample:function(i,o,d){var m=t._random_fn();return m<(d-i)/(o-i)?i+n.sqrt(m*(o-i)*(d-i)):o-n.sqrt((1-m)*(o-i)*(o-d))},variance:function(i,o,d){return(i*i+o*o+d*d-i*o-i*d-o*d)/18}}),t.extend(t.arcsine,{pdf:function(i,o,d){return d<=o?NaN:i<=o||i>=d?0:2/n.PI*n.pow(n.pow(d-o,2)-n.pow(2*i-o-d,2),-.5)},cdf:function(i,o,d){return i<o?0:i<d?2/n.PI*n.asin(n.sqrt((i-o)/(d-o))):1},inv:function(l,i,o){return i+(.5-.5*n.cos(n.PI*l))*(o-i)},mean:function(i,o){return o<=i?NaN:(i+o)/2},median:function(i,o){return o<=i?NaN:(i+o)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return(i+o)/2+(o-i)/2*n.sin(2*n.PI*t.uniform.sample(0,1))},variance:function(i,o){return o<=i?NaN:n.pow(o-i,2)/8}});function s(l){return l/n.abs(l)}t.extend(t.laplace,{pdf:function(i,o,d){return d<=0?0:n.exp(-n.abs(i-o)/d)/(2*d)},cdf:function(i,o,d){return d<=0?0:i<o?.5*n.exp((i-o)/d):1-.5*n.exp(-(i-o)/d)},mean:function(l){return l},median:function(l){return l},mode:function(l){return l},variance:function(l,i){return 2*i*i},sample:function(i,o){var d=t._random_fn()-.5;return i-o*s(d)*n.log(1-2*n.abs(d))}});function p(l,i,o){var d=12,m=6,f=-30,g=-50,b=60,x=8,y=3,v=2,h=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],k=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],E=l*.5;if(E>=x)return 1;var C=2*t.normal.cdf(E,0,1,1,0)-1;C>=n.exp(g/o)?C=n.pow(C,o):C=0;var $;l>y?$=v:$=h;for(var I=E,A=(x-E)/$,L=I+A,R=0,N=o-1,V=1;V<=$;V++){for(var P=0,D=.5*(L+I),te=.5*(L-I),Y=1;Y<=d;Y++){var J,oe;m<Y?(J=d-Y+1,oe=w[J-1]):(J=Y,oe=-w[J-1]);var ue=te*oe,Q=D+ue,ge=Q*Q;if(ge>b)break;var Se=2*t.normal.cdf(Q,0,1,1,0),z=2*t.normal.cdf(Q,l,1,1,0),_=Se*.5-z*.5;_>=n.exp(f/N)&&(_=k[J-1]*n.exp(-(.5*ge))*n.pow(_,N),P+=_)}P*=2*te*o/n.sqrt(2*n.PI),R+=P,I=L,L+=A}return C+=R,C<=n.exp(f/i)?0:(C=n.pow(C,i),C>=1?1:C)}function u(l,i,o){var d=.322232421088,m=.099348462606,f=-1,g=.588581570495,b=-.342242088547,x=.531103462366,y=-.204231210125,v=.10353775285,h=-453642210148e-16,w=.0038560700634,k=.8832,E=.2368,C=1.208,$=1.4142,I=120,A=.5-.5*l,L=n.sqrt(n.log(1/(A*A))),R=L+((((L*h+y)*L+b)*L+f)*L+d)/((((L*w+v)*L+x)*L+g)*L+m);o<I&&(R+=(R*R*R+R)/o/4);var N=k-E*R;return o<I&&(N+=-1.214/o+C*R/o),R*(N*n.log(i-1)+$)}t.extend(t.tukey,{cdf:function(i,o,d){var m=1,f=o,g=16,b=8,x=-30,y=1e-14,v=100,h=800,w=5e3,k=25e3,E=1,C=.5,$=.25,I=.125,A=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],L=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(d<2||m<1||f<2)return NaN;if(!Number.isFinite(i))return 1;if(d>k)return p(i,m,f);var R=d*.5,N=R*n.log(d)-d*n.log(2)-t.gammaln(R),V=R-1,P=d*.25,D;d<=v?D=E:d<=h?D=C:d<=w?D=$:D=I,N+=n.log(D);for(var te=0,Y=1;Y<=50;Y++){for(var J=0,oe=(2*Y-1)*D,ue=1;ue<=g;ue++){var Q,ge;b<ue?(Q=ue-b-1,ge=N+V*n.log(oe+A[Q]*D)-(A[Q]*D+oe)*P):(Q=ue-1,ge=N+V*n.log(oe-A[Q]*D)+(A[Q]*D-oe)*P);var Se;if(ge>=x){b<ue?Se=i*n.sqrt((A[Q]*D+oe)*.5):Se=i*n.sqrt((-(A[Q]*D)+oe)*.5);var z=p(Se,m,f),_=z*L[Q]*n.exp(ge);J+=_}}if(Y*D>=1&&J<=y)break;te+=J}if(J>y)throw new Error("tukey.cdf failed to converge");return te>1&&(te=1),te},inv:function(l,i,o){var d=1,m=i,f=1e-4,g=50;if(o<2||d<1||m<2)return NaN;if(l<0||l>1)return NaN;if(l===0)return 0;if(l===1)return 1/0;var b=u(l,m,o),x=t.tukey.cdf(b,i,o)-l,y;x>0?y=n.max(0,b-1):y=b+1;for(var v=t.tukey.cdf(y,i,o)-l,h,w=1;w<g;w++){h=y-v*(y-b)/(v-x),x=v,b=y,h<0&&(h=0,v=-l),v=t.tukey.cdf(h,i,o)-l,y=h;var k=n.abs(y-b);if(k<f)return h}throw new Error("tukey.inv failed to converge")}})})(r,Math),(function(t,n){var c=Array.prototype.push,s=t.utils.isArray;function p(u){return s(u)||u instanceof t}t.extend({add:function(l,i){return p(i)?(p(i[0])||(i=[i]),t.map(l,function(o,d,m){return o+i[d][m]})):t.map(l,function(o){return o+i})},subtract:function(l,i){return p(i)?(p(i[0])||(i=[i]),t.map(l,function(o,d,m){return o-i[d][m]||0})):t.map(l,function(o){return o-i})},divide:function(l,i){return p(i)?(p(i[0])||(i=[i]),t.multiply(l,t.inv(i))):t.map(l,function(o){return o/i})},multiply:function(l,i){var o,d,m,f,g,b,x,y;if(l.length===void 0&&i.length===void 0)return l*i;if(g=l.length,b=l[0].length,x=t.zeros(g,m=p(i)?i[0].length:b),y=0,p(i)){for(;y<m;y++)for(o=0;o<g;o++){for(f=0,d=0;d<b;d++)f+=l[o][d]*i[d][y];x[o][y]=f}return g===1&&y===1?x[0][0]:x}return t.map(l,function(v){return v*i})},outer:function(l,i){return t.multiply(l.map(function(o){return[o]}),[i])},dot:function(l,i){p(l[0])||(l=[l]),p(i[0])||(i=[i]);for(var o=l[0].length===1&&l.length!==1?t.transpose(l):l,d=i[0].length===1&&i.length!==1?t.transpose(i):i,m=[],f=0,g=o.length,b=o[0].length,x,y;f<g;f++){for(m[f]=[],x=0,y=0;y<b;y++)x+=o[f][y]*d[f][y];m[f]=x}return m.length===1?m[0]:m},pow:function(l,i){return t.map(l,function(o){return n.pow(o,i)})},exp:function(l){return t.map(l,function(i){return n.exp(i)})},log:function(l){return t.map(l,function(i){return n.log(i)})},abs:function(l){return t.map(l,function(i){return n.abs(i)})},norm:function(l,i){var o=0,d=0;for(isNaN(i)&&(i=2),p(l[0])&&(l=l[0]);d<l.length;d++)o+=n.pow(n.abs(l[d]),i);return n.pow(o,1/i)},angle:function(l,i){return n.acos(t.dot(l,i)/(t.norm(l)*t.norm(i)))},aug:function(l,i){var o=[],d;for(d=0;d<l.length;d++)o.push(l[d].slice());for(d=0;d<o.length;d++)c.apply(o[d],i[d]);return o},inv:function(l){for(var i=l.length,o=l[0].length,d=t.identity(i,o),m=t.gauss_jordan(l,d),f=[],g=0,b;g<i;g++)for(f[g]=[],b=o;b<m[0].length;b++)f[g][b-o]=m[g][b];return f},det:function u(l){if(l.length===2)return l[0][0]*l[1][1]-l[0][1]*l[1][0];for(var i=0,o=0;o<l.length;o++){for(var d=[],m=1;m<l.length;m++){d[m-1]=[];for(var f=0;f<l.length;f++)f<o?d[m-1][f]=l[m][f]:f>o&&(d[m-1][f-1]=l[m][f])}var g=o%2?-1:1;i+=u(d)*l[0][o]*g}return i},gauss_elimination:function(l,i){var o=0,d=0,m=l.length,f=l[0].length,g=1,b=0,x=[],y,v,h,w;for(l=t.aug(l,i),y=l[0].length,o=0;o<m;o++){for(v=l[o][o],d=o,w=o+1;w<f;w++)v<n.abs(l[w][o])&&(v=l[w][o],d=w);if(d!=o)for(w=0;w<y;w++)h=l[o][w],l[o][w]=l[d][w],l[d][w]=h;for(d=o+1;d<m;d++)for(g=l[d][o]/l[o][o],w=o;w<y;w++)l[d][w]=l[d][w]-g*l[o][w]}for(o=m-1;o>=0;o--){for(b=0,d=o+1;d<=m-1;d++)b=b+x[d]*l[o][d];x[o]=(l[o][y-1]-b)/l[o][o]}return x},gauss_jordan:function(l,i){var o=t.aug(l,i),d=o.length,m=o[0].length,f=0,g,b,x;for(b=0;b<d;b++){var y=b;for(x=b+1;x<d;x++)n.abs(o[x][b])>n.abs(o[y][b])&&(y=x);var v=o[b];for(o[b]=o[y],o[y]=v,x=b+1;x<d;x++)for(f=o[x][b]/o[b][b],g=b;g<m;g++)o[x][g]-=o[b][g]*f}for(b=d-1;b>=0;b--){for(f=o[b][b],x=0;x<b;x++)for(g=m-1;g>b-1;g--)o[x][g]-=o[b][g]*o[x][b]/f;for(o[b][b]/=f,g=d;g<m;g++)o[b][g]/=f}return o},triaUpSolve:function(l,i){var o=l[0].length,d=t.zeros(1,o)[0],m,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),t.arange(o-1,-1,-1).forEach(function(g){m=t.arange(g+1,o).map(function(b){return d[b]*l[g][b]}),d[g]=(i[g]-t.sum(m))/l[g][g]}),f?d.map(function(g){return[g]}):d},triaLowSolve:function(l,i){var o=l[0].length,d=t.zeros(1,o)[0],m,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),t.arange(o).forEach(function(g){m=t.arange(g).map(function(b){return l[g][b]*d[b]}),d[g]=(i[g]-t.sum(m))/l[g][g]}),f?d.map(function(g){return[g]}):d},lu:function(l){var i=l.length,o=t.identity(i),d=t.zeros(l.length,l[0].length),m;return t.arange(i).forEach(function(f){d[0][f]=l[0][f]}),t.arange(1,i).forEach(function(f){t.arange(f).forEach(function(g){m=t.arange(g).map(function(b){return o[f][b]*d[b][g]}),o[f][g]=(l[f][g]-t.sum(m))/d[g][g]}),t.arange(f,i).forEach(function(g){m=t.arange(f).map(function(b){return o[f][b]*d[b][g]}),d[f][g]=l[m.length][g]-t.sum(m)})}),[o,d]},cholesky:function(l){var i=l.length,o=t.zeros(l.length,l[0].length),d;return t.arange(i).forEach(function(m){d=t.arange(m).map(function(f){return n.pow(o[m][f],2)}),o[m][m]=n.sqrt(l[m][m]-t.sum(d)),t.arange(m+1,i).forEach(function(f){d=t.arange(m).map(function(g){return o[m][g]*o[f][g]}),o[f][m]=(l[m][f]-t.sum(d))/o[m][m]})}),o},gauss_jacobi:function(l,i,o,d){for(var m=0,f=0,g=l.length,b=[],x=[],y=[],v,h,w,k;m<g;m++)for(b[m]=[],x[m]=[],y[m]=[],f=0;f<g;f++)m>f?(b[m][f]=l[m][f],x[m][f]=y[m][f]=0):m<f?(x[m][f]=l[m][f],b[m][f]=y[m][f]=0):(y[m][f]=l[m][f],b[m][f]=x[m][f]=0);for(w=t.multiply(t.multiply(t.inv(y),t.add(b,x)),-1),h=t.multiply(t.inv(y),i),v=o,k=t.add(t.multiply(w,o),h),m=2;n.abs(t.norm(t.subtract(k,v)))>d;)v=k,k=t.add(t.multiply(w,v),h),m++;return k},gauss_seidel:function(l,i,o,d){for(var m=0,f=l.length,g=[],b=[],x=[],y,v,h,w,k;m<f;m++)for(g[m]=[],b[m]=[],x[m]=[],y=0;y<f;y++)m>y?(g[m][y]=l[m][y],b[m][y]=x[m][y]=0):m<y?(b[m][y]=l[m][y],g[m][y]=x[m][y]=0):(x[m][y]=l[m][y],g[m][y]=b[m][y]=0);for(w=t.multiply(t.multiply(t.inv(t.add(x,g)),b),-1),h=t.multiply(t.inv(t.add(x,g)),i),v=o,k=t.add(t.multiply(w,o),h),m=2;n.abs(t.norm(t.subtract(k,v)))>d;)v=k,k=t.add(t.multiply(w,v),h),m=m+1;return k},SOR:function(l,i,o,d,m){for(var f=0,g=l.length,b=[],x=[],y=[],v,h,w,k,E;f<g;f++)for(b[f]=[],x[f]=[],y[f]=[],v=0;v<g;v++)f>v?(b[f][v]=l[f][v],x[f][v]=y[f][v]=0):f<v?(x[f][v]=l[f][v],b[f][v]=y[f][v]=0):(y[f][v]=l[f][v],b[f][v]=x[f][v]=0);for(k=t.multiply(t.inv(t.add(y,t.multiply(b,m))),t.subtract(t.multiply(y,1-m),t.multiply(x,m))),w=t.multiply(t.multiply(t.inv(t.add(y,t.multiply(b,m))),i),m),h=o,E=t.add(t.multiply(k,o),w),f=2;n.abs(t.norm(t.subtract(E,h)))>d;)h=E,E=t.add(t.multiply(k,h),w),f++;return E},householder:function(l){for(var i=l.length,o=l[0].length,d=0,m=[],f=[],g,b,x,y,v;d<i-1;d++){for(g=0,y=d+1;y<o;y++)g+=l[y][d]*l[y][d];for(v=l[d+1][d]>0?-1:1,g=v*n.sqrt(g),b=n.sqrt((g*g-l[d+1][d]*g)/2),m=t.zeros(i,1),m[d+1][0]=(l[d+1][d]-g)/(2*b),x=d+2;x<i;x++)m[x][0]=l[x][d]/(2*b);f=t.subtract(t.identity(i,o),t.multiply(t.multiply(m,t.transpose(m)),2)),l=t.multiply(f,t.multiply(l,f))}return l},QR:(function(){var u=t.sum,l=t.arange;function i(o){var d=o.length,m=o[0].length,f=t.zeros(m,m);o=t.copy(o);var g,b,x;for(b=0;b<m;b++){for(f[b][b]=n.sqrt(u(l(d).map(function(y){return o[y][b]*o[y][b]}))),g=0;g<d;g++)o[g][b]=o[g][b]/f[b][b];for(x=b+1;x<m;x++)for(f[b][x]=u(l(d).map(function(y){return o[y][b]*o[y][x]})),g=0;g<d;g++)o[g][x]=o[g][x]-o[g][b]*f[b][x]}return[o,f]}return i})(),lstsq:(function(){function u(i){i=t.copy(i);var o=i.length,d=t.identity(o);return t.arange(o-1,-1,-1).forEach(function(m){t.sliceAssign(d,{row:m},t.divide(t.slice(d,{row:m}),i[m][m])),t.sliceAssign(i,{row:m},t.divide(t.slice(i,{row:m}),i[m][m])),t.arange(m).forEach(function(f){var g=t.multiply(i[f][m],-1),b=t.slice(i,{row:f}),x=t.multiply(t.slice(i,{row:m}),g);t.sliceAssign(i,{row:f},t.add(b,x));var y=t.slice(d,{row:f}),v=t.multiply(t.slice(d,{row:m}),g);t.sliceAssign(d,{row:f},t.add(y,v))})}),d}function l(i,o){var d=!1;o[0].length===void 0&&(o=o.map(function(k){return[k]}),d=!0);var m=t.QR(i),f=m[0],g=m[1],b=i[0].length,x=t.slice(f,{col:{end:b}}),y=t.slice(g,{row:{end:b}}),v=u(y),h=t.transpose(x);h[0].length===void 0&&(h=[h]);var w=t.multiply(t.multiply(v,h),o);return w.length===void 0&&(w=[[w]]),d?w.map(function(k){return k[0]}):w}return l})(),jacobi:function(l){for(var i=1,o=l.length,d=t.identity(o,o),m=[],f,g,b,x,y,v,h,w;i===1;){for(v=l[0][1],x=0,y=1,g=0;g<o;g++)for(b=0;b<o;b++)g!=b&&v<n.abs(l[g][b])&&(v=n.abs(l[g][b]),x=g,y=b);for(l[x][x]===l[y][y]?h=l[x][y]>0?n.PI/4:-n.PI/4:h=n.atan(2*l[x][y]/(l[x][x]-l[y][y]))/2,w=t.identity(o,o),w[x][x]=n.cos(h),w[x][y]=-n.sin(h),w[y][x]=n.sin(h),w[y][y]=n.cos(h),d=t.multiply(d,w),f=t.multiply(t.multiply(t.inv(w),l),w),l=f,i=0,g=1;g<o;g++)for(b=1;b<o;b++)g!=b&&n.abs(l[g][b])>.001&&(i=1)}for(g=0;g<o;g++)m.push(l[g][g]);return[d,m]},rungekutta:function(l,i,o,d,m,f){var g,b,x,y,v;if(f===2)for(;d<=o;)g=i*l(d,m),b=i*l(d+i,m+g),x=m+(g+b)/2,m=x,d=d+i;if(f===4)for(;d<=o;)g=i*l(d,m),b=i*l(d+i/2,m+g/2),y=i*l(d+i/2,m+b/2),v=i*l(d+i,m+y),x=m+(g+2*b+2*y+v)/6,m=x,d=d+i;return m},romberg:function(l,i,o,d){for(var m=0,f=(o-i)/2,g=[],b=[],x=[],y,v,h,w,k;m<d/2;){for(k=l(i),h=i,w=0;h<=o;h=h+f,w++)g[w]=h;for(y=g.length,h=1;h<y-1;h++)k+=(h%2!==0?4:2)*l(g[h]);k=f/3*(k+l(o)),x[m]=k,f/=2,m++}for(v=x.length,y=1;v!==1;){for(h=0;h<v-1;h++)b[h]=(n.pow(4,y)*x[h+1]-x[h])/(n.pow(4,y)-1);v=b.length,x=b,b=[],y++}return x},richardson:function(l,i,o,d){function m(E,C){for(var $=0,I=E.length,A;$<I;$++)E[$]===C&&(A=$);return A}for(var f=n.abs(o-l[m(l,o)+1]),g=0,b=[],x=[],y,v,h,w,k;d>=f;)y=m(l,o+d),v=m(l,o),b[g]=(i[y]-2*i[v]+i[2*v-y])/(d*d),d/=2,g++;for(w=b.length,h=1;w!=1;){for(k=0;k<w-1;k++)x[k]=(n.pow(4,h)*b[k+1]-b[k])/(n.pow(4,h)-1);w=x.length,b=x,x=[],h++}return b},simpson:function(l,i,o,d){for(var m=(o-i)/d,f=l(i),g=[],b=i,x=0,y=1,v;b<=o;b=b+m,x++)g[x]=b;for(v=g.length;y<v-1;y++)f+=(y%2!==0?4:2)*l(g[y]);return m/3*(f+l(o))},hermite:function(l,i,o,d){for(var m=l.length,f=0,g=0,b=[],x=[],y=[],v=[],h;g<m;g++){for(b[g]=1,h=0;h<m;h++)g!=h&&(b[g]*=(d-l[h])/(l[g]-l[h]));for(x[g]=0,h=0;h<m;h++)g!=h&&(x[g]+=1/(l[g]-l[h]));y[g]=(1-2*(d-l[g])*x[g])*(b[g]*b[g]),v[g]=(d-l[g])*(b[g]*b[g]),f+=y[g]*i[g]+v[g]*o[g]}return f},lagrange:function(l,i,o){for(var d=0,m=0,f,g,b=l.length;m<b;m++){for(g=i[m],f=0;f<b;f++)m!=f&&(g*=(o-l[f])/(l[m]-l[f]));d+=g}return d},cubic_spline:function(l,i,o){for(var d=l.length,m=0,f,g=[],b=[],x=[],y=[],v=[],h=[],w=[];m<d-1;m++)v[m]=l[m+1]-l[m];for(x[0]=0,m=1;m<d-1;m++)x[m]=3/v[m]*(i[m+1]-i[m])-3/v[m-1]*(i[m]-i[m-1]);for(m=1;m<d-1;m++)g[m]=[],b[m]=[],g[m][m-1]=v[m-1],g[m][m]=2*(v[m-1]+v[m]),g[m][m+1]=v[m],b[m][0]=x[m];for(y=t.multiply(t.inv(g),b),f=0;f<d-1;f++)h[f]=(i[f+1]-i[f])/v[f]-v[f]*(y[f+1][0]+2*y[f][0])/3,w[f]=(y[f+1][0]-y[f][0])/(3*v[f]);for(f=0;f<d&&!(l[f]>o);f++);return f-=1,i[f]+(o-l[f])*h[f]+t.sq(o-l[f])*y[f]+(o-l[f])*t.sq(o-l[f])*w[f]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(l){var i=l.length,o=l[0].length,d=0,m,f,g=[],b=[],x=[],y=[],v=[],h=[],w=[],k=[],E=[],C=[];for(d=0;d<i;d++)g[d]=t.sum(l[d])/o;for(d=0;d<o;d++)for(w[d]=[],m=0;m<i;m++)w[d][m]=l[m][d]-g[m];for(w=t.transpose(w),d=0;d<i;d++)for(k[d]=[],m=0;m<i;m++)k[d][m]=t.dot([w[d]],[w[m]])/(o-1);for(x=t.jacobi(k),E=x[0],b=x[1],C=t.transpose(E),d=0;d<b.length;d++)for(m=d;m<b.length;m++)b[d]<b[m]&&(f=b[d],b[d]=b[m],b[m]=f,y=C[d],C[d]=C[m],C[m]=y);for(h=t.transpose(w),d=0;d<i;d++)for(v[d]=[],m=0;m<h.length;m++)v[d][m]=t.dot([C[d]],[h[m]]);return[l,b,C,v]}}),(function(u){for(var l=0;l<u.length;l++)(function(i){t.fn[i]=function(o,d){var m=this;return d?(setTimeout(function(){d.call(m,t.fn[i].call(m,o))},15),this):typeof t[i](this,o)=="number"?t[i](this,o):t(t[i](this,o))}})(u[l])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(r,Math),(function(t,n){var c=[].slice,s=t.utils.isNumber,p=t.utils.isArray;t.extend({zscore:function(){var i=c.call(arguments);return s(i[1])?(i[0]-i[1])/i[2]:(i[0]-t.mean(i[1]))/t.stdev(i[1],i[2])},ztest:function(){var i=c.call(arguments),o;return p(i[1])?(o=t.zscore(i[0],i[1],i[3]),i[2]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):i.length>2?(o=t.zscore(i[0],i[1],i[2]),i[3]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):(o=i[0],i[1]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2)}}),t.extend(t.fn,{zscore:function(i,o){return(i-this.mean())/this.stdev(o)},ztest:function(i,o,d){var m=n.abs(this.zscore(i,d));return o===1?t.normal.cdf(-m,0,1):t.normal.cdf(-m,0,1)*2}}),t.extend({tscore:function(){var i=c.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/n.sqrt(i[3])):(i[0]-t.mean(i[1]))/(t.stdev(i[1],!0)/n.sqrt(i[1].length))},ttest:function(){var i=c.call(arguments),o;return i.length===5?(o=n.abs(t.tscore(i[0],i[1],i[2],i[3])),i[4]===1?t.studentt.cdf(-o,i[3]-1):t.studentt.cdf(-o,i[3]-1)*2):s(i[1])?(o=n.abs(i[0]),i[2]==1?t.studentt.cdf(-o,i[1]-1):t.studentt.cdf(-o,i[1]-1)*2):(o=n.abs(t.tscore(i[0],i[1])),i[2]==1?t.studentt.cdf(-o,i[1].length-1):t.studentt.cdf(-o,i[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/n.sqrt(this.cols()))},ttest:function(i,o){return o===1?1-t.studentt.cdf(n.abs(this.tscore(i)),this.cols()-1):t.studentt.cdf(-n.abs(this.tscore(i)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var i=c.call(arguments),o,d,m,f,g,b,x,y;if(i.length===1){for(g=new Array(i[0].length),x=0;x<i[0].length;x++)g[x]=i[0][x];i=g}for(d=new Array,x=0;x<i.length;x++)d=d.concat(i[x]);for(m=t.mean(d),o=0,x=0;x<i.length;x++)o=o+i[x].length*n.pow(t.mean(i[x])-m,2);for(o/=i.length-1,b=0,x=0;x<i.length;x++)for(f=t.mean(i[x]),y=0;y<i[x].length;y++)b+=n.pow(i[x][y]-f,2);return b/=d.length-i.length,o/b},anovaftest:function(){var i=c.call(arguments),o,d,m,f;if(s(i[0]))return 1-t.centralF.cdf(i[0],i[1],i[2]);var g=t.anovafscore(i);for(o=i.length-1,m=0,f=0;f<i.length;f++)m=m+i[f].length;return d=m-o-1,1-t.centralF.cdf(g,o,d)},ftest:function(i,o,d){return 1-t.centralF.cdf(i,o,d)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var i=0,o;for(o=0;o<this.length;o++)i=i+this[o].length;return t.ftest(this.anovafscore(),this.length-1,i-this.length)}}),t.extend({qscore:function(){var i=c.call(arguments),o,d,m,f,g;return s(i[0])?(o=i[0],d=i[1],m=i[2],f=i[3],g=i[4]):(o=t.mean(i[0]),d=t.mean(i[1]),m=i[0].length,f=i[1].length,g=i[2]),n.abs(o-d)/(g*n.sqrt((1/m+1/f)/2))},qtest:function(){var i=c.call(arguments),o;i.length===3?(o=i[0],i=i.slice(1)):i.length===7?(o=t.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(o=t.qscore(i[0],i[1],i[2]),i=i.slice(3));var d=i[0],m=i[1];return 1-t.tukey.cdf(o,m,d-m)},tukeyhsd:function(i){for(var o=t.pooledstdev(i),d=i.map(function(y){return t.mean(y)}),m=i.reduce(function(y,v){return y+v.length},0),f=[],g=0;g<i.length;++g)for(var b=g+1;b<i.length;++b){var x=t.qtest(d[g],d[b],i[g].length,i[b].length,o,m,i.length);f.push([[g,b],x])}return f}}),t.extend({normalci:function(){var i=c.call(arguments),o=new Array(2),d;return i.length===4?d=n.abs(t.normal.inv(i[1]/2,0,1)*i[2]/n.sqrt(i[3])):d=n.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/n.sqrt(i[2].length)),o[0]=i[0]-d,o[1]=i[0]+d,o},tci:function(){var i=c.call(arguments),o=new Array(2),d;return i.length===4?d=n.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/n.sqrt(i[3])):d=n.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/n.sqrt(i[2].length)),o[0]=i[0]-d,o[1]=i[0]+d,o},significant:function(i,o){return i<o}}),t.extend(t.fn,{normalci:function(i,o){return t.normalci(i,o,this.toArray())},tci:function(i,o){return t.tci(i,o,this.toArray())}});function u(l,i,o,d){if(l>1||o>1||l<=0||o<=0)throw new Error("Proportions should be greater than 0 and less than 1");var m=(l*i+o*d)/(i+d),f=n.sqrt(m*(1-m)*(1/i+1/d));return(l-o)/f}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(i,o,d,m){var f=u(i,o,d,m);return t.ztest(f,1)},twoSidedDifferenceOfProportions:function(i,o,d,m){var f=u(i,o,d,m);return t.ztest(f,2)}})})(r,Math),r.models=(function(){function t(u){var l=u[0].length,i=r.arange(l).map(function(o){var d=r.arange(l).filter(function(m){return m!==o});return n(r.col(u,o).map(function(m){return m[0]}),r.col(u,d))});return i}function n(u,l){var i=u.length,o=l[0].length-1,d=i-o-1,m=r.lstsq(l,u),f=r.multiply(l,m.map(function(w){return[w]})).map(function(w){return w[0]}),g=r.subtract(u,f),b=r.mean(u),x=r.sum(f.map(function(w){return Math.pow(w-b,2)})),y=r.sum(u.map(function(w,k){return Math.pow(w-f[k],2)})),v=x+y,h=x/v;return{exog:l,endog:u,nobs:i,df_model:o,df_resid:d,coef:m,predict:f,resid:g,ybar:b,SST:v,SSE:x,SSR:y,R2:h}}function c(u){var l=t(u.exog),i=Math.sqrt(u.SSR/u.df_resid),o=l.map(function(b){var x=b.SST,y=b.R2;return i/Math.sqrt(x*(1-y))}),d=u.coef.map(function(b,x){return(b-0)/o[x]}),m=d.map(function(b){var x=r.studentt.cdf(b,u.df_resid);return(x>.5?1-x:x)*2}),f=r.studentt.inv(.975,u.df_resid),g=u.coef.map(function(b,x){var y=f*o[x];return[b-y,b+y]});return{se:o,t:d,p:m,sigmaHat:i,interval95:g}}function s(u){var l=u.R2/u.df_model/((1-u.R2)/u.df_resid),i=function(d,m,f){return r.beta.cdf(d/(f/m+d),m/2,f/2)},o=1-i(l,u.df_model,u.df_resid);return{F_statistic:l,pvalue:o}}function p(u,l){var i=n(u,l),o=c(i),d=s(i),m=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=o,i.f=d,i.adjust_R2=m,i}return{ols:p}})(),r.extend({buildxmatrix:function(){for(var n=new Array(arguments.length),c=0;c<arguments.length;c++){var s=[1];n[c]=s.concat(arguments[c])}return r(n)},builddxmatrix:function(){for(var n=new Array(arguments[0].length),c=0;c<arguments[0].length;c++){var s=[1];n[c]=s.concat(arguments[0][c])}return r(n)},buildjxmatrix:function(n){for(var c=new Array(n.length),s=0;s<n.length;s++)c[s]=n[s];return r.builddxmatrix(c)},buildymatrix:function(n){return r(n).transpose()},buildjymatrix:function(n){return n.transpose()},matrixmult:function(n,c){var s,p,u,l,i;if(n.cols()==c.rows()){if(c.rows()>1){for(l=[],s=0;s<n.rows();s++)for(l[s]=[],p=0;p<c.cols();p++){for(i=0,u=0;u<n.cols();u++)i+=n.toArray()[s][u]*c.toArray()[u][p];l[s][p]=i}return r(l)}for(l=[],s=0;s<n.rows();s++)for(l[s]=[],p=0;p<c.cols();p++){for(i=0,u=0;u<n.cols();u++)i+=n.toArray()[s][u]*c.toArray()[p];l[s][p]=i}return r(l)}},regress:function(n,c){var s=r.xtranspxinv(n),p=n.transpose(),u=r.matrixmult(r(s),p);return r.matrixmult(u,c)},regresst:function(n,c,s){var p=r.regress(n,c),u={};u.anova={};var l=r.jMatYBar(n,p);u.yBar=l;var i=c.mean();u.anova.residuals=r.residuals(c,l),u.anova.ssr=r.ssr(l,i),u.anova.msr=u.anova.ssr/(n[0].length-1),u.anova.sse=r.sse(c,l),u.anova.mse=u.anova.sse/(c.length-(n[0].length-1)-1),u.anova.sst=r.sst(c,i),u.anova.mst=u.anova.sst/(c.length-1),u.anova.r2=1-u.anova.sse/u.anova.sst,u.anova.r2<0&&(u.anova.r2=0),u.anova.fratio=u.anova.msr/u.anova.mse,u.anova.pvalue=r.anovaftest(u.anova.fratio,n[0].length-1,c.length-(n[0].length-1)-1),u.anova.rmse=Math.sqrt(u.anova.mse),u.anova.r2adj=1-u.anova.mse/u.anova.mst,u.anova.r2adj<0&&(u.anova.r2adj=0),u.stats=new Array(n[0].length);for(var o=r.xtranspxinv(n),d,m,f,g=0;g<p.length;g++)d=Math.sqrt(u.anova.mse*Math.abs(o[g][g])),m=Math.abs(p[g]/d),f=r.ttest(m,c.length-n[0].length-1,s),u.stats[g]=[p[g],d,m,f];return u.regress=p,u},xtranspx:function(n){return r.matrixmult(n.transpose(),n)},xtranspxinv:function(n){var c=r.matrixmult(n.transpose(),n),s=r.inv(c);return s},jMatYBar:function(n,c){var s=r.matrixmult(n,c);return new r(s)},residuals:function(n,c){return r.matrixsubtract(n,c)},ssr:function(n,c){for(var s=0,p=0;p<n.length;p++)s+=Math.pow(n[p]-c,2);return s},sse:function(n,c){for(var s=0,p=0;p<n.length;p++)s+=Math.pow(n[p]-c[p],2);return s},sst:function(n,c){for(var s=0,p=0;p<n.length;p++)s+=Math.pow(n[p]-c,2);return s},matrixsubtract:function(n,c){for(var s=new Array(n.length),p=0;p<n.length;p++){s[p]=new Array(n[p].length);for(var u=0;u<n[p].length;u++)s[p][u]=n[p][u]-c[p][u]}return r(s)}}),r.jStat=r,r})})(Ht)),Ht.exports}var va=cb();const Ua=sb(va),wr=va.jStat??Ua?.jStat;if(!wr)throw new Error("No fue posible cargar el motor estadístico jStat.");function Xs(e){return Math.min(1,Math.max(0,e))}function db(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function ub(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function ga(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe ser un arreglo de valores.`);const r=e.map(ub),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${a} debe contener al menos dos observaciones.`);return r}function pb(e){return e.reduce((a,r)=>a+r,0)/e.length}function mb(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2!==0?a[r]:(a[r-1]+a[r])/2}function fb(e,a){return e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function za(e){const a=ga(e,"La muestra"),r=pb(a),t=fb(a,r);return{n:a.length,media:r,mediana:mb(a),varianza:t,desviacionEstandar:Math.sqrt(t),minimo:Math.min(...a),maximo:Math.max(...a)}}function Zs(e,a){return Xs(2*(1-wr.studentt.cdf(Math.abs(e),a)))}function el(e,a,r,t){db(t);const n=1-t,c=wr.studentt.inv(1-n/2,r),s=c*a;return{nivel:t,valorCritico:c,inferior:e-s,superior:e+s}}function al(e,a,r,t,n){const c=t+n-2,s=((t-1)*a+(n-1)*r)/c,p=Math.sqrt(s);if(p===0)return{dCohen:0,gHedges:0,correccionHedges:1};const u=e/p,l=1-3/(4*c-1);return{dCohen:u,gHedges:l*u,correccionHedges:l}}function bb(e,a,r={}){const{nivelConfianza:t=.95}=r,n=ga(e,"El grupo 1"),c=ga(a,"El grupo 2"),s=za(n),p=za(c),u=s.n+p.n-2,l=((s.n-1)*s.varianza+(p.n-1)*p.varianza)/u,i=Math.sqrt(l*(1/s.n+1/p.n));if(i===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const o=s.media-p.media,d=o/i,m=Zs(d,u);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:s,grupo2:p,diferenciaMedias:o,errorEstandar:i,varianzaCombinada:l,estadistico:{simbolo:"t",valor:d},gradosLibertad:u,valorP:m,intervaloConfianza:el(o,i,u,t),tamanioEfecto:al(o,s.varianza,p.varianza,s.n,p.n)}}function gb(e,a,r={}){const{nivelConfianza:t=.95}=r,n=ga(e,"El grupo 1"),c=ga(a,"El grupo 2"),s=za(n),p=za(c),u=s.varianza/s.n,l=p.varianza/p.n,i=u+l,o=Math.sqrt(i);if(o===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const d=i**2,m=u**2/(s.n-1)+l**2/(p.n-1),f=d/m,g=s.media-p.media,b=g/o,x=Zs(b,f);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:s,grupo2:p,diferenciaMedias:g,errorEstandar:o,estadistico:{simbolo:"t",valor:b},gradosLibertad:f,valorP:x,intervaloConfianza:el(g,o,f,t),tamanioEfecto:al(g,s.varianza,p.varianza,s.n,p.n)}}function hb(e,a){const r=[...e.map(c=>({valor:c,grupo:1,rango:0})),...a.map(c=>({valor:c,grupo:2,rango:0}))].sort((c,s)=>c.valor-s.valor);let t=0,n=0;for(;t<r.length;){let c=t+1;for(;c<r.length&&r[c].valor===r[t].valor;)c+=1;const s=c-t,p=(t+1+c)/2;for(let u=t;u<c;u+=1)r[u].rango=p;s>1&&(n+=s**3-s),t=c}return{observaciones:r,correccionEmpates:n}}function xb(e,a){const r=ga(e,"El grupo 1"),t=ga(a,"El grupo 2"),n=za(r),c=za(t),{observaciones:s,correccionEmpates:p}=hb(r,t),u=s.filter(({grupo:C})=>C===1).reduce((C,$)=>C+$.rango,0),l=s.filter(({grupo:C})=>C===2).reduce((C,$)=>C+$.rango,0),i=n.n,o=c.n,d=i+o,m=u-i*(i+1)/2,f=l-o*(o+1)/2,g=Math.min(m,f),b=i*o/2,x=i*o/12*(d+1-p/(d*(d-1)));if(x<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const y=Math.sqrt(x),v=m-b,h=v===0?0:Math.sign(v)*.5,w=(v-h)/y,k=Xs(2*(1-wr.normal.cdf(Math.abs(w),0,1))),E=2*m/(i*o)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:n,grupo2:c,sumaRangos1:u,sumaRangos2:l,estadistico:{simbolo:"U",valor:g,u1:m,u2:f},estadisticoZ:w,valorP:k,correccionEmpates:p,tamanioEfecto:{deltaCliff:E,correlacionBiserialRangos:E,r:w/Math.sqrt(d)}}}function vb({grupo1:e,grupo2:a,prueba:r,nivelConfianza:t=.95}){switch(r){case"student":return bb(e,a,{nivelConfianza:t});case"welch":return gb(e,a,{nivelConfianza:t});case"mann-whitney":return xb(e,a);default:throw new Error("La prueba solicitada no está disponible.")}}function yb(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de dos grupos independientes
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Introduzca los datos de ambos grupos y ejecute una prueba t de Student, una prueba t de Welch o una prueba U de Mann–Whitney.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>

                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Los datos no salen del navegador
                    </span>

                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Resultados interpretados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-blue-700 text-xs font-black mb-2">
                    Instrucciones
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Cómo introducir los datos
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            1
                        </span>

                        <p>
                            Pegue una columna de Excel en cada grupo o escriba los valores manualmente.
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            2
                        </span>

                        <p>
                            Separe los valores mediante saltos de línea, espacios o punto y coma.
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            3
                        </span>

                        <p>
                            Puede utilizar punto o coma decimal, por ejemplo: 18.5 o 18,5.
                        </p>
                    </div>
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Importante
                    </h3>

                    <p class="text-sm text-amber-900 leading-relaxed">
                        No utilice la coma para separar observaciones. La coma se interpreta como separador decimal.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Diseño admitido
                    </h3>

                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta calculadora corresponde a dos grupos independientes. Para mediciones pareadas o relacionadas se habilitará un módulo específico.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-dos-grupos"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>

                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        >
                            <option value="">
                                Seleccione una prueba
                            </option>

                            <option value="student">
                                t de Student: varianzas iguales
                            </option>

                            <option value="welch">
                                t de Welch: varianzas diferentes
                            </option>

                            <option value="mann-whitney">
                                U de Mann–Whitney
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>

                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        >
                            <option value="0.90">
                                90 %
                            </option>

                            <option value="0.95" selected>
                                95 %
                            </option>

                            <option value="0.99">
                                99 %
                            </option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    <label class="block">
                        <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                            <span>Datos del grupo 1</span>

                            <span
                                id="contador-grupo-1"
                                class="text-xs font-bold text-slate-500"
                            >
                                0 valores
                            </span>
                        </span>

                        <textarea
                            name="grupo1"
                            rows="13"
                            placeholder="18
20
17.5
19
21"
                            class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        ></textarea>
                    </label>

                    <label class="block">
                        <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                            <span>Datos del grupo 2</span>

                            <span
                                id="contador-grupo-2"
                                class="text-xs font-bold text-slate-500"
                            >
                                0 valores
                            </span>
                        </span>

                        <textarea
                            name="grupo2"
                            rows="13"
                            placeholder="15
16.5
17
14
18"
                            class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        ></textarea>
                    </label>
                </div>

                <div
                    id="mensaje-error"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-7 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-blue-300 text-blue-700 font-black rounded-xl px-6 py-4 hover:bg-blue-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-dos-grupos"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-dos-grupos"),r=e.querySelector("#mensaje-error"),t=e.querySelector("#resultados-dos-grupos"),n=["student","welch","mann-whitney"],c=sessionStorage.getItem("kernel-prueba-dos-grupos");n.includes(c)&&(a.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-dos-grupos");const s=a.elements.grupo1,p=a.elements.grupo2,u=e.querySelector("#contador-grupo-1"),l=e.querySelector("#contador-grupo-2"),i=()=>{u.textContent=ao(eo(s.value)),l.textContent=ao(eo(p.value))};return s.addEventListener("input",i),p.addEventListener("input",i),a.addEventListener("submit",o=>{o.preventDefault(),Wr(r);try{const d=a.elements.prueba.value;if(!d)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const m=Zi(s.value,"El grupo 1"),f=Zi(p.value,"El grupo 2"),g=Number(a.elements.nivelConfianza.value),b=vb({grupo1:m,grupo2:f,prueba:d,nivelConfianza:g});t.innerHTML=Eb(b,g),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(d){t.classList.add("hidden"),wb(r,d instanceof Error?d.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",o=>{const d=o.target.closest("[data-action]");if(!d)return;const m=d.dataset.action;if(m==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(m==="cargar-ejemplo"){a.elements.prueba.value||(a.elements.prueba.value="welch"),s.value=`18
20
17.5
19
21
16
22
18.5`,p.value=`14
15
17
13.5
18
16
15.5
14.5`,i(),Wr(r),t.classList.add("hidden");return}m==="limpiar"&&(a.reset(),s.value="",p.value="",i(),Wr(r),t.innerHTML="",t.classList.add("hidden"))}),e}function Zi(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function eo(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function ao(e){return e===1?"1 valor":`${e} valores`}function wb(e,a){e.textContent=a,e.classList.remove("hidden")}function Wr(e){e.textContent="",e.classList.add("hidden")}function H(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function kb(e){return Number.isFinite(e)?e<.001?"< 0.001":H(e,4):"—"}function Eb(e,a=.95){const r=1-a,t=e.valorP<r,n=r.toFixed(2),c=Math.round(a*100),s=t?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %.`;return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>

                <h2 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h2>

                <p class="text-emerald-100 mt-3 font-semibold">
                    ${e.metodo||e.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${At(e.estadistico.simbolo,H(e.estadistico.valor),"Estadístico")}

                    ${At("p",kb(e.valorP),"Valor bilateral")}

                    ${At("n₁",e.grupo1.n,"Grupo 1")}

                    ${At("n₂",e.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${to("Grupo 1",e.grupo1)}

                    ${to("Grupo 2",e.grupo2)}
                </div>

                ${Cb(e)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>

                    <p class="text-slate-700 leading-relaxed">
                        ${s}
                    </p>

                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function At(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${e}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function to(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${W("Media",H(a.media))}

                ${W("Mediana",H(a.mediana))}

                ${W("Desviación estándar",H(a.desviacionEstandar))}

                ${W("Varianza",H(a.varianza))}

                ${W("Mínimo",H(a.minimo))}

                ${W("Máximo",H(a.maximo))}
            </dl>
        </article>
    `}function Cb(e){if(e.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${W("Suma de rangos, grupo 1",H(e.sumaRangos1))}

                    ${W("Suma de rangos, grupo 2",H(e.sumaRangos2))}

                    ${W("U₁",H(e.estadistico.u1))}

                    ${W("U₂",H(e.estadistico.u2))}

                    ${W("z",H(e.estadisticoZ))}

                    ${W("Delta de Cliff",H(e.tamanioEfecto.deltaCliff))}

                    ${W("Correlación r",H(e.tamanioEfecto.r))}
                </dl>
            </article>
        `;const a=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${W("Diferencia de medias",H(e.diferenciaMedias))}

                ${W("Error estándar",H(e.errorEstandar))}

                ${W("Grados de libertad",H(e.gradosLibertad))}

                ${W(`IC ${a.nivel*100} %: límite inferior`,H(a.inferior))}

                ${W(`IC ${a.nivel*100} %: límite superior`,H(a.superior))}

                ${W("d de Cohen",H(e.tamanioEfecto.dCohen))}

                ${W("g de Hedges",H(e.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function W(e,a){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${a}
            </dd>
        </div>
    `}const kr=va.jStat??Ua?.jStat;if(!kr)throw new Error("No fue posible cargar el motor estadístico jStat.");function Vn(e){return Math.min(1,Math.max(0,e))}function tl(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function $b(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function ro(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe ser un arreglo de valores.`);const r=e.map($b),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${a} debe contener al menos dos observaciones.`);return r}function rl(e,a){const r=ro(e,"La medición 1"),t=ro(a,"La medición 2");if(r.length!==t.length)throw new RangeError("Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares.");return{medicion1:r,medicion2:t}}function wn(e){return e.reduce((a,r)=>a+r,0)/e.length}function Ab(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2!==0?a[r]:(a[r-1]+a[r])/2}function Ib(e,a){return e.length<2?0:e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function Ma(e){const a=wn(e),r=Ib(e,a);return{n:e.length,media:a,mediana:Ab(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function no(e,a){const r=wn(e),t=wn(a);let n=0,c=0,s=0;for(let u=0;u<e.length;u+=1){const l=e[u]-r,i=a[u]-t;n+=l*i,c+=l**2,s+=i**2}const p=Math.sqrt(c*s);return p===0?Number.NaN:n/p}function Pb(e,a){return Vn(2*(1-kr.studentt.cdf(Math.abs(e),a)))}function Lb(e,a,r,t){tl(t);const n=1-t,c=kr.studentt.inv(1-n/2,r),s=c*a;return{nivel:t,valorCritico:c,margen:s,inferior:e-s,superior:e+s}}function nl(e,a){return e.map((r,t)=>r-a[t])}function il(e,a,r={}){const{nivelConfianza:t=.95}=r;tl(t);const n=rl(e,a),c=nl(n.medicion1,n.medicion2),s=Ma(n.medicion1),p=Ma(n.medicion2),u=Ma(c),l=c.length,i=l-1,o=u.desviacionEstandar/Math.sqrt(l);if(o===0){if(u.media===0)return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Todas las diferencias pareadas son iguales a cero",medicion1:s,medicion2:p,diferencias:{...u,valores:c},nParejas:l,diferenciaMedia:0,errorEstandar:0,estadistico:{simbolo:"t",valor:0},gradosLibertad:i,valorP:1,intervaloConfianza:{nivel:t,valorCritico:Number.NaN,margen:0,inferior:0,superior:0},tamanioEfecto:{dZ:0,gZ:0,correlacionPareada:no(n.medicion1,n.medicion2)}};throw new Error("Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t.")}const d=u.media/o,m=Pb(d,i),f=u.media/u.desviacionEstandar,g=i>1?1-3/(4*i-1):1;return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Prueba bilateral aplicada a la media de las diferencias pareadas",medicion1:s,medicion2:p,diferencias:{...u,valores:c},nParejas:l,diferenciaMedia:u.media,errorEstandar:o,estadistico:{simbolo:"t",valor:d},gradosLibertad:i,valorP:m,intervaloConfianza:Lb(u.media,o,i,t),tamanioEfecto:{dZ:f,gZ:g*f,correccionHedges:g,correlacionPareada:no(n.medicion1,n.medicion2)}}}function Rb(e){const a=e.map((c,s)=>({indice:s,diferencia:c,absoluto:Math.abs(c),signo:Math.sign(c),rango:0})).sort((c,s)=>c.absoluto-s.absoluto);let r=0,t=0,n=0;for(;r<a.length;){let c=r+1;for(;c<a.length&&a[c].absoluto===a[r].absoluto;)c+=1;const s=c-r,p=(r+1+c)/2;for(let u=r;u<c;u+=1)a[u].rango=p;s>1&&(n+=1,t+=s**3-s),r=c}return{observaciones:a,correccionEmpates:t,cantidadGruposEmpatados:n}}function Mb(e,a){const r=e*(e+1)/2,t=new Array(r+1).fill(0);t[0]=1;let n=0;for(let u=1;u<=e;u+=1){for(let l=n;l>=0;l-=1)t[l]>0&&(t[l+u]+=t[l]);n+=u}const c=Math.floor(a+1e-12),s=t.slice(0,c+1).reduce((u,l)=>u+l,0),p=2**e;return Vn(2*s/p)}function ol(e,a){const r=rl(e,a),t=nl(r.medicion1,r.medicion2),n=Ma(r.medicion1),c=Ma(r.medicion2),s=t.filter($=>$!==0),p=t.length-s.length;if(s.length===0)return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:"Todas las diferencias pareadas son iguales a cero",medicion1:n,medicion2:c,diferencias:{n:t.length,media:0,mediana:0,varianza:0,desviacionEstandar:0,minimo:0,maximo:0,valores:t},nParejas:t.length,nEfectivo:0,cantidadCeros:p,sumaRangosPositivos:0,sumaRangosNegativos:0,estadistico:{simbolo:"W",valor:0,wPositivo:0,wNegativo:0},estadisticoZ:0,valorP:1,correccionEmpates:0,cantidadGruposEmpatados:0,tamanioEfecto:{correlacionBiserialRangos:0,r:0}};const{observaciones:u,correccionEmpates:l,cantidadGruposEmpatados:i}=Rb(s),o=u.filter(({signo:$})=>$>0).reduce(($,I)=>$+I.rango,0),d=u.filter(({signo:$})=>$<0).reduce(($,I)=>$+I.rango,0),m=s.length,f=m*(m+1)/2,g=Math.min(o,d),b=m*(m+1)/4,x=m*(m+1)*(2*m+1)/24-l/48;if(x<=0)throw new Error("No fue posible calcular la varianza del estadístico de Wilcoxon.");const y=Math.sqrt(x),v=o-b,h=v===0?0:Math.sign(v)*.5,w=(v-h)/y,k=l===0&&m<=25,E=k?Mb(m,g):Vn(2*(1-kr.normal.cdf(Math.abs(w),0,1))),C=(o-d)/f;return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:k?"Valor p bilateral exacto; las diferencias iguales a cero se excluyen":"Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",medicion1:n,medicion2:c,diferencias:{...Ma(t),valores:t},nParejas:t.length,nEfectivo:m,cantidadCeros:p,sumaRangosPositivos:o,sumaRangosNegativos:d,estadistico:{simbolo:"W",valor:g,wPositivo:o,wNegativo:d},estadisticoZ:w,valorP:E,correccionEmpates:l,cantidadGruposEmpatados:i,tamanioEfecto:{correlacionBiserialRangos:C,r:w/Math.sqrt(m)}}}function Tb({medicion1:e,medicion2:a,prueba:r,nivelConfianza:t=.95}){switch(r){case"student-pareada":return il(e,a,{nivelConfianza:t});case"wilcoxon":return ol(e,a);default:throw new Error("La prueba solicitada no está disponible.")}}function Nb(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de dos mediciones relacionadas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice datos antes-después, mediciones repetidas o pares emparejados mediante la t de Student para muestras relacionadas o la prueba de rangos con signo de Wilcoxon.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia por filas
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Resultados interpretados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Instrucciones
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Cómo organizar las parejas
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Kr(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${Kr(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${Kr(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Convención de la diferencia
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Se calcula diferencia = medición 1 − medición 2. Un valor positivo indica que la primera medición es mayor.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Diseño admitido
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta calculadora corresponde a dos mediciones relacionadas. No debe utilizarse para grupos independientes sin emparejamiento.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-muestras-relacionadas"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="student-pareada">
                                t de Student para muestras relacionadas
                            </option>
                            <option value="wilcoxon">
                                Rangos con signo de Wilcoxon
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${io("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${io("medicion2","Medición 2","contador-medicion-2",`16
18.5
16
17
19`)}
                </div>

                <div
                    id="mensaje-error-relacionadas"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>
                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-muestras-relacionadas"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-muestras-relacionadas"),r=e.querySelector("#mensaje-error-relacionadas"),t=e.querySelector("#resultados-muestras-relacionadas"),n=a.elements.medicion1,c=a.elements.medicion2,s=e.querySelector("#contador-medicion-1"),p=e.querySelector("#contador-medicion-2"),u=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(u)&&(a.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const l=()=>{s.textContent=lo(so(n.value)),p.textContent=lo(so(c.value))};return n.addEventListener("input",l),c.addEventListener("input",l),a.addEventListener("submit",i=>{i.preventDefault(),Yr(r);try{const o=a.elements.prueba.value;if(!o)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const d=oo(n.value,"La medición 1"),m=oo(c.value,"La medición 2"),f=Number(a.elements.nivelConfianza.value),g=Tb({medicion1:d,medicion2:m,prueba:o,nivelConfianza:f});t.innerHTML=_b(g,f),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){t.classList.add("hidden"),Sb(r,o instanceof Error?o.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",i=>{const o=i.target.closest("[data-action]");if(!o)return;const d=o.dataset.action;if(d==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(d==="cargar-ejemplo"){a.elements.prueba.value||(a.elements.prueba.value="student-pareada"),n.value=`18
20
17.5
19
21
16
22
18.5`,c.value=`16
18.5
16
17
19
15
20
17`,l(),Yr(r),t.classList.add("hidden");return}d==="limpiar"&&(a.reset(),n.value="",c.value="",l(),Yr(r),t.innerHTML="",t.classList.add("hidden"))}),e}function Kr(e,a){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${e}
            </span>
            <p>${a}</p>
        </div>
    `}function io(e,a,r,t){return`
        <label class="block">
            <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                <span>${a}</span>
                <span
                    id="${r}"
                    class="text-xs font-bold text-slate-500"
                >
                    0 valores
                </span>
            </span>
            <textarea
                name="${e}"
                rows="13"
                placeholder="${t}"
                class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
            ></textarea>
        </label>
    `}function oo(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function so(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function lo(e){return e===1?"1 valor":`${e} valores`}function Sb(e,a){e.textContent=a,e.classList.remove("hidden")}function Yr(e){e.textContent="",e.classList.add("hidden")}function U(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function zb(e){return Number.isFinite(e)?e<.001?"< 0.001":U(e,4):"—"}function _b(e,a=.95){const r=1-a,t=e.valorP<r,n=r.toFixed(2),c=Math.round(a*100),s=e.id==="t-student-relacionadas"?e.diferenciaMedia:e.diferencias.mediana,p=Db(s),u=t?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %. ${p}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %. ${p}`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${e.metodo||e.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${It(e.estadistico.simbolo,U(e.estadistico.valor),"Estadístico")}
                    ${It("p",zb(e.valorP),"Valor bilateral")}
                    ${It("n",e.nParejas,"Parejas originales")}
                    ${It("Δ",U(s),e.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${co("Medición 1",e.medicion1)}
                    ${co("Medición 2",e.medicion2)}
                </div>

                ${qb(e.diferencias)}
                ${Ob(e)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${u}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La diferencia se calculó como medición 1 − medición 2. La significación estadística debe interpretarse junto con el intervalo de confianza, el tamaño del efecto, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function Db(e){return Number.isFinite(e)?e>0?"La dirección estimada favorece valores mayores en la medición 1.":e<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function It(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function co(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${F("Media",U(a.media))}
                ${F("Mediana",U(a.mediana))}
                ${F("Desviación estándar",U(a.desviacionEstandar))}
                ${F("Varianza",U(a.varianza))}
                ${F("Mínimo",U(a.minimo))}
                ${F("Máximo",U(a.maximo))}
            </dl>
        </article>
    `}function qb(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${F("Media",U(e.media))}
                ${F("Mediana",U(e.mediana))}
                ${F("Desviación estándar",U(e.desviacionEstandar))}
                ${F("Varianza",U(e.varianza))}
                ${F("Mínimo",U(e.minimo))}
                ${F("Máximo",U(e.maximo))}
            </dl>
        </article>
    `}function Ob(e){if(e.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${F("Rangos positivos, W+",U(e.sumaRangosPositivos))}
                    ${F("Rangos negativos, W−",U(e.sumaRangosNegativos))}
                    ${F("Parejas no nulas",e.nEfectivo)}
                    ${F("Diferencias iguales a cero",e.cantidadCeros)}
                    ${F("z aproximado",U(e.estadisticoZ))}
                    ${F("Correlación biserial de rangos",U(e.tamanioEfecto.correlacionBiserialRangos))}
                    ${F("Correlación r",U(e.tamanioEfecto.r))}
                    ${F("Grupos de empates",e.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const a=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${F("Diferencia media",U(e.diferenciaMedia))}
                ${F("Error estándar",U(e.errorEstandar))}
                ${F("Grados de libertad",U(e.gradosLibertad))}
                ${F(`IC ${a.nivel*100} %: límite inferior`,U(a.inferior))}
                ${F(`IC ${a.nivel*100} %: límite superior`,U(a.superior))}
                ${F("d_z de Cohen",U(e.tamanioEfecto.dZ))}
                ${F("g_z corregida",U(e.tamanioEfecto.gZ))}
                ${F("Correlación entre mediciones",U(e.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function F(e,a){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${a}
            </dd>
        </div>
    `}const na=va.jStat??Ua?.jStat;if(!na)throw new Error("No fue posible cargar el motor estadístico jStat.");const Er=e=>Math.min(1,Math.max(0,e));function Bn(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Fb(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}const sl=e=>e.reduce((a,r)=>a+r,0)/e.length;function Ub(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function jb(e,a=sl(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function Vb(e){const a=sl(e),r=jb(e,a);return{n:e.length,media:a,mediana:Ub(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Bb(e,a){const r=Array.isArray(e),t=r?e:e?.valores;if(!Array.isArray(t))throw new TypeError(`El grupo ${a+1} debe contener un arreglo llamado valores.`);const n=t.map(Fb),c=n.findIndex(p=>!Number.isFinite(p));if(c!==-1)throw new TypeError(`El grupo ${a+1} contiene un valor no numérico en la posición ${c+1}.`);if(n.length<2)throw new RangeError(`El grupo ${a+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Grupo ${a+1}`,valores:n,...Vb(n)}}function Gn(e){if(!Array.isArray(e))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const a=e.map(Bb),r=a.map(({nombre:t})=>t);if(new Set(r).size!==r.length)throw new Error("Cada grupo debe tener un nombre diferente.");return a}function Hn(e){const a=e.reduce((t,n)=>t+n.n,0),r=e.reduce((t,n)=>t+n.valores.reduce((c,s)=>c+s,0),0);return{numeroGrupos:e.length,nTotal:a,mediaGeneral:r/a}}function ll(e,a,r){return e===1/0?0:Er(1-na.centralF.cdf(e,a,r))}function Gb(e,a){return Er(1-na.chisquare.cdf(e,a))}function cl(){if(!na.tukey?.cdf||!na.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function dl(e,a,r){return cl(),e===1/0?0:Er(1-na.tukey.cdf(e,a,r))}function ul(e,a,r){return cl(),na.tukey.inv(e,a,r)}function Wn(e){const a=Math.abs(e);return a<.01?"Prácticamente nulo":a<.06?"Pequeño":a<.14?"Moderado":"Grande"}function Kn(e,a){const r=[];for(let t=0;t<e.length-1;t+=1)for(let n=t+1;n<e.length;n+=1)r.push(a(e[t],e[n],t,n));return r}function Hb(e,a,r,t){const n=1-t,c=e.length,s=ul(t,c,r);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:Kn(e,(p,u)=>{const l=p.media-u.media,i=Math.sqrt(a/2*(1/p.n+1/u.n)),o=i===0?l===0?0:1/0:Math.abs(l)/i,d=dl(o,c,r),m=s*i;return{grupo1:p.nombre,grupo2:u.nombre,diferenciaMedias:l,errorEstandar:i,estadisticoQ:o,gradosLibertad:r,valorP:d,valorPAjustado:d,intervaloConfianza:{nivel:t,inferior:l-m,superior:l+m,margen:m},significativo:d<n}})}}function Wb(e,a){const r=1-a,t=e.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:Kn(e,(n,c)=>{const s=n.media-c.media,p=n.varianza/n.n,u=c.varianza/c.n,l=p+u,i=Math.sqrt(l/2),o=l**2/(p**2/(n.n-1)+u**2/(c.n-1)),d=i===0?s===0?0:1/0:Math.abs(s)/i,m=dl(d,t,o),f=ul(a,t,o)*i;return{grupo1:n.nombre,grupo2:c.nombre,diferenciaMedias:s,errorEstandar:i,estadisticoQ:d,gradosLibertad:o,valorP:m,valorPAjustado:m,intervaloConfianza:{nivel:a,inferior:s-f,superior:s+f,margen:f},significativo:m<r}})}}function Kb(e){const a=e.map(c=>({...c,rango:0})).sort((c,s)=>c.valor-s.valor);let r=0,t=0,n=0;for(;r<a.length;){let c=r+1;for(;c<a.length&&a[c].valor===a[r].valor;)c+=1;const s=c-r,p=(r+1+c)/2;for(let u=r;u<c;u+=1)a[u].rango=p;s>1&&(n+=1,t+=s**3-s),r=c}return{observaciones:a,sumaCorreccionEmpates:t,cantidadGruposEmpatados:n}}function Yb(e){const a=e.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return a.forEach((t,n)=>{const c=Math.min(1,t.valorP*(a.length-n));t.valorPAjustado=Math.max(r,c),r=t.valorPAjustado}),a.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function Jb(e,a,r,t,n){const c=1-n,s=r*(r+1)/12-t/(12*(r-1)),p=Kn(e,(u,l,i,o)=>{const d=a[i]/u.n,m=a[o]/l.n,f=d-m,g=Math.sqrt(s*(1/u.n+1/l.n)),b=g===0?0:f/g,x=Er(2*(1-na.normal.cdf(Math.abs(b),0,1)));return{grupo1:u.nombre,grupo2:l.nombre,rangoMedio1:d,rangoMedio2:m,diferenciaRangos:f,errorEstandar:g,estadisticoZ:b,valorP:x,tamanioEfectoR:b/Math.sqrt(r)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:Yb(p).map(u=>({...u,significativo:u.valorPAjustado<c}))}}function Qb(e,a={}){const{nivelConfianza:r=.95}=a;Bn(r);const t=Gn(e),n=Hn(t),c=t.reduce((h,w)=>h+w.n*(w.media-n.mediaGeneral)**2,0),s=t.reduce((h,w)=>h+w.valores.reduce((k,E)=>k+(E-w.media)**2,0),0),p=c+s,u=t.length-1,l=n.nTotal-t.length,i=c/u,o=s/l,d=o===0?i===0?0:1/0:i/o,m=ll(d,u,l),f=p===0?0:c/p,g=p+o===0?0:(c-u*o)/(p+o),b=Math.max(0,g),x=1-r,y=m<x,v=Hb(t,o,l,r);return v.recomendado=y,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:t,...n,estadistico:{simbolo:"F",valor:d},gradosLibertad:{numerador:u,denominador:l},valorP:m,nivelConfianza:r,alfa:x,significativo:y,tablaAnova:{entreGrupos:{sumaCuadrados:c,gradosLibertad:u,cuadradoMedio:i},dentroGrupos:{sumaCuadrados:s,gradosLibertad:l,cuadradoMedio:o},total:{sumaCuadrados:p,gradosLibertad:n.nTotal-1}},tamanioEfecto:{etaCuadrado:f,omegaCuadrado:b,interpretacion:Wn(b)},postHoc:v}}function Xb(e,a={}){const{nivelConfianza:r=.95}=a;Bn(r);const t=Gn(e),n=Hn(t),c=t.find(({varianza:w})=>w<=0);if(c)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${c.nombre}.`);const s=t.map(w=>({...w,peso:w.n/w.varianza})),p=s.reduce((w,k)=>w+k.peso,0),u=s.reduce((w,k)=>w+k.peso*k.media,0)/p,l=t.length,i=l-1,o=s.reduce((w,k)=>w+k.peso*(k.media-u)**2,0)/i,d=s.reduce((w,k)=>w+(1-k.peso/p)**2/(k.n-1),0),m=1+2*(l-2)/(l**2-1)*d,f=o/m,g=(l**2-1)/(3*d),b=ll(f,i,g),x=Math.max(0,i*(f-1)/(i*f+g+1)),y=1-r,v=b<y,h=Wb(t,r);return h.recomendado=v,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:t,...n,mediaPonderada:u,sumaPesos:p,estadistico:{simbolo:"F_W",valor:f},gradosLibertad:{numerador:i,denominador:g},valorP:b,nivelConfianza:r,alfa:y,significativo:v,componentesWelch:{numeradorBase:o,terminoCorreccion:d,denominadorCorreccion:m},tamanioEfecto:{omegaCuadradoAproximado:x,interpretacion:Wn(x),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:h}}function Zb(e,a={}){const{nivelConfianza:r=.95}=a;Bn(r);const t=Gn(e),n=Hn(t),c=t.flatMap((y,v)=>y.valores.map(h=>({valor:h,indiceGrupo:v}))),s=Kb(c),p=new Array(t.length).fill(0);s.observaciones.forEach(({indiceGrupo:y,rango:v})=>{p[y]+=v});const u=12/(n.nTotal*(n.nTotal+1))*t.reduce((y,v,h)=>y+p[h]**2/v.n,0)-3*(n.nTotal+1),l=1-s.sumaCorreccionEmpates/(n.nTotal**3-n.nTotal),i=l<=0?0:u/l,o=t.length-1,d=Gb(i,o),m=Math.max(0,(i-t.length+1)/(n.nTotal-t.length)),f=1-r,g=d<f,b=t.map((y,v)=>({...y,sumaRangos:p[v],rangoMedio:p[v]/y.n})),x=Jb(t,p,n.nTotal,s.sumaCorreccionEmpates,r);return x.recomendado=g,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:b,...n,estadistico:{simbolo:"H",valor:i,sinCorreccion:u},gradosLibertad:{valor:o},valorP:d,nivelConfianza:r,alfa:f,significativo:g,empates:{factorCorreccion:l,sumaCorreccion:s.sumaCorreccionEmpates,cantidadGruposEmpatados:s.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:m,interpretacion:Wn(m)},postHoc:x}}function eg({grupos:e,prueba:a,nivelConfianza:r=.95}){switch(a){case"anova-un-factor":case"anova":return Qb(e,{nivelConfianza:r});case"anova-welch":case"welch":return Xb(e,{nivelConfianza:r});case"kruskal-wallis":return Zb(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function ag(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-indigo-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-indigo-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Tres o más grupos independientes
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Compare tres o más grupos mediante ANOVA de un factor, ANOVA de Welch o Kruskal–Wallis, con descriptivos, tamaños del efecto y comparaciones post hoc.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Grupos independientes
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Post hoc integrado
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Jr("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${Jr("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${Jr("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Diseño admitido
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Cada observación debe pertenecer a un solo grupo. Para mediciones repetidas sobre las mismas personas debe utilizarse otro módulo.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Entrada de datos
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Escriba o pegue los valores separados por espacios, saltos de línea o punto y coma. La coma decimal también es admitida.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-tres-grupos"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="anova-un-factor">ANOVA de un factor</option>
                            <option value="anova-welch">ANOVA de Welch</option>
                            <option value="kruskal-wallis">Kruskal–Wallis</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-1">
                            Datos por grupo
                        </p>
                        <h2 class="text-2xl font-black text-slate-900">
                            Introduzca al menos tres grupos
                        </h2>
                    </div>

                    <button
                        type="button"
                        data-action="agregar-grupo"
                        class="inline-flex items-center justify-center rounded-xl border border-indigo-300 text-indigo-700 font-black px-5 py-3 hover:bg-indigo-50 transition-colors"
                    >
                        + Agregar grupo
                    </button>
                </div>

                <div
                    id="contenedor-grupos"
                    class="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    ${Ce(1)}
                    ${Ce(2)}
                    ${Ce(3)}
                </div>

                <div
                    id="mensaje-error-tres-grupos"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-tres-grupos"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-tres-grupos"),r=e.querySelector("#contenedor-grupos"),t=e.querySelector("#mensaje-error-tres-grupos"),n=e.querySelector("#resultados-tres-grupos");let c=4;const s=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(s)&&(a.elements.prueba.value=s),sessionStorage.removeItem("kernel-prueba-tres-grupos"),a.addEventListener("submit",p=>{p.preventDefault(),Ga(t);try{const u=a.elements.prueba.value;if(!u)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=tg(r),i=Number(a.elements.nivelConfianza.value),o=eg({grupos:l,prueba:u,nivelConfianza:i});n.innerHTML=og(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(u){n.classList.add("hidden"),uo(t,u instanceof Error?u.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("input",p=>{p.target.matches("textarea[data-valores-grupo]")&&pl(p.target.closest("[data-grupo]"))}),e.addEventListener("click",p=>{const u=p.target.closest("[data-action]");if(!u)return;const l=u.dataset.action;if(l==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(l==="agregar-grupo"){r.insertAdjacentHTML("beforeend",Ce(c)),c+=1,Ga(t);return}if(l==="eliminar-grupo"){if(r.querySelectorAll("[data-grupo]").length<=3){uo(t,"El análisis requiere al menos tres grupos.");return}u.closest("[data-grupo]")?.remove(),n.classList.add("hidden"),Ga(t);return}if(l==="cargar-ejemplo"){ig(a,r),c=4,Ga(t),n.classList.add("hidden");return}l==="limpiar"&&(a.reset(),r.innerHTML=`
                ${Ce(1)}
                ${Ce(2)}
                ${Ce(3)}
            `,c=4,n.innerHTML="",n.classList.add("hidden"),Ga(t))}),e}function Jr(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm leading-relaxed">
                ${a}
            </p>
        </article>
    `}function Ce(e){return`
        <article
            data-grupo
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <label class="min-w-0 flex-1">
                    <span class="block text-xs uppercase tracking-widest font-black text-indigo-700 mb-2">
                        Nombre del grupo
                    </span>
                    <input
                        type="text"
                        data-nombre-grupo
                        value="Grupo ${e}"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                    >
                </label>

                <button
                    type="button"
                    data-action="eliminar-grupo"
                    class="shrink-0 mt-6 rounded-xl border border-red-200 bg-white text-red-700 font-black px-4 py-3 hover:bg-red-50 transition-colors"
                    aria-label="Eliminar grupo"
                    title="Eliminar grupo"
                >
                    ×
                </button>
            </div>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                    <span>Valores</span>
                    <span
                        data-contador-grupo
                        class="text-xs font-bold text-slate-500"
                    >
                        0 valores
                    </span>
                </span>
                <textarea
                    data-valores-grupo
                    rows="9"
                    placeholder="72
75
78
74"
                    class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                ></textarea>
            </label>
        </article>
    `}function tg(e){return[...e.querySelectorAll("[data-grupo]")].map((a,r)=>{const t=a.querySelector("[data-nombre-grupo]").value.trim();if(!t)throw new Error(`El grupo ${r+1} debe tener un nombre.`);const n=a.querySelector("[data-valores-grupo]").value;return{nombre:t,valores:rg(n,t)}})}function rg(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function ng(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function pl(e){if(!e)return;const a=e.querySelector("[data-valores-grupo]"),r=e.querySelector("[data-contador-grupo]"),t=ng(a.value);r.textContent=t===1?"1 valor":`${t} valores`}function ig(e,a){a.innerHTML=`
        ${Ce(1)}
        ${Ce(2)}
        ${Ce(3)}
    `;const r=[{nombre:"Método tradicional",valores:`72
75
78
74
76
73
77
75`},{nombre:"Aprendizaje colaborativo",valores:`80
82
79
84
81
83
78
82`},{nombre:"Aula invertida",valores:`88
85
90
87
89
86
91
88`}];[...a.querySelectorAll("[data-grupo]")].forEach((t,n)=>{t.querySelector("[data-nombre-grupo]").value=r[n].nombre,t.querySelector("[data-valores-grupo]").value=r[n].valores,pl(t)}),e.elements.prueba.value||(e.elements.prueba.value="anova-un-factor")}function uo(e,a){e.textContent=a,e.classList.remove("hidden")}function Ga(e){e.textContent="",e.classList.add("hidden")}function Me(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function B(e,a=4){return e===1/0?"∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function ml(e){return Number.isFinite(e)?e<.001?"< 0.001":B(e,4):"—"}function og(e){const a=e.alfa.toFixed(2),r=Math.round(e.nivelConfianza*100),t=e.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${a}, correspondiente a un nivel de confianza del ${r} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${a}, correspondiente a un nivel de confianza del ${r} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${Me(e.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${Me(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Pt(e.estadistico.simbolo,B(e.estadistico.valor),"Estadístico global")}
                    ${Pt("p",ml(e.valorP),"Valor de significación")}
                    ${Pt("k",e.numeroGrupos,"Número de grupos")}
                    ${Pt("N",e.nTotal,"Tamaño total")}
                </div>

                ${sg(e)}
                ${lg(e)}
                ${cg(e)}
                ${dg(e)}

                <article class="mt-6 rounded-2xl border ${e.significativo?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La prueba global indica si existe al menos una diferencia, pero no identifica por sí sola cuáles grupos difieren. Las comparaciones post hoc deben interpretarse junto con sus valores p ajustados, intervalos de confianza, tamaños del efecto y relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function Pt(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${Me(e)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function sg(e){const a=e.id==="kruskal-wallis";return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div class="px-6 py-5 border-b border-slate-200">
                <h3 class="text-xl font-black text-slate-900">
                    Estadísticos descriptivos por grupo
                </h3>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full min-w-[850px] text-sm">
                    <thead class="bg-slate-50 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-4 font-black">Grupo</th>
                            <th class="text-right px-4 py-4 font-black">n</th>
                            <th class="text-right px-4 py-4 font-black">Media</th>
                            <th class="text-right px-4 py-4 font-black">Mediana</th>
                            <th class="text-right px-4 py-4 font-black">DE</th>
                            <th class="text-right px-4 py-4 font-black">Varianza</th>
                            <th class="text-right px-4 py-4 font-black">Mín.</th>
                            <th class="text-right px-4 py-4 font-black">Máx.</th>
                            ${a?'<th class="text-right px-4 py-4 font-black">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${e.grupos.map(r=>`
                                    <tr>
                                        <td class="px-5 py-4 font-bold text-slate-900">
                                            ${Me(r.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${r.n}</td>
                                        <td class="px-4 py-4 text-right">${B(r.media)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.maximo)}</td>
                                        ${a?`<td class="px-4 py-4 text-right">${B(r.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function lg(e){if(e.id==="anova-un-factor"){const a=e.tablaAnova;return`
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 overflow-hidden">
                <div class="px-6 py-5 border-b border-blue-200">
                    <h3 class="text-xl font-black text-blue-950">
                        Tabla ANOVA
                    </h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[650px] text-sm">
                        <thead>
                            <tr>
                                <th class="text-left px-5 py-4 font-black">Fuente</th>
                                <th class="text-right px-4 py-4 font-black">SC</th>
                                <th class="text-right px-4 py-4 font-black">gl</th>
                                <th class="text-right px-4 py-4 font-black">CM</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-blue-100">
                            ${Qr("Entre grupos",a.entreGrupos)}
                            ${Qr("Dentro de grupos",a.dentroGrupos)}
                            ${Qr("Total",a.total)}
                        </tbody>
                    </table>
                </div>
            </article>
        `}return e.id==="anova-welch"?`
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Ajuste de Welch
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${Ee("gl del numerador",B(e.gradosLibertad.numerador))}
                    ${Ee("gl del denominador",B(e.gradosLibertad.denominador))}
                    ${Ee("Media ponderada",B(e.mediaPonderada))}
                    ${Ee("Factor de corrección",B(e.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${Ee("Grados de libertad",B(e.gradosLibertad.valor))}
                ${Ee("H sin corrección",B(e.estadistico.sinCorreccion))}
                ${Ee("Factor por empates",B(e.empates.factorCorreccion))}
                ${Ee("Grupos de valores empatados",e.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function Qr(e,a){return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${e}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(a.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(a.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(a.cuadradoMedio)}
            </td>
        </tr>
    `}function cg(e){let a;return e.id==="anova-un-factor"?a=[["Eta cuadrado, η²",e.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",e.tamanioEfecto.omegaCuadrado]]:e.id==="anova-welch"?a=[["Omega cuadrado aproximado",e.tamanioEfecto.omegaCuadradoAproximado]]:a=[["Épsilon cuadrado, ε²",e.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${a.map(([r,t])=>Ee(r,B(t))).join("")}
                ${Ee("Magnitud orientativa",Me(e.tamanioEfecto.interpretacion))}
            </dl>
            ${e.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${Me(e.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function dg(e){const a=e.postHoc;return a?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${Me(a.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${Me(a.metodo)}
                </p>
                <p class="text-sm font-bold mt-3 ${a.recomendado?"text-emerald-800":"text-slate-600"}">
                    ${a.recomendado?"La prueba global fue significativa; estas comparaciones ayudan a localizar las diferencias.":"La prueba global no fue significativa; las comparaciones se muestran con fines descriptivos y deben interpretarse con cautela."}
                </p>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr>
                            <th class="text-left px-5 py-4 font-black">Comparación</th>
                            <th class="text-right px-4 py-4 font-black">Diferencia</th>
                            <th class="text-right px-4 py-4 font-black">Estadístico</th>
                            <th class="text-right px-4 py-4 font-black">gl</th>
                            <th class="text-right px-4 py-4 font-black">p ajustado</th>
                            <th class="text-left px-4 py-4 font-black">IC</th>
                            <th class="text-center px-4 py-4 font-black">Resultado</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-fuchsia-100">
                        ${a.comparaciones.map(ug).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function ug(e){const a=e.diferenciaMedias??e.diferenciaRangos,r=e.estadisticoQ??e.estadisticoZ,t=e.valorPAjustado??e.valorP,n=e.intervaloConfianza?`${B(e.intervaloConfianza.inferior)} a ${B(e.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${Me(e.grupo1)} vs. ${Me(e.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(a)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(r)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(e.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${ml(t)}
            </td>
            <td class="px-4 py-4">
                ${n}
            </td>
            <td class="px-4 py-4 text-center">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${e.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-200 text-slate-700"}">
                    ${e.significativo?"Significativa":"No significativa"}
                </span>
            </td>
        </tr>
    `}function Ee(e,a){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${a}
            </dd>
        </div>
    `}const Yn=va.jStat??Ua?.jStat;if(!Yn)throw new Error("No fue posible cargar el motor estadístico jStat.");const fl=e=>Math.min(1,Math.max(0,e));function bl(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function pg(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}function ct(e){return e.reduce((a,r)=>a+r,0)/e.length}function mg(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function fg(e,a=ct(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function bg(e){const a=ct(e),r=fg(e,a);return{n:e.length,media:a,mediana:mg(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function gg(e,a){const r=Array.isArray(e),t=r?e:e?.valores;if(!Array.isArray(t))throw new TypeError(`La medición ${a+1} debe contener un arreglo llamado valores.`);const n=t.map(pg),c=n.findIndex(p=>!Number.isFinite(p));if(c!==-1)throw new TypeError(`La medición ${a+1} contiene un valor no numérico en la posición ${c+1}.`);if(n.length<2)throw new RangeError(`La medición ${a+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Medición ${a+1}`,valores:n,...bg(n)}}function gl(e){if(!Array.isArray(e))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const a=e.map(gg),r=a[0].n;if(a.find(({n:c})=>c!==r))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const n=a.map(({nombre:c})=>c);if(new Set(n).size!==n.length)throw new Error("Cada medición debe tener un nombre diferente.");return a}function hl(e){const a=e[0].n;return Array.from({length:a},(r,t)=>e.map(({valores:n})=>n[t]))}function Xr(e,a,r){return e===1/0?0:fl(1-Yn.centralF.cdf(e,a,r))}function hg(e,a){return fl(1-Yn.chisquare.cdf(e,a))}function xl(e){const a=e.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return a.forEach((t,n)=>{const c=Math.min(1,t.valorP*(a.length-n));t.valorPAjustado=Math.max(r,c),r=t.valorPAjustado}),a.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function vl(e,a){const r=[];for(let t=0;t<e.length-1;t+=1)for(let n=t+1;n<e.length;n+=1)r.push(a(e[t],e[n],t,n));return r}function Zr(e,a){const r=e.length,t=a[0].length,n=a.length;return Array.from({length:r},(c,s)=>Array.from({length:t},(p,u)=>{let l=0;for(let i=0;i<n;i+=1)l+=e[s][i]*a[i][u];return l}))}function po(e){return e.reduce((a,r,t)=>a+r[t],0)}function xg(e){const a=e.length,r=e[0].length,t=Array.from({length:r},(n,c)=>ct(e.map(s=>s[c])));return Array.from({length:r},(n,c)=>Array.from({length:r},(s,p)=>{let u=0;for(let l=0;l<a;l+=1)u+=(e[l][c]-t[c])*(e[l][p]-t[p]);return u/(a-1)}))}function vg(e){const a=e.length,r=e[0].length,t=xg(e),n=Array.from({length:r},(f,g)=>Array.from({length:r},(b,x)=>(g===x?1:0)-1/r)),c=Zr(Zr(n,t),n),s=po(c),p=Zr(c,c),u=po(p),l=1/(r-1);let i=u===0?1:s**2/((r-1)*u);i=Math.min(1,Math.max(l,i));const o=a*(r-1)*i-2,d=(r-1)*(a-1-(r-1)*i);let m=d<=0?1:o/d;return m=Math.min(1,Math.max(l,m)),{limiteInferior:l,greenhouseGeisser:i,huynhFeldt:m,covarianzas:t}}function yg(e){const a=Math.abs(e);return a<.01?"Prácticamente nulo":a<.06?"Pequeño":a<.14?"Moderado":"Grande"}function wg(e){const a=Math.abs(e);return a<.1?"Muy pequeño":a<.3?"Pequeño":a<.5?"Moderado":"Grande"}function kg(e,a){const r=1-a,t=vl(e,(n,c)=>{const s=il(n.valores,c.valores,{nivelConfianza:a});return{medicion1:n.nombre,medicion2:c.nombre,diferenciaMedia:s.diferenciaMedia,estadisticoT:s.estadistico.valor,gradosLibertad:s.gradosLibertad,valorP:s.valorP,intervaloConfianza:s.intervaloConfianza,dZ:s.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:xl(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function Eg(e,a){const r=1-a,t=vl(e,(n,c)=>{const s=ol(n.valores,c.valores);return{medicion1:n.nombre,medicion2:c.nombre,estadisticoW:s.estadistico.valor,estadisticoZ:s.estadisticoZ,valorP:s.valorP,correlacionBiserialRangos:s.tamanioEfecto.correlacionBiserialRangos,r:s.tamanioEfecto.r,nEfectivo:s.nEfectivo,cantidadCeros:s.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:xl(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function Cg(e){const a=e.map((s,p)=>({valor:s,indice:p,rango:0})).sort((s,p)=>s.valor-p.valor);let r=0,t=0,n=0;for(;r<a.length;){let s=r+1;for(;s<a.length&&a[s].valor===a[r].valor;)s+=1;const p=s-r,u=(r+1+s)/2;for(let l=r;l<s;l+=1)a[l].rango=u;p>1&&(n+=1,t+=p**3-p),r=s}const c=new Array(e.length).fill(0);return a.forEach(({indice:s,rango:p})=>{c[s]=p}),{rangos:c,correccionEmpates:t,cantidadGruposEmpatados:n}}function $g(e,a={}){const{nivelConfianza:r=.95}=a;bl(r);const t=gl(e),n=hl(t),c=n.length,s=t.length,p=n.flat(),u=ct(p),l=n.map(P=>ct(P)),i=p.reduce((P,D)=>P+(D-u)**2,0),o=c*t.reduce((P,D)=>P+(D.media-u)**2,0),d=s*l.reduce((P,D)=>P+(D-u)**2,0),m=Math.max(0,i-o-d),f=s-1,g=c-1,b=f*g,x=o/f,y=m/b,v=y===0?x===0?0:1/0:x/y,h=Xr(v,f,b),w=o+m===0?0:o/(o+m),k=o+m+d===0?0:o/(o+m+d),E=vg(n),C=f*E.greenhouseGeisser,$=b*E.greenhouseGeisser,I=f*E.huynhFeldt,A=b*E.huynhFeldt,L=Xr(v,C,$),R=Xr(v,I,A),N=1-r,V=kg(t,r);return V.recomendado=L<N,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:t,nSujetos:c,numeroMediciones:s,mediaGeneral:u,mediasSujetos:l,estadistico:{simbolo:"F",valor:v},gradosLibertad:{numerador:f,denominador:b},valorP:h,nivelConfianza:r,alfa:N,significativo:h<N,tablaAnova:{mediciones:{sumaCuadrados:o,gradosLibertad:f,cuadradoMedio:x},sujetos:{sumaCuadrados:d,gradosLibertad:g},error:{sumaCuadrados:m,gradosLibertad:b,cuadradoMedio:y},total:{sumaCuadrados:i,gradosLibertad:c*s-1}},esfericidad:{...E,greenhouseGeisser:{epsilon:E.greenhouseGeisser,gradosLibertadNumerador:C,gradosLibertadDenominador:$,valorP:L,significativo:L<N},huynhFeldt:{epsilon:E.huynhFeldt,gradosLibertadNumerador:I,gradosLibertadDenominador:A,valorP:R,significativo:R<N},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:w,etaCuadradoGeneralizado:k,interpretacion:yg(w)},postHoc:V}}function Ag(e,a={}){const{nivelConfianza:r=.95}=a;bl(r);const t=gl(e),n=hl(t),c=n.length,s=t.length,p=new Array(s).fill(0);let u=0,l=0;n.forEach(v=>{const h=Cg(v);h.rangos.forEach((w,k)=>{p[k]+=w}),u+=h.correccionEmpates,l+=h.cantidadGruposEmpatados});const i=12/(c*s*(s+1))*p.reduce((v,h)=>v+h**2,0)-3*c*(s+1),o=1-u/(c*(s**3-s)),d=o<=0?0:i/o,m=s-1,f=hg(d,m),g=c*(s-1)===0?0:d/(c*(s-1)),b=1-r,x=t.map((v,h)=>({...v,sumaRangos:p[h],rangoMedio:p[h]/c})),y=Eg(t,r);return y.recomendado=f<b,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:x,nSujetos:c,numeroMediciones:s,estadistico:{simbolo:"χ²_F",valor:d,sinCorreccion:i},gradosLibertad:{valor:m},valorP:f,nivelConfianza:r,alfa:b,significativo:f<b,empates:{factorCorreccion:o,sumaCorreccion:u,cantidadGruposEmpatados:l},tamanioEfecto:{kendallW:g,interpretacion:wg(g)},postHoc:y}}function Ig({mediciones:e,prueba:a,nivelConfianza:r=.95}){switch(a){case"anova-medidas-repetidas":case"anova-repetidas":return $g(e,{nivelConfianza:r});case"friedman":return Ag(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function Pg(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-fuchsia-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-fuchsia-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-fuchsia-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Tres o más mediciones relacionadas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Compare tres o más momentos o condiciones evaluados sobre las mismas personas mediante ANOVA de medidas repetidas o la prueba de Friedman.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia por filas
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correcciones de esfericidad
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Post hoc con Holm
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${mo("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${mo("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Orden de los participantes
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Cada fila debe corresponder al mismo participante en todas las mediciones. No ordene las columnas de forma independiente.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Datos completos
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta versión requiere la misma cantidad de observaciones en todas las mediciones. Los datos incompletos deben analizarse mediante modelos mixtos u otros procedimientos adecuados.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-mediciones-relacionadas"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="anova-medidas-repetidas">
                                ANOVA de medidas repetidas
                            </option>
                            <option value="friedman">
                                Prueba de Friedman
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900">
                            Mediciones o condiciones
                        </h2>
                        <p class="text-sm text-slate-500 mt-1">
                            Introduzca al menos tres columnas relacionadas.
                        </p>
                    </div>

                    <button
                        type="button"
                        data-action="agregar-medicion"
                        class="inline-flex items-center justify-center rounded-xl border border-fuchsia-300 text-fuchsia-700 font-black px-5 py-3 hover:bg-fuchsia-50 transition-colors"
                    >
                        + Agregar medición
                    </button>
                </div>

                <div
                    id="contenedor-mediciones"
                    class="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    ${$e(1)}
                    ${$e(2)}
                    ${$e(3)}
                </div>

                <div
                    id="mensaje-error-mediciones-relacionadas"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-fuchsia-700 text-white font-black rounded-xl px-7 py-4 hover:bg-fuchsia-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-fuchsia-300 text-fuchsia-700 font-black rounded-xl px-6 py-4 hover:bg-fuchsia-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-mediciones-relacionadas"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-mediciones-relacionadas"),r=e.querySelector("#contenedor-mediciones"),t=e.querySelector("#mensaje-error-mediciones-relacionadas"),n=e.querySelector("#resultados-mediciones-relacionadas");let c=4;const s=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(s)&&(a.elements.prueba.value=s),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),a.addEventListener("submit",p=>{p.preventDefault(),en(t);try{const u=a.elements.prueba.value;if(!u)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=Rg(r),i=Number(a.elements.nivelConfianza.value),o=Ig({mediciones:l,prueba:u,nivelConfianza:i});n.innerHTML=Tg(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(u){n.classList.add("hidden"),fo(t,u instanceof Error?u.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",p=>{const u=p.target.closest("[data-action]");if(!u)return;const l=u.dataset.action;if(l==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(l==="agregar-medicion"){r.insertAdjacentHTML("beforeend",$e(c,!0)),c+=1,n.classList.add("hidden");return}if(l==="eliminar-medicion"){if(r.querySelectorAll("[data-medicion]").length<=3){fo(t,"El análisis requiere al menos tres mediciones.");return}u.closest("[data-medicion]")?.remove(),n.classList.add("hidden");return}if(l==="cargar-ejemplo"){Mg(a,r),c=4,en(t),n.classList.add("hidden");return}l==="limpiar"&&(a.reset(),r.innerHTML=`
                    ${$e(1)}
                    ${$e(2)}
                    ${$e(3)}
                `,c=4,n.innerHTML="",n.classList.add("hidden"),en(t))}),e}function mo(e,a){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-fuchsia-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${a}
                </p>
            </div>
        </article>
    `}function $e(e,a=!1){return`
        <article
            data-medicion
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <h3 class="font-black text-slate-900">
                    Medición ${e}
                </h3>
                ${a?`
                            <button
                                type="button"
                                data-action="eliminar-medicion"
                                class="text-sm font-black text-red-600 hover:text-red-800"
                            >
                                Eliminar
                            </button>
                        `:""}
            </div>

            <label class="block mb-4">
                <span class="block text-sm font-black text-slate-700 mb-2">
                    Nombre
                </span>
                <input
                    type="text"
                    data-campo="nombre"
                    value="Medición ${e}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span>Valores</span>
                    <span class="text-xs font-bold text-slate-500" data-contador>
                        0 valores
                    </span>
                </span>
                <textarea
                    data-campo="valores"
                    rows="10"
                    placeholder="18
20
17.5
19"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                ></textarea>
            </label>
        </article>
    `}function Lg(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function Rg(e){const a=[...e.querySelectorAll("[data-medicion]")];if(a.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return a.map((r,t)=>{const n=r.querySelector('[data-campo="nombre"]'),c=r.querySelector('[data-campo="valores"]'),s=n.value.trim()||`Medición ${t+1}`;return{nombre:s,valores:Lg(c.value,s)}})}function Mg(e,a){e.elements.prueba.value=e.elements.prueba.value||"anova-medidas-repetidas",a.innerHTML=`
        ${$e(1)}
        ${$e(2)}
        ${$e(3)}
    `;const r=["Diagnóstico inicial","Evaluación intermedia","Evaluación final"],t=[`12
15
11
14
13
16
10
15`,`15
17
14
16
16
18
13
17`,`18
21
17
19
20
21
15
20`];[...a.querySelectorAll("[data-medicion]")].forEach((c,s)=>{c.querySelector('[data-campo="nombre"]').value=r[s],c.querySelector('[data-campo="valores"]').value=t[s],yl(c)})}function yl(e){const a=e.querySelector('[data-campo="valores"]'),r=e.querySelector("[data-contador]"),t=a.value.trim()?a.value.trim().split(/[\s;]+/).filter(Boolean).length:0;r.textContent=t===1?"1 valor":`${t} valores`}document.addEventListener("input",e=>{const a=e.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!a)return;const r=a.closest("[data-medicion]");r&&yl(r)});function fo(e,a){e.textContent=a,e.classList.remove("hidden")}function en(e){e.textContent="",e.classList.add("hidden")}function Ie(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":"—"}function rr(e){return Number.isFinite(e)?e<.001?"< 0.001":Ie(e,4):"—"}function Tg(e){const a=e.id==="anova-medidas-repetidas",r=a?e.esfericidad.greenhouseGeisser.valorP:e.valorP,t=r<e.alfa,n=Math.round(e.nivelConfianza*100),c=a?"Greenhouse–Geisser":"sin corrección adicional",s=t?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${c}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${c}.`;return`
        <section class="rounded-3xl border border-fuchsia-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-fuchsia-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-fuchsia-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h2>
                <p class="text-fuchsia-100 mt-3 font-semibold">
                    ${e.metodo}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Lt(e.estadistico.simbolo,Ie(e.estadistico.valor),"Estadístico global")}
                    ${Lt("p",rr(r),a?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${Lt("n",e.nSujetos,"Participantes completos")}
                    ${Lt("k",e.numeroMediciones,"Mediciones")}
                </div>

                ${Ng(e)}
                ${a?Sg(e):zg(e)}
                ${_g(e.postHoc)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${s}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${n} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
                    </p>
                </article>
            </div>
        </section>
    `}function Lt(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-fuchsia-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Ng(e){return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Descriptivos por medición
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[760px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Medición</th>
                            <th class="text-right px-5 py-3">n</th>
                            <th class="text-right px-5 py-3">Media</th>
                            <th class="text-right px-5 py-3">Mediana</th>
                            <th class="text-right px-5 py-3">DE</th>
                            <th class="text-right px-5 py-3">Mínimo</th>
                            <th class="text-right px-5 py-3">Máximo</th>
                            ${e.id==="friedman"?'<th class="text-right px-5 py-3">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${e.mediciones.map(a=>`
                                    <tr>
                                        <td class="px-5 py-3 font-bold text-slate-900">${a.nombre}</td>
                                        <td class="px-5 py-3 text-right">${a.n}</td>
                                        <td class="px-5 py-3 text-right">${Ie(a.media)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(a.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(a.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(a.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(a.maximo)}</td>
                                        ${e.id==="friedman"?`<td class="px-5 py-3 text-right">${Ie(a.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Sg(e){const a=e.tablaAnova,r=e.esfericidad.greenhouseGeisser,t=e.esfericidad.huynhFeldt;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${Z("SC mediciones",a.mediciones.sumaCuadrados)}
                    ${Z("gl mediciones",a.mediciones.gradosLibertad)}
                    ${Z("CM mediciones",a.mediciones.cuadradoMedio)}
                    ${Z("SC sujetos",a.sujetos.sumaCuadrados)}
                    ${Z("SC error",a.error.sumaCuadrados)}
                    ${Z("gl error",a.error.gradosLibertad)}
                    ${Z("CM error",a.error.cuadradoMedio)}
                    ${Z("SC total",a.total.sumaCuadrados)}
                </dl>
            </article>

            <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Esfericidad y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${Z("ε Greenhouse–Geisser",r.epsilon)}
                    ${Z("p Greenhouse–Geisser",r.valorP,!0)}
                    ${Z("ε Huynh–Feldt",t.epsilon)}
                    ${Z("p Huynh–Feldt",t.valorP,!0)}
                    ${Z("Eta cuadrado parcial",e.tamanioEfecto.etaCuadradoParcial)}
                    ${Z("Eta cuadrado generalizado",e.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${e.tamanioEfecto.interpretacion}. ${e.esfericidad.nota}
                </p>
            </article>
        </div>
    `}function zg(e){return`
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${Z("Grados de libertad",e.gradosLibertad.valor)}
                ${Z("Factor de corrección por empates",e.empates.factorCorreccion)}
                ${Z("Grupos de empates",e.empates.cantidadGruposEmpatados)}
                ${Z("W de Kendall",e.tamanioEfecto.kendallW)}
                ${Z("Magnitud",e.tamanioEfecto.interpretacion,!1,!0)}
            </dl>
        </article>
    `}function Z(e,a,r=!1,t=!1){const n=t?a:r?rr(a):Ie(a);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${n}
            </dd>
        </div>
    `}function _g(e){return e?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-emerald-200 bg-white overflow-hidden">
            <header class="bg-emerald-50 border-b border-emerald-200 px-6 py-5">
                <h3 class="text-xl font-black text-emerald-950">
                    ${e.nombre}
                </h3>
                <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                    ${e.metodo}
                    ${e.recomendado?" El contraste global es significativo y estas comparaciones ayudan a localizar las diferencias.":" El contraste global no es significativo; las comparaciones se muestran únicamente con fines exploratorios."}
                </p>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[860px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Comparación</th>
                            <th class="text-right px-5 py-3">Estadístico</th>
                            <th class="text-right px-5 py-3">p sin ajustar</th>
                            <th class="text-right px-5 py-3">p Holm</th>
                            <th class="text-center px-5 py-3">Conclusión</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${e.comparaciones.map(a=>{const t=e.id==="t-pareadas-holm"?a.estadisticoT:a.estadisticoW;return`
                                        <tr>
                                            <td class="px-5 py-3 font-bold text-slate-900">
                                                ${a.medicion1} vs. ${a.medicion2}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${Ie(t)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${rr(a.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${rr(a.valorPAjustado)}
                                            </td>
                                            <td class="px-5 py-3 text-center">
                                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${a.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-700"}">
                                                    ${a.significativo?"Significativa":"No significativa"}
                                                </span>
                                            </td>
                                        </tr>
                                    `}).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function Dg(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Módulo de relación y asociación
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Correlación y asociación
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione si desea estudiar la relación entre variables cuantitativas u ordinales, o la asociación entre variables categóricas.
                </p>
            </div>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">
            ${bo({etiqueta:"Disponible",titulo:"Relación entre variables",descripcion:"Analice la intensidad, dirección y significación de la relación entre dos variables mediante Pearson, Spearman, Kendall o correlación punto-biserial.",elementos:["Correlación de Pearson","Rho de Spearman","Tau-b de Kendall","Correlación punto-biserial"],ruta:"calculadoraRelacionVariables",textoBoton:"Abrir calculadora de correlación",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${bo({etiqueta:"Disponible",titulo:"Asociación entre variables categóricas",descripcion:"Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.",elementos:["Chi-cuadrado de independencia","Fisher y Fisher–Freeman–Halton","Residuos ajustados","Phi, V de Cramer y odds ratio"],ruta:"calculadoraAsociacionCategorica",textoBoton:"Abrir calculadora de asociación",clases:{borde:"border-indigo-200",fondo:"bg-indigo-50",texto:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Seleccione primero la estructura de sus variables
            </h2>
            <p class="text-slate-700 leading-relaxed max-w-4xl">
                Pearson, Spearman y Kendall requieren observaciones emparejadas fila por fila. La correlación punto-biserial combina una variable dicotómica genuina con una variable cuantitativa. Para dos variables categóricas utilice la calculadora de asociación mediante tablas de contingencia.
            </p>
        </section>
    `,e.addEventListener("click",a=>{const r=a.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),e}function bo({etiqueta:e,titulo:a,descripcion:r,elementos:t,ruta:n,textoBoton:c,deshabilitada:s=!1,clases:p}){return`
        <article class="h-full rounded-3xl border ${p.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${p.fondo} ${p.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${e}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${a}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
                </p>

                <div class="rounded-2xl ${p.fondo} border ${p.borde} p-5 mb-7">
                    <ul class="space-y-2 text-slate-700">
                        ${t.map(u=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${p.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${u}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    ${n?`data-route="${n}"`:""}
                    ${s?"disabled":""}
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${p.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${c}
                    ${s?"":'<span class="ml-2" aria-hidden="true">→</span>'}
                </button>
            </div>
        </article>
    `}const gt=va.jStat??Ua?.jStat;if(!gt)throw new Error("No fue posible cargar el motor estadístico jStat.");const wl=e=>Math.min(1,Math.max(0,e));function Cr(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function qg(e){if(typeof e=="string"){const a=e.trim();return a?Number(a.replace(",",".")):Number.NaN}return Number(e)}function kn(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);const r=e.map(qg),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);return r}function Jn(e,a,r,t,n=3){const c=kn(e,r),s=kn(a,t);if(c.length!==s.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(c.length<n)throw new RangeError(`El análisis requiere al menos ${n} pares completos.`);return{x:c,y:s,n:c.length}}function _a(e){return e.reduce((a,r)=>a+r,0)/e.length}function Og(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function En(e,a=_a(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function Ue(e){const a=_a(e),r=En(e,a);return{n:e.length,media:a,mediana:Og(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Fg(e,a,r=_a(e),t=_a(a)){return e.reduce((n,c,s)=>n+(c-r)*(a[s]-t),0)/(e.length-1)}function Qn(e,a){const r=_a(e),t=_a(a),n=En(e,r),c=En(a,t);if(n===0||c===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const s=Fg(e,a,r,t),p=s/Math.sqrt(n*c);return{r:Math.max(-1,Math.min(1,p)),covarianza:s,mediaX:r,mediaY:t,varianzaX:n,varianzaY:c}}function Xn(e,a){const r=a-2;if(Math.abs(e)>=1)return{valor:e<0?-1/0:1/0,gradosLibertad:r,valorP:0};const t=e*Math.sqrt(r/(1-e**2)),n=wl(2*(1-gt.studentt.cdf(Math.abs(t),r)));return{valor:t,gradosLibertad:r,valorP:n}}function Zn(e,a,r){if(a<=3)return{disponible:!1,nivel:r,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const t=1-r,n=gt.normal.inv(1-t/2,0,1),c=Math.max(-1+1e-15,Math.min(1-1e-15,e)),s=Math.atanh(c),p=1/Math.sqrt(a-3),u=Math.tanh(s-n*p),l=Math.tanh(s+n*p);return{disponible:!0,nivel:r,inferior:u,superior:l,errorEstandar:p,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function $r(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":a<.7?"Grande":"Muy grande"}function Ar(e){return e>0?"Positiva":e<0?"Negativa":"Sin dirección"}function ei(e,a){return e.map((r,t)=>({x:r,y:a[t],indice:t+1}))}function go(e){const a=e.map((c,s)=>({valor:c,indice:s,rango:0})).sort((c,s)=>c.valor-s.valor),r=[];let t=0;for(;t<a.length;){let c=t+1;for(;c<a.length&&a[c].valor===a[t].valor;)c+=1;const s=c-t,p=(t+1+c)/2;for(let u=t;u<c;u+=1)a[u].rango=p;s>1&&r.push({valor:a[t].valor,cantidad:s}),t=c}const n=new Array(e.length);return a.forEach(({indice:c,rango:s})=>{n[c]=s}),{rangos:n,gruposEmpatados:r,cantidadValoresEmpatados:r.reduce((c,s)=>c+s.cantidad,0)}}function ho(e){const a=new Map;return e.forEach(r=>{const t=typeof r=="number"?`n:${r}`:`s:${String(r)}`;a.set(t,(a.get(t)||0)+1)}),[...a.values()].filter(r=>r>1)}function We(e,a){return e.reduce((r,t)=>r+a(t),0)}function Ug(e,a,r){const t=1-r,n=gt.normal.inv(1-t/2,0,1);return{disponible:Number.isFinite(a),nivel:r,inferior:Number.isFinite(a)?Math.max(-1,e-n*a):null,superior:Number.isFinite(a)?Math.min(1,e+n*a):null,errorEstandar:a,metodo:"Intervalo asintótico basado en la aproximación normal."}}function jg(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);return e.map((r,t)=>{const n=String(r??"").trim();if(!n)throw new TypeError(`${a} contiene una categoría vacía en la posición ${t+1}.`);return n})}function Vg(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;Cr(t);const s=Jn(e,a,n,c),p=Qn(s.x,s.y),u=Xn(p.r,s.n),l=1-t;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:s.n,variables:{x:{nombre:n,valores:s.x,...Ue(s.x)},y:{nombre:c,valores:s.y,...Ue(s.y)}},coeficiente:{simbolo:"r",valor:p.r},estadistico:{simbolo:"t",valor:u.valor},gradosLibertad:u.gradosLibertad,valorP:u.valorP,nivelConfianza:t,alfa:l,significativo:u.valorP<l,intervaloConfianza:Zn(p.r,s.n,t),tamanioEfecto:{valor:p.r,magnitud:$r(p.r),direccion:Ar(p.r),rCuadrado:p.r**2},detalles:{covarianza:p.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:ei(s.x,s.y)}}function Bg(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;Cr(t);const s=Jn(e,a,n,c),p=go(s.x),u=go(s.y),l=Qn(p.rangos,u.rangos),i=Xn(l.r,s.n),o=1-t;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:s.n,variables:{x:{nombre:n,valores:s.x,rangos:p.rangos,...Ue(s.x)},y:{nombre:c,valores:s.y,rangos:u.rangos,...Ue(s.y)}},coeficiente:{simbolo:"ρ_s",valor:l.r},estadistico:{simbolo:"t",valor:i.valor},gradosLibertad:i.gradosLibertad,valorP:i.valorP,nivelConfianza:t,alfa:o,significativo:i.valorP<o,intervaloConfianza:Zn(l.r,s.n,t),tamanioEfecto:{valor:l.r,magnitud:$r(l.r),direccion:Ar(l.r)},empates:{variableX:p.gruposEmpatados,variableY:u.gruposEmpatados,cantidadValoresEmpatadosX:p.cantidadValoresEmpatados,cantidadValoresEmpatadosY:u.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:ei(s.x,s.y)}}function Gg(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;Cr(t);const s=Jn(e,a,n,c);let p=0,u=0,l=0,i=0,o=0;for(let P=0;P<s.n-1;P+=1)for(let D=P+1;D<s.n;D+=1){const te=Math.sign(s.x[D]-s.x[P]),Y=Math.sign(s.y[D]-s.y[P]);te===0&&Y===0?o+=1:te===0?l+=1:Y===0?i+=1:te===Y?p+=1:u+=1}const d=s.n*(s.n-1)/2,m=ho(s.x),f=ho(s.y),g=We(m,P=>P*(P-1)/2),b=We(f,P=>P*(P-1)/2),x=Math.sqrt((d-g)*(d-b));if(x===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const y=p-u,v=y/x,h=We(m,P=>P*(P-1)),w=We(f,P=>P*(P-1)),k=We(m,P=>P*(P-1)*(2*P+5)),E=We(f,P=>P*(P-1)*(2*P+5)),C=We(m,P=>P*(P-1)*(P-2)),$=We(f,P=>P*(P-1)*(P-2));let I=(s.n*(s.n-1)*(2*s.n+5)-k-E)/18;I+=h*w/(2*s.n*(s.n-1)),s.n>2&&(I+=C*$/(9*s.n*(s.n-1)*(s.n-2)));const A=Math.sqrt(Math.max(0,I)),L=A===0?0:y/A,R=wl(2*(1-gt.normal.cdf(Math.abs(L),0,1))),N=A/x,V=1-t;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:s.n,variables:{x:{nombre:n,valores:s.x,...Ue(s.x)},y:{nombre:c,valores:s.y,...Ue(s.y)}},coeficiente:{simbolo:"τ_b",valor:v},estadistico:{simbolo:"z",valor:L},gradosLibertad:null,valorP:R,nivelConfianza:t,alfa:V,significativo:R<V,intervaloConfianza:Ug(v,N,t),tamanioEfecto:{valor:v,magnitud:$r(v),direccion:Ar(v)},pares:{total:d,concordantes:p,discordantes:u,empatesSoloX:l,empatesSoloY:i,empatesAmbas:o,empatadosX:g,empatadosY:b},empates:{tamaniosVariableX:m,tamaniosVariableY:f},detalles:{s:y,varianzaS:I,aproximacionInferencial:"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:ei(s.x,s.y)}}function Hg(e,a,r={}){const{nivelConfianza:t=.95,nombreCategoria:n="Variable dicotómica",nombreCuantitativa:c="Variable cuantitativa",categoriaPositiva:s=null}=r;Cr(t);const p=jg(e,n),u=kn(a,c);if(p.length!==u.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(p.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const l=[...new Set(p)];if(l.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let i=s===null?l[1]:String(s).trim();if(!l.includes(i))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const o=l.find(h=>h!==i),d=p.map(h=>h===i?1:0),m=Qn(d,u),f=Xn(m.r,p.length),g=u.filter((h,w)=>d[w]===0),b=u.filter((h,w)=>d[w]===1),x=Ue(g),y=Ue(b),v=1-t;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:p.length,variables:{dicotomica:{nombre:n,valores:p,categorias:[o,i],categoriaCero:o,categoriaUno:i},cuantitativa:{nombre:c,valores:u,...Ue(u)}},coeficiente:{simbolo:"r_pb",valor:m.r},estadistico:{simbolo:"t",valor:f.valor},gradosLibertad:f.gradosLibertad,valorP:f.valorP,nivelConfianza:t,alfa:v,significativo:f.valorP<v,intervaloConfianza:Zn(m.r,p.length,t),tamanioEfecto:{valor:m.r,magnitud:$r(m.r),direccion:Ar(m.r),rCuadrado:m.r**2},grupos:{categoriaCero:{categoria:o,codigo:0,...x},categoriaUno:{categoria:i,codigo:1,...y},diferenciaMedias:y.media-x.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${c} en la categoría "${i}" respecto de "${o}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:p.map((h,w)=>({categoria:h,codigo:d[w],valor:u[w],indice:w+1}))}}function Wg({x:e,y:a,prueba:r,nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y",categoriaPositiva:s=null}){switch(r){case"pearson":return Vg(e,a,{nivelConfianza:t,nombreX:n,nombreY:c});case"spearman":case"rho-spearman":return Bg(e,a,{nivelConfianza:t,nombreX:n,nombreY:c});case"kendall":case"tau-kendall":return Gg(e,a,{nivelConfianza:t,nombreX:n,nombreY:c});case"punto-biserial":return Hg(e,a,{nivelConfianza:t,nombreCategoria:n,nombreCuantitativa:c,categoriaPositiva:s});default:throw new Error("La prueba solicitada no está disponible.")}}function Kg(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a correlación y asociación
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Relación entre variables
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice dos variables emparejadas mediante Pearson, Spearman, Kendall o correlación punto-biserial.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia fila por fila
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Intervalos de confianza
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Visualización integrada
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué coeficiente corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Rt("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${Rt("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${Rt("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${Rt("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Correspondencia de las filas
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La primera observación de la variable X debe corresponder a la primera observación de Y, y así sucesivamente.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-relacion-variables"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="pearson">Correlación de Pearson</option>
                            <option value="spearman">Rho de Spearman</option>
                            <option value="kendall">Tau-b de Kendall</option>
                            <option value="punto-biserial">Correlación punto-biserial</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${xo("x","Variable X")}
                    ${xo("y","Variable Y")}
                </div>

                <label
                    id="campo-categoria-positiva"
                    class="hidden block mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5"
                >
                    <span class="block text-sm font-black text-violet-900 mb-2">
                        Categoría codificada como 1
                    </span>
                    <input
                        type="text"
                        name="categoriaPositiva"
                        placeholder="Opcional; por ejemplo: Tutoría"
                        class="w-full rounded-xl border border-violet-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                    >
                    <span class="block text-xs text-violet-800 mt-2">
                        Esta categoría determina el signo de la correlación punto-biserial.
                    </span>
                </label>

                <div
                    id="mensaje-error-relacion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-relacion-variables"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-relacion-variables"),r=e.querySelector("#mensaje-error-relacion"),t=e.querySelector("#resultados-relacion-variables"),n=e.querySelector("#campo-categoria-positiva"),c=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(c)&&(a.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-relacion-variables"),Mt(a,n),a.elements.prueba.addEventListener("change",()=>{Mt(a,n),t.classList.add("hidden"),Nt(r)}),a.addEventListener("submit",s=>{s.preventDefault(),Nt(r);try{const p=a.elements.prueba.value;if(!p)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const u=a.elements.nombreX.value.trim()||"Variable X",l=a.elements.nombreY.value.trim()||"Variable Y",i=a.elements.valoresX.value,o=a.elements.valoresY.value,m=p==="punto-biserial"?Yg(i,u):vo(i,u),f=vo(o,l),g=a.elements.categoriaPositiva.value.trim()||null,b=Number(a.elements.nivelConfianza.value),x=Wg({x:m,y:f,prueba:p,nivelConfianza:b,nombreX:u,nombreY:l,categoriaPositiva:g});t.innerHTML=Xg(x),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){t.classList.add("hidden"),s0(r,p instanceof Error?p.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",s=>{const p=s.target.closest("[data-action]");if(!p)return;const u=p.dataset.action;if(u==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(u==="cargar-ejemplo"){Jg(a),Mt(a,n),an(a),t.classList.add("hidden"),Nt(r);return}u==="limpiar"&&(a.reset(),a.elements.nombreX.value="Variable X",a.elements.nombreY.value="Variable Y",Mt(a,n),an(a),t.innerHTML="",t.classList.add("hidden"),Nt(r))}),a.addEventListener("input",()=>an(a)),e}function Rt(e,a){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${a}
                </p>
            </div>
        </article>
    `}function xo(e,a){const r=e.toUpperCase();return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <label class="block mb-4">
                <span
                    data-etiqueta-nombre="${e}"
                    class="block text-sm font-black text-slate-700 mb-2"
                >
                    Nombre de ${a}
                </span>
                <input
                    type="text"
                    name="nombre${r}"
                    value="${a}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span data-etiqueta-valores="${e}">
                        Valores de ${a}
                    </span>
                    <span
                        data-contador="${e}"
                        class="text-xs font-bold text-slate-500"
                    >
                        0 valores
                    </span>
                </span>
                <textarea
                    name="valores${r}"
                    rows="11"
                    placeholder="12&#10;15&#10;18&#10;20"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                ></textarea>
            </label>
        </article>
    `}function Mt(e,a){const t=e.elements.prueba.value==="punto-biserial",n=e.querySelector('[data-etiqueta-valores="x"]'),c=e.querySelector('[data-etiqueta-valores="y"]'),s=e.elements.valoresX;a.classList.toggle("hidden",!t),n.textContent=t?"Categorías dicotómicas":"Valores de Variable X",c.textContent=t?"Valores cuantitativos":"Valores de Variable Y",s.placeholder=t?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function vo(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);return n}function Yg(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene categorías.`);const t=r.split(/\n|;/).map(n=>n.trim()).filter(Boolean);if(t.length<3)throw new Error(`${a} debe contener al menos tres categorías emparejadas.`);return t}function yo(e,a){return e.trim()?e.trim().split(a?/\n|;/:/[\s;]+/).map(r=>r.trim()).filter(Boolean).length:0}function an(e){const a=e.elements.prueba.value==="punto-biserial",r=yo(e.elements.valoresX.value,a),t=yo(e.elements.valoresY.value,!1);e.querySelector('[data-contador="x"]').textContent=`${r} ${r===1?"valor":"valores"}`,e.querySelector('[data-contador="y"]').textContent=`${t} ${t===1?"valor":"valores"}`}function Jg(e){const a=e.elements.prueba.value||"pearson";if(e.elements.prueba.value=a,e.elements.nivelConfianza.value="0.95",a==="punto-biserial"){e.elements.nombreX.value="Participación en tutoría",e.elements.nombreY.value="Calificación final",e.elements.valoresX.value=`Sin tutoría
Sin tutoría
Tutoría
Sin tutoría
Tutoría
Tutoría
Sin tutoría
Tutoría
Sin tutoría
Tutoría
Tutoría
Sin tutoría`,e.elements.valoresY.value=`62
68
78
65
84
80
70
88
66
82
86
69`,e.elements.categoriaPositiva.value="Tutoría";return}if(e.elements.nombreX.value=a==="pearson"?"Horas de estudio":"Nivel de participación",e.elements.nombreY.value=a==="pearson"?"Calificación":"Nivel de logro",a==="pearson"){e.elements.valoresX.value=`2
3
4
5
6
7
8
9
10
11
12
13`,e.elements.valoresY.value=`55
61
60
68
72
74
79
83
82
89
93
96`;return}e.elements.valoresX.value=`1
2
2
3
3
4
4
5
5
5
4
3`,e.elements.valoresY.value=`2
1
2
3
4
3
5
5
4
5
4
3`}function pe(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function Qg(e){return Number.isFinite(e)?e<.001?"< 0.001":pe(e,4):"—"}function me(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Xg(e){const a=Math.round(e.nivelConfianza*100),r=e.significativo,t=r?`Se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${me(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${me(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Tt(e.coeficiente.simbolo,pe(e.coeficiente.valor),"Coeficiente")}
                    ${Tt("p",Qg(e.valorP),"Valor p bilateral")}
                    ${Tt("n",e.n,"Pares completos")}
                    ${Tt(e.estadistico.simbolo,pe(e.estadistico.valor),e.gradosLibertad===null?"Estadístico inferencial":`gl = ${e.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Zg(e)}
                    ${e0(e)}
                </div>

                ${n0(e)}
                ${a0(e)}
                ${t0(e)}
                ${r0(e)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t} La relación es ${e.tamanioEfecto.direccion.toLowerCase()} y su magnitud orientativa es ${e.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${a} %. Una correlación no demuestra causalidad y debe interpretarse junto con el diseño, el gráfico y la calidad de las mediciones.
                    </p>
                </article>
            </div>
        </section>
    `}function Tt(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Zg(e){const a=e.tamanioEfecto.rCuadrado;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${ee("Coeficiente",e.tamanioEfecto.valor)}
                ${ee("Magnitud",e.tamanioEfecto.magnitud,!0)}
                ${ee("Dirección",e.tamanioEfecto.direccion,!0)}
                ${Number.isFinite(a)?ee("R² descriptivo",a):""}
            </dl>
        </article>
    `}function e0(e){const a=e.intervaloConfianza;return`
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${a?.disponible?`
                        <dl class="grid grid-cols-2 gap-4">
                            ${ee("Límite inferior",a.inferior)}
                            ${ee("Límite superior",a.superior)}
                        </dl>
                    `:`
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `}
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${me(a?.metodo||"")}
            </p>
        </article>
    `}function ee(e,a,r=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?me(a):pe(a)}
            </dd>
        </div>
    `}function a0(e){if(e.id==="punto-biserial"){const a=e.grupos.categoriaCero,r=e.grupos.categoriaUno;return`
            <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <h3 class="text-xl font-black text-slate-900">
                        Descriptivos por categoría
                    </h3>
                </header>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[700px] text-sm">
                        <thead class="bg-slate-100 text-slate-700">
                            <tr>
                                <th class="text-left px-5 py-3">Categoría</th>
                                <th class="text-right px-5 py-3">n</th>
                                <th class="text-right px-5 py-3">Media</th>
                                <th class="text-right px-5 py-3">Mediana</th>
                                <th class="text-right px-5 py-3">DE</th>
                                <th class="text-right px-5 py-3">Mínimo</th>
                                <th class="text-right px-5 py-3">Máximo</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            ${ko(a)}
                            ${ko(r)}
                        </tbody>
                    </table>
                </div>
            </article>
        `}return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Descriptivos de las variables
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[700px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Variable</th>
                            <th class="text-right px-5 py-3">Media</th>
                            <th class="text-right px-5 py-3">Mediana</th>
                            <th class="text-right px-5 py-3">DE</th>
                            <th class="text-right px-5 py-3">Mínimo</th>
                            <th class="text-right px-5 py-3">Máximo</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${wo(e.variables.x)}
                        ${wo(e.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function wo(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${me(e.nombre)}
            </td>
            <td class="px-5 py-3 text-right">${pe(e.media)}</td>
            <td class="px-5 py-3 text-right">${pe(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${pe(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${pe(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${pe(e.maximo)}</td>
        </tr>
    `}function ko(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${me(e.categoria)}
            </td>
            <td class="px-5 py-3 text-right">${e.n}</td>
            <td class="px-5 py-3 text-right">${pe(e.media)}</td>
            <td class="px-5 py-3 text-right">${pe(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${pe(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${pe(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${pe(e.maximo)}</td>
        </tr>
    `}function t0(e){return e.id==="pearson"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${ee("Covarianza",e.detalles.covarianza)}
                    ${ee("R²",e.tamanioEfecto.rCuadrado)}
                    ${ee("Grados de libertad",e.gradosLibertad)}
                </dl>
            </article>
        `:e.id==="spearman"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${ee("Valores empatados en X",e.empates.cantidadValoresEmpatadosX)}
                    ${ee("Valores empatados en Y",e.empates.cantidadValoresEmpatadosY)}
                </dl>
            </article>
        `:e.id==="kendall"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${ee("Total de pares",e.pares.total)}
                    ${ee("Concordantes",e.pares.concordantes)}
                    ${ee("Discordantes",e.pares.discordantes)}
                    ${ee("Empates solo en X",e.pares.empatesSoloX)}
                    ${ee("Empates solo en Y",e.pares.empatesSoloY)}
                    ${ee("Empates en ambas",e.pares.empatesAmbas)}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${ee("Diferencia de medias",e.grupos.diferenciaMedias)}
                ${ee("Categoría codificada como 1",e.variables.dicotomica.categoriaUno,!0)}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${me(e.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function r0(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${e.diagnosticos.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${me(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function n0(e){return e.id==="punto-biserial"?o0(e):i0(e)}function i0(e){const a=e.datosGrafico,r=760,t=380,n=55,c=a.map(b=>b.x),s=a.map(b=>b.y),p=Math.min(...c),u=Math.max(...c),l=Math.min(...s),i=Math.max(...s),o=u-p||1,d=i-l||1,m=b=>n+(b-p)/o*(r-2*n),f=b=>t-n-(b-l)/d*(t-2*n),g=a.map(b=>`
                <circle
                    cx="${m(b.x)}"
                    cy="${f(b.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${me(`${b.x}, ${b.y}`)}</title>
                </circle>
            `).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Diagrama de dispersión
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${r} ${t}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Diagrama de dispersión de las variables"
                >
                    <line x1="${n}" y1="${t-n}" x2="${r-n}" y2="${t-n}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${n}" y1="${n}" x2="${n}" y2="${t-n}" class="stroke-slate-400" stroke-width="2"></line>
                    ${g}
                    <text x="${r/2}" y="${t-12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${me(e.variables.x.nombre)}
                    </text>
                    <text x="18" y="${t/2}" text-anchor="middle" transform="rotate(-90 18 ${t/2})" class="fill-slate-700 text-sm font-bold">
                        ${me(e.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function o0(e){const a=e.datosGrafico,r=e.variables.dicotomica.categorias,t=760,n=380,c=60,s=a.map(m=>m.valor),p=Math.min(...s),l=Math.max(...s)-p||1,i=[t*.32,t*.68],o=m=>n-c-(m-p)/l*(n-2*c),d=a.map((m,f)=>{const g=m.codigo===0?i[0]:i[1],b=(f%5-2)*6;return`
                <circle
                    cx="${g+b}"
                    cy="${o(m.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${me(`${m.categoria}: ${m.valor}`)}</title>
                </circle>
            `}).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Distribución por categoría
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${t} ${n}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Distribución de valores por categoría"
                >
                    <line x1="${c}" y1="${n-c}" x2="${t-c}" y2="${n-c}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${c}" y1="${c}" x2="${c}" y2="${n-c}" class="stroke-slate-400" stroke-width="2"></line>
                    ${d}
                    <text x="${i[0]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${me(r[0])}
                    </text>
                    <text x="${i[1]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${me(r[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function s0(e,a){e.textContent=a,e.classList.remove("hidden")}function Nt(e){e.textContent="",e.classList.add("hidden")}const nr=va.jStat??Ua?.jStat;if(!nr)throw new Error("No fue posible cargar el motor estadístico jStat.");const ir=e=>Math.min(1,Math.max(0,e));function Ir(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Eo(e,a,r){if(e==null)return Array.from({length:a},(n,c)=>`${r} ${c+1}`);if(!Array.isArray(e)||e.length!==a)throw new RangeError(`Debe proporcionar exactamente ${a} etiquetas para ${r.toLowerCase()}.`);const t=e.map((n,c)=>{const s=String(n??"").trim();if(!s)throw new Error(`La etiqueta ${c+1} de ${r.toLowerCase()} está vacía.`);return s});if(new Set(t).size!==t.length)throw new Error(`Las etiquetas de ${r.toLowerCase()} deben ser diferentes.`);return t}function Pr(e,a,r){if(!Array.isArray(e)||e.length<2)throw new RangeError("La tabla debe contener al menos dos filas.");const t=Array.isArray(e[0])?e[0].length:0;if(t<2)throw new RangeError("La tabla debe contener al menos dos columnas.");const n=e.map((i,o)=>{if(!Array.isArray(i)||i.length!==t)throw new RangeError(`La fila ${o+1} no contiene la misma cantidad de columnas que las demás.`);return i.map((d,m)=>{const f=Number(typeof d=="string"?d.trim().replace(",","."):d);if(!Number.isFinite(f)||f<0||!Number.isInteger(f))throw new TypeError(`La celda (${o+1}, ${m+1}) debe contener una frecuencia entera no negativa.`);return f})}),c=n.map(i=>i.reduce((o,d)=>o+d,0)),s=Array.from({length:t},(i,o)=>n.reduce((d,m)=>d+m[o],0)),p=c.reduce((i,o)=>i+o,0);if(p===0)throw new RangeError("La tabla debe contener al menos una observación.");const u=c.findIndex(i=>i===0);if(u!==-1)throw new RangeError(`La fila ${u+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);const l=s.findIndex(i=>i===0);if(l!==-1)throw new RangeError(`La columna ${l+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);return{observadas:n,numeroFilas:n.length,numeroColumnas:t,totalesFilas:c,totalesColumnas:s,total:p,etiquetasFilas:Eo(a,n.length,"Fila"),etiquetasColumnas:Eo(r,t,"Columna")}}function Lr(e){return e.observadas.map((a,r)=>e.totalesColumnas.map(t=>e.totalesFilas[r]*t/e.total))}function Rr(e){const a=e.flat(),r=a.filter(p=>p<5).length,t=a.filter(p=>p<1).length,n=100*r/a.length,c=Math.min(...a);return{adecuado:t===0&&n<=20,minimo:c,totalCeldas:a.length,menoresQueCinco:r,menoresQueUno:t,porcentajeMenoresQueCinco:n,criterio:"Como guía práctica, ninguna frecuencia esperada debe ser menor que 1 y no más del 20 % de las celdas debería tener una frecuencia esperada menor que 5."}}function ai(e,a){let r=0;const t=e.observadas.map((p,u)=>p.map((l,i)=>{const o=a[u][i],d=(l-o)**2/o;return r+=d,d})),n=e.observadas.map((p,u)=>p.map((l,i)=>{const o=a[u][i];return(l-o)/Math.sqrt(o)})),c=e.observadas.map((p,u)=>p.map((l,i)=>{const o=a[u][i],d=e.totalesFilas[u]/e.total,m=e.totalesColumnas[i]/e.total,f=Math.sqrt(o*(1-d)*(1-m));return f===0?0:(l-o)/f})),s=[];return c.forEach((p,u)=>{p.forEach((l,i)=>{Math.abs(l)>=1.96&&s.push({fila:u,columna:i,residuo:l,direccion:l>0?"más casos de los esperados":"menos casos de los esperados"})})}),{chiCuadrado:r,contribuciones:t,residuosPearson:n,residuosAjustados:c,celdasDestacadas:s}}function l0(e){const a=e[0][0],r=e[0][1],t=e[1][0],n=e[1][1],c=a+r+t+n,s=(a+r)*(t+n)*(a+t)*(r+n);return s===0?0:c*Math.max(0,Math.abs(a*n-r*t)-c/2)**2/s}function c0(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":"Grande"}function ti(e,a){const r=Math.min(e.numeroFilas-1,e.numeroColumnas-1),t=r<=0?0:Math.sqrt(a/(e.total*r));let n=null;if(e.numeroFilas===2&&e.numeroColumnas===2){const[[i,o],[d,m]]=e.observadas,f=Math.sqrt((i+o)*(d+m)*(i+d)*(o+m));n=f===0?0:(i*m-o*d)/f}const c=Math.max(0,a/e.total-(e.numeroColumnas-1)*(e.numeroFilas-1)/(e.total-1)),s=e.numeroFilas-(e.numeroFilas-1)**2/(e.total-1),p=e.numeroColumnas-(e.numeroColumnas-1)**2/(e.total-1),u=Math.min(s-1,p-1),l=e.total<=1||u<=0?t:Math.sqrt(c/u);return{phi:n,vCramer:t,vCramerCorregido:l,magnitud:c0(n??t)}}function kl(e){const a=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-kl(1-e);let r=.9999999999998099;const t=e-1;a.forEach((c,s)=>{r+=c/(t+s+1)});const n=t+a.length-.5;return .5*Math.log(2*Math.PI)+(t+.5)*Math.log(n)-n+Math.log(r)}function fa(e){return kl(e+1)}function tn(e,a){return a<0||a>e?-1/0:fa(e)-fa(a)-fa(e-a)}function rn(e,a,r,t){let n=0;return a.forEach(c=>{n+=fa(c)}),r.forEach(c=>{n+=fa(c)}),n-=fa(t),e.flat().forEach(c=>{n-=fa(c)}),n}function Co(e,a){if(e===-1/0)return a;if(a===-1/0)return e;const r=Math.max(e,a);return r+Math.log(Math.exp(e-r)+Math.exp(a-r))}function El(e,a){Ir(a);const r=e[0][0],t=e[0][1],n=e[1][0],c=e[1][1],s=[r,t,n,c].some(x=>x===0),p=s?.5:0,u=r+p,l=t+p,i=n+p,o=c+p,d=u*o/(l*i),m=Math.sqrt(1/u+1/l+1/i+1/o),f=1-a,g=nr.normal.inv(1-f/2,0,1),b=Math.log(d);return{oddsRatio:d,intervaloConfianza:{nivel:a,inferior:Math.exp(b-g*m),superior:Math.exp(b+g*m),metodo:s?"Intervalo de Wald sobre log(OR) con corrección de Haldane–Anscombe de 0.5 en todas las celdas.":"Intervalo de Wald sobre log(OR)."},correccionAplicada:s,valorCorreccion:p,orientacion:"El odds ratio depende del orden asignado a las filas y columnas de la tabla."}}function $o(e,a,r,t){return Math.exp(tn(r,e)+tn(t-r,a-e)-tn(t,a))}function d0(e){const[[a,r],[t,n]]=e.observadas,c=a+r,s=a+t,p=Math.max(0,c-(e.total-s)),u=Math.min(c,s),l=$o(a,c,s,e.total);let i=0;for(let o=p;o<=u;o+=1){const d=$o(o,c,s,e.total);d<=l+1e-12&&(i+=d)}return{valorP:ir(i),probabilidadObservada:l,rangoCeldaSuperiorIzquierda:{minimo:p,maximo:u},metodo:"Valor p bilateral exacto obtenido al sumar las tablas con probabilidad menor o igual que la tabla observada, condicionando por los márgenes."}}function u0(e,a,r){const t=new Array(a.length).fill(0),n=(c,s)=>{if(c===a.length-1){s>=0&&s<=a[c]&&(t[c]=s,r([...t]));return}const p=a.slice(c+1).reduce((i,o)=>i+o,0),u=Math.max(0,s-p),l=Math.min(a[c],s);for(let i=u;i<=l;i+=1)t[c]=i,n(c+1,s-i)};n(0,e)}function p0(e,a,r,t){const n=e.length,c=Array.from({length:n},()=>new Array(a.length).fill(0));let s=0,p=!1;const u=(l,i)=>{if(!p){if(l===n-1){if(i.reduce((d,m)=>d+m,0)!==e[l])return;if(c[l]=[...i],s+=1,s>t){p=!0;return}r(c.map(d=>[...d]));return}u0(e[l],i,o=>{if(p)return;c[l]=o;const d=i.map((m,f)=>m-o[f]);u(l+1,d)})}};return u(0,[...a]),{cantidad:Math.min(s,t),excedido:p}}function m0(e,a){const r=new Array(a.length).fill(0);let t=a.reduce((n,c)=>n+c,0);for(let n=0;n<e;n+=1){let c=Math.random()*t,s=a.length-1;for(let p=0;p<a.length;p+=1)if(c-=a[p],c<0){s=p;break}r[s]+=1,a[s]-=1,t-=1}return r}function f0(e,a){const r=[...a],t=[];for(let n=0;n<e.length-1;n+=1)t.push(m0(e[n],r));return t.push([...r]),t}function b0(e,{maximoTablasExactas:a,simulaciones:r}){const t=rn(e.observadas,e.totalesFilas,e.totalesColumnas,e.total);let n=-1/0,c=-1/0;const s=p0(e.totalesFilas,e.totalesColumnas,l=>{const i=rn(l,e.totalesFilas,e.totalesColumnas,e.total);n=Co(n,i),i<=t+1e-12&&(c=Co(c,i))},a);if(!s.excedido)return{valorP:c===-1/0?0:ir(Math.exp(c-n)),exacta:!0,metodo:"Prueba exacta de Fisher–Freeman–Halton mediante enumeración completa de las tablas compatibles con los márgenes.",tablasEvaluadas:s.cantidad,simulaciones:0,errorMonteCarlo:0};let p=0;for(let l=0;l<r;l+=1){const i=f0(e.totalesFilas,e.totalesColumnas);rn(i,e.totalesFilas,e.totalesColumnas,e.total)<=t+1e-12&&(p+=1)}const u=(p+1)/(r+1);return{valorP:u,exacta:!1,metodo:"Aproximación Monte Carlo de la prueba Fisher–Freeman–Halton, condicionada por los márgenes observados.",tablasEvaluadas:s.cantidad,simulaciones:r,errorMonteCarlo:Math.sqrt(u*(1-u)/(r+1))}}function ri(e,a,r,t,n){return{tabla:{observadas:e.observadas,esperadas:a,totalesFilas:e.totalesFilas,totalesColumnas:e.totalesColumnas,total:e.total,etiquetasFilas:e.etiquetasFilas,etiquetasColumnas:e.etiquetasColumnas,numeroFilas:e.numeroFilas,numeroColumnas:e.numeroColumnas},residuos:{pearson:r.residuosPearson,ajustados:r.residuosAjustados,celdasDestacadas:r.celdasDestacadas},contribucionesChiCuadrado:r.contribuciones,diagnosticoFrecuenciasEsperadas:t,tamanioEfecto:n}}function Ao(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=a;Ir(r);const c=Pr(e,t,n),s=Lr(c),p=Rr(s),u=ai(c,s),l=(c.numeroFilas-1)*(c.numeroColumnas-1),i=ir(1-nr.chisquare.cdf(u.chiCuadrado,l)),o=ti(c,u.chiCuadrado),d=1-r,m=c.numeroFilas===2&&c.numeroColumnas===2,f=m?l0(c.observadas):null,g=m?ir(1-nr.chisquare.cdf(f,1)):null,b=m?El(c.observadas,r):null;return{id:m?"chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-rxc",nombre:"Prueba chi-cuadrado de independencia",metodo:"Comparación de frecuencias observadas y esperadas bajo la hipótesis de independencia.",estadistico:{simbolo:"χ²",valor:u.chiCuadrado},gradosLibertad:l,valorP:i,nivelConfianza:r,alfa:d,significativo:i<d,correccionYates:m?{estadistico:f,valorP:g,significativo:g<d,disponible:!0}:{disponible:!1},oddsRatio:b,advertencias:p.adecuado?[]:["Las frecuencias esperadas no satisfacen completamente la guía práctica para la aproximación chi-cuadrado. Considere una prueba exacta o Monte Carlo."],...ri(c,s,u,p,o)}}function Cn(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=a;Ir(r);const c=Pr(e,t,n);if(c.numeroFilas!==2||c.numeroColumnas!==2)throw new RangeError("La prueba exacta de Fisher requiere una tabla 2 × 2.");const s=Lr(c),p=Rr(s),u=ai(c,s),l=ti(c,u.chiCuadrado),i=d0(c),o=El(c.observadas,r),d=1-r;return{id:"fisher-exacta-2x2",nombre:"Prueba exacta de Fisher",metodo:i.metodo,estadistico:{simbolo:"p exacta",valor:i.probabilidadObservada},gradosLibertad:null,valorP:i.valorP,nivelConfianza:r,alfa:d,significativo:i.valorP<d,oddsRatio:o,detallesExactos:i,advertencias:[],...ri(c,s,u,p,l)}}function Io(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:c=1e5,simulaciones:s=1e4}=a;if(Ir(r),!Number.isInteger(c)||c<100)throw new RangeError("El máximo de tablas exactas debe ser un entero de al menos 100.");if(!Number.isInteger(s)||s<1e3)throw new RangeError("El número de simulaciones debe ser un entero de al menos 1000.");const p=Pr(e,t,n);if(p.numeroFilas===2&&p.numeroColumnas===2)return Cn(e,{nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n});const u=Lr(p),l=Rr(u),i=ai(p,u),o=ti(p,i.chiCuadrado),d=b0(p,{maximoTablasExactas:c,simulaciones:s}),m=1-r;return{id:"fisher-freeman-halton",nombre:"Prueba de Fisher–Freeman–Halton",metodo:d.metodo,estadistico:{simbolo:"χ² descriptivo",valor:i.chiCuadrado},gradosLibertad:(p.numeroFilas-1)*(p.numeroColumnas-1),valorP:d.valorP,nivelConfianza:r,alfa:m,significativo:d.valorP<m,detallesExactos:d,advertencias:d.exacta?[]:["El espacio de tablas fue demasiado grande para una enumeración completa; el valor p se estimó mediante Monte Carlo."],...ri(p,u,i,l,o)}}function g0({tabla:e,prueba:a="automatico",nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:c=1e5,simulaciones:s=1e4}){const p={nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n,maximoTablasExactas:c,simulaciones:s};if(a==="automatico"){const u=Pr(e,t,n),l=Lr(u);return Rr(l).adecuado?Ao(e,p):u.numeroFilas===2&&u.numeroColumnas===2?Cn(e,p):Io(e,p)}switch(a){case"chi-cuadrado":case"chi-cuadrado-independencia":case"chi-cuadrado-independencia-2x2":case"chi-cuadrado-independencia-rxc":return Ao(e,p);case"fisher":case"fisher-exacta":case"fisher-exacta-2x2":return Cn(e,p);case"fisher-freeman-halton":return Io(e,p);default:throw new Error("La prueba de asociación solicitada no está disponible.")}}function h0(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a correlación y asociación
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Asociación entre variables categóricas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Tablas 2 × 2 y r × c
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Selección automática
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Residuos ajustados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${nn("Chi-cuadrado de independencia","Úselo cuando las frecuencias esperadas sean adecuadas. Funciona con tablas 2 × 2 y r × c.")}
                    ${nn("Prueba exacta de Fisher","Corresponde a tablas 2 × 2 con muestras pequeñas o frecuencias esperadas bajas.")}
                    ${nn("Fisher–Freeman–Halton","Extiende el análisis exacto a tablas mayores que 2 × 2. La calculadora utiliza enumeración completa o Monte Carlo.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Frecuencias absolutas
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Introduzca conteos enteros, no porcentajes. Cada participante debe contribuir a una sola celda de la tabla.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Interpretación
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        La significación global debe interpretarse junto con Phi o V de Cramer y con los residuos ajustados de cada celda.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-asociacion-categorica"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Procedimiento
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="automatico">Selección automática</option>
                            <option value="chi-cuadrado-independencia">Chi-cuadrado de independencia</option>
                            <option value="fisher-exacta-2x2">Prueba exacta de Fisher 2 × 2</option>
                            <option value="fisher-freeman-halton">Fisher–Freeman–Halton</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900">
                            Tabla de contingencia
                        </h2>
                        <p class="text-sm text-slate-500 mt-1">
                            Edite las etiquetas y las frecuencias observadas.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <button
                            type="button"
                            data-action="agregar-fila"
                            class="rounded-xl border border-violet-300 text-violet-700 font-black px-4 py-2 hover:bg-violet-50"
                        >
                            + Fila
                        </button>
                        <button
                            type="button"
                            data-action="quitar-fila"
                            class="rounded-xl border border-slate-300 text-slate-700 font-black px-4 py-2 hover:bg-slate-50"
                        >
                            − Fila
                        </button>
                        <button
                            type="button"
                            data-action="agregar-columna"
                            class="rounded-xl border border-violet-300 text-violet-700 font-black px-4 py-2 hover:bg-violet-50"
                        >
                            + Columna
                        </button>
                        <button
                            type="button"
                            data-action="quitar-columna"
                            class="rounded-xl border border-slate-300 text-slate-700 font-black px-4 py-2 hover:bg-slate-50"
                        >
                            − Columna
                        </button>
                    </div>
                </div>

                <div
                    id="contenedor-tabla-contingencia"
                    class="overflow-x-auto rounded-2xl border border-slate-200"
                ></div>

                <div
                    id="mensaje-error-asociacion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>

                <p class="mt-5 text-xs text-slate-500 leading-relaxed">
                    Los cálculos se realizan localmente en el navegador. Para tablas grandes, la prueba exacta puede utilizar una estimación Monte Carlo.
                </p>
            </form>
        </section>

        <section
            id="resultados-asociacion-categorica"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-asociacion-categorica"),r=e.querySelector("#contenedor-tabla-contingencia"),t=e.querySelector("#mensaje-error-asociacion"),n=e.querySelector("#resultados-asociacion-categorica");let c=2,s=2;const p=sessionStorage.getItem("kernel-prueba-asociacion-categorica");return["chi-cuadrado-independencia-2x2","chi-cuadrado-independencia-rxc","fisher-exacta-2x2","fisher-freeman-halton"].includes(p)&&(a.elements.prueba.value=p.startsWith("chi-cuadrado")?"chi-cuadrado-independencia":p),sessionStorage.removeItem("kernel-prueba-asociacion-categorica"),da(r,c,s),a.addEventListener("submit",u=>{u.preventDefault(),on(t);try{const l=Cl(r),i=g0({tabla:l.tabla,etiquetasFilas:l.etiquetasFilas,etiquetasColumnas:l.etiquetasColumnas,prueba:a.elements.prueba.value,nivelConfianza:Number(a.elements.nivelConfianza.value),maximoTablasExactas:5e4,simulaciones:1e4});n.innerHTML=E0(i),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(l){n.classList.add("hidden"),Ha(t,l instanceof Error?l.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",u=>{const l=u.target.closest("[data-action]");if(!l)return;const i=l.dataset.action;if(i==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}const o=x0(r);if(i==="agregar-fila"){if(c>=6){Ha(t,"Esta interfaz admite hasta seis filas.");return}c+=1,da(r,c,s,o),y0(r,c),n.classList.add("hidden");return}if(i==="quitar-fila"){if(c<=2){Ha(t,"La tabla debe conservar al menos dos filas.");return}c-=1,da(r,c,s,o),n.classList.add("hidden");return}if(i==="agregar-columna"){if(s>=6){Ha(t,"Esta interfaz admite hasta seis columnas.");return}s+=1,da(r,c,s,o),w0(r,s),n.classList.add("hidden");return}if(i==="quitar-columna"){if(s<=2){Ha(t,"La tabla debe conservar al menos dos columnas.");return}s-=1,da(r,c,s,o),n.classList.add("hidden");return}if(i==="cargar-ejemplo"){const d=a.elements.prueba.value,m=k0(d);c=m.tabla.length,s=m.tabla[0].length,da(r,c,s),v0(r,m),a.elements.nivelConfianza.value="0.95",n.classList.add("hidden"),on(t);return}i==="limpiar"&&(c=2,s=2,a.reset(),da(r,c,s),n.innerHTML="",n.classList.add("hidden"),on(t))}),e}function nn(e,a){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${a}
                </p>
            </div>
        </article>
    `}function da(e,a,r,t=null){const n=Array.from({length:r},(s,p)=>`
            <th class="min-w-[145px] bg-slate-100 px-3 py-3">
                <input
                    type="text"
                    data-etiqueta-columna="${p}"
                    value="${sn(t?.etiquetasColumnas?.[p]??`Columna ${p+1}`)}"
                    class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                    aria-label="Etiqueta de la columna ${p+1}"
                >
            </th>
        `).join(""),c=Array.from({length:a},(s,p)=>{const u=Array.from({length:r},(l,i)=>`
                    <td class="px-3 py-3">
                        <input
                            type="number"
                            min="0"
                            step="1"
                            inputmode="numeric"
                            data-frecuencia
                            data-fila="${p}"
                            data-columna="${i}"
                            value="${sn(t?.tabla?.[p]?.[i]??"")}"
                            class="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-right font-mono text-slate-900"
                            aria-label="Frecuencia de la fila ${p+1}, columna ${i+1}"
                        >
                    </td>
                `).join("");return`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 min-w-[170px] bg-slate-50 px-3 py-3 z-10">
                        <input
                            type="text"
                            data-etiqueta-fila="${p}"
                            value="${sn(t?.etiquetasFilas?.[p]??`Fila ${p+1}`)}"
                            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                            aria-label="Etiqueta de la fila ${p+1}"
                        >
                    </th>
                    ${u}
                </tr>
            `}).join("");e.innerHTML=`
        <table class="min-w-full text-sm">
            <thead>
                <tr>
                    <th class="sticky left-0 min-w-[170px] bg-slate-200 px-3 py-3 text-left font-black text-slate-700 z-20">
                        Categorías
                    </th>
                    ${n}
                </tr>
            </thead>
            <tbody>
                ${c}
            </tbody>
        </table>
    `}function x0(e){try{return Cl(e,!1)}catch{return{tabla:[],etiquetasFilas:[],etiquetasColumnas:[]}}}function Cl(e,a=!0){const r=[...e.querySelectorAll("[data-etiqueta-fila]")].map((p,u)=>p.value.trim()||`Fila ${u+1}`),t=[...e.querySelectorAll("[data-etiqueta-columna]")].map((p,u)=>p.value.trim()||`Columna ${u+1}`),n=r.length,c=t.length,s=Array.from({length:n},()=>new Array(c).fill(""));return[...e.querySelectorAll("[data-frecuencia]")].forEach(p=>{const u=Number(p.dataset.fila),l=Number(p.dataset.columna),i=p.value.trim();if(a&&i==="")throw new Error(`Complete la frecuencia de la celda (${u+1}, ${l+1}).`);s[u][l]=i}),{tabla:s,etiquetasFilas:r,etiquetasColumnas:t}}function v0(e,a){a.etiquetasFilas.forEach((r,t)=>{e.querySelector(`[data-etiqueta-fila="${t}"]`).value=r}),a.etiquetasColumnas.forEach((r,t)=>{e.querySelector(`[data-etiqueta-columna="${t}"]`).value=r}),a.tabla.forEach((r,t)=>{r.forEach((n,c)=>{e.querySelector(`[data-fila="${t}"][data-columna="${c}"]`).value=n})})}function y0(e,a){const r=e.querySelector(`[data-etiqueta-fila="${a-1}"]`);r&&(r.value=`Fila ${a}`)}function w0(e,a){const r=e.querySelector(`[data-etiqueta-columna="${a-1}"]`);r&&(r.value=`Columna ${a}`)}function k0(e){return e==="fisher-exacta-2x2"?{etiquetasFilas:["Intervención","Control"],etiquetasColumnas:["Aprobó","No aprobó"],tabla:[[8,2],[1,5]]}:e==="fisher-freeman-halton"?{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[1,4,2],[3,1,1],[1,2,5]]}:{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[18,22,10],[30,15,5],[12,20,18]]}}function E0(e){const a=Math.round(e.nivelConfianza*100),r=e.significativo,t=r?`Se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${be(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${be(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${St(e.estadistico.simbolo,Da(e.estadistico.valor),"Estadístico principal")}
                    ${St("p",M0(e.valorP),e.detallesExactos?.exacta===!1?"Valor p Monte Carlo":"Valor p bilateral")}
                    ${St("N",e.tabla.total,"Observaciones")}
                    ${St("gl",e.gradosLibertad??"—","Grados de libertad")}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${C0(e)}
                    ${$0(e)}
                </div>

                ${A0(e)}
                ${I0(e)}
                ${P0(e)}
                ${L0(e)}
                ${R0(e)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t} La magnitud orientativa de la asociación es ${e.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${a} %. Una asociación estadística no demuestra causalidad. Examine también los residuos ajustados y la calidad del diseño muestral.
                    </p>
                </article>
            </div>
        </section>
    `}function St(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function C0(e){const a=e.tamanioEfecto;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Tamaño de la asociación
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${e.tabla.numeroFilas===2&&e.tabla.numeroColumnas===2?ae("Phi",a.phi):""}
                ${ae("V de Cramer",a.vCramer)}
                ${ae("V corregido",a.vCramerCorregido)}
                ${ae("Magnitud",a.magnitud,!0)}
            </dl>
        </article>
    `}function $0(e){const a=e.diagnosticoFrecuenciasEsperadas;return`
        <article class="rounded-2xl border ${a.adecuado?"border-emerald-200 bg-emerald-50":"border-amber-200 bg-amber-50"} p-6">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                Frecuencias esperadas
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${ae("Mínima esperada",a.minimo)}
                ${ae("Celdas < 5",a.menoresQueCinco)}
                ${ae("Porcentaje < 5",a.porcentajeMenoresQueCinco,!1," %")}
                ${ae("Celdas < 1",a.menoresQueUno)}
            </dl>
            <p class="text-sm text-slate-700 leading-relaxed mt-4">
                ${be(a.criterio)}
            </p>
        </article>
    `}function A0(e){const a=e.tabla,r=a.etiquetasColumnas.map(n=>`
                    <th class="px-4 py-3 text-center min-w-[150px]">
                        ${be(n)}
                    </th>
                `).join(""),t=a.observadas.map((n,c)=>`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 bg-slate-50 px-4 py-4 text-left font-black text-slate-900 z-10">
                        ${be(a.etiquetasFilas[c])}
                    </th>
                    ${n.map((s,p)=>{const u=a.esperadas[c][p],l=e.residuos.ajustados[c][p],i=Math.abs(l)>=1.96;return`
                                    <td class="px-4 py-4 text-center ${i?"bg-amber-50":""}">
                                        <p class="font-black text-slate-900">
                                            ${s}
                                        </p>
                                        <p class="text-xs text-slate-500 mt-1">
                                            Esperada: ${Da(u)}
                                        </p>
                                        <p class="text-xs ${i?"text-amber-800 font-black":"text-slate-500"} mt-1">
                                            Residuo ajustado: ${Da(l)}
                                        </p>
                                    </td>
                                `}).join("")}
                </tr>
            `).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Frecuencias observadas, esperadas y residuos
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="sticky left-0 bg-slate-200 px-4 py-3 text-left z-20">
                                Categoría
                            </th>
                            ${r}
                        </tr>
                    </thead>
                    <tbody>
                        ${t}
                    </tbody>
                </table>
            </div>
        </article>
    `}function I0(e){if(!e.oddsRatio)return"";const a=e.oddsRatio,r=e.correccionYates;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Odds ratio
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${ae("OR",a.oddsRatio)}
                    ${ae("IC inferior",a.intervaloConfianza.inferior)}
                    ${ae("IC superior",a.intervaloConfianza.superior)}
                    ${ae("Corrección 0.5",a.correccionAplicada?"Aplicada":"No aplicada",!0)}
                </dl>
                <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                    ${be(a.intervaloConfianza.metodo)}
                </p>
            </article>

            ${r?.disponible?`
                        <article class="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                            <h3 class="text-xl font-black text-sky-950 mb-5">
                                Corrección de continuidad de Yates
                            </h3>
                            <dl class="grid grid-cols-2 gap-4">
                                ${ae("χ² de Yates",r.estadistico)}
                                ${ae("p de Yates",r.valorP)}
                            </dl>
                            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                                Se muestra como resultado complementario para tablas 2 × 2.
                            </p>
                        </article>
                    `:""}
        </div>
    `}function P0(e){const a=e.detallesExactos;return a?`
        <article class="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 class="text-xl font-black text-indigo-950 mb-5">
                Detalles del procedimiento exacto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${typeof a.exacta=="boolean"?ae("Procedimiento",a.exacta?"Exacto":"Monte Carlo",!0):ae("Procedimiento","Exacto 2 × 2",!0)}
                ${Number.isFinite(a.tablasEvaluadas)?ae("Tablas evaluadas",a.tablasEvaluadas):""}
                ${Number.isFinite(a.simulaciones)&&a.simulaciones>0?ae("Simulaciones",a.simulaciones):""}
                ${Number.isFinite(a.errorMonteCarlo)&&a.errorMonteCarlo>0?ae("Error Monte Carlo",a.errorMonteCarlo):""}
            </dl>
            <p class="text-sm text-indigo-900 mt-4 leading-relaxed">
                ${be(e.metodo)}
            </p>
        </article>
    `:""}function L0(e){const a=e.residuos.celdasDestacadas;return a.length?`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Celdas que contribuyen a la asociación
            </h3>
            <ul class="space-y-3 text-amber-900">
                ${a.map(r=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>
                                    ${be(e.tabla.etiquetasFilas[r.fila])} ×
                                    ${be(e.tabla.etiquetasColumnas[r.columna])}:
                                    ${be(r.direccion)}
                                    (residuo = ${Da(r.residuo)}).
                                </span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:`
            <article class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 class="text-xl font-black text-slate-900 mb-2">
                    Residuos ajustados
                </h3>
                <p class="text-slate-600 leading-relaxed">
                    Ninguna celda presenta un residuo ajustado con magnitud igual o superior a 1.96.
                </p>
            </article>
        `}function R0(e){return e.advertencias?.length?`
        <article class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 class="text-xl font-black text-red-950 mb-4">
                Advertencias
            </h3>
            <ul class="space-y-2 text-red-900">
                ${e.advertencias.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>${be(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:""}function ae(e,a,r=!1,t=""){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?be(a):`${Da(a)}${t}`}
            </dd>
        </div>
    `}function Da(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function M0(e){return Number.isFinite(e)?e<.001?"< 0.001":Da(e,4):"—"}function Ha(e,a){e.textContent=a,e.classList.remove("hidden")}function on(e){e.textContent="",e.classList.add("hidden")}function be(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function sn(e){return be(e)}const ha=1e-12,we=e=>e.reduce((a,r)=>a+r,0),or=e=>[...e].sort((a,r)=>a-r),ua=e=>Math.abs(e)<ha?0:e;function Ea(e,a){if(!e.length)throw new Error("No hay datos para calcular cuantiles.");if(a<=0)return e[0];if(a>=1)return e.at(-1);const r=(e.length-1)*a,t=Math.floor(r),n=Math.ceil(r);return t===n?e[t]:e[t]*(n-r)+e[n]*(r-t)}function T0(e){const a=new Map;e.forEach(n=>{a.set(n,(a.get(n)||0)+1)});const r=Math.max(...a.values());if(r===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const t=[...a].filter(([,n])=>n===r).map(([n])=>n).sort((n,c)=>n-c);return{valores:t,frecuencia:r,tipo:t.length===1?"unimodal":"multimodal"}}function $l(e,a,r,t){const n=a/e,c=e>1?a/(e-1):null;let s=null,p=null;if(e>=3&&a>ha){const u=r/e/(a/e)**1.5;s=Math.sqrt(e*(e-1))/(e-2)*u}if(e>=4&&a>ha){const u=t/e/(a/e)**2-3;p=(e-1)/((e-2)*(e-3))*((e+1)*u+6)}return{sumaCuadrados:ua(a),varianzaPoblacional:ua(n),varianzaMuestral:c===null?null:ua(c),desviacionPoblacional:ua(Math.sqrt(n)),desviacionMuestral:c===null?null:ua(Math.sqrt(c)),asimetria:s===null?null:ua(s),curtosisExceso:p===null?null:ua(p)}}function N0(e,a){let r=0,t=0,n=0;return e.forEach(c=>{const s=c-a;r+=s**2,t+=s**3,n+=s**4}),$l(e.length,r,t,n)}function Al(e,a,r){let t=0,n=0,c=0;return e.forEach(({valor:s,frecuencia:p})=>{const u=s-a;t+=p*u**2,n+=p*u**3,c+=p*u**4}),$l(r,t,n,c)}function S0(e){if(!Array.isArray(e))throw new Error("Los datos deben proporcionarse en una lista.");const a=e.map(Number);if(a.length<2)throw new Error("Introduzca al menos dos observaciones numéricas.");if(!a.every(Number.isFinite))throw new Error("Todos los datos deben ser números válidos.");return a}function z0(e){const a=new Map;or(e).forEach(t=>{a.set(t,(a.get(t)||0)+1)});let r=0;return[...a].map(([t,n])=>(r+=n,{valor:t,frecuencia:n,frecuenciaRelativa:n/e.length,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/e.length}))}function _0(e){const a=or(e),r=a.length,t=we(a)/r,n=Ea(a,.5),c=Ea(a,.25),s=Ea(a,.75),p=s-c,u=c-1.5*p,l=s+1.5*p,i=a.filter(f=>f>=u&&f<=l),o=a.filter(f=>f<u||f>l),d=N0(a,t),m=or(a.map(f=>Math.abs(f-n)));return{n:r,suma:we(a),minimo:a[0],maximo:a.at(-1),rango:a.at(-1)-a[0],media:t,mediana:n,moda:T0(a),q1:c,q3:s,iqr:p,percentiles:{p10:Ea(a,.1),p25:c,p50:n,p75:s,p90:Ea(a,.9)},desviacionMedia:a.reduce((f,g)=>f+Math.abs(g-t),0)/r,mad:Ea(m,.5),coeficienteVariacion:d.desviacionMuestral!==null&&Math.abs(t)>ha?Math.abs(d.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:u,superior:l},bigotesCaja:{inferior:i[0],superior:i.at(-1)},atipicos:o,atipicosCantidad:o.length,...d}}function D0(e,a){if(!Array.isArray(e)||!Array.isArray(a)||e.length!==a.length||!e.length)throw new Error("Los valores y las frecuencias deben tener la misma cantidad de filas.");const r=new Map;e.forEach((c,s)=>{const p=Number(c),u=Number(a[s]);if(!Number.isFinite(p))throw new Error(`El valor de la fila ${s+1} no es válido.`);if(!Number.isInteger(u)||u<0)throw new Error(`La frecuencia de la fila ${s+1} debe ser un entero no negativo.`);r.set(p,(r.get(p)||0)+u)});const t=[...r].map(([c,s])=>({valor:c,frecuencia:s})).filter(({frecuencia:c})=>c>0).sort((c,s)=>c.valor-s.valor),n=we(t.map(({frecuencia:c})=>c));if(n<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return{filas:t,n}}function Po(e,a){let r=0;for(const t of e)if(r+=t.frecuencia,a<r)return t.valor;return e.at(-1).valor}function Ca(e,a,r){if(r<=0)return e[0].valor;if(r>=1)return e.at(-1).valor;const t=(a-1)*r,n=Math.floor(t),c=Math.ceil(t),s=Po(e,n),p=Po(e,c);return n===c?s:s*(c-t)+p*(t-n)}function q0(e){const a=Math.max(...e.map(({frecuencia:t})=>t));if(a===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const r=e.filter(({frecuencia:t})=>t===a).map(({valor:t})=>t);return{valores:r,frecuencia:a,tipo:r.length===1?"unimodal":"multimodal"}}function O0(e,a){let r=0;return e.map(({valor:t,frecuencia:n})=>(r+=n,{valor:t,frecuencia:n,frecuenciaRelativa:n/a,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/a}))}function F0(e,a){const r=we(e.map(({valor:b,frecuencia:x})=>b*x)),t=r/a,n=Ca(e,a,.5),c=Ca(e,a,.25),s=Ca(e,a,.75),p=s-c,u=c-1.5*p,l=s+1.5*p,i=e.filter(({valor:b})=>b>=u&&b<=l),o=e.filter(({valor:b})=>b<u||b>l),d=Al(e,t,a),m=new Map;e.forEach(({valor:b,frecuencia:x})=>{const y=Math.abs(b-n);m.set(y,(m.get(y)||0)+x)});const f=[...m].map(([b,x])=>({valor:b,frecuencia:x})).sort((b,x)=>b.valor-x.valor),g=we(o.map(({frecuencia:b})=>b));return{n:a,suma:r,minimo:e[0].valor,maximo:e.at(-1).valor,rango:e.at(-1).valor-e[0].valor,media:t,mediana:n,moda:q0(e),q1:c,q3:s,iqr:p,percentiles:{p10:Ca(e,a,.1),p25:c,p50:n,p75:s,p90:Ca(e,a,.9)},desviacionMedia:we(e.map(({valor:b,frecuencia:x})=>Math.abs(b-t)*x))/a,mad:Ca(f,a,.5),coeficienteVariacion:d.desviacionMuestral!==null&&Math.abs(t)>ha?Math.abs(d.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:u,superior:l},bigotesCaja:{inferior:i[0].valor,superior:i.at(-1).valor},atipicos:o.map(({valor:b})=>b),atipicosCantidad:g,atipicosFrecuencias:o,...d}}function U0(e){if(!Array.isArray(e)||e.length<2)throw new Error("Introduzca al menos dos intervalos de clase.");const a=e.map((r,t)=>{const n=Number(r.limiteInferior),c=Number(r.limiteSuperior),s=Number(r.frecuencia);if(!Number.isFinite(n)||!Number.isFinite(c)||c<=n)throw new Error(`Los límites de la clase ${t+1} no son válidos.`);if(!Number.isInteger(s)||s<0)throw new Error(`La frecuencia de la clase ${t+1} debe ser un entero no negativo.`);return{limiteInferior:n,limiteSuperior:c,frecuencia:s,marcaClase:(n+c)/2,amplitud:c-n}}).sort((r,t)=>r.limiteInferior-t.limiteInferior);for(let r=1;r<a.length;r+=1)if(a[r].limiteInferior<a[r-1].limiteSuperior-ha)throw new Error("Los intervalos de clase no deben superponerse.");if(we(a.map(({frecuencia:r})=>r))<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return a}function Wa(e,a,r){const t=a*r;let n=0;for(const c of e){const s=n+c.frecuencia;if(t<=s||c===e.at(-1))return c.frecuencia===0?c.marcaClase:c.limiteInferior+(t-n)/c.frecuencia*c.amplitud;n=s}return e.at(-1).limiteSuperior}function j0(e){const a=Math.max(...e.map(({frecuencia:u})=>u)),r=e.findIndex(({frecuencia:u})=>u===a),t=e[r];if(a===0)return null;const n=r?e[r-1].frecuencia:0,c=r<e.length-1?e[r+1].frecuencia:0,s=a-n,p=a-c;return{valor:s+p>0?t.limiteInferior+s/(s+p)*t.amplitud:t.marcaClase,intervalo:{inferior:t.limiteInferior,superior:t.limiteSuperior},frecuencia:a}}function V0(e){const a=we(e.map(({frecuencia:l})=>l)),r=we(e.map(({marcaClase:l,frecuencia:i})=>l*i)),t=r/a,n=Al(e.map(({marcaClase:l,frecuencia:i})=>({valor:l,frecuencia:i})),t,a),c=Wa(e,.25,a),s=Wa(e,.5,a),p=Wa(e,.75,a),u=p-c;return{n:a,suma:r,minimo:e[0].limiteInferior,maximo:e.at(-1).limiteSuperior,rango:e.at(-1).limiteSuperior-e[0].limiteInferior,media:t,mediana:s,moda:j0(e),q1:c,q3:p,iqr:u,percentiles:{p10:Wa(e,.1,a),p25:c,p50:s,p75:p,p90:Wa(e,.9,a)},desviacionMedia:we(e.map(({marcaClase:l,frecuencia:i})=>Math.abs(l-t)*i))/a,mad:null,coeficienteVariacion:n.desviacionMuestral!==null&&Math.abs(t)>ha?Math.abs(n.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:c-1.5*u,superior:p+1.5*u},bigotesCaja:{inferior:e[0].limiteInferior,superior:e.at(-1).limiteSuperior},atipicos:[],atipicosCantidad:0,advertenciaAtipicos:"Con datos agrupados no es posible identificar observaciones atípicas individuales; los límites son aproximados.",...n}}function B0(e){const a=we(e.map(({frecuencia:t})=>t));let r=0;return e.map(t=>(r+=t.frecuencia,{intervalo:{inferior:t.limiteInferior,superior:t.limiteSuperior},marcaClase:t.marcaClase,amplitud:t.amplitud,frecuencia:t.frecuencia,frecuenciaRelativa:t.frecuencia/a,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/a}))}function ni(e,a){const r=e.asimetria===null?"Asimetría no disponible":Math.abs(e.asimetria)<.5?"Distribución aproximadamente simétrica":e.asimetria>0?"Distribución con asimetría positiva":"Distribución con asimetría negativa",t=e.curtosisExceso===null?"Curtosis no disponible":Math.abs(e.curtosisExceso)<.5?"Curtosis próxima a mesocúrtica":e.curtosisExceso>0?"Distribución leptocúrtica":"Distribución platicúrtica",n=e.atipicosCantidad??e.atipicos.length;return[`La media es ${e.media.toFixed(3)} y la mediana es ${e.mediana.toFixed(3)}.`,`La desviación estándar muestral es ${e.desviacionMuestral?.toFixed(3)??"no disponible"}.`,e.coeficienteVariacion===null?"El coeficiente de variación no es interpretable cuando la media es cero.":`El coeficiente de variación es ${e.coeficienteVariacion.toFixed(2)} %.`,`${r}.`,`${t}.`,a?e.advertenciaAtipicos:n?`Se detectaron ${n} valores atípicos potenciales mediante el criterio de Tukey.`:"No se detectaron valores atípicos potenciales mediante el criterio de Tukey."]}function G0(e){const a=S0(e),r=_0(a),t=z0(a);return{tipoDatos:"individuales",aproximado:!1,resumen:r,tablaFrecuencias:t,datosGrafico:{valores:or(a),frecuencias:t},interpretacion:ni(r,!1)}}function H0({valores:e,frecuencias:a}){const{filas:r,n:t}=D0(e,a),n=F0(r,t),c=O0(r,t);return{tipoDatos:"frecuencias",aproximado:!1,resumen:n,tablaFrecuencias:c,datosGrafico:{frecuencias:c},datosOriginales:{valores:r.map(({valor:s})=>s),frecuencias:r.map(({frecuencia:s})=>s)},interpretacion:ni(n,!1)}}function W0(e){const a=U0(e),r=V0(a),t=B0(a);return{tipoDatos:"intervalos",aproximado:!0,resumen:r,tablaFrecuencias:t,datosGrafico:{clases:t},interpretacion:ni(r,!0),advertencias:["Las medidas se estiman mediante marcas de clase e interpolación dentro de los intervalos."]}}function K0({tipoDatos:e="individuales",valores:a=[],frecuencias:r=[],clases:t=[]}){if(e==="individuales")return G0(a);if(e==="frecuencias")return H0({valores:a,frecuencias:r});if(e==="intervalos")return W0(t);throw new Error("El tipo de datos seleccionado no está disponible.")}function Y0(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">
                    Análisis exploratorio de datos
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Estadística descriptiva
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Resuma datos individuales, distribuciones de frecuencias o intervalos de clase mediante medidas de posición, dispersión, forma y representaciones gráficas.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Tendencia central</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Cuartiles y percentiles</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Atípicos y gráficos</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
                    Orientación
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Seleccione la estructura de sus datos
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${ln("Observaciones individuales","Cada número representa una observación. Es la opción adecuada cuando dispone de los datos originales.")}
                    ${ln("Valores con frecuencias","Utilícelo cuando cada valor aparece acompañado por su frecuencia absoluta.")}
                    ${ln("Intervalos de clase","Úselo cuando los datos solo están disponibles en intervalos. Las medidas obtenidas serán aproximadas.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Importante
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Las frecuencias deben ser enteros no negativos. Los intervalos no deben superponerse y su límite superior debe ser mayor que el inferior.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-estadistica-descriptiva"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <label class="block">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Tipo de entrada
                    </span>
                    <select
                        name="tipoDatos"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-500"
                    >
                        <option value="individuales">Observaciones individuales</option>
                        <option value="frecuencias">Valores con frecuencias</option>
                        <option value="intervalos">Intervalos de clase</option>
                    </select>
                </label>

                <div id="entrada-datos-descriptivos" class="mt-6"></div>

                <div
                    id="mensaje-error-descriptiva"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-sky-700 text-white font-black rounded-xl px-7 py-4 hover:bg-sky-800 transition-colors shadow-lg"
                    >
                        Calcular descriptivos
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-sky-300 text-sky-700 font-black rounded-xl px-6 py-4 hover:bg-sky-50 transition-colors"
                    >
                        Cargar ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-estadistica-descriptiva"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-estadistica-descriptiva"),r=e.querySelector("#entrada-datos-descriptivos"),t=e.querySelector("#mensaje-error-descriptiva"),n=e.querySelector("#resultados-estadistica-descriptiva"),c=()=>{r.innerHTML=J0(a.elements.tipoDatos.value),n.classList.add("hidden"),zt(t)};return c(),a.elements.tipoDatos.addEventListener("change",c),a.addEventListener("submit",s=>{s.preventDefault(),zt(t);try{const p=a.elements.tipoDatos.value,u=X0(p,r),l=K0(u);n.innerHTML=eh(l),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){n.classList.add("hidden"),lh(t,p instanceof Error?p.message:"No fue posible calcular los descriptivos.")}}),e.addEventListener("click",s=>{const p=s.target.closest("[data-action]");if(!p)return;const u=p.dataset.action;if(u==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(u==="cargar-ejemplo"){Z0(a.elements.tipoDatos.value,r),n.classList.add("hidden"),zt(t);return}if(u==="limpiar"){const l=r.querySelector("textarea");l&&(l.value=""),n.classList.add("hidden"),zt(t)}}),e}function ln(e,a){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">
                ${e}
            </h3>
            <p>${a}</p>
        </div>
    `}function J0(e){const r={individuales:{titulo:"Observaciones",ayuda:"Separe los valores mediante comas, espacios, punto y coma o saltos de línea.",marcador:"12, 15, 18, 18, 20, 22, 25, 27"},frecuencias:{titulo:"Valor y frecuencia",ayuda:"Escriba una fila por valor con el formato: valor, frecuencia.",marcador:`10, 3
12, 5
14, 7
16, 4`},intervalos:{titulo:"Límite inferior, límite superior y frecuencia",ayuda:"Escriba una fila por intervalo con el formato: inferior, superior, frecuencia.",marcador:`0, 10, 5
10, 20, 8
20, 30, 7`}}[e];return`
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">
                ${r.titulo}
            </span>
            <textarea
                name="datos"
                rows="11"
                placeholder="${r.marcador}"
                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-500"
            ></textarea>
            <span class="block text-xs text-slate-500 mt-2">
                ${r.ayuda}
            </span>
        </label>
    `}function Q0(e){return e.trim().split(/[\s,;]+/).filter(Boolean).map(Number)}function Lo(e,a){const r=e.trim().split(/\n+/).map(t=>t.trim()).filter(Boolean).map((t,n)=>{const c=t.split(/[,;\t ]+/).filter(Boolean).map(Number);if(c.length!==a||!c.every(Number.isFinite))throw new Error(`La fila ${n+1} debe contener exactamente ${a} valores numéricos.`);return c});if(!r.length)throw new Error("Introduzca los datos antes de calcular.");return r}function X0(e,a){const r=a.querySelector("textarea").value;if(!r.trim())throw new Error("Introduzca los datos antes de calcular.");if(e==="individuales")return{tipoDatos:e,valores:Q0(r)};if(e==="frecuencias"){const n=Lo(r,2);return{tipoDatos:e,valores:n.map(c=>c[0]),frecuencias:n.map(c=>c[1])}}const t=Lo(r,3);return{tipoDatos:e,clases:t.map(n=>({limiteInferior:n[0],limiteSuperior:n[1],frecuencia:n[2]}))}}function Z0(e,a){const r={individuales:"42, 48, 51, 53, 55, 55, 57, 59, 61, 64, 67, 72, 96",frecuencias:`1, 2
2, 5
3, 8
4, 6
5, 3`,intervalos:`0, 10, 4
10, 20, 7
20, 30, 12
30, 40, 9
40, 50, 3`};a.querySelector("textarea").value=r[e]}function eh(e){const a=e.resumen;return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-sky-800 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p class="uppercase tracking-widest text-sky-200 text-xs font-black mb-2">
                            Resumen descriptivo
                        </p>
                        <h2 class="text-3xl md:text-4xl font-black">
                            Resultados del análisis
                        </h2>
                    </div>
                    <span class="inline-flex self-start rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold">
                        ${e.aproximado?"Medidas aproximadas":"Datos originales"}
                    </span>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    ${$a("n",a.n)}
                    ${$a("Media",ie(a.media))}
                    ${$a("Mediana",ie(a.mediana))}
                    ${$a("Moda",sh(a.moda))}
                    ${$a("Mínimo",ie(a.minimo))}
                    ${$a("Máximo",ie(a.maximo))}
                </div>

                ${e.advertencias?.length?rh(e.advertencias):""}

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${ah(a)}
                    ${th(e.interpretacion)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${nh(e)}
                    ${ih(a,e.aproximado)}
                </div>

                ${oh(e)}
            </div>
        </section>
    `}function $a(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${a}
            </p>
        </article>
    `}function ah(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Medidas descriptivas
            </h3>
            <div class="divide-y divide-slate-100">
                ${[["Suma",e.suma],["Rango",e.rango],["Q1",e.q1],["Q3",e.q3],["Rango intercuartílico",e.iqr],["Varianza muestral",e.varianzaMuestral],["Varianza poblacional",e.varianzaPoblacional],["Desviación estándar muestral",e.desviacionMuestral],["Desviación estándar poblacional",e.desviacionPoblacional],["Desviación media",e.desviacionMedia],["Desviación absoluta mediana",e.mad],["Coeficiente de variación",e.coeficienteVariacion,"%"],["Asimetría",e.asimetria],["Exceso de curtosis",e.curtosisExceso]].map(([r,t,n=""])=>`
                    <div class="flex items-center justify-between gap-5 py-3">
                        <span class="text-slate-600">${r}</span>
                        <strong class="text-slate-900 text-right">
                            ${ie(t)}${t===null?"":n}
                        </strong>
                    </div>
                `).join("")}
            </div>

            <div class="mt-6 rounded-2xl bg-sky-50 border border-sky-200 p-5">
                <h4 class="font-black text-sky-950 mb-3">Percentiles</h4>
                <div class="grid grid-cols-5 gap-2 text-center">
                    ${Object.entries(e.percentiles).map(([r,t])=>`
                        <div>
                            <span class="block text-xs uppercase text-sky-700 font-black">${r}</span>
                            <strong class="text-slate-900">${ie(t)}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>
        </article>
    `}function th(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Interpretación orientativa
            </h3>
            <ul class="space-y-4">
                ${e.map(a=>`
                    <li class="flex items-start gap-3 text-slate-700 leading-relaxed">
                        <span class="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">✓</span>
                        <span>${a}</span>
                    </li>
                `).join("")}
            </ul>
        </article>
    `}function rh(e){return`
        <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
            ${e.map(a=>`
                <p class="text-amber-900 leading-relaxed">${a}</p>
            `).join("")}
        </div>
    `}function nh(e){const a=e.tablaFrecuencias,r=Math.max(...a.map(t=>t.frecuencia),1);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Distribución de frecuencias
            </h3>
            <p class="text-sm text-slate-500 mb-6">
                Altura proporcional a la frecuencia absoluta.
            </p>
            <div class="flex items-end gap-2 h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
                ${a.map(t=>{const n=t.intervalo?`${ie(t.intervalo.inferior)}–${ie(t.intervalo.superior)}`:ie(t.valor),c=Math.max(4,t.frecuencia/r*190);return`
                        <div class="flex flex-col items-center justify-end min-w-[52px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${t.frecuencia}</span>
                            <div class="w-9 bg-sky-600 rounded-t-md" style="height:${c}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-all">${n}</span>
                        </div>
                    `}).join("")}
            </div>
        </article>
    `}function ih(e,a){const r=e.minimo,t=e.maximo,n=Math.max(t-r,1),c=o=>40+(o-r)/n*520,s=c(r),p=c(e.q1),u=c(e.mediana),l=c(e.q3),i=c(t);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Diagrama de caja
            </h3>
            <p class="text-sm text-slate-500 mb-5">
                ${a?"Representación aproximada a partir de los intervalos.":"Basado en Q1, mediana, Q3 y valores extremos."}
            </p>
            <div class="overflow-x-auto">
                <svg viewBox="0 0 600 170" class="min-w-[560px] w-full" role="img" aria-label="Diagrama de caja">
                    <line x1="${s}" y1="80" x2="${p}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${l}" y1="80" x2="${i}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${s}" y1="58" x2="${s}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${i}" y1="58" x2="${i}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <rect x="${p}" y="45" width="${Math.max(l-p,2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
                    <line x1="${u}" y1="45" x2="${u}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
                    ${Ka(s,140,r)}
                    ${Ka(p,30,e.q1)}
                    ${Ka(u,135,e.mediana)}
                    ${Ka(l,30,e.q3)}
                    ${Ka(i,140,t)}
                </svg>
            </div>
            <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <strong>Atípicos potenciales:</strong>
                ${e.atipicos.length?e.atipicos.map(ie).join(", "):a?"no identificables individualmente con datos agrupados":"ninguno según el criterio de Tukey"}
            </div>
        </article>
    `}function Ka(e,a,r){return`
        <text x="${e}" y="${a}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-700">
            ${ie(r)}
        </text>
    `}function oh(e){const a=e.tipoDatos==="intervalos";return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md mt-8 overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Tabla de frecuencias
            </h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200">
                <table class="min-w-full text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="px-4 py-3 text-left font-black">${a?"Intervalo":"Valor"}</th>
                            ${a?'<th class="px-4 py-3 text-right font-black">Marca</th>':""}
                            <th class="px-4 py-3 text-right font-black">f</th>
                            <th class="px-4 py-3 text-right font-black">fr</th>
                            <th class="px-4 py-3 text-right font-black">F</th>
                            <th class="px-4 py-3 text-right font-black">Fr</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${e.tablaFrecuencias.map(r=>`
                            <tr>
                                <td class="px-4 py-3 text-slate-800 font-semibold">
                                    ${a?`[${ie(r.intervalo.inferior)}, ${ie(r.intervalo.superior)})`:ie(r.valor)}
                                </td>
                                ${a?`<td class="px-4 py-3 text-right">${ie(r.marcaClase)}</td>`:""}
                                <td class="px-4 py-3 text-right">${r.frecuencia}</td>
                                <td class="px-4 py-3 text-right">${Ro(r.frecuenciaRelativa)}</td>
                                <td class="px-4 py-3 text-right">${r.frecuenciaAcumulada}</td>
                                <td class="px-4 py-3 text-right">${Ro(r.frecuenciaRelativaAcumulada)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function ie(e){return e==null||!Number.isFinite(Number(e))?"—":Number(e).toLocaleString("es-DO",{maximumFractionDigits:4})}function Ro(e){return`${(e*100).toLocaleString("es-DO",{maximumFractionDigits:2})} %`}function sh(e){return e?"valores"in e?e.valores.length?e.valores.map(ie).join(", "):"Sin moda":ie(e.valor):"—"}function lh(e,a){e.textContent=a,e.classList.remove("hidden")}function zt(e){e.textContent="",e.classList.add("hidden")}function ch(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-rose-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-rose-300 text-xs md:text-sm font-black mb-3">
                    Modelización estadística
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Modelos de regresión
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione el modelo según la naturaleza de la variable dependiente y el objetivo de su investigación. Cada calculadora incluye estimación, inferencia, diagnósticos, gráficos, predicción e interpretación guiada.
                </p>
            </div>
        </header>

        <section class="mt-10">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                Selección del modelo
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                ¿Qué tipo de resultado desea explicar o predecir?
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-8">
                La variable dependiente determina la familia de modelos. Una respuesta continua, una respuesta dicotómica y un conteo requieren funciones de enlace, supuestos e interpretaciones diferentes.
            </p>

            <div class="grid grid-cols-1 xl:grid-cols-3 gap-7">
                ${cn({etiqueta:"Resultado cuantitativo continuo",titulo:"Regresión lineal simple y múltiple",descripcion:"Estime cambios medios en una variable cuantitativa a partir de uno o varios predictores mediante mínimos cuadrados ordinarios.",caracteristicas:["Coeficientes y ecuación estimada","ANOVA, R² y R² ajustado","Residuos, VIF, leverage y Cook","Seis gráficos diagnósticos","Predicción y exportación"],ruta:"calculadoraRegresion",clase:"indigo"})}

                ${cn({etiqueta:"Resultado dicotómico 0/1",titulo:"Regresión logística binaria",descripcion:"Estime la probabilidad de un evento y el efecto de los predictores mediante coeficientes logísticos y razones de probabilidades.",caracteristicas:["Odds ratios e intervalos de confianza","Prueba global y pseudo-R²","Curva ROC, AUC y matriz de confusión","Calibración y observaciones influyentes","Predicción probabilística y exportación"],ruta:"calculadoraRegresionLogistica",clase:"rose"})}

                ${cn({etiqueta:"Resultado de conteo",titulo:"Poisson y binomial negativa",descripcion:"Modele el número esperado de eventos, compare la dispersión y estime razones de tasas de incidencia con exposición opcional.",caracteristicas:["Selección automática o manual","IRR e intervalos de confianza","Dispersión, AIC, BIC y deviance","Exceso de ceros e influencia","Predicción de tasas y conteos"],ruta:"calculadoraRegresionConteo",clase:"amber"})}
            </div>
        </section>

        <section class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            ${dn("Defina el desenlace","Especifique la variable dependiente, su escala y qué representa un valor alto, bajo, un evento codificado como 1 o un conteo acumulado.")}
            ${dn("Separe explicación y predicción","Un modelo explicativo prioriza interpretación y control de confusión; uno predictivo exige validación, evaluación fuera de muestra y atención al rendimiento.")}
            ${dn("Revise los supuestos","La significación estadística no compensa una forma funcional incorrecta, colinealidad, observaciones influyentes, sobredispersión, mala calibración o sesgo del diseño.")}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Próximas ampliaciones
            </h2>
            <p>
                El área podrá incorporar regresión ordinal, multinomial, modelos inflados en ceros, modelos hurdle, regularización y validación cruzada. Cada extensión debe mantenerse como herramienta independiente para conservar claridad metodológica y diagnósticos propios.
            </p>
        </section>
    `,e.addEventListener("click",a=>{const r=a.target.closest("[data-route]");if(a.target.closest("[data-action='volver-laboratorio']")){window.location.hash="/laboratorioKernel";return}r?.dataset.route&&(window.location.hash=`/${r.dataset.route}`)}),e}function cn({etiqueta:e,titulo:a,descripcion:r,caracteristicas:t,ruta:n,clase:c}){const s={rose:{borde:"border-rose-200",fondo:"bg-rose-50",etiqueta:"text-rose-700",boton:"bg-rose-700 hover:bg-rose-800",icono:"bg-rose-100 text-rose-700 border-rose-200"},amber:{borde:"border-amber-200",fondo:"bg-amber-50",etiqueta:"text-amber-700",boton:"bg-amber-600 hover:bg-amber-700",icono:"bg-amber-100 text-amber-700 border-amber-200"},indigo:{borde:"border-indigo-200",fondo:"bg-indigo-50",etiqueta:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800",icono:"bg-indigo-100 text-indigo-700 border-indigo-200"}},p=s[c]||s.indigo;return`
        <article class="h-full rounded-3xl border ${p.borde} bg-white p-6 md:p-8 shadow-xl flex flex-col">
            <div class="w-16 h-16 rounded-2xl border ${p.icono} flex items-center justify-center mb-6">
                ${dh(c)}
            </div>

            <p class="uppercase tracking-widest text-xs font-black ${p.etiqueta} mb-2">
                ${e}
            </p>
            <h3 class="text-3xl font-black text-slate-900 mb-4">
                ${a}
            </h3>
            <p class="text-slate-600 leading-relaxed mb-6">
                ${r}
            </p>

            <ul class="space-y-3 mb-8">
                ${t.map(u=>`
                    <li class="flex gap-3 text-slate-700">
                        <span class="font-black ${p.etiqueta}">✓</span>
                        <span>${u}</span>
                    </li>
                `).join("")}
            </ul>

            <div class="mt-auto rounded-2xl ${p.fondo} border ${p.borde} p-4 text-sm text-slate-700">
                Incluye interpretación educativa y advertencias para evitar conclusiones causales o predictivas injustificadas.
            </div>

            <button
                type="button"
                data-route="${n}"
                class="mt-6 inline-flex items-center justify-center rounded-xl ${p.boton} px-7 py-4 text-white font-black transition-colors shadow-lg"
            >
                Abrir calculadora
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </article>
    `}function dn(e,a){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h3>
            <p class="text-slate-600 leading-relaxed text-sm">
                ${a}
            </p>
        </article>
    `}function dh(e){return e==="rose"?`
            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 20h18"></path>
                <path d="M4 18V5"></path>
                <path d="M6 17c2.5 0 2.5-10 6-10s3.5 10 6 10"></path>
                <path d="M6 17h12"></path>
            </svg>
        `:e==="amber"?`
            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <rect x="6" y="14" width="2.5" height="4" rx="0.7"></rect>
                <rect x="10.5" y="10" width="2.5" height="8" rx="0.7"></rect>
                <rect x="15" y="6" width="2.5" height="12" rx="0.7"></rect>
                <path d="M6 8c3-2 7-2.5 12-4"></path>
            </svg>
        `:`
        <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 20V4"></path>
            <path d="M4 20h16"></path>
            <path d="m6.5 16 4-5 3 2 5-7"></path>
            <circle cx="6.5" cy="16" r="1"></circle>
            <circle cx="10.5" cy="11" r="1"></circle>
            <circle cx="13.5" cy="13" r="1"></circle>
            <circle cx="18.5" cy="6" r="1"></circle>
        </svg>
    `}const qe=1e-12;function Mo(e,a){if(!Array.isArray(a)||a.length<3)throw new Error(`${e} debe contener al menos tres observaciones.`);const r=a.map(Number);if(!r.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return r}function uh(e){return e[0].map((a,r)=>e.map(t=>t[r]))}function ph(e,a){return e.map(r=>a[0].map((t,n)=>r.reduce((c,s,p)=>c+s*a[p][n],0)))}function _t(e,a){return e.map(r=>r.reduce((t,n,c)=>t+n*a[c],0))}function mh(e){return Array.from({length:e},(a,r)=>Array.from({length:e},(t,n)=>r===n?1:0))}function fh(e){const a=e.length,r=e.map((t,n)=>[...t.map(Number),...mh(a)[n]]);for(let t=0;t<a;t+=1){let n=t;for(let s=t+1;s<a;s+=1)Math.abs(r[s][t])>Math.abs(r[n][t])&&(n=s);if(Math.abs(r[n][t])<qe)throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");[r[t],r[n]]=[r[n],r[t]];const c=r[t][t];r[t]=r[t].map(s=>s/c);for(let s=0;s<a;s+=1){if(s===t)continue;const p=r[s][t];r[s]=r[s].map((u,l)=>u-p*r[t][l])}}return r.map(t=>t.slice(a))}function Il(e){return e.reduce((a,r)=>a+r,0)/e.length}function bh(e,a=Il(e)){return e.reduce((r,t)=>r+(t-a)**2,0)}function Wt(e){const a=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-Wt(1-e);let r=.9999999999998099;const t=e-1;a.forEach((c,s)=>{r+=c/(t+s+1)});const n=t+a.length-.5;return .5*Math.log(2*Math.PI)+(t+.5)*Math.log(n)-n+Math.log(r)}function To(e,a,r){const s=e+a,p=e+1,u=e-1;let l=1,i=1-s*r/p;Math.abs(i)<1e-300&&(i=1e-300),i=1/i;let o=i;for(let d=1;d<=200;d+=1){const m=2*d;let f=d*(a-d)*r/((u+m)*(e+m));i=1+f*i,Math.abs(i)<1e-300&&(i=1e-300),l=1+f/l,Math.abs(l)<1e-300&&(l=1e-300),i=1/i,o*=i*l,f=-(e+d)*(s+d)*r/((e+m)*(p+m)),i=1+f*i,Math.abs(i)<1e-300&&(i=1e-300),l=1+f/l,Math.abs(l)<1e-300&&(l=1e-300),i=1/i;const g=i*l;if(o*=g,Math.abs(g-1)<3e-14)break}return o}function Pl(e,a,r){if(e<=0)return 0;if(e>=1)return 1;const t=Math.exp(Wt(a+r)-Wt(a)-Wt(r)+a*Math.log(e)+r*Math.log(1-e));return e<(a+1)/(a+r+2)?t*To(a,r,e)/a:1-t*To(r,a,1-e)/r}function gh(e,a){if(!Number.isFinite(e))return 0;const r=a/(a+e**2);return Math.min(1,Pl(r,a/2,.5))}function hh(e,a,r){if(!Number.isFinite(e))return 0;if(e<=0)return 1;const t=r/(r+a*e);return Pl(t,r/2,a/2)}function xh(e){const a=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],t=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,s=1-c;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<c){const l=Math.sqrt(-2*Math.log(e));return(((((t[0]*l+t[1])*l+t[2])*l+t[3])*l+t[4])*l+t[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}if(e>s){const l=Math.sqrt(-2*Math.log(1-e));return-(((((t[0]*l+t[1])*l+t[2])*l+t[3])*l+t[4])*l+t[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}const p=e-.5,u=p*p;return(((((a[0]*u+a[1])*u+a[2])*u+a[3])*u+a[4])*u+a[5])*p/(((((r[0]*u+r[1])*u+r[2])*u+r[3])*u+r[4])*u+1)}function vh(e,a){const r=xh(e),t=r*r,n=t*r,c=n*t,s=c*t;return r+(n+r)/(4*a)+(5*c+16*n+3*r)/(96*a**2)+(3*s+19*c+17*n-15*r)/(384*a**3)}function yh(e,a){const r=e[0].length;return Array.from({length:r},(t,n)=>[...a?[1]:[],...e.map(c=>c[n])])}function wh(e,a){return e.length<2?[]:e.map((r,t)=>{const n=e.filter((c,s)=>s!==t);try{const c=Ll({y:r,X:n,nombresPredictores:a.filter((p,u)=>u!==t),incluirIntercepto:!0,nivelConfianza:.95,calcularDiagnosticos:!1,calcularVif:!1}),s=Math.max(1-c.ajuste.r2,qe);return{variable:a[t],tolerancia:s,vif:1/s}}catch{return{variable:a[t],tolerancia:0,vif:1/0}}})}function Ll({y:e,X:a,nombresPredictores:r=[],incluirIntercepto:t=!0,nivelConfianza:n=.95,calcularDiagnosticos:c=!0,calcularVif:s=!0}){const p=Mo("La variable dependiente",e);if(!Array.isArray(a)||!a.length)throw new Error("Debe proporcionar al menos una variable predictora.");const u=a.map((T,S)=>Mo(r[S]||`X${S+1}`,T));if(!u.every(T=>T.length===p.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(n>0&&n<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");const l=u.map((T,S)=>r[S]||`X${S+1}`),i=yh(u,t),o=p.length,d=i[0].length,m=o-d;if(m<=0)throw new Error("No hay suficientes observaciones para estimar el modelo.");const f=uh(i),g=ph(f,i),b=fh(g),x=_t(f,p),y=_t(b,x),v=_t(i,y),h=p.map((T,S)=>T-v[S]),w=Il(p),k=t?bh(p,w):p.reduce((T,S)=>T+S**2,0),E=h.reduce((T,S)=>T+S**2,0),C=Math.max(k-E,0),$=k>qe?1-E/k:1,I=t?1-(1-$)*(o-1)/m:1-(1-$)*o/m,A=E/m,L=Math.sqrt(A),R=h.reduce((T,S)=>T+Math.abs(S),0)/o,N=d-(t?1:0),V=N>0&&A>qe?C/N/A:1/0,P=N>0?hh(V,N,m):null,D=vh(.5+n/2,m),te=[...t?["Intercepto"]:[],...l],Y=y.map((T,S)=>{const X=Math.sqrt(Math.max(A*b[S][S],0)),ca=X>qe?T/X:T===0?0:1/0,Tr=gh(Math.abs(ca),m);return{termino:te[S],estimacion:T,errorEstandar:X,t:ca,p:Tr,intervaloConfianza:{inferior:T-D*X,superior:T+D*X,nivel:n}}}),J=i.map(T=>{const S=_t(b,T);return T.reduce((X,ca,Tr)=>X+ca*S[Tr],0)}),oe=h.map((T,S)=>{const X=Math.sqrt(Math.max(A*(1-J[S]),qe));return T/X}),ue=h.map((T,S)=>{const X=J[S];return d>0&&A>qe?T**2/(d*A)*X/Math.max((1-X)**2,qe):0}),Q=h.reduce((T,S)=>T+S**2,0),ge=h.slice(1).reduce((T,S,X)=>T+(S-h[X])**2,0),Se=Q>qe?ge/Q:null,z=s&&u.length>1?wh(u,l):[],_=c?ue.map((T,S)=>({observacion:S+1,distanciaCook:T,leverage:J[S],residuoEstandarizado:oe[S]})).filter(T=>T.distanciaCook>4/o||Math.abs(T.residuoEstandarizado)>2||T.leverage>2*d/o):[],ze=[`El modelo explica ${($*100).toFixed(2)} % de la variabilidad de la variable dependiente.`,`El R² ajustado es ${I.toFixed(4)} y el error estándar de estimación es ${L.toFixed(4)}.`,P===null?"No se calculó una prueba global del modelo.":P<.05?`El modelo global es estadísticamente significativo (F = ${V.toFixed(4)}, p ${P<.001?"< 0.001":`= ${P.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística al 5 % (F = ${V.toFixed(4)}, p = ${P.toFixed(4)}).`,z.some(T=>T.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":z.some(T=>T.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":z.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",_.length?`Se identificaron ${_.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos."];return{tipoModelo:u.length===1?"regresion-lineal-simple":"regresion-lineal-multiple",n:o,numeroPredictores:u.length,incluirIntercepto:t,nombresPredictores:l,coeficientes:Y,ajuste:{r2:$,r2Ajustado:I,mae:R,mse:A,rmse:L,errorEstandarEstimacion:L},anova:{sumaCuadradosModelo:C,sumaCuadradosError:E,sumaCuadradosTotal:k,gradosLibertadModelo:N,gradosLibertadError:m,gradosLibertadTotal:t?o-1:o,mediaCuadraticaModelo:N>0?C/N:null,mediaCuadraticaError:A,f:V,p:P},predichos:v,residuos:h,diagnosticos:{leverage:J,residuosEstandarizados:oe,distanciaCook:ue,durbinWatson:Se,vif:z,observacionesInfluyentes:_},datosGrafico:p.map((T,S)=>({observacion:S+1,observado:T,predicho:v[S],residuo:h[S],residuoEstandarizado:oe[S],leverage:J[S],distanciaCook:ue[S],predictores:u.map(X=>X[S])})),interpretacion:ze}}function kh(e,a){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(a)||a.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);const r=a.map(Number);if(!r.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const t=e.coeficientes.map(c=>c.estimacion);return[...e.incluirIntercepto?[1]:[],...r].reduce((c,s,p)=>c+s*t[p],0)}function le(e,a=3){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{maximumFractionDigits:a}).format(e):"—"}function $n(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function qa(e,a=.08){const r=e.filter(Number.isFinite);let t=Math.min(...r),n=Math.max(...r);if(!r.length)return{minimo:0,maximo:1};if(Math.abs(n-t)<1e-12){const c=Math.max(Math.abs(n)*.1,1);t-=c,n+=c}else{const c=(n-t)*a;t-=c,n+=c}return{minimo:t,maximo:n}}function An(e,a,r,t){const n=Math.max(a-e,1e-12);return c=>r+(c-e)/n*(t-r)}function Mr({ancho:e,alto:a,margen:r,rangoX:t,rangoY:n,etiquetaX:c,etiquetaY:s}){const p=[],u=[],l=[],i=An(t.minimo,t.maximo,r.izquierdo,e-r.derecho),o=An(n.minimo,n.maximo,a-r.inferior,r.superior);for(let d=0;d<=4;d+=1){const m=d/4,f=t.minimo+m*(t.maximo-t.minimo),g=n.minimo+m*(n.maximo-n.minimo),b=i(f),x=o(g);p.push(`
            <line x1="${b}" y1="${r.superior}" x2="${b}" y2="${a-r.inferior}" stroke="#e2e8f0" stroke-width="1" />
            <line x1="${r.izquierdo}" y1="${x}" x2="${e-r.derecho}" y2="${x}" stroke="#e2e8f0" stroke-width="1" />
        `),u.push(`
            <text x="${b}" y="${a-r.inferior+20}" text-anchor="middle" font-size="10" fill="#64748b">
                ${le(f,2)}
            </text>
        `),l.push(`
            <text x="${r.izquierdo-10}" y="${x+4}" text-anchor="end" font-size="10" fill="#64748b">
                ${le(g,2)}
            </text>
        `)}return{x:i,y:o,contenido:`
            ${p.join("")}
            <line x1="${r.izquierdo}" y1="${r.superior}" x2="${r.izquierdo}" y2="${a-r.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${r.izquierdo}" y1="${a-r.inferior}" x2="${e-r.derecho}" y2="${a-r.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${u.join("")}
            ${l.join("")}
            <text x="${(r.izquierdo+e-r.derecho)/2}" y="${a-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">
                ${$n(c)}
            </text>
            <text x="17" y="${a/2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 17 ${a/2})">
                ${$n(s)}
            </text>
        `}}function ja(e,a,r){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-md overflow-hidden">
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${a}
            </p>
            <div class="overflow-x-auto">
                ${r}
            </div>
        </article>
    `}function Va(e,a){return`
        <svg
            viewBox="0 0 640 360"
            class="w-full min-w-[560px]"
            role="img"
            aria-label="${$n(a)}"
        >
            <rect x="0" y="0" width="640" height="360" rx="18" fill="#ffffff" />
            ${e}
        </svg>
    `}function No(e,a){const r=e.coeficientes.map(n=>n.estimacion);return[...e.incluirIntercepto?[1]:[],...a].reduce((n,c,s)=>n+c*r[s],0)}function Eh(e,a){if(e.numeroPredictores!==1)return"";const r=e.nombresPredictores[0]||"X",t=e.datosGrafico,n=t.map(b=>b.predictores[0]),c=t.map(b=>b.observado),s=qa(n),p=qa([...c,...t.map(b=>b.predicho)]),l=Mr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:s,rangoY:p,etiquetaX:r,etiquetaY:a}),i=Math.min(...n),o=Math.max(...n),d=No(e,[i]),m=No(e,[o]),f=t.map(b=>`
        <line
            x1="${l.x(b.predictores[0])}"
            y1="${l.y(b.observado)}"
            x2="${l.x(b.predictores[0])}"
            y2="${l.y(b.predicho)}"
            stroke="#cbd5e1"
            stroke-width="1.5"
        />
    `).join(""),g=t.map((b,x)=>`
        <circle
            cx="${l.x(b.predictores[0])}"
            cy="${l.y(b.observado)}"
            r="5.5"
            fill="#4f46e5"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${x+1}: ${r} = ${le(b.predictores[0])}; ${a} = ${le(b.observado)}</title>
        </circle>
    `).join("");return ja("Dispersión y recta ajustada","Los puntos representan los datos observados; la línea muestra el modelo estimado y los segmentos verticales representan los residuos.",Va(`
            ${l.contenido}
            ${f}
            <line
                x1="${l.x(i)}"
                y1="${l.y(d)}"
                x2="${l.x(o)}"
                y2="${l.y(m)}"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linecap="round"
            />
            ${g}
        `,"Gráfico de dispersión con recta de regresión"))}function Ch(e,a){const r=e.datosGrafico.map(u=>u.observado),t=e.datosGrafico.map(u=>u.predicho),n=qa([...r,...t]),s=Mr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:n,rangoY:n,etiquetaX:"Valor predicho",etiquetaY:`Valor observado de ${a}`}),p=e.datosGrafico.map((u,l)=>`
        <circle
            cx="${s.x(u.predicho)}"
            cy="${s.y(u.observado)}"
            r="5.5"
            fill="#0f766e"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${l+1}: observado = ${le(u.observado)}; predicho = ${le(u.predicho)}</title>
        </circle>
    `).join("");return ja("Observado frente a predicho","Un ajuste adecuado concentra los puntos cerca de la línea diagonal de igualdad.",Va(`
            ${s.contenido}
            <line
                x1="${s.x(n.minimo)}"
                y1="${s.y(n.minimo)}"
                x2="${s.x(n.maximo)}"
                y2="${s.y(n.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${p}
        `,"Gráfico de valores observados frente a valores predichos"))}function $h(e){const a=e.datosGrafico.map(u=>u.predicho),r=e.datosGrafico.map(u=>u.residuo),t=qa(a),n=qa([...r,0]),s=Mr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:t,rangoY:n,etiquetaX:"Valor predicho",etiquetaY:"Residuo"}),p=e.datosGrafico.map((u,l)=>`
        <circle
            cx="${s.x(u.predicho)}"
            cy="${s.y(u.residuo)}"
            r="5"
            fill="${Math.abs(u.residuoEstandarizado)>2?"#dc2626":"#2563eb"}"
        >
            <title>Observación ${l+1}: residuo = ${le(u.residuo)}; residuo estandarizado = ${le(u.residuoEstandarizado)}</title>
        </circle>
    `).join("");return ja("Residuos frente a valores predichos","Se espera una nube aproximadamente aleatoria alrededor de cero. Los puntos rojos tienen residuos estandarizados con magnitud mayor que 2.",Va(`
            ${s.contenido}
            <line
                x1="${s.x(t.minimo)}"
                y1="${s.y(0)}"
                x2="${s.x(t.maximo)}"
                y2="${s.y(0)}"
                stroke="#0f172a"
                stroke-width="2"
                stroke-dasharray="7 5"
            />
            ${p}
        `,"Gráfico de residuos frente a valores predichos"))}function Ah(e){const a=e.residuos,r=a.length,t=Math.max(4,Math.ceil(Math.log2(r)+1)),n=Math.min(...a),c=Math.max(...a),p=Math.max(c-n,1e-9)/t,u=Array.from({length:t},(x,y)=>({inferior:n+y*p,superior:n+(y+1)*p,frecuencia:0}));a.forEach(x=>{const y=Math.min(Math.floor((x-n)/p),t-1);u[y].frecuencia+=1});const l=Math.max(...u.map(x=>x.frecuencia),1),i=640,o=360,d={izquierdo:60,derecho:24,superior:24,inferior:68},m=i-d.izquierdo-d.derecho,f=o-d.superior-d.inferior,g=m/t,b=u.map((x,y)=>{const v=x.frecuencia/l*f,h=d.izquierdo+y*g,w=o-d.inferior-v;return`
            <rect
                x="${h+1}"
                y="${w}"
                width="${Math.max(g-2,1)}"
                height="${v}"
                fill="#7c3aed"
                opacity="0.86"
            >
                <title>[${le(x.inferior)}, ${le(x.superior)}]: ${x.frecuencia} observaciones</title>
            </rect>
            <text
                x="${h+g/2}"
                y="${o-d.inferior+18}"
                text-anchor="middle"
                font-size="9"
                fill="#64748b"
            >
                ${le(x.inferior,1)}
            </text>
        `}).join("");return ja("Histograma de residuos","Permite examinar visualmente la simetría, concentración y posibles colas de la distribución residual.",Va(`
            <line x1="${d.izquierdo}" y1="${d.superior}" x2="${d.izquierdo}" y2="${o-d.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${d.izquierdo}" y1="${o-d.inferior}" x2="${i-d.derecho}" y2="${o-d.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${b}
            <text x="${i/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Residuo</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Frecuencia</text>
        `,"Histograma de los residuos"))}function Ih(e){const a=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],t=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,s=1-c;if(e<c){const l=Math.sqrt(-2*Math.log(e));return(((((t[0]*l+t[1])*l+t[2])*l+t[3])*l+t[4])*l+t[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}if(e>s){const l=Math.sqrt(-2*Math.log(1-e));return-(((((t[0]*l+t[1])*l+t[2])*l+t[3])*l+t[4])*l+t[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}const p=e-.5,u=p*p;return(((((a[0]*u+a[1])*u+a[2])*u+a[3])*u+a[4])*u+a[5])*p/(((((r[0]*u+r[1])*u+r[2])*u+r[3])*u+r[4])*u+1)}function Ph(e){const a=[...e.diagnosticos.residuosEstandarizados].sort((p,u)=>p-u),r=a.map((p,u)=>Ih((u+.5)/a.length)),t=qa([...a,...r]),c=Mr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:t,rangoY:t,etiquetaX:"Cuantil normal teórico",etiquetaY:"Residuo estandarizado ordenado"}),s=a.map((p,u)=>`
        <circle
            cx="${c.x(r[u])}"
            cy="${c.y(p)}"
            r="4.5"
            fill="#0891b2"
        >
            <title>Cuantil teórico = ${le(r[u])}; residuo = ${le(p)}</title>
        </circle>
    `).join("");return ja("Gráfico Q–Q de residuos","La proximidad de los puntos a la diagonal ofrece una evaluación visual de la normalidad residual.",Va(`
            ${c.contenido}
            <line
                x1="${c.x(t.minimo)}"
                y1="${c.y(t.minimo)}"
                x2="${c.x(t.maximo)}"
                y2="${c.y(t.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${s}
        `,"Gráfico cuantil cuantil de los residuos"))}function Lh(e){const a=e.diagnosticos.distanciaCook,r=4/e.n,t=Math.max(...a,r,1e-6),n=640,c=360,s={izquierdo:60,derecho:24,superior:24,inferior:58},u=(n-s.izquierdo-s.derecho)/a.length,l=An(0,t*1.1,c-s.inferior,s.superior),i=a.map((o,d)=>{const m=s.izquierdo+d*u,f=c-s.inferior-l(o);return`
            <rect
                x="${m+Math.max(u*.15,1)}"
                y="${l(o)}"
                width="${Math.max(u*.7,2)}"
                height="${Math.max(f,0)}"
                fill="${o>r?"#dc2626":"#f59e0b"}"
            >
                <title>Observación ${d+1}: distancia de Cook = ${le(o,4)}</title>
            </rect>
        `}).join("");return ja("Distancia de Cook",`El umbral orientativo mostrado es 4/n = ${le(r,4)}. Las barras rojas superan ese criterio y requieren revisión.`,Va(`
            <line x1="${s.izquierdo}" y1="${s.superior}" x2="${s.izquierdo}" y2="${c-s.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${s.izquierdo}" y1="${c-s.inferior}" x2="${n-s.derecho}" y2="${c-s.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${s.izquierdo}" y1="${l(r)}" x2="${n-s.derecho}" y2="${l(r)}" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5" />
            ${i}
            <text x="${n/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Número de observación</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Distancia de Cook</text>
        `,"Gráfico de distancia de Cook por observación"))}function Rh(e,a="Y"){return`
        <section class="mt-10" data-seccion-graficos-regresion="true">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización estadística
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Ajuste y diagnóstico gráfico
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine simultáneamente la relación estimada, la precisión predictiva, la estructura de los residuos y la influencia de cada observación. Los gráficos son diagnósticos complementarios y deben interpretarse junto con los indicadores numéricos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${[Eh(e,a),Ch(e,a),$h(e),Ah(e),Ph(e),Lh(e)].filter(Boolean).join("")}
            </div>
        </section>
    `}function Mh(){const e=document.createElement("section");let a=null,r=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-sky-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">
                    Modelización y predicción
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión lineal y múltiple
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime relaciones lineales mediante mínimos cuadrados, evalúe la significación del modelo, examine sus supuestos y realice nuevas predicciones con una interpretación guiada.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión simple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión múltiple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Diagnósticos gráficos</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Predicción</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Organice una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Dt("Variable dependiente","La primera columna debe contener la variable que desea explicar o predecir.")}
                    ${Dt("Predictores","Coloque después una columna por cada variable explicativa. La regresión simple utiliza un predictor y la múltiple utiliza dos o más.")}
                    ${Dt("Encabezados","La primera fila puede contener nombres de variables. En ausencia de encabezados se asignarán Y, X1, X2, …")}
                    ${Dt("Separadores","Separe columnas con coma, punto y coma o tabulación. Para decimales utilice punto.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Antes de interpretar
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión lineal supone relación aproximadamente lineal, independencia, varianza residual estable y ausencia de multicolinealidad severa. Los gráficos y diagnósticos del resultado ayudan a revisar estas condiciones.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Tipo de modelo
                        </span>
                        <select
                            name="tipoModelo"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="simple">Regresión lineal simple</option>
                            <option value="multiple">Regresión lineal múltiple</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-indigo-700 focus:ring-indigo-500"
                            />
                            Incluir intercepto
                        </span>
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Datos por filas
                    </span>
                    <textarea
                        name="datos"
                        rows="14"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        placeholder="Rendimiento, Horas
55, 1
61, 2
64, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Puede pegar datos desde Excel o Google Sheets utilizando tabulaciones.
                    </span>
                </label>

                <div class="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                    <label class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-5 py-3 hover:bg-slate-50 transition-colors cursor-pointer">
                        <input
                            type="file"
                            name="archivoDatos"
                            accept=".csv,.txt,text/csv,text/plain"
                            class="hidden"
                        />
                        Importar CSV o TXT
                    </label>
                    <span data-nombre-archivo class="text-xs text-slate-500"></span>
                </div>

                <div
                    id="mensaje-error-regresion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
                    >
                        Cargar ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-regresion"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const t=e.querySelector("#formulario-regresion"),n=e.querySelector("#mensaje-error-regresion"),c=e.querySelector("#resultados-regresion"),s=e.querySelector("[data-nombre-archivo]");return t.elements.tipoModelo.addEventListener("change",()=>{un(t),c.classList.add("hidden"),Ya(n)}),t.elements.archivoDatos.addEventListener("change",async()=>{const p=t.elements.archivoDatos.files?.[0];if(p)try{t.elements.datos.value=await p.text(),s.textContent=`Archivo cargado: ${p.name}`,c.classList.add("hidden"),Ya(n)}catch{So(n,"No fue posible leer el archivo seleccionado.")}}),t.addEventListener("submit",p=>{p.preventDefault(),Ya(n);try{const u=Nh(t);a=Ll(u.solicitud),r=u.metadatos,c.innerHTML=jh(a,r),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(u){c.classList.add("hidden"),So(n,u instanceof Error?u.message:"No fue posible ajustar el modelo.")}}),e.addEventListener("submit",p=>{if(p.target.id!=="formulario-prediccion-regresion")return;p.preventDefault();const u=e.querySelector("#resultado-prediccion-regresion");try{const l=[...p.target.querySelectorAll("[data-predictor]")].map(o=>Number(o.value)),i=kh(a,l);u.innerHTML=`
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Predicción puntual
                    </p>
                    <p class="text-3xl font-black text-emerald-950">
                        ${Te(r.nombreDependiente)} estimado = ${q(i,6)}
                    </p>
                    <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                        Esta es una estimación puntual basada en el modelo ajustado. Su uso fuera del rango observado de los predictores implica extrapolación y requiere especial cautela.
                    </p>
                </div>
            `}catch(l){u.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${Te(l instanceof Error?l.message:"No fue posible calcular la predicción.")}
                </div>
            `}}),e.addEventListener("click",async p=>{const u=p.target.closest("[data-action]");if(!u)return;const l=u.dataset.action;if(l==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(l==="cargar-ejemplo"){Sh(t),s.textContent="",c.classList.add("hidden"),Ya(n);return}if(l==="limpiar"){t.reset(),un(t),t.elements.datos.value="",s.textContent="",a=null,r=null,c.innerHTML="",c.classList.add("hidden"),Ya(n);return}if(!(!a||!r)){if(l==="exportar-csv"){Gh(a,r);return}if(l==="imprimir"){window.print();return}if(l==="copiar-reporte")try{await navigator.clipboard.writeText(Vh(a,r)),u.textContent="Reporte copiado",window.setTimeout(()=>{u.textContent="Copiar interpretación"},1800)}catch{u.textContent="No se pudo copiar"}}}),un(t),e}function Dt(e,a){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${a}</p>
        </div>
    `}function un(e){const a=e.elements.tipoModelo.value==="multiple";e.elements.datos.placeholder=a?`Rendimiento, Horas, Asistencia
65, 2, 70
72, 4, 78
80, 6, 85`:`Rendimiento, Horas
65, 2
72, 4
80, 6`}function Th(e){return e.trim().split(/[,;\t]+/).map(a=>a.trim())}function Nh(e){const a=e.elements.datos.value.trim();if(!a)throw new Error("Introduzca los datos antes de ajustar el modelo.");const r=a.split(/\r?\n+/).map(Th).filter(u=>u.some(l=>l!==""));if(r.length<4)throw new Error("Se requieren al menos tres observaciones y, cuando se utilizan encabezados, una fila adicional para sus nombres.");const n=r[0].every(u=>Number.isFinite(Number(u)))?r[0].map((u,l)=>l===0?"Y":`X${l}`):r.shift().map((u,l)=>u||(l===0?"Y":`X${l}`)),c=n.length;if(c<2)throw new Error("Se requieren al menos dos columnas: la variable dependiente y un predictor.");if(!r.every(u=>u.length===c))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");const s=r.map((u,l)=>u.map((i,o)=>{const d=Number(i);if(!Number.isFinite(d))throw new Error(`El valor de la fila ${l+1}, columna ${o+1} no es numérico.`);return d})),p=e.elements.tipoModelo.value;if(p==="simple"&&c!==2)throw new Error("La regresión lineal simple requiere exactamente dos columnas: Y y X.");if(p==="multiple"&&c<3)throw new Error("La regresión múltiple requiere la variable dependiente y al menos dos predictores.");return{solicitud:{y:s.map(u=>u[0]),X:Array.from({length:c-1},(u,l)=>s.map(i=>i[l+1])),nombresPredictores:n.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value)},metadatos:{nombreDependiente:n[0],nombresPredictores:n.slice(1),nivelConfianza:Number(e.elements.nivelConfianza.value),datosOriginales:s}}}function Sh(e){const a=e.elements.tipoModelo.value==="multiple";e.elements.datos.value=a?`Rendimiento; Horas; Asistencia
58; 1; 62
63; 2; 68
67; 3; 70
71; 4; 74
74; 5; 79
79; 6; 82
83; 7; 86
86; 8; 90
89; 9; 92
93; 10; 96`:`Rendimiento; Horas
55; 1
61; 2
64; 3
70; 4
72; 5
78; 6
81; 7
87; 8
89; 9
94; 10`}function q(e,a=4){return e==null?"—":e===1/0?"∞":e===-1/0?"−∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function sr(e){return e==null?"—":e<.001?"< 0.001":q(e,4)}function Te(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function zh(e,a){const r=[];return e.coeficientes.forEach((t,n)=>{const c=t.estimacion,s=q(Math.abs(c),6);if(n===0&&e.incluirIntercepto){r.push(q(c,6));return}const p=c>=0&&r.length?"+":"−",u=Te(t.termino);r.length?r.push(`${p} ${s}·${u}`):r.push(`${c<0?"−":""}${s}·${u}`)}),`${Te(a)}̂ = ${r.join(" ")}`}function pa(e,a,r=""){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="uppercase tracking-widest text-slate-500 text-[11px] font-black mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-900">
                ${a}
            </p>
            ${r?`
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                    ${r}
                </p>
            `:""}
        </article>
    `}function _h(e){const a=[],r=e.diagnosticos.vif.length?Math.max(...e.diagnosticos.vif.map(s=>s.vif)):null,t=e.diagnosticos.residuosEstandarizados.filter(s=>Math.abs(s)>2).length,n=e.diagnosticos.durbinWatson;r>=10?a.push({nivel:"alto",texto:"Se detectó multicolinealidad severa porque al menos un VIF es igual o superior a 10."}):r>=5&&a.push({nivel:"medio",texto:"Existe indicio de multicolinealidad moderada porque al menos un VIF es igual o superior a 5."}),e.diagnosticos.observacionesInfluyentes.length&&a.push({nivel:"medio",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`}),t&&a.push({nivel:"medio",texto:`${t} observaciones presentan residuos estandarizados con magnitud mayor que 2.`}),n!==null&&(n<1.5||n>2.5)&&a.push({nivel:"medio",texto:"El estadístico de Durbin–Watson se aleja del intervalo orientativo 1.5–2.5; revise la independencia serial de los residuos."}),e.n<20&&a.push({nivel:"informativo",texto:"El tamaño muestral es reducido; los intervalos, valores p y diagnósticos pueden ser sensibles a observaciones individuales."}),a.length||a.push({nivel:"favorable",texto:"Los criterios automáticos no muestran alertas importantes; confirme esta lectura mediante los gráficos y el contexto de la investigación."});const c={alto:"border-red-200 bg-red-50 text-red-950",medio:"border-amber-200 bg-amber-50 text-amber-950",informativo:"border-sky-200 bg-sky-50 text-sky-950",favorable:"border-emerald-200 bg-emerald-50 text-emerald-950"};return`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${a.map(s=>`
                <div class="rounded-2xl border p-5 ${c[s.nivel]}">
                    <p class="font-bold leading-relaxed">
                        ${Te(s.texto)}
                    </p>
                </div>
            `).join("")}
        </div>
    `}function Dh(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Término</th>
                        <th class="px-4 py-3 text-right">Coeficiente</th>
                        <th class="px-4 py-3 text-right">Error estándar</th>
                        <th class="px-4 py-3 text-right">t</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-right">IC inferior</th>
                        <th class="px-4 py-3 text-right">IC superior</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(a=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${Te(a.termino)}</td>
                            <td class="px-4 py-3 text-right">${q(a.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${q(a.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${q(a.t,4)}</td>
                            <td class="px-4 py-3 text-right font-black ${a.p<.05?"text-emerald-700":"text-slate-700"}">${sr(a.p)}</td>
                            <td class="px-4 py-3 text-right">${q(a.intervaloConfianza.inferior,6)}</td>
                            <td class="px-4 py-3 text-right">${q(a.intervaloConfianza.superior,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function qh(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Fuente</th>
                        <th class="px-4 py-3 text-right">Suma de cuadrados</th>
                        <th class="px-4 py-3 text-right">gl</th>
                        <th class="px-4 py-3 text-right">Media cuadrática</th>
                        <th class="px-4 py-3 text-right">F</th>
                        <th class="px-4 py-3 text-right">p</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[{fuente:"Modelo",sc:e.anova.sumaCuadradosModelo,gl:e.anova.gradosLibertadModelo,mc:e.anova.mediaCuadraticaModelo,f:e.anova.f,p:e.anova.p},{fuente:"Error",sc:e.anova.sumaCuadradosError,gl:e.anova.gradosLibertadError,mc:e.anova.mediaCuadraticaError,f:null,p:null},{fuente:"Total",sc:e.anova.sumaCuadradosTotal,gl:e.anova.gradosLibertadTotal,mc:null,f:null,p:null}].map(r=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${r.fuente}</td>
                            <td class="px-4 py-3 text-right">${q(r.sc,6)}</td>
                            <td class="px-4 py-3 text-right">${q(r.gl,0)}</td>
                            <td class="px-4 py-3 text-right">${q(r.mc,6)}</td>
                            <td class="px-4 py-3 text-right">${q(r.f,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${sr(r.p)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Oh(e){return e.diagnosticos.vif.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Predictor</th>
                        <th class="px-4 py-3 text-right">Tolerancia</th>
                        <th class="px-4 py-3 text-right">VIF</th>
                        <th class="px-4 py-3 text-left">Lectura</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.diagnosticos.vif.map(a=>{const r=a.vif>=10?"Severa":a.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <td class="px-4 py-3 font-black text-slate-900">${Te(a.variable)}</td>
                                <td class="px-4 py-3 text-right">${q(a.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${q(a.vif,4)}</td>
                                <td class="px-4 py-3">${r}</td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>
    `:`
            <p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El VIF no aplica cuando el modelo contiene un solo predictor.
            </p>
        `}function Fh(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[440px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-right">Obs.</th>
                        <th class="px-4 py-3 text-right">Observado</th>
                        <th class="px-4 py-3 text-right">Predicho</th>
                        <th class="px-4 py-3 text-right">Residuo</th>
                        <th class="px-4 py-3 text-right">Residuo est.</th>
                        <th class="px-4 py-3 text-right">Leverage</th>
                        <th class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(a=>`
                            <tr class="${Math.abs(a.residuoEstandarizado)>2||a.distanciaCook>4/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${a.observacion}</td>
                                <td class="px-4 py-3 text-right">${q(a.observado,6)}</td>
                                <td class="px-4 py-3 text-right">${q(a.predicho,6)}</td>
                                <td class="px-4 py-3 text-right">${q(a.residuo,6)}</td>
                                <td class="px-4 py-3 text-right">${q(a.residuoEstandarizado,4)}</td>
                                <td class="px-4 py-3 text-right">${q(a.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${q(a.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Uh(e,a){return`
        <form id="formulario-prediccion-regresion" class="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-indigo-950 mb-3">
                Realizar una nueva predicción
            </h2>
            <p class="text-indigo-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Antes de usar el resultado, compruebe que los valores se encuentren dentro o cerca del rango estudiado.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((r,t)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-indigo-950 mb-2">
                            ${Te(r)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${t}"
                            class="w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                            placeholder="Valor de ${Te(r)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-700 px-7 py-4 text-white font-black hover:bg-indigo-800 transition-colors shadow-lg"
            >
                Calcular predicción
            </button>

            <div id="resultado-prediccion-regresion" class="mt-5" aria-live="polite"></div>
        </form>
    `}function jh(e,a){const r=e.anova.p!==null&&e.anova.p<.05,t=q(e.ajuste.r2*100,2);return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-sky-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        ${e.tipoModelo==="regresion-lineal-simple"?"Regresión lineal simple":"Regresión lineal múltiple"}
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${e.n} observaciones y ${e.numeroPredictores} predictor${e.numeroPredictores===1?"":"es"}. Explica ${t} % de la variabilidad observada.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${r?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${r?"Modelo global significativo":"Modelo global no significativo al 5 %"}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${zh(e,a.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${pa("R²",q(e.ajuste.r2,4),"Proporción explicada por el modelo")}
            ${pa("R² ajustado",q(e.ajuste.r2Ajustado,4),"Ajustado por cantidad de predictores")}
            ${pa("RMSE",q(e.ajuste.rmse,4),"Error cuadrático medio en unidades de Y")}
            ${pa("MAE",q(e.ajuste.mae,4),"Error absoluto medio")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${_h(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Inferencia individual</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes del modelo</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Cada prueba t contrasta si el coeficiente correspondiente difiere de cero, manteniendo constantes los demás predictores.</p>
            ${Dh(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Prueba global</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">ANOVA de la regresión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La prueba F evalúa si el conjunto de predictores mejora la explicación de la variable dependiente frente a un modelo sin capacidad explicativa.</p>
            ${qh(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y factor de inflación de la varianza</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Como orientación, VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${Oh(e)}
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            ${pa("Durbin–Watson",q(e.diagnosticos.durbinWatson,4),"Valores cercanos a 2 son compatibles con ausencia de autocorrelación de primer orden")}
            ${pa("Observaciones influyentes",q(e.diagnosticos.observacionesInfluyentes.length,0),"Criterios combinados de Cook, leverage y residuo estandarizado")}
            ${pa("Error estándar",q(e.ajuste.errorEstandarEstimacion,4),"Desviación típica estimada de los residuos")}
        </section>

        ${Rh(e,a.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Valores ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo estandarizado elevado o distancia de Cook superior a 4/n.</p>
            ${Fh(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(n=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${Te(n)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${Uh(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Un valor p significativo o un R² elevado no demuestran causalidad ni garantizan utilidad predictiva externa. La validez del modelo depende del diseño de la investigación, la calidad de los datos, el cumplimiento razonable de los supuestos, la ausencia de sesgos importantes y la validación con información independiente cuando el objetivo sea predecir.
            </p>
        </section>
    `}function Vh(e,a){const r=["REGRESIÓN LINEAL Y MÚLTIPLE — LABORATORIO KERNEL","",`Variable dependiente: ${a.nombreDependiente}`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`R² = ${q(e.ajuste.r2,4)}`,`R² ajustado = ${q(e.ajuste.r2Ajustado,4)}`,`F = ${q(e.anova.f,4)}`,`p del modelo = ${sr(e.anova.p)}`,`RMSE = ${q(e.ajuste.rmse,4)}`,`Durbin–Watson = ${q(e.diagnosticos.durbinWatson,4)}`,"","Coeficientes:"];return e.coeficientes.forEach(t=>{r.push(`${t.termino}: b = ${q(t.estimacion,6)}, t = ${q(t.t,4)}, p ${sr(t.p)}`)}),r.push("","Interpretación:"),e.interpretacion.forEach(t=>r.push(`- ${t}`)),r.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),r.join(`
`)}function Bh(e){return`"${String(e??"").replaceAll('"','""')}"`}function Gh(e,a){const t=[["REGRESIÓN LINEAL Y MÚLTIPLE"],["Variable dependiente",a.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["R2",e.ajuste.r2],["R2 ajustado",e.ajuste.r2Ajustado],["RMSE",e.ajuste.rmse],["MAE",e.ajuste.mae],["F",e.anova.f],["p del modelo",e.anova.p],["Durbin-Watson",e.diagnosticos.durbinWatson],[],["Término","Coeficiente","Error estándar","t","p","IC inferior","IC superior"],...e.coeficientes.map(s=>[s.termino,s.estimacion,s.errorEstandar,s.t,s.p,s.intervaloConfianza.inferior,s.intervaloConfianza.superior]),[],["Observación","Observado","Predicho","Residuo","Residuo estandarizado","Leverage","Distancia de Cook"],...e.datosGrafico.map(s=>[s.observacion,s.observado,s.predicho,s.residuo,s.residuoEstandarizado,s.leverage,s.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(s=>s.map(Bh).join(";")).join(`\r
`),n=new Blob([`\uFEFF${t}`],{type:"text/csv;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(n),c.download="regresion-lineal-multiple-kernel.csv",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(c.href)}function So(e,a){e.textContent=a,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function Ya(e){e.textContent="",e.classList.add("hidden")}const re=1e-12,Ke=35;function zo(e,a,r=5){if(!Array.isArray(a)||a.length<r)throw new Error(`${e} debe contener al menos ${r} observaciones.`);const t=a.map(Number);if(!t.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return t}function Hh(e){return Array.from({length:e},(a,r)=>Array.from({length:e},(t,n)=>r===n?1:0))}function Wh(e){return e[0].map((a,r)=>e.map(t=>t[r]))}function Kh(e,a){return e.map(r=>a[0].map((t,n)=>r.reduce((c,s,p)=>c+s*a[p][n],0)))}function at(e,a){return e.map(r=>r.reduce((t,n,c)=>t+n*a[c],0))}function tt(e,a){return e.reduce((r,t,n)=>r+t*a[n],0)}function In(e){const a=e.length,r=e.map((t,n)=>[...t.map(Number),...Hh(a)[n]]);for(let t=0;t<a;t+=1){let n=t;for(let s=t+1;s<a;s+=1)Math.abs(r[s][t])>Math.abs(r[n][t])&&(n=s);if(Math.abs(r[n][t])<re)throw new Error("La matriz de información es singular. Elimine predictores redundantes o perfectamente colineales.");[r[t],r[n]]=[r[n],r[t]];const c=r[t][t];r[t]=r[t].map(s=>s/c);for(let s=0;s<a;s+=1){if(s===t)continue;const p=r[s][t];r[s]=r[s].map((u,l)=>u-p*r[t][l])}}return r.map(t=>t.slice(a))}function Rl(e,a){const r=e[0].length;return Array.from({length:r},(t,n)=>[...a?[1]:[],...e.map(c=>c[n])])}function Kt(e){const a=Math.max(-Ke,Math.min(Ke,e));if(a>=0)return 1/(1+Math.exp(-a));const r=Math.exp(a);return r/(1+r)}function rt(e,a){return e.reduce((r,t,n)=>{const c=Math.max(re,Math.min(1-re,a[n]));return r+t*Math.log(c)+(1-t)*Math.log(1-c)},0)}function Yh(e){const a=e<0?-1:1,r=Math.abs(e)/Math.sqrt(2),t=1/(1+.3275911*r),l=1-((((1.061405429*t+-1.453152027)*t+1.421413741)*t+-.284496736)*t+.254829592)*t*Math.exp(-r*r);return .5*(1+a*l)}function Jh(e){return Math.max(0,Math.min(1,2*(1-Yh(Math.abs(e)))))}function Pn(e){const a=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-Pn(1-e);let r=.9999999999998099;const t=e-1;a.forEach((c,s)=>{r+=c/(t+s+1)});const n=t+a.length-.5;return .5*Math.log(2*Math.PI)+(t+.5)*Math.log(n)-n+Math.log(r)}function Qh(e,a){if(a<=0)return 0;if(a<e+1){let p=1/e,u=p,l=e;for(let i=1;i<=300&&(l+=1,p*=a/l,u+=p,!(Math.abs(p)<Math.abs(u)*1e-14));i+=1);return u*Math.exp(-a+e*Math.log(a)-Pn(e))}let r=a+1-e,t=1/1e-300,n=1/r,c=n;for(let p=1;p<=300;p+=1){const u=-p*(p-e);r+=2,n=u*n+r,Math.abs(n)<1e-300&&(n=1e-300),t=r+u/t,Math.abs(t)<1e-300&&(t=1e-300),n=1/n;const l=n*t;if(c*=l,Math.abs(l-1)<1e-14)break}return 1-Math.exp(-a+e*Math.log(a)-Pn(e))*c}function Ml(e,a){return!(e>=0)||!(a>0)?null:Math.max(0,Math.min(1,1-Qh(a/2,e/2)))}function Xh(e){const a=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],t=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,s=1-c;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<c){const l=Math.sqrt(-2*Math.log(e));return(((((t[0]*l+t[1])*l+t[2])*l+t[3])*l+t[4])*l+t[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}if(e>s){const l=Math.sqrt(-2*Math.log(1-e));return-(((((t[0]*l+t[1])*l+t[2])*l+t[3])*l+t[4])*l+t[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}const p=e-.5,u=p*p;return(((((a[0]*u+a[1])*u+a[2])*u+a[3])*u+a[4])*u+a[5])*p/(((((r[0]*u+r[1])*u+r[2])*u+r[3])*u+r[4])*u+1)}function _o(e,a){const r=e[0].length,t=Array.from({length:r},()=>Array(r).fill(0));return e.forEach((n,c)=>{const s=Math.max(a[c]*(1-a[c]),re);for(let p=0;p<r;p+=1)for(let u=0;u<r;u+=1)t[p][u]+=s*n[p]*n[u]}),t}function Zh(e,a,r={}){const t=r.maxIteraciones??100,n=r.tolerancia??1e-8,c=e[0].length;let s=Array(c).fill(0),p=e.map(()=>.5),u=rt(a,p),l=!1,i=0;for(let m=1;m<=t;m+=1){i=m,p=e.map(C=>Kt(tt(C,s)));const f=_o(e,p),g=In(f),b=Array(c).fill(0);e.forEach((C,$)=>{const I=a[$]-p[$];C.forEach((A,L)=>{b[L]+=A*I})});const x=at(g,b);let y=1,v=s.map((C,$)=>C+x[$]),h=e.map(C=>Kt(tt(C,v))),w=rt(a,h);for(;w<u-1e-10&&y>1/1024;)y/=2,v=s.map((C,$)=>C+y*x[$]),h=e.map(C=>Kt(tt(C,v))),w=rt(a,h);const k=Math.max(...v.map((C,$)=>Math.abs(C-s[$]))),E=Math.abs(w-u);if(s=v,p=h,u=w,k<n&&E<n){l=!0;break}if(s.some(C=>Math.abs(C)>100))break}const o=_o(e,p),d=In(o);return{beta:s,probabilidades:p,logLik:u,covarianza:d,informacion:o,convergio:l,iteraciones:i}}function ex(e,a){if(!a){const c=e.map(()=>.5);return{probabilidades:c,logLik:rt(e,c)}}const r=e.reduce((c,s)=>c+s,0)/e.length,t=Math.max(re,Math.min(1-re,r)),n=e.map(()=>t);return{probabilidades:n,logLik:rt(e,n)}}function ax(e,a,r){let t=0,n=0,c=0,s=0;e.forEach((f,g)=>{const b=a[g]>=r?1:0;f===1&&b===1&&(t+=1),f===0&&b===0&&(n+=1),f===0&&b===1&&(c+=1),f===1&&b===0&&(s+=1)});const p=e.length,u=(f,g)=>g>0?f/g:null,l=u(t,t+s),i=u(n,n+c),o=u(t,t+c),d=u(n,n+s),m=o!==null&&l!==null&&o+l>0?2*o*l/(o+l):null;return{umbral:r,verdaderosPositivos:t,verdaderosNegativos:n,falsosPositivos:c,falsosNegativos:s,exactitud:(t+n)/p,sensibilidad:l,especificidad:i,precision:o,valorPredictivoNegativo:d,f1:m,exactitudBalanceada:l!==null&&i!==null?(l+i)/2:null}}function tx(e,a){const r=e.map((u,l)=>({observado:u,probabilidad:a[l]})).sort((u,l)=>l.probabilidad-u.probabilidad),t=e.reduce((u,l)=>u+l,0),n=e.length-t,s=[1/0,...new Set(r.map(u=>u.probabilidad)),-1/0].map(u=>{let l=0,i=0;return r.forEach(o=>{const d=o.probabilidad>=u;d&&o.observado===1&&(l+=1),d&&o.observado===0&&(i+=1)}),{umbral:Number.isFinite(u)?u:null,sensibilidad:t>0?l/t:0,unoMenosEspecificidad:n>0?i/n:0}}).sort((u,l)=>u.unoMenosEspecificidad-l.unoMenosEspecificidad||u.sensibilidad-l.sensibilidad);let p=0;for(let u=1;u<s.length;u+=1){const l=s[u].unoMenosEspecificidad-s[u-1].unoMenosEspecificidad,i=(s[u].sensibilidad+s[u-1].sensibilidad)/2;p+=l*i}return{puntos:s,auc:Math.max(0,Math.min(1,p))}}function rx(e,a){const r=e.map((p,u)=>({observado:p,probabilidad:a[u]})).sort((p,u)=>p.probabilidad-u.probabilidad),t=Math.min(10,Math.max(3,Math.floor(e.length/5))),n=[];for(let p=0;p<t;p+=1){const u=Math.floor(p*r.length/t),l=Math.floor((p+1)*r.length/t),i=r.slice(u,l);if(!i.length)continue;const o=i.reduce((g,b)=>g+b.observado,0),d=i.reduce((g,b)=>g+b.probabilidad,0),m=i.length-o,f=i.length-d;n.push({grupo:n.length+1,n:i.length,probabilidadMedia:i.reduce((g,b)=>g+b.probabilidad,0)/i.length,observadosPositivos:o,esperadosPositivos:d,observadosNegativos:m,esperadosNegativos:f})}const c=n.reduce((p,u)=>{const l=u.esperadosPositivos>re?(u.observadosPositivos-u.esperadosPositivos)**2/u.esperadosPositivos:0,i=u.esperadosNegativos>re?(u.observadosNegativos-u.esperadosNegativos)**2/u.esperadosNegativos:0;return p+l+i},0),s=Math.max(n.length-2,1);return{estadistico:c,gradosLibertad:s,p:Ml(c,s),grupos:n}}function nx(e,a,r,t){const n=e[0].length,c=e.map((l,i)=>{const o=at(t,l);return r[i]*(1-r[i])*tt(l,o)}),s=a.map((l,i)=>{const o=Math.max(r[i]*(1-r[i]),re);return(l-r[i])/Math.sqrt(o)}),p=a.map((l,i)=>{const o=Math.max(re,Math.min(1-re,r[i])),d=l===1?2*Math.log(1/o):2*Math.log(1/(1-o));return Math.sign(l-o)*Math.sqrt(Math.max(d,0))}),u=s.map((l,i)=>{const o=Math.min(c[i],1-re);return l**2*o/(n*Math.max((1-o)**2,re))});return{leverage:c,residuosPearson:s,residuosDeviance:p,distanciaCook:u}}function ix(e,a){return e.length<2?[]:e.map((r,t)=>{const n=e.filter((u,l)=>l!==t),c=Rl(n,!0),s=Wh(c),p=Kh(s,c);try{const u=In(p),l=at(s,r),i=at(u,l),o=at(c,i),d=r.reduce((x,y)=>x+y,0)/r.length,m=r.reduce((x,y)=>x+(y-d)**2,0),f=r.reduce((x,y,v)=>x+(y-o[v])**2,0),g=m>re?Math.max(0,1-f/m):1,b=Math.max(1-g,re);return{variable:a[t],tolerancia:b,vif:1/b}}catch{return{variable:a[t],tolerancia:0,vif:1/0}}})}function ox({y:e,X:a,nombresPredictores:r=[],incluirIntercepto:t=!0,nivelConfianza:n=.95,umbral:c=.5,maxIteraciones:s=100,tolerancia:p=1e-8}){const u=zo("La variable dependiente",e,8);if(!u.every(z=>z===0||z===1))throw new Error("La variable dependiente debe estar codificada exclusivamente con 0 y 1.");const l=u.reduce((z,_)=>z+_,0),i=u.length-l;if(l===0||i===0)throw new Error("La variable dependiente debe contener observaciones de ambas categorías: 0 y 1.");if(!Array.isArray(a)||!a.length)throw new Error("Debe proporcionar al menos una variable predictora.");const o=a.map((z,_)=>zo(r[_]||`X${_+1}`,z,8));if(!o.every(z=>z.length===u.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(n>0&&n<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");if(!(c>0&&c<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const d=o.map((z,_)=>r[_]||`X${_+1}`),m=Rl(o,t),f=u.length,g=m[0].length;if(f<=g+2)throw new Error("No hay suficientes observaciones para estimar el modelo logístico con esta cantidad de predictores.");const b=Zh(m,u,{maxIteraciones:s,tolerancia:p});if(!b.convergio)throw new Error("El algoritmo no alcanzó convergencia. Revise separación perfecta, predictores extremos, colinealidad o tamaño muestral insuficiente.");const x=ex(u,t),y=o.length,v=Math.max(0,2*(b.logLik-x.logLik)),h=Ml(v,y),w=Xh(.5+n/2),k=[...t?["Intercepto"]:[],...d],E=b.beta.map((z,_)=>{const ze=Math.sqrt(Math.max(b.covarianza[_][_],0)),T=ze>re?z/ze:z===0?0:1/0,S=Jh(T),X=z-w*ze,ca=z+w*ze;return{termino:k[_],estimacion:z,errorEstandar:ze,z:T,p:S,intervaloConfianza:{inferior:X,superior:ca,nivel:n},oddsRatio:Math.exp(Math.max(-Ke,Math.min(Ke,z))),intervaloOddsRatio:{inferior:Math.exp(Math.max(-Ke,Math.min(Ke,X))),superior:Math.exp(Math.max(-Ke,Math.min(Ke,ca))),nivel:n}}}),C=ax(u,b.probabilidades,c),$=tx(u,b.probabilidades),I=rx(u,b.probabilidades),A=nx(m,u,b.probabilidades,b.covarianza),L=ix(o,d),R=u.map((z,_)=>({observacion:_+1,observado:z,probabilidad:b.probabilidades[_],residuoPearson:A.residuosPearson[_],residuoDeviance:A.residuosDeviance[_],leverage:A.leverage[_],distanciaCook:A.distanciaCook[_]})).filter(z=>Math.abs(z.residuoPearson)>2||z.leverage>2*g/f||z.distanciaCook>4/f),N=-2*b.logLik,V=-2*x.logLik,P=-2*b.logLik+2*g,D=-2*b.logLik+g*Math.log(f),te=x.logLik!==0?1-b.logLik/x.logLik:null,Y=1-Math.exp(2/f*(x.logLik-b.logLik)),J=1-Math.exp(2/f*x.logLik),oe=J>re?Y/J:null,ue=C.exactitud===1,Q=b.beta.some(z=>Math.abs(z)>15),ge=ue&&Q,Se=[h!==null&&h<.05?`El modelo global mejora significativamente al modelo nulo (χ² = ${v.toFixed(4)}, gl = ${y}, p ${h<.001?"< 0.001":`= ${h.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística al 5 % (χ² = ${v.toFixed(4)}, gl = ${y}, p = ${h?.toFixed(4)??"no disponible"}).`,`El área bajo la curva ROC es ${$.auc.toFixed(4)}, lo que resume la capacidad del modelo para ordenar casos positivos por encima de casos negativos.`,`Con umbral ${c.toFixed(2)}, la exactitud es ${(C.exactitud*100).toFixed(2)} %, la sensibilidad es ${C.sensibilidad===null?"no calculable":`${(C.sensibilidad*100).toFixed(2)} %`} y la especificidad es ${C.especificidad===null?"no calculable":`${(C.especificidad*100).toFixed(2)} %`}.`,I.p!==null&&I.p>=.05?`La prueba de Hosmer–Lemeshow no detecta una discrepancia significativa entre probabilidades observadas y esperadas (p = ${I.p.toFixed(4)}).`:`La prueba de Hosmer–Lemeshow sugiere revisar la calibración del modelo (p ${I.p!==null&&I.p<.001?"< 0.001":`= ${I.p?.toFixed(4)??"no disponible"}`}).`,L.some(z=>z.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":L.some(z=>z.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":L.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",R.length?`Se identificaron ${R.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",ge?"La clasificación perfecta junto con coeficientes extremos sugiere posible separación completa o cuasicompleta; los coeficientes pueden ser inestables.":"No se detectó el patrón automático de separación completa basado en clasificación perfecta y coeficientes extremos."];return{tipoModelo:"regresion-logistica-binaria",n:f,numeroPredictores:o.length,incluirIntercepto:t,nombresPredictores:d,nivelConfianza:n,convergencia:{convergio:b.convergio,iteraciones:b.iteraciones,posibleSeparacion:ge},distribucionRespuesta:{positivos:l,negativos:i,proporcionPositivos:l/f},coeficientes:E,ajuste:{logVerosimilitud:b.logLik,logVerosimilitudNula:x.logLik,deviance:N,devianceNula:V,aic:P,bic:D,r2McFadden:te,r2CoxSnell:Y,r2Nagelkerke:oe},pruebaGlobal:{chiCuadrado:v,gradosLibertad:y,p:h},clasificacion:C,roc:$,calibracion:I,diagnosticos:{...A,vif:L,observacionesInfluyentes:R},probabilidades:b.probabilidades,datosGrafico:u.map((z,_)=>({observacion:_+1,observado:z,probabilidad:b.probabilidades[_],clasePredicha:b.probabilidades[_]>=c?1:0,residuoPearson:A.residuosPearson[_],residuoDeviance:A.residuosDeviance[_],leverage:A.leverage[_],distanciaCook:A.distanciaCook[_],predictores:o.map(ze=>ze[_])})),interpretacion:Se}}function sx(e,a,r=e?.clasificacion?.umbral??.5){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(a)||a.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);if(!(r>0&&r<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const t=a.map(Number);if(!t.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const n=e.coeficientes.map(u=>u.estimacion),c=[...e.incluirIntercepto?[1]:[],...t],s=tt(c,n),p=Kt(s);return{predictorLineal:s,probabilidad:p,umbral:r,clasePredicha:p>=r?1:0}}function Ln(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ne(e,a=3){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}):e>0?"∞":"—"}function Ba(e,a,r,t=""){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg overflow-hidden ${t}">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${a}
            </p>
            ${r}
        </article>
    `}function lx(e){const t={izquierda:62,derecha:24,superior:26,inferior:58},n=560-t.izquierda-t.derecha,c=390-t.superior-t.inferior,s=i=>t.izquierda+i*n,p=i=>t.superior+(1-i)*c,u=e.roc.puntos.map(i=>`${s(i.unoMenosEspecificidad)},${p(i.sensibilidad)}`).join(" "),l=`
        <div class="overflow-x-auto">
            <svg
                viewBox="0 0 560 390"
                class="min-w-[520px] w-full"
                role="img"
                aria-label="Curva ROC con área bajo la curva ${ne(e.roc.auc,4)}"
            >
                <line x1="${s(0)}" y1="${p(0)}" x2="${s(1)}" y2="${p(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s(0)}" y1="${p(0)}" x2="${s(0)}" y2="${p(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s(0)}" y1="${p(0)}" x2="${s(1)}" y2="${p(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(i=>`
                    <line x1="${s(i)}" y1="${p(0)}" x2="${s(i)}" y2="${p(1)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <line x1="${s(0)}" y1="${p(i)}" x2="${s(1)}" y2="${p(i)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <text x="${s(i)}" y="358" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${i}</text>
                    <text x="${t.izquierda-14}" y="${p(i)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${i}</text>
                `).join("")}

                <polyline
                    points="${u}"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-indigo-700"
                />

                <text x="${t.izquierda+n/2}" y="382" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">
                    1 − especificidad
                </text>
                <text x="16" y="${t.superior+c/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${t.superior+c/2})">
                    Sensibilidad
                </text>
            </svg>
        </div>
        <div class="mt-4 rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-indigo-950">
            <span class="font-black">AUC = ${ne(e.roc.auc,4)}</span>
            <span class="text-sm ml-2">Cuanto más se aproxima a 1, mayor es la capacidad discriminativa.</span>
        </div>
    `;return Ba("Curva ROC","Relaciona sensibilidad y tasa de falsos positivos para todos los umbrales posibles. La diagonal representa una clasificación sin capacidad discriminativa.",l)}function cx(e){const a=e.clasificacion,r=(n,c,s)=>`
        <div class="rounded-2xl border p-5 text-center ${s}">
            <span class="block text-xs uppercase tracking-widest font-black mb-2">
                ${n}
            </span>
            <strong class="block text-4xl font-black">${c}</strong>
        </div>
    `,t=`
        <div class="grid grid-cols-[auto_1fr_1fr] gap-3 items-stretch">
            <div></div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 0</div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 1</div>

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 0</div>
            ${r("Verdadero negativo",a.verdaderosNegativos,"border-emerald-200 bg-emerald-50 text-emerald-950")}
            ${r("Falso positivo",a.falsosPositivos,"border-amber-200 bg-amber-50 text-amber-950")}

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 1</div>
            ${r("Falso negativo",a.falsosNegativos,"border-red-200 bg-red-50 text-red-950")}
            ${r("Verdadero positivo",a.verdaderosPositivos,"border-indigo-200 bg-indigo-50 text-indigo-950")}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-center">
            ${[["Exactitud",a.exactitud],["Sensibilidad",a.sensibilidad],["Especificidad",a.especificidad],["F1",a.f1]].map(([n,c])=>`
                <div class="rounded-xl bg-slate-50 border border-slate-200 px-3 py-4">
                    <span class="block text-xs font-black uppercase tracking-wider text-slate-500">${n}</span>
                    <strong class="block mt-1 text-xl text-slate-900">${c===null?"—":`${ne(c*100,2)} %`}</strong>
                </div>
            `).join("")}
        </div>
    `;return Ba("Matriz de confusión",`Resume la clasificación con umbral ${ne(a.umbral,2)}. Los falsos positivos y falsos negativos deben interpretarse según el costo real de cada error.`,t)}function dx(e,a){const s=d=>48+d*504,l=e.datosGrafico.map((d,m)=>{const f=d.observado===1?90:210,g=(m%7-3)*5,b=d.observado===1?"text-indigo-700":"text-sky-500";return`
            <circle
                cx="${s(d.probabilidad)}"
                cy="${f+g}"
                r="5"
                fill="currentColor"
                class="${b}"
            >
                <title>Observación ${d.observacion}: Y=${d.observado}, p=${ne(d.probabilidad,4)}</title>
            </circle>
        `}).join(""),i=s(e.clasificacion.umbral),o=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 600 300" class="min-w-[560px] w-full" role="img" aria-label="Distribución de probabilidades por clase observada">
                <line x1="48" y1="250" x2="552" y2="250" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${i}" y1="38" x2="${i}" y2="250" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" class="text-red-500" />
                <text x="${i}" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-red-600">Umbral ${ne(e.clasificacion.umbral,2)}</text>

                ${[0,.25,.5,.75,1].map(d=>`
                    <line x1="${s(d)}" y1="250" x2="${s(d)}" y2="256" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                    <text x="${s(d)}" y="275" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${d}</text>
                `).join("")}

                <text x="18" y="94" font-size="13" font-weight="800" fill="currentColor" class="text-indigo-800">Y=1</text>
                <text x="18" y="214" font-size="13" font-weight="800" fill="currentColor" class="text-sky-700">Y=0</text>
                ${l}
                <text x="${600/2}" y="296" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad estimada de ${Ln(a)} = 1</text>
            </svg>
        </div>
    `;return Ba("Probabilidades estimadas por clase","Una buena separación visual concentra los casos observados con valor 1 hacia probabilidades altas y los casos con valor 0 hacia probabilidades bajas.",o)}function ux(e){const a=e.calibracion.grupos.map(o=>({...o,proporcionObservada:o.n>0?o.observadosPositivos/o.n:0})),r=560,t=390,n={izquierda:62,derecha:24,superior:26,inferior:58},c=r-n.izquierda-n.derecha,s=t-n.superior-n.inferior,p=o=>n.izquierda+o*c,u=o=>n.superior+(1-o)*s,l=a.map(o=>`${p(o.probabilidadMedia)},${u(o.proporcionObservada)}`).join(" "),i=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${r} ${t}" class="min-w-[520px] w-full" role="img" aria-label="Gráfico de calibración">
                <line x1="${p(0)}" y1="${u(0)}" x2="${p(1)}" y2="${u(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${p(0)}" y1="${u(0)}" x2="${p(0)}" y2="${u(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${p(0)}" y1="${u(0)}" x2="${p(1)}" y2="${u(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(o=>`
                    <text x="${p(o)}" y="${t-32}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${o}</text>
                    <text x="${n.izquierda-14}" y="${u(o)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${o}</text>
                `).join("")}

                <polyline points="${l}" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600" />
                ${a.map(o=>`
                    <circle cx="${p(o.probabilidadMedia)}" cy="${u(o.proporcionObservada)}" r="6" fill="currentColor" class="text-emerald-700">
                        <title>Grupo ${o.grupo}: esperado ${ne(o.probabilidadMedia,3)}, observado ${ne(o.proporcionObservada,3)}</title>
                    </circle>
                `).join("")}

                <text x="${n.izquierda+c/2}" y="${t-8}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad media estimada</text>
                <text x="16" y="${n.superior+s/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${n.superior+s/2})">Proporción observada</text>
            </svg>
        </div>
        <div class="mt-4 text-sm text-slate-600">
            Hosmer–Lemeshow: χ² = <strong>${ne(e.calibracion.estadistico,4)}</strong>, p = <strong>${ne(e.calibracion.p,4)}</strong>.
        </div>
    `;return Ba("Calibración","Compara la probabilidad media estimada con la proporción realmente observada en grupos ordenados por riesgo. Los puntos próximos a la diagonal indican mejor calibración.",i)}function px(e){const a=e.coeficientes.filter(f=>f.termino!=="Intercepto");if(!a.length)return"";const r=620,t=58,n=80+a.length*t,c=170,s=40,p=a.flatMap(f=>[Math.log(Math.max(f.intervaloOddsRatio.inferior,1e-8)),Math.log(Math.max(f.intervaloOddsRatio.superior,1e-8)),0]);let u=Math.min(...p),l=Math.max(...p);Math.abs(l-u)<.5&&(u-=.5,l+=.5);const i=l-u,o=f=>c+(Math.log(Math.max(f,1e-8))-u)/i*(r-c-s),d=o(1),m=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${r} ${n}" class="min-w-[580px] w-full" role="img" aria-label="Gráfico de razones de probabilidades">
                <line x1="${d}" y1="28" x2="${d}" y2="${n-34}" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" class="text-slate-400" />
                <text x="${d}" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-slate-600">OR = 1</text>

                ${a.map((f,g)=>{const b=58+g*t,x=o(f.intervaloOddsRatio.inferior),y=o(f.intervaloOddsRatio.superior),v=o(f.oddsRatio),h=f.p<.05;return`
                        <text x="${c-14}" y="${b+4}" text-anchor="end" font-size="12" font-weight="700" fill="currentColor" class="text-slate-700">${Ln(f.termino)}</text>
                        <line x1="${x}" y1="${b}" x2="${y}" y2="${b}" stroke="currentColor" stroke-width="4" class="${h?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${x}" y1="${b-7}" x2="${x}" y2="${b+7}" stroke="currentColor" stroke-width="2" class="${h?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${y}" y1="${b-7}" x2="${y}" y2="${b+7}" stroke="currentColor" stroke-width="2" class="${h?"text-indigo-500":"text-slate-400"}" />
                        <circle cx="${v}" cy="${b}" r="7" fill="currentColor" class="${h?"text-indigo-800":"text-slate-600"}">
                            <title>${Ln(f.termino)}: OR=${ne(f.oddsRatio,4)}, IC [${ne(f.intervaloOddsRatio.inferior,4)}, ${ne(f.intervaloOddsRatio.superior,4)}]</title>
                        </circle>
                    `}).join("")}

                <text x="${c}" y="${n-10}" text-anchor="start" font-size="11" fill="currentColor" class="text-slate-600">${ne(Math.exp(u),3)}</text>
                <text x="${r-s}" y="${n-10}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${ne(Math.exp(l),3)}</text>
            </svg>
        </div>
    `;return Ba("Razones de probabilidades e intervalos de confianza","Valores mayores que 1 indican aumento de las odds del evento por unidad del predictor; valores menores que 1 indican disminución, manteniendo constantes los demás predictores.",m,"xl:col-span-2")}function mx(e){const a=e.datosGrafico.map(s=>s.distanciaCook),r=Math.max(...a,4/e.n,1e-8),t=4/e.n,n=e.datosGrafico.map(s=>{const p=Math.max(2,s.distanciaCook/r*180);return`
            <div class="flex flex-col justify-end items-center min-w-[18px] h-full">
                <div
                    class="w-3 rounded-t ${s.distanciaCook>t?"bg-red-600":"bg-sky-600"}"
                    style="height:${p}px"
                    title="Observación ${s.observacion}: Cook = ${ne(s.distanciaCook,5)}"
                ></div>
                <span class="text-[9px] text-slate-500 mt-1">${s.observacion}</span>
            </div>
        `}).join(""),c=`
        <div class="relative h-64 border-l border-b border-slate-300 px-3 pt-4 overflow-x-auto">
            <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-300" style="bottom:${Math.min(220,t/r*180+22)}px">
                <span class="absolute right-1 -top-5 text-[10px] font-black text-red-600">4/n = ${ne(t,4)}</span>
            </div>
            <div class="relative flex items-end gap-1 min-w-max h-full">
                ${n}
            </div>
        </div>
    `;return Ba("Distancia de Cook","Señala observaciones con potencial influencia sobre el ajuste. El criterio 4/n es orientativo y no sustituye la revisión del caso y del diseño del estudio.",c)}function fx(e,a="Y"){return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización del modelo
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Discriminación, clasificación, calibración e influencia
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-5xl mb-7">
                Examine conjuntamente los gráficos. Un modelo puede discriminar bien y, al mismo tiempo, presentar mala calibración o depender excesivamente de algunas observaciones.
            </p>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${lx(e)}
                ${cx(e)}
                ${dx(e,a)}
                ${ux(e)}
                ${px(e)}
                ${mx(e)}
            </div>
        </section>
    `}function bx(){const e=document.createElement("section");let a=null,r=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-rose-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <div class="flex flex-wrap gap-4 mb-7">
                    <button
                        type="button"
                        data-action="volver-regresion"
                        class="inline-flex items-center gap-2 text-rose-300 font-black hover:text-white transition-colors"
                    >
                        <span aria-hidden="true">←</span>
                        Modelos de regresión
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors"
                    >
                        Laboratorio
                    </button>
                </div>

                <p class="uppercase tracking-[0.20em] text-rose-300 text-xs md:text-sm font-black mb-3">
                    Modelización de resultados binarios
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión logística binaria
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime la probabilidad de un evento codificado como 0 o 1, interprete razones de probabilidades, evalúe discriminación y calibración, y realice nuevas predicciones.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Odds ratios</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Curva ROC y AUC</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Calibración</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Clasificación</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${qt("Resultado binario","La primera columna debe contener exclusivamente 0 y 1. Defina con claridad qué representa el evento codificado como 1.")}
                    ${qt("Predictores","Coloque después una columna por cada variable explicativa cuantitativa o previamente codificada.")}
                    ${qt("Encabezados","La primera fila puede contener nombres de variables. Sin encabezados se asignarán Y, X1, X2, …")}
                    ${qt("Interpretación","Una razón de probabilidades mayor que 1 indica aumento de las odds del evento; una menor que 1 indica disminución, manteniendo constantes los demás predictores.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Advertencia metodológica
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión logística no demuestra causalidad. Requiere observaciones independientes, tamaño muestral suficiente, ausencia de colinealidad severa y revisión de separación completa, influencia y calibración.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion-logistica"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Umbral de clasificación
                        </span>
                        <input
                            type="number"
                            name="umbral"
                            min="0.01"
                            max="0.99"
                            step="0.01"
                            value="0.50"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        />
                    </label>

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-rose-700 focus:ring-rose-500"
                            />
                            Incluir intercepto
                        </span>
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Datos por filas
                    </span>
                    <textarea
                        name="datos"
                        rows="15"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        placeholder="Aprobó, Horas, Asistencia
0, 2, 60
1, 7, 90"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Use punto para los decimales.
                    </span>
                </label>

                <label class="block mt-5">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Importar CSV o TXT
                    </span>
                    <input
                        type="file"
                        name="archivo"
                        accept=".csv,.txt,text/csv,text/plain"
                        class="block w-full text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-rose-50 file:px-5 file:py-3 file:font-black file:text-rose-700 hover:file:bg-rose-100"
                    />
                </label>

                <div
                    id="mensaje-error-logistica"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-rose-700 text-white font-black rounded-xl px-7 py-4 hover:bg-rose-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo logístico
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-rose-300 text-rose-700 font-black rounded-xl px-6 py-4 hover:bg-rose-50 transition-colors"
                    >
                        Cargar ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-regresion-logistica"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const t=e.querySelector("#formulario-regresion-logistica"),n=e.querySelector("#mensaje-error-logistica"),c=e.querySelector("#resultados-regresion-logistica");return t.elements.archivo.addEventListener("change",async()=>{const s=t.elements.archivo.files?.[0];if(s)try{t.elements.datos.value=await s.text(),Ot(n)}catch{Do(n,"No fue posible leer el archivo seleccionado.")}}),t.addEventListener("submit",s=>{s.preventDefault(),Ot(n);try{const{solicitud:p,metadatos:u}=hx(t),l=ox(p);a=l,r=u,c.innerHTML=Ix(l,u),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){c.classList.add("hidden"),a=null,r=null,Do(n,p instanceof Error?p.message:"No fue posible ajustar el modelo logístico.")}}),e.addEventListener("submit",s=>{const p=s.target.closest("#formulario-prediccion-logistica");if(!p||!a)return;s.preventDefault();const u=[...p.querySelectorAll("[data-predictor]")].map(i=>Number(i.value)),l=p.querySelector("#resultado-prediccion-logistica");try{const i=sx(a,u,a.clasificacion.umbral);l.innerHTML=`
                <div class="rounded-2xl border border-rose-200 bg-white p-5 text-rose-950">
                    <p class="text-sm font-black uppercase tracking-widest text-rose-700 mb-2">
                        Predicción estimada
                    </p>
                    <p class="text-3xl font-black">
                        Probabilidad = ${O(i.probabilidad*100,2)} %
                    </p>
                    <p class="mt-2 text-sm leading-relaxed">
                        Con umbral ${O(i.umbral,2)}, la clase predicha es <strong>${i.clasePredicha}</strong>. Esta predicción debe interpretarse dentro del rango y población estudiados.
                    </p>
                </div>
            `}catch(i){l.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${ia(i.message)}
                </div>
            `}}),e.addEventListener("click",async s=>{const p=s.target.closest("[data-action]");if(p)switch(p.dataset.action){case"volver-regresion":window.location.hash="/regresionModelos";break;case"volver-laboratorio":window.location.hash="/laboratorioKernel";break;case"cargar-ejemplo":xx(t),c.classList.add("hidden"),Ot(n);break;case"limpiar":t.reset(),t.elements.umbral.value="0.50",c.classList.add("hidden"),a=null,r=null,Ot(n);break;case"exportar-csv":a&&r&&Rx(a,r);break;case"copiar-reporte":a&&r&&await Mx(a,r,p);break;case"imprimir":window.print();break}}),e}function qt(e,a){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${a}</p>
        </div>
    `}function gx(e){return e.trim().split(/[,;\t]+/).map(a=>a.trim())}function hx(e){const a=e.elements.datos.value.trim();if(!a)throw new Error("Introduzca los datos antes de ajustar el modelo.");const r=a.split(/\r?\n+/).map(gx).filter(l=>l.length&&l.some(Boolean));if(r.length<9)throw new Error("Introduzca al menos ocho observaciones y, cuando corresponda, una fila de encabezados.");const n=r[0].every(l=>Number.isFinite(Number(l)))?r[0].map((l,i)=>i===0?"Y":`X${i}`):r.shift(),c=n.length;if(c<2)throw new Error("Se requieren al menos dos columnas: resultado binario y un predictor.");if(!r.every(l=>l.length===c))throw new Error("Todas las filas deben tener la misma cantidad de columnas.");const s=r.map((l,i)=>l.map((o,d)=>{const m=Number(o);if(!Number.isFinite(m))throw new Error(`El valor de la fila ${i+1}, columna ${d+1} no es numérico.`);return m})),p=s.map(l=>l[0]);if(!p.every(l=>l===0||l===1))throw new Error("La primera columna debe contener únicamente valores 0 y 1.");const u=Number(e.elements.umbral.value);return{solicitud:{y:p,X:Array.from({length:c-1},(l,i)=>s.map(o=>o[i+1])),nombresPredictores:n.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value),umbral:u},metadatos:{nombreDependiente:n[0],nombresPredictores:n.slice(1)}}}function xx(e){e.elements.datos.value=`Aprobó, HorasEstudio, Asistencia
0, 1.0, 55
0, 1.5, 60
0, 2.0, 58
0, 2.2, 64
0, 2.8, 62
0, 3.0, 68
0, 3.5, 66
1, 3.8, 72
0, 4.0, 70
1, 4.2, 75
0, 4.5, 69
1, 4.8, 78
1, 5.0, 80
0, 5.2, 73
1, 5.5, 82
1, 5.8, 84
0, 6.0, 76
1, 6.2, 86
1, 6.5, 88
1, 6.8, 90
1, 7.0, 87
1, 7.5, 92
1, 8.0, 94
1, 8.5, 96`,e.elements.nivelConfianza.value="0.95",e.elements.umbral.value="0.50",e.elements.incluirIntercepto.checked=!0}function Do(e,a){e.textContent=a,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function Ot(e){e.textContent="",e.classList.add("hidden")}function ia(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function O(e,a=4){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}):e>0?"∞":"—"}function lr(e){return e==null||!Number.isFinite(e)?"no disponible":e<.001?"< 0.001":`= ${O(e,4)}`}function Ft(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p class="text-xs uppercase tracking-widest font-black text-slate-500 mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-950">
                ${a}
            </p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                ${r}
            </p>
        </article>
    `}function vx(e,a){const r=e.coeficientes.map((t,n)=>{const c=t.estimacion,s=O(Math.abs(c),6),p=c<0?"−":n===0?"":"+",u=t.termino==="Intercepto"?"":` · ${ia(t.termino)}`;return`${p} ${s}${u}`.trim()});return`logit[P(${ia(a)}=1)] = ${r.join(" ")}`}function yx(e){const a=[],r=Math.min(e.distribucionRespuesta.proporcionPositivos,1-e.distribucionRespuesta.proporcionPositivos);return e.convergencia.posibleSeparacion&&a.push({nivel:"alto",titulo:"Posible separación completa",texto:"La clasificación perfecta y los coeficientes extremos pueden producir estimaciones inestables. Revise los datos y considere métodos penalizados."}),e.calibracion.p!==null&&e.calibracion.p<.05&&a.push({nivel:"medio",titulo:"Calibración cuestionable",texto:"Hosmer–Lemeshow resulta significativo. Examine el gráfico de calibración, la forma funcional y posibles interacciones."}),e.diagnosticos.vif.some(t=>t.vif>=10)?a.push({nivel:"alto",titulo:"Multicolinealidad severa",texto:"Al menos un predictor presenta VIF de 10 o más. Los coeficientes y sus errores estándar pueden ser inestables."}):e.diagnosticos.vif.some(t=>t.vif>=5)&&a.push({nivel:"medio",titulo:"Multicolinealidad moderada",texto:"Al menos un predictor presenta VIF entre 5 y 10. Revise redundancia conceptual y correlaciones entre predictores."}),e.diagnosticos.observacionesInfluyentes.length&&a.push({nivel:"medio",titulo:"Observaciones influyentes",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} casos mediante residuos, leverage o distancia de Cook.`}),r<.2&&a.push({nivel:"medio",titulo:"Clases desequilibradas",texto:"La categoría menos frecuente representa menos del 20 % de la muestra. La exactitud global puede ser engañosa; priorice sensibilidad, especificidad, F1 y AUC."}),e.roc.auc<.6&&a.push({nivel:"medio",titulo:"Discriminación limitada",texto:"El AUC es menor que 0.60. El modelo apenas separa las categorías y requiere revisión sustantiva o nuevos predictores."}),a.length?`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${a.map(t=>`
                    <article class="rounded-2xl border p-5 ${t.nivel==="alto"?"border-red-200 bg-red-50 text-red-950":"border-amber-200 bg-amber-50 text-amber-950"}">
                        <h3 class="font-black mb-2">${t.titulo}</h3>
                        <p class="text-sm leading-relaxed">${t.texto}</p>
                    </article>
                `).join("")}
        </div>
    `:`
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <strong class="block mb-1">Sin alertas automáticas prioritarias</strong>
                Los indicadores revisados no muestran problemas graves, pero la validación del diseño y los supuestos sigue siendo necesaria.
            </div>
        `}function wx(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Término</th>
                        <th class="px-4 py-3 text-right">B</th>
                        <th class="px-4 py-3 text-right">Error est.</th>
                        <th class="px-4 py-3 text-right">z</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-right">OR</th>
                        <th class="px-4 py-3 text-right">IC de OR</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(a=>`
                        <tr class="${a.p<.05?"bg-rose-50":""}">
                            <td class="px-4 py-3 font-black text-slate-900">${ia(a.termino)}</td>
                            <td class="px-4 py-3 text-right">${O(a.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${O(a.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${O(a.z,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${lr(a.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${O(a.oddsRatio,5)}</td>
                            <td class="px-4 py-3 text-right">[${O(a.intervaloOddsRatio.inferior,5)}, ${O(a.intervaloOddsRatio.superior,5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function kx(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Indicador</th>
                        <th class="px-4 py-3 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Log-verosimilitud",e.ajuste.logVerosimilitud],["Deviance",e.ajuste.deviance],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["R² de McFadden",e.ajuste.r2McFadden],["R² de Cox–Snell",e.ajuste.r2CoxSnell],["R² de Nagelkerke",e.ajuste.r2Nagelkerke]].map(([r,t])=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${r}</td>
                            <td class="px-4 py-3 text-right">${O(t,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ex(e){const a=e.clasificacion;return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Métrica</th>
                        <th class="px-4 py-3 text-right">Resultado</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Exactitud",a.exactitud],["Sensibilidad",a.sensibilidad],["Especificidad",a.especificidad],["Precisión positiva",a.precision],["Valor predictivo negativo",a.valorPredictivoNegativo],["F1",a.f1],["Exactitud balanceada",a.exactitudBalanceada]].map(([t,n])=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${t}</td>
                            <td class="px-4 py-3 text-right">${n===null?"—":`${O(n*100,2)} %`}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Cx(e){return e.diagnosticos.vif.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Predictor</th>
                        <th class="px-4 py-3 text-right">Tolerancia</th>
                        <th class="px-4 py-3 text-right">VIF</th>
                        <th class="px-4 py-3 text-left">Lectura</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.diagnosticos.vif.map(a=>{const r=a.vif>=10?"Severa":a.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <td class="px-4 py-3 font-black text-slate-900">${ia(a.variable)}</td>
                                <td class="px-4 py-3 text-right">${O(a.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${O(a.vif,4)}</td>
                                <td class="px-4 py-3">${r}</td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>
    `:`
            <p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El VIF no aplica cuando el modelo contiene un solo predictor.
            </p>
        `}function $x(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[460px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-right">Obs.</th>
                        <th class="px-4 py-3 text-right">Y</th>
                        <th class="px-4 py-3 text-right">Probabilidad</th>
                        <th class="px-4 py-3 text-right">Clase</th>
                        <th class="px-4 py-3 text-right">Residuo Pearson</th>
                        <th class="px-4 py-3 text-right">Residuo deviance</th>
                        <th class="px-4 py-3 text-right">Leverage</th>
                        <th class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(a=>`
                            <tr class="${Math.abs(a.residuoPearson)>2||a.distanciaCook>4/e.n||a.leverage>2*(e.numeroPredictores+1)/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${a.observacion}</td>
                                <td class="px-4 py-3 text-right">${a.observado}</td>
                                <td class="px-4 py-3 text-right">${O(a.probabilidad,6)}</td>
                                <td class="px-4 py-3 text-right font-black">${a.clasePredicha}</td>
                                <td class="px-4 py-3 text-right">${O(a.residuoPearson,4)}</td>
                                <td class="px-4 py-3 text-right">${O(a.residuoDeviance,4)}</td>
                                <td class="px-4 py-3 text-right">${O(a.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${O(a.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ax(e){return`
        <form id="formulario-prediccion-logistica" class="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-rose-950 mb-3">
                Estimar una nueva probabilidad
            </h2>
            <p class="text-rose-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Evite extrapolar fuera del rango observado y no interprete la probabilidad como certeza individual.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((a,r)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-rose-950 mb-2">
                            ${ia(a)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${r}"
                            class="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                            placeholder="Valor de ${ia(a)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-rose-700 px-7 py-4 text-white font-black hover:bg-rose-800 transition-colors shadow-lg"
            >
                Calcular probabilidad
            </button>

            <div id="resultado-prediccion-logistica" class="mt-5" aria-live="polite"></div>
        </form>
    `}function Ix(e,a){const r=e.pruebaGlobal.p!==null&&e.pruebaGlobal.p<.05;return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-rose-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        Regresión logística binaria
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${e.n} observaciones, ${e.numeroPredictores} predictor${e.numeroPredictores===1?"":"es"} y convergió en ${e.convergencia.iteraciones} iteraciones.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${r?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${r?"Modelo global significativo":"Modelo global no significativo al 5 %"}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${vx(e,a.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${Ft("χ² global",O(e.pruebaGlobal.chiCuadrado,4),`p ${lr(e.pruebaGlobal.p)}`)}
            ${Ft("R² Nagelkerke",O(e.ajuste.r2Nagelkerke,4),"Pseudo-R² escalado entre 0 y 1")}
            ${Ft("AUC",O(e.roc.auc,4),"Capacidad discriminativa global")}
            ${Ft("Exactitud",`${O(e.clasificacion.exactitud*100,2)} %`,`Umbral ${O(e.clasificacion.umbral,2)}`)}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${yx(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Efectos individuales</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de probabilidades</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Cada prueba Wald contrasta si el coeficiente difiere de cero. La OR expresa el cambio multiplicativo de las odds por una unidad del predictor, manteniendo constantes los demás.
            </p>
            ${wx(e)}
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Ajuste relativo</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Indicadores del modelo</h2>
                <p class="text-slate-600 leading-relaxed mb-6">AIC y BIC sirven principalmente para comparar modelos estimados sobre la misma muestra y variable dependiente; valores menores son preferibles.</p>
                ${kx(e)}
            </article>

            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Rendimiento de clasificación</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Métricas con el umbral seleccionado</h2>
                <p class="text-slate-600 leading-relaxed mb-6">Cambiar el umbral modifica sensibilidad, especificidad y los errores de clasificación; debe elegirse según el objetivo y costo de los errores.</p>
                ${Ex(e)}
            </article>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${Cx(e)}
        </section>

        ${fx(e,a.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Probabilidades y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo elevado, leverage o distancia de Cook. Nunca elimine casos únicamente por un criterio automático.</p>
            ${$x(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(t=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${ia(t)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${Ax(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                La significación estadística de un coeficiente no implica importancia práctica. Las razones de probabilidades dependen de la escala de cada predictor y no equivalen directamente a cambios de probabilidad. Para fines predictivos, el modelo debe evaluarse con validación externa o partición de datos, especialmente cuando se seleccionaron variables utilizando la misma muestra.
            </p>
        </section>
    `}function Px(e,a){const r=["REGRESIÓN LOGÍSTICA BINARIA — LABORATORIO KERNEL","",`Variable dependiente: ${a.nombreDependiente} (evento = 1)`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`χ² global = ${O(e.pruebaGlobal.chiCuadrado,4)}`,`p del modelo ${lr(e.pruebaGlobal.p)}`,`R² Nagelkerke = ${O(e.ajuste.r2Nagelkerke,4)}`,`AUC = ${O(e.roc.auc,4)}`,`Exactitud = ${O(e.clasificacion.exactitud*100,2)} %`,`Sensibilidad = ${e.clasificacion.sensibilidad===null?"no calculable":`${O(e.clasificacion.sensibilidad*100,2)} %`}`,`Especificidad = ${e.clasificacion.especificidad===null?"no calculable":`${O(e.clasificacion.especificidad*100,2)} %`}`,"","Coeficientes:"];return e.coeficientes.forEach(t=>{r.push(`${t.termino}: B = ${O(t.estimacion,6)}, OR = ${O(t.oddsRatio,5)}, z = ${O(t.z,4)}, p ${lr(t.p)}`)}),r.push("","Interpretación:"),e.interpretacion.forEach(t=>r.push(`- ${t}`)),r.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),r.join(`
`)}function Lx(e){return`"${String(e??"").replaceAll('"','""')}"`}function Rx(e,a){const t=[["REGRESIÓN LOGÍSTICA BINARIA"],["Variable dependiente",a.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["Chi-cuadrado global",e.pruebaGlobal.chiCuadrado],["p del modelo",e.pruebaGlobal.p],["R2 McFadden",e.ajuste.r2McFadden],["R2 Cox-Snell",e.ajuste.r2CoxSnell],["R2 Nagelkerke",e.ajuste.r2Nagelkerke],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["AUC",e.roc.auc],["Umbral",e.clasificacion.umbral],["Exactitud",e.clasificacion.exactitud],["Sensibilidad",e.clasificacion.sensibilidad],["Especificidad",e.clasificacion.especificidad],[],["Término","Coeficiente","Error estándar","z","p","Odds ratio","IC OR inferior","IC OR superior"],...e.coeficientes.map(s=>[s.termino,s.estimacion,s.errorEstandar,s.z,s.p,s.oddsRatio,s.intervaloOddsRatio.inferior,s.intervaloOddsRatio.superior]),[],["Observación","Observado","Probabilidad","Clase predicha","Residuo Pearson","Residuo deviance","Leverage","Distancia de Cook"],...e.datosGrafico.map(s=>[s.observacion,s.observado,s.probabilidad,s.clasePredicha,s.residuoPearson,s.residuoDeviance,s.leverage,s.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(s=>s.map(Lx).join(",")).join(`
`),n=new Blob(["\uFEFF",t],{type:"text/csv;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(n),c.download="regresion-logistica-binaria-kernel.csv",c.click(),URL.revokeObjectURL(c.href)}async function Mx(e,a,r){const t=Px(e,a),n=r.textContent;try{await navigator.clipboard.writeText(t),r.textContent="Reporte copiado"}catch{const c=document.createElement("textarea");c.value=t,document.body.appendChild(c),c.select(),document.execCommand("copy"),c.remove(),r.textContent="Reporte copiado"}window.setTimeout(()=>{r.textContent=n},1800)}async function Tx(){const e=await Go(()=>import("./CalculadoraRegresionConteo-VE7dPXsR.js"),[],import.meta.url);if(typeof e.CalculadoraRegresionConteo!="function")throw new Error("La calculadora de regresión de conteo no está disponible.");return e.CalculadoraRegresionConteo()}async function Nx(){const e=await Go(()=>import("./CalculadoraFiabilidadCuestionarios-ZSbzk_bG.js"),[],import.meta.url);if(typeof e.CalculadoraFiabilidadCuestionarios!="function")throw new Error("La calculadora de cuestionarios y fiabilidad no está disponible.");return e.CalculadoraFiabilidadCuestionarios()}const Sx={home:{page:ec,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:vc,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Ac,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:Mc,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:Hc,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:Xc,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:md,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:od,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Ed,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:Ld,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Nf,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:Wf,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:ob,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:yb,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:Nb,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:ag,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:Pg,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:Dg,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:Kg,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:h0,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:Y0,layout:"default",title:"Estadística descriptiva | El Kernel"},calculadoraFiabilidadCuestionarios:{page:Nx,layout:"default",title:"Cuestionarios y fiabilidad | El Kernel"},regresionModelos:{page:ch,layout:"default",title:"Modelos de regresión | El Kernel"},calculadoraRegresion:{page:Mh,layout:"default",title:"Regresión lineal y múltiple | El Kernel"},calculadoraRegresionLogistica:{page:bx,layout:"default",title:"Regresión logística binaria | El Kernel"},calculadoraRegresionConteo:{page:Tx,layout:"default",title:"Regresión de Poisson y binomial negativa | El Kernel"}};let qo=document.referrer||"";function ht(e){window.location.hash=`/${e}`}function zx(){const e=()=>{const a=window.location.hash.replace("#/","")||"home";qx(a)};window.addEventListener("hashchange",e),e()}function _x(e,a){const r=`${window.location.origin}${window.location.pathname}#/${e}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:a,page_location:r,page_referrer:qo}),qo=r}function Dx(e){const a=document.createElement("section");a.className=`
        w-full max-w-4xl mx-auto
        px-4 py-12 md:px-8
        font-sans
    `,a.innerHTML=`
        <div class="rounded-3xl border border-red-200 bg-white p-6 md:p-9 shadow-xl">
            <p class="uppercase tracking-widest text-red-700 text-xs font-black mb-2">
                Error de carga
            </p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                No fue posible abrir esta herramienta
            </h1>
            <p class="text-slate-600 leading-relaxed mb-5">
                La aplicación principal continúa disponible. Regrese al laboratorio o intente cargar nuevamente esta ruta.
            </p>
            <div data-mensaje-error-ruta class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 break-words"></div>
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button type="button" data-action="reintentar-ruta" class="rounded-xl bg-red-700 px-6 py-3 text-white font-black hover:bg-red-800 transition-colors">
                    Reintentar
                </button>
                <button type="button" data-action="volver-laboratorio" class="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 font-black hover:bg-slate-50 transition-colors">
                    Volver al laboratorio
                </button>
            </div>
        </div>
    `;const r=a.querySelector("[data-mensaje-error-ruta]");return r&&(r.textContent=e instanceof Error?e.message:"Se produjo un error inesperado."),a.querySelector("[data-action='reintentar-ruta']")?.addEventListener("click",()=>{window.location.reload()}),a.querySelector("[data-action='volver-laboratorio']")?.addEventListener("click",()=>{ht("laboratorioKernel")}),a}async function qx(e){const a=document.querySelector("main"),r=Sx[e];if(a){if(a.innerHTML="",!r){ht("home");return}Ic(r.layout),document.title=r.title;try{const t=await r.page();if(!(t instanceof Element))throw new Error("La herramienta no devolvió un componente válido.");a.appendChild(t),window.scrollTo({top:0,behavior:"auto"}),_x(e,r.title)}catch(t){console.error(`[Kernel] Error al cargar la ruta ${e}.`,t),a.appendChild(Dx(t))}}}function Ox(e,a){Ho(e,ht),zx();const r=window.matchMedia("(max-width: 768px)");let t=!1;function n(s){s.matches&&!t&&(ii(e),t=!0)}r.addEventListener("change",n),n(r),ii(e);const c=a.querySelector('[data-action ="open-menu"]');_l(c,e),Dl(e)}function Fx(e){const a=String(e??"").replace(/\u00a0/g,"").replace(/\s/g,"").replace(/[^0-9+\-.,eE]/g,"");if(!a)return null;const r=a.lastIndexOf(","),t=a.lastIndexOf(".");let n=a;r>=0&&t>=0?n=t>r?a.replace(/,/g,""):a.replace(/\./g,"").replace(",","."):r>=0&&(n=a.length-r-1===3&&r>0?a.replace(/,/g,""):a.replace(",","."));const c=Number(n);return Number.isFinite(c)?c:null}function Ux(e){const a=e.querySelector("table");if(!a)return null;const t=[...a.querySelectorAll("thead th")].map(c=>c.textContent.trim().toLowerCase()).some(c=>c.includes("marca")),n=[...a.querySelectorAll("tbody tr")].map(c=>{const s=[...c.querySelectorAll("td")],p=Number(s[t?2:1]?.textContent.trim()),u=Number(s[t?4:3]?.textContent.trim());return{etiqueta:s[0]?.textContent.trim()||"",valor:Fx(s[t?1:0]?.textContent),frecuencia:Number.isFinite(p)?p:0,acumulada:Number.isFinite(u)?u:0}}).filter(c=>c.etiqueta&&c.frecuencia>=0);return{agrupados:t,filas:n}}function Tl(e){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:3}):"—"}function Oo(e,a){let r=0;for(const t of e)if(r+=t.frecuencia,a<r)return t.valor;return e.at(-1)?.valor??null}function pn(e,a){const r=e.reduce((u,l)=>u+l.frecuencia,0);if(!r)return null;if(a<=0)return e[0].valor;if(a>=1)return e.at(-1).valor;const t=(r-1)*a,n=Math.floor(t),c=Math.ceil(t),s=Oo(e,n),p=Oo(e,c);return n===c?s:s*(c-t)+p*(t-n)}function Ja(e,a,r){return`
        <text
            x="${e}"
            y="${a}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${Tl(r)}</text>
    `}function jx(e,a){if(!e||e.dataset.cajaDescriptivaSegura==="true"||a.agrupados)return;e.dataset.cajaDescriptivaSegura="true";const r=a.filas.filter(h=>h.valor!==null&&h.frecuencia>0).sort((h,w)=>h.valor-w.valor);if(r.reduce((h,w)=>h+w.frecuencia,0)<2)return;const n=r[0].valor,c=r.at(-1).valor,s=pn(r,.25),p=pn(r,.5),u=pn(r,.75),l=u-s,i=s-1.5*l,o=u+1.5*l,d=r.filter(h=>h.valor>=i&&h.valor<=o),m=r.filter(h=>h.valor<i||h.valor>o),f=d[0]?.valor??n,g=d.at(-1)?.valor??c,b=Math.max(c-n,1),x=h=>40+(h-n)/b*520,y=e.querySelector("svg");if(!y)return;y.setAttribute("aria-label","Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos potenciales"),y.innerHTML=`
        <line x1="${x(f)}" y1="80" x2="${x(s)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${x(u)}" y1="80" x2="${x(g)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${x(f)}" y1="58" x2="${x(f)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${x(g)}" y1="58" x2="${x(g)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${x(s)}" y="45" width="${Math.max(x(u)-x(s),2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${x(p)}" y1="45" x2="${x(p)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${m.map((h,w)=>`
            <circle
                cx="${x(h.valor)}"
                cy="${80+(w%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${Tl(h.valor)}${h.frecuencia>1?` (${h.frecuencia} observaciones)`:""}</title>
            </circle>
        `).join("")}
        ${Ja(x(f),140,f)}
        ${Ja(x(s),30,s)}
        ${Ja(x(p),140,p)}
        ${Ja(x(u),30,u)}
        ${Ja(x(g),140,g)}
    `;const v=e.querySelector("h3 + p");v&&(v.textContent="Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales según el criterio de Tukey.")}function Vx(){const e=document.createElement("section");return e.dataset.encabezadoGraficosSeguro="true",e.className="mt-10",e.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución, la frecuencia acumulada, la mediana, los cuartiles, la dispersión y los valores atípicos potenciales.
        </p>
    `,e}function Bx(e){const a=document.createElement("article");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const r=Math.max(...e.map(t=>t.frecuencia),1);return a.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas representan la frecuencia de cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${e.map(t=>{const n=Math.max(4,t.frecuencia/r*190);return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${t.frecuencia}</span>
                        <div
                            class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40"
                            style="height:${n}px"
                            title="${t.etiqueta}: ${t.frecuencia} observaciones"
                        ></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${t.etiqueta}</span>
                    </div>
                `}).join("")}
        </div>
    `,a}function Gx(e){const a=document.createElement("article");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const r=600,t=250,n=48,c=24,s=24,p=48,u=Math.max(...e.map(o=>o.acumulada),1),l=Math.max(e.length-1,1),i=e.map((o,d)=>({...o,x:n+d/l*(r-n-c),y:s+(1-o.acumulada/u)*(t-s-p)}));return a.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra el crecimiento de la frecuencia acumulada.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${r} ${t}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${n}" y1="${s}" x2="${n}" y2="${t-p}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${n}" y1="${t-p}" x2="${r-c}" y2="${t-p}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${i.map(o=>`${o.x},${o.y}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${i.map(o=>`
                    <circle cx="${o.x}" cy="${o.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${o.etiqueta}: frecuencia acumulada ${o.acumulada}</title>
                    </circle>
                    <text x="${o.x}" y="${t-24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${o.etiqueta}</text>
                `).join("")}
                <text x="18" y="${s+4}" font-size="11" fill="currentColor" class="text-slate-600">${u}</text>
                <text x="25" y="${t-p+4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `,a}function Hx(e){const a=[...e.querySelectorAll("article")],r=a.find(s=>s.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),t=a.find(s=>s.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!r||!t)return;const n=r.parentElement,c=Ux(e);if(!(!n||!c?.filas.length)&&(e.querySelector("[data-encabezado-graficos-seguro='true']")||(n.before(Vx()),n.classList.remove("mt-8")),jx(t,c),!e.querySelector("[data-graficos-descriptivos-seguros='true']"))){const s=document.createElement("div");s.dataset.graficosDescriptivosSeguros="true",s.className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7",s.append(Bx(c.filas),Gx(c.filas)),n.after(s)}}function Wx(){let e=!1;const a=()=>{e=!1;const n=document.querySelector("#resultados-estadistica-descriptiva");n&&!n.classList.contains("hidden")&&Hx(n)},r=()=>{e||(e=!0,window.requestAnimationFrame(a))};new MutationObserver(r).observe(document.body,{childList:!0,subtree:!0}),r()}function Kx(e,a){return`${e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||`grafico-${a+1}`}.svg`}function Yx(e,a,r){const t=e.cloneNode(!0);t.getAttribute("xmlns")||t.setAttribute("xmlns","http://www.w3.org/2000/svg");const c=new XMLSerializer().serializeToString(t),s=new Blob([c],{type:"image/svg+xml;charset=utf-8"}),p=URL.createObjectURL(s),u=document.createElement("a");u.href=p,u.download=Kx(a,r),document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}function Jx(e,a,r){if(e.querySelector("[data-descargar-svg]"))return;const t=e.querySelector("h3")?.textContent.trim()||`Gráfico ${r+1}`,n=document.createElement("button");n.type="button",n.dataset.descargarSvg="true",n.className=`
        mt-4 inline-flex items-center justify-center gap-2
        rounded-xl border border-sky-300 bg-sky-50
        px-4 py-3 text-sm font-black text-sky-800
        hover:bg-sky-100 transition-colors
    `,n.innerHTML=`
        <span aria-hidden="true">↓</span>
        Descargar SVG
    `,n.setAttribute("aria-label",`Descargar ${t} en formato SVG`),n.addEventListener("click",()=>{Yx(a,t,r)}),e.appendChild(n)}function Qx(e){const a=window.open("","_blank");if(!a){window.print();return}const r=`
        <style>
            * { box-sizing: border-box; }
            body {
                margin: 0;
                padding: 28px;
                font-family: Arial, Helvetica, sans-serif;
                color: #0f172a;
                background: #ffffff;
            }
            header, article, section, div {
                break-inside: avoid;
            }
            article {
                margin: 0 0 18px;
                padding: 18px;
                border: 1px solid #cbd5e1;
                border-radius: 12px;
            }
            h1, h2, h3, h4 { color: #0f172a; }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 12px;
            }
            th, td {
                border: 1px solid #cbd5e1;
                padding: 8px;
                text-align: left;
            }
            svg { max-width: 100%; height: auto; }
            button { display: none !important; }
            [data-herramientas-exportacion] {
                display: none !important;
            }
            @page { margin: 15mm; }
        </style>
    `;a.document.open(),a.document.write(`
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>Informe de estadística descriptiva</title>
                ${r}
            </head>
            <body>
                <h1>Informe de estadística descriptiva</h1>
                <p>Grupo de Investigación El Kernel</p>
                ${e.innerHTML}
            </body>
        </html>
    `),a.document.close(),a.addEventListener("load",()=>{a.focus(),a.print()})}function Xx(e){if(e.querySelector("[data-herramientas-exportacion='true']"))return;const a=document.createElement("section");a.dataset.herramientasExportacion="true",a.className=`
        mb-6 rounded-2xl border border-slate-200
        bg-slate-50 p-5
        flex flex-col md:flex-row md:items-center
        md:justify-between gap-4
    `,a.innerHTML=`
        <div>
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-1">
                Exportación del análisis
            </p>
            <h2 class="text-xl font-black text-slate-900">
                Guarde o imprima sus resultados
            </h2>
            <p class="text-sm text-slate-600 mt-1">
                Utilice el cuadro de impresión para guardar el informe completo como PDF.
            </p>
        </div>
        <button
            type="button"
            data-imprimir-informe="true"
            class="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 font-black text-white hover:bg-sky-800 transition-colors"
        >
            <span aria-hidden="true">⎙</span>
            Imprimir o guardar PDF
        </button>
    `,a.querySelector("[data-imprimir-informe]")?.addEventListener("click",()=>{Qx(e)}),e.prepend(a)}function Zx(e){Xx(e),[...e.querySelectorAll("article")].forEach((r,t)=>{const n=r.querySelector("svg");n&&Jx(r,n,t)})}function ev(){const e=()=>{const r=document.querySelector("#resultados-estadistica-descriptiva");r&&!r.classList.contains("hidden")&&Zx(r)};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0}),e()}const av=["#formulario-estadistica-descriptiva","#formulario-regresion","#formulario-regresion-conteo","[id*='calculadora'] form","section form"].join(",");function tv(){return document.querySelector("main h1, #app h1, h1")?.textContent?.trim()?.toLowerCase()||""}function rv(){return tv().includes("laboratorio inteligente de investigación")}function nv(){const e=document.querySelector("main h1, #app h1, h1"),a=document.querySelector("[data-action='volver-laboratorio'], [data-action='volver-modelos'], [data-action='volver-regresion']"),r=document.querySelector(av);return!!(e&&a&&r)}function iv(){const e=document.createElement("section");return e.dataset.creditosCalculadoras="true",e.className=["w-full max-w-7xl mx-auto","px-4 pb-10 md:px-8","font-sans"].join(" "),e.innerHTML=`
        <div class="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-7 md:px-9 md:py-8 text-white shadow-xl">
            <div class="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-sky-500/15"></div>
            <div class="absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-indigo-500/15"></div>

            <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div class="max-w-4xl">
                    <p class="uppercase tracking-[0.18em] text-sky-300 text-xs font-black mb-2">
                        Créditos del proyecto
                    </p>

                    <h2 class="text-xl md:text-2xl font-black leading-snug">
                        Diseño y desarrollo de las calculadoras estadísticas
                    </h2>

                    <p class="mt-3 text-slate-200 leading-relaxed">
                        Las calculadoras del Laboratorio Inteligente de Investigación del Grupo Kernel han sido diseñadas y desarrolladas por
                        <strong class="text-white">Miguel Antonio Leonardo Sepúlveda</strong>
                        y
                        <strong class="text-white">Natanael Ureña Castillo</strong>.
                    </p>
                </div>

                <div class="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-slate-200">
                    <span class="block font-black text-white mb-1">Grupo Kernel</span>
                    Investigación, innovación y herramientas científicas
                </div>
            </div>
        </div>
    `,e}function Fo(){if(!nv()&&!rv()||document.querySelector("[data-creditos-calculadoras='true']"))return;const e=document.querySelector("main, #app, [data-router-view]");e&&e.appendChild(iv())}function ov(){new MutationObserver(Fo).observe(document.body,{childList:!0,subtree:!0}),Fo()}function sv(){return[...document.querySelectorAll("main h1")].find(a=>a.textContent.trim().toLowerCase().includes("laboratorio inteligente de investigación"))&&[...document.querySelectorAll("main article")].find(a=>a.querySelector("h3")?.textContent?.trim()?.toLowerCase()==="regresión")||null}function Uo(){const e=sv();if(!e||e.dataset.regresionConectada==="true")return;const a=e.querySelector("h3 + p"),r=e.querySelector("button");a&&(a.textContent="Regresión lineal simple y múltiple, y regresión logística binaria, con inferencia, diagnósticos gráficos, predicción e interpretación guiada."),r&&(r.onclick=()=>{window.location.hash="/regresionModelos"},r.setAttribute("aria-label","Explorar los modelos de regresión")),e.dataset.regresionConectada="true"}function lv(){new MutationObserver(Uo).observe(document.body,{childList:!0,subtree:!0}),Uo()}const cv={"regresión lineal simple":{ruta:"calculadoraRegresion",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y un predictor."},"regresión lineal múltiple":{ruta:"calculadoraRegresion",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y dos o más predictores."},"regresión logística binaria simple":{ruta:"calculadoraRegresionLogistica",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y un predictor."},"regresión logística binaria múltiple":{ruta:"calculadoraRegresionLogistica",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y dos o más predictores."},"regresión de poisson":{ruta:"calculadoraRegresionConteo",tipo:"poisson",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo de Poisson con una variable dependiente formada por enteros no negativos."},"regresión binomial negativa":{ruta:"calculadoraRegresionConteo",tipo:"negativa",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo binomial negativo cuando exista sobredispersión respecto a Poisson."}};function dv(){const e=[...document.querySelectorAll("main h1")];for(const a of e){const r=a.textContent.trim().toLowerCase(),t=cv[r];if(t)return{encabezado:a,modelo:t}}return null}function uv(e){const a=document.createElement("div"),r=e.clase==="amber",t=r?"border-amber-200":"border-rose-200",n=r?"bg-amber-50":"bg-rose-50",c=r?"text-amber-700":"text-rose-700",s=r?"bg-amber-600 hover:bg-amber-700":"bg-rose-700 hover:bg-rose-800";return a.dataset.ejecutarModeloRegresion="true",a.className=`mt-8 rounded-2xl border ${t} ${n} p-6`,a.innerHTML=`
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
                <p class="uppercase tracking-widest ${c} text-xs font-black mb-2">
                    Herramienta de modelización
                </p>
                <h2 class="text-xl font-black text-slate-900 mb-2">
                    Ejecute este modelo con sus propios datos
                </h2>
                <p class="text-slate-600 leading-relaxed">
                    ${e.texto} Obtendrá coeficientes, intervalos de confianza, diagnósticos gráficos, predicción e interpretación guiada.
                </p>
            </div>

            <button
                type="button"
                data-route-regresion="${e.ruta}"
                data-tipo-regresion="${e.tipo}"
                data-almacenamiento-regresion="${e.almacenamiento}"
                class="shrink-0 inline-flex items-center justify-center ${s} text-white font-black rounded-xl px-6 py-4 transition-colors shadow-lg"
            >
                Ejecutar este modelo
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </div>
    `,a.querySelector("button")?.addEventListener("click",p=>{const u=p.currentTarget,l=u.dataset.almacenamientoRegresion||"kernel-tipo-modelo-regresion";sessionStorage.setItem(l,u.dataset.tipoRegresion||""),window.location.hash=`/${u.dataset.routeRegresion}`}),a}function jo(){const e=dv();if(!e)return;const a=e.encabezado.closest("section");if(!a||a.querySelector("[data-ejecutar-modelo-regresion='true']"))return;(a.querySelector("header + div")||a).appendChild(uv(e.modelo))}function pv(){new MutationObserver(jo).observe(document.body,{childList:!0,subtree:!0}),jo()}function mv(){return[...document.querySelectorAll("main h1")].find(a=>a.textContent.trim().toLowerCase().includes("laboratorio inteligente de investigación"))&&[...document.querySelectorAll("main article")].find(a=>a.querySelector("h3")?.textContent?.trim()?.toLowerCase()==="cuestionarios y fiabilidad")||null}function Vo(){const e=mv();if(!e||e.dataset.fiabilidadConectada==="true")return;const a=e.querySelector("h3 + p"),r=e.querySelector("button");a&&(a.textContent="Alfa de Cronbach, alfa estandarizado, omega aproximado, análisis de ítems, recodificación y gráficos diagnósticos."),r&&(r.onclick=()=>{window.location.hash="/calculadoraFiabilidadCuestionarios"},r.setAttribute("aria-label","Abrir la calculadora de cuestionarios y fiabilidad")),e.dataset.fiabilidadConectada="true"}function fv(){new MutationObserver(Vo).observe(document.body,{childList:!0,subtree:!0}),Vo()}function bv(e){e.target.closest("#asistente-pruebas [data-value='instrumento']")&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),window.location.hash="/calculadoraFiabilidadCuestionarios")}function gv(){document.addEventListener("click",bv,!0)}function la(e,a){try{a()}catch(r){console.error(`[Kernel] No fue posible iniciar ${e}.`,r)}}const cr=document.querySelector("#header"),dr=document.querySelector("#navBar"),Bo=document.querySelector("#footer");cr&&(cr.innerHTML=Nl());dr&&(dr.innerHTML=Sl());Bo&&(Bo.innerHTML=zl());la("la navegación",()=>{dr&&cr&&Ox(dr,cr)});la("los gráficos de estadística descriptiva",Wx);la("la exportación de estadística descriptiva",ev);la("los créditos de las calculadoras",ov);la("la integración del área de regresión",lv);la("la integración de regresión con el asistente",pv);la("la integración de cuestionarios y fiabilidad",fv);la("cuestionarios y fiabilidad en el asistente",gv);
