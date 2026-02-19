---
title: 'Nodos'
iconName: "book"
sidebar_position: 4
---
import Admonition from '@theme/Admonition';

## Comprender los nodos de DAIANA STUDIO
En este articulo, utilizamos nodos 🧷**LangChain** al crear flujos de chat. Encontrará explicaciones detalladas sobre estos nodos fundamentales en la página especializada sobre 🧷**LangChain**, por lo que le recomendamos que la consulte para obtener más información.

Los nodos de **DAIANA STUDIO** se dividen en entradas y salidas. Calculan las salidas a partir de las entradas, pasando los datos secuencialmente al siguiente nodo como entrada. En el nodo final (cadena), se obtiene el resultado de la consulta al LLM y se muestra en el cuadro de chat.

En el diagrama siguiente, la salida de los nodos ChatOllama / Prompt Template se convierte en la entrada para el nodo final LLM Chain. A partir de estos valores, el resultado de la consulta al LLM se muestra como la respuesta del LLM en el cuadro de diálogo del chat.

<p align="center">
![1](/img/studio/3/1.png)
</p>

## Introducción 🦜️🔗 LangChain

### Chain
Al consultar el LLM, al insertar los procesos Prompt y Output Parser antes y después del modelo de lenguaje, se crea un único nodo de cadena y se habilita la conexión entre los nodos de cadena.

Las cadenas se clasifican en los cuatro grupos siguientes. Si la salida de un nodo de cadena es ejecutable, el resultado de la consulta al LLM se obtendrá en el cuadro de chat como nodo final.

- Un ejemplo en el que la salida sirve como entrada para otros nodos, ya que la salida no es ejecutable
- Cadena de salida | json
<p align="center">
![1](/img/studio/3/2.png)
</p>

- Un ejemplo en el que actúa como el nodo final de la cadena, generando el resultado de la consulta al LLM, ya que la salida es ejecutable.
<p align="center">
![1](/img/studio/3/3.png)
</p>

- Salida ejecutable
<p align="center">
![1](/img/studio/3/4.png)
</p>
<p align="center">
![1](/img/studio/3/5.png)
</p>


Se recomienda consultar el Marketplace para ver ejemplos de uso.

- Prompt Chains
- Cadena LLM
- Marketplace / Cadena LLM simple
  
A continuación se muestra un ejemplo básico de una cadena LLM sin estado **(sin memoria)** que utiliza una plantilla de indicación y un modelo LLM.

Es posible establecer un valor de entrada del diálogo de chat como valor de indicación.
<p align="center">
![1](/img/studio/3/6.png)
</p>

- Mercado / Encadenamiento rápido

Es posible utilizar el resultado de una cadena como indicador para otra cadena.

Al configurar la salida de una cadena LLM como predicción de salida, se puede pasar el resultado como variable a la plantilla de indicador. Para obtener la respuesta final del resultado de la cadena LLM, se configura la salida en la cadena LLM.
<p align="center">
![1](/img/studio/3/7.png)
</p>

- Cadena de conversación
- Marketplace / Cadena de conversación simple Este es un ejemplo básico de una cadena de conversación que utiliza la memoria integrada y funciona de manera similar a **ChatGPT**.
<p align="center">
![1](/img/studio/3/8.png)
</p>

- Cadena de indicaciones múltiples
- Marketplace  / Cadena de indicaciones múltiples
Selecciona automáticamente una indicación adecuada en función del valor introducido en el cuadro de diálogo del chat y proporciona una respuesta.

<p align="center">
![1](/img/studio/3/9.png)
</p>

- Cadenas API
- Cadena API POST
- Marketplace / Agente API
Cuando se le proporciona la documentación de la API, el agente determina automáticamente qué API llamar y genera la URL y el cuerpo de la solicitud a partir de la conversación.

<p align="center">
![1](/img/studio/3/10.png)
</p>

- Cadena API GET
- Marketplace / Agente API
Cuando se le proporciona la documentación de la API, el agente determina automáticamente qué API llamar y genera la URL y el cuerpo de la solicitud a partir de la conversación.

<p align="center">
![1](/img/studio/3/11.png)
</p>

