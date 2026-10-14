# Pulido de portada y espacio de organización

Continuación aprobada por el usuario sobre `c7f1578`, en la rama aislada de PR3. Esta revisión sustituye las capturas anteriores de las páginas modificadas; conserva los checkpoints históricos.

## Qué cambia

- Portada: «agentes de IA» en la primera pantalla, nueve secciones reducidas a siete. Se fusionan la lista de puestos y los ejemplos; el acceso al configurador aparece inmediatamente después de la portada. La explicación comercial evita repetir mandato, alcance y autorización en cada bloque.
- Diagrama compartido por portada, agentes y Sis: personas, dos marcas con reglas propias y una función de agente compartida. Todo se identifica por texto además de color. Es una organización ilustrativa, sin clientes ni resultados inventados.
- Resultado del configurador: esquema y conversación en dos columnas en escritorio. En móvil se alternan con botones Esquema / Conversación; cambiar de vista o de tamaño conserva los mensajes y borradores. Los detalles del puesto y el modo de trabajo se despliegan bajo el esquema. Seleccionar un puesto abre sus responsabilidades.
- Contacto a petición del visitante. Se mantienen los dos permisos sin marcar y la vista previa local: contacto independiente del esquema, chat excluido del contexto compartido. Borrar limpia datos y permisos y conserva el foco dentro del formulario visible. Regenerar el esquema reinicia la conversación y la solicitud.
- Planes: recorrido de incorporación y contenido de una propuesta. Sin precios, cuotas, plazos ni condiciones inventadas.
- Demostraciones: acceso al prototipo identificado y criterios para revisar un caso real: objetivo, información, acciones y resultado comprobable. No hay todavía una demostración pública conectada ni se presenta el configurador como evidencia de ejecución.

## Comprobaciones de esta pasada

- **PASS:** build estática de Astro, 23 páginas; sin dependencias nuevas.
- **PASS:** 36 vistas en Chromium a 1440, 768, 390 y 320 px; portada, planes, demostraciones, agentes, Sis y configurador, incluidos resultado, conversación y solicitud. Sin desbordamiento horizontal, errores JavaScript, solicitudes externas ni POST durante la revisión con «Solo necesarias».
- **PASS:** 39 comprobaciones de interacción y cambio de tamaño; 36 ejecuciones axe-core 4.14.0, WCAG A/AA 2.0/2.1/2.2, sin infracciones detectadas. Las comprobaciones incompletas están registradas; no equivale a certificación de accesibilidad.
- **PASS:** revisión adicional de captación: 8 vistas, 34 comprobaciones y 2 ejecuciones axe. El esquema solo entra en la solicitud con el segundo permiso; el chat nunca se incluye. No se guardan los datos en localStorage/sessionStorage ni se envían a un servidor.
- **PASS:** 32 combinaciones de escenario y tamaño en escritorio/móvil; seis comprobaciones adicionales de teclado, reflow al 200 % y alternativa sin JavaScript.
- Evidencias: [navegador](browser-review.json), [permisos](lead-review.json), [matriz, teclado, zoom y sin JS](extra-review.json).

## Capturas

| Vista | 1440 px | 390 px |
| --- | --- | --- |
| Portada | [Escritorio](captures/home-1440.png) | [Móvil](captures/home-390.png) |
| Esquema y conversación | [Escritorio](captures/workspace-1440.png) | [Móvil, esquema](captures/workspace-390.png) |
| Conversación | [Escritorio](captures/conversation-1440.png) | [Móvil](captures/conversation-390.png) |
| Planes e incorporación | [Escritorio](captures/plans-1440.png) | [Móvil](captures/plans-390.png) |
| Demostraciones | [Escritorio](captures/demo-1440.png) | [Móvil](captures/demo-390.png) |
| Permisos de contacto | [Escritorio](captures/form-1440.png) | [Móvil](captures/form-390.png) |
| Solicitud con esquema | [Escritorio](captures/preview-1440.png) | [Móvil](captures/preview-390.png) |

## Lectura visual y límites

La portada mantiene la dirección A y gana concreción: el diagrama muestra relaciones reconocibles y el recorrido lleva antes al configurador. El espacio de trabajo permite consultar el esquema mientras se conversa. En móvil hay una acción adicional para cambiar de vista, a cambio de reducir el desplazamiento; ambos botones son controles nativos accesibles por teclado. Los detalles plegados reducen altura, pero requieren explorar los puestos para ver su contenido completo.

Siguen pendientes el endpoint real de Sis, la captación con backend y una prueba pública de trabajo ejecutado. La representación local no acredita esas funciones. También siguen pendientes las aprobaciones editorial, comercial y legal anteriores. No se inspeccionó Netlify, no se modificaron Core ni nutria_system y no se hizo merge ni despliegue manual.

## Abrir localmente

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run build
ASTRO_TELEMETRY_DISABLED=1 npm run preview -- --host 127.0.0.1 --port 4322
```

Abrir `/`, `/tu-organizacion/`, `/planes/` y `/demo/` en la dirección que imprima Astro. Detener ese preview con `npm run preview -- stop`. La revisión utilizó `http://127.0.0.1:4322`; no se deja un servidor adicional en ejecución.
