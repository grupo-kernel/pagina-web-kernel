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

function label(member, locale = DEFAULT_LOCALE) {
  if (member.member_scope === 'international') {
    return locale === 'en' ? 'International researcher · El Kernel member' : 'Investigador(a) internacional · Miembro de El Kernel';
  }
  return locale === 'en' ? 'Core researcher · El Kernel member' : 'Investigador(a) principal · Miembro de El Kernel';
}

function profileLinks(member, locale = DEFAULT_LOCALE) {
  const links = [];
  if (member.contact?.email) links.push(`<a href="mailto:${escapeHtml(member.contact.email)}">${locale === 'en' ? 'Email' : 'Correo'}</a>`);
  if (member.profiles?.orcid) links.push(`<a href="https://orcid.org/${escapeHtml(member.profiles.orcid)}" target="_blank" rel="noopener noreferrer">ORCID</a>`);
  if (member.profiles?.scholar) links.push(`<a href="${escapeHtml(member.profiles.scholar)}" target="_blank" rel="noopener noreferrer">Scholar</a>`);
  if (member.profiles?.researchgate) links.push(`<a href="${escapeHtml(member.profiles.researchgate)}" target="_blank" rel="noopener noreferrer">ResearchGate</a>`);
  if (member.profiles?.institutional) links.push(`<a href="${escapeHtml(member.profiles.institutional)}" target="_blank" rel="noopener noreferrer">UPV</a>`);
  return links.join('');
}

function resolveAssetPath(value, assetBase = '') {
  const path = String(value || '');
  if (!path || /^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('/') || path.startsWith('data:')) return path;
  return `${assetBase}${path}`.replace(/\/{2,}/g, '/');
}

export function renderResearcherCard(member, locale = DEFAULT_LOCALE, options = {}) {
  const image = resolveAssetPath(member.image?.current || member.image?.canonical || '', options.assetBase || '');
  const areas = (member.areas || []).map(area => `<span>${escapeHtml(area)}</span>`).join('');
  const affiliations = (member.affiliations || []).map(escapeHtml).join(' · ');
  return `
    <article class="kernel-core-team-card" data-kernel-researcher-card="${escapeHtml(member.id)}">
      <div class="kernel-core-team-card__top">
        <img class="kernel-core-team-card__photo" src="${escapeHtml(image)}" alt="${escapeHtml(member.name)}" loading="lazy">
        <div>
          <span class="kernel-core-team-card__badge">${escapeHtml(label(member, locale))}</span>
          <h3>${escapeHtml(member.name)}${member.display_degree ? `, ${escapeHtml(member.display_degree)}` : ''}</h3>
          <p class="kernel-core-team-card__role">${escapeHtml(member.role)}</p>
        </div>
      </div>
      <p class="kernel-core-team-card__bio">${escapeHtml(member.bio)}</p>
      <div class="kernel-core-team-card__meta">
        <strong>${locale === 'en' ? 'Affiliations' : 'Afiliaciones'}:</strong> ${affiliations}
      </div>
      <div class="kernel-core-team-card__areas" aria-label="${locale === 'en' ? 'Research areas' : 'Áreas de trabajo'}">${areas}</div>
      <nav class="kernel-core-team-card__links" aria-label="${locale === 'en' ? 'Researcher links' : 'Enlaces del investigador'}">${profileLinks(member, locale)}</nav>
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
      <div class="kernel-core-team__grid">${members.map(member => renderResearcherCard(member, locale, { assetBase })).join('')}</div>
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
${renderTeamModule(data, { locale, assetBase })}
</body>
</html>`;
}
