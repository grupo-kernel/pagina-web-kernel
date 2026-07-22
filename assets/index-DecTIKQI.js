const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AsistentePruebas-AX4vqLZX.js","./fichasMetodologicasTamanoMuestra-Bzm_BI0V.js","./CalculadoraDosGrupos-QPFgs7W4.js","./jstat-DiDocX-r.js","./CalculadoraDosMuestrasRelacionadas-CJ1RVWYl.js","./estadisticaDosMuestrasRelacionadas-C0D8qKdR.js","./CalculadoraTresOMasGrupos-CguCqVTZ.js","./CalculadoraTresOMasMedicionesRelacionadas-DlaD_ARg.js","./CalculadoraRelacionVariables-Di98coDP.js","./CalculadoraAsociacionCategorica-Bng203VQ.js","./BibliotecaMetodologica-DYcZHcBA.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const Kt=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function ss(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${Kt}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function St(t,e,a){return`
        <li>
            <button
                type="button"
                data-route="${t}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
            >
                <span>${e}</span>
                <i aria-hidden="true" class="bx ${a} shrink-0 text-2xl"></i>
            </button>
        </li>
    `}function Ae(t,e,a){return`
        <li>
            <button
                type="button"
                data-route="${t}"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 2xl:text-base"
            >
                <i aria-hidden="true" class="bx ${a} shrink-0 text-xl"></i>
                <span>${e}</span>
            </button>
        </li>
    `}function rs(t,e,a,i=""){return`
        <li class="${i}">
            <button
                type="button"
                data-home-section="${t}"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 2xl:text-base"
            >
                <i aria-hidden="true" class="bx ${a} shrink-0 text-xl"></i>
                <span>${e}</span>
            </button>
        </li>
    `}function os(){return`
        <li class="lg:hidden">
            <button
                type="button"
                data-home-section="catalogo-servicios"
                aria-label="Abrir el catálogo institucional de servicios"
                class="flex w-full items-center justify-between gap-4 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3.5 text-left text-sky-950 shadow-sm transition-colors hover:border-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
            >
                <span class="flex min-w-0 items-center gap-3">
                    <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm">
                        <i aria-hidden="true" class="bx bx-grid-alt text-2xl"></i>
                    </span>
                    <span class="min-w-0">
                        <span class="block text-base font-black">Catálogo de servicios</span>
                        <span class="mt-0.5 block text-xs font-semibold opacity-75">20 áreas profesionales y académicas</span>
                    </span>
                </span>
                <i aria-hidden="true" class="bx bx-right-arrow-alt shrink-0 text-2xl"></i>
            </button>
        </li>
    `}function ca({id:t,etiqueta:e,icono:a,elementos:i}){return`
        <li data-submenu class="relative min-w-0">
            <button
                type="button"
                data-action="toggle-submenu"
                aria-expanded="false"
                aria-controls="${t}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
            >
                <span class="flex items-center gap-2">
                    <i aria-hidden="true" class="bx ${a} shrink-0 text-2xl"></i>
                    <span>${e}</span>
                </span>
                <i data-submenu-caret aria-hidden="true" class="bx bx-caret-down shrink-0 text-xl transition-transform"></i>
            </button>

            <ul
                id="${t}"
                data-submenu-panel
                class="
                    relative
                    z-[260]
                    mt-2
                    hidden
                    w-full
                    flex-col
                    gap-1
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-2
                    text-slate-800
                    shadow-2xl

                    lg:absolute
                    lg:left-0
                    lg:top-full
                    lg:z-[260]
                    lg:mt-2
                    lg:w-72
                    lg:min-w-72
                "
            >
                ${i.join("")}
            </ul>
        </li>
    `}function ns(){return`
        <div class="mb-7 flex w-full items-center justify-between border-b border-zinc-500 px-2.5 pb-2.5 lg:hidden">
            <span class="text-4xl font-medium">El Kernel</span>
            <button type="button" data-action="close-navBar" aria-label="Cerrar navegación" class="rounded-xl p-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100">
                <i aria-hidden="true" class="bx bx-x text-6xl"></i>
            </button>
        </div>

        <ul class="relative z-[230] flex w-full flex-col gap-2 p-3 text-black lg:flex-row lg:items-center lg:justify-end lg:gap-2 lg:p-0 xl:gap-4">
            ${St("home","Portada","bx-home")}

            ${ca({id:"submenu-nosotros",etiqueta:"Nosotros",icono:"bx-group",elementos:[Ae("quienesSomos","Quiénes somos","bx-info-circle"),Ae("equipment","Equipo","bx-group")]})}

            ${ca({id:"submenu-nuestro-trabajo",etiqueta:"Nuestro Trabajo",icono:"bx-briefcase-alt-2",elementos:[rs("catalogo-servicios","Catálogo de servicios","bx-grid-alt","hidden lg:block"),Ae("lineas","Líneas de investigación","bx-git-branch"),Ae("proyectos","Proyectos","bx-bulb"),Ae("publicaciones","Publicaciones","bx-book-open"),Ae("herramientas","Herramientas","bx-wrench")]})}

            ${os()}

            <li>
                <button
                    type="button"
                    data-route="laboratorioKernel"
                    class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
                >
                    <span class="flex flex-col leading-none lg:items-center lg:text-center">
                        <span>Laboratorio Inteligente</span>
                        <span class="mt-1 text-xs font-semibold text-slate-500 xl:text-sm">de Investigación</span>
                    </span>
                    <i aria-hidden="true" class="bx bx-bar-chart-alt-2 shrink-0 text-2xl"></i>
                </button>
            </li>

            ${St("noticias","Noticias","bx-news")}
            ${St("contacto","Contacto","bx-envelope")}
        </ul>
    `}function cs(){const t=new Date().getFullYear();return`
        <div class="mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between md:gap-8">
            <div class="flex items-center gap-4 text-white">
                <img class="h-[72px] w-[72px] rounded-full object-contain" src="${Kt}" alt="Logo del Grupo de Investigación El Kernel" loading="lazy" />
                <div>
                    <h5 class="text-sm font-bold md:text-base lg:text-xl">Grupo de Investigación El Kernel</h5>
                    <p class="mt-1 text-xs font-light lg:text-base">EDPs no lineales, métodos iterativos, optimización y educación matemática.</p>
                </div>
            </div>

            <div class="mt-6 flex flex-col text-white md:mt-0">
                <h5 class="mb-2 text-xs font-bold text-footer-contacto md:text-sm lg:text-xl">Contacto</h5>
                <ul class="text-xs leading-7 md:text-sm lg:text-base">
                    <li><a class="underline" href="mailto:mleonardos@unapec.edu.do">mleonardos@unapec.edu.do</a></li>
                    <li>República Dominicana</li>
                    <li><a class="text-footer-contacto underline" target="_blank" rel="noopener noreferrer" href="https://www.grupoelkernel.com">grupoelkernel.com</a></li>
                </ul>
            </div>

            <nav class="mt-6 md:mt-0" aria-label="Instituciones vinculadas">
                <ul class="flex items-center gap-3 md:gap-5 lg:gap-8">
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="ISFODOSU" href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UASD" href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer">UASD</a></li>
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UNAPEC" href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer">UNAPEC</a></li>
                </ul>
            </nav>
        </div>
        <div class="mx-auto mt-3 max-w-7xl px-4 pb-4 text-xs text-white md:mt-8 md:text-sm lg:text-base">
            <p>© ${t} Grupo de Investigación El Kernel — Todos los derechos reservados.</p>
        </div>
    `}function ls(t){if(!t||t.dataset.submenusInicializados==="true")return;const e=[...t.querySelectorAll("[data-submenu]")],a=window.matchMedia("(min-width: 1024px)");function i(o){return{disparador:o.querySelector(":scope > [data-action='toggle-submenu']"),panel:o.querySelector(":scope > [data-submenu-panel]"),indicador:o.querySelector(":scope > [data-action='toggle-submenu'] [data-submenu-caret]")}}function s(o,n){const{disparador:c,panel:l,indicador:d}=i(o);!c||!l||(c.setAttribute("aria-expanded",String(n)),l.classList.toggle("hidden",!n),l.classList.toggle("flex",n),d?.classList.toggle("rotate-180",n))}function r(o=null){e.forEach(n=>{n!==o&&s(n,!1)})}e.forEach(o=>{const{disparador:n,panel:c}=i(o);!n||!c||(n.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation();const d=n.getAttribute("aria-expanded")!=="true";r(o),s(o,d)}),o.addEventListener("mouseenter",()=>{a.matches&&(r(o),s(o,!0))}),o.addEventListener("mouseleave",()=>{a.matches&&s(o,!1)}),c.addEventListener("click",l=>{l.target.closest("[data-route], [data-home-section]")&&s(o,!1)}))}),t.addEventListener("click",o=>{o.target.closest("[data-route], [data-home-section]")&&r()}),document.addEventListener("click",o=>{t.contains(o.target)||r()}),document.addEventListener("keydown",o=>{if(o.key!=="Escape")return;const n=t.querySelector("[data-action='toggle-submenu'][aria-expanded='true']");r(),n?.focus()}),a.addEventListener("change",()=>r()),t.dataset.submenusInicializados="true"}function ds(t,e){!t||!e||t.addEventListener("click",()=>{e.classList.remove("hidden"),e.classList.add("block"),document.body.style.overflow="hidden"})}function us(t){if(!t)return;const e=t.querySelector('[data-action="close-navBar"]');e&&e.addEventListener("click",()=>{t.classList.remove("block"),t.classList.add("hidden"),document.body.style.overflow=""})}const ps="modulepreload",ms=function(t,e){return new URL(t,e).href},la={},M=function(e,a,i){let s=Promise.resolve();if(a&&a.length>0){let l=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),c=n?.nonce||n?.getAttribute("nonce");s=l(a.map(d=>{if(d=ms(d,i),d in la)return;la[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(i)for(let b=o.length-1;b>=0;b--){const k=o[b];if(k.href===d&&(!u||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":ps,u||(g.as="script"),g.crossOrigin="",g.href=d,c&&g.setAttribute("nonce",c),document.head.appendChild(g),u)return new Promise((b,k)=>{g.addEventListener("load",b),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return s.then(o=>{for(const n of o||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})},vt=""+new URL("sep-BCMURSaM.png",import.meta.url).href,yt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,Za=""+new URL("rad-B3ff1btG.png",import.meta.url).href,Wt=""+new URL("ant-D2J2W27b.png",import.meta.url).href,ei=""+new URL("mar-Cru0HERG.png",import.meta.url).href,wt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,He=""+new URL("jos-BToFZdIf.png",import.meta.url).href,ve=[{img:vt,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:yt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:Za,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:Wt,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:ei,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:wt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:He,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}],K=[{id:1,img:vt,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:Wt,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:yt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:wt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:He,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}],we=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}],J=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}],fs=Object.freeze([Object.freeze({id:"estadistica-descriptiva",titulo:"Estadística descriptiva",descripcion:"Media, mediana, variabilidad, cuartiles, asimetría, valores atípicos y gráficos exploratorios.",icono:"bx-bar-chart-alt-2",fondoIcono:"bg-sky-100",colorIcono:"text-sky-700",bordeIcono:"border-sky-200",ruta:"calculadoraEstadisticaDescriptiva"}),Object.freeze({id:"comparacion-grupos",titulo:"Comparación de grupos",descripcion:"Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.",icono:"bx-group",fondoIcono:"bg-indigo-100",colorIcono:"text-indigo-700",bordeIcono:"border-indigo-200",ruta:"comparacionGrupos"}),Object.freeze({id:"correlacion-asociacion",titulo:"Correlación y asociación",descripcion:"Pearson, Spearman, Kendall y medidas de asociación para variables cuantitativas y categóricas.",icono:"bx-line-chart",fondoIcono:"bg-violet-100",colorIcono:"text-violet-700",bordeIcono:"border-violet-200",ruta:"correlacionAsociacion"}),Object.freeze({id:"cuestionarios-fiabilidad",titulo:"Cuestionarios y fiabilidad",descripcion:"Alfa de Cronbach, omega de McDonald, recodificación, análisis de ítems y diagnósticos.",icono:"bx-list-check",fondoIcono:"bg-amber-100",colorIcono:"text-amber-700",bordeIcono:"border-amber-200",ruta:"calculadoraFiabilidadCuestionarios"}),Object.freeze({id:"evaluacion-educativa",titulo:"Evaluación educativa",descripcion:"Dificultad, discriminación, punto-biserial, KR-20, distractores y análisis de puntuaciones.",icono:"bx-edit-alt",fondoIcono:"bg-emerald-100",colorIcono:"text-emerald-700",bordeIcono:"border-emerald-200",ruta:"calculadoraEvaluacionEducativa"}),Object.freeze({id:"tamano-muestra",titulo:"Tamaño de muestra",descripcion:"Tamaño mínimo, potencia, pérdidas, población finita, efecto de diseño y análisis de sensibilidad.",icono:"bx-ruler",fondoIcono:"bg-cyan-100",colorIcono:"text-cyan-700",bordeIcono:"border-cyan-200",ruta:"calculadoraTamanoMuestraPotencia"}),Object.freeze({id:"regresion",titulo:"Regresión",descripcion:"Modelos lineales, múltiples, logísticos y de conteo con inferencia, diagnóstico e interpretación guiada.",icono:"bx-trending-up",fondoIcono:"bg-rose-100",colorIcono:"text-rose-700",bordeIcono:"border-rose-200",ruta:"regresionModelos"}),Object.freeze({id:"asistente-pruebas",titulo:"¿Qué prueba debo utilizar?",descripcion:"Asistente guiado para seleccionar el procedimiento más adecuado según el objetivo y el diseño.",icono:"bx-help-circle",fondoIcono:"bg-blue-100",colorIcono:"text-blue-700",bordeIcono:"border-blue-200",ruta:"asistentePruebas"}),Object.freeze({id:"biblioteca-metodologica",titulo:"Biblioteca metodológica",descripcion:"Fichas buscables con supuestos, hipótesis, tamaños del efecto, reporte, alternativas y errores frecuentes.",icono:"bx-library",fondoIcono:"bg-slate-200",colorIcono:"text-slate-700",bordeIcono:"border-slate-300",ruta:"bibliotecaMetodologica"})]),da=Object.freeze({"bx-bar-chart-alt-2":`
        <path d="M4 20V11h4v9H4Z"></path>
        <path d="M10 20V4h4v16h-4Z"></path>
        <path d="M16 20v-7h4v7h-4Z"></path>
    `,"bx-group":`
        <circle cx="9" cy="8" r="3"></circle>
        <path d="M3.5 20c.4-4 2.5-6 5.5-6s5.1 2 5.5 6"></path>
        <path d="M15 6.5a2.7 2.7 0 1 1 0 5.4"></path>
        <path d="M16 14c2.6.3 4.1 2.2 4.5 5"></path>
    `,"bx-line-chart":`
        <path d="M4 4v16h16"></path>
        <path d="m7 16 4-5 3 3 4-7"></path>
        <circle cx="7" cy="16" r="1"></circle>
        <circle cx="11" cy="11" r="1"></circle>
        <circle cx="14" cy="14" r="1"></circle>
        <circle cx="18" cy="7" r="1"></circle>
    `,"bx-list-check":`
        <path d="m4 7 1.5 1.5L8.5 5"></path>
        <path d="M11 7h9"></path>
        <path d="m4 13 1.5 1.5 3-3.5"></path>
        <path d="M11 13h9"></path>
        <path d="m4 19 1.5 1.5 3-3.5"></path>
        <path d="M11 19h9"></path>
    `,"bx-edit-alt":`
        <path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4Z"></path>
        <path d="m13.5 6.5 4 4"></path>
        <path d="M3 21h18"></path>
    `,"bx-ruler":`
        <path d="M4 16 16 4l4 4L8 20H4v-4Z"></path>
        <path d="m13 7 2 2"></path>
        <path d="m10 10 2 2"></path>
        <path d="m7 13 2 2"></path>
    `,"bx-trending-up":`
        <path d="m4 17 6-6 4 4 6-8"></path>
        <path d="M15 7h5v5"></path>
    `,"bx-help-circle":`
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9.8 9a2.5 2.5 0 1 1 3.8 2.1c-1 .6-1.6 1.2-1.6 2.4"></path>
        <path d="M12 17h.01"></path>
    `,"bx-library":`
        <path d="M4 5h4v15H4V5Z"></path>
        <path d="M10 4h4v16h-4V4Z"></path>
        <path d="m16 6 3.5-1 3 13.5-3.5 1L16 6Z"></path>
        <path d="M5 8h2"></path>
        <path d="M11 8h2"></path>
    `,"bx-right-arrow-alt":`
        <path d="M5 12h14"></path>
        <path d="m14 7 5 5-5 5"></path>
    `,"bx-brain":`
        <path d="M9.5 4.2A3.2 3.2 0 0 0 5 7.1 3.5 3.5 0 0 0 4.5 14 3.6 3.6 0 0 0 9 18.8"></path>
        <path d="M14.5 4.2A3.2 3.2 0 0 1 19 7.1a3.5 3.5 0 0 1 .5 6.9 3.6 3.6 0 0 1-4.5 4.8"></path>
        <path d="M9.5 4v16"></path>
        <path d="M14.5 4v16"></path>
        <path d="M7 9.5h2.5"></path>
        <path d="M14.5 13H17"></path>
    `,"bx-atom":`
        <ellipse cx="12" cy="12" rx="9" ry="3.5"></ellipse>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"></ellipse>
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"></circle>
    `,"bx-book-open":`
        <path d="M3.5 5.5c3.5-.8 6-.2 8.5 1.8v12c-2.5-2-5-2.6-8.5-1.8v-12Z"></path>
        <path d="M20.5 5.5c-3.5-.8-6-.2-8.5 1.8v12c2.5-2 5-2.6 8.5-1.8v-12Z"></path>
    `,"bx-check-shield":`
        <path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z"></path>
        <path d="m8.5 12 2.2 2.2 4.8-5"></path>
    `,"bx-calculator":`
        <rect x="5" y="3" width="14" height="18" rx="2"></rect>
        <path d="M8 7h8v3H8V7Z"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
    `,"bx-grid-alt":`
        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
    `});function F(t,e="text-2xl"){const a=da[t]||da["bx-grid-alt"];return`
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="${e} h-[1em] w-[1em] shrink-0"
        >
            ${a}
        </svg>
    `}const gs=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,bs=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,hs=""+new URL("apec-ConmXkrT.png",import.meta.url).href,xs=6e3,re=Object.freeze([Object.freeze({id:"isfodosu",sigla:"ISFODOSU",nombre:"Instituto Superior de Formación Docente Salomé Ureña",descripcion:"Formación docente, educación matemática e investigación educativa.",imagen:gs,enlace:"https://www.isfodosu.edu.do/"}),Object.freeze({id:"uasd",sigla:"UASD",nombre:"Universidad Autónoma de Santo Domingo",descripcion:"Ciencias básicas, optimización, matemática aplicada y colaboración interdisciplinaria.",imagen:bs,enlace:"https://uasd.edu.do/"}),Object.freeze({id:"unapec",sigla:"UNAPEC",nombre:"Universidad APEC",descripcion:"Matemática aplicada, computación científica, docencia y proyectos de investigación.",imagen:hs,enlace:"https://unapec.edu.do/"})]);function Ce(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function vs(t,e){const a=e===0;return`
        <button
            type="button"
            role="tab"
            id="pestana-${Ce(t.id)}"
            aria-controls="panel-universidad-portada"
            aria-selected="${a}"
            tabindex="${a?"0":"-1"}"
            data-universidad-control
            data-indice="${e}"
            class="group min-w-0 rounded-2xl border px-2.5 py-2 text-left transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40 md:px-3 ${a?"border-sky-300 bg-sky-400/15 shadow-lg ring-2 ring-sky-300/30":"border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"}"
        >
            <span class="flex items-center gap-2.5">
                <span class="flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm md:h-12 md:w-14">
                    <img src="${t.imagen}" alt="" class="h-full w-full object-contain" loading="eager" />
                </span>
                <span class="min-w-0">
                    <span class="block truncate text-xs font-black tracking-wide text-white md:text-sm">${Ce(t.sigla)}</span>
                    <span class="mt-0.5 hidden truncate text-[11px] text-slate-300 md:block">Ver institución</span>
                </span>
            </span>
        </button>
    `}function ys(){const t=re[0],e=document.createElement("aside");e.className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:p-5",e.setAttribute("aria-label","Instituciones principales vinculadas al Grupo El Kernel"),e.innerHTML=`
        <div class="mb-4 flex items-start justify-between gap-4">
            <div>
                <p class="text-xs font-black uppercase tracking-[0.20em] text-sky-300">Instituciones principales</p>
                <h2 class="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">Vinculación académica</h2>
                <p class="mt-2 text-sm leading-relaxed text-slate-300">Seleccione una pestaña o permita que las tres instituciones roten automáticamente.</p>
            </div>
            <span data-universidad-contador class="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black text-sky-100">01 / 03</span>
        </div>

        <div role="tablist" aria-label="Universidades vinculadas" class="grid grid-cols-3 gap-2">
            ${re.map(vs).join("")}
        </div>

        <article
            id="panel-universidad-portada"
            role="tabpanel"
            tabindex="0"
            aria-labelledby="pestana-${t.id}"
            aria-live="polite"
            data-universidad-escenario
            class="relative mt-4 min-h-[330px] flex-1 overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-xl md:min-h-[390px]"
        >
            <img
                data-universidad-imagen
                src="${t.imagen}"
                alt="Imagen institucional de ${Ce(t.sigla)}"
                class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/5"></div>

            <div class="absolute right-3 top-3 z-10 flex gap-2 md:right-4 md:top-4">
                <button type="button" data-action="universidad-anterior" aria-label="Mostrar la institución anterior" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    <i aria-hidden="true" class="bx bx-chevron-left text-2xl"></i>
                </button>
                <button type="button" data-action="universidad-siguiente" aria-label="Mostrar la institución siguiente" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    <i aria-hidden="true" class="bx bx-chevron-right text-2xl"></i>
                </button>
            </div>

            <div class="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                <p data-universidad-sigla class="text-4xl font-black leading-none text-white md:text-5xl">${Ce(t.sigla)}</p>
                <p data-universidad-nombre class="mt-2 text-base font-bold leading-tight text-white md:text-xl">${Ce(t.nombre)}</p>
                <p data-universidad-descripcion class="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">${Ce(t.descripcion)}</p>
                <a data-universidad-enlace href="${t.enlace}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    Visitar institución
                    <i aria-hidden="true" class="bx bx-link-external text-lg"></i>
                </a>
            </div>
        </article>

        <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div data-universidad-progreso class="h-full w-1/3 rounded-full bg-sky-400 transition-transform duration-500"></div>
        </div>
        <p data-universidad-estado class="sr-only" aria-live="polite"></p>
    `;const a=e.querySelector("[data-universidad-imagen]"),i=e.querySelector("[data-universidad-sigla]"),s=e.querySelector("[data-universidad-nombre]"),r=e.querySelector("[data-universidad-descripcion]"),o=e.querySelector("[data-universidad-enlace]"),n=e.querySelector("[data-universidad-contador]"),c=e.querySelector("[data-universidad-estado]"),l=e.querySelector("[data-universidad-escenario]"),d=e.querySelector("[data-universidad-progreso]"),u=[...e.querySelectorAll("[data-universidad-control]")],p=e.querySelector("[data-action='universidad-anterior']"),g=e.querySelector("[data-action='universidad-siguiente']"),b=window.matchMedia("(prefers-reduced-motion: reduce)"),k=new AbortController,x={signal:k.signal};let h=0,C=null,P=null,f=!1;function v(A){return(A%re.length+re.length)%re.length}function m(A=!1){const I=re[h];a.src=I.imagen,a.alt=`Imagen institucional de ${I.sigla}`,i.textContent=I.sigla,s.textContent=I.nombre,r.textContent=I.descripcion,o.href=I.enlace,n.textContent=`${String(h+1).padStart(2,"0")} / ${String(re.length).padStart(2,"0")}`,l.setAttribute("aria-labelledby",`pestana-${I.id}`),d.style.transform=`translateX(${h*100}%)`,u.forEach((_,N)=>{const $=N===h;_.setAttribute("aria-selected",String($)),_.tabIndex=$?0:-1,_.classList.toggle("border-sky-300",$),_.classList.toggle("bg-sky-400/15",$),_.classList.toggle("shadow-lg",$),_.classList.toggle("ring-2",$),_.classList.toggle("ring-sky-300/30",$),_.classList.toggle("border-white/10",!$),_.classList.toggle("bg-white/5",!$)}),A&&(c.textContent=`${I.sigla}: ${I.nombre}`)}function w(){C!==null&&(window.clearInterval(C),C=null)}function y(){w(),!(b.matches||document.hidden)&&(C=window.setInterval(()=>{e.isConnected&&(h=v(h+1),m(!1))},xs))}function S(A,I=!0,_=!1){h=v(A),m(I),_&&u[h]?.focus(),y()}p?.addEventListener("click",()=>S(h-1),x),g?.addEventListener("click",()=>S(h+1),x),u.forEach(A=>{A.addEventListener("click",()=>S(Number(A.dataset.indice)),x),A.addEventListener("keydown",I=>{I.key==="ArrowLeft"?(I.preventDefault(),S(h-1,!0,!0)):I.key==="ArrowRight"?(I.preventDefault(),S(h+1,!0,!0)):I.key==="Home"?(I.preventDefault(),S(0,!0,!0)):I.key==="End"&&(I.preventDefault(),S(re.length-1,!0,!0))},x)}),e.addEventListener("mouseenter",w,x),e.addEventListener("mouseleave",y,x),e.addEventListener("focusin",w,x),e.addEventListener("focusout",A=>{e.contains(A.relatedTarget)||y()},x),l?.addEventListener("touchstart",A=>{P=A.changedTouches[0]?.clientX??null,w()},{...x,passive:!0}),l?.addEventListener("touchend",A=>{const I=A.changedTouches[0]?.clientX??null;if(P!==null&&I!==null){const _=I-P;Math.abs(_)>45?S(h+(_<0?1:-1)):y()}P=null},{...x,passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?w():y()},x),b.addEventListener("change",()=>{b.matches?w():y()},x);const O=new MutationObserver(()=>{if(e.isConnected){f=!0;return}f&&(w(),k.abort(),O.disconnect())});return O.observe(document.body,{childList:!0,subtree:!0}),m(!1),y(),e}function q(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ws(t){const e=String(t?.DOI||t?.doi||"").trim().toLowerCase();return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function ks(){const t=new Set;return K.forEach(e=>{(e.publicaciones||[]).forEach(a=>{const i=ws(a);i&&t.add(i)})}),t.size}function at(t,e,a,i){return`
        <article class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <div class="mb-3 flex items-center justify-between gap-3">
                <i aria-hidden="true" class="bx ${q(a)} text-2xl ${q(i)}"></i>
                <span class="text-2xl font-black text-white md:text-3xl">${q(t)}</span>
            </div>
            <p class="text-sm font-semibold leading-tight text-slate-200">${q(e)}</p>
        </article>
    `}function Es(t,e){const a=["bg-sky-100 text-sky-700 border-sky-200","bg-indigo-100 text-indigo-700 border-indigo-200","bg-violet-100 text-violet-700 border-violet-200","bg-emerald-100 text-emerald-700 border-emerald-200","bg-amber-100 text-amber-700 border-amber-200","bg-rose-100 text-rose-700 border-rose-200"];return`
        <article class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border font-black ${a[e%a.length]}">
                ${String(e+1).padStart(2,"0")}
            </div>
            <h3 class="mb-3 text-xl font-black leading-tight text-slate-900">${q(String(t.title||"").trim())}</h3>
            <p class="text-sm leading-relaxed text-slate-600">${q(t.desarrollo)}</p>
        </article>
    `}function As(t){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="mb-4 flex flex-wrap gap-2">
                <span class="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-800">${q(t.convocatoria)}</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${q(t.institucion)}</span>
            </div>
            <h3 class="mb-3 text-xl font-black leading-tight text-slate-900">${q(t.title)}</h3>
            <p class="text-sm leading-relaxed text-slate-600">${q(t.enfoque)}</p>
            <p class="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">${q(t.estado)}</p>
        </article>
    `}function Cs(){return fs.map(t=>`
        <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-slate-100">
            <span class="text-sky-300">${F(t.icono,"text-base")}</span>
            ${q(t.titulo)}
        </span>
    `).join("")}function Is(){return`
        <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8" aria-labelledby="titulo-actividad-portada">
            <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Comunidad digital</p>
                    <h2 id="titulo-actividad-portada" class="text-2xl font-black text-slate-900 md:text-3xl">Actividad del sitio</h2>
                </div>
                <p id="analytics-actualizado" class="text-sm text-slate-500">Cargando estadísticas…</p>
            </div>
            <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
                ${[["analytics-total","Visitantes totales","bx-show"],["analytics-hoy","Visitantes hoy","bx-calendar"],["analytics-semana","Últimos 7 días","bx-line-chart"],["analytics-mes","Últimos 30 días","bx-calendar-check"]].map(([e,a,i])=>`
                    <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <i aria-hidden="true" class="bx ${i} mb-3 text-2xl text-sky-700"></i>
                        <p id="${e}" class="text-2xl font-black text-slate-900 md:text-3xl">—</p>
                        <p class="mt-1 text-xs font-semibold text-slate-500 md:text-sm">${a}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `}function Ss(){const t=ks(),e=document.createElement("section");return e.className="w-full font-sans",e.innerHTML=`
        <div class="mx-auto max-w-7xl space-y-10 px-4 py-8 md:px-8 md:py-12">
            <header class="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
                <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/20 blur-2xl"></div>
                <div class="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-700/20 blur-2xl"></div>

                <div class="relative z-10 px-6 py-9 md:px-10 md:py-12 xl:px-12 xl:py-14">
                    <div class="grid grid-cols-1 gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-stretch">
                        <div class="flex flex-col justify-center">
                            <div class="mb-5 flex items-center gap-4">
                                <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white p-2 shadow-xl md:h-24 md:w-24">
                                    <img src="${Kt}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" loading="eager" />
                                </div>
                                <div>
                                    <p class="text-xs font-black uppercase tracking-[0.24em] text-sky-300 md:text-sm">Grupo de Investigación</p>
                                    <p class="mt-1 text-2xl font-black text-white md:text-3xl">El Kernel</p>
                                    <p class="mt-1 text-sm text-slate-300">República Dominicana</p>
                                </div>
                            </div>

                            <h1 class="max-w-4xl text-4xl font-black leading-[1.06] text-white md:text-5xl xl:text-6xl">Matemática aplicada, computación científica e innovación educativa</h1>
                            <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg xl:text-xl">
                                Investigamos ecuaciones diferenciales parciales no lineales, métodos iterativos de alto orden, análisis matricial, optimización, diseño de algoritmos y educación matemática.
                            </p>
                            <p class="mt-4 max-w-2xl border-l-4 border-sky-400 pl-4 text-sm italic text-sky-100 md:text-base">“Innovando en la frontera entre matemática, computación y educación.”</p>

                            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a href="#/laboratorioKernel" class="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200" aria-label="Entrar al Laboratorio Inteligente de Investigación">
                                    <i aria-hidden="true" class="bx bx-brain text-2xl"></i>
                                    Entrar al Laboratorio Inteligente
                                </a>
                                <a href="#/publicaciones" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                                    <i aria-hidden="true" class="bx bx-article text-xl"></i>
                                    Publicaciones
                                </a>
                                <a href="#/equipment" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                                    <i aria-hidden="true" class="bx bx-group text-xl"></i>
                                    Equipo
                                </a>
                            </div>

                            <div class="mt-6 flex items-start gap-3 rounded-2xl border border-sky-300/20 bg-sky-400/10 p-4">
                                <i aria-hidden="true" class="bx bx-shield-quarter mt-0.5 text-2xl text-sky-300"></i>
                                <div>
                                    <h2 class="font-black text-white">Investigación con orientación práctica</h2>
                                    <p class="mt-1 text-sm leading-relaxed text-slate-200">Desarrollo teórico, experimentación numérica, aplicaciones interdisciplinarias, herramientas reproducibles y formación científica.</p>
                                </div>
                            </div>
                        </div>

                        <div data-pestanas-universidades-portada class="min-w-0"></div>
                    </div>

                    <section class="mt-8 border-t border-white/10 pt-6" aria-label="Indicadores del grupo">
                        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p class="text-xs font-black uppercase tracking-[0.20em] text-sky-300">El grupo en cifras</p>
                                <h2 class="mt-1 text-2xl font-black text-white">Producción, talento y líneas de trabajo</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            ${at(ve.length,"Integrantes principales","bx-group","text-sky-300")}
                            ${at(t,"Publicaciones únicas registradas","bx-book-open","text-emerald-300")}
                            ${at(we.length,"Propuestas de investigación","bx-bulb","text-amber-300")}
                            ${at(J.length,"Líneas de investigación","bx-git-branch","text-violet-300")}
                        </div>
                    </section>
                </div>
            </header>

            <section aria-labelledby="titulo-lineas-portada">
                <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Nuestro trabajo</p>
                        <h2 id="titulo-lineas-portada" class="text-3xl font-black text-slate-900 md:text-5xl">Líneas de investigación</h2>
                    </div>
                    <a href="#/lineas" class="inline-flex items-center gap-2 font-black text-sky-700 hover:text-sky-900">Explorar todas las líneas <i aria-hidden="true" class="bx bx-right-arrow-alt text-xl"></i></a>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    ${J.map(Es).join("")}
                </div>
            </section>

            <section class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-slate-950 to-slate-950 px-6 py-10 text-white shadow-2xl md:px-10 md:py-12" aria-labelledby="titulo-laboratorio-portada">
                <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20"></div>
                <div class="relative z-10 grid grid-cols-1 gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
                    <div>
                        <p class="mb-3 text-xs font-black uppercase tracking-[0.22em] text-sky-300">Plataforma científica del grupo</p>
                        <h2 id="titulo-laboratorio-portada" class="text-3xl font-black leading-tight md:text-5xl">Laboratorio Inteligente de Investigación</h2>
                        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">Aprenda, seleccione y aplique procedimientos estadísticos con asistentes guiados, calculadoras, interpretación metodológica y una biblioteca integrada.</p>
                        <a href="#/laboratorioKernel" class="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-100">
                            <i aria-hidden="true" class="bx bx-log-in-circle text-2xl"></i>
                            Acceder al laboratorio
                        </a>
                    </div>
                    <div class="flex flex-wrap gap-3">${Cs()}</div>
                </div>
            </section>

            <section aria-labelledby="titulo-proyectos-portada">
                <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-black uppercase tracking-widest text-orange-600">Proyección científica</p>
                        <h2 id="titulo-proyectos-portada" class="text-3xl font-black text-slate-900 md:text-5xl">Propuestas de investigación</h2>
                    </div>
                    <a href="#/proyectos" class="inline-flex items-center gap-2 font-black text-sky-700 hover:text-sky-900">Ver detalles <i aria-hidden="true" class="bx bx-right-arrow-alt text-xl"></i></a>
                </div>
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">${we.map(As).join("")}</div>
            </section>

            ${Is()}

            <section class="grid grid-cols-1 gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" aria-labelledby="titulo-vinculacion-portada">
                <div>
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Red académica</p>
                    <h2 id="titulo-vinculacion-portada" class="text-2xl font-black text-slate-900 md:text-3xl">Instituciones presentes en la trayectoria, afiliaciones y proyectos del grupo</h2>
                    <div class="mt-5 flex flex-wrap gap-3">
                        <a href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">ISFODOSU</a>
                        <a href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">UASD</a>
                        <a href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">UNAPEC</a>
                    </div>
                </div>
                <div class="rounded-2xl bg-slate-950 p-6 text-white shadow-lg">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-300">Contacto científico</p>
                    <a href="mailto:mleonardos@unapec.edu.do" class="mt-3 block break-all text-lg font-black hover:text-sky-300">mleonardos@unapec.edu.do</a>
                    <a href="https://github.com/grupo-kernel" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-sky-300"><i aria-hidden="true" class="bx bxl-github text-xl"></i>Repositorio del grupo</a>
                </div>
            </section>
        </div>
    `,e.querySelector("[data-pestanas-universidades-portada]")?.replaceChildren(ys()),e}const ze=Object.freeze({titulo:"Catálogo institucional de servicios profesionales y académicos",subtitulo:"Matemática aplicada y computacional | Estadística | Ciencia de datos | Educación | Innovación",lema:"Rigor matemático para investigar, enseñar y decidir mejor.",introduccion:"En Grupo El Kernel convertimos problemas complejos en soluciones verificables mediante matemática aplicada, computación científica, estadística, ciencia de datos y educación. Trabajamos con universidades, centros educativos, instituciones públicas, empresas y equipos de investigación, desde el diagnóstico y el diseño hasta la implementación, validación y transferencia de capacidades.",notaAlcance:"Cada solicitud se delimita antes de iniciar. Se validan el responsable técnico, la capacidad disponible, los aliados requeridos, los entregables, los tiempos, las tarifas y cualquier habilitación profesional o regulatoria aplicable."}),ua=Object.freeze([{id:"todos",nombre:"Todos los servicios",rango:"1–20"},{id:"investigacion",nombre:"Investigación, tesis y producción científica",rango:"1–3"},{id:"matematica-datos",nombre:"Matemática aplicada, computación, datos y optimización",rango:"4–8"},{id:"riesgo-finanzas",nombre:"Riesgo, finanzas, economía y políticas públicas",rango:"9–11"},{id:"educacion",nombre:"Educación, posgrado y fortalecimiento académico",rango:"12–16"},{id:"tecnologia-transferencia",nombre:"Tecnología, soluciones sectoriales y transferencia",rango:"17–20"}]),_s=Object.freeze([{titulo:"Rigor científico",descripcion:"Métodos explícitos, supuestos documentados, validación y revisión de calidad."},{titulo:"Soluciones a la medida",descripcion:"Cada intervención se adapta al problema, los datos, el sector y las capacidades del cliente."},{titulo:"Reproducibilidad",descripcion:"Código, datos, procedimientos y resultados organizados para poder verificarse y actualizarse."},{titulo:"Transferencia de capacidades",descripcion:"El servicio incluye formación, documentación y apropiación por parte del equipo usuario."},{titulo:"Interdisciplinariedad",descripcion:"La matemática se conecta con educación, finanzas, actuaría, economía, ciencia, tecnología e industria."},{titulo:"Confidencialidad y ética",descripcion:"Los proyectos pueden ejecutarse bajo acuerdos de confidencialidad y reglas de integridad académica."}]),Ts=Object.freeze(["Universidades, institutos superiores, centros de investigación y escuelas de posgrado.","Centros educativos de secundaria, redes escolares, distritos y organismos de formación docente.","Ministerios, ayuntamientos, entidades reguladoras, observatorios y organismos públicos.","Aseguradoras, administradoras de fondos, bancos, cooperativas, fintech y organizaciones financieras.","Empresas de servicios, industria, logística, energía, tecnología, consultoría y organizaciones sin fines de lucro.","Investigadores, docentes, estudiantes de posgrado, equipos técnicos y comunidades profesionales."]),Ps=Object.freeze([{numero:1,titulo:"Confidencialidad",descripcion:"acuerdos de confidencialidad, control de acceso, custodia y devolución o eliminación segura de información."},{numero:2,titulo:"Integridad académica",descripcion:"asesoría que fortalece el trabajo del autor sin suplantarlo, fabricar resultados ni encubrir plagio."},{numero:3,titulo:"Protección de datos",descripcion:"minimización, anonimización, documentación de permisos y uso proporcional de información sensible."},{numero:4,titulo:"Reproducibilidad",descripcion:"procedimientos, datos, versiones, código, parámetros y decisiones suficientemente documentados."},{numero:5,titulo:"Validación y control de calidad",descripcion:"revisión técnica, pruebas, sensibilidad, comparación y trazabilidad de cambios."},{numero:6,titulo:"Uso responsable de inteligencia artificial",descripcion:"supervisión humana, verificación, explicabilidad, seguridad y gestión de sesgos."},{numero:7,titulo:"Transferencia de capacidades",descripcion:"manuales, talleres, sesiones de entrega, acompañamiento y materiales reutilizables."},{numero:8,titulo:"Interdisciplinariedad",descripcion:"incorporación de expertos sectoriales cuando el problema requiera conocimiento clínico, jurídico, ingenieril, ambiental u otro."},{numero:9,titulo:"Accesibilidad e inclusión",descripcion:"materiales y procesos comprensibles para diversos perfiles y condiciones de aprendizaje."},{numero:10,titulo:"Cumplimiento profesional",descripcion:"dictámenes, firmas o certificaciones reguladas solo por profesionales con la habilitación correspondiente."}]),Ls=Object.freeze([{titulo:"Diagnóstico breve",descripcion:"evaluación inicial con hallazgos, prioridades y hoja de ruta."},{titulo:"Consultoría por producto",descripcion:"entrega definida: modelo, informe, programa, tablero, protocolo, software o plan."},{titulo:"Proyecto integral",descripcion:"trabajo por fases desde el diagnóstico hasta la implementación y transferencia."},{titulo:"Acompañamiento periódico",descripcion:"bolsa de horas o iguala para consultas, revisión, análisis y seguimiento."},{titulo:"Formación y talleres",descripcion:"cursos abiertos o cerrados, presenciales, virtuales o híbridos."},{titulo:"Co-desarrollo",descripcion:"equipo mixto con personal del cliente para construir y apropiarse de la solución."},{titulo:"Revisión experta independiente",descripcion:"dictamen técnico, validación de modelos, auditoría metodológica o evaluación externa."},{titulo:"Alianza institucional",descripcion:"programas, observatorios, laboratorios o agendas de largo plazo con gobernanza compartida."}]),pa=Object.freeze([{numero:1,titulo:"Exploración",descripcion:"reunión inicial, contexto, necesidad, usuarios y decisión que debe apoyarse."},{numero:2,titulo:"Alcance",descripcion:"objetivos, preguntas, datos, entregables, exclusiones, cronograma y responsabilidades."},{numero:3,titulo:"Plan técnico",descripcion:"métodos, equipo, validación, riesgos, gestión de datos y criterios de aceptación."},{numero:4,titulo:"Ejecución",descripcion:"análisis, modelización, desarrollo, formación o diseño con entregas parciales."},{numero:5,titulo:"Validación",descripcion:"pruebas, revisión experta, sensibilidad, retroalimentación y correcciones."},{numero:6,titulo:"Entrega y transferencia",descripcion:"productos finales, documentación, capacitación y repositorios acordados."},{numero:7,titulo:"Seguimiento",descripcion:"medición de uso, resultados, mantenimiento, actualización o nueva fase."}]),ma=Object.freeze([{numero:1,titulo:"Proyecto de investigación listo para postulación",descripcion:"Diagnóstico del problema, revisión de evidencia, formulación, metodología, cronograma, riesgos, indicadores, presupuesto conceptual y documento de convocatoria."},{numero:2,titulo:"Tesis con rigor metodológico y computacional",descripcion:"Ruta de trabajo, matriz de coherencia, diseño, análisis estadístico o matemático, revisión de código, interpretación, estructura, defensa y artículo derivado."},{numero:3,titulo:"Diseño integral de maestría o posgrado",descripcion:"Estudio de viabilidad, benchmarking, perfil, competencias, malla, sílabos, investigación, profesorado, reglamentos, indicadores y expediente técnico."},{numero:4,titulo:"Feria científica STEM institucional",descripcion:"Plan maestro, categorías, reglamento, rúbricas, banco de proyectos, formación de mentores y jurados, acompañamiento, evento y evaluación."},{numero:5,titulo:"Diplomado a la medida",descripcion:"Diagnóstico, diseño curricular, módulos, materiales, facilitadores, evaluación, certificación y reporte de resultados."},{numero:6,titulo:"Modelo actuarial o financiero con tablero",descripcion:"Preparación de datos, formulación, estimación, validación, escenarios, stress testing, visualización, manual técnico y transferencia."},{numero:7,titulo:"Solución de optimización y analítica",descripcion:"Mapeo del proceso, modelo de decisión, datos, algoritmo, piloto, comparación de escenarios, tablero y plan de implementación."},{numero:8,titulo:"Laboratorio u observatorio desde cero",descripcion:"Misión, líneas, gobernanza, procesos, tecnología, indicadores, portafolio, plan de lanzamiento, pilotos y acompañamiento inicial."}]),Rs=Object.freeze([{numero:1,id:"investigacion-y-proyectos",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Investigación científica y gestión de I+D+i",tituloCorto:"Investigación y proyectos",resumen:"Formulamos, evaluamos y acompañamos proyectos de I+D+i, agendas, convocatorias, consorcios y sistemas de seguimiento.",descripcion:"Acompañamiento integral para transformar ideas y necesidades institucionales en proyectos rigurosos, financiables, ejecutables y evaluables.",subservicios:["Diagnóstico de capacidades de investigación: evaluación de líneas, talento, infraestructura, producción científica, brechas y oportunidades de colaboración","Formulación de problemas y preguntas: delimitación del objeto de estudio, preguntas, hipótesis, objetivos, variables y contribución esperada","Estados del arte y mapas de evidencia: búsquedas estructuradas, revisiones de alcance, análisis bibliométricos y detección de vacíos de conocimiento","Protocolos y planes metodológicos: diseño de fases, métodos, fuentes, instrumentos, cronogramas, indicadores, riesgos y estrategias de validación","Propuestas para fondos y convocatorias: redacción técnica, teoría de cambio, presupuesto conceptual, plan de trabajo, impacto, sostenibilidad y matriz de resultados","Agendas, líneas y portafolios de investigación: priorización temática y organización de proyectos de corto, mediano y largo plazo","Monitoreo y evaluación de proyectos: tableros de avance, hitos, indicadores, control de calidad, gestión de riesgos y evaluación de resultados","Redes, alianzas y consorcios: estructuración de equipos interdisciplinarios, roles, gobernanza, coordinación y acuerdos de colaboración","Planes de datos y reproducibilidad: organización de datos, diccionarios, versiones, scripts, trazabilidad, respaldo y documentación técnica","Evaluación científica externa: revisión por expertos de proyectos, productos, centros, líneas o programas de investigación"],entregables:"diagnósticos, protocolos, propuestas de financiamiento, matrices de marco lógico, agendas de investigación, informes de seguimiento y evaluaciones técnicas.",icono:"bx-grid-alt"},{numero:2,id:"tesis-e-investigacion-academica",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Asesoría de tesis y trabajos de investigación",tituloCorto:"Tesis e investigación académica",resumen:"Orientamos tesis y trabajos científicos con rigor metodológico, matemático, estadístico y computacional, respetando la autoría.",descripcion:"Orientación ética y especializada para tesis de grado, maestría y doctorado, así como trabajos finales, monografías y proyectos de investigación aplicada.",subservicios:["Selección y delimitación del tema: conversión de un interés general en un problema viable, relevante y abordable","Coherencia entre problema, objetivos e hipótesis: revisión de alineación lógica, alcance y factibilidad","Diseño metodológico: elección justificada de enfoques cuantitativos, cualitativos, mixtos, teóricos, computacionales o experimentales","Muestreo e instrumentos: tamaño muestral, planes de selección, construcción, pilotaje, validez y confiabilidad","Modelización matemática y análisis estadístico: selección de modelos, supuestos, estimación, contraste, sensibilidad e interpretación","Programación, simulación y depuración: orientación y revisión de código en Python, R, MATLAB, Julia, Mathematica u otros entornos pertinentes","Interpretación y discusión de resultados: conexión de hallazgos con objetivos, literatura, limitaciones e implicaciones","Estructura y redacción académica: organización de capítulos, claridad argumental, consistencia terminológica, tablas, figuras y anexos","Preparación de defensa: guion, diapositivas, preguntas probables, simulación de sustentación y mejora de la comunicación oral","Conversión de tesis en publicación: selección de resultados publicables y adaptación a artículo, capítulo, ponencia o informe técnico"],entregables:"hojas de ruta, matrices de coherencia, protocolos, scripts comentados, informes de resultados, planes de defensa y manuscritos derivados. La asesoría no sustituye la autoría ni la responsabilidad académica del tesista.",icono:"bx-book-open"},{numero:3,id:"publicacion-cientifica",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Publicación, edición y comunicación científica",tituloCorto:"Publicación científica",resumen:"Fortalecemos artículos, libros, informes, LaTeX, tablas, figuras, bibliografía y respuestas a revisores.",descripcion:"Servicios para elevar la calidad técnica, expositiva y editorial de productos científicos, sin alterar la autoría ni ocultar conflictos de interés.",subservicios:["Arquitectura de manuscritos: organización de artículos, capítulos, libros, notas técnicas, reportes y documentos de trabajo","Selección de revista o editorial: análisis de alcance, indexación, audiencia, políticas, tiempos, costos y señales de calidad","Edición científica y matemática: claridad, precisión, consistencia de símbolos, notación, definiciones, teoremas, algoritmos y demostraciones","Tablas, figuras y visualizaciones: rediseño para legibilidad, coherencia gráfica, comparabilidad y cumplimiento editorial","Maquetación en LaTeX y Word: plantillas, estilos, referencias cruzadas, ecuaciones, bibliografía y preparación de archivos finales","Gestión bibliográfica: depuración de referencias, normalización de estilos, DOI, bases de datos y control de correspondencia entre citas y lista final","Respuesta a revisores: matrices de cambios, cartas de respuesta y revisión de consistencia entre observaciones y modificaciones","Integridad y ética de publicación: autoría, originalidad, declaración de datos, conflictos, uso responsable de herramientas digitales y buenas prácticas","Revisión técnica bilingüe: control conceptual y terminológico en español e inglés, con coordinación de traducción especializada cuando proceda","Memorias y productos de eventos: edición de resúmenes, actas, proceedings, posters, presentaciones y colecciones temáticas"],entregables:"manuscritos editados, plantillas, cartas a revisores, gráficos publicables, bibliografías depuradas, posters, presentaciones y memorias.",icono:"bx-edit-alt"}]),Ms=Object.freeze([{numero:4,id:"modelizacion-y-simulacion",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Modelización matemática y simulación",tituloCorto:"Modelización y simulación",resumen:"Construimos modelos deterministas y estocásticos, ecuaciones diferenciales, escenarios y análisis de sensibilidad.",descripcion:"Construcción de representaciones matemáticas para comprender sistemas, comparar escenarios, estimar parámetros y apoyar decisiones.",subservicios:["Modelos deterministas: formulación de relaciones estructurales para fenómenos físicos, sociales, económicos, educativos o empresariales","Modelos estocásticos: incorporación explícita de incertidumbre, aleatoriedad, riesgo y variabilidad","Ecuaciones diferenciales ordinarias: modelos dinámicos continuos, sistemas acoplados, estabilidad, calibración y simulación","Ecuaciones diferenciales parciales: difusión, transporte, ondas, reacción-difusión y otros procesos espacio-temporales","Sistemas dinámicos y no lineales: equilibrios, bifurcaciones, estabilidad local, sensibilidad y comportamiento cualitativo","Problemas inversos y estimación de parámetros: identificación de parámetros a partir de observaciones y evaluación de identificabilidad","Análisis de sensibilidad e incertidumbre: cuantificación del efecto de supuestos, parámetros, datos y escenarios","Simulación Monte Carlo: propagación de incertidumbre, estimación de distribuciones y evaluación probabilística de resultados","Simulación de escenarios: comparación de políticas, estrategias, condiciones iniciales y eventos extremos","Calibración y validación: contraste del modelo con datos, métricas de ajuste, validación cruzada y análisis de robustez"],entregables:"modelos conceptuales y matemáticos, ecuaciones, supuestos, códigos de simulación, análisis de sensibilidad, escenarios y reportes de validación.",icono:"bx-atom"},{numero:5,id:"matematica-computacional",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Análisis numérico y matemática computacional",tituloCorto:"Matemática computacional",resumen:"Diseñamos y analizamos métodos numéricos, algoritmos iterativos, álgebra lineal, EDO, EDP y pruebas de rendimiento.",descripcion:"Diseño, análisis e implementación de métodos numéricos eficientes, estables y verificables para problemas científicos y tecnológicos.",subservicios:["Ecuaciones y sistemas no lineales: selección, diseño y comparación de métodos iterativos para raíces simples o múltiples","Métodos iterativos de alto orden: análisis de convergencia, eficiencia, estabilidad y experimentación computacional","Álgebra lineal numérica: sistemas lineales, factorizaciones, autovalores, condicionamiento, matrices dispersas y gran escala","Análisis matricial: propiedades espectrales, perturbaciones, normas, sensibilidad y estructuras especiales","Integración y diferenciación numérica: cuadraturas, aproximación de derivadas, interpolación y control de error","Resolución numérica de EDO y EDP: diferencias finitas, elementos finitos, métodos espectrales y esquemas adaptativos","Convergencia, estabilidad y error: demostraciones, estimaciones a priori y a posteriori, consistencia y robustez","Computación dispersa y alta dimensionalidad: reducción de memoria, precondicionamiento, paralelización y estrategias de escalamiento","Benchmarking de algoritmos: protocolos reproducibles, perfiles de rendimiento, análisis estadístico y comparación justa","Prototipos de computación científica: implementaciones documentadas para validar ideas, métodos y resultados"],entregables:"algoritmos, pruebas de convergencia, códigos, bancos de prueba, perfiles de rendimiento, documentación técnica y artículos metodológicos.",icono:"bx-calculator"},{numero:6,id:"optimizacion",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Optimización e investigación de operaciones",tituloCorto:"Optimización",resumen:"Resolvemos problemas de asignación, logística, planificación, portafolios, procesos y decisiones bajo restricciones.",descripcion:"Soluciones matemáticas para asignar recursos, reducir costos, mejorar rendimiento y elegir alternativas bajo restricciones.",subservicios:["Optimización lineal y no lineal: formulación de funciones objetivo, restricciones, condiciones de optimalidad y solución computacional","Optimización con y sin restricciones: métodos de Newton, cuasi-Newton, gradiente, penalización, barreras y estrategias híbridas","Optimización entera y combinatoria: decisiones discretas, selección, asignación, cobertura, empaquetamiento y diseño de redes","Optimización multiobjetivo: frentes de Pareto, ponderación, preferencias y análisis de compromisos","Optimización estocástica y robusta: decisiones bajo incertidumbre, escenarios y protección frente a variaciones","Ruteo, logística y programación: rutas, horarios, turnos, secuencias, transporte y distribución","Asignación de recursos: personal, presupuesto, aulas, equipos, inventarios, capacidad y prioridades","Optimización de portafolios y activos-pasivos: retorno, riesgo, liquidez, duración, restricciones y escenarios","Optimización de procesos y parámetros: calibración, diseño, control, experimentos y mejora del desempeño","Selección de solver y estrategia: comparación de algoritmos, ajuste de hiperparámetros, escalabilidad y validación de soluciones"],entregables:"modelos de decisión, formulaciones matemáticas, prototipos, soluciones computacionales, análisis de escenarios y tableros de recomendación.",icono:"bx-trending-up"},{numero:7,id:"estadistica-aplicada",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Estadística aplicada y metodología de la investigación",tituloCorto:"Estadística aplicada",resumen:"Diseñamos estudios, muestras e instrumentos; analizamos datos y entregamos informes reproducibles y comprensibles.",descripcion:"Apoyo integral para diseñar estudios, producir datos confiables y convertirlos en evidencia interpretada correctamente.",subservicios:["Diseño de estudios: planes observacionales, experimentales, cuasiexperimentales, longitudinales, transversales y mixtos","Muestreo y potencia estadística: marcos muestrales, tamaños de muestra, precisión, efecto mínimo detectable y estrategias de selección","Diseño y validación de instrumentos: escalas, cuestionarios, rúbricas, validez de contenido y constructo, confiabilidad y análisis de ítems","Calidad y preparación de datos: depuración, codificación, datos faltantes, atípicos, consistencia y diccionarios de variables","Análisis descriptivo y exploratorio: resúmenes, visualizaciones, asociaciones, patrones, segmentaciones y perfiles","Regresión y análisis multivariado: modelos lineales y generalizados, componentes, factores, clasificación, conglomerados y modelos mixtos","Series de tiempo y pronósticos: tendencia, estacionalidad, intervención, volatilidad y evaluación predictiva","Supervivencia y tiempo hasta evento: curvas, riesgos, censura, modelos proporcionales y análisis de duración","Métodos bayesianos y espaciales: inferencia con información previa, modelos jerárquicos y análisis georreferenciado","Informes y transferencia estadística: scripts reproducibles, interpretación no técnica, talleres y acompañamiento a equipos"],entregables:"planes de análisis, bases depuradas, scripts, tablas, gráficos, informes estadísticos, anexos metodológicos y sesiones de capacitación.",icono:"bx-bar-chart-alt-2"},{numero:8,id:"ciencia-de-datos-e-ia",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Ciencia de datos e inteligencia artificial",tituloCorto:"Ciencia de datos e IA",resumen:"Desarrollamos modelos predictivos, tableros, automatizaciones, aprendizaje automático y soluciones de inteligencia artificial responsable.",descripcion:"Diseño de soluciones basadas en datos para predicción, clasificación, segmentación, automatización y apoyo a la decisión.",subservicios:["Diagnóstico de madurez de datos: evaluación de fuentes, calidad, disponibilidad, procesos, capacidades y casos de uso prioritarios","Ingeniería y canalización de datos: integración, transformación, documentación y automatización de flujos analíticos","Tableros e inteligencia de negocio: indicadores, visualización interactiva, alertas y seguimiento de desempeño","Aprendizaje automático predictivo: regresión, clasificación, segmentación, recomendación y selección de variables","Aprendizaje profundo: redes neuronales para datos tabulares, imágenes, señales, secuencias y problemas de alta complejidad","Procesamiento de lenguaje natural: clasificación de textos, extracción de información, análisis temático y asistencia documental","Visión por computadora: clasificación, detección, segmentación y análisis de imágenes en proyectos pertinentes","Pronóstico, anomalías y fraude: detección temprana de patrones atípicos, riesgos, fallos o comportamientos sospechosos","Explicabilidad, equidad y validación: interpretación de modelos, sesgos, estabilidad, métricas y control de generalización","Despliegue y monitoreo de modelos: prototipos operativos, seguimiento de desempeño, actualización y transferencia al equipo usuario"],entregables:"auditorías de datos, modelos, notebooks, APIs o prototipos, tableros, documentación, métricas de validación y planes de operación.",icono:"bx-brain"}]),Ds=Object.freeze([{numero:9,id:"actuaria-y-riesgo",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Consultoría actuarial y gestión cuantitativa del riesgo",tituloCorto:"Actuaría y riesgo",resumen:"Analizamos mortalidad, siniestros, primas, reservas, pensiones, reaseguro, solvencia y activos-pasivos.",descripcion:"Modelos y análisis para seguros, pensiones, salud, beneficios y administración de riesgos biométricos y financieros.",subservicios:["Mortalidad, supervivencia y longevidad: construcción, comparación, graduación y proyección de tablas y curvas","Anualidades y factores actuariales: valoración bajo tasas, edades, contingencias y supuestos alternativos","Frecuencia y severidad de siniestros: modelos de conteo, distribuciones de pérdidas, colas y dependencia","Primas y reservas: modelos prospectivos y retrospectivos, sensibilidad y suficiencia bajo escenarios","Pensiones y beneficios: proyecciones de obligaciones, flujos, reemplazo, sostenibilidad y riesgo de longevidad","Capital, solvencia y pruebas de estrés: escenarios adversos, suficiencia de capital y mapas cuantitativos de riesgo","Reaseguro y retención: capas, deducibles, límites, impacto en volatilidad y evaluación de alternativas","Gestión de activos y pasivos: duración, inmunización, liquidez, brechas y escenarios de tasas","Estudios de experiencia y segmentación: comparación observado-esperado, credibilidad, perfiles y actualización de supuestos","Validación de modelos actuariales: revisión independiente de metodología, datos, código, supuestos, resultados y gobernanza"],entregables:"bases actuariales, curvas y tablas, modelos de pérdidas, proyecciones, stress tests, tableros de riesgo e informes de validación. Los dictámenes o firmas reguladas se emitirán solo mediante profesionales legalmente habilitados.",icono:"bx-check-shield"},{numero:10,id:"finanzas-y-econometria",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Finanzas cuantitativas, econometría y analítica económica",tituloCorto:"Finanzas y econometría",resumen:"Construimos pronósticos, modelos de riesgo, scoring, portafolios, valoración y tableros económicos.",descripcion:"Herramientas para valorar, pronosticar y gestionar decisiones financieras, crediticias, macroeconómicas y empresariales.",subservicios:["Modelos econométricos: estimación causal o predictiva con datos transversales, panel, series de tiempo y variables instrumentales","Pronóstico macroeconómico y financiero: inflación, actividad, tasas, liquidez, demanda, ingresos y otros indicadores","Transmisión monetaria y precios: análisis de tasas, tipo de cambio, combustibles, costos y cadenas de propagación","Portafolios y medición de riesgo: retorno, volatilidad, correlación, diversificación, VaR, pérdida esperada y escenarios","Riesgo de crédito y scoring: probabilidad de incumplimiento, segmentación, pérdida esperada y monitoreo de cartera","Valoración y fijación de precios: flujos descontados, instrumentos, proyectos, productos y análisis de sensibilidad","Riesgo de mercado, liquidez y operación: métricas, límites, alertas, escenarios y mapas de exposición","Analítica para fintech, cooperativas y microfinanzas: segmentación, cobranza, inclusión, propensión y sostenibilidad","Pruebas de estrés y simulación financiera: choques de tasas, inflación, morosidad, tipo de cambio y condiciones macro","Tableros e inteligencia económica: sistemas de indicadores para seguimiento, comparación y decisión ejecutiva"],entregables:"modelos econométricos y financieros, pronósticos, matrices de riesgo, escenarios, tableros e informes ejecutivos con anexos técnicos.",icono:"bx-line-chart"},{numero:11,id:"politicas-publicas",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Analítica para políticas públicas y desarrollo",tituloCorto:"Políticas públicas",resumen:"Creamos indicadores, evaluaciones de impacto, mapas, simulaciones y evidencia para decisiones públicas.",descripcion:"Aplicación de modelos, estadística y ciencia de datos para diseñar, focalizar, evaluar y comunicar políticas y programas.",subservicios:["Indicadores sociales y económicos: diseño, cálculo, validación, desagregación y seguimiento","Pobreza, desigualdad y distribución: índices, curvas, descomposición, concentración y análisis territorial","Evaluación de impacto: diseños experimentales y cuasiexperimentales, contrafactuales, costo-efectividad y sensibilidad","Planificación de servicios públicos: demanda, cobertura, capacidad, brechas y asignación de recursos","Análisis de precios y cadenas de transmisión: combustibles, alimentos, transporte, tarifas y repercusiones sectoriales","Analítica espacial y territorial: mapas, clusters, accesibilidad, desigualdades geográficas y priorización","Educación, empleo y protección social: trayectorias, resultados, vulnerabilidad, transición y focalización","Riesgo climático y de desastres: escenarios, exposición, vulnerabilidad y apoyo cuantitativo a la resiliencia","Simulación de políticas: comparación de alternativas, beneficiarios, costos, resultados y efectos distributivos","Notas de política y datos abiertos: síntesis ejecutiva, visualizaciones, tableros y productos para comunicación pública"],entregables:"índices, mapas, bases armonizadas, evaluaciones de impacto, simuladores, tableros, notas de política e informes de escenarios.",icono:"bx-grid-alt"}]),Os=Object.freeze([{numero:12,id:"posgrados-y-maestrias",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Diseño de posgrados, maestrías y programas académicos",tituloCorto:"Posgrados y maestrías",resumen:"Diseñamos o rediseñamos programas, competencias, mallas, sílabos, reglamentos e indicadores de calidad.",descripcion:"Diseño o rediseño de ofertas formativas con pertinencia, rigor, coherencia curricular, viabilidad operativa y orientación a resultados.",subservicios:["Estudios de necesidad y viabilidad: demanda, población objetivo, entorno profesional, recursos, sostenibilidad y diferenciación","Benchmarking nacional e internacional: comparación de planes, créditos, competencias, modalidades, investigación y tendencias","Perfil de ingreso, egreso y competencias: resultados de aprendizaje medibles y alineados con el campo profesional y científico","Malla y arquitectura curricular: secuencias, prerrequisitos, créditos, balance teórico-práctico e integración investigativa","Diseño de asignaturas y sílabos: propósitos, contenidos, estrategias, actividades, evaluación, bibliografía y recursos","Líneas de investigación y vinculación: articulación de proyectos, tesis, seminarios, prácticas y necesidades del entorno","Perfil y desarrollo del profesorado: requisitos, matriz docente, plan de capacitación y comunidades académicas","Normativas y procesos académicos: admisión, permanencia, tutoría, evaluación, tesis, graduación y aseguramiento de calidad","Diseño virtual, híbrido o presencial: experiencias, interacción, laboratorios, recursos y evaluación coherentes con la modalidad","Expediente de aprobación y mejora: documentación, evidencias, indicadores, evaluación periódica y apoyo a procesos de acreditación"],entregables:"estudios de viabilidad, perfiles, mapas curriculares, sílabos, reglamentos, matrices docentes, expedientes técnicos y planes de evaluación.",icono:"bx-book-open"},{numero:13,id:"diplomados-y-formacion-continua",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Diplomados, certificaciones y educación continua",tituloCorto:"Diplomados y formación continua",resumen:"Ofrecemos programas a la medida en estadística, investigación, matemática computacional, datos, finanzas, actuaría y STEM.",descripcion:"Programas modulares, actualizados y adaptables para universidades, empresas, colegios profesionales, instituciones públicas y centros educativos.",subservicios:["Diseño integral de diplomados: diagnóstico, competencias, malla, módulos, evaluación, recursos, facilitadores y certificación","Estadística aplicada a la investigación: desde fundamentos y diseño hasta modelos multivariados y reportes reproducibles","Metodología, escritura y publicación científica: protocolos, análisis, redacción, LaTeX, visualización y respuesta editorial","Matemática computacional y métodos numéricos: programación científica, simulación, álgebra numérica, EDO, EDP y control de error","Optimización e investigación de operaciones: modelado, solvers, logística, planificación, métodos exactos y heurísticos","Ciencia de datos e inteligencia artificial: Python o R, aprendizaje automático, redes neuronales, visualización y validación","Finanzas cuantitativas y analítica actuarial: riesgo, series de tiempo, pérdidas, mortalidad, reservas, portafolios y stress testing","STEM y formación docente: aprendizaje basado en proyectos, modelización, ferias, evaluación y tecnología educativa","Herramientas para comunicación científica: LaTeX, Word avanzado, gestores bibliográficos, posters, presentaciones y repositorios","Capacitación a la medida: programas cerrados por sector, rol, nivel, problema y conjunto de datos institucional"],entregables:"diseño curricular, materiales, guías, ejercicios, datasets, evaluaciones, rúbricas, sesiones formativas y reporte de resultados.",icono:"bx-group"},{numero:14,id:"ferias-y-proyectos-stem",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Proyectos STEM, ferias científicas y cultura de innovación",tituloCorto:"Ferias y proyectos STEM",resumen:"Diseñamos ferias, clubes, campamentos, retos, bancos de proyectos, rúbricas y formación de mentores.",descripcion:"Creación de experiencias científicas que articulen matemática, ciencias, tecnología, ingeniería, datos y comunicación.",subservicios:["Diseño de ferias científicas institucionales: propósito, alcance, calendario, categorías, roles, recursos, seguridad y comunicación","Reglamentos, rúbricas y criterios: estándares transparentes para originalidad, método, evidencia, prototipo, impacto y exposición","Formación de mentores y jurados: acompañamiento ético, evaluación consistente, retroalimentación y manejo de conflictos","Banco de proyectos STEM: ideas escalables por nivel educativo, tiempo, recursos y área temática","Aprendizaje basado en proyectos e indagación: secuencias que parten de problemas reales y culminan en productos verificables","Clubes, campamentos y semilleros: programas extracurriculares de matemática, ciencia, programación, datos y modelización","Olimpiadas, datatones y retos: competencias de resolución de problemas, modelización, análisis de datos y comunicación","Prototipado y simulación: uso de herramientas digitales, sensores, programación o modelado, con alianzas técnicas cuando sea necesario","Exhibición y divulgación: posters, pitches, demostraciones, guiones, stands y comunicación para públicos no especializados","Evaluación de impacto y continuidad: indicadores de participación, aprendizaje, equidad, calidad y seguimiento de proyectos destacados"],entregables:"plan maestro de feria, reglamento, rúbricas, banco de proyectos, formación de mentores, materiales de difusión y evaluación de impacto.",icono:"bx-brain"},{numero:15,id:"desarrollo-docente",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Formación y asesoría metodológica para docentes",tituloCorto:"Desarrollo docente",resumen:"Acompañamos a docentes de secundaria y universidad en didáctica, evaluación, tecnología y mejora de aula.",descripcion:"Desarrollo profesional para profesores de secundaria y universidad, especialmente en matemática, estadística, ciencias y cursos cuantitativos.",subservicios:["Diagnóstico de prácticas y necesidades: observación, encuestas, resultados de aprendizaje, recursos y prioridades de mejora","Didáctica de la matemática en secundaria: razonamiento, representaciones, resolución de problemas, modelización y conexiones conceptuales","Metodología universitaria: diseño de clases, actividades, evaluación y acompañamiento en cálculo, álgebra, estadística y métodos numéricos","Secuencias y unidades didácticas: resultados, tareas, recursos, tiempos, evidencias y criterios de evaluación","Aprendizaje basado en problemas y proyectos: situaciones auténticas, trabajo colaborativo, productos y reflexión","Evaluación del aprendizaje: bancos de ítems, rúbricas, pruebas diagnósticas, evaluación formativa y análisis de resultados","Tecnología, software y programación: CAS, simuladores, hojas de cálculo, Python, R y visualización para enseñar y aprender","Nivelación y transición: programas puente entre secundaria y universidad, diagnóstico y rutas de recuperación","Acompañamiento y observación de aula: coaching, retroalimentación, comunidades de práctica y ciclos de mejora","Inclusión y diversidad de aprendizaje: adaptaciones, múltiples representaciones, accesibilidad y apoyo diferenciado"],entregables:"diagnósticos, planes de desarrollo docente, unidades didácticas, bancos de evaluación, talleres, observaciones y reportes de mejora.",icono:"bx-check-shield"},{numero:16,id:"inteligencia-academica",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Evaluación, calidad e inteligencia académica",tituloCorto:"Inteligencia académica",resumen:"Evaluamos programas y resultados; diseñamos indicadores, alertas de deserción, tableros y planes de mejora.",descripcion:"Uso de evidencia para mejorar programas, docencia, permanencia estudiantil, investigación y gestión institucional.",subservicios:["Evaluación de programas académicos: pertinencia, coherencia, resultados, recursos, eficiencia, satisfacción e impacto","Medición de resultados de aprendizaje: mapas de evidencias, instrumentos, estándares, análisis y planes de cierre de brechas","Retención, deserción y alerta temprana: modelos de riesgo, perfiles, factores asociados y estrategias de intervención","Tableros e indicadores académicos: matrícula, rendimiento, aprobación, titulación, docencia, investigación y vinculación","Encuestas y sistemas de retroalimentación: diseño, muestreo, análisis, segmentación y comunicación de hallazgos","Planificación de oferta y carga: secciones, horarios, aulas, demanda, capacidad y asignación docente","Desarrollo y evaluación del profesorado: necesidades, trayectorias, desempeño, capacitación e impacto","Analítica de investigación: producción, colaboración, visibilidad, líneas, proyectos, financiamiento e impacto","Evidencias para acreditación: matrices, trazabilidad, indicadores, repositorios y control de consistencia","Planes de mejora continua: prioridades, responsables, metas, indicadores, seguimiento y evaluación"],entregables:"modelos de indicadores, tableros, instrumentos, informes de evaluación, sistemas de alerta y planes de mejora.",icono:"bx-bar-chart-alt-2"}]),Ns=Object.freeze([{numero:17,id:"software-cientifico",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Software científico, automatización y herramientas computacionales",tituloCorto:"Software científico",resumen:"Construimos prototipos, simuladores, paquetes, notebooks, aplicaciones analíticas y reportes automatizados.",descripcion:"Desarrollo de soluciones técnicas que convierten métodos matemáticos y analíticos en herramientas utilizables y transferibles.",subservicios:["Prototipos en lenguajes científicos: Python, R, Julia, MATLAB, Mathematica u otros, según el problema y el entorno","Calculadoras y simuladores: herramientas para escenarios, docencia, finanzas, riesgo, estadística y modelización","Tableros y aplicaciones analíticas: interfaces para explorar datos, indicadores, predicciones y recomendaciones","Bibliotecas, paquetes y APIs: encapsulamiento de algoritmos, documentación y reutilización en otros sistemas","Software de simulación: implementación de modelos dinámicos, estocásticos, numéricos o de optimización","Automatización de reportes: generación repetible de tablas, gráficos, diagnósticos y documentos","Notebooks reproducibles: integración de texto, ecuaciones, código, resultados y documentación","Optimización y refactorización de código: rendimiento, memoria, estabilidad, legibilidad, vectorización y pruebas","Documentación, pruebas y control de versiones: manuales, casos de prueba, repositorios y trazabilidad","Transferencia y mantenimiento: capacitación, entrega de código, protocolos de actualización y soporte acordado"],entregables:"código fuente, paquetes, notebooks, prototipos, tableros, manuales, pruebas, repositorios y sesiones de transferencia.",icono:"bx-calculator"},{numero:18,id:"soluciones-sectoriales",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Soluciones cuantitativas para empresas, industria y sector público",tituloCorto:"Soluciones sectoriales",resumen:"Aplicamos modelos y datos a demanda, inventarios, logística, calidad, mantenimiento, energía y gestión pública.",descripcion:"Aplicación de matemática, estadística y computación a problemas operativos, productivos, comerciales y de gestión.",subservicios:["Diagnóstico de procesos y datos: identificación de cuellos de botella, decisiones, fuentes, calidad y oportunidades analíticas","Pronóstico de demanda e inventarios: modelos, estacionalidad, incertidumbre, niveles de servicio y políticas de reposición","Logística y cadena de suministro: rutas, localización, distribución, capacidad, tiempos y costos","Optimización de producción y servicios: mezcla, secuenciación, turnos, capacidad, productividad y restricciones","Control estadístico de calidad: variación, cartas de control, capacidad, muestreo y mejora de procesos","Mantenimiento y confiabilidad: fallos, vida útil, disponibilidad, mantenimiento preventivo y priorización","Energía, ambiente y sostenibilidad: consumo, eficiencia, emisiones, escenarios y optimización de recursos","Aplicaciones sectoriales interdisciplinarias: agricultura, clima, salud, transporte u otras áreas junto con especialistas del dominio","Sistemas de apoyo a decisiones: integración de reglas, modelos, escenarios, indicadores y recomendaciones","Pruebas de concepto: pilotos controlados para demostrar viabilidad, valor, riesgos y requisitos de escalamiento"],entregables:"diagnósticos, modelos de proceso, pronósticos, soluciones de optimización, pilotos, tableros y planes de implementación.",icono:"bx-trending-up"},{numero:19,id:"eventos-y-transferencia",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Eventos científicos, redes y transferencia de conocimiento",tituloCorto:"Eventos y transferencia",resumen:"Organizamos congresos, escuelas, talleres, datatones, redes y productos de divulgación científica.",descripcion:"Diseño de espacios de intercambio, formación, colaboración y difusión que conecten academia, educación, empresa, Estado y sociedad.",subservicios:["Congresos, simposios y seminarios: concepto, programa, comités, convocatoria, revisión, logística académica y evaluación","Escuelas de verano e invierno: rutas intensivas de formación para estudiantes, docentes y profesionales","Talleres de investigación: problemas abiertos, métodos, datos, escritura, replicación y desarrollo de proyectos","Webinars, conferencias y clases magistrales: contenidos especializados para públicos académicos, profesionales o generales","Datatones, hackatones y competencias: retos, datos, reglas, mentoría, evaluación y productos","Memorias, actas y productos editoriales: resúmenes, proceedings, repositorios, números especiales y materiales de difusión","Redes nacionales e internacionales: identificación de aliados, agenda común, proyectos, movilidad y coautoría","Mesas universidad-empresa-Estado: traducción de necesidades en retos, proyectos y mecanismos de cooperación","Divulgación y alfabetización científica: contenidos, charlas, infografías, recursos y actividades para públicos diversos","Planes de transferencia e impacto: usuarios, adopción, propiedad intelectual, capacitación, indicadores y sostenibilidad"],entregables:"programas académicos, convocatorias, rúbricas, memorias, repositorios, materiales de divulgación, alianzas y planes de transferencia.",icono:"bx-group"},{numero:20,id:"laboratorios-y-observatorios",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Creación de laboratorios, observatorios y unidades de investigación",tituloCorto:"Laboratorios y observatorios",resumen:"Diseñamos unidades de investigación, laboratorios de datos, matemática computacional, STEM y observatorios sectoriales.",descripcion:"Diseño institucional de estructuras permanentes para producir conocimiento, prestar servicios, formar talento y sostener proyectos.",subservicios:["Oficinas de investigación y proyectos: procesos, cartera, convocatorias, seguimiento, ética, datos y apoyo a investigadores","Laboratorios de matemática computacional: líneas, infraestructura, software, proyectos, formación y servicios","Laboratorios de datos e inteligencia artificial: gobernanza, casos de uso, capacidades, plataformas y portafolio","Observatorios actuariales y financieros: indicadores, bases, metodologías, reportes, alertas y análisis de riesgo","Laboratorios de educación matemática y STEM: innovación didáctica, pilotaje, recursos, formación y evaluación","Observatorios sectoriales: educación, precios, empleo, productividad, desigualdad, ciencia, tecnología u otros temas","Gobernanza y modelo operativo: misión, estructura, roles, comités, procesos, alianzas y sostenibilidad","Infraestructura y ecosistema tecnológico: equipos, software, repositorios, seguridad, respaldo y acceso","Portafolio e indicadores de desempeño: servicios, proyectos, productos, usuarios, calidad, impacto y financiamiento","Puesta en marcha y evaluación: plan de lanzamiento, capacitación, pilotos, comunicación, seguimiento y mejora"],entregables:"modelos de gobernanza, manuales, mapas de procesos, portafolios, requerimientos tecnológicos, indicadores y planes de puesta en marcha.",icono:"bx-library"}]),it=Object.freeze([...Rs,...Ms,...Ds,...Os,...Ns]);function T(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ti(t){return String(t??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}function $s(t,e=!1){return`
        <button
            type="button"
            data-filtro-servicio="${T(t.id)}"
            aria-pressed="${e}"
            class="shrink-0 rounded-full border px-4 py-2 text-sm font-black transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 ${e?"border-sky-700 bg-sky-700 text-white shadow-md":"border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-800"}"
        >
            <span>${T(t.nombre)}</span>
            <span class="ml-1 text-xs opacity-75">${T(t.rango)}</span>
        </button>
    `}function js(t){const e=ti([t.numero,t.titulo,t.tituloCorto,t.resumen,t.descripcion,t.categoriaNombre,...t.subservicios||[],t.entregables].join(" "));return`
        <article
            data-servicio-card
            data-servicio-id="${T(t.id)}"
            data-categoria="${T(t.categoria)}"
            data-busqueda="${T(e)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:p-6"
        >
            <div class="mb-5 flex items-start justify-between gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-sky-800 transition-transform duration-300 group-hover:scale-110">
                    ${F(t.icono,"text-3xl")}
                </div>
                <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-600">
                    ${String(t.numero).padStart(2,"0")}
                </span>
            </div>

            <p class="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-sky-700">
                ${T(t.categoriaNombre)}
            </p>
            <h3 class="text-xl font-black leading-tight text-slate-950 md:text-2xl">
                ${T(t.tituloCorto)}
            </h3>
            <p class="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                ${T(t.titulo)}
            </p>
            <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                ${T(t.resumen)}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                ${(t.subservicios||[]).slice(0,2).map(a=>{const i=a.split(":")[0];return`
                        <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                            ${T(i)}
                        </span>
                    `}).join("")}
            </div>

            <button
                type="button"
                data-servicio-detalle="${T(t.id)}"
                class="mt-6 inline-flex items-center justify-between gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-black text-sky-800 transition-colors hover:border-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                aria-label="Explorar ${T(t.titulo)}"
            >
                Explorar servicio
                ${F("bx-right-arrow-alt","text-xl")}
            </button>
        </article>
    `}function zs(t){return`
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 class="font-black text-white">${T(t.titulo)}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">${T(t.descripcion)}</p>
        </article>
    `}function Us(t){return`
        <article class="min-w-[280px] flex-1 rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm md:min-w-[330px]">
            <div class="flex items-center justify-between gap-3">
                <span class="rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-amber-900">Paquete ${t.numero}</span>
                ${F("bx-grid-alt","text-2xl text-amber-800")}
            </div>
            <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${T(t.titulo)}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-700">${T(t.descripcion)}</p>
        </article>
    `}function Fs(t){return`
        <li class="relative flex gap-4 pb-6 last:pb-0">
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-black text-white shadow-md">
                ${t.numero}
            </span>
            <div class="pt-1">
                <h4 class="font-black text-slate-950">${T(t.titulo)}</h4>
                <p class="mt-1 text-sm leading-relaxed text-slate-600">${T(t.descripcion)}</p>
            </div>
        </li>
    `}function qs(t){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-4">
            <h4 class="font-black text-slate-950">${T(t.titulo)}</h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">${T(t.descripcion)}</p>
        </article>
    `}function Bs(t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div class="flex items-start gap-3">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">P${t.numero}</span>
                <div>
                    <h4 class="font-black text-slate-950">${T(t.titulo)}</h4>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${T(t.descripcion)}</p>
                </div>
            </div>
        </article>
    `}function Vs(t){return`
        <ol class="grid grid-cols-1 gap-3 lg:grid-cols-2">
            ${(t.subservicios||[]).map((e,a)=>`
                <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    <span class="mt-0.5 flex h-8 min-w-8 items-center justify-center rounded-full bg-sky-100 px-2 text-xs font-black text-sky-800">
                        ${t.numero}.${a+1}
                    </span>
                    <span>${T(e)}</span>
                </li>
            `).join("")}
        </ol>
    `}function Hs(t){const e=encodeURIComponent(`Solicitud de servicio: ${t.titulo}`);return`
        <div class="relative overflow-hidden rounded-[2rem] bg-white">
            <div class="bg-slate-950 px-6 py-7 text-white md:px-9 md:py-9">
                <div class="flex items-start justify-between gap-5">
                    <div class="flex min-w-0 items-start gap-4">
                        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sky-300">
                            ${F(t.icono,"text-3xl")}
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">
                                Servicio ${String(t.numero).padStart(2,"0")} · ${T(t.categoriaNombre)}
                            </p>
                            <h2 class="mt-2 text-2xl font-black leading-tight md:text-4xl">
                                ${T(t.titulo)}
                            </h2>
                        </div>
                    </div>
                    <button
                        type="button"
                        data-cerrar-dialogo-servicio
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40"
                        aria-label="Cerrar detalle del servicio"
                    >
                        <span aria-hidden="true" class="text-2xl leading-none">×</span>
                    </button>
                </div>
                <p class="mt-6 max-w-5xl text-base leading-relaxed text-slate-200 md:text-lg">
                    ${T(t.descripcion)}
                </p>
            </div>

            <div class="space-y-8 px-6 py-7 md:px-9 md:py-9">
                <section aria-labelledby="titulo-componentes-servicio">
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Componentes del servicio</p>
                    <h3 id="titulo-componentes-servicio" class="mb-5 text-xl font-black text-slate-950 md:text-2xl">
                        Alcance técnico y académico
                    </h3>
                    ${Vs(t)}
                </section>

                <section class="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 md:p-6" aria-labelledby="titulo-entregables-servicio">
                    <p class="text-xs font-black uppercase tracking-widest text-emerald-800">Entregables habituales</p>
                    <h3 id="titulo-entregables-servicio" class="mt-2 text-xl font-black text-slate-950">Productos posibles</h3>
                    <p class="mt-3 leading-relaxed text-slate-700">${T(t.entregables)}</p>
                </section>
            </div>

            <div class="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-9">
                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p class="max-w-2xl text-sm leading-relaxed text-slate-600">
                        El alcance, los responsables, los aliados requeridos, los productos, el calendario y la tarifa se definen después del diagnóstico inicial.
                    </p>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <a
                            href="mailto:mleonardos@unapec.edu.do?subject=${e}"
                            class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 transition hover:border-sky-400 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                        >
                            Escribir por correo
                            ${F("bx-right-arrow-alt","text-lg")}
                        </a>
                        <a
                            href="#/contacto"
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                        >
                            Solicitar información
                            ${F("bx-right-arrow-alt","text-lg")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `}function Gs(){const t=document.createElement("section");t.id="catalogo-servicios",t.className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-9 shadow-lg md:px-8 md:py-12 xl:px-10",t.setAttribute("aria-labelledby","titulo-catalogo-servicios"),t.innerHTML=`
        <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>
        <div class="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl"></div>

        <div class="relative z-10 space-y-10">
            <header class="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Catálogo institucional 2026</p>
                    <h2 id="titulo-catalogo-servicios" class="max-w-5xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                        ${T(ze.titulo)}
                    </h2>
                    <p class="mt-4 text-sm font-bold text-slate-500 md:text-base">${T(ze.subtitulo)}</p>
                    <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg">
                        ${T(ze.introduccion)}
                    </p>
                    <p class="mt-5 border-l-4 border-amber-500 pl-4 text-base font-black italic text-slate-800 md:text-lg">
                        “${T(ze.lema)}”
                    </p>
                </div>

                <aside class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl">
                    <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">Alcance responsable</p>
                    <h3 class="mt-2 text-2xl font-black">Cada solicitud se delimita antes de iniciar</h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-300">${T(ze.notaAlcance)}</p>
                    <a href="#/contacto" class="mt-5 inline-flex items-center gap-2 font-black text-sky-300 hover:text-white">
                        Contactar al grupo
                        ${F("bx-right-arrow-alt","text-xl")}
                    </a>
                </aside>
            </header>

            <section class="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Resumen del catálogo">
                ${[[it.length,"áreas de servicio"],[ua.length-1,"bloques temáticos"],[ma.length,"paquetes sugeridos"],[pa.length,"etapas de trabajo"]].map(([d,u])=>`
                    <article class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                        <p class="text-3xl font-black text-sky-800">${d}</p>
                        <p class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">${u}</p>
                    </article>
                `).join("")}
            </section>

            <section class="rounded-3xl bg-slate-950 p-5 text-white md:p-6" aria-labelledby="titulo-propuesta-valor">
                <div class="mb-5">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-300">Propuesta de valor</p>
                    <h3 id="titulo-propuesta-valor" class="mt-2 text-2xl font-black md:text-3xl">Rigor, adaptación y transferencia</h3>
                </div>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    ${_s.map(zs).join("")}
                </div>
            </section>

            <section aria-labelledby="titulo-explorar-servicios">
                <div class="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:p-5">
                    <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                        <div class="min-w-0 flex-1">
                            <label for="buscador-catalogo-servicios" class="sr-only">Buscar en el catálogo de servicios</label>
                            <input
                                id="buscador-catalogo-servicios"
                                type="search"
                                data-buscador-servicios
                                autocomplete="off"
                                placeholder="Buscar por necesidad, método, sector o área..."
                                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100 md:text-base"
                            />
                        </div>
                        <p data-contador-servicios class="shrink-0 text-sm font-bold text-slate-500" aria-live="polite">
                            ${it.length} servicios disponibles
                        </p>
                    </div>

                    <div class="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar servicios por categoría">
                        ${ua.map((d,u)=>$s(d,u===0)).join("")}
                    </div>
                </div>

                <div class="mt-7 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-sky-700">Exploración digital</p>
                        <h3 id="titulo-explorar-servicios" class="mt-1 text-2xl font-black text-slate-950 md:text-3xl">Seleccione un servicio para conocer su alcance</h3>
                    </div>
                </div>

                <div data-rejilla-servicios class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    ${it.map(js).join("")}
                </div>

                <div data-vacio-servicios class="mt-7 hidden rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
                    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        ${F("bx-grid-alt","text-3xl")}
                    </div>
                    <h3 class="mt-4 text-xl font-black text-slate-950">No encontramos coincidencias</h3>
                    <p class="mt-2 text-sm text-slate-600">Pruebe otra palabra o seleccione una categoría diferente.</p>
                </div>
            </section>

            <section aria-labelledby="titulo-paquetes-institucionales">
                <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-amber-700">Ofertas fáciles de comunicar y contratar</p>
                        <h3 id="titulo-paquetes-institucionales" class="mt-1 text-2xl font-black text-slate-950 md:text-3xl">Paquetes institucionales sugeridos</h3>
                    </div>
                    <p class="max-w-2xl text-sm leading-relaxed text-slate-600">Los paquetes agrupan varios componentes del catálogo y se ajustan al alcance real de cada institución o proyecto.</p>
                </div>
                <div class="mt-6 flex gap-4 overflow-x-auto pb-3">
                    ${ma.map(Us).join("")}
                </div>
            </section>

            <section class="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]" aria-labelledby="titulo-como-trabajamos">
                <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-700">Proceso estándar</p>
                    <h3 id="titulo-como-trabajamos" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Cómo se desarrolla un servicio</h3>
                    <ol class="relative mt-6 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-sky-200">
                        ${pa.map(Fs).join("")}
                    </ol>
                </article>

                <div class="space-y-5">
                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" open>
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Modalidades de contratación</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${Ls.map(qs).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Principios transversales</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${Ps.map(Bs).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Sectores y públicos destinatarios</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <ul class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${Ts.map(d=>`
                                <li class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                                    <span class="mt-0.5 text-sky-700">${F("bx-check-shield","text-lg")}</span>
                                    <span>${T(d)}</span>
                                </li>
                            `).join("")}
                        </ul>
                    </details>
                </div>
            </section>

            <section class="rounded-3xl bg-gradient-to-r from-sky-800 to-blue-950 px-6 py-8 text-white shadow-xl md:px-9" aria-labelledby="titulo-cta-catalogo">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-sky-200">Próximo paso</p>
                        <h3 id="titulo-cta-catalogo" class="mt-2 text-2xl font-black md:text-3xl">Conversemos sobre la necesidad que desea resolver</h3>
                        <p class="mt-3 max-w-3xl text-sm leading-relaxed text-sky-100 md:text-base">La reunión inicial permite identificar el servicio, paquete o alianza más adecuado y definir un alcance verificable.</p>
                    </div>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <a href="mailto:mleonardos@unapec.edu.do?subject=Solicitud%20de%20informaci%C3%B3n%20sobre%20servicios" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-black text-white hover:bg-white/20">
                            Escribir por correo
                        </a>
                        <a href="#/contacto" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-sky-900 shadow-lg hover:bg-sky-50">
                            Solicitar información
                            ${F("bx-right-arrow-alt","text-lg")}
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <dialog
            data-dialogo-servicio
            class="m-auto max-h-[92vh] w-[min(96vw,1180px)] overflow-y-auto rounded-[2rem] bg-transparent p-0 shadow-2xl backdrop:bg-slate-950/80"
            aria-label="Detalle del servicio"
        ></dialog>
    `;const e=[...t.querySelectorAll("[data-servicio-card]")],a=[...t.querySelectorAll("[data-filtro-servicio]")],i=t.querySelector("[data-buscador-servicios]"),s=t.querySelector("[data-contador-servicios]"),r=t.querySelector("[data-vacio-servicios]"),o=t.querySelector("[data-dialogo-servicio]");let n="todos",c=null;function l(){const d=ti(i?.value);let u=0;e.forEach(p=>{const g=n==="todos"||p.dataset.categoria===n,b=!d||String(p.dataset.busqueda||"").includes(d),k=g&&b;p.classList.toggle("hidden",!k),k&&(u+=1)}),s&&(s.textContent=`${u} servicio${u===1?"":"s"} disponible${u===1?"":"s"}`),r?.classList.toggle("hidden",u!==0)}return a.forEach(d=>{d.addEventListener("click",()=>{n=d.dataset.filtroServicio||"todos",a.forEach(u=>{const p=u===d;u.setAttribute("aria-pressed",String(p)),u.classList.toggle("border-sky-700",p),u.classList.toggle("bg-sky-700",p),u.classList.toggle("text-white",p),u.classList.toggle("shadow-md",p),u.classList.toggle("border-slate-300",!p),u.classList.toggle("bg-white",!p),u.classList.toggle("text-slate-700",!p)}),l()})}),i?.addEventListener("input",l),t.addEventListener("click",d=>{const u=d.target.closest("[data-servicio-detalle]");if(!u||!t.contains(u))return;const p=it.find(g=>g.id===u.dataset.servicioDetalle);!p||!o||(c=u,o.innerHTML=Hs(p),typeof o.showModal=="function"?o.showModal():o.setAttribute("open",""),o.querySelector("[data-cerrar-dialogo-servicio]")?.focus())}),o?.addEventListener("click",d=>{(d.target===o||d.target.closest("[data-cerrar-dialogo-servicio]"))&&(o.close?.(),o.removeAttribute("open"))}),o?.addEventListener("close",()=>{c?.focus(),c=null}),t}const Ks="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function Ws(){try{const t=await fetch(Ks,{method:"GET",cache:"no-store"});if(!t.ok)throw new Error(`La API de Analytics respondió con estado ${t.status}`);const e=await t.json();if(!e.ok||!e.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(e.visitantes.total)||0,hoy:Number(e.visitantes.hoy)||0,ultimos7Dias:Number(e.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(e.visitantes.ultimos30Dias)||0,actualizadoEn:e.actualizadoEn||null}}catch(t){return console.error("No fue posible obtener las estadísticas de Analytics:",t),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}const Js=["w-full","min-w-0","max-w-none","max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none","m-auto","m-0","p-0","p-2","mt-0","mt-8","md:mt-12","pt-0"],Ys=["max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none"];function ai(t="default"){const e=document.getElementById("main");if(e){if(e.classList.remove(...Js),e.classList.add("w-full","min-w-0"),t==="full"){e.classList.add("max-w-none","m-0","p-0","mt-0","pt-0");return}e.classList.add(...Ys,"p-2","mt-8","md:mt-12"),t==="left"?e.classList.add("m-0"):e.classList.add("m-auto")}}function st(t){return new Intl.NumberFormat("es-DO").format(Number(t)||0)}function Qs(t){if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(e)}function Xs(t){const e=t.querySelector('a[href="https://github.com/grupo-kernel"]');if(!e)return;const a=document.createElement("a");a.href="#/contacto",a.dataset.contactoServicios="true",a.className="mt-4 inline-flex items-center gap-2 text-sm font-black text-sky-300 hover:text-white",a.innerHTML=`
        Solicitar información
        ${F("bx-right-arrow-alt","text-lg")}
    `,e.replaceWith(a)}function Zs(t){const e=t.firstElementChild,a=e?.querySelector(":scope > header");if(!e||!a)return null;const i=Gs();i.dataset.catalogoServiciosPortada="true",a.insertAdjacentElement("afterend",i);const r=a.querySelector('a[href="#/laboratorioKernel"]')?.parentElement;if(r&&!r.querySelector("[data-scroll-catalogo-servicios]")){const n=document.createElement("button");n.type="button",n.dataset.scrollCatalogoServicios="true",n.className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30",n.innerHTML=`
            ${F("bx-grid-alt","text-xl")}
            Catálogo de servicios
        `,n.addEventListener("click",()=>{i.scrollIntoView({behavior:"smooth",block:"start"})}),r.appendChild(n)}return window.sessionStorage.getItem("kernel-home-section")===i.id&&(window.sessionStorage.removeItem("kernel-home-section"),window.requestAnimationFrame(()=>{i.scrollIntoView({behavior:"smooth",block:"start"})})),i}function er(t){const e=t.firstElementChild;if(!e)return;t.dataset.portadaAncha="true",t.classList.add("w-full","max-w-none"),e.classList.remove("mx-auto","max-w-7xl","px-4","py-8","md:px-8","md:py-12"),e.classList.add("w-full","max-w-none","space-y-10");const a=e.querySelector(":scope > header");a?.classList.remove("rounded-[2rem]"),a?.classList.add("min-h-[calc(100svh-5rem)]","w-full","rounded-none"),[...e.children].forEach((i,s)=>{s!==0&&i.classList.add("mx-4","sm:mx-6","lg:mx-8","xl:mx-10")})}async function tr(t){const e=t.querySelector("#analytics-total"),a=t.querySelector("#analytics-hoy"),i=t.querySelector("#analytics-semana"),s=t.querySelector("#analytics-mes"),r=t.querySelector("#analytics-actualizado");if(!e||!a||!i||!s||!r){console.warn("No se encontraron los elementos de Analytics en la portada.");return}r.textContent="Cargando estadísticas…";try{const o=await Ws();e.textContent=st(o.total),a.textContent=st(o.hoy),i.textContent=st(o.ultimos7Dias),s.textContent=st(o.ultimos30Dias);const n=Qs(o.actualizadoEn);r.textContent=n?`Actualizado: ${n}`:"Estadísticas temporalmente no disponibles"}catch(o){console.error("Error al mostrar las estadísticas en la portada:",o),e.textContent="—",a.textContent="—",i.textContent="—",s.textContent="—",r.textContent="No fue posible cargar las estadísticas"}}function ar(){ai("full");const t=Ss();return Xs(t),Zs(t),er(t),tr(t),t}function ir(){return ar()}const sr=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function rr(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${sr}" 
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
    `}function or(t){return String(t?.DOI||t?.doi||"").trim().toLowerCase()}function nr(t){const e=or(t);return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function cr(){const t=new Map;return Array.isArray(K)?(K.forEach(e=>{(e?.publicaciones||[]).forEach(i=>{const s=nr(i);s&&!t.has(s)&&t.set(s,i)})}),Array.from(t.values())):[]}function lr(){const t=cr(),e=t.map(i=>Number(i.year)).filter(Boolean),a=t.filter(i=>String(i?.q||i?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:t.length,totalQ1:a,primerYear:e.length?Math.min(...e):"—",ultimoYear:e.length?Math.max(...e):"—"}}function dr(t=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const e=lr();return`
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
                        ${t.map(a=>`<p>${a}</p>`).join("")}
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
                                ${K.length}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${e.totalPublicaciones}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${e.totalQ1}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones Q1
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-xl md:text-2xl font-black text-slate-900">
                                ${e.primerYear}–${e.ultimoYear}
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
                            ${["Métodos iterativos","EDPs no lineales","Optimización","Álgebra","Educación matemática","Modelización aplicada"].map(a=>`
                                    <span class="bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        ${a}
                                    </span>
                                `).join("")}
                        </div>
                    </article>
                </div>

            </div>
        </section>
    `}const ur="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",pr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",mr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",fr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",gr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",br=[{icon:ur,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:pr,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:mr,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:fr,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function hr(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${br.map(a=>xr(a)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function xr({icon:t,title:e,content:a}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${t}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${e}</h3>
        </div>

        <img src="${gr}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${a}
        </div>
      </div>
    </div>
  `}function vr(){const t=document.createElement("section");return t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,t.innerHTML=`
        ${rr()}
        ${dr()}
        ${hr()}
    `,t}function yr(t){t.querySelectorAll("[data-accordion-header]").forEach(a=>{a.addEventListener("click",()=>{const i=a.nextElementSibling,s=a.querySelector("[data-accordion-icon]"),r=i.classList.contains("max-h-[1000px]");t.querySelectorAll("[data-accordion-content]").forEach(o=>{o.classList.remove("max-h-[1000px]"),o.classList.add("max-h-0")}),t.querySelectorAll("[data-accordion-icon]").forEach(o=>{o.classList.remove("rotate-180")}),r||(i.classList.remove("max-h-0"),i.classList.add("max-h-[1000px]"),s.classList.add("rotate-180"))})})}function wr(t){const e=t.querySelector("[data-description-text]"),a=t.querySelector("[data-description-btn]");if(!e||!a)return;let i=!1;a.addEventListener("click",()=>{i=!i,e.classList.toggle("line-clamp-4",!i),a.textContent=i?"Leer menos":"Leer más"})}function kr(){const t=vr();return yr(t),wr(t),t}function V(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Er(t=[]){return!t||t.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:t.map(e=>`
        <a href="${V(e.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${V(e.name)}">
            <i class="${V(e.icon)} text-xl"></i>
        </a>
    `).join("")}function Ar(t){return t?String(t).split(",").map(a=>a.trim()).filter(Boolean).slice(0,4).map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${V(a)}
        </span>
    `).join(""):""}function Cr(t){const e=document.createElement("article");e.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const a=Er(t.redes||[]),i=Ar(t.areas),s=t.estado||t.grado||t.subtitle||"Investigador";return e.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${t.img}" 
                        alt="${V(t.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${V(s)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${V(t.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${V(t.subtitle||"")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${a}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${i||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${V(t.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${V(t.afilaciones||t.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${V(t.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,e}function Ir(){let t=0,e=null,a=null;const i=document.createElement("section");i.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const s=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,r=()=>{const g=s();return Math.max(ve.length-g,0)},o=()=>{const g=r();t>g&&(t=0),t<0&&(t=g)},n=()=>{const g=r();t>=g?t=0:t++,p()},c=()=>{const g=r();t<=0?t=g:t--,p()},l=()=>{d(),ve.length>s()&&(e=setInterval(n,4500))},d=()=>{e&&(clearInterval(e),e=null)},u=()=>{const g=s(),b=Math.max(ve.length-g+1,1);return Array.from({length:b}).map((k,x)=>`
            <button
                type="button"
                data-dot-index="${x}"
                aria-label="Ir al grupo ${x+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${x===t?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},p=()=>{if(!ve||ve.length===0){i.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}o();const g=s(),b=ve.slice(t,t+g);i.innerHTML=`
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
                ${u()}
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
        `;const k=i.querySelector("#cards-wrapper");b.forEach(C=>{k.appendChild(Cr(C))});const x=i.querySelector("#prev-btn"),h=i.querySelector("#next-btn");x&&(x.onclick=()=>{c(),l()}),h&&(h.onclick=()=>{n(),l()}),i.querySelectorAll("[data-dot-index]").forEach(C=>{C.onclick=()=>{t=parseInt(C.dataset.dotIndex),p(),l()}})};return i.addEventListener("mouseenter",d),i.addEventListener("mouseleave",l),document.addEventListener("visibilitychange",()=>{document.hidden?d():l()}),window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{t=0,p(),l()},150)}),p(),l(),i}function Sr(t){t.addEventListener("click",e=>{const a=e.target.closest("[data-route]");if(!a)return;const i=window.location.hash.replace("#/","")||"equipment";a.dataset.route!==i&&It(a.dataset.route)})}function ii(){const t=window.location.hash.replace(/^#\/?/,"")||"equipment",e=document.createElement("nav"),a="bg-sky-800 text-white border-sky-800 shadow-md",i="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return e.className="w-full flex justify-center mb-6",e.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${t==="equipment"?a:i}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${t==="FormacionAcademica"?a:i}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,Sr(e),e}function _r(){const t=document.createElement("section");t.id="equipo-investigacion",t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const e=document.createElement("div");e.className="mb-6",e.appendChild(ii());const a=Ir();return t.appendChild(e),t.appendChild(a),t}function Tr(){return _r()}function B(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function si(t){return t.formacion?.length||0}function ri(t){return t.experiencia?.length||0}function Pr(t,e=!1){const a=si(t),i=ri(t);return`
        <button 
            type="button"
            data-id="${t.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${t.img}" 
                    alt="${B(t.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${B(t.name)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${a} formación${a===1?"":"es"}
                    · ${i} experiencia${i===1?"":"s"}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${B(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Lr(t){const e=t.formacion||[],a=t.experiencia||[],i=e.length?e.map(n=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${B(n.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${B(n.descripcion)}
                        </p>

                        ${n.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${B(n.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,s=a.length?a.map(n=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${B(n.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,r=si(t),o=ri(t);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${t.img}" 
                        alt="${B(t.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${B(t.name)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${B(t.area)}
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
                        ${r}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-2xl font-bold">
                        ${o}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${B(t.area||"No especificada")}
                    </p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">

                <section class="mb-8">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Formación académica
                    </h3>

                    ${i}
                </section>

                <section class="bg-[#111827] rounded-2xl p-5 border border-white/10">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Experiencia relevante
                    </h3>

                    <ul class="space-y-1">
                        ${s}
                    </ul>
                </section>

            </div>
        </div>
    `}const oe=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:vt,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:yt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:Wt,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:Za,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:ei,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:wt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:He,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Rr(){let t=oe[0]?.id||1,e=!1,a=null;const i=document.createElement("section");i.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function s(){return oe.find(c=>c.id===t)||oe[0]}function r(){const c=oe.length,l=oe.reduce((p,g)=>p+(g.formacion?.length||0),0),d=oe.reduce((p,g)=>p+(g.experiencia?.length||0),0),u=oe.filter(p=>{const g=String(p.name||"").toLowerCase(),b=(p.formacion||[]).map(k=>`${k.name||""} ${k.descripcion||""}`).join(" ").toLowerCase();return g.includes("ph.d")||g.includes("phd")||g.includes("doctor")||b.includes("doctor")}).length;return{totalProfesores:c,totalFormacion:l,totalExperiencia:d,doctores:u}}const o=()=>{const c=s(),l=r(),d=window.innerWidth<768&&!e;i.innerHTML="",i.appendChild(ii());const u=document.createElement("div");u.innerHTML=`
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

                    ${oe.map(g=>Pr(g,g.id===t)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${d?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${Lr(c)}
                    </div>
                </div>

            </div>
        `,i.appendChild(u),i.querySelectorAll("[data-id]").forEach(g=>{g.onclick=()=>{t=parseInt(g.dataset.id),window.innerWidth<768&&(e=!0),o()}});const p=i.querySelector("#close-modal");p&&(p.onclick=()=>{e=!1,o()})},n=()=>{clearTimeout(a),a=setTimeout(()=>{window.innerWidth>=768&&(e=!1),o()},120)};return window.addEventListener("resize",n),o(),i}function Mr(){return Rr()}const Dr=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Or=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,Nr=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,$r=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,jr=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,oi=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:jr,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Or,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:Nr,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:He,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:yt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:vt,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Dr,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:$r,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:He,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:wt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function ne(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function zr(t=null){const e=!!t,a=t?.imageFit==="cover"?"object-cover":"object-contain";return`    
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

            ${e?`
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
                                ${t.image?`
                                            <img
                                                src="${ne(t.image)}"
                                                alt="${ne(t.imageAlt||t.title)}"
                                                class="w-full h-full max-h-[500px] ${a} rounded-2xl"
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
                                        ${ne(t.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${ne(t.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${ne(t.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${ne(t.excerpt)}
                                </p>

                                ${Array.isArray(t.tags)&&t.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${t.tags.map(s=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${ne(s)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${ne(t.id)}"
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
    `}function Z(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ur({id:t,title:e,date:a,image:i,imageAlt:s,excerpt:r,category:o="Noticia",imageFit:n="contain"}){const c=n==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${Z(t)}"
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
                ${i?`
                            <img
                                src="${Z(i)}"
                                alt="${Z(s||e)}"
                                class="w-full h-full ${c} rounded-xl"
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
                        ${Z(o)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${Z(a)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${Z(e)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${Z(r)}
                </p>

                <button
                    type="button"
                    data-news-btn="${Z(t)}"
                    aria-label="Ver detalles de la noticia ${Z(e)}"
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
    `}function Fr(t=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${t.map(i=>Ur(i)).join("")}
            </div>
        </section>
    `}function qr(){const t=encodeURIComponent("Propuesta de noticia para El Kernel"),e=encodeURIComponent(`Saludos,

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

                            <a href="mailto:mleonardos@unapec.edu.do?subject=${t}&body=${e}"
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
    `}function Br(t=[]){return[...t].sort((e,a)=>e.featured&&!a.featured?-1:!e.featured&&a.featured?1:0)}function Vr(){const t=document.createElement("section");t.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const e=Br(oi),a=e.find(i=>i.featured)||e[0];return t.innerHTML=`
        ${zr(a)}
        ${Fr(e)}
        ${qr()}
    `,t}function Hr({title:t,content:e={paragraphs:[],list:[]},articleURL:a}){const i=(e.paragraphs||[]).map(o=>`<p>${o}</p>`).join(""),s=(e.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${e.list.map(o=>`<li>${o}</li>`).join("")}
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
                        ${t}
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
                    ${i}
                    ${s}
                </div>

                <!-- Footer -->
                <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

                    ${a?`
                                <a href="${a}" target="_blank" rel="noopener noreferrer"
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
    `}function Gr(t){t&&t.addEventListener("click",e=>{const a=e.target.closest("[data-news-btn], [data-news-card]");if(!a||!t.contains(a))return;const i=a.dataset.newsBtn||a.dataset.newsCard,s=oi.find(r=>String(r.id)===String(i));if(!s){console.warn("No se encontró la noticia con id:",i);return}Kr(s)})}function Kr(t){const e=document.querySelector("#newsModal");e&&e.remove();const a=document.createElement("div");a.innerHTML=Hr(t);const i=a.firstElementChild;if(!i){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(i),document.body.style.overflow="hidden";function s(){i.remove(),document.body.style.overflow="",document.removeEventListener("keydown",r)}function r(o){o.key==="Escape"&&s()}i.querySelectorAll("[data-close-modal]").forEach(o=>{o.addEventListener("click",s)}),i.addEventListener("click",o=>{o.target===i&&s()}),document.addEventListener("keydown",r)}function Wr(){const t=Vr();return Gr(t),t}function j(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ni(t){return t?.name||t?.title||"Investigador"}function fa(t){return t?.title||t?.tile||"Revista no especificada"}function ci(t){return String(t?.DOI||t?.doi||"").trim()}function Jr(t){const e=ci(t);return t?.url?t.url:e?e.startsWith("http")?e:`https://doi.org/${e}`:"#"}function Yr(t){return[...t?.publicaciones||[]].sort((e,a)=>{const i=Number(e.year||0),s=Number(a.year||0);return i!==s?s-i:String(e.contenido||"").localeCompare(String(a.contenido||""))})}function Qr(t,e=!1){const a=ni(t),i=t.publicaciones||[],s=i.length,r=i.map(n=>Number(n.year)).filter(Boolean),o=r.length?Math.max(...r):"";return`
        <button data-id="${t.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${t.img}"
                    alt="${j(a)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${j(a)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${s} publicación${s===1?"":"es"}
                    ${o?` · Última: ${o}`:""}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${j(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Xr(t){if(!t)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const e=ni(t),a=Yr(t),i=a.length,s=a.map(d=>Number(d.year)).filter(Boolean),r=s.length?Math.min(...s):"",o=s.length?Math.max(...s):"",n=[...new Set(a.map(d=>d.q).filter(Boolean))],c=[...new Set(a.map(d=>fa(d)).filter(Boolean))],l=a.map(d=>{const u=fa(d),p=ci(d),g=Jr(d);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${j(d.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${j(u)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${j(d.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${j(d.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${j(d.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${p?`
                                <a href="${j(g)}"
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
                                        DOI: ${j(p)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${d.pdf?`
                                <a href="${j(d.pdf)}"
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
                    <img src="${t.img}"
                         alt="${j(e)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${j(e)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${j(t.area)}
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
                        ${r&&o?`${r}–${o}`:"—"}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Cuartiles
                    </p>
                    <p class="text-2xl font-bold">
                        ${n.length?n.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${c.slice(0,4).map(d=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${j(d)}
                    </span>
                `).join("")}

                ${c.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${c.length-4} revistas
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
    `}function Zr(){let t=K[0]?.id||1,e=!1,a=null;const i=document.createElement("section");i.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function s(b){return String(b?.DOI||b?.doi||"").trim().toLowerCase()}function r(b){return String(b?.journal||b?.title||b?.tile||"").trim()}function o(b){return String(b?.articleTitle||b?.contenido||"").trim()}function n(b){return String(b?.q||b?.quartile||"").trim().toUpperCase()}function c(b){const k=s(b);return k||[b?.year||"",r(b),o(b)].join("-").trim().toLowerCase()}function l(){const b=new Map;return K.forEach(k=>{(k.publicaciones||[]).forEach(x=>{const h=c(x);h&&!b.has(h)&&b.set(h,x)})}),Array.from(b.values())}function d(){const b=l(),k=b.map(P=>Number(P.year)).filter(Boolean),x=k.length?Math.max(...k):"—",h=k.length?Math.min(...k):"—",C=b.filter(P=>n(P)==="Q1").length;return{totalPublicaciones:b.length,investigadores:K.length,q1:C,primerYear:h,ultimoYear:x}}function u(){return K.find(b=>Number(b.id)===Number(t))||K[0]}const p=()=>{const b=u(),k=d(),x=window.innerWidth<768&&!e;i.innerHTML=`
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
                        ${k.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${k.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${k.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${k.primerYear}–${k.ultimoYear}
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

                    ${K.map(C=>Qr(C,Number(C.id)===Number(t))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${x?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Xr(b)}
                    </div>
                </div>
            </div>
        `,i.querySelectorAll("[data-id]").forEach(C=>{C.onclick=()=>{t=Number(C.dataset.id),window.innerWidth<768&&(e=!0),p()}});const h=i.querySelector("#close-modal");h&&(h.onclick=()=>{e=!1,p()})},g=()=>{clearTimeout(a),a=setTimeout(()=>{window.innerWidth>=768&&(e=!1),p()},120)};return window.addEventListener("resize",g),p(),i}function eo(){return Zr()}function U(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function to(t){return J.find(e=>e.id===t)||J[0]}function _t(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${U(e)}</span>
        </li>
    `).join("")}function ao(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${U(e)}
        </span>
    `).join("")}function io(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${U(e)}
        </span>
    `).join("")}function so(t,e=!1){return`
        <button 
            type="button"
            data-linea-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(t.categoria)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(t.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${U(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${U(t.desarrollo).slice(0,185)}${String(t.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function ro(t){const e=t.proyectosAsociados&&t.proyectosAsociados.length>0,a=t.publicacionesClave&&t.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(t.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(t.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${U(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${U(t.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${U(t.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${U(t.prioridad)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Aplicaciones</p>
                        <p class="text-slate-800 font-bold mt-1">${t.aplicaciones?.length||0}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Aplicaciones principales
                        </h3>

                        <ul class="space-y-3">
                            ${_t(t.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${io(t.investigadores)}
                            </div>
                        </div>
                    </div>
                </div>

                ${e?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Propuestas o proyectos asociados
                                </h3>

                                <ul class="space-y-3">
                                    ${_t(t.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${a?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${_t(t.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${ao(t.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function oo(){const t=new Set(J.map(i=>i.categoria)),e=J.filter(i=>i.proyectosAsociados?.length>0).length,a=J.filter(i=>i.publicacionesClave?.length>0).length;return{total:J.length,categorias:t.size,conProyectos:e,conPublicaciones:a}}function no(){let t=J[0]?.id||1;const e=document.createElement("section");e.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=()=>{const i=to(t),s=oo();e.innerHTML=`
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
                        ${s.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.conPublicaciones}
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
                        ${J.map(r=>so(r,r.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${ro(i)}
                </div>
            </div>
        `,e.querySelectorAll("[data-linea-id]").forEach(r=>{r.onclick=()=>{t=parseInt(r.dataset.lineaId),a()}})};return a(),e}function co(){return no()}function R(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function lo(t){return we.find(e=>e.id===t)||we[0]}function ga(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${R(e)}</span>
        </li>
    `).join("")}function uo(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${R(e)}
        </span>
    `).join("")}function po(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${R(e)}
        </span>
    `).join("")}function mo(t,e=!1){return`
        <button 
            type="button"
            data-proyecto-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${R(t.estado)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${R(t.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${R(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${R(t.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    ${R(t.institucion)}
                </span>
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    · ${R(t.duracion)}
                </span>
            </div>
        </button>
    `}function fo(t){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${R(t.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${R(t.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${R(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${R(t.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${R(t.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${R(t.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${R(t.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${R(t.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${R(t.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${R(t.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${R(t.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${ga(t.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${ga(t.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${po(t.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${uo(t.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function go(){let t=we[0]?.id||1;const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=()=>{const i=lo(t);e.innerHTML=`
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
                        ${we.length}
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
                        ${we.map(s=>mo(s,s.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${fo(i)}
                </div>
            </div>
        `,e.querySelectorAll("[data-proyecto-id]").forEach(s=>{s.onclick=()=>{t=parseInt(s.dataset.proyectoId),a()}})};return a(),e}function bo(){return go()}function ho(){return`
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
    `}function xo(){return`
    
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
            ${ho()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function vo(){const t=document.createElement("section");return t.classList.add("w-full","tabletBig:w-7xl"),t.innerHTML=`
    ${xo()}
    `,t}function yo(){const t=document.getElementById("contactForm");t&&t.addEventListener("submit",wo)}async function wo(t){t.preventDefault();const e=t.target,a=new FormData(e),i=Object.fromEntries(a.entries()),s=ko(i);if(s.length>0){Ao(s);return}await Co(e,i)}function ko(t){const e=[];return t.nombre?.trim()||e.push("El nombre es obligatorio."),t.asunto?.trim()||e.push("El asunto es obligatorio."),t.mensaje?.trim()||e.push("El mensaje es obligatorio."),t.correo?.trim()?Eo(t.correo)||e.push("El formato del correo no es válido."):e.push("El correo es obligatorio."),e}function Eo(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function Ao(t){ot(t[0],"error")}function ot(t,e="success"){const a=document.querySelector(".custom-toast");a&&a.remove();const i=document.createElement("div");i.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,e==="success"?i.classList.add("bg-green-600"):i.classList.add("bg-red-600"),i.textContent=t,document.body.appendChild(i),setTimeout(()=>{i.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{i.classList.add("translate-x-full","opacity-0"),setTimeout(()=>i.remove(),300)},3e3)}async function Co(t,e){const a=document.getElementById("submitBtn");a.disabled=!0,a.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})).ok?(ot("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),t.reset()):ot("Hubo un problema al enviar el mensaje.","error")}catch{ot("Error de conexión. Intenta nuevamente.","error")}a.disabled=!1,a.textContent="Enviar"}function Io(){const t=vo();return setTimeout(()=>{yo()},0),t}function So(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-primer-input"),a=t.querySelector("#banner-primer-process"),i=t.querySelector("#banner-primer-clear"),s=t.querySelector("#banner-primer-message"),r=t.querySelector("#banner-primer-preview"),o=t.querySelector("#banner-primer-count"),n=t.querySelector("#banner-primer-download-1ac"),c=t.querySelector("#banner-primer-download-2pp");let l=[];function d(m,w="success"){s.textContent=m,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function u(){s.textContent="",s.classList.add("hidden")}function p(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function g(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function b(m){const w=String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(y=>y.trim()).filter(y=>y!==""):w.includes(";")?w.split(";").map(y=>y.trim()).filter(y=>y!==""):w.split(/\s+/).map(y=>y.trim()).filter(y=>y!=="")}function k(m){const w=m.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),y=[],S=[],O=new Set;return w.forEach((A,I)=>{const _=I+1,N=b(A);if(N.length!==3){S.push(`Línea ${_}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const $=p(N[0]),$e=Number(g(N[1])),je=Number(g(N[2]));if(!/^A[0-9]{8}$/.test($)){S.push(`Línea ${_}: la matrícula "${$}" no es válida. Debe tener el formato A00108671.`);return}if(O.has($)){S.push(`Línea ${_}: la matrícula ${$} está repetida.`);return}if(!Number.isFinite($e)){S.push(`Línea ${_}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(je)){S.push(`Línea ${_}: la calificación 2PP no es numérica.`);return}if($e<0||$e>15){S.push(`Línea ${_}: 1AC debe estar entre 0 y 15.`);return}if(je<0||je>20){S.push(`Línea ${_}: 2PP debe estar entre 0 y 20.`);return}const na=$e+je;if(na>35){S.push(`Línea ${_}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}O.add($),y.push({matricula:$,grade1AC:$e,grade2PP:je,total:na})}),{records:y,errors:S}}function x(m){return Number.isInteger(m)?String(m):m.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function h(m){return String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function C(m){if(m.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,o.textContent="0 estudiantes";return}r.innerHTML=m.map((w,y)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${y+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${h(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${x(w.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${x(w.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${x(w.total)}
                        </td>
                    </tr>
                `).join(""),o.textContent=`${m.length} estudiante${m.length===1?"":"s"}`}function P(m,w,y){return[["MATRICULA",y],...m.map(A=>[A.matricula,x(A[w])])].map(A=>A.join(";")).join(`\r
`)}function f(m,w){const S=new Blob(["\uFEFF"+m],{type:"text/csv;charset=utf-8;"}),O=URL.createObjectURL(S),A=document.createElement("a");A.href=O,A.download=w,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(O)},1e3)}function v(){l=[],e.value="",C([]),n.disabled=!0,c.disabled=!0,u(),e.focus()}return a.addEventListener("click",()=>{const m=e.value.trim();if(!m){l=[],C([]),n.disabled=!0,c.disabled=!0,d("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:w,errors:y}=k(m);if(y.length>0){l=[],C([]),n.disabled=!0,c.disabled=!0,d(y.join(" "),"error");return}l=w,C(l),n.disabled=!1,c.disabled=!1,d(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",v),n.addEventListener("click",()=>{if(l.length===0)return;const m=P(l,"grade1AC","1AC");f(m,"Banner_APEC_Primer_Periodo_1AC.csv")}),c.addEventListener("click",()=>{if(l.length===0)return;const m=P(l,"grade2PP","2PP");f(m,"Banner_APEC_Primer_Periodo_2PP.csv")}),t}function _o(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-segundo-input"),a=t.querySelector("#banner-segundo-process"),i=t.querySelector("#banner-segundo-clear"),s=t.querySelector("#banner-segundo-message"),r=t.querySelector("#banner-segundo-preview"),o=t.querySelector("#banner-segundo-count"),n=t.querySelector("#banner-segundo-download");let c=[];function l(f){return String(f).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function d(f){return String(f).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function u(f){const v=String(f).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return v.includes("	")?v.split("	").map(m=>m.trim()).filter(m=>m!==""):v.includes(";")?v.split(";").map(m=>m.trim()).filter(m=>m!==""):v.split(/\s+/).map(m=>m.trim()).filter(m=>m!=="")}function p(f){return Number.isInteger(f)?String(f):f.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function g(f){return String(f).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function b(f,v="success"){s.textContent=f,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),v==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function k(f){const v=f.split(/\r?\n/).map(S=>S.trim()).filter(Boolean),m=[],w=[],y=new Set;return v.forEach((S,O)=>{const A=O+1,I=u(S);if(I.length!==2){w.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const _=l(I[0]),N=Number(d(I[1]));if(!/^A[0-9]{8}$/.test(_)){w.push(`Línea ${A}: la matrícula "${_}" no es válida. Debe tener el formato A00108671.`);return}if(y.has(_)){w.push(`Línea ${A}: la matrícula ${_} está repetida.`);return}if(!Number.isFinite(N)){w.push(`Línea ${A}: la calificación 3SP no es numérica.`);return}if(N<0||N>35){w.push(`Línea ${A}: 3SP debe estar entre 0 y 35.`);return}y.add(_),m.push({matricula:_,grade3SP:N})}),{records:m,errors:w}}function x(f){if(f.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,o.textContent="0 estudiantes";return}r.innerHTML=f.map((v,m)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${m+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${g(v.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${p(v.grade3SP)}
                        </td>
                    </tr>
                `).join(""),o.textContent=`${f.length} estudiante${f.length===1?"":"s"}`}function h(f){return[["MATRICULA","3SP"],...f.map(m=>[m.matricula,p(m.grade3SP)])].map(m=>m.join(";")).join(`\r
`)}function C(f,v){const m=new Blob(["\uFEFF"+f],{type:"text/csv;charset=utf-8;"}),w=URL.createObjectURL(m),y=document.createElement("a");y.href=w,y.download=v,document.body.appendChild(y),y.click(),y.remove(),window.setTimeout(()=>{URL.revokeObjectURL(w)},1e3)}function P(){c=[],e.value="",x([]),n.disabled=!0,s.textContent="",s.classList.add("hidden"),e.focus()}return a.addEventListener("click",()=>{const f=e.value.trim();if(!f){c=[],x([]),n.disabled=!0,b("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:v,errors:m}=k(f);if(m.length>0){c=[],x([]),n.disabled=!0,b(m.join(" "),"error");return}c=v,x(v),n.disabled=!1,b(`Los datos de ${v.length} estudiante${v.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",P),n.addEventListener("click",()=>{c.length!==0&&C(h(c),"Banner_APEC_Segundo_Periodo_3SP.csv")}),t}function To(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-final-input"),a=t.querySelector("#banner-final-process"),i=t.querySelector("#banner-final-clear"),s=t.querySelector("#banner-final-message"),r=t.querySelector("#banner-final-preview"),o=t.querySelector("#banner-final-count"),n=t.querySelector("#banner-final-download");let c=[];function l(f){return String(f).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function d(f){return String(f).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function u(f){const v=String(f).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return v.includes("	")?v.split("	").map(m=>m.trim()).filter(m=>m!==""):v.includes(";")?v.split(";").map(m=>m.trim()).filter(m=>m!==""):v.split(/\s+/).map(m=>m.trim()).filter(m=>m!=="")}function p(f){return Number.isInteger(f)?String(f):f.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function g(f){return String(f).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function b(f,v="success"){s.textContent=f,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),v==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function k(f){const v=f.split(/\r?\n/).map(S=>S.trim()).filter(Boolean),m=[],w=[],y=new Set;return v.forEach((S,O)=>{const A=O+1,I=u(S);if(I.length!==2){w.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const _=l(I[0]),N=Number(d(I[1]));if(!/^A[0-9]{8}$/.test(_)){w.push(`Línea ${A}: la matrícula "${_}" no es válida. Debe tener el formato A00108671.`);return}if(y.has(_)){w.push(`Línea ${A}: la matrícula ${_} está repetida.`);return}if(!Number.isFinite(N)){w.push(`Línea ${A}: la calificación 4EF no es numérica.`);return}if(N<0||N>30){w.push(`Línea ${A}: 4EF debe estar entre 0 y 30.`);return}y.add(_),m.push({matricula:_,grade4EF:N})}),{records:m,errors:w}}function x(f){if(f.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,o.textContent="0 estudiantes";return}r.innerHTML=f.map((v,m)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${m+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${g(v.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${p(v.grade4EF)}
                        </td>
                    </tr>
                `).join(""),o.textContent=`${f.length} estudiante${f.length===1?"":"s"}`}function h(f){return[["MATRICULA","4EF"],...f.map(m=>[m.matricula,p(m.grade4EF)])].map(m=>m.join(";")).join(`\r
`)}function C(f,v){const m=new Blob(["\uFEFF"+f],{type:"text/csv;charset=utf-8;"}),w=URL.createObjectURL(m),y=document.createElement("a");y.href=w,y.download=v,document.body.appendChild(y),y.click(),y.remove(),window.setTimeout(()=>{URL.revokeObjectURL(w)},1e3)}function P(){c=[],e.value="",x([]),n.disabled=!0,s.textContent="",s.classList.add("hidden"),e.focus()}return a.addEventListener("click",()=>{const f=e.value.trim();if(!f){c=[],x([]),n.disabled=!0,b("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:v,errors:m}=k(f);if(m.length>0){c=[],x([]),n.disabled=!0,b(m.join(" "),"error");return}c=v,x(v),n.disabled=!1,b(`Los datos de ${v.length} estudiante${v.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",P),n.addEventListener("click",()=>{c.length!==0&&C(h(c),"Banner_APEC_Examen_Final_4EF.csv")}),t}function Po(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-menu"),a=t.querySelector("#banner-tool-view"),i=t.querySelector("#banner-tool-content"),s=t.querySelector("#open-primer-periodo"),r=t.querySelector("#open-segundo-periodo"),o=t.querySelector("#open-calificacion-final"),n=t.querySelector("#banner-back");function c(){e.classList.add("hidden"),a.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}function l(p){console.error("No fue posible abrir la herramienta de Banner:",p),i.innerHTML=`
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
        `,c()}function d(p){i.innerHTML="";try{if(typeof p!="function")throw new TypeError("El componente seleccionado no es una función válida.");const g=p();if(!(g instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");i.appendChild(g),c()}catch(g){l(g)}}function u(){i.replaceChildren(),a.classList.add("hidden"),e.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}return s.addEventListener("click",()=>{d(So)}),r.addEventListener("click",()=>{d(_o)}),o.addEventListener("click",()=>{d(To)}),n.addEventListener("click",u),t}function Lo(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8",t.innerHTML=`
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
    `;const e=t.querySelector("#xmera-input"),a=t.querySelector("#xmera-output"),i=t.querySelector("#xmera-generate"),s=t.querySelector("#xmera-copy"),r=t.querySelector("#xmera-clear"),o=t.querySelector("#xmera-message"),n=t.querySelector("#tab-xmera"),c=t.querySelector("#tab-banner"),l=t.querySelector("#panel-xmera"),d=t.querySelector("#panel-banner");function u(){a.textContent=`var data_todo = {
};`,s.disabled=!0}function p(x,h="success"){o.textContent=x,o.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),o.classList.add("border"),h==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(x){const h=x.split(/\r?\n/).map(v=>v.trim()).filter(Boolean),C=[],P=[],f=new Set;return h.forEach((v,m)=>{const w=v.split(/[\t,; ]+/).map(I=>I.trim()).filter(Boolean),y=m+1,S=w[0],O=w.slice(1);if(!S){P.push(`Línea ${y}: falta la matrícula.`);return}if(!/^\d+$/.test(S)){P.push(`Línea ${y}: la matrícula "${S}" no es válida.`);return}if(f.has(S)){P.push(`Línea ${y}: la matrícula ${S} está repetida.`);return}if(O.length===0){P.push(`Línea ${y}: falta al menos una calificación.`);return}const A=O.map(I=>Number(I));if(A.some(I=>!Number.isFinite(I))){P.push(`Línea ${y}: existe una calificación no numérica.`);return}f.add(S),C.push({matricula:S,grades:A})}),{records:C,errors:P}}function b(x){return`var data_todo = {
${x.map(({matricula:C,grades:P})=>`  "${C}":[${P.join(",")}]`).join(`,
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
}`}function k(x){const h=x==="xmera";l.classList.toggle("hidden",!h),d.classList.toggle("hidden",h),n.className=h?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",c.className=h?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}i.addEventListener("click",()=>{const x=e.value.trim();if(!x){u(),p("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:h,errors:C}=g(x);if(C.length>0){u(),p(C.join(" "),"error");return}a.textContent=b(h),s.disabled=!1,p(`Código generado correctamente para ${h.length} estudiante${h.length===1?"":"s"}.`)}),s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(a.textContent),p("El código fue copiado al portapapeles.")}catch(x){console.error("No fue posible copiar el código:",x),p("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),r.addEventListener("click",()=>{e.value="",u(),o.textContent="",o.classList.add("hidden"),e.focus()});try{const x=Po();if(x instanceof HTMLElement)d.appendChild(x);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(x){console.error("No fue posible cargar el módulo Banner:",x),d.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return n.addEventListener("click",()=>{k("xmera")}),c.addEventListener("click",()=>{k("banner")}),k("xmera"),t}function Ro(){return Lo()}const Mo=()=>{};var ba={};const li=function(t){const e=[];let a=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[a++]=s:s<2048?(e[a++]=s>>6|192,e[a++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[a++]=s>>18|240,e[a++]=s>>12&63|128,e[a++]=s>>6&63|128,e[a++]=s&63|128):(e[a++]=s>>12|224,e[a++]=s>>6&63|128,e[a++]=s&63|128)}return e},Do=function(t){const e=[];let a=0,i=0;for(;a<t.length;){const s=t[a++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[a++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[a++],o=t[a++],n=t[a++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|n&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[a++],o=t[a++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,n=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=r>>2,u=(r&3)<<4|n>>4;let p=(n&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),i.push(a[d],a[u],a[p],a[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(li(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Do(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=a[t.charAt(s++)],n=s<t.length?a[t.charAt(s)]:0;++s;const l=s<t.length?a[t.charAt(s)]:64;++s;const u=s<t.length?a[t.charAt(s)]:64;if(++s,r==null||n==null||l==null||u==null)throw new Oo;const p=r<<2|n>>4;if(i.push(p),l!==64){const g=n<<4&240|l>>2;if(i.push(g),u!==64){const b=l<<6&192|u;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Oo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const No=function(t){const e=li(t);return di.encodeByteArray(e,!0)},ui=function(t){return No(t).replace(/\./g,"")},pi=function(t){try{return di.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function $o(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const jo=()=>$o().__FIREBASE_DEFAULTS__,zo=()=>{if(typeof process>"u"||typeof ba>"u")return;const t=ba.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pi(t[1]);return e&&JSON.parse(e)},Jt=()=>{try{return Mo()||jo()||zo()||Uo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fo=t=>Jt()?.emulatorHosts?.[t],mi=()=>Jt()?.config,fi=t=>Jt()?.[`_${t}`];class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,i)=>{a?this.reject(a):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,i))}}}function z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function Bo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ho(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Go(){const t=z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ko(){try{return typeof indexedDB=="object"}catch{return!1}}function Wo(){return new Promise((t,e)=>{try{let a=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),a||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{a=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(a){e(a)}})}const Jo="FirebaseError";class he extends Error{constructor(e,a,i){super(a),this.code=e,this.customData=i,this.name=Jo,Object.setPrototypeOf(this,he.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ye.prototype.create)}}class Ye{constructor(e,a,i){this.service=e,this.serviceName=a,this.errors=i}create(e,...a){const i=a[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Yo(r,i):"Error",n=`${this.serviceName}: ${o} (${s}).`;return new he(s,n,i)}}function Yo(t,e){return t.replace(Qo,(a,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Qo=/\{\$([^}]+)}/g;function Xo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Le(t,e){if(t===e)return!0;const a=Object.keys(t),i=Object.keys(e);for(const s of a){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ha(r)&&ha(o)){if(!Le(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!a.includes(s))return!1;return!0}function ha(t){return t!==null&&typeof t=="object"}function Qe(t){const e=[];for(const[a,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(a)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(a)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Fe(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function qe(t){const e=t.indexOf("?");if(!e)return"";const a=t.indexOf("#",e);return t.substring(e,a>0?a:void 0)}function Zo(t,e){const a=new en(t,e);return a.subscribe.bind(a)}class en{constructor(e,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(a=>{a.next(e)})}error(e){this.forEachObserver(a=>{a.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,a,i){let s;if(e===void 0&&a===void 0&&i===void 0)throw new Error("Missing Observer.");tn(e,["next","error","complete"])?s=e:s={next:e,error:a,complete:i},s.next===void 0&&(s.next=Tt),s.error===void 0&&(s.error=Tt),s.complete===void 0&&(s.complete=Tt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,e)}sendOne(e,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{a(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tn(t,e){if(typeof t!="object"||t===null)return!1;for(const a of e)if(a in t&&typeof t[a]=="function")return!0;return!1}function Tt(){}function X(t){return t&&t._delegate?t._delegate:t}function Yt(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function an(t){return(await fetch(t,{credentials:"include"})).ok}class Re{constructor(e,a,i){this.name=e,this.instanceFactory=a,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const ye="[DEFAULT]";class sn{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const i=new gi;if(this.instancesDeferred.set(a,i),this.isInitialized(a)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:a});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){const a=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(on(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[a,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:a});for(const[r,o]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);i===n&&o.resolve(s)}return s}onInit(e,a){const i=this.normalizeInstanceIdentifier(a),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,a){const i=this.onInitCallbacks.get(a);if(i)for(const s of i)try{s(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rn(e),options:a}),this.instances.set(e,i),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rn(t){return t===ye?void 0:t}function on(t){return t.instantiationMode==="EAGER"}class nn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new sn(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const cn={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},ln=L.INFO,dn={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},un=(t,e,...a)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=dn[e];if(s)console[s](`[${i}]  ${t.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bi{constructor(e){this.name=e,this._logLevel=ln,this._logHandler=un,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const pn=(t,e)=>e.some(a=>t instanceof a);let xa,va;function mn(){return xa||(xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fn(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hi=new WeakMap,jt=new WeakMap,xi=new WeakMap,Pt=new WeakMap,Qt=new WeakMap;function gn(t){const e=new Promise((a,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{a(fe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(a=>{a instanceof IDBCursor&&hi.set(a,t)}).catch(()=>{}),Qt.set(e,t),e}function bn(t){if(jt.has(t))return;const e=new Promise((a,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{a(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});jt.set(t,e)}let zt={get(t,e,a){if(t instanceof IDBTransaction){if(e==="done")return jt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xi.get(t);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return fe(t[e])},set(t,e,a){return t[e]=a,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hn(t){zt=t(zt)}function xn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const i=t.call(Lt(this),e,...a);return xi.set(i,e.sort?e.sort():[e]),fe(i)}:fn().includes(t)?function(...e){return t.apply(Lt(this),e),fe(hi.get(this))}:function(...e){return fe(t.apply(Lt(this),e))}}function vn(t){return typeof t=="function"?xn(t):(t instanceof IDBTransaction&&bn(t),pn(t,mn())?new Proxy(t,zt):t)}function fe(t){if(t instanceof IDBRequest)return gn(t);if(Pt.has(t))return Pt.get(t);const e=vn(t);return e!==t&&(Pt.set(t,e),Qt.set(e,t)),e}const Lt=t=>Qt.get(t);function yn(t,e,{blocked:a,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),n=fe(o);return i&&o.addEventListener("upgradeneeded",c=>{i(fe(o.result),c.oldVersion,c.newVersion,fe(o.transaction),c)}),a&&o.addEventListener("blocked",c=>a(c.oldVersion,c.newVersion,c)),n.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),n}const wn=["get","getKey","getAll","getAllKeys","count"],kn=["put","add","delete","clear"],Rt=new Map;function ya(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rt.get(e))return Rt.get(e);const a=e.replace(/FromIndex$/,""),i=e!==a,s=kn.includes(a);if(!(a in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wn.includes(a)))return;const r=async function(o,...n){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(n.shift())),(await Promise.all([l[a](...n),s&&c.done]))[0]};return Rt.set(e,r),r}hn(t=>({...t,get:(e,a,i)=>ya(e,a)||t.get(e,a,i),has:(e,a)=>!!ya(e,a)||t.has(e,a)}));class En{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(An(a)){const i=a.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(a=>a).join(" ")}}function An(t){return t.getComponent()?.type==="VERSION"}const Ut="@firebase/app",wa="0.15.1";const ae=new bi("@firebase/app"),Cn="@firebase/app-compat",In="@firebase/analytics-compat",Sn="@firebase/analytics",_n="@firebase/app-check-compat",Tn="@firebase/app-check",Pn="@firebase/auth",Ln="@firebase/auth-compat",Rn="@firebase/database",Mn="@firebase/data-connect",Dn="@firebase/database-compat",On="@firebase/functions",Nn="@firebase/functions-compat",$n="@firebase/installations",jn="@firebase/installations-compat",zn="@firebase/messaging",Un="@firebase/messaging-compat",Fn="@firebase/performance",qn="@firebase/performance-compat",Bn="@firebase/remote-config",Vn="@firebase/remote-config-compat",Hn="@firebase/storage",Gn="@firebase/storage-compat",Kn="@firebase/firestore",Wn="@firebase/ai",Jn="@firebase/firestore-compat",Yn="firebase",Qn="12.16.0";const Ft="[DEFAULT]",Xn={[Ut]:"fire-core",[Cn]:"fire-core-compat",[Sn]:"fire-analytics",[In]:"fire-analytics-compat",[Tn]:"fire-app-check",[_n]:"fire-app-check-compat",[Pn]:"fire-auth",[Ln]:"fire-auth-compat",[Rn]:"fire-rtdb",[Mn]:"fire-data-connect",[Dn]:"fire-rtdb-compat",[On]:"fire-fn",[Nn]:"fire-fn-compat",[$n]:"fire-iid",[jn]:"fire-iid-compat",[zn]:"fire-fcm",[Un]:"fire-fcm-compat",[Fn]:"fire-perf",[qn]:"fire-perf-compat",[Bn]:"fire-rc",[Vn]:"fire-rc-compat",[Hn]:"fire-gcs",[Gn]:"fire-gcs-compat",[Kn]:"fire-fst",[Jn]:"fire-fst-compat",[Wn]:"fire-vertex","fire-js":"fire-js",[Yn]:"fire-js-all"};const ut=new Map,Zn=new Map,qt=new Map;function ka(t,e){try{t.container.addComponent(e)}catch(a){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,a)}}function Ge(t){const e=t.name;if(qt.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;qt.set(e,t);for(const a of ut.values())ka(a,t);for(const a of Zn.values())ka(a,t);return!0}function vi(t,e){const a=t.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),t.container.getProvider(e)}function W(t){return t==null?!1:t.settings!==void 0}const ec={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ge=new Ye("app","Firebase",ec);class tc{constructor(e,a,i){this._isDeleted=!1,this._options={...e},this._config={...a},this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}const Xe=Qn;function yi(t,e={}){let a=t;typeof e!="object"&&(e={name:e});const i={name:Ft,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw ge.create("bad-app-name",{appName:String(s)});if(a||(a=mi()),!a)throw ge.create("no-options");const r=ut.get(s);if(r){if(Le(a,r.options)&&Le(i,r.config))return r;throw ge.create("duplicate-app",{appName:s})}const o=new nn(s);for(const c of qt.values())o.addComponent(c);const n=new tc(a,i,o);return ut.set(s,n),n}function ac(t=Ft){const e=ut.get(t);if(!e&&t===Ft&&mi())return yi();if(!e)throw ge.create("no-app",{appName:t});return e}function Se(t,e,a){let i=Xn[t]??t;a&&(i+=`-${a}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(o.join(" "));return}Ge(new Re(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}const ic="firebase-heartbeat-database",sc=1,Ke="firebase-heartbeat-store";let Mt=null;function wi(){return Mt||(Mt=yn(ic,sc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ke)}catch(a){console.warn(a)}}}}).catch(t=>{throw ge.create("idb-open",{originalErrorMessage:t.message})})),Mt}async function rc(t){try{const a=(await wi()).transaction(Ke),i=await a.objectStore(Ke).get(ki(t));return await a.done,i}catch(e){if(e instanceof he)ae.warn(e.message);else{const a=ge.create("idb-get",{originalErrorMessage:e?.message});ae.warn(a.message)}}}async function Ea(t,e){try{const i=(await wi()).transaction(Ke,"readwrite");await i.objectStore(Ke).put(e,ki(t)),await i.done}catch(a){if(a instanceof he)ae.warn(a.message);else{const i=ge.create("idb-set",{originalErrorMessage:a?.message});ae.warn(i.message)}}}function ki(t){return`${t.name}!${t.options.appId}`}const oc=1024,nc=30;class cc{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new dc(a),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Aa();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:a}),this._heartbeatsCache.heartbeats.length>nc){const s=uc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ae.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Aa(),{heartbeatsToSend:a,unsentEntries:i}=lc(this._heartbeatsCache.heartbeats),s=ui(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ae.warn(e),""}}}function Aa(){return new Date().toISOString().substring(0,10)}function lc(t,e=oc){const a=[];let i=t.slice();for(const s of t){const r=a.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ca(a)>e){r.dates.pop();break}}else if(a.push({agent:s.agent,dates:[s.date]}),Ca(a)>e){a.pop();break}i=i.slice(1)}return{heartbeatsToSend:a,unsentEntries:i}}class dc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ko()?Wo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await rc(this.app);return a?.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ea(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ea(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ca(t){return ui(JSON.stringify({version:2,heartbeats:t})).length}function uc(t){if(t.length===0)return-1;let e=0,a=t[0].date;for(let i=1;i<t.length;i++)t[i].date<a&&(a=t[i].date,e=i);return e}function pc(t){Ge(new Re("platform-logger",e=>new En(e),"PRIVATE")),Ge(new Re("heartbeat",e=>new cc(e),"PRIVATE")),Se(Ut,wa,t),Se(Ut,wa,"esm2020"),Se("fire-js","")}pc("");var mc="firebase",fc="12.16.0";Se(mc,fc,"app");function Ei(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gc=Ei,Ai=new Ye("auth","Firebase",Ei());const pt=new bi("@firebase/auth");function bc(t,...e){pt.logLevel<=L.WARN&&pt.warn(`Auth (${Xe}): ${t}`,...e)}function nt(t,...e){pt.logLevel<=L.ERROR&&pt.error(`Auth (${Xe}): ${t}`,...e)}function G(t,...e){throw Xt(t,...e)}function Y(t,...e){return Xt(t,...e)}function Ci(t,e,a){const i={...gc(),[e]:a};return new Ye("auth","Firebase",i).create(e,{appName:t.name})}function be(t){return Ci(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xt(t,...e){if(typeof t!="string"){const a=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(a,...i)}return Ai.create(t,...e)}function E(t,e,...a){if(!t)throw Xt(e,...a)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nt(e),new Error(e)}function ie(t,e){t||ee(e)}function Bt(){return typeof self<"u"&&self.location?.href||""}function hc(){return Ia()==="http:"||Ia()==="https:"}function Ia(){return typeof self<"u"&&self.location?.protocol||null}function xc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hc()||Vo()||"connection"in navigator)?navigator.onLine:!0}function vc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}class Ze{constructor(e,a){this.shortDelay=e,this.longDelay=a,ie(a>e,"Short delay should be less than long delay!"),this.isMobile=qo()||Ho()}get(){return xc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Zt(t,e){ie(t.emulator,"Emulator should always be set here");const{url:a}=t.emulator;return e?`${a}${e.startsWith("/")?e.slice(1):e}`:a}class Ii{static initialize(e,a,i){this.fetchImpl=e,a&&(this.headersImpl=a),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const yc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const wc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kc=new Ze(3e4,6e4);function xe(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function se(t,e,a,i,s={}){return Si(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const n=Qe({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...r};return Bo()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Yt(t.emulatorConfig.host)&&(l.credentials="include"),Ii.fetch()(await _i(t,t.config.apiHost,a,n),l)})}async function Si(t,e,a){t._canInitEmulator=!1;const i={...yc,...e};try{const s=new Ac(t),r=await Promise.race([a(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw rt(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const n=r.ok?o.errorMessage:o.error.message,[c,l]=n.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rt(t,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ci(t,d,l);G(t,d)}}catch(s){if(s instanceof he)throw s;G(t,"network-request-failed",{message:String(s)})}}async function kt(t,e,a,i,s={}){const r=await se(t,e,a,i,s);return"mfaPendingCredential"in r&&G(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function _i(t,e,a,i){const s=`${e}${a}?${i}`,r=t,o=r.config.emulator?Zt(t.config,s):`${t.config.apiScheme}://${s}`;return wc.includes(a)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Ec(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ac{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((a,i)=>{this.timer=setTimeout(()=>i(Y(this.auth,"network-request-failed")),kc.get())})}}function rt(t,e,a){const i={appName:t.name};a.email&&(i.email=a.email),a.phoneNumber&&(i.phoneNumber=a.phoneNumber);const s=Y(t,e,i);return s.customData._tokenResponse=a,s}function Sa(t){return t!==void 0&&t.enterprise!==void 0}class Cc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const a of this.recaptchaEnforcementState)if(a.provider&&a.provider===e)return Ec(a.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ic(t,e){return se(t,"GET","/v2/recaptchaConfig",xe(t,e))}async function Sc(t,e){return se(t,"POST","/v1/accounts:delete",e)}async function mt(t,e){return se(t,"POST","/v1/accounts:lookup",e)}function Be(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _c(t,e=!1){const a=X(t),i=await a.getIdToken(e),s=ea(i);E(s&&s.exp&&s.auth_time&&s.iat,a.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:Be(Dt(s.auth_time)),issuedAtTime:Be(Dt(s.iat)),expirationTime:Be(Dt(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Dt(t){return Number(t)*1e3}function ea(t){const[e,a,i]=t.split(".");if(e===void 0||a===void 0||i===void 0)return nt("JWT malformed, contained fewer than 3 sections"),null;try{const s=pi(a);return s?JSON.parse(s):(nt("Failed to decode base64 JWT payload"),null)}catch(s){return nt("Caught error parsing JWT payload as JSON",s?.toString()),null}}function _a(t){const e=ea(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function We(t,e,a=!1){if(a)return e;try{return await e}catch(i){throw i instanceof he&&Tc(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Tc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}class Pc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const a=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class Vt{constructor(e,a){this.createdAt=e,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=Be(this.lastLoginAt),this.creationTime=Be(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function ft(t){const e=t.auth,a=await t.getIdToken(),i=await We(t,mt(e,{idToken:a}));E(i?.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const r=s.providerUserInfo?.length?Ti(s.providerUserInfo):[],o=Rc(t.providerData,r),n=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=n?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Vt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function Lc(t){const e=X(t);await ft(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rc(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ti(t){return t.map(({providerId:e,...a})=>({providerId:e,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}))}async function Mc(t,e){const a=await Si(t,{},async()=>{const i=Qe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await _i(t,s,"/v1/token",`key=${r}`),n=await t._getAdditionalHeaders();n["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:n,body:i};return t.emulatorConfig&&Yt(t.emulatorConfig.host)&&(c.credentials="include"),Ii.fetch()(o,c)});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}async function Dc(t,e){return se(t,"POST","/v2/accounts:revokeToken",xe(t,e))}class _e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const a="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_a(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,a)}updateFromIdToken(e){E(e.length!==0,"internal-error");const a=_a(e);this.updateTokensAndExpiration(e,null,a)}async getToken(e,a=!1){return!a&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,a){const{accessToken:i,refreshToken:s,expiresIn:r}=await Mc(e,a);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,a,i){this.refreshToken=a||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,a){const{refreshToken:i,accessToken:s,expirationTime:r}=a,o=new _e;return i&&(E(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(E(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(E(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _e,this.toJSON())}_performRefresh(){return ee("not implemented")}}function ce(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class H{constructor({uid:e,auth:a,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Pc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=a,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const a=await We(this,this.stsTokenManager.getToken(this.auth,e));return E(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(e){return _c(this,e)}reload(){return Lc(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(a=>({...a})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const a=new H({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return a.metadata._copy(this.metadata),a}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,a=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),a&&await ft(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(be(this.auth));const e=await this.getIdToken();return await We(this,Sc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,a){const i=a.displayName??void 0,s=a.email??void 0,r=a.phoneNumber??void 0,o=a.photoURL??void 0,n=a.tenantId??void 0,c=a._redirectEventId??void 0,l=a.createdAt??void 0,d=a.lastLoginAt??void 0,{uid:u,emailVerified:p,isAnonymous:g,providerData:b,stsTokenManager:k}=a;E(u&&k,e,"internal-error");const x=_e.fromJSON(this.name,k);E(typeof u=="string",e,"internal-error"),ce(i,e.name),ce(s,e.name),E(typeof p=="boolean",e,"internal-error"),E(typeof g=="boolean",e,"internal-error"),ce(r,e.name),ce(o,e.name),ce(n,e.name),ce(c,e.name),ce(l,e.name),ce(d,e.name);const h=new H({uid:u,auth:e,email:s,emailVerified:p,displayName:i,isAnonymous:g,photoURL:o,phoneNumber:r,tenantId:n,stsTokenManager:x,createdAt:l,lastLoginAt:d});return b&&Array.isArray(b)&&(h.providerData=b.map(C=>({...C}))),c&&(h._redirectEventId=c),h}static async _fromIdTokenResponse(e,a,i=!1){const s=new _e;s.updateFromServerResponse(a);const r=new H({uid:a.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ft(r),r}static async _fromGetAccountInfoResponse(e,a,i){const s=a.users[0];E(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Ti(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!r?.length,n=new _e;n.updateFromIdToken(i);const c=new H({uid:s.localId,auth:e,stsTokenManager:n,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Vt(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(c,l),c}}const Ta=new Map;function te(t){ie(t instanceof Function,"Expected a class definition");let e=Ta.get(t);return e?(ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ta.set(t,e),e)}class Pi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,a){this.storage[e]=a}async _get(e){const a=this.storage[e];return a===void 0?null:a}async _remove(e){delete this.storage[e]}_addListener(e,a){}_removeListener(e,a){}}Pi.type="NONE";const Ht=Pi;function ct(t,e,a){return`firebase:${t}:${e}:${a}`}class Te{constructor(e,a,i){this.persistence=e,this.auth=a,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ct(this.userKey,s.apiKey,r),this.fullPersistenceKey=ct("persistence",s.apiKey,r),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const a=await mt(this.auth,{idToken:e}).catch(()=>{});return a?H._fromGetAccountInfoResponse(this.auth,a,e):null}return H._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,a,i="authUser"){if(!a.length)return new Te(te(Ht),e,i);const s=(await Promise.all(a.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||te(Ht);const o=ct(i,e.config.apiKey,e.name);let n=null;for(const l of a)try{const d=await l._get(o);if(d){let u;if(typeof d=="string"){const p=await mt(e,{idToken:d}).catch(()=>{});if(!p)break;u=await H._fromGetAccountInfoResponse(e,p,d)}else u=H._fromJSON(e,d);l!==r&&(n=u),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Te(r,e,i):(r=c[0],n&&await r._set(o,n.toJSON()),await Promise.all(a.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Te(r,e,i))}}function Pa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Di(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Li(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ni(e))return"Blackberry";if($i(e))return"Webos";if(Ri(e))return"Safari";if((e.includes("chrome/")||Mi(e))&&!e.includes("edge/"))return"Chrome";if(Oi(e))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(a);if(i?.length===2)return i[1]}return"Other"}function Li(t=z()){return/firefox\//i.test(t)}function Ri(t=z()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mi(t=z()){return/crios\//i.test(t)}function Di(t=z()){return/iemobile/i.test(t)}function Oi(t=z()){return/android/i.test(t)}function Ni(t=z()){return/blackberry/i.test(t)}function $i(t=z()){return/webos/i.test(t)}function ta(t=z()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Oc(t=z()){return ta(t)&&!!window.navigator?.standalone}function Nc(){return Go()&&document.documentMode===10}function ji(t=z()){return ta(t)||Oi(t)||$i(t)||Ni(t)||/windows phone/i.test(t)||Di(t)}function zi(t,e=[]){let a;switch(t){case"Browser":a=Pa(z());break;case"Worker":a=`${Pa(z())}-${t}`;break;default:a=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${a}/JsCore/${Xe}/${i}`}class $c{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,a){const i=r=>new Promise((o,n)=>{try{const c=e(r);o(c)}catch(c){n(c)}});i.onAbort=a,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const a=[];try{for(const i of this.queue)await i(e),i.onAbort&&a.push(i.onAbort)}catch(i){a.reverse();for(const s of a)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}async function jc(t,e={}){return se(t,"GET","/v2/passwordPolicy",xe(t,e))}const zc=6;class Uc{constructor(e){const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=a.minPasswordLength??zc,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=a.meetsMinPasswordLength??!0),a.isValid&&(a.isValid=a.meetsMaxPasswordLength??!0),a.isValid&&(a.isValid=a.containsLowercaseLetter??!0),a.isValid&&(a.isValid=a.containsUppercaseLetter??!0),a.isValid&&(a.isValid=a.containsNumericCharacter??!0),a.isValid&&(a.isValid=a.containsNonAlphanumericCharacter??!0),a}validatePasswordLengthOptions(e,a){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(a.meetsMinPasswordLength=e.length>=i),s&&(a.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,a){this.updatePasswordCharacterOptionsStatuses(a,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(a,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,a,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=a)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}class Fc{constructor(e,a,i,s){this.app=e,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new La(this),this.idTokenSubscription=new La(this),this.beforeStateQueue=new $c(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ai,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,a){return a&&(this._popupRedirectResolver=te(a)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Te.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const a=await mt(this,{idToken:e}),i=await H._fromGetAccountInfoResponse(this,a,e);await this.directlySetCurrentUser(i)}catch(a){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",a),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(W(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let i=a,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=i?._redirectEventId,n=await this.tryRedirectSignIn(e);(!r||r===o)&&n?.user&&(i=n.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(e){try{await ft(e)}catch(a){if(a?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(be(this));const a=e?X(e):null;return a&&E(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(e,a=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const a=this._getPasswordPolicyInternal();return a.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):a.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jc(this),a=new Uc(e);this.tenantId===null?this._projectPasswordPolicy=a:this._tenantPasswordPolicies[this.tenantId]=a}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ye("auth","Firebase",e())}onAuthStateChanged(e,a,i){return this.registerStateListener(this.authStateSubscription,e,a,i)}beforeAuthStateChanged(e,a){return this.beforeStateQueue.pushCallback(e,a)}onIdTokenChanged(e,a,i){return this.registerStateListener(this.idTokenSubscription,e,a,i)}authStateReady(){return new Promise((e,a)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},a)}})}async revokeAccessToken(e){if(this.currentUser){const a=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:a};this.tenantId!=null&&(i.tenantId=this.tenantId),await Dc(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,a){const i=await this.getOrInitRedirectPersistenceManager(a);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const a=e&&te(e)||this._popupRedirectResolver;E(a,this,"argument-error"),this.redirectPersistenceManager=await Te.create(this,[te(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,a,i,s){if(this._deleted)return()=>{};const r=typeof a=="function"?a:a.next.bind(a);let o=!1;const n=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(n,this,"internal-error"),n.then(()=>{o||r(this.currentUser)}),typeof a=="function"){const c=e.addObserver(a,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(a);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const a=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();a&&(e["X-Firebase-Client"]=a);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(W(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&bc(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ee(t){return X(t)}class La{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zo(a=>this.observer=a)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Et={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qc(t){Et=t}function Ui(t){return Et.loadJS(t)}function Bc(){return Et.recaptchaEnterpriseScript}function Vc(){return Et.gapiScript}function Hc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Gc{constructor(){this.enterprise=new Kc}ready(e){e()}execute(e,a){return Promise.resolve("token")}render(e,a){return""}}class Kc{ready(e){e()}execute(e,a){return Promise.resolve("token")}render(e,a){return""}}const Wc="recaptcha-enterprise",Fi="NO_RECAPTCHA",Ra="onFirebaseAuthREInstanceReady";class le{constructor(e){this.type=Wc,this.auth=Ee(e)}async verify(e="verify",a=!1){async function i(r){if(!a){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,n)=>{Ic(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)n(new Error("recaptcha Enterprise site key undefined"));else{const l=new Cc(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{n(c)})})}function s(r,o,n){const c=window.grecaptcha;Sa(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(Fi)})}):n(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gc().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(async n=>{if(!a&&Sa(window.grecaptcha)&&le.scriptInjectionDeferred)await le.scriptInjectionDeferred.promise,s(n,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Bc();c.length!==0&&(c+=n+`&onload=${Ra}`),le.scriptInjectionDeferred=new gi,window[Ra]=()=>{le.scriptInjectionDeferred?.resolve()},Ui(c).then(()=>le.scriptInjectionDeferred?.promise).then(()=>{s(n,r,o)}).catch(l=>{o(l)})}}).catch(n=>{o(n)})})}}le.scriptInjectionDeferred=null;async function Ma(t,e,a,i=!1,s=!1){const r=new le(t);let o;if(s)o=Fi;else try{o=await r.verify(a)}catch{o=await r.verify(a,!0)}const n={...e};if(a==="mfaSmsEnrollment"||a==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in n){const c=n.phoneEnrollmentInfo.phoneNumber,l=n.phoneEnrollmentInfo.recaptchaToken;Object.assign(n,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in n){const c=n.phoneSignInInfo.recaptchaToken;Object.assign(n,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return n}return i?Object.assign(n,{captchaResp:o}):Object.assign(n,{captchaResponse:o}),Object.assign(n,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(n,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),n}async function Gt(t,e,a,i,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ma(t,e,a,a==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${a} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ma(t,e,a,a==="getOobCode");return i(t,o)}else return Promise.reject(r)})}function Jc(t,e){const a=vi(t,"auth");if(a.isInitialized()){const s=a.getImmediate(),r=a.getOptions();if(Le(r,e??{}))return s;G(s,"already-initialized")}return a.initialize({options:e})}function Yc(t,e){const a=e?.persistence||[],i=(Array.isArray(a)?a:[a]).map(te);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function Qc(t,e,a){const i=Ee(t);E(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=qi(e),{host:o,port:n}=Xc(e),c=n===null?"":`:${n}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:n,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){E(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),E(Le(l,i.config.emulator)&&Le(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Yt(o)?an(`${r}//${o}${c}`):Zc()}function qi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xc(t){const e=qi(t),a=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!a)return{host:"",port:null};const i=a[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Da(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Da(o)}}}function Da(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zc(){function t(){const e=document.createElement("p"),a=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}class aa{constructor(e,a){this.providerId=e,this.signInMethod=a}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,a){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}async function el(t,e){return se(t,"POST","/v1/accounts:signUp",e)}async function tl(t,e){return kt(t,"POST","/v1/accounts:signInWithPassword",xe(t,e))}async function al(t,e){return se(t,"POST","/v1/accounts:sendOobCode",xe(t,e))}async function il(t,e){return al(t,e)}async function sl(t,e){return kt(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}async function rl(t,e){return kt(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}class Je extends aa{constructor(e,a,i,s=null){super("password",i),this._email=e,this._password=a,this._tenantId=s}static _fromEmailAndPassword(e,a){return new Je(e,a,"password")}static _fromEmailAndCode(e,a,i=null){return new Je(e,a,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e;if(a?.email&&a?.password){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(e,a,"signInWithPassword",tl);case"emailLink":return sl(e,{email:this._email,oobCode:this._password});default:G(e,"internal-error")}}async _linkToIdToken(e,a){switch(this.signInMethod){case"password":const i={idToken:a,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(e,i,"signUpPassword",el);case"emailLink":return rl(e,{idToken:a,email:this._email,oobCode:this._password});default:G(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function Pe(t,e){return kt(t,"POST","/v1/accounts:signInWithIdp",xe(t,e))}const ol="http://localhost";class ke extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const a=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(a.idToken=e.idToken),e.accessToken&&(a.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(a.nonce=e.nonce),e.pendingToken&&(a.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(a.accessToken=e.oauthToken,a.secret=e.oauthTokenSecret):G("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=a;if(!i||!s)return null;const o=new ke(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const a=this.buildRequest();return Pe(e,a)}_linkToIdToken(e,a){const i=this.buildRequest();return i.idToken=a,Pe(e,i)}_getReauthenticationResolver(e){const a=this.buildRequest();return a.autoCreate=!1,Pe(e,a)}buildRequest(){const e={requestUri:ol,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),e.postBody=Qe(a)}return e}}function nl(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cl(t){const e=Fe(qe(t)).link,a=e?Fe(qe(e)).deep_link_id:null,i=Fe(qe(t)).deep_link_id;return(i?Fe(qe(i)).link:null)||i||a||e||t}class ia{constructor(e){const a=Fe(qe(e)),i=a.apiKey??null,s=a.oobCode??null,r=nl(a.mode??null);E(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=a.continueUrl??null,this.languageCode=a.lang??null,this.tenantId=a.tenantId??null}static parseLink(e){const a=cl(e);try{return new ia(a)}catch{return null}}}class Oe{constructor(){this.providerId=Oe.PROVIDER_ID}static credential(e,a){return Je._fromEmailAndPassword(e,a)}static credentialWithLink(e,a){const i=ia.parseLink(a);return E(i,"argument-error"),Je._fromEmailAndCode(e,i.code,i.tenantId)}}Oe.PROVIDER_ID="password";Oe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Bi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class et extends Bi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class de extends et{constructor(){super("facebook.com")}static credential(e){return ke._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com";de.PROVIDER_ID="facebook.com";class ue extends et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,a){return ke._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:a})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:a,oauthAccessToken:i}=e;if(!a&&!i)return null;try{return ue.credential(a,i)}catch{return null}}}ue.GOOGLE_SIGN_IN_METHOD="google.com";ue.PROVIDER_ID="google.com";class pe extends et{constructor(){super("github.com")}static credential(e){return ke._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";class me extends et{constructor(){super("twitter.com")}static credential(e,a){return ke._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:a})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:a,oauthTokenSecret:i}=e;if(!a||!i)return null;try{return me.credential(a,i)}catch{return null}}}me.TWITTER_SIGN_IN_METHOD="twitter.com";me.PROVIDER_ID="twitter.com";class Me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,a,i,s=!1){const r=await H._fromIdTokenResponse(e,i,s),o=Oa(i);return new Me({user:r,providerId:o,_tokenResponse:i,operationType:a})}static async _forOperation(e,a,i){await e._updateTokensIfNecessary(i,!0);const s=Oa(i);return new Me({user:e,providerId:s,_tokenResponse:i,operationType:a})}}function Oa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}class gt extends he{constructor(e,a,i,s){super(a.code,a.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,gt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:a.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,a,i,s){return new gt(e,a,i,s)}}function Vi(t,e,a,i){return(e==="reauthenticate"?a._getReauthenticationResolver(t):a._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gt._fromErrorAndOperation(t,r,e,i):r})}async function ll(t,e,a=!1){const i=await We(t,e._linkToIdToken(t.auth,await t.getIdToken()),a);return Me._forOperation(t,"link",i)}async function dl(t,e,a=!1){const{auth:i}=t;if(W(i.app))return Promise.reject(be(i));const s="reauthenticate";try{const r=await We(t,Vi(i,s,e,t),a);E(r.idToken,i,"internal-error");const o=ea(r.idToken);E(o,i,"internal-error");const{sub:n}=o;return E(t.uid===n,i,"user-mismatch"),Me._forOperation(t,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&G(i,"user-mismatch"),r}}async function Hi(t,e,a=!1){if(W(t.app))return Promise.reject(be(t));const i="signIn",s=await Vi(t,i,e),r=await Me._fromIdTokenResponse(t,i,s);return a||await t._updateCurrentUser(r.user),r}async function ul(t,e){return Hi(Ee(t),e)}async function pl(t){const e=Ee(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ml(t,e,a){const i=Ee(t);await Gt(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",il)}function fl(t,e,a){return W(t.app)?Promise.reject(be(t)):ul(X(t),Oe.credential(e,a)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&pl(t),i})}function Na(t,e){return X(t).setPersistence(e)}function gl(t,e,a,i){return X(t).onIdTokenChanged(e,a,i)}function bl(t,e,a){return X(t).beforeAuthStateChanged(e,a)}function hl(t,e,a,i){return X(t).onAuthStateChanged(e,a,i)}function xl(t){return X(t).signOut()}const bt="__sak";class Gi{constructor(e,a){this.storageRetriever=e,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(bt,"1"),this.storage.removeItem(bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,a){return this.storage.setItem(e,JSON.stringify(a)),Promise.resolve()}_get(e){const a=this.storage.getItem(e);return Promise.resolve(a?JSON.parse(a):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const vl=1e3,yl=10;class Ki extends Gi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,a)=>this.onStorageEvent(e,a),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ji(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const a of Object.keys(this.listeners)){const i=this.storage.getItem(a),s=this.localCache[a];i!==s&&e(a,s,i)}}onStorageEvent(e,a=!1){if(!e.key){this.forAllChangedKeys((o,n,c)=>{this.notifyListeners(o,c)});return}const i=e.key;a?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!a&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Nc()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yl):s()}notifyListeners(e,a){this.localCache[e]=a;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,a,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:a,newValue:i}),!0)})},vl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,a){await super._set(e,a),this.localCache[e]=JSON.stringify(a)}async _get(e){const a=await super._get(e);return this.localCache[e]=JSON.stringify(a),a}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ki.type="LOCAL";const wl=Ki;class Wi extends Gi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,a){}_removeListener(e,a){}}Wi.type="SESSION";const sa=Wi;function kl(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(a){return{fulfilled:!1,reason:a}}}))}class At{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const a=this.receivers.find(s=>s.isListeningto(e));if(a)return a;const i=new At(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const a=e,{eventId:i,eventType:s,data:r}=a.data,o=this.handlersMap[s];if(!o?.size)return;a.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const n=Array.from(o).map(async l=>l(a.origin,r)),c=await kl(n);a.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(a)}_unsubscribe(e,a){this.handlersMap[e]&&a&&this.handlersMap[e].delete(a),(!a||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}At.receivers=[];function ra(t="",e=10){let a="";for(let i=0;i<e;i++)a+=Math.floor(Math.random()*10);return t+a}class El{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,a,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((n,c)=>{const l=ra("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),n(p.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:a},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}function Q(){return window}function Al(t){Q().location.href=t}function Ji(){return typeof Q().WorkerGlobalScope<"u"&&typeof Q().importScripts=="function"}async function Cl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Il(){return navigator?.serviceWorker?.controller||null}function Sl(){return Ji()?self:null}const Yi="firebaseLocalStorageDb",_l=1,ht="firebaseLocalStorage",Qi="fbase_key";class tt{constructor(e){this.request=e}toPromise(){return new Promise((e,a)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function Ct(t,e){return t.transaction([ht],e?"readwrite":"readonly").objectStore(ht)}function Tl(){const t=indexedDB.deleteDatabase(Yi);return new tt(t).toPromise()}function Xi(){const t=indexedDB.open(Yi,_l);return new Promise((e,a)=>{t.addEventListener("error",()=>{a(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ht,{keyPath:Qi})}catch(s){a(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ht)?e(i):(i.close(),await Tl(),e(await Xi()))})})}async function $a(t,e,a){const i=Ct(t,!0).put({[Qi]:e,value:a});return new tt(i).toPromise()}async function Pl(t,e){const a=Ct(t,!1).get(e),i=await new tt(a).toPromise();return i===void 0?null:i.value}function ja(t,e){const a=Ct(t,!0).delete(e);return new tt(a).toPromise()}const Ll=800,Rl=3;class Zi{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Xi(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let a=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(a++>Rl)throw i;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Ji()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=At._getInstance(Sl()),this.receiver._subscribe("keyChanged",async(e,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(e,a)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Cl(),!this.activeServiceWorker)return;this.sender=new El(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Il()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await $a(e,bt,"1"),await ja(e,bt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,a){return this._withPendingWrite(async()=>(await this._withRetries(i=>$a(i,e,a)),this.localCache[e]=a,this.notifyServiceWorker(e)))}async _get(e){const a=await this._withRetries(i=>Pl(i,e));return this.localCache[e]=a,a}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(a=>ja(a,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ct(s,!1).getAll();return new tt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const a=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),a.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),a.push(s));return a}notifyListeners(e,a){this.localCache[e]=a;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ll)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zi.type="LOCAL";const Ml=Zi;new Ze(3e4,6e4);function Dl(t,e){return e?te(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}class oa extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,a){return Pe(e,this._buildIdpRequest(a))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(a.idToken=e),a}}function Ol(t){return Hi(t.auth,new oa(t),t.bypassAuthState)}function Nl(t){const{auth:e,user:a}=t;return E(a,e,"internal-error"),dl(a,new oa(t),t.bypassAuthState)}async function $l(t){const{auth:e,user:a}=t;return E(a,e,"internal-error"),ll(a,new oa(t),t.bypassAuthState)}class es{constructor(e,a,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(e,a)=>{this.pendingPromise={resolve:e,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:a,sessionId:i,postBody:s,tenantId:r,error:o,type:n}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:a,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(n)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ol;case"linkViaPopup":case"linkViaRedirect":return $l;case"reauthViaPopup":case"reauthViaRedirect":return Nl;default:G(this.auth,"internal-error")}}resolve(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const jl=new Ze(2e3,1e4);class Ie extends es{constructor(e,a,i,s,r){super(e,a,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){ie(this.filter.length===1,"Popup operations only handle one event");const e=ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(Y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jl.get())};e()}}Ie.currentPopupAction=null;const zl="pendingRedirect",lt=new Map;class Ul extends es{constructor(e,a,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,i),this.eventId=null}async execute(){let e=lt.get(this.auth._key());if(!e){try{const i=await Fl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(a){e=()=>Promise.reject(a)}lt.set(this.auth._key(),e)}return this.bypassAuthState||lt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const a=await this.auth._redirectUserForId(e.eventId);if(a)return this.user=a,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fl(t,e){const a=Vl(e),i=Bl(t);if(!await i._isAvailable())return!1;const s=await i._get(a)==="true";return await i._remove(a),s}function ql(t,e){lt.set(t._key(),e)}function Bl(t){return te(t._redirectPersistence)}function Vl(t){return ct(zl,t.config.apiKey,t.name)}async function Hl(t,e,a=!1){if(W(t.app))return Promise.reject(be(t));const i=Ee(t),s=Dl(i,e),o=await new Ul(i,s,a).execute();return o&&!a&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}const Gl=600*1e3;class Kl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let a=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(a=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wl(e)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=e,a=!0)),a}sendToConsumer(e,a){if(e.error&&!ts(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";a.onError(Y(this.auth,i))}else a.onAuthEvent(e)}isEventForConsumer(e,a){const i=a.eventId===null||!!e.eventId&&e.eventId===a.eventId;return a.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gl&&this.cachedEventUids.clear(),this.cachedEventUids.has(za(e))}saveEventToCache(e){this.cachedEventUids.add(za(e)),this.lastProcessedEventTime=Date.now()}}function za(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ts({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Wl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ts(t);default:return!1}}async function Jl(t,e={}){return se(t,"GET","/v1/projects",e)}const Yl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ql=/^https?/;async function Xl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jl(t);for(const a of e)try{if(Zl(a))return}catch{}G(t,"unauthorized-domain")}function Zl(t){const e=Bt(),{protocol:a,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?a==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):a==="chrome-extension:"&&o.hostname===i}if(!Ql.test(a))return!1;if(Yl.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}const ed=new Ze(3e4,6e4);function Ua(){const t=Q().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let a=0;a<t.CP.length;a++)t.CP[a]=null}}function td(t){return new Promise((e,a)=>{function i(){Ua(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ua(),a(Y(t,"network-request-failed"))},timeout:ed.get()})}if(Q().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Q().gapi?.load)i();else{const s=Hc("iframefcb");return Q()[s]=()=>{gapi.load?i():a(Y(t,"network-request-failed"))},Ui(`${Vc()}?onload=${s}`).catch(r=>a(r))}}).catch(e=>{throw dt=null,e})}let dt=null;function ad(t){return dt=dt||td(t),dt}const id=new Ze(5e3,15e3),sd="__/auth/iframe",rd="emulator/auth/iframe",od={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cd(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const a=e.emulator?Zt(e,rd):`https://${t.config.authDomain}/${sd}`,i={apiKey:e.apiKey,appName:t.name,v:Xe},s=nd.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${a}?${Qe(i).slice(1)}`}async function ld(t){const e=await ad(t),a=Q().gapi;return E(a,t,"internal-error"),e.open({where:document.body,url:cd(t),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:od,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Y(t,"network-request-failed"),n=Q().setTimeout(()=>{r(o)},id.get());function c(){Q().clearTimeout(n),s(i)}i.ping(c).then(c,()=>{r(o)})}))}const dd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ud=500,pd=600,md="_blank",fd="http://localhost";class Fa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gd(t,e,a,i=ud,s=pd){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let n="";const c={...dd,width:i.toString(),height:s.toString(),top:r,left:o},l=z().toLowerCase();a&&(n=Mi(l)?md:a),Li(l)&&(e=e||fd,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[g,b])=>`${p}${g}=${b},`,"");if(Oc(l)&&n!=="_self")return bd(e||"",n),new Fa(null);const u=window.open(e||"",n,d);E(u,t,"popup-blocked");try{u.focus()}catch{}return new Fa(u)}function bd(t,e){const a=document.createElement("a");a.href=t,a.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(i)}const hd="__/auth/handler",xd="emulator/auth/handler",vd=encodeURIComponent("fac");async function qa(t,e,a,i,s,r){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:a,redirectUrl:i,v:Xe,eventId:s};if(e instanceof Bi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof et){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const n=o;for(const d of Object.keys(n))n[d]===void 0&&delete n[d];const c=await t._getAppCheckToken(),l=c?`#${vd}=${encodeURIComponent(c)}`:"";return`${yd(t)}?${Qe(n).slice(1)}${l}`}function yd({config:t}){return t.emulator?Zt(t,xd):`https://${t.authDomain}/${hd}`}const Ot="webStorageSupport";class wd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sa,this._completeRedirectFn=Hl,this._overrideRedirectResult=ql}async _openPopup(e,a,i,s){ie(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await qa(e,a,i,Bt(),s);return gd(e,r,ra())}async _openRedirect(e,a,i,s){await this._originValidation(e);const r=await qa(e,a,i,Bt(),s);return Al(r),new Promise(()=>{})}_initialize(e){const a=e._key();if(this.eventManagers[a]){const{manager:s,promise:r}=this.eventManagers[a];return s?Promise.resolve(s):(ie(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[a]={promise:i},i.catch(()=>{delete this.eventManagers[a]}),i}async initAndGetManager(e){const a=await ld(e),i=new Kl(e);return a.register("authEvent",s=>(E(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=a,i}_isIframeWebStorageSupported(e,a){this.iframes[e._key()].send(Ot,{type:Ot},s=>{const r=s?.[0]?.[Ot];r!==void 0&&a(!!r),G(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const a=e._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=Xl(e)),this.originValidationPromises[a]}get _shouldInitProactively(){return ji()||Ri()||ta()}}const kd=wd;var Ba="@firebase/auth",Va="1.13.3";class Ed{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const a=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,a),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const a=this.internalListeners.get(e);a&&(this.internalListeners.delete(e),a(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function Ad(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cd(t){Ge(new Re("auth",(e,{options:a})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:n}=i.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:n,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zi(t)},l=new Fc(i,s,r,c);return Yc(l,a),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,a,i)=>{e.getProvider("auth-internal").initialize()})),Ge(new Re("auth-internal",e=>{const a=Ee(e.getProvider("auth").getImmediate());return(i=>new Ed(i))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(Ba,Va,Ad(t)),Se(Ba,Va,"esm2020")}const Id=300,Sd=fi("authIdTokenMaxAge")||Id;let Ha=null;const _d=t=>async e=>{const a=e&&await e.getIdTokenResult(),i=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(i&&i>Sd)return;const s=a?.token;Ha!==s&&(Ha=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Td(t=ac()){const e=vi(t,"auth");if(e.isInitialized())return e.getImmediate();const a=Jc(t,{popupRedirectResolver:kd,persistence:[Ml,wl,sa]}),i=fi("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=_d(r.toString());bl(a,o,()=>o(a.currentUser)),gl(a,n=>o(n))}}const s=Fo("auth");return s&&Qc(a,`http://${s}`),a}function Pd(){return document.getElementsByTagName("head")?.[0]??document}qc({loadJS(t){return new Promise((e,a)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Y("internal-error");r.customData=s,a(r)},i.type="text/javascript",i.charset="UTF-8",Pd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cd("Browser");const Ld={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},Rd=yi(Ld),De=Td(Rd);async function Md(){try{await Na(De,sa)}catch(t){console.warn("No fue posible conservar la sesión en el navegador; se utilizará memoria temporal.",t),await Na(De,Ht)}}async function Dd(t,e){return await Md(),fl(De,t,e)}async function Od(t){return ml(De,String(t||"").trim())}async function Gu(){return xl(De)}function Nd(t){return hl(De,t)}function $d(){return new Promise(t=>{const e=Nd(a=>{e(),t(a)})})}function jd(t){const e=document.createElement("section");e.className=`
    min-h-[70vh]
    flex items-center justify-center
    px-4 py-12 md:px-6
    font-sans
  `,e.innerHTML=`
    <div class="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
      <div class="absolute -top-24 -right-20 h-52 w-52 rounded-full bg-sky-100/70"></div>
      <div class="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-indigo-100/60"></div>

      <div class="relative z-10 p-7 md:p-10">
        <button
          type="button"
          data-action="volver-inicio"
          class="mb-7 inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900"
        >
          <span aria-hidden="true">←</span>
          Volver a la portada
        </button>

        <div class="mb-7 flex items-start gap-4">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-2xl text-sky-700">
            🔐
          </div>
          <div>
            <p class="mb-1 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
              Área protegida
            </p>
            <h1 class="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              Laboratorio Inteligente
            </h1>
          </div>
        </div>

        <p class="mb-8 leading-relaxed text-slate-600">
          Acceso exclusivo para investigadores autorizados. La sesión se conservará mientras permanezca activa la sesión del navegador.
        </p>

        <form id="kernel-login" class="space-y-5" novalidate>
          <label class="block">
            <span class="mb-2 block font-black text-slate-800">
              Correo electrónico
            </span>
            <input
              id="correo"
              name="correo"
              type="email"
              autocomplete="username"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
              required
            />
          </label>

          <label class="block">
            <span class="mb-2 block font-black text-slate-800">
              Contraseña
            </span>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
              required
            />
          </label>

          <label class="flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-600">
            <input
              type="checkbox"
              data-action="mostrar-password"
              class="h-4 w-4 rounded border-slate-300"
            />
            Mostrar contraseña
          </label>

          <button
            class="w-full rounded-xl bg-blue-700 px-6 py-4 font-black text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60"
            type="submit"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            data-action="recuperar-password"
            class="w-full rounded-xl border border-sky-300 px-6 py-3 font-black text-sky-800 transition hover:bg-sky-50 disabled:cursor-wait disabled:opacity-60"
          >
            Recuperar contraseña
          </button>

          <div
            id="login-mensaje"
            class="hidden rounded-2xl border p-4 text-sm font-semibold leading-relaxed"
            role="status"
            aria-live="polite"
          ></div>
        </form>

        <p class="mt-7 text-center text-xs leading-relaxed text-slate-500">
          Los datos introducidos en las calculadoras se procesan localmente en el navegador y no se envían al servidor del Grupo Kernel.
        </p>
      </div>
    </div>
  `;const a=e.querySelector("#kernel-login"),i=e.querySelector("#login-mensaje"),s=e.querySelector("#correo"),r=e.querySelector("#password"),o=a.querySelector('button[type="submit"]'),n=e.querySelector("[data-action='recuperar-password']"),c=e.querySelector("[data-action='mostrar-password']"),l=(u,p="error")=>{i.textContent=u,i.className=["rounded-2xl border p-4 text-sm font-semibold leading-relaxed",p==="exito"?"border-emerald-200 bg-emerald-50 text-emerald-900":"border-red-200 bg-red-50 text-red-900"].join(" ")},d=()=>{i.className="hidden",i.textContent=""};return e.querySelector("[data-action='volver-inicio']")?.addEventListener("click",()=>{window.location.hash="/home"}),c?.addEventListener("change",()=>{r.type=c.checked?"text":"password"}),n?.addEventListener("click",async()=>{d();const u=s.value.trim();if(!u||!s.checkValidity()){l("Introduzca primero un correo electrónico válido."),s.focus();return}const p=n.textContent;n.disabled=!0,n.textContent="Enviando instrucciones...";try{await Od(u),l("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña. Revise también la carpeta de correo no deseado.","exito")}catch(g){console.error("Error al solicitar recuperación:",g),g?.code==="auth/invalid-email"?l("El correo electrónico no tiene un formato válido."):g?.code==="auth/too-many-requests"?l("Se realizaron demasiadas solicitudes. Espere unos minutos antes de intentarlo nuevamente."):g?.code==="auth/network-request-failed"?l("No fue posible conectarse con Firebase. Revise su conexión."):l("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña.","exito")}finally{n.disabled=!1,n.textContent=p}}),a.addEventListener("submit",async u=>{u.preventDefault(),d();const p=s.value.trim(),g=r.value;if(!p||!g){l("Introduzca el correo electrónico y la contraseña.");return}if(!s.checkValidity()){l("El correo electrónico no tiene un formato válido."),s.focus();return}o.disabled=!0,o.textContent="Verificando...";try{await Dd(p,g),t&&await t()}catch(b){console.error("Error de autenticación:",b),l({"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo o la contraseña son incorrectos.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."}[b?.code]||"No fue posible iniciar sesión. Inténtelo nuevamente.")}finally{o.disabled=!1,o.textContent="Iniciar sesión"}}),e}function D(t,e,a){return async()=>{const s=(await t())[e];if(typeof s!="function")throw new Error(a);return s()}}const zd=D(()=>M(()=>import("./LaboratorioKernel-DelzhyZ2.js"),[],import.meta.url),"LaboratorioKernel","El Laboratorio Inteligente no está disponible."),Ud=D(()=>M(()=>import("./AsistentePruebas-AX4vqLZX.js"),__vite__mapDeps([0,1]),import.meta.url),"AsistentePruebas","El asistente metodológico no está disponible."),Fd=D(()=>M(()=>import("./ComparacionGrupos-BqmYk_OJ.js"),[],import.meta.url),"ComparacionGrupos","El módulo de comparación de grupos no está disponible."),qd=D(()=>M(()=>import("./CalculadoraDosGrupos-QPFgs7W4.js"),__vite__mapDeps([2,3]),import.meta.url),"CalculadoraDosGrupos","La calculadora de dos grupos no está disponible."),Bd=D(()=>M(()=>import("./CalculadoraDosMuestrasRelacionadas-CJ1RVWYl.js"),__vite__mapDeps([4,5,3]),import.meta.url),"CalculadoraDosMuestrasRelacionadas","La calculadora de muestras relacionadas no está disponible."),Vd=D(()=>M(()=>import("./CalculadoraTresOMasGrupos-CguCqVTZ.js"),__vite__mapDeps([6,3]),import.meta.url),"CalculadoraTresOMasGrupos","La calculadora de tres o más grupos no está disponible."),Hd=D(()=>M(()=>import("./CalculadoraTresOMasMedicionesRelacionadas-DlaD_ARg.js"),__vite__mapDeps([7,3,5]),import.meta.url),"CalculadoraTresOMasMedicionesRelacionadas","La calculadora de mediciones relacionadas no está disponible."),Gd=D(()=>M(()=>import("./CorrelacionAsociacion-BJOAMDeR.js"),[],import.meta.url),"CorrelacionAsociacion","El módulo de correlación y asociación no está disponible."),Kd=D(()=>M(()=>import("./CalculadoraRelacionVariables-Di98coDP.js"),__vite__mapDeps([8,3]),import.meta.url),"CalculadoraRelacionVariables","La calculadora de relación entre variables no está disponible."),Wd=D(()=>M(()=>import("./CalculadoraAsociacionCategorica-Bng203VQ.js"),__vite__mapDeps([9,3]),import.meta.url),"CalculadoraAsociacionCategorica","La calculadora de asociación categórica no está disponible."),Jd=D(()=>M(()=>import("./CalculadoraEstadisticaDescriptiva-CTrDkMt3.js"),[],import.meta.url),"CalculadoraEstadisticaDescriptiva","La calculadora de estadística descriptiva no está disponible."),Yd=D(()=>M(()=>import("./CalculadoraFiabilidadCuestionarios-cvzxa8nN.js"),[],import.meta.url),"CalculadoraFiabilidadCuestionarios","La calculadora de cuestionarios y fiabilidad no está disponible."),Qd=D(()=>M(()=>import("./CalculadoraEvaluacionEducativa-CacwXVdJ.js"),[],import.meta.url),"CalculadoraEvaluacionEducativa","La calculadora de evaluación educativa no está disponible."),Xd=D(()=>M(()=>import("./CalculadoraTamanoMuestraPotencia-CQLN4Zkl.js"),[],import.meta.url),"CalculadoraTamanoMuestraPotencia","La calculadora de tamaño de muestra y potencia no está disponible."),Zd=D(()=>M(()=>import("./BibliotecaMetodologica-DYcZHcBA.js"),__vite__mapDeps([10,1]),import.meta.url),"BibliotecaMetodologica","La Biblioteca metodológica no está disponible."),eu=D(()=>M(()=>import("./RegresionModelos-BOXDXzy8.js"),[],import.meta.url),"RegresionModelos","El área de modelos de regresión no está disponible."),tu=D(()=>M(()=>import("./CalculadoraRegresionCompleta-Dl9k330R.js"),[],import.meta.url),"CalculadoraRegresionCompleta","La calculadora de regresión lineal no está disponible."),au=D(()=>M(()=>import("./CalculadoraRegresionLogistica-kSsxu5Mw.js"),[],import.meta.url),"CalculadoraRegresionLogistica","La calculadora de regresión logística no está disponible."),iu=D(()=>M(()=>import("./CalculadoraRegresionConteo-VE7dPXsR.js"),[],import.meta.url),"CalculadoraRegresionConteo","La calculadora de regresión de conteo no está disponible."),su={home:{page:ir,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:kr,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Tr,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:Mr,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:Wr,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:eo,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:bo,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:co,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Io,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:Ro,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:zd,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:Ud,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:Fd,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:qd,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:Bd,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:Vd,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:Hd,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:Gd,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:Kd,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:Wd,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:Jd,layout:"default",title:"Estadística descriptiva | El Kernel"},calculadoraFiabilidadCuestionarios:{page:Yd,layout:"default",title:"Cuestionarios y fiabilidad | El Kernel"},calculadoraEvaluacionEducativa:{page:Qd,layout:"default",title:"Evaluación educativa | El Kernel"},calculadoraTamanoMuestraPotencia:{page:Xd,layout:"default",title:"Tamaño de muestra y potencia | El Kernel"},bibliotecaMetodologica:{page:Zd,layout:"default",title:"Biblioteca metodológica | El Kernel"},regresionModelos:{page:eu,layout:"default",title:"Modelos de regresión | El Kernel"},calculadoraRegresion:{page:tu,layout:"default",title:"Regresión lineal y múltiple | El Kernel"},calculadoraRegresionLogistica:{page:au,layout:"default",title:"Regresión logística binaria | El Kernel"},calculadoraRegresionConteo:{page:iu,layout:"default",title:"Regresión de Poisson y binomial negativa | El Kernel"}},ru=new Set(["laboratorioKernel","asistentePruebas","comparacionGrupos","calculadoraDosGrupos","calculadoraDosMuestrasRelacionadas","calculadoraTresOMasGrupos","calculadoraTresOMasMedicionesRelacionadas","correlacionAsociacion","calculadoraRelacionVariables","calculadoraAsociacionCategorica","calculadoraEstadisticaDescriptiva","calculadoraFiabilidadCuestionarios","calculadoraEvaluacionEducativa","calculadoraTamanoMuestraPotencia","bibliotecaMetodologica","regresionModelos","calculadoraRegresion","calculadoraRegresionLogistica","calculadoraRegresionConteo"]);let Ga=document.referrer||"";function It(t){window.location.hash=`/${t}`}function ou(){const t=()=>{const e=window.location.hash.replace("#/","")||"home";uu(e)};window.addEventListener("hashchange",t),t()}function nu(t,e){const a=`${window.location.origin}${window.location.pathname}#/${t}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:e,page_location:a,page_referrer:Ga}),Ga=a}function cu(){return document.title="Acceso al Laboratorio | El Kernel",jd(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))})}function lu(t){const e=document.createElement("section");e.className="w-full max-w-4xl mx-auto px-4 py-12 md:px-8 font-sans",e.innerHTML=`
        <div class="rounded-3xl border border-red-200 bg-white p-6 md:p-9 shadow-xl">
            <p class="uppercase tracking-widest text-red-700 text-xs font-black mb-2">Error de carga</p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">No fue posible abrir esta herramienta</h1>
            <p class="text-slate-600 leading-relaxed mb-5">La aplicación principal continúa disponible. Regrese al laboratorio o intente cargar nuevamente esta ruta.</p>
            <div data-mensaje-error-ruta class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 break-words"></div>
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button type="button" data-action="reintentar-ruta" class="rounded-xl bg-red-700 px-6 py-3 text-white font-black hover:bg-red-800">Reintentar</button>
                <button type="button" data-action="volver-laboratorio" class="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 font-black hover:bg-slate-50">Volver al laboratorio</button>
            </div>
        </div>`;const a=e.querySelector("[data-mensaje-error-ruta]");return a&&(a.textContent=t instanceof Error?t.message:"Se produjo un error inesperado."),e.querySelector("[data-action='reintentar-ruta']")?.addEventListener("click",()=>window.location.reload()),e.querySelector("[data-action='volver-laboratorio']")?.addEventListener("click",()=>It("laboratorioKernel")),e}async function du(t,e){return ru.has(t)?await $d()?e.page():cu():e.page()}async function uu(t){const e=document.querySelector("main"),a=su[t];if(e){if(e.innerHTML="",!a){It("home");return}ai(a.layout),document.title=a.title;try{const i=await du(t,a);if(!(i instanceof Element))throw new Error("La herramienta no devolvió un componente válido.");e.appendChild(i),window.scrollTo({top:0,behavior:"auto"}),nu(t,document.title)}catch(i){console.error(`[Kernel] Error al cargar la ruta ${t}.`,i),e.appendChild(lu(i))}}}const as="kernel-home-section";function Ka(t){window.matchMedia("(min-width: 1024px)").matches||(t.classList.remove("block"),t.classList.add("hidden"),document.body.style.overflow="")}function pu(){return window.location.hash.replace("#/","")||"home"}function Wa(t){try{window.sessionStorage.setItem(as,t)}catch(e){console.warn("[Kernel] No fue posible conservar la sección solicitada.",e)}}function mu(){try{window.sessionStorage.removeItem(as)}catch(t){console.warn("[Kernel] No fue posible limpiar la sección solicitada.",t)}}function fu(t,e){if(!t)return;if(pu()!=="home"){Wa(t),e("home");return}const a=document.getElementById(t);if(a){mu(),window.requestAnimationFrame(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})});return}Wa(t),window.dispatchEvent(new HashChangeEvent("hashchange"))}function gu(t,e){t&&t.addEventListener("click",a=>{const i=a.target.closest("[data-home-section]");if(i&&t.contains(i)){a.preventDefault(),Ka(t),fu(i.dataset.homeSection,e);return}const s=a.target.closest("[data-route]");!s||!t.contains(s)||(a.preventDefault(),e(s.dataset.route),Ka(t))})}function bu(t,e){if(!t||!e)return;gu(t,It),ls(t);const a=e.querySelector('[data-action="open-menu"]');a&&ds(a,t),us(t),ou()}function hu(t){const e=String(t??"").replace(/\u00a0/g,"").replace(/\s/g,"").replace(/[^0-9+\-.,eE]/g,"");if(!e)return null;const a=e.lastIndexOf(","),i=e.lastIndexOf(".");let s=e;a>=0&&i>=0?s=i>a?e.replace(/,/g,""):e.replace(/\./g,"").replace(",","."):a>=0&&(s=e.length-a-1===3&&a>0?e.replace(/,/g,""):e.replace(",","."));const r=Number(s);return Number.isFinite(r)?r:null}function xu(t){const e=t.querySelector("table");if(!e)return null;const i=[...e.querySelectorAll("thead th")].map(r=>r.textContent.trim().toLowerCase()).some(r=>r.includes("marca")),s=[...e.querySelectorAll("tbody tr")].map(r=>{const o=[...r.querySelectorAll("td")],n=Number(o[i?2:1]?.textContent.trim()),c=Number(o[i?4:3]?.textContent.trim());return{etiqueta:o[0]?.textContent.trim()||"",valor:hu(o[i?1:0]?.textContent),frecuencia:Number.isFinite(n)?n:0,acumulada:Number.isFinite(c)?c:0}}).filter(r=>r.etiqueta&&r.frecuencia>=0);return{agrupados:i,filas:s}}function is(t){return Number.isFinite(Number(t))?Number(t).toLocaleString("es-DO",{maximumFractionDigits:3}):"—"}function Ja(t,e){let a=0;for(const i of t)if(a+=i.frecuencia,e<a)return i.valor;return t.at(-1)?.valor??null}function Nt(t,e){const a=t.reduce((c,l)=>c+l.frecuencia,0);if(!a)return null;if(e<=0)return t[0].valor;if(e>=1)return t.at(-1).valor;const i=(a-1)*e,s=Math.floor(i),r=Math.ceil(i),o=Ja(t,s),n=Ja(t,r);return s===r?o:o*(r-i)+n*(i-s)}function Ue(t,e,a){return`
        <text
            x="${t}"
            y="${e}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${is(a)}</text>
    `}function vu(t,e){if(!t||t.dataset.cajaDescriptivaSegura==="true"||e.agrupados)return;t.dataset.cajaDescriptivaSegura="true";const a=e.filas.filter(f=>f.valor!==null&&f.frecuencia>0).sort((f,v)=>f.valor-v.valor);if(a.reduce((f,v)=>f+v.frecuencia,0)<2)return;const s=a[0].valor,r=a.at(-1).valor,o=Nt(a,.25),n=Nt(a,.5),c=Nt(a,.75),l=c-o,d=o-1.5*l,u=c+1.5*l,p=a.filter(f=>f.valor>=d&&f.valor<=u),g=a.filter(f=>f.valor<d||f.valor>u),b=p[0]?.valor??s,k=p.at(-1)?.valor??r,x=Math.max(r-s,1),h=f=>40+(f-s)/x*520,C=t.querySelector("svg");if(!C)return;C.setAttribute("aria-label","Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos potenciales"),C.innerHTML=`
        <line x1="${h(b)}" y1="80" x2="${h(o)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(c)}" y1="80" x2="${h(k)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(b)}" y1="58" x2="${h(b)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(k)}" y1="58" x2="${h(k)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${h(o)}" y="45" width="${Math.max(h(c)-h(o),2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${h(n)}" y1="45" x2="${h(n)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${g.map((f,v)=>`
            <circle
                cx="${h(f.valor)}"
                cy="${80+(v%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${is(f.valor)}${f.frecuencia>1?` (${f.frecuencia} observaciones)`:""}</title>
            </circle>
        `).join("")}
        ${Ue(h(b),140,b)}
        ${Ue(h(o),30,o)}
        ${Ue(h(n),140,n)}
        ${Ue(h(c),30,c)}
        ${Ue(h(k),140,k)}
    `;const P=t.querySelector("h3 + p");P&&(P.textContent="Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales según el criterio de Tukey.")}function yu(){const t=document.createElement("section");return t.dataset.encabezadoGraficosSeguro="true",t.className="mt-10",t.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución, la frecuencia acumulada, la mediana, los cuartiles, la dispersión y los valores atípicos potenciales.
        </p>
    `,t}function wu(t){const e=document.createElement("article");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const a=Math.max(...t.map(i=>i.frecuencia),1);return e.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas representan la frecuencia de cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${t.map(i=>{const s=Math.max(4,i.frecuencia/a*190);return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${i.frecuencia}</span>
                        <div
                            class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40"
                            style="height:${s}px"
                            title="${i.etiqueta}: ${i.frecuencia} observaciones"
                        ></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${i.etiqueta}</span>
                    </div>
                `}).join("")}
        </div>
    `,e}function ku(t){const e=document.createElement("article");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const a=600,i=250,s=48,r=24,o=24,n=48,c=Math.max(...t.map(u=>u.acumulada),1),l=Math.max(t.length-1,1),d=t.map((u,p)=>({...u,x:s+p/l*(a-s-r),y:o+(1-u.acumulada/c)*(i-o-n)}));return e.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra el crecimiento de la frecuencia acumulada.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${a} ${i}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${s}" y1="${o}" x2="${s}" y2="${i-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s}" y1="${i-n}" x2="${a-r}" y2="${i-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${d.map(u=>`${u.x},${u.y}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${d.map(u=>`
                    <circle cx="${u.x}" cy="${u.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${u.etiqueta}: frecuencia acumulada ${u.acumulada}</title>
                    </circle>
                    <text x="${u.x}" y="${i-24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${u.etiqueta}</text>
                `).join("")}
                <text x="18" y="${o+4}" font-size="11" fill="currentColor" class="text-slate-600">${c}</text>
                <text x="25" y="${i-n+4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `,e}function Eu(t){const e=[...t.querySelectorAll("article")],a=e.find(o=>o.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),i=e.find(o=>o.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!a||!i)return;const s=a.parentElement,r=xu(t);if(!(!s||!r?.filas.length)&&(t.querySelector("[data-encabezado-graficos-seguro='true']")||(s.before(yu()),s.classList.remove("mt-8")),vu(i,r),!t.querySelector("[data-graficos-descriptivos-seguros='true']"))){const o=document.createElement("div");o.dataset.graficosDescriptivosSeguros="true",o.className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7",o.append(wu(r.filas),ku(r.filas)),s.after(o)}}function Au(){let t=!1;const e=()=>{t=!1;const s=document.querySelector("#resultados-estadistica-descriptiva");s&&!s.classList.contains("hidden")&&Eu(s)},a=()=>{t||(t=!0,window.requestAnimationFrame(e))};new MutationObserver(a).observe(document.body,{childList:!0,subtree:!0}),a()}function Cu(t,e){return`${t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||`grafico-${e+1}`}.svg`}function Iu(t,e,a){const i=t.cloneNode(!0);i.getAttribute("xmlns")||i.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=new XMLSerializer().serializeToString(i),o=new Blob([r],{type:"image/svg+xml;charset=utf-8"}),n=URL.createObjectURL(o),c=document.createElement("a");c.href=n,c.download=Cu(e,a),document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Su(t,e,a){if(t.querySelector("[data-descargar-svg]"))return;const i=t.querySelector("h3")?.textContent.trim()||`Gráfico ${a+1}`,s=document.createElement("button");s.type="button",s.dataset.descargarSvg="true",s.className=`
        mt-4 inline-flex items-center justify-center gap-2
        rounded-xl border border-sky-300 bg-sky-50
        px-4 py-3 text-sm font-black text-sky-800
        hover:bg-sky-100 transition-colors
    `,s.innerHTML=`
        <span aria-hidden="true">↓</span>
        Descargar SVG
    `,s.setAttribute("aria-label",`Descargar ${i} en formato SVG`),s.addEventListener("click",()=>{Iu(e,i,a)}),t.appendChild(s)}function _u(t){const e=window.open("","_blank");if(!e){window.print();return}const a=`
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
    `;e.document.open(),e.document.write(`
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>Informe de estadística descriptiva</title>
                ${a}
            </head>
            <body>
                <h1>Informe de estadística descriptiva</h1>
                <p>Grupo de Investigación El Kernel</p>
                ${t.innerHTML}
            </body>
        </html>
    `),e.document.close(),e.addEventListener("load",()=>{e.focus(),e.print()})}function Tu(t){if(t.querySelector("[data-herramientas-exportacion='true']"))return;const e=document.createElement("section");e.dataset.herramientasExportacion="true",e.className=`
        mb-6 rounded-2xl border border-slate-200
        bg-slate-50 p-5
        flex flex-col md:flex-row md:items-center
        md:justify-between gap-4
    `,e.innerHTML=`
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
    `,e.querySelector("[data-imprimir-informe]")?.addEventListener("click",()=>{_u(t)}),t.prepend(e)}function Pu(t){Tu(t),[...t.querySelectorAll("article")].forEach((a,i)=>{const s=a.querySelector("svg");s&&Su(a,s,i)})}function Lu(){const t=()=>{const a=document.querySelector("#resultados-estadistica-descriptiva");a&&!a.classList.contains("hidden")&&Pu(a)};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()}const Ru=["#formulario-estadistica-descriptiva","#formulario-regresion","#formulario-regresion-conteo","#form-tamano","[id*='calculadora'] form","section form"].join(",");function Mu(){return document.querySelector("main h1, #app h1, h1")?.textContent?.trim()?.toLowerCase()||""}function Du(){return Mu().includes("laboratorio inteligente de investigación")}function Ou(){const t=document.querySelector("main h1, #app h1, h1"),e=document.querySelector("[data-action='volver-laboratorio'], [data-action='volver-modelos'], [data-action='volver-regresion'], [data-action='volver']"),a=document.querySelector(Ru);return!!(t&&e&&a)}function Nu(){const t=document.createElement("section");return t.dataset.creditosCalculadoras="true",t.className=["w-full max-w-7xl mx-auto","px-4 pb-10 md:px-8","font-sans"].join(" "),t.innerHTML=`
        <div class="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-7 md:px-9 md:py-8 text-white shadow-xl">
            <div class="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-sky-500/15"></div>
            <div class="absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-indigo-500/15"></div>
            <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div class="max-w-4xl">
                    <p class="uppercase tracking-[0.18em] text-sky-300 text-xs font-black mb-2">Créditos del proyecto</p>
                    <h2 class="text-xl md:text-2xl font-black leading-snug">Diseño y desarrollo de las calculadoras estadísticas</h2>
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
        </div>`,t}function Ya(){if(!Ou()&&!Du()||document.querySelector("[data-creditos-calculadoras='true']"))return;const t=document.querySelector("main, #app, [data-router-view]");t&&t.appendChild(Nu())}function $u(){new MutationObserver(Ya).observe(document.body,{childList:!0,subtree:!0}),Ya()}const ju={"regresión lineal simple":{ruta:"calculadoraRegresion",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y un predictor."},"regresión lineal múltiple":{ruta:"calculadoraRegresion",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y dos o más predictores."},"regresión logística binaria simple":{ruta:"calculadoraRegresionLogistica",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y un predictor."},"regresión logística binaria múltiple":{ruta:"calculadoraRegresionLogistica",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y dos o más predictores."},"regresión de poisson":{ruta:"calculadoraRegresionConteo",tipo:"poisson",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo de Poisson con una variable dependiente formada por enteros no negativos."},"regresión binomial negativa":{ruta:"calculadoraRegresionConteo",tipo:"negativa",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo binomial negativo cuando exista sobredispersión respecto a Poisson."}};function zu(){const t=[...document.querySelectorAll("main h1")];for(const e of t){const a=e.textContent.trim().toLowerCase(),i=ju[a];if(i)return{encabezado:e,modelo:i}}return null}function Uu(t){const e=document.createElement("div"),a=t.clase==="amber",i=a?"border-amber-200":"border-rose-200",s=a?"bg-amber-50":"bg-rose-50",r=a?"text-amber-700":"text-rose-700",o=a?"bg-amber-600 hover:bg-amber-700":"bg-rose-700 hover:bg-rose-800";return e.dataset.ejecutarModeloRegresion="true",e.className=`mt-8 rounded-2xl border ${i} ${s} p-6`,e.innerHTML=`
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
                <p class="uppercase tracking-widest ${r} text-xs font-black mb-2">
                    Herramienta de modelización
                </p>
                <h2 class="text-xl font-black text-slate-900 mb-2">
                    Ejecute este modelo con sus propios datos
                </h2>
                <p class="text-slate-600 leading-relaxed">
                    ${t.texto} Obtendrá coeficientes, intervalos de confianza, diagnósticos gráficos, predicción e interpretación guiada.
                </p>
            </div>

            <button
                type="button"
                data-route-regresion="${t.ruta}"
                data-tipo-regresion="${t.tipo}"
                data-almacenamiento-regresion="${t.almacenamiento}"
                class="shrink-0 inline-flex items-center justify-center ${o} text-white font-black rounded-xl px-6 py-4 transition-colors shadow-lg"
            >
                Ejecutar este modelo
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </div>
    `,e.querySelector("button")?.addEventListener("click",n=>{const c=n.currentTarget,l=c.dataset.almacenamientoRegresion||"kernel-tipo-modelo-regresion";sessionStorage.setItem(l,c.dataset.tipoRegresion||""),window.location.hash=`/${c.dataset.routeRegresion}`}),e}function Qa(){const t=zu();if(!t)return;const e=t.encabezado.closest("section");if(!e||e.querySelector("[data-ejecutar-modelo-regresion='true']"))return;(e.querySelector("header + div")||e).appendChild(Uu(t.modelo))}function Fu(){new MutationObserver(Qa).observe(document.body,{childList:!0,subtree:!0}),Qa()}function $t(){document.querySelector("[data-selector-instrumento='true']")?.remove()}function qu(){$t();const t=document.createElement("div");t.dataset.selectorInstrumento="true",t.className=`
        fixed inset-0 z-[100]
        bg-slate-950/70 backdrop-blur-sm
        flex items-center justify-center
        p-4
    `,t.innerHTML=`
        <section
            class="w-full max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-selector-instrumento"
        >
            <header class="bg-slate-950 text-white px-6 py-7 md:px-9">
                <div class="flex items-start justify-between gap-5">
                    <div>
                        <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">
                            Tipo de instrumento
                        </p>
                        <h2 id="titulo-selector-instrumento" class="text-3xl font-black">
                            ¿Qué desea evaluar?
                        </h2>
                    </div>
                    <button
                        type="button"
                        data-action="cerrar-selector-instrumento"
                        class="rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-black hover:bg-white/20"
                        aria-label="Cerrar"
                    >
                        ×
                    </button>
                </div>
                <p class="text-slate-200 leading-relaxed mt-4 max-w-3xl">
                    Seleccione la herramienta según la naturaleza de las respuestas y el propósito del análisis.
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 md:p-9">
                <article class="rounded-3xl border border-amber-200 bg-amber-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                        Escala o cuestionario
                    </p>
                    <h3 class="text-2xl font-black text-slate-900 mb-3">
                        Cuestionarios y fiabilidad
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-5">
                        Para respuestas Likert, escalas de actitudes, percepción, motivación u otros constructos medidos mediante varios ítems.
                    </p>
                    <ul class="space-y-2 text-sm text-slate-700 mb-6">
                        <li>✓ Alfa de Cronbach y omega</li>
                        <li>✓ KR-20 para ítems 0/1</li>
                        <li>✓ Correlación ítem–total</li>
                        <li>✓ Bootstrap y redundancia</li>
                    </ul>
                    <button
                        type="button"
                        data-route-instrumento="calculadoraFiabilidadCuestionarios"
                        class="mt-auto rounded-xl bg-amber-600 px-6 py-4 text-white font-black hover:bg-amber-700 transition-colors"
                    >
                        Analizar cuestionario
                    </button>
                </article>

                <article class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Prueba de conocimientos
                    </p>
                    <h3 class="text-2xl font-black text-slate-900 mb-3">
                        Evaluación educativa
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-5">
                        Para exámenes con respuestas correctas e incorrectas, preguntas de opción múltiple y análisis de distractores.
                    </p>
                    <ul class="space-y-2 text-sm text-slate-700 mb-6">
                        <li>✓ Dificultad y discriminación</li>
                        <li>✓ Correlación punto-biserial</li>
                        <li>✓ KR-20 de la prueba</li>
                        <li>✓ Calidad de distractores</li>
                    </ul>
                    <button
                        type="button"
                        data-route-instrumento="calculadoraEvaluacionEducativa"
                        class="mt-auto rounded-xl bg-emerald-700 px-6 py-4 text-white font-black hover:bg-emerald-800 transition-colors"
                    >
                        Analizar prueba
                    </button>
                </article>
            </div>
        </section>
    `,t.addEventListener("click",e=>{const a=e.target.closest("[data-route-instrumento]")?.dataset.routeInstrumento;if(a){$t(),window.location.hash=`/${a}`;return}(e.target===t||e.target.closest("[data-action='cerrar-selector-instrumento']"))&&$t()}),document.body.appendChild(t),t.querySelector("[data-route-instrumento]")?.focus()}function Bu(t){t.target.closest("#asistente-pruebas [data-value='instrumento']")&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),qu())}function Vu(){document.addEventListener("click",Bu,!0)}function Ne(t,e){try{e()}catch(a){console.error(`[Kernel] No fue posible iniciar ${t}.`,a)}}function Hu(t){if(!t)return;const e=t.parentElement,a=e?.parentElement,i=document.querySelector("#main");a?.classList.add("relative","z-[200]","overflow-visible"),e?.classList.add("overflow-visible"),t.classList.remove("lg:z-auto","lg:z-[210]"),t.classList.add("overflow-visible","lg:z-[220]"),i?.classList.add("relative","z-0")}const xt=document.querySelector("#header"),Ve=document.querySelector("#navBar"),Xa=document.querySelector("#footer");xt&&(xt.innerHTML=ss());Ve&&(Ve.innerHTML=ns(),Hu(Ve));Xa&&(Xa.innerHTML=cs());Ne("la navegación",()=>{Ve&&xt&&bu(Ve,xt)});Ne("los gráficos de estadística descriptiva",Au);Ne("la exportación de estadística descriptiva",Lu);Ne("los créditos de las calculadoras",$u);Ne("la integración de regresión con el asistente",Fu);Ne("cuestionarios y fiabilidad en el asistente",Vu);export{fs as M,Gu as a,jd as c,$d as e,F as i};
