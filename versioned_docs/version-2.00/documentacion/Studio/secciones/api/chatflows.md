---
title: Flujos de chat
description: Retrieve, create, update and delete chatflows.
slug: "/api/chatflows"
sidebar_position: 4
hide_table_of_contents: true
---

import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Enlista todos los chatflows

``GET`` /chatflows

Obtiene una lista de todos los chatflows.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /chatflows HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/chatflows' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatflows', {
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
    "/chatflows",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Obtiene un chatflow por ID

``GET`` /chatflows/``{id}``

Obtiene un chatflow por ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string``` <span className="reqt">Requiered</span></p>
    Chatflow ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /chatflows/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/chatflows/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatflows/{id}', {
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
    "/chatflows/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Obtiene un chatflow por API key

``GET`` /chatflows/apikey/``{apikey}``

Obtiene un chatflow por API key.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**apikey** ```string``` <span className="reqt">Requiered</span></p>
    API key associated with the chatflow
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /chatflows/apikey/{apikey} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/chatflows/apikey/{apikey}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatflows/apikey/{apikey}', {
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
    "/chatflows/apikey/{apikey}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Crea un nuevo chatflow

``POST`` /chatflows

Crea un nuevo chatflow con los detalles proporcionados.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Body">
    <p>**id** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**name** ```string``` <span className="opt">Optional</span></p>
    Example ```My Chatflow```
    <br/>
    <p>**flowData** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**deployed** ```boolean``` <span className="opt">Optional</span></p>
    <br/>
    <p>**isPublic** ```boolean``` <span className="opt">Optional</span></p>
    <br/>
    <p>**apikeyid** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**chatbotConfig** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**apiConfig** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**analytic** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**speechToText** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**category** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**type** ```string · enum``` <span className="opt">Optional</span></p>
    Possible values ```CHATFLOW```, ```MULTIAGENT```
    <br/>
    <p>**createdDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Example ```2024-08-24T14:15:22Z```
    <br/>
    <p>**updatedDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Example ```2024-08-24T14:15:22Z```
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        POST /chatflows HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*

        {
          "name": "My Chatflow",
          "flowData": "{}",
          "deployed": true,
          "isPublic": false,
          "type": "CHATFLOW"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/chatflows' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My Chatflow",
    "flowData": "{}",
    "deployed": true,
    "isPublic": false,
    "type": "CHATFLOW"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatflows', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": "My Chatflow",
      "flowData": "{}",
      "deployed": true,
      "isPublic": false,
      "type": "CHATFLOW"
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
    "/chatflows",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "name": "My Chatflow",
      "flowData": "{}",
      "deployed": True,
      "isPublic": False,
      "type": "CHATFLOW"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Actualiza los detalles de un chatflow existente

``PUT`` /chatflows/``{id}``

Actualiza los detalles de un chatflow existente.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string``` <span className="reqt">Requiered</span></p>
    Chatflow ID
    </Accordion>
    <Accordion title="Body">
    <p>**id** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**name** ```string``` <span className="opt">Optional</span></p>
    Example ```My Chatflow```
    <br/>
    <p>**flowData** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**deployed** ```boolean``` <span className="opt">Optional</span></p>
    <br/>
    <p>**isPublic** ```boolean``` <span className="opt">Optional</span></p>
    <br/>
    <p>**apikeyid** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**chatbotConfig** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**apiConfig** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**analytic** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**speechToText** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**category** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**type** ```string · enum``` <span className="opt">Optional</span></p>
    Possible values ```CHATFLOW```, ```MULTIAGENT```
    <br/>
    <p>**createdDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Example ```2024-08-24T14:15:22Z```
    <br/>
    <p>**updatedDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Example ```2024-08-24T14:15:22Z```
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        PUT /chatflows/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*

        {
          "name": "My Chatflow",
          "flowData": "{}",
          "deployed": true,
          "isPublic": false,
          "type": "CHATFLOW"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request PUT \
  --url '/chatflows/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My Chatflow",
    "flowData": "{}",
    "deployed": true,
    "isPublic": false,
    "type": "CHATFLOW"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatflows/{id}', {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": "My Chatflow",
      "flowData": "{}",
      "deployed": true,
      "isPublic": false,
      "type": "CHATFLOW"
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
    "/chatflows/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "name": "My Chatflow",
      "flowData": "{}",
      "deployed": True,
      "isPublic": False,
      "type": "CHATFLOW"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Elimina un chatflow

``delete`` /chatflows/``{id}``

Elimina un chatflow por ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string``` <span className="reqt">Requiered</span></p>
    Chatflow ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        DELETE /chatflows/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request DELETE \
  --url '/chatflows/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatflows/{id}', {
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
    "/chatflows/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>
