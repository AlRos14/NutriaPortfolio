---
title: 'Cómo comparar harnesses más allá de una lista de herramientas'
description: 'Un marco editorial para analizar memoria, contexto, autonomía y efectos con preguntas verificables y recorridos equivalentes.'
category: Ecosistema
editedAt: '2026-10-14'
status: review
---

Dos sistemas pueden exponer herramientas parecidas y tomar decisiones de arquitectura diferentes. Una lista de integraciones no explica cómo mantienen un objetivo, cómo usan la memoria o qué consideran prueba de una acción completada.

El propósito de una comparación técnica es hacer visibles esas decisiones y sus consecuencias.

## Empezar por el mismo problema

Antes de comparar, hay que definir el recorrido. Por ejemplo: un agente recibe una responsabilidad, encuentra información incompleta, necesita una decisión humana y después debe continuar el trabajo.

El recorrido debe ser equivalente en los sistemas analizados. Cambiar los permisos, la información disponible o la condición de éxito puede producir una conclusión que el experimento no sostiene.

## Preguntar por las fronteras

Hay preguntas que permiten ir más allá de una demostración:

- ¿Qué información entra en el contexto y qué se puede consultar después?
- ¿Cómo se distingue una instrucción de un permiso?
- ¿Qué ocurre cuando falta una decisión humana?
- ¿Cómo se recupera la continuidad sin repetir un efecto ya realizado?
- ¿Qué evidencia permite comunicar un resultado como completado?

No hay que deducir que otro harness carece de una propiedad porque utilice una terminología distinta. Es necesario revisar sus fuentes y observar el comportamiento relevante.

## Separar lo descrito de lo observado

La documentación puede describir una intención. El código puede contener una ruta de ejecución. Una prueba puede demostrar un comportamiento dentro de unas condiciones. Son evidencias distintas y conviene identificarlas al publicar una conclusión.

El mismo criterio debe aplicarse a Nutria y a las alternativas. Los fallos, los límites de la prueba y las partes sin comprobar forman parte del análisis.

## Explicar hacia dónde apunta cada decisión

Las futuras comparativas del blog abordarán problemas concretos y las distintas direcciones que toma el ecosistema: contexto y memoria, continuidad de objetivos, autorización de efectos y organización de agentes.

Este artículo propone el método. No atribuye capacidades o carencias a ningún competidor ni presenta un benchmark.
