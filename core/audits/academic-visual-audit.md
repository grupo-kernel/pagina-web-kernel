# Auditoría de Formación académica y perfiles detallados

Fecha: 2026-07-25  
Rama: `fase-1m-academic-profiles-preview`  
PR: `#20`  
Estado: validación técnica superada; revisión visual del usuario pendiente

## Alcance

La página `formacion.html` fue sustituida en la rama de prueba por un módulo dinámico que consume `core/data/researchers.v2.json`.

## Contenido validado

- Se renderizan 9 investigadores activos y públicos.
- Se conserva el orden institucional definido por `order`.
- Miguel A. Leonardo Sepúlveda aparece como primer perfil.
- Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez están incluidos.
- Los perfiles internacionales conservan su clasificación.
- Cada investigador dispone de formación académica y experiencia relevante.
- Se muestran afiliaciones, biografía, áreas de especialización y enlaces disponibles.
- No se utilizan nueve bloques HTML duplicados; el contenido se genera mediante `academic-renderer.mjs`.

## Navegación

- La selección inicial corresponde al primer investigador del orden institucional.
- Los botones de navegación utilizan `aria-pressed`.
- Se admite selección por botón.
- Se admite selección mediante hash, por ejemplo `#alicia-cordero`.
- Se admite selección mediante `?investigador=juan-torregrosa`.
- El identificador seleccionado se conserva en la URL.

## Comportamiento responsive previsto por CSS

### Escritorio

- Navegación vertical de investigadores.
- Panel de perfil académico en la columna principal.
- Formación y experiencia distribuidas en dos columnas cuando existe espacio suficiente.

### Móvil

- Navegación horizontal desplazable.
- Perfil en una sola columna.
- Formación y experiencia apiladas.
- Fotografías y controles ajustados al ancho disponible.

## Accesibilidad y seguridad

- Imágenes principales con texto alternativo.
- Navegación identificada mediante atributos ARIA.
- Enlaces externos con `noopener noreferrer`.
- Fuente pública anterior no se modifica.
- `activation.enabled` permanece en `false`.
- `academic-background.active` permanece en `false`.
- El alcance sigue limitado a la rama de prueba.

## Quality Gate

Ejecución `30160452386`: **success**.

Pasaron:

- Quality Gate general;
- investigadores;
- publicaciones;
- proyectos;
- servicios;
- noticias;
- traducciones;
- relaciones;
- paridad;
- Equipo;
- Formación académica;
- reproducibilidad de publicaciones.

## Riesgos no bloqueantes

1. La imagen oficial nueva de Miguel Leonardo todavía debe sustituir `miguel.jpg` en el repositorio para reflejarse automáticamente en Equipo y Formación.
2. Los textos individuales permanecen en español hasta completar la internacionalización estructurada de perfiles.
3. La revisión visual final debe realizarse con el artefacto o en una rama servida antes de fusionar.

## Resultado

**APROBADO TÉCNICAMENTE PARA REVISIÓN DEL USUARIO — NO ACTIVO EN PRODUCCIÓN.**
