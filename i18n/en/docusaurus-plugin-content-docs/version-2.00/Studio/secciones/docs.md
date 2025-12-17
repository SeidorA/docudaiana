---
title: 'Document Stores'
iconName: "file"
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Daiana Studio's Document Stores offer a versatile approach to data management, allowing you to load, split, prepare your dataset, and upsert it all in one location.

This centralized approach simplifies data handling and enables efficient management of various data formats, making it easier to organize and access your data within the Daiana Studio application.

## Setup

In this tutorial, we will set up a **Retrieval Augmented Generation (RAG)** system to retrieve information about the *LibertyGuard Deluxe Homeowners Policy*, a topic on which LLMs are not extensively trained.

Using **Daiana Studio's Document Stores**, we will prepare and upsert data about LibertyGuard and its suite of home insurance policies. This will allow our RAG system to accurately answer user queries about LibertyGuard's home insurance offerings.

## 1. Add a Document Store

*   Start by adding a Document Store and naming it. In our case, "LibertyGuard Deluxe Homeowners Policy".

![1](/img/studio/Documentos/a.avif)

## 2. Select a Document Loader

*   Enter the Document Store you just created and select the Document Loader you wish to use. In our case, since our dataset is in PDF format, we will use the PDF Loader.

![1](/img/studio/Documentos/b1.avif)
![1](/img/studio/Documentos/b2.avif)

## 3. Prepare Your Data

*   First, we start by uploading our PDF file.
*   Then, we add a **unique metadata key**. This is optional, but it's good practice as it allows us to target and filter this same dataset later if needed.

![1](/img/studio/Documentos/c.webp)

*   Finally, select the Text Splitter you want to use to split your data. In our particular case, we will use the Recursive Character Text Splitter.
::::info
In this guide, we have added a generous **Chunk Overlap** size to ensure that no relevant information is lost between chunks. However, the optimal overlap size depends on the complexity of your data. You may need to adjust this value based on your specific dataset and the nature of the information you wish to extract. More on this topic in this guide.
::::

![1](/img/studio/Documentos/d.avif)

## 4. Preview Your Data

*   Now we can preview how our data will be split using our current Text Splitter configuration `chunk_size=1500` and `chunk_overlap=750`.

![1](/img/studio/Documentos/e.avif)

*   It is important to experiment with different Text Splitters, Chunk sizes, and Overlap values to find the optimal configuration for your specific dataset. This preview allows you to refine the splitting process and ensure that the resulting chunks are suitable for your RAG system.

![1](/img/studio/Documentos/f.avif)

::::info
Notice that our custom metadata `company: "liberty"` has been inserted into each chunk. This metadata allows us to easily filter and retrieve information from this specific dataset later, even if we use the same vector store index for other datasets.
::::

## 5. Process Your Data

*   Once you are satisfied with the splitting process, it's time to process your data.

![1](/img/studio/Documentos/g.avif)

After processing your data, you maintain the ability to refine individual chunks by removing or adding content. This granular control offers several advantages:

*   **Improved Accuracy:** Identify and rectify inaccuracies or inconsistencies present in the original data, ensuring that the information used in your application is reliable.
*   **Enhanced Relevance:** Refine chunk content to emphasize key information and remove irrelevant sections, thus increasing the accuracy and effectiveness of your retrieval process.
*   **Query Optimization:** Tailor chunks to better align with anticipated user queries, making them more targeted and improving the overall user experience.

## 6. Configure the Upsert Process

*   With our data properly processed - loaded via a Document Loader and appropriately split - we can now proceed to configure the upsert process.

![1](/img/studio/Documentos/h.avif)

The upsert process comprises three fundamental steps:

*   **Embedding Selection:** We begin by choosing the appropriate embedding model to encode our dataset. This model will transform our data into a numerical vector representation.
*   **Data Store Selection:** Next, we determine the Vector Store where our dataset will reside.
*   **Record Manager Selection (Optional):** Finally, we have the option to implement a Record Manager. This component provides the functionalities to manage our dataset once it is stored within the Vector Store.

![1](/img/studio/Documentos/i.avif)

