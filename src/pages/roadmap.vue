<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6 lg:px-12">
            <div class="text-center mb-16">
                <h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Roadmap de <span class="text-primary">Nutria</span>
                </h2>
                <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                    Nuestro plan de desarrollo para revolucionar el ecommerce con inteligencia artificial avanzada y características de producción empresarial.
                </p>
            </div>

            <!-- Estado Actual -->
            <div class="mb-20">
                <div class="text-center mb-12">
                    <div class="bg-green-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <StarIcon class="w-8 h-8 text-white" />
                    </div>
                    <h3 class="text-3xl font-bold mb-3 text-green-600">Estado Actual</h3>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Funcionalidad completa de producción con características empresariales avanzadas
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
                        <div class="mb-4 flex justify-center">
                            <SecurityIcon class="w-12 h-12 text-green-500" />
                        </div>
                        <h4 class="font-bold text-lg mb-2">Seguridad Robusta</h4>
                        <p class="text-gray-600 text-sm">
                            Sistema anti-spam avanzado con detección de patrones y protección multinivel
                        </p>
                    </div>

                    <div class="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
                        <div class="mb-4 flex justify-center">
                            <DatabaseIcon class="w-12 h-12 text-green-500" />
                        </div>
                        <h4 class="font-bold text-lg mb-2">Automatización</h4>
                        <p class="text-gray-600 text-sm">
                            Limpieza automática, monitoreo en tiempo real y cron jobs diarios
                        </p>
                    </div>

                    <div class="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
                        <div class="mb-4 flex justify-center">
                            <AnalyticsIcon class="w-12 h-12 text-green-500" />
                        </div>
                        <h4 class="font-bold text-lg mb-2">Métricas Avanzadas</h4>
                        <p class="text-gray-600 text-sm">
                            ROI tracking completo y estadísticas de negocio automatizadas
                        </p>
                    </div>

                    <div class="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
                        <div class="mb-4 flex justify-center">
                            <PerformanceIcon class="w-12 h-12 text-green-500" />
                        </div>
                        <h4 class="font-bold text-lg mb-2">Arquitectura Modular</h4>
                        <p class="text-gray-600 text-sm">
                            Sistema modular con componentes reutilizables y escalables
                        </p>
                    </div>
                </div>
            </div>

            <!-- Fases de Desarrollo -->
            <div class="space-y-20">

                <!-- Fase 1A: Pulir IA (Backend) -->
                <div class="relative">
                    <div class="text-center mb-8">
                        <div class="bg-indigo-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <BrainAIIcon class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Fase 1A: Pulir IA (Backend)</h3>
                        <p class="text-gray-600 mb-2">Actual - En Progreso</p>
                        <div class="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border-l-4 border-green-500">
                            <div class="mb-4 flex justify-center">
                                <SearchIcon class="w-10 h-10 text-green-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">RAG Avanzado</h4>
                            <p class="text-gray-600 text-sm mb-3">
                                Sistema de índices FAISS, búsqueda semántica y contexto conversacional
                            </p>
                            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completado</span>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border-l-4 border-green-500">
                            <div class="mb-4 flex justify-center">
                                <DatabaseIcon class="w-10 h-10 text-green-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">API REST</h4>
                            <p class="text-gray-600 text-sm mb-3">
                                FastAPI con adaptadores multi-tienda y sistema de logging completo
                            </p>
                            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completado</span>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <TrendingUpIcon class="w-10 h-10 text-yellow-600" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Sistema Reranking</h4>
                            <p class="text-gray-600 text-sm mb-3">
                                Mejora para comparaciones de productos y búsquedas complejas
                            </p>
                            <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">En Progreso</span>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <BlogIcon class="w-10 h-10 text-yellow-600" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Fuentes Externas</h4>
                            <p class="text-gray-600 text-sm mb-3">
                                Integración con blog empresarial y papers científicos externos
                            </p>
                            <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Parcial</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <LightningIcon class="w-10 h-10 text-indigo-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Cache Distribuido</h4>
                            <p class="text-gray-600 text-sm">
                                Optimización de rendimiento con cache inteligente para respuestas frecuentes
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <DatabaseIcon class="w-10 h-10 text-indigo-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Índices Incrementales</h4>
                            <p class="text-gray-600 text-sm">
                                Actualización de índices sin regeneración completa, reduciendo tiempos de espera
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <LinkIcon class="w-10 h-10 text-indigo-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">API Playground</h4>
                            <p class="text-gray-600 text-sm">
                                Documentación Swagger interactiva y herramientas de testing comercial para partners
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Fase 1B: Estabilización Frontend -->
                <div class="relative">
                    <div class="text-center mb-8">
                        <div class="bg-blue-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <DatabaseIcon class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Fase 1B: Estabilización Frontend</h3>
                        <p class="text-gray-600 mb-2">Q3 2025 - Completada</p>
                        <div class="w-24 h-1 bg-green-500 mx-auto rounded"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <ClockIcon class="w-10 h-10 text-yellow-600" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Backup y Recuperación</h4>
                            <p class="text-gray-600 text-sm mb-3">
                                Export/Import de configuración, historial de cambios y rollback automático
                            </p>
                            <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">En Progreso</span>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <LightningIcon class="w-10 h-10 text-blue-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Cache Inteligente</h4>
                            <p class="text-gray-600 text-sm mb-3">
                                Cache de respuestas frecuentes con TTL configurable e invalidación automática
                            </p>
                            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Siguiente</span>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border-l-4 border-green-500">
                            <div class="mb-4 flex justify-center">
                                <PerformanceIcon class="w-10 h-10 text-green-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Optimización BD</h4>
                            <p class="text-gray-600 text-sm mb-3">
                                Índices optimizados, queries preparadas y limpieza automática implementada
                            </p>
                            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completado</span>
                        </div>
                    </div>
                </div>

                <!-- Fase 2B: Características Avanzadas Frontend -->
                <div class="relative">
                    <div class="text-center mb-8">
                        <div class="bg-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <BrainIcon class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Fase 2B: Características Avanzadas Frontend</h3>
                        <p class="text-gray-600 mb-2">Q4 2025</p>
                        <div class="w-24 h-1 bg-purple-200 mx-auto rounded"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <AnalyticsIcon class="w-10 h-10 text-purple-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Analytics Avanzadas</h4>
                            <p class="text-gray-600 text-sm">
                                Integración con Google Analytics 4, Facebook Pixel y tracking personalizado
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <ChatIcon class="w-10 h-10 text-purple-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Chat Avanzado</h4>
                            <p class="text-gray-600 text-sm">
                                Historial de conversaciones, sugerencias automáticas y respuestas rápidas
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <SecurityIcon class="w-10 h-10 text-purple-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Seguridad Avanzada</h4>
                            <p class="text-gray-600 text-sm">
                                Mejoras en el apartado de seguridad
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Fase 3: Integración y Escalabilidad Frontend -->
                <div class="relative">
                    <div class="text-center mb-8">
                        <div class="bg-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <IntegrationIcon class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Fase 3: Integración y Escalabilidad</h3>
                        <p class="text-gray-600 mb-2">Q1 2026</p>
                        <div class="w-24 h-1 bg-orange-200 mx-auto rounded"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <UserIcon class="w-10 h-10 text-orange-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Integración CRM</h4>
                            <p class="text-gray-600 text-sm">
                                Sincronización con HubSpot, Salesforce y Pipedrive para gestión completa
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <SearchIcon class="w-10 h-10 text-orange-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Búsqueda Inteligente</h4>
                            <p class="text-gray-600 text-sm">
                                Integración con búsqueda web, explicación de resultados y productos relacionados
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                            <div class="mb-4 flex justify-center">
                                <GlobalIcon class="w-10 h-10 text-yellow-600" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Internacionalización</h4>
                            <p class="text-gray-600 text-sm">
                                Soporte multiidioma completo con WPML, Polylang y traducción automática
                            </p>
                            <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">En Progreso</span>
                        </div>
                    </div>
                </div>

                <!-- Fase 4: Inteligencia Artificial Propietaria e Infraestructura -->
                <div class="relative">
                    <div class="text-center mb-8">
                        <div class="bg-gradient-to-r from-pink-500 to-violet-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <BrainAIIcon class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Fase 4: Inteligencia Artificial Propietaria e Infraestructura</h3>
                        <p class="text-gray-600 mb-2">Q1-Q2 2026</p>
                        <div class="w-24 h-1 bg-gradient-to-r from-pink-200 to-violet-200 mx-auto rounded"></div>
                    </div>
                    
                    <!-- Infraestructura Propia -->
                    <div class="mb-8">
                        <h4 class="text-xl font-semibold text-center mb-6 text-gradient bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">Infraestructura Propietaria</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div class="mb-4 flex justify-center">
                                    <BrainIcon class="w-10 h-10 text-pink-500" />
                                </div>
                                <h5 class="font-bold text-lg mb-2">LLM Open Source</h5>
                                <p class="text-gray-600 text-sm">
                                    Migración a Llama, Mistral 7B, Gemma o Phi-3 con optimización de inferencia y quantización
                                </p>
                            </div>

                            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div class="mb-4 flex justify-center">
                                    <PerformanceIcon class="w-10 h-10 text-violet-500" />
                                </div>
                                <h5 class="font-bold text-lg mb-2">Optimización vLLM</h5>
                                <p class="text-gray-600 text-sm">
                                    Serving optimizado con vLLM, TensorRT y fine-tuning inicial para nutrición deportiva
                                </p>
                            </div>

                            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div class="mb-4 flex justify-center">
                                    <SecurityIcon class="w-10 h-10 text-pink-500" />
                                </div>
                                <h5 class="font-bold text-lg mb-2">Seguridad Total</h5>
                                <p class="text-gray-600 text-sm">
                                    Cifrado end-to-end, auditoría de datos y sistema completo de backup y recovery
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Inteligencia Artificial Avanzada -->
                    <div>
                        <h4 class="text-xl font-semibold text-center mb-6 text-gradient bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">Inteligencia Artificial Avanzada</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div class="mb-4 flex justify-center">
                                    <BrainIcon class="w-10 h-10 text-violet-500" />
                                </div>
                                <h5 class="font-bold text-lg mb-2">IA Especializada</h5>
                                <p class="text-gray-600 text-sm">
                                    Desarrollo de LLM especializado en nutrición deportiva con ventaja competitiva propietaria
                                </p>
                            </div>

                            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div class="mb-4 flex justify-center">
                                    <TargetIcon class="w-10 h-10 text-pink-500" />
                                </div>
                                <h5 class="font-bold text-lg mb-2">Fine-tuning Avanzado</h5>
                                <p class="text-gray-600 text-sm">
                                    Fine-tuning con datos específicos para maximizar personalización y precisión conversacional
                                </p>
                            </div>

                            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div class="mb-4 flex justify-center">
                                    <BrainIcon class="w-10 h-10 text-violet-500" />
                                </div>
                                <h5 class="font-bold text-lg mb-2">Machine Learning Avanzado</h5>
                                <p class="text-gray-600 text-sm">
                                    Aprendizaje de patrones, recomendaciones predictivas y optimización automática de respuestas
                                </p>
                            </div>

                            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div class="mb-4 flex justify-center">
                                    <AnalyticsIcon class="w-10 h-10 text-pink-500" />
                                </div>
                                <h5 class="font-bold text-lg mb-2">A/B Testing Automático</h5>
                                <p class="text-gray-600 text-sm">
                                    Testing automático de configuraciones, auto-configuración y generación de tarjetas inteligente
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tareas Críticas Transversales -->
                <div class="relative">
                    <div class="text-center mb-8">
                        <div class="bg-red-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <SecurityIcon class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Tareas Críticas - Todas las Fases</h3>
                        <p class="text-gray-600 mb-2">Continuo</p>
                        <div class="w-24 h-1 bg-red-500 mx-auto rounded"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border-l-4 border-red-500">
                            <div class="mb-4 flex justify-center">
                                <AnalyticsIcon class="w-10 h-10 text-red-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Monitoreo Avanzado</h4>
                            <p class="text-gray-600 text-sm">
                                Métricas de negocio, alertas automáticas y dashboard ejecutivo con KPIs en tiempo real
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border-l-4 border-red-500">
                            <div class="mb-4 flex justify-center">
                                <SecurityIcon class="w-10 h-10 text-red-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Seguridad Continua</h4>
                            <p class="text-gray-600 text-sm">
                                Auditoría de seguridad, penetration testing y protección de datos con acceso basado en roles
                            </p>
                        </div>

                        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border-l-4 border-red-500">
                            <div class="mb-4 flex justify-center">
                                <TrendingUpIcon class="w-10 h-10 text-red-500" />
                            </div>
                            <h4 class="font-bold text-lg mb-2">Optimización Continua</h4>
                            <p class="text-gray-600 text-sm">
                                Mejoras de rendimiento, escalabilidad automática y análisis de patrones de uso
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import StarIcon from '@/components/icons/StarIcon.vue'
import SecurityIcon from '@/components/icons/SecurityIcon.vue'
import DatabaseIcon from '@/components/icons/DatabaseIcon.vue'
import AnalyticsIcon from '@/components/icons/AnalyticsIcon.vue'
import PerformanceIcon from '@/components/icons/PerformanceIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'
import LightningIcon from '@/components/icons/LightningIcon.vue'
import BrainIcon from '@/components/icons/BrainIcon.vue'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import IntegrationIcon from '@/components/icons/IntegrationIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import GlobalIcon from '@/components/icons/GlobalIcon.vue'
import BrainAIIcon from '@/components/icons/BrainAIIcon.vue'
import TargetIcon from '@/components/icons/TargetIcon.vue'
import TrendingUpIcon from '@/components/icons/TrendingUpIcon.vue'
import BlogIcon from '@/components/icons/BlogIcon.vue'
import LinkIcon from '@/components/icons/LinkIcon.vue'
</script>