- Cadena OpenAPI
- Marketplace / Agente API OpenAI
Mediante el uso de la herramienta OpenAPI Tool Agent y Chain, determina automáticamente qué API llamar y genera la URL y el cuerpo de la solicitud a partir de la conversación.

<p align="center">
![1](/img/studio/3/12.png)
</p>

Utilizar una base de datos SQL para responder.
<p align="center">
![1](/img/studio/3/13.png)
</p>


- Cadena QA de Vectara
- Marketplace / Cadena RAG de Vectara
- Cadena QA para Vectara
- Cadena QA de VectorDB
<p align="center">
![1](/img/studio/3/14.png)
</p>

- Cadenas de recuperación
- Cadena de control de calidad de recuperación
- Marketplace / VectorDB múltiple
Uso del agente para seleccionar VectorDB.

<p align="center">
![1](/img/studio/3/15.png)
</p>

- Cadena de preguntas y respuestas de recuperación conversacional
- Marketplace  / Cadena de preguntas y respuestas de recuperación conversacional
Uso de la cadena de preguntas y respuestas de recuperación conversacional para una sesión de preguntas y respuestas con un archivo de texto.

<p align="center">
![1](/img/studio/3/16.png)
</p>

- Cadena de control de calidad de recuperación múltiple
- Marketplace / Cadena de control de calidad de recuperación múltiple
<p align="center">
![1](/img/studio/3/17.png)
</p>


- La cadena selecciona automáticamente los resultados de búsqueda adecuados de diferentes bases de datos vectoriales.
<p align="center">
![1](/img/studio/3/17.png)
</p>

<Admonition type="tip" icon="💡" title="Tip">
  Al crear un Chainflow en DAIANA STUDIO, comenzar desde el nodo Chain permite un proceso de creación de flujo fluido.
</Admonition>

### Modelos de lenguaje
En DAIANA STUDIO (LangChain), los nodos para utilizar LLM se clasifican en dos grupos: LLM y modelos de chat. Los LLM se utilizan en cadenas sin estado (sin memoria), mientras que los modelos de chat se utilizan en cadenas conversacionales (con memoria).
- LLM
    - Se utiliza en cadenas LLM sin estado (sin memoria).
<p align="center">
![1](/img/studio/3/18.png)
</p>

- Modelos de chat
- Se utiliza en cadenas conversacionales (con memoria).


<Admonition type="tip" icon="💡" title="Tip">
  Depending on the Chains or Agents used, models that have been trained for functions like function calling or multimodal processing are expected to be utilized.
</Admonition>

<p align="center">
![1](/img/studio/3/19.png)
</p>

### Prompts

En la imagen al principio de este capítulo, utilizamos Format Prompt Values para procesar los valores de entrada y consultar el LLM. En DAIANA STUDIO (LangChain), Prompts tiene tres tipos de nodos de prompt: Prompt Template, utilizado en cadenas sin estado (sin memoria); Chat Prompt Template, utilizado en cadenas conversacionales (con memoria); y Few Shot Prompt Template, que permite la selección automática de ejemplos de prompts.

- Prompt Template
- Es una plantilla de prompt utilizada en cadenas sin estado (sin memoria). Puede escribir la consulta al LLM en la plantilla. Las secciones de la consulta marcadas como ``{nombre_variable}`` pueden sustituirse por valores especificados por Formatear valores de prompt. Además de especificar valores directamente, también puede especificar la salida de la pregunta, el historial de chat o la cadena LLM.

<p align="center">
![1](/img/studio/3/20.png)
</p>

En la imagen al principio de este capítulo, utilizamos Format Prompt Values para procesar los valores de entrada y consultar el LLM. En DAIANA STUDIO (LangChain), Prompts tiene tres tipos de nodos de prompt: Prompt Template, utilizado en cadenas sin estado (sin memoria); Chat Prompt Template, utilizado en cadenas conversacionales (con memoria); y Few Shot Prompt Template, que permite la selección automática de ejemplos de prompts.

- Prompt Template
- Es una plantilla de prompt utilizada en cadenas sin estado (sin memoria). Puede escribir la consulta al LLM en la plantilla. Las secciones de la consulta marcadas como ``{nombre_variable}`` pueden sustituirse por valores especificados por Formatear valores de prompt. Además de especificar valores directamente, también puede especificar la salida de la pregunta, el historial de chat o la cadena LLM.
<p align="center">
![1](/img/studio/3/21.png)
</p>

