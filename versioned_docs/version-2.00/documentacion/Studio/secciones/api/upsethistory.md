---
title: Historial de inserciones y actualizaciones
description: Obtiene el historial de inserciones y actualizaciones con filtros opcionales
slug: "/api/upsert-history"
sidebar_position: 11
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Obtener historial de inserciones y actualizaciones

``GET`` /vector/upsert-history/``{id}``


<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
      <p> id  ```string``` <span className="req">Required</span> </p>
      Chatflow ID
    </Accordion>
    <Accordion title="Query parameters">
     <p>**order** ```string · enum``` <span className="opt">Optional</span></p>
        Sort order of the results (ascending or descending)
        Default: ```asc```
    <br/>
    <p>**startDate** ```string · date-time``` <span className="opt">Optional</span></p>
        Start date of the records to retrieve
    <br/>
    <p>**endDate** ```string``` <span className="opt">Optional</span></p>
    Filter records from this start date (inclusive)
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    GET /upsert-history/{id} HTTP/1.1
    Authorization: Bearer YOUR_SECRET_TOKEN
    Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/upsert-history/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/upsert-history/{id}', {
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
    "/upsert-history/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>


### Eliminar historial de inserciones y actualizaciones

``DELETE`` /vector/upsert-history/``{id}``

Soft delete upsert history records by IDs

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Body">
      <p> id  ```string · uuid[]``` <span className="req">Required</span> </p>
      List of upsert history record IDs to delete
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        PATCH /upsert-history/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*
        Content-Length: 48

        {
        "ids": [
            "123e4567-e89b-12d3-a456-426614174000"
        ]
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request PATCH \
  --url '/upsert-history/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "ids": [
      "123e4567-e89b-12d3-a456-426614174000"
    ]
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
     const response = await fetch('/upsert-history/{id}', {
    method: 'PATCH',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "ids": [
        "123e4567-e89b-12d3-a456-426614174000"
      ]
    })
});

const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
      import json
import requests

response = requests.patch(
    "/upsert-history/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "ids": [
        "123e4567-e89b-12d3-a456-426614174000"
      ]
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>
