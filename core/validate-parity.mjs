import fs from 'node:fs/promises';
import process from 'node:process';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const ids = values => new Set((values || []).map(item => typeof item === 'string' ? item : item?.id).filter(Boolean));
const checks = [];
const errors = [];
const warnings = [];
const check = (name, ok, detail = '') => {
  const entry = { name, ok: Boolean(ok), detail: detail || null };
  checks.push(entry);
  console.log(`${entry.ok ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`);
  if (!entry.ok) errors.push(`${name}${detail ? `: ${detail}` : ''}`);
};
const warn = message => warnings.push(message);

const config = await read('core/quality-gate.config.json');
const currentResearchers = await read('data/researchers.json');
const candidateResearchers = await read('core/data/researchers.v2.json');
const currentPublications = await read('data/publications.json');
const candidatePublications = await read('core/data/publications.v2.json');
const projects = await read('core/data/projects.v2.json');
const services = await read('core/data/services.v2.json');
const news = await read('core/data/news.v2.json');
const relations = await read('core/data/relations.v1.json');
const manifest = await read('core/manifest.json');

const expected = config.expected;
const currentResearcherIds = ids(currentResearchers.researchers);
const candidateResearcherIds = ids(candidateResearchers.researchers);

console.log('\n=== PARITY CHECK: RESEARCHERS ===');
check('Current source keeps nine researchers', currentResearchers.group?.member_count === expected.researcher_count && currentResearchers.researchers?.length === expected.researcher_count, `${currentResearchers.researchers?.length || 0}/${expected.researcher_count}`);
check('Candidate source keeps nine researchers', candidateResearchers.group?.member_count === expected.researcher_count && candidateResearchers.researchers?.length === expected.researcher_count, `${candidateResearchers.researchers?.length || 0}/${expected.researcher_count}`);
check('Researcher IDs preserved', expected.researcher_ids.every(id => currentResearcherIds.has(id) && candidateResearcherIds.has(id)), expected.researcher_ids.filter(id => !currentResearcherIds.has(id) || !candidateResearcherIds.has(id)).join(', '));
check('Institutional order is complete', candidateResearchers.researchers.map(item => item.order).sort((a, b) => a - b).join(',') === '1,2,3,4,5,6,7,8,9');

console.log('\n=== PARITY CHECK: PUBLICATIONS ===');
const sourceRecords = currentPublications.records?.length || 0;
const candidateSourceRecords = candidatePublications.summary?.source_records || 0;
const candidateUniqueRecords = candidatePublications.summary?.unique_records || 0;
const currentUniqueRecords = currentPublications.summary?.unique_catalog_records ?? null;
check('Publication migration reads all source records', sourceRecords === candidateSourceRecords, `${candidateSourceRecords}/${sourceRecords}`);
check('Publication candidate is not empty', candidateUniqueRecords > 0, `${candidateUniqueRecords}`);
check('Publication candidate does not exceed source records', candidateUniqueRecords <= sourceRecords, `${candidateUniqueRecords}<=${sourceRecords}`);
if (currentUniqueRecords !== null) {
  check('Publication unique count matches current summary', candidateUniqueRecords === currentUniqueRecords, `${candidateUniqueRecords}/${currentUniqueRecords}`);
} else warn('Current publication summary does not expose unique_catalog_records.');
check('Latest publication year preserved', candidatePublications.summary?.latest_year === currentPublications.summary?.latest_year, `${candidatePublications.summary?.latest_year}/${currentPublications.summary?.latest_year}`);

console.log('\n=== PARITY CHECK: PROJECTS ===');
check('Recorded project participations preserved', projects.summary?.recorded_participations === expected.recorded_project_participations, `${projects.summary?.recorded_participations}/${expected.recorded_project_participations}`);
check('Featured approved projects preserved', projects.summary?.featured_approved_projects === expected.featured_approved_projects && (projects.approved_projects || []).filter(item => item.featured).length === expected.featured_approved_projects, `${(projects.approved_projects || []).filter(item => item.featured).length}/${expected.featured_approved_projects}`);
check('FONDOCyT proposal remains separated from approved projects', (projects.proposals || []).some(item => item.id === 'fondocyt-transporte-nutrientes' && item.status === 'under-review'));

console.log('\n=== PARITY CHECK: SERVICES AND NEWS ===');
check('Service candidate count preserved', services.services?.length === expected.service_count, `${services.services?.length || 0}/${expected.service_count}`);
check('News candidate count preserved', news.items?.length === expected.news_candidate_count, `${news.items?.length || 0}/${expected.news_candidate_count}`);

console.log('\n=== PARITY CHECK: RELATIONS AND ACTIVATION ===');
const relationResearcherCount = relations.counts?.researchers;
check('Relations index covers all researchers', relationResearcherCount === expected.researcher_count, `${relationResearcherCount}/${expected.researcher_count}`);
check('Relations index includes projects and proposals', relations.counts?.projects === (projects.approved_projects || []).length + (projects.proposals || []).length, `${relations.counts?.projects}/${(projects.approved_projects || []).length + (projects.proposals || []).length}`);
check('Kernel Core remains inactive', manifest.activation?.enabled === false, `enabled=${manifest.activation?.enabled}`);
check('Candidate modules remain non-active', [candidateResearchers.status, candidatePublications.status, projects.status, services.status, news.status].every(status => String(status).includes('not-active') || String(status).includes('candidate')));

const report = {
  schema_version: 1,
  generated_at: new Date().toISOString(),
  branch_mode: config.mode,
  result: errors.length ? 'FAIL' : 'PASS',
  counts: {
    checks: checks.length,
    passed: checks.filter(item => item.ok).length,
    failed: checks.filter(item => !item.ok).length,
    warnings: warnings.length
  },
  diagnostics: {
    source_publication_records: sourceRecords,
    current_publication_unique_summary: currentUniqueRecords,
    candidate_publication_unique_records: candidateUniqueRecords,
    candidate_duplicate_records_removed: candidatePublications.summary?.duplicate_records_removed ?? null,
    current_latest_year: currentPublications.summary?.latest_year ?? null,
    candidate_latest_year: candidatePublications.summary?.latest_year ?? null,
    relation_researchers: relationResearcherCount ?? null,
    relation_projects_and_proposals: relations.counts?.projects ?? null
  },
  checks,
  warnings,
  errors
};

await fs.mkdir('core/audits', { recursive: true });
await fs.writeFile('core/audits/parity-runtime-report.json', `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (warnings.length) {
  console.log('\nPARITY WARNINGS');
  warnings.forEach(item => console.log(`- ${item}`));
}
if (errors.length) {
  console.error('\nPARITY ERRORS');
  errors.forEach(item => console.error(`- ${item}`));
}
console.log(`\nParity result: ${report.result} | errors=${errors.length} | warnings=${warnings.length}`);
process.exit(errors.length ? 1 : 0);
