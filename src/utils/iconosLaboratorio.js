const ICONOS_SVG = Object.freeze({
    "bx-bar-chart-alt-2": `
        <path d="M4 20V11h4v9H4Z"></path>
        <path d="M10 20V4h4v16h-4Z"></path>
        <path d="M16 20v-7h4v7h-4Z"></path>
    `,
    "bx-group": `
        <circle cx="9" cy="8" r="3"></circle>
        <path d="M3.5 20c.4-4 2.5-6 5.5-6s5.1 2 5.5 6"></path>
        <path d="M15 6.5a2.7 2.7 0 1 1 0 5.4"></path>
        <path d="M16 14c2.6.3 4.1 2.2 4.5 5"></path>
    `,
    "bx-line-chart": `
        <path d="M4 4v16h16"></path>
        <path d="m7 16 4-5 3 3 4-7"></path>
        <circle cx="7" cy="16" r="1"></circle>
        <circle cx="11" cy="11" r="1"></circle>
        <circle cx="14" cy="14" r="1"></circle>
        <circle cx="18" cy="7" r="1"></circle>
    `,
    "bx-list-check": `
        <path d="m4 7 1.5 1.5L8.5 5"></path>
        <path d="M11 7h9"></path>
        <path d="m4 13 1.5 1.5 3-3.5"></path>
        <path d="M11 13h9"></path>
        <path d="m4 19 1.5 1.5 3-3.5"></path>
        <path d="M11 19h9"></path>
    `,
    "bx-edit-alt": `
        <path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4Z"></path>
        <path d="m13.5 6.5 4 4"></path>
        <path d="M3 21h18"></path>
    `,
    "bx-ruler": `
        <path d="M4 16 16 4l4 4L8 20H4v-4Z"></path>
        <path d="m13 7 2 2"></path>
        <path d="m10 10 2 2"></path>
        <path d="m7 13 2 2"></path>
    `,
    "bx-trending-up": `
        <path d="m4 17 6-6 4 4 6-8"></path>
        <path d="M15 7h5v5"></path>
    `,
    "bx-help-circle": `
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9.8 9a2.5 2.5 0 1 1 3.8 2.1c-1 .6-1.6 1.2-1.6 2.4"></path>
        <path d="M12 17h.01"></path>
    `,
    "bx-library": `
        <path d="M4 5h4v15H4V5Z"></path>
        <path d="M10 4h4v16h-4V4Z"></path>
        <path d="m16 6 3.5-1 3 13.5-3.5 1L16 6Z"></path>
        <path d="M5 8h2"></path>
        <path d="M11 8h2"></path>
    `,
    "bx-right-arrow-alt": `
        <path d="M5 12h14"></path>
        <path d="m14 7 5 5-5 5"></path>
    `,
    "bx-brain": `
        <path d="M9.5 4.2A3.2 3.2 0 0 0 5 7.1 3.5 3.5 0 0 0 4.5 14 3.6 3.6 0 0 0 9 18.8"></path>
        <path d="M14.5 4.2A3.2 3.2 0 0 1 19 7.1a3.5 3.5 0 0 1 .5 6.9 3.6 3.6 0 0 1-4.5 4.8"></path>
        <path d="M9.5 4v16"></path>
        <path d="M14.5 4v16"></path>
        <path d="M7 9.5h2.5"></path>
        <path d="M14.5 13H17"></path>
    `,
    "bx-atom": `
        <ellipse cx="12" cy="12" rx="9" ry="3.5"></ellipse>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"></ellipse>
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"></circle>
    `,
    "bx-book-open": `
        <path d="M3.5 5.5c3.5-.8 6-.2 8.5 1.8v12c-2.5-2-5-2.6-8.5-1.8v-12Z"></path>
        <path d="M20.5 5.5c-3.5-.8-6-.2-8.5 1.8v12c2.5-2 5-2.6 8.5-1.8v-12Z"></path>
    `,
    "bx-check-shield": `
        <path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z"></path>
        <path d="m8.5 12 2.2 2.2 4.8-5"></path>
    `,
    "bx-calculator": `
        <rect x="5" y="3" width="14" height="18" rx="2"></rect>
        <path d="M8 7h8v3H8V7Z"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
    `,
    "bx-grid-alt": `
        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
    `
});

export function existeIconoLaboratorio(nombre) {
    return Object.prototype.hasOwnProperty.call(ICONOS_SVG, nombre);
}

export function iconoLaboratorio(nombre, clases = "text-2xl") {
    const contenido = ICONOS_SVG[nombre] || ICONOS_SVG["bx-grid-alt"];

    return `
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="${clases} h-[1em] w-[1em] shrink-0"
        >
            ${contenido}
        </svg>
    `;
}
