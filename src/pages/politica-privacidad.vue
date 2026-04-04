<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 class="text-4xl font-bold text-primary mb-8">Política de Privacidad</h1>
        
        <div class="prose prose-lg max-w-none">
          <div class="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-8">
            <p class="text-sm text-gray-600 mb-2">
              <strong>Última actualización:</strong> {{ new Date().toLocaleDateString('es-ES') }}
            </p>
            <p class="text-sm text-gray-600">
              Esta política se aplica a la recopilación y tratamiento de datos a través de este sitio web portfolio.
            </p>
          </div>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">1. Introducción</h2>
            <p class="mb-4">
              Esta Política de Privacidad regula el tratamiento de los datos personales derivados del uso 
              de este sitio web portfolio del proyecto Nutria, un asistente conversacional basado en 
              inteligencia artificial para comercio electrónico.
            </p>
            <p class="mb-4">
              Nutria es un sistema desarrollado por Alejandro Rosado que utiliza modelos de lenguaje 
              avanzados para proporcionar asistencia automatizada en entornos de ecommerce.
            </p>
            <p>
              Nos comprometemos a proteger tu privacidad y a ser transparentes sobre cómo recopilamos, 
              utilizamos y protegemos tu información personal.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">2. Responsable del Tratamiento</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p><strong>Responsable del tratamiento:</strong><br>
              Alejandro Rosado<br>
              Email de contacto: info@ainutria.com</p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">3. Datos que recopilamos</h2>
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">3.1 Datos recopilados automáticamente</h3>
              <p class="mb-4">Cuando visitas este sitio web, recopilamos automáticamente:</p>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Dirección IP:</strong> Para análisis técnico y seguridad</li>
                <li><strong>Datos de navegación:</strong> Páginas visitadas, tiempo de sesión, navegador utilizado</li>
                <li><strong>Información del dispositivo:</strong> Tipo de dispositivo, sistema operativo, resolución de pantalla</li>
                <li><strong>Cookies técnicas:</strong> Para el funcionamiento del sitio web</li>
              </ul>
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">3.2 Datos proporcionados voluntariamente</h3>
              <p class="mb-4">Recopilamos información que nos proporcionas directamente cuando:</p>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Contactas con nosotros:</strong> Nombre, email, mensaje de consulta</li>
                <li><strong>Interactúas con demos:</strong> Consultas realizadas en las demostraciones</li>
                <li><strong>Te suscribes a actualizaciones:</strong> Dirección de correo electrónico</li>
              </ul>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <p class="text-sm">
                <strong>Importante:</strong> Este portfolio no requiere registro ni recopila datos personales 
                sensibles. Solo procesamos la información mínima necesaria para el funcionamiento del sitio 
                y la gestión de consultas.
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">4. Finalidad del tratamiento</h2>
            <p class="mb-4">Utilizamos tus datos para los siguientes fines:</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div class="bg-primary-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🔧 Funcionamiento técnico</h4>
                <ul class="text-sm space-y-1">
                  <li>• Mostrar el contenido correctamente</li>
                  <li>• Garantizar la seguridad del sitio</li>
                  <li>• Resolver problemas técnicos</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">📊 Análisis y mejora</h4>
                <ul class="text-sm space-y-1">
                  <li>• Estadísticas de uso anónimas</li>
                  <li>• Mejorar la experiencia del usuario</li>
                  <li>• Optimizar el rendimiento</li>
                </ul>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">📧 Comunicación</h4>
                <ul class="text-sm space-y-1">
                  <li>• Responder a consultas</li>
                  <li>• Enviar información solicitada</li>
                  <li>• Notificaciones de actualizaciones</li>
                </ul>
              </div>
              
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🎯 Demostración</h4>
                <ul class="text-sm space-y-1">
                  <li>• Mostrar funcionalidades de Nutria</li>
                  <li>• Procesar consultas de prueba</li>
                  <li>• Generar ejemplos de uso</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">5. Base legal</h2>
            <p class="mb-4">El tratamiento de tus datos se basa en:</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Consentimiento:</strong> Para datos proporcionados voluntariamente (consultas, suscripciones)</li>
              <li><strong>Interés legítimo:</strong> Para análisis técnico, seguridad y mejora del servicio</li>
              <li><strong>Ejecución contractual:</strong> Para responder a consultas comerciales</li>
            </ul>
            <p>
              Puedes retirar tu consentimiento en cualquier momento contactando con nosotros.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">6. Conservación de los datos</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <ul class="space-y-3">
                <li><strong>Datos de navegación:</strong> Se conservan durante 2 años para análisis estadístico</li>
                <li><strong>Consultas por email:</strong> Se mantienen durante 3 años para seguimiento comercial</li>
                <li><strong>Demos interactivas:</strong> Los datos se eliminan automáticamente tras 30 días</li>
                <li><strong>Cookies:</strong> Según se especifica en nuestra política de cookies</li>
              </ul>
            </div>
            <p class="mt-4">
              Una vez transcurridos estos plazos, los datos se anonimizarán o eliminarán de forma segura.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">7. Destinatarios de los datos</h2>
            <p class="mb-4">Tus datos pueden ser compartidos con:</p>
            
            <div class="space-y-4">
              <div class="border-l-4 border-primary-400 pl-4">
                <h4 class="font-semibold">Proveedores de servicios técnicos</h4>
                <p class="text-sm text-gray-600">Hosting, CDN, análisis web - solo para funcionamiento técnico</p>
              </div>
              
              <div class="border-l-4 border-green-400 pl-4">
                <h4 class="font-semibold">Servicios de comunicación</h4>
                <p class="text-sm text-gray-600">Proveedores de email para gestionar consultas</p>
              </div>
            </div>

            <div class="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
              <p class="text-sm">
                <strong>No compartimos datos con terceros para:</strong> Publicidad, marketing directo, 
                elaboración de perfiles comerciales o venta de bases de datos.
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">8. Transferencias internacionales</h2>
            <p class="mb-4">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). 
              En estos casos, nos aseguramos de que:
            </p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>El país de destino tenga un nivel de protección adecuado reconocido por la UE</li>
              <li>Se apliquen las Cláusulas Contractuales Tipo de la Comisión Europea</li>
              <li>Se implementen medidas de seguridad adicionales</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">9. Tus derechos</h2>
            <p class="mb-4">
              De acuerdo con el Reglamento General de Protección de Datos (RGPD), tienes los siguientes derechos:
            </p>
            
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div class="bg-primary-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🔍 Acceso</h4>
                <p class="text-sm">Conocer qué datos tenemos sobre ti</p>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">✏️ Rectificación</h4>
                <p class="text-sm">Corregir datos incorrectos o incompletos</p>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🗑️ Supresión</h4>
                <p class="text-sm">Solicitar la eliminación de tus datos</p>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">⏸️ Limitación</h4>
                <p class="text-sm">Restringir el tratamiento de tus datos</p>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">📦 Portabilidad</h4>
                <p class="text-sm">Recibir tus datos en formato estructurado</p>
              </div>
              
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🚫 Oposición</h4>
                <p class="text-sm">Oponerte al tratamiento de tus datos</p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm">
                <strong>Para ejercer tus derechos:</strong> Envía un email a info@ainutria.com 
                indicando claramente qué derecho deseas ejercer y adjuntando copia de tu DNI.
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">10. Seguridad de los datos</h2>
            <p class="mb-4">Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos:</p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="text-center p-4 bg-primary-50 rounded-lg">
                <div class="text-2xl mb-2">🔒</div>
                <h4 class="font-semibold">Cifrado</h4>
                <p class="text-sm">HTTPS y cifrado de datos sensibles</p>
              </div>
              
              <div class="text-center p-4 bg-green-50 rounded-lg">
                <div class="text-2xl mb-2">🛡️</div>
                <h4 class="font-semibold">Acceso controlado</h4>
                <p class="text-sm">Solo personal autorizado</p>
              </div>
              
              <div class="text-center p-4 bg-purple-50 rounded-lg">
                <div class="text-2xl mb-2">💾</div>
                <h4 class="font-semibold">Copias de seguridad</h4>
                <p class="text-sm">Backups regulares y seguros</p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">11. Cookies y tecnologías similares</h2>
            <p class="mb-4">
              Este sitio utiliza cookies y tecnologías similares. Para información detallada, 
              consulta nuestra <router-link to="/politica-cookies" class="text-primary hover:underline">
                Política de Cookies
              </router-link>.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">12. Menores de edad</h2>
            <p class="mb-4">
              Este sitio web no está dirigido a menores de 16 años. No recopilamos intencionadamente 
              datos de menores. Si detectamos que hemos recopilado datos de un menor sin consentimiento 
              parental, los eliminaremos inmediatamente.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">13. Cambios en esta política</h2>
            <p class="mb-4">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos cualquier 
              cambio significativo a través del sitio web o por email si tenemos tu dirección.
            </p>
            <p>
              Te recomendamos revisar esta política periódicamente para estar informado sobre cómo 
              protegemos tu información.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">14. Contacto y reclamaciones</h2>
            <div class="bg-gray-50 p-6 rounded-lg mb-4">
              <p class="mb-2"><strong>Para consultas sobre privacidad:</strong></p>
              <p>Email: info@ainutria.com</p>
            </div>
            
            <p class="mb-4">
              Si consideras que el tratamiento de tus datos no es correcto, puedes presentar una reclamación ante:
            </p>
            <div class="bg-primary-50 p-4 rounded-lg">
              <p><strong>Agencia Española de Protección de Datos (AEPD)</strong><br>
              Web: www.aepd.es<br>
              Teléfono: 901 100 099</p>
            </div>
          </section>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <router-link 
            to="/" 
            class="inline-flex items-center gap-2 text-primary hover:text-primary-700 transition-colors"
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
  name: 'PoliticaPrivacidad',
  mounted() {
    document.title = 'Política de Privacidad - Nutria'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Política de privacidad de Nutria. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.')
  }
}
</script>
