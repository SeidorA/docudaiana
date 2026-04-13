---
title: Human In The Loop
sidebar_position: 8
---

En los tutoriales anteriores, exploramos cómo un Agente puede usar herramientas dinámicamente para responder consultas o completar tareas asignadas. El concepto de **Humano en el Bucle** (Human-in-the-loop) añade una capa de control al permitir que el Agente solicite la intervención, aprobación o comentarios de una persona antes de continuar.

Hay 2 formas en las que se puede utilizar el humano en el bucle:

* Usando el nodo **Human Input** para detener la ejecución.
* Activando **Require Human Input** (Requerir Entrada Humana) en las herramientas del Agente.

## Nodo de Entrada Humana (Human Input Node)

El nodo **Human Input** permite pausar la ejecución y solo reanudarla después de que un humano haya proporcionado comentarios para aprobar o rechazar la acción.

En este tutorial, aprenderemos a crear un agente de respuesta automática de correo electrónico que solicita comentarios del usuario antes de enviar el correo.

### Resumen General

El objetivo de este caso de uso es crear un sistema inteligente de respuesta de correo electrónico que:

1. Reciba consultas de correos electrónicos entrantes.
2. Genere respuestas profesionales utilizando IA.
3. Solicite aprobación humana antes de realizar el envío.
4. Permita realizar revisiones y mejoras.
5. Envíe automáticamente el correo electrónico aprobado.

![Humano en el Bucle](/img/tutoriales/humand/1.avif)

#### Paso 1: Configuración del Nodo de Inicio (Start)

1. Arrastre y suelte el nodo **Start** en el lienzo. Este será el punto de entrada para los datos del correo electrónico entrante.
2. Configure el nodo Start con los siguientes ajustes:
   * **Tipo de Entrada (Input Type)**: Seleccione "Form Input" para capturar datos de correo estructurados.
   * **Título del Formulario (Form Title)**: "Consulta de Correo Electrónico"
   * **Descripción del Formulario (Form Description)**: "Consulta de correo entrante"
3. Agregue los siguientes Tipos de Entrada de Formulario:
   * **Subject** (Asunto - String): Para capturar el asunto del correo.
   * **Body** (Cuerpo - String): Para capturar el contenido del correo.
   * **From** (De - String): Para capturar la dirección de correo del remitente.

![Humano en el Bucle](/img/tutoriales/humand/2.png)

#### Paso 2: Creación del Agente de Respuesta de Correo Electrónico

1. Agregue un nodo **Agent** y conéctelo al nodo Start. Este agente analizará el correo entrante y generará una respuesta adecuada.
2. Agregue un mensaje de sistema, por ejemplo:


Eres un agente de atención al cliente que trabaja en Daiana Inc. Escribe una respuesta de correo electrónico profesional a la consulta del usuario. Utiliza las herramientas de búsqueda web para obtener más detalles sobre el cliente potencial.

Responde siempre como Samantha, Representante de Atención al Cliente en Daiana. No utilices marcadores de posición (placeholders).


3. Agregue las siguientes herramientas para mejorar las capacidades del agente:
   * **Google Custom Search**: Para investigar información del cliente y proporcionar un contexto relevante.
   * **Current DateTime**: Para incluir marcas de tiempo precisas en las respuestas.

![Humano en el Bucle](/img/tutoriales/humand/3.png)

#### Paso 3: Adición de Entrada Humana para Aprobación

1. Agregue un nodo **Human Input** y conéctelo al Agente de Respuesta de Correo. Esto crea el punto de control del humano en el bucle.
2. Configure el nodo Human Input:
   * **Tipo de Descripción (Description Type)**: "Fixed" (Fijo)
   * **Descripción**: "¿Está seguro de que desea continuar?"
   * **Habilitar Comentarios (Enable Feedback)**: Verdadero (permite que los humanos proporcionen comentarios adicionales).
3. Este nodo pausará el flujo de trabajo y presentará la respuesta generada por la IA a un revisor humano. El revisor puede:
   * **Continuar (Proceed)**: Aprobar la respuesta y seguir con el envío del correo.
   * **Rechazar (Reject)**: Enviar comentarios y volver al agente para que realice mejoras.

![Humano en el Bucle](/img/tutoriales/humand/4.png)

