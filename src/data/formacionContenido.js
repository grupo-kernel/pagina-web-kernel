// Imagenes
import sepulveda from "../assets/sep.png";
import natanael from "../assets/nat.png";
import randy from "../assets/rad.png";
import antmel from "../assets/ant.png";
import marino from "../assets/mar.png";
import marc from "../assets/marc.png";
import jose from "../assets/jos.png";

export const formacionContenido = [

    {
        id: 1,
        name: "Miguel A. Leonardo Sepúlveda, Ph.D.",
        img: sepulveda,
        area: "Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",
        formacion: [
            { 
                name: "Doctorado en Matemática", 
                descripcion: "INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024." 
            },
            { 
                name: "Maestría en Matemática", 
                descripcion: "Instituto Tecnológico de Santo Domingo (INTEC, 2017)." 
            },
            { 
                name: "Especialidad en Planificación y Desarrollo Curricular", 
                descripcion: "Universitat de Barcelona (2019)." 
            },
            { 
                name: "Licenciatura en Educación, Mención Matemática y Física", 
                descripcion: "Universidad Dominicana O&M (2011)." 
            },
            { 
                name: "Diplomado en Formación Lasallista", 
                descripcion: "Universidad La Salle, México (2016)." 
            },
            { 
                name: "Investigador", 
                descripcion: "Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas." 
            }
        ],
        experiencia: [
            { id: 1, contenido: "Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU." },
            { id: 2, contenido: "Docente de Matemática en ITLA e ISFODOSU desde 2016." },
            { id: 3, contenido: "Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC." },
            { id: 4, contenido: "Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales." }
        ]
    },

    {
        id: 2,
        name: "Natanael Ureña Castillo",
        img: natanael,
        area: "Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",
        formacion: [
            { 
                name: "Doctorado en Matemática", 
                descripcion: "INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas." 
            },
            { 
                name: "Maestría en Matemática Pura", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2005-2008)." 
            },
            { 
                name: "Especialidad en Cálculo Actuarial", 
                descripcion: "Instituto Tecnológico de Santo Domingo (INTEC)." 
            },
            { 
                name: "Licenciatura en Educación, Mención Matemáticas", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2000-2004)." 
            },
            { 
                name: "Certificado de Estudios Superiores en Educación", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2000-2003)." 
            }
        ],
        experiencia: [
            { id: 1, contenido: "Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD." },
            { id: 2, contenido: "Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica." },
            { id: 3, contenido: "Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa." },
            { id: 4, contenido: "Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada." }
        ]
    },

    {
        id: 3,
        name: "Antmel Rodríguez Cabral, Ph.D.",
        img: antmel,
        area: "Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",
        formacion: [
            { 
                name: "Doctorado en Matemática", 
                descripcion: "INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador." 
            },
            { 
                name: "Maestría en Matemática Pura", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2015-2017)." 
            },
            { 
                name: "Ingeniería Civil", 
                descripcion: "Instituto Tecnológico de Santo Domingo (INTEC)." 
            },
            { 
                name: "Investigador Adscrito", 
                descripcion: "Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas." 
            }
        ],
        experiencia: [
            { id: 1, contenido: "Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR." },
            { id: 2, contenido: "Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta." },
            { id: 3, contenido: "Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD." },
            { id: 4, contenido: "Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales." }
        ]

    },

    {
        id: 4,
        name: "Randy Leonardo",
        img: randy,
        area: "Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",
        formacion: [
            { 
                name: "Maestría en Matemática", 
                descripcion: "Instituto Tecnológico de Santo Domingo (INTEC, 2011)." 
            },
            { 
                name: "Licenciatura en Matemática", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2008)." 
            },
            { 
                name: "Diplomados en Educación en Línea y Modelos SCORM", 
                descripcion: "Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)." 
            },
            { 
                name: "Investigador Titular", 
                descripcion: "Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas." 
            }
        ],
        experiencia: [
            { id: 1, contenido: "Docente de matemática en INTEC, UASD e ISFODOSU desde 2009." },
            { id: 2, contenido: "Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada." },
            { id: 3, contenido: "Ponente en congresos y seminarios nacionales e internacionales." }
        ]
    },

    {
        id: 5,
        name: "Marino Brito Guillén",
        img: marino,
        area: "Gestión universitaria, matemática, educación superior y formación docente",
        formacion: [
            { 
                name: "Máster Internacional de Gestión Universitaria", 
                descripcion: "Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos." 
            },
            { 
                name: "Maestría en Matemática", 
                descripcion: "Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)." 
            },
            { 
                name: "Postgrado en Matemática", 
                descripcion: "Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)." 
            },
            { 
                name: "Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas", 
                descripcion: "Universidad Eugenio María de Hostos (1991)." 
            },
            { 
                name: "Maestro Normal Primario", 
                descripcion: "Escuela Normal Américo Lugo (1984)." 
            },
            { 
                name: "Diplomado en Gerencia Social Ignaciana", 
                descripcion: "Pontificia Universidad Javeriana, Colombia (2009)." 
            }
        ],
        experiencia: [
            { id: 1, contenido: "Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática." },
            { id: 2, contenido: "Experiencia en procesos institucionales de educación superior y desarrollo académico." },
            { id: 3, contenido: "Aportes a la formación matemática y a la gestión educativa en contextos universitarios." }
        ]
    },

    {
        id: 6,
        name: "Marc-Kelly Jean Philippe Jean, Ph.D.",
        img: marc,
        area: "Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",
        formacion: [
            { 
                name: "Doctorado en Matemática", 
                descripcion: "Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador." 
            },
            { 
                name: "Maestría en Matemática", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2023)." 
            },
            { 
                name: "Maestría en Matemática", 
                descripcion: "Universidad Tecnológica de Santiago (UTESA, 2015)." 
            },
            { 
                name: "Licenciatura en Matemática Pura", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2011)." 
            },
            { 
                name: "Diplomado en Desarrollo de Competencias Didácticas", 
                descripcion: "Universidad Santander, España (2024)." 
            },
            { 
                name: "Bachillerato Humanístico", 
                descripcion: "Colegio Mi Hogar Cristiano, La Romana (2004)." 
            }
        ],
        experiencia: [
            { id: 1, contenido: "Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012." },
            { id: 2, contenido: "Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas." },
            { id: 3, contenido: "Tutor virtual y profesor en UCE y Loyola." },
            { id: 4, contenido: "Asesor, árbitro y conferencista en investigación en álgebra y educación matemática." },
            { id: 5, contenido: "Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME." }
        ]
    },

    {
        id: 7,
        name: "José Alberto Reyes Reyes, Ph.D.",
        img: jose,
        area: "Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",
        formacion: [
            { 
                name: "Doctorado en Matemática", 
                descripcion: "INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador." 
            },
            { 
                name: "Maestría en Matemática Pura", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2014-2016)." 
            },
            { 
                name: "Magíster en Matemáticas", 
                descripcion: "Universidad Tecnológica de Santiago (UTESA, 2013-2015)." 
            },
            { 
                name: "Máster en Educación y Nuevas Tecnologías", 
                descripcion: "Universidad a Distancia de Madrid (UDIMA), España (2012-2013)." 
            },
            { 
                name: "Licenciatura en Matemáticas", 
                descripcion: "Universidad Autónoma de Santo Domingo (UASD, 2007-2011)." 
            },
            { 
                name: "Diplomado en Fundamentos del Análisis de Variable Real", 
                descripcion: "Universidad Central del Este (UCE, 2011-2012)." 
            },
            { 
                name: "Diplomado en Competencias Digitales", 
                descripcion: "Red Qualitas/Microsoft (2020)." 
            }
        ],
        experiencia: [
            { id: 1, contenido: "Docente universitario y de postgrado en matemáticas en la UASD." },
            { id: 2, contenido: "Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas." },
            { id: 3, contenido: "Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales." },
            { id: 4, contenido: "Consultor en innovación educativa y tecnologías aplicadas a la educación matemática." }
        ]
    }
];
