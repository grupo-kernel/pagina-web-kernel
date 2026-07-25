import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const inputPath = path.join(ROOT, 'data/publications.json');
const outputPath = path.join(ROOT, 'core/data/publications.v2.json');
const reportPath = path.join(ROOT, 'core/audits/publications-migration-report.json');

const normalizeDoi = value => String(value || '')
  .trim()
  .replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')
  .toLowerCase();

const normalizeText = value => String(value || '').replace(/\s+/g, ' ').trim();
const normalizeDate = value => /^\d{4}-\d{2}-\d{2}$/.test(String(value || '')) ? String(value) : null;
const unique = values => [...new Set((values || []).map(normalizeText).filter(Boolean))];

const source = JSON.parse(await fs.readFile(inputPath, 'utf8'));
const seen = new Map();
const duplicates = [];
const warnings = [];

const records = (source.records || []).map((record, index) => {
  const doi = normalizeDoi(record.doi);
  const fallbackId = record.openalex_id || `${normalizeText(record.title).toLowerCase()}::${record.year || 'unknown'}`;
  const id = doi ? `doi:${doi}` : `fallback:${fallbackId}`;

  if (seen.has(id)) duplicates.push({ id, first_index: seen.get(id), duplicate_index: index });
  else seen.set(id, index);

  const year = Number(record.year) || Number(String(record.publication_date || '').slice(0, 4)) || null;
  if (!doi) warnings.push({ index, code: 'missing-doi', title: normalizeText(record.title) });
  if (!year) warnings.push({ index, code: 'missing-year', title: normalizeText(record.title) });
  if (!record.journal) warnings.push({ index, code: 'missing-journal', title: normalizeText(record.title) });
  if (!Array.isArray(record.authors) || !record.authors.length) warnings.push({ index, code: 'missing-authors', title: normalizeText(record.title) });

  return {
    id,
    status: 'published',
    type: record.type || 'journal-article',
    title: normalizeText(record.title),
    bibliographic: {
      journal: normalizeText(record.journal),
      publication_date: normalizeDate(record.publication_date),
      year,
      volume: record.volume ? normalizeText(record.volume) : null,
      issue: record.issue ? normalizeText(record.issue) : null,
      pages: record.pages ? normalizeText(record.pages) : null,
      article_number: record.article_number ? normalizeText(record.article_number) : null,
      issn: unique(record.issn)
    },
    identifiers: {
      doi: doi || null,
      openalex: record.openalex_id || null,
      url: record.url || (doi ? `https://doi.org/${doi}` : null)
    },
    authors: unique(record.authors),
    researcher_ids: unique(record.researcher_ids).sort(),
    provenance: {
      display_source: normalizeText(record.source),
      import_source: normalizeText(record.import_source),
      imported_at: source.generated_at || null
    },
    metrics: {
      quartile: record.quartile ? {
        value: record.quartile.quartile || null,
        system: record.quartile.system || null,
        category: record.quartile.category || null,
        metric_year: Number(record.quartile.metric_year) || null,
        verified_at: record.quartile.verified_at || null,
        source_url: record.quartile.source_url || null,
        journal_name: record.quartile.journal_name || record.journal || null
      } : null
    }
  };
});

const uniqueRecords = records.filter((record, index) => seen.get(record.id) === index);
uniqueRecords.sort((a, b) => {
  const dateA = a.bibliographic.publication_date || `${a.bibliographic.year || 0}-00-00`;
  const dateB = b.bibliographic.publication_date || `${b.bibliographic.year || 0}-00-00`;
  return dateB.localeCompare(dateA) || a.title.localeCompare(b.title);
});

const output = {
  schema_version: 2,
  status: 'candidate-not-active',
  generated_from: 'data/publications.json',
  generated_at: new Date().toISOString(),
  counting_method: source.counting_method || 'DOI normalizado; respaldo por identificador o título y año',
  coverage_note: source.coverage_note || null,
  profile_metrics: source.profile_metrics || {},
  summary: {
    source_records: records.length,
    unique_records: uniqueRecords.length,
    duplicate_records_removed: duplicates.length,
    researchers_with_records: new Set(uniqueRecords.flatMap(item => item.researcher_ids)).size,
    latest_year: Math.max(...uniqueRecords.map(item => item.bibliographic.year || 0)),
    records_with_doi: uniqueRecords.filter(item => item.identifiers.doi).length,
    records_without_doi: uniqueRecords.filter(item => !item.identifiers.doi).length,
    records_with_quartile: uniqueRecords.filter(item => item.metrics.quartile).length
  },
  records: uniqueRecords
};

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.mkdir(path.dirname(reportPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
await fs.writeFile(reportPath, `${JSON.stringify({ duplicates, warnings, summary: output.summary }, null, 2)}\n`, 'utf8');

console.log(`Publications v2 generated: ${output.summary.unique_records} unique records.`);
console.log(`Duplicates removed: ${duplicates.length}. Warnings: ${warnings.length}.`);