#### Paso 4: Configuración del Mecanismo de Bucle de Retorno (Loop Back)

1. Agregue un nodo **Loop** para manejar los escenarios de rechazo. Esto permite que el flujo de trabajo regrese al Agente de Respuesta de Correo para realizar mejoras.
2. Configure el nodo Loop:
   * **Bucle de Retorno A (Loop Back To)**: Seleccione "Email Reply Agent" del menú desplegable.
   * **Cantidad Máxima de Bucles (Max Loop Count)**: 5 (evita bucles infinitos).
3. Conecte la salida "reject" del nodo Human Input a este nodo Loop. Cuando un humano rechaza la respuesta, el flujo de trabajo volverá al agente con los comentarios para su mejora.

![Humano en el Bucle](/img/tutoriales/humand/5.png)

#### Paso 5: Creación del Generador de Asunto y Cuerpo de Correo Electrónico

1. Agregue un nodo **LLM** y conéctelo a la salida "proceed" del nodo Human Input. Este nodo estructurará la respuesta aprobada en el formato de correo electrónico adecuado.
2. Configure la Salida Estructurada JSON (JSON Structured Output):
   * **Clave (Key)**: "subject", **Tipo**: "string", **Descripción**: "Asunto del correo electrónico"
   * **Clave (Key)**: "body", **Tipo**: "string", **Descripción**: "Cuerpo del correo electrónico"

![Humano en el Bucle](/img/tutoriales/humand/6.png)

#### Paso 6: Configuración del Envío de Correo Electrónico

1. Agregue un nodo **Tool** (Herramienta) y conéctelo al nodo LLM Generador de Asunto y Cuerpo. Este manejará el envío real del correo electrónico.
2. Configure el nodo Tool:
   * **Herramienta (Tool)**: Seleccione "Gmail" de las herramientas disponibles.
   * **Acciones de Mensaje (Message Actions)**: "sendMessage"
3. Configure los argumentos de entrada de la herramienta:
   * **to** (para): Use la variable `{{ $form.from }}` para responder al remitente original.
   * **subject** (asunto): Use `{{ llmAgentflow_0.output.subject }}` para obtener el asunto generado en el Paso 5.
   * **body** (cuerpo): Use `{{ llmAgentflow_0.output.body }}` para obtener el cuerpo del correo generado en el Paso 5.

![Humano en el Bucle](/img/tutoriales/humand/7.png)

### Cómo Funciona el Flujo de Trabajo

Cuando llega una consulta por correo electrónico, esto es lo que sucede:

1. **Entrada de Formulario**: El sistema captura el asunto, el cuerpo y la información del remitente del correo.
2. **Análisis de IA**: El Agente de Respuesta de Correo analiza la consulta y genera una respuesta profesional utilizando la búsqueda web para obtener contexto adicional.
3. **Revisión Humana**: El flujo de trabajo se pausa y presenta la respuesta generada por la IA a un revisor humano.
4. **Punto de Decisión**: El humano puede:
   * **Aprobar**: La respuesta avanza hacia el formateo y envío del correo.
   * **Rechazar**: La respuesta vuelve al agente con comentarios para su mejora.
5. **Formateo del Correo**: Si se aprueba, la respuesta se estructura en el formato de correo adecuado con asunto y cuerpo.
6. **Envío de Correo**: El correo final se envía automáticamente a través de Gmail al remitente original.

### Prueba del Flujo de Trabajo

1. Inicie el flujo de trabajo completando el formulario con una consulta de correo electrónico de muestra.

![Humano en el Bucle](/img/tutoriales/humand/8.png)

2. Revise la respuesta del Agente en el paso de Entrada Humana.

![Humano en el Bucle](/img/tutoriales/humand/9.png)

3. Rechace la respuesta y proporcione más comentarios:

![Humano en el Bucle](/img/tutoriales/humand/10.png)

4. Revise la respuesta revisada del Agente:

![Humano en el Bucle](/img/tutoriales/humand/11.png)

5. Continúe y verifique que el correo se esté enviando correctamente:

![Humano en el Bucle](/img/tutoriales/humand/12.png)



## Requerir Entrada Humana en las Herramientas del Agente

Cuando un Agente decide usar herramientas, sucede lo siguiente internamente:

1. Dada una consulta del usuario, el LLM determina si se necesitan llamadas a herramientas.
2. Si se identifican llamadas a herramientas a partir de la respuesta del LLM, Daiana localiza las herramientas correspondientes y ejecuta las funciones.
3. Los resultados de la ejecución de las herramientas se devuelven al LLM.
4. El LLM decide entonces si se requieren llamadas a herramientas adicionales o si tiene suficiente información para devolver la respuesta final.

![Humano en el Bucle](/img/tutoriales/humand/13.png)

Cuando se activa **Require Human Input**, colocamos un punto de control adicional después de que se detectan las llamadas a herramientas:

![Humano en el Bucle](/img/tutoriales/humand/14.avif)

Esto es crucial para llamadas a herramientas sensibles, como realizar pedidos, reservas, reuniones, enviar correos electrónicos, etc., donde se necesita la confirmación y revisión humana.

Podemos usar el sistema de respuesta de correo electrónico de muestra anterior, pero simplificado para tener un solo Agente.

![Humano en el Bucle](/img/tutoriales/humand/15.png)

### Configuración

1. Agregue un nodo **Agent** y conéctelo al nodo Start. Este único agente se encargará tanto del análisis del correo como de la aprobación humana.
2. Agregue un mensaje de sistema al Agente, por ejemplo:


Eres un agente de atención al cliente que trabaja en Daiana Inc. Crea un borrador de respuesta de correo electrónico profesional a la consulta del usuario. Utiliza las herramientas de búsqueda web para obtener más detalles sobre el cliente potencial.

Responde siempre como Samantha, Representante de Atención al Cliente en Daiana. No utilices marcadores de posición (placeholders).

La fecha de hoy es ```{{ current_date_time }}.```

3. Agregue las siguientes herramientas:
   * **Google Custom Search**: Para investigar la información del cliente.
   * **Gmail**: Para crear borradores de correo electrónico con aprobación humana.
4. Configure la herramienta Gmail:
   * **Tipo de Gmail (Gmail Type)**: "drafts" (borradores)
   * **Acciones de Borrador (Draft Actions)**: "createDraft"
   * **Requerir Entrada Humana (Require Human Input)**: ✅ **Active esta opción** - Esta es la característica clave que crea la funcionalidad de Humano en el Bucle (HITL).

![Humano en el Bucle](/img/tutoriales/humand/16.png)

### Cómo Funciona el Flujo Simplificado

1. **Entrada de Formulario**: El usuario envía los detalles de la consulta por correo electrónico.
2. **Análisis de IA**: El agente analiza el correo y utiliza Google Search para obtener contexto adicional.
3. **Creación de Borrador**: Cuando el agente intenta crear un borrador de Gmail, el flujo de trabajo se pausa.
4. **Revisión Humana**: El sistema presenta el borrador del correo para la aprobación humana.
5. **Decisión**: El humano puede aprobar (crear borrador) o rechazar (proporcionar comentarios y reintentar).

### Prueba del Agente

1. Inicie el flujo de trabajo completando el formulario con una consulta de correo electrónico de muestra.

    ![Humano en el Bucle](/img/tutoriales/humand/17.png)


2. Antes de que el Agente cree el borrador de Gmail, le pedirá al usuario que apruebe o rechace.

    ![Humano en el Bucle](/img/tutoriales/humand/18.png)

3. Si se aprueba la herramienta, el Agente procederá a llamar a la herramienta y crear el borrador en Gmail. El Agente es lo suficientemente inteligente como para determinar el asunto, el cuerpo y el destinatario adecuados para el correo.

![Humano en el Bucle](/img/tutoriales/humand/19.png)


## Compartir Trazas de Ejecución para Revisión y Aprobación Externa

1. Desde la barra lateral izquierda del panel de control, haga clic en **Executions (Ejecuciones).**
2. Busque la traza de ejecución y haga clic en **Share (Compartir).**

![Humano en el Bucle](/img/tutoriales/humand/20.png)

3. La traza de ejecución ahora está disponible como un enlace público. Puede compartir este enlace con otros para su revisión.

![Humano en el Bucle](/img/tutoriales/humand/21.avif)

4. Los usuarios fuera de Daiana pueden rechazar o aprobar:

![Humano en el Bucle](/img/tutoriales/humand/22.avif)