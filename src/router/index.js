import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Features from '../pages/Features.vue'
import Demo from '../pages/Demo.vue'
import Roadmap from '../pages/roadmap.vue'
import News from '../pages/news.vue'
import AvisoLegal from '../pages/aviso-legal.vue'
import PoliticaPrivacidad from '../pages/politica-privacidad.vue'
import PoliticaCookies from '../pages/politica-cookies.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/features', name: 'Features', component: Features },
  { path: '/demo', name: 'Demo', component: Demo },
  { path: '/news', name: 'News', component: News },
  { path: '/roadmap', name: 'Roadmap', component: Roadmap },
  { path: '/aviso-legal', name: 'AvisoLegal', component: AvisoLegal },
  { path: '/politica-privacidad', name: 'PoliticaPrivacidad', component: PoliticaPrivacidad },
  { path: '/politica-cookies', name: 'PoliticaCookies', component: PoliticaCookies }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})
