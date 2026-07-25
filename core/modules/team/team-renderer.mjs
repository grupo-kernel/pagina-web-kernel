const DEFAULT_LOCALE = 'es';

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}

export function orderedResearchers(data) {
  return [...(data?.researchers || [])]
    .filter(member => member.status === 'active' && member.visibility === 'public')
    .sort((a, b) => Number(a.order) - Number(b.order));
}

function memberLabel(member, locale = DEFAULT_LOCALE) {
  if (member.member_scope === 'international') {
    return locale === 'en' ? 'International member · El Kernel' : 'Miembro internacional · El Kernel';
  }
  return locale === 'en' ? 'Core member · El Kernel' : 'Miembro principal · El Kernel';
}

function resolveAssetPath(value, assetBase = '') {
  const path = String(value || '');
  if (!path || /^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('/') || path.startsWith('data:')) return path;
  return `${assetBase}${path}`.replace(/\/{2,}/g, '/');
}

function externalLink(url, label, options = {}) {
  if (!url) return '';
  const target = options.newTab === false ? '' : ' target="_blank" rel="noopener noreferrer"';
  return `<a href="${escapeHtml(url)}"${target}>${escapeHtml(label)}</a>`;
}

function profileLinks(member, locale = DEFAULT_LOCALE, options = {}) {
  const links = [];
  if (member.contact?.email) links.push(externalLink(`mailto:${member.contact.email}`, locale === 'en' ? 'Email' : 'Correo', { newTab: false }));
  if (member.profiles?.orcid) links.push(externalLink(`https://orcid.org/${member.profiles.orcid}`, 'ORCID'));
  if (member.profiles?.institutional) links.push(externalLink(member.profiles.institutional, locale === 'en' ? 'Institutional profile' : 'Perfil institucional'));
  if (member.profiles?.repository) links.push(externalLink(member.profiles.repository, locale === 'en' ? 'Repository' : 'Repositorio'));
  if (member.profiles?.panorama) links.push(externalLink(member.profiles.panorama, 'Panorama'));
  if (member.profiles?.scholar) links.push(externalLink(member.profiles.scholar, 'Scholar'));
  if (member.profiles?.researchgate) links.push(externalLink(member.profiles.researchgate, 'ResearchGate'));
  if (member.profiles?.linkedin) links.push(externalLink(member.profiles.linkedin, 'LinkedIn'));
  if (options.publicationsBase) {
    links.push(externalLink(`${options.publicationsBase}${encodeURIComponent(member.id)}`, locale === 'en' ? 'Publications' : 'Publicaciones', { newTab: false }));
  }
  return links.join('');
}

function metricLabel(type, locale = DEFAULT_LOCALE) {
  const labels = {
    journal_articles: { es: 'Artículos de revista', en: 'Journal articles' },
    scopus_documents: { es: 'Documentos Scopus', en: 'Scopus documents' }
  };
  return labels[type]?.[locale] || (locale === 'en' ? 'Recorded output' : 'Producción registrada');
}

