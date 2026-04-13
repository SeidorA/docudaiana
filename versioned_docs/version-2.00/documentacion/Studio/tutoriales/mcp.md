---
title :  Herramientas y MCP
sidebar_position: 6
---


En el tutorial anterior de [**Interactuando con la API**](./api), exploramos cómo permitir que los LLM llamen a APIs externas. Para mejorar la experiencia del usuario, Flowise proporciona una lista de herramientas preconstruidas. Consulte la sección de [**Herramientas**](../integrations/langchain/tools/) para ver la lista completa de integraciones disponibles.

En los casos en los que la herramienta que necesita aún no esté disponible, puede crear una **Herramienta Personalizada** que se adapte a sus necesidades.

## Herramienta Personalizada

Vamos a utilizar el mismo [Servidor de Gestión de Eventos](./api#prerequisite) y crearemos una herramienta personalizada que pueda realizar la solicitud HTTP POST para `/events`.

![Herramientas y MCP](/img/tutoriales/mcp/1.png)


* **Nombre de la Herramienta:** `create_event`
* **Descripción de la Herramienta:** `Úselo cuando quiera crear un nuevo evento.`
* **Esquema de Entrada (Input Schema):** Un esquema JSON del cuerpo de la solicitud de la API que permite al LLM saber cómo generar automáticamente el cuerpo JSON correcto. Por ejemplo:
* **Función Javascript**: La función real que se ejecutará una vez que se llame a esta herramienta.

```javascript
const fetch = require('node-fetch');
const url = 'http://localhost:5566/events';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: $name,
      location: $location,
      date: $date
    })
};
try {
    const response = await fetch(url, options);
    const text = await response.text();
    return text;
} catch (error) {
    console.error(error);
    return '';
}
```

### Cómo usar la función:

* Puede usar cualquier librería importada en Flowise.
* Puede usar las propiedades especificadas en el Esquema de Entrada como variables con el prefijo `$`:
  * Propiedad del Esquema de Entrada = `name`
  * Variable a usar en la Función = `$name`
* Puede obtener la configuración predeterminada del flujo:
  * `$flow.sessionId`
  * `$flow.chatId`
  * `$flow.chatflowId`
  * `$flow.input`
  * `$flow.state`
* Puede obtener variables personalizadas: `$vars.<nombre-de-variable>`
* Debe devolver un valor de cadena de texto (string) al final de la función.

### Usar herramienta personalizada en el Agente

Después de que se haya creado la herramienta personalizada, puede usarla en el nodo Agente.

![Herramientas y MCP](/img/tutoriales/mcp/2.png)

En el menú desplegable de Herramientas, seleccione la herramienta personalizada. También puede activar **Retorno Directo (Return Direct)** si desea devolver directamente la salida de la herramienta personalizada.

![Herramientas y MCP](/img/tutoriales/mcp/3.png)

### Usar herramienta personalizada en Herramienta

También se puede usar como un Nodo de Herramienta en un escenario de flujo de trabajo determinado.\
En este caso, **los Argumentos de Entrada de la Herramienta deben definirse explícitamente y completarse con valores**, ya que no hay un LLM para determinar automáticamente los valores.

![Herramientas y MCP](/img/tutoriales/mcp/4.png)

## MCP

MCP ([Protocolo de Contexto de Modelo o Model Context Protocol](https://modelcontextprotocol.io/introduction)) proporciona una forma estandarizada de conectar modelos de IA a diferentes fuentes de datos y herramientas. En otras palabras, en lugar de depender de las herramientas integradas de Flowise o crear una herramienta personalizada, uno puede usar servidores MCP que han sido creados por otros. El MCP es ampliamente considerado un estándar de la industria y suele ser compatible y mantenido por los proveedores oficiales. Por ejemplo, el MCP de GitHub es desarrollado y mantenido por el equipo de GitHub, con soporte similar proporcionado para Atlassian Jira, Brave Search y otros. Puede encontrar la lista de servidores compatibles [aquí](https://modelcontextprotocol.io/examples).

![Herramientas y MCP](/img/tutoriales/mcp/5.png)

## MCP Personalizado

Además de las herramientas MCP preconstruidas, la característica más potente es el **MCP Personalizado**, que permite a los usuarios conectarse a cualquier servidor MCP de su elección.

El MCP sigue una arquitectura cliente-servidor donde:

* **Hosts** son aplicaciones de LLM (como Flowise) que inician las conexiones.
* **Clientes** mantienen conexiones 1:1 con los servidores, dentro de la aplicación host (como el MCP Personalizado).
* **Servidores** proporcionan contexto, herramientas y prompts a los clientes (ejemplo de [servidores](https://modelcontextprotocol.io/examples)).

Para manejar la comunicación real entre clientes y servidores, el MCP admite múltiples mecanismos de transporte:

1. **Transporte Stdio**
   * Utiliza la entrada/salida estándar para la comunicación.
   * Ideal para procesos locales.
2. **Transporte HTTP Transmitible (Streamable HTTP)**
   * Utiliza HTTP con Eventos Enviados por el Servidor (SSE) opcionales para la transmisión.
   * HTTP POST para mensajes de cliente a servidor.

### Stdio

El transporte Stdio permite la comunicación a través de flujos de entrada y salida estándar. Esto es particularmente útil para integraciones locales y herramientas de línea de comandos.

Utilice esto solo cuando use Flowise localmente, no cuando esté desplegado en servicios en la nube. Esto se debe a que ejecutar un comando como `npx` instalará el paquete del servidor MCP (ej: `@modelcontextprotocol/server-sequential-thinking`) localmente, y a menudo toma mucho tiempo para ello.

Es más adecuado para aplicaciones de escritorio como Claude Desktop, VS Code, etc.

#### **Comando NPX**

```json
{
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-sequential-thinking"
  ]
}
```

![Herramientas y MCP](/img/tutoriales/mcp/6.png)

Para Windows, consulte esta [guía](https://gist.github.com/feveromo/7a340d7795fca1ccd535a5802b976e1f).

#### **Comando Docker**

El comando Docker es adecuado cuando la máquina que ejecuta Flowise también tiene acceso a Docker. Sin embargo, no es adecuado para despliegues en servicios en la nube donde el acceso a Docker está restringido o no disponible.

```json
{
  "command": "docker",
  "args": [
    "run",
    "-i",
    "--rm",
    "mcp/sequentialthinking"
  ]
}
```

![Herramientas y MCP](/img/tutoriales/mcp/7.png)

Docker proporciona una lista de servidores MCP, que se puede encontrar [aquí](https://hub.docker.com/catalogs/mcp). Así es como funciona:

1. Asegúrese de que Docker se esté ejecutando.
2. Localice la configuración del servidor MCP y agréguela al **MCP Personalizado**. Por ejemplo: [https://hub.docker.com/r/mcp/sequentialthinking](https://hub.docker.com/r/mcp/sequentialthinking)
3. Actualice las **Acciones Disponibles (Available Actions)**. Si la imagen no se encuentra localmente, Docker descargará automáticamente la última imagen. Una vez que se descargue la imagen, verá la lista de acciones disponibles.

```
Unable to find image 'mcp/sequentialthinking:latest' locally
latest: Pulling from mcp/sequentialthinking
f18232174bc9: Already exists
cb2bde55f71f: Pull complete
9d0e0719fbe0: Pull complete
6f063dbd7a5d: Pull complete
93a0fbe48c24: Pull complete
e2e59f8d7891: Pull complete
96ec0bda7033: Pull complete
4f4fb700ef54: Pull complete
d0900e07408c: Pull complete
Digest: sha256:cd3174b2ecf37738654cf7671fb1b719a225c40a78274817da00c4241f465e5f
Status: Downloaded newer image for mcp/sequentialthinking:latest
Sequential Thinking MCP Server running on stdio
```

#### Cuándo usar

* Al construir herramientas de línea de comandos.
* Al implementar integraciones locales.
* Cuando se necesita una comunicación de procesos simple.
* Al trabajar con scripts de shell.

### HTTP Transmitible o Streamable HTTP (Recomendado)

Usaremos Github Remote MCP como ejemplo. Lo mejor del [servidor MCP remoto de GitHub](https://github.com/github/github-mcp-server) es que no necesita instalarlo ni ejecutarlo localmente; las nuevas actualizaciones se aplican automáticamente.

#### Paso 1: Crear una variable para el PAT de Github

Para acceder al servidor MCP, necesitamos crear un Token de Acceso Personal (Personal Access Token o PAT) desde Github. Consulte la [guía](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). Una vez que se haya creado el PAT, cree una variable para almacenar el token. Esta variable se utilizará en el MCP Personalizado.

![Herramientas y MCP](/img/tutoriales/mcp/8.png)

#### Paso 2: Crear un MCP Personalizado

Cree un nodo Agente y agregue una nueva herramienta de MCP Personalizado. Para HTTP transmitible, solo necesitamos ingresar la URL y otros encabezados necesarios. Puede usar **variables** en la configuración del servidor MCP con llaves dobles `{{ }}` y el prefijo `$vars.<nombreDeVariable>`.

```json
{
  "url": "https://api.githubcopilot.com/mcp/",
  "headers": {
    "Authorization": "Bearer {{$vars.githubPAT}}",
  }
}
```

![Herramientas y MCP](/img/tutoriales/mcp/9.png)

#### Paso 3: Seleccionar las acciones

Si la configuración del servidor MCP funciona correctamente, puede actualizar las **Acciones Disponibles**, y Flowise extraerá automáticamente todas las acciones disponibles del servidor MCP.

![Herramientas y MCP](/img/tutoriales/mcp/10.png)

#### Interacciones de Ejemplo:

> Dame la incidencia (issue) más reciente

![Herramientas y MCP](/img/tutoriales/mcp/11.png)

El agente es capaz de identificar las acciones apropiadas del MCP y usarlas para responder a la consulta del usuario.

#### Cuándo usar

Utilice HTTP Transmitible cuando:

* Construya integraciones basadas en la web.
* Necesite comunicación cliente-servidor a través de HTTP.
* Requiera sesiones con estado.
* Admita múltiples clientes concurrentes.
* Implemente conexiones reanudables.
