<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 class="text-4xl font-bold text-primary mb-8">Política de Cookies</h1>
        
        <div class="prose prose-lg max-w-none">
          <div class="bg-blue-50 border-l-4 border-primary p-6 rounded-lg mb-8">
            <p class="text-sm text-gray-600 mb-2">
              <strong>Última actualización:</strong> {{ new Date().toLocaleDateString('es-ES') }}
            </p>
            <p class="text-sm text-gray-600">
              Esta política explica cómo utilizamos las cookies en el sitio web de Nutria.
            </p>
          </div>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">1. ¿Qué son las cookies?</h2>
            <p class="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
              Estos archivos permiten que el sitio web recuerde información sobre tu visita, como tus preferencias 
              y otra información que puede hacer que tu próxima visita sea más fácil y el sitio más útil para ti.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">2. ¿Qué cookies utilizamos?</h2>
            
            <div class="space-y-6">
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-3 text-green-600">🔧 Cookies Técnicas (Necesarias)</h3>
                <p class="mb-3">
                  <strong>Finalidad:</strong> Son imprescindibles para el funcionamiento del sitio web.
                </p>
                <ul class="list-disc pl-6 mb-3 space-y-1">
                  <li>Recordar tus preferencias de cookies</li>
                  <li>Mantener la sesión del usuario</li>
                  <li>Garantizar la seguridad del sitio</li>
                </ul>
                <div class="bg-gray-50 p-3 rounded">
                  <p class="text-sm">
                    <strong>Base legal:</strong> Interés legítimo - Son necesarias para el funcionamiento básico del sitio.
                  </p>
                </div>
              </div>

              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-3 text-blue-600">📊 Cookies Analíticas (Opcionales)</h3>
                <p class="mb-3">
                  <strong>Finalidad:</strong> Nos ayudan a entender cómo interactúas con el sitio web.
                </p>
                <ul class="list-disc pl-6 mb-3 space-y-1">
                  <li>Analizar el tráfico web (Google Analytics)</li>
                  <li>Entender qué páginas son más populares</li>
                  <li>Mejorar la experiencia del usuario</li>
                  <li>Optimizar el rendimiento del sitio</li>
                </ul>
                <div class="bg-blue-50 p-3 rounded">
                  <p class="text-sm">
                    <strong>Base legal:</strong> Consentimiento del usuario - Solo se activan si las aceptas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">3. Cookies de terceros</h2>
            
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 class="font-semibold mb-3">Google Analytics</h3>
              <p class="mb-3">
                Utilizamos Google Analytics para analizar el uso de nuestro sitio web. Esta herramienta utiliza cookies 
                para recopilar información de forma anónima sobre cómo los visitantes utilizan el sitio.
              </p>
              <ul class="list-disc pl-6 mb-3 space-y-1">
                <li><strong>Proveedor:</strong> Google LLC</li>
                <li><strong>Duración:</strong> Hasta 2 años</li>
                <li><strong>Más información:</strong> 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" 
                     class="text-primary hover:underline">
                    Política de privacidad de Google
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">4. Duración de las cookies</h2>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🕐 Cookies de sesión</h4>
                <p class="text-sm">Se eliminan cuando cierras el navegador</p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">📅 Cookies persistentes</h4>
                <p class="text-sm">Permanecen hasta su fecha de expiración o hasta que las elimines</p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">5. Gestionar tus preferencias</h2>
            
            <div class="space-y-4">
              <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 class="font-semibold mb-3">En este sitio web</h3>
                <p class="mb-3">
                  Puedes cambiar tus preferencias de cookies en cualquier momento haciendo clic en 
                  "Gestionar cookies" en la parte inferior de cualquier página.
                </p>
                <button 
                  @click="openCookieSettings" 
                  class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                >
                  Gestionar mis preferencias
                </button>
              </div>

              <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 class="font-semibold mb-3">En tu navegador</h3>
                <p class="mb-3">
                  También puedes configurar tu navegador para rechazar cookies o para que te avise cuando 
                  se envíen cookies. Consulta la ayuda de tu navegador para más información.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" 
                     class="text-primary hover:underline">Chrome</a>
                  <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener" 
                     class="text-primary hover:underline">Firefox</a>
                  <a href="https://support.apple.com/es-es/guide/safari/sfri11471/web" target="_blank" rel="noopener" 
                     class="text-primary hover:underline">Safari</a>
                  <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" 
                     class="text-primary hover:underline">Edge</a>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">6. Consecuencias de desactivar cookies</h2>
            
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <ul class="space-y-2">
                <li><strong>Cookies técnicas:</strong> El sitio web puede no funcionar correctamente</li>
                <li><strong>Cookies analíticas:</strong> No podremos mejorar el sitio basándonos en datos de uso</li>
              </ul>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">7. Actualizaciones de esta política</h2>
            <p class="mb-4">
              Podemos actualizar esta Política de Cookies ocasionalmente. Te recomendamos revisarla 
              periódicamente para estar informado sobre cómo utilizamos las cookies.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">8. Contacto</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="mb-2">
                Si tienes preguntas sobre esta Política de Cookies, puedes contactarnos en:
              </p>
              <p><strong>Email:</strong> info@ainutria.com</p>
            </div>
          </section>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <router-link 
            to="/" 
            class="inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors"
          >
            ← Volver al inicio
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoliticaCookies',
  methods: {
    openCookieSettings() {
      if (window.openCookiePopup) {
        window.openCookiePopup()
      }
    }
  },
  mounted() {
    document.title = 'Política de Cookies - Nutria'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Política de cookies de Nutria. Información sobre cómo utilizamos las cookies en nuestro sitio web.')
  }
}
</script>