function metricsMarkup(member, locale = DEFAULT_LOCALE) {
  const metrics = Array.isArray(member.metrics?.publications) ? member.metrics.publications : [];
  if (!metrics.length) return '';
  return `<div class="kernel-core-team-card__metrics" aria-label="${locale === 'en' ? 'Publication metrics' : 'Métricas de publicaciones'}">${metrics.map(metric => {
    const source = metric.url
      ? `<a href="${escapeHtml(metric.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(metric.source || (locale === 'en' ? 'Source' : 'Fuente'))}</a>`
      : escapeHtml(metric.source || (locale === 'en' ? 'Source' : 'Fuente'));
    return `<div><strong>${Number(metric.value).toLocaleString(locale === 'en' ? 'en-US' : 'es-DO')}</strong><span>${escapeHtml(metricLabel(metric.type, locale))}</span><small>${source}${metric.as_of ? ` · ${escapeHtml(metric.as_of)}` : ''}</small></div>`;
  }).join('')}</div>`;
}

function detailsMarkup(member, locale = DEFAULT_LOCALE) {
  const formation = Array.isArray(member.formation) ? member.formation : [];
  const experience = Array.isArray(member.experience) ? member.experience : [];
  if (!formation.length && !experience.length) return '';
  return `<details class="kernel-core-team-card__details">
    <summary>${locale === 'en' ? 'Education and experience' : 'Formación y experiencia'}</summary>
    ${formation.length ? `<h4>${locale === 'en' ? 'Academic background' : 'Formación académica'}</h4><ul>${formation.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
    ${experience.length ? `<h4>${locale === 'en' ? 'Relevant experience' : 'Experiencia relevante'}</h4><ul>${experience.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
  </details>`;
}

export function renderResearcherCard(member, locale = DEFAULT_LOCALE, options = {}) {
  const image = resolveAssetPath(member.image?.current || member.image?.canonical || '', options.assetBase || '');
  const areas = (member.areas || []).map(area => `<span>${escapeHtml(area)}</span>`).join('');
  const affiliations = (member.affiliations || []).map(escapeHtml).join(' · ');
  const international = member.member_scope === 'international';
  const details = options.showDetails === false ? '' : detailsMarkup(member, locale);
  return `
    <article class="kernel-core-team-card${international ? ' kernel-core-team-card--international' : ''}" id="${escapeHtml(member.id)}" data-kernel-researcher-card="${escapeHtml(member.id)}" data-country="${escapeHtml(member.country)}" data-member-scope="${escapeHtml(member.member_scope)}">
      <div class="kernel-core-team-card__top">
        <img class="kernel-core-team-card__photo" src="${escapeHtml(image)}" alt="${escapeHtml(member.name)}" loading="lazy">
        <div>
          <span class="kernel-core-team-card__badge">${escapeHtml(memberLabel(member, locale))}</span>
          <h3>${escapeHtml(member.name)}${member.display_degree ? `, ${escapeHtml(member.display_degree)}` : ''}</h3>
          <p class="kernel-core-team-card__role">${escapeHtml(member.role)}</p>
        </div>
      </div>
      <p class="kernel-core-team-card__bio">${escapeHtml(member.bio)}</p>
      <div class="kernel-core-team-card__meta">
        <strong>${locale === 'en' ? 'Affiliations' : 'Afiliaciones'}:</strong> ${affiliations}
      </div>
      ${metricsMarkup(member, locale)}
      <div class="kernel-core-team-card__areas" aria-label="${locale === 'en' ? 'Research areas' : 'Áreas de trabajo'}">${areas}</div>
      ${details}
      <nav class="kernel-core-team-card__links" aria-label="${locale === 'en' ? 'Researcher links' : 'Enlaces del investigador'}">${profileLinks(member, locale, options)}</nav>
    </article>`;
}

export function renderTeamModule(data, options = {}) {
  const locale = options.locale || DEFAULT_LOCALE;
  const assetBase = options.assetBase || '';
  const members = orderedResearchers(data);
  const headline = locale === 'en' ? 'Research team' : 'Equipo de investigación';
  const intro = locale === 'en'
    ? 'Nine national and international researchers connected through numerical analysis, nonlinear systems, optimization, algebra, scientific computing and mathematics education.'
    : 'Nueve investigadores nacionales e internacionales articulados alrededor del análisis numérico, los sistemas no lineales, la optimización, el álgebra, la computación científica y la educación matemática.';
  return `
    <section class="kernel-core-team" data-kernel-core-module="team" data-kernel-core-status="preview">
      <header class="kernel-core-team__header">
        <p>${locale === 'en' ? 'Kernel Core preview · controlled activation' : 'Vista previa Kernel Core · activación controlada'}</p>
        <h2>${headline}</h2>
        <span>${members.length} ${locale === 'en' ? 'members' : 'integrantes'}</span>
        <p>${intro}</p>
      </header>
      <div class="kernel-core-team__grid">${members.map(member => renderResearcherCard(member, locale, { ...options, assetBase })).join('')}</div>
    </section>`;
}

export function renderTeamPreviewDocument(data, options = {}) {
  const locale = options.locale || DEFAULT_LOCALE;
  const assetBase = options.assetBase || '';
  return `<!doctype html>
<html lang="${escapeHtml(locale)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Kernel Core · Team Preview</title>
<link rel="stylesheet" href="./team-preview.css">
</head>
<body>
${renderTeamModule(data, { ...options, locale, assetBase })}
</body>
</html>`;
}
