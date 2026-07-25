const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'})[ch]);

export function orderedScientificProfiles(data) {
  return [...(data?.researchers || [])]
    .filter(member => member.status === 'active' && member.visibility === 'public')
    .sort((a, b) => Number(a.order) - Number(b.order));
}

function imagePath(member, assetBase = '') {
  const value = member.image?.current || member.image?.canonical || '';
  if (!assetBase || /^(?:https?:|data:|\/)/.test(value)) return value;
  return `${assetBase}${value}`;
}

function profileLinks(member) {
  const p = member.profiles || {};
  const links = [];
  if (p.orcid) links.push(['ORCID', `https://orcid.org/${p.orcid}`]);
  if (p.scholar) links.push(['Google Scholar', p.scholar]);
  if (p.researchgate) links.push(['ResearchGate', p.researchgate]);
  if (p.institutional) links.push(['Perfil institucional', p.institutional]);
  if (p.repository) links.push(['Repositorio', p.repository]);
  if (p.panorama) links.push(['Panorama científico', p.panorama]);
  if (p.linkedin) links.push(['LinkedIn', p.linkedin]);
  if (member.contact?.email) links.push(['Correo', `mailto:${member.contact.email}`]);
  return links.map(([label, url]) => `<a href="${esc(url)}"${url.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener noreferrer"'}>${esc(label)}</a>`).join('');
}

function metrics(member) {
  const rows = member.metrics?.publications || [];
  if (!rows.length) return '<p class="kernel-science-empty">Indicadores bibliométricos pendientes de consolidación.</p>';
  return `<div class="kernel-science-metrics">${rows.map(item => `
    <article>
      <strong>${esc(item.value)}</strong>
      <span>${esc(item.type === 'scopus_documents' ? 'Documentos Scopus' : 'Publicaciones')}</span>
      <small>${esc(item.source || '')}${item.as_of ? ` · ${esc(item.as_of)}` : ''}</small>
    </article>`).join('')}</div>`;
}

export function renderScientificNavigation(members, selectedId) {
  return members.map(member => `
    <button class="kernel-science-person${member.id === selectedId ? ' is-active' : ''}" type="button" data-science-select="${esc(member.id)}" aria-pressed="${member.id === selectedId}">
      <img src="${esc(imagePath(member))}" alt="" loading="lazy">
      <span><strong>${esc(member.name)}</strong><small>${esc(member.role || '')}</small></span>
    </button>`).join('');
}

export function renderScientificProfile(member, options = {}) {
  const international = member.member_scope === 'international';
  const areas = (member.areas || []).map(area => `<span>${esc(area)}</span>`).join('');
  const affiliations = (member.affiliations || []).map(item => `<span>${esc(item)}</span>`).join('');
  return `
    <article class="kernel-science-profile" data-science-profile="${esc(member.id)}">
      <header class="kernel-science-profile__hero">
        <img src="${esc(imagePath(member, options.assetBase || ''))}" alt="Retrato de ${esc(member.name)}">
        <div>
          <span class="kernel-science-scope">${international ? 'Colaborador internacional' : 'Investigador principal'}</span>
          <h2>${esc(member.name)}${member.display_degree ? `, ${esc(member.display_degree)}` : ''}</h2>
          <p>${esc(member.role || '')}</p>
          <div class="kernel-science-affiliations">${affiliations}</div>
        </div>
      </header>
      <section class="kernel-science-summary">
        <h3>Perfil científico</h3>
        <p>${esc(member.bio || '')}</p>
      </section>
      <section class="kernel-science-block">
        <h3>Líneas y áreas de investigación</h3>
        <div class="kernel-science-tags">${areas || '<span>Información pendiente</span>'}</div>
      </section>
      <section class="kernel-science-block">
        <h3>Indicadores disponibles</h3>
        ${metrics(member)}
      </section>
      <section class="kernel-science-block">
        <h3>Perfiles, repositorios y contacto</h3>
        <nav class="kernel-science-links" aria-label="Perfiles científicos de ${esc(member.name)}">${profileLinks(member) || '<span class="kernel-science-empty">Perfiles externos pendientes de consolidación.</span>'}</nav>
      </section>
    </article>`;
}

export function renderScientificProfilesModule(data, options = {}) {
  const members = orderedScientificProfiles(data);
  const selectedId = options.selectedId && members.some(item => item.id === options.selectedId) ? options.selectedId : members[0]?.id;
  const selected = members.find(item => item.id === selectedId);
  return {
    members,
    selectedId,
    navigation: renderScientificNavigation(members, selectedId),
    profile: selected ? renderScientificProfile(selected, options) : ''
  };
}