### 1. Select Embeddings

*   Click on the "Select Embeddings" card and choose your preferred embedding model. In our case, we will select OpenAI as the embedding provider and use the "text-embedding-ada-002" model with 1536 dimensions.

![1](/img/studio/Documentos/j.avif)

### 2. Select Vector Store

*   Click on the "Select Vector Store" card and choose your preferred Vector Store. In our case, as we need a production-ready option, we will select Upstash.

![1](/img/studio/Documentos/k.avif)

### 3. Select Record Manager

*   For advanced dataset management within the Vector Store, you can optionally select and configure a Record Manager. Detailed instructions on how to set up and use this feature can be found in the dedicated guide.

![1](/img/studio/Documentos/k2.avif)

## 7. Upsert Your Data to a Vector Store

*   To begin the upsert process and transfer your data to the Vector Store, click the "Upsert" button.

![1](/img/studio/Documentos/l.avif)

*   As illustrated in the image below, our data has been successfully inserted into the Upstash vector database. The data was divided into 85 chunks to optimize the upsertion process and ensure efficient storage and retrieval.

![1](/img/studio/Documentos/m.avif)

## 8. Test Your Dataset

*   To quickly test the functionality of your dataset without leaving the Document Store, simply use the "Retrieval Query" button. This initiates a test query, allowing you to verify the accuracy and effectiveness of your data retrieval process.

![1](/img/studio/Documentos/n.avif)

*   In our case, we see that when querying information about kitchen floor coverage in our insurance policy, we retrieve 4 relevant chunks from Upstash, our designated Vector Store. This retrieval is limited to 4 chunks according to the defined "top k" parameter, ensuring that we receive the most pertinent information without unnecessary redundancy.

![1](/img/studio/Documentos/o.avif)

## 9. Test Your RAG

*   Finally, our Retrieval-Augmented Generation (RAG) system is operational. It is remarkable how the LLM effectively interprets the query and successfully leverages relevant information from the split data to construct a comprehensive response.

You can use the vector store that was configured previously:

![1](/img/studio/Documentos/p.avif)

Or, use the Document Store (Vector):

![1](/img/studio/Documentos/r.avif)

## 10. API

API support is also available for creating, updating, and deleting document stores. See Document Store API for more details. In this section, we will highlight 2 of the most commonly used APIs: upsert and refresh.

### 1. Upsert

You can upsert a new file using an existing document loader and upsert configuration. For example, you have a PDF loader within the document store, and the goal is to use the existing configuration, but with a new file.

![1](/img/studio/Documentos/s.avif)

First, note the store ID and document ID:

![1](/img/studio/Documentos/t.avif)

Since the PDF File Loader has Upload File functionality, **form data** will be used to allow sending files via the API.

::::info
Ensure that the file type sent is compatible with the expected file type of the document loader. For example, if a PDF File Loader is being used, you should only send **.pdf** files.

To avoid having separate loaders for different file types, we recommend using File Loader.
::::

<Tabs>
  <TabItem value="Python API" label="Python API" default>

```python
import requests
import json

API_URL = "http://localhost:3000/api/v1/document-store/upsert/<storeId>"

# use form data to upload files
form_data = {
    "files": ('my-other-file.pdf', open('my-other-file.pdf', 'rb'))
}

body_data = {
    "docId": <docId>,
    # overwrite existing configuration
    # "loader": "",
    "splitter": json.dumps({"name":"recursiveCharacterTextSplitter","config":{"chunkSize":20000}})
    # "vectorStore": "",
    # "embedding": "",
    # "recordManager": "",
}

def query(form_data):
    response = requests.post(API_URL, files=form_data, data=body_data)
    print(response)
    return response.json()

output = query(form_data)
print(output)
```
</TabItem>
<TabItem value="Javascript API" label="Javascript API">

