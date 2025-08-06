<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto text-center max-w-5xl">
          <h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span>Características de Nutria</span>
          </h2>
      <p class="text-lg text-gray-700 mb-12">
        Descubre cómo Nutria transforma la experiencia de compra en tu tienda online.
        Integración sencilla, inteligencia artificial avanzada y métricas que impulsan tus ventas.
      </p>

      <!-- Sección: Inteligencia Artificial -->
      <div class="mb-16">
        <div class="text-center mb-8">
          <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <BrainAIIcon class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold mb-3">
            Inteligencia Artificial Avanzada
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Motor de IA conversacional que entiende, recuerda y responde de forma natural
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Motor IA -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <BrainIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">IA conversacional avanzada</h4>
            <p class="text-gray-600">
              Combina varias técnicas de IA para ofrecer respuestas precisas y contextualizadas.
            </p>
          </div>

          <!-- Búsqueda Semántica -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <SearchIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Búsqueda semántica FAISS</h4>
            <p class="text-gray-600">
              Encuentra productos relevantes aunque no coincidan exactamente las palabras del cliente.
            </p>
          </div>

          <!-- Gestión de Contexto -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <ContextIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Contexto conversacional</h4>
            <p class="text-gray-600">
              Mantiene el hilo de la conversación y entiende referencias a productos mencionados anteriormente.
            </p>
          </div>

          <!-- Sinónimos y Categorías -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <TargetIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Sinónimos inteligentes</h4>
            <p class="text-gray-600">
              Reconoce múltiples formas de nombrar productos: "whey", "proteína", "suero" llevan al mismo resultado.
            </p>
          </div>

          <!-- Sistema de Blog -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <BlogIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Integración con blog</h4>
            <p class="text-gray-600">
              Busca automáticamente en tu blog para responder dudas educativas y técnicas de productos.
            </p>
          </div>
        </div>
      </div>

      <!-- Sección: Integración y Personalización -->
      <div class="mb-16">
        <div class="text-center mb-8">
          <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <IntegrationIcon class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold mb-3">
            Integración y Personalización
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Adaptación completa a tu tienda y marca con configuración flexible
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Integración Ecommerce -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <ShoppingCartIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Integración con Ecommerce</h4>
            <p class="text-gray-600">
              Personaliza colores, logo, mensaje de bienvenida y descripciones de producto dentro del chat. Se integra completamente en cada página de producto.
            </p>
          </div>

          <!-- Tarjetas FAQ -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <ChatIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Tarjetas de categorías</h4>
            <p class="text-gray-600">
              Muestra preguntas frecuentes por categoría para guiar al cliente en segundos.
            </p>
          </div>

          <!-- Personalización Completa -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <PaletteIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Personalización total</h4>
            <p class="text-gray-600">
              Configura el tono, personalidad y conocimiento específico del asistente para tu marca.
            </p>
          </div>

          <!-- Multi-tienda -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <GlobalIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Multi-tienda</h4>
            <p class="text-gray-600">
              Soporte para múltiples tiendas con configuraciones específicas y adaptadas a cada cliente.
            </p>
          </div>

          <!-- Potencia tus marcas estratégicas -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <BrandingIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Potencia tus marcas estratégicas</h4>
            <p class="text-gray-600">
              Configura Nutria para que destaque de forma sutil y efectiva tus marcas favoritas, priorizándolas en las recomendaciones sin comprometer la experiencia natural del cliente.
            </p>
          </div>

          <!-- Seguridad -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <SecurityIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Seguro</h4>
            <p class="text-gray-600">
              Nutria no accede a datos del cliente y es completamente anónimo*.
            </p>
            <br>
            <p class="text-gray-500 text-sm italic">
              *Se guarda la IP del cliente por razones de seguridad.
            </p>
          </div>
        </div>
      </div>

      <!-- Sección: Análisis y Métricas -->
      <div class="mb-16">
        <div class="text-center mb-8">
          <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <AnalyticsIcon class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold mb-3">
            Análisis y Métricas
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Datos en tiempo real para optimizar tu estrategia de ventas
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- Panel de estadísticas -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <ChartIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Panel de estadísticas</h4>
            <p class="text-gray-600">
              Conversaciones, productos más consultados, conversiones, ingresos y tasa de conversión.
            </p>
          </div>

          <!-- Análisis temporal -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <ClockIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Análisis temporal</h4>
            <p class="text-gray-600">
              Consulta por día y hora cuándo hay más actividad para optimizar campañas.
            </p>
          </div>
        </div>
      </div>

      <!-- Sección: Rendimiento y Escalabilidad -->
      <div class="mb-16">
        <div class="text-center mb-8">
          <div class="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <PerformanceIcon class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold mb-3">
            Rendimiento y Escalabilidad
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Arquitectura robusta que crece con tu negocio
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- API Escalable -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <LightningIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">API escalable</h4>
            <p class="text-gray-600">
              Workers asíncronos con colas inteligentes para manejar múltiples conversaciones simultáneas.
            </p>
          </div>

          <!-- Cache Inteligente -->
          <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div class="mb-4 flex justify-center">
              <DatabaseIcon class="w-12 h-12 text-primary" />
            </div>
            <h4 class="font-bold text-xl mb-2">Cache optimizado</h4>
            <p class="text-gray-600">
              Sistema de cache automático que mantiene tu catálogo actualizado sin afectar el rendimiento.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="mt-16">
        <router-link 
          to="/demo"
          class="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-600 transition"
        >
          Probar Nutria en vivo
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import BrainAIIcon from '@/components/icons/BrainAIIcon.vue'
import BrainIcon from '@/components/icons/BrainIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import ContextIcon from '@/components/icons/ContextIcon.vue'
import TargetIcon from '@/components/icons/TargetIcon.vue'
import BlogIcon from '@/components/icons/BlogIcon.vue'
import IntegrationIcon from '@/components/icons/IntegrationIcon.vue'
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import PaletteIcon from '@/components/icons/PaletteIcon.vue'
import GlobalIcon from '@/components/icons/GlobalIcon.vue'
import BrandingIcon from '@/components/icons/BrandingIcon.vue'
import SecurityIcon from '@/components/icons/SecurityIcon.vue'
import AnalyticsIcon from '@/components/icons/AnalyticsIcon.vue'
import ChartIcon from '@/components/icons/ChartIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'
import PerformanceIcon from '@/components/icons/PerformanceIcon.vue'
import LightningIcon from '@/components/icons/LightningIcon.vue'
import DatabaseIcon from '@/components/icons/DatabaseIcon.vue'

export default {
  name: 'Features',
  components: {
    BrainAIIcon,
    BrainIcon,
    SearchIcon,
    ContextIcon,
    TargetIcon,
    BlogIcon,
    IntegrationIcon,
    ShoppingCartIcon,
    ChatIcon,
    PaletteIcon,
    GlobalIcon,
    BrandingIcon,
    SecurityIcon,
    AnalyticsIcon,
    ChartIcon,
    ClockIcon,
    PerformanceIcon,
    LightningIcon,
    DatabaseIcon
  }
}
</script>
