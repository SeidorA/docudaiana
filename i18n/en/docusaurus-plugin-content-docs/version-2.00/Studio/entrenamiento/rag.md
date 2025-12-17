---
title: 'RAG'
iconName: "book"
sidebar_position: 4
---

## Using RAG in DAIANA STUDIO

To use Retrieval Augmented Generation (RAG) in DAIANA STUDIO, you need to use the following module nodes:
1. DocumentLoader: Loads documents.
   - Document Loader
### Folder with files

<p align="center">
![1](/img/studio/4/31.png)
</p>

Allows browsing folders and retrieving data from files.
List of loadable files

| Extension   | Description                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------|
| .json       | JSON file                                                                                       |
| .txt        | Text file (TXT)                                                                                 |
| .csv        | CSV file (comma-separated values)                                                               |
| .docx       | Microsoft Word file                                                                             |
| .pdf        | PDF file                                                                                        |
| .aspx       | Web page generated with the Microsoft ASP.NET framework                                         |
| .asp        | ASP (Active Server Pages) technology for generating dynamic web pages (also known as Classic ASP or Legacy ASP) |
| .cpp        | C++ source code file                                                                            |
| .c          | C source code file                                                                              |
| .cs         | C# (CSharp) file                                                                                |
| .css        | Cascading Style Sheet (CSS) file                                                                |
| .go         | Go source code file                                                                             |
| .h          | C/C++ header file                                                                               |
| .kt         | Kotlin source code file                                                                         |
| .java       | Java source code file                                                                           |
| .js         | JavaScript file                                                                                 |
| .less       | Less file (CSS preprocessor)                                                                    |
| .ts         | TypeScript file                                                                                 |
| .php        | PHP file                                                                                        |
| .proto      | Protocol Buffers definition file                                                                |
| .python     | Python code file                                                                                |
| .py         | Python code file                                                                                |
| .rst        | reStructuredText file                                                                           |
| .ruby       | Ruby code file                                                                                  |
| .rb         | Ruby code file                                                                                  |
| .rs         | Rust code file                                                                                  |
| .scala      | Scala code file                                                                                 |
| .sc         | Scala code file                                                                                 |
| .scss       | Sass style file                                                                                 |
| .sol        | Solidity code file                                                                              |
| .sql        | SQL code file                                                                                   |
| .swift      | Swift code file                                                                                 |
| .markdown   | Markdown file                                                                                   |
| .md         | Markdown file                                                                                   |
| .tex        | LaTeX file                                                                                      |
| .ltx        | LaTeX file                                                                                      |
| .html       | HTML file                                                                                       |
| .vb         | Visual Basic code file                                                                          |
| .xml        | XML file                                                                                        |


### Plain Text

<p align="center">
![1](/img/studio/4/32.png)
</p>

Allows retrieving data from a string.

Inputs:
- Text Separators
- Character Text Separator
- HtmlToMarkdown Text Separator
- Markdown Text Separator

Test
- The texts to be used

### Text File

<p align="center">
![1](/img/studio/4/1.png)
</p>

Allows retrieving data from text files. Supported file formats are:

| Extension   | Description                                                             |
|-------------|-------------------------------------------------------------------------|
| .txt        | Text file (TXT)                                                         |
| .html       | HTML file                                                               |
| .aspx       | Web page generated with the Microsoft ASP.NET framework                 |
| .asp        | ASP (Active Server Pages) file for dynamic web pages                    |
| .cpp        | C++ source code file                                                    |
| .c          | C source code file                                                      |
| .cs         | C# (CSharp) source code file                                            |
| .css        | Cascading Style Sheet (CSS) file                                        |
| .go         | Go source code file                                                     |
| .h          | C/C++ header file                                                       |
| .java       | Java source code file                                                   |
| .js         | JavaScript file                                                         |
| .less       | Less file (CSS preprocessor)                                            |
| .ts         | TypeScript file                                                         |
| .php        | PHP file                                                                |
| .proto      | Protocol Buffers definition file                                        |
| .python     | Python code file                                                        |
| .py         | Python code file                                                        |
| .rst        | reStructuredText file                                                   |
| .ruby       | Ruby code file                                                          |
| .rb         | Ruby code file                                                          |
| .rs         | Rust code file                                                          |
| .scala      | Scala code file                                                         |
| .sc         | Scala code file                                                         |
| .scss       | Sass style file                                                         |
| .sol        | Solidity code file                                                      |
| .sql        | SQL code file                                                           |
| .swift      | Swift code file                                                         |
| .markdown   | Markdown file                                                           |
| .md         | Markdown file                                                           |
| .tex        | LaTeX file                                                              |
| .ltx        | LaTeX file                                                              |
| .vb         | Visual Basic code file                                                  |
| .xml        | XML file                                                                |


