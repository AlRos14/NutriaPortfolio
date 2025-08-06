import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// AOS para animaciones al hacer scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Inicializar AOS
AOS.init({
  duration: 800,   // Duración en ms
  once: true,      // Animar solo una vez
})
