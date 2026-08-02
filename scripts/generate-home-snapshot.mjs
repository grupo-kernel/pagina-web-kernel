import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FEATURED_PROJECT_IDS = Object.freeze([
  "uasd-dinamica-sin-jacobiana",
  "procesos-iterativos",
  "fondocyt-transporte-nutrientes"
]);

function finiteNonNegative(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0
    ? number
    : fallback;
}

function essentialProject(project) {
  if (!project || typeof project !== "object") return null;

  return {
    id: String(project.id || ""),
    order: finiteNonNegative(project.order, 999),
    title: String(project.title || project.name || ""),
    ...(project.title_en
      ? { title_en: String(project.title_en) }
      : {}),
    status: String(project.status || "featured"),
    featured: project.featured === true
  };
}

export function buildHomeSnapshot({
  researchers,
  publications,
  projects,
  generatedAt = new Date().toISOString()
}) {
  const approved = Array.isArray(projects?.approved_projects)
    ? projects.approved_projects
    : [];
  const proposals = Array.isArray(projects?.proposals)
    ? projects.proposals
    : [];
  const allProjects = [...approved, ...proposals];

  const selected = FEATURED_PROJECT_IDS
    .map(id => allProjects.find(project => project?.id === id))
    .filter(Boolean);

  if (selected.length !== FEATURED_PROJECT_IDS.length) {
    const missing = FEATURED_PROJECT_IDS.filter(
      id => !selected.some(project => project?.id === id)
    );
    throw new Error(
      `No se encontraron todos los proyectos requeridos para la portada: ${missing.join(", ")}`
    );
  }

  const selectedApproved = selected
    .filter(project => approved.some(item => item?.id === project?.id))
    .map(essentialProject)
    .filter(Boolean);
  const selectedProposals = selected
    .filter(project => proposals.some(item => item?.id === project?.id))
    .map(essentialProject)
    .filter(Boolean);

  const snapshot = {
    schemaVersion: 1,
    generatedAt,
    researchers: {
      group: {
        member_count: finiteNonNegative(
          researchers?.group?.member_count,
          Array.isArray(researchers?.researchers)
            ? researchers.researchers.length
            : 0
        )
      },
      researchers: []
    },
    publications: {
      summary: {
        unique_records: finiteNonNegative(
          publications?.summary?.unique_records,
          Array.isArray(publications?.records)
            ? publications.records.length
            : 0
        )
      },
      records: []
    },
    projects: {
      summary: {
        featured_approved_projects: finiteNonNegative(
          projects?.summary?.featured_approved_projects,
          approved.filter(project => project?.featured === true).length
        ),
        additional_participations_not_itemized: finiteNonNegative(
          projects?.summary?.additional_participations_not_itemized,
          0
        )
      },
      approved_projects: selectedApproved,
      proposals: selectedProposals
    }
  };

  if (snapshot.researchers.group.member_count < 1) {
    throw new Error("La instantánea de portada no contiene investigadores.");
  }
  if (snapshot.publications.summary.unique_records < 1) {
    throw new Error("La instantánea de portada no contiene publicaciones.");
  }

  return snapshot;
}

export function snapshotToScript(snapshot) {
  const serialized = JSON.stringify(snapshot)
    .replaceAll("<", "\\u003c")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029");

  return `(() => {\n  "use strict";\n\n  const snapshot = ${serialized};\n  window.KernelHomeSnapshot = Object.freeze(snapshot);\n  window.KernelHomeSnapshotMeta = Object.freeze({\n    version: "1.0.0",\n    generatedAt: snapshot.generatedAt\n  });\n})();\n`;
}

export function generateHomeSnapshot({
  dataDirectory = "dist/core/data",
  outputFile = "dist/assets/kernel-home-snapshot.js"
} = {}) {
  const readJson = fileName => JSON.parse(
    fs.readFileSync(
      path.resolve(dataDirectory, fileName),
      "utf8"
    )
  );

  const snapshot = buildHomeSnapshot({
    researchers: readJson("researchers.v2.json"),
    publications: readJson("publications.v2.json"),
    projects: readJson("projects.v2.json")
  });

  const absoluteOutput = path.resolve(outputFile);
  fs.mkdirSync(path.dirname(absoluteOutput), { recursive: true });
  fs.writeFileSync(
    absoluteOutput,
    snapshotToScript(snapshot),
    "utf8"
  );

  return {
    output: absoluteOutput,
    snapshot
  };
}

const invokedPath = process.argv[1]
  ? path.resolve(process.argv[1])
  : "";
const modulePath = fileURLToPath(import.meta.url);

if (invokedPath === modulePath) {
  const { output, snapshot } = generateHomeSnapshot();
  console.log(
    `Generated synchronous home snapshot at ${output}: ` +
    `${snapshot.researchers.group.member_count} researchers, ` +
    `${snapshot.publications.summary.unique_records} publications, ` +
    `${snapshot.projects.summary.featured_approved_projects} featured projects.`
  );
}