### PDF Files

<p align="center">
![1](/img/studio/4/2.png)
</p>

It is possible to extract data from a PDF file.

### Cheerio Web Scraper

<p align="center">
![1](/img/studio/4/3.png)
</p>

Allows retrieving data from a web page.
1. **TextSplitter**: divides loaded documents into smaller text chunks.
   - Text Splitters
   - Character Text Splitter
   - HtmlToMarkdown Text Splitter
   - Markdown Text Splitter
2. Embedding: generates embedding vectors for text chunks.
   - Embeddings

### Ollama Embeddings
<p align="center">
![1](/img/studio/4/4.png)
</p>

An embedding is a floating-point vector (list). The relationship between two vectors is measured by the distance between them.

A smaller distance indicates greater similarity, while a larger distance indicates less similarity.

Through embeddings, numerical representations of text data can be created. These numerical representations are useful for searching similar documents.
Use Ollama's open-source model to generate embeddings for the specified text.
Inputs
- Base URL
- The URL of the LLM server to be used
- Model Name
- The name of the model to be used

#### How to confirm

Additional Parameters
- **GPU Count**
    - The number of layers to be sent to the GPU. On macOS, if Metal support is enabled, the default is 1; if disabled, it is 0.
- **Thread Count**
    - It is possible to set the number of threads to be used during calculations. By default, Ollama detects this value for optimal performance. It is recommended to set this value to the number of physical CPU cores in the system, not logical cores.
- **Use MMap**
    - Using MMap allows faster file operations compared to normal system calls.

- **VectorStore:**
  - stores and allows searching the generated embedding vectors.

### Chroma

<p align="center">
![1](/img/studio/4/6.png)
</p>

**Chroma** is used as a vector store, specializing in the storage and retrieval of high-dimensional numerical vectors. It is designed to efficiently manage and index these vectors, enabling fast **similarity searches**. Chroma allows for **similarity searches** during queries and supports metadata filtering.

### Redis
<p align="center">
![1](/img/studio/4/7.png)
</p>

A vector store or vector database refers to a type of database system specialized in storing and retrieving high-dimensional numerical vectors. Vector stores are designed to efficiently manage and index these vectors, enabling fast similarity searches.

Using Redis as a vector store allows running similarity searches during queries.

### In-Memory Vector Store
<p align="center">
![1](/img/studio/4/8.png)
</p>
An embedding is a floating-point vector (list). The relationship between two vectors is measured by the distance between them. A smaller distance indicates greater similarity, while a larger distance indicates less similarity.

Through embeddings, numerical representations of text data can be created. These numerical representations are useful for searching similar documents.

Use Ollama's open-source model to generate embeddings for the specified text.

**Inputs**
- **Base URL** The URL of the LLM server to be used
- **Model Name** The name of the model to be used

**Additional Parameters**

- **GPU Count**

    The number of layers to be sent to the GPU. On macOS, if Metal support is enabled, the default is 1; if disabled, it is 0.
- **Thread Count**

    It is possible to set the number of threads to be used during calculations. By default, Ollama detects this value for optimal performance. It is recommended to set this value to the number of physical CPU cores in the system, not logical cores.
- **Use MMap**

    Using MMap allows faster file operations compared to normal system calls.

1. Query: uses stored embedding vectors to search and retrieve relevant documents.
      - Vector Store Retriever function of QA Chain, etc.
      - Ensure that the prompt's token count (character length) does not exceed the maximum number of tokens.
      - Chat Model / Additional Parameters / Max Tokens: 2048 (check the quota of the model you are using).
<p align="center">
![1](/img/studio/4/9.png)
</p>


2. Conversational Retrieval QA Chain / Additional Parameters / Reformulation Request
<p align="center">
![1](/img/studio/4/10.png)
</p>

3. Conversational Retrieval QA Chain / Additional Parameters / Reformulation Request
<p align="center">
![1](/img/studio/4/11.png)
</p>
<p align="center">
![1](/img/studio/4/12.png)
</p>

In the chat box, relevant documents for queries are retrieved, and both the query and search results are used to query LLMs, with the results displayed in the chat box.

