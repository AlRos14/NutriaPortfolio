# Sis: recuperar el papel del agente orquestador

Corrección solicitada por el usuario sobre `7c2ddcf`. La página anterior había reducido Sis a coordinación organizativa y generación de esquemas. También conservaba una referencia obsoleta a «respuestas editoriales», aunque el prototipo actual no genera respuestas.

## Fuentes contrastadas

Lectura local, sin modificar los sistemas ni consultar configuración privada:

- `ChatBotNutralia` `26c159e1`, `docs/personas/INDEX.md:32`: Sis como orquestador, puente entre humanos y agentes, orientación hacia el agente adecuado y mediación.
- Mismo checkpoint, `src/personas/instinct.py:38–42`: Sis como referencia explícita para capacidades del sistema, lo que otros agentes pueden hacer y orientación en la plataforma. Es una declaración de rol en el código, no prueba de éxito en aceptación real.
- `nutria_system` `22fe195`, `docs/SIS_AUTHORITY.md:25–29`: punto central de entrada y orquestación; visibilidad de equipos, marcas y agentes determinada por autoridad. Las líneas 3–23 distinguen configuración central protegida de contexto empresarial.

El índice de personas contiene otros enfoques históricos que no se trasladan a la propuesta pública. La revisión utiliza su descripción del papel de Sis junto al contrato central vigente y la declaración de rol; no publica información personal, prompts completos ni datos operativos.

## Página corregida

- Introducción: Sis conoce Nutria y conecta a las personas con el mundo de los agentes.
- Cuatro funciones: entender el sistema, descubrir capacidades, aprender a utilizarlo y orquestar el trabajo.
- Diagrama propio Personas ↔ Sis ↔ Nutria y sus agentes. Sustituye el organigrama comercial genérico compartido con la portada.
- Preguntas ilustrativas para mostrar por qué acudir a Sis, sin inventar respuestas.
- El configurador queda como una aplicación concreta, al final. Sigue identificado como prototipo sin conexión ni respuestas generadas.
- Se conserva la configuración manual del panel y se explica el alcance autorizado una sola vez.

No se publica el superlativo «conoce Nutria mejor que nadie» como hecho medido. Se comunica su función de conocimiento y orientación sin atribuir omnisciencia ni acceso ilimitado.

## Verificación local

Build estática correcta: 23 páginas. Revisión en Chromium a 1440, 768, 390 y 320 px; cuatro ejecuciones axe-core WCAG A/AA 2.0/2.1/2.2 sin infracciones detectadas, sin overflow, errores JavaScript ni solicitudes externas con consentimiento de solo necesarias. Reflow al 200 % y enlace al prototipo correctos. Detalle e incompletos de axe en [browser-review.json](browser-review.json); no es certificación de accesibilidad ni aceptación funcional de Sis.

Capturas: [1440 px](captures/sis-1440.png), [390 px](captures/sis-390.png).

Sin nuevas dependencias, cambios de Core o nutria_system, endpoint de Sis, inspección de Netlify, merge ni despliegue manual. Revisión visual humana pendiente.
