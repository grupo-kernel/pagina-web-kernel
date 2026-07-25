# Auditoría de integración global — Fase 1Q

## Alcance

La fase integra y revisa en conjunto los módulos de Equipo, Formación académica, Perfiles científicos, Publicaciones 2.0 y Proyectos antes de cualquier activación pública.

## Controles obligatorios

- Navegación coherente entre las páginas principales.
- Identidad visual compartida y ausencia de estilos aislados incompatibles.
- Enlaces internos hacia investigadores, publicaciones y proyectos.
- Estructura adaptable a escritorio, tableta y móvil.
- Títulos, viewport, regiones principales y navegación reconocible.
- Preparación de traducciones centralizadas español/inglés.
- Protección explícita de `main`, `gh-pages` y producción.
- Activación condicionada a una aprobación independiente del usuario.

## Estado de los módulos

- Equipo: integrado en Kernel Core.
- Formación académica: integrada en Kernel Core.
- Perfiles científicos: integrados en Kernel Core.
- Publicaciones 2.0: integradas en Kernel Core.
- Proyectos: integrados en Kernel Core.

## Pendiente binario conocido

La fotografía institucional seleccionada para Miguel debe sustituir manualmente el archivo `miguel.jpg` antes de la activación pública. Esta limitación no se oculta ni se considera resuelta por la fase de integración.

## Criterio de salida

La Fase 1Q solo puede declararse finalizada cuando los validadores globales y modulares estén en PASS, la revisión responsive esté documentada y el PR haya recibido aprobación explícita. La fusión en `hito-1-kernel-core` no activa producción.
