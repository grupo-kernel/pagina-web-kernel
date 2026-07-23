import{p as $e}from"./exportacionesCalculadoras-BiNXW7QL.js";const $=1e-10,C=35;function te(e,t,a=5){if(!Array.isArray(t)||t.length<a)throw new Error(`${e} debe contener al menos ${a} observaciones.`);const o=t.map(s=>s==null||typeof s=="string"&&s.trim()===""?NaN:Number(s));if(!o.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return o}function Me(e){return e[0].map((t,a)=>e.map(o=>o[a]))}function H(e,t){return e.map(a=>a.reduce((o,s,i)=>o+s*t[i],0))}function ue(e){const t=e.length,a=e.map((o,s)=>[...o.map(Number),...Array.from({length:t},(i,n)=>s===n?1:0)]);for(let o=0;o<t;o+=1){let s=o;for(let n=o+1;n<t;n+=1)Math.abs(a[n][o])>Math.abs(a[s][o])&&(s=n);if(Math.abs(a[s][o])<$)throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");[a[o],a[s]]=[a[s],a[o]];const i=a[o][o];a[o]=a[o].map(n=>n/i);for(let n=0;n<t;n+=1){if(n===o)continue;const l=a[n][o];a[n]=a[n].map((r,c)=>r-l*a[o][c])}}return a.map(o=>o.slice(t))}function D(e,t){return e.reduce((a,o,s)=>a+o*t[s],0)}function be(e,t){const a=e[0].length;return Array.from({length:a},(o,s)=>[...t?[1]:[],...e.map(i=>i[s])])}function le(e,t,a){const o=e[0].length,s=Array.from({length:o},()=>Array(o).fill(0)),i=Array(o).fill(0);e.forEach((l,r)=>{const c=Math.max(a[r],$);for(let d=0;d<o;d+=1){i[d]+=l[d]*c*t[r];for(let p=0;p<o;p+=1)s[d][p]+=l[d]*c*l[p]}});const n=ue(s);return{beta:H(n,i),covarianza:n,xtwx:s}}function P(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-P(1-e);let a=.9999999999998099;const o=e-1;t.forEach((i,n)=>{a+=i/(o+n+1)});const s=o+t.length-.5;return .5*Math.log(2*Math.PI)+(o+.5)*Math.log(s)-s+Math.log(a)}function we(e,t){if(t<=0)return 1;const a=200,o=1e-14;if(t<e+1){let r=1/e,c=r,d=e;for(let m=1;m<=a&&(d+=1,r*=t/d,c+=r,!(Math.abs(r)<Math.abs(c)*o));m+=1);const p=c*Math.exp(-t+e*Math.log(t)-P(e));return Math.max(0,Math.min(1,1-p))}let s=t+1-e,i=1/1e-300,n=1/s,l=n;for(let r=1;r<=a;r+=1){const c=-r*(r-e);s+=2,n=c*n+s,Math.abs(n)<1e-300&&(n=1e-300),i=s+c/i,Math.abs(i)<1e-300&&(i=1e-300),n=1/n;const d=n*i;if(l*=d,Math.abs(d-1)<o)break}return Math.max(0,Math.min(1,Math.exp(-t+e*Math.log(t)-P(e))*l))}function ke(e,t){return!Number.isFinite(e)||e<0||t<=0?null:we(t/2,e/2)}function Ce(e){const t=e<0?-1:1,a=Math.abs(e)/Math.sqrt(2),o=1/(1+.3275911*a),s=1-((((1.061405429*o-1.453152027)*o+1.421413741)*o-.284496736)*o+.254829592)*o*Math.exp(-a*a);return .5*(1+t*s)}function je(e){return Number.isFinite(e)?Math.max(0,Math.min(1,2*(1-Ce(Math.abs(e))))):0}function Ee(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],a=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],o=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],s=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],i=.02425,n=1-i;if(!(e>0&&e<1))throw new Error("Probabilidad inválida.");if(e<i){const c=Math.sqrt(-2*Math.log(e));return(((((o[0]*c+o[1])*c+o[2])*c+o[3])*c+o[4])*c+o[5])/((((s[0]*c+s[1])*c+s[2])*c+s[3])*c+1)}if(e>n){const c=Math.sqrt(-2*Math.log(1-e));return-(((((o[0]*c+o[1])*c+o[2])*c+o[3])*c+o[4])*c+o[5])/((((s[0]*c+s[1])*c+s[2])*c+s[3])*c+1)}const l=e-.5,r=l*l;return(((((t[0]*r+t[1])*r+t[2])*r+t[3])*r+t[4])*r+t[5])*l/(((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+1)}function ce(e,t){return e.reduce((a,o,s)=>a+o*Math.log(Math.max(t[s],$))-t[s]-P(o+1),0)}function F(e,t,a){const o=1/Math.max(a,$);return e.reduce((s,i,n)=>{const l=Math.max(t[n],$);return s+P(i+o)-P(o)-P(i+1)+o*Math.log(o/(o+l))+i*Math.log(l/(o+l))},0)}function Ae(e,t){return 2*e.reduce((a,o,s)=>{const i=Math.max(t[s],$);return a+(o===0?i:o*Math.log(o/i)-(o-i))},0)}function Ie(e,t,a){return 2*e.reduce((o,s,i)=>{const n=Math.max(t[i],$),l=s===0?0:s*Math.log(s/n),r=(s+1/a)*Math.log((s+1/a)/(n+1/a));return o+l-r},0)}function ae({matrizX:e,y:t,offset:a,modelo:o,alphaInicial:s=.1,maxIteraciones:i=120,tolerancia:n=1e-8}){const l=e[0].length;let r=Array(l).fill(0),c=Math.max(s,1e-8),d=null,p=t.map(g=>Math.max(g+.1,.1)),m=!1,u=0;for(let g=1;g<=i;g+=1){const k=e.map((M,w)=>D(M,r)+a[w]);p=k.map(M=>Math.exp(Math.max(-C,Math.min(C,M))));const G=p.map(M=>o==="negativa"?M+c*M**2:M),X=p.map((M,w)=>Math.max(M**2/Math.max(G[w],$),$)),Y=p.map((M,w)=>k[w]+(t[w]-M)/Math.max(M,$)-a[w]),L=le(e,Y,X),J=Math.max(...L.beta.map((M,w)=>Math.abs(M-r[w])));r=L.beta,d=L.covarianza;let O=0;if(o==="negativa"){const M=t.reduce((N,R,T)=>N+((R-p[T])**2-p[T]),0),w=p.reduce((N,R)=>N+R**2,0),I=Math.max(1e-8,M/Math.max(w,$));O=Math.abs(I-c),c=.5*c+.5*I}if(u=g,J<n&&O<Math.sqrt(n)){m=!0;break}}p=e.map((g,k)=>D(g,r)+a[k]).map(g=>Math.exp(Math.max(-C,Math.min(C,g))));const v=p.map(g=>o==="negativa"?g+c*g**2:g),j=p.map((g,k)=>g**2/Math.max(v[k],$));if(d=le(e,Array(t.length).fill(0),j).covarianza,!r.every(Number.isFinite)||!p.every(Number.isFinite)||!v.every(Number.isFinite)||!d.flat().every(Number.isFinite)||!Number.isFinite(c))throw new Error("El ajuste produjo resultados no finitos. Revise valores extremos, exposición y escala de los predictores.");return{beta:r,mu:p,alpha:c,covarianza:d,convergio:m,iteraciones:u,varianzas:v}}function Pe(e,t){const a=Math.log(1e-8),o=Math.log(1e4),s=(Math.sqrt(5)-1)/2;let i=a,n=o,l=n-s*(n-i),r=i+s*(n-i),c=F(e,t,Math.exp(l)),d=F(e,t,Math.exp(r));for(let p=0;p<100;p+=1)c>d?(n=r,r=l,d=c,l=n-s*(n-i),c=F(e,t,Math.exp(l))):(i=l,l=r,c=d,r=i+s*(n-i),d=F(e,t,Math.exp(r)));return Math.exp((i+n)/2)}function Le(e,t){return e.length<2?[]:e.map((a,o)=>{const s=e.filter((r,c)=>c!==o),i=be(s,!0),n=Me(i),l=n.map(r=>i[0].map((c,d)=>r.reduce((p,m,u)=>p+m*i[u][d],0)));try{const r=H(ue(l),n.map(b=>D(b,a))),c=H(i,r),d=a.reduce((b,v)=>b+v,0)/a.length,p=a.reduce((b,v)=>b+(v-d)**2,0),m=a.reduce((b,v,j)=>b+(v-c[j])**2,0),u=Math.max(1-(p>$?1-m/p:1),$);return{variable:t[o],tolerancia:u,vif:1/u}}catch{return{variable:t[o],tolerancia:0,vif:1/0}}})}function de({y:e,predictores:t,nombres:a,incluirIntercepto:o,exposicion:s,modelo:i,nivelConfianza:n}){const l=be(t,o),r=s.map(h=>Math.log(h)),c=l[0].length,d=e.length,p=d-c;if(p<=0)throw new Error("No hay suficientes observaciones para estimar el modelo.");const m=ae({matrizX:l,y:e,offset:r,modelo:"poisson"}),u=e.reduce((h,x,y)=>h+(x-m.mu[y])**2/Math.max(m.mu[y],$),0)/p,b=ae({matrizX:l,y:e,offset:r,modelo:i,alphaInicial:Math.max(.05,(u-1)/Math.max(e.reduce((h,x)=>h+x,0)/d,1))});if(!b.convergio)throw new Error(`El modelo ${i==="poisson"?"de Poisson":"binomial negativo"} no alcanzó convergencia. Revise valores extremos, colinealidad y tamaño muestral.`);const v=i==="poisson"?ce(e,b.mu):F(e,b.mu,b.alpha),j=i==="poisson"?Ae(e,b.mu):Ie(e,b.mu,b.alpha),g=e.reduce((h,x,y)=>h+(x-b.mu[y])**2/Math.max(b.varianzas[y],$),0),k=g/p,G=c+(i==="negativa"?1:0),X=-2*v+2*G,Y=-2*v+Math.log(d)*G,L=Ee(.5+n/2),J=1-n,O=[...o?["Intercepto"]:[],...a],M=b.beta.map((h,x)=>{const y=Math.sqrt(Math.max(b.covarianza[x][x],0)),B=y>$?h/y:1/0,ye=je(B),ne=h-L*y,ie=h+L*y;return{termino:O[x],estimacion:h,errorEstandar:y,z:B,p:ye,intervaloConfianza:{inferior:ne,superior:ie,nivel:n},irr:Math.exp(Math.max(-C,Math.min(C,h))),intervaloIrr:{inferior:Math.exp(Math.max(-C,Math.min(C,ne))),superior:Math.exp(Math.max(-C,Math.min(C,ie))),nivel:n}}}),w=o?ae({matrizX:Array.from({length:d},()=>[1]),y:e,offset:r,modelo:i,alphaInicial:b.alpha}):(()=>{const h=r.map(x=>Math.exp(Math.max(-C,Math.min(C,x))));return{mu:h,alpha:i==="negativa"?Pe(e,h):0}})(),I=i==="poisson"?ce(e,w.mu):F(e,w.mu,w.alpha),N=Math.max(0,2*(v-I)),R=t.length,T=ke(N,R),ge=I!==0?1-v/I:null,z=l.map((h,x)=>{const y=H(b.covarianza,h),B=b.mu[x]**2/Math.max(b.varianzas[x],$);return Math.max(0,Math.min(.999999,B*D(h,y)))}),V=e.map((h,x)=>(h-b.mu[x])/Math.sqrt(Math.max(b.varianzas[x],$))),W=e.map((h,x)=>{const y=i==="poisson"?2*(h===0?b.mu[x]:h*Math.log(h/b.mu[x])-(h-b.mu[x])):2*((h===0?0:h*Math.log(h/b.mu[x]))-(h+1/b.alpha)*Math.log((h+1/b.alpha)/(b.mu[x]+1/b.alpha)));return Math.sign(h-b.mu[x])*Math.sqrt(Math.max(y,0))}),Z=V.map((h,x)=>h**2*z[x]/(c*Math.max((1-z[x])**2,$))),fe=e.map((h,x)=>({observacion:x+1,observado:h,ajustado:b.mu[x],residuoPearson:V[x],residuoDeviance:W[x],leverage:z[x],distanciaCook:Z[x]})).filter(h=>Math.abs(h.residuoPearson)>2||h.leverage>2*c/d||h.distanciaCook>4/d),re=e.filter(h=>h===0).length,ee=b.mu.reduce((h,x)=>{if(i==="poisson")return h+Math.exp(-x);const y=1/b.alpha;return h+(y/(y+x))**y},0),ve=Le(t,a);return{tipoModelo:i,n:d,numeroPredictores:t.length,incluirIntercepto:o,nivelConfianza:n,alfa:J,nombresPredictores:a,convergencia:{convergio:b.convergio,iteraciones:b.iteraciones},dispersion:{pearson:g,gradosLibertad:p,indice:k,alpha:i==="negativa"?b.alpha:0},coeficientes:M,ajuste:{logVerosimilitud:v,logVerosimilitudNula:I,deviance:j,aic:X,bic:Y,r2McFadden:ge},pruebaGlobal:{chiCuadrado:N,gradosLibertad:R,p:T},diagnosticos:{residuosPearson:V,residuosDeviance:W,leverage:z,distanciaCook:Z,observacionesInfluyentes:fe,vif:ve,cerosObservados:re,cerosEsperados:ee,razonCeros:ee>$?re/ee:null},valoresAjustados:b.mu,exposicion:s,datosGrafico:e.map((h,x)=>({observacion:x+1,observado:h,ajustado:b.mu[x],tasaAjustada:b.mu[x]/s[x],exposicion:s[x],residuoPearson:V[x],residuoDeviance:W[x],leverage:z[x],distanciaCook:Z[x],predictores:t.map(y=>y[x])}))}}function Ne(e){const t=e.seleccionado,a=t.alfa??.05;return[`Se seleccionó ${t.tipoModelo==="poisson"?"regresión de Poisson":"regresión binomial negativa"} para modelar la media del conteo mediante un enlace logarítmico.`,t.pruebaGlobal.p!==null&&t.pruebaGlobal.p<a?`El modelo global mejora significativamente al modelo nulo (χ² = ${t.pruebaGlobal.chiCuadrado.toFixed(4)}, gl = ${t.pruebaGlobal.gradosLibertad}, p ${t.pruebaGlobal.p<.001?"< 0.001":`= ${t.pruebaGlobal.p.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística con α = ${a.toFixed(3)}.`,`El índice de dispersión de Pearson es ${t.dispersion.indice.toFixed(3)}.`,t.diagnosticos.observacionesInfluyentes.length?`Se identificaron ${t.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",t.diagnosticos.razonCeros!==null&&t.diagnosticos.razonCeros>1.5?"Se observan más ceros de los esperados por el modelo; conviene valorar un modelo inflado en ceros o con componente hurdle.":"La cantidad de ceros no muestra una discrepancia automática severa respecto al modelo seleccionado.","Las razones de tasas de incidencia se interpretan manteniendo constantes los demás predictores y considerando la unidad de exposición utilizada."]}function Re({y:e,X:t,nombresPredictores:a=[],incluirIntercepto:o=!0,exposicion:s=null,modelo:i="automatico",nivelConfianza:n=.95}){const l=te("La variable de conteo",e,6);if(!l.every(g=>Number.isInteger(g)&&g>=0))throw new Error("La variable dependiente debe contener enteros no negativos.");if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const r=t.map((g,k)=>te(a[k]||`X${k+1}`,g,6));if(!r.every(g=>g.length===l.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(n>0&&n<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");const c=r.map((g,k)=>a[k]||`X${k+1}`),d=s===null?Array(l.length).fill(1):te("La exposición",s,6);if(d.length!==l.length||!d.every(g=>g>0))throw new Error("La exposición debe ser positiva y tener una fila por observación.");const p={y:l,predictores:r,nombres:c,incluirIntercepto:o,exposicion:d,nivelConfianza:n},m=de({...p,modelo:"poisson"});let u=null;if(i!=="poisson"||m.dispersion.indice>1.2)try{u=de({...p,modelo:"negativa"})}catch(g){if(i==="negativa")throw g}let b=m,v="Poisson fue solicitado explícitamente.";if(i==="negativa")b=u,v="La binomial negativa fue solicitada explícitamente.";else if(i==="automatico"&&u){const g=m.ajuste.aic-u.ajuste.aic;m.dispersion.indice>1.5&&g>2?(b=u,v=`Se seleccionó binomial negativa por sobredispersión (φ = ${m.dispersion.indice.toFixed(3)}) y menor AIC (ΔAIC = ${g.toFixed(3)}).`):v=`Se mantuvo Poisson porque la sobredispersión o la mejora de AIC no justificaron cambiar de modelo (φ = ${m.dispersion.indice.toFixed(3)}).`}const j={tipoAnalisis:"regresion-conteo",modeloSolicitado:i,nivelConfianza:n,alfa:1-n,seleccionado:b,comparacion:{poisson:{aic:m.ajuste.aic,bic:m.ajuste.bic,deviance:m.ajuste.deviance,dispersion:m.dispersion.indice},negativa:u?{aic:u.ajuste.aic,bic:u.ajuste.bic,deviance:u.ajuste.deviance,dispersion:u.dispersion.indice,alpha:u.dispersion.alpha}:null,criterioSeleccion:v}};return j.interpretacion=Ne(j),j}function Fe(e,t,a=1){const o=e?.seleccionado||e;if(!o?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==o.numeroPredictores)throw new Error(`Debe proporcionar ${o.numeroPredictores} valores predictores.`);const s=t.map(d=>d==null||typeof d=="string"&&d.trim()===""?NaN:Number(d)),i=a==null||typeof a=="string"&&a.trim()===""?NaN:Number(a);if(!s.every(Number.isFinite)||!(i>0))throw new Error("Los predictores deben ser numéricos y la exposición debe ser positiva.");const n=o.coeficientes.map(d=>d.estimacion),l=[...o.incluirIntercepto?[1]:[],...s],r=D(l,n),c=Math.exp(Math.max(-C,Math.min(C,r)));return{predictorLineal:r,tasa:c,exposicion:i,conteoEsperado:c*i}}function xe(e,t=.08){const a=e.filter(Number.isFinite),o=Math.min(...a),s=Math.max(...a),i=Math.max(s-o,1);return{minimo:o-i*t,maximo:s+i*t}}function K(e,t,a,o){return a+(e-t.minimo)/Math.max(t.maximo-t.minimo,1e-12)*(o-a)}function pe(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function S(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-S(1-e);let a=.9999999999998099;const o=e-1;t.forEach((i,n)=>{a+=i/(o+n+1)});const s=o+t.length-.5;return .5*Math.log(2*Math.PI)+(o+.5)*Math.log(s)-s+Math.log(a)}function ze(e,t){return Math.exp(-t+e*Math.log(Math.max(t,1e-12))-S(e+1))}function Se(e,t,a){const o=1/Math.max(a,1e-10);return Math.exp(S(e+o)-S(o)-S(e+1)+o*Math.log(o/(o+t))+e*Math.log(t/(o+t)))}function q(e,t,a,o){return`
        <article
            data-grafico-exportable="true"
            data-grafico-id="${e}"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden"
        >
            <h3 class="text-2xl font-black text-slate-900 mb-2">${t}</h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">${a}</p>
            ${o}
        </article>
    `}function he({ancho:e,alto:t,izquierda:a,derecha:o,arriba:s,abajo:i}){return`
        <line x1="${a}" y1="${s}" x2="${a}" y2="${t-i}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
        <line x1="${a}" y1="${t-i}" x2="${e-o}" y2="${t-i}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
    `}function De(e){const t=e.datosGrafico,a=xe(t.flatMap(p=>[p.observado,p.ajustado])),o=600,s=320,i=55,n=28,l=25,r=52,c=p=>K(p,a,i,o-n),d=p=>K(p,a,s-r,l);return q("observado-ajustado","Observado frente a ajustado","Los puntos próximos a la diagonal representan observaciones con conteos bien aproximados por el modelo.",`<div class="overflow-x-auto">
            <svg viewBox="0 0 ${o} ${s}" class="min-w-[560px] w-full" role="img" aria-label="Conteos observados frente a valores ajustados">
                ${he({ancho:o,alto:s,izquierda:i,derecha:n,arriba:l,abajo:r})}
                <line x1="${c(a.minimo)}" y1="${d(a.minimo)}" x2="${c(a.maximo)}" y2="${d(a.maximo)}" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" class="text-slate-400" />
                ${t.map(p=>`
                    <circle cx="${c(p.ajustado)}" cy="${d(p.observado)}" r="5" fill="currentColor" class="text-sky-700">
                        <title>Obs. ${p.observacion}: observado ${p.observado}, ajustado ${p.ajustado.toFixed(4)}</title>
                    </circle>
                `).join("")}
                <text x="${o/2}" y="${s-12}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo ajustado</text>
                <text x="15" y="${s/2}" transform="rotate(-90 15 ${s/2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo observado</text>
            </svg>
        </div>`)}function qe(e){const t=e.datosGrafico,a=xe(t.map(u=>u.ajustado)),o=Math.max(2.5,...t.map(u=>Math.abs(u.residuoPearson))),s={minimo:-o*1.1,maximo:o*1.1},i=600,n=320,l=55,r=28,c=25,d=52,p=u=>K(u,a,l,i-r),m=u=>K(u,s,n-d,c);return q("residuos-pearson","Residuos de Pearson","Una nube sin patrón claro alrededor de cero es compatible con una especificación razonable de la media y la varianza.",`<div class="overflow-x-auto">
            <svg viewBox="0 0 ${i} ${n}" class="min-w-[560px] w-full" role="img" aria-label="Residuos de Pearson frente a conteos ajustados">
                ${he({ancho:i,alto:n,izquierda:l,derecha:r,arriba:c,abajo:d})}
                <line x1="${l}" y1="${m(0)}" x2="${i-r}" y2="${m(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${l}" y1="${m(2)}" x2="${i-r}" y2="${m(2)}" stroke="currentColor" stroke-dasharray="5 5" class="text-amber-500" />
                <line x1="${l}" y1="${m(-2)}" x2="${i-r}" y2="${m(-2)}" stroke="currentColor" stroke-dasharray="5 5" class="text-amber-500" />
                ${t.map(u=>`
                    <circle cx="${p(u.ajustado)}" cy="${m(u.residuoPearson)}" r="5" fill="currentColor" class="${Math.abs(u.residuoPearson)>2?"text-red-600":"text-indigo-700"}">
                        <title>Obs. ${u.observacion}: residuo ${u.residuoPearson.toFixed(4)}</title>
                    </circle>
                `).join("")}
                <text x="${i/2}" y="${n-12}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo ajustado</text>
                <text x="15" y="${n/2}" transform="rotate(-90 15 ${n/2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Residuo de Pearson</text>
            </svg>
        </div>`)}function me(e,t){return e.datosGrafico.reduce((a,o)=>{const s=e.tipoModelo==="negativa"?Se(t,o.ajustado,e.dispersion.alpha):ze(t,o.ajustado);return a+s},0)}function Ge(e){const t=e.datosGrafico,a=Math.max(...t.map(l=>l.observado),1),o=Math.min(a,20),s=Array.from({length:o+1},(l,r)=>{const c=t.filter(p=>r<o?p.observado===r:p.observado>=r).length;let d;if(r<o||a<=o)d=me(e,r);else{const p=Array.from({length:o},(m,u)=>me(e,u)).reduce((m,u)=>m+u,0);d=Math.max(0,t.length-p)}return{conteo:r,observado:c,esperado:d}}),i=Math.max(...s.flatMap(l=>[l.observado,l.esperado]),1),n=e.tipoModelo==="negativa"?"binomial negativa":"Poisson";return q("distribucion-observada-esperada","Distribución observada y esperada",`Compara la frecuencia observada de los conteos con la frecuencia esperada bajo el modelo ${n} ajustado.`,`<div class="overflow-x-auto">
            <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${s.map(l=>`
                    <div class="flex flex-col items-center justify-end min-w-[48px] h-full">
                        <div class="flex items-end gap-1 h-[205px]">
                            <div class="w-4 bg-sky-700 rounded-t" style="height:${Math.max(3,l.observado/i*190)}px" title="Observado: ${l.observado}"></div>
                            <div class="w-4 bg-amber-500 rounded-t" style="height:${Math.max(3,l.esperado/i*190)}px" title="Esperado: ${l.esperado.toFixed(2)}"></div>
                        </div>
                        <span class="text-[10px] text-slate-600 mt-2">${l.conteo===o&&a>o?`${o}+`:l.conteo}</span>
                    </div>
                `).join("")}
            </div>
            <div class="flex flex-wrap gap-4 mt-4 text-xs font-bold text-slate-600">
                <span><span class="inline-block w-3 h-3 bg-sky-700 mr-1"></span>Observado</span>
                <span><span class="inline-block w-3 h-3 bg-amber-500 mr-1"></span>Esperado</span>
            </div>
        </div>`)}function Oe(e){const t=e.datosGrafico,a=4/e.n,o=Math.max(...t.map(n=>n.distanciaCook),a,1e-6),s=190,i=Math.min(s,a/o*s);return q("distancia-cook","Distancia de Cook",`La línea de referencia corresponde a 4/n = ${a.toFixed(4)}. Las observaciones que la superan requieren revisión sustantiva.`,`<div class="overflow-x-auto">
            <div class="relative h-64 border-b border-l border-slate-300 px-3 pt-4 flex items-end min-w-[560px]">
                <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-400" style="bottom:${24+i}px"></div>
                ${t.map(n=>`
                    <div class="flex flex-col items-center justify-end min-w-[34px] h-full">
                        <div class="w-5 ${n.distanciaCook>a?"bg-red-600":"bg-violet-600"} rounded-t" style="height:${Math.max(3,n.distanciaCook/o*s)}px" title="Obs. ${n.observacion}: Cook ${n.distanciaCook.toFixed(5)}"></div>
                        <span class="text-[9px] text-slate-500 mt-2">${n.observacion}</span>
                    </div>
                `).join("")}
            </div>
        </div>`)}function Te(e){const t=[{nombre:"Poisson",datos:e.poisson},...e.negativa?[{nombre:"Binomial negativa",datos:e.negativa}]:[]],a=t.map(n=>n.datos.aic),o=Math.min(...a),s=Math.max(...a.map(n=>n-o),1),i=Math.max(...t.map(n=>n.datos.dispersion),1);return q("comparacion-modelos","Comparación de modelos","AIC más bajo indica mejor equilibrio entre ajuste y complejidad. Un índice de dispersión próximo a 1 es compatible con la varianza asumida.",`<div class="space-y-6">
            ${t.map(n=>{const l=n.datos.aic-o,r=100-Math.min(90,l/s*90);return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <strong class="text-slate-900">${pe(n.nombre)}</strong>
                            <span class="text-sm text-slate-600">AIC ${n.datos.aic.toFixed(2)} · ΔAIC ${l.toFixed(2)} · φ ${n.datos.dispersion.toFixed(3)}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="h-5 rounded-full bg-slate-100 overflow-hidden" title="Preferencia relativa por AIC">
                                <div class="h-full bg-sky-700 rounded-full" style="width:${Math.max(6,r)}%"></div>
                            </div>
                            <div class="h-5 rounded-full bg-slate-100 overflow-hidden" title="Índice de dispersión">
                                <div class="h-full bg-amber-500 rounded-full" style="width:${Math.max(4,Math.min(100,n.datos.dispersion/i*100))}%"></div>
                            </div>
                        </div>
                    </div>
                `}).join("")}
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950 leading-relaxed">
                <strong>Criterio automático:</strong> ${pe(e.criterioSeleccion)}
            </div>
        </div>`)}function Ve(e){const t=e.seleccionado;return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">Diagnóstico visual</p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">Gráficos del modelo de conteo</h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine conjuntamente el ajuste, la dispersión, la forma de los residuos, las observaciones influyentes y la comparación entre modelos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${De(t)}
                ${qe(t)}
                ${Ge(t)}
                ${Oe(t)}
                ${Te(e.comparacion)}
            </div>
        </section>
    `}function ot(){const e=document.createElement("section");let t=null,a=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-amber-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-emerald-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modelos"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a modelos de regresión
                </button>

                <p class="uppercase tracking-[0.20em] text-amber-300 text-xs md:text-sm font-black mb-3">
                    Modelos lineales generalizados
                </p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión para variables de conteo
                </h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Ajuste modelos de Poisson o binomial negativa, evalúe la sobredispersión y estime razones de tasas de incidencia con exposición opcional.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Poisson</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Binomial negativa</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">IRR e intervalos</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Exposición y tasas</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                    Preparación metodológica
                </p>
                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Organice un conteo por fila
                </h2>
                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${U("Variable dependiente","La primera columna debe contener enteros no negativos: número de eventos, errores, visitas, publicaciones u otros conteos.")}
                    ${U("Predictores","Añada una columna por cada variable explicativa. Los coeficientes exponenciados se interpretan como razones de tasas de incidencia.")}
                    ${U("Exposición","Cuando las observaciones tienen tiempos o poblaciones en riesgo diferentes, coloque la exposición positiva en la última columna y active la opción correspondiente.")}
                    ${U("Elección del modelo","Poisson supone igualdad aproximada entre media y varianza condicional. La binomial negativa incorpora un parámetro adicional para sobredispersión.")}
                </div>
                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">Advertencia</h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Una cantidad excesiva de ceros puede requerir modelos inflados en ceros o hurdle. La herramienta mostrará una alerta, pero no sustituye la revisión del diseño y del proceso generador de datos.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion-conteo"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Modelo</span>
                        <select name="modelo" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500">
                            <option value="automatico">Selección automática</option>
                            <option value="poisson">Regresión de Poisson</option>
                            <option value="negativa">Regresión binomial negativa</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Nivel de confianza</span>
                        <select name="nivelConfianza" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500">
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <div class="space-y-3 pt-1 md:pt-7">
                        <label class="flex items-center gap-3 text-sm font-black text-slate-800">
                            <input type="checkbox" name="incluirIntercepto" checked class="w-5 h-5 rounded border-slate-300 text-amber-700 focus:ring-amber-500" />
                            Incluir intercepto
                        </label>
                        <label class="flex items-center gap-3 text-sm font-black text-slate-800">
                            <input type="checkbox" name="usarExposicion" class="w-5 h-5 rounded border-slate-300 text-amber-700 focus:ring-amber-500" />
                            Última columna = exposición
                        </label>
                    </div>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">Datos por filas</span>
                    <textarea
                        name="datos"
                        rows="15"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        placeholder="Eventos, Horas, Asistencia
1, 2, 70
3, 4, 78
5, 6, 85"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. La primera fila puede contener nombres.
                    </span>
                </label>

                <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 class="font-black text-slate-900">Importar archivo</h3>
                            <p class="text-sm text-slate-600 mt-1">Admite archivos CSV o TXT con la misma estructura de columnas.</p>
                        </div>
                        <input type="file" name="archivo" accept=".csv,.txt,text/csv,text/plain" class="block text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-3 file:font-black file:text-white hover:file:bg-slate-800" />
                    </div>
                </div>

                <div id="mensaje-error-conteo" class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900" role="alert" aria-live="polite"></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button type="submit" class="inline-flex items-center justify-center bg-amber-600 text-white font-black rounded-xl px-7 py-4 hover:bg-amber-700 transition-colors shadow-lg">
                        Ajustar modelo
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button type="button" data-action="cargar-ejemplo" class="inline-flex items-center justify-center border border-amber-300 text-amber-800 font-black rounded-xl px-6 py-4 hover:bg-amber-50 transition-colors">Cargar ejemplo</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors">Limpiar</button>
                </div>
            </form>
        </section>

        <section id="resultados-regresion-conteo" class="hidden mt-8" aria-live="polite"></section>
    `;const o=e.querySelector("#formulario-regresion-conteo"),s=e.querySelector("#mensaje-error-conteo"),i=e.querySelector("#resultados-regresion-conteo"),n=o.elements.archivo;return _e(o),n.addEventListener("change",async()=>{const l=n.files?.[0];if(l)try{o.elements.datos.value=await l.text(),_(s)}catch{oe(s,"No fue posible leer el archivo seleccionado.")}}),o.addEventListener("submit",l=>{l.preventDefault(),_(s);try{const r=Ue(o);t=Re(r),a=r.metadatos,i.innerHTML=We(t,a),$e({contenedor:i,nombre:"regresion-conteo",datos:{solicitud:r,metadatos:a,resultado:t}}),i.classList.remove("hidden"),i.scrollIntoView({behavior:"smooth",block:"start"})}catch(r){i.classList.add("hidden"),oe(s,r instanceof Error?r.message:"No fue posible ajustar el modelo de conteo.")}}),e.addEventListener("click",async l=>{const r=l.target.closest("[data-action]");if(!r)return;const c=r.dataset.action;if(c==="volver-modelos"){window.location.hash="/regresionModelos";return}if(c==="cargar-ejemplo"){He(o),i.classList.add("hidden"),_(s);return}if(c==="limpiar"){o.reset(),o.elements.incluirIntercepto.checked=!0,o.elements.datos.value="",i.classList.add("hidden"),_(s);return}if(t)if(c==="exportar-csv")tt(t,a);else if(c==="copiar-reporte")try{await navigator.clipboard.writeText(Ze(t,a)),r.textContent="Reporte copiado",setTimeout(()=>{r.textContent="Copiar interpretación"},1600)}catch{oe(s,"El navegador no permitió copiar el reporte.")}else c==="imprimir"&&window.print()}),e.addEventListener("submit",l=>{const r=l.target.closest("#formulario-prediccion-conteo");if(!r||!t)return;l.preventDefault();const c=r.querySelector("#resultado-prediccion-conteo");try{const d=[...r.querySelectorAll("[data-predictor]")].sort((u,b)=>Number(u.dataset.predictor)-Number(b.dataset.predictor)).map(u=>u.value.trim()===""?NaN:Number(u.value)),p=r.elements.exposicion.value.trim()===""?NaN:Number(r.elements.exposicion.value),m=Fe(t,d,p);c.innerHTML=`
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                    <p class="text-sm font-black uppercase tracking-widest text-emerald-700 mb-2">Predicción del modelo</p>
                    <p class="text-3xl font-black">${f(m.conteoEsperado,4)} eventos esperados</p>
                    <p class="mt-2 leading-relaxed">Tasa estimada: ${f(m.tasa,5)} por unidad de exposición. Exposición utilizada: ${f(m.exposicion,4)}.</p>
                </div>
            `}catch(d){c.innerHTML=`<div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">${E(d.message)}</div>`}}),e}function U(e,t){return`<div><h3 class="font-black text-slate-900 mb-1">${e}</h3><p>${t}</p></div>`}function Be(e){return e.trim().split(/[,;\t]/).map(t=>t.trim())}function Ue(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const a=t.split(/\n+/).map(Be).filter(m=>m.length);if(a.length<7)throw new Error("Introduzca al menos seis observaciones y, opcionalmente, una fila de encabezados.");const s=a[0].every(m=>m!==""&&Number.isFinite(Number(m)))?a[0].map((m,u)=>u===0?"Conteo":`X${u}`):a.shift(),i=s.length,n=e.elements.usarExposicion.checked;if(i<(n?3:2))throw new Error(n?"Se requieren conteo, al menos un predictor y exposición.":"Se requieren conteo y al menos un predictor.");if(!a.every(m=>m.length===i))throw new Error("Todas las filas deben tener la misma cantidad de columnas.");const r=a.map((m,u)=>m.map((b,v)=>{if(b==="")throw new Error(`La celda de la fila ${u+1}, columna ${v+1} está vacía.`);const j=Number(b);if(!Number.isFinite(j))throw new Error(`El valor de la fila ${u+1}, columna ${v+1} no es numérico.`);return j})),c=n?i-1:-1,d=Array.from({length:i-1-(n?1:0)},(m,u)=>u+1),p=s[0]||"Conteo";return{y:r.map(m=>m[0]),X:d.map(m=>r.map(u=>u[m])),nombresPredictores:d.map(m=>s[m]),incluirIntercepto:e.elements.incluirIntercepto.checked,exposicion:n?r.map(m=>m[c]):null,modelo:e.elements.modelo.value,nivelConfianza:Number(e.elements.nivelConfianza.value),metadatos:{nombreDependiente:p,nombreExposicion:n?s[c]:"Exposición igual a 1"}}}function _e(e){const t=sessionStorage.getItem("kernel-modelo-conteo");(t==="poisson"||t==="negativa")&&(e.elements.modelo.value=t),sessionStorage.removeItem("kernel-modelo-conteo")}function He(e){e.elements.modelo.value="automatico",e.elements.usarExposicion.checked=!0,e.elements.incluirIntercepto.checked=!0,e.elements.datos.value=`Incidentes, HorasCapacitacion, Personal, Exposicion
0, 1, 8, 1.0
1, 2, 10, 1.0
0, 2, 9, 0.8
3, 3, 12, 1.2
1, 4, 11, 1.0
4, 4, 14, 1.1
2, 5, 13, 1.0
7, 5, 16, 1.3
3, 6, 15, 1.0
9, 6, 18, 1.4
4, 7, 17, 1.1
12, 7, 20, 1.5
6, 8, 19, 1.2
15, 8, 22, 1.6
8, 9, 21, 1.2
18, 9, 24, 1.7
10, 10, 23, 1.3
22, 10, 26, 1.8`}function f(e,t=4){return e==null||!Number.isFinite(Number(e))?"—":Number(e).toLocaleString("es-DO",{maximumFractionDigits:t})}function Q(e){return e===null||!Number.isFinite(Number(e))?"—":e<.001?"< 0.001":`= ${Number(e).toFixed(4)}`}function E(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function se(e){return e.tipoModelo==="poisson"?"Regresión de Poisson":"Regresión binomial negativa"}function A(e,t,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">${e}</p>
            <p class="text-2xl font-black text-slate-900 break-words">${t}</p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">${a}</p>
        </article>
    `}function Ke(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Coeficientes y razones de incidencia del modelo de conteo
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Término</th>
                        <th scope="col" class="px-4 py-3 text-right">B</th>
                        <th scope="col" class="px-4 py-3 text-right">EE</th>
                        <th scope="col" class="px-4 py-3 text-right">z</th>
                        <th scope="col" class="px-4 py-3 text-right">p</th>
                        <th scope="col" class="px-4 py-3 text-right">IRR</th>
                        <th scope="col" class="px-4 py-3 text-right">IC de la IRR</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(t=>`
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${E(t.termino)}</th>
                            <td class="px-4 py-3 text-right">${f(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${f(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${f(t.z,4)}</td>
                            <td class="px-4 py-3 text-right">${Q(t.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${f(t.irr,5)}</td>
                            <td class="px-4 py-3 text-right">[${f(t.intervaloIrr.inferior,5)}, ${f(t.intervaloIrr.superior,5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Qe(e){return e.diagnosticos.vif.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnóstico de multicolinealidad mediante tolerancia y VIF
                </caption>
                <thead class="bg-slate-100 text-slate-700">
                    <tr><th scope="col" class="px-4 py-3 text-left">Predictor</th><th scope="col" class="px-4 py-3 text-right">Tolerancia</th><th scope="col" class="px-4 py-3 text-right">VIF</th><th scope="col" class="px-4 py-3 text-left">Lectura</th></tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.diagnosticos.vif.map(t=>`
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black">${E(t.variable)}</th>
                            <td class="px-4 py-3 text-right">${f(t.tolerancia,4)}</td>
                            <td class="px-4 py-3 text-right">${f(t.vif,4)}</td>
                            <td class="px-4 py-3">${t.vif>=10?"Severa":t.vif>=5?"Moderada":"Aceptable"}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `:'<p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">El VIF no aplica a un modelo con un solo predictor.</p>'}function Xe(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[460px]">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnósticos del modelo de conteo por observación
                </caption>
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-right">Obs.</th>
                        <th scope="col" class="px-4 py-3 text-right">Observado</th>
                        <th scope="col" class="px-4 py-3 text-right">Ajustado</th>
                        <th scope="col" class="px-4 py-3 text-right">Tasa</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo P.</th>
                        <th scope="col" class="px-4 py-3 text-right">Leverage</th>
                        <th scope="col" class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoPearson)>2||t.distanciaCook>4/e.n?"bg-red-50":""}">
                                <th scope="row" class="px-4 py-3 text-right font-black">${t.observacion}</th>
                                <td class="px-4 py-3 text-right">${t.observado}</td>
                                <td class="px-4 py-3 text-right">${f(t.ajustado,5)}</td>
                                <td class="px-4 py-3 text-right">${f(t.tasaAjustada,5)}</td>
                                <td class="px-4 py-3 text-right">${f(t.residuoPearson,4)}</td>
                                <td class="px-4 py-3 text-right">${f(t.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${f(t.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ye(e){const t=e.seleccionado,a=[];return t.dispersion.indice>1.5&&t.tipoModelo==="poisson"&&a.push("El modelo de Poisson conserva sobredispersión importante; revise la binomial negativa o una especificación alternativa."),t.diagnosticos.razonCeros!==null&&t.diagnosticos.razonCeros>1.5&&a.push("La cantidad de ceros observada supera ampliamente la esperada; considere modelos inflados en ceros o hurdle."),t.diagnosticos.vif.some(o=>o.vif>=5)&&a.push("Existe multicolinealidad moderada o severa en al menos un predictor."),t.diagnosticos.observacionesInfluyentes.length&&a.push(`Se identificaron ${t.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`),a.length||a.push("Los diagnósticos automáticos no detectaron alertas severas; aun así, revise los gráficos y la coherencia sustantiva del modelo."),`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${a.map(o=>`<div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 leading-relaxed">${E(o)}</div>`).join("")}</div>`}function Je(e){return`
        <form id="formulario-prediccion-conteo" class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Aplicación del modelo</p>
            <h2 class="text-2xl md:text-3xl font-black text-emerald-950 mb-3">Predecir un nuevo conteo</h2>
            <p class="text-emerald-900 leading-relaxed mb-6 max-w-4xl">Introduzca los predictores y la exposición. Evite extrapolar fuera del rango observado.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((t,a)=>`
                    <label class="block"><span class="block text-sm font-black text-emerald-950 mb-2">${E(t)}</span><input type="number" step="any" required data-predictor="${a}" class="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
                `).join("")}
                <label class="block"><span class="block text-sm font-black text-emerald-950 mb-2">Exposición</span><input type="number" step="any" min="0.000001" value="1" required name="exposicion" class="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
            </div>
            <button type="submit" class="mt-6 rounded-xl bg-emerald-700 px-7 py-4 text-white font-black hover:bg-emerald-800 transition-colors shadow-lg">Calcular predicción</button>
            <div id="resultado-prediccion-conteo" class="mt-5" aria-live="polite"></div>
        </form>
    `}function We(e,t){const a=e.seleccionado,o=a.pruebaGlobal.p!==null&&a.pruebaGlobal.p<(a.alfa??.05);return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">Modelo seleccionado</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">${se(a)}</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">${E(e.comparacion.criterioSeleccion)}</p>
                </div>
                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${o?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">${o?"Modelo global significativo":`Modelo global no significativo con α = ${(a.alfa??.05).toFixed(3)}`}</span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-7">
            ${A("n",a.n,"Observaciones utilizadas")}
            ${A("AIC",f(a.ajuste.aic,3),"Menor es preferible entre modelos comparables")}
            ${A("BIC",f(a.ajuste.bic,3),"Penaliza con mayor fuerza la complejidad")}
            ${A("Dispersión φ",f(a.dispersion.indice,3),"Pearson χ² dividido por gl residuales")}
            ${A("Pseudo-R²",f(a.ajuste.r2McFadden,4),"McFadden frente al modelo nulo")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y comprobaciones</h2>
            ${Ye(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Inferencia</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de tasas</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Una IRR mayor que 1 indica aumento de la tasa esperada; una IRR menor que 1 indica reducción, manteniendo constantes los demás predictores.</p>
            ${Ke(a)}
        </section>

        <section class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
            ${A("χ² global",f(a.pruebaGlobal.chiCuadrado,4),`gl = ${a.pruebaGlobal.gradosLibertad}; p ${Q(a.pruebaGlobal.p)}`)}
            ${A("Deviance",f(a.ajuste.deviance,4),"Discrepancia respecto al modelo saturado")}
            ${A("Ceros obs./esp.",`${a.diagnosticos.cerosObservados} / ${f(a.diagnosticos.cerosEsperados,2)}`,"Permite detectar exceso orientativo de ceros")}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Revise especialmente VIF de 5 o más antes de interpretar efectos parciales.</p>
            ${Qe(a)}
        </section>

        ${Ve(e)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Conteos ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas superan criterios automáticos de residuo o influencia.</p>
            ${Xe(a)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del modelo</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(s=>`<li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${E(s)}</span></li>`).join("")}
            </ul>
        </section>

        <section class="mt-8">${Je(a)}</section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>La variable dependiente analizada fue <strong>${E(t.nombreDependiente)}</strong>. La exposición se interpretó como <strong>${E(t.nombreExposicion)}</strong>. No interprete una IRR como efecto causal sin un diseño que lo justifique, y no seleccione modelos únicamente por AIC sin revisar la teoría, los residuos, la dispersión y el proceso generador de ceros.</p>
        </section>
    `}function Ze(e,t){const a=e.seleccionado,o=["REGRESIÓN PARA VARIABLES DE CONTEO — LABORATORIO KERNEL","",`Modelo: ${se(a)}`,`Variable dependiente: ${t.nombreDependiente}`,`Predictores: ${a.nombresPredictores.join(", ")}`,`n = ${a.n}`,`AIC = ${f(a.ajuste.aic,4)}`,`BIC = ${f(a.ajuste.bic,4)}`,`Dispersión = ${f(a.dispersion.indice,4)}`,`χ² global = ${f(a.pruebaGlobal.chiCuadrado,4)}, p ${Q(a.pruebaGlobal.p)}`,"","Coeficientes:"];return a.coeficientes.forEach(s=>{o.push(`${s.termino}: B = ${f(s.estimacion,6)}, IRR = ${f(s.irr,5)}, p ${Q(s.p)}`)}),o.push("","Interpretación:"),e.interpretacion.forEach(s=>o.push(`- ${s}`)),o.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),o.join(`
`)}function et(e){return`"${String(e??"").replaceAll('"','""')}"`}function tt(e,t){const a=e.seleccionado,s="\uFEFF"+[["REGRESIÓN PARA VARIABLES DE CONTEO"],["Modelo",se(a)],["Variable dependiente",t.nombreDependiente],["Predictores",a.nombresPredictores.join(", ")],["n",a.n],["AIC",a.ajuste.aic],["BIC",a.ajuste.bic],["Dispersión",a.dispersion.indice],["Chi-cuadrado global",a.pruebaGlobal.chiCuadrado],["p global",a.pruebaGlobal.p],[],["Término","B","EE","z","p","IRR","IC IRR inferior","IC IRR superior"],...a.coeficientes.map(r=>[r.termino,r.estimacion,r.errorEstandar,r.z,r.p,r.irr,r.intervaloIrr.inferior,r.intervaloIrr.superior]),[],["Observación","Observado","Ajustado","Tasa","Exposición","Residuo Pearson","Leverage","Cook"],...a.datosGrafico.map(r=>[r.observacion,r.observado,r.ajustado,r.tasaAjustada,r.exposicion,r.residuoPearson,r.leverage,r.distanciaCook]),[],["Créditos","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(r=>r.map(et).join(",")).join(`
`),i=new Blob([s],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(i),l=document.createElement("a");l.href=n,l.download="regresion-conteo-kernel.csv",document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function oe(e,t){e.textContent=t,e.classList.remove("hidden")}function _(e){e.textContent="",e.classList.add("hidden")}export{ot as CalculadoraRegresionConteo};
