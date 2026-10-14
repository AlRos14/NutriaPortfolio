# PR2 · Blog y notas de versión en Markdown

Rama `feat/nutria-2-editorial`, desde PR1 `a8d12ac9bfeddaf003d380dcacc24ff2613517a1`. PR1 sigue abierta en borrador. PR2 se propone contra `feat/nutria-2-corporate-web` para que el diff contenga solamente la entrega editorial. Después de integrar PR1 se deberá revisar la base de PR2; no se ha hecho merge.

## Resultado

- `/blog/`: índice de cinco artículos, categorías, filtros accesibles y lectura disponible sin JavaScript.
- `/blog/<archivo>/`: páginas Markdown estáticas con índice de lectura, fecha explícita, estado editorial y enlaces a lecturas relacionadas.
- `/notas-de-version/`: sección separada del blog. Distingue notas históricas de futuros cambios verificados sin crear notas ficticias.
- `/notas-de-version/<archivo>/`: las cinco notas de 2025 migradas a Markdown con fecha y versión originales.
- `/news`: URL conservada como acceso al archivo y al blog; sin redirección 301.
- Navegación, footer y entrada editorial en portada dentro de la dirección A.

Dos colecciones nativas de Astro, esquema y rutas estáticas. Sin dependencias nuevas, CMS, backend, buscador externo o librería decorativa. La build pasa de 15 a 27 páginas.

## Artículos propuestos

| Archivo / URL | Tema y alcance |
|---|---|
| `delegar-trabajo-a-un-agente` | Rol, objetivo, herramientas y revisión del resultado. La delegación puede avanzar dentro de autoridad sin aprobación en cada paso. |
| `elegir-el-primer-trabajo-delegado` | Elegir por necesidad y resultado observable, sin vincular el discurso a dos tamaños de empresa. |
| `herramientas-y-autoridad` | Diferencia entre acceso, preparación y ejecución autorizada. |
| `elegir-el-canal-segun-el-trabajo` | Telegram principal; WhatsApp/correo mediante plugins; Slack notificaciones. Sin prometer equivalencia ni llamadas actuales. |
| `que-demuestra-una-accion-completada` | Distinguir propuesta, efecto y comprobación; no convertir un caso en aceptación universal. |

Todos tienen `status: review` y se muestran como borradores editoriales. La fecha 14/10/2026 es de edición, no de publicación. Un estado `published` exige `publishedAt`. La autoría se presenta como Nutria, sin autores, clientes ni testimonios ficticios. No hay cifras comerciales ni comparativas de superioridad.

La base de contenido es el brief y el inventario de capacidades de Fase 0, la propuesta aprobada en PR1 y las restricciones expresas del encargo. Los casos son ilustrativos. No se ha realizado aceptación nueva de Core ni de plugins. Los artículos necesitan revisión editorial antes de producción.

## Notas históricas y procedencia

Fuente: `src/pages/news.astro` de PR1 `a8d12ac`. Entradas 1.0.0–1.0.4; fechas originales entre 30/06 y 08/08 de 2025. Las afirmaciones del archivo no se han convertido en estado vigente. La imagen de fuentes se conserva en su nota original.

[Auditoría de migración](content-audit.json): secuencia de palabras del cuerpo conservada en las cinco notas al normalizar el marcado y excluir el marcado de imagen. No se afirma identidad byte a byte: cambia la presentación HTML a Markdown, manteniendo el contenido y el recurso de imagen.

`status: historical` identifica el archivo. `status: verified` permite una futura nota solo cuando exista un lanzamiento real, alcance contrastado y aprobación editorial. Actualmente no hay ninguna nota de este tipo. El esquema no puede sustituir esa revisión humana ni demostrar un efecto de producto.

## Agenda editorial posterior

- Qué responsabilidad delegar y cómo ampliar un rol a partir de resultados revisados.
- Elegir interfaces según recorridos verificados para cada canal.
- Comparativas con Dots, Grok Bot, OpenClaw, Hermes y Pi: documentar versión/fecha, configuración y un mismo caso; distinguir especificación y resultados observados. No publicar tablas de ausencia de funciones sin pruebas.
- Alternativas empresariales: estudiar encaje organizativo y operativo con fuentes primarias.

Las comparativas no se han redactado como artículos publicables en esta PR: la investigación documental de Fase 0 no constituye un benchmark ejecutado. Su publicación necesita evidencia específica. Se evita llenar el blog con noticias genéricas o lanzamientos no comprobados.

## Validación local

- **PASS:** build estática de 27 páginas; contenido validado por los esquemas de Astro.
- **PASS:** 56 vistas de las 14 rutas afectadas a 1440, 390, 320 y 768 px; un H1/main, sin overflow, imágenes rotas ni IDs duplicados.
- **PASS:** 70 comprobaciones de enlaces/anclas, filtros/restablecimiento, ancla del artículo, menú/Escape, índice sin JavaScript, 404 de artículo/nota inexistentes y artículo al 200% de zoom.
- **PASS:** sin errores JavaScript ni peticiones externas con «Solo necesarias» en el recorrido revisado.
- **PASS:** comprobación final de fechas de edición de los borradores en índice/artículo a 1440/390 (`date-review.json`).
- **PASS:** revisión adicional de notas y `/news` a 1440/390 tras completar la separación de estados histórico/verificado; capturas actualizadas.
- **PASS:** migración de las cinco notas y `git diff --check`.
- **NOT RUN:** lector de pantalla, auditoría WCAG completa, SEO/rendimiento final, analítica real, modelos/efectos de Nutria o aceptación de capacidades. No se revisa Netlify en esta entrega, conforme al apunte del usuario.

La rama usa la preview automática de PR del alojamiento existente; no se ha ejecutado una publicación manual ni se ha cambiado producción. PR3 sigue pendiente, incluidos redirecciones, revisión legal/comercial, validación final y despliegue autorizado.

## Capturas

| Página | 1440 px | 390 px |
|---|---|---|
| Portada con entrada editorial | [Escritorio](captures/home-1440.png) | [Móvil](captures/home-390.png) |
| Blog | [Escritorio](captures/blog-1440.png) | [Móvil](captures/blog-390.png) |
| Artículo de referencia | [Escritorio](captures/article-1440.png) | [Móvil](captures/article-390.png) |
| Índice de notas | [Escritorio](captures/releases-1440.png) | [Móvil](captures/releases-390.png) |
| Nota histórica con imagen | [Escritorio](captures/release-1440.png) | [Móvil](captures/release-390.png) |
| `/news` compatible | [Escritorio](captures/news-1440.png) | [Móvil](captures/news-390.png) |

También se conserva el filtro móvil aplicado y capturas del viewport del blog. Registros: [navegador](browser-review.json), [notas](release-review.json) y [contenido](content-audit.json).

## Abrir y editar

```bash
npm run dev
```

Astro imprime la URL local. Las rutas principales son `/blog/`, `/blog/delegar-trabajo-a-un-agente/`, `/notas-de-version/` y `/notas-de-version/1-0-3/`.

Editar `src/content/articles/*.md` o `src/content/releases/*.md` y ejecutar `npm run build`. El nombre del archivo es el identificador de URL: un cambio posterior a publicación necesita un plan de redirección. Los borradores no deben presentarse como publicación aprobada; el flag editorial no certifica capacidad, seguridad ni aceptación de producción.
