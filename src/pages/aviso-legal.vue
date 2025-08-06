<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 class="text-4xl font-bold text-primary mb-8">Aviso Legal</h1>
        
        <div class="prose prose-lg max-w-none">
          <div class="bg-blue-50 border-l-4 border-primary p-6 rounded-lg mb-8">
            <p class="text-sm text-gray-600 mb-2">
              <strong>Última actualización:</strong> {{ new Date().toLocaleDateString('es-ES') }}
            </p>
          </div>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">1. Identificación del titular</h2>
            <p class="mb-4">
              El presente sitio web y portfolio de demostración del asistente conversacional denominado <strong>Nutria</strong> 
              es un proyecto tecnológico desarrollado y propiedad de:
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p><strong>Alejandro Rosado</strong><br>
              Correo electrónico: info@ainutria.com</p>
            </div>
            <p class="mt-4">
              Este sitio web tiene finalidad informativa y de demostración del proyecto Nutria, 
              presentando sus características, funcionalidades y casos de uso.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">2. Objeto del servicio</h2>
            <p class="mb-4">
              Nutria es un asistente conversacional basado en inteligencia artificial avanzada, que utiliza 
              modelos de lenguaje de última generación para ofrecer respuestas automatizadas y contextualizadas 
              en el ámbito del comercio electrónico.
            </p>
            <p class="mb-4">
              Este portfolio presenta información sobre:
            </p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Características técnicas del asistente</li>
              <li>Casos de uso y ejemplos de implementación</li>
              <li>Roadmap de desarrollo</li>
              <li>Demostraciones interactivas</li>
              <li>Información comercial y de contacto</li>
            </ul>
            <p>
              El servicio está en continuo desarrollo y mejora, por lo que las funcionalidades 
              presentadas pueden experimentar modificaciones.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">3. Propiedad intelectual e industrial</h2>
            <p class="mb-4">
              Todos los derechos de propiedad intelectual relacionados con el software, el modelo de lenguaje, 
              la interfaz, el contenido, el diseño y la marca Nutria pertenecen a Alejandro Rosado.
            </p>
            <p class="mb-4">
              El acceso a este sitio web no otorga ningún derecho de propiedad sobre el contenido, 
              código fuente o elementos gráficos. Queda prohibida la reproducción, distribución, 
              modificación o explotación comercial no autorizada de cualquier parte de este proyecto.
            </p>
            <p>
              Las marcas, logos y denominaciones de terceros mencionadas como ejemplos o casos de uso 
              son propiedad de sus respectivos titulares.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">4. Uso adecuado del sitio web</h2>
            <p class="mb-4">El usuario se compromete a utilizar este sitio web conforme a:</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>La legislación vigente</li>
              <li>Las buenas costumbres y el orden público</li>
              <li>Las condiciones establecidas en este aviso legal</li>
            </ul>
            <p class="mb-4">Queda expresamente prohibido:</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Realizar actividades ilícitas, fraudulentas o contrarias a derechos de terceros</li>
              <li>Intentar obtener acceso no autorizado al sistema o a datos de terceros</li>
              <li>Reproducir, copiar o distribuir el contenido sin autorización</li>
              <li>Usar el sitio para fines comerciales no autorizados</li>
              <li>Introducir virus, malware o código malicioso</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">5. Exclusión de garantías y responsabilidad</h2>
            <p class="mb-4">
              Este sitio web se ofrece con fines informativos. Alejandro Rosado no se responsabiliza de:
            </p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Errores, omisiones o inexactitudes en la información proporcionada</li>
              <li>Daños derivados del uso de la información contenida en el sitio</li>
              <li>Interrupciones, fallos técnicos o indisponibilidad temporal</li>
              <li>Enlaces a sitios web de terceros y su contenido</li>
              <li>Decisiones tomadas en base a la información del sitio</li>
            </ul>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <p class="text-sm">
                <strong>Importante:</strong> La información presentada tiene carácter demostrativo. 
                Para implementaciones reales, contacte directamente para obtener información actualizada 
                y condiciones específicas.
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">6. Protección de datos</h2>
            <p class="mb-4">
              El tratamiento de datos personales se realiza conforme a nuestra 
              <router-link to="/politica-privacidad" class="text-primary hover:underline">
                Política de Privacidad
              </router-link>, disponible en este mismo sitio web.
            </p>
            <p>
              Los datos se recogen únicamente para gestionar consultas y mejorar el servicio, 
              respetando en todo momento la normativa de protección de datos vigente.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">7. Cookies</h2>
            <p class="mb-4">
              Este sitio web utiliza cookies para mejorar la experiencia del usuario y obtener 
              estadísticas de uso. Puede consultar información detallada en nuestra 
              <router-link to="/politica-cookies" class="text-primary hover:underline">
                Política de Cookies
              </router-link>.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">8. Modificaciones</h2>
            <p class="mb-4">
              El titular se reserva el derecho a modificar este Aviso Legal en cualquier momento, 
              siendo efectivas las modificaciones desde su publicación en el sitio web.
            </p>
            <p>
              Se recomienda revisar periódicamente este documento para estar al corriente de 
              posibles cambios.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">9. Contacto</h2>
            <p class="mb-4">
              Para cualquier consulta relacionada con este Aviso Legal, puede contactar a través de:
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> info@ainutria.com</p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">10. Legislación aplicable y jurisdicción</h2>
            <p class="mb-4">
              Este Aviso Legal se rige por la legislación española y europea aplicable. 
              Para cualquier controversia que pudiera derivarse, las partes se someten a los 
              tribunales competentes del domicilio del titular, renunciando a cualquier otro 
              fuero que pudiera corresponderles.
            </p>
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
  name: 'AvisoLegal',
  mounted() {
    document.title = 'Aviso Legal - Nutria'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Aviso legal del portfolio de Nutria, asistente conversacional con IA para ecommerce. Términos de uso y condiciones legales.')
  }
}
</script>
