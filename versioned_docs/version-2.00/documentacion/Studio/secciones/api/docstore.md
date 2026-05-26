---
title: Almacenes de documentos
description: Recupera, crea, actualiza y administra almacenes de documentos y sus fragmentos.
slug: "/api/docstore"
sidebar_position: 5
hide_table_of_contents: true
---

import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Lista todos los almacenes de documentos

``GET`` /document-store/store

Recupera una lista de todos los almacenes de documentos.

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
        GET /document-store/store HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/document-store/store' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/store', {
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
    "/document-store/store",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Obtiene un almacén de documentos específico

``GET`` /document-store/store/``{id}``

Recupera los detalles de un almacén de documentos específico por su ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string · uuid``` <span className="reqt">Requiered</span></p>
    Document Store ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /document-store/store/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/document-store/store/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/store/{id}', {
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
    "/document-store/store/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Crea un nuevo almacén de documentos

``POST`` /document-store/store

Crea un nuevo almacén de documentos con los detalles proporcionados.

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
    Example ```My Document Store```
    <br/>
    <p>**description** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**loaders** ```string``` <span className="opt">Optional</span></p>
    Loaders associated with the document store, stored as JSON string
    <br/>
    <p>**whereUsed** ```string``` <span className="opt">Optional</span></p>
    Places where the document store is used, stored as JSON string
    <br/>
    <p>**status** ```string · enum``` <span className="opt">Optional</span></p>
    Possible values ```EMPTY```, ```SYNC```, ```SYNCING```, ```STALE```, ```NEW```, ```UPSERTING```, ```UPSERTED```
    <br/>
    <p>**vectorStoreConfig** ```string``` <span className="opt">Optional</span></p>
    Configuration for the vector store, stored as JSON string
    <br/>
    <p>**embeddingConfig** ```string``` <span className="opt">Optional</span></p>
    Configuration for the embedding, stored as JSON string
    <br/>
    <p>**recordManagerConfig** ```string``` <span className="opt">Optional</span></p>
    Configuration for the record manager, stored as JSON string
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
        POST /document-store/store HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*

        {
          "name": "My Document Store",
          "description": "Store description"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/document-store/store' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My Document Store",
    "description": "Store description"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/store', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": "My Document Store",
      "description": "Store description"
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
    "/document-store/store",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "name": "My Document Store",
      "description": "Store description"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Actualiza un almacén de documentos específico

``PUT`` /document-store/store/``{id}``

Actualiza los detalles de un almacén de documentos específico por su ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string · uuid``` <span className="reqt">Requiered</span></p>
    Document Store ID
    </Accordion>
    <Accordion title="Body">
    <p>**id** ```string · uuid``` <span className="opt">Optional</span></p>
    <br/>
    <p>**name** ```string``` <span className="opt">Optional</span></p>
    Example ```My Document Store```
    <br/>
    <p>**description** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**loaders** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**whereUsed** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**status** ```string · enum``` <span className="opt">Optional</span></p>
    Possible values ```EMPTY```, ```SYNC```, ```SYNCING```, ```STALE```, ```NEW```, ```UPSERTING```, ```UPSERTED```
    <br/>
    <p>**vectorStoreConfig** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**embeddingConfig** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**recordManagerConfig** ```string``` <span className="opt">Optional</span></p>
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
        PUT /document-store/store/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*

        {
          "name": "My Document Store",
          "description": "Updated description"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request PUT \
  --url '/document-store/store/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My Document Store",
    "description": "Updated description"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/store/{id}', {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": "My Document Store",
      "description": "Updated description"
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
    "/document-store/store/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "name": "My Document Store",
      "description": "Updated description"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Elimina un almacén de documentos específico

``delete`` /document-store/store/``{id}``

Elimina un almacén de documentos por su ID.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string · uuid``` <span className="reqt">Requiered</span></p>
    Document Store ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        DELETE /document-store/store/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request DELETE \
  --url '/document-store/store/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/store/{id}', {
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
    "/document-store/store/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Obtiene fragmentos de un cargador de documentos específico

``GET`` /document-store/chunks/``{storeId}``/``{loaderId}``/``{pageNo}``

Obtiene fragmentos de un cargador de documentos específico dentro de un almacén de documentos.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**storeId** ```string · uuid``` <span className="reqt">Requiered</span></p>
    Document Store ID
    <br/>
    <p>**loaderId** ```string · uuid``` <span className="reqt">Requiered</span></p>
    Document loader ID
    <br/>
    <p>**pageNo** ```string``` <span className="reqt">Requiered</span></p>
    Pagination number
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /document-store/chunks/{storeId}/{loaderId}/{pageNo} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/document-store/chunks/{storeId}/{loaderId}/{pageNo}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/chunks/{storeId}/{loaderId}/{pageNo}', {
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
    "/document-store/chunks/{storeId}/{loaderId}/{pageNo}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Actualiza un fragmento específico

``PUT`` /document-store/chunks/``{storeId}``/``{loaderId}``/``{chunkId}``

Actualiza un fragmento específico de un cargador de documentos.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**storeId** ```string``` <span className="reqt">Requiered</span></p>
    Document Store ID
    <br/>
    <p>**loaderId** ```string``` <span className="reqt">Requiered</span></p>
    Document Loader ID
    <br/>
    <p>**chunkId** ```string``` <span className="reqt">Requiered</span></p>
    Document Chunk ID
    </Accordion>
    <Accordion title="Body">
    <p>**pageContent** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**metadata** ```object``` <span className="opt">Optional</span></p>
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        PUT /document-store/chunks/{storeId}/{loaderId}/{chunkId} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*

        {
          "pageContent": "Updated chunk content",
          "metadata": {}
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request PUT \
  --url '/document-store/chunks/{storeId}/{loaderId}/{chunkId}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "pageContent": "Updated chunk content",
    "metadata": {}
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/chunks/{storeId}/{loaderId}/{chunkId}', {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "pageContent": "Updated chunk content",
      "metadata": {}
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
    "/document-store/chunks/{storeId}/{loaderId}/{chunkId}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "pageContent": "Updated chunk content",
      "metadata": {}
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Elimina un fragmento específico de un cargador de documentos

``delete`` /document-store/chunks/``{storeId}``/``{loaderId}``/``{chunkId}``

Elimina un fragmento específico de un cargador de documentos.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**storeId** ```string``` <span className="reqt">Requiered</span></p>
    Document Store ID
    <br/>
    <p>**loaderId** ```string``` <span className="reqt">Requiered</span></p>
    Document Loader ID
    <br/>
    <p>**chunkId** ```string``` <span className="reqt">Requiered</span></p>
    Document Chunk ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        DELETE /document-store/chunks/{storeId}/{loaderId}/{chunkId} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request DELETE \
  --url '/document-store/chunks/{storeId}/{loaderId}/{chunkId}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/chunks/{storeId}/{loaderId}/{chunkId}', {
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
    "/document-store/chunks/{storeId}/{loaderId}/{chunkId}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Inserta un documento en el almacén de documentos

``POST`` /document-store/upsert/``{id}``

Inserta un documento en el almacén de documentos.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string · uuid``` <span className="reqt">Requiered</span></p>
    Document Store ID
    </Accordion>
    <Accordion title="Body">
    <Tabs>
    <TabItem value="application/json" label="application/json" default>
    <p>**docId** ```string · uuid``` <span className="opt">Optional</span></p>
    Document ID within the store. If provided, existing configuration from the document will be used
    <br/>
    <p>**metadata** ```object``` <span className="opt">Optional</span></p>
    Metadata associated with the document
    <br/>
    <p>**replaceExisting** ```boolean``` <span className="opt">Optional</span></p>
    Whether to replace existing document loader with the new upserted chunks
    <br/>
    <p>**createNewDocStore** ```boolean``` <span className="opt">Optional</span></p>
    Whether to create a new document store
    <br/>
    <p>**docStore** ```object``` <span className="opt">Optional</span></p>
    Only when createNewDocStore is true. Properties: **name**, **description**
    <br/>
    <p>**loader** ```object``` <span className="opt">Optional</span></p>
    Name of the loader (camelCase) and **config**
    <br/>
    <p>**splitter** ```object``` <span className="opt">Optional</span></p>
    Name of the text splitter (camelCase) and **config**
    <br/>
    <p>**embedding** ```object``` <span className="opt">Optional</span></p>
    Name of the embedding generator (camelCase) and **config**
    <br/>
    <p>**vectorStore** ```object``` <span className="opt">Optional</span></p>
    Name of the vector store (camelCase) and **config**
    <br/>
    <p>**recordManager** ```object``` <span className="opt">Optional</span></p>
    Name of the record manager (camelCase) and **config**
    </TabItem>
    <TabItem value="multipart/form-data" label="multipart/form-data">
    <p>**files** ```string · binary[]``` <span className="reqt">Requiered</span></p>
    Files to be uploaded
    <br/>
    <p>**docId** ```string``` <span className="opt">Optional</span></p>
    Document ID to use existing configuration
    <br/>
    <p>**loader** ```string``` <span className="opt">Optional</span></p>
    Loader configurations
    <br/>
    <p>**splitter** ```string``` <span className="opt">Optional</span></p>
    Splitter configurations
    <br/>
    <p>**embedding** ```string``` <span className="opt">Optional</span></p>
    Embedding configurations
    <br/>
    <p>**vectorStore** ```string``` <span className="opt">Optional</span></p>
    Vector Store configurations
    <br/>
    <p>**recordManager** ```string``` <span className="opt">Optional</span></p>
    Record Manager configurations
    <br/>
    <p>**metadata** ```object``` <span className="opt">Optional</span></p>
    <br/>
    <p>**replaceExisting** ```boolean``` <span className="opt">Optional</span></p>
    <br/>
    <p>**createNewDocStore** ```boolean``` <span className="opt">Optional</span></p>
    <br/>
    <p>**docStore** ```object``` <span className="opt">Optional</span></p>
    </TabItem>
    </Tabs>
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        POST /document-store/upsert/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: multipart/form-data
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/document-store/upsert/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: multipart/form-data' \
  --form 'files=@document.pdf'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const formData = new FormData();
formData.append("files", fileInput.files[0]);

const response = await fetch('/document-store/upsert/{id}', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN"
    },
    body: formData
});