- Plantilla de indicaciones de pocos disparos
- Mercado / Antónimo Utilizando ejemplos, utilizaremos una plantilla de indicaciones de pocos disparos para generar antónimos para la entrada especificada por el usuario.

### Analizadores de salida
Especifique el formato de los resultados de la consulta LLM. Todos los nodos de los analizadores de salida se utilizan en cadenas sin estado (sin memoria).
- Analizador de salida CSV
- Analizador de salida de mercado/lista

Mostrar los resultados de la consulta LLM como una lista de valores separados por comas.
<p align="center">
![1](/img/studio/3/22.png)
</p>

- Analizador de salida de lista personalizada
- Muestra los resultados de la consulta LLM como una lista de valores.
<p align="center">
![1](/img/studio/3/23.png)
</p>


- Analizador de salida estructurada
- Marketplace / Analizador de salida estructurada
Genera los resultados de la consulta LLM como JSON.

<p align="center">
![1](/img/studio/3/24.png)
</p>

- Analizador sintáctico avanzado de salida estructurada
- Marketplace / Analizador sintáctico avanzado de salida estructurada
Genera los resultados de la consulta LLM como valores estructurados con un esquema Zod.

<p align="center">
![1](/img/studio/3/25.png)
</p>

### Memoria
En el contexto de las **consultas LLM**, en las que el contexto de conversaciones pasadas debe reflejarse en los resultados, **DAIANA STUDIO** (LangChain) requiere el uso de memoria. Los nodos de memoria se utilizan en cadenas conversacionales (con memoria) y se dividen en dos grupos: memoria a corto plazo y memoria a largo plazo.

<p align="center">
![1](/img/studio/3/26.png)
</p>

- Memoria a corto plazo

**Memoria intermedia**
<p align="center">
![1](/img/studio/3/27.png)
</p>


**Resumen**
La memoria a corto plazo de Daiana Studio se refiere a nodos de memoria temporales que solo pueden almacenar conversaciones pasadas en la RAM. Simplemente guarda las conversaciones en una matriz y las pasa al LLM. Cuando se reinicia la instancia de Daiana Studio, se pierden todos los datos.

**Entradas**
- Clave de memoria 
- chat_history
- Clave de entrada 
- input
- Salida
Cadena de conversación

Memoria de ventana de búfer
<p align="center">
![1](/img/studio/3/28.png)
</p>

**Resumen**
La memoria a corto plazo de Daiana Studio se refiere a nodos de memoria temporal que solo pueden almacenar conversaciones pasadas en la RAM. Simplemente guarda las conversaciones en una matriz. Cuando se reinicia la instancia de Daiana Studio, se pierde todo.

Los LLM pueden encontrar problemas si las conversaciones son demasiado largas y superan los límites de tokens. Esto ocurre cuando el texto es demasiado extenso para caber en el tamaño de contexto limitado del LLM.

La memoria de ventana tampón solo guarda K conversaciones en lugar de almacenar todas las conversaciones. Utiliza una implementación de ventana deslizante para capturar las últimas K interacciones.

Entradas: 
- Clave de memoria 
    - chat_history
- Clave de entrada 
    - input
- Tamaño 
    - Una ventana de tamaño k. Conserva las últimas k conversaciones en la memoria.
Salida
Cadena de conversaciones

Resumen de conversaciones Memoria
<p align="center">
![1](/img/studio/3/29.png)
</p>


Resumen
La memoria a corto plazo de Daiana Studio se refiere a nodos de memoria temporal que solo pueden almacenar conversaciones pasadas en la RAM. Simplemente guarda las conversaciones en una matriz. Cuando se reinicia la instancia de Daiana Studio, se pierde todo.

<p align="center">
![1](/img/studio/3/30.png)
</p>

Resumen de conversaciones Memory ayuda a crear resúmenes de conversaciones utilizando LLM, resumiendo la información obtenida de las conversaciones a lo largo del tiempo.
Entradas
- Modelos de chat
**ChatOllama**
- Clave de memoria
- chat_history
- Clave de entrada
- input
Salida
Cadena de conversaciones

