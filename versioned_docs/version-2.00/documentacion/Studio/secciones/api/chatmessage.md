---
title: Mensajes de chat
description: Retrieve all chat messages for a specific chatflow.
slug: "/api/chatmessage"
sidebar_position: 3
hide_table_of_contents: true
---

import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Enlista todos los mensajes de chat

``GEt`` /chatmessage/``{id}``

Recupera todos los mensajes de chat para un chatflow específico.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Authorizations">
    <p>**ID** ```string``` <span className="reqt">Requiered</span></p>
    Chatflow ID
    </Accordion>
    <Accordion title="Query parameters">
     <p>**chatType** ```string · enum``` <span className="opt">Optional</span></p>
    Filter by chat type
    Possible values ```INTERNAL```, ```EXTERNAL```
    <br/>
    <p>**order** ```string · enum``` <span className="opt">Optional</span></p>
    Sort order
    Possible values ```ASC```, ```DESC```
    <br/>
    <p>**chatId** ```string``` <span className="opt">Optional</span></p>
    Filter by chat ID
    <br/>
    <p>**memoryType** ```string``` <span className="opt">Optional</span></p>
    Filter by memory type
    Example ```Buffer Memory```
    <br/>
    <p>**sessionId** ```string``` <span className="opt">Optional</span></p>
    Filter by session ID
    <br/>
    <p>**startDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Filter by start date
    Example ```2025-01-01T11:28:36.000Z```
    <br/>
    <p>**endDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Filter by end date
    Example ```2025-01-13T11:28:36.000Z```
    <p>**feedback**  ```boolean``` <span className="opt">Optional</span></p>
    Filter by feedback
    <br/>
    <p>**feedbackType**  ```string · enum``` <span className="opt">Optional</span></p>
    Filter by feedback type. Only applicable if feedback is true
    Possible values: ```THUMBS_UP``` ```THUMBS_DOWN``` 
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /chatmessage/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/chatmessage/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatmessage/{id}', {
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
    "/chatmessage/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## Elimina todos los mensajes de chat

``delete`` /chatmessage/``{id}``

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Authorizations">
    <p>**ID** ```string``` <span className="reqt">Requiered</span></p>
    Chatflow ID
    </Accordion>
    <Accordion title="Query parameters">
    <p>**chatId** ```string``` <span className="opt">Optional</span></p>
    Filter by chat ID
    <br/>
    <p>**memoryType** ```string``` <span className="opt">Optional</span></p>
    Filter by memory type
    Example ```Buffer Memory```
    <br/>
    <p>**sessionId** ```string``` <span className="opt">Optional</span></p>
    Filter by session ID
    <br/>
    <p>**chatType** ```string · enum``` <span className="opt">Optional</span></p>
    Filter by chat type
    Possible values ```INTERNAL```, ```EXTERNAL```
    <br/>
    <p>**startDate** ```string``` <span className="opt">Optional</span></p>
    Filter by start date
    Example ```2025-01-01T11:28:36.000Z```
    <br/>
    <p>**endDate** ```string``` <span className="opt">Optional</span></p>
    <br/>
    <p>**feedbackType** ```string · enum``` <span className="opt">Optional</span></p>
    Filter by feedback type
    Possible values ```THUMBS_UP```, ```THUMBS_DOWN```
    <br/>
    <p>**hardDelete** ```boolean``` <span className="opt">Optional</span></p>
    If hardDelete is true, messages will be deleted from the third party service as well
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /chatmessage/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --url '/chatmessage/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/chatmessage/{id}', {
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
    "/chatmessage/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>
