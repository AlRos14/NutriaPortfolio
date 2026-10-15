# Ajuste editorial · Sis, fuentes y blog técnico

## Cambios solicitados

- **Control humano:** el panel permite configurar manualmente puestos, equipos y ámbitos. Sis es una vía de ayuda, no un requisito ni quien asume todo el trabajo. La ilustración general muestra dirección → áreas/marcas → puestos. En el configurador, Sis ayuda a proponer el esquema y el humano decide.
- **Artefacto → conversación → propuesta:** el último paso añade tres preguntas de orientación (responsabilidades, fuentes/herramientas, cómo empezar), respuestas editoriales y una salida para preparar una consulta con el esquema y el tema elegido. Se indica que en la experiencia final Sis generará el artefacto y lo afinará conversando. Sigue sin endpoint real, IA simulada, envío automático o aprovisionamiento.
- **Empresa, marcas y equipos:** nuevo esquema en `/agentes/`, con dos marcas y áreas transversales autorizadas. El relato explica responsabilidades, fuentes y ámbitos propios. No se afirma soporte de un árbol arbitrario de sociedades/filiales: la evidencia inspeccionada acredita empresa, marcas, equipos y agentes con alcance de marca o empresa.
- **Conocimiento público + reglas internas:** `/conocimiento/` explica el rastreo/scraping de las fuentes públicas configuradas y accesibles, y el añadido posterior de procedimientos internos. No se inventa un porcentaje de cobertura ni se promete leer cualquier recurso público sin restricciones.
- **Drive:** el beneficio es actualizar en el lugar donde ya trabaja el equipo e incorporar esa documentación al conocimiento de los agentes. Permanece como integración en desarrollo y se mantiene el panel como vía actual para aportar documentos.
- **Blog:** portada y categorías para ingeniería y ecosistema además de organización y uso. Dos borradores propuestos: separación entre documentos y autoridad, y método de comparación de harnesses. No se atribuyen resultados a competidores ni se inventan pruebas, incidentes o experiencias del autor. Los siete artículos siguen en revisión y noindex.
- **Subrayados:** a los enlaces de escenarios de portada les faltaba `class="work-row"`; se reutiliza el estilo existente en vez de añadir una excepción CSS. Descripción y fila sin subrayado permanente; el título mantiene una señal al pasar el cursor.

## Fuentes inspeccionadas, solo lectura

ChatBotNutralia `26c159e1`:

- `src/company_data/providers/public_web.py:248-380`: fuentes web y posts WordPress, selección de colecciones, URLs acotadas, comprobaciones de robots y adquisición de contenido público. **Implementación inspeccionada**, sin afirmar que se haya realizado aceptación real del rastreo en esta tarea.
- `docs/COMPANY_DATA.md`: operador configura fuentes/colecciones/permisos, sincronización y recuperación por ámbitos.
- `src/personas/organization_loader.py`, `docs/ORGANIZATION_SCHEMA.md`: equipos, personas, marcas, agentes y sus ámbitos.
- `docs/SHARED_CONTEXT_DOCS.md`, `src/personas/context_docs.py`: documentos como contexto, diferenciados de autoridad.

nutria_system `22fe195`:

- `docs/COMMERCIAL_ONBOARDING.md`: empresa con una o varias marcas; asignación de agentes centrales y agentes propios del cliente.
- `docs/SIS_AUTHORITY.md`: Sis central y configuración protegida, separada del contexto empresarial. No se presenta configurar la organización manualmente como permiso para cambiar la autoridad central de Sis.

El usuario aporta la dirección de producto y confirma que Sis real se conectará después del prototipo. No se modifican Core, plugins, licenciamiento ni `nutria_system`.

## Validación

- **PASS:** build estática; 88 vistas de 22 rutas a 1440, 390, 320 y 768 px, sin overflow, errores JavaScript, imágenes rotas o duplicación de IDs/H1/main. 82 enlaces/anclas correctos.
- **PASS:** 32 combinaciones (4 tamaños × 4 necesidades × 2 anchuras), 52 interacciones de selección, autonomía, orientación, resumen, teclado, cookies, sin JS y reflow al 200%.
- Comprobación específica de filas sin subrayado permanente.
- `extra-review.json`: siete comprobaciones de filtros técnicos, resumen de orientación, reinicio y lectura sin JavaScript, todas PASS.
- **PASS:** 51 ejecuciones axe sobre páginas y estados del configurador, sin infracciones automáticas detectadas; resultados e incompletas en JSON. No es certificación WCAG ni prueba con lector de pantalla.
- Sin llamadas de producto ni analítica durante las comprobaciones con «Solo necesarias». NOT RUN: conexión real a Sis, rastreo vivo, sincronización Drive, jerarquía arbitraria de filiales y comparativas funcionales de competidores.

## Abrir y revisar

`npm run dev`; abrir la URL que imprima Astro. Revisar `/`, `/agentes/`, `/sis/`, `/conocimiento/`, `/blog/` y `/tu-organizacion/`. En el último paso, probar las tres preguntas y preparar una consulta sin enviarla.

Capturas de escritorio/móvil de portada, agentes, conocimiento, Sis, blog, artículo técnico y pasos/resultados del configurador. Revisión humana pendiente de copy, borradores técnicos y futura conversación real de Sis. PR3 sigue en borrador, sin merge ni despliegue manual a producción.

Capturas generadas: 26. Los informes anteriores de PR3 se conservan como checkpoints; esta es la revisión del árbol actualizado.
