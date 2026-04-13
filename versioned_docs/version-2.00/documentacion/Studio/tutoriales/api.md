---
title: Interacción con la API
sidebar_position: 5
---


# Interactuando con la API

Casi todas las aplicaciones web dependen de las APIs RESTful. Permitir que los LLM interactúen con ellas expande su utilidad práctica.

Este tutorial muestra cómo se pueden usar los LLM para realizar llamadas a la API a través de la funcionalidad de llamada a herramientas (tool calling).

## Prerrequisito - Servidor de Gestión de Eventos de Ejemplo

Vamos a utilizar un servidor de Gestión de Eventos sencillo para mostrar cómo interactuar con él.

```javascript
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5566;

// Middleware
app.use(express.json());

// Fake database - in-memory storage
let events = [
  {
    id: '1',
    name: 'Tech Conference 2024',
    date: '2024-06-15T09:00:00Z',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'Music Festival',
    date: '2024-07-20T18:00:00Z',
    location: 'Austin, TX'
  },
  {
    id: '3',
    name: 'Art Exhibition Opening',
    date: '2024-05-10T14:00:00Z',
    location: 'New York, NY'
  },
  {
    id: '4',
    name: 'Startup Networking Event',
    date: '2024-08-05T17:30:00Z',
    location: 'Seattle, WA'
  },
  {
    id: '5',
    name: 'Food & Wine Tasting',
    date: '2024-09-12T19:00:00Z',
    location: 'Napa Valley, CA'
  }
];

// Helper function to validate event data
const validateEvent = (eventData) => {
  const required = ['name', 'date', 'location'];
  const missing = required.filter(field => !eventData[field]);
  
  if (missing.length > 0) {
    return { valid: false, message: `Missing required fields: ${missing.join(', ')}` };
  }
  
  // Basic date validation
  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
  if (!dateRegex.test(eventData.date)) {
    return { valid: false, message: 'Date must be in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)' };
  }
  
  return { valid: true };
};

// GET /events - List all events
app.get('/events', (req, res) => {
  res.status(200).json(events);
});

// POST /events - Create a new event
app.post('/events', (req, res) => {
  const validation = validateEvent(req.body);
  
  if (!validation.valid) {
    return res.status(400).json({ error: validation.message });
  }
  
  const newEvent = {
    id: req.body.id || uuidv4(),
    name: req.body.name,
    date: req.body.date,
    location: req.body.location
  };
  
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// GET /events/{id} - Retrieve an event by ID
app.get('/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  
  res.status(200).json(event);
});

// DELETE /events/{id} - Delete an event by ID
app.delete('/events/:id', (req, res) => {
  const eventIndex = events.findIndex(e => e.id === req.params.id);
  
  if (eventIndex === -1) {
    return res.status(404).json({ error: 'Event not found' });
  }
  
  events.splice(eventIndex, 1);
  res.status(204).send();
});

// PATCH /events/{id} - Update an event's details by ID
app.patch('/events/:id', (req, res) => {
  const eventIndex = events.findIndex(e => e.id === req.params.id);
  
  if (eventIndex === -1) {
    return res.status(404).json({ error: 'Event not found' });
  }
  
  const validation = validateEvent(req.body);
  
  if (!validation.valid) {
    return res.status(400).json({ error: validation.message });
  }
  
  // Update the event
  events[eventIndex] = {
    ...events[eventIndex],
    name: req.body.name,
    date: req.body.date,
    location: req.body.location
  };
  
  res.status(200).json(events[eventIndex]);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Event Management API server is running on port ${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET    /events      - List all events`);
  console.log(`  POST   /events      - Create a new event`);
  console.log(`  GET    /events/{id} - Get event by ID`);
  console.log(`  PATCH  /events/{id} - Update event by ID`);
  console.log(`  DELETE /events/{id} - Delete event by ID`);
});

