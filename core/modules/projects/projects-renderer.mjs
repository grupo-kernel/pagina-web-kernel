const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));

const statusLabel = status => ({
  approved: 'Aprobado',
  active: 'En ejecución',
  completed: 'Finalizado',
  'under-review': 'En evaluación'
}[status] || status || 'Estado no indicado');

const money = budget => {
  if (!budget?.amount) return '';
  return new Intl.NumberFormat('es-DO', { style: 'currency', currency: budget.currency || 'DOP', maximumFractionDigits: 2 }).format(budget.amount);
};

export function normalizeProjects(payload) {
  const approved = (payload.approved_projects || []).map(project => ({ ...project, kind: 'approved' }));
  const proposals = (payload.proposals || []).map(project => ({ ...project, kind: 'proposal' }));
  return [...approved, ...proposals];
}

export function renderProjectCard(project, researcherMap = new Map()) {
  const members = (project.member_ids || []).map(id => researcherMap.get(id)?.name || id);
  const collaborators = project.external_collaborators || [];
  const people = [...members, ...collaborators];
  const budget = money(project.budget || project.funding);
  const verification = project.verification === 'documented-internal-record'
    ? 'Registro interno documentado'
    : 'Fuente en consolidación';
  return `<article class="project-card" id="${escapeHtml(project.id)}">
    <div class="project-card__meta">
      <span class="project-chip project-chip--status">${escapeHtml(statusLabel(project.status))}</span>
      ${project.program ? `<span class="project-chip">${escapeHtml(project.program)}</span>` : ''}
      ${project.featured ? '<span class="project-chip project-chip--featured">Destacado</span>' : ''}
    </div>
    <h2>${escapeHtml(project.title)}</h2>
    ${project.description ? `<p>${escapeHtml(project.description)}</p>` : '<p class="project-muted">Descripción ampliada pendiente de consolidación documental.</p>'}
    <dl class="project-details">
      ${people.length ? `<div><dt>Participantes</dt><dd>${people.map(escapeHtml).join(', ')}</dd></div>` : ''}
      ${project.duration_months ? `<div><dt>Duración</dt><dd>${escapeHtml(project.duration_months)} meses</dd></div>` : ''}
      ${budget ? `<div><dt>Presupuesto</dt><dd>${escapeHtml(budget)}</dd></div>` : ''}
      <div><dt>Verificación</dt><dd>${escapeHtml(verification)}</dd></div>
    </dl>
    <div class="project-card__actions">
      ${members.map((name, index) => `<a href="../../modules/scientific-profiles/preview.html?investigador=${escapeHtml((project.member_ids || [])[index])}">Perfil de ${escapeHtml(name)}</a>`).join('')}
      <a href="#${escapeHtml(project.id)}" aria-label="Enlace directo al proyecto ${escapeHtml(project.title)}">Enlace directo</a>
    </div>
  </article>`;
}

export function renderProjectsApp({ payload, researchers = [], root }) {
  const researcherMap = new Map(researchers.map(item => [item.id, item]));
  const projects = normalizeProjects(payload);
  const state = { status: 'all', researcher: 'all', search: '' };
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const render = () => {
    const query = normalize(state.search);
    const filtered = projects.filter(project => {
      const statusMatch = state.status === 'all' || project.status === state.status;
      const researcherMatch = state.researcher === 'all' || (project.member_ids || []).includes(state.researcher);
      const searchable = normalize([project.title, project.program, ...(project.external_collaborators || [])].join(' '));
      return statusMatch && researcherMatch && (!query || searchable.includes(query));
    });
    root.querySelector('[data-project-count]').textContent = `${filtered.length} proyectos mostrados de ${projects.length}`;
    root.querySelector('[data-project-list]').innerHTML = filtered.length
      ? filtered.map(project => renderProjectCard(project, researcherMap)).join('')
      : '<div class="project-empty">No hay proyectos que coincidan con los filtros seleccionados.</div>';
  };
  root.querySelector('[data-project-search]').addEventListener('input', event => { state.search = event.target.value; render(); });
  root.querySelector('[data-project-status]').addEventListener('change', event => { state.status = event.target.value; render(); });
  const researcherSelect = root.querySelector('[data-project-researcher]');
  const activeIds = new Set(projects.flatMap(project => project.member_ids || []));
  researcherSelect.innerHTML += researchers.filter(item => activeIds.has(item.id)).map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)}</option>`).join('');
  researcherSelect.addEventListener('change', event => { state.researcher = event.target.value; render(); });
  root.querySelector('[data-project-clear]').addEventListener('click', () => {
    state.status = 'all'; state.researcher = 'all'; state.search = '';
    root.querySelector('[data-project-search]').value = '';
    root.querySelector('[data-project-status]').value = 'all';
    researcherSelect.value = 'all'; render();
  });
  render();
}