To perform this search, documents must be vectorized and stored in a vector store. Documents loaded by the document loader are converted to chunk format by the text splitter and then vectorized through the embedding process.

## Using Redis as a Vector Store

Using Redis as a vector store. In the image below, the index name is set to 1, and the Upsert Index option is activated for data logging. This allows updating data by first deleting previously logged data before logging new data. Top K is set to the default value of 4, which limits search results to a maximum of 4 items.

  <p align="center">
![1](/img/studio/4/13.png)
</p>
1. Click the "Upsert" button in the "Vector Store Upsert" dialog accessed from the "Upsert Vector Database" button.
<p align="center">
![1](/img/studio/4/14.png)
</p>

If successful, the count of registered records and the status will be displayed.
<p align="center">
![1](/img/studio/4/15.png)
</p>

2. Check the records in the Redis index.
<p align="center">
![1](/img/studio/4/16.png)
</p>
<p align="center">
![1](/img/studio/4/17.png)
</p>

3. When "Return Source Documents" is enabled in Chain, the documents used in the LLM query will be displayed below the response as file URL buttons.
<p align="center">
![1](/img/studio/4/18.png)
</p>
<p align="center">
![1](/img/studio/4/19.png)
</p>

## Using Metadata Filtering with Chroma
To use metadata filtering, a compatible database is required. In this case, we use Chroma for this purpose.
<p align="center">
![1](/img/studio/4/20.png)
</p>

- Configure Chroma's metadata filter from the Additional Parameters button in Chroma. Make sure to pre-check the Metadata box in the document loader within Chatflow.
<p align="center">
![1](/img/studio/4/21.png)
</p>

- Here, LLM queries are performed using documents obtained by filtering with "loves".
<p align="center">
![1](/img/studio/4/22.png)
</p>

## Using Record Manager with SQLite
Configure the database file path with the full file name as the complete path and set Cleanup to Complete in Additional Parameters to achieve the same effect as Upsert.

<p align="center">
![1](/img/studio/4/23.png)
</p>

Example: ``/var/tmp/RecordManager.sqlite3``

## Using PDF as a Document
Using Document Loader / PDF File allows extracting text from PDF files. Unfortunately, it is not possible to extract image files from PDF files.

 <p align="center">
![1](/img/studio/4/25.png)
</p>

When converting a web page to a PDF file, use services or tools such as:
- [Web To PDF](https://webtopdf.com/)
- [I love PDF](https://www.ilovepdf.com/html-to-pdf)

## Using Web Pages as Documents
Using Document Loader / Cheerio Web Scraper allows you to load web pages. You can also extract links using the Get Relative Links method.

 <p align="center">
![1](/img/studio/4/26.png)
</p>

## Managing RAG with the Document Store
Using a document store allows managing documents based on specific purposes.
 <p align="center">
![1](/img/studio/4/40.png)
</p>

1. Create a new document store
    Create a new document store by clicking the "Add New" button. Enter the name and description, then click the "Add" button.

 <p align="center">
![1](/img/studio/4/41.png)
</p>

2. After clicking the "Add" button, you will be redirected to the document stores main page.

<p align="center">
![1](/img/studio/4/42.png)
</p>

3. Edit an existing document store
    Clicking on the document store will display the edit screen.

<p align="center">
![1](/img/studio/4/43.png)
</p>

<p align="center">
![1](/img/studio/4/44.png)
</p>

4. Click the "Add Document Loader" button to add a document loader. Here, select "PDF File" as an example.
<p align="center">
![1](/img/studio/4/45.png)
</p>
<p align="center">
![1](/img/studio/4/46.png)
</p>
- When uploading a file using "Upload File", the specified file name will be displayed.

<p align="center">
![1](/img/studio/4/47.png)
</p>

5. Select "One document per page" under Usage and add additional metadata.
<p align="center">
![1](/img/studio/4/48.png)
</p>

6. Select the splitter. Here I have used the character text splitter.
<p align="center">
![1](/img/studio/4/49.png)
</p>

7. Click the "Preview Chunks" button to review the expected results.
<p align="center">
![1](/img/studio/4/50.png)
</p>

8. After pressing the "Process" button to confirm, you will return to the top screen of the Document Store.
<p align="center">
![1](/img/studio/4/51.png)
</p>

9. Use it as follows:
<p align="center">
![1](/img/studio/4/52.png)
</p>