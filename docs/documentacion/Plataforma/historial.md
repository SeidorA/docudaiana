---
title: Historial de conversaciones
iconName: "arrowDownToLine"
sidebar_position: 5
---
import {Banerimg} from '../../Studio/efectsstudio.tsx'

<Banerimg img="historial/index.png" />
La sección **Historial de conversaciones** permite visualizar y filtrar los mensajes intercambiados entre usuarios y asistentes dentro de un período determinado. Es útil para auditar interacciones, revisar respuestas automatizadas o realizar seguimiento de calidad y feedback.

## Filtros disponibles

Antes de generar el historial, se puede refinar la búsqueda mediante los siguientes filtros:

- **Fecha:** permite seleccionar un día específico, un rango de fechas o uno o varios meses para revisar.
- **Asistente:** agente conversacional utilizado.
- **Usuario:** nombre del usuario que inició la conversación.
- **Canal:** plataforma donde ocurrió la conversación (ej. Teams, WhatsApp, Web, etc.).

Haz clic en **"Generar"** para obtener el resultado.

---

## Vista del reporte generado

Una vez generado el historial, se muestra una tabla con los siguientes datos:

| Campo       | Descripción                                                  |
|-------------|--------------------------------------------------------------|
| **Date**    | Fecha y hora del mensaje.                                    |
| **User**    | Usuario que envió el mensaje.                                |
| **Team**    | Equipo al que pertenece el usuario.                          |
| **Agente**  | Nombre del agente que respondió.                             |
| **Message** | Contenido del mensaje enviado o recibido.                    |
| **Channel** | Canal por el que se originó la conversación.                 |
| **Feedback**| Calificación del usuario sobre la respuesta (si aplica).    |

Además, es posible:

- Buscar mensajes específicos por texto en la columna **Message**.
- Filtrar por tipo de **Feedback**.
- Descargar el historial completo en formato compatible.

---

## Descargar historial

Para conservar una copia o compartir el historial generado, puedes utilizar el botón **"Descargar historial"** que exporta la información mostrada con todos los filtros aplicados.
