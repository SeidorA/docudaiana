---
title: "Feedback"
description: Retrieve all feedbacks for a chatflow
slug: "/api/Feedback"
sidebar_position: 6
hide_table_of_contents: true
---

import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## List all chat messages

``GEt`` /Feedback/``{id}``

Retrieve all feedbacks for a chatflow

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**ID** ```string``` <span className="reqt">Requiered</span></p>
    Chatflow ID
    </Accordion>
    <Accordion title="Query parameters">
    <p>**chatId** ```string``` <span className="opt">Optional</span></p>
    Chat ID to filter feedbacks (optional)
    <br/>
    <p>**sortOrder** ```string · enum``` <span className="opt">Optional</span></p>
    Sort order of feedbacks (optional)
    Default: ```asc```
    Possible values: ```asc``` ```desc```
    <br/>
    <p>**startDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Filter feedbacks starting from this date (optional)
    <br/>
    <p>**endDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Filter feedbacks up to this date (optional)
   </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /feedback/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
        curl -L \
        --url '/feedback/{id}' \
        --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
        --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
    const response = await fetch('/feedback/{id}', {
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
            "/feedback/{id}",
            headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
        )

        data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>


## Create new chat message feedback

``POST`` /Feedback

Create new feedback for a specific chat flow.

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Body">
    <p>**Id** ```string``` <span className="opt">Optional</span></p>
    Chat ID to filter feedbacks (optional)
    <br/>
    <p>**chatflowid** ```string · uui``` <span className="opt">Optional</span></p>
    Identifier for the chat flow
    <br/>
    <p>**chatId** ```string``` <span className="opt">Optional</span></p>
    Identifier for the chat
    <br/>
    <p>**messageId** ```strinstring · uuid``` <span className="opt">Optional</span></p>
    Identifier for the message
    <br/>
    <p>**rating** ```string · enum``` <span className="opt">Optional</span></p>
    Rating for the message
    Possible values: ```THUMBS_UP``` ```THUMBS_DOWN```
    <br/>
    <p>**content** ```string``` <span className="opt">Optional</span></p>
    Feedback content
    <br/>
    <p>**createdDate** ```string · date-timE``` <span className="opt">Optional</span></p>
    Date and time when the feedback was created
    <br/>
   </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        POST /feedback HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*
        Content-Length: 243

        {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
        "chatId": "text",
        "messageId": "123e4567-e89b-12d3-a456-426614174000",
        "rating": "THUMBS_UP",
        "content": "text",
        "createdDate": "2026-05-25T13:51:26.942Z"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
   ```javascript
    curl -L \
    --request POST \
    --url '/feedback' \
    --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
    --header 'Content-Type: application/json' \
    --data '{
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
        "chatId": "text",
        "messageId": "123e4567-e89b-12d3-a456-426614174000",
        "rating": "THUMBS_UP",
        "content": "text",
        "createdDate": "2026-05-25T13:51:26.942Z"
    }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```python
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
            "Authorization": "Bearer YOUR_SECRET_TOKEN",
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
            "chatId": "text",
            "messageId": "123e4567-e89b-12d3-a456-426614174000",
            "rating": "THUMBS_UP",
            "content": "text",
            "createdDate": "2026-05-25T13:51:26.942Z"
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
            "/feedback",
            headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
            data=json.dumps({
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
            "chatId": "text",
            "messageId": "123e4567-e89b-12d3-a456-426614174000",
            "rating": "THUMBS_UP",
            "content": "text",
            "createdDate": "2026-05-25T13:51:26.942Z"
            })
        )

        data = response.json()
    ```
  </TabItem>
</Tabs>
  </div>
</div>


## Update chat message feedback

``PUT`` /Feedback/``{id}``

Update a specific feedback

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
    <p>**Authorization** ```string``` <span className="reqt">Requiered</span></p>
    Bearer authentication header of the form Bearer ``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**ID** ```string``` <span className="reqt">Requiered</span></p>
    Chat Message Feedback ID
    </Accordion>
    <Accordion title="Query parameters">
    <p>**ID** ```string uuid``` <span className="opt">Optional</span></p>
    Unique identifier for the feedback
    <br/>
    <p>**chatflowid** ```string uuid``` <span className="opt">Optional</span></p>
    Identifier for the chat flow
    <br/>
    <p>**chatId** ```string``` <span className="opt">Optional</span></p>
    Identifier for the chat
    <br/>
    <p>**messageId** ```string uuid``` <span className="opt">Optional</span></p>
    Identifier for the message
    <br/>
    <p>**rating** ```string · enum``` <span className="opt">Optional</span></p>
    Rating for the message
    Possible values: ```THUMBS_UP``` ```THUMBS_DOWN```
    <br/>
    <p>**content** ```string``` <span className="opt">Optional</span></p>
    Feedback content
    <br/>
    <p>**createdDate** ```string · date-time``` <span className="opt">Optional</span></p>
    Date and time when the feedback was created
    <br/>
   </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        PUT /feedback/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*
        Content-Length: 243

        {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
        "chatId": "text",
        "messageId": "123e4567-e89b-12d3-a456-426614174000",
        "rating": "THUMBS_UP",
        "content": "text",
        "createdDate": "2026-05-25T13:51:26.942Z"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
        curl -L \
        --request PUT \
        --url '/feedback/{id}' \
        --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
        --header 'Content-Type: application/json' \
        --data '{
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
            "chatId": "text",
            "messageId": "123e4567-e89b-12d3-a456-426614174000",
            "rating": "THUMBS_UP",
            "content": "text",
            "createdDate": "2026-05-25T13:51:26.942Z"
        }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
        const response = await fetch('/feedback/{id}', {
            method: 'PUT',
            headers: {
            "Authorization": "Bearer YOUR_SECRET_TOKEN",
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
            "chatId": "text",
            "messageId": "123e4567-e89b-12d3-a456-426614174000",
            "rating": "THUMBS_UP",
            "content": "text",
            "createdDate": "2026-05-25T13:51:26.942Z"
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
            "/feedback/{id}",
            headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
            data=json.dumps({
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "chatflowid": "123e4567-e89b-12d3-a456-426614174000",
            "chatId": "text",
            "messageId": "123e4567-e89b-12d3-a456-426614174000",
            "rating": "THUMBS_UP",
            "content": "text",
            "createdDate": "2026-05-25T13:51:26.942Z"
            })
        )

        data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>