```javascript
// use FormData to upload files
let formData = new FormData();
formData.append("files", input.files[0]);
formData.append("docId", <docId>);
formData.append("splitter", JSON.stringify({"name":"recursiveCharacterTextSplitter","config":{"chunkSize":20000}}));
// overwrite existing configuration
// formData.append("loader", "");
// formData.append("embedding", "");
// formData.append("vectorStore", "");
// formData.append("recordManager", "");

async function query(formData) {
    const response = await fetch(
        "http://localhost:3000/api/v1/document-store/upsert/<storeId>",
        {
            method: "POST",
            body: formData
        }
    );
    const result = await response.json();
    return result;
}

query(formData).then((response) => {
    console.log(response);
});
```
</TabItem>
</Tabs>

For other [Document Loaders](https://docs.Daiana Studioai.com/integrations/langchain/document-loaders) nodes without Upload File functionality, the API body is in **JSON** format:

<Tabs>
  <TabItem value="Python API" label="Python API" default>

```python
import requests

API_URL = "http://localhost:3000/api/v1/document-store/upsert/<storeId>"

def query(payload):
    response = requests.post(API_URL, json=payload)
    return response.json()

output = query({
    "docId": <docId>,
    # overwrite existing configuration
    "loader": {
        "name": "plainText",
        "config": {
            "text": "This is a new text"
        }
    },
    "splitter": {
        "name": "recursiveCharacterTextSplitter",
        "config": {
            "chunkSize": 20000
        }
    },
    # embedding: {},
    # vectorStore: {},
    # recordManager: {}
})
print(output)
```

</TabItem>
<TabItem value="Javascript API" label="Javascript API">

```javascript
async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/document-store/upsert/<storeId>",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({
    "docId": <docId>,
    // overwrite existing configuration
    "loader": {
        "name": "plainText",
        "config": {
            "text": "This is a new text"
        }
    },
    "splitter": {
        "name": "recursiveCharacterTextSplitter",
        "config": {
            "chunkSize": 20000
        }
    },
    // embedding: {},
    // vectorStore: {},
    // recordManager: {}
}).then((response) => {
    console.log(response);
});
```
</TabItem>
</Tabs>

### 2. Refresh

Often times you might want to re-process every document loader within the document store to fetch the latest data, and upsert to the vector store, to keep everything in sync. This can be done via the Refresh API:

<Tabs>
<TabItem value="Python API" label="Python API" default>

```python
import requests

API_URL = "http://localhost:3000/api/v1/document-store/refresh/<storeId>"

def query():
    response = requests.post(API_URL)
    return response.json()

output = query()
print(output)
```

</TabItem>
  <TabItem value="Javascript API" label="Javascript API">

```javascript
async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/document-store/refresh/<storeId>",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    const result = await response.json();
    return result;
}

query().then((response) => {
    console.log(response);
});
```
</TabItem>
</Tabs>

You can also override existing configuration of specific document loader:

<Tabs>
<TabItem value="Python API" label="Python API" default>

```python
import requests

API_URL = "http://localhost:3000/api/v1/document-store/refresh/<storeId>"

def query(payload):
    response = requests.post(API_URL, json=payload)
    return response.json()

output = query(
{
    "items": [
        {
            "docId": <docId>,
            "splitter": {
                "name": "recursiveCharacterTextSplitter",
                "config": {
                    "chunkSize": 2000,
                    "chunkOverlap": 100
                }
            }
        }
    ]
}
)
print(output)
```

</TabItem>
<TabItem value="Javascript API" label="Javascript API">

```javascript
async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/document-store/refresh/<storeId>",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({
    "items": [
        {
            "docId": <docId>,
            "splitter": {
                "name": "recursiveCharacterTextSplitter",
                "config": {
                    "chunkSize": 2000,
                    "chunkOverlap": 100
                }
            }
        }
    ]
}).then((response) => {
    console.log(response);
});
```

</TabItem>
</Tabs>

## 11. Advantages of Document Stores:

Document stores offer several advantages for managing and preparing data for Retrieval Augmented Generation (RAG) systems:

*   **Organization and Management:** They provide a central location to store, manage, and prepare your data.
*   **Data Quality:** The chunking process helps structure data for accurate retrieval and analysis.
*   **Flexibility:** Document stores allow you to refine and adjust data as needed, improving the accuracy and relevance of your RAG system.