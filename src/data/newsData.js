export const newsData = [
    {
        id: "nw1",
        title: "Sobre la estabilidad de los parámetros de autoaceleración",
        date: "2025",
        image: "/src/assets/antmel_rodriguez.jpg",
        excerpt:
            "Se publicó el artículo sobre la estabilidad de familias con parámetros autoacelerados en métodos iterativos sin memoria usando dinámica discreta.",
        content: {
            paragraphs: [
                "El artículo analiza dos subfamilias paramétricas (p₁ y p₂) de métodos iterativos sin memoria para sistemas no lineales, evaluando estabilidad vs. orden de convergencia. Usando herramientas de dinámica discreta (planos y diagramas de bifurcación) se muestran regiones con órbitas periódicas y zonas de caos."
            ],
            list: [
                "Miembros de orden 4 muestran mayor estabilidad práctica que el esquema de orden 5.",
                "Pruebas en problemas académicos.",
                "Recomendaciones para escoger parámetros estables según el problema."
            ]
        },
        articleURL: "https://doi.org/10.1177/14727978251361407"
    },

    {
        id: "nw2",
        title: "Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",
        date: "17 de junio de 2025",
        image: "/src/assets/libro_logica_matematica.jpg",
        excerpt:
            "Se lanzó la “Guía Didáctica de Lógica Matemática y Teoría de Conjuntos”, con ejercicios y recursos para bachillerato y nivel universitario inicial.",
        content: {
            paragraphs: [
                "Recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones para evaluación formativa."
            ],
            list: [
                "Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.",
                "Dirigido a docentes (planeación) y estudiantes (autonomía y refuerzo)."
            ]
        },
        articleURL:
            "https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"
    },

    {
        id: "nw3",
        title: "Robust Family of High-Order Derivative-Free Methods (Axioms, Q2)",
        date: "15 de junio de 2025",
        image: "/src/assets/jos.png",
        excerpt:
            "Métodos de alto orden sin derivadas para resolver ecuaciones no lineales, con análisis de convergencia y pruebas numéricas comparativas.",
        content: {
            paragraphs: [
                "Se propone una familia robusta de métodos sin derivadas y de alto orden para ecuaciones no lineales.",
                "Incluye análisis teórico de convergencia y experimentación numérica comparativa."
            ],
            list: []
        },
        articleURL: "https://www.mdpi.com/2075-1680/13/1/34"
    },

    {
        id: "nw4",
        title: "Groups with triangle-free graphs on p-regular classes",
        date: "10 de junio de 2025",
        image: "/src/assets/marc.png",
        excerpt:
            "Resultados en teoría de grupos finitos con propiedades combinatorias de clases p-regulares y sus grafos asociados.",
        content: {
            paragraphs: [
                "El trabajo analiza grafos asociados a clases p-regulares en teoría de grupos finitos.",
                "Se estudian condiciones bajo las cuales dichos grafos son libres de triángulos y sus implicaciones estructurales."
            ],
            list: []
        },
        articleURL:
            "https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"
    },

    {
        id: "nw5",
        title: "Defensa de Tesis doctoral de Marck-Kelly Jean Philippe",
        date: "Junio de 2025",
        image: "/src/assets/marckelly_tesis.jpg",
        excerpt:
            "Defensa exitosa de tesis doctoral en teoría de grupos, explorando estructuras asociadas a clases p-regulares y grafos libres de triángulos.",
        content: {
            paragraphs: [
                "La tesis aborda aspectos combinatorios y estructurales en teoría de grupos, con énfasis en clases p-regulares y sus grafos asociados.",
                "Se presentan nuevas cotas y caracterizaciones relacionadas con conectividad y ausencia de triángulos."
            ],
            list: [
                "Direcciones futuras: extensiones a otras familias de grafos y aplicaciones a problemas de factorización.",
                "Próxima disponibilidad del manuscrito para consulta institucional."
            ]
        },
        articleURL: null
    }
];
