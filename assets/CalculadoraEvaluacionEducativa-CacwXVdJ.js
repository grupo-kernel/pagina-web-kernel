function R(e){return e.reduce((t,a)=>t+a,0)/e.length}function ae(e){const t=[...e].sort((n,c)=>n-c),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function F(e){if(e.length<2)return null;const t=R(e);return e.reduce((a,n)=>a+(n-t)**2,0)/(e.length-1)}function X(e){const t=F(e);return t===null?null:Math.sqrt(Math.max(t,0))}function re(e,t){if(e.length!==t.length||e.length<2)return null;const a=R(e),n=R(t);return e.reduce((c,o,r)=>c+(o-a)*(t[r]-n),0)/(e.length-1)}function ne(e,t){const a=re(e,t),n=X(e),c=X(t);return a===null||n===null||c===null||n<1e-12||c<1e-12?null:Math.max(-1,Math.min(1,a/(n*c)))}function J(e){return String(e??"").trim().toUpperCase()}function ie({respuestas:e,clave:t,nombresItems:a,idsEstudiantes:n,modo:c}){if(!Array.isArray(e)||e.length<5)throw new Error("Se requieren al menos cinco estudiantes con respuestas completas.");if(!Array.isArray(e[0])||e[0].length<3)throw new Error("La evaluación debe contener al menos tres preguntas.");const o=e[0].length;if(!e.every(u=>Array.isArray(u)&&u.length===o))throw new Error("Todas las filas deben contener la misma cantidad de preguntas.");const r=Array.from({length:o},(u,l)=>String(a?.[l]??"").trim()||`Pregunta ${l+1}`),i=Array.from({length:e.length},(u,l)=>String(n?.[l]??"").trim()||`E${String(l+1).padStart(3,"0")}`);if(c==="binario"){const u=e.map((l,b)=>l.map((g,f)=>{const m=Number(g);if(!(m===0||m===1))throw new Error(`La fila ${b+1}, ${r[f]}, debe contener 0 o 1.`);return m}));return{matriz:u,respuestasNormalizadas:u.map(l=>l.map(String)),claveNormalizada:Array(o).fill("1"),nombres:r,ids:i}}if(!Array.isArray(t)||t.length!==o)throw new Error(`La clave debe contener exactamente ${o} respuestas.`);const s=t.map(J);if(s.some(u=>!u))throw new Error("La clave contiene una respuesta vacía.");const d=e.map((u,l)=>u.map((b,g)=>{const f=J(b);if(!f)throw new Error(`La fila ${l+1}, ${r[g]}, contiene una respuesta vacía.`);return f}));return{matriz:d.map(u=>u.map((l,b)=>l===s[b]?1:0)),respuestasNormalizadas:d,claveNormalizada:s,nombres:r,ids:i}}function Q(e){const t=e[0].length,a=e.map(o=>o.reduce((r,i)=>r+i,0)),n=F(a);if(n===null||n<1e-12)return null;const c=Array.from({length:t},(o,r)=>F(e.map(i=>i[r]))??0).reduce((o,r)=>o+r,0);return t/(t-1)*(1-c/n)}function se(e){return e<=.2?"Muy difícil":e<=.4?"Difícil":e<=.6?"Moderada":e<=.8?"Fácil":"Muy fácil"}function oe(e){return e<0?"Negativa":e<.2?"Deficiente":e<.3?"Marginal":e<.4?"Buena":"Excelente"}function le(e){return e===null?"No calculable":e<0?"Negativa":e<.2?"Débil":e<.3?"Aceptable con revisión":e<.4?"Buena":"Muy buena"}function ce(e){const t=Math.min(...e),a=Math.max(...e);return Array.from({length:a-t+1},(n,c)=>{const o=t+c;return{puntuacion:o,frecuencia:e.filter(r=>r===o).length}})}function de(e,t){const a=e.length,n=Math.max(1,Math.min(Math.floor(a/2),Math.floor(a*t))),c=e.map((o,r)=>({total:o,indice:r})).sort((o,r)=>r.total-o.total||o.indice-r.indice);return{tamano:n,superiores:c.slice(0,n).map(o=>o.indice),inferiores:c.slice(-n).map(o=>o.indice)}}function ue({respuestas:e,clave:t,nombres:a,superiores:n,inferiores:c}){return a.map((o,r)=>{const s=[...new Set([t[r],...e.map(l=>l[r])])].sort().map(l=>{const b=e.filter(y=>y[r]===l).length,g=n.filter(y=>e[y][r]===l).length,f=c.filter(y=>e[y][r]===l).length,m=l===t[r],v=b/e.length,k=g/Math.max(n.length,1),$=f/Math.max(c.length,1),z=m?null:v>=.05&&$>k;return{opcion:l,esClave:m,seleccionTotal:b,proporcionTotal:v,seleccionSuperior:g,proporcionSuperior:k,seleccionInferior:f,proporcionInferior:$,funcional:z,observacion:m?"Clave":v<.05?"Distractor no funcional: selección inferior al 5 %.":$<=k?"Distractor débil: no atrae más al grupo inferior.":"Distractor funcional."}}),d=s.find(l=>l.esClave),p=s.filter(l=>!l.esClave).sort((l,b)=>b.seleccionTotal-l.seleccionTotal)[0]??null,u=!!(p&&d&&p.seleccionTotal>d.seleccionTotal);return{indice:r+1,nombre:o,clave:t[r],opciones:s,distractoresNoFuncionales:s.filter(l=>!l.esClave&&l.funcional===!1).length,posibleClaveErronea:u}})}function pe({dificultad:e,discriminacion:t,puntoBiserial:a,posibleClaveErronea:n,distractoresNoFuncionales:c}){return n||t<0||a!==null&&a<0?{decision:"Revisión urgente",razon:"Existen indicadores negativos o una posible inconsistencia en la clave."}:e<.05||e>.95?{decision:"Revisar",razon:"La pregunta es extremadamente difícil o fácil y aporta poca diferenciación."}:t>=.3&&a!==null&&a>=.2?{decision:c?"Conservar y mejorar distractores":"Conservar",razon:c?"El ítem discrimina adecuadamente, pero tiene distractores débiles.":"Dificultad y discriminación compatibles con un ítem útil."}:{decision:"Revisar",razon:"La discriminación o la correlación punto-biserial no alcanzan niveles recomendables."}}function me({respuestas:e,clave:t=[],nombresItems:a=[],idsEstudiantes:n=[],modo:c="opciones",proporcionGrupos:o=.27,filasExcluidas:r=0}){if(!(o>0&&o<=.5))throw new Error("La proporción de grupos extremos debe estar entre 0 y 0.50.");const i=ie({respuestas:e,clave:t,nombresItems:a,idsEstudiantes:n,modo:c}),s=i.matriz,d=s.length,p=s[0].length,u=s.map(x=>x.reduce((h,D)=>h+D,0)),l=de(u,o),b=c==="opciones"?ue({respuestas:i.respuestasNormalizadas,clave:i.claveNormalizada,nombres:i.nombres,superiores:l.superiores,inferiores:l.inferiores}):i.nombres.map((x,h)=>({indice:h+1,nombre:x,clave:"1",opciones:[],distractoresNoFuncionales:0,posibleClaveErronea:!1})),g=i.nombres.map((x,h)=>{const D=s.map(A=>A[h]),B=R(D),T=s.map(A=>A.reduce((O,G,te)=>te===h?O:O+G,0)),M=ne(D,T),j=l.superiores.filter(A=>s[A][h]===1).length,U=l.inferiores.filter(A=>s[A][h]===1).length,V=j/l.tamano,Z=U/l.tamano,K=V-Z,W=p>2?Q(s.map(A=>A.filter((O,G)=>G!==h))):null,q=b[h],ee=pe({dificultad:B,discriminacion:K,puntoBiserial:M,posibleClaveErronea:q.posibleClaveErronea,distractoresNoFuncionales:q.distractoresNoFuncionales});return{indice:h+1,nombre:x,clave:i.claveNormalizada[h],dificultad:B,clasificacionDificultad:se(B),discriminacion:K,clasificacionDiscriminacion:oe(K),puntoBiserial:M,clasificacionPuntoBiserial:le(M),proporcionSuperior:V,proporcionInferior:Z,alfaSiSeElimina:W,distractoresNoFuncionales:q.distractoresNoFuncionales,posibleClaveErronea:q.posibleClaveErronea,recomendacion:ee}}),f=Q(s),m=R(u),v=X(u),k=u.map((x,h)=>({id:i.ids[h],total:x,porcentaje:x/p*100})),$=[];d<30&&$.push("La muestra contiene menos de 30 estudiantes; los indicadores por ítem pueden ser inestables."),l.tamano<5&&$.push("Cada grupo extremo contiene menos de cinco estudiantes; interprete la discriminación con mucha cautela."),r>0&&$.push(`Se excluyeron ${r} filas por respuestas ausentes o incompletas.`),g.some(x=>x.posibleClaveErronea)&&$.push("Al menos una pregunta presenta un distractor más seleccionado que la clave; revise la clave y la redacción.");const z=g.filter(x=>x.recomendacion.decision==="Conservar").length,y=g.filter(x=>x.recomendacion.decision==="Revisión urgente").length,w=[f===null?"KR-20 no pudo calcularse porque la puntuación total no presenta variabilidad suficiente.":f<.7?`KR-20 es ${f.toFixed(3)}, inferior al valor orientativo de 0.70; la consistencia de la prueba requiere revisión.`:f<.9?`KR-20 es ${f.toFixed(3)}, compatible con una consistencia interna generalmente aceptable.`:`KR-20 es ${f.toFixed(3)}, muy elevado; revise posible redundancia entre preguntas.`,`La puntuación media fue ${m.toFixed(2)} de ${p}, con desviación estándar ${v?.toFixed(2)??"no disponible"}.`,`${z} de ${p} preguntas cumplen automáticamente los criterios de conservación sin alertas adicionales.`,y?`${y} preguntas requieren revisión urgente por indicadores negativos o posible problema de clave.`:"No se detectaron preguntas con criterios automáticos de revisión urgente.","La decisión final debe considerar el contenido curricular, el propósito de la evaluación y evidencia adicional de validez."];return{tipoAnalisis:"evaluacion-educativa",modo:c,n:d,k:p,nombresItems:i.nombres,idsEstudiantes:i.ids,clave:i.claveNormalizada,filasExcluidas:r,proporcionGrupos:o,gruposExtremos:{tamano:l.tamano,idsSuperiores:l.superiores.map(x=>i.ids[x]),idsInferiores:l.inferiores.map(x=>i.ids[x])},matrizPuntuada:s,puntuaciones:k,resumenPuntuaciones:{media:m,mediana:ae(u),desviacion:v,varianza:F(u),minimo:Math.min(...u),maximo:Math.max(...u),histograma:ce(u)},fiabilidad:{kr20:f},items:g,distractores:b,advertencias:$,interpretacion:w}}function S(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function I(e,t,a){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">${e}</h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">${t}</p>
            ${a}
        </article>
    `}function Y({filas:e,titulo:t,descripcion:a,valor:n,etiquetaValor:c,minimo:o=0,maximo:r=1,umbrales:i=[]}){const s=Math.max(600,e.length*68+90),d=330,p=52,u=24,l=28,b=72,g=s-p-u,f=d-l-b,m=Math.max(r-o,1e-9),v=g/Math.max(e.length,1),k=Math.min(34,v*.58),$=w=>l+(r-w)/m*f,z=o<=0&&r>=0,y=$(z?0:o);return I(t,a,`<div class="overflow-x-auto">
            <svg viewBox="0 0 ${s} ${d}" class="min-w-[580px] w-full" role="img" aria-label="${S(t)}">
                <line x1="${p}" y1="${l}" x2="${p}" y2="${d-b}" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="${p}" y1="${y}" x2="${s-u}" y2="${y}" stroke="currentColor" stroke-width="2" class="${z?"text-slate-600":"text-slate-400"}"></line>
                ${i.map(w=>`
                    <line
                        x1="${p}"
                        y1="${$(w.valor)}"
                        x2="${s-u}"
                        y2="${$(w.valor)}"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-dasharray="5 5"
                        class="text-slate-300"
                    >
                        <title>${S(w.etiqueta)}</title>
                    </line>
                `).join("")}
                ${e.map((w,x)=>{const h=Math.max(o,Math.min(r,Number(n(w)))),D=p+x*v+(v-k)/2,B=$(h),T=Math.min(B,y),M=Math.max(2,Math.abs(B-y)),j=h<0,U=!j&&w.recomendacion?.decision==="Conservar";return`
                        <rect
                            x="${D}"
                            y="${T}"
                            width="${k}"
                            height="${M}"
                            rx="4"
                            fill="currentColor"
                            class="${j?"text-red-600":U?"text-emerald-700":"text-emerald-600"}"
                        >
                            <title>${S(w.nombre)}: ${h.toFixed(4)}</title>
                        </rect>
                        <text x="${D+k/2}" y="${j?B+16:B-7}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-700">${h.toFixed(2)}</text>
                        <text x="${D+k/2}" y="${d-48}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${w.indice??x+1}</text>
                    `}).join("")}
                <text x="18" y="${l+4}" font-size="10" fill="currentColor" class="text-slate-600">${r.toFixed(2)}</text>
                <text x="18" y="${d-b+4}" font-size="10" fill="currentColor" class="text-slate-600">${o.toFixed(2)}</text>
                ${z?`<text x="25" y="${y-5}" font-size="10" fill="currentColor" class="text-slate-600">0</text>`:""}
                <text x="${s/2}" y="${d-14}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">Número de pregunta</text>
            </svg>
            <p class="mt-3 text-xs text-slate-500">${S(c)}</p>
        </div>`)}function xe(e){return Y({filas:e.items,titulo:"Índice de dificultad",descripcion:"El índice representa la proporción de estudiantes que respondió correctamente. Valores cercanos a 1 indican preguntas fáciles.",valor:t=>t.dificultad,etiquetaValor:"Zona orientativa de mayor utilidad general: aproximadamente 0.20 a 0.80.",minimo:0,maximo:1,umbrales:[{valor:.2,etiqueta:"Límite inferior orientativo"},{valor:.8,etiqueta:"Límite superior orientativo"}]})}function be(e){const t=Math.min(-.25,...e.items.map(a=>a.discriminacion));return Y({filas:e.items,titulo:"Índice de discriminación",descripcion:"Compara la proporción de aciertos del grupo superior con la del grupo inferior. Valores negativos requieren revisión urgente.",valor:a=>a.discriminacion,etiquetaValor:"Como orientación, valores de 0.30 o más suelen indicar una discriminación útil.",minimo:t,maximo:1,umbrales:[{valor:0,etiqueta:"Discriminación nula"},{valor:.3,etiqueta:"Criterio orientativo de 0.30"}]})}function fe(e){const t=Math.min(-.25,...e.items.map(a=>a.puntoBiserial??0));return Y({filas:e.items,titulo:"Correlación punto-biserial corregida",descripcion:"Relaciona el acierto en cada pregunta con la puntuación obtenida en el resto de la prueba.",valor:a=>a.puntoBiserial??0,etiquetaValor:"Valores de 0.20 o más aportan evidencia favorable; valores negativos sugieren problemas de clave, redacción o contenido.",minimo:t,maximo:1,umbrales:[{valor:0,etiqueta:"Correlación nula"},{valor:.2,etiqueta:"Criterio orientativo de 0.20"}]})}function he(e){const i=d=>58+d*534,s=d=>305-(d+.5)/1.5*281;return I("Mapa de calidad de las preguntas","Combina dificultad y discriminación. El cuadrante de dificultad intermedia y discriminación positiva suele ser el más favorable.",`<div class="overflow-x-auto">
            <svg viewBox="0 0 620 360" class="min-w-[580px] w-full" role="img" aria-label="Mapa de dificultad y discriminación">
                <rect x="${i(.2)}" y="${s(1)}" width="${i(.8)-i(.2)}" height="${s(.3)-s(1)}" fill="currentColor" class="text-emerald-100" opacity="0.7"></rect>
                <line x1="58" y1="305" x2="592" y2="305" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="58" y1="24" x2="58" y2="305" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="58" y1="${s(0)}" x2="592" y2="${s(0)}" stroke="currentColor" stroke-dasharray="5 5" class="text-red-400"></line>
                <line x1="${i(.2)}" y1="24" x2="${i(.2)}" y2="305" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                <line x1="${i(.8)}" y1="24" x2="${i(.8)}" y2="305" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                <line x1="58" y1="${s(.3)}" x2="592" y2="${s(.3)}" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                ${e.items.map(d=>`
                    <circle
                        cx="${i(d.dificultad)}"
                        cy="${s(d.discriminacion)}"
                        r="7"
                        fill="currentColor"
                        class="${d.discriminacion<0?"text-red-600":d.recomendacion.decision==="Conservar"?"text-emerald-700":"text-amber-600"}"
                    >
                        <title>${S(d.nombre)}: dificultad ${d.dificultad.toFixed(3)}, discriminación ${d.discriminacion.toFixed(3)}</title>
                    </circle>
                    <text x="${i(d.dificultad)+9}" y="${s(d.discriminacion)-7}" font-size="10" fill="currentColor" class="text-slate-700">${d.indice}</text>
                `).join("")}
                <text x="${620/2}" y="347" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Índice de dificultad</text>
                <text x="16" y="${360/2}" transform="rotate(-90 16 ${360/2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Discriminación</text>
            </svg>
        </div>`)}function ve(e){const t=e.resumenPuntuaciones.histograma,a=Math.max(...t.map(n=>n.frecuencia),1);return I("Distribución de puntuaciones","Muestra la frecuencia de cada puntuación total obtenida en la prueba.",`<div class="overflow-x-auto">
            <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${t.map(n=>`
                    <div class="flex flex-col items-center justify-end min-w-[42px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${n.frecuencia}</span>
                        <div class="w-7 bg-sky-700 rounded-t" style="height:${Math.max(3,n.frecuencia/a*190)}px"></div>
                        <span class="text-[10px] text-slate-500 mt-2">${n.puntuacion}</span>
                    </div>
                `).join("")}
            </div>
        </div>`)}function ge(e){const t=e.items,a=Math.max(...t.map(n=>n.distractoresNoFuncionales),1);return I("Distractores no funcionales",e.modo==="opciones"?"Cuenta las alternativas incorrectas seleccionadas por menos del 5 % o que no atraen más al grupo inferior.":"El análisis de distractores no aplica a una matriz ya codificada como 0/1.",e.modo==="opciones"?`<div class="overflow-x-auto">
                <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                    ${t.map(n=>`
                        <div class="flex flex-col items-center justify-end min-w-[54px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${n.distractoresNoFuncionales}</span>
                            <div class="w-8 ${n.distractoresNoFuncionales?"bg-amber-600":"bg-emerald-600"} rounded-t" style="height:${Math.max(3,n.distractoresNoFuncionales/a*190)}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center">${S(n.nombre)}</span>
                        </div>
                    `).join("")}
                </div>
            </div>`:'<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">Introduzca respuestas por alternativa y una clave para analizar distractores.</div>')}function $e(e){return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Diagnóstico visual</p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">Gráficos de la evaluación</h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Interprete conjuntamente dificultad, discriminación, relación con la puntuación total, distribución de resultados y funcionamiento de las alternativas.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${xe(e)}
                ${be(e)}
                ${fe(e)}
                ${he(e)}
                ${ve(e)}
                ${ge(e)}
            </div>
        </section>
    `}function Le(){const e=document.createElement("section");let t=null;e.className=`
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
                    ${L("Respuestas por alternativa","Introduzca A, B, C, D u otras etiquetas y escriba la clave correcta en el campo correspondiente.")}
                    ${L("Matriz 0/1","Utilice 1 para respuesta correcta y 0 para incorrecta cuando los datos ya estén puntuados.")}
                    ${L("Identificador","Puede reservar la primera columna para el código o nombre del estudiante; esa columna no se puntuará.")}
                    ${L("Grupos extremos","La discriminación compara los grupos superior e inferior. El 27 % es el criterio clásico más utilizado.")}
                    ${L("Distractores","Un distractor es funcional cuando atrae una proporción suficiente de estudiantes y es elegido más por el grupo inferior.")}
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
    `;const a=e.querySelector("#formulario-evaluacion-educativa"),n=e.querySelector("#mensaje-error-evaluacion"),c=e.querySelector("#resultados-evaluacion-educativa"),o=a.querySelector("[data-campo-clave]"),r=a.elements.archivo,i=()=>{const s=a.elements.modo.value==="binario";o.classList.toggle("hidden",s),a.elements.clave.disabled=s};return i(),a.elements.modo.addEventListener("change",i),r.addEventListener("change",async()=>{const s=r.files?.[0];if(s)try{a.elements.datos.value=await s.text(),N(n)}catch{H(n,"No fue posible leer el archivo seleccionado.")}}),a.addEventListener("submit",s=>{s.preventDefault(),N(n);try{const d=Ee(a);t=me(d),c.innerHTML=Pe(t),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(d){c.classList.add("hidden"),H(n,d instanceof Error?d.message:"No fue posible analizar la evaluación.")}}),e.addEventListener("click",async s=>{const d=s.target.closest("[data-action]");if(!d)return;const p=d.dataset.action;if(p==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(p==="cargar-opciones"){ke(a),i(),c.classList.add("hidden"),N(n);return}if(p==="cargar-binario"){Ae(a),i(),c.classList.add("hidden"),N(n);return}if(p==="limpiar"){a.reset(),a.elements.modo.value="opciones",a.elements.tieneEncabezados.checked=!0,a.elements.tieneId.checked=!0,a.elements.datos.value="",a.elements.clave.value="",i(),c.classList.add("hidden"),N(n);return}if(t)if(p==="exportar-csv")je(t);else if(p==="copiar-reporte")try{await navigator.clipboard.writeText(Se(t));const u=d.textContent;d.textContent="Reporte copiado",setTimeout(()=>{d.textContent=u},1600)}catch{H(n,"El navegador no permitió copiar el reporte.")}else p==="imprimir"&&window.print()}),e}function L(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function ye(e){return e.includes("	")?"	":e.includes(";")?";":","}function Ce(e){return["","NA","N/A",".","NULL","MISSING"].includes(String(e??"").trim().toUpperCase())}function we(e){return String(e??"").split(/[,;\t]+/).map(t=>t.trim()).filter(Boolean)}function Ee(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca las respuestas antes de analizar la evaluación.");const a=t.split(/\r?\n/).map(m=>m.trim()).filter(Boolean),n=ye(a[0]),c=a.map(m=>m.split(n).map(v=>v.trim())),o=e.elements.tieneEncabezados.checked,r=e.elements.tieneId.checked;let i=o?c.shift():null;if(!c.length)throw new Error("No se encontraron filas de estudiantes.");const s=c[0].length;if(!c.every(m=>m.length===s))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");if(i&&i.length!==s)throw new Error("La fila de encabezados no coincide con la cantidad de columnas.");i||(i=Array.from({length:s},(m,v)=>r&&v===0?"Estudiante":`Pregunta ${v+(r?0:1)}`));let d=0;const p=c.filter(m=>m.some(Ce)?(d+=1,!1):!0),u=r?p.map(m=>m[0]):p.map((m,v)=>`E${String(v+1).padStart(3,"0")}`),l=p.map(m=>r?m.slice(1):m),b=r?i.slice(1):i,g=e.elements.modo.value,f=g==="opciones"?we(e.elements.clave.value):[];return{respuestas:l,clave:f,nombresItems:b,idsEstudiantes:u,modo:g,proporcionGrupos:Number(e.elements.proporcionGrupos.value),filasExcluidas:d}}function ke(e){e.elements.modo.value="opciones",e.elements.tieneEncabezados.checked=!0,e.elements.tieneId.checked=!0,e.elements.proporcionGrupos.value="0.27",e.elements.clave.value="A, C, B, D, A, B, C, D",e.elements.datos.value=`Estudiante, P1, P2, P3, P4, P5, P6, P7, P8
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
E24, 0, 1, 1, 0, 0, 0`}function C(e,t=4){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:t}):"—"}function _(e,t=1){return Number.isFinite(Number(e))?`${(Number(e)*100).toLocaleString("es-DO",{maximumFractionDigits:t})} %`:"—"}function E(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function P(e,t,a){return`
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
                            <td class="px-4 py-3 font-black text-slate-900 min-w-[160px]">${t.indice}. ${E(t.nombre)}</td>
                            <td class="px-4 py-3 text-right">${C(t.dificultad,3)}</td>
                            <td class="px-4 py-3">${E(t.clasificacionDificultad)}</td>
                            <td class="px-4 py-3 text-right font-black">${C(t.discriminacion,3)}</td>
                            <td class="px-4 py-3">${E(t.clasificacionDiscriminacion)}</td>
                            <td class="px-4 py-3 text-right">${C(t.puntoBiserial,3)}</td>
                            <td class="px-4 py-3 text-right">${C(t.alfaSiSeElimina,3)}</td>
                            <td class="px-4 py-3 min-w-[260px]"><strong>${E(t.recomendacion.decision)}.</strong> ${E(t.recomendacion.razon)}</td>
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
                            <h3 class="text-xl font-black text-slate-900">${t.indice}. ${E(t.nombre)}</h3>
                            <p class="text-sm text-slate-500 mt-1">Clave: <strong>${E(t.clave)}</strong></p>
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
                                        <td class="px-3 py-2 font-black">${E(a.opcion)}${a.esClave?" ✓":""}</td>
                                        <td class="px-3 py-2 text-right">${a.seleccionTotal} (${_(a.proporcionTotal)})</td>
                                        <td class="px-3 py-2 text-right">${a.seleccionSuperior} (${_(a.proporcionSuperior)})</td>
                                        <td class="px-3 py-2 text-right">${a.seleccionInferior} (${_(a.proporcionInferior)})</td>
                                        <td class="px-3 py-2 min-w-[260px]">${E(a.observacion)}</td>
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
                                <td class="px-4 py-3 font-black">${E(t.id)}</td>
                                <td class="px-4 py-3 text-right">${t.total} / ${e.k}</td>
                                <td class="px-4 py-3 text-right">${C(t.porcentaje,1)} %</td>
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
            ${P("Estudiantes",e.n,"Filas completas utilizadas")}
            ${P("Preguntas",e.k,"Ítems analizados")}
            ${P("KR-20",C(e.fiabilidad.kr20,4),"Consistencia interna de la prueba")}
            ${P("Media",`${C(e.resumenPuntuaciones.media,2)} / ${e.k}`,"Puntuación promedio")}
            ${P("Desviación",C(e.resumenPuntuaciones.desviacion,3),"Dispersión de las puntuaciones")}
            ${P("Conservar",`${a} / ${e.k}`,"Preguntas sin alertas automáticas")}
        </section>

        ${e.advertencias.length?`
            <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h2 class="text-2xl font-black text-amber-950 mb-4">Advertencias</h2>
                <ul class="space-y-3 text-amber-950">
                    ${e.advertencias.map(n=>`<li class="flex gap-3"><span class="font-black">!</span><span>${E(n)}</span></li>`).join("")}
                </ul>
            </section>
        `:""}

        ${$e(e)}

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
                    ${e.interpretacion.map(n=>`<li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${E(n)}</span></li>`).join("")}
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
    `}function Se(e){const t=["EVALUACIÓN EDUCATIVA — LABORATORIO KERNEL","",`Estudiantes: ${e.n}`,`Preguntas: ${e.k}`,`KR-20: ${C(e.fiabilidad.kr20,4)}`,`Media: ${C(e.resumenPuntuaciones.media,3)} de ${e.k}`,`Desviación estándar: ${C(e.resumenPuntuaciones.desviacion,3)}`,"","Resultados por pregunta:"];return e.items.forEach(a=>{t.push(`${a.nombre}: dificultad = ${C(a.dificultad,3)}, discriminación = ${C(a.discriminacion,3)}, rpb = ${C(a.puntoBiserial,3)}, decisión = ${a.recomendacion.decision}.`)}),t.push("","Interpretación:"),e.interpretacion.forEach(a=>t.push(`- ${a}`)),t.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),t.join(`
`)}function Me(e){return`"${String(e??"").replaceAll('"','""')}"`}function je(e){const t=[["EVALUACIÓN EDUCATIVA"],["Estudiantes",e.n],["Preguntas",e.k],["KR-20",e.fiabilidad.kr20],["Media",e.resumenPuntuaciones.media],["Desviación estándar",e.resumenPuntuaciones.desviacion],[],["Pregunta","Clave","Dificultad","Clasificación dificultad","Discriminación","Clasificación discriminación","Punto-biserial","KR-20 si se elimina","Distractores no funcionales","Decisión","Razón"],...e.items.map(r=>[r.nombre,r.clave,r.dificultad,r.clasificacionDificultad,r.discriminacion,r.clasificacionDiscriminacion,r.puntoBiserial,r.alfaSiSeElimina,r.distractoresNoFuncionales,r.recomendacion.decision,r.recomendacion.razon]),[],["Estudiante","Puntuación","Porcentaje"],...e.puntuaciones.map(r=>[r.id,r.total,r.porcentaje]),[],["Créditos","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]];e.modo==="opciones"&&(t.push([],["Pregunta","Opción","Es clave","Selección total","Proporción total","Selección superior","Proporción superior","Selección inferior","Proporción inferior","Lectura"]),e.distractores.forEach(r=>{r.opciones.forEach(i=>{t.push([r.nombre,i.opcion,i.esClave?"Sí":"No",i.seleccionTotal,i.proporcionTotal,i.seleccionSuperior,i.proporcionSuperior,i.seleccionInferior,i.proporcionInferior,i.observacion])})}));const a=t.map(r=>r.map(Me).join(",")).join(`
`),n=new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(n),o=document.createElement("a");o.href=c,o.download="evaluacion-educativa-kernel.csv",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(c),1e3)}function H(e,t){e.textContent=t,e.classList.remove("hidden")}function N(e){e.textContent="",e.classList.add("hidden")}export{Le as CalculadoraEvaluacionEducativa};
