<template>
  <div class="w-full max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo funciona Nutria</h3>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Un proceso inteligente que convierte consultas en ventas
      </p>
    </div>
    
    <!-- Diagrama principal -->
    <div class="relative mb-12">
      <!-- Línea de conexión sutil en desktop -->
      <div class="hidden lg:flex absolute top-20 left-0 right-0 items-center justify-center pointer-events-none">
        <div class="flex items-center w-full max-w-4xl">
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30"></div>
          <div class="w-4"></div>
          <div class="flex-1 h-px bg-gradient-to-r from-primary/30 via-primary/30 to-primary/30"></div>
          <div class="w-4"></div>
          <div class="flex-1 h-px bg-gradient-to-r from-primary/30 via-primary/30 to-primary/30"></div>
          <div class="w-4"></div>
          <div class="flex-1 h-px bg-gradient-to-r from-primary/30 via-primary/30 to-transparent"></div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
        <div 
          v-for="(step, index) in steps" 
          :key="index" 
          class="relative group"
        >
          <!-- Paso -->
          <div
            :class="[
              'relative p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 border-2 min-h-[180px] flex flex-col justify-center',
              activeStep === index 
                ? 'bg-primary text-white shadow-xl scale-105 border-primary'
                : 'bg-white border-gray-200 hover:shadow-lg hover:border-primary/30 text-gray-700'
            ]"
            @click="handleStepClick(index)"
          >
            <!-- Número del paso -->
            <div 
              :class="[
                'absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                activeStep === index 
                  ? 'bg-white text-primary shadow-lg'
                  : 'bg-primary text-white opacity-75 group-hover:opacity-100'
              ]"
            >
              {{ index + 1 }}
            </div>
            
            <div class="text-center">
              <!-- Icono -->
              <div 
                :class="[
                  'w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300',
                  activeStep === index 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-gray-50 group-hover:bg-primary/10'
                ]"
              >
                <component 
                  :is="step.iconComponent" 
                  :class="[
                    'w-8 h-8 transition-colors duration-300',
                    activeStep === index ? 'text-white' : 'text-primary'
                  ]" 
                />
              </div>
              
              <!-- Título -->
              <h4 
                :class="[
                  'font-bold text-base mb-2 transition-colors duration-300',
                  activeStep === index ? 'text-white' : 'text-gray-900 group-hover:text-primary'
                ]"
              >
                {{ step.title }}
              </h4>
              
              <!-- Descripción -->
              <p 
                :class="[
                  'text-sm transition-colors duration-300',
                  activeStep === index ? 'text-white/90' : 'text-gray-600'
                ]"
              >
                {{ step.description }}
              </p>
            </div>
          </div>
          
          <!-- Flecha en mobile -->
          <div 
            v-if="index < steps.length - 1" 
            class="flex justify-center my-4 lg:hidden"
          >
            <svg class="w-6 h-6 text-primary/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Detalle del paso activo -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div class="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b border-gray-100">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
            <component :is="steps[activeStep].iconComponent" class="w-6 h-6 text-primary" />
          </div>
          <div>
            <div class="flex items-center mb-1">
              <span class="bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold mr-3">
                Paso {{ activeStep + 1 }}
              </span>
              <h4 class="text-xl font-bold text-gray-900">{{ steps[activeStep].title }}</h4>
            </div>
            <p class="text-sm text-gray-600">{{ steps[activeStep].description }}</p>
          </div>
        </div>
      </div>
      <div class="p-6">
        <p class="text-gray-700 leading-relaxed text-lg">{{ steps[activeStep].detail }}</p>
      </div>
    </div>
    
    <!-- Navegación mejorada -->
    <div class="flex justify-center mt-8">
      <div class="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
        <button
          v-for="(step, index) in steps"
          :key="index"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300 hover:scale-125',
            activeStep === index 
              ? 'bg-primary shadow-lg shadow-primary/50 scale-125' 
              : 'bg-gray-300 hover:bg-primary/50'
          ]"
          @click="handleStepClick(index)"
          :aria-label="`Ver paso ${index + 1}: ${step.title}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import UserIcon from './icons/UserIcon.vue'
