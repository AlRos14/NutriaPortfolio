# Sis incrustado · Conversación libre sobre el artefacto

## Aclaración del usuario

Sis se incrustará en la microapp. Generará el esquema y, una vez terminado, quedará disponible una conversación abierta sobre ese artefacto, Nutria y la posible incorporación del servicio. No es una FAQ ni un recorrido de tres respuestas comerciales. El humano conserva la opción de configurar la organización manualmente en el panel.

## Prototipo actualizado

- Se retiran los botones de orientación y las respuestas prefijadas del último paso.
- Chat con texto libre y referencia visible al esquema, al puesto seleccionado y al modo de autonomía. La referencia cambia al explorar otro puesto o modo.
- La maqueta permite añadir preguntas propias a la vista previa. Solo aparecen mensajes escritos por el visitante: **no se simulan respuestas de Sis ni se indica que los mensajes se hayan entregado**.
- Estado visible «Prototipo · Sin conexión», botón «Probar mensaje» y confirmación de que el mensaje no se envía. Sin endpoint, modelos, backend o persistencia. Reiniciar o regenerar el esquema limpia esta conversación local.
- El contacto por correo continúa como salida opcional, separada del chat. No se exporta automáticamente el contenido de la conversación.

## Conexión real pendiente

Sigue vigente la confirmación del usuario de que no existe endpoint público. La integración deberá entregar a Sis el artefacto estructurado vigente y la conversación del visitante. Sis interpretará las preguntas abiertas y podrá orientar sobre el artefacto, el producto y la propuesta comercial, con fuentes públicas/comerciales autorizadas. El renderer representará el esquema y las respuestas; no clasificará intenciones con botones o heurísticas. No se ha implementado ese transporte ni se ha cambiado la autoridad de Sis, Core o nutria_system.

## Revisión

**PASS:** build estática; 12 vistas, 19 comprobaciones de interacción y 4 ejecuciones axe sin fallos/infracciones automáticas detectados. Revisión focalizada de `/tu-organizacion/` en Chromium: primer paso, necesidad y resultado a 1440, 390, 320 y 768 px. Texto libre, contexto de puesto/autonomía, reinicio, límites de maqueta y escape de HTML. Axe en chat vacío y con mensaje. Capturas en `captures/` y datos en `browser-review.json`.

Los checkpoints anteriores se conservan; sus botones de orientación ya no representan el flujo vigente. No se ha repetido toda la revisión del blog ni del resto de la web porque no cambian en este ajuste. Sin merge ni despliegue manual a producción.
