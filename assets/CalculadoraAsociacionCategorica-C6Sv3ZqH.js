import{j as W,a as B}from"./jstat-DiDocX-r.js";const E=W.jStat??B?.jStat;if(!E)throw new Error("No fue posible cargar el motor estadístico jStat.");const q=e=>Math.min(1,Math.max(0,e));function F(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function D(e,a,t){if(e==null)return Array.from({length:a},(s,o)=>`${t} ${o+1}`);if(!Array.isArray(e)||e.length!==a)throw new RangeError(`Debe proporcionar exactamente ${a} etiquetas para ${t.toLowerCase()}.`);const r=e.map((s,o)=>{const n=String(s??"").trim();if(!n)throw new Error(`La etiqueta ${o+1} de ${t.toLowerCase()} está vacía.`);return n});if(new Set(r).size!==r.length)throw new Error(`Las etiquetas de ${t.toLowerCase()} deben ser diferentes.`);return r}function M(e,a,t){if(!Array.isArray(e)||e.length<2)throw new RangeError("La tabla debe contener al menos dos filas.");const r=Array.isArray(e[0])?e[0].length:0;if(r<2)throw new RangeError("La tabla debe contener al menos dos columnas.");const s=e.map((i,u)=>{if(!Array.isArray(i)||i.length!==r)throw new RangeError(`La fila ${u+1} no contiene la misma cantidad de columnas que las demás.`);return i.map((m,b)=>{const p=Number(typeof m=="string"?m.trim().replace(",","."):m);if(!Number.isFinite(p)||p<0||!Number.isInteger(p))throw new TypeError(`La celda (${u+1}, ${b+1}) debe contener una frecuencia entera no negativa.`);return p})}),o=s.map(i=>i.reduce((u,m)=>u+m,0)),n=Array.from({length:r},(i,u)=>s.reduce((m,b)=>m+b[u],0)),l=o.reduce((i,u)=>i+u,0);if(l===0)throw new RangeError("La tabla debe contener al menos una observación.");const c=o.findIndex(i=>i===0);if(c!==-1)throw new RangeError(`La fila ${c+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);const d=n.findIndex(i=>i===0);if(d!==-1)throw new RangeError(`La columna ${d+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);return{observadas:s,numeroFilas:s.length,numeroColumnas:r,totalesFilas:o,totalesColumnas:n,total:l,etiquetasFilas:D(a,s.length,"Fila"),etiquetasColumnas:D(t,r,"Columna")}}function k(e){return e.observadas.map((a,t)=>e.totalesColumnas.map(r=>e.totalesFilas[t]*r/e.total))}function j(e){const a=e.flat(),t=a.filter(l=>l<5).length,r=a.filter(l=>l<1).length,s=100*t/a.length,o=Math.min(...a);return{adecuado:r===0&&s<=20,minimo:o,totalCeldas:a.length,menoresQueCinco:t,menoresQueUno:r,porcentajeMenoresQueCinco:s,criterio:"Como guía práctica, ninguna frecuencia esperada debe ser menor que 1 y no más del 20 % de las celdas debería tener una frecuencia esperada menor que 5."}}function S(e,a){let t=0;const r=e.observadas.map((l,c)=>l.map((d,i)=>{const u=a[c][i],m=(d-u)**2/u;return t+=m,m})),s=e.observadas.map((l,c)=>l.map((d,i)=>{const u=a[c][i];return(d-u)/Math.sqrt(u)})),o=e.observadas.map((l,c)=>l.map((d,i)=>{const u=a[c][i],m=e.totalesFilas[c]/e.total,b=e.totalesColumnas[i]/e.total,p=Math.sqrt(u*(1-m)*(1-b));return p===0?0:(d-u)/p})),n=[];return o.forEach((l,c)=>{l.forEach((d,i)=>{Math.abs(d)>=1.96&&n.push({fila:c,columna:i,residuo:d,direccion:d>0?"más casos de los esperados":"menos casos de los esperados"})})}),{chiCuadrado:t,contribuciones:r,residuosPearson:s,residuosAjustados:o,celdasDestacadas:n}}function K(e){const a=e[0][0],t=e[0][1],r=e[1][0],s=e[1][1],o=a+t+r+s,n=(a+t)*(r+s)*(a+r)*(t+s);return n===0?0:o*Math.max(0,Math.abs(a*s-t*r)-o/2)**2/n}function J(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":"Grande"}function R(e,a){const t=Math.min(e.numeroFilas-1,e.numeroColumnas-1),r=t<=0?0:Math.sqrt(a/(e.total*t));let s=null;if(e.numeroFilas===2&&e.numeroColumnas===2){const[[i,u],[m,b]]=e.observadas,p=Math.sqrt((i+u)*(m+b)*(i+m)*(u+b));s=p===0?0:(i*b-u*m)/p}const o=Math.max(0,a/e.total-(e.numeroColumnas-1)*(e.numeroFilas-1)/(e.total-1)),n=e.numeroFilas-(e.numeroFilas-1)**2/(e.total-1),l=e.numeroColumnas-(e.numeroColumnas-1)**2/(e.total-1),c=Math.min(n-1,l-1),d=e.total<=1||c<=0?r:Math.sqrt(o/c);return{phi:s,vCramer:r,vCramerCorregido:d,magnitud:J(s??r)}}function Q(e){const a=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-Q(1-e);let t=.9999999999998099;const r=e-1;a.forEach((o,n)=>{t+=o/(r+n+1)});const s=r+a.length-.5;return .5*Math.log(2*Math.PI)+(r+.5)*Math.log(s)-s+Math.log(t)}function h(e){return Q(e+1)}function A(e,a){return a<0||a>e?-1/0:h(e)-h(a)-h(e-a)}function L(e,a,t,r){let s=0;return a.forEach(o=>{s+=h(o)}),t.forEach(o=>{s+=h(o)}),s-=h(r),e.flat().forEach(o=>{s-=h(o)}),s}function H(e,a){if(e===-1/0)return a;if(a===-1/0)return e;const t=Math.max(e,a);return t+Math.log(Math.exp(e-t)+Math.exp(a-t))}function _(e,a){F(a);const t=e[0][0],r=e[0][1],s=e[1][0],o=e[1][1],n=[t,r,s,o].some(U=>U===0),l=n?.5:0,c=t+l,d=r+l,i=s+l,u=o+l,m=c*u/(d*i),b=Math.sqrt(1/c+1/d+1/i+1/u),p=1-a,C=E.normal.inv(1-p/2,0,1),$=Math.log(m);return{oddsRatio:m,intervaloConfianza:{nivel:a,inferior:Math.exp($-C*b),superior:Math.exp($+C*b),metodo:n?"Intervalo de Wald sobre log(OR) con corrección de Haldane–Anscombe de 0.5 en todas las celdas.":"Intervalo de Wald sobre log(OR)."},correccionAplicada:n,valorCorreccion:l,orientacion:"El odds ratio depende del orden asignado a las filas y columnas de la tabla."}}function O(e,a,t,r){return Math.exp(A(t,e)+A(r-t,a-e)-A(r,a))}function X(e){const[[a,t],[r,s]]=e.observadas,o=a+t,n=a+r,l=Math.max(0,o-(e.total-n)),c=Math.min(o,n),d=O(a,o,n,e.total);let i=0;for(let u=l;u<=c;u+=1){const m=O(u,o,n,e.total);m<=d+1e-12&&(i+=m)}return{valorP:q(i),probabilidadObservada:d,rangoCeldaSuperiorIzquierda:{minimo:l,maximo:c},metodo:"Valor p bilateral exacto obtenido al sumar las tablas con probabilidad menor o igual que la tabla observada, condicionando por los márgenes."}}function Z(e,a,t){const r=new Array(a.length).fill(0),s=(o,n)=>{if(o===a.length-1){n>=0&&n<=a[o]&&(r[o]=n,t([...r]));return}const l=a.slice(o+1).reduce((i,u)=>i+u,0),c=Math.max(0,n-l),d=Math.min(a[o],n);for(let i=c;i<=d;i+=1)r[o]=i,s(o+1,n-i)};s(0,e)}function ee(e,a,t,r){const s=e.length,o=Array.from({length:s},()=>new Array(a.length).fill(0));let n=0,l=!1;const c=(d,i)=>{if(!l){if(d===s-1){if(i.reduce((m,b)=>m+b,0)!==e[d])return;if(o[d]=[...i],n+=1,n>r){l=!0;return}t(o.map(m=>[...m]));return}Z(e[d],i,u=>{if(l)return;o[d]=u;const m=i.map((b,p)=>b-u[p]);c(d+1,m)})}};return c(0,[...a]),{cantidad:Math.min(n,r),excedido:l}}function ae(e,a,t){const r=new Array(a.length).fill(0);let s=a.reduce((o,n)=>o+n,0);for(let o=0;o<e;o+=1){let n=t()*s,l=a.length-1;for(let c=0;c<a.length;c+=1)if(n-=a[c],n<0){l=c;break}r[l]+=1,a[l]-=1,s-=1}return r}function te(e,a,t){const r=[...a],s=[];for(let o=0;o<e.length-1;o+=1)s.push(ae(e[o],r,t));return s.push([...r]),s}function oe(e){let a=e>>>0;return()=>{a+=1831565813;let t=a;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function re(e,{maximoTablasExactas:a,simulaciones:t,semilla:r}){const s=L(e.observadas,e.totalesFilas,e.totalesColumnas,e.total);let o=-1/0,n=-1/0;const l=ee(e.totalesFilas,e.totalesColumnas,u=>{const m=L(u,e.totalesFilas,e.totalesColumnas,e.total);o=H(o,m),m<=s+1e-12&&(n=H(n,m))},a);if(!l.excedido)return{valorP:n===-1/0?0:q(Math.exp(n-o)),exacta:!0,metodo:"Prueba exacta de Fisher–Freeman–Halton mediante enumeración completa de las tablas compatibles con los márgenes.",tablasEvaluadas:l.cantidad,simulaciones:0,errorMonteCarlo:0};let c=0;const d=oe(r);for(let u=0;u<t;u+=1){const m=te(e.totalesFilas,e.totalesColumnas,d);L(m,e.totalesFilas,e.totalesColumnas,e.total)<=s+1e-12&&(c+=1)}const i=(c+1)/(t+1);return{valorP:i,exacta:!1,metodo:"Aproximación Monte Carlo de la prueba Fisher–Freeman–Halton, condicionada por los márgenes observados.",tablasEvaluadas:l.cantidad,simulaciones:t,semilla:r,errorMonteCarlo:Math.sqrt(i*(1-i)/(t+1))}}function T(e,a,t,r,s){return{tabla:{observadas:e.observadas,esperadas:a,totalesFilas:e.totalesFilas,totalesColumnas:e.totalesColumnas,total:e.total,etiquetasFilas:e.etiquetasFilas,etiquetasColumnas:e.etiquetasColumnas,numeroFilas:e.numeroFilas,numeroColumnas:e.numeroColumnas},residuos:{pearson:t.residuosPearson,ajustados:t.residuosAjustados,celdasDestacadas:t.celdasDestacadas},contribucionesChiCuadrado:t.contribuciones,diagnosticoFrecuenciasEsperadas:r,tamanioEfecto:s}}function V(e,a={}){const{nivelConfianza:t=.95,etiquetasFilas:r=null,etiquetasColumnas:s=null}=a;F(t);const o=M(e,r,s),n=k(o),l=j(n),c=S(o,n),d=(o.numeroFilas-1)*(o.numeroColumnas-1),i=q(1-E.chisquare.cdf(c.chiCuadrado,d)),u=R(o,c.chiCuadrado),m=1-t,b=o.numeroFilas===2&&o.numeroColumnas===2,p=b?K(o.observadas):null,C=b?q(1-E.chisquare.cdf(p,1)):null,$=b?_(o.observadas,t):null;return{id:b?"chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-rxc",nombre:"Prueba chi-cuadrado de independencia",metodo:"Comparación de frecuencias observadas y esperadas bajo la hipótesis de independencia.",estadistico:{simbolo:"χ²",valor:c.chiCuadrado},gradosLibertad:d,valorP:i,nivelConfianza:t,alfa:m,significativo:i<m,correccionYates:b?{estadistico:p,valorP:C,significativo:C<m,disponible:!0}:{disponible:!1},oddsRatio:$,advertencias:l.adecuado?[]:["Las frecuencias esperadas no satisfacen completamente la guía práctica para la aproximación chi-cuadrado. Considere una prueba exacta o Monte Carlo."],...T(o,n,c,l,u)}}function z(e,a={}){const{nivelConfianza:t=.95,etiquetasFilas:r=null,etiquetasColumnas:s=null}=a;F(t);const o=M(e,r,s);if(o.numeroFilas!==2||o.numeroColumnas!==2)throw new RangeError("La prueba exacta de Fisher requiere una tabla 2 × 2.");const n=k(o),l=j(n),c=S(o,n),d=R(o,c.chiCuadrado),i=X(o),u=_(o.observadas,t),m=1-t;return{id:"fisher-exacta-2x2",nombre:"Prueba exacta de Fisher",metodo:i.metodo,estadistico:{simbolo:"p exacta",valor:i.probabilidadObservada},gradosLibertad:null,valorP:i.valorP,nivelConfianza:t,alfa:m,significativo:i.valorP<m,oddsRatio:u,detallesExactos:i,advertencias:[],...T(o,n,c,l,d)}}function Y(e,a={}){const{nivelConfianza:t=.95,etiquetasFilas:r=null,etiquetasColumnas:s=null,maximoTablasExactas:o=1e5,simulaciones:n=1e4,semilla:l=20260723}=a;if(F(t),!Number.isInteger(o)||o<100)throw new RangeError("El máximo de tablas exactas debe ser un entero de al menos 100.");if(!Number.isInteger(n)||n<1e3)throw new RangeError("El número de simulaciones debe ser un entero de al menos 1000.");if(!Number.isInteger(l))throw new RangeError("La semilla de Monte Carlo debe ser un entero.");const c=M(e,r,s);if(c.numeroFilas===2&&c.numeroColumnas===2)return z(e,{nivelConfianza:t,etiquetasFilas:r,etiquetasColumnas:s});const d=k(c),i=j(d),u=S(c,d),m=R(c,u.chiCuadrado),b=re(c,{maximoTablasExactas:o,simulaciones:n,semilla:l}),p=1-t;return{id:"fisher-freeman-halton",nombre:"Prueba de Fisher–Freeman–Halton",metodo:b.metodo,estadistico:{simbolo:"χ² descriptivo",valor:u.chiCuadrado},gradosLibertad:(c.numeroFilas-1)*(c.numeroColumnas-1),valorP:b.valorP,nivelConfianza:t,alfa:p,significativo:b.valorP<p,detallesExactos:b,advertencias:b.exacta?[]:["El espacio de tablas fue demasiado grande para una enumeración completa; el valor p se estimó mediante Monte Carlo."],...T(c,d,u,i,m)}}function se({tabla:e,prueba:a="automatico",nivelConfianza:t=.95,etiquetasFilas:r=null,etiquetasColumnas:s=null,maximoTablasExactas:o=1e5,simulaciones:n=1e4,semilla:l=20260723}){const c={nivelConfianza:t,etiquetasFilas:r,etiquetasColumnas:s,maximoTablasExactas:o,simulaciones:n,semilla:l};if(a==="automatico"){const d=M(e,r,s),i=k(d);return j(i).adecuado?V(e,c):d.numeroFilas===2&&d.numeroColumnas===2?z(e,c):Y(e,c)}switch(a){case"chi-cuadrado":case"chi-cuadrado-independencia":case"chi-cuadrado-independencia-2x2":case"chi-cuadrado-independencia-rxc":return V(e,c);case"fisher":case"fisher-exacta":case"fisher-exacta-2x2":return z(e,c);case"fisher-freeman-halton":return Y(e,c);default:throw new Error("La prueba de asociación solicitada no está disponible.")}}function ye(){const e=document.createElement("section");e.className=`
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
                    ${P("Chi-cuadrado de independencia","Úselo cuando las frecuencias esperadas sean adecuadas. Funciona con tablas 2 × 2 y r × c.")}
                    ${P("Prueba exacta de Fisher","Corresponde a tablas 2 × 2 con muestras pequeñas o frecuencias esperadas bajas.")}
                    ${P("Fisher–Freeman–Halton","Extiende el análisis exacto a tablas mayores que 2 × 2. La calculadora utiliza enumeración completa o Monte Carlo.")}
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
    `;const a=e.querySelector("#formulario-asociacion-categorica"),t=e.querySelector("#contenedor-tabla-contingencia"),r=e.querySelector("#mensaje-error-asociacion"),s=e.querySelector("#resultados-asociacion-categorica");let o=2,n=2;const l=sessionStorage.getItem("kernel-prueba-asociacion-categorica");return["chi-cuadrado-independencia-2x2","chi-cuadrado-independencia-rxc","fisher-exacta-2x2","fisher-freeman-halton"].includes(l)&&(a.elements.prueba.value=l.startsWith("chi-cuadrado")?"chi-cuadrado-independencia":l),sessionStorage.removeItem("kernel-prueba-asociacion-categorica"),g(t,o,n),a.addEventListener("submit",c=>{c.preventDefault(),I(r);try{const d=G(t),i=se({tabla:d.tabla,etiquetasFilas:d.etiquetasFilas,etiquetasColumnas:d.etiquetasColumnas,prueba:a.elements.prueba.value,nivelConfianza:Number(a.elements.nivelConfianza.value),maximoTablasExactas:5e4,simulaciones:1e4});s.innerHTML=ue(i),s.classList.remove("hidden"),s.scrollIntoView({behavior:"smooth",block:"start"})}catch(d){s.classList.add("hidden"),y(r,d instanceof Error?d.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",c=>{const d=c.target.closest("[data-action]");if(!d)return;const i=d.dataset.action;if(i==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}const u=ne(t);if(i==="agregar-fila"){if(o>=6){y(r,"Esta interfaz admite hasta seis filas.");return}o+=1,g(t,o,n,u),le(t,o),s.classList.add("hidden");return}if(i==="quitar-fila"){if(o<=2){y(r,"La tabla debe conservar al menos dos filas.");return}o-=1,g(t,o,n,u),s.classList.add("hidden");return}if(i==="agregar-columna"){if(n>=6){y(r,"Esta interfaz admite hasta seis columnas.");return}n+=1,g(t,o,n,u),ce(t,n),s.classList.add("hidden");return}if(i==="quitar-columna"){if(n<=2){y(r,"La tabla debe conservar al menos dos columnas.");return}n-=1,g(t,o,n,u),s.classList.add("hidden");return}if(i==="cargar-ejemplo"){const m=a.elements.prueba.value,b=de(m);o=b.tabla.length,n=b.tabla[0].length,g(t,o,n),ie(t,b),a.elements.nivelConfianza.value="0.95",s.classList.add("hidden"),I(r);return}i==="limpiar"&&(o=2,n=2,a.reset(),g(t,o,n),s.innerHTML="",s.classList.add("hidden"),I(r))}),e}function P(e,a){return`
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
    `}function g(e,a,t,r=null){const s=Array.from({length:t},(n,l)=>`
            <th scope="col" class="min-w-[145px] bg-slate-100 px-3 py-3">
                <input
                    type="text"
                    data-etiqueta-columna="${l}"
                    value="${N(r?.etiquetasColumnas?.[l]??`Columna ${l+1}`)}"
                    class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                    aria-label="Etiqueta de la columna ${l+1}"
                >
            </th>
        `).join(""),o=Array.from({length:a},(n,l)=>{const c=Array.from({length:t},(d,i)=>`
                    <td class="px-3 py-3">
                        <input
                            type="number"
                            min="0"
                            step="1"
                            inputmode="numeric"
                            data-frecuencia
                            data-fila="${l}"
                            data-columna="${i}"
                            value="${N(r?.tabla?.[l]?.[i]??"")}"
                            class="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-right font-mono text-slate-900"
                            aria-label="Frecuencia de la fila ${l+1}, columna ${i+1}"
                        >
                    </td>
                `).join("");return`
                <tr class="border-t border-slate-200">
                    <th scope="row" class="sticky left-0 min-w-[170px] bg-slate-50 px-3 py-3 z-10">
                        <input
                            type="text"
                            data-etiqueta-fila="${l}"
                            value="${N(r?.etiquetasFilas?.[l]??`Fila ${l+1}`)}"
                            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                            aria-label="Etiqueta de la fila ${l+1}"
                        >
                    </th>
                    ${c}
                </tr>
            `}).join("");e.innerHTML=`
        <table class="min-w-full text-sm">
            <caption class="sr-only">
                Tabla editable de frecuencias observadas por categorías de fila y columna
            </caption>
            <thead>
                <tr>
                    <th scope="col" class="sticky left-0 min-w-[170px] bg-slate-200 px-3 py-3 text-left font-black text-slate-700 z-20">
                        Categorías
                    </th>
                    ${s}
                </tr>
            </thead>
            <tbody>
                ${o}
            </tbody>
        </table>
    `}function ne(e){try{return G(e,!1)}catch{return{tabla:[],etiquetasFilas:[],etiquetasColumnas:[]}}}function G(e,a=!0){const t=[...e.querySelectorAll("[data-etiqueta-fila]")].map((l,c)=>l.value.trim()||`Fila ${c+1}`),r=[...e.querySelectorAll("[data-etiqueta-columna]")].map((l,c)=>l.value.trim()||`Columna ${c+1}`),s=t.length,o=r.length,n=Array.from({length:s},()=>new Array(o).fill(""));return[...e.querySelectorAll("[data-frecuencia]")].forEach(l=>{const c=Number(l.dataset.fila),d=Number(l.dataset.columna),i=l.value.trim();if(a&&i==="")throw new Error(`Complete la frecuencia de la celda (${c+1}, ${d+1}).`);n[c][d]=i}),{tabla:n,etiquetasFilas:t,etiquetasColumnas:r}}function ie(e,a){a.etiquetasFilas.forEach((t,r)=>{e.querySelector(`[data-etiqueta-fila="${r}"]`).value=t}),a.etiquetasColumnas.forEach((t,r)=>{e.querySelector(`[data-etiqueta-columna="${r}"]`).value=t}),a.tabla.forEach((t,r)=>{t.forEach((s,o)=>{e.querySelector(`[data-fila="${r}"][data-columna="${o}"]`).value=s})})}function le(e,a){const t=e.querySelector(`[data-etiqueta-fila="${a-1}"]`);t&&(t.value=`Fila ${a}`)}function ce(e,a){const t=e.querySelector(`[data-etiqueta-columna="${a-1}"]`);t&&(t.value=`Columna ${a}`)}function de(e){return e==="fisher-exacta-2x2"?{etiquetasFilas:["Intervención","Control"],etiquetasColumnas:["Aprobó","No aprobó"],tabla:[[8,2],[1,5]]}:e==="fisher-freeman-halton"?{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[1,4,2],[3,1,1],[1,2,5]]}:{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[18,22,10],[30,15,5],[12,20,18]]}}function ue(e){const a=Math.round(e.nivelConfianza*100),t=e.significativo,r=t?`Se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${x(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${x(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${w(e.estadistico.simbolo,v(e.estadistico.valor),"Estadístico principal")}
                    ${w("p",ve(e.valorP),e.detallesExactos?.exacta===!1?"Valor p Monte Carlo":"Valor p bilateral")}
                    ${w("N",e.tabla.total,"Observaciones")}
                    ${w("gl",e.gradosLibertad??"—","Grados de libertad")}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${me(e)}
                    ${be(e)}
                </div>

                ${pe(e)}
                ${fe(e)}
                ${xe(e)}
                ${ge(e)}
                ${he(e)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${r} La magnitud orientativa de la asociación es ${e.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${a} %. Una asociación estadística no demuestra causalidad. Examine también los residuos ajustados y la calidad del diseño muestral.
                    </p>
                </article>
            </div>
        </section>
    `}function w(e,a,t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${t}
            </p>
        </article>
    `}function me(e){const a=e.tamanioEfecto;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Tamaño de la asociación
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${e.tabla.numeroFilas===2&&e.tabla.numeroColumnas===2?f("Phi",a.phi):""}
                ${f("V de Cramer",a.vCramer)}
                ${f("V corregido",a.vCramerCorregido)}
                ${f("Magnitud",a.magnitud,!0)}
            </dl>
        </article>
    `}function be(e){const a=e.diagnosticoFrecuenciasEsperadas;return`
        <article class="rounded-2xl border ${a.adecuado?"border-emerald-200 bg-emerald-50":"border-amber-200 bg-amber-50"} p-6">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                Frecuencias esperadas
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${f("Mínima esperada",a.minimo)}
                ${f("Celdas < 5",a.menoresQueCinco)}
                ${f("Porcentaje < 5",a.porcentajeMenoresQueCinco,!1," %")}
                ${f("Celdas < 1",a.menoresQueUno)}
            </dl>
            <p class="text-sm text-slate-700 leading-relaxed mt-4">
                ${x(a.criterio)}
            </p>
        </article>
    `}function pe(e){const a=e.tabla,t=a.etiquetasColumnas.map(s=>`
                    <th scope="col" class="px-4 py-3 text-center min-w-[150px]">
                        ${x(s)}
                    </th>
                `).join(""),r=a.observadas.map((s,o)=>`
                <tr class="border-t border-slate-200">
                    <th scope="row" class="sticky left-0 bg-slate-50 px-4 py-4 text-left font-black text-slate-900 z-10">
                        ${x(a.etiquetasFilas[o])}
                    </th>
                    ${s.map((n,l)=>{const c=a.esperadas[o][l],d=e.residuos.ajustados[o][l],i=Math.abs(d)>=1.96;return`
                                    <td class="px-4 py-4 text-center ${i?"bg-amber-50":""}">
                                        <p class="font-black text-slate-900">
                                            ${n}
                                        </p>
                                        <p class="text-xs text-slate-500 mt-1">
                                            Esperada: ${v(c)}
                                        </p>
                                        <p class="text-xs ${i?"text-amber-800 font-black":"text-slate-500"} mt-1">
                                            Residuo ajustado: ${v(d)}
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
                    <caption class="sr-only">
                        Frecuencias observadas, esperadas y residuos ajustados por categoría
                    </caption>
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th scope="col" class="sticky left-0 bg-slate-200 px-4 py-3 text-left z-20">
                                Categoría
                            </th>
                            ${t}
                        </tr>
                    </thead>
                    <tbody>
                        ${r}
                    </tbody>
                </table>
            </div>
        </article>
    `}function fe(e){if(!e.oddsRatio)return"";const a=e.oddsRatio,t=e.correccionYates;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Odds ratio
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${f("OR",a.oddsRatio)}
                    ${f("IC inferior",a.intervaloConfianza.inferior)}
                    ${f("IC superior",a.intervaloConfianza.superior)}
                    ${f("Corrección 0.5",a.correccionAplicada?"Aplicada":"No aplicada",!0)}
                </dl>
                <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                    ${x(a.intervaloConfianza.metodo)}
                </p>
            </article>

            ${t?.disponible?`
                        <article class="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                            <h3 class="text-xl font-black text-sky-950 mb-5">
                                Corrección de continuidad de Yates
                            </h3>
                            <dl class="grid grid-cols-2 gap-4">
                                ${f("χ² de Yates",t.estadistico)}
                                ${f("p de Yates",t.valorP)}
                            </dl>
                            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                                Se muestra como resultado complementario para tablas 2 × 2.
                            </p>
                        </article>
                    `:""}
        </div>
    `}function xe(e){const a=e.detallesExactos;return a?`
        <article class="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 class="text-xl font-black text-indigo-950 mb-5">
                Detalles del procedimiento exacto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${typeof a.exacta=="boolean"?f("Procedimiento",a.exacta?"Exacto":"Monte Carlo",!0):f("Procedimiento","Exacto 2 × 2",!0)}
                ${Number.isFinite(a.tablasEvaluadas)?f("Tablas evaluadas",a.tablasEvaluadas):""}
                ${Number.isFinite(a.simulaciones)&&a.simulaciones>0?f("Simulaciones",a.simulaciones):""}
                ${Number.isFinite(a.errorMonteCarlo)&&a.errorMonteCarlo>0?f("Error Monte Carlo",a.errorMonteCarlo):""}
            </dl>
            <p class="text-sm text-indigo-900 mt-4 leading-relaxed">
                ${x(e.metodo)}
            </p>
        </article>
    `:""}function ge(e){const a=e.residuos.celdasDestacadas;return a.length?`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Celdas que contribuyen a la asociación
            </h3>
            <ul class="space-y-3 text-amber-900">
                ${a.map(t=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>
                                    ${x(e.tabla.etiquetasFilas[t.fila])} ×
                                    ${x(e.tabla.etiquetasColumnas[t.columna])}:
                                    ${x(t.direccion)}
                                    (residuo = ${v(t.residuo)}).
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
        `}function he(e){return e.advertencias?.length?`
        <article class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 class="text-xl font-black text-red-950 mb-4">
                Advertencias
            </h3>
            <ul class="space-y-2 text-red-900">
                ${e.advertencias.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>${x(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:""}function f(e,a,t=!1,r=""){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${t?x(a):`${v(a)}${r}`}
            </dd>
        </div>
    `}function v(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function ve(e){return Number.isFinite(e)?e<.001?"< 0.001":v(e,4):"—"}function y(e,a){e.textContent=a,e.classList.remove("hidden")}function I(e){e.textContent="",e.classList.add("hidden")}function x(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function N(e){return x(e)}export{ye as CalculadoraAsociacionCategorica};
