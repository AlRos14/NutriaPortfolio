export const navigation = [
  { href: '/agentes/', label: 'Agentes' },
  { href: '/casos-de-uso/', label: 'Casos de uso' },
  { href: '/tu-organizacion/', label: 'Tu organización' },
  { href: '/planes/', label: 'Planes' },
  { href: '/blog/', label: 'Blog' },
];

export const roles = [
  { id: 'ecommerce', name: 'Responsable de ecommerce', description: 'Asumir la operación de una tienda: catálogo, información comercial y coordinación del trabajo de otros agentes.', tools: 'Plataforma ecommerce y herramientas del área configuradas.', boundary: 'Los cambios comerciales se rigen por la autoridad y las reglas acordadas.' },
  { id: 'inteligencia', name: 'Inteligencia competitiva', description: 'Seguir movimientos del mercado, contrastar fuentes y convertir señales en propuestas para tu negocio.', tools: 'Fuentes públicas y datos empresariales autorizados.', boundary: 'Distingue señales de conclusiones; no promete anticipar siempre al mercado.' },
  { id: 'operaciones', name: 'Coordinación de operaciones', description: 'Organizar una función de principio a fin, repartir trabajo y dar seguimiento a objetivos y dependencias.', tools: 'Fuentes de trabajo, comunicación y capacidades de coordinación.', boundary: 'Coordinar no concede autoridad ilimitada sobre otros puestos o sistemas.' },
  { id: 'atencion', name: 'Atención al cliente por marca', description: 'Resolver consultas aplicando las políticas, los procedimientos y el tono propios de cada marca.', tools: 'Catálogo, documentación de empresa y canales habilitados.', boundary: 'Las excepciones fuera de la política se derivan al responsable adecuado.' },
  { id: 'desarrollo', name: 'Desarrollo de una nueva área', description: 'Dar forma a una función que tu empresa aún no tiene: investigación, proveedores o desarrollo de negocio.', tools: 'Objetivos, documentación y herramientas específicas del área.', boundary: 'El puesto y las acciones disponibles se definen para cada implantación.' },
  { id: 'crecimiento', name: 'Contenido y crecimiento', description: 'Sostener un plan de contenidos y campañas con el contexto comercial y los criterios de tu empresa.', tools: 'Fuentes de marca y herramientas de creación y publicación habilitadas.', boundary: 'Ejecuta dentro del presupuesto y los permisos expresamente acordados.' },
];

export const workExamples = [
  { id: 'ecommerce', title: 'Poner un ecommerce a cargo de un agente', description: 'Un responsable que sostiene la operación de la plataforma y coordina especialistas de catálogo, atención y contenido. Un área con objetivos, no una sucesión de encargos sueltos.', role: 'Responsable de ecommerce', objective: 'Hazte cargo de la operación de la tienda dentro de estas políticas. Mantén el catálogo, coordina la atención y detecta lo que impide cumplir los objetivos.', human: 'Decidir la estrategia y los cambios fuera del mandato: por ejemplo, modificar la política de márgenes o comprometer un gasto no autorizado.', requirements: 'Plataforma e integraciones compatibles, reglas comerciales, objetivos y permisos de actuación. La operación completa se valida sobre la plataforma y el alcance concretos.' },
  { id: 'competencia', title: 'Crear un área de inteligencia competitiva', description: 'Seguir competidores y mercado como una responsabilidad continua. Detectar cambios relevantes, contrastarlos y proponer cómo responder con los datos disponibles.', role: 'Inteligencia competitiva', objective: 'Sigue estas fuentes y competidores. Contrasta los cambios de oferta, posicionamiento y producto, y plantea oportunidades que encajen con nuestra estrategia.', human: 'Elegir la estrategia y autorizar las respuestas comerciales que excedan el alcance del agente.', requirements: 'Fuentes accesibles, competidores definidos, criterios de relevancia y frecuencia acordada. No se garantiza detectar todos los cambios ni adelantarse siempre.' },
  { id: 'marcas', title: 'Atender cada marca con sus propias reglas', description: 'El mismo puesto puede trabajar con procedimientos distintos según la marca: qué responder, qué resolver y cuándo consultar. Ese conocimiento forma parte del contexto del trabajo.', role: 'Atención al cliente', objective: 'Atiende las consultas aplicando la documentación de la marca correspondiente. Resuelve lo autorizado y deriva las excepciones al responsable indicado.', human: 'Mantener las políticas de negocio y resolver casos que requieren una decisión no delegada.', requirements: 'Documentación por marca, catálogo, canales y herramientas de atención configuradas. Los documentos orientan el trabajo; los permisos delimitan las acciones.' },
  { id: 'nueva-area', title: 'Abrir una función que hoy no puedes atender', description: 'Tu empresa puede necesitar seguimiento de proveedores, investigación de mercados o desarrollo de negocio sin tener aún un equipo dedicado. Diseña el área y los puestos que la sostienen.', role: 'Nueva área de empresa', objective: 'Pon en marcha esta función con los objetivos, procedimientos y recursos acordados. Organiza el trabajo, mantén su continuidad e informa de resultados y bloqueos.', human: 'Definir el mandato del área y decidir sobre compromisos o recursos que no estén autorizados.', requirements: 'Un alcance implantable, fuentes, herramientas y responsables definidos. La estructura y la coordinación se acuerdan y verifican antes de operar.' },
];

export const channels = [
  { name: 'Telegram', detail: 'Conversaciones con agentes y equipos en los espacios configurados.', status: 'Integración' },
  { name: 'WhatsApp', detail: 'Comunicación mediante plugin, con el alcance de cada implantación.', status: 'Mediante plugin' },
  { name: 'Slack', detail: 'Avisos y notificaciones para tu equipo. No se presenta como chat completo.', status: 'Notificaciones' },
  { name: 'Correo', detail: 'Herramientas de correo mediante plugin. La identidad con buzón individual está en desarrollo.', status: 'Plugin · identidad en desarrollo' },
];

export const commercialOptions = [
  { id: 'internos', label: 'Trabajo interno', title: 'Agentes internos', description: 'Revisemos el rol, las herramientas y el trabajo que necesitas delegar dentro de tu organización.' },
  { id: 'clientes', label: 'Relación con clientes', title: 'Atención al cliente', description: 'Definamos qué consultas, fuentes y acciones necesita tu atención al cliente.' },
  { id: 'organizacion', label: 'Varios roles y equipos', title: 'Organización a medida', description: 'Acordemos responsabilidades y alcance para reforzar distintas áreas de la empresa.' },
];
