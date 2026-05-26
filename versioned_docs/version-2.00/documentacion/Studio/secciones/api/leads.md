---
title: Leads
description: Get all leads for a specific chatflow
slug: "/api/leads"
sidebar_position: 7
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



### Obtiene todos los leads para un flujo de chat específico
``post`` /Leads/``{id}``
Recupera todos los leads asociados con un flujo de chat específico

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
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
      GET /leads/{id} HTTP/1.1
      Authorization: Bearer YOUR_SECRET_TOKEN
      Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
      curl -L \
      --url '/leads/{id}' \
      --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
      --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/leads/{id}', {
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
          "/leads/{id}",
          headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
      )
      data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>


### Crea un nuevo lead en un flujo de chat

``post`` /Leads
Crea un nuevo lead asociado con un flujo de chat específico

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Body">
      <p> **id**  ```string · uuid``` <span className="opt">Optional</span> </p>
      Unique identifier for the lead
      Example: ```cfd531e0-82fc-11e9-bc42-526af7764f64```
      <br/>
      <p> **name**  ```string``` <span className="opt">Optional</span> </p>
      Name of the lead
      Example: ```John Doe```
      <br/>
      <p> **email**  ```string``` <span className="opt">Optional</span> </p>
      Email address of the lead
      Example: ```john.doe@example.com```
      <br/>
      <p> **phone**  ```string``` <span className="opt">Optional</span> </p>
      Phone number of the lead
      Example: ```+1234567890```
      <br/>
      <p> **chatflowid**  ```string``` <span className="opt">Optional</span> </p>
      ID of the chatflow the lead is associated with
      Example: ```7c4e8b7a-7b9a-4b4d-9f3e-2d28f1ebea02```
      <br/>
      <p> **chatId**  ```string``` <span className="opt">Optional</span> </p>
      ID of the chat session the lead is associated with
      Example: ```d7b0b5d8-85e6-4f2a-9c1f-9d9a0e2ebf6b```
      <br/>
      <p> **createdDate**  ```string · date-time``` <span className="opt">Optional</span> </p>
      Date and time when the lead was created
      Example: ```2024-08-24T14:15:22Z```
      <br/>
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
      POST /leads HTTP/1.1
      Authorization: Bearer YOUR_SECRET_TOKEN
      Content-Type: application/json
      Accept: */*
      Content-Length: 253

      {
        "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+1234567890",
        "chatflowid": "7c4e8b7a-7b9a-4b4d-9f3e-2d28f1ebea02",
        "chatId": "d7b0b5d8-85e6-4f2a-9c1f-9d9a0e2ebf6b",
        "createdDate": "2024-08-24T14:15:22Z"
      }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
      curl -L \
      --request POST \
      --url '/leads' \
      --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
      --header 'Content-Type: application/json' \
      --data '{
        "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+1234567890",
        "chatflowid": "7c4e8b7a-7b9a-4b4d-9f3e-2d28f1ebea02",
        "chatId": "d7b0b5d8-85e6-4f2a-9c1f-9d9a0e2ebf6b",
        "createdDate": "2024-08-24T14:15:22Z"
      }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/leads', {
          method: 'POST',
          headers: {
            "Authorization": "Bearer YOUR_SECRET_TOKEN",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "+1234567890",
            "chatflowid": "7c4e8b7a-7b9a-4b4d-9f3e-2d28f1ebea02",
            "chatId": "d7b0b5d8-85e6-4f2a-9c1f-9d9a0e2ebf6b",
            "createdDate": "2024-08-24T14:15:22Z"
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
          "/leads",
          headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
          data=json.dumps({
            "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "+1234567890",
            "chatflowid": "7c4e8b7a-7b9a-4b4d-9f3e-2d28f1ebea02",
            "chatId": "d7b0b5d8-85e6-4f2a-9c1f-9d9a0e2ebf6b",
            "createdDate": "2024-08-24T14:15:22Z"
          })
      )

      data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>