module.exports = app; 
```

***

## Herramientas de Solicitud (Request Tools)

Hay 4 herramientas de solicitud que se pueden usar. Esto permite al LLM llamar a las herramientas GET, POST, PUT, DELETE cuando sea necesario.

### Paso 1: Agregar el Nodo de Inicio (Start)

El nodo Start es el punto de entrada de su flujo.

![API paso 1](/img/tutoriales/api/1.png)

### Paso 2: Agregar el Nodo de Agente (Agent)

A continuación, agregue un nodo Agente. En esta configuración, el agente está configurado con cuatro herramientas principales: GET, POST, PUT y DELETE. Cada herramienta está configurada para realizar un tipo específico de solicitud de API.

#### Herramienta 1: GET (Obtener Eventos)

![API paso 1](/img/tutoriales/api/2.png)

* **Propósito:** Obtener una lista de eventos o un evento específico de la API.
* **Entradas de Configuración:**
  * **URL:** `http://localhost:5566/events`
  * **Nombre:** `get_events`
  * **Descripción:** Describa cuándo usar esta herramienta. Por ejemplo: `Úselo cuando necesite obtener eventos`
  * **Encabezados (Headers):** (Opcional) Agregue cualquier encabezado HTTP requerido.
  * **Esquema de Parámetros de Consulta (Query Params Schema):** Un esquema JSON de la API que permite al LLM conocer la estructura de la URL, qué parámetros de ruta y de consulta generar. Por ejemplo:

      ```json
      {
        "id": {
          "type": "string",
          "in": "path",
          "description": "ID of the item to get. /:id"
        },
        "limit": {
          "type": "string",
          "in": "query",
          "description": "Limit the number of items to get. ?limit=10"
        }
      }
      ```

#### Herramienta 2: POST (Crear Evento)

![API paso 2](/img/tutoriales/api/3.png)

* **Propósito:** Crear un nuevo evento en el sistema.
* **Entradas de Configuración:**
  * **URL:** `http://localhost:5566/events`
  * **Nombre:** `create_event`
  * **Descripción:** `Úselo cuando quiera crear un nuevo evento.`
  * **Encabezados (Headers):** (Opcional) Agregue cualquier encabezado HTTP requerido.
  * **Cuerpo (Body)**: Objeto de cuerpo codificado que anulará el cuerpo generado por el LLM.
  * **Esquema del Cuerpo (Body Schema):** Un esquema JSON del cuerpo de la solicitud de la API que permite al LLM saber cómo generar automáticamente el cuerpo JSON correcto. Por ejemplo:

      ```json
      {
        "name": {
          "type": "string",
          "required": true,
          "description": "Name of the event"
        },
        "date": {
          "type": "string",
          "required": true,
          "description": "Date of the event"
        },
        "location": {
          "type": "string",
          "required": true,
          "description": "Location of the event"
        }
      }
      ```

#### Herramienta 3: PUT (Actualizar Evento)

![API paso 3](/img/tutoriales/api/6.png)

* **Propósito:** Actualizar los detalles de un evento existente.
* **Entradas de Configuración:**
  * **URL:** `http://localhost:5566/events`
  * **Nombre:** `update_event`
  * **Descripción:** `Úselo cuando quiera actualizar un evento.`
  * **Encabezados (Headers):** (Opcional) Agregue cualquier encabezado HTTP requerido.
  * **Cuerpo (Body)**: Objeto de cuerpo codificado que anulará el cuerpo generado por el LLM.
  * **Esquema del Cuerpo (Body Schema):** Un esquema JSON del cuerpo de la solicitud de la API que permite al LLM saber cómo generar automáticamente el cuerpo JSON correcto. Por ejemplo:

      ```json
      {
        "name": {
          "type": "string",
          "required": true,
          "description": "Name of the event"
        },
        "date": {
          "type": "string",
          "required": true,
          "description": "Date of the event"
        },
        "location": {
          "type": "string",
          "required": true,
          "description": "Location of the event"
        }
      }
      ```

#### Herramienta 4: DELETE (Eliminar Evento)

![API paso 4](/img/tutoriales/api/6.png)

* **Propósito:** Eliminar un evento del sistema.
* **Entradas de Configuración:**
  * **URL:** `http://localhost:5566/events`
  * **Nombre:** `delete_event`
  * **Descripción:** `Úselo cuando necesite eliminar un evento.`
  * **Encabezados (Headers):** (Opcional) Agregue cualquier encabezado HTTP requerido.
  * **Esquema de Parámetros de Consulta (Query Params Schema):** Un esquema JSON de la API que permite al LLM conocer la estructura de la URL, qué parámetros de ruta y de consulta generar. Por ejemplo:

      ```json
      {
        "id": {
          "type": "string",
          "required": true,
          "in": "path",
          "description": "ID of the item to delete. /:id"
        }
      }
      ```

