# Referencias de los algoritmos estadísticos

## Propósito

Este registro identifica las referencias matemáticas y numéricas utilizadas
para diseñar, revisar y validar las calculadoras de El Kernel. Las fórmulas,
métodos estadísticos y procedimientos matemáticos no sustituyen la
documentación de licencias del software: las dependencias de terceros se
detallan por separado en `THIRD_PARTY_NOTICES.md`.

Las referencias de esta página describen métodos y criterios de validación. No
autorizan a copiar implementaciones de terceros ni transfieren derechos sobre
su código.

## Aproximaciones numéricas

| Método | Uso en el proyecto | Referencia de control |
| --- | --- | --- |
| Cuantil de la normal estándar | Potencia, tamaño de muestra, intervalos y gráficos Q–Q | Wichura, M. J. (1988), “Algorithm AS 241: The Percentage Points of the Normal Distribution”, *Applied Statistics*, 37(3), 477–484. DOI: `10.2307/2347330`. Las implementaciones que usan la familia de coeficientes racionales de Acklam deben conservar además esa atribución técnica. |
| Aproximación de la función error | Función de distribución normal | Abramowitz, M. y Stegun, I. A. (1964), *Handbook of Mathematical Functions*, fórmula 7.1.26. |
| Aproximación de Lanczos | Logaritmo de la función gamma | Lanczos, C. (1964), “A Precision Approximation of the Gamma Function”, *Journal of the Society for Industrial and Applied Mathematics, Series B: Numerical Analysis*, 1, 86–96. |
| Gamma incompleta regularizada | Valores p de chi-cuadrado y distribuciones relacionadas | NIST Digital Library of Mathematical Functions, capítulo 8, especialmente las definiciones, series y fracciones continuas de las secciones 8.2, 8.7 y 8.9. |
| Beta incompleta regularizada | Distribuciones t y F y cálculos de potencia | NIST Digital Library of Mathematical Functions, secciones 8.17 y 8.18. |
| Búsqueda de cuantiles | Inversión numérica de funciones de distribución | Bisección acotada con verificación explícita del dominio, monotonía, tolerancia y finitud. |

## Métodos estadísticos

| Área | Métodos implementados o asistidos | Criterio de validación |
| --- | --- | --- |
| Descriptiva | Media, cuantiles, varianzas, asimetría, curtosis, frecuencias y regla de Tukey | Casos analíticos, invariantes y comparación tolerada con software estadístico de referencia. |
| Comparación de grupos | Student, Welch, Mann–Whitney, pruebas pareadas, Wilcoxon, ANOVA, Welch multigrupo, Kruskal–Wallis, medidas repetidas y Friedman | Estadístico, grados de libertad, valor p, intervalo, tamaño de efecto y post hoc validados por separado. |
| Relación y asociación | Pearson, Spearman, Kendall, punto-biserial, chi-cuadrado, Fisher, Phi, V de Cramer y odds ratio | Casos sin asociación, asociación perfecta, empates, tablas dispersas y límites de aproximación. |
| Fiabilidad y evaluación | Alfa, omega aproximado, KR-20, correlaciones ítem–total, dificultad, discriminación y distractores | Recodificación, matrices degeneradas, remuestreo reproducible y casos manuales conocidos. |
| Regresión | Mínimos cuadrados, regresión logística por IRLS y modelos Poisson/binomial negativa | Coeficientes, matriz de covarianza, ajuste global, diagnósticos, predicciones y comportamiento ante singularidad o separación. |
| Tamaño de muestra y potencia | Diseños de medias, proporciones, correlación, ANOVA, chi-cuadrado y regresión | Monotonía respecto de potencia/efecto, límites de probabilidad y comparación con resultados de referencia. |

## Reglas de mantenimiento

1. Toda aproximación nueva debe identificar una publicación, norma o
   documentación técnica primaria.
2. Si se adapta código de terceros, debe registrarse también en
   `THIRD_PARTY_NOTICES.md` con su licencia exacta; citar una fórmula no basta.
3. Los coeficientes o constantes numéricas no deben incorporarse sin una
   explicación de su procedencia y rango de validez.
4. Cada cambio del motor debe añadir pruebas con casos conocidos, casos límite
   y resultados no finitos.
5. Una coincidencia aproximada con otra herramienta no reemplaza la revisión
   de supuestos, parametrización, colas, correcciones ni grados de libertad.
