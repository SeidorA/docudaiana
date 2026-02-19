---
title: 'Incrustar chat'
iconName: "code"
sidebar_position: 4
---
import {Banerimg} from '../efectsstudio.tsx'

**Aprenda a personalizar e integrar nuestro widget de chat.**

<Banerimg img="studio//enable/explication.gif" />


Puedes añadir fácilmente el widget de chat a tu sitio web. Solo tienes que copiar el script del widget proporcionado y pegarlo en cualquier lugar entre las etiquetas ``<body>`` y ``</body>`` de tu archivo HTML.
![a](/img/studio/enable/a.png)


## Configuración del widget
El siguiente vídeo muestra cómo insertar el script del widget en cualquier página web.
![a](/img/studio/enable/explication.gif)


## Configuración
Puedes personalizar el widget con las siguientes opciones:

```javascript
Chatbot.init({
    chatflowid: "your-chatflowid-here",
    apiHost: "http://localhost:3000",
    chatflowConfig: {
        // Sobrescribe la configuración del flujo de chat
        systemMessagePrompt: "You are a helpful AI assistant",
        temperature: 0,
        // ... otras configuraciones
    },
    theme: {
        button: {
            backgroundColor: "#3B81F6",
            right: 20,
            bottom: 20,
            size: "medium",
            iconColor: "white",
            customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            // Opciones de tamaño: "small" | "medium" | "large"
        },
        chatWindow: {
            welcomeMessage: "¡Hola! ¿En qué puedo ayudarte?",
            backgroundColor: "#ffffff",
            height: 700,
            width: 400,
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
            },
            userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
                placeholder: "Escribe tu pregunta",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
                maxChars: 50,
                maxCharsWarningMessage: "Has excedido el límite de caracteres. Por favor, ingresa menos de 50 caracteres.",
                autoFocus: true, // Si no se usa, el autofocus está deshabilitado en móvil y habilitado en escritorio. true lo habilita en ambos, false lo deshabilita en ambos.
                sendMessageSound: true,
                // sendSoundLocation: "send_message.mp3", // Si no se usa, se reproducirá el efecto de sonido por defecto si sendSoundMessage es true.
                receiveMessageSound: true,
            }
        }
    }
})
```


## Variables de Entorno
Para habilitar el widget en su sitio web, debe configurar las siguientes variables de entorno

```javascript
CORS_ORIGINS="http://localhost:3000,http://example.com"
```

Si utiliza una clonación Git local, coloque las variables de entorno dentro de ``Daiana_Studio/packages/server/.env``

Si utiliza una clonación local de Git, coloque las variables de entorno dentro de ```Daiana_Studio/packages/server/.env```