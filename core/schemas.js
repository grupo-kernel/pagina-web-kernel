export class KernelValidationError extends Error {
  constructor(message, details = []) {
    super(message);
    this.name = "KernelValidationError";
    this.details = details;
  }
}

const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);
const isNonEmptyString = value => typeof value === "string" && value.trim().length > 0;

export function validateResearchers(payload) {
  const errors = [];
  if (!isObject(payload)) errors.push("El archivo de investigadores debe ser un objeto.");
  if (!isObject(payload?.group)) errors.push("Falta el objeto group.");
  if (!Array.isArray(payload?.researchers)) errors.push("Falta el arreglo researchers.");

  const ids = new Set();
  for (const [index, researcher] of (payload?.researchers || []).entries()) {
    const prefix = `researchers[${index}]`;
    if (!isObject(researcher)) {
      errors.push(`${prefix} debe ser un objeto.`);
      continue;
    }
    if (!isNonEmptyString(researcher.id)) errors.push(`${prefix}.id es obligatorio.`);
    if (!isNonEmptyString(researcher.name)) errors.push(`${prefix}.name es obligatorio.`);
    if (!isNonEmptyString(researcher.role)) errors.push(`${prefix}.role es obligatorio.`);
    if (!isNonEmptyString(researcher.image)) errors.push(`${prefix}.image es obligatorio.`);
    if (researcher.id && ids.has(researcher.id)) errors.push(`ID duplicado: ${researcher.id}.`);
    if (researcher.id) ids.add(researcher.id);
    if (researcher.areas !== undefined && !Array.isArray(researcher.areas)) errors.push(`${prefix}.areas debe ser un arreglo.`);
    if (researcher.affiliations !== undefined && !Array.isArray(researcher.affiliations)) errors.push(`${prefix}.affiliations debe ser un arreglo.`);
  }

  if (Number.isInteger(payload?.group?.member_count) && Array.isArray(payload?.researchers) && payload.group.member_count !== payload.researchers.length) {
    errors.push(`group.member_count (${payload.group.member_count}) no coincide con researchers.length (${payload.researchers.length}).`);
  }

  if (errors.length) throw new KernelValidationError("Datos de investigadores inválidos.", errors);
  return payload;
}

export function validatePublications(payload) {
  const errors = [];
  if (!isObject(payload)) errors.push("El archivo de publicaciones debe ser un objeto.");
  if (!Array.isArray(payload?.records)) errors.push("Falta el arreglo records.");
  for (const [index, record] of (payload?.records || []).entries()) {
    const prefix = `records[${index}]`;
    if (!isObject(record)) {
      errors.push(`${prefix} debe ser un objeto.`);
      continue;
    }
    if (!isNonEmptyString(record.title)) errors.push(`${prefix}.title es obligatorio.`);
  }
  if (errors.length) throw new KernelValidationError("Datos de publicaciones inválidos.", errors);
  return payload;
}

export function validateManifest(payload) {
  const errors = [];
  if (!isObject(payload)) errors.push("El manifiesto debe ser un objeto.");
  if (!Number.isInteger(payload?.schema_version)) errors.push("schema_version debe ser entero.");
  if (!isObject(payload?.sources)) errors.push("Falta el objeto sources.");
  if (payload?.activation?.enabled !== false) errors.push("El núcleo debe permanecer desactivado durante la migración inicial.");
  if (errors.length) throw new KernelValidationError("Manifiesto inválido.", errors);
  return payload;
}
