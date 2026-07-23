const REVISTAS = Object.freeze([
    {
        patron: /^mathematics and computers in simulation$/i,
        editorial: "Elsevier B.V. (sello North-Holland)",
        issn: "0378-4754 · eISSN 1872-7166",
        modelo: "Híbrido; admite publicación en acceso abierto",
        descripcion: "Revista oficial de IMACS sobre modelización, simulación y computación científica"
    },
    {
        patron: /^numerical algorithms$/i,
        editorial: "Springer Nature",
        issn: "ISSN de la revista disponible en Springer Nature Link",
        modelo: "Modelo híbrido",
        descripcion: "Revista especializada en algoritmos numéricos y computación científica"
    },
    {
        patron: /^mediterranean journal of mathematics$/i,
        editorial: "Springer Nature",
        issn: "ISSN 1660-5446",
        modelo: "Modelo híbrido",
        descripcion: "Revista internacional de matemática pura y aplicada"
    },
    {
        patron: /^bulletin of the malaysian mathematical sciences society$/i,
        editorial: "Springer Nature",
        issn: "Información bibliográfica disponible en Springer Nature Link",
        modelo: "Modelo híbrido",
        descripcion: "Revista de la Malaysian Mathematical Sciences Society"
    },
    {
        patron: /^mathematische nachrichten$/i,
        editorial: "Wiley-VCH",
        issn: "ISSN 0025-584X · eISSN 1522-2616",
        modelo: "Publicación periódica de Wiley",
        descripcion: "Revista de amplio alcance en matemática pura y aplicada"
    },
    {
        patron: /^journal of computational methods in sciences and engineering$/i,
        editorial: "SAGE Publishing para el artículo registrado en 2025",
        issn: "Información editorial según la edición del artículo",
        modelo: "Revista de métodos computacionales en ciencias e ingeniería",
        descripcion: "La gestión editorial de la revista cambió en enero de 2026"
    },
    {
        patron: /^mathematics$/i,
        editorial: "MDPI",
        issn: "eISSN 2227-7390",
        modelo: "Acceso abierto · publicación semimensual",
        descripcion: "Revista internacional revisada por pares en ciencias matemáticas"
    },
    {
        patron: /^algorithms$/i,
        editorial: "MDPI",
        issn: "eISSN 1999-4893",
        modelo: "Acceso abierto · publicación mensual",
        descripcion: "Revista de algoritmos, matemática computacional y aplicaciones"
    },
    {
        patron: /^computation$/i,
        editorial: "MDPI",
        issn: "eISSN 2079-3197",
        modelo: "Acceso abierto · publicación mensual",
        descripcion: "Revista de ciencia e ingeniería computacional"
    }
]);

export function obtenerDatosRevista(revista = "") {
    return REVISTAS.find((item) => item.patron.test(String(revista).trim())) || {
        editorial: "Editorial no especificada en el registro interno",
        issn: "ISSN no registrado",
        modelo: "Consultar la página oficial de la revista",
        descripcion: "Publicación científica revisada por pares"
    };
}
