---
title: 'api'
iconName: "key"
sidebar_position: 5
---
import {Feature} from '@site/docs/documentacion/cards/cards.tsx'
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Aprende más sobre los detalles de algunas de las APIs más utilizadas: prediction, vector-upsert



<Accordion title="Consulta  todas las referencias de API públicas">
<div className="row">
    <Feature title="Asistentes" description="Referencia de API para crear y administrar asistentes virtuales inteligentes" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Mensaje de Chat" description="Referencia de API para enviar y recibir mensajes dentro de conversaciones" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Flujos de Chat" description="Referencia de API para diseñar y controlar conversaciones automatizadas" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Almacén de Documentos" description="Referencia de API para almacenar, buscar y conectar documentos con tus flujos" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Retroalimentación" description="Referencia de API para recopilar y analizar opiniones de los usuarios" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Leads" description="Referencia de API para capturar y gestionar prospectos generados desde los flujos" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Ping" description="Referencia de API para monitorear disponibilidad y respuestas del sistema" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Predicción" description="Referencia de API para integrar modelos predictivos dentro de tus flujos" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Herramientas" description="Referencia de API para extender funcionalidades mediante herramientas personalizadas" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Actualizar Historial" description="Referencia de API para editar y actualizar interacciones previas del usuario" link="/Studio/secciones/chatflows" icon="network" />
    <Feature title="Variables" description="Referencia de API para gestionar datos dinámicos en los flujos de conversación" link="/Studio/secciones/chatflows" icon="network" />
</div>
</Accordion>

## Prediction
<p aling="center">
![a](/img/studio/api/a.png)
</p>

### Crear una nueva predicción

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
        The history messages to be prepended (optional)
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



