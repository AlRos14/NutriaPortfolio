<template>
  <div v-if="show" class="cookie-consent-backdrop">
    <div class="cookie-consent-popup">
      <div class="cookie-title">Política de cookies</div>
      <div class="cookie-text">
        Este sitio utiliza cookies técnicas necesarias para su funcionamiento.<br>
        Además, puedes aceptar el uso de <strong>cookies analíticas</strong> (Google Analytics) para ayudarnos a mejorar la experiencia y analizar el tráfico.<br>
        Consulta nuestra <router-link to="/politica-cookies" target="_blank" rel="noopener" class="cookie-link">Política de cookies</router-link> para más información.
      </div>
      <div class="cookie-actions">
        <button class="cookie-btn accept-analytics" @click="acceptCookies(true)">Aceptar analíticas</button>
        <button class="cookie-btn only-necessary" @click="acceptCookies(false)">Solo necesarias</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'
const show = ref(false)

onMounted(() => {
  // Si no hay preferencia, mostrar popup
  if (!localStorage.getItem('cookie_consent')) {
    show.value = true
  }
  // Permitir abrir desde fuera
  window.openCookiePopup = () => { show.value = true }
})

/**
 * @param {boolean} analytics Si acepta cookies analíticas
 */
function acceptCookies(analytics) {
  if (analytics) {
    localStorage.setItem('cookie_consent', 'analytics')
    // Emitir evento global para activar analytics
    window.dispatchEvent(new Event('cookie-accepted'))
  } else {
    localStorage.setItem('cookie_consent', 'necessary')
  }
  show.value = false
}

defineExpose({ open: () => { show.value = true } })
</script>

<style scoped>
.cookie-consent-backdrop {
  position: fixed;
  left: 0; right: 0; bottom: 0; top: 0;
  background: rgba(0,0,0,0.18);
  z-index: 2000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.cookie-consent-popup {
  background: var(--bg-color);
  border-radius: 12px 12px 12px 12px;
  box-shadow: 0 4px 24px var(--shadow-color);
  padding: 2rem 2.2rem 1.5rem 2rem;
  max-width: 430px;
  width: 95vw;
  color: var(--text-color);
  margin-bottom: 0;
  animation: fadeIn 0.4s;
  align-self: center;
  border: 1px solid var(--border-color);
}
.cookie-title {
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
}
.cookie-text {
  font-size: 1rem;
  margin-bottom: 1.2rem;
  color: var(--text-color);
}
.cookie-link {
  color: var(--primary-color);
}
.cookie-link:hover {
  color: var(--primary-hover);
}
.cookie-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  justify-content: center;
}
.cookie-btn {
  background: var(--primary-color);
  color: var(--bg-color);
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.3rem;
  font-size: 1.08rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}
.cookie-btn.only-necessary {
  background: var(--surface-color);
  color: var(--primary-color);
  border: 1px solid var(--border-color);
}
.cookie-btn.only-necessary:hover {
  background: var(--border-color);
  color: var(--primary-hover);
}
.cookie-btn.accept-analytics:hover {
  background: var(--primary-hover);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
