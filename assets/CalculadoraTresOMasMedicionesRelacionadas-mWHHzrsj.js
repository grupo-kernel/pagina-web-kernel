import{j as ee,a as ae}from"./jstat-DiDocX-r.js";import{p as te,b as oe}from"./estadisticaDosMuestrasRelacionadas-C0D8qKdR.js";import{p as re}from"./exportacionesCalculadoras-BiNXW7QL.js";const q=ee.jStat??ae?.jStat;if(!q)throw new Error("No fue posible cargar el motor estadístico jStat.");const Z=e=>Math.min(1,Math.max(0,e));function K(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function se(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}function j(e){return e.reduce((a,t)=>a+t,0)/e.length}function ne(e){const a=[...e].sort((o,r)=>o-r),t=Math.floor(a.length/2);return a.length%2?a[t]:(a[t-1]+a[t])/2}function ie(e,a=j(e)){return e.reduce((t,o)=>t+(o-a)**2,0)/(e.length-1)}function ce(e){const a=j(e),t=ie(e,a);return{n:e.length,media:a,mediana:ne(e),varianza:t,desviacionEstandar:Math.sqrt(t),minimo:Math.min(...e),maximo:Math.max(...e)}}function le(e,a){const t=Array.isArray(e),o=t?e:e?.valores;if(!Array.isArray(o))throw new TypeError(`La medición ${a+1} debe contener un arreglo llamado valores.`);const r=o.map(se),n=r.findIndex(i=>!Number.isFinite(i));if(n!==-1)throw new TypeError(`La medición ${a+1} contiene un valor no numérico en la posición ${n+1}.`);if(r.length<2)throw new RangeError(`La medición ${a+1} debe contener al menos dos observaciones.`);return{nombre:(t?"":String(e?.nombre??"").trim())||`Medición ${a+1}`,valores:r,...ce(r)}}function Q(e){if(!Array.isArray(e))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const a=e.map(le),t=a[0].n;if(a.find(({n})=>n!==t))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const r=a.map(({nombre:n})=>n);if(new Set(r).size!==r.length)throw new Error("Cada medición debe tener un nombre diferente.");return a}function J(e){const a=e[0].n;return Array.from({length:a},(t,o)=>e.map(({valores:r})=>r[o]))}function G(e,a,t){return e===1/0?0:Z(1-q.centralF.cdf(e,a,t))}function de(e,a){return Z(1-q.chisquare.cdf(e,a))}function U(e){const a=e.map((o,r)=>({...o,indiceOriginal:r})).sort((o,r)=>o.valorP-r.valorP);let t=0;return a.forEach((o,r)=>{const n=Math.min(1,o.valorP*(a.length-r));o.valorPAjustado=Math.max(t,n),t=o.valorPAjustado}),a.sort((o,r)=>o.indiceOriginal-r.indiceOriginal).map(({indiceOriginal:o,...r})=>r)}function X(e,a){const t=[];for(let o=0;o<e.length-1;o+=1)for(let r=o+1;r<e.length;r+=1)t.push(a(e[o],e[r],o,r));return t}function z(e,a){const t=e.length,o=a[0].length,r=a.length;return Array.from({length:t},(n,s)=>Array.from({length:o},(i,l)=>{let c=0;for(let u=0;u<r;u+=1)c+=e[s][u]*a[u][l];return c}))}function _(e){return e.reduce((a,t,o)=>a+t[o],0)}function me(e){const a=e.length,t=e[0].length,o=Array.from({length:t},(r,n)=>j(e.map(s=>s[n])));return Array.from({length:t},(r,n)=>Array.from({length:t},(s,i)=>{let l=0;for(let c=0;c<a;c+=1)l+=(e[c][n]-o[n])*(e[c][i]-o[i]);return l/(a-1)}))}function ue(e){const a=e.length,t=e[0].length,o=me(e),r=Array.from({length:t},(b,w)=>Array.from({length:t},(h,$)=>(w===$?1:0)-1/t)),n=z(z(r,o),r),s=_(n),i=z(n,n),l=_(i),c=1/(t-1);let u=l===0?1:s**2/((t-1)*l);u=Math.min(1,Math.max(c,u));const d=a*(t-1)*u-2,m=(t-1)*(a-1-(t-1)*u);let f=m<=0?1:d/m;return f=Math.min(1,Math.max(c,f)),{limiteInferior:c,greenhouseGeisser:u,huynhFeldt:f,covarianzas:o}}function pe(e){const a=Math.abs(e);return a<.01?"Prácticamente nulo":a<.06?"Pequeño":a<.14?"Moderado":"Grande"}function fe(e){const a=Math.abs(e);return a<.1?"Muy pequeño":a<.3?"Pequeño":a<.5?"Moderado":"Grande"}function be(e,a){const t=1-a,o=X(e,(r,n)=>{const s=r.valores.map((m,f)=>m-n.valores[f]),i=j(s),l=s.reduce((m,f)=>m+(f-i)**2,0),c=Math.max(1,...s.map(Math.abs));if(Math.sqrt(l/Math.max(s.length-1,1))<=Number.EPSILON*c*10){const m=Math.abs(i)<=Number.EPSILON*c*10;return{medicion1:r.nombre,medicion2:n.nombre,diferenciaMedia:i,estadisticoT:m?0:Math.sign(i)*(1/0),gradosLibertad:s.length-1,valorP:m?1:0,intervaloConfianza:{inferior:i,superior:i,nivel:a},dZ:m?0:Math.sign(i)*(1/0),advertencia:m?"Las diferencias son idénticamente cero; no existe cambio entre estas mediciones.":"Las diferencias son constantes y no tienen error estándar estimable; la diferencia observada es exacta dentro de estos datos."}}const d=te(r.valores,n.valores,{nivelConfianza:a});return{medicion1:r.nombre,medicion2:n.nombre,diferenciaMedia:d.diferenciaMedia,estadisticoT:d.estadistico.valor,gradosLibertad:d.gradosLibertad,valorP:d.valorP,intervaloConfianza:d.intervaloConfianza,dZ:d.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:U(o).map(r=>({...r,significativo:r.valorPAjustado<t}))}}function he(e,a){const t=1-a,o=X(e,(r,n)=>{const s=oe(r.valores,n.valores);return{medicion1:r.nombre,medicion2:n.nombre,estadisticoW:s.estadistico.valor,estadisticoZ:s.estadisticoZ,valorP:s.valorP,correlacionBiserialRangos:s.tamanioEfecto.correlacionBiserialRangos,r:s.tamanioEfecto.r,nEfectivo:s.nEfectivo,cantidadCeros:s.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:U(o).map(r=>({...r,significativo:r.valorPAjustado<t}))}}function xe(e){const a=e.map((s,i)=>({valor:s,indice:i,rango:0})).sort((s,i)=>s.valor-i.valor);let t=0,o=0,r=0;for(;t<a.length;){let s=t+1;for(;s<a.length&&a[s].valor===a[t].valor;)s+=1;const i=s-t,l=(t+1+s)/2;for(let c=t;c<s;c+=1)a[c].rango=l;i>1&&(r+=1,o+=i**3-i),t=s}const n=new Array(e.length).fill(0);return a.forEach(({indice:s,rango:i})=>{n[s]=i}),{rangos:n,correccionEmpates:o,cantidadGruposEmpatados:r}}function ge(e,a={}){const{nivelConfianza:t=.95}=a;K(t);const o=Q(e),r=J(o),n=r.length,s=o.length,i=r.flat(),l=j(i),c=r.map(M=>j(M)),u=i.reduce((M,P)=>M+(P-l)**2,0),d=n*o.reduce((M,P)=>M+(P.media-l)**2,0),m=s*c.reduce((M,P)=>M+(P-l)**2,0),f=Math.max(0,u-d-m),b=s-1,w=n-1,h=b*w,$=d/b,C=f/h,g=C===0?$===0?0:1/0:$/C,x=G(g,b,h),A=d+f===0?0:d/(d+f),N=d+f+m===0?0:d/(d+f+m),E=ue(r),R=b*E.greenhouseGeisser,I=h*E.greenhouseGeisser,H=b*E.huynhFeldt,O=h*E.huynhFeldt,F=G(g,R,I),V=G(g,H,O),k=1-t,D=be(o,t);return D.recomendado=F<k,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:o,nSujetos:n,numeroMediciones:s,mediaGeneral:l,mediasSujetos:c,estadistico:{simbolo:"F",valor:g},gradosLibertad:{numerador:b,denominador:h},valorP:x,nivelConfianza:t,alfa:k,significativo:x<k,tablaAnova:{mediciones:{sumaCuadrados:d,gradosLibertad:b,cuadradoMedio:$},sujetos:{sumaCuadrados:m,gradosLibertad:w},error:{sumaCuadrados:f,gradosLibertad:h,cuadradoMedio:C},total:{sumaCuadrados:u,gradosLibertad:n*s-1}},esfericidad:{...E,greenhouseGeisser:{epsilon:E.greenhouseGeisser,gradosLibertadNumerador:R,gradosLibertadDenominador:I,valorP:F,significativo:F<k},huynhFeldt:{epsilon:E.huynhFeldt,gradosLibertadNumerador:H,gradosLibertadDenominador:O,valorP:V,significativo:V<k},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:A,etaCuadradoGeneralizado:N,interpretacion:pe(A)},postHoc:D}}function ve(e,a={}){const{nivelConfianza:t=.95}=a;K(t);const o=Q(e),r=J(o),n=r.length,s=o.length,i=new Array(s).fill(0);let l=0,c=0;r.forEach(g=>{const x=xe(g);x.rangos.forEach((A,N)=>{i[N]+=A}),l+=x.correccionEmpates,c+=x.cantidadGruposEmpatados});const u=12/(n*s*(s+1))*i.reduce((g,x)=>g+x**2,0)-3*n*(s+1),d=1-l/(n*(s**3-s)),m=d<=0?0:u/d,f=s-1,b=de(m,f),w=n*(s-1)===0?0:m/(n*(s-1)),h=1-t,$=o.map((g,x)=>({...g,sumaRangos:i[x],rangoMedio:i[x]/n})),C=he(o,t);return C.recomendado=b<h,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:$,nSujetos:n,numeroMediciones:s,estadistico:{simbolo:"χ²_F",valor:m,sinCorreccion:u},gradosLibertad:{valor:f},valorP:b,nivelConfianza:t,alfa:h,significativo:b<h,empates:{factorCorreccion:d,sumaCorreccion:l,cantidadGruposEmpatados:c},tamanioEfecto:{kendallW:w,interpretacion:fe(w)},postHoc:C}}function ye({mediciones:e,prueba:a,nivelConfianza:t=.95}){switch(a){case"anova-medidas-repetidas":case"anova-repetidas":return ge(e,{nivelConfianza:t});case"friedman":return ve(e,{nivelConfianza:t});default:throw new Error("La prueba solicitada no está disponible.")}}function Ne(){const e=document.createElement("section");e.className=`
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
                    ${W("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${W("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
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
                    ${v(1)}
                    ${v(2)}
                    ${v(3)}
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
    `;const a=e.querySelector("#formulario-mediciones-relacionadas"),t=e.querySelector("#contenedor-mediciones"),o=e.querySelector("#mensaje-error-mediciones-relacionadas"),r=e.querySelector("#resultados-mediciones-relacionadas");let n=4;const s=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(s)&&(a.elements.prueba.value=s),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),a.addEventListener("submit",i=>{i.preventDefault(),T(o);try{const l=a.elements.prueba.value;if(!l)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const c=$e(t),u=Number(a.elements.nivelConfianza.value),d={mediciones:c,prueba:l,nivelConfianza:u},m=ye(d);r.innerHTML=Me(m),r.classList.remove("hidden"),re({contenedor:r,nombre:"comparacion-mediciones-repetidas",datos:{solicitud:d,resultado:m}}),r.scrollIntoView({behavior:"smooth",block:"start"})}catch(l){r.classList.add("hidden"),B(o,l instanceof Error?l.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",i=>{const l=i.target.closest("[data-action]");if(!l)return;const c=l.dataset.action;if(c==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(c==="agregar-medicion"){t.insertAdjacentHTML("beforeend",v(n,!0)),n+=1,r.classList.add("hidden");return}if(c==="eliminar-medicion"){if(t.querySelectorAll("[data-medicion]").length<=3){B(o,"El análisis requiere al menos tres mediciones.");return}l.closest("[data-medicion]")?.remove(),r.classList.add("hidden");return}if(c==="cargar-ejemplo"){Ee(a,t),n=4,T(o),r.classList.add("hidden");return}c==="limpiar"&&(a.reset(),t.innerHTML=`
                    ${v(1)}
                    ${v(2)}
                    ${v(3)}
                `,n=4,r.innerHTML="",r.classList.add("hidden"),T(o))}),e.addEventListener("input",i=>{const l=i.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!l)return;const c=l.closest("[data-medicion]");c&&Y(c)}),e}function W(e,a){return`
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
    `}function v(e,a=!1){return`
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
    `}function we(e,a){const t=e.trim();if(!t)throw new Error(`${a} no contiene datos.`);const o=t.split(/[\s;]+/).filter(Boolean),r=o.map(s=>Number(s.replace(",","."))),n=r.findIndex(s=>!Number.isFinite(s));if(n!==-1)throw new Error(`${a} contiene un valor no válido: "${o[n]}".`);if(r.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return r}function $e(e){const a=[...e.querySelectorAll("[data-medicion]")];if(a.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return a.map((t,o)=>{const r=t.querySelector('[data-campo="nombre"]'),n=t.querySelector('[data-campo="valores"]'),s=r.value.trim()||`Medición ${o+1}`;return{nombre:s,valores:we(n.value,s)}})}function Ee(e,a){e.elements.prueba.value=e.elements.prueba.value||"anova-medidas-repetidas",a.innerHTML=`
        ${v(1)}
        ${v(2)}
        ${v(3)}
    `;const t=["Diagnóstico inicial","Evaluación intermedia","Evaluación final"],o=[`12
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
20`];[...a.querySelectorAll("[data-medicion]")].forEach((n,s)=>{n.querySelector('[data-campo="nombre"]').value=t[s],n.querySelector('[data-campo="valores"]').value=o[s],Y(n)})}function Y(e){const a=e.querySelector('[data-campo="valores"]'),t=e.querySelector("[data-contador]"),o=a.value.trim()?a.value.trim().split(/[\s;]+/).filter(Boolean).length:0;t.textContent=o===1?"1 valor":`${o} valores`}function B(e,a){e.textContent=a,e.classList.remove("hidden")}function T(e){e.textContent="",e.classList.add("hidden")}function y(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":"—"}function S(e){return Number.isFinite(e)?e<.001?"< 0.001":y(e,4):"—"}function Me(e){const a=e.id==="anova-medidas-repetidas",t=a?e.esfericidad.greenhouseGeisser.valorP:e.valorP,o=t<e.alfa,r=Math.round(e.nivelConfianza*100),n=a?"Greenhouse–Geisser":"sin corrección adicional",s=o?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${n}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${n}.`;return`
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
                    ${L(e.estadistico.simbolo,y(e.estadistico.valor),"Estadístico global")}
                    ${L("p",S(t),a?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${L("n",e.nSujetos,"Participantes completos")}
                    ${L("k",e.numeroMediciones,"Mediciones")}
                </div>

                ${Ce(e)}
                ${a?je(e):ke(e)}
                ${Pe(e.postHoc)}

                <article class="mt-6 rounded-2xl border ${o?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${s}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${r} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
                    </p>
                </article>
            </div>
        </section>
    `}function L(e,a,t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-fuchsia-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${t}
            </p>
        </article>
    `}function Ce(e){return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Descriptivos por medición
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[760px] text-sm">
                    <caption class="sr-only">
                        Estadísticos descriptivos de cada medición relacionada
                    </caption>
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th scope="col" class="text-left px-5 py-3">Medición</th>
                            <th scope="col" class="text-right px-5 py-3">n</th>
                            <th scope="col" class="text-right px-5 py-3">Media</th>
                            <th scope="col" class="text-right px-5 py-3">Mediana</th>
                            <th scope="col" class="text-right px-5 py-3">DE</th>
                            <th scope="col" class="text-right px-5 py-3">Mínimo</th>
                            <th scope="col" class="text-right px-5 py-3">Máximo</th>
                            ${e.id==="friedman"?'<th scope="col" class="text-right px-5 py-3">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${e.mediciones.map(a=>`
                                    <tr>
                                        <th scope="row" class="px-5 py-3 text-left font-bold text-slate-900">${a.nombre}</th>
                                        <td class="px-5 py-3 text-right">${a.n}</td>
                                        <td class="px-5 py-3 text-right">${y(a.media)}</td>
                                        <td class="px-5 py-3 text-right">${y(a.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${y(a.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${y(a.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${y(a.maximo)}</td>
                                        ${e.id==="friedman"?`<td class="px-5 py-3 text-right">${y(a.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function je(e){const a=e.tablaAnova,t=e.esfericidad.greenhouseGeisser,o=e.esfericidad.huynhFeldt;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${p("SC mediciones",a.mediciones.sumaCuadrados)}
                    ${p("gl mediciones",a.mediciones.gradosLibertad)}
                    ${p("CM mediciones",a.mediciones.cuadradoMedio)}
                    ${p("SC sujetos",a.sujetos.sumaCuadrados)}
                    ${p("SC error",a.error.sumaCuadrados)}
                    ${p("gl error",a.error.gradosLibertad)}
                    ${p("CM error",a.error.cuadradoMedio)}
                    ${p("SC total",a.total.sumaCuadrados)}
                </dl>
            </article>

            <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Esfericidad y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${p("ε Greenhouse–Geisser",t.epsilon)}
                    ${p("p Greenhouse–Geisser",t.valorP,!0)}
                    ${p("ε Huynh–Feldt",o.epsilon)}
                    ${p("p Huynh–Feldt",o.valorP,!0)}
                    ${p("Eta cuadrado parcial",e.tamanioEfecto.etaCuadradoParcial)}
                    ${p("Eta cuadrado generalizado",e.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${e.tamanioEfecto.interpretacion}. ${e.esfericidad.nota}
                </p>
            </article>
        </div>
    `}function ke(e){return`
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${p("Grados de libertad",e.gradosLibertad.valor)}
                ${p("Factor de corrección por empates",e.empates.factorCorreccion)}
                ${p("Grupos de empates",e.empates.cantidadGruposEmpatados)}
                ${p("W de Kendall",e.tamanioEfecto.kendallW)}
                ${p("Magnitud",e.tamanioEfecto.interpretacion,!1,!0)}
            </dl>
        </article>
    `}function p(e,a,t=!1,o=!1){const r=o?a:t?S(a):y(a);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r}
            </dd>
        </div>
    `}function Pe(e){return e?.comparaciones?.length?`
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
                    <caption class="sr-only">
                        Comparaciones por pares entre mediciones con ajuste de Holm
                    </caption>
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th scope="col" class="text-left px-5 py-3">Comparación</th>
                            <th scope="col" class="text-right px-5 py-3">Estadístico</th>
                            <th scope="col" class="text-right px-5 py-3">p sin ajustar</th>
                            <th scope="col" class="text-right px-5 py-3">p Holm</th>
                            <th scope="col" class="text-center px-5 py-3">Conclusión</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${e.comparaciones.map(a=>{const o=e.id==="t-pareadas-holm"?a.estadisticoT:a.estadisticoW;return`
                                        <tr>
                                            <th scope="row" class="px-5 py-3 text-left font-bold text-slate-900">
                                                ${a.medicion1} vs. ${a.medicion2}
                                            </th>
                                            <td class="px-5 py-3 text-right">
                                                ${y(o)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${S(a.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${S(a.valorPAjustado)}
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
    `:""}export{Ne as CalculadoraTresOMasMedicionesRelacionadas};
