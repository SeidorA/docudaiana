---
title: Herramientas
description: Herramientas para la creación, listado, actualización y eliminación de herramientas.
slug: "/api/tools"
sidebar_position: 10
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Obtiene todas las herramientas

``GET`` /tools

Recupera una lista de todas las herramientas.

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
        GET /tools HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/tools' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/tools', {
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
    "/tools",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Obtiene una herramienta por ID

``GET`` /tools/``{id}``

Recupera una herramienta específica por su ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string``` <span className="reqt">Requiered</span></p>
    Tool ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /tools/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/tools/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/tools/{id}', {
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
    "/tools/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Crea una nueva herramienta

``POST`` /tools

Crea una nueva herramienta.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Body">
      <p>**id** ```string · uuid``` <span className="opt">Optional</span></p>
      <br/>
      <p>**name** ```string``` <span className="opt">Optional</span></p>
      Example ```My Tool```
      <br/>
      <p>**description** ```string``` <span className="opt">Optional</span></p>
      <br/>
      <p>**color** ```string``` <span className="opt">Optional</span></p>
      Example ```#7C3AED```
      <br/>
      <p>**iconSrc** ```string | nullable``` <span className="opt">Optional</span></p>
      <br/>
      <p>**schema** ```string | nullable``` <span className="opt">Optional</span></p>
      JSON schema associated with the tool
      <br/>
      <p>**func** ```string | nullable``` <span className="opt">Optional</span></p>
      Functionality description or code associated with the tool
      <br/>
      <p>**createdDate** ```string · date-time``` <span className="opt">Optional</span></p>
      <br/>
      <p>**updatedDate** ```string · date-time``` <span className="opt">Optional</span></p>
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    POST /tools HTTP/1.1
    Authorization: Bearer YOUR_SECRET_TOKEN
    Content-Type: application/json
    Accept: */*

    {
      "name": "My Tool",
      "description": "Tool description",
      "color": "#7C3AED",
      "schema": "{}",
      "func": "return true"
    }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/tools' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My Tool",
    "description": "Tool description",
    "color": "#7C3AED",
    "schema": "{}",
    "func": "return true"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/tools', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": "My Tool",
      "description": "Tool description",
      "color": "#7C3AED",
      "schema": "{}",
      "func": "return true"
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
      "name": "My Tool",
      "description": "Tool description",
      "color": "#7C3AED",
      "schema": "{}",
      "func": "return true"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Actualiza una herramienta por ID

``PUT`` /tools/``{id}``

Actualiza una herramienta específica por su ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string``` <span className="reqt">Requiered</span></p>
    Tool ID
    </Accordion>
    <Accordion title="Body">
      <p>**id** ```string · uuid``` <span className="opt">Optional</span></p>
      <br/>
      <p>**name** ```string``` <span className="opt">Optional</span></p>
      <br/>
      <p>**description** ```string``` <span className="opt">Optional</span></p>
      <br/>
      <p>**color** ```string``` <span className="opt">Optional</span></p>
      <br/>
      <p>**iconSrc** ```string | nullable``` <span className="opt">Optional</span></p>
      <br/>
      <p>**schema** ```string | nullable``` <span className="opt">Optional</span></p>
      <br/>
      <p>**func** ```string | nullable``` <span className="opt">Optional</span></p>
      <br/>
      <p>**createdDate** ```string · date-time``` <span className="opt">Optional</span></p>
      <br/>
      <p>**updatedDate** ```string · date-time``` <span className="opt">Optional</span></p>
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    PUT /tools/{id} HTTP/1.1
    Authorization: Bearer YOUR_SECRET_TOKEN
    Content-Type: application/json
    Accept: */*

    {
      "name": "My Tool",
      "description": "Updated description",
      "color": "#7C3AED",
      "schema": "{}",
      "func": "return true"
    }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request PUT \
  --url '/tools/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My Tool",
    "description": "Updated description",
    "color": "#7C3AED",
    "schema": "{}",
    "func": "return true"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/tools/{id}', {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": "My Tool",
      "description": "Updated description",
      "color": "#7C3AED",
      "schema": "{}",
      "func": "return true"
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
    "/tools/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "name": "My Tool",
      "description": "Updated description",
      "color": "#7C3AED",
      "schema": "{}",
      "func": "return true"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Elimina una herramienta por ID

``delete`` /tools/``{id}``

Elimina una herramienta específica por su ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string``` <span className="reqt">Requiered</span></p>
    Tool ID
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        DELETE /tools/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request DELETE \
  --url '/tools/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/tools/{id}', {
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
    "/tools/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>




