function W(e,t,a=5){if(!Array.isArray(t)||t.length<a)throw new Error(`${e} debe contener al menos ${a} observaciones.`);const o=t.map(Number);if(!o.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return o}function ve(e){return e[0].map((t,a)=>e.map(o=>o[a]))}function V(e,t){return e.map(a=>a.reduce((o,s,n)=>o+s*t[n],0))}function pe(e){const t=e.length,a=e.map((o,s)=>[...o.map(Number),...Array.from({length:t},(n,i)=>s===i?1:0)]);for(let o=0;o<t;o+=1){let s=o;for(let i=o+1;i<t;i+=1)Math.abs(a[i][o])>Math.abs(a[s][o])&&(s=i);if(Math.abs(a[s][o])<1e-10)throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");[a[o],a[s]]=[a[s],a[o]];const n=a[o][o];a[o]=a[o].map(i=>i/n);for(let i=0;i<t;i+=1){if(i===o)continue;const l=a[i][o];a[i]=a[i].map((r,c)=>r-l*a[o][c])}}return a.map(o=>o.slice(t))}function N(e,t){return e.reduce((a,o,s)=>a+o*t[s],0)}function me(e,t){const a=e[0].length;return Array.from({length:a},(o,s)=>[...t?[1]:[],...e.map(n=>n[s])])}function re(e,t,a){const o=e[0].length,s=Array.from({length:o},()=>Array(o).fill(0)),n=Array(o).fill(0);e.forEach((l,r)=>{const c=Math.max(a[r],1e-10);for(let m=0;m<o;m+=1){n[m]+=l[m]*c*t[r];for(let p=0;p<o;p+=1)s[m][p]+=l[m]*c*l[p]}});const i=pe(s);return{beta:V(i,n),covarianza:i,xtwx:s}}function j(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-j(1-e);let a=.9999999999998099;const o=e-1;t.forEach((n,i)=>{a+=n/(o+i+1)});const s=o+t.length-.5;return .5*Math.log(2*Math.PI)+(o+.5)*Math.log(s)-s+Math.log(a)}function ye(e,t){if(t<=0)return 1;const a=200,o=1e-14;if(t<e+1){let r=1/e,c=r,m=e;for(let d=1;d<=a&&(m+=1,r*=t/m,c+=r,!(Math.abs(r)<Math.abs(c)*o));d+=1);const p=c*Math.exp(-t+e*Math.log(t)-j(e));return Math.max(0,Math.min(1,1-p))}let s=t+1-e,n=1/1e-300,i=1/s,l=i;for(let r=1;r<=a;r+=1){const c=-r*(r-e);s+=2,i=c*i+s,Math.abs(i)<1e-300&&(i=1e-300),n=s+c/n,Math.abs(n)<1e-300&&(n=1e-300),i=1/i;const m=i*n;if(l*=m,Math.abs(m-1)<o)break}return Math.max(0,Math.min(1,Math.exp(-t+e*Math.log(t)-j(e))*l))}function Me(e,t){return!Number.isFinite(e)||e<0||t<=0?null:ye(t/2,e/2)}function $e(e){const t=e<0?-1:1,a=Math.abs(e)/Math.sqrt(2),o=1/(1+.3275911*a),s=1-((((1.061405429*o-1.453152027)*o+1.421413741)*o-.284496736)*o+.254829592)*o*Math.exp(-a*a);return .5*(1+t*s)}function we(e){return Number.isFinite(e)?Math.max(0,Math.min(1,2*(1-$e(Math.abs(e))))):0}function Ee(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],a=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],o=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],s=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],n=.02425,i=1-n;if(!(e>0&&e<1))throw new Error("Probabilidad inválida.");if(e<n){const c=Math.sqrt(-2*Math.log(e));return(((((o[0]*c+o[1])*c+o[2])*c+o[3])*c+o[4])*c+o[5])/((((s[0]*c+s[1])*c+s[2])*c+s[3])*c+1)}if(e>i){const c=Math.sqrt(-2*Math.log(1-e));return-(((((o[0]*c+o[1])*c+o[2])*c+o[3])*c+o[4])*c+o[5])/((((s[0]*c+s[1])*c+s[2])*c+s[3])*c+1)}const l=e-.5,r=l*l;return(((((t[0]*r+t[1])*r+t[2])*r+t[3])*r+t[4])*r+t[5])*l/(((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+1)}function ne(e,t){return e.reduce((a,o,s)=>a+o*Math.log(Math.max(t[s],1e-10))-t[s]-j(o+1),0)}function ie(e,t,a){const o=1/Math.max(a,1e-10);return e.reduce((s,n,i)=>{const l=Math.max(t[i],1e-10);return s+j(n+o)-j(o)-j(n+1)+o*Math.log(o/(o+l))+n*Math.log(l/(o+l))},0)}function ke(e,t){return 2*e.reduce((a,o,s)=>{const n=Math.max(t[s],1e-10);return a+(o===0?n:o*Math.log(o/n)-(o-n))},0)}function Ce(e,t,a){return 2*e.reduce((o,s,n)=>{const i=Math.max(t[n],1e-10),l=s===0?0:s*Math.log(s/i),r=(s+1/a)*Math.log((s+1/a)/(i+1/a));return o+l-r},0)}function Z({matrizX:e,y:t,offset:a,modelo:o,alphaInicial:s=.1,maxIteraciones:n=120,tolerancia:i=1e-8}){const l=e[0].length;let r=Array(l).fill(0),c=Math.max(s,1e-8),m=null,p=t.map(g=>Math.max(g+.1,.1)),d=!1,u=0;for(let g=1;g<=n;g+=1){const w=e.map((M,$)=>N(M,r)+a[$]);p=w.map(M=>Math.exp(Math.max(-35,Math.min(35,M))));const z=p.map(M=>o==="negativa"?M+c*M**2:M),H=p.map((M,$)=>Math.max(M**2/Math.max(z[$],1e-10),1e-10)),K=p.map((M,$)=>w[$]+(t[$]-M)/Math.max(M,1e-10)-a[$]),P=re(e,K,H),Q=Math.max(...P.beta.map((M,$)=>Math.abs(M-r[$])));r=P.beta,m=P.covarianza;let F=0;if(o==="negativa"){const M=t.reduce((A,L,q)=>A+((L-p[q])**2-p[q]),0),$=p.reduce((A,L)=>A+L**2,0),I=Math.max(1e-8,M/Math.max($,1e-10));F=Math.abs(I-c),c=.5*c+.5*I}if(u=g,Q<i&&F<Math.sqrt(i)){d=!0;break}}p=e.map((g,w)=>N(g,r)+a[w]).map(g=>Math.exp(Math.max(-35,Math.min(35,g))));const v=p.map(g=>o==="negativa"?g+c*g**2:g),E=p.map((g,w)=>g**2/Math.max(v[w],1e-10));return m=re(e,Array(t.length).fill(0),E).covarianza,{beta:r,mu:p,alpha:c,covarianza:m,convergio:d,iteraciones:u,varianzas:v}}function Ie(e,t){return e.length<2?[]:e.map((a,o)=>{const s=e.filter((r,c)=>c!==o),n=me(s,!0),i=ve(n),l=i.map(r=>n[0].map((c,m)=>r.reduce((p,d,u)=>p+d*n[u][m],0)));try{const r=V(pe(l),i.map(b=>N(b,a))),c=V(n,r),m=a.reduce((b,v)=>b+v,0)/a.length,p=a.reduce((b,v)=>b+(v-m)**2,0),d=a.reduce((b,v,E)=>b+(v-c[E])**2,0),u=Math.max(1-(p>1e-10?1-d/p:1),1e-10);return{variable:t[o],tolerancia:u,vif:1/u}}catch{return{variable:t[o],tolerancia:0,vif:1/0}}})}function le({y:e,predictores:t,nombres:a,incluirIntercepto:o,exposicion:s,modelo:n,nivelConfianza:i}){const l=me(t,o),r=s.map(h=>Math.log(h)),c=l[0].length,m=e.length,p=m-c;if(p<=0)throw new Error("No hay suficientes observaciones para estimar el modelo.");const d=Z({matrizX:l,y:e,offset:r,modelo:"poisson"}),u=e.reduce((h,x,y)=>h+(x-d.mu[y])**2/Math.max(d.mu[y],1e-10),0)/p,b=Z({matrizX:l,y:e,offset:r,modelo:n,alphaInicial:Math.max(.05,(u-1)/Math.max(e.reduce((h,x)=>h+x,0)/m,1))});if(!b.convergio)throw new Error(`El modelo ${n==="poisson"?"de Poisson":"binomial negativo"} no alcanzó convergencia. Revise valores extremos, colinealidad y tamaño muestral.`);const v=n==="poisson"?ne(e,b.mu):ie(e,b.mu,b.alpha),E=n==="poisson"?ke(e,b.mu):Ce(e,b.mu,b.alpha),g=e.reduce((h,x,y)=>h+(x-b.mu[y])**2/Math.max(b.varianzas[y],1e-10),0),w=g/p,z=c+(n==="negativa"?1:0),H=-2*v+2*z,K=-2*v+Math.log(m)*z,P=Ee(.5+i/2),Q=[...o?["Intercepto"]:[],...a],F=b.beta.map((h,x)=>{const y=Math.sqrt(Math.max(b.covarianza[x][x],0)),G=y>1e-10?h/y:1/0,fe=we(G),oe=h-P*y,se=h+P*y;return{termino:Q[x],estimacion:h,errorEstandar:y,z:G,p:fe,intervaloConfianza:{inferior:oe,superior:se,nivel:i},irr:Math.exp(Math.max(-35,Math.min(35,h))),intervaloIrr:{inferior:Math.exp(Math.max(-35,Math.min(35,oe))),superior:Math.exp(Math.max(-35,Math.min(35,se))),nivel:i}}}),M=Array.from({length:m},()=>[1]),$=Z({matrizX:M,y:e,offset:r,modelo:n,alphaInicial:b.alpha}),I=n==="poisson"?ne(e,$.mu):ie(e,$.mu,$.alpha),A=Math.max(0,2*(v-I)),L=t.length,q=Me(A,L),xe=I!==0?1-v/I:null,R=l.map((h,x)=>{const y=V(b.covarianza,h),G=b.mu[x]**2/Math.max(b.varianzas[x],1e-10);return Math.max(0,Math.min(.999999,G*N(h,y)))}),D=e.map((h,x)=>(h-b.mu[x])/Math.sqrt(Math.max(b.varianzas[x],1e-10))),X=e.map((h,x)=>{const y=n==="poisson"?2*(h===0?b.mu[x]:h*Math.log(h/b.mu[x])-(h-b.mu[x])):2*((h===0?0:h*Math.log(h/b.mu[x]))-(h+1/b.alpha)*Math.log((h+1/b.alpha)/(b.mu[x]+1/b.alpha)));return Math.sign(h-b.mu[x])*Math.sqrt(Math.max(y,0))}),Y=D.map((h,x)=>h**2*R[x]/(c*Math.max((1-R[x])**2,1e-10))),he=e.map((h,x)=>({observacion:x+1,observado:h,ajustado:b.mu[x],residuoPearson:D[x],residuoDeviance:X[x],leverage:R[x],distanciaCook:Y[x]})).filter(h=>Math.abs(h.residuoPearson)>2||h.leverage>2*c/m||h.distanciaCook>4/m),ae=e.filter(h=>h===0).length,J=b.mu.reduce((h,x)=>{if(n==="poisson")return h+Math.exp(-x);const y=1/b.alpha;return h+(y/(y+x))**y},0),ge=Ie(t,a);return{tipoModelo:n,n:m,numeroPredictores:t.length,incluirIntercepto:o,nombresPredictores:a,convergencia:{convergio:b.convergio,iteraciones:b.iteraciones},dispersion:{pearson:g,gradosLibertad:p,indice:w,alpha:n==="negativa"?b.alpha:0},coeficientes:F,ajuste:{logVerosimilitud:v,logVerosimilitudNula:I,deviance:E,aic:H,bic:K,r2McFadden:xe},pruebaGlobal:{chiCuadrado:A,gradosLibertad:L,p:q},diagnosticos:{residuosPearson:D,residuosDeviance:X,leverage:R,distanciaCook:Y,observacionesInfluyentes:he,vif:ge,cerosObservados:ae,cerosEsperados:J,razonCeros:J>1e-10?ae/J:null},valoresAjustados:b.mu,exposicion:s,datosGrafico:e.map((h,x)=>({observacion:x+1,observado:h,ajustado:b.mu[x],tasaAjustada:b.mu[x]/s[x],exposicion:s[x],residuoPearson:D[x],residuoDeviance:X[x],leverage:R[x],distanciaCook:Y[x],predictores:t.map(y=>y[x])}))}}function je(e){const t=e.seleccionado;return[`Se seleccionó ${t.tipoModelo==="poisson"?"regresión de Poisson":"regresión binomial negativa"} para modelar la media del conteo mediante un enlace logarítmico.`,t.pruebaGlobal.p!==null&&t.pruebaGlobal.p<.05?`El modelo global mejora significativamente al modelo nulo (χ² = ${t.pruebaGlobal.chiCuadrado.toFixed(4)}, gl = ${t.pruebaGlobal.gradosLibertad}, p ${t.pruebaGlobal.p<.001?"< 0.001":`= ${t.pruebaGlobal.p.toFixed(4)}`}).`:"El modelo global no alcanza significación estadística al 5 %.",`El índice de dispersión de Pearson es ${t.dispersion.indice.toFixed(3)}.`,t.diagnosticos.observacionesInfluyentes.length?`Se identificaron ${t.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",t.diagnosticos.razonCeros!==null&&t.diagnosticos.razonCeros>1.5?"Se observan más ceros de los esperados por el modelo; conviene valorar un modelo inflado en ceros o con componente hurdle.":"La cantidad de ceros no muestra una discrepancia automática severa respecto al modelo seleccionado.","Las razones de tasas de incidencia se interpretan manteniendo constantes los demás predictores y considerando la unidad de exposición utilizada."]}function Pe({y:e,X:t,nombresPredictores:a=[],incluirIntercepto:o=!0,exposicion:s=null,modelo:n="automatico",nivelConfianza:i=.95}){const l=W("La variable de conteo",e,6);if(!l.every(g=>Number.isInteger(g)&&g>=0))throw new Error("La variable dependiente debe contener enteros no negativos.");if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const r=t.map((g,w)=>W(a[w]||`X${w+1}`,g,6));if(!r.every(g=>g.length===l.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(i>0&&i<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");const c=r.map((g,w)=>a[w]||`X${w+1}`),m=s===null?Array(l.length).fill(1):W("La exposición",s,6);if(m.length!==l.length||!m.every(g=>g>0))throw new Error("La exposición debe ser positiva y tener una fila por observación.");const p={y:l,predictores:r,nombres:c,incluirIntercepto:o,exposicion:m,nivelConfianza:i},d=le({...p,modelo:"poisson"});let u=null;if(n!=="poisson"||d.dispersion.indice>1.2)try{u=le({...p,modelo:"negativa"})}catch(g){if(n==="negativa")throw g}let b=d,v="Poisson fue solicitado explícitamente.";if(n==="negativa")b=u,v="La binomial negativa fue solicitada explícitamente.";else if(n==="automatico"&&u){const g=d.ajuste.aic-u.ajuste.aic;d.dispersion.indice>1.5&&g>2?(b=u,v=`Se seleccionó binomial negativa por sobredispersión (φ = ${d.dispersion.indice.toFixed(3)}) y menor AIC (ΔAIC = ${g.toFixed(3)}).`):v=`Se mantuvo Poisson porque la sobredispersión o la mejora de AIC no justificaron cambiar de modelo (φ = ${d.dispersion.indice.toFixed(3)}).`}const E={tipoAnalisis:"regresion-conteo",modeloSolicitado:n,seleccionado:b,comparacion:{poisson:{aic:d.ajuste.aic,bic:d.ajuste.bic,deviance:d.ajuste.deviance,dispersion:d.dispersion.indice},negativa:u?{aic:u.ajuste.aic,bic:u.ajuste.bic,deviance:u.ajuste.deviance,dispersion:u.dispersion.indice,alpha:u.dispersion.alpha}:null,criterioSeleccion:v}};return E.interpretacion=je(E),E}function Ae(e,t,a=1){const o=e?.seleccionado||e;if(!o?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==o.numeroPredictores)throw new Error(`Debe proporcionar ${o.numeroPredictores} valores predictores.`);const s=t.map(Number),n=Number(a);if(!s.every(Number.isFinite)||!(n>0))throw new Error("Los predictores deben ser numéricos y la exposición debe ser positiva.");const i=o.coeficientes.map(m=>m.estimacion),l=[...o.incluirIntercepto?[1]:[],...s],r=N(l,i),c=Math.exp(Math.max(-35,Math.min(35,r)));return{predictorLineal:r,tasa:c,exposicion:n,conteoEsperado:c*n}}function ue(e,t=.08){const a=e.filter(Number.isFinite),o=Math.min(...a),s=Math.max(...a),n=Math.max(s-o,1);return{minimo:o-n*t,maximo:s+n*t}}function B(e,t,a,o){return a+(e-t.minimo)/Math.max(t.maximo-t.minimo,1e-12)*(o-a)}function ce(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function S(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-S(1-e);let a=.9999999999998099;const o=e-1;t.forEach((n,i)=>{a+=n/(o+i+1)});const s=o+t.length-.5;return .5*Math.log(2*Math.PI)+(o+.5)*Math.log(s)-s+Math.log(a)}function Le(e,t){return Math.exp(-t+e*Math.log(Math.max(t,1e-12))-S(e+1))}function Re(e,t,a){const o=1/Math.max(a,1e-10);return Math.exp(S(e+o)-S(o)-S(e+1)+o*Math.log(o/(o+t))+e*Math.log(t/(o+t)))}function T(e,t,a){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">${e}</h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">${t}</p>
            ${a}
        </article>
    `}function be({ancho:e,alto:t,izquierda:a,derecha:o,arriba:s,abajo:n}){return`
        <line x1="${a}" y1="${s}" x2="${a}" y2="${t-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
        <line x1="${a}" y1="${t-n}" x2="${e-o}" y2="${t-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
    `}function Se(e){const t=e.datosGrafico,a=ue(t.flatMap(p=>[p.observado,p.ajustado])),o=600,s=320,n=55,i=28,l=25,r=52,c=p=>B(p,a,n,o-i),m=p=>B(p,a,s-r,l);return T("Observado frente a ajustado","Los puntos próximos a la diagonal representan observaciones con conteos bien aproximados por el modelo.",`<div class="overflow-x-auto">
            <svg viewBox="0 0 ${o} ${s}" class="min-w-[560px] w-full" role="img" aria-label="Conteos observados frente a valores ajustados">
                ${be({ancho:o,alto:s,izquierda:n,derecha:i,arriba:l,abajo:r})}
                <line x1="${c(a.minimo)}" y1="${m(a.minimo)}" x2="${c(a.maximo)}" y2="${m(a.maximo)}" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" class="text-slate-400" />
                ${t.map(p=>`
                    <circle cx="${c(p.ajustado)}" cy="${m(p.observado)}" r="5" fill="currentColor" class="text-sky-700">
                        <title>Obs. ${p.observacion}: observado ${p.observado}, ajustado ${p.ajustado.toFixed(4)}</title>
                    </circle>
                `).join("")}
                <text x="${o/2}" y="${s-12}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo ajustado</text>
                <text x="15" y="${s/2}" transform="rotate(-90 15 ${s/2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo observado</text>
            </svg>
        </div>`)}function Ne(e){const t=e.datosGrafico,a=ue(t.map(u=>u.ajustado)),o=Math.max(2.5,...t.map(u=>Math.abs(u.residuoPearson))),s={minimo:-o*1.1,maximo:o*1.1},n=600,i=320,l=55,r=28,c=25,m=52,p=u=>B(u,a,l,n-r),d=u=>B(u,s,i-m,c);return T("Residuos de Pearson","Una nube sin patrón claro alrededor de cero es compatible con una especificación razonable de la media y la varianza.",`<div class="overflow-x-auto">
            <svg viewBox="0 0 ${n} ${i}" class="min-w-[560px] w-full" role="img" aria-label="Residuos de Pearson frente a conteos ajustados">
                ${be({ancho:n,alto:i,izquierda:l,derecha:r,arriba:c,abajo:m})}
                <line x1="${l}" y1="${d(0)}" x2="${n-r}" y2="${d(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${l}" y1="${d(2)}" x2="${n-r}" y2="${d(2)}" stroke="currentColor" stroke-dasharray="5 5" class="text-amber-500" />
                <line x1="${l}" y1="${d(-2)}" x2="${n-r}" y2="${d(-2)}" stroke="currentColor" stroke-dasharray="5 5" class="text-amber-500" />
                ${t.map(u=>`
                    <circle cx="${p(u.ajustado)}" cy="${d(u.residuoPearson)}" r="5" fill="currentColor" class="${Math.abs(u.residuoPearson)>2?"text-red-600":"text-indigo-700"}">
                        <title>Obs. ${u.observacion}: residuo ${u.residuoPearson.toFixed(4)}</title>
                    </circle>
                `).join("")}
                <text x="${n/2}" y="${i-12}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo ajustado</text>
                <text x="15" y="${i/2}" transform="rotate(-90 15 ${i/2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Residuo de Pearson</text>
            </svg>
        </div>`)}function de(e,t){return e.datosGrafico.reduce((a,o)=>{const s=e.tipoModelo==="negativa"?Re(t,o.ajustado,e.dispersion.alpha):Le(t,o.ajustado);return a+s},0)}function Te(e){const t=e.datosGrafico,a=Math.max(...t.map(l=>l.observado),1),o=Math.min(a,20),s=Array.from({length:o+1},(l,r)=>{const c=t.filter(p=>r<o?p.observado===r:p.observado>=r).length;let m;if(r<o||a<=o)m=de(e,r);else{const p=Array.from({length:o},(d,u)=>de(e,u)).reduce((d,u)=>d+u,0);m=Math.max(0,t.length-p)}return{conteo:r,observado:c,esperado:m}}),n=Math.max(...s.flatMap(l=>[l.observado,l.esperado]),1),i=e.tipoModelo==="negativa"?"binomial negativa":"Poisson";return T("Distribución observada y esperada",`Compara la frecuencia observada de los conteos con la frecuencia esperada bajo el modelo ${i} ajustado.`,`<div class="overflow-x-auto">
            <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${s.map(l=>`
                    <div class="flex flex-col items-center justify-end min-w-[48px] h-full">
                        <div class="flex items-end gap-1 h-[205px]">
                            <div class="w-4 bg-sky-700 rounded-t" style="height:${Math.max(3,l.observado/n*190)}px" title="Observado: ${l.observado}"></div>
                            <div class="w-4 bg-amber-500 rounded-t" style="height:${Math.max(3,l.esperado/n*190)}px" title="Esperado: ${l.esperado.toFixed(2)}"></div>
                        </div>
                        <span class="text-[10px] text-slate-600 mt-2">${l.conteo===o&&a>o?`${o}+`:l.conteo}</span>
                    </div>
                `).join("")}
            </div>
            <div class="flex flex-wrap gap-4 mt-4 text-xs font-bold text-slate-600">
                <span><span class="inline-block w-3 h-3 bg-sky-700 mr-1"></span>Observado</span>
                <span><span class="inline-block w-3 h-3 bg-amber-500 mr-1"></span>Esperado</span>
            </div>
        </div>`)}function ze(e){const t=e.datosGrafico,a=4/e.n,o=Math.max(...t.map(i=>i.distanciaCook),a,1e-6),s=190,n=Math.min(s,a/o*s);return T("Distancia de Cook",`La línea de referencia corresponde a 4/n = ${a.toFixed(4)}. Las observaciones que la superan requieren revisión sustantiva.`,`<div class="overflow-x-auto">
            <div class="relative h-64 border-b border-l border-slate-300 px-3 pt-4 flex items-end min-w-[560px]">
                <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-400" style="bottom:${24+n}px"></div>
                ${t.map(i=>`
                    <div class="flex flex-col items-center justify-end min-w-[34px] h-full">
                        <div class="w-5 ${i.distanciaCook>a?"bg-red-600":"bg-violet-600"} rounded-t" style="height:${Math.max(3,i.distanciaCook/o*s)}px" title="Obs. ${i.observacion}: Cook ${i.distanciaCook.toFixed(5)}"></div>
                        <span class="text-[9px] text-slate-500 mt-2">${i.observacion}</span>
                    </div>
                `).join("")}
            </div>
        </div>`)}function Fe(e){const t=[{nombre:"Poisson",datos:e.poisson},...e.negativa?[{nombre:"Binomial negativa",datos:e.negativa}]:[]],a=t.map(i=>i.datos.aic),o=Math.min(...a),s=Math.max(...a.map(i=>i-o),1),n=Math.max(...t.map(i=>i.datos.dispersion),1);return T("Comparación de modelos","AIC más bajo indica mejor equilibrio entre ajuste y complejidad. Un índice de dispersión próximo a 1 es compatible con la varianza asumida.",`<div class="space-y-6">
            ${t.map(i=>{const l=i.datos.aic-o,r=100-Math.min(90,l/s*90);return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <strong class="text-slate-900">${ce(i.nombre)}</strong>
                            <span class="text-sm text-slate-600">AIC ${i.datos.aic.toFixed(2)} · ΔAIC ${l.toFixed(2)} · φ ${i.datos.dispersion.toFixed(3)}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="h-5 rounded-full bg-slate-100 overflow-hidden" title="Preferencia relativa por AIC">
                                <div class="h-full bg-sky-700 rounded-full" style="width:${Math.max(6,r)}%"></div>
                            </div>
                            <div class="h-5 rounded-full bg-slate-100 overflow-hidden" title="Índice de dispersión">
                                <div class="h-full bg-amber-500 rounded-full" style="width:${Math.max(4,Math.min(100,i.datos.dispersion/n*100))}%"></div>
                            </div>
                        </div>
                    </div>
                `}).join("")}
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950 leading-relaxed">
                <strong>Criterio automático:</strong> ${ce(e.criterioSeleccion)}
            </div>
        </div>`)}function qe(e){const t=e.seleccionado;return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">Diagnóstico visual</p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">Gráficos del modelo de conteo</h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine conjuntamente el ajuste, la dispersión, la forma de los residuos, las observaciones influyentes y la comparación entre modelos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${Se(t)}
                ${Ne(t)}
                ${Te(t)}
                ${ze(t)}
                ${Fe(e.comparacion)}
            </div>
        </section>
    `}function We(){const e=document.createElement("section");let t=null,a=null;e.className=`
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
                    ${O("Variable dependiente","La primera columna debe contener enteros no negativos: número de eventos, errores, visitas, publicaciones u otros conteos.")}
                    ${O("Predictores","Añada una columna por cada variable explicativa. Los coeficientes exponenciados se interpretan como razones de tasas de incidencia.")}
                    ${O("Exposición","Cuando las observaciones tienen tiempos o poblaciones en riesgo diferentes, coloque la exposición positiva en la última columna y active la opción correspondiente.")}
                    ${O("Elección del modelo","Poisson supone igualdad aproximada entre media y varianza condicional. La binomial negativa incorpora un parámetro adicional para sobredispersión.")}
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
    `;const o=e.querySelector("#formulario-regresion-conteo"),s=e.querySelector("#mensaje-error-conteo"),n=e.querySelector("#resultados-regresion-conteo"),i=o.elements.archivo;return Oe(o),i.addEventListener("change",async()=>{const l=i.files?.[0];if(l)try{o.elements.datos.value=await l.text(),_(s)}catch{ee(s,"No fue posible leer el archivo seleccionado.")}}),o.addEventListener("submit",l=>{l.preventDefault(),_(s);try{const r=Ge(o);t=Pe(r),a=r.metadatos,n.innerHTML=Qe(t,a),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(r){n.classList.add("hidden"),ee(s,r instanceof Error?r.message:"No fue posible ajustar el modelo de conteo.")}}),e.addEventListener("click",async l=>{const r=l.target.closest("[data-action]");if(!r)return;const c=r.dataset.action;if(c==="volver-modelos"){window.location.hash="/regresionModelos";return}if(c==="cargar-ejemplo"){_e(o),n.classList.add("hidden"),_(s);return}if(c==="limpiar"){o.reset(),o.elements.incluirIntercepto.checked=!0,o.elements.datos.value="",n.classList.add("hidden"),_(s);return}if(t)if(c==="exportar-csv")Je(t,a);else if(c==="copiar-reporte")try{await navigator.clipboard.writeText(Xe(t,a)),r.textContent="Reporte copiado",setTimeout(()=>{r.textContent="Copiar interpretación"},1600)}catch{ee(s,"El navegador no permitió copiar el reporte.")}else c==="imprimir"&&window.print()}),e.addEventListener("submit",l=>{const r=l.target.closest("#formulario-prediccion-conteo");if(!r||!t)return;l.preventDefault();const c=r.querySelector("#resultado-prediccion-conteo");try{const m=[...r.querySelectorAll("[data-predictor]")].sort((u,b)=>Number(u.dataset.predictor)-Number(b.dataset.predictor)).map(u=>Number(u.value)),p=Number(r.elements.exposicion.value),d=Ae(t,m,p);c.innerHTML=`
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                    <p class="text-sm font-black uppercase tracking-widest text-emerald-700 mb-2">Predicción del modelo</p>
                    <p class="text-3xl font-black">${f(d.conteoEsperado,4)} eventos esperados</p>
                    <p class="mt-2 leading-relaxed">Tasa estimada: ${f(d.tasa,5)} por unidad de exposición. Exposición utilizada: ${f(d.exposicion,4)}.</p>
                </div>
            `}catch(m){c.innerHTML=`<div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">${k(m.message)}</div>`}}),e}function O(e,t){return`<div><h3 class="font-black text-slate-900 mb-1">${e}</h3><p>${t}</p></div>`}function De(e){return e.trim().split(/[,;\t]+/).map(t=>t.trim())}function Ge(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const a=t.split(/\n+/).map(De).filter(d=>d.length);if(a.length<7)throw new Error("Introduzca al menos seis observaciones y, opcionalmente, una fila de encabezados.");const s=a[0].every(d=>Number.isFinite(Number(d)))?a[0].map((d,u)=>u===0?"Conteo":`X${u}`):a.shift(),n=s.length,i=e.elements.usarExposicion.checked;if(n<(i?3:2))throw new Error(i?"Se requieren conteo, al menos un predictor y exposición.":"Se requieren conteo y al menos un predictor.");if(!a.every(d=>d.length===n))throw new Error("Todas las filas deben tener la misma cantidad de columnas.");const r=a.map((d,u)=>d.map((b,v)=>{const E=Number(b);if(!Number.isFinite(E))throw new Error(`El valor de la fila ${u+1}, columna ${v+1} no es numérico.`);return E})),c=i?n-1:-1,m=Array.from({length:n-1-(i?1:0)},(d,u)=>u+1),p=s[0]||"Conteo";return{y:r.map(d=>d[0]),X:m.map(d=>r.map(u=>u[d])),nombresPredictores:m.map(d=>s[d]),incluirIntercepto:e.elements.incluirIntercepto.checked,exposicion:i?r.map(d=>d[c]):null,modelo:e.elements.modelo.value,nivelConfianza:Number(e.elements.nivelConfianza.value),metadatos:{nombreDependiente:p,nombreExposicion:i?s[c]:"Exposición igual a 1"}}}function Oe(e){const t=sessionStorage.getItem("kernel-modelo-conteo");(t==="poisson"||t==="negativa")&&(e.elements.modelo.value=t),sessionStorage.removeItem("kernel-modelo-conteo")}function _e(e){e.elements.modelo.value="automatico",e.elements.usarExposicion.checked=!0,e.elements.incluirIntercepto.checked=!0,e.elements.datos.value=`Incidentes, HorasCapacitacion, Personal, Exposicion
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
22, 10, 26, 1.8`}function f(e,t=4){return e==null||!Number.isFinite(Number(e))?"—":Number(e).toLocaleString("es-DO",{maximumFractionDigits:t})}function U(e){return e===null||!Number.isFinite(Number(e))?"—":e<.001?"< 0.001":`= ${Number(e).toFixed(4)}`}function k(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function te(e){return e.tipoModelo==="poisson"?"Regresión de Poisson":"Regresión binomial negativa"}function C(e,t,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">${e}</p>
            <p class="text-2xl font-black text-slate-900 break-words">${t}</p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">${a}</p>
        </article>
    `}function Ve(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Término</th>
                        <th class="px-4 py-3 text-right">B</th>
                        <th class="px-4 py-3 text-right">EE</th>
                        <th class="px-4 py-3 text-right">z</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-right">IRR</th>
                        <th class="px-4 py-3 text-right">IC de la IRR</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(t=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${k(t.termino)}</td>
                            <td class="px-4 py-3 text-right">${f(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${f(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${f(t.z,4)}</td>
                            <td class="px-4 py-3 text-right">${U(t.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${f(t.irr,5)}</td>
                            <td class="px-4 py-3 text-right">[${f(t.intervaloIrr.inferior,5)}, ${f(t.intervaloIrr.superior,5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Be(e){return e.diagnosticos.vif.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-100 text-slate-700">
                    <tr><th class="px-4 py-3 text-left">Predictor</th><th class="px-4 py-3 text-right">Tolerancia</th><th class="px-4 py-3 text-right">VIF</th><th class="px-4 py-3 text-left">Lectura</th></tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.diagnosticos.vif.map(t=>`
                        <tr>
                            <td class="px-4 py-3 font-black">${k(t.variable)}</td>
                            <td class="px-4 py-3 text-right">${f(t.tolerancia,4)}</td>
                            <td class="px-4 py-3 text-right">${f(t.vif,4)}</td>
                            <td class="px-4 py-3">${t.vif>=10?"Severa":t.vif>=5?"Moderada":"Aceptable"}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `:'<p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">El VIF no aplica a un modelo con un solo predictor.</p>'}function Ue(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[460px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-right">Obs.</th>
                        <th class="px-4 py-3 text-right">Observado</th>
                        <th class="px-4 py-3 text-right">Ajustado</th>
                        <th class="px-4 py-3 text-right">Tasa</th>
                        <th class="px-4 py-3 text-right">Residuo P.</th>
                        <th class="px-4 py-3 text-right">Leverage</th>
                        <th class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoPearson)>2||t.distanciaCook>4/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${t.observacion}</td>
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
    `}function He(e){const t=e.seleccionado,a=[];return t.dispersion.indice>1.5&&t.tipoModelo==="poisson"&&a.push("El modelo de Poisson conserva sobredispersión importante; revise la binomial negativa o una especificación alternativa."),t.diagnosticos.razonCeros!==null&&t.diagnosticos.razonCeros>1.5&&a.push("La cantidad de ceros observada supera ampliamente la esperada; considere modelos inflados en ceros o hurdle."),t.diagnosticos.vif.some(o=>o.vif>=5)&&a.push("Existe multicolinealidad moderada o severa en al menos un predictor."),t.diagnosticos.observacionesInfluyentes.length&&a.push(`Se identificaron ${t.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`),a.length||a.push("Los diagnósticos automáticos no detectaron alertas severas; aun así, revise los gráficos y la coherencia sustantiva del modelo."),`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${a.map(o=>`<div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 leading-relaxed">${k(o)}</div>`).join("")}</div>`}function Ke(e){return`
        <form id="formulario-prediccion-conteo" class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Aplicación del modelo</p>
            <h2 class="text-2xl md:text-3xl font-black text-emerald-950 mb-3">Predecir un nuevo conteo</h2>
            <p class="text-emerald-900 leading-relaxed mb-6 max-w-4xl">Introduzca los predictores y la exposición. Evite extrapolar fuera del rango observado.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((t,a)=>`
                    <label class="block"><span class="block text-sm font-black text-emerald-950 mb-2">${k(t)}</span><input type="number" step="any" required data-predictor="${a}" class="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
                `).join("")}
                <label class="block"><span class="block text-sm font-black text-emerald-950 mb-2">Exposición</span><input type="number" step="any" min="0.000001" value="1" required name="exposicion" class="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
            </div>
            <button type="submit" class="mt-6 rounded-xl bg-emerald-700 px-7 py-4 text-white font-black hover:bg-emerald-800 transition-colors shadow-lg">Calcular predicción</button>
            <div id="resultado-prediccion-conteo" class="mt-5" aria-live="polite"></div>
        </form>
    `}function Qe(e,t){const a=e.seleccionado,o=a.pruebaGlobal.p!==null&&a.pruebaGlobal.p<.05;return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">Modelo seleccionado</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">${te(a)}</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">${k(e.comparacion.criterioSeleccion)}</p>
                </div>
                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${o?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">${o?"Modelo global significativo":"Modelo global no significativo al 5 %"}</span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-7">
            ${C("n",a.n,"Observaciones utilizadas")}
            ${C("AIC",f(a.ajuste.aic,3),"Menor es preferible entre modelos comparables")}
            ${C("BIC",f(a.ajuste.bic,3),"Penaliza con mayor fuerza la complejidad")}
            ${C("Dispersión φ",f(a.dispersion.indice,3),"Pearson χ² dividido por gl residuales")}
            ${C("Pseudo-R²",f(a.ajuste.r2McFadden,4),"McFadden frente al modelo nulo")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y comprobaciones</h2>
            ${He(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Inferencia</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de tasas</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Una IRR mayor que 1 indica aumento de la tasa esperada; una IRR menor que 1 indica reducción, manteniendo constantes los demás predictores.</p>
            ${Ve(a)}
        </section>

        <section class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
            ${C("χ² global",f(a.pruebaGlobal.chiCuadrado,4),`gl = ${a.pruebaGlobal.gradosLibertad}; p ${U(a.pruebaGlobal.p)}`)}
            ${C("Deviance",f(a.ajuste.deviance,4),"Discrepancia respecto al modelo saturado")}
            ${C("Ceros obs./esp.",`${a.diagnosticos.cerosObservados} / ${f(a.diagnosticos.cerosEsperados,2)}`,"Permite detectar exceso orientativo de ceros")}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Revise especialmente VIF de 5 o más antes de interpretar efectos parciales.</p>
            ${Be(a)}
        </section>

        ${qe(e)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Conteos ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas superan criterios automáticos de residuo o influencia.</p>
            ${Ue(a)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del modelo</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(s=>`<li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${k(s)}</span></li>`).join("")}
            </ul>
        </section>

        <section class="mt-8">${Ke(a)}</section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>La variable dependiente analizada fue <strong>${k(t.nombreDependiente)}</strong>. La exposición se interpretó como <strong>${k(t.nombreExposicion)}</strong>. No interprete una IRR como efecto causal sin un diseño que lo justifique, y no seleccione modelos únicamente por AIC sin revisar la teoría, los residuos, la dispersión y el proceso generador de ceros.</p>
        </section>
    `}function Xe(e,t){const a=e.seleccionado,o=["REGRESIÓN PARA VARIABLES DE CONTEO — LABORATORIO KERNEL","",`Modelo: ${te(a)}`,`Variable dependiente: ${t.nombreDependiente}`,`Predictores: ${a.nombresPredictores.join(", ")}`,`n = ${a.n}`,`AIC = ${f(a.ajuste.aic,4)}`,`BIC = ${f(a.ajuste.bic,4)}`,`Dispersión = ${f(a.dispersion.indice,4)}`,`χ² global = ${f(a.pruebaGlobal.chiCuadrado,4)}, p ${U(a.pruebaGlobal.p)}`,"","Coeficientes:"];return a.coeficientes.forEach(s=>{o.push(`${s.termino}: B = ${f(s.estimacion,6)}, IRR = ${f(s.irr,5)}, p ${U(s.p)}`)}),o.push("","Interpretación:"),e.interpretacion.forEach(s=>o.push(`- ${s}`)),o.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),o.join(`
`)}function Ye(e){return`"${String(e??"").replaceAll('"','""')}"`}function Je(e,t){const a=e.seleccionado,s="\uFEFF"+[["REGRESIÓN PARA VARIABLES DE CONTEO"],["Modelo",te(a)],["Variable dependiente",t.nombreDependiente],["Predictores",a.nombresPredictores.join(", ")],["n",a.n],["AIC",a.ajuste.aic],["BIC",a.ajuste.bic],["Dispersión",a.dispersion.indice],["Chi-cuadrado global",a.pruebaGlobal.chiCuadrado],["p global",a.pruebaGlobal.p],[],["Término","B","EE","z","p","IRR","IC IRR inferior","IC IRR superior"],...a.coeficientes.map(r=>[r.termino,r.estimacion,r.errorEstandar,r.z,r.p,r.irr,r.intervaloIrr.inferior,r.intervaloIrr.superior]),[],["Observación","Observado","Ajustado","Tasa","Exposición","Residuo Pearson","Leverage","Cook"],...a.datosGrafico.map(r=>[r.observacion,r.observado,r.ajustado,r.tasaAjustada,r.exposicion,r.residuoPearson,r.leverage,r.distanciaCook]),[],["Créditos","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(r=>r.map(Ye).join(",")).join(`
`),n=new Blob([s],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(n),l=document.createElement("a");l.href=i,l.download="regresion-conteo-kernel.csv",document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function ee(e,t){e.textContent=t,e.classList.remove("hidden")}function _(e){e.textContent="",e.classList.add("hidden")}export{We as CalculadoraRegresionConteo};
