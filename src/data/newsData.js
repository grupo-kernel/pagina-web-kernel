// Imagenes
import sepulveda from "../assets/sep.png";
import antmel from "../assets/antmel_rodriguez.jpg";
import antmelPhd from "../assets/antmelphd.jpg";
import markPhd from "../assets/mark2.jpg";
import libroLogica from "../assets/libro_logica_matematica.jpg";
import jos from "../assets/jos.png";
import marc from "../assets/marc.png";
import natanael from "../assets/nat.png";

// Imágenes Congreso MESCYT 2026
import congreso1 from "../assets/congreso1.jpeg";
import congreso2 from "../assets/congreso2.jpeg";
import congreso3 from "../assets/congreso3.jpeg";
import congreso4 from "../assets/congreso4.jpeg";
import congreso5 from "../assets/congreso5.jpeg";
import congreso6 from "../assets/congreso6.jpeg";
import congreso7 from "../assets/congreso7.jpeg";
import congreso8 from "../assets/congreso8.jpeg";
import congreso9 from "../assets/congreso9.jpeg";

export const newsData = [
    {
        id: "nw10",
        featured: true,
        category: "Congresos",
        title: "El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",
        date: "1 de julio de 2026",
        image: congreso3,
        imageAlt:
            "Asistentes al simposio del Grupo de Investigación El Kernel en el XXI Congreso Internacional de Investigación Científica",
        imageFit: "contain",
        excerpt:
            "El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",
        content: {
            paragraphs: [
                "El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.",
                "Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.",
                "La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.",
                "La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.",
                "La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.",
                "La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.",
                "Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.",
                "La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."
            ],
            list: [
                "Evento: XXI Congreso Internacional de Investigación Científica.",
                "Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.",
                "Formato: simposio de tres ponencias.",
                "Duración aproximada: una hora.",
                "Asistencia estimada: alrededor de 50 personas.",
                "Público principal: estudiantes de la Maestría en Matemática Superior.",
                "Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.",
                "Coordinación académica: Miguel Antonio Leonardo Sepúlveda."
            ]
        },
        talks: [
            {
                order: 1,
                speaker: "Miguel Antonio Leonardo Sepúlveda, Ph.D.",
                title:
                    "Generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales",
                subtitle:
                    "Aplicación a un problema estacionario viscoso de Burgers discretizado",
                summary:
                    "Presentó una familia con funciones peso que conserva el orden cinco y permite ajustar el operador principal del error en sistemas no lineales, con aplicación al problema estacionario viscoso de Burgers.",
                image: congreso8
            },
            {
                order: 2,
                speaker: "Natanael Ureña Castillo",
                title:
                    "Eficiencia y estabilidad de nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma",
                subtitle:
                    "Optimización sin restricciones",
                summary:
                    "Presentó nuevos algoritmos híbridos cuasi-Newton orientados a mejorar la eficiencia, estabilidad y desempeño computacional en problemas de optimización.",
                image: congreso5
            },
            {
                order: 3,
                speaker: "Antmel Rodríguez Cabral, Ph.D.",
                title:
                    "Generalized Traub Family for Solving Nonlinear Systems",
                subtitle:
                    "Fourth-Order Optimal Method and Dynamical Analysis",
                summary:
                    "Presentó resultados sobre una familia generalizada de Traub para sistemas no lineales, con orden óptimo cuatro y análisis dinámico.",
                image: congreso9
            }
        ],
        gallery: [
            {
                src: congreso1,
                caption:
                    "Integrantes del Grupo Kernel en el XXI Congreso Internacional de Investigación Científica."
            },
            {
                src: congreso2,
                caption:
                    "Participantes del grupo junto a la pantalla de presentación de resultados."
            },
            {
                src: congreso3,
                caption:
                    "Vista general de los asistentes al simposio académico."
            },
            {
                src: congreso4,
                caption:
                    "Exposición sobre algoritmos híbridos cuasi-Newton."
            },
            {
                src: congreso5,
                caption:
                    "Presentación sobre eficiencia y estabilidad de nuevos algoritmos híbridos."
            },
            {
                src: congreso6,
                caption:
                    "Presentación sobre solución numérica y error en el problema de Burgers."
            },
            {
                src: congreso7,
                caption:
                    "Exposición sobre familias con funciones peso para sistemas no lineales."
            },
            {
                src: congreso8,
                caption:
                    "Presentación sobre optimalidad para sistemas no lineales."
            },
            {
                src: congreso9,
                caption:
                    "Análisis dinámico del método clásico de Traub."
            }
        ],
        tags: [
            "Congreso",
            "MESCYT",
            "Métodos iterativos",
            "Optimización",
            "Sistemas no lineales"
        ],
        articleURL: null
    },

    {
        id: "nw1",
        title: "Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",
        date: "2025",
        image: antmelPhd,
        excerpt:
            "El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",
        content: {
            paragraphs: [
                "El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.",
                "Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."
            ],
            list: [
                "Área principal: análisis numérico y métodos iterativos.",
                "Tema central: estabilidad de métodos iterativos para sistemas no lineales.",
                "Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.",
                "Impacto: fortalecimiento de la producción científica del Grupo Kernel."
            ]
        },
        articleURL: null
    },

    {
        id: "nw2",
        title: "Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",
        date: "2025",
        image: markPhd,
        excerpt:
            "El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",
        content: {
            paragraphs: [
                "El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",
                "Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."
            ],
            list: [
                "Área principal: teoría de grupos y estructuras algebraicas.",
                "Línea asociada: grafos, caracteres y clases p-regulares.",
                "Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.",
                "Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."
            ]
        },
        articleURL: null
    },

    {
        id: "nw3",
        title: "José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",
        date: "2025",
        image: jos,
        excerpt:
            "El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",
        content: {
            paragraphs: [
                "El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.",
                "Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."
            ],
            list: [
                "Área principal: análisis numérico.",
                "Línea asociada: métodos iterativos libres de derivadas.",
                "Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.",
                "Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."
            ]
        },
        articleURL: null
    },

    {
        id: "nw4",
        title: "Natanael Ureña Castillo presentará próximamente su tesis doctoral",
        date: "Próximamente",
        image: natanael,
        excerpt:
            "En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",
        content: {
            paragraphs: [
                "En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.",
                "Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."
            ],
            list: [
                "Área principal: optimización numérica.",
                "Línea asociada: métodos híbridos y cuasi-Newton.",
                "Estado: defensa doctoral próxima.",
                "Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."
            ]
        },
        articleURL: null
    },

    {
        id: "nw5",
        title: "Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",
        date: "2026",
        image: sepulveda,
        excerpt:
            "Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",
        content: {
            paragraphs: [
                "El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.",
                "Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."
            ],
            list: [
                "Año destacado: 2026.",
                "Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.",
                "Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.",
                "Proyección: incremento de publicaciones científicas en revistas de alto impacto.",
                "Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."
            ]
        },
        articleURL: null
    },

    {
        id: "nw6",
        title: "Sobre la estabilidad de los parámetros de autoaceleración",
        date: "2025",
        image: antmel,
        excerpt:
            "Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",
        content: {
            paragraphs: [
                "El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.",
                "El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."
            ],
            list: [
                "Análisis de estabilidad frente al orden de convergencia.",
                "Uso de herramientas de dinámica discreta.",
                "Aplicación a métodos iterativos para sistemas no lineales.",
                "Recomendaciones para escoger parámetros estables según el problema."
            ]
        },
        articleURL: "https://doi.org/10.1177/14727978251361407"
    },

    {
        id: "nw7",
        title: "Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",
        date: "17 de junio de 2025",
        image: libroLogica,
        excerpt:
            "Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",
        content: {
            paragraphs: [
                "La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.",
                "El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."
            ],
            list: [
                "Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.",
                "Dirigido a docentes y estudiantes.",
                "Incluye actividades guiadas y problemas de práctica.",
                "Aporta recursos para la enseñanza inicial de la matemática formal."
            ]
        },
        articleURL:
            "https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"
    },

    {
        id: "nw8",
        title: "Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",
        date: "2024",
        image: jos,
        excerpt:
            "Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",
        content: {
            paragraphs: [
                "El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",
                "El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."
            ],
            list: [
                "Revista: Axioms.",
                "Área: métodos iterativos para ecuaciones no lineales.",
                "Línea asociada: estabilidad y convergencia local.",
                "Contribución: análisis de un esquema óptimo de cuarto orden."
            ]
        },
        articleURL: "https://www.mdpi.com/2075-1680/13/1/34"
    },

    {
        id: "nw9",
        title: "Groups with Triangle-Free Graphs on p-Regular Classes",
        date: "2025",
        image: marc,
        excerpt:
            "Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",
        content: {
            paragraphs: [
                "El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.",
                "Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."
            ],
            list: [
                "Área: teoría de grupos.",
                "Tema: clases p-regulares.",
                "Objeto de estudio: grafos libres de triángulos.",
                "Línea asociada: álgebra y estructuras algebraicas."
            ]
        },
        articleURL:
            "https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"
    }
];
