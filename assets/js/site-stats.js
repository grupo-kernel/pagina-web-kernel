(() => {
  "use strict";

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = String(value);
    });
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "sin fecha";
    const parsed = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return isoDate;
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(parsed);
  };

  async function loadStats() {
    try {
      const [researcherResponse, publicationResponse] = await Promise.all([
        fetch("data/researchers.json", { cache: "no-store" }),
        fetch("data/publications.json", { cache: "no-store" })
      ]);

      if (!researcherResponse.ok || !publicationResponse.ok) {
        throw new Error("No fue posible cargar los datos del sitio.");
      }

      const researcherData = await researcherResponse.json();
      const publicationData = await publicationResponse.json();
      const researchers = Array.isArray(researcherData.researchers) ? researcherData.researchers : [];
      const publications = Array.isArray(publicationData.publications) ? publicationData.publications : [];

      const activeMembers = researchers.length;
      const verifiedQuartiles = publications.filter(
        (item) => item?.quartile?.status === "verified"
      ).length;
      const latestYear = publications.reduce(
        (maxYear, item) => Math.max(maxYear, Number(item.year) || 0),
        0
      );

      setText('[data-stat="members"]', activeMembers);
      setText('[data-stat="publications"]', publications.length);
      setText('[data-stat="verified-quartiles"]', verifiedQuartiles);
      setText('[data-stat="latest-year"]', latestYear || "—");
      setText('[data-stat="updated-at"]', formatDate(publicationData.updatedAt));
    } catch (error) {
      console.error(error);
      document.querySelectorAll("[data-stat-error]").forEach((node) => {
        node.hidden = false;
      });
    }
  }

  document.addEventListener("DOMContentLoaded", loadStats);
})();
