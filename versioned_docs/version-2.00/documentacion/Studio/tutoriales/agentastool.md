---
title: "Agent as Tool"
sidebar_position: 4
--- 

En este tutorial, vamos a analizar cómo aprovechar otros flujos como herramientas para un Agente padre. Este enfoque te permite crear un agente parental que pueda delegar tareas específicas a agentes infantiles especializados.

## Resumen
1. Recibe la entrada del usuario a través de un agente padre
2. El agente decide recuperar datos del almacén de documentos o llamar a la herramienta Agentflow.

![Agent as Tool](/img/tutoriales/aat/1.png)

### Paso 1: Configurar el nodo de inicio
Empieza añadiendo un **nodo Start** a tu lienzo. Esto sirve como punto de entrada para tu sistema de agentes.

### Paso 2: Creación del Agente Padre
Añade un nodo **Agente** y conéctalo al nodo Start.

### Paso 3: Configuración de la herramienta Agent
La característica clave de este flujo es configurar otro agente como **herramienta**. En la sección de Herramientas para Agentes Padres:

![Paso 3](/img/tutoriales/aat/2.png)

#### Configuración de herramientas:
- Herramienta: Selecciona "Agente como herramienta"

#### Configuración de la herramienta del agente:

- **Flujo de agentes seleccionado:** Elige tu flujo de agente hijo
- **Nombre:** Nombre del flujo de agentes
- **Descripción:** Describe cuándo este flujo de agentes es útil. Ejemplo:

```
Useful for searching user availability, scheduling meetings and email related query
```

:::::warning
¡El nombre y la descripción de la herramienta son extremadamente importantes! Deben ser claros y describir correctamente el propósito de la herramienta. Consulta la guía de mejores prácticas
:::::


### Paso 4: Añadir fuentes de conocimiento

Configura la sección de **Conocimiento** (Almacenes de Documentos) para que tu agente principal tenga acceso a la información relevante. Esto es lo mismo que el tutorial de [RAG](./rag.md).

![Paso 4](/img/tutoriales/aat/3.png)


#### Configuración del Archivo de Documentos:

- **Archivo de Documentos:** Selecciona tu almacén de documentos preconfigurado (por ejemplo, "AI-Paper")
- **Describe el conocimiento:** Describe de qué trata ese conocimiento

---

## Interacciones de ejemplo

### Ejemplos de consultas y comportamiento esperado:

#### Consulta de programación:

- Usuario: "¿Puedes comprobar mi disponibilidad para el próximo martes?"
- Flow: Agente padre → personal_assistant herramienta → respuesta especializada en programación

![Ejemplos](/img/tutoriales/aat/4.png)

#### Consulta técnica:
- Usuario: "¿Qué es AIGC y cómo funciona?"
- Flow: Agente padre → base de conocimientos de AI-Paper → explicación técnica con fuentes

![Ejemplos](/img/tutoriales/aat/5.png)

#### Consulta general:

- Usuario: "Hola, ¿cómo estás?"
- Flujo: Agente padre → respuesta directa (no se necesitan herramientas)

#### Consulta compleja:
- Usuario: "Programa una reunión sobre la implementación de AIGC el próximo martes, extrae los puntos clave y los puntos de conversación"
- Flujo: El agente padre → tanto personal_assistant herramienta como AI-Paper conocimiento → respuesta coordinada

![Ejemplos](/img/tutoriales/aat/6.png)


## Mejores prácticas

### Directrices de diseño:
1. **Descripciones claras de herramientas:** Haz que el nombre y las descripciones de la herramienta sean específicos y aplicables.
2. **Prompt del sistema para el agente padre:** Mejor prompt del sistema para que el agente padre delegue eficazmente


### Casos de uso comunes:

- **Atención al cliente:** Agente de padres con herramientas especializadas para facturación, soporte técnico y consultas generales
- **Asistente de investigación:** Padre con herramientas para diferentes dominios de investigación (legal, técnico, investigación de mercados)
- **Gestión de Proyectos:** Padre con herramientas para la planificación, asignación de recursos y seguimiento del progreso
- **Creación de contenido:** Padre con herramientas para escribir, editar, investigar y formatear