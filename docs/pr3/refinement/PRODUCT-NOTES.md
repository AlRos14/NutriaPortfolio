# Pulido · Empresa, Sis y exploración interactiva

## Decisión del usuario

Se amplía la narrativa de puestos básicos a funciones, coordinación y áreas nuevas. Sis debe tener presencia visible y servir de base para una futura experiencia comercial interactiva. El usuario confirma que **no existe endpoint público**: autoriza un prototipo visual, y la integración con Nutria real se verá después. Se conserva la dirección A y PR3 en borrador; sin merge ni publicación manual.

## Evidencia consultada (solo lectura, 14/10/2026)

- ChatBotNutralia `26c159e1`, árbol limpio: `docs/SHARED_CONTEXT_DOCS.md`, `docs/AGENT_WORLD_GRAPH.md` y `src/personas/context_docs.py:469`: documentos `always`, por dominio y bajo demanda; referencias a agentes por identidad, marca y audiencia. Un documento da contexto y reglas de negocio, no permisos. Se inspeccionan pruebas existentes; no se ejecuta aceptación funcional de Core.
- `docs/personas/MEMORY.md` y módulos de memoria: diarios y registros duraderos con consulta explícita, vigencia y procedencia. Se comunica memoria/continuidad configurables, sin prometer recuerdo perfecto ni contexto ilimitado.
- `docs/ORGANIZATION_SCHEMA.md`, `src/personas/organization_loader.py:75` y `:118`: equipos, roles, marcas, autonomía organizativa y supervisión humana. **No se acredita una jerarquía genérica de rangos agente→agente:** `supervisor`/`reports_to` se refieren a humanos. Los puestos de coordinación y los esquemas de especialistas son diseños ilustrativos; Sis sí tiene contrato específico de orquestación. No se confunde un título con autoridad técnica.
- nutria_system `22fe195`, árbol limpio: `docs/SIS_AUTHORITY.md` y `src/database/services/company_agent_service.py:575`, contrato v2; Sis es central, con configuración protegida y contexto empresarial separado. El alcance sobre trabajadores/equipos/marcas lo resuelve la autoridad, no un documento de la empresa. No se publica configuración, IDs ni datos operativos de clientes.
- `src/notifications/dispatcher.py:80` en Core: Slack por notificaciones. Se elimina la jerarquía comercial «Telegram principal» y se agrupan las integraciones, conservando sus diferencias funcionales.
- El usuario aporta como estado de producto: documentos desde panel; correo individual aún no implementado; Drive en desarrollo. Se indican explícitamente como flujo actual declarado y funcionalidades pendientes, respectivamente. No se da una fecha de disponibilidad ni se simula su aceptación.

## Contenido

- Identidad = puesto, nombre y responsabilidad; no se presenta el correo individual como disponible. Contexto empresarial y memoria se explican por separado.
- Incorporación como a cualquier integrante: función, procedimientos, reglas por marca, mandato y continuidad. Las reglas pueden acompañar permanentemente al agente elegible; no se afirma que cualquier documento completo se copie siempre en cualquier conversación.
- Ejemplos: responsable de ecommerce, inteligencia competitiva, coordinación operativa, atención por marca y nueva área. La operación de una plataforma completa requiere implantación y aceptación específica; no hay garantía de anticipar siempre a la competencia.
- Canales: Telegram, WhatsApp (plugin), Slack (notificaciones), correo (plugin). Teams, llamadas y correo individual pendientes; Drive en desarrollo. Sin afirmar experiencia uniforme.
- **No se incluye comparativa de coste humano frente a agente:** no hay precio aprobado ni equivalencia de rendimiento demostrada; el encargo inicial excluye vender reemplazo de empleo. Una futura comparación puede medir el coste de sostener una función con costes y resultados reales, sin equiparar personas con licencias ni inventar ahorro.

## Prototipo `/tu-organizacion/`

Tres pasos: empresa/tamaño → necesidad/texto opcional → estructura explorable. Cuatro escenarios editoriales; dos o tres puestos ilustrativos según tamaño, Sis y decisión empresarial. El tipo de empresa adapta el nombre del puesto operativo. Se explica que la dimensión no prescribe una dotación ni un «must» universal.

Seleccionar un puesto muestra objetivo, trabajo, documentos, herramientas y decisiones reservadas. El modo de autonomía modifica la explicación del esquema; no concede permisos. La nota libre se copia como contexto del visitante, **no se interpreta con heurísticas ni IA**. Puede preparar una consulta por correo con un resumen sin enviarla. Sin red, persistencia, claves, llamadas a modelos o aprovisionamiento de agentes. Los enlaces normales de analítica siguen sujetos al consentimiento general de la web.

No hay chat ficticio, avatar de robot, burbuja de «Sis está pensando» ni respuestas atribuidas al Sis real. La etiqueta de prototipo es visible antes y después de interactuar. Sin JavaScript se ofrecen escenarios y contacto.

## Conectar Sis más adelante (fuera de esta revisión)

Reutilizar un recorrido público autorizado y aislado, con audiencia de visitante, acceso solo a catálogo/contexto comercial público, límites de uso y sin acceso a empresas existentes. No exponer credenciales administrativas ni convertir los endpoints autenticados actuales en acceso anónimo. Acordar contrato de entrada/salida y estados de error antes de desarrollar el adaptador. La propuesta de organización será de Sis; el renderer solo comprobará la estructura y representará su resultado. Cualquier contratación o alta real sería una acción posterior autorizada.
