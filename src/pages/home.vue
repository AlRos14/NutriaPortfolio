<script>
import NutriaFlowDiagram from '../components/NutriaFlowDiagram.vue'
import TrendingUpIcon from '../components/icons/TrendingUpIcon.vue'
import ClockIcon from '../components/icons/ClockIcon.vue'
import LinkIcon from '../components/icons/LinkIcon.vue'
import ChartIcon from '../components/icons/ChartIcon.vue'
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon.vue'
import BrainAIIcon from '../components/icons/BrainAIIcon.vue'
import LightningIcon from '../components/icons/LightningIcon.vue'
import CustomLightningIcon from '../components/icons/CustomLightningIcon.vue'
import BarChartIcon from '../components/icons/BarChartIcon.vue'
import ArrowRightIcon from '../components/icons/ArrowRightIcon.vue'
import DemoIcon from '../components/icons/DemoIcon.vue'
import CompetitiveAdvantageIcon from '../components/icons/CompetitiveAdvantageIcon.vue'
import ChatIcon from '../components/icons/ChatIcon.vue'
import UserIcon from '../components/icons/UserIcon.vue'
import ShoppingCartIcon from '../components/icons/ShoppingCartIcon.vue'

export default {
  components: {
    NutriaFlowDiagram,
    TrendingUpIcon,
    ClockIcon,
    LinkIcon,
    ChartIcon,
    ExternalLinkIcon,
    BrainAIIcon,
    LightningIcon,
    CustomLightningIcon,
    BarChartIcon,
    ArrowRightIcon,
    DemoIcon,
    CompetitiveAdvantageIcon,
    ChatIcon,
    UserIcon,
    ShoppingCartIcon
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-primary text-white py-24 overflow-hidden" data-aos="fade-up">
      
      <div class="container mx-auto text-center relative z-10 px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span>Nutria</span>
            <br>
            <span class="text-3xl md:text-4xl font-medium">
                Potencia tu negocio con IA
            </span>
          </h1>
          
          <p class="mb-12 text-xl leading-relaxed max-w-3xl mx-auto">
            Atiende a cada visitante como si fuera el único. Responde preguntas, recomienda productos y aumenta tus ventas de forma automática.
          </p>
          
          <!-- Plataformas Section -->
          <div class="mb-16">
            <h3 class="text-lg font-medium mb-12 uppercase tracking-wide">
              Funcionando actualmente en las siguientes plataformas
            </h3>
            
            <!-- Logos as CTA -->
            <div class="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
              <a
                href="https://firenutrition.es/producto/l-glutamine-powder-300-g-kyowa/"
                target="_blank"
                rel="noopener"
                class="group bg-white backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-white border-2 border-white/20 hover:border-blue-200 flex flex-col items-center gap-4 min-w-[280px]"
              > <div class="bg-white rounded-2xl p-4 group-hover:scale-105 transition-transform duration-300">
                    <img src="@/assets/logos/fire-logo.png" alt="FireNutrition Logo" class="h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div class="text-center">
                  <div class="text-black font-bold text-lg mb-1">Fire Nutrition</div>
                  <div class="text-gray-600 text-sm flex justify-center items-center gap-2">
                    <span>Probar ahora</span>
                    <ExternalLinkIcon />
                  </div>
                </div>
              </a>
              
              <a
                href="https://nutrivip.es/producto/fire-nutrition-l-glutamine-powder-300-gr/"
                target="_blank"
                rel="noopener"
                class="group bg-white backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-white border-2 border-white/20 hover:border-blue-200 flex flex-col items-center gap-4 min-w-[280px]"
              >
                <div class="bg-white rounded-2xl p-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="@/assets/logos/nutrivip-logo.png" alt="NutriVip Logo" class="h-20 w-auto" />
                </div>
                <div class="text-center">
                  <div class="text-black font-bold text-lg mb-1">NutriVip</div>
                  <div class="text-gray-600 text-sm flex justify-center items-center gap-2">
                    <span>Probar ahora</span>
                    <ExternalLinkIcon />
                  </div>
                </div>
              </a>
              
              <a
                href="https://nutria.nutrivip.es"
                target="_blank"
                rel="noopener"
                class="group bg-white backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-white border-2 border-white/20 hover:border-blue-200 flex flex-col items-center gap-4 min-w-[280px]"
              >
                <div class="bg-white rounded-2xl p-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="@/assets/logos/nutria-logo.png" alt="Nutria Logo" class="h-20 w-auto" />
                </div>
                <div class="text-center">
                  <div class="text-black font-bold text-lg mb-1">Nutria App Web</div>
                  <div class="text-gray-600 text-sm flex justify-center items-center gap-2">
                    <span>Probar ahora</span>
                    <ExternalLinkIcon />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

                  <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                    href="mailto:info@ainutria.com?subject=Quiero%20información%20sobre%20Nutria&body=Hola%2C%20quiero%20saber%20más%20sobre%20Nutria.%20Por%20favor%2C%20contáctame."
                    class="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    Haz una consulta
                </a>
          </div>
      </div>
    </section>

    <!-- Qué es Nutria -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto text-center max-w-6xl px-4">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          ¿Qué es <span class="text-primary">Nutria</span>?
        </h2>
        <p class="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
          Imagina un vendedor experto que conoce tu catálogo de memoria, habla con todos tus clientes a la vez y nunca pide vacaciones.
          Eso es Nutria: un asistente conversacional con inteligencia artificial que entiende lo que buscan tus clientes, les recomienda el producto perfecto y les da confianza para comprar.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <BrainAIIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900">IA Generativa</h4>
            <p class="text-gray-600 leading-relaxed">Detrás de Nutria trabaja un <strong>LLM (Large Language Model)</strong> que es la base de toda inteligencia artificial moderna (ChatGPT, Gemini, etc).</p>
          </div>
          
          <div class="group bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <CustomLightningIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900">Totalmente personalizable</h4>
            <p class="text-gray-600 leading-relaxed">Conéctalo fácilmente a tu tienda online, dale un nombre, un aspecto e incluso una personalidad. En minutos tendrás tu propio asistente con identidad propia basado en Nutria.</p>
          </div>
          
          <div class="group bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <BrainAIIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900">Conoce tu negocio</h4>
            <p class="text-gray-600 leading-relaxed">Nutria conoce hasta el detalle más irrelevante sobre tus productos. Utiliza tu catálogo y blog para responder con precisión y conocimiento experto.</p>
          </div>
          
          <div class="group bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <BarChartIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900">Datos que importan</h4>
            <p class="text-gray-600 leading-relaxed">Nutria recopila estadísticas detalladas que pueden servir para mejorar tus estrategias de venta y conocer mejor a tus clientes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios clave -->
    <section class="py-20 bg-white">
      <div class="container mx-auto text-center px-4" data-aos="fade-right">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Beneficios clave</h2>
        <p class="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Descubre cómo Nutria puede transformar tu negocio y aumentar tus ventas de manera inteligente
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div class="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:from-primary hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:text-white">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-all duration-300">
              <TrendingUpIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-white">Incremento de ventas</h4>
            <p class="text-gray-600 group-hover:text-blue-100 leading-relaxed">Guía al cliente hasta el producto que realmente necesita. Cross-Selling y UpSelling automático.</p>
          </div>
          
          <div class="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:text-white">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-all duration-300">
              <ClockIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-white">Mejora la atención al cliente</h4>
            <p class="text-gray-600 group-hover:text-green-100 leading-relaxed">Responde siempre a tus clientes, sin importar la hora. Soporte multilingüe. Capacidad de responder dudas complejas sobre los productos.</p>
          </div>
          
          <div class="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:text-white">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-all duration-300">
              <LinkIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-white">Compatibilidad total</h4>
            <p class="text-gray-600 group-hover:text-purple-100 leading-relaxed">Funciona perfectamente con cualquier ecommerce. Enlaces directos a productos en chat, se integra con cualquier tipo de negocio.</p>
          </div>
          
          <div class="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:text-white">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-all duration-300">
              <CompetitiveAdvantageIcon />
            </div>
            <h4 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-white">Ventaja competitiva</h4>
            <p class="text-gray-600 group-hover:text-orange-100 leading-relaxed">Diferenciación frente a competidores que solo tienen chatbots básicos. Imagen de empresa innovadora y actualizada tecnológicamente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo funciona -->
    <section class="py-16 bg-gray-50">
        <div class="m-3">
          <NutriaFlowDiagram class="mx-auto" />
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
                <h3 class="text-blue-600 text-xl font-semibold mb-2">¿Tienes dudas sobre este producto?</h3>
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
                <div class="bg-blue-500 rounded-2xl p-4 text-white text-sm font-medium shadow-sm ml-12">
                  ¿Qué hace exactamente la creatina?
                </div>
              </div>

              <!-- Estado "pensando" -->
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
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
                  class="w-full border-2 border-blue-200 rounded-full px-4 py-3 pr-12 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
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
                <h3 class="text-blue-600 text-xl font-semibold mb-2">¿Tienes dudas sobre este producto?</h3>
                <p class="text-gray-600 text-sm">Pregunta a nuestro asistente virtual experto. Inteligencia artificial real</p>
              </div>
            </div>
            
            <!-- Área de chat con cross-selling -->
            <div class="p-6 bg-gray-50 min-h-[400px]">
              <!-- Pregunta del cliente -->
              <div class="mb-4">
                <div class="bg-blue-500 rounded-2xl p-4 text-white text-sm font-medium shadow-sm ml-12">
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
                  class="w-full border-2 border-blue-200 rounded-full px-4 py-3 pr-12 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
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
                <div class="text-blue-100">
                    En pruebas reales, Nutria alcanzó hasta un <strong>30 % de conversión</strong> en la primera semana, 
                    superando con creces la media del sector.*
                </div>
                </div>
                
                <div class="bg-white/10 rounded-2xl p-6">
                <div class="text-4xl font-bold text-yellow-300 mb-2">+Productos</div>
                <div class="text-blue-100">
                    Convierte en ventas artículos que antes quedaban olvidados en el catálogo, 
                    impulsando nuevas oportunidades de ingreso.
                </div>
                </div>
                
                <div class="bg-white/10 rounded-2xl p-6">
                <div class="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <div class="text-blue-100">
                    Atiende a tus clientes a cualquier hora, cualquier día, 
                    manteniendo la calidad de respuesta sin esfuerzo.
                </div>
                </div>

            </div>
            <p class="mt-6 text-sm text-gray-300">
                *Datos de Nutrivip con clientes reales. La tasa de conversión se calculó considerando las sesiones de chat activas que finalizaron en compra. Los resultados pueden variar según el sector y la forma de implementación.
            </p>
            </div>

        </div>
      </div>
    </section>

        <!-- Roadmap -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            El futuro de <span class="text-primary">Nutria</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre las próximas funcionalidades que harán de Nutria la herramienta de IA más completa para tu negocio
          </p>
        </div>
        
        <!-- CTA al roadmap -->
        <div class="text-center">
          <router-link 
            to="/roadmap" 
            class="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Ver roadmap completo</span>
            <ArrowRightIcon class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Call to action final -->
    <section class="relative py-24 bg-primary text-white text-center overflow-hidden">
      
      <div class="container mx-auto relative z-10 px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Convierte más visitantes en clientes con 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Nutria</span>
          </h2>
          <p class="mb-12 text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Súbete al tren de la IA y transforma la experiencia de compra en tu tienda online.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                    href="mailto:info@ainutria.com?subject=Quiero%20información%20sobre%20Nutria&body=Hola%2C%20quiero%20saber%20más%20sobre%20Nutria.%20Por%20favor%2C%20contáctame."
                    class="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gradient-to-r from-yellow-300 to-orange-400 hover:text-white transition"
                >
                    Haz una consulta
                </a>
          </div>

          <div class="mt-6 text-sm text-blue-100">
            Puedes escribirnos a 
            <a href="mailto:info@ainutria.com" class="underline hover:text-yellow-300">info@ainutria.com</a> 
        </div>


        </div>
      </div>
    </section>
  </div>
</template>
