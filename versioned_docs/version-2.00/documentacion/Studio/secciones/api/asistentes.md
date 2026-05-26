---
title: "Asistentes"
description: "Referencia de API para crear y administrar asistentes virtuales inteligentes"
slug: "/api/asistentes"
sidebar_position: 1
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Crear nuevo asistente
```post/assistants```

Crea un nuevo asistente con los detalles proporcionados



<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Body">
        <p> **id**  ```string``` <span className="opt">Optional</span> </p>
        Example ```d290f1ee-6c54-4b01-90e6-d701748f0851```
        <Accordion title="details">
            <p> **id**  ```string``` <span className="opt">Optional</span> </p>
            Example ```asst_zbNeYIuXIUSKVHjJkfRo6ilv```
            <br />
            <p> **name**  ```string``` <span className="opt">Optional</span> </p>
            Example ```My Assistant```
            <br />
            <p> **description**  ```string``` <span className="opt">Optional</span> </p>
            <br />
            <p> **model**  ```string``` <span className="opt">Optional</span> </p>
            Example ```gpt-4```
            <br />
            <p> **instructions**  ```string``` <span className="opt">Optional</span> </p>
            Example ```You are a helpful assistant, do your best to answer question and query```
            <br />
            <p> **temperature**  ```number``` <span className="opt">Optional</span> </p>
            Example ```1```
            <br />
            <p> **top_p**  ```number``` <span className="opt">Optional</span> </p>
            Example ```1```
            <br />
            <p> **tools**  ```string[]``` <span className="opt">Optional</span> </p>
            Example ```["function","code_interpreter","file_search"]```
            <br />
            <p> **tool_resources**  ```object``` <span className="opt">Optional</span> </p>
        </Accordion>
        <br />
        <p> **credential**  ```string``` <span className="opt">Optional</span> </p>
        Example ```7db93c02-8d5a-4117-a8f1-3dfb6721b33```    
        <br />
        <p> **iconSrc**  ```string``` <span className="opt">Optional</span> </p>
        Example ```/images/assistant.png```
        <br />
        <p> **createdDate**  ```string · date-time``` <span className="opt">Optional</span> </p>
        Example ```2024-08-24T14:15:22Z```
        <br />
        <p> **updatedDate**  ```string · date-time``` <span className="opt">Optional</span> </p>
        Example ```2024-08-24T14:15:22Z```
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    POST /assistants HTTP/1.1
Authorization: Bearer YOUR_SECRET_TOKEN
Content-Type: application/json
Accept: */*
Content-Length: 526

{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "details": {
    "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
    "name": "assistant",
    "description": "text",
    "model": "gpt-4",
    "instructions": "You are a helpful assistant, do your best to answer question and query",
    "temperature": 1,
    "top_p": 1,
    "tools": [
      "function",
      "code_interpreter",
      "file_search"
    ],
    "tool_resources": {
      "ANY_ADDITIONAL_PROPERTY": {}
    }
  },
  "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
  "iconSrc": "/images/assistant.png",
  "createdDate": "2024-08-24T14:15:22Z",
  "updatedDate": "2024-08-24T14:15:22Z"
}
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/assistants' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "details": {
      "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
      "name": "assistant",
      "description": "text",
      "model": "gpt-4",
      "instructions": "You are a helpful assistant, do your best to answer question and query",
      "temperature": 1,
      "top_p": 1,
      "tools": [
        "function",
        "code_interpreter",
        "file_search"
      ],
      "tool_resources": {
        "ANY_ADDITIONAL_PROPERTY": {}
      }
    },
    "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
    "iconSrc": "/images/assistant.png",
    "createdDate": "2024-08-24T14:15:22Z",
    "updatedDate": "2024-08-24T14:15:22Z"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/assistants', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "details": {
        "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
        "name": "assistant",
        "description": "text",
        "model": "gpt-4",
        "instructions": "You are a helpful assistant, do your best to answer question and query",
        "temperature": 1,
        "top_p": 1,
        "tools": [
          "function",
          "code_interpreter",
          "file_search"
        ],
        "tool_resources": {
          "ANY_ADDITIONAL_PROPERTY": {}
        }
      },
      "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
      "iconSrc": "/images/assistant.png",
      "createdDate": "2024-08-24T14:15:22Z",
      "updatedDate": "2024-08-24T14:15:22Z"
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
    "/assistants",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "details": {
        "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
        "name": "assistant",
        "description": "text",
        "model": "gpt-4",
        "instructions": "You are a helpful assistant, do your best to answer question and query",
        "temperature": 1,
        "top_p": 1,
        "tools": [
          "function",
          "code_interpreter",
          "file_search"
        ],
        "tool_resources": {
          "ANY_ADDITIONAL_PROPERTY": {}
        }
      },
      "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
      "iconSrc": "/images/assistant.png",
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


---

## Obtener asistente por ID
```get/assistants/{id}```

Obtiene los detalles de un asistente existente

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
      <p> id  ```string``` <span className="req">Required</span> </p>
      Assistant ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    GET /assistants/{id} HTTP/1.1
    Authorization: Bearer YOUR_SECRET_TOKEN
    Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
    --url '/assistants/{id}' \
    --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
    --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
    const response = await fetch('/assistants/{id}', {
        method: 'GET',
        headers: {
        "Authorization": "Bearer YOUR_SECRET_TOKEN",
        "Accept": "*/*"
        },
    });

    const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
    import requests

    response = requests.get(
        "/assistants/{id}",
        headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
    )

    data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>


---


