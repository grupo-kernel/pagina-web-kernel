import fs from 'node:fs/promises';
import process from 'node:process';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const metadataKeys = new Set(['schema_version', 'locale', 'status', 'updated_at']);
const flatten = (value, prefix = '', out = new Map()) => {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) {
      if (!prefix && metadataKeys.has(key)) continue;
      flatten(child, prefix ? `${prefix}.${key}` : key, out);
    }
  } else out.set(prefix, value);
  return out;
};

const es = flatten(await read('translations/es.json'));
const en = flatten(await read('translations/en.json'));
const errors = [];
const warnings = [];

for (const key of es.keys()) if (!en.has(key)) errors.push(`Falta en inglés: ${key}`);
for (const key of en.keys()) if (!es.has(key)) errors.push(`Falta en español: ${key}`);
for (const [key, value] of es) if (typeof value !== 'string' || !value.trim()) errors.push(`Valor ES vacío o inválido: ${key}`);
for (const [key, value] of en) if (typeof value !== 'string' || !value.trim()) errors.push(`Valor EN vacío o inválido: ${key}`);
for (const key of es.keys()) {
  if (!en.has(key)) continue;
  if (es.get(key) === en.get(key) && !['common.open_doi'].includes(key)) warnings.push(`Traducción idéntica: ${key}`);
}

console.log(`Traducciones: ES=${es.size}, EN=${en.size}`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
