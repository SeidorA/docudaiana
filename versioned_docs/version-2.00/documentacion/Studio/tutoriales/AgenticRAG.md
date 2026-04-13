---
title: "Agentic RAG"
description: "El Agentic RAG es un enfoque basado en agentes para realizar RAG de manera orquestada. Puede implicar la recuperación de datos de diversas fuentes de documentos, la comparación de resúmenes y la implementación de un mecanismo automático de autocorrección."
sidebar_position: 2
---

El Agentic RAG es un enfoque basado en agentes para realizar RAG de manera orquestada. Puede implicar la recuperación de datos de diversas fuentes de documentos, la comparación de resúmenes y la implementación de un mecanismo automático de autocorrección.

En este tutorial, exploraremos cómo construir un sistema RAG autocorrector que compruebe la relevancia de los datos recuperados y regenere automáticamente la consulta si los resultados no son relevantes.

## Resumen 

El flujo RAG Agentic implementa un proceso de varios pasos:

1. Valida y categoriza las consultas entrantes
2. Genera consultas de búsqueda optimizadas para la recuperación de bases de datos vectoriales
3. Evalúa la relevancia de los documentos recuperados
4. Autocorrección regenerando consultas cuando los resultados no son relevantes
5. Proporciona respuestas contextuales basadas en la información recuperada

![AgentFlow V2](/img/tutoriales/agag/1.png)


### Paso 1: Configurar el nodo de inicio
Empieza añadiendo un **nodo Start** a tu lienzo. Esto sirve como punto de entrada para el flujo de tu agente.

![paso1](/img/tutoriales/agag/2.png)

#### Configuración:

- **Tipo de entrada:** Selecciona "Entrada de chat" para aceptar preguntas de usuarios
- **Estado de flujo:** Añadir una variable de estado con clave "" y valor vacío `query`

El nodo Start inicializa el estado del flujo con una variable vacía que se actualizará a lo largo del proceso `query`


### Paso 2: Añadir la validación de consultas

Añade un nodo **Agente de Condición** y conéctalo al nodo Start.

![paso2](/img/tutoriales/agag/3.png)

#### Configuración:

- **Instrucciones:** "Comprueba si el usuario pregunta sobre un tema relacionado con la IA, o simplemente una consulta general"
- **Entrada:** (referencia a la entrada del usuario) ```{{ question }}```
- **Escenarios:**
    - Escenario 1: "Relacionado con la IA"
    - Escenario 2: "General"

Este nodo actúa como router, determinando si la consulta requiere conocimientos especializados en IA o si puede responderse de forma general.

### Paso 3: Creación de la Rama de Respuesta General

Para consultas no relacionadas con la IA, añade un nodo **LLM** conectado a la salida 1 del agente de condición.

![paso3](/img/tutoriales/agag/4.png)

Esto proporciona respuestas directas para consultas generales sin necesidad de recuperar documentos. También puedes reemplazarlo por nodo de Respuesta Directa para devolver una respuesta predefinida.

![paso3](/img/tutoriales/agag/5.png)

### Paso 4: Configurar la generación de consultas
Para consultas relacionadas con IA, añade un nodo **LLM** conectado a la salida 0 del agente de condición, que es el escenario para *"relacionado con IA"*.

![paso4](/img/tutoriales/agag/6.png)

#### Configuración:

- **Mensajes:** Añadir un mensaje del sistema:

`
Given the user question and history, construct a short string that can be used for searching vector database. Only generate the query, no meta comments, no explanation
`

```
Example:
Question: what are the events happening today?
Query: today's event

Example:
Question: how about the address?
Query: business address of the shop

Question: {{ question }}
Query:
```

- **Actualizar estado del flujo:** Establecer la clave "query" con valor . Esto actualizará el valor de "consulty" a la salida de este nodo LLM. ```{{ output }}```

Este nodo transforma la pregunta de lenguaje natural del usuario en una consulta de búsqueda optimizada para la base de datos vectorial.

### Paso 5: Configuración del Vector Database Retriever
Añade un nodo **Retriever** y conéctalo al LLM "Generar consulta".

![paso 5](/img/tutoriales/agag/7.png)

#### Configuración

