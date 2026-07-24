(() => {
  "use strict";

  const teamGrid = document.getElementById("teamGrid");
  const academicGrid = document.getElementById("academicGrid");
  const teamStatus = document.getElementById("teamStatus");

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const avatarMarkup = (researcher, sizeClass = "") => {
    const initials = escapeHtml(researcher.initials || researcher.name?.slice(0, 2) || "EK");
    const image = researcher.image
      ? `<img src="${escapeHtml(researcher.image)}" alt="Retrato de ${escapeHtml(researcher.name)}" loading="lazy">`
      : `<span aria-hidden="true">${initials}</span>`;
    return `<div class="member-avatar ${sizeClass}" data-initials="${initials}">${image}</div>`;
  };

  const profileLinksMarkup = (profiles = []) =>
    profiles
      .map(
        (profile) => `
          <a class="profile-link" href="${escapeHtml(profile.url)}" target="${
            profile.url?.startsWith("mailto:") ? "_self" : "_blank"
          }" rel="${profile.url?.startsWith("mailto:") ? "" : "noopener noreferrer"}">
            <i class="bi ${escapeHtml(profile.icon || "bi-link-45deg")}" aria-hidden="true"></i>
            ${escapeHtml(profile.label)}
          </a>`
      )
      .join("");

  const teamCardMarkup = (researcher) => `
    <article class="team-card" id="miembro-${escapeHtml(researcher.id)}">
      <div class="team-card-top">
        ${avatarMarkup(researcher)}
        <span class="member-type">${escapeHtml(researcher.memberType)}</span>
        <h2 class="member-name">${escapeHtml(researcher.displayName)}</h2>
        <p class="member-title">${escapeHtml(researcher.title)}</p>
        <p class="member-role">${escapeHtml(researcher.role)}</p>
      </div>
      <div class="team-card-body">
        <p class="member-summary">${escapeHtml(researcher.summary)}</p>
        <div class="tag-list" aria-label="Áreas de investigación">
          ${(researcher.areas || []).map((area) => `<span class="tag">${escapeHtml(area)}</span>`).join("")}
        </div>
        <p class="small text-muted mb-3">
          <i class="bi bi-building" aria-hidden="true"></i>
          ${escapeHtml((researcher.affiliations || []).join(" · "))}
        </p>
        <div class="profile-links">
          ${profileLinksMarkup(researcher.profiles)}
        </div>
      </div>
    </article>`;

  const listMarkup = (items = []) =>
    items.length
      ? `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      : `<p class="text-muted">Información académica en proceso de actualización.</p>`;

  const academicCardMarkup = (researcher) => `
    <article class="academic-card" id="formacion-${escapeHtml(researcher.id)}">
      <h3>${escapeHtml(researcher.displayName)}</h3>
      <p class="member-role">${escapeHtml(researcher.title)} · ${escapeHtml(researcher.role)}</p>
      <h4>Formación y adscripción</h4>
      ${listMarkup(researcher.formation)}
      <h4>Experiencia relevante</h4>
      ${listMarkup(researcher.experience)}
    </article>`;

  const attachAvatarFallbacks = () => {
    document.querySelectorAll(".member-avatar img").forEach((image) => {
      image.addEventListener("error", () => {
        const container = image.closest(".member-avatar");
        if (!container) return;
        container.innerHTML = `<span aria-hidden="true">${escapeHtml(container.dataset.initials || "EK")}</span>`;
      });
    });
  };

  async function loadTeam() {
    if (!teamGrid || !academicGrid) return;

    try {
      const response = await fetch("data/researchers.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

      const data = await response.json();
      const researchers = Array.isArray(data.researchers) ? data.researchers : [];

      teamGrid.innerHTML = researchers.map(teamCardMarkup).join("");
      academicGrid.innerHTML = researchers.map(academicCardMarkup).join("");

      document.querySelectorAll('[data-stat="members"]').forEach((node) => {
        node.textContent = String(researchers.length);
      });

      attachAvatarFallbacks();

      if (teamStatus) {
        teamStatus.textContent = `${researchers.length} investigadores activos en el catálogo institucional del grupo.`;
      }

      if (window.location.hash === "#formacion") {
        document.getElementById("formacion")?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error(error);
      const message = `
        <div class="error-state" role="alert">
          No fue posible cargar el equipo. Revise que <code>data/researchers.json</code> esté disponible.
        </div>`;
      teamGrid.innerHTML = message;
      academicGrid.innerHTML = message;
    }
  }

  document.addEventListener("DOMContentLoaded", loadTeam);
})();
