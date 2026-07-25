(() => {
  "use strict";

  const EXPECTED_IDS = [
    "miguel-leonardo",
    "natanael-urena",
    "randy-leonardo",
    "antmel-rodriguez",
    "marino-brito",
    "marc-kelly-jean-philippe",
    "jose-alberto-reyes",
    "alicia-cordero",
    "juan-torregrosa"
  ];

  const required = [
    "id", "order", "status", "visibility", "member_scope", "name",
    "display_degree", "role", "country", "image", "areas",
    "affiliations", "contact", "profiles", "bio", "formation",
    "experience", "sync"
  ];

  const unique = values => new Set(values).size === values.length;
  const sameSet = (a, b) => a.length === b.length && a.every(value => b.includes(value));

  function validate(data) {
    const errors = [];
    const warnings = [];
    const researchers = Array.isArray(data?.researchers) ? data.researchers : [];

    if (data?.schema_version !== 2) errors.push("schema_version debe ser 2");
    if (data?.status !== "candidate-not-active") errors.push("La fuente candidata debe permanecer desactivada");
    if (researchers.length !== 9) errors.push(`Se esperaban 9 investigadores y se encontraron ${researchers.length}`);

    const ids = researchers.map(item => item.id);
    const orders = researchers.map(item => item.order);
    const orcids = researchers.map(item => item.profiles?.orcid).filter(Boolean);

    if (!unique(ids)) errors.push("Existen identificadores duplicados");
    if (!unique(orders)) errors.push("Existen posiciones de orden duplicadas");
    if (!unique(orcids)) errors.push("Existen ORCID duplicados");
    if (!sameSet(ids, EXPECTED_IDS)) errors.push("La lista de miembros no coincide con los nueve identificadores aprobados");

    researchers.forEach((researcher, index) => {
      required.forEach(field => {
        if (!(field in researcher)) errors.push(`${researcher.id || `registro-${index + 1}`}: falta ${field}`);
      });
      if (researcher.order !== index + 1) warnings.push(`${researcher.id}: el orden físico no coincide con order`);
      if (!Array.isArray(researcher.areas) || researcher.areas.length === 0) errors.push(`${researcher.id}: áreas vacías`);
      if (!Array.isArray(researcher.affiliations) || researcher.affiliations.length === 0) errors.push(`${researcher.id}: afiliaciones vacías`);
      if (!Array.isArray(researcher.formation) || researcher.formation.length === 0) errors.push(`${researcher.id}: formación vacía`);
      if (!Array.isArray(researcher.experience) || researcher.experience.length === 0) errors.push(`${researcher.id}: experiencia vacía`);
      if (!researcher.contact?.email?.includes("@")) errors.push(`${researcher.id}: correo inválido`);
      if (researcher.profiles?.orcid && !/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(researcher.profiles.orcid)) errors.push(`${researcher.id}: ORCID inválido`);
      if (!researcher.image?.current || !researcher.image?.canonical) errors.push(`${researcher.id}: rutas de imagen incompletas`);
    });

    return {
      valid: errors.length === 0,
      errors,
      warnings,
      summary: {
        researchers: researchers.length,
        principal: researchers.filter(item => item.member_scope === "principal").length,
        international: researchers.filter(item => item.member_scope === "international").length,
        countries: [...new Set(researchers.map(item => item.country))],
        orcid_records: orcids.length
      }
    };
  }

  window.KernelResearchersV2Validator = Object.freeze({ validate, expectedIds: [...EXPECTED_IDS] });
})();