### Cómo el Agente Utiliza Estas Herramientas

* El agente puede seleccionar dinámicamente qué herramienta usar según la solicitud del usuario o la lógica del flujo.
* Cada herramienta está mapeada a un método HTTP y un punto final (endpoint) específicos, con esquemas de entrada claramente definidos.
* El agente aprovecha el LLM para interpretar la entrada del usuario, completar los parámetros requeridos y realizar la llamada a la API correspondiente.

¡Ciertamente! Aquí hay algunos **Ejemplos de Interacciones** para su flujo, que incluyen consultas de muestra de usuarios y el comportamiento esperado para cada uno, mapeados a la herramienta correspondiente (GET, POST, PUT, DELETE):

### Ejemplos de Interacciones

#### 1. Obtener Eventos (GET)

**Consulta de Ejemplo:**

> "Muéstrame todos los próximos eventos."

**Comportamiento Esperado:**

* El agente selecciona la herramienta **GET**.
* Envía una solicitud GET a `http://localhost:5566/events`.
* El agente devuelve una lista de todos los eventos al usuario.

***

**Consulta de Ejemplo:**

> "Obtén los detalles del evento con ID 12345."

**Comportamiento Esperado:**

* El agente selecciona la herramienta **GET**.
* Envía una solicitud GET a `http://localhost:5566/events/12345`.
* El agente devuelve los detalles del evento con ID `12345`.

***

#### 2. Crear un Nuevo Evento (POST)

**Consulta de Ejemplo:**

> "Crea un nuevo evento llamado 'Conferencia de IA' el 15-07-2024 en el Salón Tech."

**Comportamiento Esperado:**

* El agente selecciona la herramienta **POST**.
* Envía una solicitud POST a `http://localhost:5566/events` con el cuerpo:

    ```json
    {
      "name": "AI Conference",
      "date": "2024-07-15",
      "location": "Tech Hall"
    }
    ```
* El agente confirma que el evento fue creado y puede devolver los detalles del nuevo evento.

***

#### 3. Actualizar un Evento (PUT)

**Consulta de Ejemplo:**

> "Cambia la ubicación del evento 'Conferencia de IA' el 15-07-2024 a 'Auditorio Principal'."

**Comportamiento Esperado:**

* El agente selecciona la herramienta **PUT**.
* Envía una solicitud PUT a `http://localhost:5566/events` con los detalles actualizados del evento:

    ```json
    {
      "name": "AI Conference",
      "date": "2024-07-15",
      "location": "Main Auditorium"
    }
    ```
* El agente confirma que el evento fue actualizado.

***

#### 4. Eliminar un Evento (DELETE)

**Consulta de Ejemplo:**

> "Elimina el evento con ID 12345."

**Comportamiento Esperado:**

* El agente selecciona la herramienta **DELETE**.
* Envía una solicitud DELETE a `http://localhost:5566/events/12345`.
* El agente confirma que el evento fue eliminado.



***

## Kit de Herramientas OpenAPI (OpenAPI Toolkit)

