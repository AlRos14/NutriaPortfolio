<template>
  <nav class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <img src="@/assets/logos/nutria-logo.png" alt="Nutria Logo" class="w-8 h-8" />
        <span class="text-primary font-heading text-2xl font-bold">Nutria</span>
      </router-link>

      <!-- Menú Desktop -->
      <ul class="hidden md:flex gap-6 font-medium">
        <li><router-link to="/" class="hover:text-primary transition">Inicio</router-link></li>
        <li><router-link to="/features" class="hover:text-primary transition">Características</router-link></li>
        <li><router-link to="/roadmap" class="hover:text-primary transition">Roadmap</router-link></li>
        <li><router-link to="/demo" class="hover:text-primary transition">Demo</router-link></li>
        <li><router-link to="/news" class="hover:text-primary transition">Novedades</router-link></li>
      </ul>

      <!-- Botón hamburguesa para móvil -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle menu"
      >
        <span 
          class="block w-6 h-0.5 bg-gray-600 transition-transform duration-300"
          :class="{ 'rotate-45 translate-y-2': mobileMenuOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-gray-600 transition-opacity duration-300"
          :class="{ 'opacity-0': mobileMenuOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-gray-600 transition-transform duration-300"
          :class="{ '-rotate-45 -translate-y-2': mobileMenuOpen }"
        ></span>
      </button>
    </div>

    <!-- Menú móvil -->
    <div 
      class="md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-gray-200"
      :class="mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <ul class="flex flex-col p-4 space-y-4 font-medium">
        <li>
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="block py-2 hover:text-primary transition"
          >
            Inicio
          </router-link>
        </li>
        <li>
          <router-link 
            to="/features" 
            @click="closeMobileMenu"
            class="block py-2 hover:text-primary transition"
          >
            Características
          </router-link>
        </li>
        <li>
          <router-link 
            to="/roadmap" 
            @click="closeMobileMenu"
            class="block py-2 hover:text-primary transition"
          >
            Roadmap
          </router-link>
        </li>
        <li>
          <router-link 
            to="/demo" 
            @click="closeMobileMenu"
            class="block py-2 hover:text-primary transition"
          >
            Demo
          </router-link>
        </li>
        <li>
          <router-link 
            to="/news" 
            @click="closeMobileMenu"
            class="block py-2 hover:text-primary transition"
          >
            Novedades
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Cerrar menú al hacer clic fuera
const handleClickOutside = (event) => {
  if (mobileMenuOpen.value && !event.target.closest('nav')) {
    closeMobileMenu()
  }
}

// Cerrar menú al redimensionar ventana
const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>