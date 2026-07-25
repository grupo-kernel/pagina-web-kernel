const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
const norm = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const doiValue = value => String(value ?? '').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').trim();

export function createBibtex(record) {
  const doi = doiValue(record.identifiers?.doi);
  const key = `${(record.authors?.[0] || 'Kernel').split(/\s+/).pop()}${record.bibliographic?.year || 's.f.'}`.replace(/[^A-Za-z0-9]/g, '');
  const fields = [
    `  title = {${record.title || ''}}`,
    `  author = {${(record.authors || []).join(' and ')}}`,
    `  journal = {${record.bibliographic?.journal || ''}}`,
    `  year = {${record.bibliographic?.year || ''}}`,
    record.bibliographic?.volume && `  volume = {${record.bibliographic.volume}}`,
    record.bibliographic?.issue && `  number = {${record.bibliographic.issue}}`,
    (record.bibliographic?.pages || record.bibliographic?.article_number) && `  pages = {${record.bibliographic.pages || record.bibliographic.article_number}}`,
    doi && `  doi = {${doi}}`,
    record.identifiers?.url && `  url = {${record.identifiers.url}}`
  ].filter(Boolean);
  return `@article{${key},\n${fields.join(',\n')}\n}`;
}

export function publicationSearchText(record) {
  return norm([
    record.title,
    record.bibliographic?.journal,
    record.bibliographic?.year,
    record.type,
    record.identifiers?.doi,
    ...(record.authors || []),
    ...(record.researcher_ids || []),
    ...(record.project_ids || []),
    ...(record.research_lines || [])
  ].join(' '));
}

export function filterPublications(records, filters = {}) {
  const query = norm(filters.query || '');
  return (records || []).filter(record => {
    const year = String(record.bibliographic?.year || '');
    const quartile = record.metrics?.quartile?.value || 'pending';
    return (!query || publicationSearchText(record).includes(query)) &&
      (!filters.researcher || filters.researcher === 'all' || record.researcher_ids?.includes(filters.researcher)) &&
      (!filters.year || filters.year === 'all' || year === String(filters.year)) &&
      (!filters.type || filters.type === 'all' || record.type === filters.type) &&
      (!filters.quartile || filters.quartile === 'all' || quartile === filters.quartile);
  });
}

export function sortPublications(records, order = 'date-desc') {
  return [...records].sort((a, b) => {
    const da = a.bibliographic?.publication_date || `${a.bibliographic?.year || 0}-00-00`;
    const db = b.bibliographic?.publication_date || `${b.bibliographic?.year || 0}-00-00`;
    if (order === 'date-asc') return da.localeCompare(db);
    if (order === 'title-asc') return String(a.title).localeCompare(String(b.title), 'es', { sensitivity: 'base' });
    if (order === 'journal-asc') return String(a.bibliographic?.journal).localeCompare(String(b.bibliographic?.journal), 'es', { sensitivity: 'base' });
    return db.localeCompare(da);
  });
}

export function renderPublicationCard(record, researcherMap = new Map()) {
  const bib = record.bibliographic || {};
  const doi = doiValue(record.identifiers?.doi);
  const quartile = record.metrics?.quartile;
  const members = (record.researcher_ids || []).map(id => researcherMap.get(id)).filter(Boolean);
  const pages = bib.pages || bib.article_number;
  const citation = [bib.journal, bib.volume && `vol. ${bib.volume}`, bib.issue && `núm. ${bib.issue}`, pages && `pp. ${pages}`, bib.year].filter(Boolean).join(', ');
  const qMarkup = quartile
    ? `<span class="pub-chip pub-chip--${esc(String(quartile.value).toLowerCase())}">${esc(quartile.value)} · ${esc(quartile.system || '')}</span>`
    : '<span class="pub-chip pub-chip--pending">Cuartil pendiente</span>';
  const memberLinks = members.length
    ? `<p class="publication-members"><strong>Investigadores del grupo:</strong> ${members.map(item => `<a href="equipo.html#${esc(item.id)}">${esc(item.name)}</a>`).join(', ')}</p>`
    : '';
  const projectLinks = (record.project_ids || []).length
    ? `<p class="publication-projects"><strong>Proyectos vinculados:</strong> ${record.project_ids.map(id => `<a href="proyectos.html?proyecto=${esc(id)}">${esc(id)}</a>`).join(', ')}</p>`
    : '';
  return `<article class="publication-card" data-publication-id="${esc(record.id)}">
    <div class="publication-meta"><span class="pub-chip pub-chip--year">${esc(bib.year || 's. f.')}</span><span class="pub-chip pub-chip--type">${esc(record.type || 'publicación')}</span>${qMarkup}</div>
    <h2>${esc(record.title)}</h2>
    <p class="publication-authors">${esc((record.authors || []).join(', ') || 'Autoría no disponible')}</p>
    <p class="publication-citation">${esc(citation || 'Referencia bibliográfica en consolidación')}</p>
    ${memberLinks}${projectLinks}
    <div class="publication-actions">
      ${record.identifiers?.url ? `<a href="${esc(record.identifiers.url)}" target="_blank" rel="noopener">Abrir publicación</a>` : ''}
      ${doi ? `<a href="https://doi.org/${esc(doi)}" target="_blank" rel="noopener">DOI: ${esc(doi)}</a>` : '<span>DOI no disponible</span>'}
      <button type="button" class="copy-bibtex" data-bibtex="${esc(createBibtex(record))}">Copiar BibTeX</button>
    </div>
  </article>`;
}

export function renderPublicationCatalog(records, researcherMap, filters = {}, order = 'date-desc') {
  const result = sortPublications(filterPublications(records, filters), order);
  return {
    count: result.length,
    html: result.length ? result.map(record => renderPublicationCard(record, researcherMap)).join('') : '<div class="empty-state">No hay publicaciones que coincidan con los filtros seleccionados.</div>'
  };
}