const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
      import requests

files = [("files", open("document.pdf", "rb"))]

response = requests.post(
    "/document-store/upsert/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN"},
    files=files
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Reprocesa e inserta todos los documentos en el almacén de documentos

``POST`` /document-store/refresh/``{id}``

Reprocesa e inserta todos los documentos existentes en el almacén de documentos.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string · uuid``` <span className="reqt">Requiered</span></p>
    Document Store ID
    </Accordion>
    <Accordion title="Body">
    <p>**items** ```object[]``` <span className="opt">Optional</span></p>
    Array of document loader upsert configurations (same schema as upsert endpoint)
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        POST /document-store/refresh/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*

        {
          "items": []
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/document-store/refresh/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{"items": []}'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/refresh/{id}', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ "items": [] })
});

const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
      import json
import requests

response = requests.post(
    "/document-store/refresh/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({"items": []})
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Consulta de recuperación

``POST`` /document-store/vectorstore/query

Consulta de recuperación para los fragmentos insertados.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Body">
    <p>**storeId** ```string``` <span className="reqt">Requiered</span></p>
    Document Store ID
    <br/>
    <p>**query** ```string``` <span className="reqt">Requiered</span></p>
    Query to search for
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        POST /document-store/vectorstore/query HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*

        {
          "storeId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
          "query": "search text"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/document-store/vectorstore/query' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "storeId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "query": "search text"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/vectorstore/query', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "storeId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "query": "search text"
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
    "/document-store/vectorstore/query",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "storeId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "query": "search text"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Elimina un cargador de documentos específico y sus fragmentos asociados

``delete`` /document-store/loader/``{storeId}``/``{loaderId}``

Elimina un cargador de documentos específico y sus fragmentos asociados del almacén de documentos. Esto no elimina los datos de la tienda vectorial.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**storeId** ```string``` <span className="reqt">Requiered</span></p>
    Document Store ID
    <br/>
    <p>**loaderId** ```string``` <span className="reqt">Requiered</span></p>
    Document Loader ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        DELETE /document-store/loader/{storeId}/{loaderId} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request DELETE \
  --url '/document-store/loader/{storeId}/{loaderId}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/loader/{storeId}/{loaderId}', {
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
    "/document-store/loader/{storeId}/{loaderId}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Elimina datos del almacén vectorial

``delete`` /document-store/vectorstore/``{id}``

Solo se eliminarán los datos que fueron insertados con Record Manager del almacén vectorial.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**id** ```string``` <span className="reqt">Requiered</span></p>
    Document Store ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        DELETE /document-store/vectorstore/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request DELETE \
  --url '/document-store/vectorstore/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/document-store/vectorstore/{id}', {
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
    "/document-store/vectorstore/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>
