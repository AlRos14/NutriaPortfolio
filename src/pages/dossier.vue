<template>
  <div>
    <!-- Hero Section -->
    <section class="relative text-white py-20 overflow-hidden" style="background: linear-gradient(135deg, #307eb1 0%, #4a9fd4 50%, #2c5f8d 100%);">
      <div class="container mx-auto text-center relative z-10 px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Logo con fondo blanco -->
          <div class="mb-8">
            <div class="inline-block bg-white rounded-full p-6 shadow-xl">
              <img src="@/assets/logos/nutria-logo.png" alt="Nutria Logo" class="w-20 h-20" />
            </div>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Nutria
          </h1>
          <p class="text-2xl md:text-3xl font-medium mb-8">
            Tu empleado digital para ecommerce
          </p>
          <p class="text-xl leading-relaxed max-w-4xl mx-auto">
            Un asistente conversacional con inteligencia artificial que transforma la experiencia de compra y gestión de atención al cliente. 
            Funciona como un <strong>empleado digital</strong>, capaz de interactuar con clientes, responder preguntas, gestionar pedidos y recomendar productos de manera autónoma.
          </p>
          
          <div class="mt-12 inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg shadow-xl">
            Aplicación de IA vanguardista para comercio electrónico
          </div>
        </div>
      </div>
    </section>

    <!-- Versión actual y futura -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Versión 1.0 -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                DISPONIBLE AHORA
              </div>
            </div>
            <h3 class="text-3xl font-bold mb-4 text-gray-900">Versión 1.0</h3>
            <h4 class="text-xl font-semibold mb-4 text-green-700">Modo Asesor de Productos</h4>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-3">
                <CheckIcon class="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Recomendaciones inteligentes de productos</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Respuestas basadas en catálogo y blog</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Cross-selling y up-selling automático</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Integración completa en tu web</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Panel de estadísticas y métricas</span>
              </li>
            </ul>
          </div>

          <!-- Versión 2.0 -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-300 relative overflow-hidden">
            <div class="absolute top-4 right-4">
              <div class="bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                PRÓXIMAMENTE
              </div>
            </div>
            <h3 class="text-3xl font-bold mb-4 text-gray-900">Versión 2.0</h3>
            <h4 class="text-xl font-semibold mb-4 text-purple-700">Empleado Autónomo Completo</h4>
            <p class="text-sm text-purple-600 font-semibold mb-4">Lanzamiento previsto: T1 2026</p>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-3">
                <StarIcon class="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <span>Atención al cliente completa y autónoma</span>
              </li>
              <li class="flex items-start gap-3">
                <StarIcon class="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <span>Gestión de pedidos y consultas de estado</span>
              </li>
              <li class="flex items-start gap-3">
                <StarIcon class="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <span>Multi-canal: Web, WhatsApp, Telegram, Email</span>
              </li>
              <li class="flex items-start gap-3">
                <StarIcon class="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <span>Integración avanzada con sistemas de negocio</span>
              </li>
              <li class="flex items-start gap-3">
                <StarIcon class="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <span>Tiempos de respuesta reducidos en ~50%</span>
              </li>
              <li class="flex items-start gap-3">
                <StarIcon class="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <span>Soporte dedicado y seguimiento continuo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Implantación y Personalización -->
    <section class="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Implantación y personalización
          </h2>
        </div>
        
        <div class="bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div class="text-center">
              <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CustomLightningIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-bold text-lg mb-2">Personalización completa</h4>
              <p class="text-gray-600">Adaptado a tu marca y productos</p>
            </div>
            
            <div class="text-center">
              <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <IntegrationIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-bold text-lg mb-2">Integración total</h4>
              <p class="text-gray-600">Conectado a tu ecommerce</p>
            </div>
            
            <div class="text-center">
              <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BrainIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-bold text-lg mb-2">Entrenamiento inicial</h4>
              <p class="text-gray-600">Con los datos de tu negocio</p>
            </div>
          </div>

          <div class="bg-green-50 border-2 border-green-300 rounded-xl p-6 text-center mb-6">
            <p class="text-xl font-bold text-green-800 mb-2">
              ✓ Todo incluido en el primer pago
            </p>
            <p class="text-green-700">
              Nutria estará lista para trabajar desde el primer día, <strong>sin costes adicionales por configuración</strong>.
            </p>
          </div>

          <!-- Información sobre plataformas -->
          <div class="bg-primary-50 border-2 border-primary-300 rounded-xl p-6">
            <h4 class="font-bold text-lg mb-3 text-primary-900">Servicio mediante plugin + panel de métricas</h4>
            <p class="text-gray-700 mb-4">
              Nutria se proporciona mediante un <strong>plugin</strong> para tu plataforma ecommerce, 
              una <strong>URL de acceso a métricas</strong> y las <strong>claves de activación</strong> para conectar todo el sistema.
            </p>
            
            <div class="bg-white rounded-lg p-4 border border-primary-200">
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span><strong>WooCommerce</strong> - Disponible ahora</span>
                </li>
                <li class="flex items-start gap-2">
                  <ClockIcon class="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <span><strong>Shopify, Magento, PrestaShop, etc.</strong> - En desarrollo</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-4 bg-yellow-50 border border-yellow-300 rounded-lg p-4">
              <p class="text-sm text-gray-700">
                <strong>¿Tu plataforma aún no está disponible?</strong> No es problema. Solicítala y la desarrollamos. 
                Solo pagas cuando esté lista e implementada en tu negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personalización Avanzada -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Personalización avanzada
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nutria se adapta completamente a las necesidades específicas de tu negocio
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Instrucciones personalizadas -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div class="bg-purple-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <BrainIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Instrucciones personalizadas</h3>
            <p class="text-gray-700 mb-4">
              Configura instrucciones específicas, novedades del negocio, avisos de retrasos, cupones activos o cualquier información relevante.
            </p>
            <p class="text-gray-700">
              Nutria estará siempre al tanto y responderá de forma coherente con la situación actual de tu negocio.
            </p>
          </div>

          <!-- Cross-selling inteligente -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div class="bg-green-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <TrendingUpIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Cross-selling estratégico</h3>
            <p class="text-gray-700 mb-4">
              Configura marcas o productos estratégicos para potenciar. Nutria los sugerirá de forma <strong>natural y poco descarada</strong>.
            </p>
            <p class="text-gray-700">
              Siempre prioriza el producto consultado pero aprovecha las explicaciones para sugerir más opciones relevantes.
            </p>
          </div>

          <!-- Integración con blog -->
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <BlogIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Blog con fuentes académicas</h3>
            <p class="text-gray-700 mb-4">
              La integración con el blog le da vida a Nutria. Si usas <strong>fuentes académicas o científicas</strong> en tus artículos, Nutria las utiliza y <strong>referencia en cada respuesta</strong>.
            </p>
            <p class="text-gray-700">
              Los clientes lo agradecen: ven que no es una simple respuesta generada, sino que tiene base científica/experta.
            </p>
          </div>

          <!-- Tono y personalidad -->
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div class="bg-orange-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <PaletteIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Tono y personalidad únicos</h3>
            <p class="text-gray-700 mb-4">
              Define el tono de comunicación: profesional, cercano, técnico, informal... Nutria adoptará la personalidad que mejor represente tu marca.
            </p>
            <p class="text-gray-700">
              Personalización completa de colores, logo, mensaje de bienvenida y estilo visual del chat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Planes de Suscripción -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Planes de suscripción
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Planes ajustados al tamaño y necesidades de cada negocio, con facturación mensual o anual
          </p>
        </div>

        <!-- Early Adopter Banner -->
        <div class="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white rounded-2xl p-6 mb-12 text-center shadow-xl">
          <h3 class="text-2xl font-bold mb-2">🎉 Oferta Early Adopter</h3>
          <p class="text-lg">
            <strong>30% de descuento</strong> durante los primeros 2 años + prioridad en nuevas funcionalidades
          </p>
        </div>

        <!-- Tabla de planes -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <!-- Plan BASIC -->
          <div class="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl">
            <div class="bg-gradient-to-r from-primary to-primary-600 text-white p-6 text-center">
              <h3 class="text-2xl font-bold mb-2">BASIC</h3>
              <div class="text-4xl font-bold mb-2">149 €</div>
              <div class="text-sm opacity-90">por mes</div>
              <div class="mt-4 text-lg">
                <span class="line-through opacity-75">1.788 €/año</span>
                <div class="font-bold text-xl">1.499 € al año</div>
              </div>
            </div>
            <div class="p-6">
              <div class="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4 text-center">
                <p class="font-bold text-yellow-800">Early Adopter: 104 €/mes</p>
              </div>
              <div class="mb-6 text-center">
                <p class="text-3xl font-bold text-primary">5.000</p>
                <p class="text-gray-600">conversaciones/mes</p>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Modo asesor de productos</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Integración inicial incluida</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Personalización completa</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Panel de estadísticas</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Plan PROFESSIONAL -->
          <div class="bg-white rounded-2xl shadow-xl border-4 border-primary overflow-hidden transform scale-105 relative">
            <div class="bg-gradient-to-r from-primary to-primary-600 text-white p-6 text-center">
              <h3 class="text-2xl font-bold mb-2">PROFESSIONAL</h3>
              <div class="text-4xl font-bold mb-2">299 €</div>
              <div class="text-sm opacity-90">por mes</div>
              <div class="mt-4 text-lg">
                <span class="line-through opacity-75">3.588 €/año</span>
                <div class="font-bold text-xl">2.999 € al año</div>
              </div>
            </div>
            <div class="p-6">
              <div class="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4 text-center">
                <p class="font-bold text-yellow-800">Early Adopter: 209 €/mes</p>
              </div>
              <div class="mb-6 text-center">
                <p class="text-3xl font-bold text-primary">20.000</p>
                <p class="text-gray-600">conversaciones/mes</p>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700"><strong>Todo lo de BASIC</strong></span>
                </li>
                <li class="flex items-start gap-2">
                  <StarIcon class="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Atención al cliente completa (v2.0)</span>
                </li>
                <li class="flex items-start gap-2">
                  <StarIcon class="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Multi-canal (Web, WhatsApp, Telegram, Email)</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Integración total</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Soporte prioritario</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Plan ENTERPRISE -->
          <div class="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 text-center">
              <h3 class="text-2xl font-bold mb-2">ENTERPRISE</h3>
              <div class="text-4xl font-bold mb-2">699 €</div>
              <div class="text-sm opacity-90">por mes</div>
              <div class="mt-4 text-lg">
                <span class="line-through opacity-75">8.388 €/año</span>
                <div class="font-bold text-xl">6.999 € al año</div>
              </div>
            </div>
            <div class="p-6">
              <div class="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4 text-center">
                <p class="font-bold text-yellow-800">Early Adopter: 489 €/mes</p>
              </div>
              <div class="mb-6 text-center">
                <p class="text-3xl font-bold text-primary">50.000</p>
                <p class="text-gray-600">conversaciones/mes</p>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700"><strong>Todo lo de PROFESSIONAL</strong></span>
                </li>
                <li class="flex items-start gap-2">
                  <StarIcon class="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Integración avanzada</span>
                </li>
                <li class="flex items-start gap-2">
                  <StarIcon class="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Soporte dedicado</span>
                </li>
                <li class="flex items-start gap-2">
                  <StarIcon class="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Seguimiento continuo</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span class="text-gray-700">Escalable para grandes negocios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center text-sm text-gray-600 mt-8">
          <p>Los límites de conversaciones son orientativos y pueden ajustarse según necesidades</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nutria en <span class="text-primary">acción</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo Nutria convierte dudas en ventas con respuestas expertas y personalizadas
          </p>
        </div>

        <!-- Conversaciones de ejemplo -->
        <div class="max-w-4xl mx-auto space-y-12">
          <!-- Ejemplo 1 - Interfaz real de Nutria -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <!-- Header del chat -->
            <div class="bg-white border-b border-gray-200 px-6 py-4">
              <div class="text-center">
                <h3 class="text-primary text-xl font-semibold mb-2">¿Tienes dudas sobre este producto?</h3>
                <p class="text-gray-600 text-sm">Pregunta a Nutria, nuestra experta en suplementos deportivos. Inteligencia artificial real</p>
              </div>
            </div>
            
            <!-- Área de chat -->
            <div class="p-6 bg-gray-50 min-h-[400px]">
              <!-- Preguntas sugeridas -->
              <div class="mb-6 space-y-3">
                <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-gray-700 text-sm hover:bg-gray-50 cursor-pointer transition-colors">
                  ¿Qué significa 200MESH?
                </div>
                <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-gray-700 text-sm hover:bg-gray-50 cursor-pointer transition-colors">
                  ¿Creapure o 200MESH?
                </div>
                <div class="bg-primary rounded-2xl p-4 text-white text-sm font-medium shadow-sm ml-12">
                  ¿Qué hace exactamente la creatina?
                </div>
              </div>

              <!-- Estado "pensando" -->
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <img src="@/assets/logos/nutria-logo.png" alt="Nutria" class="w-6 h-6 rounded-full" />
                </div>
                <div class="text-gray-500 text-sm">
                  <span>Pensando...</span>
                  <span class="inline-block animate-pulse">...</span>
                </div>
              </div>

              <!-- Respuesta de Nutria -->
              <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
                <div class="text-gray-800 text-sm leading-relaxed">
                  <p class="mb-4">
                    La creatina es un suplemento nutricional ampliamente estudiado y respaldado por la ciencia. Su principal función es aumentar los niveles de fosfocreatina en los músculos, lo que ayuda a mejorar el rendimiento físico en ejercicios de alta intensidad y corta duración.
                  </p>
                  <p class="mb-4">
                    Cuando consumes creatina, estás proporcionando a tus músculos una mayor cantidad de fosfocreatina, que es utilizada para recargar el ATP (adenosín trifosfato), la fuente de energía inmediata para los músculos. Esto te permite realizar ejercicios más intensos y durante más tiempo, lo que puede traducirse en mejoras en la fuerza, la potencia y la resistencia muscular.
                  </p>
                  <p class="mb-3">
                    <strong>Algunos de los beneficios específicos de la creatina incluyen:</strong>
                  </p>
                  <ul class="list-disc list-inside mb-4 space-y-1 text-gray-700">
                    <li>Mejora del rendimiento en ejercicios de alta intensidad</li>
                    <li>Aumento de la fuerza muscular</li>
                    <li>Mayor resistencia muscular</li>
                    <li>Posible mejora en la recuperación después del ejercicio</li>
                  </ul>
                  <p class="mb-4">
                    El producto que estás consultando, <strong>'Fire Nutrition - Creatine Pure Powder 200 MESH (300 g)'</strong>, es una creatina monohidratada de alta calidad, con una micronización de 200 mesh que asegura una buena absorción. Es una excelente opción si buscas mejorar tu rendimiento físico y aumentar tu fuerza muscular.
                  </p>
                  <p class="mb-4">
                    Si estás considerando agregar creatina a tu rutina de suplementación, te recomiendo seguir las instrucciones de uso indicadas en el producto. En el caso de 'Fire Nutrition - Creatine Pure Powder 200 MESH (300 g)', se recomienda tomar 3g al día, diluidos en 125ml de agua.
                  </p>
                  <p class="text-gray-600">
                    Recuerda que es importante consultar con un profesional de la salud antes de iniciar cualquier suplementación para asegurarte de que sea adecuada para tus necesidades individuales.
                  </p>
                </div>
              </div>

              <!-- Input de chat -->
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Escribe tu pregunta..." 
                  class="w-full border-2 border-primary-200 rounded-full px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary-400 transition-colors"
                />
                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <ArrowRightIcon class="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <!-- Métricas de impacto -->
            <div class="bg-green-50 border-t border-green-100 px-6 py-4">
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span class="text-green-800 font-medium">Consulta resuelta → Cliente informado</span>
                </div>
                <span class="text-green-600 font-semibold">Confianza +100%</span>
              </div>
            </div>
          </div>

          <!-- Ejemplo 2 - Conversación de cross-selling -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <!-- Header del chat -->
            <div class="bg-white border-b border-gray-200 px-6 py-4">
              <div class="text-center">
                <h3 class="text-primary text-xl font-semibold mb-2">¿Tienes dudas sobre este producto?</h3>
                <p class="text-gray-600 text-sm">Pregunta a nuestro asistente virtual experto. Inteligencia artificial real</p>
              </div>
            </div>
            
            <!-- Área de chat con cross-selling -->
            <div class="p-6 bg-gray-50 min-h-[400px]">
              <!-- Pregunta del cliente -->
              <div class="mb-4">
                <div class="bg-primary rounded-2xl p-4 text-white text-sm font-medium shadow-sm ml-12">
                  Busco unos auriculares inalámbricos para trabajar desde casa
                </div>
              </div>

              <!-- Respuesta con recomendación -->
              <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
                <div class="text-gray-800 text-sm leading-relaxed">
                  <p class="mb-3">
                    <strong>¡Excelente elección!</strong> Para trabajo desde casa te recomiendo nuestros <strong>Auriculares Sony WH-1000XM4</strong> - tienen cancelación de ruido activa y 30 horas de batería, perfectos para videollamadas y concentración.
                  </p>
                  <p class="mb-3">
                    💡 <strong>¿Sabías que puedes optimizar tu setup de trabajo?</strong>
                  </p>
                  <p class="mb-3">
                    Combínalo con un <strong>Micrófono USB profesional</strong> para mejor calidad de audio en reuniones y un <strong>Soporte ergonómico para laptop</strong> para cuidar tu postura. Muchos de nuestros clientes han mejorado significativamente su productividad con esta combinación.
                  </p>
                  <p class="mb-0">
                    🎁 <strong>Oferta especial:</strong> Pack Home Office Completo con 25% de descuento aplicando el código <strong>HOMEOFFICE25</strong> al finalizar tu compra.
                  </p>
                </div>
              </div>

              <!-- Input de chat -->
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Escribe tu pregunta..." 
                  class="w-full border-2 border-primary-200 rounded-full px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary-400 transition-colors"
                />
                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <ArrowRightIcon class="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <!-- Métricas de cross-selling -->
            <div class="bg-orange-50 border-t border-orange-100 px-6 py-4">
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <ShoppingCartIcon class="w-3 h-3 text-white" />
                  </div>
                  <span class="text-orange-800 font-medium">Cross-selling exitoso: 1 producto → 3 productos</span>
                </div>
                <span class="text-orange-600 font-semibold">+180% valor pedido</span>
              </div>
            </div>
          </div>

          <!-- Ejemplo 3 - GIF Demo -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <img src="@/assets/demo/sources_demo.gif" alt="Demo de Nutria" class="w-full h-auto" />
                <div class="p-6">
                    <h3 class="text-primary text-xl font-semibold mb-2">Nutria es capaz de consultar fuentes externas</h3>
                    <p class="text-gray-600 text-sm">Nutria interactúa con los clientes y responde a sus preguntas en tiempo real usando fuentes de calidad</p>
                </div>
            </div>

          <!-- Stats de impacto -->
            <div class="bg-gradient-to-r from-primary to-primary rounded-3xl p-8 text-white text-center">
            <h3 class="text-2xl font-bold mb-8">Impacto real en tu negocio</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div class="bg-white/10 rounded-2xl p-6">
                <div class="text-4xl font-bold text-yellow-300 mb-2">30%</div>
                <div class="text-primary-100">
                    En pruebas reales, Nutria alcanzó hasta un <strong>30 % de conversión</strong> en la primera semana, 
                    superando con creces la media del sector.*
                </div>
                </div>
                
                <div class="bg-white/10 rounded-2xl p-6">
                <div class="text-4xl font-bold text-yellow-300 mb-2">15%</div>
                <div class="text-primary-100">
                    De la facturación total proviene de conversaciones con Nutria*
                </div>
                </div>
                
                <div class="bg-white/10 rounded-2xl p-6">
                <div class="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <div class="text-primary-100">
                    Atiende a tus clientes a cualquier hora, cualquier día, 
                    manteniendo la calidad de respuesta sin esfuerzo.
                </div>
                </div>

            </div>
            <p class="mt-6 text-sm text-primary-100">
                *Datos obtenidos de Nutrivip. El modo asesor de productos ha correspondido al 15% de facturación durante varios meses desde su implementación. 
                La tasa de conversión se calculó considerando las sesiones de chat activas que finalizaron en compra. Los resultados pueden variar según el sector y la forma de implementación.
            </p>
            </div>

        </div>
      </div>
    </section>

    <!-- Tokens y Panel de Gestión -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Tokens y panel de gestión
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Control total y transparencia sobre el uso de Nutria
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- ¿Qué son los tokens? -->
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <InfoIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-center text-gray-900">¿Qué son los tokens?</h3>
            <p class="text-gray-700 mb-4">
              Cada conversación de Nutria utiliza <strong>tokens</strong>, que representan fragmentos de texto que Nutria procesa y genera en cada mensaje.
            </p>
            <div class="bg-white rounded-lg p-4 border-2 border-primary-300">
              <p class="text-sm font-semibold text-gray-800 mb-2">Ejemplo:</p>
              <p class="text-gray-700">
                Una conversación típica puede consumir <strong>5.000 tokens</strong>
              </p>
              <p class="text-sm text-gray-600 mt-2">
                (1.000 de entrada + 4.000 de salida)
              </p>
            </div>
          </div>

          <!-- Panel de gestión -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div class="bg-green-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ChartIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-center text-gray-900">Panel de gestión</h3>
            <p class="text-gray-700 mb-4">
              En el panel podrás ver en tiempo real:
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                <span class="text-gray-700">Número de conversaciones y tokens consumidos</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                <span class="text-gray-700">Ejemplo: <strong>674/5.000 conversaciones</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                <span class="text-gray-700">Coste acumulado por exceso (si aplica)</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckIcon class="w-5 h-5 text-green-600 shrink-0 mt-1" />
                <span class="text-gray-700">Opción de deshabilitar uso adicional</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Control de costes -->
        <div class="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-4 text-center text-gray-900">Control total de costes</h3>
          <p class="text-center text-gray-700 mb-6">
            Cuando se superan las conversaciones incluidas en tu plan, los tokens adicionales se cobran automáticamente según el precio establecido. 
            <strong>Puedes deshabilitar el uso adicional</strong> para evitar costes imprevistos.
          </p>
        </div>
      </div>
    </section>

    <!-- Política de uso justo -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Política de uso justo
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nutria no corta el servicio por exceso de uso. Para garantizar sostenibilidad, aplicamos un coste adicional solo en casos de uso masivo o automatizado.
          </p>
        </div>

        <!-- Tabla de precios por exceso - Desktop -->
        <div class="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-primary text-white">
                  <th class="p-4 text-left">Nivel de uso</th>
                  <th class="p-4 text-left">Tokens extra</th>
                  <th class="p-4 text-left">Precio / 1.000 tokens</th>
                  <th class="p-4 text-left">Ejemplo (~5.000 tokens/conversación)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200">
                  <td class="p-4 font-semibold text-green-700">Uso normal</td>
                  <td class="p-4 text-gray-700">Hasta límite del plan</td>
                  <td class="p-4 text-green-700 font-bold">Gratis</td>
                  <td class="p-4 text-gray-700">—</td>
                </tr>
                <tr class="border-b border-gray-200 bg-yellow-50">
                  <td class="p-4 font-semibold text-yellow-700">Exceso moderado</td>
                  <td class="p-4 text-gray-700">Hasta +100% del límite del plan (x2)</td>
                  <td class="p-4 text-yellow-700 font-bold">0,01 €</td>
                  <td class="p-4 text-gray-700">0,05 € por conversación</td>
                </tr>
                <tr class="bg-orange-50">
                  <td class="p-4 font-semibold text-orange-700">Uso masivo</td>
                  <td class="p-4 text-gray-700">Más del +100% adicional</td>
                  <td class="p-4 text-orange-700 font-bold">0,10 €</td>
                  <td class="p-4 text-gray-700">0,50 € por conversación</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Cards de precios por exceso - Mobile -->
        <div class="md:hidden space-y-4">
          <!-- Uso normal -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-green-700">Uso normal</h3>
              <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Gratis</span>
            </div>
            <div class="space-y-3 text-sm">
              <div>
                <p class="text-gray-500 mb-1">Tokens extra:</p>
                <p class="text-gray-800 font-medium">Hasta límite del plan</p>
              </div>
              <div>
                <p class="text-gray-500 mb-1">Precio / 1.000 tokens:</p>
                <p class="text-green-700 font-bold text-lg">Gratis</p>
              </div>
              <div>
                <p class="text-gray-500 mb-1">Ejemplo (~5.000 tokens/conversación):</p>
                <p class="text-gray-800 font-medium">—</p>
              </div>
            </div>
          </div>

          <!-- Exceso moderado -->
          <div class="bg-yellow-50 rounded-2xl shadow-lg border-2 border-yellow-300 p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-yellow-700">Exceso moderado</h3>
              <span class="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">0,01 €</span>
            </div>
            <div class="space-y-3 text-sm">
              <div>
                <p class="text-gray-600 mb-1">Tokens extra:</p>
                <p class="text-gray-800 font-medium">Hasta +100% del límite del plan (x2)</p>
              </div>
              <div>
                <p class="text-gray-600 mb-1">Precio / 1.000 tokens:</p>
                <p class="text-yellow-700 font-bold text-lg">0,01 €</p>
              </div>
              <div>
                <p class="text-gray-600 mb-1">Ejemplo (~5.000 tokens/conversación):</p>
                <p class="text-gray-800 font-medium">0,05 € por conversación</p>
              </div>
            </div>
          </div>

          <!-- Uso masivo -->
          <div class="bg-orange-50 rounded-2xl shadow-lg border-2 border-orange-300 p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-orange-700">Uso masivo</h3>
              <span class="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">0,10 €</span>
            </div>
            <div class="space-y-3 text-sm">
              <div>
                <p class="text-gray-600 mb-1">Tokens extra:</p>
                <p class="text-gray-800 font-medium">Más del +100% adicional</p>
              </div>
              <div>
                <p class="text-gray-600 mb-1">Precio / 1.000 tokens:</p>
                <p class="text-orange-700 font-bold text-lg">0,10 €</p>
              </div>
              <div>
                <p class="text-gray-600 mb-1">Ejemplo (~5.000 tokens/conversación):</p>
                <p class="text-gray-800 font-medium">0,50 € por conversación</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 bg-green-50 border-2 border-green-300 rounded-xl p-6 text-center">
          <p class="text-lg text-green-800">
            <strong>Resultado:</strong> Nutria sigue siendo "sin límites" para clientes normales, mientras se cubren costes en casos de uso intensivo.
          </p>
        </div>
      </div>
    </section>

    <!-- Beneficios Clave -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Beneficios clave
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Por qué Nutria es más que un simple chatbot
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Disponibilidad 24/7 -->
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ClockIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Disponibilidad 24/7</h3>
            <p class="text-gray-700 text-center">
              Nutria nunca descansa ni pide vacaciones. Siempre disponible para tus clientes.
            </p>
          </div>

          <!-- Empleado Digital -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div class="bg-purple-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <UserIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Empleado digital</h3>
            <p class="text-gray-700 text-center">
              Sustituye parcialmente personal de atención al cliente, gestionando consultas, pedidos y canales de comunicación.
            </p>
          </div>

          <!-- Adaptación completa -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div class="bg-green-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <BrainAIIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Adaptación completa</h3>
            <p class="text-gray-700 text-center">
              Conoce tus productos, procesos y políticas como un empleado experimentado.
            </p>
          </div>

          <!-- RGPD -->
          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div class="bg-red-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <SecurityIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Cumplimiento RGPD</h3>
            <p class="text-gray-700 text-center">
              La información del cliente no se almacena de forma permanente. Privacidad garantizada.
            </p>
          </div>

          <!-- Multi-canal -->
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div class="bg-orange-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ChatIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Integración multicanal</h3>
            <p class="text-gray-700 text-center">
              Web, email, WhatsApp y Telegram. Atiende a tus clientes donde estén.
            </p>
          </div>

          <!-- Escalable -->
          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div class="bg-indigo-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <TrendingUpIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-900">Escalable y flexible</h3>
            <p class="text-gray-700 text-center">
              Funciona con cualquier volumen de clientes y canales. Crece con tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ventaja Competitiva -->
    <section class="py-16 bg-gradient-to-br from-primary to-indigo-700 text-white">
      <div class="container mx-auto px-4 max-w-5xl text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          Ventaja competitiva inmediata
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Nutria no es un chatbot básico. Es una solución de <strong>IA vanguardista</strong> que reduce costes, 
          aumenta eficiencia y posiciona tu empresa como <strong>innovadora y actualizada tecnológicamente</strong>.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold text-yellow-300 mb-2">vs</div>
            <div class="text-lg font-semibold mb-2">Chatbots básicos</div>
            <p class="text-primary-100 text-sm">
              Respuestas predefinidas y limitadas
            </p>
          </div>
          
          <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400 transform scale-105">
            <div class="text-4xl font-bold text-yellow-300 mb-2">✓</div>
            <div class="text-lg font-semibold mb-2">Nutria</div>
            <p class="text-primary-100 text-sm">
              IA conversacional que entiende contexto y aprende
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold text-yellow-300 mb-2">vs</div>
            <div class="text-lg font-semibold mb-2">Atención manual</div>
            <p class="text-primary-100 text-sm">
              Costosa y limitada en horarios
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          ¿Listo para transformar tu negocio?
        </h2>
        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Únete a los early adopters y disfruta de <strong>30% de descuento durante 2 años</strong>
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <a
            href="mailto:info@ainutria.com?subject=Quiero%20información%20sobre%20Nutria&body=Hola%2C%20quiero%20saber%20más%20sobre%20Nutria.%20Por%20favor%2C%20contáctame."
            class="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Haz una consulta
          </a>
          
          <a
            href="https://ainutria.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold text-lg hover:transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver demo en vivo
            <DemoIcon class="w-5 h-5" />
          </a>
        </div>

        <div class="text-gray-600">
          Puedes escribirnos a 
          <a href="mailto:info@ainutria.com" class="text-primary underline hover:text-primary-700">info@ainutria.com</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CheckIcon from '@/components/icons/CheckIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import CustomLightningIcon from '@/components/icons/CustomLightningIcon.vue'
import IntegrationIcon from '@/components/icons/IntegrationIcon.vue'
import BrainIcon from '@/components/icons/BrainIcon.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import ChartIcon from '@/components/icons/ChartIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import BrainAIIcon from '@/components/icons/BrainAIIcon.vue'
import SecurityIcon from '@/components/icons/SecurityIcon.vue'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import TrendingUpIcon from '@/components/icons/TrendingUpIcon.vue'
import DemoIcon from '@/components/icons/DemoIcon.vue'
import PaletteIcon from '@/components/icons/PaletteIcon.vue'
import BlogIcon from '@/components/icons/BlogIcon.vue'
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

export default {
  name: 'Dossier',
  components: {
    CheckIcon,
    StarIcon,
    CustomLightningIcon,
    IntegrationIcon,
    BrainIcon,
    InfoIcon,
    ChartIcon,
    ClockIcon,
    UserIcon,
    BrainAIIcon,
    SecurityIcon,
    ChatIcon,
    TrendingUpIcon,
    DemoIcon,
    PaletteIcon,
    BlogIcon,
    ShoppingCartIcon,
    ExternalLinkIcon,
    ArrowRightIcon
  }
}
</script>
