# Nutria usando Nutria · Captación opcional

## Intención

La web debe demostrar a Nutria usando sus propios agentes para presentar y vender el producto. El esquema es un artefacto y Sis será el agente real del chat; actualmente sigue siendo un prototipo sin endpoint. Se añade el diseño de captación solicitado, separado del chat y sin convertir sus mensajes en datos comerciales guardados.

## Dos permisos

1. «Autorizo al equipo de Nutria a contactarme por correo para valorar la incorporación de Nutria a mi empresa.»
2. «Autorizo al equipo de Nutria a guardar y utilizar mi esquema y las necesidades que he indicado para preparar esa conversación.»

Ambos sin marcar. El primero solo se requiere al pedir contacto, no para explorar. El segundo es opcional y solo tiene sentido si existe permiso de contacto; al retirar el primero se desmarca y deshabilita el segundo. No se añade autorización para newsletter o usos distintos.

Correo necesario para pedir contacto; nombre y empresa opcionales. Se puede previsualizar qué se compartiría y borrar datos y permisos. Cualquier cambio invalida el resumen anterior. Regenerar el artefacto reinicia la solicitud, evitando reutilizar permisos de un esquema anterior.

- Solo contacto: correo, nombre/empresa aportados y elección de permisos. No incluye tipo/tamaño, objetivos, puestos, esquema ni necesidades del configurador.
- Contacto + esquema: añade el esquema propuesto, puestos, modo de autonomía y necesidades indicadas.
- Ninguna opción incluye los mensajes del chat. El permiso de reutilizar el esquema no se extiende al historial de conversación.

Se retira la salida anterior por correo que adjuntaba automáticamente el resumen del esquema: ahora esa elección se representa explícitamente en el formulario.

## Estado de implementación

**Maqueta local**, con CTA «Previsualizar solicitud». No hay POST, API, base de datos, CRM ni persistencia en localStorage/sessionStorage. La confirmación nunca dice «guardado» o «solicitud recibida». El formulario se deshabilita hasta que se conectan sus manejadores; sin JavaScript el configurador permanece oculto y existen enlaces alternativos.

La información de privacidad se ajusta al funcionamiento de la maqueta. El titular debe cerrar la información real de tratamiento y conservación antes de activar captación efectiva. No se inventa un plazo ni se afirma cumplimiento legal validado.

## Guardado real: siguiente integración, no implementada

Al disponer del endpoint público autorizado, guardar la solicitud únicamente tras una confirmación real del servidor. El registro de contacto necesitará la finalidad y las elecciones expresas, el texto/versionado aceptado y la fecha del registro. El esquema deberá ser una versión concreta consentida, no un enlace mutable que pueda incorporar más información después.

Sin el segundo permiso, el endpoint no debe almacenar el esquema, su referencia, las necesidades ni asociarlos indirectamente al contacto para recuperarlos después. Ese límite se debe verificar en el servidor, no solo ocultar en el resumen visual. La conversación con Sis y el almacenamiento de leads tienen propósitos distintos; esta maqueta no decide ni implementa la política de almacenamiento de un futuro chat real.

Pendientes: destino de almacenamiento, acceso del equipo comercial, responsable y conservación efectivos, retirada/supresión y contrato del endpoint. No se modifica Core, plugins, nutria_system ni licenciamiento.

## Referencia para el diseño

[AEPD: consentimiento con acción afirmativa](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/5-bases-legitimadoras-del-tratamiento/FAQ-0211-segun-el-rgpd-como-debe-solicitarse-el-consentimiento-de-los-interesados-para-tratar-sus-datos-personales) y [AEPD: evitar cláusulas genéricas de aceptación de privacidad](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/6-el-deber-de-informacion/FAQ-0248-sobre-si-el-usuario-tiene-que-dar-consentimiento-a-clausula-de-privacidad). Se usan para orientar la interacción; no sustituyen la revisión del tratamiento real.

## Validación

Build estática. `browser-review.json`: 8 vistas (captación y privacidad a 1440, 390, 320 y 768 px), 34 comprobaciones y 2 ejecuciones axe, sin fallos/infracciones detectados. Se verifica contacto sin esquema, inclusión solo con permiso expreso, retirada, invalidación del resumen, borrado, escape de texto, exclusión del chat y ausencia de POST/persistencia/peticiones externas con «Solo necesarias». Capturas en `captures/`.

La revisión es focalizada; no se repite toda la aceptación del resto de la web. Sin merge ni despliegue manual a producción. Ruta de revisión: `/tu-organizacion/`, al final del esquema y el chat.
