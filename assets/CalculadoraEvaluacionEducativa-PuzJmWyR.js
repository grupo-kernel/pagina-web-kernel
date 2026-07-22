function P(e){return e.reduce((t,a)=>t+a,0)/e.length}function ae(e){const t=[...e].sort((n,o)=>n-o),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function L(e){if(e.length<2)return null;const t=P(e);return e.reduce((a,n)=>a+(n-t)**2,0)/(e.length-1)}function K(e){const t=L(e);return t===null?null:Math.sqrt(Math.max(t,0))}function re(e,t){if(e.length!==t.length||e.length<2)return null;const a=P(e),n=P(t);return e.reduce((o,l,r)=>o+(l-a)*(t[r]-n),0)/(e.length-1)}function ne(e,t){const a=re(e,t),n=K(e),o=K(t);return a===null||n===null||o===null||n<1e-12||o<1e-12?null:Math.max(-1,Math.min(1,a/(n*o)))}function H(e){return String(e??"").trim().toUpperCase()}function ie({respuestas:e,clave:t,nombresItems:a,idsEstudiantes:n,modo:o}){if(!Array.isArray(e)||e.length<5)throw new Error("Se requieren al menos cinco estudiantes con respuestas completas.");if(!Array.isArray(e[0])||e[0].length<3)throw new Error("La evaluación debe contener al menos tres preguntas.");const l=e[0].length;if(!e.every(u=>Array.isArray(u)&&u.length===l))throw new Error("Todas las filas deben contener la misma cantidad de preguntas.");const r=Array.from({length:l},(u,s)=>String(a?.[s]??"").trim()||`Pregunta ${s+1}`),i=Array.from({length:e.length},(u,s)=>String(n?.[s]??"").trim()||`E${String(s+1).padStart(3,"0")}`);if(o==="binario"){const u=e.map((s,b)=>s.map((v,f)=>{const p=Number(v);if(!(p===0||p===1))throw new Error(`La fila ${b+1}, ${r[f]}, debe contener 0 o 1.`);return p}));return{matriz:u,respuestasNormalizadas:u.map(s=>s.map(String)),claveNormalizada:Array(l).fill("1"),nombres:r,ids:i}}if(!Array.isArray(t)||t.length!==l)throw new Error(`La clave debe contener exactamente ${l} respuestas.`);const c=t.map(H);if(c.some(u=>!u))throw new Error("La clave contiene una respuesta vacía.");const d=e.map((u,s)=>u.map((b,v)=>{const f=H(b);if(!f)throw new Error(`La fila ${s+1}, ${r[v]}, contiene una respuesta vacía.`);return f}));return{matriz:d.map(u=>u.map((s,b)=>s===c[b]?1:0)),respuestasNormalizadas:d,claveNormalizada:c,nombres:r,ids:i}}function X(e){const t=e[0].length,a=e.map(l=>l.reduce((r,i)=>r+i,0)),n=L(a);if(n===null||n<1e-12)return null;const o=Array.from({length:t},(l,r)=>L(e.map(i=>i[r]))??0).reduce((l,r)=>l+r,0);return t/(t-1)*(1-o/n)}function se(e){return e<=.2?"Muy difícil":e<=.4?"Difícil":e<=.6?"Moderada":e<=.8?"Fácil":"Muy fácil"}function oe(e){return e<0?"Negativa":e<.2?"Deficiente":e<.3?"Marginal":e<.4?"Buena":"Excelente"}function le(e){return e===null?"No calculable":e<0?"Negativa":e<.2?"Débil":e<.3?"Aceptable con revisión":e<.4?"Buena":"Muy buena"}function ce(e){const t=Math.min(...e),a=Math.max(...e);return Array.from({length:a-t+1},(n,o)=>{const l=t+o;return{puntuacion:l,frecuencia:e.filter(r=>r===l).length}})}function de(e,t){const a=e.length,n=Math.max(1,Math.min(Math.floor(a/2),Math.floor(a*t))),o=e.map((l,r)=>({total:l,indice:r})).sort((l,r)=>r.total-l.total||l.indice-r.indice);return{tamano:n,superiores:o.slice(0,n).map(l=>l.indice),inferiores:o.slice(-n).map(l=>l.indice)}}function ue({respuestas:e,clave:t,nombres:a,superiores:n,inferiores:o}){return a.map((l,r)=>{const c=[...new Set([t[r],...e.map(s=>s[r])])].sort().map(s=>{const b=e.filter(C=>C[r]===s).length,v=n.filter(C=>e[C][r]===s).length,f=o.filter(C=>e[C][r]===s).length,p=s===t[r],y=b/e.length,D=v/Math.max(n.length,1),E=f/Math.max(o.length,1),N=p?null:y>=.05&&E>D;return{opcion:s,esClave:p,seleccionTotal:b,proporcionTotal:y,seleccionSuperior:v,proporcionSuperior:D,seleccionInferior:f,proporcionInferior:E,funcional:N,observacion:p?"Clave":y<.05?"Distractor no funcional: selección inferior al 5 %.":E<=D?"Distractor débil: no atrae más al grupo inferior.":"Distractor funcional."}}),d=c.find(s=>s.esClave),m=c.filter(s=>!s.esClave).sort((s,b)=>b.seleccionTotal-s.seleccionTotal)[0]??null,u=!!(m&&d&&m.seleccionTotal>d.seleccionTotal);return{indice:r+1,nombre:l,clave:t[r],opciones:c,distractoresNoFuncionales:c.filter(s=>!s.esClave&&s.funcional===!1).length,posibleClaveErronea:u}})}function pe({dificultad:e,discriminacion:t,puntoBiserial:a,posibleClaveErronea:n,distractoresNoFuncionales:o}){return n||t<0||a!==null&&a<0?{decision:"Revisión urgente",razon:"Existen indicadores negativos o una posible inconsistencia en la clave."}:e<.05||e>.95?{decision:"Revisar",razon:"La pregunta es extremadamente difícil o fácil y aporta poca diferenciación."}:t>=.3&&a!==null&&a>=.2?{decision:o?"Conservar y mejorar distractores":"Conservar",razon:o?"El ítem discrimina adecuadamente, pero tiene distractores débiles.":"Dificultad y discriminación compatibles con un ítem útil."}:{decision:"Revisar",razon:"La discriminación o la correlación punto-biserial no alcanzan niveles recomendables."}}function me({respuestas:e,clave:t=[],nombresItems:a=[],idsEstudiantes:n=[],modo:o="opciones",proporcionGrupos:l=.27,filasExcluidas:r=0}){if(!(l>0&&l<=.5))throw new Error("La proporción de grupos extremos debe estar entre 0 y 0.50.");const i=ie({respuestas:e,clave:t,nombresItems:a,idsEstudiantes:n,modo:o}),c=i.matriz,d=c.length,m=c[0].length,u=c.map(x=>x.reduce((h,S)=>h+S,0)),s=de(u,l),b=o==="opciones"?ue({respuestas:i.respuestasNormalizadas,clave:i.claveNormalizada,nombres:i.nombres,superiores:s.superiores,inferiores:s.inferiores}):i.nombres.map((x,h)=>({indice:h+1,nombre:x,clave:"1",opciones:[],distractoresNoFuncionales:0,posibleClaveErronea:!1})),v=i.nombres.map((x,h)=>{const S=c.map(w=>w[h]),R=P(S),Z=c.map(w=>w.reduce((F,T,te)=>te===h?F:F+T,0)),q=ne(S,Z),J=s.superiores.filter(w=>c[w][h]===1).length,Q=s.inferiores.filter(w=>c[w][h]===1).length,G=J/s.tamano,_=Q/s.tamano,I=G-_,W=m>2?X(c.map(w=>w.filter((F,T)=>T!==h))):null,j=b[h],ee=pe({dificultad:R,discriminacion:I,puntoBiserial:q,posibleClaveErronea:j.posibleClaveErronea,distractoresNoFuncionales:j.distractoresNoFuncionales});return{indice:h+1,nombre:x,clave:i.claveNormalizada[h],dificultad:R,clasificacionDificultad:se(R),discriminacion:I,clasificacionDiscriminacion:oe(I),puntoBiserial:q,clasificacionPuntoBiserial:le(q),proporcionSuperior:G,proporcionInferior:_,alfaSiSeElimina:W,distractoresNoFuncionales:j.distractoresNoFuncionales,posibleClaveErronea:j.posibleClaveErronea,recomendacion:ee}}),f=X(c),p=P(u),y=K(u),D=u.map((x,h)=>({id:i.ids[h],total:x,porcentaje:x/m*100})),E=[];d<30&&E.push("La muestra contiene menos de 30 estudiantes; los indicadores por ítem pueden ser inestables."),s.tamano<5&&E.push("Cada grupo extremo contiene menos de cinco estudiantes; interprete la discriminación con mucha cautela."),r>0&&E.push(`Se excluyeron ${r} filas por respuestas ausentes o incompletas.`),v.some(x=>x.posibleClaveErronea)&&E.push("Al menos una pregunta presenta un distractor más seleccionado que la clave; revise la clave y la redacción.");const N=v.filter(x=>x.recomendacion.decision==="Conservar").length,C=v.filter(x=>x.recomendacion.decision==="Revisión urgente").length,Y=[f===null?"KR-20 no pudo calcularse porque la puntuación total no presenta variabilidad suficiente.":f<.7?`KR-20 es ${f.toFixed(3)}, inferior al valor orientativo de 0.70; la consistencia de la prueba requiere revisión.`:f<.9?`KR-20 es ${f.toFixed(3)}, compatible con una consistencia interna generalmente aceptable.`:`KR-20 es ${f.toFixed(3)}, muy elevado; revise posible redundancia entre preguntas.`,`La puntuación media fue ${p.toFixed(2)} de ${m}, con desviación estándar ${y?.toFixed(2)??"no disponible"}.`,`${N} de ${m} preguntas cumplen automáticamente los criterios de conservación sin alertas adicionales.`,C?`${C} preguntas requieren revisión urgente por indicadores negativos o posible problema de clave.`:"No se detectaron preguntas con criterios automáticos de revisión urgente.","La decisión final debe considerar el contenido curricular, el propósito de la evaluación y evidencia adicional de validez."];return{tipoAnalisis:"evaluacion-educativa",modo:o,n:d,k:m,nombresItems:i.nombres,idsEstudiantes:i.ids,clave:i.claveNormalizada,filasExcluidas:r,proporcionGrupos:l,gruposExtremos:{tamano:s.tamano,idsSuperiores:s.superiores.map(x=>i.ids[x]),idsInferiores:s.inferiores.map(x=>i.ids[x])},matrizPuntuada:c,puntuaciones:D,resumenPuntuaciones:{media:p,mediana:ae(u),desviacion:y,varianza:L(u),minimo:Math.min(...u),maximo:Math.max(...u),histograma:ce(u)},fiabilidad:{kr20:f},items:v,distractores:b,advertencias:E,interpretacion:Y}}function A(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function M(e,t,a){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">
                ${t}
            </p>
            ${a}
        </article>
    `}function O({filas:e,titulo:t,descripcion:a,valor:n,etiquetaValor:o,minimo:l=0,maximo:r=1,umbrales:i=[]}){const d=Math.max(r-l,1e-9),m=u=>Math.max(3,Math.min(190,(u-l)/d*190));return M(t,a,`<div class="overflow-x-auto">
            <div class="relative flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${i.map(u=>`
                    <div
                        class="absolute left-0 right-0 border-t border-dashed border-slate-400"
                        style="bottom:${24+m(u.valor)}px"
                        title="${A(u.etiqueta)}"
                    ></div>
                `).join("")}
                ${e.map(u=>{const s=n(u),b=s<0;return`
                        <div class="flex flex-col items-center justify-end min-w-[54px] h-full px-1">
                            <span class="text-[10px] font-black text-slate-700 mb-1">
                                ${Number(s).toFixed(2)}
                            </span>
                            <div
                                class="w-8 ${b?"bg-red-600":"bg-emerald-600"} rounded-t"
                                style="height:${m(s)}px"
                                title="${A(u.nombre)}: ${Number(s).toFixed(4)}"
                            ></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-words max-w-[70px]">
                                ${A(u.nombre)}
                            </span>
                        </div>
                    `}).join("")}
            </div>
            <p class="mt-3 text-xs text-slate-500">
                ${A(o)}
            </p>
        </div>`)}function xe(e){return O({filas:e.items,titulo:"Índice de dificultad",descripcion:"El índice representa la proporción de estudiantes que respondió correctamente. Valores cercanos a 1 indican preguntas fáciles.",valor:t=>t.dificultad,etiquetaValor:"Zona orientativa de mayor utilidad general: aproximadamente 0.20 a 0.80.",minimo:0,maximo:1,umbrales:[{valor:.2,etiqueta:"Límite inferior orientativo"},{valor:.8,etiqueta:"Límite superior orientativo"}]})}function be(e){const t=Math.min(-.25,...e.items.map(a=>a.discriminacion));return O({filas:e.items,titulo:"Índice de discriminación",descripcion:"Compara la proporción de aciertos del grupo superior con la del grupo inferior. Valores negativos requieren revisión urgente.",valor:a=>a.discriminacion,etiquetaValor:"Como orientación, valores de 0.30 o más suelen indicar una discriminación útil.",minimo:t,maximo:1,umbrales:[{valor:0,etiqueta:"Discriminación nula"},{valor:.3,etiqueta:"Criterio orientativo de 0.30"}]})}function fe(e){const t=Math.min(-.25,...e.items.map(a=>a.puntoBiserial??0));return O({filas:e.items,titulo:"Correlación punto-biserial corregida",descripcion:"Relaciona el acierto en cada pregunta con la puntuación obtenida en el resto de la prueba.",valor:a=>a.puntoBiserial??0,etiquetaValor:"Valores de 0.20 o más aportan evidencia favorable; valores negativos sugieren problemas de clave, redacción o contenido.",minimo:t,maximo:1,umbrales:[{valor:0,etiqueta:"Correlación nula"},{valor:.2,etiqueta:"Criterio orientativo de 0.20"}]})}function ve(e){const i=d=>58+d*534,c=d=>305-(d+.5)/1.5*281;return M("Mapa de calidad de las preguntas","Combina dificultad y discriminación. El cuadrante de dificultad intermedia y discriminación positiva suele ser el más favorable.",`<div class="overflow-x-auto">
            <svg viewBox="0 0 620 360" class="min-w-[580px] w-full" role="img" aria-label="Mapa de dificultad y discriminación">
                <rect x="${i(.2)}" y="${c(1)}" width="${i(.8)-i(.2)}" height="${c(.3)-c(1)}" fill="currentColor" class="text-emerald-100" opacity="0.7"></rect>
                <line x1="58" y1="305" x2="592" y2="305" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="58" y1="24" x2="58" y2="305" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="58" y1="${c(0)}" x2="592" y2="${c(0)}" stroke="currentColor" stroke-dasharray="5 5" class="text-red-400"></line>
                <line x1="${i(.2)}" y1="24" x2="${i(.2)}" y2="305" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                <line x1="${i(.8)}" y1="24" x2="${i(.8)}" y2="305" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                <line x1="58" y1="${c(.3)}" x2="592" y2="${c(.3)}" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                ${e.items.map(d=>`
                    <circle
                        cx="${i(d.dificultad)}"
                        cy="${c(d.discriminacion)}"
                        r="7"
                        fill="currentColor"
                        class="${d.discriminacion<0?"text-red-600":d.recomendacion.decision==="Conservar"?"text-emerald-700":"text-amber-600"}"
                    >
                        <title>${A(d.nombre)}: dificultad ${d.dificultad.toFixed(3)}, discriminación ${d.discriminacion.toFixed(3)}</title>
                    </circle>
                    <text x="${i(d.dificultad)+9}" y="${c(d.discriminacion)-7}" font-size="10" fill="currentColor" class="text-slate-700">${d.indice}</text>
                `).join("")}
                <text x="${620/2}" y="347" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Índice de dificultad</text>
                <text x="16" y="${360/2}" transform="rotate(-90 16 ${360/2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Discriminación</text>
            </svg>
        </div>`)}function he(e){const t=e.resumenPuntuaciones.histograma,a=Math.max(...t.map(n=>n.frecuencia),1);return M("Distribución de puntuaciones","Muestra la frecuencia de cada puntuación total obtenida en la prueba.",`<div class="overflow-x-auto">
            <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${t.map(n=>`
                    <div class="flex flex-col items-center justify-end min-w-[42px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${n.frecuencia}</span>
                        <div class="w-7 bg-sky-700 rounded-t" style="height:${Math.max(3,n.frecuencia/a*190)}px"></div>
                        <span class="text-[10px] text-slate-500 mt-2">${n.puntuacion}</span>
                    </div>
                `).join("")}
            </div>
        </div>`)}function ge(e){const t=e.items,a=Math.max(...t.map(n=>n.distractoresNoFuncionales),1);return M("Distractores no funcionales",e.modo==="opciones"?"Cuenta las alternativas incorrectas seleccionadas por menos del 5 % o que no atraen más al grupo inferior.":"El análisis de distractores no aplica a una matriz ya codificada como 0/1.",e.modo==="opciones"?`<div class="overflow-x-auto">
                <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                    ${t.map(n=>`
                        <div class="flex flex-col items-center justify-end min-w-[54px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${n.distractoresNoFuncionales}</span>
                            <div class="w-8 ${n.distractoresNoFuncionales?"bg-amber-600":"bg-emerald-600"} rounded-t" style="height:${Math.max(3,n.distractoresNoFuncionales/a*190)}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center">${A(n.nombre)}</span>
                        </div>
                    `).join("")}
                </div>
            </div>`:'<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">Introduzca respuestas por alternativa y una clave para analizar distractores.</div>')}function ye(e){return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Diagnóstico visual
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Gráficos de la evaluación
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Interprete conjuntamente dificultad, discriminación, relación con la puntuación total, distribución de resultados y funcionamiento de las alternativas.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${xe(e)}
                ${be(e)}
                ${fe(e)}
                ${ve(e)}
                ${he(e)}
                ${ge(e)}
            </div>
        </section>
    `}function Me(){const e=document.createElement("section");let t=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-emerald-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-cyan-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-emerald-300 text-xs md:text-sm font-black mb-3">
                    Análisis clásico de pruebas
                </p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Evaluación educativa
                </h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Examine la calidad de las preguntas, la fiabilidad de la prueba, el funcionamiento de los distractores y la distribución de las puntuaciones.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Dificultad</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Discriminación</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Punto-biserial</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">KR-20</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Distractores</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.68fr_1.32fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                    Preparación de los datos
                </p>
                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una persona por fila y una pregunta por columna
                </h2>
                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${B("Respuestas por alternativa","Introduzca A, B, C, D u otras etiquetas y escriba la clave correcta en el campo correspondiente.")}
                    ${B("Matriz 0/1","Utilice 1 para respuesta correcta y 0 para incorrecta cuando los datos ya estén puntuados.")}
                    ${B("Identificador","Puede reservar la primera columna para el código o nombre del estudiante; esa columna no se puntuará.")}
                    ${B("Grupos extremos","La discriminación compara los grupos superior e inferior. El 27 % es el criterio clásico más utilizado.")}
                    ${B("Distractores","Un distractor es funcional cuando atrae una proporción suficiente de estudiantes y es elegido más por el grupo inferior.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Los indicadores no sustituyen la revisión curricular ni demuestran por sí solos validez. Una pregunta puede ser difícil y, aun así, ser apropiada para el propósito de la prueba.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-evaluacion-educativa"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Tipo de datos</span>
                        <select name="modo" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-100">
                            <option value="opciones">Alternativas con clave</option>
                            <option value="binario">Matriz codificada 0/1</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Grupos extremos</span>
                        <select name="proporcionGrupos" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-100">
                            <option value="0.25">25 %</option>
                            <option value="0.27" selected>27 %</option>
                            <option value="0.33">33 %</option>
                        </select>
                    </label>

                    <label class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-800">
                        <input type="checkbox" name="tieneEncabezados" checked class="w-5 h-5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500" />
                        Primera fila = encabezados
                    </label>

                    <label class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-800">
                        <input type="checkbox" name="tieneId" checked class="w-5 h-5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500" />
                        Primera columna = identificador
                    </label>
                </div>

                <label class="block mt-6" data-campo-clave>
                    <span class="block text-sm font-black text-slate-800 mb-2">Clave de respuestas</span>
                    <input
                        type="text"
                        name="clave"
                        placeholder="Ej.: A, C, B, D, A"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 font-mono focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500"
                    />
                    <span class="block text-xs text-slate-500 mt-2">
                        Escriba una respuesta por pregunta, separada por coma, punto y coma o tabulación.
                    </span>
                </label>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">Respuestas de los estudiantes</span>
                    <textarea
                        name="datos"
                        rows="17"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500"
                        placeholder="Estudiante, P1, P2, P3
E01, A, C, B
E02, B, C, B"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Las filas incompletas se excluirán y se informará su cantidad.
                    </span>
                </label>

                <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 class="font-black text-slate-900">Importar archivo</h3>
                            <p class="text-sm text-slate-600 mt-1">Admite CSV o TXT con la misma estructura.</p>
                        </div>
                        <input
                            type="file"
                            name="archivo"
                            accept=".csv,.txt,text/csv,text/plain"
                            class="block text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-3 file:font-black file:text-white hover:file:bg-slate-800"
                        />
                    </div>
                </div>

                <div
                    id="mensaje-error-evaluacion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button type="submit" class="inline-flex items-center justify-center bg-emerald-700 text-white font-black rounded-xl px-7 py-4 hover:bg-emerald-800 transition-colors shadow-lg">
                        Analizar evaluación
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button type="button" data-action="cargar-opciones" class="inline-flex items-center justify-center border border-emerald-300 text-emerald-800 font-black rounded-xl px-6 py-4 hover:bg-emerald-50 transition-colors">Ejemplo con alternativas</button>
                    <button type="button" data-action="cargar-binario" class="inline-flex items-center justify-center border border-sky-300 text-sky-800 font-black rounded-xl px-6 py-4 hover:bg-sky-50 transition-colors">Ejemplo 0/1</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors">Limpiar</button>
                </div>
            </form>
        </section>

        <section id="resultados-evaluacion-educativa" class="hidden mt-8" aria-live="polite"></section>
    `;const a=e.querySelector("#formulario-evaluacion-educativa"),n=e.querySelector("#mensaje-error-evaluacion"),o=e.querySelector("#resultados-evaluacion-educativa"),l=a.querySelector("[data-campo-clave]"),r=a.elements.archivo,i=()=>{const c=a.elements.modo.value==="binario";l.classList.toggle("hidden",c),a.elements.clave.disabled=c};return i(),a.elements.modo.addEventListener("change",i),r.addEventListener("change",async()=>{const c=r.files?.[0];if(c)try{a.elements.datos.value=await c.text(),z(n)}catch{V(n,"No fue posible leer el archivo seleccionado.")}}),a.addEventListener("submit",c=>{c.preventDefault(),z(n);try{const d=Ce(a);t=me(d),o.innerHTML=Pe(t),o.classList.remove("hidden"),o.scrollIntoView({behavior:"smooth",block:"start"})}catch(d){o.classList.add("hidden"),V(n,d instanceof Error?d.message:"No fue posible analizar la evaluación.")}}),e.addEventListener("click",async c=>{const d=c.target.closest("[data-action]");if(!d)return;const m=d.dataset.action;if(m==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(m==="cargar-opciones"){ke(a),i(),o.classList.add("hidden"),z(n);return}if(m==="cargar-binario"){Ae(a),i(),o.classList.add("hidden"),z(n);return}if(m==="limpiar"){a.reset(),a.elements.modo.value="opciones",a.elements.tieneEncabezados.checked=!0,a.elements.tieneId.checked=!0,a.elements.datos.value="",a.elements.clave.value="",i(),o.classList.add("hidden"),z(n);return}if(t)if(m==="exportar-csv")Le(t);else if(m==="copiar-reporte")try{await navigator.clipboard.writeText(Se(t));const u=d.textContent;d.textContent="Reporte copiado",setTimeout(()=>{d.textContent=u},1600)}catch{V(n,"El navegador no permitió copiar el reporte.")}else m==="imprimir"&&window.print()}),e}function B(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function $e(e){return e.includes("	")?"	":e.includes(";")?";":","}function Ee(e){return["","NA","N/A",".","NULL","MISSING"].includes(String(e??"").trim().toUpperCase())}function we(e){return String(e??"").split(/[,;\t]+/).map(t=>t.trim()).filter(Boolean)}function Ce(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca las respuestas antes de analizar la evaluación.");const a=t.split(/\r?\n/).map(p=>p.trim()).filter(Boolean),n=$e(a[0]),o=a.map(p=>p.split(n).map(y=>y.trim())),l=e.elements.tieneEncabezados.checked,r=e.elements.tieneId.checked;let i=l?o.shift():null;if(!o.length)throw new Error("No se encontraron filas de estudiantes.");const c=o[0].length;if(!o.every(p=>p.length===c))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");if(i&&i.length!==c)throw new Error("La fila de encabezados no coincide con la cantidad de columnas.");i||(i=Array.from({length:c},(p,y)=>r&&y===0?"Estudiante":`Pregunta ${y+(r?0:1)}`));let d=0;const m=o.filter(p=>p.some(Ee)?(d+=1,!1):!0),u=r?m.map(p=>p[0]):m.map((p,y)=>`E${String(y+1).padStart(3,"0")}`),s=m.map(p=>r?p.slice(1):p),b=r?i.slice(1):i,v=e.elements.modo.value,f=v==="opciones"?we(e.elements.clave.value):[];return{respuestas:s,clave:f,nombresItems:b,idsEstudiantes:u,modo:v,proporcionGrupos:Number(e.elements.proporcionGrupos.value),filasExcluidas:d}}function ke(e){e.elements.modo.value="opciones",e.elements.tieneEncabezados.checked=!0,e.elements.tieneId.checked=!0,e.elements.proporcionGrupos.value="0.27",e.elements.clave.value="A, C, B, D, A, B, C, D",e.elements.datos.value=`Estudiante, P1, P2, P3, P4, P5, P6, P7, P8
E01, A, C, B, D, A, B, C, D
E02, A, C, B, D, A, B, C, D
E03, A, C, B, D, A, B, C, D
E04, A, C, B, D, A, B, C, D
E05, A, C, B, D, A, B, C, D
E06, A, C, B, D, A, B, C, A
E07, A, C, B, D, A, B, A, D
E08, A, C, B, D, A, D, C, D
E09, A, C, B, A, A, B, C, D
E10, A, C, D, D, A, B, C, D
E11, A, C, B, D, C, B, C, D
E12, A, B, B, D, A, B, C, D
E13, B, C, B, D, A, B, C, D
E14, A, C, B, C, A, D, C, D
E15, A, C, D, D, B, B, C, D
E16, B, C, B, A, A, B, D, D
E17, A, B, D, D, A, C, C, A
E18, C, C, B, B, B, B, C, D
E19, A, D, A, D, A, C, D, B
E20, B, B, D, C, C, A, A, D
E21, C, D, A, B, B, D, C, A
E22, D, B, C, A, C, C, B, B
E23, B, A, D, C, D, A, A, C
E24, C, B, A, B, C, D, D, A
E25, D, A, C, A, B, C, B, C
E26, B, D, A, C, D, A, D, B
E27, C, A, D, B, B, D, A, C
E28, D, B, A, C, C, A, B, A
E29, B, D, C, A, D, C, A, B
E30, C, A, D, B, B, A, D, C`}function Ae(e){e.elements.modo.value="binario",e.elements.tieneEncabezados.checked=!0,e.elements.tieneId.checked=!0,e.elements.proporcionGrupos.value="0.27",e.elements.clave.value="",e.elements.datos.value=`Estudiante, P1, P2, P3, P4, P5, P6
E01, 1, 1, 1, 1, 1, 1
E02, 1, 1, 1, 1, 1, 0
E03, 1, 1, 1, 1, 0, 1
E04, 1, 1, 1, 0, 1, 1
E05, 1, 1, 0, 1, 1, 1
E06, 1, 0, 1, 1, 1, 0
E07, 1, 1, 1, 0, 0, 1
E08, 1, 1, 0, 1, 0, 1
E09, 1, 0, 1, 1, 0, 0
E10, 0, 1, 1, 0, 1, 1
E11, 1, 0, 0, 1, 1, 0
E12, 0, 1, 0, 1, 0, 1
E13, 1, 0, 1, 0, 0, 0
E14, 0, 1, 0, 0, 1, 0
E15, 0, 0, 1, 0, 0, 1
E16, 1, 0, 0, 0, 0, 0
E17, 0, 1, 0, 0, 0, 0
E18, 0, 0, 1, 0, 0, 0
E19, 0, 0, 0, 1, 0, 0
E20, 0, 0, 0, 0, 1, 0
E21, 0, 0, 0, 0, 0, 1
E22, 0, 0, 0, 0, 0, 0
E23, 1, 0, 0, 1, 0, 0
E24, 0, 1, 1, 0, 0, 0`}function g(e,t=4){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:t}):"—"}function U(e,t=1){return Number.isFinite(Number(e))?`${(Number(e)*100).toLocaleString("es-DO",{maximumFractionDigits:t})} %`:"—"}function $(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function k(e,t,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">${e}</p>
            <p class="text-2xl font-black text-slate-900 break-words">${t}</p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">${a}</p>
        </article>
    `}function De(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Pregunta</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-left">Dificultad</th>
                        <th class="px-4 py-3 text-right">D</th>
                        <th class="px-4 py-3 text-left">Discriminación</th>
                        <th class="px-4 py-3 text-right">rpb</th>
                        <th class="px-4 py-3 text-right">KR-20 sin ítem</th>
                        <th class="px-4 py-3 text-left">Decisión</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.items.map(t=>`
                        <tr class="${t.recomendacion.decision==="Revisión urgente"?"bg-red-50":t.recomendacion.decision.includes("Revisar")?"bg-amber-50":""}">
                            <td class="px-4 py-3 font-black text-slate-900 min-w-[160px]">${t.indice}. ${$(t.nombre)}</td>
                            <td class="px-4 py-3 text-right">${g(t.dificultad,3)}</td>
                            <td class="px-4 py-3">${$(t.clasificacionDificultad)}</td>
                            <td class="px-4 py-3 text-right font-black">${g(t.discriminacion,3)}</td>
                            <td class="px-4 py-3">${$(t.clasificacionDiscriminacion)}</td>
                            <td class="px-4 py-3 text-right">${g(t.puntoBiserial,3)}</td>
                            <td class="px-4 py-3 text-right">${g(t.alfaSiSeElimina,3)}</td>
                            <td class="px-4 py-3 min-w-[260px]"><strong>${$(t.recomendacion.decision)}.</strong> ${$(t.recomendacion.razon)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Be(e){return e.modo!=="opciones"?`
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El análisis de distractores requiere respuestas por alternativa y una clave.
            </div>
        `:`
        <div class="space-y-5">
            ${e.distractores.map(t=>`
                <article class="rounded-2xl border ${t.posibleClaveErronea?"border-red-300 bg-red-50":"border-slate-200 bg-white"} p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <div>
                            <h3 class="text-xl font-black text-slate-900">${t.indice}. ${$(t.nombre)}</h3>
                            <p class="text-sm text-slate-500 mt-1">Clave: <strong>${$(t.clave)}</strong></p>
                        </div>
                        <span class="rounded-full px-4 py-2 text-xs font-black ${t.posibleClaveErronea?"bg-red-100 text-red-800":t.distractoresNoFuncionales?"bg-amber-100 text-amber-800":"bg-emerald-100 text-emerald-800"}">
                            ${t.posibleClaveErronea?"Revisar posible clave":`${t.distractoresNoFuncionales} distractores no funcionales`}
                        </span>
                    </div>
                    <div class="overflow-x-auto rounded-xl border border-slate-200">
                        <table class="min-w-full text-sm">
                            <thead class="bg-slate-100 text-slate-700">
                                <tr>
                                    <th class="px-3 py-2 text-left">Opción</th>
                                    <th class="px-3 py-2 text-right">Total</th>
                                    <th class="px-3 py-2 text-right">Grupo superior</th>
                                    <th class="px-3 py-2 text-right">Grupo inferior</th>
                                    <th class="px-3 py-2 text-left">Lectura</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 bg-white">
                                ${t.opciones.map(a=>`
                                    <tr class="${a.esClave?"bg-emerald-50":""}">
                                        <td class="px-3 py-2 font-black">${$(a.opcion)}${a.esClave?" ✓":""}</td>
                                        <td class="px-3 py-2 text-right">${a.seleccionTotal} (${U(a.proporcionTotal)})</td>
                                        <td class="px-3 py-2 text-right">${a.seleccionSuperior} (${U(a.proporcionSuperior)})</td>
                                        <td class="px-3 py-2 text-right">${a.seleccionInferior} (${U(a.proporcionInferior)})</td>
                                        <td class="px-3 py-2 min-w-[260px]">${$(a.observacion)}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </article>
            `).join("")}
        </div>
    `}function ze(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[420px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-left">Estudiante</th>
                        <th class="px-4 py-3 text-right">Puntuación</th>
                        <th class="px-4 py-3 text-right">Porcentaje</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.puntuaciones.sort((t,a)=>a.total-t.total).map(t=>`
                            <tr>
                                <td class="px-4 py-3 font-black">${$(t.id)}</td>
                                <td class="px-4 py-3 text-right">${t.total} / ${e.k}</td>
                                <td class="px-4 py-3 text-right">${g(t.porcentaje,1)} %</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Pe(e){const t=e.items.filter(n=>n.recomendacion.decision==="Revisión urgente").length,a=e.items.filter(n=>n.recomendacion.decision==="Conservar").length;return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-emerald-300 text-xs font-black mb-2">Calidad de la prueba</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">Resultados de evaluación educativa</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        Se analizaron ${e.n} estudiantes y ${e.k} preguntas. Cada grupo extremo contiene ${e.gruposExtremos.tamano} estudiantes.
                    </p>
                </div>
                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${t?"bg-red-500/20 text-red-200 border border-red-400/30":"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30"}">
                    ${t?`${t} preguntas urgentes`:"Sin alertas urgentes"}
                </span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-7">
            ${k("Estudiantes",e.n,"Filas completas utilizadas")}
            ${k("Preguntas",e.k,"Ítems analizados")}
            ${k("KR-20",g(e.fiabilidad.kr20,4),"Consistencia interna de la prueba")}
            ${k("Media",`${g(e.resumenPuntuaciones.media,2)} / ${e.k}`,"Puntuación promedio")}
            ${k("Desviación",g(e.resumenPuntuaciones.desviacion,3),"Dispersión de las puntuaciones")}
            ${k("Conservar",`${a} / ${e.k}`,"Preguntas sin alertas automáticas")}
        </section>

        ${e.advertencias.length?`
            <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h2 class="text-2xl font-black text-amber-950 mb-4">Advertencias</h2>
                <ul class="space-y-3 text-amber-950">
                    ${e.advertencias.map(n=>`<li class="flex gap-3"><span class="font-black">!</span><span>${$(n)}</span></li>`).join("")}
                </ul>
            </section>
        `:""}

        ${ye(e)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Análisis por pregunta</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Dificultad, discriminación y decisión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La recomendación automática orienta la revisión, pero no sustituye el juicio del docente ni la correspondencia con los objetivos curriculares.</p>
            ${De(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Alternativas de respuesta</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Análisis de distractores</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Revise opciones poco seleccionadas, distractores que atraen al grupo superior y posibles inconsistencias de clave.</p>
            ${Be(e)}
        </section>

        <section class="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-7">
            <article class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
                <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
                <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general</h2>
                <ul class="space-y-3 text-emerald-950 leading-relaxed">
                    ${e.interpretacion.map(n=>`<li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${$(n)}</span></li>`).join("")}
                </ul>
            </article>

            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">Resultados individuales</p>
                <h2 class="text-3xl font-black text-slate-900 mb-5">Puntuaciones por estudiante</h2>
                ${ze(e)}
            </article>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Dificultad, discriminación y punto-biserial dependen de la muestra y del propósito de la prueba. No elimine automáticamente una pregunta por un único indicador. Revise la clave, el contenido, la cobertura curricular, la redacción, el comportamiento de los distractores y las consecuencias de la decisión evaluativa.
            </p>
        </section>
    `}function Se(e){const t=["EVALUACIÓN EDUCATIVA — LABORATORIO KERNEL","",`Estudiantes: ${e.n}`,`Preguntas: ${e.k}`,`KR-20: ${g(e.fiabilidad.kr20,4)}`,`Media: ${g(e.resumenPuntuaciones.media,3)} de ${e.k}`,`Desviación estándar: ${g(e.resumenPuntuaciones.desviacion,3)}`,"","Resultados por pregunta:"];return e.items.forEach(a=>{t.push(`${a.nombre}: dificultad = ${g(a.dificultad,3)}, discriminación = ${g(a.discriminacion,3)}, rpb = ${g(a.puntoBiserial,3)}, decisión = ${a.recomendacion.decision}.`)}),t.push("","Interpretación:"),e.interpretacion.forEach(a=>t.push(`- ${a}`)),t.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),t.join(`
`)}function je(e){return`"${String(e??"").replaceAll('"','""')}"`}function Le(e){const t=[["EVALUACIÓN EDUCATIVA"],["Estudiantes",e.n],["Preguntas",e.k],["KR-20",e.fiabilidad.kr20],["Media",e.resumenPuntuaciones.media],["Desviación estándar",e.resumenPuntuaciones.desviacion],[],["Pregunta","Clave","Dificultad","Clasificación dificultad","Discriminación","Clasificación discriminación","Punto-biserial","KR-20 si se elimina","Distractores no funcionales","Decisión","Razón"],...e.items.map(r=>[r.nombre,r.clave,r.dificultad,r.clasificacionDificultad,r.discriminacion,r.clasificacionDiscriminacion,r.puntoBiserial,r.alfaSiSeElimina,r.distractoresNoFuncionales,r.recomendacion.decision,r.recomendacion.razon]),[],["Estudiante","Puntuación","Porcentaje"],...e.puntuaciones.map(r=>[r.id,r.total,r.porcentaje]),[],["Créditos","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]];e.modo==="opciones"&&(t.push([],["Pregunta","Opción","Es clave","Selección total","Proporción total","Selección superior","Proporción superior","Selección inferior","Proporción inferior","Lectura"]),e.distractores.forEach(r=>{r.opciones.forEach(i=>{t.push([r.nombre,i.opcion,i.esClave?"Sí":"No",i.seleccionTotal,i.proporcionTotal,i.seleccionSuperior,i.proporcionSuperior,i.seleccionInferior,i.proporcionInferior,i.observacion])})}));const a=t.map(r=>r.map(je).join(",")).join(`
`),n=new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"}),o=URL.createObjectURL(n),l=document.createElement("a");l.href=o,l.download="evaluacion-educativa-kernel.csv",document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function V(e,t){e.textContent=t,e.classList.remove("hidden")}function z(e){e.textContent="",e.classList.add("hidden")}export{Me as CalculadoraEvaluacionEducativa};
