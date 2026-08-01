const congelar = (valor) => Object.freeze(valor);

export const ETAPAS_FLUJO_LABORATORIO = Object.freeze([
    congelar({
        numero: "01",
        id: "orientar",
        titulo: "Orientar",
        descripcion:
            "Defina el objetivo, el tipo de variable y el diseño antes de elegir una prueba.",
        icono: "bx-check-shield",
        estado: "Disponible",
        detalleEstado: "Asistente KSDE 2.0",
        accion: congelar({
            tipo: "ruta",
            valor: "asistentePruebas",
            etiqueta: "Iniciar orientación"
        }),
        fondoIcono: "bg-blue-100",
        colorIcono: "text-blue-700",
        bordeIcono: "border-blue-200"
    }),
    congelar({
        numero: "02",
        id: "analizar",
        titulo: "Analizar",
        descripcion:
            "Seleccione una herramienta, introduzca sus datos y ejecute el procedimiento estadístico.",
        icono: "bx-calculator",
        estado: "Disponible",
        detalleEstado: "Catálogo de análisis",
        accion: congelar({
            tipo: "ancla",
            valor: "catalogo-analisis",
            etiqueta: "Ver herramientas"
        }),
        fondoIcono: "bg-emerald-100",
        colorIcono: "text-emerald-700",
        bordeIcono: "border-emerald-200"
    }),
    congelar({
        numero: "03",
        id: "interpretar",
        titulo: "Interpretar",
        descripcion:
            "Examine el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto.",
        icono: "bx-line-chart",
        estado: "Integrado",
        detalleEstado: "Dentro de las calculadoras",
        accion: null,
        fondoIcono: "bg-amber-100",
        colorIcono: "text-amber-700",
        bordeIcono: "border-amber-200"
    }),
    congelar({
        numero: "04",
        id: "reportar",
        titulo: "Reportar",
        descripcion:
            "Utilice las orientaciones de cada herramienta para comunicar resultados con rigor y contexto.",
        icono: "bx-edit-alt",
        estado: "Integrado",
        detalleEstado: "Según la herramienta",
        accion: null,
        fondoIcono: "bg-violet-100",
        colorIcono: "text-violet-700",
        bordeIcono: "border-violet-200"
    })
]);

export const GRUPOS_CATALOGO_LABORATORIO = Object.freeze([
    congelar({
        id: "preparar-describir",
        titulo: "Preparar y describir",
        descripcion:
            "Conozca la estructura de sus datos y planifique el tamaño necesario antes de la inferencia.",
        icono: "bx-bar-chart-alt-2",
        modulos: congelar([
            "estadistica-descriptiva",
            "tamano-muestra"
        ])
    }),
    congelar({
        id: "comparar-relacionar",
        titulo: "Comparar y relacionar",
        descripcion:
            "Contraste grupos, mediciones y relaciones entre variables cuantitativas o categóricas.",
        icono: "bx-group",
        modulos: congelar([
            "comparacion-grupos",
            "correlacion-asociacion"
        ])
    }),
    congelar({
        id: "modelar-evaluar",
        titulo: "Modelar y evaluar",
        descripcion:
            "Construya modelos y estudie la calidad de instrumentos, ítems y evaluaciones.",
        icono: "bx-trending-up",
        modulos: congelar([
            "regresion",
            "cuestionarios-fiabilidad",
            "evaluacion-educativa"
        ])
    }),
    congelar({
        id: "consultar-aprender",
        titulo: "Consultar y aprender",
        descripcion:
            "Revise fundamentos, supuestos, alternativas, errores frecuentes y formas de reporte.",
        icono: "bx-library",
        modulos: congelar([
            "biblioteca-metodologica"
        ])
    })
]);

export const ID_MODULO_ASISTENTE = "asistente-pruebas";
