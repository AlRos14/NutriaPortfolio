<template>
  <footer class="bg-dark text-white py-8">
    <div class="container mx-auto text-center px-4">
      <div class="mb-6">
        <h3 class="text-xl font-bold text-primary mb-2">Nutria</h3>
        <p class="text-gray-400 text-sm max-w-md mx-auto">
          Asistente conversacional con IA para ecommerce. Transforma la experiencia de compra en tu tienda online.
        </p>
      </div>
      
      <div class="mb-6">
        <p class="mb-4">&copy; {{ new Date().getFullYear() }} Nutria. Todos los derechos reservados.</p>
        <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <router-link to="/aviso-legal" class="hover:text-white transition-colors">
            Aviso Legal
          </router-link>
          <router-link to="/politica-privacidad" class="hover:text-white transition-colors">
            Política de Privacidad
          </router-link>
          <router-link to="/politica-cookies" class="hover:text-white transition-colors">
            Política de Cookies
          </router-link>
        </div>
      </div>
      
      <div class="text-xs text-gray-500 border-t border-gray-700 pt-4">
        <p>Desarrollado por Alejandro Rosado</p>
        <p class="mt-1">
          Contacto: 
          <a href="mailto:info@ainutria.com" class="text-primary hover:text-blue-300 transition-colors">
            info@ainutria.com
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
