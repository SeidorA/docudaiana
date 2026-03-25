---
title: "Agentflows V2"
sidebar_label: "Agentflows V2"
sidebar_position: 3
---

Esta guía explora la arquitectura de AgentFlow V2, detallando sus conceptos centrales, casos de uso, Estado del Flujo (Flow State) y referencias completas de nodos.

:::::warning
Esta documentación describe AgentFlow V2 a partir de su versión oficial actual. Las características, funcionalidades y parámetros de los nodos están sujetos a cambios en futuras actualizaciones y versiones de Daiana Studio. Por favor, consulte las últimas notas de la versión oficial o la información dentro de la aplicación para obtener los detalles más actualizados.
::::: 

## Concepto Central

AgentFlow V2 representa una evolución arquitectónica significativa, introduciendo un nuevo paradigma en Daiana Studio que se centra en la orquestación explícita del flujo de trabajo y una mayor flexibilidad. A diferencia de la dependencia principal de la V1 en frameworks externos para su lógica central de gráficos de agentes, la V2 cambia el enfoque hacia el diseño de todo el flujo de trabajo utilizando un conjunto granular de nodos especializados e independientes desarrollados nativamente como componentes centrales de Daiana Studio.

En esta arquitectura V2, cada nodo funciona como una unidad independiente, ejecutando una operacion discreta basada en su diseño y configuración específicos. Las conexiones visuales entre los nodos en el lienzo definen explícitamente la ruta del flujo de trabajo y la secuencia de control, los datos pueden pasarse entre los nodos haciendo referencia a las salidas de cualquier nodo ejecutado previamente en el flujo actual, y el Estado del Flujo proporciona un mecanismo explícito para gestionar y compartir datos a lo largo del flujo de trabajo.

La arquitectura V2 implementa un sistema un completo de dependencia de nodos y cola de ejecución que respeta de manera precisa estas vías definidas mientras mantiene una clara separación entre los componentes, permitiendo que los flujos de trabajo sean tanto más sofisticados como más fáciles de diseñar. Esto permite que se puedan lograr patrones complejos como bucles, ramificación condicional, interacciones humano-en-bucle (human-in-the-loop) y otros. Esto lo hace más adaptable a diversos casos de uso mientras permanece más mantenible y extensible.

![AgentFlow V2](/img/studio/agentflow/v2/core.jpg)

## Diferencia entre Agentflow y las Plataformas de Automatización

Una de las preguntas más frecuentes: ¿Cuál es la diferencia entre Agentflow y las plataformas de automatización como n8n, Make o Zapier?

### 💬 **Comunicación de Agente a Agente**

Se soporta la comunicación multimodal entre agentes. Un agente Supervisor puede formular y delegar tareas a múltiples agentes Trabajadores, con las salidas de los agentes Trabajadores devueltas posteriormente al Supervisor.

En cada paso, los agentes tienen acceso al historial completo de la conversación, lo que permite al Supervisor determinar la siguiente tarea y a los agentes Trabajadores interpretar la tarea, seleccionar las herramientas apropiadas y ejecutar las acciones en consecuencia.

Esta arquitectura permite la **colaboración, delegación y gestión compartida de tareas** a través de múltiples agentes, capacidades que normalmente no son ofrecidas por las herramientas de automatización tradicionales.

![AgentFlow V2](/img/studio/agentflow/v2/agente.png)

### 🙋‍♂ Humano-en-bucle (Human-in-the-loop)

La ejecución se pausa mientras se espera la entrada humana, sin bloquear el hilo en ejecución. Cada punto de control se guarda, permitiendo que el flujo de trabajo se reanude desde el mismo punto incluso después de un reinicio de la aplicación.

El uso de puntos de control permite **agentes con estado de larga duración**.

Los agentes también pueden configurarse para **solicitar permiso antes de ejecutar las herramientas**, similar a cómo Claude pide la aprobación del usuario antes de usar las herramientas MCP. Esto ayuda a prevenir la ejecución autónoma de acciones sensibles sin la aprobación explícita del usuario.

![AgentFlow V2](/img/studio/agentflow/v2/human.avif)

### 📖  Estado Compartido

El estado compartido permite el intercambio de datos entre agentes, especialmente útil para pasar datos a través de ramas o pasos no adyacentes en un flujo. Consulte **understanding-flow-stat**.

### ⚡ Streaming

Soporta Server-Sent Events (SSE) para la transmisión en tiempo real (streaming) de las respuestas del LLM o del agente. El streaming también permite la suscripción a actualizaciones de ejecución a medida que el flujo de trabajo avanza.

![AgentFlow V2](/img/studio/agentflow/v2/longGIF.gif)

### 🌐 Herramientas MCP

