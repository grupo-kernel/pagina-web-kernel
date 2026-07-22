export const CATEGORIAS_SERVICIOS = Object.freeze([
    Object.freeze({ id: "todos", nombre: "Todos los servicios" }),
    Object.freeze({ id: "investigacion", nombre: "Investigación y metodología" }),
    Object.freeze({ id: "estadistica", nombre: "Estadística aplicada" }),
    Object.freeze({ id: "educacion", nombre: "Educación e instrumentos" }),
    Object.freeze({ id: "computacion", nombre: "Matemática computacional" }),
    Object.freeze({ id: "formacion", nombre: "Formación y transferencia" })
]);

export const CATALOGO_SERVICIOS = Object.freeze([
    Object.freeze({
        id: "asesoria-metodologica",
        categoria: "investigacion",
        titulo: "Asesoría metodológica para investigaciones y tesis",
        resumen:
            "Acompañamiento para fortalecer la coherencia entre el problema, los objetivos, las variables, el diseño, el muestreo y el plan de análisis.",
        descripcion:
            "Revisión y estructuración metodológica de proyectos académicos o institucionales, con orientaciones justificadas para que cada decisión responda al objetivo de la investigación.",
        icono: "bx-check-shield",
        destacado: true,
        incluye: Object.freeze([
            "Delimitación del problema, preguntas y objetivos.",
            "Coherencia entre diseño, variables e instrumentos.",
            "Estrategia de muestreo y plan de análisis.",
            "Orientación para interpretar y reportar resultados."
        ]),
        dirigidoA: Object.freeze([
            "Estudiantes de grado y posgrado.",
            "Docentes e investigadores.",
            "Equipos académicos e institucionales."
        ])
    }),
    Object.freeze({
        id: "analisis-estadistico",
        categoria: "estadistica",
        titulo: "Análisis estadístico e interpretación de resultados",
        resumen:
            "Selección, ejecución e interpretación de procedimientos descriptivos e inferenciales acordes con el diseño y los supuestos de los datos.",
        descripcion:
            "Apoyo para organizar los datos, seleccionar pruebas, evaluar supuestos, estimar tamaños del efecto e intervalos de confianza y redactar resultados metodológicamente adecuados.",
        icono: "bx-line-chart",
        destacado: true,
        incluye: Object.freeze([
            "Estadística descriptiva y exploración de datos.",
            "Comparación de grupos, correlación y asociación.",
            "Modelos de regresión e interpretación guiada.",
            "Tamaños del efecto, intervalos de confianza y reporte."
        ]),
        dirigidoA: Object.freeze([
            "Investigadores y tesistas.",
            "Instituciones educativas.",
            "Equipos con bases de datos de investigación."
        ])
    }),
    Object.freeze({
        id: "tamano-muestra-potencia",
        categoria: "estadistica",
        titulo: "Tamaño de muestra y potencia estadística",
        resumen:
            "Planificación del tamaño mínimo requerido y análisis de sensibilidad según el diseño, el efecto esperado y las pérdidas previstas.",
        descripcion:
            "Estimación y justificación del tamaño de muestra para estudios descriptivos, comparativos, correlacionales o de modelización, considerando potencia, precisión y población finita cuando corresponda.",
        icono: "bx-ruler",
        destacado: false,
        incluye: Object.freeze([
            "Definición del escenario de cálculo.",
            "Tamaño mínimo y ajuste por pérdidas.",
            "Potencia estadística y efecto de diseño.",
            "Análisis de sensibilidad de los supuestos."
        ]),
        dirigidoA: Object.freeze([
            "Proyectos de tesis e investigación.",
            "Protocolos institucionales.",
            "Estudios que requieren justificar su muestra."
        ])
    }),
    Object.freeze({
        id: "cuestionarios-fiabilidad",
        categoria: "educacion",
        titulo: "Cuestionarios, fiabilidad y análisis de ítems",
        resumen:
            "Revisión de la estructura de instrumentos y análisis de consistencia interna, recodificación e indicadores de funcionamiento de los ítems.",
        descripcion:
            "Apoyo técnico para preparar y examinar cuestionarios mediante procedimientos de fiabilidad y análisis de ítems, con interpretación de alfa de Cronbach, omega de McDonald y diagnósticos complementarios.",
        icono: "bx-list-check",
        destacado: true,
        incluye: Object.freeze([
            "Revisión de codificación y recodificación de ítems.",
            "Alfa de Cronbach y omega de McDonald.",
            "Correlaciones ítem-total y diagnóstico de ítems.",
            "Orientaciones para documentar los resultados."
        ]),
        dirigidoA: Object.freeze([
            "Investigaciones con escalas o cuestionarios.",
            "Equipos de evaluación institucional.",
            "Docentes y estudiantes de posgrado."
        ])
    }),
    Object.freeze({
        id: "evaluacion-educativa",
        categoria: "educacion",
        titulo: "Evaluación educativa y análisis de pruebas",
        resumen:
            "Análisis técnico de preguntas, puntuaciones y distractores para fortalecer la calidad de pruebas y procesos de evaluación.",
        descripcion:
            "Estudio de dificultad, discriminación, correlación punto-biserial, KR-20 y funcionamiento de distractores para apoyar decisiones sobre instrumentos de evaluación educativa.",
        icono: "bx-edit-alt",
        destacado: false,
        incluye: Object.freeze([
            "Índices de dificultad y discriminación.",
            "Correlación punto-biserial y KR-20.",
            "Análisis de distractores y puntuaciones.",
            "Informe técnico con hallazgos y recomendaciones."
        ]),
        dirigidoA: Object.freeze([
            "Centros e instituciones educativas.",
            "Docentes y coordinaciones académicas.",
            "Proyectos de evaluación del aprendizaje."
        ])
    }),
    Object.freeze({
        id: "modelacion-metodos-numericos",
        categoria: "computacion",
        titulo: "Modelación matemática, optimización y métodos numéricos",
        resumen:
            "Apoyo especializado para formular, analizar y experimentar con problemas no lineales, EDPs, optimización y esquemas iterativos.",
        descripcion:
            "Asesoría científica en modelación y computación matemática, incluyendo sistemas no lineales, ecuaciones diferenciales, métodos iterativos, aproximaciones libres de Jacobiano y optimización numérica.",
        icono: "bx-atom",
        destacado: true,
        incluye: Object.freeze([
            "Formulación matemática del problema.",
            "Selección o diseño del método numérico.",
            "Análisis de convergencia y estabilidad cuando corresponda.",
            "Experimentación computacional y lectura de resultados."
        ]),
        dirigidoA: Object.freeze([
            "Investigadores en matemática aplicada.",
            "Proyectos científicos interdisciplinarios.",
            "Estudiantes de maestría y doctorado."
        ])
    }),
    Object.freeze({
        id: "algoritmos-herramientas-cientificas",
        categoria: "computacion",
        titulo: "Desarrollo de algoritmos y herramientas científicas",
        resumen:
            "Diseño de prototipos, calculadoras y recursos digitales orientados a resolver necesidades académicas o de investigación.",
        descripcion:
            "Construcción de algoritmos y herramientas reproducibles para automatizar cálculos, organizar flujos de análisis, apoyar la docencia o convertir procedimientos científicos en soluciones digitales utilizables.",
        icono: "bx-grid-alt",
        destacado: false,
        incluye: Object.freeze([
            "Definición funcional de la herramienta.",
            "Diseño del algoritmo o motor de cálculo.",
            "Prototipo web o recurso computacional.",
            "Pruebas básicas, documentación y orientación de uso."
        ]),
        dirigidoA: Object.freeze([
            "Grupos y proyectos de investigación.",
            "Instituciones académicas.",
            "Docentes con necesidades de automatización."
        ])
    }),
    Object.freeze({
        id: "formacion-diseno-curricular",
        categoria: "formacion",
        titulo: "Formación especializada y diseño curricular",
        resumen:
            "Talleres, seminarios y acompañamiento en matemática, estadística, computación científica, educación matemática y diseño curricular.",
        descripcion:
            "Actividades de formación y transferencia de conocimiento ajustadas al nivel y a las necesidades de cada audiencia, incluyendo actualización docente y diseño curricular basado en competencias.",
        icono: "bx-book-open",
        destacado: true,
        incluye: Object.freeze([
            "Talleres y seminarios especializados.",
            "Formación en estadística y métodos numéricos.",
            "Actualización en educación matemática.",
            "Orientación para diseño y revisión curricular."
        ]),
        dirigidoA: Object.freeze([
            "Universidades y centros educativos.",
            "Docentes y equipos curriculares.",
            "Grupos de investigación y comunidades académicas."
        ])
    })
]);
