const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'})[ch]);

export function orderedAcademicProfiles(data) {
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
  const links = [];
  const profiles = member.profiles || {};
  if (profiles.orcid) links.push(`<a href="https://orcid.org/${esc(profiles.orcid)}" target="_blank" rel="noopener noreferrer">ORCID</a>`);
  if (profiles.institutional) links.push(`<a href="${esc(profiles.institutional)}" target="_blank" rel="noopener noreferrer">Perfil institucional</a>`);
  if (profiles.scholar) links.push(`<a href="${esc(profiles.scholar)}" target="_blank" rel="noopener noreferrer">Scholar</a>`);
  if (profiles.researchgate) links.push(`<a href="${esc(profiles.researchgate)}" target="_blank" rel="noopener noreferrer">ResearchGate</a>`);
  if (member.contact?.email) links.push(`<a href="mailto:${esc(member.contact.email)}">Correo</a>`);
  return links.join('');
}

export function renderAcademicNavigation(members, selectedId) {
  return members.map(member => `
    <button class="kernel-academic-person${member.id === selectedId ? ' is-active' : ''}" type="button"
      data-academic-select="${esc(member.id)}" aria-pressed="${member.id === selectedId}">
      <img src="${esc(imagePath(member))}" alt="" loading="lazy">
      <span><strong>${esc(member.name)}</strong><small>${esc(member.display_degree || '')} · ${esc(member.country || '')}</small></span>
    </button>`).join('');
}

export function renderAcademicProfile(member, options = {}) {
  const assetBase = options.assetBase || '';
  const formation = (member.formation || []).map(item => `<li>${esc(item)}</li>`).join('');
  const experience = (member.experience || []).map(item => `<li>${esc(item)}</li>`).join('');
  const affiliations = (member.affiliations || []).map(item => `<span>${esc(item)}</span>`).join('');
  const areas = (member.areas || []).map(item => `<span>${esc(item)}</span>`).join('');
  const international = member.member_scope === 'international';
  return `
    <article class="kernel-academic-profile" data-academic-profile="${esc(member.id)}">
      <header class="kernel-academic-profile__header">
        <img src="${esc(imagePath(member, assetBase))}" alt="Perfil de ${esc(member.name)}">
        <div>
          <span class="kernel-academic-scope">${international ? 'Miembro internacional' : 'Miembro principal'}</span>
          <h2>${esc(member.name)}${member.display_degree ? `, ${esc(member.display_degree)}` : ''}</h2>
          <p>${esc(member.role || '')}</p>
          <div class="kernel-academic-affiliations">${affiliations}</div>
        </div>
      </header>
      <p class="kernel-academic-bio">${esc(member.bio || '')}</p>
      <div class="kernel-academic-columns">
        <section><h3>Formación académica</h3><ul>${formation || '<li>Información pendiente de consolidación.</li>'}</ul></section>
        <section><h3>Experiencia relevante</h3><ul>${experience || '<li>Información pendiente de consolidación.</li>'}</ul></section>
      </div>
      <section class="kernel-academic-areas"><h3>Áreas de especialización</h3><div>${areas}</div></section>
      <nav class="kernel-academic-links" aria-label="Perfiles y contacto">${profileLinks(member)}</nav>
    </article>`;
}

export function renderAcademicModule(data, options = {}) {
  const members = orderedAcademicProfiles(data);
  const selectedId = options.selectedId && members.some(item => item.id === options.selectedId) ? options.selectedId : members[0]?.id;
  const selected = members.find(item => item.id === selectedId);
  return {
    members,
    selectedId,
    navigation: renderAcademicNavigation(members, selectedId),
    profile: selected ? renderAcademicProfile(selected, options) : ''
  };
}
