<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar fija -->
    <Navbar />

    <!-- Contenido dinámico -->
    <main class="flex-grow pt-[72px]">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
    
    <!-- Sistema de cookies -->
    <CookieConsent />
    
    <!-- Footer para gestión de cookies -->
    <button 
      class="cookie-footer" 
      @click="openCookieSettings"
      title="Gestionar cookies"
    >
      Gestionar cookies
    </button>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    CookieConsent
  },
  methods: {
    openCookieSettings() {
      // Llamar a la función global para abrir el popup
      if (window.openCookiePopup) {
        window.openCookiePopup()
      }
    }
  }
}
</script>

<style scoped>
/* Footer cookies */
.cookie-footer {
  width: 100vw;
  text-align: center;
  font-size: 0.78rem;
  color: var(--text-color);
  opacity: 0.7;
  background: none;
  border: none;
  padding: 0.2rem 0 0.1rem 0;
  margin: 0;
  cursor: pointer;
  position: fixed;
  left: 0;
  bottom: 0.2rem;
  z-index: 100;
  transition: opacity 0.2s;
}
.cookie-footer:hover {
  opacity: 1;
  text-decoration: underline;
}
</style>
