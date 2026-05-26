---
title: Incrustar vectores
description: Incrusta vectores en un chatflow.
slug: "/api/vector-upsert"
sidebar_position: 13
hide_table_of_contents: true
---

import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Incrustaciones vectoriales de tipo «upsert»

``post`` /vector/upsert/``{id}``

Incrusta vectores en un chatflow.

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
    <Accordion title="Body">
     <p>**stopNodeId** ```string``` <span className="opt">Optional</span></p>
     In cases when you have multiple vector store nodes, you can specify the node ID to store the vectors
     <br/>
    <p>**overrideConfig** ```Object``` <span className="opt">Optional</span></p> 
    The configuration to override the default vector upsert settings (optional)
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    POST /vector/upsert/{id} HTTP/1.1
Authorization: Bearer YOUR_SECRET_TOKEN
Content-Type: application/json
Accept: */*
Content-Length: 43

{
  "stopNodeId": "node_1",
  "overrideConfig": {}
}
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
   curl -L \
  --request POST \
  --url '/vector/upsert/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "stopNodeId": "node_1",
    "overrideConfig": {}
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
    const response = await fetch('/vector/upsert/{id}', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "stopNodeId": "node_1",
      "overrideConfig": {}
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
    "/vector/upsert/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "stopNodeId": "node_1",
      "overrideConfig": {}
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>
