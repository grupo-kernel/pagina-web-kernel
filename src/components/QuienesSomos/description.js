import { publicacionesContenido } from "../data/publicacionesContenido.js";

function getDOI(pub) {
    return String(pub?.DOI || pub?.doi || "")
        .trim()
        .toLowerCase();
}

function getPublicationKey(pub) {
    const doi = getDOI(pub);

    if (doi) {
        return doi;
    }

    return [
        pub?.year || "",
        pub?.title || pub?.journal || pub?.tile || "",
        pub?.contenido || pub?.articleTitle || ""
    ]
        .join("-")
        .trim()
        .toLowerCase();
}

export function getPublicacionesUnicas() {
    const map = new Map();

    if (!Array.isArray(publicacionesContenido)) {
        return [];
    }

    publicacionesContenido.forEach(investigador => {
        const publicaciones = investigador?.publicaciones || [];

        publicaciones.forEach(pub => {
            const key = getPublicationKey(pub);

            if (key && !map.has(key)) {
                map.set(key, pub);
            }
        });
    });

    return Array.from(map.values());
}

export function getPublicacionesStats() {
    const publicacionesUnicas = getPublicacionesUnicas();

    const years = publicacionesUnicas
        .map(pub => Number(pub.year))
        .filter(Boolean);

    const totalQ1 = publicacionesUnicas.filter(pub =>
        String(pub?.q || "").trim().toUpperCase() === "Q1"
    ).length;

    return {
        totalPublicaciones: publicacionesUnicas.length,
        totalQ1,
        primerYear: years.length ? Math.min(...years) : "—",
        ultimoYear: years.length ? Math.max(...years) : "—"
    };
}
