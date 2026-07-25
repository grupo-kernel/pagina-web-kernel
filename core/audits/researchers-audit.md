# Auditoría de `data/researchers.json`

Fecha: 2026-07-25
Estado: auditoría no destructiva
Rama: `hito-1-kernel-core`

## Resultado general

- Investigadores declarados: 9
- Registros encontrados: 9
- Identificadores duplicados: 0
- ORCID duplicados: 0
- Países representados: República Dominicana y España
- Archivo público modificado: no

## Orden institucional normalizado

1. Miguel A. Leonardo Sepúlveda
2. Natanael Ureña Castillo
3. Randy Leonardo
4. Antmel Rodríguez Cabral
5. Marino Brito Guillén
6. Marc-Kelly Jean Philippe Jean
7. José Alberto Reyes Reyes
8. Alicia Cordero Barbero
9. Juan Ramón Torregrosa Sánchez

## Inconsistencias detectadas

1. Las rutas de imágenes mezclan nombres simples (`miguel.jpg`) y rutas completas (`assets/img/alicia-cordero.svg`).
2. Los perfiles externos se guardan en campos separados y no en una colección uniforme.
3. Formación y experiencia se almacenan como cadenas sin identificador, tipo, institución ni fechas separadas.
4. Las métricas bibliográficas aparecen dentro del registro personal, aunque deben poder actualizarse de manera independiente.
5. El correo de José Alberto Reyes Reyes contiene una mayúscula inicial; se normaliza únicamente en la versión candidata.
6. No existe un campo de orden para garantizar una distribución estable en Equipo y Formación Académica.
7. No existe una propiedad explícita de estado del registro (`active`, `visible`, `featured`).
8. Algunos miembros carecen de ORCID, Scholar o ResearchGate; estos campos deben ser opcionales y nunca inventarse.
9. Los títulos académicos se presentan correctamente como `display_degree`, pero conviene separar grado mostrado y estado doctoral en curso.
10. La fecha `updated_at` representa todo el archivo, no la actualización individual de cada perfil.

## Decisiones de normalización

- Mantener los nueve identificadores actuales para no romper enlaces.
- Añadir `order`, `status`, `visibility` y `member_scope`.
- Agrupar enlaces externos dentro de `profiles`.
- Mantener `formation` y `experience` como listas compatibles durante esta primera migración.
- Mover las métricas a `metrics`, conservando sus fuentes y fechas.
- Añadir una ruta canónica de imagen sin cambiar todavía los archivos físicos.
- No reemplazar ni conectar el archivo actual hasta completar pruebas de paridad.

## Criterio de activación

La versión normalizada solo podrá sustituir al archivo actual cuando:

- contenga exactamente nueve miembros;
- preserve todos los identificadores actuales;
- no elimine ningún campo visible;
- pase validación estructural;
- Equipo, Formación Académica y Portada generen el mismo contenido;
- exista una ruta de reversión probada.