Las 4 herramientas de solicitud funcionan muy bien si tienes un par de APIs, pero imagina tener decenas o cientos de APIs, esto podría volverse difícil de mantener. Para solucionar este problema, Flowise ofrece un kit de herramientas OpenAPI que puede recibir un archivo YAML de OpenAPI y analizar cada API como una herramienta. La [Especificación OpenAPI (OAS)](https://swagger.io/specification/) es un estándar aceptado universalmente para describir los detalles de las APIs RESTful en un formato que las máquinas pueden leer e interpretar.&#x20;

Usando la API de Gestión de Eventos, podemos generar un archivo YAML de OpenAPI:

```yaml
openapi: 3.0.0
info:
  version: 1.0.0
  title: Event Management API
  description: An API for managing event data

servers:
  - url: http://localhost:5566
    description: Local development server

paths:
  /events:
    get:
      summary: List all events
      operationId: listEvents
      responses:
        '200':
          description: A list of events
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Event'
    
    post:
      summary: Create a new event
      operationId: createEvent
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/EventInput'
      responses:
        '201':
          description: The event was created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Event'
        '400':
          description: Invalid input
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

  /events/{id}:
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: string
        description: The event ID
    
    get:
      summary: Retrieve an event by ID
      operationId: getEventById
      responses:
        '200':
          description: The event
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Event'
        '404':
          description: Event not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    
    patch:
      summary: Update an event's details by ID
      operationId: updateEventDetails
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/EventInput'
      responses:
        '200':
          description: The event's details were updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Event'
        '400':
          description: Invalid input
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '404':
          description: Event not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    
    delete:
      summary: Delete an event by ID
      operationId: deleteEvent
      responses:
        '204':
          description: The event was deleted
        '404':
          description: Event not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

components:
  schemas:
    Event:
      type: object
      properties:
        id:
          type: string
          description: The unique identifier for the event
        name:
          type: string
          description: The name of the event
        date:
          type: string
          format: date-time
          description: The date and time of the event in ISO 8601 format
        location:
          type: string
          description: The location of the event
      required:
        - name
        - date
        - location
    
    EventInput:
      type: object
      properties:
        name:
          type: string
          description: The name of the event
        date:
          type: string
          format: date-time
          description: The date and time of the event in ISO 8601 format
        location:
          type: string
          description: The location of the event
      required:
        - name
        - date
        - location
    
    Error:
      type: object
      properties:
        error:
          type: string
          description: Error message
```

### Paso 1: Agregar el Nodo de Inicio (Start)

![API paso 1](/img/tutoriales/api/7.png)

### Paso 2: Agregar el Nodo de Agente (Agent)

A continuación, agregue un nodo Agente. En esta configuración, el agente está configurado con solo 1 herramienta: OpenAPI Toolkit.

#### Herramienta: Kit de Herramientas OpenAPI (OpenAPI Toolkit)

![API paso 1](/img/tutoriales/api/8.png)

* **Propósito:** Obtener la lista de APIs del archivo YAML y convertir cada API en una lista de herramientas.
* **Entradas de Configuración:**
  * **Archivo YAML:** El archivo YAML de OpenAPI.
  * **Retorno Directo (Return Direct):** Si se debe devolver la respuesta de la API directamente.
  * **Encabezados (Headers):** (Opcional) Agregue cualquier encabezado HTTP requerido.
  * **Eliminar parámetros nulos (Remove null parameters):** Eliminar todas las claves con valores nulos de los argumentos analizados.
  * **Código Personalizado (Custom Code)**: Personalizar cómo se devuelve la respuesta.

### Ejemplos de Interacciones:

Podemos usar las mismas consultas de ejemplo del caso anterior para probarlo:

![API paso 1](/img/tutoriales/api/9.png)

***

## Llamada a la API de Forma Secuencial

De los ejemplos anteriores, hemos visto cómo el Agente puede llamar dinámicamente a las herramientas e interactuar con las APIs. En algunos casos, puede ser necesario llamar a una API de forma secuencial antes o después de ciertas acciones. Por ejemplo, podrías obtener una lista de clientes de un CRM y pasarla a un Agente. En tales casos, puedes usar el nodo HTTP.

![API paso 1](/img/tutoriales/api/10.png)

## Mejores Prácticas

* La interacción con las APIs se utiliza normalmente cuando se desea que un agente obtenga la información más actualizada. Por ejemplo, un agente podría recuperar la disponibilidad de su calendario, el estado de un proyecto u otros datos en tiempo real.
* A menudo es útil incluir explícitamente la hora actual en el mensaje del sistema (system prompt). Flowise proporciona una variable llamada `{{current_date_time}}`, que recupera la fecha y hora actuales. Esto permite que el LLM sea consciente del momento presente, de modo que si pregunta por su disponibilidad para hoy, el modelo pueda hacer referencia a la fecha correcta. De lo contrario, puede basarse en la fecha de su último corte de entrenamiento, lo que devolvería información desactualizada. Por ejemplo:

```
You are helpful assistant.

Todays date time is {{current_date_time }}
```