## Actualiza los detalles de un asistente existente
```put/assistants/{id}```

Actualiza los detalles de un asistente existente

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
      <p> id  ```string``` <span className="req">Required</span> </p>
      Assistant ID
    </Accordion>
    <Accordion title="Body">
        <p> **id**  ```string``` <span className="opt">Optional</span> </p>
        Example ```d290f1ee-6c54-4b01-90e6-d701748f0851```
        <Accordion title="details">
            <p> **id**  ```string``` <span className="opt">Optional</span> </p>
            Example ```asst_zbNeYIuXIUSKVHjJkfRo6ilv```
            <br />
            <p> **name**  ```string``` <span className="opt">Optional</span> </p>
            Example ```My Assistant```
            <br />
            <p> **description**  ```string``` <span className="opt">Optional</span> </p>
            <br />
            <p> **model**  ```string``` <span className="opt">Optional</span> </p>
            Example ```gpt-4```
            <br />
            <p> **instructions**  ```string``` <span className="opt">Optional</span> </p>
            Example ```You are a helpful assistant, do your best to answer question and query```
            <br />
            <p> **temperature**  ```number``` <span className="opt">Optional</span> </p>
            Example ```1```
            <br />
            <p> **top_p**  ```number``` <span className="opt">Optional</span> </p>
            Example ```1```
            <br />
            <p> **tools**  ```string[]``` <span className="opt">Optional</span> </p>
            Example ```["function","code_interpreter","file_search"]```
            <br />
            <p> **tool_resources**  ```object``` <span className="opt">Optional</span> </p>
        </Accordion>
        <br />
        <p> **credential**  ```string``` <span className="opt">Optional</span> </p>
        Example ```7db93c02-8d5a-4117-a8f1-3dfb6721b33```    
        <br />
        <p> **iconSrc**  ```string``` <span className="opt">Optional</span> </p>
        Example ```/images/assistant.png```
        <br />
        <p> **createdDate**  ```string · date-time``` <span className="opt">Optional</span> </p>
        Example ```2024-08-24T14:15:22Z```
        <br />
        <p> **updatedDate**  ```string · date-time``` <span className="opt">Optional</span> </p>
        Example ```2024-08-24T14:15:22Z```
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    PUT /assistants/{id} HTTP/1.1
Authorization: Bearer YOUR_SECRET_TOKEN
Content-Type: application/json
Accept: */*
Content-Length: 526

{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "details": {
    "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
    "name": "assistant",
    "description": "text",
    "model": "gpt-4",
    "instructions": "You are a helpful assistant, do your best to answer question and query",
    "temperature": 1,
    "top_p": 1,
    "tools": [
      "function",
      "code_interpreter",
      "file_search"
    ],
    "tool_resources": {
      "ANY_ADDITIONAL_PROPERTY": {}
    }
  },
  "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
  "iconSrc": "/images/assistant.png",
  "createdDate": "2024-08-24T14:15:22Z",
  "updatedDate": "2024-08-24T14:15:22Z"
}
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request PUT \
  --url '/assistants/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "details": {
      "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
      "name": "assistant",
      "description": "text",
      "model": "gpt-4",
      "instructions": "You are a helpful assistant, do your best to answer question and query",
      "temperature": 1,
      "top_p": 1,
      "tools": [
        "function",
        "code_interpreter",
        "file_search"
      ],
      "tool_resources": {
        "ANY_ADDITIONAL_PROPERTY": {}
      }
    },
    "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
    "iconSrc": "/images/assistant.png",
    "createdDate": "2024-08-24T14:15:22Z",
    "updatedDate": "2024-08-24T14:15:22Z"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
    const response = await fetch('/assistants/{id}', {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "details": {
        "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
        "name": "assistant",
        "description": "text",
        "model": "gpt-4",
        "instructions": "You are a helpful assistant, do your best to answer question and query",
        "temperature": 1,
        "top_p": 1,
        "tools": [
          "function",
          "code_interpreter",
          "file_search"
        ],
        "tool_resources": {
          "ANY_ADDITIONAL_PROPERTY": {}
        }
      },
      "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
      "iconSrc": "/images/assistant.png",
      "createdDate": "2024-08-24T14:15:22Z",
      "updatedDate": "2024-08-24T14:15:22Z"
    })
});

const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
     import json
import requests

response = requests.put(
    "/assistants/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "details": {
        "id": "asst_zbNeYIuXIUSKVHjJkfRo6ilv",
        "name": "assistant",
        "description": "text",
        "model": "gpt-4",
        "instructions": "You are a helpful assistant, do your best to answer question and query",
        "temperature": 1,
        "top_p": 1,
        "tools": [
          "function",
          "code_interpreter",
          "file_search"
        ],
        "tool_resources": {
          "ANY_ADDITIONAL_PROPERTY": {}
        }
      },
      "credential": "7db93c02-8d5a-4117-a8f1-3dfb6721b339",
      "iconSrc": "/images/assistant.png",
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


---

## Eliminar asistente
```delete/assistants/{id}```

Elimina un asistente por ID

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
      <p> id  ```string``` <span className="req">Required</span> </p>
      Assistant ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    DELETE /assistants/{id} HTTP/1.1
    Authorization: Bearer YOUR_SECRET_TOKEN
    Accept: */*
    ```
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request DELETE \
  --url '/assistants/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
    const response = await fetch('/assistants/{id}', {
    method: 'DELETE',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Accept": "*/*"
    },
});

const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
    import requests

response = requests.delete(
    "/assistants/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>


---