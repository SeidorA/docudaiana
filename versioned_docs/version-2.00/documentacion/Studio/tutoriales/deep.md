---
title: Deep Research
sidebar_position: 9
---

El Agente de Investigación Profunda (Deep Research Agent) es un sistema multi-agente sofisticado que puede realizar investigaciones exhaustivas sobre cualquier tema. Para ello, desglosa consultas complejas en tareas manejables, despliega agentes de investigación especializados y sintetiza los hallazgos en informes detallados.

Este enfoque está inspirado en el blog de Anthropic: [Cómo construimos nuestro sistema de investigación multi-agente](https://www.anthropic.com/engineering/built-multi-agent-research-system).

## Resumen General

El flujo de trabajo del Agente de Investigación Profunda consta de varios componentes clave que trabajan en conjunto:

1. **Agente Planificador (Planner Agent)**: Analiza la consulta de investigación y genera una lista de tareas de investigación especializadas.
2. **Iteración**: Crea múltiples agentes de investigación para trabajar en diferentes aspectos de la consulta.
3. **SubAgentes de Investigación (Research SubAgents)**: Agentes individuales que realizan investigaciones focalizadas utilizando la búsqueda web y otras herramientas.
4. **Agente Escritor (Writer Agent)**: Sintetiza todos los hallazgos en un informe coherente y completo.
5. **Agente de Condición (Condition Agent)**: Determina si se necesita investigación adicional o si los hallazgos son suficientes.
6. **Bucle (Loop)**: Regresa al Agente Planificador para mejorar la calidad de la investigación.

!["paso actual"](/img/tutoriales/deep/1.png)

### Paso 1: Crear el Nodo de Inicio (Start)

!["paso actual"](/img/tutoriales/deep/2.png)

1. Comience agregando un nodo **Start** a su lienzo.
2. Configure el nodo Start con **Form Input** (Entrada de Formulario) para recopilar la consulta de investigación de los usuarios.
3. Configure el formulario de la siguiente manera:
   * **Título del Formulario**: "Investigación"
   * **Descripción del Formulario**: "Un agente de investigación que recibe una consulta y devuelve un informe detallado"
   * **Tipos de Entrada de Formulario**: Agregue una entrada de cadena (string) con la etiqueta "Consulta" y el nombre de variable "query".
4. Inicialice el Estado del Flujo (Flow State) con dos variables clave:
   * `subagents`: Para almacenar la lista de tareas de investigación que llevarán a cabo los subagentes.
   * `findings`: Para acumular los resultados de la investigación.

!["paso actual"](/img/tutoriales/deep/3.png)

### Paso 2: Agregar el Agente Planificador (Planner Agent)

!["paso actual"](/img/tutoriales/deep/4.png)

1. Conecte un nodo **LLM** al nodo Start.
2. Configure el mensaje del sistema para que actúe como un líder de investigación experto con las siguientes responsabilidades clave:
   * Analizar y desglosar las consultas de los usuarios.
   * Crear planes de investigación detallados.
   * Generar tareas específicas para los subagentes.
   * Ejemplo de prompt - [research\_lead\_agent.md](https://github.com/anthropics/anthropic-cookbook/blob/main/patterns/agents/prompts/research_lead_agent.md)

!["paso actual"](/img/tutoriales/deep/5.png)

3. Configure la **Salida Estructurada JSON** (JSON Structured Output) para devolver una lista de tareas para los subagentes:

```json
{
  "task": {
    "type": "string", 
    "description": "The research task for subagent"
  }
}
```

4. Actualice el estado del flujo almacenando la lista de subagentes generada.

!["paso actual"](/img/tutoriales/deep/6.png)

### Paso 3: Crear el Bloque de Iteración de SubAgentes

!["paso actual"](/img/tutoriales/deep/7.png)

1. Agregue un nodo **Iteration** (Iteración).
2. Conéctelo a la salida del Planificador (Planner).
3. Configure la entrada de iteración al estado del flujo: `{{ $flow.state.subagents }}`. Por cada elemento en la matriz, se generará un subagente para llevar a cabo la tarea de investigación. Ejemplo:

!["paso actual"](/img/tutoriales/deep/8.png)



### Paso 4: Construir el SubAgente de Investigación

1. Dentro del bloque de iteración, agregue un nodo **Agent**.
2. Configure el mensaje del sistema para que actúe como un subagente de investigación enfocado con:
   * Capacidades claras de comprensión de tareas.
   * Planificación eficiente de la investigación (2-5 llamadas a herramientas por tarea).
   * Evaluación de la calidad de las fuentes.
   * Uso de herramientas en paralelo para mayor eficiencia.
   * Ejemplo de prompt - [research\_subagent.md](https://github.com/anthropics/anthropic-cookbook/blob/main/patterns/agents/prompts/research_subagent.md)

!["paso actual"](/img/tutoriales/deep/9.png)

3. Agregue las siguientes herramientas de investigación (puede usar sus herramientas preferidas):
   * **Google Search**: Para enlaces de búsqueda web.
   * **Web Scraper**: Para la extracción de contenido web. Esto extraerá el contenido de los enlaces de Google Search.
   * **ArXiv Search**: Para buscar y cargar contenido de artículos académicos.

!["paso actual"](/img/tutoriales/deep/10.png)

4. Establezca el mensaje del usuario para pasar la tarea de la iteración actual: `{{ $iteration.task }}`

### Paso 5: Agregar el Agente Escritor (Writer Agent)

!["paso actual"](/img/tutoriales/deep/11.png)

1. Conecte un nodo **LLM** después de que se complete la iteración.
2. Se necesita un LLM de contexto grande como Gemini (con un tamaño de contexto de 1 a 2 millones) para sintetizar todos los hallazgos y generar el informe.
3. Configure el mensaje del sistema para que actúe como un escritor de investigación experto que:
   * Preserve el contexto completo de los hallazgos de la investigación.
   * Mantenga la integridad de las citas.
   * Agregue estructura y claridad.
   * Genere informes profesionales en formato Markdown.
4. Configure el mensaje del usuario para incluir:
   * Tema de investigación: `{{ $form.query }}`
   * Hallazgos existentes: `{{ $flow.state.findings }}`
   * Nuevos hallazgos: `{{ iterationAgentflow_0 }}`

!["paso actual"](/img/tutoriales/deep/12.png)

4. Actualice `{{ $flow.state.findings }}` con la salida del Agente Escritor (Writer Agent).

!["paso actual"](/img/tutoriales/deep/13.png)

### Paso 6: Implementar la Verificación de Condición

!["paso actual"](/img/tutoriales/deep/14.png)

1. Agregue un **Condition Agent** (Agente de Condición).
2. Configure la lógica de condición para determinar si se necesita investigación adicional.
3. Configure dos escenarios:
   * "Se necesitan más subagentes"
   * "Los hallazgos son suficientes"
4. Proporcione contexto de entrada que incluya:
   * Tema de investigación
   * Lista actual de subagentes
   * Hallazgos acumulados

!["paso actual"](/img/tutoriales/deep/15.png)

### Paso 7: Crear el Mecanismo de Bucle (Loop)

1. Para la ruta **"Se necesitan más subagentes"**, agregue un nodo **Loop**.
2. Configúrelo para que vuelva al nodo del Planificador (Planner).
3. Establezca un conteo máximo de bucles de 5 para evitar bucles infinitos.
4. El Agente Planificador revisará el informe actual y generará tareas de investigación adicionales.

!["paso actual"](/img/tutoriales/deep/16.png)

### Paso 8: Agregar la Salida Final

1. Para la ruta "**Los hallazgos son suficientes**", agregue un **Direct Reply** (Respuesta Directa).
2. Configúrelo para mostrar el informe final: `{{ $flow.state.findings }}`

!["paso actual"](/img/tutoriales/deep/17.png)

!["paso actual"](/img/tutoriales/deep/18.png)

## Probar el Flujo

1. Comience con un tema simple como "Sistemas multi-agente autónomos en entornos del mundo real".
2. Observe cómo el Planificador desglosa la investigación en tareas focalizadas.
3. Monitoree a los SubAgentes mientras realizan investigaciones en paralelo.
4. Revise la síntesis de hallazgos del Agente Escritor.
5. Note si el Agente de Condición solicita investigación adicional.

!["paso actual"](/img/tutoriales/deep/19.png)


## Tutorial (Walkthrough)

1. 🧠 Agente Planificador - analiza la consulta de investigación y genera una lista de tareas de investigación especializadas.
2. 🖧 Subagentes - crean múltiples subagentes de investigación, realizan investigaciones focalizadas usando herramientas de búsqueda web, raspado web y ArXiv.
3. ✍️ Agente Escritor - sintetiza todos los hallazgos en un informe coherente y completo con citas.
4. ⇄ Agente de Condición - determina si se necesita investigación adicional o si los hallazgos son suficientes.
5. 🔄 Bucle hacia el Agente Planificador para generar más subagentes.

### 🧠 Agente Planificador (Planner Agent)

Actúa como un líder de investigación experto para:

* Analizar y desglosar las consultas de los usuarios.
* Crear planes de investigación detallados.
* Generar tareas específicas para los subagentes.

Salida de una matriz de tareas de investigación.

!["paso actual"](/img/tutoriales/deep/20.png)

### 🖧 Subagentes

Por cada tarea en la lista, se generará un nuevo subagente para realizar investigaciones focalizadas.

Cada subagente tiene:

* Capacidades claras de comprensión de tareas.
* Planificación eficiente de la investigación (2-5 llamadas a herramientas por tarea).
* Evaluación de la calidad de las fuentes.
* Uso de herramientas en paralelo para mayor eficiencia.

!["paso actual"](/img/tutoriales/deep/21.png)

El subagente tiene acceso a herramientas de búsqueda web, raspado web y ArXiv.

* 🌐 Google Search - para enlaces de búsqueda web.
* 🗂️ Web Scraper - para la extracción de contenido web. Esto extraerá el contenido de los enlaces de Google Search.
* 📑 ArXiv - buscar, descargar y leer el contenido de artículos de ArXiv.

!["paso actual"](/img/tutoriales/deep/22.png)

### ✍️ Agente Escritor (Writer Agent)

Actúa como un escritor de investigación que convierte los hallazgos en bruto en un informe estructurado y claro en Markdown. Preserva todo el contexto y las citas.

Consideramos que Gemini es el mejor para esto, gracias a su gran ventana de contexto que le permite sintetizar todos los hallazgos de manera efectiva.

!["paso actual"](/img/tutoriales/deep/23.jpg)

### ⇄ Agente de Condición (Condition Agent)

Con el informe generado, dejamos que el LLM determine si se necesita investigación adicional o si los hallazgos son suficientes.

Si se necesita más, el Agente Planificador revisa todos los mensajes, identifica áreas de mejora, genera tareas de investigación de seguimiento y el bucle continúa.

Si los hallazgos son suficientes, simplemente devolvemos el informe final del Agente Escritor como la salida.

!["paso actual"](/img/tutoriales/deep/24.jpg)

## Configuración Avanzada

#### Personalización de la Profundidad de la Investigación

Puede ajustar la profundidad de la investigación modificando el prompt del sistema del Planificador para:

* Aumentar el número de SubAgentes para temas complejos (hasta 10-20).
* Ajustar el presupuesto de llamadas a herramientas por SubAgente.
* Modificar el conteo de bucles para una investigación más iterativa.

Sin embargo, esto también conlleva un costo adicional por un mayor consumo de tokens.

#### Adición de Herramientas Especializadas

Mejore las capacidades de investigación agregando herramientas específicas de dominio:

* Herramientas personales como Gmail, Slack, Google Calendar, Teams, etc.
* Otros raspadores web, herramientas de búsqueda web como Firecrawl, Exa, Apify, etc.

#### Adición de Contexto RAG

Puede agregar más contexto al LLM con [RAG](rag.md). Esto permite que el LLM obtenga información de fuentes de conocimiento existentes relevantes cuando sea necesario.
