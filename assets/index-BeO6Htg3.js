const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AsistentePruebas-AX4vqLZX.js","./fichasMetodologicasTamanoMuestra-Bzm_BI0V.js","./CalculadoraDosGrupos-QPFgs7W4.js","./jstat-DiDocX-r.js","./CalculadoraDosMuestrasRelacionadas-CJ1RVWYl.js","./estadisticaDosMuestrasRelacionadas-C0D8qKdR.js","./CalculadoraTresOMasGrupos-CguCqVTZ.js","./CalculadoraTresOMasMedicionesRelacionadas-DlaD_ARg.js","./CalculadoraRelacionVariables-Di98coDP.js","./CalculadoraAsociacionCategorica-Bng203VQ.js","./BibliotecaMetodologica-DYcZHcBA.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const _t=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Ss(){return`
        <div class="flex w-full items-center justify-between gap-4">
            <a href="#/home" class="flex min-w-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100" aria-label="Ir a la portada de El Kernel">
                <img class="h-12 w-12 shrink-0 rounded-xl object-contain md:h-14 md:w-14" src="${_t}" alt="Logo del Grupo de Investigación El Kernel" title="El Kernel" />
                <span class="min-w-0">
                    <span class="block truncate text-xl font-black text-slate-950 md:text-2xl xl:text-3xl">El Kernel</span>
                    <span class="hidden text-xs font-semibold text-slate-500 sm:block">Investigación y servicios científicos</span>
                </span>
            </a>
            <button
                type="button"
                data-action="open-menu"
                aria-label="Abrir menú de navegación"
                aria-expanded="false"
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:hidden"
            >
                <i aria-hidden="true" class="bx bx-menu text-3xl"></i>
            </button>
        </div>
    `}function Ve(t,e,a,i=""){return`
        <li class="${i}">
            <button
                type="button"
                data-route="${t}"
                class="flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:w-auto lg:justify-center lg:px-2 lg:py-2 lg:text-sm xl:px-3 xl:text-base 2xl:text-lg"
            >
                <span>${e}</span>
                <i aria-hidden="true" class="bx ${a} shrink-0 text-2xl lg:text-xl"></i>
            </button>
        </li>
    `}function Ce(t,e,a){return`
        <li>
            <button
                type="button"
                data-route="${t}"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-[#0f5b5d] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 2xl:text-base"
            >
                <i aria-hidden="true" class="bx ${a} shrink-0 text-xl"></i>
                <span>${e}</span>
            </button>
        </li>
    `}function wa({id:t,etiqueta:e,icono:a,elementos:i}){return`
        <li data-submenu class="relative min-w-0">
            <button
                type="button"
                data-action="toggle-submenu"
                aria-expanded="false"
                aria-controls="${t}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:w-auto lg:px-2 lg:py-2 lg:text-sm xl:px-3 xl:text-base 2xl:text-lg"
            >
                <span class="flex items-center gap-2">
                    <i aria-hidden="true" class="bx ${a} shrink-0 text-2xl lg:text-xl"></i>
                    <span>${e}</span>
                </span>
                <i data-submenu-caret aria-hidden="true" class="bx bx-caret-down shrink-0 text-xl transition-transform"></i>
            </button>

            <ul
                id="${t}"
                data-submenu-panel
                class="relative z-[260] mt-2 hidden w-full flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-2xl lg:absolute lg:left-0 lg:top-full lg:z-[260] lg:mt-2 lg:w-72 lg:min-w-72"
            >
                ${i.join("")}
            </ul>
        </li>
    `}function _s(){return`
        <li class="mt-2 lg:mt-0 lg:ml-1">
            <button
                type="button"
                data-route="diagnosticoServicios"
                class="flex w-full items-center justify-between gap-3 rounded-xl bg-[#d5a54a] px-4 py-3 text-left text-base font-black text-[#06141a] shadow-md transition hover:bg-[#efc86f] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 lg:w-auto lg:justify-center lg:px-4 lg:py-2.5 lg:text-sm xl:text-base"
            >
                <span>Solicitar diagnóstico</span>
                <i aria-hidden="true" class="bx bx-right-arrow-alt shrink-0 text-2xl"></i>
            </button>
        </li>
    `}function Ts(){return`
        <div class="mb-5 flex w-full items-center justify-between border-b border-slate-200 px-3 pb-4 lg:hidden">
            <div>
                <p class="text-2xl font-black text-slate-950">El Kernel</p>
                <p class="mt-1 text-xs font-semibold text-slate-500">Investigación y servicios científicos</p>
            </div>
            <button type="button" data-action="close-navBar" aria-label="Cerrar navegación" class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                <i aria-hidden="true" class="bx bx-x text-3xl"></i>
            </button>
        </div>

        <ul class="relative z-[230] flex min-h-full w-full flex-col gap-1 p-3 text-black lg:min-h-0 lg:flex-row lg:items-center lg:justify-end lg:gap-0.5 lg:p-0 xl:gap-1">
            ${Ve("home","Portada","bx-home")}
            ${Ve("servicios","Servicios","bx-grid-alt")}
            ${Ve("laboratorioKernel","Laboratorio","bx-bar-chart-alt-2")}

            ${wa({id:"submenu-nuestro-trabajo",etiqueta:"Investigación",icono:"bx-briefcase-alt-2",elementos:[Ce("lineas","Líneas de investigación","bx-git-branch"),Ce("proyectos","Proyectos","bx-bulb"),Ce("publicaciones","Publicaciones","bx-book-open"),Ce("herramientas","Herramientas","bx-wrench")]})}

            ${wa({id:"submenu-nosotros",etiqueta:"Nosotros",icono:"bx-group",elementos:[Ce("quienesSomos","Quiénes somos","bx-info-circle"),Ce("equipment","Equipo","bx-group")]})}

            ${Ve("noticias","Noticias","bx-news","lg:hidden 2xl:block")}
            ${Ve("contacto","Contacto","bx-envelope","lg:hidden xl:block")}
            ${_s()}
        </ul>
    `}function Ps(){const t=new Date().getFullYear();return`
        <div class="border-b border-white/10 bg-[#071820]">
            <div class="mx-auto grid max-w-[1600px] grid-cols-1 gap-9 px-5 py-10 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10">
                <section class="text-white" aria-labelledby="titulo-footer-kernel">
                    <div class="flex items-center gap-4">
                        <img class="h-16 w-16 rounded-2xl bg-white p-1.5 object-contain shadow-lg" src="${_t}" alt="Logo del Grupo de Investigación El Kernel" loading="lazy" />
                        <div>
                            <h2 id="titulo-footer-kernel" class="text-xl font-black">Grupo de Investigación El Kernel</h2>
                            <p class="mt-1 text-sm font-semibold text-[#efc86f]">Rigor matemático para investigar, enseñar y decidir mejor.</p>
                        </div>
                    </div>
                    <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-300">Matemática aplicada y computacional, estadística, ciencia de datos, educación, investigación e innovación al servicio de universidades, instituciones públicas, empresas y equipos científicos.</p>
                    <a href="#/diagnosticoServicios" class="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#d5a54a] px-5 py-3 font-black text-[#071820] shadow-md transition hover:bg-[#efc86f]">Solicitar diagnóstico <span aria-hidden="true">→</span></a>
                </section>

                <nav aria-label="Servicios y plataformas">
                    <h2 class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">Servicios</h2>
                    <ul class="mt-4 space-y-3 text-sm font-semibold text-slate-300">
                        <li><a href="#/servicios" class="hover:text-white">Catálogo de 20 servicios</a></li>
                        <li><a href="#/diagnosticoServicios" class="hover:text-white">Diagnóstico inicial</a></li>
                        <li><a href="#/laboratorioKernel" class="hover:text-white">Laboratorio Inteligente</a></li>
                        <li><a href="#/herramientas" class="hover:text-white">Herramientas científicas</a></li>
                    </ul>
                </nav>

                <nav aria-label="Investigación e institución">
                    <h2 class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">El grupo</h2>
                    <ul class="mt-4 space-y-3 text-sm font-semibold text-slate-300">
                        <li><a href="#/quienesSomos" class="hover:text-white">Quiénes somos</a></li>
                        <li><a href="#/equipment" class="hover:text-white">Equipo</a></li>
                        <li><a href="#/lineas" class="hover:text-white">Líneas de investigación</a></li>
                        <li><a href="#/proyectos" class="hover:text-white">Proyectos</a></li>
                        <li><a href="#/publicaciones" class="hover:text-white">Publicaciones</a></li>
                    </ul>
                </nav>

                <section class="text-white" aria-labelledby="titulo-contacto-footer">
                    <h2 id="titulo-contacto-footer" class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">Contacto y principios</h2>
                    <a href="mailto:mleonardos@unapec.edu.do" class="mt-4 block break-all text-base font-black hover:text-emerald-200">mleonardos@unapec.edu.do</a>
                    <p class="mt-2 text-sm text-slate-300">República Dominicana</p>
                    <div class="mt-5 flex flex-wrap gap-2">
                        ${["Confidencialidad","Integridad académica","Protección de datos","Reproducibilidad"].map(e=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">${e}</span>`).join("")}
                    </div>
                    <nav class="mt-6" aria-label="Instituciones vinculadas">
                        <ul class="flex flex-wrap gap-3">
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer">UASD</a></li>
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer">UNAPEC</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </div>
        <div class="bg-[#041014] px-5 py-5 text-xs text-slate-400 md:px-8 md:text-sm">
            <div class="mx-auto flex max-w-[1600px] flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p>© ${t} Grupo de Investigación El Kernel — Todos los derechos reservados.</p>
                <p>Los alcances, responsables, aliados, tiempos y tarifas se definen después del diagnóstico inicial.</p>
            </div>
        </div>
    `}function Ls(t){if(!t||t.dataset.submenusInicializados==="true")return;const e=[...t.querySelectorAll("[data-submenu]")],a=window.matchMedia("(min-width: 1024px)");function i(o){return{disparador:o.querySelector(":scope > [data-action='toggle-submenu']"),panel:o.querySelector(":scope > [data-submenu-panel]"),indicador:o.querySelector(":scope > [data-action='toggle-submenu'] [data-submenu-caret]")}}function s(o,n){const{disparador:c,panel:l,indicador:u}=i(o);!c||!l||(c.setAttribute("aria-expanded",String(n)),l.classList.toggle("hidden",!n),l.classList.toggle("flex",n),u?.classList.toggle("rotate-180",n))}function r(o=null){e.forEach(n=>{n!==o&&s(n,!1)})}e.forEach(o=>{const{disparador:n,panel:c}=i(o);!n||!c||(n.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation();const u=n.getAttribute("aria-expanded")!=="true";r(o),s(o,u)}),o.addEventListener("mouseenter",()=>{a.matches&&(r(o),s(o,!0))}),o.addEventListener("mouseleave",()=>{a.matches&&s(o,!1)}),c.addEventListener("click",l=>{l.target.closest("[data-route], [data-home-section]")&&s(o,!1)}))}),t.addEventListener("click",o=>{o.target.closest("[data-route], [data-home-section]")&&r()}),document.addEventListener("click",o=>{t.contains(o.target)||r()}),document.addEventListener("keydown",o=>{if(o.key!=="Escape")return;const n=t.querySelector("[data-action='toggle-submenu'][aria-expanded='true']");r(),n?.focus()}),a.addEventListener("change",()=>r()),t.dataset.submenusInicializados="true"}const Ms="[data-nav-overlay]",gi="(min-width: 1024px)",bi=["invisible","pointer-events-none"];function sa(){return window.matchMedia(gi).matches}function ra(t){return t?._disparadorMenu||document.querySelector('[data-action="open-menu"]')}function hi(){document.querySelector(Ms)?.remove()}function xi(t){t?.classList.remove(...bi),t?.setAttribute("aria-expanded","false")}function Rs(t){t?.classList.add(...bi),t?.setAttribute("aria-expanded","true")}function vi(){document.body.style.overflow="",hi()}function Ea(t){if(!t)return;vi();const e=ra(t);xi(e),t.classList.remove("block"),t.classList.add("hidden"),sa()?t.setAttribute("aria-hidden","false"):t.setAttribute("aria-hidden","true")}function Tt(t){if(!t)return;t.classList.remove("block"),t.classList.add("hidden"),vi();const e=ra(t);xi(e),t.setAttribute("aria-hidden",sa()?"false":"true")}function Ds(t,e){if(!t||sa())return;t._disparadorMenu=e||ra(t),t.classList.remove("hidden"),t.classList.add("block"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",Rs(t._disparadorMenu),hi();const a=document.createElement("button");a.type="button",a.dataset.navOverlay="true",a.className="fixed inset-0 z-[190] bg-slate-950/55 backdrop-blur-[2px] lg:hidden",a.setAttribute("aria-label","Cerrar menú de navegación"),a.addEventListener("click",()=>Tt(t),{once:!0}),document.body.appendChild(a),window.requestAnimationFrame(()=>{t.querySelector('[data-action="close-navBar"]')?.focus()})}function Os(t,e){if(!t||!e)return;t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls","navBar"),e._disparadorMenu=t,Ea(e),t.addEventListener("click",()=>Ds(e,t)),window.matchMedia(gi).addEventListener("change",()=>{Ea(e)}),document.addEventListener("keydown",i=>{i.key!=="Escape"||e.classList.contains("hidden")||(Tt(e),t.focus?.())})}function $s(t){if(!t)return;const e=t.querySelector('[data-action="close-navBar"]');e&&e.addEventListener("click",()=>Tt(t))}const Ns="modulepreload",js=function(t,e){return new URL(t,e).href},ka={},L=function(e,a,i){let s=Promise.resolve();if(a&&a.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),c=n?.nonce||n?.getAttribute("nonce");s=l(a.map(u=>{if(u=js(u,i),u in ka)return;ka[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let x=o.length-1;x>=0;x--){const k=o[x];if(k.href===u&&(!d||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Ns,d||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),d)return new Promise((x,k)=>{p.addEventListener("load",x),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return s.then(o=>{for(const n of o||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})},Pt=""+new URL("sep-BCMURSaM.png",import.meta.url).href,Lt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,yi=""+new URL("rad-B3ff1btG.png",import.meta.url).href,oa=""+new URL("ant-D2J2W27b.png",import.meta.url).href,wi=""+new URL("mar-Cru0HERG.png",import.meta.url).href,Mt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,Xe=""+new URL("jos-BToFZdIf.png",import.meta.url).href,ne=[{img:Pt,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:Lt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:yi,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:oa,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:wi,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:Mt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:Xe,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}],G=[{id:1,img:Pt,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:oa,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:Lt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:Mt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:Xe,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}],_e=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}],J=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}],zs=Object.freeze([Object.freeze({id:"estadistica-descriptiva",titulo:"Estadística descriptiva",descripcion:"Media, mediana, variabilidad, cuartiles, asimetría, valores atípicos y gráficos exploratorios.",icono:"bx-bar-chart-alt-2",fondoIcono:"bg-sky-100",colorIcono:"text-sky-700",bordeIcono:"border-sky-200",ruta:"calculadoraEstadisticaDescriptiva"}),Object.freeze({id:"comparacion-grupos",titulo:"Comparación de grupos",descripcion:"Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.",icono:"bx-group",fondoIcono:"bg-indigo-100",colorIcono:"text-indigo-700",bordeIcono:"border-indigo-200",ruta:"comparacionGrupos"}),Object.freeze({id:"correlacion-asociacion",titulo:"Correlación y asociación",descripcion:"Pearson, Spearman, Kendall y medidas de asociación para variables cuantitativas y categóricas.",icono:"bx-line-chart",fondoIcono:"bg-violet-100",colorIcono:"text-violet-700",bordeIcono:"border-violet-200",ruta:"correlacionAsociacion"}),Object.freeze({id:"cuestionarios-fiabilidad",titulo:"Cuestionarios y fiabilidad",descripcion:"Alfa de Cronbach, omega de McDonald, recodificación, análisis de ítems y diagnósticos.",icono:"bx-list-check",fondoIcono:"bg-amber-100",colorIcono:"text-amber-700",bordeIcono:"border-amber-200",ruta:"calculadoraFiabilidadCuestionarios"}),Object.freeze({id:"evaluacion-educativa",titulo:"Evaluación educativa",descripcion:"Dificultad, discriminación, punto-biserial, KR-20, distractores y análisis de puntuaciones.",icono:"bx-edit-alt",fondoIcono:"bg-emerald-100",colorIcono:"text-emerald-700",bordeIcono:"border-emerald-200",ruta:"calculadoraEvaluacionEducativa"}),Object.freeze({id:"tamano-muestra",titulo:"Tamaño de muestra",descripcion:"Tamaño mínimo, potencia, pérdidas, población finita, efecto de diseño y análisis de sensibilidad.",icono:"bx-ruler",fondoIcono:"bg-cyan-100",colorIcono:"text-cyan-700",bordeIcono:"border-cyan-200",ruta:"calculadoraTamanoMuestraPotencia"}),Object.freeze({id:"regresion",titulo:"Regresión",descripcion:"Modelos lineales, múltiples, logísticos y de conteo con inferencia, diagnóstico e interpretación guiada.",icono:"bx-trending-up",fondoIcono:"bg-rose-100",colorIcono:"text-rose-700",bordeIcono:"border-rose-200",ruta:"regresionModelos"}),Object.freeze({id:"asistente-pruebas",titulo:"¿Qué prueba debo utilizar?",descripcion:"Asistente guiado para seleccionar el procedimiento más adecuado según el objetivo y el diseño.",icono:"bx-help-circle",fondoIcono:"bg-blue-100",colorIcono:"text-blue-700",bordeIcono:"border-blue-200",ruta:"asistentePruebas"}),Object.freeze({id:"biblioteca-metodologica",titulo:"Biblioteca metodológica",descripcion:"Fichas buscables con supuestos, hipótesis, tamaños del efecto, reporte, alternativas y errores frecuentes.",icono:"bx-library",fondoIcono:"bg-slate-200",colorIcono:"text-slate-700",bordeIcono:"border-slate-300",ruta:"bibliotecaMetodologica"})]),He=Object.freeze({titulo:"Catálogo institucional de servicios profesionales y académicos",subtitulo:"Matemática aplicada y computacional | Estadística | Ciencia de datos | Educación | Innovación",lema:"Rigor matemático para investigar, enseñar y decidir mejor.",introduccion:"En Grupo El Kernel convertimos problemas complejos en soluciones verificables mediante matemática aplicada, computación científica, estadística, ciencia de datos y educación. Trabajamos con universidades, centros educativos, instituciones públicas, empresas y equipos de investigación, desde el diagnóstico y el diseño hasta la implementación, validación y transferencia de capacidades.",notaAlcance:"Cada solicitud se delimita antes de iniciar. Se validan el responsable técnico, la capacidad disponible, los aliados requeridos, los entregables, los tiempos, las tarifas y cualquier habilitación profesional o regulatoria aplicable."}),Wt=Object.freeze([{id:"todos",nombre:"Todos los servicios",rango:"1–20"},{id:"investigacion",nombre:"Investigación, tesis y producción científica",rango:"1–3"},{id:"matematica-datos",nombre:"Matemática aplicada, computación, datos y optimización",rango:"4–8"},{id:"riesgo-finanzas",nombre:"Riesgo, finanzas, economía y políticas públicas",rango:"9–11"},{id:"educacion",nombre:"Educación, posgrado y fortalecimiento académico",rango:"12–16"},{id:"tecnologia-transferencia",nombre:"Tecnología, soluciones sectoriales y transferencia",rango:"17–20"}]),Us=Object.freeze([{titulo:"Rigor científico",descripcion:"Métodos explícitos, supuestos documentados, validación y revisión de calidad."},{titulo:"Soluciones a la medida",descripcion:"Cada intervención se adapta al problema, los datos, el sector y las capacidades del cliente."},{titulo:"Reproducibilidad",descripcion:"Código, datos, procedimientos y resultados organizados para poder verificarse y actualizarse."},{titulo:"Transferencia de capacidades",descripcion:"El servicio incluye formación, documentación y apropiación por parte del equipo usuario."},{titulo:"Interdisciplinariedad",descripcion:"La matemática se conecta con educación, finanzas, actuaría, economía, ciencia, tecnología e industria."},{titulo:"Confidencialidad y ética",descripcion:"Los proyectos pueden ejecutarse bajo acuerdos de confidencialidad y reglas de integridad académica."}]),Ei=Object.freeze(["Universidades, institutos superiores, centros de investigación y escuelas de posgrado.","Centros educativos de secundaria, redes escolares, distritos y organismos de formación docente.","Ministerios, ayuntamientos, entidades reguladoras, observatorios y organismos públicos.","Aseguradoras, administradoras de fondos, bancos, cooperativas, fintech y organizaciones financieras.","Empresas de servicios, industria, logística, energía, tecnología, consultoría y organizaciones sin fines de lucro.","Investigadores, docentes, estudiantes de posgrado, equipos técnicos y comunidades profesionales."]),qs=Object.freeze([{numero:1,titulo:"Confidencialidad",descripcion:"acuerdos de confidencialidad, control de acceso, custodia y devolución o eliminación segura de información."},{numero:2,titulo:"Integridad académica",descripcion:"asesoría que fortalece el trabajo del autor sin suplantarlo, fabricar resultados ni encubrir plagio."},{numero:3,titulo:"Protección de datos",descripcion:"minimización, anonimización, documentación de permisos y uso proporcional de información sensible."},{numero:4,titulo:"Reproducibilidad",descripcion:"procedimientos, datos, versiones, código, parámetros y decisiones suficientemente documentados."},{numero:5,titulo:"Validación y control de calidad",descripcion:"revisión técnica, pruebas, sensibilidad, comparación y trazabilidad de cambios."},{numero:6,titulo:"Uso responsable de inteligencia artificial",descripcion:"supervisión humana, verificación, explicabilidad, seguridad y gestión de sesgos."},{numero:7,titulo:"Transferencia de capacidades",descripcion:"manuales, talleres, sesiones de entrega, acompañamiento y materiales reutilizables."},{numero:8,titulo:"Interdisciplinariedad",descripcion:"incorporación de expertos sectoriales cuando el problema requiera conocimiento clínico, jurídico, ingenieril, ambiental u otro."},{numero:9,titulo:"Accesibilidad e inclusión",descripcion:"materiales y procesos comprensibles para diversos perfiles y condiciones de aprendizaje."},{numero:10,titulo:"Cumplimiento profesional",descripcion:"dictámenes, firmas o certificaciones reguladas solo por profesionales con la habilitación correspondiente."}]),Fs=Object.freeze([{titulo:"Diagnóstico breve",descripcion:"evaluación inicial con hallazgos, prioridades y hoja de ruta."},{titulo:"Consultoría por producto",descripcion:"entrega definida: modelo, informe, programa, tablero, protocolo, software o plan."},{titulo:"Proyecto integral",descripcion:"trabajo por fases desde el diagnóstico hasta la implementación y transferencia."},{titulo:"Acompañamiento periódico",descripcion:"bolsa de horas o iguala para consultas, revisión, análisis y seguimiento."},{titulo:"Formación y talleres",descripcion:"cursos abiertos o cerrados, presenciales, virtuales o híbridos."},{titulo:"Co-desarrollo",descripcion:"equipo mixto con personal del cliente para construir y apropiarse de la solución."},{titulo:"Revisión experta independiente",descripcion:"dictamen técnico, validación de modelos, auditoría metodológica o evaluación externa."},{titulo:"Alianza institucional",descripcion:"programas, observatorios, laboratorios o agendas de largo plazo con gobernanza compartida."}]),Aa=Object.freeze([{numero:1,titulo:"Exploración",descripcion:"reunión inicial, contexto, necesidad, usuarios y decisión que debe apoyarse."},{numero:2,titulo:"Alcance",descripcion:"objetivos, preguntas, datos, entregables, exclusiones, cronograma y responsabilidades."},{numero:3,titulo:"Plan técnico",descripcion:"métodos, equipo, validación, riesgos, gestión de datos y criterios de aceptación."},{numero:4,titulo:"Ejecución",descripcion:"análisis, modelización, desarrollo, formación o diseño con entregas parciales."},{numero:5,titulo:"Validación",descripcion:"pruebas, revisión experta, sensibilidad, retroalimentación y correcciones."},{numero:6,titulo:"Entrega y transferencia",descripcion:"productos finales, documentación, capacitación y repositorios acordados."},{numero:7,titulo:"Seguimiento",descripcion:"medición de uso, resultados, mantenimiento, actualización o nueva fase."}]),Ca=Object.freeze([{numero:1,titulo:"Proyecto de investigación listo para postulación",descripcion:"Diagnóstico del problema, revisión de evidencia, formulación, metodología, cronograma, riesgos, indicadores, presupuesto conceptual y documento de convocatoria."},{numero:2,titulo:"Tesis con rigor metodológico y computacional",descripcion:"Ruta de trabajo, matriz de coherencia, diseño, análisis estadístico o matemático, revisión de código, interpretación, estructura, defensa y artículo derivado."},{numero:3,titulo:"Diseño integral de maestría o posgrado",descripcion:"Estudio de viabilidad, benchmarking, perfil, competencias, malla, sílabos, investigación, profesorado, reglamentos, indicadores y expediente técnico."},{numero:4,titulo:"Feria científica STEM institucional",descripcion:"Plan maestro, categorías, reglamento, rúbricas, banco de proyectos, formación de mentores y jurados, acompañamiento, evento y evaluación."},{numero:5,titulo:"Diplomado a la medida",descripcion:"Diagnóstico, diseño curricular, módulos, materiales, facilitadores, evaluación, certificación y reporte de resultados."},{numero:6,titulo:"Modelo actuarial o financiero con tablero",descripcion:"Preparación de datos, formulación, estimación, validación, escenarios, stress testing, visualización, manual técnico y transferencia."},{numero:7,titulo:"Solución de optimización y analítica",descripcion:"Mapeo del proceso, modelo de decisión, datos, algoritmo, piloto, comparación de escenarios, tablero y plan de implementación."},{numero:8,titulo:"Laboratorio u observatorio desde cero",descripcion:"Misión, líneas, gobernanza, procesos, tecnología, indicadores, portafolio, plan de lanzamiento, pilotos y acompañamiento inicial."}]),Bs=Object.freeze([{numero:1,id:"investigacion-y-proyectos",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Investigación científica y gestión de I+D+i",tituloCorto:"Investigación y proyectos",resumen:"Formulamos, evaluamos y acompañamos proyectos de I+D+i, agendas, convocatorias, consorcios y sistemas de seguimiento.",descripcion:"Acompañamiento integral para transformar ideas y necesidades institucionales en proyectos rigurosos, financiables, ejecutables y evaluables.",subservicios:["Diagnóstico de capacidades de investigación: evaluación de líneas, talento, infraestructura, producción científica, brechas y oportunidades de colaboración","Formulación de problemas y preguntas: delimitación del objeto de estudio, preguntas, hipótesis, objetivos, variables y contribución esperada","Estados del arte y mapas de evidencia: búsquedas estructuradas, revisiones de alcance, análisis bibliométricos y detección de vacíos de conocimiento","Protocolos y planes metodológicos: diseño de fases, métodos, fuentes, instrumentos, cronogramas, indicadores, riesgos y estrategias de validación","Propuestas para fondos y convocatorias: redacción técnica, teoría de cambio, presupuesto conceptual, plan de trabajo, impacto, sostenibilidad y matriz de resultados","Agendas, líneas y portafolios de investigación: priorización temática y organización de proyectos de corto, mediano y largo plazo","Monitoreo y evaluación de proyectos: tableros de avance, hitos, indicadores, control de calidad, gestión de riesgos y evaluación de resultados","Redes, alianzas y consorcios: estructuración de equipos interdisciplinarios, roles, gobernanza, coordinación y acuerdos de colaboración","Planes de datos y reproducibilidad: organización de datos, diccionarios, versiones, scripts, trazabilidad, respaldo y documentación técnica","Evaluación científica externa: revisión por expertos de proyectos, productos, centros, líneas o programas de investigación"],entregables:"diagnósticos, protocolos, propuestas de financiamiento, matrices de marco lógico, agendas de investigación, informes de seguimiento y evaluaciones técnicas.",icono:"bx-grid-alt"},{numero:2,id:"tesis-e-investigacion-academica",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Asesoría de tesis y trabajos de investigación",tituloCorto:"Tesis e investigación académica",resumen:"Orientamos tesis y trabajos científicos con rigor metodológico, matemático, estadístico y computacional, respetando la autoría.",descripcion:"Orientación ética y especializada para tesis de grado, maestría y doctorado, así como trabajos finales, monografías y proyectos de investigación aplicada.",subservicios:["Selección y delimitación del tema: conversión de un interés general en un problema viable, relevante y abordable","Coherencia entre problema, objetivos e hipótesis: revisión de alineación lógica, alcance y factibilidad","Diseño metodológico: elección justificada de enfoques cuantitativos, cualitativos, mixtos, teóricos, computacionales o experimentales","Muestreo e instrumentos: tamaño muestral, planes de selección, construcción, pilotaje, validez y confiabilidad","Modelización matemática y análisis estadístico: selección de modelos, supuestos, estimación, contraste, sensibilidad e interpretación","Programación, simulación y depuración: orientación y revisión de código en Python, R, MATLAB, Julia, Mathematica u otros entornos pertinentes","Interpretación y discusión de resultados: conexión de hallazgos con objetivos, literatura, limitaciones e implicaciones","Estructura y redacción académica: organización de capítulos, claridad argumental, consistencia terminológica, tablas, figuras y anexos","Preparación de defensa: guion, diapositivas, preguntas probables, simulación de sustentación y mejora de la comunicación oral","Conversión de tesis en publicación: selección de resultados publicables y adaptación a artículo, capítulo, ponencia o informe técnico"],entregables:"hojas de ruta, matrices de coherencia, protocolos, scripts comentados, informes de resultados, planes de defensa y manuscritos derivados. La asesoría no sustituye la autoría ni la responsabilidad académica del tesista.",icono:"bx-book-open"},{numero:3,id:"publicacion-cientifica",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Publicación, edición y comunicación científica",tituloCorto:"Publicación científica",resumen:"Fortalecemos artículos, libros, informes, LaTeX, tablas, figuras, bibliografía y respuestas a revisores.",descripcion:"Servicios para elevar la calidad técnica, expositiva y editorial de productos científicos, sin alterar la autoría ni ocultar conflictos de interés.",subservicios:["Arquitectura de manuscritos: organización de artículos, capítulos, libros, notas técnicas, reportes y documentos de trabajo","Selección de revista o editorial: análisis de alcance, indexación, audiencia, políticas, tiempos, costos y señales de calidad","Edición científica y matemática: claridad, precisión, consistencia de símbolos, notación, definiciones, teoremas, algoritmos y demostraciones","Tablas, figuras y visualizaciones: rediseño para legibilidad, coherencia gráfica, comparabilidad y cumplimiento editorial","Maquetación en LaTeX y Word: plantillas, estilos, referencias cruzadas, ecuaciones, bibliografía y preparación de archivos finales","Gestión bibliográfica: depuración de referencias, normalización de estilos, DOI, bases de datos y control de correspondencia entre citas y lista final","Respuesta a revisores: matrices de cambios, cartas de respuesta y revisión de consistencia entre observaciones y modificaciones","Integridad y ética de publicación: autoría, originalidad, declaración de datos, conflictos, uso responsable de herramientas digitales y buenas prácticas","Revisión técnica bilingüe: control conceptual y terminológico en español e inglés, con coordinación de traducción especializada cuando proceda","Memorias y productos de eventos: edición de resúmenes, actas, proceedings, posters, presentaciones y colecciones temáticas"],entregables:"manuscritos editados, plantillas, cartas a revisores, gráficos publicables, bibliografías depuradas, posters, presentaciones y memorias.",icono:"bx-edit-alt"}]),Vs=Object.freeze([{numero:4,id:"modelizacion-y-simulacion",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Modelización matemática y simulación",tituloCorto:"Modelización y simulación",resumen:"Construimos modelos deterministas y estocásticos, ecuaciones diferenciales, escenarios y análisis de sensibilidad.",descripcion:"Construcción de representaciones matemáticas para comprender sistemas, comparar escenarios, estimar parámetros y apoyar decisiones.",subservicios:["Modelos deterministas: formulación de relaciones estructurales para fenómenos físicos, sociales, económicos, educativos o empresariales","Modelos estocásticos: incorporación explícita de incertidumbre, aleatoriedad, riesgo y variabilidad","Ecuaciones diferenciales ordinarias: modelos dinámicos continuos, sistemas acoplados, estabilidad, calibración y simulación","Ecuaciones diferenciales parciales: difusión, transporte, ondas, reacción-difusión y otros procesos espacio-temporales","Sistemas dinámicos y no lineales: equilibrios, bifurcaciones, estabilidad local, sensibilidad y comportamiento cualitativo","Problemas inversos y estimación de parámetros: identificación de parámetros a partir de observaciones y evaluación de identificabilidad","Análisis de sensibilidad e incertidumbre: cuantificación del efecto de supuestos, parámetros, datos y escenarios","Simulación Monte Carlo: propagación de incertidumbre, estimación de distribuciones y evaluación probabilística de resultados","Simulación de escenarios: comparación de políticas, estrategias, condiciones iniciales y eventos extremos","Calibración y validación: contraste del modelo con datos, métricas de ajuste, validación cruzada y análisis de robustez"],entregables:"modelos conceptuales y matemáticos, ecuaciones, supuestos, códigos de simulación, análisis de sensibilidad, escenarios y reportes de validación.",icono:"bx-atom"},{numero:5,id:"matematica-computacional",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Análisis numérico y matemática computacional",tituloCorto:"Matemática computacional",resumen:"Diseñamos y analizamos métodos numéricos, algoritmos iterativos, álgebra lineal, EDO, EDP y pruebas de rendimiento.",descripcion:"Diseño, análisis e implementación de métodos numéricos eficientes, estables y verificables para problemas científicos y tecnológicos.",subservicios:["Ecuaciones y sistemas no lineales: selección, diseño y comparación de métodos iterativos para raíces simples o múltiples","Métodos iterativos de alto orden: análisis de convergencia, eficiencia, estabilidad y experimentación computacional","Álgebra lineal numérica: sistemas lineales, factorizaciones, autovalores, condicionamiento, matrices dispersas y gran escala","Análisis matricial: propiedades espectrales, perturbaciones, normas, sensibilidad y estructuras especiales","Integración y diferenciación numérica: cuadraturas, aproximación de derivadas, interpolación y control de error","Resolución numérica de EDO y EDP: diferencias finitas, elementos finitos, métodos espectrales y esquemas adaptativos","Convergencia, estabilidad y error: demostraciones, estimaciones a priori y a posteriori, consistencia y robustez","Computación dispersa y alta dimensionalidad: reducción de memoria, precondicionamiento, paralelización y estrategias de escalamiento","Benchmarking de algoritmos: protocolos reproducibles, perfiles de rendimiento, análisis estadístico y comparación justa","Prototipos de computación científica: implementaciones documentadas para validar ideas, métodos y resultados"],entregables:"algoritmos, pruebas de convergencia, códigos, bancos de prueba, perfiles de rendimiento, documentación técnica y artículos metodológicos.",icono:"bx-calculator"},{numero:6,id:"optimizacion",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Optimización e investigación de operaciones",tituloCorto:"Optimización",resumen:"Resolvemos problemas de asignación, logística, planificación, portafolios, procesos y decisiones bajo restricciones.",descripcion:"Soluciones matemáticas para asignar recursos, reducir costos, mejorar rendimiento y elegir alternativas bajo restricciones.",subservicios:["Optimización lineal y no lineal: formulación de funciones objetivo, restricciones, condiciones de optimalidad y solución computacional","Optimización con y sin restricciones: métodos de Newton, cuasi-Newton, gradiente, penalización, barreras y estrategias híbridas","Optimización entera y combinatoria: decisiones discretas, selección, asignación, cobertura, empaquetamiento y diseño de redes","Optimización multiobjetivo: frentes de Pareto, ponderación, preferencias y análisis de compromisos","Optimización estocástica y robusta: decisiones bajo incertidumbre, escenarios y protección frente a variaciones","Ruteo, logística y programación: rutas, horarios, turnos, secuencias, transporte y distribución","Asignación de recursos: personal, presupuesto, aulas, equipos, inventarios, capacidad y prioridades","Optimización de portafolios y activos-pasivos: retorno, riesgo, liquidez, duración, restricciones y escenarios","Optimización de procesos y parámetros: calibración, diseño, control, experimentos y mejora del desempeño","Selección de solver y estrategia: comparación de algoritmos, ajuste de hiperparámetros, escalabilidad y validación de soluciones"],entregables:"modelos de decisión, formulaciones matemáticas, prototipos, soluciones computacionales, análisis de escenarios y tableros de recomendación.",icono:"bx-trending-up"},{numero:7,id:"estadistica-aplicada",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Estadística aplicada y metodología de la investigación",tituloCorto:"Estadística aplicada",resumen:"Diseñamos estudios, muestras e instrumentos; analizamos datos y entregamos informes reproducibles y comprensibles.",descripcion:"Apoyo integral para diseñar estudios, producir datos confiables y convertirlos en evidencia interpretada correctamente.",subservicios:["Diseño de estudios: planes observacionales, experimentales, cuasiexperimentales, longitudinales, transversales y mixtos","Muestreo y potencia estadística: marcos muestrales, tamaños de muestra, precisión, efecto mínimo detectable y estrategias de selección","Diseño y validación de instrumentos: escalas, cuestionarios, rúbricas, validez de contenido y constructo, confiabilidad y análisis de ítems","Calidad y preparación de datos: depuración, codificación, datos faltantes, atípicos, consistencia y diccionarios de variables","Análisis descriptivo y exploratorio: resúmenes, visualizaciones, asociaciones, patrones, segmentaciones y perfiles","Regresión y análisis multivariado: modelos lineales y generalizados, componentes, factores, clasificación, conglomerados y modelos mixtos","Series de tiempo y pronósticos: tendencia, estacionalidad, intervención, volatilidad y evaluación predictiva","Supervivencia y tiempo hasta evento: curvas, riesgos, censura, modelos proporcionales y análisis de duración","Métodos bayesianos y espaciales: inferencia con información previa, modelos jerárquicos y análisis georreferenciado","Informes y transferencia estadística: scripts reproducibles, interpretación no técnica, talleres y acompañamiento a equipos"],entregables:"planes de análisis, bases depuradas, scripts, tablas, gráficos, informes estadísticos, anexos metodológicos y sesiones de capacitación.",icono:"bx-bar-chart-alt-2"},{numero:8,id:"ciencia-de-datos-e-ia",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Ciencia de datos e inteligencia artificial",tituloCorto:"Ciencia de datos e IA",resumen:"Desarrollamos modelos predictivos, tableros, automatizaciones, aprendizaje automático y soluciones de inteligencia artificial responsable.",descripcion:"Diseño de soluciones basadas en datos para predicción, clasificación, segmentación, automatización y apoyo a la decisión.",subservicios:["Diagnóstico de madurez de datos: evaluación de fuentes, calidad, disponibilidad, procesos, capacidades y casos de uso prioritarios","Ingeniería y canalización de datos: integración, transformación, documentación y automatización de flujos analíticos","Tableros e inteligencia de negocio: indicadores, visualización interactiva, alertas y seguimiento de desempeño","Aprendizaje automático predictivo: regresión, clasificación, segmentación, recomendación y selección de variables","Aprendizaje profundo: redes neuronales para datos tabulares, imágenes, señales, secuencias y problemas de alta complejidad","Procesamiento de lenguaje natural: clasificación de textos, extracción de información, análisis temático y asistencia documental","Visión por computadora: clasificación, detección, segmentación y análisis de imágenes en proyectos pertinentes","Pronóstico, anomalías y fraude: detección temprana de patrones atípicos, riesgos, fallos o comportamientos sospechosos","Explicabilidad, equidad y validación: interpretación de modelos, sesgos, estabilidad, métricas y control de generalización","Despliegue y monitoreo de modelos: prototipos operativos, seguimiento de desempeño, actualización y transferencia al equipo usuario"],entregables:"auditorías de datos, modelos, notebooks, APIs o prototipos, tableros, documentación, métricas de validación y planes de operación.",icono:"bx-brain"}]),Hs=Object.freeze([{numero:9,id:"actuaria-y-riesgo",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Consultoría actuarial y gestión cuantitativa del riesgo",tituloCorto:"Actuaría y riesgo",resumen:"Analizamos mortalidad, siniestros, primas, reservas, pensiones, reaseguro, solvencia y activos-pasivos.",descripcion:"Modelos y análisis para seguros, pensiones, salud, beneficios y administración de riesgos biométricos y financieros.",subservicios:["Mortalidad, supervivencia y longevidad: construcción, comparación, graduación y proyección de tablas y curvas","Anualidades y factores actuariales: valoración bajo tasas, edades, contingencias y supuestos alternativos","Frecuencia y severidad de siniestros: modelos de conteo, distribuciones de pérdidas, colas y dependencia","Primas y reservas: modelos prospectivos y retrospectivos, sensibilidad y suficiencia bajo escenarios","Pensiones y beneficios: proyecciones de obligaciones, flujos, reemplazo, sostenibilidad y riesgo de longevidad","Capital, solvencia y pruebas de estrés: escenarios adversos, suficiencia de capital y mapas cuantitativos de riesgo","Reaseguro y retención: capas, deducibles, límites, impacto en volatilidad y evaluación de alternativas","Gestión de activos y pasivos: duración, inmunización, liquidez, brechas y escenarios de tasas","Estudios de experiencia y segmentación: comparación observado-esperado, credibilidad, perfiles y actualización de supuestos","Validación de modelos actuariales: revisión independiente de metodología, datos, código, supuestos, resultados y gobernanza"],entregables:"bases actuariales, curvas y tablas, modelos de pérdidas, proyecciones, stress tests, tableros de riesgo e informes de validación. Los dictámenes o firmas reguladas se emitirán solo mediante profesionales legalmente habilitados.",icono:"bx-check-shield"},{numero:10,id:"finanzas-y-econometria",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Finanzas cuantitativas, econometría y analítica económica",tituloCorto:"Finanzas y econometría",resumen:"Construimos pronósticos, modelos de riesgo, scoring, portafolios, valoración y tableros económicos.",descripcion:"Herramientas para valorar, pronosticar y gestionar decisiones financieras, crediticias, macroeconómicas y empresariales.",subservicios:["Modelos econométricos: estimación causal o predictiva con datos transversales, panel, series de tiempo y variables instrumentales","Pronóstico macroeconómico y financiero: inflación, actividad, tasas, liquidez, demanda, ingresos y otros indicadores","Transmisión monetaria y precios: análisis de tasas, tipo de cambio, combustibles, costos y cadenas de propagación","Portafolios y medición de riesgo: retorno, volatilidad, correlación, diversificación, VaR, pérdida esperada y escenarios","Riesgo de crédito y scoring: probabilidad de incumplimiento, segmentación, pérdida esperada y monitoreo de cartera","Valoración y fijación de precios: flujos descontados, instrumentos, proyectos, productos y análisis de sensibilidad","Riesgo de mercado, liquidez y operación: métricas, límites, alertas, escenarios y mapas de exposición","Analítica para fintech, cooperativas y microfinanzas: segmentación, cobranza, inclusión, propensión y sostenibilidad","Pruebas de estrés y simulación financiera: choques de tasas, inflación, morosidad, tipo de cambio y condiciones macro","Tableros e inteligencia económica: sistemas de indicadores para seguimiento, comparación y decisión ejecutiva"],entregables:"modelos econométricos y financieros, pronósticos, matrices de riesgo, escenarios, tableros e informes ejecutivos con anexos técnicos.",icono:"bx-line-chart"},{numero:11,id:"politicas-publicas",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Analítica para políticas públicas y desarrollo",tituloCorto:"Políticas públicas",resumen:"Creamos indicadores, evaluaciones de impacto, mapas, simulaciones y evidencia para decisiones públicas.",descripcion:"Aplicación de modelos, estadística y ciencia de datos para diseñar, focalizar, evaluar y comunicar políticas y programas.",subservicios:["Indicadores sociales y económicos: diseño, cálculo, validación, desagregación y seguimiento","Pobreza, desigualdad y distribución: índices, curvas, descomposición, concentración y análisis territorial","Evaluación de impacto: diseños experimentales y cuasiexperimentales, contrafactuales, costo-efectividad y sensibilidad","Planificación de servicios públicos: demanda, cobertura, capacidad, brechas y asignación de recursos","Análisis de precios y cadenas de transmisión: combustibles, alimentos, transporte, tarifas y repercusiones sectoriales","Analítica espacial y territorial: mapas, clusters, accesibilidad, desigualdades geográficas y priorización","Educación, empleo y protección social: trayectorias, resultados, vulnerabilidad, transición y focalización","Riesgo climático y de desastres: escenarios, exposición, vulnerabilidad y apoyo cuantitativo a la resiliencia","Simulación de políticas: comparación de alternativas, beneficiarios, costos, resultados y efectos distributivos","Notas de política y datos abiertos: síntesis ejecutiva, visualizaciones, tableros y productos para comunicación pública"],entregables:"índices, mapas, bases armonizadas, evaluaciones de impacto, simuladores, tableros, notas de política e informes de escenarios.",icono:"bx-grid-alt"}]),Gs=Object.freeze([Object.freeze({numero:12,id:"posgrados-y-maestrias",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Diseño de posgrados, maestrías y programas académicos",tituloCorto:"Posgrados y maestrías",resumen:"Diseñamos o rediseñamos programas, competencias, mallas, sílabos, reglamentos e indicadores de calidad.",descripcion:"Diseño o rediseño de ofertas formativas con pertinencia, rigor, coherencia curricular, viabilidad operativa y orientación a resultados.",subservicios:Object.freeze(["Estudios de necesidad y viabilidad: demanda, población objetivo, entorno profesional, recursos, sostenibilidad y diferenciación","Benchmarking nacional e internacional: comparación de planes, créditos, competencias, modalidades, investigación y tendencias","Perfil de ingreso, egreso y competencias: resultados de aprendizaje medibles y alineados con el campo profesional y científico","Malla y arquitectura curricular: secuencias, prerrequisitos, créditos, balance teórico-práctico e integración investigativa","Diseño de asignaturas y sílabos: propósitos, contenidos, estrategias, actividades, evaluación, bibliografía y recursos","Líneas de investigación y vinculación: articulación de proyectos, tesis, seminarios, prácticas y necesidades del entorno","Perfil y desarrollo del profesorado: requisitos, matriz docente, plan de capacitación y comunidades académicas","Normativas y procesos académicos: admisión, permanencia, tutoría, evaluación, tesis, graduación y aseguramiento de calidad","Diseño virtual, híbrido o presencial: experiencias, interacción, laboratorios, recursos y evaluación coherentes con la modalidad","Expediente de aprobación y mejora: documentación, evidencias, indicadores, evaluación periódica y apoyo a procesos de acreditación"]),entregables:"estudios de viabilidad, perfiles, mapas curriculares, sílabos, reglamentos, matrices docentes, expedientes técnicos y planes de evaluación.",icono:"bx-book-open"}),Object.freeze({numero:13,id:"diplomados-y-formacion-continua",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Diplomados, certificaciones y educación continua",tituloCorto:"Diplomados y formación continua",resumen:"Ofrecemos programas a la medida en estadística, investigación, matemática computacional, datos, finanzas, actuaría y STEM.",descripcion:"Programas modulares, actualizados y adaptables para universidades, empresas, colegios profesionales, instituciones públicas y centros educativos.",subservicios:Object.freeze(["Diseño integral de diplomados: diagnóstico, competencias, malla, módulos, evaluación, recursos, facilitadores y certificación","Estadística aplicada a la investigación: desde fundamentos y diseño hasta modelos multivariados y reportes reproducibles","Metodología, escritura y publicación científica: protocolos, análisis, redacción, LaTeX, visualización y respuesta editorial","Matemática computacional y métodos numéricos: programación científica, simulación, álgebra numérica, EDO, EDP y control de error","Optimización e investigación de operaciones: modelado, solvers, logística, planificación, métodos exactos y heurísticos","Ciencia de datos e inteligencia artificial: Python o R, aprendizaje automático, redes neuronales, visualización y validación","Finanzas cuantitativas y analítica actuarial: riesgo, series de tiempo, pérdidas, mortalidad, reservas, portafolios y stress testing","STEM y formación docente: aprendizaje basado en proyectos, modelización, ferias, evaluación y tecnología educativa","Herramientas para comunicación científica: LaTeX, Word avanzado, gestores bibliográficos, posters, presentaciones y repositorios","Capacitación a la medida: programas cerrados por sector, rol, nivel, problema y conjunto de datos institucional"]),entregables:"diseño curricular, materiales, guías, ejercicios, datasets, evaluaciones, rúbricas, sesiones formativas y reporte de resultados.",icono:"bx-group"}),Object.freeze({numero:14,id:"ferias-y-proyectos-stem",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Proyectos STEM, ferias científicas y cultura de innovación",tituloCorto:"Ferias y proyectos STEM",resumen:"Diseñamos ferias, clubes, campamentos, retos, bancos de proyectos, rúbricas y formación de mentores.",descripcion:"Creación de experiencias científicas que articulen matemática, ciencias, tecnología, ingeniería, datos y comunicación.",subservicios:Object.freeze(["Diseño de ferias científicas institucionales: propósito, alcance, calendario, categorías, roles, recursos, seguridad y comunicación","Reglamentos, rúbricas y criterios: estándares transparentes para originalidad, método, evidencia, prototipo, impacto y exposición","Formación de mentores y jurados: acompañamiento ético, evaluación consistente, retroalimentación y manejo de conflictos","Banco de proyectos STEM: ideas escalables por nivel educativo, tiempo, recursos y área temática","Aprendizaje basado en proyectos e indagación: secuencias que parten de problemas reales y culminan en productos verificables","Clubes, campamentos y semilleros: programas extracurriculares de matemática, ciencia, programación, datos y modelización","Olimpiadas, datatones y retos: competencias de resolución de problemas, modelización, análisis de datos y comunicación","Prototipado y simulación: uso de herramientas digitales, sensores, programación o modelado, con alianzas técnicas cuando sea necesario","Exhibición y divulgación: posters, pitches, demostraciones, guiones, stands y comunicación para públicos no especializados","Evaluación de impacto y continuidad: indicadores de participación, aprendizaje, equidad, calidad y seguimiento de proyectos destacados"]),entregables:"plan maestro de feria, reglamento, rúbricas, banco de proyectos, formación de mentores, materiales de difusión y evaluación de impacto.",icono:"bx-brain"}),Object.freeze({numero:15,id:"desarrollo-docente",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Formación, asesoría metodológica y diseño curricular para docentes",tituloCorto:"Desarrollo docente y diseño curricular",resumen:"Acompañamos a docentes e instituciones en didáctica, evaluación y tecnología; además diseñamos maestrías, posgrados y programas de asignaturas de educación superior.",descripcion:"Desarrollo profesional y acompañamiento curricular para docentes de secundaria y educación superior. El servicio integra formación, asesoría metodológica, diseño o rediseño de maestrías y posgrados, elaboración de programas de asignaturas y sílabos universitarios, evaluación del aprendizaje y mejora continua de la práctica docente.",subservicios:Object.freeze(["Diagnóstico de prácticas y necesidades: observación, encuestas, resultados de aprendizaje, recursos, brechas de desempeño y prioridades institucionales","Diseño y rediseño de maestrías y posgrados: apoyo a equipos académicos en perfiles, competencias, mallas, créditos, modalidad, investigación, evaluación y viabilidad","Diseño de programas de asignaturas de nivel superior: resultados de aprendizaje, contenidos, secuencias, metodologías, actividades, evaluación, bibliografía y recursos","Alineación curricular por competencias: articulación entre perfil de egreso, competencias, resultados, evidencias, rúbricas, créditos y criterios de aprobación","Metodología universitaria para áreas cuantitativas: diseño de clases, laboratorios, proyectos y evaluación en cálculo, álgebra, estadística, métodos numéricos y disciplinas afines","Didáctica de la matemática y las ciencias: razonamiento, representaciones, resolución de problemas, modelización, conexiones conceptuales y comunicación científica","Secuencias, unidades y aprendizaje basado en problemas o proyectos: situaciones auténticas, trabajo colaborativo, productos verificables, reflexión y transferencia","Evaluación del aprendizaje: bancos de ítems, rúbricas, pruebas diagnósticas, evaluación formativa, análisis de resultados y planes de cierre de brechas","Tecnología educativa, software y programación: CAS, simuladores, hojas de cálculo, Python, R, visualización y recursos para modalidades presenciales, híbridas o virtuales","Acompañamiento docente y mejora continua: observación de aula, coaching, retroalimentación, comunidades de práctica, inclusión, accesibilidad y planes de desarrollo profesoral"]),entregables:"diagnósticos, planes de desarrollo docente, estudios y expedientes curriculares, propuestas de maestrías o posgrados, mapas de competencias, programas de asignaturas y sílabos universitarios, unidades didácticas, rúbricas, bancos de evaluación, talleres, informes de observación y planes de mejora.",icono:"bx-check-shield"}),Object.freeze({numero:16,id:"inteligencia-academica",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Evaluación, calidad e inteligencia académica",tituloCorto:"Inteligencia académica",resumen:"Evaluamos programas y resultados; diseñamos indicadores, alertas de deserción, tableros y planes de mejora.",descripcion:"Uso de evidencia para mejorar programas, docencia, permanencia estudiantil, investigación y gestión institucional.",subservicios:Object.freeze(["Evaluación de programas académicos: pertinencia, coherencia, resultados, recursos, eficiencia, satisfacción e impacto","Medición de resultados de aprendizaje: mapas de evidencias, instrumentos, estándares, análisis y planes de cierre de brechas","Retención, deserción y alerta temprana: modelos de riesgo, perfiles, factores asociados y estrategias de intervención","Tableros e indicadores académicos: matrícula, rendimiento, aprobación, titulación, docencia, investigación y vinculación","Encuestas y sistemas de retroalimentación: diseño, muestreo, análisis, segmentación y comunicación de hallazgos","Planificación de oferta y carga: secciones, horarios, aulas, demanda, capacidad y asignación docente","Desarrollo y evaluación del profesorado: necesidades, trayectorias, desempeño, capacitación e impacto","Analítica de investigación: producción, colaboración, visibilidad, líneas, proyectos, financiamiento e impacto","Evidencias para acreditación: matrices, trazabilidad, indicadores, repositorios y control de consistencia","Planes de mejora continua: prioridades, responsables, metas, indicadores, seguimiento y evaluación"]),entregables:"modelos de indicadores, tableros, instrumentos, informes de evaluación, sistemas de alerta y planes de mejora.",icono:"bx-bar-chart-alt-2"})]),Ks=Object.freeze([{numero:17,id:"software-cientifico",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Software científico, automatización y herramientas computacionales",tituloCorto:"Software científico",resumen:"Construimos prototipos, simuladores, paquetes, notebooks, aplicaciones analíticas y reportes automatizados.",descripcion:"Desarrollo de soluciones técnicas que convierten métodos matemáticos y analíticos en herramientas utilizables y transferibles.",subservicios:["Prototipos en lenguajes científicos: Python, R, Julia, MATLAB, Mathematica u otros, según el problema y el entorno","Calculadoras y simuladores: herramientas para escenarios, docencia, finanzas, riesgo, estadística y modelización","Tableros y aplicaciones analíticas: interfaces para explorar datos, indicadores, predicciones y recomendaciones","Bibliotecas, paquetes y APIs: encapsulamiento de algoritmos, documentación y reutilización en otros sistemas","Software de simulación: implementación de modelos dinámicos, estocásticos, numéricos o de optimización","Automatización de reportes: generación repetible de tablas, gráficos, diagnósticos y documentos","Notebooks reproducibles: integración de texto, ecuaciones, código, resultados y documentación","Optimización y refactorización de código: rendimiento, memoria, estabilidad, legibilidad, vectorización y pruebas","Documentación, pruebas y control de versiones: manuales, casos de prueba, repositorios y trazabilidad","Transferencia y mantenimiento: capacitación, entrega de código, protocolos de actualización y soporte acordado"],entregables:"código fuente, paquetes, notebooks, prototipos, tableros, manuales, pruebas, repositorios y sesiones de transferencia.",icono:"bx-calculator"},{numero:18,id:"soluciones-sectoriales",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Soluciones cuantitativas para empresas, industria y sector público",tituloCorto:"Soluciones sectoriales",resumen:"Aplicamos modelos y datos a demanda, inventarios, logística, calidad, mantenimiento, energía y gestión pública.",descripcion:"Aplicación de matemática, estadística y computación a problemas operativos, productivos, comerciales y de gestión.",subservicios:["Diagnóstico de procesos y datos: identificación de cuellos de botella, decisiones, fuentes, calidad y oportunidades analíticas","Pronóstico de demanda e inventarios: modelos, estacionalidad, incertidumbre, niveles de servicio y políticas de reposición","Logística y cadena de suministro: rutas, localización, distribución, capacidad, tiempos y costos","Optimización de producción y servicios: mezcla, secuenciación, turnos, capacidad, productividad y restricciones","Control estadístico de calidad: variación, cartas de control, capacidad, muestreo y mejora de procesos","Mantenimiento y confiabilidad: fallos, vida útil, disponibilidad, mantenimiento preventivo y priorización","Energía, ambiente y sostenibilidad: consumo, eficiencia, emisiones, escenarios y optimización de recursos","Aplicaciones sectoriales interdisciplinarias: agricultura, clima, salud, transporte u otras áreas junto con especialistas del dominio","Sistemas de apoyo a decisiones: integración de reglas, modelos, escenarios, indicadores y recomendaciones","Pruebas de concepto: pilotos controlados para demostrar viabilidad, valor, riesgos y requisitos de escalamiento"],entregables:"diagnósticos, modelos de proceso, pronósticos, soluciones de optimización, pilotos, tableros y planes de implementación.",icono:"bx-trending-up"},{numero:19,id:"eventos-y-transferencia",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Eventos científicos, redes y transferencia de conocimiento",tituloCorto:"Eventos y transferencia",resumen:"Organizamos congresos, escuelas, talleres, datatones, redes y productos de divulgación científica.",descripcion:"Diseño de espacios de intercambio, formación, colaboración y difusión que conecten academia, educación, empresa, Estado y sociedad.",subservicios:["Congresos, simposios y seminarios: concepto, programa, comités, convocatoria, revisión, logística académica y evaluación","Escuelas de verano e invierno: rutas intensivas de formación para estudiantes, docentes y profesionales","Talleres de investigación: problemas abiertos, métodos, datos, escritura, replicación y desarrollo de proyectos","Webinars, conferencias y clases magistrales: contenidos especializados para públicos académicos, profesionales o generales","Datatones, hackatones y competencias: retos, datos, reglas, mentoría, evaluación y productos","Memorias, actas y productos editoriales: resúmenes, proceedings, repositorios, números especiales y materiales de difusión","Redes nacionales e internacionales: identificación de aliados, agenda común, proyectos, movilidad y coautoría","Mesas universidad-empresa-Estado: traducción de necesidades en retos, proyectos y mecanismos de cooperación","Divulgación y alfabetización científica: contenidos, charlas, infografías, recursos y actividades para públicos diversos","Planes de transferencia e impacto: usuarios, adopción, propiedad intelectual, capacitación, indicadores y sostenibilidad"],entregables:"programas académicos, convocatorias, rúbricas, memorias, repositorios, materiales de divulgación, alianzas y planes de transferencia.",icono:"bx-group"},{numero:20,id:"laboratorios-y-observatorios",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Creación de laboratorios, observatorios y unidades de investigación",tituloCorto:"Laboratorios y observatorios",resumen:"Diseñamos unidades de investigación, laboratorios de datos, matemática computacional, STEM y observatorios sectoriales.",descripcion:"Diseño institucional de estructuras permanentes para producir conocimiento, prestar servicios, formar talento y sostener proyectos.",subservicios:["Oficinas de investigación y proyectos: procesos, cartera, convocatorias, seguimiento, ética, datos y apoyo a investigadores","Laboratorios de matemática computacional: líneas, infraestructura, software, proyectos, formación y servicios","Laboratorios de datos e inteligencia artificial: gobernanza, casos de uso, capacidades, plataformas y portafolio","Observatorios actuariales y financieros: indicadores, bases, metodologías, reportes, alertas y análisis de riesgo","Laboratorios de educación matemática y STEM: innovación didáctica, pilotaje, recursos, formación y evaluación","Observatorios sectoriales: educación, precios, empleo, productividad, desigualdad, ciencia, tecnología u otros temas","Gobernanza y modelo operativo: misión, estructura, roles, comités, procesos, alianzas y sostenibilidad","Infraestructura y ecosistema tecnológico: equipos, software, repositorios, seguridad, respaldo y acceso","Portafolio e indicadores de desempeño: servicios, proyectos, productos, usuarios, calidad, impacto y financiamiento","Puesta en marcha y evaluación: plan de lanzamiento, capacitación, pilotos, comunicación, seguimiento y mejora"],entregables:"modelos de gobernanza, manuales, mapas de procesos, portafolios, requerimientos tecnológicos, indicadores y planes de puesta en marcha.",icono:"bx-library"}]),fe=Object.freeze([...Bs,...Vs,...Hs,...Gs,...Ks]),Ia=Object.freeze({"bx-bar-chart-alt-2":`
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
    `});function C(t,e="text-2xl"){const a=Ia[t]||Ia["bx-grid-alt"];return`
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
    `}const Ws=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,Js=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,Ys=""+new URL("apec-ConmXkrT.png",import.meta.url).href,Qs=Object.freeze([Object.freeze({sigla:"ISFODOSU",nombre:"Instituto Superior de Formación Docente Salomé Ureña",imagen:Ws,enlace:"https://www.isfodosu.edu.do/"}),Object.freeze({sigla:"UASD",nombre:"Universidad Autónoma de Santo Domingo",imagen:Js,enlace:"https://uasd.edu.do/"}),Object.freeze({sigla:"UNAPEC",nombre:"Universidad APEC",imagen:Ys,enlace:"https://unapec.edu.do/"})]);function Te(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Xs(t){return`
        <a
            href="${t.enlace}"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0f5b5d]/30 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
            aria-label="Visitar el sitio institucional de ${Te(t.sigla)}"
        >
            <span class="flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-1.5 ring-1 ring-slate-200">
                <img
                    src="${t.imagen}"
                    alt="Logo de ${Te(t.sigla)}"
                    class="h-full w-full object-contain"
                    loading="eager"
                />
            </span>
            <span class="min-w-0">
                <span class="block text-sm font-black text-slate-950 group-hover:text-[#0f5b5d]">${Te(t.sigla)}</span>
                <span class="mt-0.5 block text-xs leading-snug text-slate-500">${Te(t.nombre)}</span>
            </span>
        </a>
    `}function lt(t,e){return`
        <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
            <p class="text-2xl font-black text-white md:text-3xl">${Te(t)}</p>
            <p class="mt-1 text-xs font-semibold leading-tight text-slate-300">${Te(e)}</p>
        </div>
    `}function Zs({integrantes:t,servicios:e,lineas:a,publicaciones:i}){const s=document.createElement("section");return s.className="mx-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg sm:mx-6 lg:mx-8 xl:mx-10",s.setAttribute("aria-labelledby","titulo-confianza-portada"),s.innerHTML=`
        <div class="grid grid-cols-1 xl:grid-cols-[1.25fr_0.75fr]">
            <div class="p-5 md:p-7">
                <div class="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Vinculación y confianza institucional</p>
                        <h2 id="titulo-confianza-portada" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Una red académica visible, sin competir con la propuesta principal</h2>
                    </div>
                    <p class="max-w-xl text-sm leading-relaxed text-slate-600">Las tres instituciones principales se mantienen siempre visibles y enlazadas desde una franja compacta.</p>
                </div>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
                    ${Qs.map(Xs).join("")}
                </div>
            </div>

            <aside class="bg-[#071820] p-5 text-white md:p-7" aria-label="Indicadores y principios de confianza">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#d7a955]">Capacidad institucional</p>
                <div class="mt-4 grid grid-cols-2 gap-3">
                    ${lt(t,"Integrantes")}
                    ${lt(e,"Áreas de servicio")}
                    ${lt(a,"Líneas de investigación")}
                    ${lt(i,"Publicaciones registradas")}
                </div>
                <div class="mt-5 flex flex-wrap gap-2" aria-label="Principios de trabajo">
                    ${["Confidencialidad","Reproducibilidad","Transferencia"].map(r=>`
                        <span class="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">${r}</span>
                    `).join("")}
                </div>
            </aside>
        </div>
    `,s}const er="kernel-services-filter",tr=Object.freeze([Object.freeze({titulo:"Investigación y producción científica",descripcion:"Proyectos de I+D+i, tesis, publicación, edición y comunicación científica.",icono:"bx-book-open",categoria:"investigacion"}),Object.freeze({titulo:"Estadística y metodología",descripcion:"Diseño de estudios, muestreo, instrumentos, análisis e informes reproducibles.",icono:"bx-bar-chart-alt-2",categoria:"matematica-datos"}),Object.freeze({titulo:"Matemática computacional y optimización",descripcion:"Modelización, simulación, métodos numéricos, algoritmos y decisiones bajo restricciones.",icono:"bx-atom",categoria:"matematica-datos"}),Object.freeze({titulo:"Ciencia de datos, IA y software científico",descripcion:"Modelos predictivos, tableros, automatización, prototipos y transferencia tecnológica.",icono:"bx-grid-alt",categoria:"tecnologia-transferencia"}),Object.freeze({titulo:"Educación, posgrado y diseño curricular",descripcion:"Maestrías, programas académicos, sílabos, formación docente, evaluación y calidad.",icono:"bx-group",categoria:"educacion"}),Object.freeze({titulo:"Riesgo, finanzas y soluciones sectoriales",descripcion:"Actuaría, econometría, políticas públicas, logística, industria y apoyo a decisiones.",icono:"bx-trending-up",categoria:"riesgo-finanzas"})]),ar=Object.freeze([1,7,12,15]);function Pe(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ir(t){const e=Wt.find(a=>a.id===t.categoria);return`
        <a
            href="#/servicios"
            data-resumen-filtro="${Pe(t.categoria)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f5b5d]/30 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 md:p-6"
        >
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-[#0f5b5d] transition-transform group-hover:scale-110">
                ${C(t.icono,"text-3xl")}
            </span>
            <h3 class="mt-5 text-xl font-black leading-tight text-slate-950">${Pe(t.titulo)}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">${Pe(t.descripcion)}</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f5b5d]">
                Explorar ${Pe(e?.rango||"servicios")}
                ${C("bx-right-arrow-alt","text-xl")}
            </span>
        </a>
    `}function sr(t){return`
        <article class="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-6">
            <div class="flex items-start justify-between gap-4">
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d5a54a]/30 bg-[#d5a54a]/10 text-[#efc86f]">
                    ${C(t.icono,"text-2xl")}
                </span>
                <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black text-slate-300">${String(t.numero).padStart(2,"0")}</span>
            </div>
            <h3 class="mt-5 text-xl font-black leading-tight text-white">${Pe(t.tituloCorto)}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-300">${Pe(t.resumen)}</p>
            <a href="#/servicios" class="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#efc86f] hover:text-white">
                Ver alcance y entregables
                ${C("bx-right-arrow-alt","text-xl")}
            </a>
        </article>
    `}function rr(){const t=document.createElement("section");t.id="servicios-portada",t.className="mx-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-lg sm:mx-6 lg:mx-8 xl:mx-10",t.setAttribute("aria-labelledby","titulo-servicios-portada");const e=ar.map(a=>fe.find(i=>i.numero===a)).filter(Boolean);return t.innerHTML=`
        <div class="px-5 py-10 md:px-8 md:py-14 xl:px-10">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                    <p class="text-sm font-black uppercase tracking-[0.18em] text-[#b37a2a]">Servicios profesionales y académicos</p>
                    <h2 id="titulo-servicios-portada" class="mt-3 max-w-4xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">Capacidades organizadas para resolver necesidades concretas</h2>
                    <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">La portada presenta las capacidades principales. El catálogo completo reúne 20 áreas con alcance técnico, componentes, entregables, modalidades y principios de trabajo.</p>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
                    <a href="#/servicios" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                        Ver los 20 servicios
                        ${C("bx-right-arrow-alt","text-xl")}
                    </a>
                    <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c38d36] bg-white px-5 py-3.5 font-black text-[#805615] transition hover:bg-amber-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-100">
                        Solicitar diagnóstico
                        ${C("bx-check-shield","text-xl")}
                    </a>
                </div>
            </div>

            <div class="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                ${tr.map(ir).join("")}
            </div>
        </div>

        <div class="bg-[#071820] px-5 py-10 text-white md:px-8 md:py-12 xl:px-10">
            <div class="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Servicios destacados</p>
                    <h2 class="mt-2 text-2xl font-black md:text-4xl">Cuatro puertas de entrada al catálogo</h2>
                </div>
                <p class="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">Cada solicitud se delimita antes de iniciar; el alcance, responsables, aliados, entregables, calendario y tarifa se definen después del diagnóstico.</p>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                ${e.map(sr).join("")}
            </div>
        </div>
    `,t.addEventListener("click",a=>{const i=a.target.closest("[data-resumen-filtro]");if(!(!i||!t.contains(i)))try{window.sessionStorage.setItem(er,i.dataset.resumenFiltro||"todos")}catch(s){console.warn("[Kernel] No fue posible conservar el filtro del catálogo.",s)}}),t}const ki=Object.freeze([Object.freeze({numero:"01",titulo:"Diagnóstico",descripcion:"Comprendemos la necesidad, el contexto, los usuarios, los datos y la decisión que debe apoyarse."}),Object.freeze({numero:"02",titulo:"Alcance y plan técnico",descripcion:"Definimos objetivos, productos, métodos, responsabilidades, riesgos, calendario y criterios de aceptación."}),Object.freeze({numero:"03",titulo:"Ejecución por fases",descripcion:"Desarrollamos el análisis, diseño, modelización, formación o solución con entregas parciales verificables."}),Object.freeze({numero:"04",titulo:"Validación",descripcion:"Aplicamos pruebas, revisión experta, sensibilidad, control de calidad y retroalimentación documentada."}),Object.freeze({numero:"05",titulo:"Entrega y transferencia",descripcion:"Entregamos productos, documentación, capacitación y una ruta de seguimiento o actualización."})]),or=Object.freeze([Object.freeze({tipo:"Universidad y posgrado",titulo:"Diseño integral de una maestría y sus programas de asignatura",problema:"Una institución necesita crear o rediseñar una oferta de posgrado con coherencia curricular y viabilidad.",intervencion:"Estudio de necesidad, benchmarking, perfil, competencias, malla, sílabos, reglamentos, indicadores y expediente técnico.",producto:"Propuesta curricular completa y plan de evaluación para aprobación institucional.",icono:"bx-book-open"}),Object.freeze({tipo:"Investigación aplicada",titulo:"Diseño metodológico y plan estadístico para un estudio",problema:"Un equipo requiere justificar muestra, instrumentos, variables y procedimientos de análisis.",intervencion:"Matriz de coherencia, muestreo, potencia, validación de instrumentos, plan analítico y criterios de reporte.",producto:"Protocolo reproducible, memoria de cálculo y orientaciones para interpretar resultados.",icono:"bx-bar-chart-alt-2"}),Object.freeze({tipo:"Empresa o institución pública",titulo:"Optimización de recursos y tablero de decisión",problema:"La organización necesita reducir costos, asignar recursos o comparar escenarios bajo restricciones.",intervencion:"Mapeo del proceso, formulación matemática, algoritmo, piloto, análisis de sensibilidad y validación con usuarios.",producto:"Modelo de decisión, prototipo computacional, tablero y plan de implementación.",icono:"bx-trending-up"})]);function we(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function nr(t,e){return`
        <li class="relative flex gap-4 pb-7 last:pb-0">
            ${e<ki.length-1?'<span class="absolute left-5 top-10 h-[calc(100%-1rem)] w-px bg-emerald-200" aria-hidden="true"></span>':""}
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f5b5d] text-xs font-black text-white shadow-md">${t.numero}</span>
            <div class="pt-0.5">
                <h3 class="text-lg font-black text-slate-950">${we(t.titulo)}</h3>
                <p class="mt-1 text-sm leading-relaxed text-slate-600 md:text-base">${we(t.descripcion)}</p>
            </div>
        </li>
    `}function cr(t){return`
        <article class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div class="flex items-center justify-between gap-4">
                <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#9a671d] ring-1 ring-amber-200">
                    ${C(t.icono,"text-2xl")}
                </span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">Ejemplo ilustrativo</span>
            </div>
            <p class="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#0f5b5d]">${we(t.tipo)}</p>
            <h3 class="mt-2 text-xl font-black leading-tight text-slate-950">${we(t.titulo)}</h3>
            <dl class="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                    <dt class="font-black text-slate-950">Necesidad</dt>
                    <dd class="mt-1 text-slate-600">${we(t.problema)}</dd>
                </div>
                <div>
                    <dt class="font-black text-slate-950">Intervención posible</dt>
                    <dd class="mt-1 text-slate-600">${we(t.intervencion)}</dd>
                </div>
                <div>
                    <dt class="font-black text-slate-950">Producto esperado</dt>
                    <dd class="mt-1 text-slate-600">${we(t.producto)}</dd>
                </div>
            </dl>
        </article>
    `}function lr(){const t=document.createElement("section");return t.className="mx-4 grid grid-cols-1 gap-6 sm:mx-6 lg:mx-8 xl:mx-10 2xl:grid-cols-[0.72fr_1.28fr]",t.setAttribute("aria-label","Proceso de trabajo y ejemplos de aplicación"),t.innerHTML=`
        <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Cómo trabajamos</p>
            <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">De la necesidad a una solución verificable</h2>
            <p class="mt-4 leading-relaxed text-slate-600">El proceso completo tiene siete etapas en el catálogo; en la portada se resume en cinco momentos que facilitan la comprensión y la contratación.</p>
            <ol class="mt-7">
                ${ki.map(nr).join("")}
            </ol>
            <a href="#/diagnosticoServicios" class="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white shadow-md hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                Iniciar diagnóstico
                ${C("bx-right-arrow-alt","text-xl")}
            </a>
        </article>

        <div>
            <div class="mb-6">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Aplicaciones demostrativas</p>
                <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Ejemplos de cómo puede estructurarse un proyecto</h2>
                <p class="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">Estos escenarios son ilustrativos y no se presentan como casos de clientes. Su propósito es mostrar la relación entre necesidad, intervención y producto verificable.</p>
            </div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:grid-cols-1 3xl:grid-cols-3">
                ${or.map(cr).join("")}
            </div>
        </div>
    `,t}function K(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function dr(t){const e=String(t?.DOI||t?.doi||"").trim().toLowerCase();return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function ur(){const t=new Set;return G.forEach(e=>{(e.publicaciones||[]).forEach(a=>{const i=dr(a);i&&t.add(i)})}),t.size}function Ie(t,e,a){return`
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div class="flex items-start gap-3">
                <span class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d8a64f]/25 bg-[#d8a64f]/10 text-[#f0c76f]">
                    ${C(a,"text-xl")}
                </span>
                <div>
                    <h3 class="font-black text-white">${K(t)}</h3>
                    <p class="mt-1 text-sm leading-relaxed text-slate-300">${K(e)}</p>
                </div>
            </div>
        </article>
    `}function pr(t,e){return`
        <article class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-6">
            <div class="flex items-center justify-between gap-4">
                <span class="flex h-11 min-w-11 items-center justify-center rounded-xl bg-emerald-50 px-3 text-sm font-black text-[#0f5b5d] ring-1 ring-emerald-200">${String(e+1).padStart(2,"0")}</span>
                <span class="text-xs font-black uppercase tracking-widest text-slate-400">Línea de investigación</span>
            </div>
            <h3 class="mt-5 text-xl font-black leading-tight text-slate-950">${K(String(t.title||"").trim())}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">${K(t.desarrollo)}</p>
        </article>
    `}function mr(t){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-900">${K(t.convocatoria)}</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${K(t.institucion)}</span>
            </div>
            <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${K(t.title)}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">${K(t.enfoque)}</p>
            <p class="mt-4 text-xs font-black uppercase tracking-widest text-[#0f5b5d]">${K(t.estado)}</p>
        </article>
    `}function fr(){return zs.map(t=>`
        <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-100">
            <span class="text-[#efc86f]">${C(t.icono,"text-base")}</span>
            ${K(t.titulo)}
        </span>
    `).join("")}function gr(){return`
        <section class="mx-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:mx-6 md:p-8 lg:mx-8 xl:mx-10" aria-labelledby="titulo-actividad-portada">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Comunidad digital</p>
                    <h2 id="titulo-actividad-portada" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Actividad del sitio</h2>
                </div>
                <p id="analytics-actualizado" class="text-sm text-slate-500">Cargando estadísticas…</p>
            </div>
            <div class="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                ${[["analytics-total","Visitantes totales"],["analytics-hoy","Visitantes hoy"],["analytics-semana","Últimos 7 días"],["analytics-mes","Últimos 30 días"]].map(([e,a])=>`
                    <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                        <p id="${e}" class="text-2xl font-black text-slate-950 md:text-3xl">—</p>
                        <p class="mt-1 text-xs font-semibold text-slate-500 md:text-sm">${a}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `}function br(){const t=ur(),e=document.createElement("section");return e.className="w-full space-y-10 bg-white pb-10 font-sans",e.innerHTML=`
        <header class="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#06141a] text-white">
            <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"></div>
            <div class="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#b37a2a]/15 blur-3xl"></div>

            <div class="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1600px] grid-cols-1 gap-10 px-5 py-10 md:px-8 md:py-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:px-12">
                <div>
                    <div class="flex items-center gap-4">
                        <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white p-2 shadow-xl md:h-24 md:w-24">
                            <img src="${_t}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" loading="eager" />
                        </div>
                        <div>
                            <p class="text-xs font-black uppercase tracking-[0.24em] text-[#efc86f] md:text-sm">Grupo de Investigación El Kernel</p>
                            <p class="mt-1 text-lg font-bold text-slate-200">Matemática aplicada, computación científica y educación</p>
                            <p class="mt-1 text-sm text-slate-400">República Dominicana</p>
                        </div>
                    </div>

                    <p class="mt-8 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Servicios científicos y académicos con orientación práctica</p>
                    <h1 class="mt-5 max-w-5xl text-4xl font-black leading-[1.03] text-white md:text-6xl 2xl:text-7xl">Soluciones cuantitativas para investigar, enseñar y decidir mejor</h1>
                    <p class="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">Convertimos problemas complejos en soluciones verificables mediante matemática aplicada, estadística, ciencia de datos, computación científica, investigación y educación.</p>

                    <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-3 rounded-xl bg-[#d5a54a] px-6 py-4 font-black text-[#06141a] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#efc86f] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200">
                            ${C("bx-check-shield","text-2xl")}
                            Solicitar diagnóstico
                        </a>
                        <a href="#/servicios" class="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                            ${C("bx-grid-alt","text-2xl")}
                            Explorar servicios
                        </a>
                        <a href="#/laboratorioKernel" class="inline-flex items-center justify-center gap-2 px-3 py-4 font-black text-emerald-200 hover:text-white">
                            Laboratorio Inteligente
                            ${C("bx-right-arrow-alt","text-xl")}
                        </a>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-2" aria-label="Principios de confianza">
                        ${["Confidencialidad","Reproducibilidad","Validación","Transferencia de capacidades"].map(i=>`
                            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200">${i}</span>
                        `).join("")}
                    </div>
                </div>

                <aside class="rounded-[2rem] border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-md md:p-7" aria-label="Capacidades principales del grupo">
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Qué podemos resolver</p>
                    <h2 class="mt-2 text-3xl font-black leading-tight text-white">De la investigación a la implementación y la transferencia</h2>
                    <div class="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                        ${Ie("Investigación y tesis","Formulación, metodología, análisis y producción científica.","bx-book-open")}
                        ${Ie("Estadística y datos","Diseño de estudios, instrumentos, modelos y tableros.","bx-bar-chart-alt-2")}
                        ${Ie("Matemática computacional","Modelización, métodos numéricos, simulación y optimización.","bx-atom")}
                        ${Ie("Educación y currículo","Maestrías, programas de asignatura, evaluación y formación docente.","bx-group")}
                        ${Ie("Software científico","Prototipos, calculadoras, automatización y herramientas reproducibles.","bx-grid-alt")}
                        ${Ie("Riesgo y decisiones","Actuaría, finanzas, políticas públicas y soluciones sectoriales.","bx-trending-up")}
                    </div>
                    <div class="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
                        <p class="font-black text-emerald-100">Una solicitud, un alcance verificable</p>
                        <p class="mt-2 text-sm leading-relaxed text-slate-300">El responsable técnico, los aliados, los entregables, el calendario y la tarifa se determinan después del diagnóstico inicial.</p>
                    </div>
                </aside>
            </div>
        </header>

        <div data-franja-institucional></div>
        <div data-resumen-servicios></div>
        <div data-proceso-aplicaciones></div>

        <section class="mx-4 overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl sm:mx-6 md:px-10 md:py-12 lg:mx-8 xl:mx-10" aria-labelledby="titulo-laboratorio-portada">
            <div class="grid grid-cols-1 gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-center">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Plataforma científica del grupo</p>
                    <h2 id="titulo-laboratorio-portada" class="mt-3 text-3xl font-black leading-tight md:text-5xl">Laboratorio Inteligente de Investigación</h2>
                    <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">Herramientas para aprender, seleccionar y aplicar procedimientos estadísticos con asistentes guiados, calculadoras, interpretación metodológica y biblioteca integrada.</p>
                    <a href="#/laboratorioKernel" class="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-[#071820] shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50">
                        Acceder al laboratorio
                        ${C("bx-right-arrow-alt","text-2xl")}
                    </a>
                </div>
                <div class="flex flex-wrap gap-3">${fr()}</div>
            </div>
        </section>

        <section class="mx-4 sm:mx-6 lg:mx-8 xl:mx-10" aria-labelledby="titulo-lineas-portada">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-sm font-black uppercase tracking-[0.18em] text-[#b37a2a]">Base científica</p>
                    <h2 id="titulo-lineas-portada" class="mt-2 text-3xl font-black text-slate-950 md:text-5xl">Líneas de investigación destacadas</h2>
                    <p class="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">La portada muestra una selección; la página de investigación conserva las nueve líneas completas.</p>
                </div>
                <a href="#/lineas" class="inline-flex items-center gap-2 font-black text-[#0f5b5d] hover:text-[#083f40]">Explorar las nueve líneas ${C("bx-right-arrow-alt","text-xl")}</a>
            </div>
            <div class="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                ${J.slice(0,3).map(pr).join("")}
            </div>
        </section>

        <section class="mx-4 grid grid-cols-1 gap-6 sm:mx-6 lg:mx-8 xl:mx-10 2xl:grid-cols-[1.1fr_0.9fr]" aria-label="Proyectos, equipo y producción científica">
            <div>
                <div class="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Proyección científica</p>
                        <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Propuestas de investigación</h2>
                    </div>
                    <a href="#/proyectos" class="hidden font-black text-[#0f5b5d] hover:text-[#083f40] sm:inline-flex sm:items-center sm:gap-2">Ver proyectos ${C("bx-right-arrow-alt","text-xl")}</a>
                </div>
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">${_e.slice(0,2).map(mr).join("")}</div>
            </div>

            <aside class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Equipo especializado</p>
                <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Conocimiento académico conectado con problemas reales</h2>
                <p class="mt-4 leading-relaxed text-slate-600">El grupo reúne experiencia en métodos numéricos, EDPs, optimización, álgebra, estadística, educación matemática, diseño curricular y desarrollo de herramientas científicas.</p>
                <div class="mt-6 grid grid-cols-2 gap-3">
                    <div class="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p class="text-3xl font-black text-[#0f5b5d]">${ne.length}</p><p class="mt-1 text-sm font-semibold text-slate-600">Integrantes principales</p></div>
                    <div class="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p class="text-3xl font-black text-[#0f5b5d]">${t}</p><p class="mt-1 text-sm font-semibold text-slate-600">Publicaciones registradas</p></div>
                </div>
                <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href="#/equipment" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white hover:bg-[#0a4648]">Conocer al equipo ${C("bx-right-arrow-alt","text-xl")}</a>
                    <a href="#/publicaciones" class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-black text-slate-800 hover:border-[#0f5b5d] hover:text-[#0f5b5d]">Ver publicaciones</a>
                </div>
            </aside>
        </section>

        ${gr()}

        <section class="mx-4 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f5b5d] to-[#071820] px-6 py-10 text-white shadow-2xl sm:mx-6 md:px-10 md:py-12 lg:mx-8 xl:mx-10" aria-labelledby="titulo-cta-portada">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Siguiente paso</p>
                    <h2 id="titulo-cta-portada" class="mt-2 text-3xl font-black leading-tight md:text-5xl">Conversemos sobre la necesidad antes de definir la solución</h2>
                    <p class="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50 md:text-lg">El formulario inicial organiza el problema, el sector, los datos disponibles, el plazo, el presupuesto estimado y el producto esperado.</p>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d5a54a] px-6 py-4 font-black text-[#071820] shadow-lg hover:bg-[#efc86f]">Solicitar diagnóstico ${C("bx-right-arrow-alt","text-xl")}</a>
                    <a href="mailto:mleonardos@unapec.edu.do" class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white hover:bg-white/20">mleonardos@unapec.edu.do</a>
                </div>
            </div>
        </section>
    `,e.querySelector("[data-franja-institucional]")?.replaceWith(Zs({integrantes:ne.length,servicios:fe.length,lineas:J.length,publicaciones:t})),e.querySelector("[data-resumen-servicios]")?.replaceWith(rr()),e.querySelector("[data-proceso-aplicaciones]")?.replaceWith(lr()),e}const hr="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function xr(){try{const t=await fetch(hr,{method:"GET",cache:"no-store"});if(!t.ok)throw new Error(`La API de Analytics respondió con estado ${t.status}`);const e=await t.json();if(!e.ok||!e.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(e.visitantes.total)||0,hoy:Number(e.visitantes.hoy)||0,ultimos7Dias:Number(e.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(e.visitantes.ultimos30Dias)||0,actualizadoEn:e.actualizadoEn||null}}catch(t){return console.error("No fue posible obtener las estadísticas de Analytics:",t),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}const vr=["w-full","min-w-0","max-w-none","max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none","m-auto","m-0","p-0","p-2","mt-0","mt-8","md:mt-12","pt-0"],yr=["max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none"];function Ai(t="default"){const e=document.getElementById("main");if(e){if(e.classList.remove(...vr),e.classList.add("w-full","min-w-0"),t==="full"){e.classList.add("max-w-none","m-0","p-0","mt-0","pt-0");return}e.classList.add(...yr,"p-2","mt-8","md:mt-12"),t==="left"?e.classList.add("m-0"):e.classList.add("m-auto")}}function dt(t){return new Intl.NumberFormat("es-DO").format(Number(t)||0)}function wr(t){if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(e)}async function Er(t){const e=t.querySelector("#analytics-total"),a=t.querySelector("#analytics-hoy"),i=t.querySelector("#analytics-semana"),s=t.querySelector("#analytics-mes"),r=t.querySelector("#analytics-actualizado");if(!e||!a||!i||!s||!r){console.warn("No se encontraron los elementos de Analytics en la portada.");return}r.textContent="Cargando estadísticas…";try{const o=await xr();e.textContent=dt(o.total),a.textContent=dt(o.hoy),i.textContent=dt(o.ultimos7Dias),s.textContent=dt(o.ultimos30Dias);const n=wr(o.actualizadoEn);r.textContent=n?`Actualizado: ${n}`:"Estadísticas temporalmente no disponibles"}catch(o){console.error("Error al mostrar las estadísticas en la portada:",o),e.textContent="—",a.textContent="—",i.textContent="—",s.textContent="—",r.textContent="No fue posible cargar las estadísticas"}}function kr(){Ai("full");const t=br();return Er(t),t}function Ar(){return kr()}const Cr=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function Ir(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${Cr}" 
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
    `}function Sr(t){return String(t?.DOI||t?.doi||"").trim().toLowerCase()}function _r(t){const e=Sr(t);return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function Tr(){const t=new Map;return Array.isArray(G)?(G.forEach(e=>{(e?.publicaciones||[]).forEach(i=>{const s=_r(i);s&&!t.has(s)&&t.set(s,i)})}),Array.from(t.values())):[]}function Pr(){const t=Tr(),e=t.map(i=>Number(i.year)).filter(Boolean),a=t.filter(i=>String(i?.q||i?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:t.length,totalQ1:a,primerYear:e.length?Math.min(...e):"—",ultimoYear:e.length?Math.max(...e):"—"}}function Lr(t=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const e=Pr();return`
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
                                ${G.length}
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
    `}const Mr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",Rr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",Dr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",Or="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",$r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",Nr=[{icon:Mr,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:Rr,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:Dr,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:Or,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function jr(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${Nr.map(a=>zr(a)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function zr({icon:t,title:e,content:a}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${t}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${e}</h3>
        </div>

        <img src="${$r}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${a}
        </div>
      </div>
    </div>
  `}function Ur(){const t=document.createElement("section");return t.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12",t.innerHTML=`
        <div class="mx-auto max-w-[1600px]">
            <header class="relative overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
                <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"></div>
                <div class="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Identidad, propósito y forma de trabajo</p>
                        <h1 class="mt-3 text-4xl font-black leading-tight md:text-6xl">Quiénes somos</h1>
                        <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">El Kernel es un grupo dominicano de investigación y servicios científicos que integra matemática aplicada, computación, estadística, educación e innovación para producir conocimiento verificable y transferible.</p>
                    </div>
                    <aside class="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <p class="text-sm font-black text-emerald-200">Nuestro compromiso institucional</p>
                        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                            <li>• Rigor científico y metodológico.</li>
                            <li>• Confidencialidad e integridad académica.</li>
                            <li>• Reproducibilidad y documentación.</li>
                            <li>• Formación, colaboración y transferencia.</li>
                        </ul>
                    </aside>
                </div>
            </header>

            <div class="mt-8 space-y-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg md:p-9">
                ${Ir()}
                ${Lr()}
                ${jr()}
            </div>

            <section class="mt-8 rounded-[2rem] bg-gradient-to-r from-[#0f5b5d] to-[#071820] px-6 py-8 text-white shadow-xl md:px-10">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div><p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Colaboración científica</p><h2 class="mt-2 text-2xl font-black md:text-3xl">Investigación, servicios y alianzas con alcance verificable</h2><p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">Trabajamos con universidades, centros de investigación, instituciones públicas, empresas y comunidades académicas.</p></div>
                    <div class="flex flex-col gap-3 sm:flex-row"><a href="#/equipment" class="rounded-xl bg-white px-5 py-3 text-center font-black text-[#071820]">Conocer el equipo</a><a href="#/diagnosticoServicios" class="rounded-xl bg-[#d5a54a] px-5 py-3 text-center font-black text-[#071820]">Solicitar diagnóstico</a></div>
                </div>
            </section>
        </div>
    `,t}function qr(t){t.querySelectorAll("[data-accordion-header]").forEach(a=>{a.addEventListener("click",()=>{const i=a.nextElementSibling,s=a.querySelector("[data-accordion-icon]"),r=i.classList.contains("max-h-[1000px]");t.querySelectorAll("[data-accordion-content]").forEach(o=>{o.classList.remove("max-h-[1000px]"),o.classList.add("max-h-0")}),t.querySelectorAll("[data-accordion-icon]").forEach(o=>{o.classList.remove("rotate-180")}),r||(i.classList.remove("max-h-0"),i.classList.add("max-h-[1000px]"),s.classList.add("rotate-180"))})})}function Fr(t){const e=t.querySelector("[data-description-text]"),a=t.querySelector("[data-description-btn]");if(!e||!a)return;let i=!1;a.addEventListener("click",()=>{i=!i,e.classList.toggle("line-clamp-4",!i),a.textContent=i?"Leer menos":"Leer más"})}function Br(){const t=Ur();return qr(t),Fr(t),t}function B(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vr(t=[]){return!t||t.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:t.map(e=>`
        <a href="${B(e.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${B(e.name)}">
            <i class="${B(e.icon)} text-xl"></i>
        </a>
    `).join("")}function Hr(t){return t?String(t).split(",").map(a=>a.trim()).filter(Boolean).slice(0,4).map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${B(a)}
        </span>
    `).join(""):""}function Gr(t){const e=document.createElement("article");e.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const a=Vr(t.redes||[]),i=Hr(t.areas),s=t.estado||t.grado||t.subtitle||"Investigador";return e.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${t.img}" 
                        alt="${B(t.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${B(s)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${B(t.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${B(t.subtitle||"")}
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
                                    ${B(t.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${B(t.afilaciones||t.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${B(t.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,e}function Kr(){let t=0,e=null,a=null;const i=document.createElement("section");i.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const s=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,r=()=>{const p=s();return Math.max(ne.length-p,0)},o=()=>{const p=r();t>p&&(t=0),t<0&&(t=p)},n=()=>{const p=r();t>=p?t=0:t++,f()},c=()=>{const p=r();t<=0?t=p:t--,f()},l=()=>{u(),ne.length>s()&&(e=setInterval(n,4500))},u=()=>{e&&(clearInterval(e),e=null)},d=()=>{const p=s(),x=Math.max(ne.length-p+1,1);return Array.from({length:x}).map((k,b)=>`
            <button
                type="button"
                data-dot-index="${b}"
                aria-label="Ir al grupo ${b+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${b===t?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},f=()=>{if(!ne||ne.length===0){i.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}o();const p=s(),x=ne.slice(t,t+p);i.innerHTML=`
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
                ${d()}
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
        `;const k=i.querySelector("#cards-wrapper");x.forEach(_=>{k.appendChild(Gr(_))});const b=i.querySelector("#prev-btn"),y=i.querySelector("#next-btn");b&&(b.onclick=()=>{c(),l()}),y&&(y.onclick=()=>{n(),l()}),i.querySelectorAll("[data-dot-index]").forEach(_=>{_.onclick=()=>{t=parseInt(_.dataset.dotIndex),f(),l()}})};return i.addEventListener("mouseenter",u),i.addEventListener("mouseleave",l),document.addEventListener("visibilitychange",()=>{document.hidden?u():l()}),window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{t=0,f(),l()},150)}),f(),l(),i}function Wr(t){t.addEventListener("click",e=>{const a=e.target.closest("[data-route]");if(!a)return;const i=window.location.hash.replace("#/","")||"equipment";a.dataset.route!==i&&Nt(a.dataset.route)})}function Ci(){const t=window.location.hash.replace(/^#\/?/,"")||"equipment",e=document.createElement("nav"),a="bg-sky-800 text-white border-sky-800 shadow-md",i="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return e.className="w-full flex justify-center mb-6",e.innerHTML=`
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
    `,Wr(e),e}function Jr(){const t=document.createElement("section");t.id="equipo-investigacion",t.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";const e=document.createElement("div");e.className="mx-auto max-w-[1600px]",e.innerHTML=`
        <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Talento científico y capacidades complementarias</p>
            <h1 class="mt-3 text-4xl font-black md:text-6xl">Equipo de investigación</h1>
            <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Investigadores en análisis numérico, sistemas no lineales, optimización, álgebra, ciencia de datos y educación matemática, articulados para desarrollar investigación, formación y soluciones cuantitativas.</p>
            <div class="mt-7 flex flex-wrap gap-2">${["Métodos iterativos","EDPs","Optimización","Álgebra","Ciencia de datos","Educación matemática"].map(s=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-emerald-100">${s}</span>`).join("")}</div>
        </header>
    `;const a=document.createElement("div");a.className="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm",a.appendChild(Ci());const i=Kr();return i.className="w-full py-8 flex flex-col gap-8 items-center font-sans",e.appendChild(a),e.appendChild(i),t.appendChild(e),t}function Yr(){return Jr()}function F(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ii(t){return t.formacion?.length||0}function Si(t){return t.experiencia?.length||0}function Qr(t,e=!1){const a=Ii(t),i=Si(t);return`
        <button 
            type="button"
            data-id="${t.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${t.img}" 
                    alt="${F(t.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${F(t.name)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${a} formación${a===1?"":"es"}
                    · ${i} experiencia${i===1?"":"s"}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${F(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Xr(t){const e=t.formacion||[],a=t.experiencia||[],i=e.length?e.map(n=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${F(n.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${F(n.descripcion)}
                        </p>

                        ${n.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${F(n.institucion)}
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
                <span>${F(n.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,r=Ii(t),o=Si(t);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${t.img}" 
                        alt="${F(t.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${F(t.name)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${F(t.area)}
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
                        ${F(t.area||"No especificada")}
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
    `}const re=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:Pt,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:Lt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:oa,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:yi,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:wi,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:Mt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:Xe,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Zr(){let t=re[0]?.id||1,e=!1,a=null;const i=document.createElement("section");i.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";function s(){return re.find(n=>n.id===t)||re[0]}function r(){const n=re.reduce((u,d)=>u+(d.formacion?.length||0),0),c=re.reduce((u,d)=>u+(d.experiencia?.length||0),0),l=re.filter(u=>`${u.name||""} ${(u.formacion||[]).map(d=>`${d.name||""} ${d.descripcion||""}`).join(" ")}`.toLowerCase().includes("doctor")||String(u.name||"").toLowerCase().includes("ph.d")).length;return{total:re.length,doctores:l,totalFormacion:n,totalExperiencia:c}}const o=()=>{const n=s(),c=r(),l=window.innerWidth<768&&!e;i.innerHTML=`<div class="mx-auto max-w-[1600px]">
            <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Trayectoria, competencias y experiencia</p>
                <h1 class="mt-3 text-4xl font-black md:text-6xl">Formación académica</h1>
                <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Consulte los grados, especializaciones, experiencia docente, trayectoria investigadora y capacidades profesionales de cada integrante del grupo.</p>
                <div class="mt-7 grid grid-cols-2 gap-3 md:max-w-3xl md:grid-cols-4">${[[c.total,"Investigadores"],[c.doctores,"Doctores"],[c.totalFormacion,"Registros formativos"],[c.totalExperiencia,"Experiencias"]].map(([d,f])=>`<article class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-3xl font-black">${d}</p><p class="text-xs font-bold text-emerald-200">${f}</p></article>`).join("")}</div>
            </header>
            <div class="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm" data-nav-equipo></div>
            <div class="mt-6 grid min-h-[720px] grid-cols-1 gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-[0.78fr_1.5fr] md:p-6">
                <aside class="max-h-[430px] overflow-y-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 custom-scrollbar md:max-h-none"><p class="text-xs font-black uppercase tracking-[0.18em] text-[#b37a2a]">Perfiles académicos</p><h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione un investigador</h2><p class="mt-2 text-sm leading-relaxed text-slate-600">Revise su formación, experiencia, áreas y trayectoria institucional.</p><div class="mt-5 flex flex-col gap-4">${re.map(d=>Qr(d,d.id===t)).join("")}</div></aside>
                <div id="detalle-container" class="fixed inset-0 z-[350] items-center justify-center bg-slate-950/80 p-4 md:relative md:inset-auto md:z-0 md:flex md:bg-transparent md:p-0 ${l?"hidden":"flex"}"><div class="h-[90%] w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#071820] p-5 shadow-2xl md:h-full md:max-w-none md:p-6">${Xr(n)}</div></div>
            </div>
        </div>`,i.querySelector("[data-nav-equipo]")?.appendChild(Ci()),i.querySelectorAll("[data-id]").forEach(d=>d.addEventListener("click",()=>{t=Number(d.dataset.id),window.innerWidth<768&&(e=!0),o()})),i.querySelector("#close-modal")?.addEventListener("click",()=>{e=!1,o()})};return window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{window.innerWidth>=768&&(e=!1),o()},120)}),o(),i}function eo(){return Zr()}const to=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,ao=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,io=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,so=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,ro=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,_i=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:ro,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:ao,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:io,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:Xe,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:Lt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:Pt,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:to,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:so,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:Xe,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:Mt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}],xt=Object.freeze({id:"nw-mmehb-2026",title:"El Kernel participa en Mathematical Modelling in Engineering & Human Behaviour 2026",date:"12–15 de julio de 2026",category:"Participación internacional",featured:!0,visualType:"mmehb-2026",image:null,imageAlt:"Flyer digital de la participación del Grupo El Kernel en MME&HB 2026",imageFit:"contain",excerpt:"Integrantes del Grupo El Kernel participaron en la XXVIII edición de MME&HB 2026, celebrada en la Universitat Politècnica de València, con resultados sobre métodos iterativos, optimización y sistemas no lineales.",tags:Object.freeze(["MME&HB 2026","Universitat Politècnica de València","Métodos iterativos","Optimización"]),content:{paragraphs:["El Grupo de Investigación El Kernel participó en la XXVIII edición del Congreso Internacional Mathematical Modelling in Engineering & Human Behaviour (MME&HB 2026), organizado por el Instituto Universitario de Matemática Multidisciplinar de la Universitat Politècnica de València.","El encuentro se celebró del 12 al 15 de julio de 2026 en la ETS Informática, Edificio 1E, en València, con participación presencial y en línea. El programa incluyó la sesión especial Recent advances in Iterative Processes for Solving Nonlinear Problems.","La representación del grupo estuvo vinculada con resultados recientes en familias iterativas con funciones peso, métodos para sistemas no lineales, convergencia local, estabilidad y algoritmos híbridos de optimización.","Las presentaciones mostraron la iteración general de una familia con funciones peso y un teorema de convergencia local, incluyendo condiciones sobre las funciones H y G y el análisis del orden de convergencia.","Esta participación fortalece la proyección internacional del grupo y su vinculación con investigadores del Instituto Universitario de Matemática Multidisciplinar y de la Universitat Politècnica de València."],list:["Evento: Mathematical Modelling in Engineering & Human Behaviour 2026.","Edición: XXVIII Congreso Internacional.","Fechas: 12–15 de julio de 2026.","Lugar: ETS Informática, Edificio 1E, Universitat Politècnica de València.","Organización: Instituto Universitario de Matemática Multidisciplinar (IMM).","Representación de El Kernel: Miguel A. Leonardo Sepúlveda, Natanael Ureña Castillo y Antmel Rodríguez Cabral.","Áreas: métodos iterativos, sistemas no lineales, funciones peso, convergencia, estabilidad y optimización."]},articleURL:"https://imm.webs.upv.es/jornadas/2026/home.html"});function oo(t){return t?{marco:"min-h-[340px] p-4",titulo:"text-3xl",subtitulo:"text-sm",nombres:"text-xs",formula:"text-[10px]"}:{marco:"min-h-[520px] p-6 md:p-8",titulo:"text-4xl md:text-6xl",subtitulo:"text-base md:text-lg",nombres:"text-sm md:text-base",formula:"text-xs md:text-sm"}}function na({compacto:t=!1}={}){const e=oo(t);return`
        <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#082f52] text-white shadow-xl ${e.marco}" aria-label="Flyer digital de MME&HB 2026">
            <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-2xl"></div>
            <div class="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-amber-300/10 blur-2xl"></div>

            <div class="relative z-10 flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div class="flex min-w-0 items-center gap-3">
                    <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
                        <img src="${_t}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" />
                    </span>
                    <div class="min-w-0">
                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">Grupo de Investigación</p>
                        <p class="truncate text-lg font-black">El Kernel</p>
                    </div>
                </div>
                <span class="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-200">Participación científica</span>
            </div>

            <div class="relative z-10 mt-5">
                <p class="font-black uppercase tracking-[0.18em] text-cyan-200 ${e.subtitulo}">Universitat Politècnica de València · 12–15 julio 2026</p>
                <h2 class="mt-2 font-black leading-[0.95] ${e.titulo}">MME&amp;HB 2026</h2>
                <p class="mt-3 max-w-3xl font-bold leading-tight ${e.subtitulo}">Mathematical Modelling in Engineering &amp; Human Behaviour</p>
                <p class="mt-2 text-xs font-semibold text-slate-300">XXVIII Congreso Internacional · Instituto Universitario de Matemática Multidisciplinar (IMM)</p>
            </div>

            <div class="relative z-10 mt-5 grid grid-cols-2 gap-3">
                <article class="rounded-xl border border-white/15 bg-white/8 p-3">
                    <p class="font-mono leading-relaxed text-cyan-100 ${e.formula}">y⁽ᵏ⁾ = x⁽ᵏ⁾ − [F′(x⁽ᵏ⁾)]⁻¹F(x⁽ᵏ⁾)</p>
                    <p class="mt-2 text-[10px] font-black uppercase tracking-wider text-amber-200">Funciones peso y métodos iterativos</p>
                </article>
                <article class="rounded-xl border border-white/15 bg-white/8 p-3">
                    <p class="font-mono leading-relaxed text-cyan-100 ${e.formula}">H(0)=H′(0)=1, &nbsp; G(0)=G′(0)=0</p>
                    <p class="mt-2 text-[10px] font-black uppercase tracking-wider text-amber-200">Convergencia local y análisis numérico</p>
                </article>
            </div>

            <div class="relative z-10 mt-5 rounded-2xl border border-cyan-200/20 bg-white/8 p-4">
                <p class="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Representación de El Kernel</p>
                <ol class="mt-3 space-y-2 ${e.nombres}">
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">1</span><span><strong>Miguel A. Leonardo Sepúlveda</strong><br><span class="text-slate-300">Métodos iterativos · sistemas no lineales · EDPs</span></span></li>
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">2</span><span><strong>Natanael Ureña Castillo</strong><br><span class="text-slate-300">Optimización · algoritmos híbridos · cuasi-Newton</span></span></li>
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">3</span><span><strong>Antmel Rodríguez Cabral</strong><br><span class="text-slate-300">Análisis numérico · estabilidad · dinámica</span></span></li>
                </ol>
            </div>

            <div class="relative z-10 mt-auto pt-5">
                <div class="flex flex-col gap-1 border-t border-white/15 pt-4 text-xs text-slate-300 sm:flex-row sm:items-end sm:justify-between">
                    <span><strong class="text-white">IMM · ETS Informática, Edificio 1E</strong><br>València, España</span>
                    <span class="font-black text-amber-200">MME&amp;HB 2026</span>
                </div>
            </div>
        </div>
    `}function ce(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function no(t){if(t?.visualType==="mmehb-2026")return na();const e=t?.imageFit==="cover"?"object-cover":"object-contain";return t?.image?`
            <img
                src="${ce(t.image)}"
                alt="${ce(t.imageAlt||t.title)}"
                class="h-full max-h-[680px] w-full rounded-2xl ${e}"
                loading="eager"
            />
        `:`
        <div class="flex h-full w-full items-center justify-center font-bold text-slate-400">
            Imagen no disponible
        </div>
    `}function co(t=null){return t?`
        <section class="w-full px-4 py-10 sm:px-6 md:py-14 lg:px-10" aria-labelledby="titulo-noticia-destacada">
            <div class="mx-auto grid max-w-[1600px] grid-cols-1 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
                <div class="min-h-[520px] bg-slate-100 p-4 md:p-6 lg:min-h-[680px]">
                    ${no(t)}
                </div>

                <div class="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                    <div class="mb-5 flex flex-wrap items-center gap-3">
                        <span class="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0b5963]">
                            ${ce(t.category||"Noticia destacada")}
                        </span>
                        <span class="text-sm font-bold text-slate-500">${ce(t.date)}</span>
                    </div>

                    <h2 id="titulo-noticia-destacada" class="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                        ${ce(t.title)}
                    </h2>

                    <p class="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">${ce(t.excerpt)}</p>

                    ${Array.isArray(t.tags)&&t.tags.length?`<div class="mt-6 flex flex-wrap gap-2">${t.tags.map(e=>`<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">${ce(e)}</span>`).join("")}</div>`:""}

                    <button
                        type="button"
                        data-news-btn="${ce(t.id)}"
                        class="mt-8 inline-flex self-start items-center justify-center gap-2 rounded-xl bg-[#0b5963] px-6 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#063e46]"
                    >
                        Leer noticia destacada →
                    </button>
                </div>
            </div>
        </section>
    `:""}function Z(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function lo({id:t,title:e,date:a,image:i,imageAlt:s,excerpt:r,category:o="Noticia",imageFit:n="contain",visualType:c="image"}){const l=n==="cover"?"object-cover":"object-contain",u=c==="mmehb-2026",d=u?"h-[430px] md:h-[500px]":"h-64 md:h-72 2xl:h-96",f=u?na({compacto:!0}):i?`
                <img
                    src="${Z(i)}"
                    alt="${Z(s||e)}"
                    class="h-full w-full ${l} rounded-xl"
                    loading="lazy"
                />
              `:`
                <div class="flex h-full w-full items-center justify-center font-bold text-slate-400">
                    Imagen no disponible
                </div>
              `;return`
        <article
            data-news-card="${Z(t)}"
            class="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div class="${d} flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 p-3">
                ${f}
            </div>

            <div class="flex flex-1 flex-col space-y-3 p-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <span class="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0b5963]">
                        ${Z(o)}
                    </span>
                    <span class="text-sm font-semibold text-slate-500">${Z(a)}</span>
                </div>

                <h3 class="text-lg font-black leading-tight text-slate-900 2xl:text-2xl">${Z(e)}</h3>
                <p class="text-sm leading-relaxed text-slate-600 2xl:text-xl">${Z(r)}</p>

                <button
                    type="button"
                    data-news-btn="${Z(t)}"
                    aria-label="Ver detalles de la noticia ${Z(e)}"
                    class="mt-auto self-start font-black text-[#0b5963] transition hover:text-[#063e46] hover:underline 2xl:text-xl"
                >
                    Más detalles →
                </button>
            </div>
        </article>
    `}function uo(t=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${t.map(i=>lo(i)).join("")}
            </div>
        </section>
    `}function po(){const t=encodeURIComponent("Propuesta de noticia para El Kernel"),e=encodeURIComponent(`Saludos,

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
    `}function mo(t=[]){return[...t].sort((e,a)=>e.featured&&!a.featured?-1:!e.featured&&a.featured?1:0)}function fo(){const t=document.createElement("section");t.className="w-full bg-slate-100 font-sans";const e=mo([xt,..._i.filter(i=>i.id!==xt.id)]),a=e.find(i=>i.featured)||e[0];return t.innerHTML=`
        <header class="bg-[#071820] px-4 py-10 text-white md:px-8 md:py-14">
            <div class="mx-auto max-w-[1600px]">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Actualidad, eventos y resultados</p>
                <h1 class="mt-3 text-4xl font-black md:text-6xl">Noticias del Grupo El Kernel</h1>
                <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Participaciones internacionales, publicaciones, defensas, proyectos, actividades de formación y transferencia científica.</p>
            </div>
        </header>
        ${co(a)}
        ${uo(e)}
        ${po()}
    `,t}function Se(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function go({title:t,date:e,category:a,visualType:i,content:s={paragraphs:[],list:[]},articleURL:r}){const o=(s.paragraphs||[]).map(l=>`<p>${Se(l)}</p>`).join(""),n=(s.list||[]).length?`<ul class="space-y-3">${s.list.map(l=>`<li class="flex items-start gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0b5963]"></span><span>${Se(l)}</span></li>`).join("")}</ul>`:"",c=i==="mmehb-2026"?`<div class="mb-7">${na()}</div>`:"";return`
        <div role="dialog" aria-modal="true" aria-labelledby="titulo-modal-noticia" id="newsModal" class="fixed inset-0 z-[500] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm md:p-6">
            <article class="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <header class="relative border-b border-slate-200 bg-[#071820] px-6 py-6 text-white md:px-9">
                    <div class="pr-12">
                        <div class="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-widest text-cyan-200">
                            <span>${Se(a||"Noticia")}</span>
                            <span aria-hidden="true">·</span>
                            <span>${Se(e||"")}</span>
                        </div>
                        <h2 id="titulo-modal-noticia" class="mt-3 text-2xl font-black leading-tight md:text-4xl">${Se(t)}</h2>
                    </div>
                    <button type="button" data-close-modal aria-label="Cerrar noticia" class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl font-black text-white transition hover:bg-white hover:text-slate-950">×</button>
                </header>

                <div class="flex-1 overflow-y-auto px-5 py-6 md:px-9 md:py-8">
                    ${c}
                    <div class="space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">${o}</div>
                    ${n?`<section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7"><h3 class="mb-5 text-xl font-black text-slate-950">Datos principales</h3>${n}</section>`:""}
                </div>

                <footer class="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row sm:justify-end md:px-9">
                    ${r?`<a href="${Se(r)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl bg-[#0b5963] px-5 py-3 font-black text-white transition hover:bg-[#063e46]">Consultar sitio oficial</a>`:""}
                    <button type="button" data-close-modal class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100">Cerrar</button>
                </footer>
            </article>
        </div>
    `}const bo=Object.freeze([xt,..._i.filter(t=>t.id!==xt.id)]);function ho(t){t&&t.addEventListener("click",e=>{const a=e.target.closest("[data-news-btn], [data-news-card]");if(!a||!t.contains(a))return;const i=a.dataset.newsBtn||a.dataset.newsCard,s=bo.find(r=>String(r.id)===String(i));if(!s){console.warn("No se encontró la noticia con id:",i);return}xo(s)})}function xo(t){document.querySelector("#newsModal")?.remove();const e=document.createElement("div");e.innerHTML=go(t);const a=e.firstElementChild;if(!a){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(a),document.body.style.overflow="hidden";const i=()=>{a.remove(),document.body.style.overflow="",document.removeEventListener("keydown",s)},s=r=>{r.key==="Escape"&&i()};a.querySelectorAll("[data-close-modal]").forEach(r=>{r.addEventListener("click",i)}),a.addEventListener("click",r=>{r.target===a&&i()}),document.addEventListener("keydown",s),a.querySelector("[data-close-modal]")?.focus()}function vo(){const t=fo();return ho(t),t}const yo=Object.freeze([{patron:/mathematics and computers in simulation/i,nombre:"Elsevier",detalle:"Mathematics and Computers in Simulation",clase:"border-orange-200 bg-orange-50 text-orange-900",sigla:"EL"},{patron:/numerical algorithms|mediterranean journal of mathematics|bulletin of the malaysian mathematical sciences society/i,nombre:"Springer Nature",detalle:"Springer",clase:"border-blue-200 bg-blue-50 text-blue-950",sigla:"SN"},{patron:/mathematische nachrichten/i,nombre:"Wiley",detalle:"Wiley",clase:"border-indigo-200 bg-indigo-50 text-indigo-950",sigla:"W"},{patron:/journal of computational methods in sciences and engineering/i,nombre:"SAGE",detalle:"SAGE Publishing",clase:"border-rose-200 bg-rose-50 text-rose-950",sigla:"S"},{patron:/mathematics|algorithms|computation/i,nombre:"MDPI",detalle:"Open-access journal",clase:"border-amber-200 bg-amber-50 text-slate-950",sigla:"Σ"}]);function ut(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function wo(t=""){return yo.find(e=>e.patron.test(String(t)))||{nombre:"Revista científica",detalle:"Publicación académica",clase:"border-slate-200 bg-slate-50 text-slate-900",sigla:"J"}}function Sa(t,e=!1){const a=wo(t);return`
        <div class="inline-flex min-w-0 items-center gap-3 rounded-2xl border ${a.clase} ${e?"px-3 py-2":"px-4 py-3"}" aria-label="Editorial o familia de la revista ${ut(t)}">
            <span class="flex ${e?"h-9 w-9 text-sm":"h-12 w-12 text-lg"} shrink-0 items-center justify-center rounded-xl border border-current/15 bg-white/80 font-black shadow-sm">${ut(a.sigla)}</span>
            <span class="min-w-0">
                <span class="block truncate ${e?"text-sm":"text-base"} font-black">${ut(a.nombre)}</span>
                <span class="block truncate text-xs font-semibold opacity-70">${ut(a.detalle)}</span>
            </span>
        </div>
    `}function U(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ti(t){return t?.name||t?.title||"Investigador"}function _a(t){return t?.title||t?.tile||"Revista no especificada"}function Pi(t){return String(t?.DOI||t?.doi||"").trim()}function Eo(t){const e=Pi(t);return t?.url?t.url:e?e.startsWith("http")?e:`https://doi.org/${e}`:"#"}function ko(t){return[...t?.publicaciones||[]].sort((e,a)=>Number(a.year||0)-Number(e.year||0)||String(e.contenido||"").localeCompare(String(a.contenido||"")))}function Ao(t,e=!1){const a=Ti(t),i=t.publicaciones||[],s=Math.max(...i.map(r=>Number(r.year||0)),0)||"";return`
        <button data-id="${t.id}" type="button"
            class="group w-full rounded-2xl border p-4 text-left transition-all ${e?"border-[#0f5b5d] bg-[#0f5b5d] text-white shadow-xl":"border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"}">
            <div class="flex items-center gap-4">
                <img src="${t.img}" alt="${U(a)}" class="h-16 w-16 shrink-0 rounded-2xl border-2 object-cover ${e?"border-white/70":"border-slate-100"}">
                <div class="min-w-0 flex-1">
                    <h3 class="font-black leading-tight">${U(a)}</h3>
                    <p class="mt-1 text-xs font-bold ${e?"text-emerald-100":"text-slate-500"}">${i.length} publicación${i.length===1?"":"es"}${s?` · Última: ${s}`:""}</p>
                    ${t.area?`<p class="mt-2 line-clamp-2 text-xs leading-relaxed ${e?"text-white/75":"text-slate-500"}">${U(t.area)}</p>`:""}
                </div>
            </div>
        </button>
    `}function Co(t){if(!t)return'<div class="flex h-full items-center justify-center text-white">No hay investigador seleccionado.</div>';const e=Ti(t),a=ko(t),i=a.map(n=>Number(n.year)).filter(Boolean),s=[...new Set(a.map(n=>n.q).filter(Boolean))],r=[...new Set(a.map(_a).filter(Boolean))],o=a.map(n=>{const c=_a(n),l=Pi(n);return`
            <article class="mb-5 rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl md:p-6">
                <div class="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    ${Sa(c)}
                    <div class="flex shrink-0 gap-2">
                        <span class="rounded-full bg-[#071820] px-3 py-1.5 text-xs font-black text-white">${U(n.year)}</span>
                        <span class="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-900">${U(n.q||"S/C")}</span>
                    </div>
                </div>
                <p class="text-xs font-black uppercase tracking-[0.15em] text-[#b37a2a]">${U(c)}</p>
                <h4 class="mt-2 text-base font-black leading-snug text-slate-950 md:text-lg">${U(n.contenido)}</h4>
                <p class="mt-3 text-sm leading-relaxed text-slate-600"><span class="font-black text-[#0f5b5d]">Autores:</span> ${U(n.autores)}</p>
                <div class="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-4">
                    ${l?`<a href="${U(Eo(n))}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-[#0f5b5d] px-4 py-2 text-sm font-black text-white hover:bg-[#0a4648]">Abrir DOI <span aria-hidden="true">↗</span></a>`:'<span class="text-sm font-bold text-slate-400">DOI no disponible</span>'}
                    ${n.pdf?`<a href="${U(n.pdf)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-black text-slate-700 hover:border-[#0f5b5d] hover:text-[#0f5b5d]">Descargar PDF</a>`:""}
                </div>
            </article>
        `}).join("");return`
        <div class="flex h-full flex-col text-white">
            <div class="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div class="flex items-start gap-4">
                    <img src="${t.img}" alt="${U(e)}" class="hidden h-16 w-16 rounded-2xl border-2 border-emerald-300 object-cover shadow-lg sm:block">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Producción científica por investigador</p>
                        <h2 class="mt-1 text-xl font-black md:text-2xl">${U(e)}</h2>
                        ${t.area?`<p class="mt-2 text-sm leading-relaxed text-slate-300">${U(t.area)}</p>`:""}
                    </div>
                </div>
                <button id="close-modal" type="button" aria-label="Cerrar publicaciones" class="text-3xl text-white hover:text-emerald-200 md:hidden">×</button>
            </div>

            <div class="mb-5 grid grid-cols-3 gap-3">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Publicaciones</p><p class="mt-1 text-2xl font-black">${a.length}</p></div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Periodo</p><p class="mt-1 text-lg font-black">${i.length?`${Math.min(...i)}–${Math.max(...i)}`:"—"}</p></div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Cuartiles</p><p class="mt-1 text-lg font-black">${s.length?s.join(" · "):"—"}</p></div>
            </div>

            <div class="mb-5 flex gap-2 overflow-x-auto pb-1">
                ${r.map(n=>Sa(n,!0)).join("")}
            </div>

            <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">${o||'<div class="rounded-2xl bg-white p-6 text-center text-slate-600">No hay publicaciones registradas.</div>'}</div>
        </div>
    `}function Io(){let t=G[0]?.id||1,e=!1,a=null;const i=document.createElement("section");i.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";function s(p){return String(p?.DOI||p?.doi||"").trim().toLowerCase()}function r(p){return String(p?.journal||p?.title||p?.tile||"").trim()}function o(p){return String(p?.articleTitle||p?.contenido||"").trim()}function n(p){return String(p?.q||p?.quartile||"").trim().toUpperCase()}function c(p){return s(p)||[p?.year||"",r(p),o(p)].join("-").trim().toLowerCase()}function l(){const p=new Map;return G.forEach(x=>(x.publicaciones||[]).forEach(k=>{const b=c(k);b&&!p.has(b)&&p.set(b,k)})),[...p.values()]}function u(){const p=l(),x=p.map(k=>Number(k.year)).filter(Boolean);return{total:p.length,investigadores:G.length,q1:p.filter(k=>n(k)==="Q1").length,periodo:x.length?`${Math.min(...x)}–${Math.max(...x)}`:"—"}}function d(){return G.find(p=>Number(p.id)===Number(t))||G[0]}const f=()=>{const p=d(),x=u(),k=window.innerWidth<768&&!e;i.innerHTML=`
            <div class="mx-auto max-w-[1600px]">
                <header class="overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <div>
                            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Producción científica del Grupo El Kernel</p>
                            <h1 class="mt-3 text-4xl font-black leading-tight md:text-6xl">Publicaciones con rigor, trazabilidad e impacto</h1>
                            <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Explore la producción por investigador, revista, editorial, año, cuartil y DOI. Las identidades editoriales permiten reconocer rápidamente el ecosistema de publicación de cada trabajo.</p>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            ${[[x.total,"Artículos únicos"],[x.investigadores,"Investigadores"],[x.q1,"Artículos Q1"],[x.periodo,"Periodo registrado"]].map(([b,y])=>`<article class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-2xl font-black text-white md:text-3xl">${b}</p><p class="mt-1 text-xs font-bold uppercase tracking-wide text-emerald-200">${y}</p></article>`).join("")}
                        </div>
                    </div>
                </header>

                <div class="mt-8 grid min-h-[720px] grid-cols-1 gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-[0.78fr_1.5fr] md:p-6">
                    <aside class="max-h-[430px] overflow-y-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 custom-scrollbar md:max-h-none">
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#b37a2a]">Autores del grupo</p>
                        <h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione un investigador</h2>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">La ficha muestra sus revistas, cuartiles, periodo y acceso directo a cada publicación.</p>
                        <div class="mt-5 flex flex-col gap-4">${G.map(b=>Ao(b,Number(b.id)===Number(t))).join("")}</div>
                    </aside>

                    <div id="detalle-container" class="fixed inset-0 z-[350] items-center justify-center bg-slate-950/80 p-4 md:relative md:inset-auto md:z-0 md:flex md:bg-transparent md:p-0 ${k?"hidden":"flex"}">
                        <div class="h-[88%] w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#071820] p-5 shadow-2xl md:h-full md:max-w-none md:p-6">${Co(p)}</div>
                    </div>
                </div>
            </div>
        `,i.querySelectorAll("[data-id]").forEach(b=>{b.onclick=()=>{t=Number(b.dataset.id),window.innerWidth<768&&(e=!0),f()}}),i.querySelector("#close-modal")?.addEventListener("click",()=>{e=!1,f()})};return window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{window.innerWidth>=768&&(e=!1),f()},120)}),f(),i}function So(){return Io()}function q(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function _o(t){return J.find(e=>e.id===t)||J[0]}function jt(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${q(e)}</span>
        </li>
    `).join("")}function To(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${q(e)}
        </span>
    `).join("")}function Po(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${q(e)}
        </span>
    `).join("")}function Lo(t,e=!1){return`
        <button 
            type="button"
            data-linea-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${q(t.categoria)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${q(t.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${q(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${q(t.desarrollo).slice(0,185)}${String(t.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function Mo(t){const e=t.proyectosAsociados&&t.proyectosAsociados.length>0,a=t.publicacionesClave&&t.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${q(t.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${q(t.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${q(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${q(t.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${q(t.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${q(t.prioridad)}</p>
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
                            ${jt(t.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${Po(t.investigadores)}
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
                                    ${jt(t.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${a?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${jt(t.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${To(t.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function Ro(){const t=new Set(J.map(i=>i.categoria)),e=J.filter(i=>i.proyectosAsociados?.length>0).length,a=J.filter(i=>i.publicacionesClave?.length>0).length;return{total:J.length,categorias:t.size,conProyectos:e,conPublicaciones:a}}function Do(){let t=J[0]?.id||1;const e=document.createElement("section");e.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=()=>{const i=_o(t),s=Ro();e.innerHTML=`
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
                        ${J.map(r=>Lo(r,r.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${Mo(i)}
                </div>
            </div>
        `,e.querySelectorAll("[data-linea-id]").forEach(r=>{r.onclick=()=>{t=parseInt(r.dataset.lineaId),a()}})};return a(),e}function Oo(){return Do()}function D(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ta(t=[]){return t.map(e=>`<li class="flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b37a2a]"></span><span>${D(e)}</span></li>`).join("")}function $o(t=[]){return t.map(e=>`<span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-[#0f5b5d]">${D(e)}</span>`).join("")}function No(t,e){return`<button type="button" data-proyecto-id="${t.id}" class="w-full rounded-2xl border p-5 text-left transition ${e?"border-[#0f5b5d] bg-[#0f5b5d] text-white shadow-xl":"border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"}">
        <div class="mb-3 flex flex-wrap gap-2"><span class="rounded-full bg-[#d5a54a] px-3 py-1 text-[11px] font-black uppercase text-[#06141a]">${D(t.estado)}</span><span class="rounded-full ${e?"bg-white/10 text-white":"bg-slate-100 text-slate-600"} px-3 py-1 text-[11px] font-black uppercase">${D(t.convocatoria)}</span></div>
        <h3 class="font-black leading-tight">${D(t.title)}</h3>
        <p class="mt-3 text-sm leading-relaxed ${e?"text-white/75":"text-slate-500"}">${D(t.enfoque)}</p>
        <p class="mt-4 text-xs font-bold ${e?"text-emerald-100":"text-slate-500"}">${D(t.institucion)} · ${D(t.duracion)}</p>
    </button>`}function jo(t){return`<article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
        <header class="relative overflow-hidden bg-[#071820] px-6 py-8 text-white md:px-9 md:py-10">
            <div class="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-400/10 blur-2xl"></div>
            <div class="relative"><div class="flex flex-wrap gap-2"><span class="rounded-full bg-[#d5a54a] px-3 py-1 text-xs font-black uppercase text-[#06141a]">${D(t.estado)}</span><span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase">${D(t.convocatoria)}</span></div><h2 class="mt-5 max-w-4xl text-2xl font-black leading-tight md:text-4xl">${D(t.title)}</h2><p class="mt-4 max-w-4xl leading-relaxed text-slate-300">${D(t.contenido)}</p></div>
        </header>
        <div class="p-6 md:p-9">
            <section class="grid grid-cols-2 gap-3 md:grid-cols-4">${[["Institución",t.institucion],["Tipo",t.tipo],["Duración",t.duracion],["Estado",t.estado]].map(([e,a])=>`<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p class="text-xs font-black uppercase tracking-wide text-[#b37a2a]">${D(e)}</p><p class="mt-1 font-black text-slate-950">${D(a)}</p></div>`).join("")}</section>
            <section class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2"><div><h3 class="text-xl font-black text-[#071820]">Contexto y línea</h3><p class="mt-3 leading-relaxed text-slate-600">${D(t.contexto)}</p><p class="mt-4 rounded-2xl border-l-4 border-[#0f5b5d] bg-emerald-50 p-4 text-sm font-bold text-slate-700">${D(t.linea)}</p></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2"><div><h3 class="text-lg font-black text-[#071820]">Objetivos</h3><ul class="mt-3 space-y-3">${Ta(t.objetivos)}</ul></div><div><h3 class="text-lg font-black text-[#071820]">Resultados esperados</h3><ul class="mt-3 space-y-3">${Ta(t.resultados)}</ul></div></div></section>
            <section class="mt-8 rounded-3xl bg-[#071820] p-6 text-white"><p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Equipo vinculado</p><div class="mt-4 flex flex-wrap gap-2">${(t.equipo||[]).map(e=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold">${D(e)}</span>`).join("")}</div></section>
            <div class="mt-7 flex flex-wrap gap-2">${$o(t.etiquetas)}</div>
        </div>
    </article>`}function zo(){let t=_e[0]?.id||1;const e=document.createElement("section");e.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";const a=()=>{const i=_e.find(s=>s.id===t)||_e[0];e.innerHTML=`<div class="mx-auto max-w-[1600px]">
            <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12"><p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Investigación, innovación y transferencia</p><h1 class="mt-3 text-4xl font-black md:text-6xl">Proyectos y propuestas estratégicas</h1><p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Organizamos cada iniciativa por estado, institución, duración, objetivos, resultados y equipo. Las propuestas sometidas se identifican como tales y no se presentan como proyectos financiados hasta recibir confirmación formal.</p><div class="mt-7 grid grid-cols-2 gap-3 md:max-w-2xl md:grid-cols-3"><div class="rounded-2xl bg-white/5 p-4"><p class="text-3xl font-black">${_e.length}</p><p class="text-xs font-bold text-emerald-200">Iniciativas registradas</p></div><div class="rounded-2xl bg-white/5 p-4"><p class="text-2xl font-black">FONDOCyT</p><p class="text-xs font-bold text-emerald-200">Convocatoria</p></div><div class="col-span-2 rounded-2xl bg-white/5 p-4 md:col-span-1"><p class="text-2xl font-black">Trazabilidad</p><p class="text-xs font-bold text-emerald-200">Estado verificable</p></div></div></header>
            <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.5fr]"><aside class="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-lg"><p class="text-xs font-black uppercase tracking-[0.18em] text-[#b37a2a]">Portafolio</p><h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione una iniciativa</h2><div class="mt-5 space-y-4">${_e.map(s=>No(s,s.id===t)).join("")}</div></aside><div>${jo(i)}</div></div>
        </div>`,e.querySelectorAll("[data-proyecto-id]").forEach(s=>s.addEventListener("click",()=>{t=Number(s.dataset.proyectoId),a()}))};return a(),e}function Uo(){return zo()}function qo(){return`
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
    `}function Fo(){return`
    
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
            ${qo()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function Bo(){const t=document.createElement("section");return t.classList.add("w-full","tabletBig:w-7xl"),t.innerHTML=`
    ${Fo()}
    `,t}function Vo(){const t=document.getElementById("contactForm");t&&t.addEventListener("submit",Ho)}async function Ho(t){t.preventDefault();const e=t.target,a=new FormData(e),i=Object.fromEntries(a.entries()),s=Go(i);if(s.length>0){Wo(s);return}await Jo(e,i)}function Go(t){const e=[];return t.nombre?.trim()||e.push("El nombre es obligatorio."),t.asunto?.trim()||e.push("El asunto es obligatorio."),t.mensaje?.trim()||e.push("El mensaje es obligatorio."),t.correo?.trim()?Ko(t.correo)||e.push("El formato del correo no es válido."):e.push("El correo es obligatorio."),e}function Ko(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function Wo(t){mt(t[0],"error")}function mt(t,e="success"){const a=document.querySelector(".custom-toast");a&&a.remove();const i=document.createElement("div");i.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,e==="success"?i.classList.add("bg-green-600"):i.classList.add("bg-red-600"),i.textContent=t,document.body.appendChild(i),setTimeout(()=>{i.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{i.classList.add("translate-x-full","opacity-0"),setTimeout(()=>i.remove(),300)},3e3)}async function Jo(t,e){const a=document.getElementById("submitBtn");a.disabled=!0,a.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})).ok?(mt("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),t.reset()):mt("Hubo un problema al enviar el mensaje.","error")}catch{mt("Error de conexión. Intenta nuevamente.","error")}a.disabled=!1,a.textContent="Enviar"}function Yo(){const t=Bo();return setTimeout(()=>{Vo()},0),t}function Qo(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-primer-input"),a=t.querySelector("#banner-primer-process"),i=t.querySelector("#banner-primer-clear"),s=t.querySelector("#banner-primer-message"),r=t.querySelector("#banner-primer-preview"),o=t.querySelector("#banner-primer-count"),n=t.querySelector("#banner-primer-download-1ac"),c=t.querySelector("#banner-primer-download-2pp");let l=[];function u(m,E="success"){s.textContent=m,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),E==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function d(){s.textContent="",s.classList.add("hidden")}function f(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function p(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function x(m){const E=String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return E.includes("	")?E.split("	").map(w=>w.trim()).filter(w=>w!==""):E.includes(";")?E.split(";").map(w=>w.trim()).filter(w=>w!==""):E.split(/\s+/).map(w=>w.trim()).filter(w=>w!=="")}function k(m){const E=m.split(/\r?\n/).map(I=>I.trim()).filter(Boolean),w=[],S=[],z=new Set;return E.forEach((I,O)=>{const P=O+1,N=x(I);if(N.length!==3){S.push(`Línea ${P}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const Ae=f(N[0]),Fe=Number(p(N[1])),Be=Number(p(N[2]));if(!/^A[0-9]{8}$/.test(Ae)){S.push(`Línea ${P}: la matrícula "${Ae}" no es válida. Debe tener el formato A00108671.`);return}if(z.has(Ae)){S.push(`Línea ${P}: la matrícula ${Ae} está repetida.`);return}if(!Number.isFinite(Fe)){S.push(`Línea ${P}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(Be)){S.push(`Línea ${P}: la calificación 2PP no es numérica.`);return}if(Fe<0||Fe>15){S.push(`Línea ${P}: 1AC debe estar entre 0 y 15.`);return}if(Be<0||Be>20){S.push(`Línea ${P}: 2PP debe estar entre 0 y 20.`);return}const ya=Fe+Be;if(ya>35){S.push(`Línea ${P}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}z.add(Ae),w.push({matricula:Ae,grade1AC:Fe,grade2PP:Be,total:ya})}),{records:w,errors:S}}function b(m){return Number.isInteger(m)?String(m):m.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function y(m){return String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(m){if(m.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,o.textContent="0 estudiantes";return}r.innerHTML=m.map((E,w)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${w+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${y(E.matricula)}
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
                `).join(""),o.textContent=`${m.length} estudiante${m.length===1?"":"s"}`}function R(m,E,w){return[["MATRICULA",w],...m.map(I=>[I.matricula,b(I[E])])].map(I=>I.join(";")).join(`\r
`)}function g(m,E){const S=new Blob(["\uFEFF"+m],{type:"text/csv;charset=utf-8;"}),z=URL.createObjectURL(S),I=document.createElement("a");I.href=z,I.download=E,document.body.appendChild(I),I.click(),I.remove(),window.setTimeout(()=>{URL.revokeObjectURL(z)},1e3)}function h(){l=[],e.value="",_([]),n.disabled=!0,c.disabled=!0,d(),e.focus()}return a.addEventListener("click",()=>{const m=e.value.trim();if(!m){l=[],_([]),n.disabled=!0,c.disabled=!0,u("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:E,errors:w}=k(m);if(w.length>0){l=[],_([]),n.disabled=!0,c.disabled=!0,u(w.join(" "),"error");return}l=E,_(l),n.disabled=!1,c.disabled=!1,u(`Los datos de ${E.length} estudiante${E.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",h),n.addEventListener("click",()=>{if(l.length===0)return;const m=R(l,"grade1AC","1AC");g(m,"Banner_APEC_Primer_Periodo_1AC.csv")}),c.addEventListener("click",()=>{if(l.length===0)return;const m=R(l,"grade2PP","2PP");g(m,"Banner_APEC_Primer_Periodo_2PP.csv")}),t}function Xo(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-segundo-input"),a=t.querySelector("#banner-segundo-process"),i=t.querySelector("#banner-segundo-clear"),s=t.querySelector("#banner-segundo-message"),r=t.querySelector("#banner-segundo-preview"),o=t.querySelector("#banner-segundo-count"),n=t.querySelector("#banner-segundo-download");let c=[];function l(g){return String(g).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function u(g){return String(g).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function d(g){const h=String(g).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return h.includes("	")?h.split("	").map(m=>m.trim()).filter(m=>m!==""):h.includes(";")?h.split(";").map(m=>m.trim()).filter(m=>m!==""):h.split(/\s+/).map(m=>m.trim()).filter(m=>m!=="")}function f(g){return Number.isInteger(g)?String(g):g.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function p(g){return String(g).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function x(g,h="success"){s.textContent=g,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),h==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function k(g){const h=g.split(/\r?\n/).map(S=>S.trim()).filter(Boolean),m=[],E=[],w=new Set;return h.forEach((S,z)=>{const I=z+1,O=d(S);if(O.length!==2){E.push(`Línea ${I}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const P=l(O[0]),N=Number(u(O[1]));if(!/^A[0-9]{8}$/.test(P)){E.push(`Línea ${I}: la matrícula "${P}" no es válida. Debe tener el formato A00108671.`);return}if(w.has(P)){E.push(`Línea ${I}: la matrícula ${P} está repetida.`);return}if(!Number.isFinite(N)){E.push(`Línea ${I}: la calificación 3SP no es numérica.`);return}if(N<0||N>35){E.push(`Línea ${I}: 3SP debe estar entre 0 y 35.`);return}w.add(P),m.push({matricula:P,grade3SP:N})}),{records:m,errors:E}}function b(g){if(g.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,o.textContent="0 estudiantes";return}r.innerHTML=g.map((h,m)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${m+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${p(h.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${f(h.grade3SP)}
                        </td>
                    </tr>
                `).join(""),o.textContent=`${g.length} estudiante${g.length===1?"":"s"}`}function y(g){return[["MATRICULA","3SP"],...g.map(m=>[m.matricula,f(m.grade3SP)])].map(m=>m.join(";")).join(`\r
`)}function _(g,h){const m=new Blob(["\uFEFF"+g],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(m),w=document.createElement("a");w.href=E,w.download=h,document.body.appendChild(w),w.click(),w.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function R(){c=[],e.value="",b([]),n.disabled=!0,s.textContent="",s.classList.add("hidden"),e.focus()}return a.addEventListener("click",()=>{const g=e.value.trim();if(!g){c=[],b([]),n.disabled=!0,x("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:h,errors:m}=k(g);if(m.length>0){c=[],b([]),n.disabled=!0,x(m.join(" "),"error");return}c=h,b(h),n.disabled=!1,x(`Los datos de ${h.length} estudiante${h.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",R),n.addEventListener("click",()=>{c.length!==0&&_(y(c),"Banner_APEC_Segundo_Periodo_3SP.csv")}),t}function Zo(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-final-input"),a=t.querySelector("#banner-final-process"),i=t.querySelector("#banner-final-clear"),s=t.querySelector("#banner-final-message"),r=t.querySelector("#banner-final-preview"),o=t.querySelector("#banner-final-count"),n=t.querySelector("#banner-final-download");let c=[];function l(g){return String(g).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function u(g){return String(g).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function d(g){const h=String(g).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return h.includes("	")?h.split("	").map(m=>m.trim()).filter(m=>m!==""):h.includes(";")?h.split(";").map(m=>m.trim()).filter(m=>m!==""):h.split(/\s+/).map(m=>m.trim()).filter(m=>m!=="")}function f(g){return Number.isInteger(g)?String(g):g.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function p(g){return String(g).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function x(g,h="success"){s.textContent=g,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),h==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function k(g){const h=g.split(/\r?\n/).map(S=>S.trim()).filter(Boolean),m=[],E=[],w=new Set;return h.forEach((S,z)=>{const I=z+1,O=d(S);if(O.length!==2){E.push(`Línea ${I}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const P=l(O[0]),N=Number(u(O[1]));if(!/^A[0-9]{8}$/.test(P)){E.push(`Línea ${I}: la matrícula "${P}" no es válida. Debe tener el formato A00108671.`);return}if(w.has(P)){E.push(`Línea ${I}: la matrícula ${P} está repetida.`);return}if(!Number.isFinite(N)){E.push(`Línea ${I}: la calificación 4EF no es numérica.`);return}if(N<0||N>30){E.push(`Línea ${I}: 4EF debe estar entre 0 y 30.`);return}w.add(P),m.push({matricula:P,grade4EF:N})}),{records:m,errors:E}}function b(g){if(g.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,o.textContent="0 estudiantes";return}r.innerHTML=g.map((h,m)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${m+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${p(h.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${f(h.grade4EF)}
                        </td>
                    </tr>
                `).join(""),o.textContent=`${g.length} estudiante${g.length===1?"":"s"}`}function y(g){return[["MATRICULA","4EF"],...g.map(m=>[m.matricula,f(m.grade4EF)])].map(m=>m.join(";")).join(`\r
`)}function _(g,h){const m=new Blob(["\uFEFF"+g],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(m),w=document.createElement("a");w.href=E,w.download=h,document.body.appendChild(w),w.click(),w.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function R(){c=[],e.value="",b([]),n.disabled=!0,s.textContent="",s.classList.add("hidden"),e.focus()}return a.addEventListener("click",()=>{const g=e.value.trim();if(!g){c=[],b([]),n.disabled=!0,x("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:h,errors:m}=k(g);if(m.length>0){c=[],b([]),n.disabled=!0,x(m.join(" "),"error");return}c=h,b(h),n.disabled=!1,x(`Los datos de ${h.length} estudiante${h.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",R),n.addEventListener("click",()=>{c.length!==0&&_(y(c),"Banner_APEC_Examen_Final_4EF.csv")}),t}function en(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-menu"),a=t.querySelector("#banner-tool-view"),i=t.querySelector("#banner-tool-content"),s=t.querySelector("#open-primer-periodo"),r=t.querySelector("#open-segundo-periodo"),o=t.querySelector("#open-calificacion-final"),n=t.querySelector("#banner-back");function c(){e.classList.add("hidden"),a.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}function l(f){console.error("No fue posible abrir la herramienta de Banner:",f),i.innerHTML=`
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
        `,c()}function u(f){i.innerHTML="";try{if(typeof f!="function")throw new TypeError("El componente seleccionado no es una función válida.");const p=f();if(!(p instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");i.appendChild(p),c()}catch(p){l(p)}}function d(){i.replaceChildren(),a.classList.add("hidden"),e.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}return s.addEventListener("click",()=>{u(Qo)}),r.addEventListener("click",()=>{u(Xo)}),o.addEventListener("click",()=>{u(Zo)}),n.addEventListener("click",d),t}function tn(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8",t.innerHTML=`
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
    `;const e=t.querySelector("#xmera-input"),a=t.querySelector("#xmera-output"),i=t.querySelector("#xmera-generate"),s=t.querySelector("#xmera-copy"),r=t.querySelector("#xmera-clear"),o=t.querySelector("#xmera-message"),n=t.querySelector("#tab-xmera"),c=t.querySelector("#tab-banner"),l=t.querySelector("#panel-xmera"),u=t.querySelector("#panel-banner");function d(){a.textContent=`var data_todo = {
};`,s.disabled=!0}function f(b,y="success"){o.textContent=b,o.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),o.classList.add("border"),y==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function p(b){const y=b.split(/\r?\n/).map(h=>h.trim()).filter(Boolean),_=[],R=[],g=new Set;return y.forEach((h,m)=>{const E=h.split(/[\t,; ]+/).map(O=>O.trim()).filter(Boolean),w=m+1,S=E[0],z=E.slice(1);if(!S){R.push(`Línea ${w}: falta la matrícula.`);return}if(!/^\d+$/.test(S)){R.push(`Línea ${w}: la matrícula "${S}" no es válida.`);return}if(g.has(S)){R.push(`Línea ${w}: la matrícula ${S} está repetida.`);return}if(z.length===0){R.push(`Línea ${w}: falta al menos una calificación.`);return}const I=z.map(O=>Number(O));if(I.some(O=>!Number.isFinite(O))){R.push(`Línea ${w}: existe una calificación no numérica.`);return}g.add(S),_.push({matricula:S,grades:I})}),{records:_,errors:R}}function x(b){return`var data_todo = {
${b.map(({matricula:_,grades:R})=>`  "${_}":[${R.join(",")}]`).join(`,
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
}`}function k(b){const y=b==="xmera";l.classList.toggle("hidden",!y),u.classList.toggle("hidden",y),n.className=y?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",c.className=y?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}i.addEventListener("click",()=>{const b=e.value.trim();if(!b){d(),f("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:y,errors:_}=p(b);if(_.length>0){d(),f(_.join(" "),"error");return}a.textContent=x(y),s.disabled=!1,f(`Código generado correctamente para ${y.length} estudiante${y.length===1?"":"s"}.`)}),s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(a.textContent),f("El código fue copiado al portapapeles.")}catch(b){console.error("No fue posible copiar el código:",b),f("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),r.addEventListener("click",()=>{e.value="",d(),o.textContent="",o.classList.add("hidden"),e.focus()});try{const b=en();if(b instanceof HTMLElement)u.appendChild(b);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(b){console.error("No fue posible cargar el módulo Banner:",b),u.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return n.addEventListener("click",()=>{k("xmera")}),c.addEventListener("click",()=>{k("banner")}),k("xmera"),t}function an(){return tn()}function A(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Li(t){return String(t??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}function sn(t,e=!1){return`
        <button
            type="button"
            data-filtro-servicio="${A(t.id)}"
            aria-pressed="${e}"
            class="shrink-0 rounded-full border px-4 py-2 text-sm font-black transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 ${e?"border-sky-700 bg-sky-700 text-white shadow-md":"border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-800"}"
        >
            <span>${A(t.nombre)}</span>
            <span class="ml-1 text-xs opacity-75">${A(t.rango)}</span>
        </button>
    `}function rn(t){const e=Li([t.numero,t.titulo,t.tituloCorto,t.resumen,t.descripcion,t.categoriaNombre,...t.subservicios||[],t.entregables].join(" "));return`
        <article
            data-servicio-card
            data-servicio-id="${A(t.id)}"
            data-categoria="${A(t.categoria)}"
            data-busqueda="${A(e)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:p-6"
        >
            <div class="mb-5 flex items-start justify-between gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-sky-800 transition-transform duration-300 group-hover:scale-110">
                    ${C(t.icono,"text-3xl")}
                </div>
                <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-600">
                    ${String(t.numero).padStart(2,"0")}
                </span>
            </div>

            <p class="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-sky-700">
                ${A(t.categoriaNombre)}
            </p>
            <h3 class="text-xl font-black leading-tight text-slate-950 md:text-2xl">
                ${A(t.tituloCorto)}
            </h3>
            <p class="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                ${A(t.titulo)}
            </p>
            <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                ${A(t.resumen)}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                ${(t.subservicios||[]).slice(0,2).map(a=>{const i=a.split(":")[0];return`
                        <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                            ${A(i)}
                        </span>
                    `}).join("")}
            </div>

            <button
                type="button"
                data-servicio-detalle="${A(t.id)}"
                class="mt-6 inline-flex items-center justify-between gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-black text-sky-800 transition-colors hover:border-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                aria-label="Explorar ${A(t.titulo)}"
            >
                Explorar servicio
                ${C("bx-right-arrow-alt","text-xl")}
            </button>
        </article>
    `}function on(t){return`
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 class="font-black text-white">${A(t.titulo)}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">${A(t.descripcion)}</p>
        </article>
    `}function nn(t){return`
        <article class="min-w-[280px] flex-1 rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm md:min-w-[330px]">
            <div class="flex items-center justify-between gap-3">
                <span class="rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-amber-900">Paquete ${t.numero}</span>
                ${C("bx-grid-alt","text-2xl text-amber-800")}
            </div>
            <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${A(t.titulo)}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-700">${A(t.descripcion)}</p>
        </article>
    `}function cn(t){return`
        <li class="relative flex gap-4 pb-6 last:pb-0">
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-black text-white shadow-md">
                ${t.numero}
            </span>
            <div class="pt-1">
                <h4 class="font-black text-slate-950">${A(t.titulo)}</h4>
                <p class="mt-1 text-sm leading-relaxed text-slate-600">${A(t.descripcion)}</p>
            </div>
        </li>
    `}function ln(t){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-4">
            <h4 class="font-black text-slate-950">${A(t.titulo)}</h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">${A(t.descripcion)}</p>
        </article>
    `}function dn(t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div class="flex items-start gap-3">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">P${t.numero}</span>
                <div>
                    <h4 class="font-black text-slate-950">${A(t.titulo)}</h4>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${A(t.descripcion)}</p>
                </div>
            </div>
        </article>
    `}function un(t){return`
        <ol class="grid grid-cols-1 gap-3 lg:grid-cols-2">
            ${(t.subservicios||[]).map((e,a)=>`
                <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    <span class="mt-0.5 flex h-8 min-w-8 items-center justify-center rounded-full bg-sky-100 px-2 text-xs font-black text-sky-800">
                        ${t.numero}.${a+1}
                    </span>
                    <span>${A(e)}</span>
                </li>
            `).join("")}
        </ol>
    `}function pn(t){const e=encodeURIComponent(`Solicitud de servicio: ${t.titulo}`);return`
        <div class="relative overflow-hidden rounded-[2rem] bg-white">
            <div class="bg-slate-950 px-6 py-7 text-white md:px-9 md:py-9">
                <div class="flex items-start justify-between gap-5">
                    <div class="flex min-w-0 items-start gap-4">
                        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sky-300">
                            ${C(t.icono,"text-3xl")}
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">
                                Servicio ${String(t.numero).padStart(2,"0")} · ${A(t.categoriaNombre)}
                            </p>
                            <h2 class="mt-2 text-2xl font-black leading-tight md:text-4xl">
                                ${A(t.titulo)}
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
                    ${A(t.descripcion)}
                </p>
            </div>

            <div class="space-y-8 px-6 py-7 md:px-9 md:py-9">
                <section aria-labelledby="titulo-componentes-servicio">
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Componentes del servicio</p>
                    <h3 id="titulo-componentes-servicio" class="mb-5 text-xl font-black text-slate-950 md:text-2xl">
                        Alcance técnico y académico
                    </h3>
                    ${un(t)}
                </section>

                <section class="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 md:p-6" aria-labelledby="titulo-entregables-servicio">
                    <p class="text-xs font-black uppercase tracking-widest text-emerald-800">Entregables habituales</p>
                    <h3 id="titulo-entregables-servicio" class="mt-2 text-xl font-black text-slate-950">Productos posibles</h3>
                    <p class="mt-3 leading-relaxed text-slate-700">${A(t.entregables)}</p>
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
                            ${C("bx-right-arrow-alt","text-lg")}
                        </a>
                        <a
                            href="#/contacto"
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                        >
                            Solicitar información
                            ${C("bx-right-arrow-alt","text-lg")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `}function mn(){const t=document.createElement("section");t.id="catalogo-servicios",t.className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-9 shadow-lg md:px-8 md:py-12 xl:px-10",t.setAttribute("aria-labelledby","titulo-catalogo-servicios"),t.innerHTML=`
        <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>
        <div class="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl"></div>

        <div class="relative z-10 space-y-10">
            <header class="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Catálogo institucional 2026</p>
                    <h2 id="titulo-catalogo-servicios" class="max-w-5xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                        ${A(He.titulo)}
                    </h2>
                    <p class="mt-4 text-sm font-bold text-slate-500 md:text-base">${A(He.subtitulo)}</p>
                    <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg">
                        ${A(He.introduccion)}
                    </p>
                    <p class="mt-5 border-l-4 border-amber-500 pl-4 text-base font-black italic text-slate-800 md:text-lg">
                        “${A(He.lema)}”
                    </p>
                </div>

                <aside class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl">
                    <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">Alcance responsable</p>
                    <h3 class="mt-2 text-2xl font-black">Cada solicitud se delimita antes de iniciar</h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-300">${A(He.notaAlcance)}</p>
                    <a href="#/contacto" class="mt-5 inline-flex items-center gap-2 font-black text-sky-300 hover:text-white">
                        Contactar al grupo
                        ${C("bx-right-arrow-alt","text-xl")}
                    </a>
                </aside>
            </header>

            <section class="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Resumen del catálogo">
                ${[[fe.length,"áreas de servicio"],[Wt.length-1,"bloques temáticos"],[Ca.length,"paquetes sugeridos"],[Aa.length,"etapas de trabajo"]].map(([u,d])=>`
                    <article class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                        <p class="text-3xl font-black text-sky-800">${u}</p>
                        <p class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">${d}</p>
                    </article>
                `).join("")}
            </section>

            <section class="rounded-3xl bg-slate-950 p-5 text-white md:p-6" aria-labelledby="titulo-propuesta-valor">
                <div class="mb-5">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-300">Propuesta de valor</p>
                    <h3 id="titulo-propuesta-valor" class="mt-2 text-2xl font-black md:text-3xl">Rigor, adaptación y transferencia</h3>
                </div>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    ${Us.map(on).join("")}
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
                            ${fe.length} servicios disponibles
                        </p>
                    </div>

                    <div class="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar servicios por categoría">
                        ${Wt.map((u,d)=>sn(u,d===0)).join("")}
                    </div>
                </div>

                <div class="mt-7 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-sky-700">Exploración digital</p>
                        <h3 id="titulo-explorar-servicios" class="mt-1 text-2xl font-black text-slate-950 md:text-3xl">Seleccione un servicio para conocer su alcance</h3>
                    </div>
                </div>

                <div data-rejilla-servicios class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    ${fe.map(rn).join("")}
                </div>

                <div data-vacio-servicios class="mt-7 hidden rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
                    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        ${C("bx-grid-alt","text-3xl")}
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
                    ${Ca.map(nn).join("")}
                </div>
            </section>

            <section class="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]" aria-labelledby="titulo-como-trabajamos">
                <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-700">Proceso estándar</p>
                    <h3 id="titulo-como-trabajamos" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Cómo se desarrolla un servicio</h3>
                    <ol class="relative mt-6 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-sky-200">
                        ${Aa.map(cn).join("")}
                    </ol>
                </article>

                <div class="space-y-5">
                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" open>
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Modalidades de contratación</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${Fs.map(ln).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Principios transversales</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${qs.map(dn).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Sectores y públicos destinatarios</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <ul class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${Ei.map(u=>`
                                <li class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                                    <span class="mt-0.5 text-sky-700">${C("bx-check-shield","text-lg")}</span>
                                    <span>${A(u)}</span>
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
                            ${C("bx-right-arrow-alt","text-lg")}
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
    `;const e=[...t.querySelectorAll("[data-servicio-card]")],a=[...t.querySelectorAll("[data-filtro-servicio]")],i=t.querySelector("[data-buscador-servicios]"),s=t.querySelector("[data-contador-servicios]"),r=t.querySelector("[data-vacio-servicios]"),o=t.querySelector("[data-dialogo-servicio]");let n="todos",c=null;function l(){const u=Li(i?.value);let d=0;e.forEach(f=>{const p=n==="todos"||f.dataset.categoria===n,x=!u||String(f.dataset.busqueda||"").includes(u),k=p&&x;f.classList.toggle("hidden",!k),k&&(d+=1)}),s&&(s.textContent=`${d} servicio${d===1?"":"s"} disponible${d===1?"":"s"}`),r?.classList.toggle("hidden",d!==0)}return a.forEach(u=>{u.addEventListener("click",()=>{n=u.dataset.filtroServicio||"todos",a.forEach(d=>{const f=d===u;d.setAttribute("aria-pressed",String(f)),d.classList.toggle("border-sky-700",f),d.classList.toggle("bg-sky-700",f),d.classList.toggle("text-white",f),d.classList.toggle("shadow-md",f),d.classList.toggle("border-slate-300",!f),d.classList.toggle("bg-white",!f),d.classList.toggle("text-slate-700",!f)}),l()})}),i?.addEventListener("input",l),t.addEventListener("click",u=>{const d=u.target.closest("[data-servicio-detalle]");if(!d||!t.contains(d))return;const f=fe.find(p=>p.id===d.dataset.servicioDetalle);!f||!o||(c=d,o.innerHTML=pn(f),typeof o.showModal=="function"?o.showModal():o.setAttribute("open",""),o.querySelector("[data-cerrar-dialogo-servicio]")?.focus())}),o?.addEventListener("click",u=>{(u.target===o||u.target.closest("[data-cerrar-dialogo-servicio]"))&&(o.close?.(),o.removeAttribute("open"))}),o?.addEventListener("close",()=>{c?.focus(),c=null}),t}const Pa="kernel-services-filter",fn="kernel-service-interest";function gn(t){let e=null;try{e=window.sessionStorage.getItem(Pa),window.sessionStorage.removeItem(Pa)}catch(i){console.warn("[Kernel] No fue posible recuperar el filtro del catálogo.",i)}if(!e||e==="todos")return;const a=t.querySelector(`[data-filtro-servicio="${CSS.escape(e)}"]`);window.requestAnimationFrame(()=>a?.click())}function bn(t){if(t)try{window.sessionStorage.setItem(fn,t)}catch(e){console.warn("[Kernel] No fue posible conservar el servicio de interés.",e)}}function hn(t){t.querySelectorAll('a[href="#/contacto"]').forEach(a=>{a.href="#/diagnosticoServicios",a.textContent="Solicitar diagnóstico"});let e=null;t.addEventListener("click",a=>{const i=a.target.closest("[data-servicio-detalle]");if(i&&t.contains(i)){e=i.dataset.servicioDetalle||null;return}const s=a.target.closest('a[href="#/contacto"], a[href="#/diagnosticoServicios"]');!s||!t.contains(s)||(a.preventDefault(),bn(e),window.location.hash="/diagnosticoServicios")})}function xn(){const t=document.createElement("section");t.className="w-full bg-slate-100 px-3 py-6 font-sans sm:px-5 md:py-9 lg:px-8";const e=document.createElement("div");e.className="mx-auto max-w-[1680px]";const a=mn();return a.classList.remove("rounded-[2rem]"),a.classList.add("rounded-3xl"),hn(a),e.appendChild(a),t.appendChild(e),gn(a),t}const La="mleonardos@unapec.edu.do",Ma="kernel-service-interest";function vt(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function vn(){return fe.map(t=>`
        <option value="${vt(t.id)}">${String(t.numero).padStart(2,"0")} · ${vt(t.tituloCorto)}</option>
    `).join("")}function yn(){return Ei.map(t=>`
        <option value="${vt(t)}">${vt(t)}</option>
    `).join("")}function Ge({id:t,etiqueta:e,tipo:a="text",requerido:i=!1,placeholder:s="",autocomplete:r="off"}){return`
        <label class="block" for="${t}">
            <span class="mb-2 block text-sm font-black text-slate-800">${e}${i?' <span class="text-red-700" aria-hidden="true">*</span>':""}</span>
            <input
                id="${t}"
                name="${t}"
                type="${a}"
                ${i?"required":""}
                autocomplete="${r}"
                placeholder="${s}"
                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"
            />
        </label>
    `}function wn(t){if(t)try{const e=window.sessionStorage.getItem(Ma);window.sessionStorage.removeItem(Ma),e&&[...t.options].some(a=>a.value===e)&&(t.value=e)}catch(e){console.warn("[Kernel] No fue posible recuperar el servicio de interés.",e)}}function j(t,e){return String(new FormData(t).get(e)||"").trim()}function Mi(t){return fe.find(e=>e.id===t)?.titulo||"No especificado"}function Ra(t){const e={nombre:j(t,"nombre"),organizacion:j(t,"organizacion"),cargo:j(t,"cargo"),correo:j(t,"correo"),telefono:j(t,"telefono"),sector:j(t,"sector"),servicio:Mi(j(t,"servicio")),necesidad:j(t,"necesidad"),datos:j(t,"datos"),plazo:j(t,"plazo"),presupuesto:j(t,"presupuesto"),producto:j(t,"producto"),modalidad:j(t,"modalidad")};return["SOLICITUD DE DIAGNÓSTICO INICIAL — GRUPO EL KERNEL","",`Nombre: ${e.nombre}`,`Organización: ${e.organizacion||"No indicada"}`,`Cargo o función: ${e.cargo||"No indicado"}`,`Correo: ${e.correo}`,`Teléfono: ${e.telefono||"No indicado"}`,`Sector: ${e.sector||"No especificado"}`,`Servicio de interés: ${e.servicio}`,`Modalidad preferida: ${e.modalidad||"No especificada"}`,`Plazo esperado: ${e.plazo||"No especificado"}`,`Presupuesto estimado: ${e.presupuesto||"No especificado"}`,"","Problema o necesidad:",e.necesidad,"","Datos, documentos o recursos disponibles:",e.datos||"No especificados","","Producto o resultado esperado:",e.producto||"No especificado","","Nota: adjuntaré al correo generado los términos de referencia o documentos pertinentes, si aplica."].join(`
`)}async function En(t){if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t);return}const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}function kn(){const t=document.createElement("section");t.className="w-full bg-slate-100 px-3 py-6 font-sans sm:px-5 md:py-10 lg:px-8",t.innerHTML=`
        <div class="mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <header class="relative overflow-hidden bg-[#06141a] px-6 py-9 text-white md:px-10 md:py-12">
                <div class="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"></div>
                <div class="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Diagnóstico inicial</p>
                        <h1 class="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Cuéntenos qué necesita resolver</h1>
                        <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">El formulario organiza la información mínima para identificar el servicio, el equipo y el alcance inicial. No sustituye una propuesta técnica ni implica contratación.</p>
                    </div>
                    <aside class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                        <p class="font-black text-white">Datos solicitados por el catálogo institucional</p>
                        <p class="mt-2 text-sm leading-relaxed text-slate-300">Problema, sector, datos disponibles, plazo, presupuesto estimado y producto esperado.</p>
                        <div class="mt-4 flex flex-wrap gap-2">
                            ${["Confidencialidad","Integridad académica","Protección de datos"].map(s=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">${s}</span>`).join("")}
                        </div>
                    </aside>
                </div>
            </header>

            <div class="grid grid-cols-1 gap-8 p-5 md:p-8 xl:grid-cols-[1.25fr_0.75fr] xl:p-10">
                <form data-formulario-diagnostico class="space-y-7" novalidate>
                    <section aria-labelledby="titulo-identificacion-diagnostico">
                        <div class="mb-5 flex items-center gap-3">
                            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0f5b5d] ring-1 ring-emerald-200">${C("bx-group","text-xl")}</span>
                            <div>
                                <p class="text-xs font-black uppercase tracking-widest text-[#b37a2a]">Paso 1</p>
                                <h2 id="titulo-identificacion-diagnostico" class="text-2xl font-black text-slate-950">Identificación y contacto</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            ${Ge({id:"nombre",etiqueta:"Nombre completo",requerido:!0,placeholder:"Nombre y apellidos",autocomplete:"name"})}
                            ${Ge({id:"correo",etiqueta:"Correo electrónico",tipo:"email",requerido:!0,placeholder:"nombre@institucion.edu",autocomplete:"email"})}
                            ${Ge({id:"organizacion",etiqueta:"Organización o institución",placeholder:"Universidad, empresa, organismo...",autocomplete:"organization"})}
                            ${Ge({id:"cargo",etiqueta:"Cargo o función",placeholder:"Director, docente, investigador...",autocomplete:"organization-title"})}
                            ${Ge({id:"telefono",etiqueta:"Teléfono",tipo:"tel",placeholder:"+1 809 ...",autocomplete:"tel"})}
                            <label class="block" for="sector">
                                <span class="mb-2 block text-sm font-black text-slate-800">Sector</span>
                                <select id="sector" name="sector" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione un sector</option>
                                    ${yn()}
                                </select>
                            </label>
                        </div>
                    </section>

                    <section aria-labelledby="titulo-necesidad-diagnostico">
                        <div class="mb-5 flex items-center gap-3">
                            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#9a671d] ring-1 ring-amber-200">${C("bx-check-shield","text-xl")}</span>
                            <div>
                                <p class="text-xs font-black uppercase tracking-widest text-[#b37a2a]">Paso 2</p>
                                <h2 id="titulo-necesidad-diagnostico" class="text-2xl font-black text-slate-950">Necesidad y alcance preliminar</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <label class="block md:col-span-2" for="servicio">
                                <span class="mb-2 block text-sm font-black text-slate-800">Servicio de interés <span class="text-red-700" aria-hidden="true">*</span></span>
                                <select id="servicio" name="servicio" required class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione una de las 20 áreas</option>
                                    ${vn()}
                                </select>
                            </label>
                            <label class="block md:col-span-2" for="necesidad">
                                <span class="mb-2 block text-sm font-black text-slate-800">Problema o necesidad <span class="text-red-700" aria-hidden="true">*</span></span>
                                <textarea id="necesidad" name="necesidad" required rows="6" placeholder="Describa el problema, quién utilizará el resultado y qué decisión debe apoyarse." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                            <label class="block md:col-span-2" for="datos">
                                <span class="mb-2 block text-sm font-black text-slate-800">Datos, documentos o recursos disponibles</span>
                                <textarea id="datos" name="datos" rows="4" placeholder="Bases de datos, reglamentos, programas existentes, términos de referencia, códigos, instrumentos..." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                            <label class="block" for="plazo">
                                <span class="mb-2 block text-sm font-black text-slate-800">Plazo esperado</span>
                                <select id="plazo" name="plazo" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione una referencia</option>
                                    <option>Menos de 1 mes</option>
                                    <option>1 a 3 meses</option>
                                    <option>3 a 6 meses</option>
                                    <option>6 a 12 meses</option>
                                    <option>Más de 12 meses</option>
                                    <option>Por definir</option>
                                </select>
                            </label>
                            <label class="block" for="presupuesto">
                                <span class="mb-2 block text-sm font-black text-slate-800">Presupuesto estimado</span>
                                <select id="presupuesto" name="presupuesto" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Prefiero definirlo después</option>
                                    <option>Existe una partida aprobada</option>
                                    <option>Está en proceso de aprobación</option>
                                    <option>Se requiere una estimación inicial</option>
                                    <option>Proyecto sujeto a financiamiento</option>
                                </select>
                            </label>
                            <label class="block" for="modalidad">
                                <span class="mb-2 block text-sm font-black text-slate-800">Modalidad preferida</span>
                                <select id="modalidad" name="modalidad" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Por definir</option>
                                    <option>Diagnóstico breve</option>
                                    <option>Consultoría por producto</option>
                                    <option>Proyecto integral</option>
                                    <option>Acompañamiento periódico</option>
                                    <option>Formación o taller</option>
                                    <option>Co-desarrollo</option>
                                    <option>Revisión experta independiente</option>
                                    <option>Alianza institucional</option>
                                </select>
                            </label>
                            <label class="block" for="producto">
                                <span class="mb-2 block text-sm font-black text-slate-800">Producto o resultado esperado</span>
                                <textarea id="producto" name="producto" rows="3" placeholder="Informe, modelo, programa académico, software, tablero, capacitación..." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                        </div>
                    </section>

                    <label class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <input type="checkbox" name="consentimiento" required class="mt-1 h-5 w-5 accent-[#0f5b5d]" />
                        <span class="text-sm leading-relaxed text-slate-700">Confirmo que la información puede utilizarse para evaluar esta solicitud y contactarme. Entiendo que el formulario prepara un correo y que no constituye una contratación ni una aprobación automática.</span>
                    </label>

                    <div class="flex flex-col gap-3 sm:flex-row">
                        <button type="submit" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-6 py-4 font-black text-white shadow-md transition hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                            Preparar correo de solicitud
                            ${C("bx-right-arrow-alt","text-xl")}
                        </button>
                        <button type="button" data-copiar-diagnostico class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-black text-slate-800 transition hover:border-[#0f5b5d] hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                            Copiar resumen
                        </button>
                    </div>
                    <p data-estado-diagnostico class="min-h-6 text-sm font-bold text-[#0f5b5d]" aria-live="polite"></p>
                </form>

                <aside class="space-y-5">
                    <section class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                        <p class="text-xs font-black uppercase tracking-widest text-[#b37a2a]">Qué ocurrirá después</p>
                        <ol class="mt-5 space-y-4">
                            ${["Revisión inicial de la necesidad y la información enviada.","Identificación del servicio, paquete o alianza más pertinente.","Reunión exploratoria para aclarar alcance, datos y usuarios.","Propuesta técnica con entregables, calendario, responsabilidades y tarifa."].map((s,r)=>`
                                <li class="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0f5b5d] text-xs font-black text-white">${r+1}</span>
                                    <span>${s}</span>
                                </li>
                            `).join("")}
                        </ol>
                    </section>

                    <section class="rounded-3xl bg-[#071820] p-6 text-white">
                        <p class="text-xs font-black uppercase tracking-widest text-[#efc86f]">Canal de contacto</p>
                        <h2 class="mt-2 text-2xl font-black">${La}</h2>
                        <p class="mt-3 text-sm leading-relaxed text-slate-300">El formulario abre la aplicación de correo del dispositivo con un resumen estructurado. No almacena datos en un servidor del sitio.</p>
                        <p class="mt-4 text-sm leading-relaxed text-slate-300">Los archivos o términos de referencia deben adjuntarse manualmente al correo generado.</p>
                    </section>

                    <section class="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                        <p class="font-black text-amber-950">Alcance responsable</p>
                        <p class="mt-2 text-sm leading-relaxed text-amber-900">Los servicios regulados, dictámenes o firmas profesionales se realizan únicamente mediante especialistas con la habilitación correspondiente. La asesoría académica respeta la autoría y no sustituye el trabajo del estudiante o investigador.</p>
                    </section>
                </aside>
            </div>
        </div>
    `;const e=t.querySelector("[data-formulario-diagnostico]"),a=t.querySelector("[data-estado-diagnostico]"),i=t.querySelector("#servicio");return wn(i),e?.addEventListener("submit",s=>{if(s.preventDefault(),!e.checkValidity()){e.reportValidity(),a&&(a.textContent="Complete los campos obligatorios antes de continuar.");return}const r=Ra(e),o=encodeURIComponent(`Solicitud de diagnóstico: ${Mi(j(e,"servicio"))}`),n=encodeURIComponent(r);a&&(a.textContent="Abriendo su aplicación de correo. Adjunte los documentos pertinentes antes de enviar."),window.location.href=`mailto:${La}?subject=${o}&body=${n}`}),t.querySelector("[data-copiar-diagnostico]")?.addEventListener("click",async()=>{if(!e?.checkValidity()){e?.reportValidity(),a&&(a.textContent="Complete los campos obligatorios para copiar un resumen útil.");return}try{await En(Ra(e)),a&&(a.textContent="Resumen copiado. Puede pegarlo en un correo o documento.")}catch(s){console.error("[Kernel] No fue posible copiar el diagnóstico.",s),a&&(a.textContent="No fue posible copiar automáticamente. Utilice el botón para preparar el correo.")}}),t}const An=()=>{};var Da={};const Ri=function(t){const e=[];let a=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[a++]=s:s<2048?(e[a++]=s>>6|192,e[a++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[a++]=s>>18|240,e[a++]=s>>12&63|128,e[a++]=s>>6&63|128,e[a++]=s&63|128):(e[a++]=s>>12|224,e[a++]=s>>6&63|128,e[a++]=s&63|128)}return e},Cn=function(t){const e=[];let a=0,i=0;for(;a<t.length;){const s=t[a++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[a++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[a++],o=t[a++],n=t[a++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|n&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[a++],o=t[a++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,n=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,d=(r&3)<<4|n>>4;let f=(n&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),i.push(a[u],a[d],a[f],a[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ri(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=a[t.charAt(s++)],n=s<t.length?a[t.charAt(s)]:0;++s;const l=s<t.length?a[t.charAt(s)]:64;++s;const d=s<t.length?a[t.charAt(s)]:64;if(++s,r==null||n==null||l==null||d==null)throw new In;const f=r<<2|n>>4;if(i.push(f),l!==64){const p=n<<4&240|l>>2;if(i.push(p),d!==64){const x=l<<6&192|d;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class In extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sn=function(t){const e=Ri(t);return Di.encodeByteArray(e,!0)},Oi=function(t){return Sn(t).replace(/\./g,"")},$i=function(t){try{return Di.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function _n(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const Tn=()=>_n().__FIREBASE_DEFAULTS__,Pn=()=>{if(typeof process>"u"||typeof Da>"u")return;const t=Da.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ln=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$i(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return An()||Tn()||Pn()||Ln()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mn=t=>ca()?.emulatorHosts?.[t],Ni=()=>ca()?.config,ji=t=>ca()?.[`_${t}`];class zi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,i)=>{a?this.reject(a):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,i))}}}function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rn(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function Dn(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function On(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $n(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nn(){const t=$();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jn(){try{return typeof indexedDB=="object"}catch{return!1}}function zn(){return new Promise((t,e)=>{try{let a=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),a||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{a=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(a){e(a)}})}const Un="FirebaseError";class xe extends Error{constructor(e,a,i){super(a),this.code=e,this.customData=i,this.name=Un,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(e,a,i){this.service=e,this.serviceName=a,this.errors=i}create(e,...a){const i=a[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?qn(r,i):"Error",n=`${this.serviceName}: ${o} (${s}).`;return new xe(s,n,i)}}function qn(t,e){return t.replace(Fn,(a,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Fn=/\{\$([^}]+)}/g;function Bn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $e(t,e){if(t===e)return!0;const a=Object.keys(t),i=Object.keys(e);for(const s of a){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Oa(r)&&Oa(o)){if(!$e(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!a.includes(s))return!1;return!0}function Oa(t){return t!==null&&typeof t=="object"}function st(t){const e=[];for(const[a,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(a)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(a)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function We(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Je(t){const e=t.indexOf("?");if(!e)return"";const a=t.indexOf("#",e);return t.substring(e,a>0?a:void 0)}function Vn(t,e){const a=new Hn(t,e);return a.subscribe.bind(a)}class Hn{constructor(e,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(a=>{a.next(e)})}error(e){this.forEachObserver(a=>{a.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,a,i){let s;if(e===void 0&&a===void 0&&i===void 0)throw new Error("Missing Observer.");Gn(e,["next","error","complete"])?s=e:s={next:e,error:a,complete:i},s.next===void 0&&(s.next=zt),s.error===void 0&&(s.error=zt),s.complete===void 0&&(s.complete=zt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,e)}sendOne(e,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{a(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gn(t,e){if(typeof t!="object"||t===null)return!1;for(const a of e)if(a in t&&typeof t[a]=="function")return!0;return!1}function zt(){}function X(t){return t&&t._delegate?t._delegate:t}function la(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kn(t){return(await fetch(t,{credentials:"include"})).ok}class Ne{constructor(e,a,i){this.name=e,this.instanceFactory=a,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const ye="[DEFAULT]";class Wn{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const i=new zi;if(this.instancesDeferred.set(a,i),this.isInitialized(a)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:a});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){const a=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yn(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[a,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:a});for(const[r,o]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);i===n&&o.resolve(s)}return s}onInit(e,a){const i=this.normalizeInstanceIdentifier(a),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,a){const i=this.onInitCallbacks.get(a);if(i)for(const s of i)try{s(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Jn(e),options:a}),this.instances.set(e,i),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jn(t){return t===ye?void 0:t}function Yn(t){return t.instantiationMode==="EAGER"}class Qn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new Wn(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}var T;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(T||(T={}));const Xn={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},Zn=T.INFO,ec={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},tc=(t,e,...a)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ec[e];if(s)console[s](`[${i}]  ${t.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ui{constructor(e){this.name=e,this._logLevel=Zn,this._logHandler=tc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const ac=(t,e)=>e.some(a=>t instanceof a);let $a,Na;function ic(){return $a||($a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sc(){return Na||(Na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qi=new WeakMap,Jt=new WeakMap,Fi=new WeakMap,Ut=new WeakMap,da=new WeakMap;function rc(t){const e=new Promise((a,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{a(ge(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(a=>{a instanceof IDBCursor&&qi.set(a,t)}).catch(()=>{}),da.set(e,t),e}function oc(t){if(Jt.has(t))return;const e=new Promise((a,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{a(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Jt.set(t,e)}let Yt={get(t,e,a){if(t instanceof IDBTransaction){if(e==="done")return Jt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fi.get(t);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return ge(t[e])},set(t,e,a){return t[e]=a,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nc(t){Yt=t(Yt)}function cc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const i=t.call(qt(this),e,...a);return Fi.set(i,e.sort?e.sort():[e]),ge(i)}:sc().includes(t)?function(...e){return t.apply(qt(this),e),ge(qi.get(this))}:function(...e){return ge(t.apply(qt(this),e))}}function lc(t){return typeof t=="function"?cc(t):(t instanceof IDBTransaction&&oc(t),ac(t,ic())?new Proxy(t,Yt):t)}function ge(t){if(t instanceof IDBRequest)return rc(t);if(Ut.has(t))return Ut.get(t);const e=lc(t);return e!==t&&(Ut.set(t,e),da.set(e,t)),e}const qt=t=>da.get(t);function dc(t,e,{blocked:a,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),n=ge(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ge(o.result),c.oldVersion,c.newVersion,ge(o.transaction),c)}),a&&o.addEventListener("blocked",c=>a(c.oldVersion,c.newVersion,c)),n.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),n}const uc=["get","getKey","getAll","getAllKeys","count"],pc=["put","add","delete","clear"],Ft=new Map;function ja(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ft.get(e))return Ft.get(e);const a=e.replace(/FromIndex$/,""),i=e!==a,s=pc.includes(a);if(!(a in(i?IDBIndex:IDBObjectStore).prototype)||!(s||uc.includes(a)))return;const r=async function(o,...n){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(n.shift())),(await Promise.all([l[a](...n),s&&c.done]))[0]};return Ft.set(e,r),r}nc(t=>({...t,get:(e,a,i)=>ja(e,a)||t.get(e,a,i),has:(e,a)=>!!ja(e,a)||t.has(e,a)}));class mc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(fc(a)){const i=a.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(a=>a).join(" ")}}function fc(t){return t.getComponent()?.type==="VERSION"}const Qt="@firebase/app",za="0.15.1";const ae=new Ui("@firebase/app"),gc="@firebase/app-compat",bc="@firebase/analytics-compat",hc="@firebase/analytics",xc="@firebase/app-check-compat",vc="@firebase/app-check",yc="@firebase/auth",wc="@firebase/auth-compat",Ec="@firebase/database",kc="@firebase/data-connect",Ac="@firebase/database-compat",Cc="@firebase/functions",Ic="@firebase/functions-compat",Sc="@firebase/installations",_c="@firebase/installations-compat",Tc="@firebase/messaging",Pc="@firebase/messaging-compat",Lc="@firebase/performance",Mc="@firebase/performance-compat",Rc="@firebase/remote-config",Dc="@firebase/remote-config-compat",Oc="@firebase/storage",$c="@firebase/storage-compat",Nc="@firebase/firestore",jc="@firebase/ai",zc="@firebase/firestore-compat",Uc="firebase",qc="12.16.0";const Xt="[DEFAULT]",Fc={[Qt]:"fire-core",[gc]:"fire-core-compat",[hc]:"fire-analytics",[bc]:"fire-analytics-compat",[vc]:"fire-app-check",[xc]:"fire-app-check-compat",[yc]:"fire-auth",[wc]:"fire-auth-compat",[Ec]:"fire-rtdb",[kc]:"fire-data-connect",[Ac]:"fire-rtdb-compat",[Cc]:"fire-fn",[Ic]:"fire-fn-compat",[Sc]:"fire-iid",[_c]:"fire-iid-compat",[Tc]:"fire-fcm",[Pc]:"fire-fcm-compat",[Lc]:"fire-perf",[Mc]:"fire-perf-compat",[Rc]:"fire-rc",[Dc]:"fire-rc-compat",[Oc]:"fire-gcs",[$c]:"fire-gcs-compat",[Nc]:"fire-fst",[zc]:"fire-fst-compat",[jc]:"fire-vertex","fire-js":"fire-js",[Uc]:"fire-js-all"};const yt=new Map,Bc=new Map,Zt=new Map;function Ua(t,e){try{t.container.addComponent(e)}catch(a){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,a)}}function Ze(t){const e=t.name;if(Zt.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;Zt.set(e,t);for(const a of yt.values())Ua(a,t);for(const a of Bc.values())Ua(a,t);return!0}function Bi(t,e){const a=t.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),t.container.getProvider(e)}function W(t){return t==null?!1:t.settings!==void 0}const Vc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},be=new it("app","Firebase",Vc);class Hc{constructor(e,a,i){this._isDeleted=!1,this._options={...e},this._config={...a},this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}const rt=qc;function Vi(t,e={}){let a=t;typeof e!="object"&&(e={name:e});const i={name:Xt,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw be.create("bad-app-name",{appName:String(s)});if(a||(a=Ni()),!a)throw be.create("no-options");const r=yt.get(s);if(r){if($e(a,r.options)&&$e(i,r.config))return r;throw be.create("duplicate-app",{appName:s})}const o=new Qn(s);for(const c of Zt.values())o.addComponent(c);const n=new Hc(a,i,o);return yt.set(s,n),n}function Gc(t=Xt){const e=yt.get(t);if(!e&&t===Xt&&Ni())return Vi();if(!e)throw be.create("no-app",{appName:t});return e}function Me(t,e,a){let i=Fc[t]??t;a&&(i+=`-${a}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(o.join(" "));return}Ze(new Ne(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}const Kc="firebase-heartbeat-database",Wc=1,et="firebase-heartbeat-store";let Bt=null;function Hi(){return Bt||(Bt=dc(Kc,Wc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(et)}catch(a){console.warn(a)}}}}).catch(t=>{throw be.create("idb-open",{originalErrorMessage:t.message})})),Bt}async function Jc(t){try{const a=(await Hi()).transaction(et),i=await a.objectStore(et).get(Gi(t));return await a.done,i}catch(e){if(e instanceof xe)ae.warn(e.message);else{const a=be.create("idb-get",{originalErrorMessage:e?.message});ae.warn(a.message)}}}async function qa(t,e){try{const i=(await Hi()).transaction(et,"readwrite");await i.objectStore(et).put(e,Gi(t)),await i.done}catch(a){if(a instanceof xe)ae.warn(a.message);else{const i=be.create("idb-set",{originalErrorMessage:a?.message});ae.warn(i.message)}}}function Gi(t){return`${t.name}!${t.options.appId}`}const Yc=1024,Qc=30;class Xc{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new el(a),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fa();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:a}),this._heartbeatsCache.heartbeats.length>Qc){const s=tl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ae.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fa(),{heartbeatsToSend:a,unsentEntries:i}=Zc(this._heartbeatsCache.heartbeats),s=Oi(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ae.warn(e),""}}}function Fa(){return new Date().toISOString().substring(0,10)}function Zc(t,e=Yc){const a=[];let i=t.slice();for(const s of t){const r=a.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ba(a)>e){r.dates.pop();break}}else if(a.push({agent:s.agent,dates:[s.date]}),Ba(a)>e){a.pop();break}i=i.slice(1)}return{heartbeatsToSend:a,unsentEntries:i}}class el{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jn()?zn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await Jc(this.app);return a?.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return qa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return qa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ba(t){return Oi(JSON.stringify({version:2,heartbeats:t})).length}function tl(t){if(t.length===0)return-1;let e=0,a=t[0].date;for(let i=1;i<t.length;i++)t[i].date<a&&(a=t[i].date,e=i);return e}function al(t){Ze(new Ne("platform-logger",e=>new mc(e),"PRIVATE")),Ze(new Ne("heartbeat",e=>new Xc(e),"PRIVATE")),Me(Qt,za,t),Me(Qt,za,"esm2020"),Me("fire-js","")}al("");var il="firebase",sl="12.16.0";Me(il,sl,"app");function Ki(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rl=Ki,Wi=new it("auth","Firebase",Ki());const wt=new Ui("@firebase/auth");function ol(t,...e){wt.logLevel<=T.WARN&&wt.warn(`Auth (${rt}): ${t}`,...e)}function ft(t,...e){wt.logLevel<=T.ERROR&&wt.error(`Auth (${rt}): ${t}`,...e)}function H(t,...e){throw ua(t,...e)}function Y(t,...e){return ua(t,...e)}function Ji(t,e,a){const i={...rl(),[e]:a};return new it("auth","Firebase",i).create(e,{appName:t.name})}function he(t){return Ji(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ua(t,...e){if(typeof t!="string"){const a=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(a,...i)}return Wi.create(t,...e)}function v(t,e,...a){if(!t)throw ua(e,...a)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ft(e),new Error(e)}function ie(t,e){t||ee(e)}function ea(){return typeof self<"u"&&self.location?.href||""}function nl(){return Va()==="http:"||Va()==="https:"}function Va(){return typeof self<"u"&&self.location?.protocol||null}function cl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nl()||On()||"connection"in navigator)?navigator.onLine:!0}function ll(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}class ot{constructor(e,a){this.shortDelay=e,this.longDelay=a,ie(a>e,"Short delay should be less than long delay!"),this.isMobile=Rn()||$n()}get(){return cl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function pa(t,e){ie(t.emulator,"Emulator should always be set here");const{url:a}=t.emulator;return e?`${a}${e.startsWith("/")?e.slice(1):e}`:a}class Yi{static initialize(e,a,i){this.fetchImpl=e,a&&(this.headersImpl=a),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const dl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const ul=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pl=new ot(3e4,6e4);function ve(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function se(t,e,a,i,s={}){return Qi(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const n=st({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...r};return Dn()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&la(t.emulatorConfig.host)&&(l.credentials="include"),Yi.fetch()(await Xi(t,t.config.apiHost,a,n),l)})}async function Qi(t,e,a){t._canInitEmulator=!1;const i={...dl,...e};try{const s=new fl(t),r=await Promise.race([a(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pt(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const n=r.ok?o.errorMessage:o.error.message,[c,l]=n.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pt(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ji(t,u,l);H(t,u)}}catch(s){if(s instanceof xe)throw s;H(t,"network-request-failed",{message:String(s)})}}async function Rt(t,e,a,i,s={}){const r=await se(t,e,a,i,s);return"mfaPendingCredential"in r&&H(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Xi(t,e,a,i){const s=`${e}${a}?${i}`,r=t,o=r.config.emulator?pa(t.config,s):`${t.config.apiScheme}://${s}`;return ul.includes(a)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function ml(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((a,i)=>{this.timer=setTimeout(()=>i(Y(this.auth,"network-request-failed")),pl.get())})}}function pt(t,e,a){const i={appName:t.name};a.email&&(i.email=a.email),a.phoneNumber&&(i.phoneNumber=a.phoneNumber);const s=Y(t,e,i);return s.customData._tokenResponse=a,s}function Ha(t){return t!==void 0&&t.enterprise!==void 0}class gl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const a of this.recaptchaEnforcementState)if(a.provider&&a.provider===e)return ml(a.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bl(t,e){return se(t,"GET","/v2/recaptchaConfig",ve(t,e))}async function hl(t,e){return se(t,"POST","/v1/accounts:delete",e)}async function Et(t,e){return se(t,"POST","/v1/accounts:lookup",e)}function Ye(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xl(t,e=!1){const a=X(t),i=await a.getIdToken(e),s=ma(i);v(s&&s.exp&&s.auth_time&&s.iat,a.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:Ye(Vt(s.auth_time)),issuedAtTime:Ye(Vt(s.iat)),expirationTime:Ye(Vt(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Vt(t){return Number(t)*1e3}function ma(t){const[e,a,i]=t.split(".");if(e===void 0||a===void 0||i===void 0)return ft("JWT malformed, contained fewer than 3 sections"),null;try{const s=$i(a);return s?JSON.parse(s):(ft("Failed to decode base64 JWT payload"),null)}catch(s){return ft("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ga(t){const e=ma(t);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function tt(t,e,a=!1){if(a)return e;try{return await e}catch(i){throw i instanceof xe&&vl(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function vl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}class yl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const a=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class ta{constructor(e,a){this.createdAt=e,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ye(this.lastLoginAt),this.creationTime=Ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function kt(t){const e=t.auth,a=await t.getIdToken(),i=await tt(t,Et(e,{idToken:a}));v(i?.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const r=s.providerUserInfo?.length?Zi(s.providerUserInfo):[],o=El(t.providerData,r),n=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=n?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ta(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function wl(t){const e=X(t);await kt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function El(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Zi(t){return t.map(({providerId:e,...a})=>({providerId:e,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}))}async function kl(t,e){const a=await Qi(t,{},async()=>{const i=st({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await Xi(t,s,"/v1/token",`key=${r}`),n=await t._getAdditionalHeaders();n["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:n,body:i};return t.emulatorConfig&&la(t.emulatorConfig.host)&&(c.credentials="include"),Yi.fetch()(o,c)});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}async function Al(t,e){return se(t,"POST","/v2/accounts:revokeToken",ve(t,e))}class Re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const a="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ga(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,a)}updateFromIdToken(e){v(e.length!==0,"internal-error");const a=Ga(e);this.updateTokensAndExpiration(e,null,a)}async getToken(e,a=!1){return!a&&this.accessToken&&!this.isExpired?this.accessToken:(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,a){const{accessToken:i,refreshToken:s,expiresIn:r}=await kl(e,a);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,a,i){this.refreshToken=a||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,a){const{refreshToken:i,accessToken:s,expirationTime:r}=a,o=new Re;return i&&(v(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(v(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(v(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Re,this.toJSON())}_performRefresh(){return ee("not implemented")}}function oe(t,e){v(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class V{constructor({uid:e,auth:a,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new yl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=a,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ta(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const a=await tt(this,this.stsTokenManager.getToken(this.auth,e));return v(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(e){return xl(this,e)}reload(){return wl(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(a=>({...a})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const a=new V({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return a.metadata._copy(this.metadata),a}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,a=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),a&&await kt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(he(this.auth));const e=await this.getIdToken();return await tt(this,hl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,a){const i=a.displayName??void 0,s=a.email??void 0,r=a.phoneNumber??void 0,o=a.photoURL??void 0,n=a.tenantId??void 0,c=a._redirectEventId??void 0,l=a.createdAt??void 0,u=a.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:x,stsTokenManager:k}=a;v(d&&k,e,"internal-error");const b=Re.fromJSON(this.name,k);v(typeof d=="string",e,"internal-error"),oe(i,e.name),oe(s,e.name),v(typeof f=="boolean",e,"internal-error"),v(typeof p=="boolean",e,"internal-error"),oe(r,e.name),oe(o,e.name),oe(n,e.name),oe(c,e.name),oe(l,e.name),oe(u,e.name);const y=new V({uid:d,auth:e,email:s,emailVerified:f,displayName:i,isAnonymous:p,photoURL:o,phoneNumber:r,tenantId:n,stsTokenManager:b,createdAt:l,lastLoginAt:u});return x&&Array.isArray(x)&&(y.providerData=x.map(_=>({..._}))),c&&(y._redirectEventId=c),y}static async _fromIdTokenResponse(e,a,i=!1){const s=new Re;s.updateFromServerResponse(a);const r=new V({uid:a.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await kt(r),r}static async _fromGetAccountInfoResponse(e,a,i){const s=a.users[0];v(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Zi(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!r?.length,n=new Re;n.updateFromIdToken(i);const c=new V({uid:s.localId,auth:e,stsTokenManager:n,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ta(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(c,l),c}}const Ka=new Map;function te(t){ie(t instanceof Function,"Expected a class definition");let e=Ka.get(t);return e?(ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ka.set(t,e),e)}class es{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,a){this.storage[e]=a}async _get(e){const a=this.storage[e];return a===void 0?null:a}async _remove(e){delete this.storage[e]}_addListener(e,a){}_removeListener(e,a){}}es.type="NONE";const aa=es;function gt(t,e,a){return`firebase:${t}:${e}:${a}`}class De{constructor(e,a,i){this.persistence=e,this.auth=a,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=gt(this.userKey,s.apiKey,r),this.fullPersistenceKey=gt("persistence",s.apiKey,r),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const a=await Et(this.auth,{idToken:e}).catch(()=>{});return a?V._fromGetAccountInfoResponse(this.auth,a,e):null}return V._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,a,i="authUser"){if(!a.length)return new De(te(aa),e,i);const s=(await Promise.all(a.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||te(aa);const o=gt(i,e.config.apiKey,e.name);let n=null;for(const l of a)try{const u=await l._get(o);if(u){let d;if(typeof u=="string"){const f=await Et(e,{idToken:u}).catch(()=>{});if(!f)break;d=await V._fromGetAccountInfoResponse(e,f,u)}else d=V._fromJSON(e,u);l!==r&&(n=d),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new De(r,e,i):(r=c[0],n&&await r._set(o,n.toJSON()),await Promise.all(a.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new De(r,e,i))}}function Wa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ss(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ts(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(os(e))return"Blackberry";if(ns(e))return"Webos";if(as(e))return"Safari";if((e.includes("chrome/")||is(e))&&!e.includes("edge/"))return"Chrome";if(rs(e))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(a);if(i?.length===2)return i[1]}return"Other"}function ts(t=$()){return/firefox\//i.test(t)}function as(t=$()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function is(t=$()){return/crios\//i.test(t)}function ss(t=$()){return/iemobile/i.test(t)}function rs(t=$()){return/android/i.test(t)}function os(t=$()){return/blackberry/i.test(t)}function ns(t=$()){return/webos/i.test(t)}function fa(t=$()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Cl(t=$()){return fa(t)&&!!window.navigator?.standalone}function Il(){return Nn()&&document.documentMode===10}function cs(t=$()){return fa(t)||rs(t)||ns(t)||os(t)||/windows phone/i.test(t)||ss(t)}function ls(t,e=[]){let a;switch(t){case"Browser":a=Wa($());break;case"Worker":a=`${Wa($())}-${t}`;break;default:a=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${a}/JsCore/${rt}/${i}`}class Sl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,a){const i=r=>new Promise((o,n)=>{try{const c=e(r);o(c)}catch(c){n(c)}});i.onAbort=a,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const a=[];try{for(const i of this.queue)await i(e),i.onAbort&&a.push(i.onAbort)}catch(i){a.reverse();for(const s of a)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}async function _l(t,e={}){return se(t,"GET","/v2/passwordPolicy",ve(t,e))}const Tl=6;class Pl{constructor(e){const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=a.minPasswordLength??Tl,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=a.meetsMinPasswordLength??!0),a.isValid&&(a.isValid=a.meetsMaxPasswordLength??!0),a.isValid&&(a.isValid=a.containsLowercaseLetter??!0),a.isValid&&(a.isValid=a.containsUppercaseLetter??!0),a.isValid&&(a.isValid=a.containsNumericCharacter??!0),a.isValid&&(a.isValid=a.containsNonAlphanumericCharacter??!0),a}validatePasswordLengthOptions(e,a){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(a.meetsMinPasswordLength=e.length>=i),s&&(a.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,a){this.updatePasswordCharacterOptionsStatuses(a,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(a,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,a,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=a)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}class Ll{constructor(e,a,i,s){this.app=e,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ja(this),this.idTokenSubscription=new Ja(this),this.beforeStateQueue=new Sl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,a){return a&&(this._popupRedirectResolver=te(a)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await De.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const a=await Et(this,{idToken:e}),i=await V._fromGetAccountInfoResponse(this,a,e);await this.directlySetCurrentUser(i)}catch(a){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",a),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(W(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let i=a,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=i?._redirectEventId,n=await this.tryRedirectSignIn(e);(!r||r===o)&&n?.user&&(i=n.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(e){try{await kt(e)}catch(a){if(a?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ll()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(he(this));const a=e?X(e):null;return a&&v(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(e,a=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(he(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(he(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const a=this._getPasswordPolicyInternal();return a.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):a.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _l(this),a=new Pl(e);this.tenantId===null?this._projectPasswordPolicy=a:this._tenantPasswordPolicies[this.tenantId]=a}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new it("auth","Firebase",e())}onAuthStateChanged(e,a,i){return this.registerStateListener(this.authStateSubscription,e,a,i)}beforeAuthStateChanged(e,a){return this.beforeStateQueue.pushCallback(e,a)}onIdTokenChanged(e,a,i){return this.registerStateListener(this.idTokenSubscription,e,a,i)}authStateReady(){return new Promise((e,a)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},a)}})}async revokeAccessToken(e){if(this.currentUser){const a=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:a};this.tenantId!=null&&(i.tenantId=this.tenantId),await Al(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,a){const i=await this.getOrInitRedirectPersistenceManager(a);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const a=e&&te(e)||this._popupRedirectResolver;v(a,this,"argument-error"),this.redirectPersistenceManager=await De.create(this,[te(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,a,i,s){if(this._deleted)return()=>{};const r=typeof a=="function"?a:a.next.bind(a);let o=!1;const n=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(n,this,"internal-error"),n.then(()=>{o||r(this.currentUser)}),typeof a=="function"){const c=e.addObserver(a,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(a);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ls(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const a=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();a&&(e["X-Firebase-Client"]=a);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(W(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ol(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ke(t){return X(t)}class Ja{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vn(a=>this.observer=a)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Dt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ml(t){Dt=t}function ds(t){return Dt.loadJS(t)}function Rl(){return Dt.recaptchaEnterpriseScript}function Dl(){return Dt.gapiScript}function Ol(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $l{constructor(){this.enterprise=new Nl}ready(e){e()}execute(e,a){return Promise.resolve("token")}render(e,a){return""}}class Nl{ready(e){e()}execute(e,a){return Promise.resolve("token")}render(e,a){return""}}const jl="recaptcha-enterprise",us="NO_RECAPTCHA",Ya="onFirebaseAuthREInstanceReady";class le{constructor(e){this.type=jl,this.auth=ke(e)}async verify(e="verify",a=!1){async function i(r){if(!a){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,n)=>{bl(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)n(new Error("recaptcha Enterprise site key undefined"));else{const l=new gl(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{n(c)})})}function s(r,o,n){const c=window.grecaptcha;Ha(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(us)})}):n(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $l().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(async n=>{if(!a&&Ha(window.grecaptcha)&&le.scriptInjectionDeferred)await le.scriptInjectionDeferred.promise,s(n,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Rl();c.length!==0&&(c+=n+`&onload=${Ya}`),le.scriptInjectionDeferred=new zi,window[Ya]=()=>{le.scriptInjectionDeferred?.resolve()},ds(c).then(()=>le.scriptInjectionDeferred?.promise).then(()=>{s(n,r,o)}).catch(l=>{o(l)})}}).catch(n=>{o(n)})})}}le.scriptInjectionDeferred=null;async function Qa(t,e,a,i=!1,s=!1){const r=new le(t);let o;if(s)o=us;else try{o=await r.verify(a)}catch{o=await r.verify(a,!0)}const n={...e};if(a==="mfaSmsEnrollment"||a==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in n){const c=n.phoneEnrollmentInfo.phoneNumber,l=n.phoneEnrollmentInfo.recaptchaToken;Object.assign(n,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in n){const c=n.phoneSignInInfo.recaptchaToken;Object.assign(n,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return n}return i?Object.assign(n,{captchaResp:o}):Object.assign(n,{captchaResponse:o}),Object.assign(n,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(n,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),n}async function ia(t,e,a,i,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Qa(t,e,a,a==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${a} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Qa(t,e,a,a==="getOobCode");return i(t,o)}else return Promise.reject(r)})}function zl(t,e){const a=Bi(t,"auth");if(a.isInitialized()){const s=a.getImmediate(),r=a.getOptions();if($e(r,e??{}))return s;H(s,"already-initialized")}return a.initialize({options:e})}function Ul(t,e){const a=e?.persistence||[],i=(Array.isArray(a)?a:[a]).map(te);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function ql(t,e,a){const i=ke(t);v(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=ps(e),{host:o,port:n}=Fl(e),c=n===null?"":`:${n}`,l={url:`${r}//${o}${c}/`},u=Object.freeze({host:o,port:n,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){v(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),v($e(l,i.config.emulator)&&$e(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,la(o)?Kn(`${r}//${o}${c}`):Bl()}function ps(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fl(t){const e=ps(t),a=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!a)return{host:"",port:null};const i=a[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Xa(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Xa(o)}}}function Xa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bl(){function t(){const e=document.createElement("p"),a=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}class ga{constructor(e,a){this.providerId=e,this.signInMethod=a}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,a){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}async function Vl(t,e){return se(t,"POST","/v1/accounts:signUp",e)}async function Hl(t,e){return Rt(t,"POST","/v1/accounts:signInWithPassword",ve(t,e))}async function Gl(t,e){return se(t,"POST","/v1/accounts:sendOobCode",ve(t,e))}async function Kl(t,e){return Gl(t,e)}async function Wl(t,e){return Rt(t,"POST","/v1/accounts:signInWithEmailLink",ve(t,e))}async function Jl(t,e){return Rt(t,"POST","/v1/accounts:signInWithEmailLink",ve(t,e))}class at extends ga{constructor(e,a,i,s=null){super("password",i),this._email=e,this._password=a,this._tenantId=s}static _fromEmailAndPassword(e,a){return new at(e,a,"password")}static _fromEmailAndCode(e,a,i=null){return new at(e,a,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e;if(a?.email&&a?.password){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,a,"signInWithPassword",Hl);case"emailLink":return Wl(e,{email:this._email,oobCode:this._password});default:H(e,"internal-error")}}async _linkToIdToken(e,a){switch(this.signInMethod){case"password":const i={idToken:a,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,i,"signUpPassword",Vl);case"emailLink":return Jl(e,{idToken:a,email:this._email,oobCode:this._password});default:H(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function Oe(t,e){return Rt(t,"POST","/v1/accounts:signInWithIdp",ve(t,e))}const Yl="http://localhost";class Ee extends ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const a=new Ee(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(a.idToken=e.idToken),e.accessToken&&(a.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(a.nonce=e.nonce),e.pendingToken&&(a.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(a.accessToken=e.oauthToken,a.secret=e.oauthTokenSecret):H("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=a;if(!i||!s)return null;const o=new Ee(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const a=this.buildRequest();return Oe(e,a)}_linkToIdToken(e,a){const i=this.buildRequest();return i.idToken=a,Oe(e,i)}_getReauthenticationResolver(e){const a=this.buildRequest();return a.autoCreate=!1,Oe(e,a)}buildRequest(){const e={requestUri:Yl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),e.postBody=st(a)}return e}}function Ql(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xl(t){const e=We(Je(t)).link,a=e?We(Je(e)).deep_link_id:null,i=We(Je(t)).deep_link_id;return(i?We(Je(i)).link:null)||i||a||e||t}class ba{constructor(e){const a=We(Je(e)),i=a.apiKey??null,s=a.oobCode??null,r=Ql(a.mode??null);v(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=a.continueUrl??null,this.languageCode=a.lang??null,this.tenantId=a.tenantId??null}static parseLink(e){const a=Xl(e);try{return new ba(a)}catch{return null}}}class Ue{constructor(){this.providerId=Ue.PROVIDER_ID}static credential(e,a){return at._fromEmailAndPassword(e,a)}static credentialWithLink(e,a){const i=ba.parseLink(a);return v(i,"argument-error"),at._fromEmailAndCode(e,i.code,i.tenantId)}}Ue.PROVIDER_ID="password";Ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class ms{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class nt extends ms{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class de extends nt{constructor(){super("facebook.com")}static credential(e){return Ee._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com";de.PROVIDER_ID="facebook.com";class ue extends nt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,a){return Ee._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:a})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:a,oauthAccessToken:i}=e;if(!a&&!i)return null;try{return ue.credential(a,i)}catch{return null}}}ue.GOOGLE_SIGN_IN_METHOD="google.com";ue.PROVIDER_ID="google.com";class pe extends nt{constructor(){super("github.com")}static credential(e){return Ee._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";class me extends nt{constructor(){super("twitter.com")}static credential(e,a){return Ee._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:a})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:a,oauthTokenSecret:i}=e;if(!a||!i)return null;try{return me.credential(a,i)}catch{return null}}}me.TWITTER_SIGN_IN_METHOD="twitter.com";me.PROVIDER_ID="twitter.com";class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,a,i,s=!1){const r=await V._fromIdTokenResponse(e,i,s),o=Za(i);return new je({user:r,providerId:o,_tokenResponse:i,operationType:a})}static async _forOperation(e,a,i){await e._updateTokensIfNecessary(i,!0);const s=Za(i);return new je({user:e,providerId:s,_tokenResponse:i,operationType:a})}}function Za(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}class At extends xe{constructor(e,a,i,s){super(a.code,a.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:a.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,a,i,s){return new At(e,a,i,s)}}function fs(t,e,a,i){return(e==="reauthenticate"?a._getReauthenticationResolver(t):a._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?At._fromErrorAndOperation(t,r,e,i):r})}async function Zl(t,e,a=!1){const i=await tt(t,e._linkToIdToken(t.auth,await t.getIdToken()),a);return je._forOperation(t,"link",i)}async function ed(t,e,a=!1){const{auth:i}=t;if(W(i.app))return Promise.reject(he(i));const s="reauthenticate";try{const r=await tt(t,fs(i,s,e,t),a);v(r.idToken,i,"internal-error");const o=ma(r.idToken);v(o,i,"internal-error");const{sub:n}=o;return v(t.uid===n,i,"user-mismatch"),je._forOperation(t,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&H(i,"user-mismatch"),r}}async function gs(t,e,a=!1){if(W(t.app))return Promise.reject(he(t));const i="signIn",s=await fs(t,i,e),r=await je._fromIdTokenResponse(t,i,s);return a||await t._updateCurrentUser(r.user),r}async function td(t,e){return gs(ke(t),e)}async function ad(t){const e=ke(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function id(t,e,a){const i=ke(t);await ia(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Kl)}function sd(t,e,a){return W(t.app)?Promise.reject(he(t)):td(X(t),Ue.credential(e,a)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ad(t),i})}function ei(t,e){return X(t).setPersistence(e)}function rd(t,e,a,i){return X(t).onIdTokenChanged(e,a,i)}function od(t,e,a){return X(t).beforeAuthStateChanged(e,a)}function nd(t,e,a,i){return X(t).onAuthStateChanged(e,a,i)}function cd(t){return X(t).signOut()}const Ct="__sak";class bs{constructor(e,a){this.storageRetriever=e,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(Ct,"1"),this.storage.removeItem(Ct),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,a){return this.storage.setItem(e,JSON.stringify(a)),Promise.resolve()}_get(e){const a=this.storage.getItem(e);return Promise.resolve(a?JSON.parse(a):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const ld=1e3,dd=10;class hs extends bs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,a)=>this.onStorageEvent(e,a),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const a of Object.keys(this.listeners)){const i=this.storage.getItem(a),s=this.localCache[a];i!==s&&e(a,s,i)}}onStorageEvent(e,a=!1){if(!e.key){this.forAllChangedKeys((o,n,c)=>{this.notifyListeners(o,c)});return}const i=e.key;a?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!a&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Il()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dd):s()}notifyListeners(e,a){this.localCache[e]=a;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,a,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:a,newValue:i}),!0)})},ld)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,a){await super._set(e,a),this.localCache[e]=JSON.stringify(a)}async _get(e){const a=await super._get(e);return this.localCache[e]=JSON.stringify(a),a}async _remove(e){await super._remove(e),delete this.localCache[e]}}hs.type="LOCAL";const ud=hs;class xs extends bs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,a){}_removeListener(e,a){}}xs.type="SESSION";const ha=xs;function pd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(a){return{fulfilled:!1,reason:a}}}))}class Ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const a=this.receivers.find(s=>s.isListeningto(e));if(a)return a;const i=new Ot(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const a=e,{eventId:i,eventType:s,data:r}=a.data,o=this.handlersMap[s];if(!o?.size)return;a.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const n=Array.from(o).map(async l=>l(a.origin,r)),c=await pd(n);a.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(a)}_unsubscribe(e,a){this.handlersMap[e]&&a&&this.handlersMap[e].delete(a),(!a||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ot.receivers=[];function xa(t="",e=10){let a="";for(let i=0;i<e;i++)a+=Math.floor(Math.random()*10);return t+a}class md{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,a,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((n,c)=>{const l=xa("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),n(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:a},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}function Q(){return window}function fd(t){Q().location.href=t}function vs(){return typeof Q().WorkerGlobalScope<"u"&&typeof Q().importScripts=="function"}async function gd(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bd(){return navigator?.serviceWorker?.controller||null}function hd(){return vs()?self:null}const ys="firebaseLocalStorageDb",xd=1,It="firebaseLocalStorage",ws="fbase_key";class ct{constructor(e){this.request=e}toPromise(){return new Promise((e,a)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function $t(t,e){return t.transaction([It],e?"readwrite":"readonly").objectStore(It)}function vd(){const t=indexedDB.deleteDatabase(ys);return new ct(t).toPromise()}function Es(){const t=indexedDB.open(ys,xd);return new Promise((e,a)=>{t.addEventListener("error",()=>{a(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(It,{keyPath:ws})}catch(s){a(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(It)?e(i):(i.close(),await vd(),e(await Es()))})})}async function ti(t,e,a){const i=$t(t,!0).put({[ws]:e,value:a});return new ct(i).toPromise()}async function yd(t,e){const a=$t(t,!1).get(e),i=await new ct(a).toPromise();return i===void 0?null:i.value}function ai(t,e){const a=$t(t,!0).delete(e);return new ct(a).toPromise()}const wd=800,Ed=3;class ks{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Es(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let a=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(a++>Ed)throw i;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return vs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ot._getInstance(hd()),this.receiver._subscribe("keyChanged",async(e,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(e,a)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await gd(),!this.activeServiceWorker)return;this.sender=new md(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await ti(e,Ct,"1"),await ai(e,Ct)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,a){return this._withPendingWrite(async()=>(await this._withRetries(i=>ti(i,e,a)),this.localCache[e]=a,this.notifyServiceWorker(e)))}async _get(e){const a=await this._withRetries(i=>yd(i,e));return this.localCache[e]=a,a}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(a=>ai(a,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=$t(s,!1).getAll();return new ct(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const a=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),a.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),a.push(s));return a}notifyListeners(e,a){this.localCache[e]=a;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ks.type="LOCAL";const kd=ks;new ot(3e4,6e4);function Ad(t,e){return e?te(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}class va extends ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oe(e,this._buildIdpRequest())}_linkToIdToken(e,a){return Oe(e,this._buildIdpRequest(a))}_getReauthenticationResolver(e){return Oe(e,this._buildIdpRequest())}_buildIdpRequest(e){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(a.idToken=e),a}}function Cd(t){return gs(t.auth,new va(t),t.bypassAuthState)}function Id(t){const{auth:e,user:a}=t;return v(a,e,"internal-error"),ed(a,new va(t),t.bypassAuthState)}async function Sd(t){const{auth:e,user:a}=t;return v(a,e,"internal-error"),Zl(a,new va(t),t.bypassAuthState)}class As{constructor(e,a,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(e,a)=>{this.pendingPromise={resolve:e,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:a,sessionId:i,postBody:s,tenantId:r,error:o,type:n}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:a,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(n)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cd;case"linkViaPopup":case"linkViaRedirect":return Sd;case"reauthViaPopup":case"reauthViaRedirect":return Id;default:H(this.auth,"internal-error")}}resolve(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const _d=new ot(2e3,1e4);class Le extends As{constructor(e,a,i,s,r){super(e,a,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Le.currentPopupAction&&Le.currentPopupAction.cancel(),Le.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){ie(this.filter.length===1,"Popup operations only handle one event");const e=xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(Y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Le.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_d.get())};e()}}Le.currentPopupAction=null;const Td="pendingRedirect",bt=new Map;class Pd extends As{constructor(e,a,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,i),this.eventId=null}async execute(){let e=bt.get(this.auth._key());if(!e){try{const i=await Ld(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(a){e=()=>Promise.reject(a)}bt.set(this.auth._key(),e)}return this.bypassAuthState||bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const a=await this.auth._redirectUserForId(e.eventId);if(a)return this.user=a,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ld(t,e){const a=Dd(e),i=Rd(t);if(!await i._isAvailable())return!1;const s=await i._get(a)==="true";return await i._remove(a),s}function Md(t,e){bt.set(t._key(),e)}function Rd(t){return te(t._redirectPersistence)}function Dd(t){return gt(Td,t.config.apiKey,t.name)}async function Od(t,e,a=!1){if(W(t.app))return Promise.reject(he(t));const i=ke(t),s=Ad(i,e),o=await new Pd(i,s,a).execute();return o&&!a&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}const $d=600*1e3;class Nd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let a=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(a=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jd(e)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=e,a=!0)),a}sendToConsumer(e,a){if(e.error&&!Cs(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";a.onError(Y(this.auth,i))}else a.onAuthEvent(e)}isEventForConsumer(e,a){const i=a.eventId===null||!!e.eventId&&e.eventId===a.eventId;return a.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$d&&this.cachedEventUids.clear(),this.cachedEventUids.has(ii(e))}saveEventToCache(e){this.cachedEventUids.add(ii(e)),this.lastProcessedEventTime=Date.now()}}function ii(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cs({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function jd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cs(t);default:return!1}}async function zd(t,e={}){return se(t,"GET","/v1/projects",e)}const Ud=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qd=/^https?/;async function Fd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zd(t);for(const a of e)try{if(Bd(a))return}catch{}H(t,"unauthorized-domain")}function Bd(t){const e=ea(),{protocol:a,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?a==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):a==="chrome-extension:"&&o.hostname===i}if(!qd.test(a))return!1;if(Ud.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}const Vd=new ot(3e4,6e4);function si(){const t=Q().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let a=0;a<t.CP.length;a++)t.CP[a]=null}}function Hd(t){return new Promise((e,a)=>{function i(){si(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{si(),a(Y(t,"network-request-failed"))},timeout:Vd.get()})}if(Q().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Q().gapi?.load)i();else{const s=Ol("iframefcb");return Q()[s]=()=>{gapi.load?i():a(Y(t,"network-request-failed"))},ds(`${Dl()}?onload=${s}`).catch(r=>a(r))}}).catch(e=>{throw ht=null,e})}let ht=null;function Gd(t){return ht=ht||Hd(t),ht}const Kd=new ot(5e3,15e3),Wd="__/auth/iframe",Jd="emulator/auth/iframe",Yd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xd(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const a=e.emulator?pa(e,Jd):`https://${t.config.authDomain}/${Wd}`,i={apiKey:e.apiKey,appName:t.name,v:rt},s=Qd.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${a}?${st(i).slice(1)}`}async function Zd(t){const e=await Gd(t),a=Q().gapi;return v(a,t,"internal-error"),e.open({where:document.body,url:Xd(t),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yd,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Y(t,"network-request-failed"),n=Q().setTimeout(()=>{r(o)},Kd.get());function c(){Q().clearTimeout(n),s(i)}i.ping(c).then(c,()=>{r(o)})}))}const eu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tu=500,au=600,iu="_blank",su="http://localhost";class ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ru(t,e,a,i=tu,s=au){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let n="";const c={...eu,width:i.toString(),height:s.toString(),top:r,left:o},l=$().toLowerCase();a&&(n=is(l)?iu:a),ts(l)&&(e=e||su,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,x])=>`${f}${p}=${x},`,"");if(Cl(l)&&n!=="_self")return ou(e||"",n),new ri(null);const d=window.open(e||"",n,u);v(d,t,"popup-blocked");try{d.focus()}catch{}return new ri(d)}function ou(t,e){const a=document.createElement("a");a.href=t,a.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(i)}const nu="__/auth/handler",cu="emulator/auth/handler",lu=encodeURIComponent("fac");async function oi(t,e,a,i,s,r){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:a,redirectUrl:i,v:rt,eventId:s};if(e instanceof ms){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bn(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof nt){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const n=o;for(const u of Object.keys(n))n[u]===void 0&&delete n[u];const c=await t._getAppCheckToken(),l=c?`#${lu}=${encodeURIComponent(c)}`:"";return`${du(t)}?${st(n).slice(1)}${l}`}function du({config:t}){return t.emulator?pa(t,cu):`https://${t.authDomain}/${nu}`}const Ht="webStorageSupport";class uu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ha,this._completeRedirectFn=Od,this._overrideRedirectResult=Md}async _openPopup(e,a,i,s){ie(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await oi(e,a,i,ea(),s);return ru(e,r,xa())}async _openRedirect(e,a,i,s){await this._originValidation(e);const r=await oi(e,a,i,ea(),s);return fd(r),new Promise(()=>{})}_initialize(e){const a=e._key();if(this.eventManagers[a]){const{manager:s,promise:r}=this.eventManagers[a];return s?Promise.resolve(s):(ie(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[a]={promise:i},i.catch(()=>{delete this.eventManagers[a]}),i}async initAndGetManager(e){const a=await Zd(e),i=new Nd(e);return a.register("authEvent",s=>(v(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=a,i}_isIframeWebStorageSupported(e,a){this.iframes[e._key()].send(Ht,{type:Ht},s=>{const r=s?.[0]?.[Ht];r!==void 0&&a(!!r),H(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const a=e._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=Fd(e)),this.originValidationPromises[a]}get _shouldInitProactively(){return cs()||as()||fa()}}const pu=uu;var ni="@firebase/auth",ci="1.13.3";class mu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const a=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,a),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const a=this.internalListeners.get(e);a&&(this.internalListeners.delete(e),a(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function fu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gu(t){Ze(new Ne("auth",(e,{options:a})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:n}=i.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:n,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ls(t)},l=new Ll(i,s,r,c);return Ul(l,a),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,a,i)=>{e.getProvider("auth-internal").initialize()})),Ze(new Ne("auth-internal",e=>{const a=ke(e.getProvider("auth").getImmediate());return(i=>new mu(i))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(ni,ci,fu(t)),Me(ni,ci,"esm2020")}const bu=300,hu=ji("authIdTokenMaxAge")||bu;let li=null;const xu=t=>async e=>{const a=e&&await e.getIdTokenResult(),i=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(i&&i>hu)return;const s=a?.token;li!==s&&(li=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vu(t=Gc()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const a=zl(t,{popupRedirectResolver:pu,persistence:[kd,ud,ha]}),i=ji("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=xu(r.toString());od(a,o,()=>o(a.currentUser)),rd(a,n=>o(n))}}const s=Mn("auth");return s&&ql(a,`http://${s}`),a}function yu(){return document.getElementsByTagName("head")?.[0]??document}Ml({loadJS(t){return new Promise((e,a)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Y("internal-error");r.customData=s,a(r)},i.type="text/javascript",i.charset="UTF-8",yu().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gu("Browser");const wu={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},Eu=Vi(wu),ze=vu(Eu);async function ku(){try{await ei(ze,ha)}catch(t){console.warn("No fue posible conservar la sesión en el navegador; se utilizará memoria temporal.",t),await ei(ze,aa)}}async function Au(t,e){return await ku(),sd(ze,t,e)}async function Cu(t){return id(ze,String(t||"").trim())}async function Rp(){return cd(ze)}function Iu(t){return nd(ze,t)}function Su(){return new Promise(t=>{const e=Iu(a=>{e(),t(a)})})}function _u(t){const e=document.createElement("section");e.className=`
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
  `;const a=e.querySelector("#kernel-login"),i=e.querySelector("#login-mensaje"),s=e.querySelector("#correo"),r=e.querySelector("#password"),o=a.querySelector('button[type="submit"]'),n=e.querySelector("[data-action='recuperar-password']"),c=e.querySelector("[data-action='mostrar-password']"),l=(d,f="error")=>{i.textContent=d,i.className=["rounded-2xl border p-4 text-sm font-semibold leading-relaxed",f==="exito"?"border-emerald-200 bg-emerald-50 text-emerald-900":"border-red-200 bg-red-50 text-red-900"].join(" ")},u=()=>{i.className="hidden",i.textContent=""};return e.querySelector("[data-action='volver-inicio']")?.addEventListener("click",()=>{window.location.hash="/home"}),c?.addEventListener("change",()=>{r.type=c.checked?"text":"password"}),n?.addEventListener("click",async()=>{u();const d=s.value.trim();if(!d||!s.checkValidity()){l("Introduzca primero un correo electrónico válido."),s.focus();return}const f=n.textContent;n.disabled=!0,n.textContent="Enviando instrucciones...";try{await Cu(d),l("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña. Revise también la carpeta de correo no deseado.","exito")}catch(p){console.error("Error al solicitar recuperación:",p),p?.code==="auth/invalid-email"?l("El correo electrónico no tiene un formato válido."):p?.code==="auth/too-many-requests"?l("Se realizaron demasiadas solicitudes. Espere unos minutos antes de intentarlo nuevamente."):p?.code==="auth/network-request-failed"?l("No fue posible conectarse con Firebase. Revise su conexión."):l("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña.","exito")}finally{n.disabled=!1,n.textContent=f}}),a.addEventListener("submit",async d=>{d.preventDefault(),u();const f=s.value.trim(),p=r.value;if(!f||!p){l("Introduzca el correo electrónico y la contraseña.");return}if(!s.checkValidity()){l("El correo electrónico no tiene un formato válido."),s.focus();return}o.disabled=!0,o.textContent="Verificando...";try{await Au(f,p),t&&await t()}catch(x){console.error("Error de autenticación:",x),l({"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo o la contraseña son incorrectos.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."}[x?.code]||"No fue posible iniciar sesión. Inténtelo nuevamente.")}finally{o.disabled=!1,o.textContent="Iniciar sesión"}}),e}function M(t,e,a){return async()=>{const s=(await t())[e];if(typeof s!="function")throw new Error(a);return s()}}const Tu=M(()=>L(()=>import("./LaboratorioKernel-y8wQ_nU5.js"),[],import.meta.url),"LaboratorioKernel","El Laboratorio Inteligente no está disponible."),Pu=M(()=>L(()=>import("./AsistentePruebas-AX4vqLZX.js"),__vite__mapDeps([0,1]),import.meta.url),"AsistentePruebas","El asistente metodológico no está disponible."),Lu=M(()=>L(()=>import("./ComparacionGrupos-BqmYk_OJ.js"),[],import.meta.url),"ComparacionGrupos","El módulo de comparación de grupos no está disponible."),Mu=M(()=>L(()=>import("./CalculadoraDosGrupos-QPFgs7W4.js"),__vite__mapDeps([2,3]),import.meta.url),"CalculadoraDosGrupos","La calculadora de dos grupos no está disponible."),Ru=M(()=>L(()=>import("./CalculadoraDosMuestrasRelacionadas-CJ1RVWYl.js"),__vite__mapDeps([4,5,3]),import.meta.url),"CalculadoraDosMuestrasRelacionadas","La calculadora de muestras relacionadas no está disponible."),Du=M(()=>L(()=>import("./CalculadoraTresOMasGrupos-CguCqVTZ.js"),__vite__mapDeps([6,3]),import.meta.url),"CalculadoraTresOMasGrupos","La calculadora de tres o más grupos no está disponible."),Ou=M(()=>L(()=>import("./CalculadoraTresOMasMedicionesRelacionadas-DlaD_ARg.js"),__vite__mapDeps([7,3,5]),import.meta.url),"CalculadoraTresOMasMedicionesRelacionadas","La calculadora de mediciones relacionadas no está disponible."),$u=M(()=>L(()=>import("./CorrelacionAsociacion-BJOAMDeR.js"),[],import.meta.url),"CorrelacionAsociacion","El módulo de correlación y asociación no está disponible."),Nu=M(()=>L(()=>import("./CalculadoraRelacionVariables-Di98coDP.js"),__vite__mapDeps([8,3]),import.meta.url),"CalculadoraRelacionVariables","La calculadora de relación entre variables no está disponible."),ju=M(()=>L(()=>import("./CalculadoraAsociacionCategorica-Bng203VQ.js"),__vite__mapDeps([9,3]),import.meta.url),"CalculadoraAsociacionCategorica","La calculadora de asociación categórica no está disponible."),zu=M(()=>L(()=>import("./CalculadoraEstadisticaDescriptiva-CTrDkMt3.js"),[],import.meta.url),"CalculadoraEstadisticaDescriptiva","La calculadora de estadística descriptiva no está disponible."),Uu=M(()=>L(()=>import("./CalculadoraFiabilidadCuestionarios-cvzxa8nN.js"),[],import.meta.url),"CalculadoraFiabilidadCuestionarios","La calculadora de cuestionarios y fiabilidad no está disponible."),qu=M(()=>L(()=>import("./CalculadoraEvaluacionEducativa-CacwXVdJ.js"),[],import.meta.url),"CalculadoraEvaluacionEducativa","La calculadora de evaluación educativa no está disponible."),Fu=M(()=>L(()=>import("./CalculadoraTamanoMuestraPotencia-CQLN4Zkl.js"),[],import.meta.url),"CalculadoraTamanoMuestraPotencia","La calculadora de tamaño de muestra y potencia no está disponible."),Bu=M(()=>L(()=>import("./BibliotecaMetodologica-DYcZHcBA.js"),__vite__mapDeps([10,1]),import.meta.url),"BibliotecaMetodologica","La Biblioteca metodológica no está disponible."),Vu=M(()=>L(()=>import("./RegresionModelos-BOXDXzy8.js"),[],import.meta.url),"RegresionModelos","El área de modelos de regresión no está disponible."),Hu=M(()=>L(()=>import("./CalculadoraRegresionCompleta-Dl9k330R.js"),[],import.meta.url),"CalculadoraRegresionCompleta","La calculadora de regresión lineal no está disponible."),Gu=M(()=>L(()=>import("./CalculadoraRegresionLogistica-kSsxu5Mw.js"),[],import.meta.url),"CalculadoraRegresionLogistica","La calculadora de regresión logística no está disponible."),Ku=M(()=>L(()=>import("./CalculadoraRegresionConteo-VE7dPXsR.js"),[],import.meta.url),"CalculadoraRegresionConteo","La calculadora de regresión de conteo no está disponible."),Wu={home:{page:Ar,layout:"full",title:"Portada | El Kernel"},servicios:{page:xn,layout:"full",title:"Servicios profesionales y académicos | El Kernel"},diagnosticoServicios:{page:kn,layout:"full",title:"Solicitar diagnóstico | El Kernel"},quienesSomos:{page:Br,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Yr,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:eo,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:vo,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:So,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:Uo,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Oo,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Yo,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:an,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Tu,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:Pu,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:Lu,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:Mu,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:Ru,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:Du,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:Ou,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:$u,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:Nu,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:ju,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:zu,layout:"default",title:"Estadística descriptiva | El Kernel"},calculadoraFiabilidadCuestionarios:{page:Uu,layout:"default",title:"Cuestionarios y fiabilidad | El Kernel"},calculadoraEvaluacionEducativa:{page:qu,layout:"default",title:"Evaluación educativa | El Kernel"},calculadoraTamanoMuestraPotencia:{page:Fu,layout:"default",title:"Tamaño de muestra y potencia | El Kernel"},bibliotecaMetodologica:{page:Bu,layout:"default",title:"Biblioteca metodológica | El Kernel"},regresionModelos:{page:Vu,layout:"default",title:"Modelos de regresión | El Kernel"},calculadoraRegresion:{page:Hu,layout:"default",title:"Regresión lineal y múltiple | El Kernel"},calculadoraRegresionLogistica:{page:Gu,layout:"default",title:"Regresión logística binaria | El Kernel"},calculadoraRegresionConteo:{page:Ku,layout:"default",title:"Regresión de Poisson y binomial negativa | El Kernel"}},Ju=new Set(["laboratorioKernel","asistentePruebas","comparacionGrupos","calculadoraDosGrupos","calculadoraDosMuestrasRelacionadas","calculadoraTresOMasGrupos","calculadoraTresOMasMedicionesRelacionadas","correlacionAsociacion","calculadoraRelacionVariables","calculadoraAsociacionCategorica","calculadoraEstadisticaDescriptiva","calculadoraFiabilidadCuestionarios","calculadoraEvaluacionEducativa","calculadoraTamanoMuestraPotencia","bibliotecaMetodologica","regresionModelos","calculadoraRegresion","calculadoraRegresionLogistica","calculadoraRegresionConteo"]);let di=document.referrer||"";function Nt(t){window.location.hash=`/${t}`}function Yu(){const t=()=>{const e=window.location.hash.replace("#/","")||"home";tp(e)};window.addEventListener("hashchange",t),t()}function Qu(t,e){const a=`${window.location.origin}${window.location.pathname}#/${t}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:e,page_location:a,page_referrer:di}),di=a}function Xu(){return document.title="Acceso al Laboratorio | El Kernel",_u(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))})}function Zu(t){const e=document.createElement("section");e.className="w-full max-w-4xl mx-auto px-4 py-12 md:px-8 font-sans",e.innerHTML=`
        <div class="rounded-3xl border border-red-200 bg-white p-6 md:p-9 shadow-xl">
            <p class="uppercase tracking-widest text-red-700 text-xs font-black mb-2">Error de carga</p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">No fue posible abrir esta sección</h1>
            <p class="text-slate-600 leading-relaxed mb-5">La aplicación principal continúa disponible. Regrese a la portada o intente cargar nuevamente esta ruta.</p>
            <div data-mensaje-error-ruta class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 break-words"></div>
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button type="button" data-action="reintentar-ruta" class="rounded-xl bg-red-700 px-6 py-3 text-white font-black hover:bg-red-800">Reintentar</button>
                <button type="button" data-action="volver-portada" class="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 font-black hover:bg-slate-50">Volver a la portada</button>
            </div>
        </div>`;const a=e.querySelector("[data-mensaje-error-ruta]");return a&&(a.textContent=t instanceof Error?t.message:"Se produjo un error inesperado."),e.querySelector("[data-action='reintentar-ruta']")?.addEventListener("click",()=>window.location.reload()),e.querySelector("[data-action='volver-portada']")?.addEventListener("click",()=>Nt("home")),e}async function ep(t,e){return Ju.has(t)?await Su()?e.page():Xu():e.page()}async function tp(t){const e=document.querySelector("main"),a=Wu[t];if(e){if(e.innerHTML="",!a){Nt("home");return}Ai(a.layout),document.title=a.title;try{const i=await ep(t,a);if(!(i instanceof Element))throw new Error("La sección no devolvió un componente válido.");e.appendChild(i),window.scrollTo({top:0,behavior:"auto"}),Qu(t,document.title)}catch(i){console.error(`[Kernel] Error al cargar la ruta ${t}.`,i),e.appendChild(Zu(i))}}}function ap(t,e){t&&t.addEventListener("click",a=>{const i=a.target.closest("[data-route]");!i||!t.contains(i)||(a.preventDefault(),e(i.dataset.route),Tt(t))})}function ip(t,e){if(!t||!e)return;ap(t,Nt),Ls(t);const a=e.querySelector('[data-action="open-menu"]');a&&Os(a,t),$s(t),Yu()}function sp(t){const e=String(t??"").replace(/\u00a0/g,"").replace(/\s/g,"").replace(/[^0-9+\-.,eE]/g,"");if(!e)return null;const a=e.lastIndexOf(","),i=e.lastIndexOf(".");let s=e;a>=0&&i>=0?s=i>a?e.replace(/,/g,""):e.replace(/\./g,"").replace(",","."):a>=0&&(s=e.length-a-1===3&&a>0?e.replace(/,/g,""):e.replace(",","."));const r=Number(s);return Number.isFinite(r)?r:null}function rp(t){const e=t.querySelector("table");if(!e)return null;const i=[...e.querySelectorAll("thead th")].map(r=>r.textContent.trim().toLowerCase()).some(r=>r.includes("marca")),s=[...e.querySelectorAll("tbody tr")].map(r=>{const o=[...r.querySelectorAll("td")],n=Number(o[i?2:1]?.textContent.trim()),c=Number(o[i?4:3]?.textContent.trim());return{etiqueta:o[0]?.textContent.trim()||"",valor:sp(o[i?1:0]?.textContent),frecuencia:Number.isFinite(n)?n:0,acumulada:Number.isFinite(c)?c:0}}).filter(r=>r.etiqueta&&r.frecuencia>=0);return{agrupados:i,filas:s}}function Is(t){return Number.isFinite(Number(t))?Number(t).toLocaleString("es-DO",{maximumFractionDigits:3}):"—"}function ui(t,e){let a=0;for(const i of t)if(a+=i.frecuencia,e<a)return i.valor;return t.at(-1)?.valor??null}function Gt(t,e){const a=t.reduce((c,l)=>c+l.frecuencia,0);if(!a)return null;if(e<=0)return t[0].valor;if(e>=1)return t.at(-1).valor;const i=(a-1)*e,s=Math.floor(i),r=Math.ceil(i),o=ui(t,s),n=ui(t,r);return s===r?o:o*(r-i)+n*(i-s)}function Ke(t,e,a){return`
        <text
            x="${t}"
            y="${e}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${Is(a)}</text>
    `}function op(t,e){if(!t||t.dataset.cajaDescriptivaSegura==="true"||e.agrupados)return;t.dataset.cajaDescriptivaSegura="true";const a=e.filas.filter(g=>g.valor!==null&&g.frecuencia>0).sort((g,h)=>g.valor-h.valor);if(a.reduce((g,h)=>g+h.frecuencia,0)<2)return;const s=a[0].valor,r=a.at(-1).valor,o=Gt(a,.25),n=Gt(a,.5),c=Gt(a,.75),l=c-o,u=o-1.5*l,d=c+1.5*l,f=a.filter(g=>g.valor>=u&&g.valor<=d),p=a.filter(g=>g.valor<u||g.valor>d),x=f[0]?.valor??s,k=f.at(-1)?.valor??r,b=Math.max(r-s,1),y=g=>40+(g-s)/b*520,_=t.querySelector("svg");if(!_)return;_.setAttribute("aria-label","Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos potenciales"),_.innerHTML=`
        <line x1="${y(x)}" y1="80" x2="${y(o)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${y(c)}" y1="80" x2="${y(k)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${y(x)}" y1="58" x2="${y(x)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${y(k)}" y1="58" x2="${y(k)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${y(o)}" y="45" width="${Math.max(y(c)-y(o),2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${y(n)}" y1="45" x2="${y(n)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${p.map((g,h)=>`
            <circle
                cx="${y(g.valor)}"
                cy="${80+(h%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${Is(g.valor)}${g.frecuencia>1?` (${g.frecuencia} observaciones)`:""}</title>
            </circle>
        `).join("")}
        ${Ke(y(x),140,x)}
        ${Ke(y(o),30,o)}
        ${Ke(y(n),140,n)}
        ${Ke(y(c),30,c)}
        ${Ke(y(k),140,k)}
    `;const R=t.querySelector("h3 + p");R&&(R.textContent="Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales según el criterio de Tukey.")}function np(){const t=document.createElement("section");return t.dataset.encabezadoGraficosSeguro="true",t.className="mt-10",t.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución, la frecuencia acumulada, la mediana, los cuartiles, la dispersión y los valores atípicos potenciales.
        </p>
    `,t}function cp(t){const e=document.createElement("article");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const a=Math.max(...t.map(i=>i.frecuencia),1);return e.innerHTML=`
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
    `,e}function lp(t){const e=document.createElement("article");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const a=600,i=250,s=48,r=24,o=24,n=48,c=Math.max(...t.map(d=>d.acumulada),1),l=Math.max(t.length-1,1),u=t.map((d,f)=>({...d,x:s+f/l*(a-s-r),y:o+(1-d.acumulada/c)*(i-o-n)}));return e.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra el crecimiento de la frecuencia acumulada.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${a} ${i}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${s}" y1="${o}" x2="${s}" y2="${i-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s}" y1="${i-n}" x2="${a-r}" y2="${i-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${u.map(d=>`${d.x},${d.y}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${u.map(d=>`
                    <circle cx="${d.x}" cy="${d.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${d.etiqueta}: frecuencia acumulada ${d.acumulada}</title>
                    </circle>
                    <text x="${d.x}" y="${i-24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${d.etiqueta}</text>
                `).join("")}
                <text x="18" y="${o+4}" font-size="11" fill="currentColor" class="text-slate-600">${c}</text>
                <text x="25" y="${i-n+4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `,e}function dp(t){const e=[...t.querySelectorAll("article")],a=e.find(o=>o.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),i=e.find(o=>o.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!a||!i)return;const s=a.parentElement,r=rp(t);if(!(!s||!r?.filas.length)&&(t.querySelector("[data-encabezado-graficos-seguro='true']")||(s.before(np()),s.classList.remove("mt-8")),op(i,r),!t.querySelector("[data-graficos-descriptivos-seguros='true']"))){const o=document.createElement("div");o.dataset.graficosDescriptivosSeguros="true",o.className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7",o.append(cp(r.filas),lp(r.filas)),s.after(o)}}function up(){let t=!1;const e=()=>{t=!1;const s=document.querySelector("#resultados-estadistica-descriptiva");s&&!s.classList.contains("hidden")&&dp(s)},a=()=>{t||(t=!0,window.requestAnimationFrame(e))};new MutationObserver(a).observe(document.body,{childList:!0,subtree:!0}),a()}function pp(t,e){return`${t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||`grafico-${e+1}`}.svg`}function mp(t,e,a){const i=t.cloneNode(!0);i.getAttribute("xmlns")||i.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=new XMLSerializer().serializeToString(i),o=new Blob([r],{type:"image/svg+xml;charset=utf-8"}),n=URL.createObjectURL(o),c=document.createElement("a");c.href=n,c.download=pp(e,a),document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function fp(t,e,a){if(t.querySelector("[data-descargar-svg]"))return;const i=t.querySelector("h3")?.textContent.trim()||`Gráfico ${a+1}`,s=document.createElement("button");s.type="button",s.dataset.descargarSvg="true",s.className=`
        mt-4 inline-flex items-center justify-center gap-2
        rounded-xl border border-sky-300 bg-sky-50
        px-4 py-3 text-sm font-black text-sky-800
        hover:bg-sky-100 transition-colors
    `,s.innerHTML=`
        <span aria-hidden="true">↓</span>
        Descargar SVG
    `,s.setAttribute("aria-label",`Descargar ${i} en formato SVG`),s.addEventListener("click",()=>{mp(e,i,a)}),t.appendChild(s)}function gp(t){const e=window.open("","_blank");if(!e){window.print();return}const a=`
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
    `),e.document.close(),e.addEventListener("load",()=>{e.focus(),e.print()})}function bp(t){if(t.querySelector("[data-herramientas-exportacion='true']"))return;const e=document.createElement("section");e.dataset.herramientasExportacion="true",e.className=`
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
    `,e.querySelector("[data-imprimir-informe]")?.addEventListener("click",()=>{gp(t)}),t.prepend(e)}function hp(t){bp(t),[...t.querySelectorAll("article")].forEach((a,i)=>{const s=a.querySelector("svg");s&&fp(a,s,i)})}function xp(){const t=()=>{const a=document.querySelector("#resultados-estadistica-descriptiva");a&&!a.classList.contains("hidden")&&hp(a)};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()}const vp=["#formulario-estadistica-descriptiva","#formulario-regresion","#formulario-regresion-conteo","#form-tamano","[id*='calculadora'] form","section form"].join(",");function yp(){return document.querySelector("main h1, #app h1, h1")?.textContent?.trim()?.toLowerCase()||""}function wp(){return yp().includes("laboratorio inteligente de investigación")}function Ep(){const t=document.querySelector("main h1, #app h1, h1"),e=document.querySelector("[data-action='volver-laboratorio'], [data-action='volver-modelos'], [data-action='volver-regresion'], [data-action='volver']"),a=document.querySelector(vp);return!!(t&&e&&a)}function kp(){const t=document.createElement("section");return t.dataset.creditosCalculadoras="true",t.className=["w-full max-w-7xl mx-auto","px-4 pb-10 md:px-8","font-sans"].join(" "),t.innerHTML=`
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
        </div>`,t}function pi(){if(!Ep()&&!wp()||document.querySelector("[data-creditos-calculadoras='true']"))return;const t=document.querySelector("main, #app, [data-router-view]");t&&t.appendChild(kp())}function Ap(){new MutationObserver(pi).observe(document.body,{childList:!0,subtree:!0}),pi()}const Cp={"regresión lineal simple":{ruta:"calculadoraRegresion",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y un predictor."},"regresión lineal múltiple":{ruta:"calculadoraRegresion",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y dos o más predictores."},"regresión logística binaria simple":{ruta:"calculadoraRegresionLogistica",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y un predictor."},"regresión logística binaria múltiple":{ruta:"calculadoraRegresionLogistica",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y dos o más predictores."},"regresión de poisson":{ruta:"calculadoraRegresionConteo",tipo:"poisson",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo de Poisson con una variable dependiente formada por enteros no negativos."},"regresión binomial negativa":{ruta:"calculadoraRegresionConteo",tipo:"negativa",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo binomial negativo cuando exista sobredispersión respecto a Poisson."}};function Ip(){const t=[...document.querySelectorAll("main h1")];for(const e of t){const a=e.textContent.trim().toLowerCase(),i=Cp[a];if(i)return{encabezado:e,modelo:i}}return null}function Sp(t){const e=document.createElement("div"),a=t.clase==="amber",i=a?"border-amber-200":"border-rose-200",s=a?"bg-amber-50":"bg-rose-50",r=a?"text-amber-700":"text-rose-700",o=a?"bg-amber-600 hover:bg-amber-700":"bg-rose-700 hover:bg-rose-800";return e.dataset.ejecutarModeloRegresion="true",e.className=`mt-8 rounded-2xl border ${i} ${s} p-6`,e.innerHTML=`
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
    `,e.querySelector("button")?.addEventListener("click",n=>{const c=n.currentTarget,l=c.dataset.almacenamientoRegresion||"kernel-tipo-modelo-regresion";sessionStorage.setItem(l,c.dataset.tipoRegresion||""),window.location.hash=`/${c.dataset.routeRegresion}`}),e}function mi(){const t=Ip();if(!t)return;const e=t.encabezado.closest("section");if(!e||e.querySelector("[data-ejecutar-modelo-regresion='true']"))return;(e.querySelector("header + div")||e).appendChild(Sp(t.modelo))}function _p(){new MutationObserver(mi).observe(document.body,{childList:!0,subtree:!0}),mi()}function Kt(){document.querySelector("[data-selector-instrumento='true']")?.remove()}function Tp(){Kt();const t=document.createElement("div");t.dataset.selectorInstrumento="true",t.className=`
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
    `,t.addEventListener("click",e=>{const a=e.target.closest("[data-route-instrumento]")?.dataset.routeInstrumento;if(a){Kt(),window.location.hash=`/${a}`;return}(e.target===t||e.target.closest("[data-action='cerrar-selector-instrumento']"))&&Kt()}),document.body.appendChild(t),t.querySelector("[data-route-instrumento]")?.focus()}function Pp(t){t.target.closest("#asistente-pruebas [data-value='instrumento']")&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),Tp())}function Lp(){document.addEventListener("click",Pp,!0)}function qe(t,e){try{e()}catch(a){console.error(`[Kernel] No fue posible iniciar ${t}.`,a)}}function Mp(t){if(!t)return;const e=t.parentElement,a=e?.parentElement,i=document.querySelector("#main");a?.classList.add("relative","z-[200]","overflow-visible"),e?.classList.add("overflow-visible"),t.classList.remove("lg:z-auto","lg:z-[210]"),t.classList.add("overflow-visible","lg:z-[220]"),i?.classList.add("relative","z-0")}const St=document.querySelector("#header"),Qe=document.querySelector("#navBar"),fi=document.querySelector("#footer");St&&(St.innerHTML=Ss());Qe&&(Qe.innerHTML=Ts(),Mp(Qe));fi&&(fi.innerHTML=Ps());qe("la navegación",()=>{Qe&&St&&ip(Qe,St)});qe("los gráficos de estadística descriptiva",up);qe("la exportación de estadística descriptiva",xp);qe("los créditos de las calculadoras",Ap);qe("la integración de regresión con el asistente",_p);qe("cuestionarios y fiabilidad en el asistente",Lp);export{zs as M,Rp as a,_u as c,Su as e,C as i};
