# Corrección de raíz de la primera entrada a la portada

La portada integrada dejó de invalidar solicitudes de renderizado activas mientras espera los archivos institucionales.

La corrección se aplica directamente a `kernel-home-2b-bridge.js` durante el despliegue:

- elimina el incremento competitivo de `renderTicket` en cada intento;
- cancela resultados únicamente al abandonar la ruta de portada;
- restringe el `MutationObserver` al contenedor `#main`;
- permite caché normal para los archivos JSON estáticos;
- conserva el respaldo con tiempo límite para datos institucionales;
- valida la primera entrada con WebKit y datos deliberadamente retrasados, sin recargar la página.

Versión técnica: `KERNEL_HOME_ROOT_FIX_VERSION = 3.0.0`.