import ChatIcon from './icons/ChatIcon.vue'
import BrainIcon from './icons/BrainIcon.vue'
import DatabaseIcon from './icons/DatabaseIcon.vue'
import StarIcon from './icons/StarIcon.vue'

const activeStep = ref(0)

const steps = [
  {
    iconComponent: UserIcon,
    title: 'Cliente consulta',
    description: 'Pregunta natural',
    detail: 'El cliente formula su consulta de manera natural en el chat, preguntando sobre productos, características, compatibilidades o recomendaciones específicas para sus necesidades.',
  },
  {
    iconComponent: ChatIcon,
    title: 'Captura datos',
    description: 'Recibe y procesa',
    detail: 'Nuestra interfaz de chat captura la consulta y la prepara para el procesamiento, manteniendo el contexto de la conversación anterior para respuestas más precisas.',
  },
  {
    iconComponent: BrainIcon,
    title: 'IA Nutria',
    description: 'Entiende intención',
    detail: 'El motor de inteligencia artificial analiza el contexto, identifica la intención real del cliente y determina qué información específica necesita para dar la mejor respuesta.',
  },
  {
    iconComponent: DatabaseIcon,
    title: 'Busca datos',
    description: 'Consulta catálogo',
    detail: 'Nutria consulta tu catálogo completo, artículos del blog, estudios, especificaciones técnicas y toda la información disponible para encontrar la respuesta más precisa y actualizada.',
  },
  {
    iconComponent: StarIcon,
    title: 'Genera respuesta',
    description: 'Recomendación final',
    detail: 'Genera una respuesta completamente personalizada, incluyendo recomendaciones de productos específicos, enlaces directos e información adicional relevante para facilitar la compra.',
  }
]

const setActiveStep = (index) => {
  activeStep.value = index
}

// Auto-avanzar los pasos cada 4 segundos
let autoAdvanceInterval = null
let restartTimeout = null

const startAutoAdvance = () => {
  // Limpiar cualquier intervalo existente
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
  }
  
  autoAdvanceInterval = setInterval(() => {
    activeStep.value = (activeStep.value + 1) % steps.length
  }, 4000)
}

const stopAutoAdvance = () => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
    autoAdvanceInterval = null
  }
  
  // Limpiar cualquier timeout pendiente
  if (restartTimeout) {
    clearTimeout(restartTimeout)
    restartTimeout = null
  }
}

onMounted(() => {
  startAutoAdvance()
})

onUnmounted(() => {
  stopAutoAdvance()
})

// Pausar auto-avance cuando el usuario interactúa
const handleStepClick = (index) => {
  // Limpiar completamente el estado anterior
  stopAutoAdvance()
  setActiveStep(index)
  
  // Programar reinicio una sola vez
  restartTimeout = setTimeout(() => {
    startAutoAdvance()
    restartTimeout = null
  }, 8000)
}
</script>

<style scoped>
/* Animaciones personalizadas */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

.animate-pulse-slow {
  animation: pulse 2s infinite;
}

/* Mejoras responsivas */
@media (max-width: 640px) {
  .grid {
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .grid-cols-1.sm\:grid-cols-2.lg\:grid-cols-5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .grid-cols-1.sm\:grid-cols-2.lg\:grid-cols-5 > div {
    max-width: 280px;
    width: 100%;
  }
}

/* Estados de hover mejorados */
.group:hover .transition-all {
  transition-duration: 200ms;
}

/* Asegurar que el texto sea legible */
.bg-primary {
  background-color: var(--color-primary, #307eb1);
}

.text-primary {
  color: var(--color-primary, #307eb1);
}

.border-primary {
  border-color: var(--color-primary, #307eb1);
}

.hover\:border-primary\/30:hover {
  border-color: rgb(48 126 177 / 0.3);
}

.bg-primary\/10 {
  background-color: rgb(48 126 177 / 0.1);
}

.bg-primary\/5 {
  background-color: rgb(48 126 177 / 0.05);
}

.hover\:bg-primary\/50:hover {
  background-color: rgb(48 126 177 / 0.5);
}

.shadow-primary\/50 {
  box-shadow: 0 10px 15px -3px rgb(48 126 177 / 0.5), 0 4px 6px -2px rgb(48 126 177 / 0.5);
}
</style>