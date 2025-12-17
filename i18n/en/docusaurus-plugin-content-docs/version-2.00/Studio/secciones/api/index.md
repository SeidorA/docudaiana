---
title: 'API'
iconName: "key"
sidebar_position: 5
---
import {Feature} from '@site/docs/documentacion/cards/cards.tsx'
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Learn more about the details of some of the most used APIs: prediction, vector-upsert



<Accordion title="Consult all public API references">
<div className="row">
    <Feature title="Assistants" description="API reference for creating and managing intelligent virtual assistants" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Chat Message" description="API reference for sending and receiving messages within conversations" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Chat Flows" description="API reference for designing and controlling automated conversations" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Document Store" description="API reference for storing, searching, and connecting documents with your flows" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Feedback" description="API reference for collecting and analyzing user opinions" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Leads" description="API reference for capturing and managing leads generated from flows" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Ping" description="API reference for monitoring system availability and responses" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Prediction" description="API reference for integrating predictive models within your flows" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Tools" description="API reference for extending functionalities through custom tools" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Update History" description="API reference for editing and updating previous user interactions" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Variables" description="API reference for managing dynamic data in conversation flows" link="/Studio/secciones/chatflows" icon="network" />
</div>
</Accordion>

## Prediction
<p aling="center">
![a](/img/studio/api/a.png)
</p>

### Create a new prediction

``post`` /prediction/``{id}``


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
      <Tabs>
      <TabItem value="application/json" label="application/json" default>
        <p> question  ```string``` <span className="opt">Optional</span> </p>
        The question being asked
        <p> overrideConfig  ```object``` <span className="opt">Optional</span> </p>
        The configuration to override the default prediction settings (optional)
        <p> history ```object[]``` <span className="opt">Optional</span> </p>
        The history messages to be prepended (optional)
        <p> uploads ```object[]``` <span className="opt">Optional</span> </p>
        The files to be uploaded (optional)
      </TabItem>
      <TabItem value="multipart/form-data" label="multipart/form-data" default>
        <p> question  ```string``` <span className="req">Required</span></p>
        Question to ask during the prediction process
        <p> files ```string · binary[]``` <span className="opt">Optional</span> </p>
        Files to be uploaded
        <p> uploads ```string | nullable``` <span className="opt">Optional</span> </p>
        Other override configurations
      </TabItem>
      </Tabs>
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
