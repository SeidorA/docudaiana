---
title: Chats
iconName: "chats"
sidebar_position: 1
---

import {Banerimg} from '../../../Studio/efectsstudio.tsx'

<Banerimg img="agentes/index.png" />

La vista **Chats** permite interactuar con los asistentes conversacionales disponibles para el usuario. Desde esta pantalla se pueden explorar conversaciones pasadas, continuar chats activos o iniciar nuevas interacciones con distintos agentes.

---

## Barra lateral

![a](/img/agentes/lateral.png)
La columna izquierda de la pantalla proporciona herramientas para buscar, filtrar y navegar entre conversaciones y agentes.

### 1. Buscador

Campo de búsqueda que permite encontrar:
- Agentes por nombre
- Conversaciones anteriores por palabras clave

### 2. Filtros

Opciones avanzadas para refinar la búsqueda según:

1. **Equipo** al que pertenece el agente
1. **Fuente de conocimiento** utilizada por el agente

### 3. Agentes 

Muestra los **últimos 3 agentes** con los que el usuario interactuó recientemente para acceder rápidamente a sus conversaciones.

#### Ver todos los agentes
Ademas de un acceso directo a la lista completa de agentes a los que el usuario tiene acceso dentro de la organización.

![a](/img/agentes/seeall.gif)

---

### 4. Listado de conversaciones

En la parte inferior de la barra lateral se encuentra el historial de conversaciones iniciadas por el usuario. Desde aquí es posible:

- Continuar una conversación previa
- Ver el historial completo de interacciones
- Eliminar o archivar chats (si está habilitado)

:::::info
Esta vista está pensada para facilitar el acceso fluido a agentes y conversaciones, mejorando la experiencia de uso en el día a día.
:::::



---

La parte central de la vista **Chats** es donde ocurre la interacción activa con el agente seleccionado. Aquí se puede enviar y recibir mensajes, revisar el contexto de la conversación y acceder a herramientas adicionales.


## Encabezado de conversación
![a](/img/agentes/superior.png)

### Izquierda

- **Nombre del agente:** indica el nombre del asistente actualmente seleccionado.
- **Modelo LLM utilizado:** muestra qué modelo de lenguaje está alimentando las respuestas del agente (por ejemplo: GPT-4, Claude, etc.).

### Derecha

Incluye una serie de acciones útiles para gestionar la conversación:

- **Nueva conversación:** reinicia el chat con el mismo agente desde cero.
- **Ajustes:** permite modificar aspectos del agente (parámetros de configuración, prompt, tono, etc.).
- **Descargar conversación:** exporta el historial actual en formato descargable.
- **Vista completa:** abre el asistente en pantalla completa para una experiencia más inmersiva.
- **Ocultar conversación:** 
![a](/img/agentes/info.png)
- **Más información del agente:** al desplegar esta opción se muestra:
  - **Nombre del agente**
  - **Descripción**
  - **Última conversación**
  - **Fecha de creación**
  - **Equipo asignado**
  - **Creado por**
  - **Base de conocimiento conectada**
  - **Modelo LLM utilizado**

> Esta información contextual permite comprender mejor el funcionamiento y propósito del agente seleccionado.
