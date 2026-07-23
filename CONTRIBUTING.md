# Contribuir a El Kernel

## Derechos y procedencia

Al proponer una contribución, la persona colaboradora confirma que creó el
contenido, que tiene derecho a aportarlo o que lo incorpora cumpliendo una
licencia compatible. No deben copiarse código, textos, imágenes, iconos,
plantillas ni datos de terceros sin identificar su fuente y sus condiciones.

Cada commit aportado por una persona externa al equipo responsable debe incluir
una línea como esta:

```text
Signed-off-by: Nombre Apellido <correo@example.com>
```

La firma declara el Developer Certificate of Origin 1.1
(`https://developercertificate.org/`) y sirve como registro de procedencia.
Como este proyecto no se publica bajo una licencia abierta, esa firma no
sustituye el acuerdo escrito que defina quién recibe la contribución y qué
derechos de uso, modificación y distribución se conceden. Una contribución
externa no debe integrarse hasta archivar ese acuerdo.

## Dependencias y código de terceros

- Justifique toda dependencia nueva y use la alternativa mantenida de menor
  alcance que resuelva el problema.
- Registre el paquete, versión, titular, licencia y enlace oficial en
  `THIRD_PARTY_NOTICES.md`.
- Conserve los avisos exigidos por la licencia dentro del artefacto desplegado.
- No pegue fragmentos encontrados en internet sin una licencia verificable.

## Algoritmos y recursos visuales

- Documente las fórmulas o aproximaciones nuevas en
  `docs/ALGORITHM_REFERENCES.md`.
- Registre fotografías, retratos, logotipos, portadas e ilustraciones en
  `docs/ASSET_PROVENANCE.md` antes de publicarlos.
- No añada datos personales reales a ejemplos, pruebas, capturas ni archivos de
  demostración.

## Calidad

Antes de enviar cambios:

```bash
npm ci
npm run test:all
npm run build
npm run test:dist
```

Las correcciones estadísticas deben incorporar pruebas reproducibles para el
caso esperado, los límites del dominio y las entradas inválidas.
