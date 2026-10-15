# PR3 · Revisión final de Nutria 2.0

> Corrección posterior: [Sis como orquestador, guía y puente con las personas](sis/REVIEW.md).

> Última pasada: [portada, organización y recorrido de incorporación](polish/REVIEW.md).

> Último ajuste: [Nutria usando Nutria y captación opcional](leads/REVIEW.md).

> Última aclaración: [Sis incrustado y chat libre ligado al artefacto](chat/REVIEW.md).

> Última actualización: [ajuste editorial, fuentes públicas y Sis](editorial/REVIEW.md).

> Actualización posterior: ver [pulido de producto y Sis](refinement/PRODUCT-NOTES.md) y [validación del pulido](refinement/REVIEW.md). Las cifras siguientes corresponden a la entrega inicial de PR3.

## Alcance y estado

Rama `feat/nutria-2-final-review`, apilada sobre PR2 `feat/nutria-2-editorial` (`7f088db`). Preparada para revisión humana; no es aprobación de publicación. Sin merge, despliegue manual ni cambios en Core, plugins o `nutria_system`. No se inspeccionó Netlify ni su preview, conforme a la instrucción del usuario.

## Cambios

- Changelog retirado por petición del usuario: colección, notas, páginas, enlaces, estilos y GIF de 4,28 MB. El historial Git conserva los originales; no se publica un archivo antiguo dentro de la nueva web.
- Canonical sin query, metadatos Open Graph y tarjeta social de texto. Sitemap de nueve rutas corporativas; los artículos solo entrarán al aprobarse con `status: published` y fecha real.
- Previews y builds locales: `noindex`. Netlify `CONTEXT=production` permite indexar páginas corporativas; artículos y legales en revisión siguen excluidos. `robots.txt` permite leer la directiva noindex y declara el sitemap.
- Menú móvil inicializado antes de pintar para evitar el salto causado por ocultar tardíamente la navegación. Sin JavaScript, las opciones siguen visibles. `aria-current` diferencia página de sección.
- Objetivos táctiles del footer ampliados, movimiento reducido y estados de teclado verificados.
- Logo de 155.433 a 6.097 bytes para su tamaño real de presentación. Sin fuentes externas ni nuevas dependencias de aplicación.
- Retirar consentimiento desactiva la medición, comunica la denegación y elimina cookies GA accesibles. La prueba de aceptación usa proveedor simulado; no envía datos a Google.
- Legales reescritos como propuestas pendientes del titular: se retiran ecommerce, suscripciones, demos interactivas, plazos de conservación inventados, garantías no verificadas y petición automática de DNI. Describen el formulario local, alojamiento y consentimiento actuales. No equivalen a dictamen legal.

## Compatibilidad de URLs

| Origen | Destino / respuesta preparada |
| --- | --- |
| `/features` y `/features/` | 301 a `/agentes/` |
| `/dossier` y `/dossier/` | 301 a `/planes/` |
| `/news` y `/news/` | 301 a `/blog/` |
| `/notas-de-version`, `/notas-de-version/` y descendientes | 404 con página de recuperación |
| `/demo`, `/roadmap`, legales y `/nutriabot` | Se conservan |

Las reglas están en `public/_redirects` y se copian a `dist/`. Astro genera alternativas HTML de redirección para las tres rutas antiguas, comprobadas localmente. Su preview no ejecuta `_redirects`: las notas retiradas dan 404 localmente. **NOT RUN:** respuestas HTTP 301/404 en Netlify; no se afirma aceptación del proveedor sin comprobarla. No hay wildcard SPA que transforme errores en 200.

## Comprobaciones

- **PASS:** build estática; 18 páginas, tres alternativas de redirección y dos endpoints de texto.
- **PASS:** 68 vistas de 17 rutas a 1440, 390, 320 y 768 px; un H1/main, sin overflow horizontal, imágenes rotas, IDs duplicados, errores JavaScript ni solicitudes externas con «Solo necesarias».
- **PASS:** 64 enlaces y anclas, 14 comprobaciones de interacción (filtros, menú/Escape, salto al contenido, contacto local, consentimiento, sin JS, rutas retiradas y reflow al 200%).
- **PASS:** 35 ejecuciones axe-core 4.14.0 (WCAG A/AA 2.0, 2.1 y 2.2), sin infracciones detectadas, incluyendo diálogo abierto. Sus comprobaciones incompletas constan en el JSON; no es certificación WCAG ni validación con lector de pantalla.
- **PASS:** 12 comprobaciones adicionales de consentimiento simulado, redirecciones HTML, indexación y sitemap; inspección de metadatos y reglas copiadas.
- **Lighthouse 13.5.0 local móvil, portada:** rendimiento 99, accesibilidad 100, buenas prácticas 100, SEO 100; LCP 0,9 s, CLS 0. Se corrigió el CLS inicial 0,27. Laboratorio local, no métricas de usuarios ni de producción.
- **Lighthouse local móvil, artículo:** rendimiento 99, accesibilidad 100, buenas prácticas 100; SEO 63 por el `noindex` deliberado del borrador. LCP 0,8 s, CLS 0.
- **NOT RUN:** lector de pantalla, distintos motores de navegador, datos de campo, Search Console, redirecciones del proveedor, inventario real de GA o aceptación funcional de Nutria. No se hicieron llamadas de producto ni benchmarks comerciales.

## Capturas y revisión visual

`captures/`: portada, agentes, trabajo delegado, planes, contacto, blog, artículo y privacidad a 1440 y 390 px. Se conserva la dirección A: azul plano, jerarquía clara y escenarios por responsabilidad. Blog y footer ya no contienen referencias al changelog. La portada móvil sigue siendo extensa; revisar el ritmo y la prioridad de secciones es una decisión editorial, no un fallo de reflow. Tipografía de sistema sobria y diagramas ilustrativos identificados; sin métricas ni clientes inventados.

## Abrir y decisiones pendientes

```bash
npm ci
npm run dev
```

Abrir `http://localhost:4321/`, `/agentes/`, `/casos-de-uso/`, `/planes/`, `/blog/` y `/contacto/`. Para reproducir indexación de producción sin publicar: `CONTEXT=production npm run build` y `npm run preview -- --host 127.0.0.1 --port 4321`. Detener con `npm run preview -- stop`.

El usuario debe revisar diseño/copy y aprobar los cinco artículos. El titular debe completar la identificación legal exigible, bases, conservación, proveedores, transferencias e inventario/configuración GA. Los precios y el plan interno independiente siguen pendientes de formalización, sin importes inventados. La retirada del changelog está solicitada; las reglas preparadas deberán comprobarse en el proveedor antes de un despliegue final autorizado. **NO-GO para publicar hasta resolver la aprobación editorial y legal.**

## Fuentes de las decisiones técnicas

[Netlify: redirecciones](https://docs.netlify.com/manage/routing/redirects/overview/), [Google: noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing), [W3C: objetivos táctiles](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum), [AEPD: identificación al ejercer derechos](https://www.aepd.es/preguntas-frecuentes/1-tus-derechos/3-identificacion-con-dni/FAQ-0108-para-el-ejercicio-de-estos-derechos-es-necesario-facilitar-la-copia-del-dni).
