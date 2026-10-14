# Nutria · Agentes para empresas

Web corporativa estática de [ainutria.com](https://ainutria.com), preparada con Astro. Presenta agentes con roles, herramientas y autoridad delimitada para delegar trabajo real dentro de una organización.

## Desarrollo local

Node.js 22.12 o superior y npm. Las versiones se fijan en `package-lock.json`.

```bash
npm ci
npm run dev
```

Astro imprime la URL local. Para compilar y revisar el resultado:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

Astro 7 gestiona el preview como proceso del proyecto. Puedes consultar o detener el servidor con:

```bash
npm run preview -- status
npm run preview -- stop
```

En entornos restringidos se usó `ASTRO_TELEMETRY_DISABLED=1` al ejecutar Astro. La salida estática está en `dist/`.

## Estructura

- `src/pages/`: páginas corporativas y URLs anteriores conservadas.
- `src/layouts/SiteLayout.astro`: documento, navegación y pie compartidos.
- `src/components/site/`: organización, roles, canales, opciones comerciales y consentimiento.
- `src/data/site.ts`: roles y escenarios ilustrativos, sin datos de clientes.
- `src/styles/site.css`: dirección A, azul plano y tipografía de sistema.
- `src/content/articles/`: artículos Markdown con estado editorial y categoría.
- `src/content.config.ts`: esquema de artículos y estado editorial.
- `public/`: logo optimizado y reglas de compatibilidad Netlify.
- `docs/pr1/`, `docs/pr2/` y `docs/pr3/`: alcance, evidencias y capturas de revisión; PR3 sustituye las decisiones de archivo histórico de PR2.

Sin Vue, CMS, backend ni librerías de animación. El contenido corporativo se renderiza como HTML. JavaScript se limita a navegación, consentimiento, filtros, preparación de correo y al prototipo local de organización. El visitante decide si envía el correo desde su propia aplicación.

## Alcance de PR1

Dirección visual A aprobada el 14/10/2026. La portada se organiza alrededor de responsabilidades y trabajo delegado, no de dos tamaños de empresa. Los escenarios son ilustrativos y condicionados a capacidades y permisos configurados.

Planes sin importes aprobados. No se ofrece como contratado el plan interno independiente pendiente de formalización. Telegram, WhatsApp, correo y Slack conservan sus diferencias de alcance. Llamadas, números individuales y robótica se presentan solo como visión futura.

PR3 retira el changelog y su imagen antigua del sitio. Sus contenidos siguen en el historial Git de PR2. `/news` redirige al blog, `/features` a agentes y `/dossier` a planes. Las rutas eliminadas de notas de versión responden 404 en Netlify; el preview Astro devuelve 404 porque no ejecuta reglas `_redirects`. `/demo`, `/roadmap`, las páginas legales y `/nutriabot` conservan su finalidad vigente.

PR2 añadió cinco artículos Markdown. PR3 incorpora metadatos sociales, canonical, sitemap, robots, comprobaciones de accesibilidad y rendimiento. Los artículos en revisión y los borradores legales llevan `noindex` y no entran en el sitemap. Toda build fuera de `CONTEXT=production` lleva `noindex`, incluidos los previews de Netlify. Para comprobar el modo de producción localmente: `CONTEXT=production npm run build`. Esto solo compila; no publica.

Los textos legales anteriores contenían tratamientos y garantías sin confirmar. Se sustituyen por propuestas técnicas ajustadas al sitio, pendientes de completar y aprobar por el titular. No publicar hasta resolver esa revisión y la aprobación editorial. Una build correcta no autoriza publicación. No se ha realizado merge ni despliegue manual a producción.

## Analítica y privacidad

Se conserva la medición GA4 pública anterior, activada solo tras aceptar analítica. «Solo necesarias» no carga el script del proveedor. Las preferencias se pueden cambiar desde el pie. El contacto no envía ni almacena campos en un backend de Nutria. Antes de publicación deben revisarse los textos legales heredados frente al sitio final.

## Estado de entrega

Ver el [pulido de producto y prototipo de Sis](docs/pr3/refinement/PRODUCT-NOTES.md), la [revisión final PR3](docs/pr3/REVIEW.md), [PR1](docs/pr1/REVIEW.md) y [PR2](docs/pr2/REVIEW.md). La exploración anterior se conserva localmente en `exploration/nutria-2/`; no forma parte del bundle ni de las páginas públicas.

## Editar contenido

Los archivos Markdown se convierten en páginas estáticas durante la build. El identificador del archivo define la URL: no renombrarlo después de publicación sin planificar una redirección. No se requiere CMS, base de datos o dependencia adicional.

Artículos: `title`, `description`, `category` (Organización, Delegación o Integraciones), `editedAt` (YYYY-MM-DD) y `status` (`review` o `published`). Un artículo publicado requiere también `publishedAt` aprobado; no se presenta la fecha de edición como una publicación real. Los borradores se ven identificados en la revisión.

La aprobación editorial y legal sigue pendiente antes de publicar en producción.

## Sis y prototipo de organización

`/sis/` presenta el punto central de coordinación. `/conocimiento/` explica documentos y procedimientos por marca. `/tu-organizacion/` permite explorar un esquema ilustrativo en tres pasos, seleccionar puestos y comparar formas de autonomía. Usa escenarios editoriales de `src/data/organization-explorer.ts`; no interpreta el texto libre, no conversa con Sis ni crea agentes. El usuario confirmó que la integración real se abordará después. No hay backend, persistencia ni proveedor de IA en la microapp. El prototipo permanece `noindex` también en producción.

El relato se amplía a puestos, funciones continuas y áreas, incluyendo ecommerce e inteligencia competitiva. No se prometen jerarquías arbitrarias implementadas: se distingue la coordinación central de Sis de los esquemas organizativos ilustrativos. Telegram, WhatsApp y Slack se presentan por integración, preservando el alcance de notificaciones en Slack. Correo individual, Google Drive, Teams y llamadas permanecen identificados como desarrollo o próximos pasos. No se añade una comparativa de coste humano ni cifras de ahorro.