- **Conocimiento (Archivos de documentos):** Selecciona tu almacén de documentos preconfigurado (por ejemplo, "papel de IA")
- **Consulta del Retriever:** (utiliza el valor "query" del estado compartido) ```{{ $flow.state.query }}```

Este nodo busca en tu base de datos vectorial usando la consulta optimizada y devuelve documentos relevantes.

### Paso 6: Añadir comprobación de relevancia de documentos

Añade otro nodo **Agente de Condición** conectado al Retriever.

![paso 6](/img/tutoriales/agag/8.png)

#### Configuración

- **Instrucciones:** "Determina si el documento es relevante para la pregunta del usuario. La pregunta del usuario es ```{{ question }}"```
- **Entrada:** (referencia a los documentos recuperados del Paso 5) ```{{ retrieverAgentflow_0 }}```
- **Escenarios:**
    - Escenario 1: "Relevante"
    - Escenario 2: "Irrelevante"

Esto evalúa si los documentos recuperados contienen realmente información relevante para la pregunta del usuario.

### Paso 7: Creación del generador de respuesta final

Para documentos relevantes, añade un nodo **LLM** conectado a la salida 0 del verificador de relevancia, que es cuando se empareja el escenario "Relevante".

![paso 7](/img/tutoriales/agag/9.png)

#### Configuración
**Mensaje de entrada:**

```
Given the question: {{ question }}
And the findings: {{ retrieverAgentflow_0 }}
Output the final response
```
Este nodo crea la respuesta final combinando la pregunta del usuario con los documentos recuperados correspondientes.

### Paso 8: Implementación de la autocorrección

Para documentos irrelevantes, añadir un nodo **LLM** conectado a la salida 1 del comprobador de relevancia - para el segundo escenario - "Irrelevante".

![paso 8](/img/tutoriales/agag/10.png)
![paso 8](/img/tutoriales/agag/11.png)

#### Configuración

- **Mensajes:** Añadir mensaje del sistema: "Eres un asistente útil que puede transformar la consulta para producir una mejor pregunta."
- **Mensaje de entrada:**

```
Look at the input and try to reason about the underlying semantic intent / meaning.
Here is the initial question: {{ $flow.state.query }}
Formulate an improved question:
```

- **Actualizar estado del flujo:** Establecer la clave "consulta" con valor `{{ output }}`
![paso 8](/img/tutoriales/agag/12.png)

Este nodo analiza por qué la consulta inicial no devolvió resultados relevantes y genera una versión mejorada.

### Paso 9: Añadir el mecanismo de retorno de lazo
Añade un nodo **Loop** conectado al LLM "Regenerate Question".
![paso 9](/img/tutoriales/agag/13.png)

#### Configuración
- **Volver a Loop:** Seleccionar "retrieverAgentflow_0-Retriever Vector DB"
- **Recuento máximo de bucles:** Ajustado a 5 (evita bucles infinitos)

Esto crea un bucle de retroalimentación que permite al sistema intentarlo de nuevo con consultas mejoradas cuando los resultados iniciales no son satisfactorios.


## Resumen

1. Empieza → Comprueba si la consulta es válida
2. Comprueba si la consulta es válida (relacionada con IA) → Generar consulta
3. Comprueba si la consulta es válida (General) → Respuesta General
4. Generar consulta → Vector de Recuperación de bases de datos
5. Retriever Vector DB → Comprueba si la documentación es relevante
6. Comprueba si la documentación es relevante (relevante) → Generar respuesta
7. Comprueba si la documentación es relevante (Irrelevante) → pregunta sobre Regenerar
8. Pregunta → Bucle de Regeneración de vuelta al Recuperador

## Probando tu flujo
Pon a prueba tu flujo con varios tipos de preguntas:

- Preguntas relacionadas con la IA: "¿Cuáles son los últimos avances en aprendizaje automático?"
- Preguntas generales: "¿Qué tiempo hace hoy?"
- Consultas complejas que podrían requerir refinamiento: "¿Cómo funciona esa nueva técnica?"

![Probando flujo](/img/tutoriales/agag/14.png)

Este Agentic RAG proporciona un sistema robusto y auto-mejorador para la respuesta a preguntas basadas en documentos, capaz de gestionar consultas simples y complejas, manteniendo una alta precisión mediante un refinamiento iterativo.