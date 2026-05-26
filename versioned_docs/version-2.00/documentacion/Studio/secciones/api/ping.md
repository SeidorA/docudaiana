---
title: Ping
description: Verifica si el servidor está funcionando
slug: "/api/ping"
sidebar_position: 8
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Hacer un ping al servidor

``GET`` /ping
Verifica si el servidor está funcionando

<div className="row">
  <div className="col col--6">
    
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
      GET /ping HTTP/1.1
      Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
      curl -L \
      --url '/ping' \
      --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
      const response = await fetch('/ping', {
          method: 'GET',
          headers: {
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
          "/ping",
          headers={"Accept":"*/*"},
      )

      data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>




