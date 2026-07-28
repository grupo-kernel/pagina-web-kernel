# Actualización global del logotipo

La plataforma pública utiliza un recurso empaquetado (`assets/ElKernel-BvHOWfRq.webp`) dentro del bundle principal, mientras que varias páginas estáticas utilizan `ElKernel.png`. Por ello, sustituir únicamente el archivo de la raíz no actualiza el encabezado y el pie de página de la SPA.

Esta corrección incorpora un logotipo SVG único y una capa aislada que reemplaza exclusivamente las imágenes institucionales de El Kernel, además del favicon. No modifica navegación, Laboratorio, Acceso rápido, autenticación ni módulos científicos.
