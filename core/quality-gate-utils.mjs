import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

export const root = process.cwd();
export const errors = [];
export const warnings = [];
export const checks = [];
export const fail = message => errors.push(message);
export const warn = message => warnings.push(message);
export const check = (name, ok, detail = '') => checks.push({ name, ok, detail });

export async function exists(relativePath) {
  try { await access(path.join(root, relativePath)); return true; }
  catch { return false; }
}

export async function loadJson(relativePath, required = true) {
  try {
    return JSON.parse(await readFile(path.join(root, relativePath), 'utf8'));
  } catch (error) {
    const message = `${relativePath}: ${error.message}`;
    required ? fail(`JSON obligatorio inválido: ${message}`) : warn(`Fuente opcional pendiente: ${message}`);
    return null;
  }
}

export function duplicates(values) {
  const seen = new Set(), repeated = new Set();
  for (const value of values.filter(Boolean)) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
}
