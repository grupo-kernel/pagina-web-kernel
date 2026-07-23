import{p as V}from"./exportacionesCalculadoras-BiNXW7QL.js";const g=1e-12,f=e=>e.reduce((t,a)=>t+a,0),j=e=>[...e].sort((t,a)=>t-a),h=e=>Math.abs(e)<g?0:e;function T(e){const t=e.length;return e.reduce((a,i)=>a+i/t,0)}function A(e,t="resultado"){if(typeof e=="number"&&!Number.isFinite(e))throw new Error(`Los datos generan un ${t} no finito. Reduzca la escala de los valores o revise observaciones extremas.`);Array.isArray(e)?e.forEach((a,i)=>A(a,`${t}[${i}]`)):e&&typeof e=="object"&&Object.entries(e).forEach(([a,i])=>A(i,`${t}.${a}`))}function w(e,t){if(!e.length)throw new Error("No hay datos para calcular cuantiles.");if(t<=0)return e[0];if(t>=1)return e.at(-1);const a=(e.length-1)*t,i=Math.floor(a),r=Math.ceil(a);return i===r?e[i]:e[i]*(r-a)+e[r]*(a-i)}function P(e){const t=new Map;e.forEach(r=>{t.set(r,(t.get(r)||0)+1)});const a=Math.max(...t.values());if(a===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const i=[...t].filter(([,r])=>r===a).map(([r])=>r).sort((r,o)=>r-o);return{valores:i,frecuencia:a,tipo:i.length===1?"unimodal":"multimodal"}}function z(e,t,a,i){const r=t/e,o=e>1?t/(e-1):null;let n=null,s=null;if(e>=3&&t>g){const c=a/e/(t/e)**1.5;n=Math.sqrt(e*(e-1))/(e-2)*c}if(e>=4&&t>g){const c=i/e/(t/e)**2-3;s=(e-1)/((e-2)*(e-3))*((e+1)*c+6)}return{sumaCuadrados:h(t),varianzaPoblacional:h(r),varianzaMuestral:o===null?null:h(o),desviacionPoblacional:h(Math.sqrt(r)),desviacionMuestral:o===null?null:h(Math.sqrt(o)),asimetria:n===null?null:h(n),curtosisExceso:s===null?null:h(s)}}function O(e,t){let a=0,i=0,r=0;return e.forEach(o=>{const n=o-t;a+=n**2,i+=n**3,r+=n**4}),z(e.length,a,i,r)}function R(e,t,a){let i=0,r=0,o=0;return e.forEach(({valor:n,frecuencia:s})=>{const c=n-t;i+=s*c**2,r+=s*c**3,o+=s*c**4}),z(a,i,r,o)}function Q(e){if(!Array.isArray(e))throw new Error("Los datos deben proporcionarse en una lista.");const t=e.map(Number);if(t.length<2)throw new Error("Introduzca al menos dos observaciones numéricas.");if(!t.every(Number.isFinite))throw new Error("Todos los datos deben ser números válidos.");return t}function B(e){const t=new Map;j(e).forEach(i=>{t.set(i,(t.get(i)||0)+1)});let a=0;return[...t].map(([i,r])=>(a+=r,{valor:i,frecuencia:r,frecuenciaRelativa:r/e.length,frecuenciaAcumulada:a,frecuenciaRelativaAcumulada:a/e.length}))}function G(e){const t=j(e),a=t.length,i=T(t),r=w(t,.5),o=w(t,.25),n=w(t,.75),s=n-o,c=o-1.5*s,l=n+1.5*s,p=t.filter(m=>m>=c&&m<=l),b=t.filter(m=>m<c||m>l),v=O(t,i),k=j(t.map(m=>Math.abs(m-r)));return{n:a,suma:f(t),minimo:t[0],maximo:t.at(-1),rango:t.at(-1)-t[0],media:i,mediana:r,moda:P(t),q1:o,q3:n,iqr:s,percentiles:{p10:w(t,.1),p25:o,p50:r,p75:n,p90:w(t,.9)},desviacionMedia:t.reduce((m,I)=>m+Math.abs(I-i),0)/a,mad:w(k,.5),coeficienteVariacion:v.desviacionMuestral!==null&&Math.abs(i)>g?Math.abs(v.desviacionMuestral/i)*100:null,limitesAtipicos:{inferior:c,superior:l},bigotesCaja:{inferior:p[0],superior:p.at(-1)},atipicos:b,atipicosCantidad:b.length,...v}}function H(e,t){if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length||!e.length)throw new Error("Los valores y las frecuencias deben tener la misma cantidad de filas.");const a=new Map;e.forEach((o,n)=>{const s=Number(o),c=Number(t[n]);if(!Number.isFinite(s))throw new Error(`El valor de la fila ${n+1} no es válido.`);if(!Number.isInteger(c)||c<0)throw new Error(`La frecuencia de la fila ${n+1} debe ser un entero no negativo.`);a.set(s,(a.get(s)||0)+c)});const i=[...a].map(([o,n])=>({valor:o,frecuencia:n})).filter(({frecuencia:o})=>o>0).sort((o,n)=>o.valor-n.valor),r=f(i.map(({frecuencia:o})=>o));if(r<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return{filas:i,n:r}}function D(e,t){let a=0;for(const i of e)if(a+=i.frecuencia,t<a)return i.valor;return e.at(-1).valor}function y(e,t,a){if(a<=0)return e[0].valor;if(a>=1)return e.at(-1).valor;const i=(t-1)*a,r=Math.floor(i),o=Math.ceil(i),n=D(e,r),s=D(e,o);return r===o?n:n*(o-i)+s*(i-r)}function K(e){const t=Math.max(...e.map(({frecuencia:i})=>i));if(t===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const a=e.filter(({frecuencia:i})=>i===t).map(({valor:i})=>i);return{valores:a,frecuencia:t,tipo:a.length===1?"unimodal":"multimodal"}}function U(e,t){let a=0;return e.map(({valor:i,frecuencia:r})=>(a+=r,{valor:i,frecuencia:r,frecuenciaRelativa:r/t,frecuenciaAcumulada:a,frecuenciaRelativaAcumulada:a/t}))}function W(e,t){const a=f(e.map(({valor:d,frecuencia:x})=>d*(x/t))),i=a*t,r=y(e,t,.5),o=y(e,t,.25),n=y(e,t,.75),s=n-o,c=o-1.5*s,l=n+1.5*s,p=e.filter(({valor:d})=>d>=c&&d<=l),b=e.filter(({valor:d})=>d<c||d>l),v=R(e,a,t),k=new Map;e.forEach(({valor:d,frecuencia:x})=>{const q=Math.abs(d-r);k.set(q,(k.get(q)||0)+x)});const m=[...k].map(([d,x])=>({valor:d,frecuencia:x})).sort((d,x)=>d.valor-x.valor),I=f(b.map(({frecuencia:d})=>d));return{n:t,suma:i,minimo:e[0].valor,maximo:e.at(-1).valor,rango:e.at(-1).valor-e[0].valor,media:a,mediana:r,moda:K(e),q1:o,q3:n,iqr:s,percentiles:{p10:y(e,t,.1),p25:o,p50:r,p75:n,p90:y(e,t,.9)},desviacionMedia:f(e.map(({valor:d,frecuencia:x})=>Math.abs(d-a)*x))/t,mad:y(m,t,.5),coeficienteVariacion:v.desviacionMuestral!==null&&Math.abs(a)>g?Math.abs(v.desviacionMuestral/a)*100:null,limitesAtipicos:{inferior:c,superior:l},bigotesCaja:{inferior:p[0].valor,superior:p.at(-1).valor},atipicos:b.map(({valor:d})=>d),atipicosCantidad:I,atipicosFrecuencias:b,...v}}function Z(e){if(!Array.isArray(e)||e.length<2)throw new Error("Introduzca al menos dos intervalos de clase.");const t=e.map((a,i)=>{const r=Number(a.limiteInferior),o=Number(a.limiteSuperior),n=Number(a.frecuencia);if(!Number.isFinite(r)||!Number.isFinite(o)||o<=r)throw new Error(`Los límites de la clase ${i+1} no son válidos.`);if(!Number.isInteger(n)||n<0)throw new Error(`La frecuencia de la clase ${i+1} debe ser un entero no negativo.`);return{limiteInferior:r,limiteSuperior:o,frecuencia:n,marcaClase:(r+o)/2,amplitud:o-r}}).sort((a,i)=>a.limiteInferior-i.limiteInferior);for(let a=1;a<t.length;a+=1)if(t[a].limiteInferior<t[a-1].limiteSuperior-g)throw new Error("Los intervalos de clase no deben superponerse.");if(f(t.map(({frecuencia:a})=>a))<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return t}function M(e,t,a){const i=t*a;let r=0;for(const o of e){const n=r+o.frecuencia;if(i<=n||o===e.at(-1))return o.frecuencia===0?o.marcaClase:o.limiteInferior+(i-r)/o.frecuencia*o.amplitud;r=n}return e.at(-1).limiteSuperior}function _(e){const t=Math.max(...e.map(({frecuencia:c})=>c)),a=e.findIndex(({frecuencia:c})=>c===t),i=e[a];if(t===0)return null;const r=a?e[a-1].frecuencia:0,o=a<e.length-1?e[a+1].frecuencia:0,n=t-r,s=t-o;return{valor:n+s>0?i.limiteInferior+n/(n+s)*i.amplitud:i.marcaClase,intervalo:{inferior:i.limiteInferior,superior:i.limiteSuperior},frecuencia:t}}function J(e){const t=f(e.map(({frecuencia:l})=>l)),a=f(e.map(({marcaClase:l,frecuencia:p})=>l*(p/t))),i=a*t,r=R(e.map(({marcaClase:l,frecuencia:p})=>({valor:l,frecuencia:p})),a,t),o=M(e,.25,t),n=M(e,.5,t),s=M(e,.75,t),c=s-o;return{n:t,suma:i,minimo:e[0].limiteInferior,maximo:e.at(-1).limiteSuperior,rango:e.at(-1).limiteSuperior-e[0].limiteInferior,media:a,mediana:n,moda:_(e),q1:o,q3:s,iqr:c,percentiles:{p10:M(e,.1,t),p25:o,p50:n,p75:s,p90:M(e,.9,t)},desviacionMedia:f(e.map(({marcaClase:l,frecuencia:p})=>Math.abs(l-a)*p))/t,mad:null,coeficienteVariacion:r.desviacionMuestral!==null&&Math.abs(a)>g?Math.abs(r.desviacionMuestral/a)*100:null,limitesAtipicos:{inferior:o-1.5*c,superior:s+1.5*c},bigotesCaja:{inferior:e[0].limiteInferior,superior:e.at(-1).limiteSuperior},atipicos:[],atipicosCantidad:0,advertenciaAtipicos:"Con datos agrupados no es posible identificar observaciones atípicas individuales; los límites son aproximados.",...r}}function X(e){const t=f(e.map(({frecuencia:i})=>i));let a=0;return e.map(i=>(a+=i.frecuencia,{intervalo:{inferior:i.limiteInferior,superior:i.limiteSuperior},marcaClase:i.marcaClase,amplitud:i.amplitud,frecuencia:i.frecuencia,frecuenciaRelativa:i.frecuencia/t,frecuenciaAcumulada:a,frecuenciaRelativaAcumulada:a/t}))}function S(e,t){const a=e.asimetria===null?"Asimetría no disponible":Math.abs(e.asimetria)<.5?"Distribución aproximadamente simétrica":e.asimetria>0?"Distribución con asimetría positiva":"Distribución con asimetría negativa",i=e.curtosisExceso===null?"Curtosis no disponible":Math.abs(e.curtosisExceso)<.5?"Curtosis próxima a mesocúrtica":e.curtosisExceso>0?"Distribución leptocúrtica":"Distribución platicúrtica",r=e.atipicosCantidad??e.atipicos.length;return[`La media es ${e.media.toFixed(3)} y la mediana es ${e.mediana.toFixed(3)}.`,`La desviación estándar muestral es ${e.desviacionMuestral?.toFixed(3)??"no disponible"}.`,e.coeficienteVariacion===null?"El coeficiente de variación no es interpretable cuando la media es cero.":`El coeficiente de variación es ${e.coeficienteVariacion.toFixed(2)} %.`,`${a}.`,`${i}.`,t?e.advertenciaAtipicos:r?`Se detectaron ${r} valores atípicos potenciales mediante el criterio de Tukey.`:"No se detectaron valores atípicos potenciales mediante el criterio de Tukey."]}function Y(e){const t=Q(e),a=G(t),i=B(t);return A({resumen:a,tablaFrecuencias:i},"análisis descriptivo"),{tipoDatos:"individuales",aproximado:!1,resumen:a,tablaFrecuencias:i,datosGrafico:{valores:j(t),frecuencias:i},interpretacion:S(a,!1)}}function ee({valores:e,frecuencias:t}){const{filas:a,n:i}=H(e,t),r=W(a,i),o=U(a,i);return A({resumen:r,tablaFrecuencias:o},"análisis descriptivo"),{tipoDatos:"frecuencias",aproximado:!1,resumen:r,tablaFrecuencias:o,datosGrafico:{frecuencias:o},datosOriginales:{valores:a.map(({valor:n})=>n),frecuencias:a.map(({frecuencia:n})=>n)},interpretacion:S(r,!1)}}function te(e){const t=Z(e),a=J(t),i=X(t);return A({resumen:a,tablaFrecuencias:i},"análisis descriptivo"),{tipoDatos:"intervalos",aproximado:!0,resumen:a,tablaFrecuencias:i,datosGrafico:{clases:i},interpretacion:S(a,!0),advertencias:["Las medidas se estiman mediante marcas de clase e interpolación dentro de los intervalos."]}}function ae({tipoDatos:e="individuales",valores:t=[],frecuencias:a=[],clases:i=[]}){if(e==="individuales")return Y(t);if(e==="frecuencias")return ee({valores:t,frecuencias:a});if(e==="intervalos")return te(i);throw new Error("El tipo de datos seleccionado no está disponible.")}function ve(){const e=document.createElement("section");e.className=`
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
                    ${L("Observaciones individuales","Cada número representa una observación. Es la opción adecuada cuando dispone de los datos originales.")}
                    ${L("Valores con frecuencias","Utilícelo cuando cada valor aparece acompañado por su frecuencia absoluta.")}
                    ${L("Intervalos de clase","Úselo cuando los datos solo están disponibles en intervalos. Las medidas obtenidas serán aproximadas.")}
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
    `;const t=e.querySelector("#formulario-estadistica-descriptiva"),a=e.querySelector("#entrada-datos-descriptivos"),i=e.querySelector("#mensaje-error-descriptiva"),r=e.querySelector("#resultados-estadistica-descriptiva"),o=()=>{a.innerHTML=ie(t.elements.tipoDatos.value),r.classList.add("hidden"),C(i)};return o(),t.elements.tipoDatos.addEventListener("change",o),t.addEventListener("submit",n=>{n.preventDefault(),C(i);try{const s=t.elements.tipoDatos.value,c=oe(s,a),l=ae(c);r.innerHTML=se(l),r.classList.remove("hidden"),V({contenedor:r,nombre:"estadistica-descriptiva",datos:{solicitud:c,resultado:l},incluirImpresion:!0}),r.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){r.classList.add("hidden"),xe(i,s instanceof Error?s.message:"No fue posible calcular los descriptivos.")}}),e.addEventListener("click",n=>{const s=n.target.closest("[data-action]");if(!s)return;const c=s.dataset.action;if(c==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(c==="cargar-ejemplo"){ne(t.elements.tipoDatos.value,a),r.classList.add("hidden"),C(i);return}if(c==="limpiar"){const l=a.querySelector("textarea");l&&(l.value=""),r.classList.add("hidden"),C(i)}}),e}function L(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">
                ${e}
            </h3>
            <p>${t}</p>
        </div>
    `}function ie(e){const a={individuales:{titulo:"Observaciones",ayuda:"Separe los valores mediante comas, espacios, punto y coma o saltos de línea.",marcador:"12, 15, 18, 18, 20, 22, 25, 27"},frecuencias:{titulo:"Valor y frecuencia",ayuda:"Escriba una fila por valor con el formato: valor, frecuencia.",marcador:`10, 3
12, 5
14, 7
16, 4`},intervalos:{titulo:"Límite inferior, límite superior y frecuencia",ayuda:"Escriba una fila por intervalo con el formato: inferior, superior, frecuencia.",marcador:`0, 10, 5
10, 20, 8
20, 30, 7`}}[e];return`
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">
                ${a.titulo}
            </span>
            <textarea
                name="datos"
                rows="11"
                placeholder="${a.marcador}"
                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-500"
            ></textarea>
            <span class="block text-xs text-slate-500 mt-2">
                ${a.ayuda}
            </span>
        </label>
    `}function re(e){return e.trim().split(/[\s,;]+/).filter(Boolean).map(Number)}function F(e,t){const a=e.trim().split(/\n+/).map(i=>i.trim()).filter(Boolean).map((i,r)=>{const o=i.split(/[,;\t ]+/).filter(Boolean).map(Number);if(o.length!==t||!o.every(Number.isFinite))throw new Error(`La fila ${r+1} debe contener exactamente ${t} valores numéricos.`);return o});if(!a.length)throw new Error("Introduzca los datos antes de calcular.");return a}function oe(e,t){const a=t.querySelector("textarea").value;if(!a.trim())throw new Error("Introduzca los datos antes de calcular.");if(e==="individuales")return{tipoDatos:e,valores:re(a)};if(e==="frecuencias"){const r=F(a,2);return{tipoDatos:e,valores:r.map(o=>o[0]),frecuencias:r.map(o=>o[1])}}const i=F(a,3);return{tipoDatos:e,clases:i.map(r=>({limiteInferior:r[0],limiteSuperior:r[1],frecuencia:r[2]}))}}function ne(e,t){const a={individuales:"42, 48, 51, 53, 55, 55, 57, 59, 61, 64, 67, 72, 96",frecuencias:`1, 2
2, 5
3, 8
4, 6
5, 3`,intervalos:`0, 10, 4
10, 20, 7
20, 30, 12
30, 40, 9
40, 50, 3`};t.querySelector("textarea").value=a[e]}function se(e){const t=e.resumen;return`
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
                    ${$("n",t.n)}
                    ${$("Media",u(t.media))}
                    ${$("Mediana",u(t.mediana))}
                    ${$("Moda",fe(t.moda))}
                    ${$("Mínimo",u(t.minimo))}
                    ${$("Máximo",u(t.maximo))}
                </div>

                ${e.advertencias?.length?de(e.advertencias):""}

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${ce(t)}
                    ${le(e.interpretacion)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${ue(e)}
                    ${pe(t,e.aproximado)}
                </div>

                ${me(e)}
            </div>
        </section>
    `}function $(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${t}
            </p>
        </article>
    `}function ce(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Medidas descriptivas
            </h3>
            <div class="divide-y divide-slate-100">
                ${[["Suma",e.suma],["Rango",e.rango],["Q1",e.q1],["Q3",e.q3],["Rango intercuartílico",e.iqr],["Varianza muestral",e.varianzaMuestral],["Varianza poblacional",e.varianzaPoblacional],["Desviación estándar muestral",e.desviacionMuestral],["Desviación estándar poblacional",e.desviacionPoblacional],["Desviación media",e.desviacionMedia],["Desviación absoluta mediana",e.mad],["Coeficiente de variación",e.coeficienteVariacion,"%"],["Asimetría",e.asimetria],["Exceso de curtosis",e.curtosisExceso]].map(([a,i,r=""])=>`
                    <div class="flex items-center justify-between gap-5 py-3">
                        <span class="text-slate-600">${a}</span>
                        <strong class="text-slate-900 text-right">
                            ${u(i)}${i===null?"":r}
                        </strong>
                    </div>
                `).join("")}
            </div>

            <div class="mt-6 rounded-2xl bg-sky-50 border border-sky-200 p-5">
                <h4 class="font-black text-sky-950 mb-3">Percentiles</h4>
                <div class="grid grid-cols-5 gap-2 text-center">
                    ${Object.entries(e.percentiles).map(([a,i])=>`
                        <div>
                            <span class="block text-xs uppercase text-sky-700 font-black">${a}</span>
                            <strong class="text-slate-900">${u(i)}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>
        </article>
    `}function le(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Interpretación orientativa
            </h3>
            <ul class="space-y-4">
                ${e.map(t=>`
                    <li class="flex items-start gap-3 text-slate-700 leading-relaxed">
                        <span class="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">✓</span>
                        <span>${t}</span>
                    </li>
                `).join("")}
            </ul>
        </article>
    `}function de(e){return`
        <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
            ${e.map(t=>`
                <p class="text-amber-900 leading-relaxed">${t}</p>
            `).join("")}
        </div>
    `}function ue(e){const t=e.tablaFrecuencias,a=Math.max(...t.map(i=>i.frecuencia),1);return`
        <article
            data-grafico-exportable="true"
            data-grafico-id="distribucion-frecuencias"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden"
        >
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Distribución de frecuencias
            </h3>
            <p class="text-sm text-slate-500 mb-6">
                Altura proporcional a la frecuencia absoluta.
            </p>
            <div class="flex items-end gap-2 h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
                ${t.map(i=>{const r=i.intervalo?`${u(i.intervalo.inferior)}–${u(i.intervalo.superior)}`:u(i.valor),o=Math.max(4,i.frecuencia/a*190);return`
                        <div class="flex flex-col items-center justify-end min-w-[52px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${i.frecuencia}</span>
                            <div class="w-9 bg-sky-600 rounded-t-md" style="height:${o}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-all">${r}</span>
                        </div>
                    `}).join("")}
            </div>
        </article>
    `}function pe(e,t){const a=e.minimo,i=e.maximo,r=Math.max(i-a,1),o=b=>40+(b-a)/r*520,n=o(a),s=o(e.q1),c=o(e.mediana),l=o(e.q3),p=o(i);return`
        <article
            data-grafico-exportable="true"
            data-grafico-id="diagrama-caja"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
        >
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Diagrama de caja
            </h3>
            <p class="text-sm text-slate-500 mb-5">
                ${t?"Representación aproximada a partir de los intervalos.":"Basado en Q1, mediana, Q3 y valores extremos."}
            </p>
            <div class="overflow-x-auto">
                <svg viewBox="0 0 600 170" class="min-w-[560px] w-full" role="img" aria-label="Diagrama de caja">
                    <line x1="${n}" y1="80" x2="${s}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${l}" y1="80" x2="${p}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${n}" y1="58" x2="${n}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${p}" y1="58" x2="${p}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <rect x="${s}" y="45" width="${Math.max(l-s,2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
                    <line x1="${c}" y1="45" x2="${c}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
                    ${E(n,140,a)}
                    ${E(s,30,e.q1)}
                    ${E(c,135,e.mediana)}
                    ${E(l,30,e.q3)}
                    ${E(p,140,i)}
                </svg>
            </div>
            <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <strong>Atípicos potenciales:</strong>
                ${e.atipicos.length?e.atipicos.map(u).join(", "):t?"no identificables individualmente con datos agrupados":"ninguno según el criterio de Tukey"}
            </div>
        </article>
    `}function E(e,t,a){return`
        <text x="${e}" y="${t}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-700">
            ${u(a)}
        </text>
    `}function me(e){const t=e.tipoDatos==="intervalos";return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md mt-8 overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Tabla de frecuencias
            </h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200">
                <table class="min-w-full text-sm">
                    <caption class="sr-only">
                        Distribución de frecuencias absolutas, relativas y acumuladas
                    </caption>
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th scope="col" class="px-4 py-3 text-left font-black">${t?"Intervalo":"Valor"}</th>
                            ${t?'<th scope="col" class="px-4 py-3 text-right font-black">Marca</th>':""}
                            <th scope="col" class="px-4 py-3 text-right font-black">f</th>
                            <th scope="col" class="px-4 py-3 text-right font-black">fr</th>
                            <th scope="col" class="px-4 py-3 text-right font-black">F</th>
                            <th scope="col" class="px-4 py-3 text-right font-black">Fr</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${e.tablaFrecuencias.map(a=>`
                            <tr>
                                <th scope="row" class="px-4 py-3 text-left text-slate-800 font-semibold">
                                    ${t?`[${u(a.intervalo.inferior)}, ${u(a.intervalo.superior)})`:u(a.valor)}
                                </th>
                                ${t?`<td class="px-4 py-3 text-right">${u(a.marcaClase)}</td>`:""}
                                <td class="px-4 py-3 text-right">${a.frecuencia}</td>
                                <td class="px-4 py-3 text-right">${N(a.frecuenciaRelativa)}</td>
                                <td class="px-4 py-3 text-right">${a.frecuenciaAcumulada}</td>
                                <td class="px-4 py-3 text-right">${N(a.frecuenciaRelativaAcumulada)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function u(e){return e==null||!Number.isFinite(Number(e))?"—":Number(e).toLocaleString("es-DO",{maximumFractionDigits:4})}function N(e){return`${(e*100).toLocaleString("es-DO",{maximumFractionDigits:2})} %`}function fe(e){return e?"valores"in e?e.valores.length?e.valores.map(u).join(", "):"Sin moda":u(e.valor):"—"}function xe(e,t){e.textContent=t,e.classList.remove("hidden")}function C(e){e.textContent="",e.classList.add("hidden")}export{ve as CalculadoraEstadisticaDescriptiva};
