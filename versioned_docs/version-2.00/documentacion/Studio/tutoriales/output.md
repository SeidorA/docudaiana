---
title: Structured Output
sidebar_position: 7
---

En numerosos casos de uso, como los chatbots, se espera que los modelos respondan a los usuarios en lenguaje natural. Sin embargo, hay situaciones en las que las respuestas en lenguaje natural no son ideales. Por ejemplo, si necesitamos tomar la salida del modelo y pasarla como el cuerpo de una solicitud HTTP, o almacenarla en una base de datos, es esencial que la salida se ajuste a un esquema predefinido. Este requisito da lugar al concepto de **salida estructurada (structured output)**, donde los modelos son guiados para generar respuestas en un formato específico y estructurado.

En este tutorial vamos a ver cómo generar una salida estructurada desde un LLM y pasarla como el cuerpo de una solicitud HTTP.

## Prerrequisito

Vamos a utilizar el mismo [Servidor de Gestión de Eventos](./api) para la solicitud HTTP.

¡Absolutamente! Aquí tienes un tutorial para tu **Flujo de Salida Estructurada** en un formato consistente con tu documentación de "Agente como Herramienta", incluyendo explicaciones paso a paso y marcadores de posición para imágenes.

***

## Resumen General

1. Recibe la entrada del usuario a través de un nodo de Inicio (Start).
2. Utiliza un LLM para generar una matriz (array) JSON estructurada.
3. Recorre cada elemento de la matriz en un bucle.
4. Envía cada elemento a través de HTTP a un punto final (endpoint) externo.

![Salida Estructurada](/img/tutoriales/output/1.avif)

### Paso 1: Configuración del Nodo de Inicio (Start)

Comience agregando un nodo **Start** a su lienzo.

![Salida Estructurada](/img/tutoriales/output/2.png)

**Parámetros de Entrada Clave:**

* **Tipo de Entrada (Input Type):**
  * `chatInput` (predeterminado): El flujo comienza con un mensaje de chat del usuario.
  * `formInput`: El flujo comienza con un formulario (si desea recopilar datos estructurados del usuario).
* **Memoria Efímera (Ephemeral Memory):**
  * (Opcional) Si está habilitado, el flujo no conserva el historial de chat entre ejecuciones.
* **Estado del Flujo (Flow State):**
  * (Opcional) Pre-poblar variables de estado.
  *   Ejemplo:

      ```json
      [
        { "key": "answers", "value": "" }
      ]
      ```
* **Persistir Estado (Persist State):**
  * (Opcional) Si está habilitado, el estado se persiste a través de la misma sesión.

### Paso 2: Generación de Salida Estructurada con LLM

Agregue un nodo LLM y conéctelo al nodo Start.

![Salida Estructurada](/img/tutoriales/output/3.png)

**Propósito:** Utiliza un modelo de lenguaje para analizar la entrada y generar una matriz JSON estructurada.

**Parámetros de Entrada Clave:**

* **Salida Estructurada JSON (JSON Structured Output):**
  * **Clave (Key):** `answers`
  * **Tipo (Type):** `JSON Array`
  *   **Esquema JSON (JSON Schema):**

      ```json
      {
        "name": { "type": "string", "required": true, "description": "Name of the event" },
        "date": { "type": "string", "required": true, "description": "Date of the event" },
        "location": { "type": "string", "required": true, "description": "Location of the event" }
      }
      ```
  * **Descripción:** "respuesta a la consulta del usuario"
* **Actualizar el Estado del Flujo (Update Flow State):**
  * Actualiza el estado del flujo con la salida JSON generada.
  *   Ejemplo:

      ```json
      [
        {
          "key": "answers",
          "value": "{{ output.answers }}"
        }
      ]
      ```

### Paso 3: Bucle a través de la Matriz JSON

Agregue un nodo de Interación (Iteration) y conéctelo a la salida del nodo LLM.

![Salida Estructurada](/img/tutoriales/output/4.avif)

**Propósito:** Itera sobre cada elemento en la matriz JSON generada desde el nodo LLM.

**Parámetros de Entrada Clave:**

*   **Entrada de Matriz (Array Input):**

    * La matriz sobre la cual iterar. Configúrela con las respuestas del estado guardado:

    ```html
    {{ $flow.state.answers }}
    ```

    * Esto significa que el nodo recorrerá cada evento en la matriz de respuestas (answers).

### Paso 4: Envío de cada elemento a través de HTTP

Dentro del bucle, agregue un nodo **HTTP**.

![Salida Estructurada](/img/tutoriales/output/5.png)

**Propósito:** Para cada elemento en la matriz, envía una solicitud HTTP POST a un punto final (endpoint) especificado (por ejemplo, `http://localhost:5566/events`).

**Parámetros de Entrada Clave:**

* **Método (Method):**
  * `POST` (predeterminado para este caso de uso).
* **URL:**
  * El punto final al que enviar los datos.
  *   Ejemplo:

      ```
      http://localhost:5566/events
      ```
* **Encabezados (Headers):**
  * (Opcional) Agregue cualquier encabezado HTTP requerido (por ejemplo, para autenticación).
* **Parámetros de Consulta (Query Params):**
  * (Opcional) Agregue cualquier parámetro de consulta si es necesario.
* **Tipo de Cuerpo (Body Type):**
  * `json` (predeterminado): Envía el cuerpo como JSON.
* **Cuerpo (Body):**
  * Los datos a enviar en el cuerpo de la solicitud.
  *   Configúrelo con el elemento actual del bucle:

      ```html
      {{ $iteration }}
      ```
* **Tipo de Respuesta (Response Type):**
  * `json` (predeterminado): Espera una respuesta JSON.

***

## Interacciones de Ejemplo

**Entrada del Usuario:**

```
crea 2 eventos:
1. Conferencia de JS el próximo sábado en Países Bajos
2. Meetup de GenAI, 19 de septiembre, en Dublín
```

**Flujo:**

* El nodo Start recibe la entrada.
* El nodo LLM genera una matriz JSON de eventos.
* El nodo Loop (Bucle) itera a través de cada evento.
* El nodo HTTP crea cada evento a través de la API.

![Salida Estructurada](/img/tutoriales/output/6.avif)

![Salida Estructurada](/img/tutoriales/output/7.png)



## Mejores Prácticas

**Pautas de Diseño:**

1. **Esquema de Salida Claro:** Defina la estructura esperada para la salida del LLM para asegurar un procesamiento posterior confiable.

**Casos de Uso Comunes:**

* **Procesamiento de Eventos:** Recopilar y enviar datos de eventos a un calendario o sistema de gestión de eventos.
* **Entrada de Datos Masiva:** Generar y enviar múltiples registros a una base de datos o API.
* **Notificaciones Automatizadas:** Enviar mensajes o alertas personalizados para cada elemento en una lista.