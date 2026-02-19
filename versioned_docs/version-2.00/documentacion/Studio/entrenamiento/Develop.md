---
title: 'Aplicaciones LLM'
iconName: "book"
sidebar_position: 3
---

## Primeros pasos
¿Te interesa desarrollar aplicaciones innovadoras utilizando modelos de lenguaje grandes (LLM)? DAIANA STUDIO es la herramienta ideal para ello. En este capítulo, aprenderemos cómo dar vida a tus ideas de forma fácil y eficaz y crear aplicaciones que interactúen con los usuarios.

Con **DAIANA STUDIO**, puedes crear una amplia gama de aplicaciones, como chatbots, sistemas de respuesta a preguntas y agentes de recuperación de información, todas ellas basadas en el procesamiento del lenguaje natural. Su flexibilidad y opciones de personalización te permiten desarrollar rápidamente soluciones adaptadas a tus necesidades.
Demos el primer paso para hacer realidad tus ideas. Con DAIANA STUDIO a tu lado, ¡exploremos juntos nuevas posibilidades!

## Primeros pasos Tu primera aplicación LLM
Aquí crearemos una sencilla aplicación LLM utilizando DAIANA STUDIO y explicaremos cómo funciona.

### Crear un nuevo flujo de chat
1. Haga clic en el botón **Añadir nuevo** para crear un nuevo flujo de chat.
![1](/img/studio/21.png)
2. Haga clic en **Guardar flujo de chat** y establezca un nombre como, por ejemplo, **Hola DAIANA STUDIO**.
<p align="center">
![1](/img/studio/22.png)
</p>

3. Escriba **Hola, DAIANA Studio** en el cuadro de diálogo y haga clic en el botón Guardar. 
<p align="center">
![1](/img/studio/23.png)
</p>

4. Se ha guardado un Chatflow con el nombre **Hola, DAIANA Studio**.
<p align="center">
![1](/img/studio/24.png)
</p>

### Crear una cadena

1. Arrastra y suelta las cadenas / cadena de conversación desde el botón **Añadir nodos** al flujo de chat.
<p align="center">
![1](/img/studio/25.jpg)
</p>

2. Se creará un nodo **Cadena de conversación** en el flujo de chat después de soltarlo.
<p align="center">
![1](/img/studio/26.png)
</p>

3. Arrastra el nodo **Cadena de conversación** en el flujo de chat y muévelo hacia la derecha para la siguiente operación.
<p align="center">
![1](/img/studio/27.png)
</p>

### Crear un modelo de chat

1. Desde el botón **Añadir nodos**, desplázate por la lista de nodos en Modelos de chat hasta encontrar el nodo «ChatOllama».
<p align="center">
![1](/img/studio/28.png)
</p>

2. Arrastra el nodo «Chat Models / ChatOllama» y suéltalo en el Chatflow.
<p align="center">
![1](/img/studio/29.jpg)
</p>

3. Se creará un nodo «ChatOllama» en el flujo de chat después de soltarlo.
<p align="center">
![1](/img/studio/210.png)
</p>

4. Establezca «llama3:latest» como nombre del modelo para el nodo «ChatOllama» en el flujo de chat.
<p align="center">
![1](/img/studio/211.png)
</p>

5. Haga clic en **Guardar flujo de chat** para guardar las creaciones realizadas hasta el momento.
<p align="center">
![1](/img/studio/212.jpg)
</p>

### Conecta el nodo «ChatOllama» al nodo **Cadena de conversación**.
1. Arrastra la salida del nodo «ChatOllama» con el cursor del ratón y configúrala como entrada para el **Modelo de chat** en el nodo **Cadena de conversación**.

<p align="center">
![1](/img/studio/213.jpg)
</p>

<p align="center">
![1](/img/studio/214.png)
</p>

2. Haga clic en **Guardar flujo de chat** para guardar las creaciones realizadas hasta el momento.

<p align="center">
![1](/img/studio/215.jpg)
</p>

### Crear Memoria
1. Desde el botón **Añadir nodos**, arrastra el nodo **Memoria/Memoria búfer** y suéltalo en el flujo de chat.
<p align="center">
![1](/img/studio/216.jpg)
</p>

2. Para facilitar la edición, ajuste la disposición de los nodos seleccionándolos con el cursor del ratón y arrastrándolos para moverlos.
<p align="center">
![1](/img/studio/217.png)
</p>

### Memoria intermedia
Conecta el **nodo Memoria intermedia** al **nodo Cadena de conversación**.

1. Arrastra la salida del nodo **Memoria búfe**r con el cursor del ratón y configúrala como entrada para la **Memoria** en el nodo **Cadena de conversación**.
<p align="center">
![1](/img/studio/218.png)
</p>

2. Haga clic en **Guardar flujo de chat** para guardar las creaciones realizadas hasta el momento.
<p align="center">
![1](/img/studio/219.jpg)
</p>

