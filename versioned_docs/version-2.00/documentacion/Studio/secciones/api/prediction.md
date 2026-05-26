---
title: Predicción
description: Return contents of the files in plain string format
slug: "/api/prediction"
sidebar_position: 9
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Enviar mensaje al flujo y obtener respuesta de la IA

``post`` /prediction/``{id}``

Envía un mensaje a tu flujo y recibe una respuesta generada por la IA. Este es el endpoint principal para interactuar con tus flujos y asistentes.

**Authentication**: Es posible que se requiera una clave API, dependiendo de la configuración del flujo.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
      <p> id  ```string``` <span className="req">Required</span> </p>
      Flow ID - the unique identifier of your flow
      Example: ```your-flow-id```
    </Accordion>
    <Accordion title="Body">
    <p>**question** ```string``` <span className="opt">Optional</span></p>
    The question/message to send to the flow
    Example:  ```What is artificial intelligence?```
    <br/>
    <p>**form** ```object``` <span className="opt">Optional</span></p>
    The form object to send to the flow (alternative to question for Agentflow V2)
    Example: ```{"title":"Example","count":1}```
    <br/>
    <p>**streaming** ```boolean``` <span className="opt">Optional</span></p>
    Enable streaming responses for real-time output
    Default: ```false``
    Example: ```false``
    <br/>
    <p>**overrideConfig** ```object``` <span className="opt">Optional</span></p>
    Override flow configuration and pass variables at runtime
    Example: ```{"sessionId":"user-session-123","temperature":0.7,"maxTokens":500,"vars":{"user_name":"Alice"}}```
    <br/>
    <p>**history** ```object[]``` <span className="opt">Optional</span></p>
    Previous conversation messages for context
    Example: ```[{"role":"apiMessage","content":"Hello! I'm an AI assistant. How can I help you today?"},{"role":"userMessage","content":"Hi, my name is Sarah and I'm learning about AI"}]```
    <br/>
    <p>**uploads** ```object[]``` <span className="opt">Optional</span></p>
    Files to upload (images, audio, documents, etc.)
    Example:  ```[{"type":"file","name":"example.png","data":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABjElEQVRIS+2Vv0oDQRDG","mime":"image/png"}]```
    <br/>
    <p>**humanInput** ```object``` <span className="opt">Optional</span></p>
    Return human feedback and resume execution from a stopped checkpoint
    Example:  ```{"type":"reject","feedback":"Include more emoji"}```
    <br/>
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
      POST /prediction/{id} HTTP/1.1
      Authorization: Bearer YOUR_SECRET_TOKEN
      Content-Type: application/json
      Accept: */*
      Content-Length: 628

      {
        "question": "What is artificial intelligence?",
        "form": {
          "title": "Example",
          "count": 1
        },
        "streaming": false,
        "overrideConfig": {
          "sessionId": "user-session-123",
          "temperature": 0.7,
          "maxTokens": 500,
          "vars": {
            "user_name": "Alice"
          }
        },
        "history": [
          {
            "role": "apiMessage",
            "content": "Hello! I'm an AI assistant. How can I help you today?"
          },
          {
            "role": "userMessage",
            "content": "Hi, my name is Sarah and I'm learning about AI"
          }
        ],
        "uploads": [
          {
            "type": "file",
            "name": "example.png",
            "data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABjElEQVRIS+2Vv0oDQRDG",
            "mime": "image/png"
          }
        ],
        "humanInput": {
          "type": "reject",
          "feedback": "Include more emoji"
        }
      }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
   curl -L \
  --request POST \
  --url '/prediction/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data @- <<'EOF'
  {
    "question": "What is artificial intelligence?",
    "form": {
      "title": "Example",
      "count": 1
    },
    "streaming": false,
    "overrideConfig": {
      "sessionId": "user-session-123",
      "temperature": 0.7,
      "maxTokens": 500,
      "vars": {
        "user_name": "Alice"
      }
    },
    "history": [
      {
        "role": "apiMessage",
        "content": "Hello! I'm an AI assistant. How can I help you today?"
      },
      {
        "role": "userMessage",
        "content": "Hi, my name is Sarah and I'm learning about AI"
      }
    ],
    "uploads": [
      {
        "type": "file",
        "name": "example.png",
        "data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABjElEQVRIS+2Vv0oDQRDG",
        "mime": "image/png"
      }
    ],
    "humanInput": {
      "type": "reject",
      "feedback": "Include more emoji"
    }
  }
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
              const response = await fetch('/prediction/{id}', {
            method: 'POST',
            headers: {
              "Authorization": "Bearer YOUR_SECRET_TOKEN",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "question": "What is artificial intelligence?",
              "form": {
                "title": "Example",
                "count": 1
              },
              "streaming": false,
              "overrideConfig": {
                "sessionId": "user-session-123",
                "temperature": 0.7,
                "maxTokens": 500,
                "vars": {
                  "user_name": "Alice"
                }
              },
              "history": [
                {
                  "role": "apiMessage",
                  "content": "Hello! I'm an AI assistant. How can I help you today?"
                },
                {
                  "role": "userMessage",
                  "content": "Hi, my name is Sarah and I'm learning about AI"
                }
              ],
              "uploads": [
                {
                  "type": "file",
                  "name": "example.png",
                  "data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABjElEQVRIS+2Vv0oDQRDG",
                  "mime": "image/png"
                }
              ],
              "humanInput": {
                "type": "reject",
                "feedback": "Include more emoji"
              }
            })
        });

        const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
      import json
import requests

response = requests.post(
    "/tools",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
      "name": "date_time_tool",
      "description": "A tool used for date and time operations",
      "color": "#FF5733",
      "iconSrc": "https://example.com/icons/date.png",
      "schema": "text",
      "func": "text",
      "createdDate": "2024-08-24T14:15:22Z",
      "updatedDate": "2024-08-24T14:15:22Z"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>




