# PR1 · Web corporativa Nutria 2.0

Dirección A elegida y cambio de fase autorizado por el usuario el 14/10/2026. Esta PR prepara la implementación corporativa para revisión. No autoriza merge ni despliegue.

## Resultado

La portada deja de presentar Nutria como chatbot de ecommerce. Explica agentes con roles, herramientas y autoridad delimitada dentro de una organización. El diagrama representa una estructura genérica, no una empresa de dos personas. Los casos se organizan por responsabilidad: información, seguimiento, atención, análisis y contenido. Se identifican como escenarios ilustrativos condicionados a configuración y permisos.

A se traslada a una web estática Astro 7.3.8: 15 páginas, un layout, componentes de contenido compartidos y CSS plano. Se retiran la SPA Vue, el router, Tailwind y AOS; no se incorporan CMS, backend o librerías decorativas. Node mínimo 22.12.0. La tipografía de sistema y el logo existente mantienen la dirección aprobada; se revisan espaciado, tamaño del texto auxiliar, navegación y composición móvil.

## Alcance y límites comerciales

- Opciones por necesidad y consulta comercial, sin precios, cuotas, descuentos, métricas o clientes inventados.
- Plan interno independiente identificado como pendiente. La FAQ conserva la contradicción con el catálogo vigente; no se modifica licenciamiento.
- Telegram interno principal; WhatsApp y correo mediante plugins con alcance propio; Slack para notificaciones.
- Llamadas, números individuales y robótica solo en la página de visión, identificados como futuros.
- Contacto por correo existente: el formulario prepara un mensaje local y ofrece abrirlo en la aplicación del visitante. No lo envía ni registra en un backend.

## Rutas y material anterior

Las nuevas páginas corporativas son `/`, `/agentes/`, `/casos-de-uso/`, `/planes/` y `/contacto/`. Las URLs `/features`, `/dossier`, `/demo`, `/roadmap`, `/news`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies` y `/nutriabot` siguen existiendo.

`/features` y `/dossier` son páginas compatibles con enlace a la información nueva. Todavía no aplican 301. Se retira el catch-all SPA 200 porque las rutas ahora son archivos estáticos: el soporte concreto del proveedor de hosting debe comprobarse en PR3 antes de desplegar.

`/news` conserva las notas de 2025 como archivo histórico, con la imagen original. No se presentan como certificación actual. Los documentos legales mantienen el contenido previo: se sustituye la fecha calculada en cada visita por la indicación de que no existía fecha de revisión fija. El control de preferencias de cookies se conecta al nuevo diálogo. No se ha hecho una nueva revisión jurídica. `/nutriabot` conserva identificación y contacto; se retiran las afirmaciones de comportamiento y privacidad que no se verificaron para esta entrega.

La medición GA4 anterior se mantiene bajo opt-in. «Solo necesarias» no carga el script externo; el diálogo se puede reabrir y la elección rechazada deshabilita la recogida de GA y elimina sus cookies visibles. No se promete controlar cookies HttpOnly o de dominios de terceros. La revisión legal y de analítica completa es un requisito previo a publicación.

## Validación de PR1

- **PASS:** build estática Astro de 15 páginas.
- **PASS:** revisión Chromium de la base `68ff161` de 14 rutas a 1440, 390, 320 y 768 px. Registro y capturas en este directorio.
- **PASS:** un H1/main por ruta; sin overflow, imágenes rotas ni errores de JavaScript en las vistas revisadas.
- **PASS:** enlaces internos y anclas, menú móvil y Escape, acordeón, selección de interés, preparación de correo sin envío, salto al contenido, reapertura de preferencias, 404 real y navegación/contacto sin JavaScript.
- **PASS:** ninguna petición externa durante el recorrido con «Solo necesarias».
- **PASS:** pulido posterior de los casos: retirada una regla heredada de fondo para recuperar alternancia consistente. Build recompilada y capturas a 1440/390 px revisadas en Chromium; sin overflow. Registro `cases-polish-review.json`.
- **NOT RUN:** analítica con consentimiento en el proveedor real, envío de correo, lector de pantalla, auditoría WCAG completa, SEO final, Lighthouse, compatibilidad de hosting/301, aceptación nueva de Nutria o revisión jurídica.

No se escribió una suite de tests de producto ni se ejecutaron modelos/efectos de Nutria. La build y los checks acotados no equivalen a aprobación del diseño ni aceptación de producción.

## Capturas

| Página | 1440 px | 390 px |
|---|---|---|
| Portada | [Escritorio](captures/home-1440.png) | [Móvil](captures/home-390.png) |
| Agentes | [Escritorio](captures/agentes-1440.png) | [Móvil](captures/agentes-390.png) |
| Trabajo delegado | [Escritorio](captures/casos-de-uso-1440.png) | [Móvil](captures/casos-de-uso-390.png) |
| Planes | [Escritorio](captures/planes-1440.png) | [Móvil](captures/planes-390.png) |
| Contacto | [Escritorio](captures/contacto-1440.png) | [Móvil](captures/contacto-390.png) |

También se conservan portadas de viewport, menú, mensaje preparado y diálogo de cookies. [Registro del navegador](browser-review.json).

## Git y próximas PRs

Rama de trabajo `feat/nutria-2-corporate-web`, desde `2ed9d363d49fb640b5bcf483909bf1f7b10a779c`. La base conserva siete commits locales previos sobre main remoto `6492219c0f6823d36a1252c8c1c241c0f117c35b`, incluidos el contenido de datos y la ruta NutriaBot. Se mantienen explícitamente; una PR contra main incluye también esos commits previos. No se ha reescrito su historia.

La exploración Fases 0–1 sigue local en `exploration/`; no se incluye en esta PR ni en la build. El archivo `.aws` ajeno al estudio se excluye. No se han modificado Core ni nutria_system.

PR2 sigue pendiente: blog Markdown, artículos y notas de versión separados. PR3 sigue pendiente: SEO, accesibilidad/rendimiento completos, compatibilidad y redirecciones, revisión final y despliegue. **NO-GO para publicación desde PR1 sola**: faltan revisión legal/comercial y los gates previstos de PR3.