### Uso de aplicaciones LLM

1. Haga clic en el botón Chat para mostrar el cuadro de diálogo de chat de la aplicación LLM **Hello DAIANA STUDIO**.
<p align="center">
![1](/img/studio/220.jpg)
</p>

2. Escribe **¿Por qué el cielo es azul?** en el cuadro de diálogo del chat y comprueba que recibes una respuesta similar a la de la imagen. Si es así, significa que ha funcionado.

<p align="center">
![1](/img/studio/221.png)
</p>

## Operaciones básicas de DAIANA STUDIO
Aquí se explican algunas características de **DAIANA STUDIO** utilizadas en este articulo que no se trataron en [Introduccióna su primera aplicación LLM.](#crear-un-nuevo-flujo-de-chat) Se explican aquí.
### Pasar de un flujo de chat a la pantalla principal
1. Puedes navegar desde el flujo de chat llamado **Hola, DAIANA STUDIO** a la pantalla principal utilizando el botón Atrás situado a la izquierda. Se recomienda hacer clic en **Guardar flujo de chat** antes de salir para guardar las creaciones.
<p align="center">
![1](/img/studio/222.png)
</p>

2. a pasado a la pantalla superior.Haz clic para usar esta alternativa
<p align="center">
![1](/img/studio/223.png)
</p>

### Pasar de la pantalla superior a un flujo de chat
Haga clic con el cursor del ratón en el nombre del flujo de chat que desea editar en la lista de flujos de chat de la pantalla superior.
- Navega hasta el flujo de chat.
<p align="center">
![1](/img/studio/224.png)
</p>

### Edición del nombre del flujo de chat
- Para editar el nombre del flujo de chat **Hola, DAIANA STUDIO**, haz clic en el botón **Editar nombre** situado a la derecha.
<p align="center">
![1](/img/studio/225.png)
</p>

Después de cambiar el nombre del flujo de chat, puede guardarlo haciendo clic en el botón **Guardar nombre** situado a la derecha, o cancelar los cambios haciendo clic en el botón **Cancelar**. Después de realizar los cambios, se recomienda hacer clic en **Guardar flujo de chat** para guardar lo creado hasta el momento.
<p align="center">
![1](/img/studio/226.png)
</p>

### Exportar un flujo de chat
- En el menú Opciones de un flujo de chat de la lista Flujos de chat, selecciona **Exportar** para iniciar el proceso de exportación.
<p align="center">
![1](/img/studio/227.png)
</p>

- Se guardará un archivo en la carpeta de descargas de su navegador.
<p align="center">
![1](/img/studio/228.png)
</p>

### Importar un flujo de chat
1. Haga clic en el botón **Añadir nuevo** para crear un nuevo flujo de chat.
<p align="center">
![1](/img/studio/229.png)
</p>

2. Selecciona **Cargar flujo de chat** en el botón Configuración.
<p align="center">
![1](/img/studio/230.png)
</p>

3. Seleccione un archivo Chatflow y haga clic en el botón **Abrir**.
<p align="center">
![1](/img/studio/231.png)
</p>

4. Haga clic en **Guardar flujo de chat** para cambiar el nombre del flujo de chat.
<p align="center">
![1](/img/studio/232.png)
</p>

5. Para obtener más información, consulte [Crear un nuevo flujo de chat.](#crear-un-nuevo-flujo-de-chat)
<p align="center">
![1](/img/studio/233.png)
</p>

### Duplicar un flujo de chat
- En el menú Opciones del flujo de chat original de la lista Flujos de chat, seleccione **Duplicar**.
<p align="center">
![1](/img/studio/234.png)
</p>

- Ha importado el flujo de chat original a un nuevo flujo de chat. Pulse **Guardar flujo de chat** para cambiar el nombre del flujo de chat según sea necesario.
<p align="center">
![1](/img/studio/235.png)
</p>

- Para obtener más información, consulte [Creación de un nuevo flujo de chat](#crear-un-nuevo-flujo-de-chat).
<p align="center">
![1](/img/studio/236.png)
</p>

### Marketplace
- En el Marketplace hay plantillas disponibles para cada caso de uso.
<p align="center">
![1](/img/studio/237.png)
</p>

Seleccione una plantilla y, cuando se abra el flujo de chat, pulse el botón **Usar plantilla** para acceder a un estado similar al descrito en [Duplicar un flujo de chat](#duplicar-un-flujo-de-chat).
<p align="center">
![1](/img/studio/238.png)
![1](/img/studio/239.png)
</p>

### Credenciales
- Cuando se utilizan servicios en la nube o similares, la información de conexión, como las credenciales, se almacena en Credenciales. Puede crear una nueva credencial o seleccionar una para los nodos que requieren información de conexión.
<p align="center">
![1](/img/studio/240.png)
</p>

- Ejemplo de uso
<p align="center">
![1](/img/studio/241.png)
</p>