function ee(e,t,o=5){if(!Array.isArray(t)||t.length<o)throw new Error(`${e} debe contener al menos ${o} observaciones.`);const a=t.map(Number);if(!a.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return a}function me(e){return Array.from({length:e},(t,o)=>Array.from({length:e},(a,i)=>o===i?1:0))}function fe(e){return e[0].map((t,o)=>e.map(a=>a[o]))}function he(e,t){return e.map(o=>t[0].map((a,i)=>o.reduce((c,s,l)=>c+s*t[l][i],0)))}function S(e,t){return e.map(o=>o.reduce((a,i,c)=>a+i*t[c],0))}function A(e,t){return e.reduce((o,a,i)=>o+a*t[i],0)}function B(e){const t=e.length,o=e.map((a,i)=>[...a.map(Number),...me(t)[i]]);for(let a=0;a<t;a+=1){let i=a;for(let s=a+1;s<t;s+=1)Math.abs(o[s][a])>Math.abs(o[i][a])&&(i=s);if(Math.abs(o[i][a])<1e-12)throw new Error("La matriz de información es singular. Elimine predictores redundantes o perfectamente colineales.");[o[a],o[i]]=[o[i],o[a]];const c=o[a][a];o[a]=o[a].map(s=>s/c);for(let s=0;s<t;s+=1){if(s===a)continue;const l=o[s][a];o[s]=o[s].map((r,n)=>r-l*o[a][n])}}return o.map(a=>a.slice(t))}function oe(e,t){const o=e[0].length;return Array.from({length:o},(a,i)=>[...t?[1]:[],...e.map(c=>c[i])])}function V(e){const t=Math.max(-35,Math.min(35,e));if(t>=0)return 1/(1+Math.exp(-t));const o=Math.exp(t);return o/(1+o)}function q(e,t){return e.reduce((o,a,i)=>{const c=Math.max(1e-12,Math.min(.999999999999,t[i]));return o+a*Math.log(c)+(1-a)*Math.log(1-c)},0)}function ge(e){const t=e<0?-1:1,o=Math.abs(e)/Math.sqrt(2),a=1/(1+.3275911*o),n=1-((((1.061405429*a+-1.453152027)*a+1.421413741)*a+-.284496736)*a+.254829592)*a*Math.exp(-o*o);return .5*(1+t*n)}function ve(e){return Math.max(0,Math.min(1,2*(1-ge(Math.abs(e)))))}function H(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-H(1-e);let o=.9999999999998099;const a=e-1;t.forEach((c,s)=>{o+=c/(a+s+1)});const i=a+t.length-.5;return .5*Math.log(2*Math.PI)+(a+.5)*Math.log(i)-i+Math.log(o)}function $e(e,t){if(t<=0)return 0;if(t<e+1){let l=1/e,r=l,n=e;for(let d=1;d<=300&&(n+=1,l*=t/n,r+=l,!(Math.abs(l)<Math.abs(r)*1e-14));d+=1);return r*Math.exp(-t+e*Math.log(t)-H(e))}let o=t+1-e,a=1/1e-300,i=1/o,c=i;for(let l=1;l<=300;l+=1){const r=-l*(l-e);o+=2,i=r*i+o,Math.abs(i)<1e-300&&(i=1e-300),a=o+r/a,Math.abs(a)<1e-300&&(a=1e-300),i=1/i;const n=i*a;if(c*=n,Math.abs(n-1)<1e-14)break}return 1-Math.exp(-t+e*Math.log(t)-H(e))*c}function se(e,t){return!(e>=0)||!(t>0)?null:Math.max(0,Math.min(1,1-$e(t/2,e/2)))}function ye(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],o=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],a=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],i=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,s=1-c;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<c){const n=Math.sqrt(-2*Math.log(e));return(((((a[0]*n+a[1])*n+a[2])*n+a[3])*n+a[4])*n+a[5])/((((i[0]*n+i[1])*n+i[2])*n+i[3])*n+1)}if(e>s){const n=Math.sqrt(-2*Math.log(1-e));return-(((((a[0]*n+a[1])*n+a[2])*n+a[3])*n+a[4])*n+a[5])/((((i[0]*n+i[1])*n+i[2])*n+i[3])*n+1)}const l=e-.5,r=l*l;return(((((t[0]*r+t[1])*r+t[2])*r+t[3])*r+t[4])*r+t[5])*l/(((((o[0]*r+o[1])*r+o[2])*r+o[3])*r+o[4])*r+1)}function te(e,t){const o=e[0].length,a=Array.from({length:o},()=>Array(o).fill(0));return e.forEach((i,c)=>{const s=Math.max(t[c]*(1-t[c]),1e-12);for(let l=0;l<o;l+=1)for(let r=0;r<o;r+=1)a[l][r]+=s*i[l]*i[r]}),a}function we(e,t,o={}){const a=o.maxIteraciones??100,i=o.tolerancia??1e-8,c=e[0].length;let s=Array(c).fill(0),l=e.map(()=>.5),r=q(t,l),n=!1,d=0;for(let $=1;$<=a;$+=1){d=$,l=e.map(v=>V(A(v,s)));const b=te(e,l),g=B(b),u=Array(c).fill(0);e.forEach((v,E)=>{const L=t[E]-l[E];v.forEach((P,N)=>{u[N]+=P*L})});const y=S(g,u);let w=1,C=s.map((v,E)=>v+y[E]),M=e.map(v=>V(A(v,C))),I=q(t,M);for(;I<r-1e-10&&w>1/1024;)w/=2,C=s.map((v,E)=>v+w*y[E]),M=e.map(v=>V(A(v,C))),I=q(t,M);const G=Math.max(...C.map((v,E)=>Math.abs(v-s[E]))),T=Math.abs(I-r);if(s=C,l=M,r=I,G<i&&T<i){n=!0;break}if(s.some(v=>Math.abs(v)>100))break}const p=te(e,l),x=B(p);return{beta:s,probabilidades:l,logLik:r,covarianza:x,informacion:p,convergio:n,iteraciones:d}}function ke(e,t){if(!t){const c=e.map(()=>.5);return{probabilidades:c,logLik:q(e,c)}}const o=e.reduce((c,s)=>c+s,0)/e.length,a=Math.max(1e-12,Math.min(1-1e-12,o)),i=e.map(()=>a);return{probabilidades:i,logLik:q(e,i)}}function Me(e,t,o){let a=0,i=0,c=0,s=0;e.forEach((b,g)=>{const u=t[g]>=o?1:0;b===1&&u===1&&(a+=1),b===0&&u===0&&(i+=1),b===0&&u===1&&(c+=1),b===1&&u===0&&(s+=1)});const l=e.length,r=(b,g)=>g>0?b/g:null,n=r(a,a+s),d=r(i,i+c),p=r(a,a+c),x=r(i,i+s),$=p!==null&&n!==null&&p+n>0?2*p*n/(p+n):null;return{umbral:o,verdaderosPositivos:a,verdaderosNegativos:i,falsosPositivos:c,falsosNegativos:s,exactitud:(a+i)/l,sensibilidad:n,especificidad:d,precision:p,valorPredictivoNegativo:x,f1:$,exactitudBalanceada:n!==null&&d!==null?(n+d)/2:null}}function Ce(e,t){const o=e.map((r,n)=>({observado:r,probabilidad:t[n]})).sort((r,n)=>n.probabilidad-r.probabilidad),a=e.reduce((r,n)=>r+n,0),i=e.length-a,s=[1/0,...new Set(o.map(r=>r.probabilidad)),-1/0].map(r=>{let n=0,d=0;return o.forEach(p=>{const x=p.probabilidad>=r;x&&p.observado===1&&(n+=1),x&&p.observado===0&&(d+=1)}),{umbral:Number.isFinite(r)?r:null,sensibilidad:a>0?n/a:0,unoMenosEspecificidad:i>0?d/i:0}}).sort((r,n)=>r.unoMenosEspecificidad-n.unoMenosEspecificidad||r.sensibilidad-n.sensibilidad);let l=0;for(let r=1;r<s.length;r+=1){const n=s[r].unoMenosEspecificidad-s[r-1].unoMenosEspecificidad,d=(s[r].sensibilidad+s[r-1].sensibilidad)/2;l+=n*d}return{puntos:s,auc:Math.max(0,Math.min(1,l))}}function Ee(e,t){const o=e.map((l,r)=>({observado:l,probabilidad:t[r]})).sort((l,r)=>l.probabilidad-r.probabilidad),a=Math.min(10,Math.max(3,Math.floor(e.length/5))),i=[];for(let l=0;l<a;l+=1){const r=Math.floor(l*o.length/a),n=Math.floor((l+1)*o.length/a),d=o.slice(r,n);if(!d.length)continue;const p=d.reduce((g,u)=>g+u.observado,0),x=d.reduce((g,u)=>g+u.probabilidad,0),$=d.length-p,b=d.length-x;i.push({grupo:i.length+1,n:d.length,probabilidadMedia:d.reduce((g,u)=>g+u.probabilidad,0)/d.length,observadosPositivos:p,esperadosPositivos:x,observadosNegativos:$,esperadosNegativos:b})}const c=i.reduce((l,r)=>{const n=r.esperadosPositivos>1e-12?(r.observadosPositivos-r.esperadosPositivos)**2/r.esperadosPositivos:0,d=r.esperadosNegativos>1e-12?(r.observadosNegativos-r.esperadosNegativos)**2/r.esperadosNegativos:0;return l+n+d},0),s=Math.max(i.length-2,1);return{estadistico:c,gradosLibertad:s,p:se(c,s),grupos:i}}function Pe(e,t,o,a){const i=e[0].length,c=e.map((n,d)=>{const p=S(a,n);return o[d]*(1-o[d])*A(n,p)}),s=t.map((n,d)=>{const p=Math.max(o[d]*(1-o[d]),1e-12);return(n-o[d])/Math.sqrt(p)}),l=t.map((n,d)=>{const p=Math.max(1e-12,Math.min(.999999999999,o[d])),x=n===1?2*Math.log(1/p):2*Math.log(1/(1-p));return Math.sign(n-p)*Math.sqrt(Math.max(x,0))}),r=s.map((n,d)=>{const p=Math.min(c[d],.999999999999);return n**2*p/(i*Math.max((1-p)**2,1e-12))});return{leverage:c,residuosPearson:s,residuosDeviance:l,distanciaCook:r}}function Le(e,t){return e.length<2?[]:e.map((o,a)=>{const i=e.filter((r,n)=>n!==a),c=oe(i,!0),s=fe(c),l=he(s,c);try{const r=B(l),n=S(s,o),d=S(r,n),p=S(c,d),x=o.reduce((y,w)=>y+w,0)/o.length,$=o.reduce((y,w)=>y+(w-x)**2,0),b=o.reduce((y,w,C)=>y+(w-p[C])**2,0),g=$>1e-12?Math.max(0,1-b/$):1,u=Math.max(1-g,1e-12);return{variable:t[a],tolerancia:u,vif:1/u}}catch{return{variable:t[a],tolerancia:0,vif:1/0}}})}function Re({y:e,X:t,nombresPredictores:o=[],incluirIntercepto:a=!0,nivelConfianza:i=.95,umbral:c=.5,maxIteraciones:s=100,tolerancia:l=1e-8}){const r=ee("La variable dependiente",e,8);if(!r.every(f=>f===0||f===1))throw new Error("La variable dependiente debe estar codificada exclusivamente con 0 y 1.");const n=r.reduce((f,h)=>f+h,0),d=r.length-n;if(n===0||d===0)throw new Error("La variable dependiente debe contener observaciones de ambas categorías: 0 y 1.");if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const p=t.map((f,h)=>ee(o[h]||`X${h+1}`,f,8));if(!p.every(f=>f.length===r.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(i>0&&i<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");if(!(c>0&&c<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const x=p.map((f,h)=>o[h]||`X${h+1}`),$=oe(p,a),b=r.length,g=$[0].length;if(b<=g+2)throw new Error("No hay suficientes observaciones para estimar el modelo logístico con esta cantidad de predictores.");const u=we($,r,{maxIteraciones:s,tolerancia:l});if(!u.convergio)throw new Error("El algoritmo no alcanzó convergencia. Revise separación perfecta, predictores extremos, colinealidad o tamaño muestral insuficiente.");const y=ke(r,a),w=p.length,C=Math.max(0,2*(u.logLik-y.logLik)),M=se(C,w),I=ye(.5+i/2),G=[...a?["Intercepto"]:[],...x],T=u.beta.map((f,h)=>{const j=Math.sqrt(Math.max(u.covarianza[h][h],0)),Z=j>1e-12?f/j:f===0?0:1/0,xe=ve(Z),J=f-I*j,Q=f+I*j;return{termino:G[h],estimacion:f,errorEstandar:j,z:Z,p:xe,intervaloConfianza:{inferior:J,superior:Q,nivel:i},oddsRatio:Math.exp(Math.max(-35,Math.min(35,f))),intervaloOddsRatio:{inferior:Math.exp(Math.max(-35,Math.min(35,J))),superior:Math.exp(Math.max(-35,Math.min(35,Q))),nivel:i}}}),v=Me(r,u.probabilidades,c),E=Ce(r,u.probabilidades),L=Ee(r,u.probabilidades),P=Pe($,r,u.probabilidades,u.covarianza),N=Le(p,x),_=r.map((f,h)=>({observacion:h+1,observado:f,probabilidad:u.probabilidades[h],residuoPearson:P.residuosPearson[h],residuoDeviance:P.residuosDeviance[h],leverage:P.leverage[h],distanciaCook:P.distanciaCook[h]})).filter(f=>Math.abs(f.residuoPearson)>2||f.leverage>2*g/b||f.distanciaCook>4/b),ie=-2*u.logLik,re=-2*y.logLik,ne=-2*u.logLik+2*g,le=-2*u.logLik+g*Math.log(b),ce=y.logLik!==0?1-u.logLik/y.logLik:null,Y=1-Math.exp(2/b*(y.logLik-u.logLik)),K=1-Math.exp(2/b*y.logLik),de=K>1e-12?Y/K:null,pe=v.exactitud===1,ue=u.beta.some(f=>Math.abs(f)>15),W=pe&&ue,be=[M!==null&&M<.05?`El modelo global mejora significativamente al modelo nulo (χ² = ${C.toFixed(4)}, gl = ${w}, p ${M<.001?"< 0.001":`= ${M.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística al 5 % (χ² = ${C.toFixed(4)}, gl = ${w}, p = ${M?.toFixed(4)??"no disponible"}).`,`El área bajo la curva ROC es ${E.auc.toFixed(4)}, lo que resume la capacidad del modelo para ordenar casos positivos por encima de casos negativos.`,`Con umbral ${c.toFixed(2)}, la exactitud es ${(v.exactitud*100).toFixed(2)} %, la sensibilidad es ${v.sensibilidad===null?"no calculable":`${(v.sensibilidad*100).toFixed(2)} %`} y la especificidad es ${v.especificidad===null?"no calculable":`${(v.especificidad*100).toFixed(2)} %`}.`,L.p!==null&&L.p>=.05?`La prueba de Hosmer–Lemeshow no detecta una discrepancia significativa entre probabilidades observadas y esperadas (p = ${L.p.toFixed(4)}).`:`La prueba de Hosmer–Lemeshow sugiere revisar la calibración del modelo (p ${L.p!==null&&L.p<.001?"< 0.001":`= ${L.p?.toFixed(4)??"no disponible"}`}).`,N.some(f=>f.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":N.some(f=>f.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":N.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",_.length?`Se identificaron ${_.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",W?"La clasificación perfecta junto con coeficientes extremos sugiere posible separación completa o cuasicompleta; los coeficientes pueden ser inestables.":"No se detectó el patrón automático de separación completa basado en clasificación perfecta y coeficientes extremos."];return{tipoModelo:"regresion-logistica-binaria",n:b,numeroPredictores:p.length,incluirIntercepto:a,nombresPredictores:x,nivelConfianza:i,convergencia:{convergio:u.convergio,iteraciones:u.iteraciones,posibleSeparacion:W},distribucionRespuesta:{positivos:n,negativos:d,proporcionPositivos:n/b},coeficientes:T,ajuste:{logVerosimilitud:u.logLik,logVerosimilitudNula:y.logLik,deviance:ie,devianceNula:re,aic:ne,bic:le,r2McFadden:ce,r2CoxSnell:Y,r2Nagelkerke:de},pruebaGlobal:{chiCuadrado:C,gradosLibertad:w,p:M},clasificacion:v,roc:E,calibracion:L,diagnosticos:{...P,vif:N,observacionesInfluyentes:_},probabilidades:u.probabilidades,datosGrafico:r.map((f,h)=>({observacion:h+1,observado:f,probabilidad:u.probabilidades[h],clasePredicha:u.probabilidades[h]>=c?1:0,residuoPearson:P.residuosPearson[h],residuoDeviance:P.residuosDeviance[h],leverage:P.leverage[h],distanciaCook:P.distanciaCook[h],predictores:p.map(j=>j[h])})),interpretacion:be}}function Ie(e,t,o=e?.clasificacion?.umbral??.5){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);if(!(o>0&&o<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const a=t.map(Number);if(!a.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const i=e.coeficientes.map(r=>r.estimacion),c=[...e.incluirIntercepto?[1]:[],...a],s=A(c,i),l=V(s);return{predictorLineal:s,probabilidad:l,umbral:o,clasePredicha:l>=o?1:0}}function X(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function k(e,t=3){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}):e>0?"∞":"—"}function z(e,t,o,a=""){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg overflow-hidden ${a}">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${t}
            </p>
            ${o}
        </article>
    `}function je(e){const a={izquierda:62,derecha:24,superior:26,inferior:58},i=560-a.izquierda-a.derecha,c=390-a.superior-a.inferior,s=d=>a.izquierda+d*i,l=d=>a.superior+(1-d)*c,r=e.roc.puntos.map(d=>`${s(d.unoMenosEspecificidad)},${l(d.sensibilidad)}`).join(" "),n=`
        <div class="overflow-x-auto">
            <svg
                viewBox="0 0 560 390"
                class="min-w-[520px] w-full"
                role="img"
                aria-label="Curva ROC con área bajo la curva ${k(e.roc.auc,4)}"
            >
                <line x1="${s(0)}" y1="${l(0)}" x2="${s(1)}" y2="${l(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s(0)}" y1="${l(0)}" x2="${s(0)}" y2="${l(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s(0)}" y1="${l(0)}" x2="${s(1)}" y2="${l(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(d=>`
                    <line x1="${s(d)}" y1="${l(0)}" x2="${s(d)}" y2="${l(1)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <line x1="${s(0)}" y1="${l(d)}" x2="${s(1)}" y2="${l(d)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <text x="${s(d)}" y="358" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${d}</text>
                    <text x="${a.izquierda-14}" y="${l(d)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${d}</text>
                `).join("")}

                <polyline
                    points="${r}"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-indigo-700"
                />

                <text x="${a.izquierda+i/2}" y="382" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">
                    1 − especificidad
                </text>
                <text x="16" y="${a.superior+c/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${a.superior+c/2})">
                    Sensibilidad
                </text>
            </svg>
        </div>
        <div class="mt-4 rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-indigo-950">
            <span class="font-black">AUC = ${k(e.roc.auc,4)}</span>
            <span class="text-sm ml-2">Cuanto más se aproxima a 1, mayor es la capacidad discriminativa.</span>
        </div>
    `;return z("Curva ROC","Relaciona sensibilidad y tasa de falsos positivos para todos los umbrales posibles. La diagonal representa una clasificación sin capacidad discriminativa.",n)}function Ne(e){const t=e.clasificacion,o=(i,c,s)=>`
        <div class="rounded-2xl border p-5 text-center ${s}">
            <span class="block text-xs uppercase tracking-widest font-black mb-2">
                ${i}
            </span>
            <strong class="block text-4xl font-black">${c}</strong>
        </div>
    `,a=`
        <div class="grid grid-cols-[auto_1fr_1fr] gap-3 items-stretch">
            <div></div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 0</div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 1</div>

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 0</div>
            ${o("Verdadero negativo",t.verdaderosNegativos,"border-emerald-200 bg-emerald-50 text-emerald-950")}
            ${o("Falso positivo",t.falsosPositivos,"border-amber-200 bg-amber-50 text-amber-950")}

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 1</div>
            ${o("Falso negativo",t.falsosNegativos,"border-red-200 bg-red-50 text-red-950")}
            ${o("Verdadero positivo",t.verdaderosPositivos,"border-indigo-200 bg-indigo-50 text-indigo-950")}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-center">
            ${[["Exactitud",t.exactitud],["Sensibilidad",t.sensibilidad],["Especificidad",t.especificidad],["F1",t.f1]].map(([i,c])=>`
                <div class="rounded-xl bg-slate-50 border border-slate-200 px-3 py-4">
                    <span class="block text-xs font-black uppercase tracking-wider text-slate-500">${i}</span>
                    <strong class="block mt-1 text-xl text-slate-900">${c===null?"—":`${k(c*100,2)} %`}</strong>
                </div>
            `).join("")}
        </div>
    `;return z("Matriz de confusión",`Resume la clasificación con umbral ${k(t.umbral,2)}. Los falsos positivos y falsos negativos deben interpretarse según el costo real de cada error.`,a)}function ze(e,t){const s=x=>48+x*504,n=e.datosGrafico.map((x,$)=>{const b=x.observado===1?90:210,g=($%7-3)*5,u=x.observado===1?"text-indigo-700":"text-sky-500";return`
            <circle
                cx="${s(x.probabilidad)}"
                cy="${b+g}"
                r="5"
                fill="currentColor"
                class="${u}"
            >
                <title>Observación ${x.observacion}: Y=${x.observado}, p=${k(x.probabilidad,4)}</title>
            </circle>
        `}).join(""),d=s(e.clasificacion.umbral),p=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 600 300" class="min-w-[560px] w-full" role="img" aria-label="Distribución de probabilidades por clase observada">
                <line x1="48" y1="250" x2="552" y2="250" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${d}" y1="38" x2="${d}" y2="250" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" class="text-red-500" />
                <text x="${d}" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-red-600">Umbral ${k(e.clasificacion.umbral,2)}</text>

                ${[0,.25,.5,.75,1].map(x=>`
                    <line x1="${s(x)}" y1="250" x2="${s(x)}" y2="256" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                    <text x="${s(x)}" y="275" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${x}</text>
                `).join("")}

                <text x="18" y="94" font-size="13" font-weight="800" fill="currentColor" class="text-indigo-800">Y=1</text>
                <text x="18" y="214" font-size="13" font-weight="800" fill="currentColor" class="text-sky-700">Y=0</text>
                ${n}
                <text x="${600/2}" y="296" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad estimada de ${X(t)} = 1</text>
            </svg>
        </div>
    `;return z("Probabilidades estimadas por clase","Una buena separación visual concentra los casos observados con valor 1 hacia probabilidades altas y los casos con valor 0 hacia probabilidades bajas.",p)}function Se(e){const t=e.calibracion.grupos.map(p=>({...p,proporcionObservada:p.n>0?p.observadosPositivos/p.n:0})),o=560,a=390,i={izquierda:62,derecha:24,superior:26,inferior:58},c=o-i.izquierda-i.derecha,s=a-i.superior-i.inferior,l=p=>i.izquierda+p*c,r=p=>i.superior+(1-p)*s,n=t.map(p=>`${l(p.probabilidadMedia)},${r(p.proporcionObservada)}`).join(" "),d=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${o} ${a}" class="min-w-[520px] w-full" role="img" aria-label="Gráfico de calibración">
                <line x1="${l(0)}" y1="${r(0)}" x2="${l(1)}" y2="${r(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${l(0)}" y1="${r(0)}" x2="${l(0)}" y2="${r(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${l(0)}" y1="${r(0)}" x2="${l(1)}" y2="${r(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(p=>`
                    <text x="${l(p)}" y="${a-32}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${p}</text>
                    <text x="${i.izquierda-14}" y="${r(p)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${p}</text>
                `).join("")}

                <polyline points="${n}" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600" />
                ${t.map(p=>`
                    <circle cx="${l(p.probabilidadMedia)}" cy="${r(p.proporcionObservada)}" r="6" fill="currentColor" class="text-emerald-700">
                        <title>Grupo ${p.grupo}: esperado ${k(p.probabilidadMedia,3)}, observado ${k(p.proporcionObservada,3)}</title>
                    </circle>
                `).join("")}

                <text x="${i.izquierda+c/2}" y="${a-8}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad media estimada</text>
                <text x="16" y="${i.superior+s/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${i.superior+s/2})">Proporción observada</text>
            </svg>
        </div>
        <div class="mt-4 text-sm text-slate-600">
            Hosmer–Lemeshow: χ² = <strong>${k(e.calibracion.estadistico,4)}</strong>, p = <strong>${k(e.calibracion.p,4)}</strong>.
        </div>
    `;return z("Calibración","Compara la probabilidad media estimada con la proporción realmente observada en grupos ordenados por riesgo. Los puntos próximos a la diagonal indican mejor calibración.",d)}function Ae(e){const t=e.coeficientes.filter(b=>b.termino!=="Intercepto");if(!t.length)return"";const o=620,a=58,i=80+t.length*a,c=170,s=40,l=t.flatMap(b=>[Math.log(Math.max(b.intervaloOddsRatio.inferior,1e-8)),Math.log(Math.max(b.intervaloOddsRatio.superior,1e-8)),0]);let r=Math.min(...l),n=Math.max(...l);Math.abs(n-r)<.5&&(r-=.5,n+=.5);const d=n-r,p=b=>c+(Math.log(Math.max(b,1e-8))-r)/d*(o-c-s),x=p(1),$=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${o} ${i}" class="min-w-[580px] w-full" role="img" aria-label="Gráfico de razones de probabilidades">
                <line x1="${x}" y1="28" x2="${x}" y2="${i-34}" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" class="text-slate-400" />
                <text x="${x}" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-slate-600">OR = 1</text>

                ${t.map((b,g)=>{const u=58+g*a,y=p(b.intervaloOddsRatio.inferior),w=p(b.intervaloOddsRatio.superior),C=p(b.oddsRatio),M=b.p<.05;return`
                        <text x="${c-14}" y="${u+4}" text-anchor="end" font-size="12" font-weight="700" fill="currentColor" class="text-slate-700">${X(b.termino)}</text>
                        <line x1="${y}" y1="${u}" x2="${w}" y2="${u}" stroke="currentColor" stroke-width="4" class="${M?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${y}" y1="${u-7}" x2="${y}" y2="${u+7}" stroke="currentColor" stroke-width="2" class="${M?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${w}" y1="${u-7}" x2="${w}" y2="${u+7}" stroke="currentColor" stroke-width="2" class="${M?"text-indigo-500":"text-slate-400"}" />
                        <circle cx="${C}" cy="${u}" r="7" fill="currentColor" class="${M?"text-indigo-800":"text-slate-600"}">
                            <title>${X(b.termino)}: OR=${k(b.oddsRatio,4)}, IC [${k(b.intervaloOddsRatio.inferior,4)}, ${k(b.intervaloOddsRatio.superior,4)}]</title>
                        </circle>
                    `}).join("")}

                <text x="${c}" y="${i-10}" text-anchor="start" font-size="11" fill="currentColor" class="text-slate-600">${k(Math.exp(r),3)}</text>
                <text x="${o-s}" y="${i-10}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${k(Math.exp(n),3)}</text>
            </svg>
        </div>
    `;return z("Razones de probabilidades e intervalos de confianza","Valores mayores que 1 indican aumento de las odds del evento por unidad del predictor; valores menores que 1 indican disminución, manteniendo constantes los demás predictores.",$,"xl:col-span-2")}function qe(e){const t=e.datosGrafico.map(s=>s.distanciaCook),o=Math.max(...t,4/e.n,1e-8),a=4/e.n,i=e.datosGrafico.map(s=>{const l=Math.max(2,s.distanciaCook/o*180);return`
            <div class="flex flex-col justify-end items-center min-w-[18px] h-full">
                <div
                    class="w-3 rounded-t ${s.distanciaCook>a?"bg-red-600":"bg-sky-600"}"
                    style="height:${l}px"
                    title="Observación ${s.observacion}: Cook = ${k(s.distanciaCook,5)}"
                ></div>
                <span class="text-[9px] text-slate-500 mt-1">${s.observacion}</span>
            </div>
        `}).join(""),c=`
        <div class="relative h-64 border-l border-b border-slate-300 px-3 pt-4 overflow-x-auto">
            <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-300" style="bottom:${Math.min(220,a/o*180+22)}px">
                <span class="absolute right-1 -top-5 text-[10px] font-black text-red-600">4/n = ${k(a,4)}</span>
            </div>
            <div class="relative flex items-end gap-1 min-w-max h-full">
                ${i}
            </div>
        </div>
    `;return z("Distancia de Cook","Señala observaciones con potencial influencia sobre el ajuste. El criterio 4/n es orientativo y no sustituye la revisión del caso y del diseño del estudio.",c)}function Fe(e,t="Y"){return`
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
                ${je(e)}
                ${Ne(e)}
                ${ze(e,t)}
                ${Se(e)}
                ${Ae(e)}
                ${qe(e)}
            </div>
        </section>
    `}function et(){const e=document.createElement("section");let t=null,o=null;e.className=`
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
                    ${F("Resultado binario","La primera columna debe contener exclusivamente 0 y 1. Defina con claridad qué representa el evento codificado como 1.")}
                    ${F("Predictores","Coloque después una columna por cada variable explicativa cuantitativa o previamente codificada.")}
                    ${F("Encabezados","La primera fila puede contener nombres de variables. Sin encabezados se asignarán Y, X1, X2, …")}
                    ${F("Interpretación","Una razón de probabilidades mayor que 1 indica aumento de las odds del evento; una menor que 1 indica disminución, manteniendo constantes los demás predictores.")}
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
    `;const a=e.querySelector("#formulario-regresion-logistica"),i=e.querySelector("#mensaje-error-logistica"),c=e.querySelector("#resultados-regresion-logistica");return a.elements.archivo.addEventListener("change",async()=>{const s=a.elements.archivo.files?.[0];if(s)try{a.elements.datos.value=await s.text(),O(i)}catch{ae(i,"No fue posible leer el archivo seleccionado.")}}),a.addEventListener("submit",s=>{s.preventDefault(),O(i);try{const{solicitud:l,metadatos:r}=De(a),n=Re(l);t=n,o=r,c.innerHTML=Ke(n,r),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(l){c.classList.add("hidden"),t=null,o=null,ae(i,l instanceof Error?l.message:"No fue posible ajustar el modelo logístico.")}}),e.addEventListener("submit",s=>{const l=s.target.closest("#formulario-prediccion-logistica");if(!l||!t)return;s.preventDefault();const r=[...l.querySelectorAll("[data-predictor]")].map(d=>Number(d.value)),n=l.querySelector("#resultado-prediccion-logistica");try{const d=Ie(t,r,t.clasificacion.umbral);n.innerHTML=`
                <div class="rounded-2xl border border-rose-200 bg-white p-5 text-rose-950">
                    <p class="text-sm font-black uppercase tracking-widest text-rose-700 mb-2">
                        Predicción estimada
                    </p>
                    <p class="text-3xl font-black">
                        Probabilidad = ${m(d.probabilidad*100,2)} %
                    </p>
                    <p class="mt-2 text-sm leading-relaxed">
                        Con umbral ${m(d.umbral,2)}, la clase predicha es <strong>${d.clasePredicha}</strong>. Esta predicción debe interpretarse dentro del rango y población estudiados.
                    </p>
                </div>
            `}catch(d){n.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${R(d.message)}
                </div>
            `}}),e.addEventListener("click",async s=>{const l=s.target.closest("[data-action]");if(l)switch(l.dataset.action){case"volver-regresion":window.location.hash="/regresionModelos";break;case"volver-laboratorio":window.location.hash="/laboratorioKernel";break;case"cargar-ejemplo":Ve(a),c.classList.add("hidden"),O(i);break;case"limpiar":a.reset(),a.elements.umbral.value="0.50",c.classList.add("hidden"),t=null,o=null,O(i);break;case"exportar-csv":t&&o&&Je(t,o);break;case"copiar-reporte":t&&o&&await Qe(t,o,l);break;case"imprimir":window.print();break}}),e}function F(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function Oe(e){return e.trim().split(/[,;\t]+/).map(t=>t.trim())}function De(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const o=t.split(/\r?\n+/).map(Oe).filter(n=>n.length&&n.some(Boolean));if(o.length<9)throw new Error("Introduzca al menos ocho observaciones y, cuando corresponda, una fila de encabezados.");const i=o[0].every(n=>Number.isFinite(Number(n)))?o[0].map((n,d)=>d===0?"Y":`X${d}`):o.shift(),c=i.length;if(c<2)throw new Error("Se requieren al menos dos columnas: resultado binario y un predictor.");if(!o.every(n=>n.length===c))throw new Error("Todas las filas deben tener la misma cantidad de columnas.");const s=o.map((n,d)=>n.map((p,x)=>{const $=Number(p);if(!Number.isFinite($))throw new Error(`El valor de la fila ${d+1}, columna ${x+1} no es numérico.`);return $})),l=s.map(n=>n[0]);if(!l.every(n=>n===0||n===1))throw new Error("La primera columna debe contener únicamente valores 0 y 1.");const r=Number(e.elements.umbral.value);return{solicitud:{y:l,X:Array.from({length:c-1},(n,d)=>s.map(p=>p[d+1])),nombresPredictores:i.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value),umbral:r},metadatos:{nombreDependiente:i[0],nombresPredictores:i.slice(1)}}}function Ve(e){e.elements.datos.value=`Aprobó, HorasEstudio, Asistencia
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
1, 8.5, 96`,e.elements.nivelConfianza.value="0.95",e.elements.umbral.value="0.50",e.elements.incluirIntercepto.checked=!0}function ae(e,t){e.textContent=t,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function O(e){e.textContent="",e.classList.add("hidden")}function R(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function m(e,t=4){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}):e>0?"∞":"—"}function U(e){return e==null||!Number.isFinite(e)?"no disponible":e<.001?"< 0.001":`= ${m(e,4)}`}function D(e,t,o){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p class="text-xs uppercase tracking-widest font-black text-slate-500 mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-950">
                ${t}
            </p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                ${o}
            </p>
        </article>
    `}function Ue(e,t){const o=e.coeficientes.map((a,i)=>{const c=a.estimacion,s=m(Math.abs(c),6),l=c<0?"−":i===0?"":"+",r=a.termino==="Intercepto"?"":` · ${R(a.termino)}`;return`${l} ${s}${r}`.trim()});return`logit[P(${R(t)}=1)] = ${o.join(" ")}`}function Ge(e){const t=[],o=Math.min(e.distribucionRespuesta.proporcionPositivos,1-e.distribucionRespuesta.proporcionPositivos);return e.convergencia.posibleSeparacion&&t.push({nivel:"alto",titulo:"Posible separación completa",texto:"La clasificación perfecta y los coeficientes extremos pueden producir estimaciones inestables. Revise los datos y considere métodos penalizados."}),e.calibracion.p!==null&&e.calibracion.p<.05&&t.push({nivel:"medio",titulo:"Calibración cuestionable",texto:"Hosmer–Lemeshow resulta significativo. Examine el gráfico de calibración, la forma funcional y posibles interacciones."}),e.diagnosticos.vif.some(a=>a.vif>=10)?t.push({nivel:"alto",titulo:"Multicolinealidad severa",texto:"Al menos un predictor presenta VIF de 10 o más. Los coeficientes y sus errores estándar pueden ser inestables."}):e.diagnosticos.vif.some(a=>a.vif>=5)&&t.push({nivel:"medio",titulo:"Multicolinealidad moderada",texto:"Al menos un predictor presenta VIF entre 5 y 10. Revise redundancia conceptual y correlaciones entre predictores."}),e.diagnosticos.observacionesInfluyentes.length&&t.push({nivel:"medio",titulo:"Observaciones influyentes",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} casos mediante residuos, leverage o distancia de Cook.`}),o<.2&&t.push({nivel:"medio",titulo:"Clases desequilibradas",texto:"La categoría menos frecuente representa menos del 20 % de la muestra. La exactitud global puede ser engañosa; priorice sensibilidad, especificidad, F1 y AUC."}),e.roc.auc<.6&&t.push({nivel:"medio",titulo:"Discriminación limitada",texto:"El AUC es menor que 0.60. El modelo apenas separa las categorías y requiere revisión sustantiva o nuevos predictores."}),t.length?`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${t.map(a=>`
                    <article class="rounded-2xl border p-5 ${a.nivel==="alto"?"border-red-200 bg-red-50 text-red-950":"border-amber-200 bg-amber-50 text-amber-950"}">
                        <h3 class="font-black mb-2">${a.titulo}</h3>
                        <p class="text-sm leading-relaxed">${a.texto}</p>
                    </article>
                `).join("")}
        </div>
    `:`
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <strong class="block mb-1">Sin alertas automáticas prioritarias</strong>
                Los indicadores revisados no muestran problemas graves, pero la validación del diseño y los supuestos sigue siendo necesaria.
            </div>
        `}function Te(e){return`
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
                    ${e.coeficientes.map(t=>`
                        <tr class="${t.p<.05?"bg-rose-50":""}">
                            <td class="px-4 py-3 font-black text-slate-900">${R(t.termino)}</td>
                            <td class="px-4 py-3 text-right">${m(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${m(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${m(t.z,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${U(t.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${m(t.oddsRatio,5)}</td>
                            <td class="px-4 py-3 text-right">[${m(t.intervaloOddsRatio.inferior,5)}, ${m(t.intervaloOddsRatio.superior,5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function _e(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Indicador</th>
                        <th class="px-4 py-3 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Log-verosimilitud",e.ajuste.logVerosimilitud],["Deviance",e.ajuste.deviance],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["R² de McFadden",e.ajuste.r2McFadden],["R² de Cox–Snell",e.ajuste.r2CoxSnell],["R² de Nagelkerke",e.ajuste.r2Nagelkerke]].map(([o,a])=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${o}</td>
                            <td class="px-4 py-3 text-right">${m(a,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Be(e){const t=e.clasificacion;return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Métrica</th>
                        <th class="px-4 py-3 text-right">Resultado</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Exactitud",t.exactitud],["Sensibilidad",t.sensibilidad],["Especificidad",t.especificidad],["Precisión positiva",t.precision],["Valor predictivo negativo",t.valorPredictivoNegativo],["F1",t.f1],["Exactitud balanceada",t.exactitudBalanceada]].map(([a,i])=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${a}</td>
                            <td class="px-4 py-3 text-right">${i===null?"—":`${m(i*100,2)} %`}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function He(e){return e.diagnosticos.vif.length?`
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
                    ${e.diagnosticos.vif.map(t=>{const o=t.vif>=10?"Severa":t.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <td class="px-4 py-3 font-black text-slate-900">${R(t.variable)}</td>
                                <td class="px-4 py-3 text-right">${m(t.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${m(t.vif,4)}</td>
                                <td class="px-4 py-3">${o}</td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>
    `:`
            <p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El VIF no aplica cuando el modelo contiene un solo predictor.
            </p>
        `}function Xe(e){return`
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
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoPearson)>2||t.distanciaCook>4/e.n||t.leverage>2*(e.numeroPredictores+1)/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${t.observacion}</td>
                                <td class="px-4 py-3 text-right">${t.observado}</td>
                                <td class="px-4 py-3 text-right">${m(t.probabilidad,6)}</td>
                                <td class="px-4 py-3 text-right font-black">${t.clasePredicha}</td>
                                <td class="px-4 py-3 text-right">${m(t.residuoPearson,4)}</td>
                                <td class="px-4 py-3 text-right">${m(t.residuoDeviance,4)}</td>
                                <td class="px-4 py-3 text-right">${m(t.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${m(t.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ye(e){return`
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
                ${e.nombresPredictores.map((t,o)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-rose-950 mb-2">
                            ${R(t)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${o}"
                            class="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                            placeholder="Valor de ${R(t)}"
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
    `}function Ke(e,t){const o=e.pruebaGlobal.p!==null&&e.pruebaGlobal.p<.05;return`
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

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${o?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${o?"Modelo global significativo":"Modelo global no significativo al 5 %"}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${Ue(e,t.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${D("χ² global",m(e.pruebaGlobal.chiCuadrado,4),`p ${U(e.pruebaGlobal.p)}`)}
            ${D("R² Nagelkerke",m(e.ajuste.r2Nagelkerke,4),"Pseudo-R² escalado entre 0 y 1")}
            ${D("AUC",m(e.roc.auc,4),"Capacidad discriminativa global")}
            ${D("Exactitud",`${m(e.clasificacion.exactitud*100,2)} %`,`Umbral ${m(e.clasificacion.umbral,2)}`)}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${Ge(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Efectos individuales</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de probabilidades</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Cada prueba Wald contrasta si el coeficiente difiere de cero. La OR expresa el cambio multiplicativo de las odds por una unidad del predictor, manteniendo constantes los demás.
            </p>
            ${Te(e)}
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Ajuste relativo</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Indicadores del modelo</h2>
                <p class="text-slate-600 leading-relaxed mb-6">AIC y BIC sirven principalmente para comparar modelos estimados sobre la misma muestra y variable dependiente; valores menores son preferibles.</p>
                ${_e(e)}
            </article>

            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Rendimiento de clasificación</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Métricas con el umbral seleccionado</h2>
                <p class="text-slate-600 leading-relaxed mb-6">Cambiar el umbral modifica sensibilidad, especificidad y los errores de clasificación; debe elegirse según el objetivo y costo de los errores.</p>
                ${Be(e)}
            </article>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${He(e)}
        </section>

        ${Fe(e,t.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Probabilidades y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo elevado, leverage o distancia de Cook. Nunca elimine casos únicamente por un criterio automático.</p>
            ${Xe(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(a=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${R(a)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${Ye(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                La significación estadística de un coeficiente no implica importancia práctica. Las razones de probabilidades dependen de la escala de cada predictor y no equivalen directamente a cambios de probabilidad. Para fines predictivos, el modelo debe evaluarse con validación externa o partición de datos, especialmente cuando se seleccionaron variables utilizando la misma muestra.
            </p>
        </section>
    `}function We(e,t){const o=["REGRESIÓN LOGÍSTICA BINARIA — LABORATORIO KERNEL","",`Variable dependiente: ${t.nombreDependiente} (evento = 1)`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`χ² global = ${m(e.pruebaGlobal.chiCuadrado,4)}`,`p del modelo ${U(e.pruebaGlobal.p)}`,`R² Nagelkerke = ${m(e.ajuste.r2Nagelkerke,4)}`,`AUC = ${m(e.roc.auc,4)}`,`Exactitud = ${m(e.clasificacion.exactitud*100,2)} %`,`Sensibilidad = ${e.clasificacion.sensibilidad===null?"no calculable":`${m(e.clasificacion.sensibilidad*100,2)} %`}`,`Especificidad = ${e.clasificacion.especificidad===null?"no calculable":`${m(e.clasificacion.especificidad*100,2)} %`}`,"","Coeficientes:"];return e.coeficientes.forEach(a=>{o.push(`${a.termino}: B = ${m(a.estimacion,6)}, OR = ${m(a.oddsRatio,5)}, z = ${m(a.z,4)}, p ${U(a.p)}`)}),o.push("","Interpretación:"),e.interpretacion.forEach(a=>o.push(`- ${a}`)),o.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),o.join(`
`)}function Ze(e){return`"${String(e??"").replaceAll('"','""')}"`}function Je(e,t){const a=[["REGRESIÓN LOGÍSTICA BINARIA"],["Variable dependiente",t.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["Chi-cuadrado global",e.pruebaGlobal.chiCuadrado],["p del modelo",e.pruebaGlobal.p],["R2 McFadden",e.ajuste.r2McFadden],["R2 Cox-Snell",e.ajuste.r2CoxSnell],["R2 Nagelkerke",e.ajuste.r2Nagelkerke],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["AUC",e.roc.auc],["Umbral",e.clasificacion.umbral],["Exactitud",e.clasificacion.exactitud],["Sensibilidad",e.clasificacion.sensibilidad],["Especificidad",e.clasificacion.especificidad],[],["Término","Coeficiente","Error estándar","z","p","Odds ratio","IC OR inferior","IC OR superior"],...e.coeficientes.map(s=>[s.termino,s.estimacion,s.errorEstandar,s.z,s.p,s.oddsRatio,s.intervaloOddsRatio.inferior,s.intervaloOddsRatio.superior]),[],["Observación","Observado","Probabilidad","Clase predicha","Residuo Pearson","Residuo deviance","Leverage","Distancia de Cook"],...e.datosGrafico.map(s=>[s.observacion,s.observado,s.probabilidad,s.clasePredicha,s.residuoPearson,s.residuoDeviance,s.leverage,s.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(s=>s.map(Ze).join(",")).join(`
`),i=new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(i),c.download="regresion-logistica-binaria-kernel.csv",c.click(),URL.revokeObjectURL(c.href)}async function Qe(e,t,o){const a=We(e,t),i=o.textContent;try{await navigator.clipboard.writeText(a),o.textContent="Reporte copiado"}catch{const c=document.createElement("textarea");c.value=a,document.body.appendChild(c),c.select(),document.execCommand("copy"),c.remove(),o.textContent="Reporte copiado"}window.setTimeout(()=>{o.textContent=i},1800)}export{et as CalculadoraRegresionLogistica};
