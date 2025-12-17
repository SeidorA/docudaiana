---
title: 'Embed Chat'
iconName: "code"
sidebar_position: 4
---
import {Banerimg} from '../efectsstudio.tsx'

**Learn how to customize and integrate our chat widget.**

<Banerimg img="studio//enable/explication.gif" />


You can easily add the chat widget to your website. Simply copy the provided widget script and paste it anywhere between the `<body>` and `</body>` tags of your HTML file.
![a](/img/studio/enable/a.png)


## Widget Configuration
The following video shows how to embed the widget script into any web page.
![a](/img/studio/enable/explication.gif)


## Settings
You can customize the widget with the following options:

```javascript
Chatbot.init({
    chatflowid: "your-chatflowid-here",
    apiHost: "http://localhost:3000",
    chatflowConfig: {
        // Overwrite chatflow configuration
        systemMessagePrompt: "You are a a helpful AI assistant",
        temperature: 0,
        // ... other configurations
    },
    theme: {
        button: {
            backgroundColor: "#3B81F6",
            right: 20,
            bottom: 20,
            size: "medium",
            iconColor: "white",
            customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            // Size options: "small" | "medium" | "large"
        },
        chatWindow: {
            welcomeMessage: "Hi! How can I help you?",
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
                placeholder: "Type your question",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
                maxChars: 50,
                maxCharsWarningMessage: "You have exceeded the character limit. Please enter less than 50 characters.",
                autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                sendMessageSound: true,
                // sendSoundLocation: "send_message.mp3", // If not used, the default sound effect will be played if sendSoundMessage is true.
                receiveMessageSound: true,
            }
        }
    }
})
```


## Environment Variables
To enable the widget on your website, you must configure the following environment variables

```javascript
CORS_ORIGINS="http://localhost:3000,http://example.com"
```

If you are using a local Git clone, place the environment variables inside ``Daiana_Studio/packages/server/.env``

If you are using a local Git clone, place the environment variables inside ```Daiana_Studio/packages/server/.env```