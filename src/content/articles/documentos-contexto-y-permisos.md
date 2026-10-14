---
title: 'Un documento de empresa no es un permiso para actuar'
description: 'El problema de mezclar conocimiento, instrucciones y autoridad al construir agentes que operan sobre sistemas reales.'
category: Ingeniería
editedAt: '2026-10-14'
status: review
---

Una regla de negocio puede decir «resuelve las consultas de esta marca». Esa frase explica una responsabilidad, pero no determina por sí sola a qué datos puede acceder el agente ni qué cambios tiene permitido ejecutar. Al construir sistemas con agentes, conviene separar esas preguntas.

## El contexto explica el trabajo

Los procedimientos, las políticas y las referencias de empresa ayudan al agente a interpretar una situación. No todos los documentos tienen que entrar de la misma forma en cada conversación: algunos acompañan al puesto, otros corresponden a un ámbito de trabajo y otros se consultan cuando hacen falta.

En Nutria, esa selección también depende de la marca, la audiencia y la identidad del agente. Tener un documento disponible no significa que sea adecuado mostrarlo a cualquier interlocutor.

## La autoridad delimita las acciones

Una instrucción escrita no debería ampliar por sí misma los permisos sobre una herramienta. La posibilidad de leer una fuente, preparar un cambio o ejecutarlo necesita un alcance verificable fuera del texto del procedimiento.

Esta separación permite actualizar una política comercial sin convertir su redacción en un mecanismo de autorización. También evita que una referencia a otra herramienta se interprete como permiso para utilizarla.

## El resultado necesita evidencia

El documento puede explicar cómo completar una operación. El agente puede decidir qué actuación corresponde. Todavía queda una pregunta distinta: ¿qué ocurrió realmente al ejecutarla?

Preparar una acción y comprobar su efecto son estados diferentes. Para comunicar que algo se completó hace falta evidencia de la operación, no solo un texto que describa la intención.

## Una decisión de arquitectura que se puede discutir

Este es uno de los ejes técnicos del blog: explicar el problema, cómo lo aborda Nutria y qué propiedades tendría que demostrar otra solución para poder compararla. Una comparación útil debe revisar el mismo recorrido y distinguir documentación, implementación y resultado observado.

Este borrador describe la separación de responsabilidades; no presenta una nueva prueba de aceptación ni un resultado de rendimiento.
