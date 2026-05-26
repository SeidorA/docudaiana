---
title: Archivos adjuntos
description: Return contents of the files in plain string format
slug: "/api/attachments"
sidebar_position: 2
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Crear attachments array

``post`` /attachments/``{chatflowId}``/``{chatId}``

Regresa los archivos en formato string plano

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
     <p>**files** ```string · binary[]``` <span className="req">Required</span></p>
    <br/>
    <p>**base64** ```boolean``` <span className="opt">Optional</span></p>
    Return contents of the files in base64 format Default ```false``` 
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
    POST /prediction/{id} HTTP/1.1
    Host: 
    Authorization: Bearer JWT
    Content-Type: multipart/form-data
    Accept: */*
    Content-Length: 53

    {
      "question": "text",
      "files": [
        "binary"
      ],
      "modelName": ""
    }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
    curl -L \
  --request POST \
  --url '/prediction/{id}' \
  --header 'Authorization: Bearer JWT' \
  --header 'Content-Type: multipart/form-data' \
  --form 'question=text' \
  --form 'files=binary' \
  --form 'modelName='
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const formData = new FormData();

      formData.append("question", "text");
      formData.append("files", "binary");
      formData.append("modelName", "");

      const response = await fetch('/prediction/{id}', {
          method: 'POST',
          headers: {
            "Authorization": "Bearer JWT",
            "Content-Type": "multipart/form-data"
          },
          body: formData
      });

      const data = await response.json();
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
    ```python
      import requests

      files = {
          "question": "text",
          "files": "binary",
          "modelName": "",
      }

      response = requests.post(
          "/prediction/{id}",
          headers={"Authorization":"Bearer JWT","Content-Type":"multipart/form-data"},
          files=files
      )

      data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>




