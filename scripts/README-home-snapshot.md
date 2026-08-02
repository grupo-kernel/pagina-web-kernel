# Portada sincrónica

La portada pública no debe depender de solicitudes JSON durante la primera navegación.

En cada despliegue:

1. Se copian los catálogos institucionales autoritativos desde `gh-pages`.
2. `generate-home-snapshot.mjs` genera una instantánea mínima verificada.
3. `finalize-analytics-entry.mjs` inserta la instantánea directamente en `index.html`.
4. El puente V4 construye la portada completa desde `window.KernelHomeSnapshot`.
5. El smoke test WebKit bloquea todas las solicitudes JSON y exige la portada completa, sin pantalla provisional y sin recarga.
