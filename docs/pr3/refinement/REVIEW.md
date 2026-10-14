# Revisión del pulido · Sis y organización

Esta revisión sustituye las cifras y capturas de la entrega inicial de PR3 para el árbol actualizado. Dirección A conservada; PR3 sigue en borrador y el usuario revisará antes de merge/publicación.

## Qué probar

1. Portada: puestos y áreas, con Sis visible y acceso al configurador.
2. `/agentes/`: identidad, contexto empresarial, memoria, autonomía y puestos de coordinación.
3. `/casos-de-uso/`: ecommerce, inteligencia competitiva, atención por marca y nueva área.
4. `/sis/`: entrada central y coordinación de organización.
5. `/conocimiento/`: procedimientos por marca, documentos en panel y Drive como desarrollo.
6. `/tu-organizacion/`: empresa/tamaño → necesidad → esquema; seleccionar puestos, cambiar modo de autonomía, editar, reiniciar y preparar una consulta.
7. Cookies en una sesión nueva: ningún botón preseleccionado visualmente; título con foco inicial y las dos opciones con el mismo estilo. Tab muestra el foco de teclado, Escape elige solo necesarias.

```bash
npm run dev
```

Abrir la dirección que imprima Astro y las rutas anteriores. El servidor del usuario ya ocupaba 4321; la comprobación aislada utilizó 4322. Solo se detiene el preview creado para esta revisión.

## Resultado

- **PASS:** build estática normal y `CONTEXT=production`; 21 páginas de contenido (incluye 404), tres alternativas de redirección y endpoints robots/sitemap. Sin dependencias de aplicación nuevas.
- **PASS:** 80 vistas de 20 rutas a 1440, 390, 320 y 768 px: sin desbordamiento horizontal, imágenes rotas, duplicación de IDs, errores JavaScript ni H1/main duplicados.
- **PASS:** 69 enlaces/anclas.
- **PASS:** 32 combinaciones del configurador (4 tamaños × 4 necesidades × escritorio/móvil), selección de especialista y composición adaptada.
- **PASS:** 48 interacciones de selección, edición, reinicio, modos de autonomía, correo preparado, texto libre sin interpretar, navegación, cookies, sin JS y reflow al 200%.
- **PASS:** 46 ejecuciones axe en páginas y estados del configurador, más una sobre el diálogo de cookies abierto; sin infracciones automáticas detectadas. Las comprobaciones incompletas, incluido contraste con backdrop, se conservan en JSON. No equivale a certificación WCAG ni prueba con lector de pantalla.
- **PASS:** cuatro comprobaciones adicionales del foco neutral, Tab visible y ocultación/recuperación del formulario al pasar al resultado y editar. Las opciones de consentimiento mantienen texto oscuro sobre blanco y sin estado de selección inicial.
- **PASS:** sin peticiones externas durante la revisión de páginas y configurador con «Solo necesarias». El prototipo no tiene API, IA ni persistencia; los textos del visitante entran como texto, no como HTML. El correo no se envía automáticamente.
- **PASS:** sitemap de 11 rutas corporativas; Sis y conocimiento indexables en build de producción. El prototipo sigue noindex y fuera del sitemap. No vuelve el changelog y desaparece el posicionamiento «Telegram principal».
- **Lighthouse 13.5.0, Chromium 141, portada móvil local:** rendimiento 95 / accesibilidad 100 / buenas prácticas 100 / SEO 100; LCP 0,9 s, CLS 0, TBT 250 ms. Muestra de laboratorio; no se atribuye una diferencia con la medición anterior a una causa no comprobada.

- **Lighthouse del configurador móvil local:** rendimiento 95 / accesibilidad 100 / buenas prácticas 100 / SEO 63 (noindex deliberado del prototipo); LCP 1,1 s, CLS 0, TBT 260 ms. Se corrigió el CLS inicial 0,295 sirviendo el primer paso antes de ejecutar JavaScript, con controles deshabilitados hasta estar listos.

Se corrigieron un título largo a 320 px, la navegación al ampliar texto, una franja del formulario vacío al mostrar resultados y la composición de la cabecera de Sis en móvil. La comprobación inicial de cookies se repitió con contexto de navegador aislado, porque una pestaña nueva comparte localStorage y no equivale a un visitante nuevo.

## Evidencia

- `browser-review.json`: vistas, enlaces, accesibilidad, matriz e interacciones.
- `extra-review.json`: cookies abiertas y cambio formulario/resultado.
- `static-review.json`: build y metadatos de producción.
- `lighthouse-*-mobile.json`: mediciones de laboratorio.
- `captures/`: 21 capturas; portada, agentes, casos, Sis, conocimiento y pasos/resultados del configurador a 1440 y 390 px, más cookies y recortes de portada.
- [Notas de producto y evidencia](PRODUCT-NOTES.md): distingue implementación inspeccionada, escenarios de configuración y desarrollos pendientes.

## Autocrítica y límites

El esquema hace visible la coordinación y permite entender el puesto al seleccionarlo. La composición mantiene azul plano y tipografía de sistema de A. En móvil el resultado requiere scroll: se prioriza conservar visibles responsabilidades, fuentes y decisiones, en lugar de esconderlas tras iconos. La explicación de cada puesto es editorial y todavía no responde a un diagnóstico de Sis; la elección por tamaño es orientativa, no una dotación comercial prescrita.

**NOT RUN:** conversación real con Sis, aceptación de operación autónoma de una plataforma, sincronización Drive, correo individual, Teams/llamadas, jerarquías arbitrarias agente→agente, llamadas de producto, métricas de campo, lector de pantalla y validación en Netlify. No se ha modificado Core, plugins ni `nutria_system`. El usuario confirmó que la integración real se diseña después de este prototipo.

Pendientes humanos: revisar narrativa, estructura interactiva y puestos; aprobar artículos y textos legales; acordar recorrido público/contrato de Sis real y validar sus capacidades antes de conectarlo. No hay comparación de coste humano ni nuevos precios. Sin merge ni despliegue manual a producción.
