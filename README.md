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
- `src/content/releases/`: notas Markdown con versión, fecha y estado histórico/verificado.
- `src/content.config.ts`: esquemas de las dos colecciones.
- `public/`: logo existente y una imagen de las novedades históricas.
- `docs/pr1/` y `docs/pr2/`: alcance, evidencias y capturas de revisión.

Sin Vue, CMS, backend ni librerías de animación. El contenido corporativo se renderiza como HTML. JavaScript se limita al menú, consentimiento y preparación de un correo: el visitante decide enviarlo desde su propia aplicación.

## Alcance de PR1

Dirección visual A aprobada el 14/10/2026. La portada se organiza alrededor de responsabilidades y trabajo delegado, no de dos tamaños de empresa. Los escenarios son ilustrativos y condicionados a capacidades y permisos configurados.

Planes sin importes aprobados. No se ofrece como contratado el plan interno independiente pendiente de formalización. Telegram, WhatsApp, correo y Slack conservan sus diferencias de alcance. Llamadas, números individuales y robótica se presentan solo como visión futura.

Las rutas antiguas siguen existiendo como páginas estáticas: `/features`, `/demo`, `/news`, `/roadmap`, `/dossier`, legales y `/nutriabot`. `/news` conserva el acceso al archivo histórico en `/notas-de-version/`; los textos legales se han trasladado y requieren revisión de vigencia antes de publicar. `/nutriabot` conserva identificación y contacto; se retiraron afirmaciones de comportamiento no verificadas. No se aplican aún redirecciones 301.

PR2 añade `/blog/` y `/notas-de-version/` como colecciones separadas, con cinco artículos propuestos y las cinco notas históricas anteriores. PR3: SEO, accesibilidad completa, rendimiento, reglas de redirección, revisión legal/analítica y despliegue. Una build correcta no autoriza publicación.

## Analítica y privacidad

Se conserva la medición GA4 pública anterior, activada solo tras aceptar analítica. «Solo necesarias» no carga el script del proveedor. Las preferencias se pueden cambiar desde el pie. El contacto no envía ni almacena campos en un backend de Nutria. Antes de publicación deben revisarse los textos legales heredados frente al sitio final.

## Estado de entrega

Ver [revisión PR1](docs/pr1/REVIEW.md) y [revisión PR2](docs/pr2/REVIEW.md). La exploración anterior se conserva localmente en `exploration/nutria-2/`; no forma parte del bundle ni de las páginas públicas.

## Editar contenido

Los archivos Markdown se convierten en páginas estáticas durante la build. El identificador del archivo define la URL: no renombrarlo después de publicación sin planificar una redirección. No se requiere CMS, base de datos o dependencia adicional.

Artículos: `title`, `description`, `category` (Organización, Delegación o Integraciones), `editedAt` (YYYY-MM-DD) y `status` (`review` o `published`). Un artículo publicado requiere también `publishedAt` aprobado; no se presenta la fecha de edición como una publicación real. Los borradores se ven identificados en la revisión.

Notas: `title`, `description`, `version`, `publishedAt` y `status` (`historical` o `verified`). Las cinco notas migradas conservan `historical`. No cambiar a `verified` por encontrar código o por pasar una build: exige evidencia de un lanzamiento real y revisión de su alcance. El índice separa ambos estados; no se ha inventado una nota actual para llenar la sección.

La aprobación editorial y las comprobaciones finales de PR3 son necesarias antes de publicar en producción.