Mientras que las plataformas de automatización tradicionales a menudo cuentan con extensas bibliotecas de integraciones preconstruidas, Agentflow permite conectarse con herramientas MCP ([Model Context Protocol](https://github.com/modelcontextprotocol)) como parte del flujo de trabajo, en lugar de funcionar únicamente como herramientas de agente.

También se pueden crear MCP personalizados de forma independiente, sin depender de las integraciones proporcionadas por la plataforma. MCP es ampliamente considerado un estándar en la industria y normalmente es respaldado y mantenido por los proveedores oficiales. Por ejemplo, el MCP de GitHub es desarrollado y mantenido por el equipo de GitHub, con un soporte similar proporcionado para Atlassian Jira, Brave Search y otros.

![AgentFlow V2](/img/studio/agentflow/v2/mcp.avif)

## Referencia de Nodos de Agentflow V2

Esta sección proporciona una referencia detallada para cada nodo disponible, detallando su propósito específico, parámetros clave de configuración, entradas esperadas, salidas generadas y su rol dentro de la arquitectura de AgentFlow V2.

![AgentFlow V2](/img/studio/agentflow/v2/image.avif)

### **1. Nodo de Inicio (Start Node)**

El punto de entrada designado para iniciar la ejecución de cualquier flujo de trabajo de AgentFlow V2. Cada flujo debe comenzar con este nodo.

* **Funcionalidad:** Define cómo se desencadena el flujo de trabajo y establece las condiciones iniciales. Puede aceptar entradas ya sea directamente desde la interfaz de chat o a través de un formulario personalizable presentado al usuario. También permite la inicialización de variables de `Flow State` (Estado del Flujo) al inicio de la ejecución y puede administrar cómo se maneja la memoria de la conversación en cada ejecución.
* **Parámetros de Configuración**
  * **Tipo de Entrada (Input Type)**: Determina cómo se inicia la ejecución del flujo de trabajo, ya sea por `Chat Input` (Entrada de chat) del usuario o mediante un `Form Input` (Fomulario de Entrada) enviado.
    * **Título del Formulario, Descripción del Formulario, Tipos de Entrada del Formulario**: Si se selecciona `Form Input`, estos campos configuran la apariencia del formulario presentado al usuario, permitiendo varios tipos de campos de entrada con etiquetas definidas y nombres de variable.
  * **Memoria Efímera (Ephemeral Memory)**: Si está habilitada, indica al flujo de trabajo comenzar la ejecución sin considerar mensajes pasados de la conversación, comenzando efectivamente con un historial limpio.
  * **Estado del Flujo (Flow State)**: Define el conjunto completo de pares clave-valor iniciales para el estado del flujo de trabajo `$flow.state`. Todas las claves de estado que serán usadas o actualizadas por nodos posteriores deben ser declaradas e inicializadas aquí.
* **Entradas:** Recibe los datos iniciales que desencadenan el flujo de trabajo, los cuales pueden ser un mensaje de chat o los datos enviados a través de un formulario.
* **Salidas:** Provee un punto de anclaje de salida único para conectarse al primer nodo operacional, enviando los datos de entrada iniciales y el Flow State inicializado.

![AgentFlow V2](/img/studio/agentflow/v2/start.png)

### **2. Nodo LLM (LLM Node)**

Proporciona acceso directo a un Modelo de Lenguaje de Gran Tamaño (LLM) configurado para ejecutar tareas de IA, permitiendo al flujo de trabajo realizar extracciones de datos estructurados si es necesario.

* **Funcionalidad:** Este nodo envía peticiones a un LLM en base a instrucciones o mensajes provistos y su contexto. Puede ser usado para generación de texto, resumen, traducción, análisis, responder preguntas, y generar datos JSON estructurados acordes con un esquema definido. Posee acceso a la memoria para la conversación en el hilo de chat y puede leer/escribir dentro del `Flow State`.
* **Parámetros de Configuración**
  * **Modelo (Model)**: Especifica el modelo de IA base del servicio seleccionado — por ejemplo, GPT-4o de OpenAI o Google Gemini.
  * **Mensajes (Messages)**: Define la entrada conversacional para el LLM, estructurada en secuencias de roles de sistema — Sistema, Usuario, Asistente, Desarrollador — para guiar de la repuesta generada por IA. Valores dinámicos se pueden inyectar mediante el uso de campos dinámicos de forma `{{ variable }}`.
  * **Memoria (Memory)**: Si se encuentra activada, determina la capacidad del LLM de examinar y ponderar historia previa y contexto de conversación actual o hilos cuando este se comunique durante respuesta.
    * **Tipo de Memoria, Tamaño de Ventana, Límite de Tokens (Memory Type, Window Size, Max Token Limit)**: Si la Memoria se habilita, refinar cómo esa historia previa será interpretada o analizada al LLM — incluyendo toda la previa base si son varios tramos en contexto entero o parte resumida.
    * **Mensaje de Entrada (Input Message)**: Especial variable de la conversación original o texto en particular anexándose este último al de usuario cuando haya historia.
  * **Responder Como (Return Response As)**: Configuración respectiva al tratamiento y rol del Mensaje para que la salida — ya se marque en un Rol de Usuario `User Message` o un Rol Asistente `Assistant Message` — sirva según corresponda si pasa al logs u otras áreas por tipo de usuario si lo es de otro nodo respectivo.
  * **Salida Estructurada JSON (JSON Structured Output)**: Señala y rige cuando el diseño del tipo saliente para asegurar estructura JSON de la data. Y describe un objeto descriptivo u otra para tener seguridad predictiva de sistema.
  * **Actualizar Estado del Flujo (Update Flow State)**: Habilita configuraciones y altera/interviene el Runtime estado interno/el State local permitiendo en el proceso actualización si correspondía — haciendo posibles datos u otras a almacenar.
* **Entradas:** Este nodo utiliza los gatillos y eventos originales de nodos o del flujo de paso previo sumados con su contexto como los Mensajes (`Messages`) y Mensajes Clave o Entrantes. Y al mismo toma valores como las que al llamarle en Estado `$flow.state` existiese.
* **Salidas:** Su repuesta desde el modelo a texto como contenido y estructura a salida según tipo (Assistant / user), si era marcado respectivo.

![AgentFlow V2](/img/studio/agentflow/v2/llm.png)

### **3. Nodo Agente (Agent Node)**

Representa una entidad IA autónoma capaz de razonar, planificar e interactuar con herramientas o bases de conocimiento para la consecución del objetivo.

* **Funcionalidad:** Este Nodo usa al mismo motor Inteligente a elegir según secuencia dada por un humano en Mensajes/petición. Conecte y permita Tools en acciones. Se desenvuelve con uso propio en la vía y razonamiento y usar Flujo interno/State y para el Hilo respectivo como hilo con una secuencia multipaso y herramientas en dinámico sistema de integración y sistemas externos o las que correspondan respectiva y en general interactúan al agente.
* **Parámetros de Configuración**
  * **Modelo (Model)**: Indica una parte elegible AI y modelo.
  * **Mensajes (Messages)**: Mensajes desde de un flujo que da origen con roles — Sistema, Usuario, Asistente, Desarrollador — o un dato variable dinámico por inyección.
  * **Herramientas (Tools)**: Especifique qué Herramientas de Daiana Studio predefinidas pueden ser tomadas y utilizadas por el agente.
    * Checkbox opcional: **Require Human Input** por si debe pausarse la herramienta para pedir intervención humana.
  * **Conocimientos / Almacén de Documentos (Document Stores)**: Configurar acceso a la base contenida y gestionada de Knowledge Document Store.
    * **Document Store**: Elija el Almacén pre-poblado a ser operado o utilizado.
    * **Describe Knowledge**: Descripción en lenguaje natural que le permite entender al agente su uso para que pueda buscar.
  * **Conocimiento / Vectores (Knowledge / Vector Embeddings)**: Vectores con repositorios vectoriales externos para buscar en bases complementarias.
    * **Vector Store**: La db y su vector en sí seleccionado.
    * **Embedding Model**: Que modelo fue empleado.
    * **Knowledge Name**: Nombre base vector IA a consultar.
    * **Describe Knowledge**: Natural base que indica sobre el tipo de contenido o uso.
    * **Return Source Documents**: Habilita a mostrar la referencia (Source Document) respectiva usada por IA.
  * **Memoria (Memory)**: El historial para ser interpretado desde un chat en flujo al Agente.
    * **Memory Type, Window Size, Max Token Limit**: Control y uso (retener todo el flujo histórico, cantidad de mensajes en ventanas de tokens / o resumen general).
    * **Input Message**: Entrada o Inyector específico o último text mensaje que va luego y sumando hacia la variable contexto y procesado en modelo.
  * **Return Response**: Opción AI de cómo categoriza respuestas según la asigne y si es para roles de sistema User / Assistant o a logs de memorias siguientes.
  * **Update Flow State**: Modifique para hacer Update/Alteraciones dentro del state y entorno/scope local ($flow.state), para usar su acceso luego por otros nodos.
* **Entradas:** Inputs procedentes u orígenes desencadenantes, variables para inyectar en Tools o Mensajes/Inputs en el nodo, etc.
* **Salidas:** Resultados en outputs producidos usando planes lógicos ejecutados.

![AgentFlow V2](/img/studio/agentflow/v2/agent.png)

### **4. Nodo de Herramienta (Tool Node)**

Otorga y provee mecánicas deterministas invocando y forzando herramientas seleccionadas explícitamente y sin inferencia LLM del Agente.

* **Funcionalidad:** Se aplica en partes del flujo del proceso a invocar u ejecutar de forma precisa con parámetros y entrada conocidas u obtenidas usando flujos estáticos, variables e inputs que activan una acción especifica.
* **Cómo Funciona**
  1. **Inicio:** Al fluir en paso y arribar a él, este activa y gatilla la acción.
  2. **Identificación:** Chequea o analiza cual flujo-herramienta le pertenece de su listado seleccionado definido.
  3. **Resolución:** Recibe la lista y la asignación necesaria en inputs mapeando requerimientos y argumentos fijos y evalúa las requeridas.
  4. **Ejecución:** Y ejecuta acciones, funciones, librerías, y/o las API bajo o sobre argumentos evaluados en base de inputs y pasa a invocación asociada.
  5. **Salida:** Finalizado, extrae, devuelve, recupera, etc., todos parámetros retornados por dichas acciones u respuestas.
  6. **Propagación:** Propaga su envío u obtención generada en las salidas u anchors para nodos siguientes o procesos.
* **Parámetros de Configuración**
  * **Tool Selection**: Qué Herramienta Daiana Studio va a emplear de su grupo seleccionable.
  * **Input Arguments**: Datos al requerir en mapa y para qué sirve usando la función o variable dinámica y qué inyecta como inputs de flujo según en qué le es requerido por herramienta u tipo:
    * **Map Argument Name**: A qué variable/argumento en la heramienta asocia (ej `input`).
    * **Provide Argument Value**: Valor a proporcionar o variable inyectada `{{ previousNode.output }}` `{{ $flow.state.key }}`.
  * **Update Flow State**: Acceda a sobre-escribir / actualizar el objeto $flow.state y/o llaves referenciadas o de variables por el Flow State u salidas en las posteriores.
* **Entradas:** Variables, Textos estáticos para `Input Arguments`, outputs o outputs pasados desde variables u `$flow.state` de variables.
* **Salidas:** Produce su dato texto procesado a raíz o respuestas resultantes bajo uso textual o resultado datos/JSON, número de herramienta u API.

![AgentFlow V2](/img/studio/agentflow/v2/tool.png)

### **5. Nodo Recuperador (Retriever Node)**

Consulta de extracción focal de información en origen Document Stores bases AI y Almacén en información o recuperar desde vectores bases o referencias u Knowledge a su extracción.

* **Funcionalidad:** Permite dirigir queries hacia base Document Stores, haciendo la captura y match referenciando similitud semántica. Se puede ubicar u dirigir u orientar u obtener de los Document Stores que precise extracciones focales evitando procesos con la inferencia general de Agent.
* **Parámetros de Configuración**
  * **Knowledge / Document Stores**: Especifique desde cuales Almacenes o conocimiento extraer y hacia donde u a cuales u de estos preconfigurados a consultar.
  * **Retriever Query**: Cadena enviada como variable, texto u consulta, a base de u variables dinámicas integradas `{{ variables }}`.
  * **Output Format**: Elige cómo se debe presentar la información recuperada: como `Text` sin formato o como `Text with Metadata` texto con metadatos, que pueden incluir detalles como los nombres o las ubicaciones de los documentos de origen.
  * **Update Flow State**: Actualizar Runtime a usar sus $flow.state con keys y valores en base u al obtener salidas.
* **Entradas:** Las sentencias / consulta, queries variables.
* **Salidas:** Recupera y proporciona los documentos chunks o fragmentos según lo format en format u output format de salidas o selecciones seleccionadas.

![AgentFlow V2](/img/studio/agentflow/v2/retriever.png)

### 6. Nodo HTTP (HTTP Node)

Interacciones u comunicación u peticiones dirigidas a un external o servicio u APIs.

* **Funcionalidad:** Nodo el cual habilita y otorga de conexión de interfaz Web API a web, externa en protocolo y acciones variadas a URL la. Soporte (GET, POST, PUT, DELETE, PATCH). Integra auth, encuestadores webhooks, headers, urls query.
* **Parámetros de Configuración**
  * **HTTP Credential**: De requerir uso u auth y u credentiales a en Daiana Studio API Keys.
  * **Request Method**: Qué Método a la y método request HTTP usa o enviará. (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`).
  * **Target URL**: Endpoint a utilizar. 
  * **Request Headers**: Configuración a envío la header u y y variables y en diccionario/keys a headers param y values.
  * **URL Query Parameters**: Las variables al uso u al params param urls. URL a anexo u append o a. 
  * **Request Body Type**: Formación al payload de envío al endpoint, json de: `JSON`, `Raw text`, `Form Data`, `x-www-form-urlencoded`.
  * **Request Body**: Introduce los datos reales para métodos como `POST` o `PUT`. El formato debe coincidir con el tipo de cuerpo seleccionado, y se pueden insertar datos dinámicos utilizando `{{ variables }}`.
  * **Response Type**: Tipo devuelto (respuesta parseada/tipo uso en interpretar respuesta) desde server external - ejemplo o como u `JSON`, `Text`, e `Array Buffer`, o a formato formato u `Base64` datos binario
* **Entradas:**  Recibe datos de configuración como la URL, el método, los encabezados y el cuerpo, incorporando a menudo valores dinámicos procedentes de pasos anteriores del flujo de trabajo o de `$flow.state`.
* **Salidas:**  Muestra la respuesta recibida del servidor externo, analizada según la opción seleccionada `Response Type`.

![AgentFlow V2](/img/studio/agentflow/v2/http.png)

### **7. Nodo de Condición (Condition Node)**

Ramificaciones de decisión y un condicionador condicional que permite derivar o dirigir el ruta de el nodo caminos a base de operaciones booleanas deterministas deterministas y flujo a y según el reglas flujos rutas de un y lógica.

* **Funcionalidad:** Nodo evaluador ramificador y toma decisión de nodo o o uso u evaluar a u y. De y datos o lógicos o tipos o strings u boolean comparar o al si operadores o si lógica un igual a igual e e al nodos y igual uso a u de ramificación de si rama a o u el a salidas a nodos anclas múltiples salidas a.
* **Parámetros de Configuración**
  * **Conditions (Condiciones)**: las la parámetros de evaluará nodos nodo conjunto regla configurar o nodo.
    * **Type**: Cadena o de `String`, `Number`o `Boolean`de datos que comparar de a usará la dato.
    * **Value 1**: variables valor a comparar usar texto o usaremos como el. a variables de la `{{ variables }}` la u u en.
    * **Operation**: la de usar de la los para y el comparador lógico usar (e.g., `equal`, `contains`, `larger`, `isEmpty`) a el operador a la y e u.
    * **Value 2**: Define el segundo valor para la comparación, si así lo requiere la operación elegida. Aquí también se pueden insertar datos dinámicos utilizando `{{ variables }}`.
* **Entradas:**  Requiere los datos de `Valor 1` y `Valor 2` para cada condición que se evalúe. Estos valores se obtienen de las salidas de nodos anteriores o se recuperan de $flow.state.
* **Salidas:** Proporciona varios puntos de salida, que se corresponden con el resultado booleano (verdadero/falso) de las condiciones evaluadas. El flujo de trabajo continúa por la ruta específica conectada al punto de salida que coincide con el resultado.

![AgentFlow V2](/img/studio/agentflow/v2/conditional.png)

### **8. Nodo Condición Agente (Condition Agent Node)**

Ofrece una ramificación dinámica basada en IA a partir de instrucciones en lenguaje natural y del contexto.

* **Funcionalidad:** Este nodo utiliza un modelo de lenguaje grande (LLM) para dirigir el flujo de trabajo. Analiza los datos de entrada proporcionados comparándolos con un conjunto de «escenarios» definidos por el usuario —posibles resultados o categorías— guiándose por `instrucciones` de alto nivel en lenguaje natural que definen la tarea de toma de decisiones. A continuación, el LLM determina qué escenario se ajusta mejor al contexto de entrada actual. Basándose en esta clasificación impulsada por IA, la ejecución del flujo de trabajo continúa por la ruta de salida específica correspondiente al escenario elegido. Este nodo resulta especialmente útil para tareas como el reconocimiento de la intención del usuario, el enrutamiento condicional complejo o la toma de decisiones situacionales matizadas en las que las reglas simples y predefinidas —como en el nodo de condición— resultan insuficientes.
* **Parámetros de configuración**
  * **Modelo**: Especifica el modelo de IA de un servicio elegido que realizará el análisis y la clasificación de escenarios.
  * **Instrucciones**: Define el objetivo general o la tarea para el LLM en lenguaje natural; por ejemplo, «Determina si la solicitud del usuario se refiere a ventas, asistencia o una consulta general».
  * **Entrada**: Especifica los datos, a menudo texto de un paso anterior o entrada del usuario, utilizando `{{ variables }}`, que el LLM analizará para tomar su decisión de enrutamiento.
  * **Escenarios**: Configura una matriz que define los posibles resultados o rutas distintas que puede seguir el flujo de trabajo. Cada escenario se describe en lenguaje natural —por ejemplo, «Consulta de ventas», «Solicitud de asistencia»,


![AgentFlow V2](/img/studio/agentflow/v2/conditionalagent.png)

### **9. Nodo de Iteración (Iteration Node)**

Ejecuta un «subflujo» definido —una secuencia de nodos anidados en su interior— para cada elemento de una matriz de entrada, implementando un bucle «for-each».

* **Funcionalidad:** Este nodo está diseñado para procesar colecciones de datos. Toma como entrada una matriz, ya sea proporcionada directamente o referenciada a través de una variable. Para cada elemento individual dentro de esa matriz, el nodo de iteración ejecuta secuencialmente la secuencia de otros nodos que se colocan visualmente dentro de sus límites en el lienzo.
* **Parámetros de configuración**
  * **Entrada de matriz**: Especifica la matriz de entrada sobre la que el nodo realizará la iteración. Se proporciona haciendo referencia a una variable que contiene una matriz procedente de la salida de un nodo anterior o de `$flow.state` — p. ej., `{{ $flow.state.itemList }}`.
* **Entradas:** Requiere que se proporcione una matriz a su parámetro `Entrada de matriz`.
* **Salidas:** Proporciona un único ancla de salida que se activa solo después de que el subflujo anidado haya completado la ejecución de todos los elementos de la matriz de entrada. Los datos que pasan por esta salida pueden incluir resultados agregados o el estado final de las variables modificadas dentro del bucle, dependiendo del diseño del subflujo. Los nodos colocados dentro del bloque de iteración tienen sus propias conexiones de entrada y salida que definen la secuencia de operaciones para cada elemento.


![AgentFlow V2](/img/studio/agentflow/v2/iteration.avif)

### **10. Nodo de Bucle (Loop Node)**
Redirige explícitamente la ejecución del flujo de trabajo a un nodo ejecutado anteriormente.

* **Funcionalidad:** Este nodo permite crear ciclos o reintentos iterativos dentro de un flujo de trabajo. Cuando el flujo de ejecución llega al nodo de bucle, no avanza hacia un nuevo nodo, sino que «salta» de vuelta a un nodo de destino especificado que ya se ha ejecutado anteriormente en la ejecución actual del flujo de trabajo. Esta acción provoca la reejecución de ese nodo de destino y de cualquier nodo posterior en esa parte del flujo.
* **Parámetros de configuración**
  * **Retroceder a**: Selecciona el ID único de un nodo ejecutado previamente dentro del flujo de trabajo actual al que debe volver la ejecución.
  * **Recuento máximo de bucles**: Define el número máximo de veces que se puede realizar esta operación de bucle dentro de una sola ejecución del flujo de trabajo, lo que evita los ciclos infinitos. El valor predeterminado es 5.
* **Entradas:** Recibe la señal de ejecución para activarse. Realiza un seguimiento interno del número de veces que se ha producido el bucle en la ejecución actual.
* **Salidas:** Este nodo no tiene un ancla de salida estándar que apunte hacia adelante, ya que su función principal es redirigir el flujo de ejecución hacia atrás al nodo de destino «Loop Back To», desde donde continúa el flujo de trabajo.



![AgentFlow V2](/img/studio/agentflow/v2/loop.png)

### **11. Nodo de Entrada Humana (Human Input Node)**

Detiene la ejecución del flujo de trabajo para solicitar una intervención explícita, una aprobación o comentarios por parte de un usuario humano, lo cual constituye un componente clave de los procesos «Human-in-the-Loop» (HITL).

- **Funcionalidad:** Este nodo detiene el avance automatizado del flujo de trabajo y presenta información o una pregunta a un usuario humano a través de la interfaz de chat. El contenido que se muestra al usuario puede ser un texto estático predefinido o generado dinámicamente por un LLM en función del contexto actual del flujo de trabajo. Se ofrecen al usuario distintas opciones de acción —por ejemplo, «Continuar», «Rechazar»— y, si está habilitado, un campo para proporcionar comentarios textuales. Una vez que el usuario realiza una selección y envía su respuesta, el flujo de trabajo reanuda la ejecución siguiendo la ruta de salida específica correspondiente a la acción elegida.
- **Parámetros de configuración**
  - **Tipo de descripción**: Determina cómo se genera el mensaje o la pregunta que se presenta al usuario: `Fijo` (texto estático) o `Dinámico` (generado por un LLM).
    * **Si el **Tipo de descripción** es `Fijo`**
      * **Descripción**: Este campo contiene el texto exacto que se mostrará al usuario. Admite la inserción de datos dinámicos mediante `{{ variables }}`
    * **Si el **Tipo de descripción** es `Dinámico`**
      * **Modelo**: Selecciona el modelo de IA de un servicio elegido que generará el mensaje dirigido al usuario.
      * **Solicitud**: proporciona las instrucciones o la solicitud para que el LLM seleccionado genere el mensaje que se muestra al usuario.
  - **Comentarios:** si está habilitado, se mostrará al usuario una ventana de comentarios 

![AgentFlow V2](/img/studio/agentflow/v2/humandin.png)

### **12. Nodo de Respuesta Directa (Direct Reply Node)**

Envía un mensaje final al usuario y finaliza la ruta de ejecución actual.

* **Funcionalidad:** Este nodo actúa como punto final de una rama específica o de todo un flujo de trabajo. Toma un mensaje configurado —que puede ser texto estático o contenido dinámico procedente de una variable— y lo envía directamente al usuario final a través de la interfaz de chat. Al enviar este mensaje, concluye la ejecución a lo largo de esta ruta concreta del flujo de trabajo; no se procesarán más nodos conectados a partir de este punto.
* **Parámetros de configuración**
  - **Mensaje**: Define el texto o la variable `{{ variable }}` que contiene el contenido que se enviará como respuesta final al usuario.
* **Entradas:** Recibe el contenido del mensaje, que proviene de la salida de un nodo anterior o de un valor almacenado en `$flow.state`.
* **Salidas:** Este nodo no tiene anclajes de salida, ya que su función es terminar la ruta de ejecución tras enviar la respuesta.

![AgentFlow V2](/img/studio/agentflow/v2/direct.png)

### **13. Nodo de Función Personalizada (Custom Function Node)**

Proporciona un mecanismo para ejecutar código JavaScript personalizado del lado del servidor dentro del flujo de trabajo.

* **Funcionalidad:** Este nodo permite escribir y ejecutar fragmentos de código JavaScript arbitrarios, lo que ofrece una forma eficaz de implementar transformaciones de datos complejas, lógica de negocio a medida o interacciones con recursos que otros nodos estándar no admiten directamente. El código ejecutado opera en un entorno Node.js y dispone de formas específicas de acceder a los datos:
  * **Variables de entrada:** Se puede acceder a los valores pasados a través de la configuración `Variables de entrada` dentro de la función, normalmente precedidos por el prefijo `$` — por ejemplo, si se define una variable de entrada `userid`, se puede acceder a ella como `$userid`.
  * **Contexto del flujo:** Están disponibles las variables de configuración predeterminadas del flujo, como `$flow.sessionId`, `$flow.chatId`, `$flow.chatflowId`, `$flow.input` —la entrada inicial que inició el flujo de trabajo— y todo el objeto `$flow.state`.
  * **Variables personalizadas:** Cualquier variable personalizada configurada en Daiana Studio —por ejemplo, `$vars.<nombre-de-variable>`.
  * **Bibliotecas:** La función puede utilizar cualquier biblioteca que se haya importado y esté disponible en el entorno backend de Daiana Studio. **La función debe devolver un valor de cadena al final de su ejecución**.
* **Parámetros de configuración**
  * **Variables de entrada**: Configura una matriz de definiciones de entrada que se pasarán como variables al ámbito de tu función de JavaScript. Para cada variable que desees definir, deberás especificar:
    * **Nombre de la variable**: el nombre que utilizarás para referirte a esta variable dentro de tu código JavaScript, normalmente precedido por un `$`; por ejemplo, si introduces `myValue` aquí, podrás acceder a ella como `$myValue` en el script, de acuerdo con la asignación de las propiedades del esquema de entrada.
    * **Valor de la variable**: Los datos reales que se asignarán a esta variable, que pueden ser texto estático o, más comúnmente, un valor dinámico procedente del flujo de trabajo — p. ej., `{{ previousNode.output }}` o `{{ $flow.state.someKey }}`.
  * **Función de JavaScript**: El campo del editor de código donde se escribe la función de JavaScript del lado del servidor. Esta función debe devolver, en última instancia, un valor de cadena.
  * **Actualizar estado del flujo**: Permite al nodo modificar el estado de ejecución del flujo de trabajo `$flow.state` durante la ejecución mediante la actualización de claves predefinidas. Esto permite, por ejemplo, almacenar la salida de cadena de este nodo de función personalizada bajo dicha clave, haciéndola accesible a los nodos posteriores.
* **Entradas:** Recibe datos a través de las variables configuradas en `Variables de entrada`. También puede acceder implícitamente a elementos del contexto `$flow` y `$vars`.
* **Salidas:** Produce el valor de cadena devuelto por la función JavaScript ejecutada. 


![AgentFlow V2](/img/studio/agentflow/v2/custom.png)

### **14. Nodo de Ejecución de Flujo (Execute Flow Node)**

Permite invocar y ejecutar otro Chatflow o AgentFlow completo de Daiana Studio desde el flujo de trabajo actual.

* **Funcionalidad:** Este nodo funciona como un invocador de subflujos de trabajo, lo que favorece el diseño modular y la reutilización de la lógica. Permite que el flujo de trabajo actual active un flujo de trabajo independiente y preexistente —identificado por su nombre o ID dentro de la instancia de Daiana Studio—, le pase una entrada inicial, anule opcionalmente configuraciones específicas del flujo de destino para esa ejecución en particular y, a continuación, reciba su salida final de vuelta en el flujo de trabajo de llamada para continuar el procesamiento.
* **Parámetros de configuración**
  * **Credenciales de conexión**: Proporcione opcionalmente las credenciales de la API de Chatflow si el flujo de destino que se está llamando requiere una autenticación o permisos específicos para su ejecución.
  * **Seleccionar flujo**: Especifique el Chatflow o AgentFlow concreto que este nodo ejecutará de la lista de flujos disponibles en su instancia de Daiana Studio.
  * **Entrada**: Defina los datos —texto estático o `{{ variable }}`— que se pasarán como entrada principal al flujo de trabajo de destino cuando se invoque.
  * **Anular configuración**: Opcionalmente, se puede proporcionar un objeto JSON que contenga parámetros que anulen la configuración predeterminada del flujo de trabajo de destino específicamente para esta instancia de ejecución; por ejemplo, para cambiar temporalmente un modelo o una indicación utilizados en el subflujo.
  * **URL base**: Opcionalmente, se puede especificar una URL base alternativa para la instancia de Daiana Studio que aloja el flujo de destino. Esto resulta útil en configuraciones distribuidas o cuando se accede a los flujos a través de diferentes rutas; si no se establece, se utilizará por defecto la URL de la instancia actual.
  * **Devolver respuesta como**: Determina cómo debe clasificarse la salida final del subflujo ejecutado cuando se devuelve al flujo de trabajo actual: como un `Mensaje de usuario` o un `Mensaje del asistente`.
  * **Actualizar estado del flujo**: Permite al nodo modificar el estado de ejecución del flujo de trabajo `$flow.state` durante la ejecución mediante la actualización de claves predefinidas. Esto permite, por ejemplo, almacenar la salida de este nodo «Ejecutar flujo» bajo dicha clave, haciéndola accesible a los nodos posteriores.
* **Entradas:** Requiere la selección de un flujo de destino y los datos de `Entrada` para el mismo.
* **Salidas:** Genera la salida final devuelta por el flujo de destino ejecutado, formateada según la configuración de «Devolver respuesta como».

![AgentFlow V2](/img/studio/agentflow/v2/execute.png)

## Entendiendo el Estado del Flujo (Understanding Flow State)
Una característica arquitectónica clave que permite la flexibilidad y las capacidades de gestión de datos de AgentFlow V2 es el **estado del flujo**. Este mecanismo ofrece una forma de gestionar y compartir datos de forma dinámica a lo largo de la ejecución de una única instancia de flujo de trabajo.


- - Flow State (`$flow.state`) es un **runtime, key-value store** que comparten los nodos de una misma ejecución.
- Funciona como memoria temporal o como un contexto compartido que solo existe mientras dura esa ejecución concreta.

### **Propósito de Estado del Flujo**
El objetivo principal de `$flow.state` es permitir **el intercambio explícito de datos y la comunicación entre nodos, especialmente aquellos que quizá no estén conectados directamente** en el gráfico del flujo de trabajo, o cuando sea necesario conservar y modificar datos de forma intencionada a lo largo de varios pasos. Resuelve varios retos habituales en la orquestación:

1. **Transmisión de datos entre ramas:** Si un flujo de trabajo se divide en rutas condicionales, los datos generados o actualizados en una rama pueden almacenarse en `$flow.state` para poder acceder a ellos más adelante, en caso de que las rutas se fusionen o de que otras ramas necesiten esa información.

2. **Acceso a datos entre pasos no adyacentes:** La información inicializada o actualizada por un nodo anterior puede ser recuperada por un nodo mucho más posterior sin necesidad de pasarla explícitamente a través de las entradas y salidas de todos los nodos intermedios.

### **Cómo funciona el Estado del Flujo**

1. **Inicialización / Declaración de Claves**
- Todas las claves de estado que se vayan a utilizar a lo largo del flujo de trabajo deben inicializarse con sus valores predeterminados (aunque estén vacías) mediante el parámetro `Flow State` del nodo `Start`. Este paso define, en la práctica, el esquema o la estructura de `$flow.state` para ese flujo de trabajo. Aquí se definen los pares clave-valor iniciales.

![AgentFlow V2](/img/studio/agentflow/v2/1.avif)

2. **Actualizando Estado / Modificando Claves Existentes**

- Muchos nodos operativos — p. ej. `LLM`, `Agent`, `Tool`, `HTTP`, `Retriever`, `Custom Function` — include an `Update Flow State` parameter in their configuration.
- Este parámetro permite al nodo modificar los valores de las claves ya existentes dentro de `$flow.state`.
- El valor puede ser texto estático, la salida directa del nodo actual, la salida del nodo anterior y muchas otras variables. Escribe `{{` para ver todas las variables disponibles.
- Cuando el nodo se ejecuta correctamente, actualiza las claves especificadas en `$flow.state` con los nuevos valores. Los nodos operativos no pueden crear nuevas claves; solo pueden actualizar las claves predefinidas.

![AgentFlow V2](/img/studio/agentflow/v2/2.avif)

3. **Leyendo del Estado**

- Cualquier parámetro de entrada de un nodo que admita variables puede leer valores del estado del flujo.
- Utiliza la sintaxis específica: `{{ $flow.state.yourKey }}` — sustituye «yourKey» por el nombre real de la clave que se inicializó en el nodo de inicio.
- Por ejemplo, la solicitud de un nodo LLM podría incluir «...en función del estado del usuario: `{{ $flow.state.customerStatus }}`».

![AgentFlow V2](/img/studio/agentflow/v2/3.avif)

### **Alcance y Persistencia:**

- Se crea e inicializa cuando comienza la ejecución de un flujo de trabajo y se elimina cuando finaliza esa ejecución concreta.
- No se conserva entre sesiones de usuario diferentes ni entre ejecuciones independientes del mismo flujo de trabajo.
- Cada ejecución simultánea del flujo de trabajo mantiene su propio `$flow.state` independiente.
