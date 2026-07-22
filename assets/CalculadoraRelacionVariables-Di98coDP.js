import{j as pe,a as ue}from"./jstat-DiDocX-r.js";const X=pe.jStat??ue?.jStat;if(!X)throw new Error("No fue posible cargar el motor estadístico jStat.");const ie=e=>Math.min(1,Math.max(0,e));function D(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function be(e){if(typeof e=="string"){const a=e.trim();return a?Number(a.replace(",",".")):Number.NaN}return Number(e)}function G(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);const r=e.map(be),t=r.findIndex(o=>!Number.isFinite(o));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);return r}function U(e,a,r,t,o=3){const i=G(e,r),n=G(a,t);if(i.length!==n.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(i.length<o)throw new RangeError(`El análisis requiere al menos ${o} pares completos.`);return{x:i,y:n,n:i.length}}function V(e){return e.reduce((a,r)=>a+r,0)/e.length}function xe(e){const a=[...e].sort((t,o)=>t-o),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function B(e,a=V(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function k(e){const a=V(e),r=B(e,a);return{n:e.length,media:a,mediana:xe(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function ve(e,a,r=V(e),t=V(a)){return e.reduce((o,i,n)=>o+(i-r)*(a[n]-t),0)/(e.length-1)}function K(e,a){const r=V(e),t=V(a),o=B(e,r),i=B(a,t);if(o===0||i===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const n=ve(e,a,r,t),s=n/Math.sqrt(o*i);return{r:Math.max(-1,Math.min(1,s)),covarianza:n,mediaX:r,mediaY:t,varianzaX:o,varianzaY:i}}function _(e,a){const r=a-2;if(Math.abs(e)>=1)return{valor:e<0?-1/0:1/0,gradosLibertad:r,valorP:0};const t=e*Math.sqrt(r/(1-e**2)),o=ie(2*(1-X.studentt.cdf(Math.abs(t),r)));return{valor:t,gradosLibertad:r,valorP:o}}function H(e,a,r){if(a<=3)return{disponible:!1,nivel:r,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const t=1-r,o=X.normal.inv(1-t/2,0,1),i=Math.max(-1+1e-15,Math.min(1-1e-15,e)),n=Math.atanh(i),s=1/Math.sqrt(a-3),l=Math.tanh(n-o*s),d=Math.tanh(n+o*s);return{disponible:!0,nivel:r,inferior:l,superior:d,errorEstandar:s,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function j(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":a<.7?"Grande":"Muy grande"}function T(e){return e>0?"Positiva":e<0?"Negativa":"Sin dirección"}function O(e,a){return e.map((r,t)=>({x:r,y:a[t],indice:t+1}))}function Z(e){const a=e.map((i,n)=>({valor:i,indice:n,rango:0})).sort((i,n)=>i.valor-n.valor),r=[];let t=0;for(;t<a.length;){let i=t+1;for(;i<a.length&&a[i].valor===a[t].valor;)i+=1;const n=i-t,s=(t+1+i)/2;for(let l=t;l<i;l+=1)a[l].rango=s;n>1&&r.push({valor:a[t].valor,cantidad:n}),t=i}const o=new Array(e.length);return a.forEach(({indice:i,rango:n})=>{o[i]=n}),{rangos:o,gruposEmpatados:r,cantidadValoresEmpatados:r.reduce((i,n)=>i+n.cantidad,0)}}function ee(e){const a=new Map;return e.forEach(r=>{const t=typeof r=="number"?`n:${r}`:`s:${String(r)}`;a.set(t,(a.get(t)||0)+1)}),[...a.values()].filter(r=>r>1)}function M(e,a){return e.reduce((r,t)=>r+a(t),0)}function fe(e,a,r){const t=1-r,o=X.normal.inv(1-t/2,0,1);return{disponible:Number.isFinite(a),nivel:r,inferior:Number.isFinite(a)?Math.max(-1,e-o*a):null,superior:Number.isFinite(a)?Math.min(1,e+o*a):null,errorEstandar:a,metodo:"Intervalo asintótico basado en la aproximación normal."}}function ge(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);return e.map((r,t)=>{const o=String(r??"").trim();if(!o)throw new TypeError(`${a} contiene una categoría vacía en la posición ${t+1}.`);return o})}function he(e,a,r={}){const{nivelConfianza:t=.95,nombreX:o="Variable X",nombreY:i="Variable Y"}=r;D(t);const n=U(e,a,o,i),s=K(n.x,n.y),l=_(s.r,n.n),d=1-t;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:n.n,variables:{x:{nombre:o,valores:n.x,...k(n.x)},y:{nombre:i,valores:n.y,...k(n.y)}},coeficiente:{simbolo:"r",valor:s.r},estadistico:{simbolo:"t",valor:l.valor},gradosLibertad:l.gradosLibertad,valorP:l.valorP,nivelConfianza:t,alfa:d,significativo:l.valorP<d,intervaloConfianza:H(s.r,n.n,t),tamanioEfecto:{valor:s.r,magnitud:j(s.r),direccion:T(s.r),rCuadrado:s.r**2},detalles:{covarianza:s.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:O(n.x,n.y)}}function ye(e,a,r={}){const{nivelConfianza:t=.95,nombreX:o="Variable X",nombreY:i="Variable Y"}=r;D(t);const n=U(e,a,o,i),s=Z(n.x),l=Z(n.y),d=K(s.rangos,l.rangos),p=_(d.r,n.n),x=1-t;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:n.n,variables:{x:{nombre:o,valores:n.x,rangos:s.rangos,...k(n.x)},y:{nombre:i,valores:n.y,rangos:l.rangos,...k(n.y)}},coeficiente:{simbolo:"ρ_s",valor:d.r},estadistico:{simbolo:"t",valor:p.valor},gradosLibertad:p.gradosLibertad,valorP:p.valorP,nivelConfianza:t,alfa:x,significativo:p.valorP<x,intervaloConfianza:H(d.r,n.n,t),tamanioEfecto:{valor:d.r,magnitud:j(d.r),direccion:T(d.r)},empates:{variableX:s.gruposEmpatados,variableY:l.gruposEmpatados,cantidadValoresEmpatadosX:s.cantidadValoresEmpatados,cantidadValoresEmpatadosY:l.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:O(n.x,n.y)}}function $e(e,a,r={}){const{nivelConfianza:t=.95,nombreX:o="Variable X",nombreY:i="Variable Y"}=r;D(t);const n=U(e,a,o,i);let s=0,l=0,d=0,p=0,x=0;for(let c=0;c<n.n-1;c+=1)for(let S=c+1;S<n.n;S+=1){const I=Math.sign(n.x[S]-n.x[c]),F=Math.sign(n.y[S]-n.y[c]);I===0&&F===0?x+=1:I===0?d+=1:F===0?p+=1:I===F?s+=1:l+=1}const h=n.n*(n.n-1)/2,m=ee(n.x),v=ee(n.y),y=M(m,c=>c*(c-1)/2),u=M(v,c=>c*(c-1)/2),E=Math.sqrt((h-y)*(h-u));if(E===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const Y=s-l,C=Y/E,$=M(m,c=>c*(c-1)),w=M(v,c=>c*(c-1)),se=M(m,c=>c*(c-1)*(2*c+5)),le=M(v,c=>c*(c-1)*(2*c+5)),ce=M(m,c=>c*(c-1)*(c-2)),de=M(v,c=>c*(c-1)*(c-2));let L=(n.n*(n.n-1)*(2*n.n+5)-se-le)/18;L+=$*w/(2*n.n*(n.n-1)),n.n>2&&(L+=ce*de/(9*n.n*(n.n-1)*(n.n-2)));const R=Math.sqrt(Math.max(0,L)),Q=R===0?0:Y/R,J=ie(2*(1-X.normal.cdf(Math.abs(Q),0,1))),me=R/E,W=1-t;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:n.n,variables:{x:{nombre:o,valores:n.x,...k(n.x)},y:{nombre:i,valores:n.y,...k(n.y)}},coeficiente:{simbolo:"τ_b",valor:C},estadistico:{simbolo:"z",valor:Q},gradosLibertad:null,valorP:J,nivelConfianza:t,alfa:W,significativo:J<W,intervaloConfianza:fe(C,me,t),tamanioEfecto:{valor:C,magnitud:j(C),direccion:T(C)},pares:{total:h,concordantes:s,discordantes:l,empatesSoloX:d,empatesSoloY:p,empatesAmbas:x,empatadosX:y,empatadosY:u},empates:{tamaniosVariableX:m,tamaniosVariableY:v},detalles:{s:Y,varianzaS:L,aproximacionInferencial:"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:O(n.x,n.y)}}function we(e,a,r={}){const{nivelConfianza:t=.95,nombreCategoria:o="Variable dicotómica",nombreCuantitativa:i="Variable cuantitativa",categoriaPositiva:n=null}=r;D(t);const s=ge(e,o),l=G(a,i);if(s.length!==l.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(s.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const d=[...new Set(s)];if(d.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let p=n===null?d[1]:String(n).trim();if(!d.includes(p))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const x=d.find($=>$!==p),h=s.map($=>$===p?1:0),m=K(h,l),v=_(m.r,s.length),y=l.filter(($,w)=>h[w]===0),u=l.filter(($,w)=>h[w]===1),E=k(y),Y=k(u),C=1-t;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:s.length,variables:{dicotomica:{nombre:o,valores:s,categorias:[x,p],categoriaCero:x,categoriaUno:p},cuantitativa:{nombre:i,valores:l,...k(l)}},coeficiente:{simbolo:"r_pb",valor:m.r},estadistico:{simbolo:"t",valor:v.valor},gradosLibertad:v.gradosLibertad,valorP:v.valorP,nivelConfianza:t,alfa:C,significativo:v.valorP<C,intervaloConfianza:H(m.r,s.length,t),tamanioEfecto:{valor:m.r,magnitud:j(m.r),direccion:T(m.r),rCuadrado:m.r**2},grupos:{categoriaCero:{categoria:x,codigo:0,...E},categoriaUno:{categoria:p,codigo:1,...Y},diferenciaMedias:Y.media-E.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${i} en la categoría "${p}" respecto de "${x}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:s.map(($,w)=>({categoria:$,codigo:h[w],valor:l[w],indice:w+1}))}}function ke({x:e,y:a,prueba:r,nivelConfianza:t=.95,nombreX:o="Variable X",nombreY:i="Variable Y",categoriaPositiva:n=null}){switch(r){case"pearson":return he(e,a,{nivelConfianza:t,nombreX:o,nombreY:i});case"spearman":case"rho-spearman":return ye(e,a,{nivelConfianza:t,nombreX:o,nombreY:i});case"kendall":case"tau-kendall":return $e(e,a,{nivelConfianza:t,nombreX:o,nombreY:i});case"punto-biserial":return we(e,a,{nivelConfianza:t,nombreCategoria:o,nombreCuantitativa:i,categoriaPositiva:n});default:throw new Error("La prueba solicitada no está disponible.")}}function Te(){const e=document.createElement("section");e.className=`
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
                    ${P("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${P("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${P("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${P("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
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
                    ${ae("x","Variable X")}
                    ${ae("y","Variable Y")}
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
    `;const a=e.querySelector("#formulario-relacion-variables"),r=e.querySelector("#mensaje-error-relacion"),t=e.querySelector("#resultados-relacion-variables"),o=e.querySelector("#campo-categoria-positiva"),i=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(i)&&(a.elements.prueba.value=i),sessionStorage.removeItem("kernel-prueba-relacion-variables"),z(a,o),a.elements.prueba.addEventListener("change",()=>{z(a,o),t.classList.add("hidden"),q(r)}),a.addEventListener("submit",n=>{n.preventDefault(),q(r);try{const s=a.elements.prueba.value;if(!s)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const l=a.elements.nombreX.value.trim()||"Variable X",d=a.elements.nombreY.value.trim()||"Variable Y",p=a.elements.valoresX.value,x=a.elements.valoresY.value,m=s==="punto-biserial"?Ee(p,l):te(p,l),v=te(x,d),y=a.elements.categoriaPositiva.value.trim()||null,u=Number(a.elements.nivelConfianza.value),E=ke({x:m,y:v,prueba:s,nivelConfianza:u,nombreX:l,nombreY:d,categoriaPositiva:y});t.innerHTML=Ye(E),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){t.classList.add("hidden"),De(r,s instanceof Error?s.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",n=>{const s=n.target.closest("[data-action]");if(!s)return;const l=s.dataset.action;if(l==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(l==="cargar-ejemplo"){Ce(a),z(a,o),A(a),t.classList.add("hidden"),q(r);return}l==="limpiar"&&(a.reset(),a.elements.nombreX.value="Variable X",a.elements.nombreY.value="Variable Y",z(a,o),A(a),t.innerHTML="",t.classList.add("hidden"),q(r))}),a.addEventListener("input",()=>A(a)),e}function P(e,a){return`
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
    `}function ae(e,a){const r=e.toUpperCase();return`
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
    `}function z(e,a){const t=e.elements.prueba.value==="punto-biserial",o=e.querySelector('[data-etiqueta-valores="x"]'),i=e.querySelector('[data-etiqueta-valores="y"]'),n=e.elements.valoresX;a.classList.toggle("hidden",!t),o.textContent=t?"Categorías dicotómicas":"Valores de Variable X",i.textContent=t?"Valores cuantitativos":"Valores de Variable Y",n.placeholder=t?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function te(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),o=t.map(n=>Number(n.replace(",","."))),i=o.findIndex(n=>!Number.isFinite(n));if(i!==-1)throw new Error(`${a} contiene un valor no válido: "${t[i]}".`);return o}function Ee(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene categorías.`);const t=r.split(/\n|;/).map(o=>o.trim()).filter(Boolean);if(t.length<3)throw new Error(`${a} debe contener al menos tres categorías emparejadas.`);return t}function re(e,a){return e.trim()?e.trim().split(a?/\n|;/:/[\s;]+/).map(r=>r.trim()).filter(Boolean).length:0}function A(e){const a=e.elements.prueba.value==="punto-biserial",r=re(e.elements.valoresX.value,a),t=re(e.elements.valoresY.value,!1);e.querySelector('[data-contador="x"]').textContent=`${r} ${r===1?"valor":"valores"}`,e.querySelector('[data-contador="y"]').textContent=`${t} ${t===1?"valor":"valores"}`}function Ce(e){const a=e.elements.prueba.value||"pearson";if(e.elements.prueba.value=a,e.elements.nivelConfianza.value="0.95",a==="punto-biserial"){e.elements.nombreX.value="Participación en tutoría",e.elements.nombreY.value="Calificación final",e.elements.valoresX.value=`Sin tutoría
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
3`}function f(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function Me(e){return Number.isFinite(e)?e<.001?"< 0.001":f(e,4):"—"}function g(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ye(e){const a=Math.round(e.nivelConfianza*100),r=e.significativo,t=r?`Se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${g(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${g(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${N(e.coeficiente.simbolo,f(e.coeficiente.valor),"Coeficiente")}
                    ${N("p",Me(e.valorP),"Valor p bilateral")}
                    ${N("n",e.n,"Pares completos")}
                    ${N(e.estadistico.simbolo,f(e.estadistico.valor),e.gradosLibertad===null?"Estadístico inferencial":`gl = ${e.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Ve(e)}
                    ${Xe(e)}
                </div>

                ${ze(e)}
                ${Le(e)}
                ${Se(e)}
                ${Pe(e)}

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
    `}function N(e,a,r){return`
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
    `}function Ve(e){const a=e.tamanioEfecto.rCuadrado;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${b("Coeficiente",e.tamanioEfecto.valor)}
                ${b("Magnitud",e.tamanioEfecto.magnitud,!0)}
                ${b("Dirección",e.tamanioEfecto.direccion,!0)}
                ${Number.isFinite(a)?b("R² descriptivo",a):""}
            </dl>
        </article>
    `}function Xe(e){const a=e.intervaloConfianza;return`
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${a?.disponible?`
                        <dl class="grid grid-cols-2 gap-4">
                            ${b("Límite inferior",a.inferior)}
                            ${b("Límite superior",a.superior)}
                        </dl>
                    `:`
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `}
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${g(a?.metodo||"")}
            </p>
        </article>
    `}function b(e,a,r=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?g(a):f(a)}
            </dd>
        </div>
    `}function Le(e){if(e.id==="punto-biserial"){const a=e.grupos.categoriaCero,r=e.grupos.categoriaUno;return`
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
                            ${oe(a)}
                            ${oe(r)}
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
                        ${ne(e.variables.x)}
                        ${ne(e.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function ne(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${g(e.nombre)}
            </td>
            <td class="px-5 py-3 text-right">${f(e.media)}</td>
            <td class="px-5 py-3 text-right">${f(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${f(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${f(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${f(e.maximo)}</td>
        </tr>
    `}function oe(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${g(e.categoria)}
            </td>
            <td class="px-5 py-3 text-right">${e.n}</td>
            <td class="px-5 py-3 text-right">${f(e.media)}</td>
            <td class="px-5 py-3 text-right">${f(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${f(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${f(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${f(e.maximo)}</td>
        </tr>
    `}function Se(e){return e.id==="pearson"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${b("Covarianza",e.detalles.covarianza)}
                    ${b("R²",e.tamanioEfecto.rCuadrado)}
                    ${b("Grados de libertad",e.gradosLibertad)}
                </dl>
            </article>
        `:e.id==="spearman"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${b("Valores empatados en X",e.empates.cantidadValoresEmpatadosX)}
                    ${b("Valores empatados en Y",e.empates.cantidadValoresEmpatadosY)}
                </dl>
            </article>
        `:e.id==="kendall"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${b("Total de pares",e.pares.total)}
                    ${b("Concordantes",e.pares.concordantes)}
                    ${b("Discordantes",e.pares.discordantes)}
                    ${b("Empates solo en X",e.pares.empatesSoloX)}
                    ${b("Empates solo en Y",e.pares.empatesSoloY)}
                    ${b("Empates en ambas",e.pares.empatesAmbas)}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${b("Diferencia de medias",e.grupos.diferenciaMedias)}
                ${b("Categoría codificada como 1",e.variables.dicotomica.categoriaUno,!0)}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${g(e.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function Pe(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${e.diagnosticos.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${g(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function ze(e){return e.id==="punto-biserial"?qe(e):Ne(e)}function Ne(e){const a=e.datosGrafico,r=760,t=380,o=55,i=a.map(u=>u.x),n=a.map(u=>u.y),s=Math.min(...i),l=Math.max(...i),d=Math.min(...n),p=Math.max(...n),x=l-s||1,h=p-d||1,m=u=>o+(u-s)/x*(r-2*o),v=u=>t-o-(u-d)/h*(t-2*o),y=a.map(u=>`
                <circle
                    cx="${m(u.x)}"
                    cy="${v(u.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${g(`${u.x}, ${u.y}`)}</title>
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
                    <line x1="${o}" y1="${t-o}" x2="${r-o}" y2="${t-o}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${o}" y1="${o}" x2="${o}" y2="${t-o}" class="stroke-slate-400" stroke-width="2"></line>
                    ${y}
                    <text x="${r/2}" y="${t-12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${g(e.variables.x.nombre)}
                    </text>
                    <text x="18" y="${t/2}" text-anchor="middle" transform="rotate(-90 18 ${t/2})" class="fill-slate-700 text-sm font-bold">
                        ${g(e.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function qe(e){const a=e.datosGrafico,r=e.variables.dicotomica.categorias,t=760,o=380,i=60,n=a.map(m=>m.valor),s=Math.min(...n),d=Math.max(...n)-s||1,p=[t*.32,t*.68],x=m=>o-i-(m-s)/d*(o-2*i),h=a.map((m,v)=>{const y=m.codigo===0?p[0]:p[1],u=(v%5-2)*6;return`
                <circle
                    cx="${y+u}"
                    cy="${x(m.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${g(`${m.categoria}: ${m.valor}`)}</title>
                </circle>
            `}).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Distribución por categoría
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${t} ${o}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Distribución de valores por categoría"
                >
                    <line x1="${i}" y1="${o-i}" x2="${t-i}" y2="${o-i}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${i}" y1="${i}" x2="${i}" y2="${o-i}" class="stroke-slate-400" stroke-width="2"></line>
                    ${h}
                    <text x="${p[0]}" y="${o-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${g(r[0])}
                    </text>
                    <text x="${p[1]}" y="${o-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${g(r[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function De(e,a){e.textContent=a,e.classList.remove("hidden")}function q(e){e.textContent="",e.classList.add("hidden")}export{Te as CalculadoraRelacionVariables};
