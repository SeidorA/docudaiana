---
title: Variables
description: Create a new variable
slug: "/api/variables"
sidebar_position: 12
hide_table_of_contents: true
---
import {Accordion} from '@site/docs/documentacion/cards/acordion.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create a new variable

``post`` /variables

Create a new variable

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer``<token>``.
    </Accordion>
    <Accordion title="Body">
    <p>**ID** ```string · binary[]``` <span className="opt">Optional</span></p>
    Unique identifier for the variable
    Example: ```cfd531e0-82fc-11e9-bc42-526af7764f64```
    <br/>
    <p>**name** ```string``` <span className="opt">Optional</span></p>
    Name of the variable
    Example: ```API_KEY```
    <br/>
    <p>**value** ```string · nullable``` <span className="opt">Optional</span></p>
    Value of the variable
    Example: ```my-secret-key```
    <br/>
    <p>**type** ```string``` <span className="opt">Optional</span></p>
    Type of the variable (e.g., string, number)
    Example: ```string```
    <br/>
    <p>**createdDate** ```string · date-time``` <span className="opt">Optional</span></p>
    The date and time when the variable was created
    Example: ```2022-01-01T00:00:00.000Z```
    <br/>
    <p>**updatedDate** ```string · date-time``` <span className="opt">Optional</span></p>
    The date and time when the variable was updated
    Example: ```2022-01-01T00:00:00.000Z```
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        POST /variables HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Content-Type: application/json
        Accept: */*
        Content-Length: 176

        {
        "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
        "name": "API_KEY",
        "value": "my-secret-key",
        "type": "string",
        "createdDate": "2024-08-24T14:15:22Z",
        "updatedDate": "2024-08-24T14:15:22Z"
        }
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
        curl -L \
    --request POST \
    --url '/variables' \
    --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
    --header 'Content-Type: application/json' \
    --data '{
        "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
        "name": "API_KEY",
        "value": "my-secret-key",
        "type": "string",
        "createdDate": "2024-08-24T14:15:22Z",
        "updatedDate": "2024-08-24T14:15:22Z"
    }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
     const response = await fetch('/variables', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
      "name": "API_KEY",
      "value": "my-secret-key",
      "type": "string",
      "createdDate": "2024-08-24T14:15:22Z",
      "updatedDate": "2024-08-24T14:15:22Z"
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
            "/variables",
            headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
            data=json.dumps({
            "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
            "name": "API_KEY",
            "value": "my-secret-key",
            "type": "string",
            "createdDate": "2024-08-24T14:15:22Z",
            "updatedDate": "2024-08-24T14:15:22Z"
            })
        )

        data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>

## List all variables

``get`` /variables

Retrieve a list of all variables

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer``<token>``.
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        GET /variables HTTP/1.1
Authorization: Bearer YOUR_SECRET_TOKEN
Accept: */*

    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
       curl -L \
  --url '/variables' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
    const response = await fetch('/variables', {
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
    "/variables",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>



## Update a variable by ID

``put`` /variables/``{id}``

Update a specific variable by ID

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**ID** ```string``` <span className="req">Required</span></p>
    Variable ID
    </Accordion>
    <Accordion title="Body">
    <p>**ID** ```string · binary[]``` <span className="opt">Optional</span></p>
    Unique identifier for the variable
    Example: ```cfd531e0-82fc-11e9-bc42-526af7764f64```
    <br/>
    <p>**name** ```string``` <span className="opt">Optional</span></p>
    Name of the variable
    Example: ```API_KEY```
    <br/>
    <p>**value** ```string · nullable``` <span className="opt">Optional</span></p>
    Value of the variable
    Example: ```my-secret-key```
    <br/>
    <p>**type** ```string``` <span className="opt">Optional</span></p>
    Type of the variable (e.g., string, number)
    Example: ```string```
    <br/>
    <p>**createdDate** ```string · date-time``` <span className="opt">Optional</span></p>
    The date and time when the variable was created
    Example: ```2022-01-01T00:00:00.000Z```
    <br/>
    <p>**updatedDate** ```string · date-time``` <span className="opt">Optional</span></p>
    The date and time when the variable was updated
    Example: ```2022-01-01T00:00:00.000Z```
    </Accordion>

  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        PUT /variables/{id} HTTP/1.1
Authorization: Bearer YOUR_SECRET_TOKEN
Content-Type: application/json
Accept: */*
Content-Length: 176

{
  "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
  "name": "API_KEY",
  "value": "my-secret-key",
  "type": "string",
  "createdDate": "2024-08-24T14:15:22Z",
  "updatedDate": "2024-08-24T14:15:22Z"
}
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
      curl -L \
  --request PUT \
  --url '/variables/{id}' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
    "name": "API_KEY",
    "value": "my-secret-key",
    "type": "string",
    "createdDate": "2024-08-24T14:15:22Z",
    "updatedDate": "2024-08-24T14:15:22Z"
  }'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
     const response = await fetch('/variables/{id}', {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer YOUR_SECRET_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
      "name": "API_KEY",
      "value": "my-secret-key",
      "type": "string",
      "createdDate": "2024-08-24T14:15:22Z",
      "updatedDate": "2024-08-24T14:15:22Z"
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
    "/variables/{id}",
    headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Content-Type":"application/json"},
    data=json.dumps({
      "id": "cfd531e0-82fc-11e9-bc42-526af7764f64",
      "name": "API_KEY",
      "value": "my-secret-key",
      "type": "string",
      "createdDate": "2024-08-24T14:15:22Z",
      "updatedDate": "2024-08-24T14:15:22Z"
    })
)

data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>



## Delete a variable by ID

``delete`` /variables/``{id}``

Delete a specific variable by ID

<div className="row">
  <div className="col col--6">
    <Accordion title="Authorizations">
      <p> Authorization  ```string``` <span className="req">Required</span> </p>
      Bearer authentication header of the form Bearer``<token>``.
    </Accordion>
    <Accordion title="Path parameters">
    <p>**ID** ```string``` <span className="req">Required</span></p>
    Variable ID
    </Accordion>
  </div>
  <div className="col col--6">
    <Tabs>
  <TabItem value="HTTP" label="HTTP" default>
    ```javascript
        DELETE /variables/{id} HTTP/1.1
        Authorization: Bearer YOUR_SECRET_TOKEN
        Accept: */*
    ````
  </TabItem>
  <TabItem value="cURL" label="cURL">
    ```javascript
       curl -L \
        --request DELETE \
        --url '/variables/{id}' \
        --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
        --header 'Accept: */*'
    ```
  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javascript
     const response = await fetch('/variables/{id}', {
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
            "/variables/{id}",
            headers={"Authorization":"Bearer YOUR_SECRET_TOKEN","Accept":"*/*"},
        )

        data = response.json()
    ```
  </TabItem>

</Tabs>
  </div>
</div>
