import {
  KernelValidationError,
  validateManifest,
  validatePublications,
  validateResearchers
} from "./schemas.js";

const validators = {
  researchers: validateResearchers,
  publications: validatePublications
};

const DEFAULT_OPTIONS = Object.freeze({
  baseUrl: "../",
  cache: "no-store",
  strictOptionalSources: false
});

function joinUrl(baseUrl, path) {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return new URL(path, new URL(normalizedBase, window.location.href)).toString();
}

async function fetchJson(url, cache) {
  const response = await fetch(url, { cache });
  if (!response.ok) throw new Error(`No se pudo cargar ${url}: HTTP ${response.status}`);
  try {
    return await response.json();
  } catch (error) {
    throw new Error(`JSON inválido en ${url}: ${error.message}`);
  }
}

export class KernelCore {
  constructor(options = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.manifest = null;
    this.cache = new Map();
    this.diagnostics = [];
  }

  async initialize() {
    const url = joinUrl(this.options.baseUrl, "core/manifest.json");
    this.manifest = validateManifest(await fetchJson(url, this.options.cache));
    return this;
  }

  get isActive() {
    return this.manifest?.activation?.enabled === true;
  }

  async load(sourceName, { force = false } = {}) {
    if (!this.manifest) await this.initialize();
    const source = this.manifest.sources?.[sourceName];
    if (!source) throw new Error(`Fuente desconocida: ${sourceName}`);
    if (!force && this.cache.has(sourceName)) return this.cache.get(sourceName);

    const url = joinUrl(this.options.baseUrl, source.path);
    try {
      const payload = await fetchJson(url, this.options.cache);
      const validated = validators[sourceName] ? validators[sourceName](payload) : payload;
      this.cache.set(sourceName, validated);
      this.diagnostics.push({ source: sourceName, ok: true, url, timestamp: new Date().toISOString() });
      return validated;
    } catch (error) {
      const diagnostic = {
        source: sourceName,
        ok: false,
        required: source.required === true,
        url,
        message: error.message,
        details: error instanceof KernelValidationError ? error.details : [],
        timestamp: new Date().toISOString()
      };
      this.diagnostics.push(diagnostic);
      if (source.required || this.options.strictOptionalSources) throw error;
      return null;
    }
  }

  async audit() {
    if (!this.manifest) await this.initialize();
    const results = {};
    for (const sourceName of Object.keys(this.manifest.sources)) {
      results[sourceName] = await this.load(sourceName, { force: true }).then(
        value => ({ ok: value !== null, count: Array.isArray(value?.records) ? value.records.length : Array.isArray(value?.researchers) ? value.researchers.length : null }),
        error => ({ ok: false, error: error.message })
      );
    }
    return {
      coreVersion: this.manifest.core_version,
      active: this.isActive,
      results,
      diagnostics: [...this.diagnostics]
    };
  }

  clearCache(sourceName) {
    if (sourceName) this.cache.delete(sourceName);
    else this.cache.clear();
  }
}

export async function createKernelCore(options = {}) {
  const core = new KernelCore(options);
  await core.initialize();
  return core;
}
