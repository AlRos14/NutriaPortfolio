export const navigation = [
  { href: '/agentes/', label: 'Agentes' },
  { href: '/casos-de-uso/', label: 'Trabajo delegado' },
  { href: '/planes/', label: 'Planes' },
];

export const roles = [
  { id: 'administracion', name: 'Administración', description: 'Organizar información y dar seguimiento al trabajo operativo.', tools: 'Documentación y correo habilitados.', boundary: 'Las decisiones y cambios fuera de su alcance se consultan.' },
  { id: 'atencion', name: 'Atención al cliente', description: 'Atender consultas con las fuentes y herramientas autorizadas.', tools: 'Catálogo y fuentes de atención configuradas.', boundary: 'Las situaciones que requieren una decisión humana se escalan.' },
  { id: 'analisis', name: 'Análisis de datos', description: 'Investigar preguntas y preparar análisis con fuentes accesibles.', tools: 'Datos autorizados y herramientas disponibles.', boundary: 'Una estimación no se presenta como un hecho comprobado.' },
  { id: 'marketing', name: 'Marketing', description: 'Preparar contenido y apoyar el trabajo del equipo.', tools: 'Fuentes y herramientas del rol.', boundary: 'Publicar requiere autorización y una capacidad habilitada.' },
];

export const workExamples = [
  { id: 'informacion', title: 'Poner la información en orden', description: 'Reunir documentación accesible, preparar un resumen y señalar qué falta para tomar una decisión.', role: 'Administración', objective: 'Revisa la documentación autorizada y prepara un resumen con los asuntos pendientes.', human: 'Aportar documentos que falten y decidir sobre los asuntos que lo requieran.', requirements: 'Fuentes documentales accesibles y permisos de consulta.' },
  { id: 'seguimiento', title: 'Dar seguimiento al trabajo', description: 'Apoyar la revisión de asuntos abiertos y preparar información para que el equipo pueda actuar.', role: 'Administración', objective: 'Revisa estos asuntos y prepara una relación de próximos pasos con la información disponible.', human: 'Definir prioridades y autorizar actuaciones fuera del alcance acordado.', requirements: 'Información de trabajo habilitada y capacidades de seguimiento configuradas.' },
  { id: 'atencion', title: 'Atender consultas de clientes', description: 'Utilizar las fuentes y herramientas de atención para responder dentro de un alcance definido.', role: 'Atención al cliente', objective: 'Atiende consultas sobre los productos con las fuentes autorizadas y escala las excepciones.', human: 'Resolver decisiones o excepciones que no se han delegado.', requirements: 'Catálogo, fuentes de atención y canal configurados.' },
  { id: 'analisis', title: 'Preparar información para decidir', description: 'Investigar una pregunta con los datos accesibles, distinguir hechos y estimaciones y explicar las limitaciones.', role: 'Análisis de datos', objective: 'Analiza esta pregunta con los datos autorizados e indica qué conclusiones se pueden sostener.', human: 'Decidir cómo utilizar el análisis y aportar información que no esté disponible.', requirements: 'Datos accesibles y herramientas de análisis adecuadas.' },
  { id: 'contenido', title: 'Preparar contenido con contexto', description: 'Trabajar sobre un encargo de contenido con fuentes y criterios del equipo, respetando los permisos de publicación.', role: 'Marketing', objective: 'Prepara un borrador a partir de estas fuentes y los criterios de la marca.', human: 'Resolver decisiones editoriales no delegadas. Publicar solo con capacidad y autorización.', requirements: 'Fuentes de marca y herramientas del rol habilitadas.' },
];

export const channels = [
  { name: 'Telegram', detail: 'La experiencia principal para hablar con los agentes dentro de la empresa.', status: 'Comunicación interna' },
  { name: 'WhatsApp', detail: 'Configurable mediante plugin. El alcance se revisa para cada implantación.', status: 'Mediante plugin' },
  { name: 'Correo', detail: 'Capacidades de correo mediante plugin y configuración.', status: 'Mediante plugin' },
  { name: 'Slack', detail: 'Notificaciones para mantener informado al equipo.', status: 'Notificaciones' },
];

export const commercialOptions = [
  { id: 'internos', label: 'Trabajo interno', title: 'Agentes internos', description: 'Revisemos el rol, las herramientas y el trabajo que necesitas delegar dentro de tu organización.' },
  { id: 'clientes', label: 'Relación con clientes', title: 'Atención al cliente', description: 'Definamos qué consultas, fuentes y acciones necesita tu atención al cliente.' },
  { id: 'organizacion', label: 'Varios roles y equipos', title: 'Organización a medida', description: 'Acordemos responsabilidades y alcance para reforzar distintas áreas de la empresa.' },
];
