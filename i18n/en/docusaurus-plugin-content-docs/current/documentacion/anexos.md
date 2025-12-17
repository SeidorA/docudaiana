---
sidebar_position: 10
title: "Annexes"
---

## Annex A: Glossary of Technical Terms

This annex provides definitions of technical terms and acronyms used in Daiana's technical documentation, facilitating a better understanding of the platform and its capabilities.

-   **AES-256:** Advanced Encryption Standard with a 256-bit key. It is one of the most secure encryption algorithms and is used to encrypt data at rest within the Daiana platform.
-   **API:** Application Programming Interface. A set of routines and protocols that allows the integration of the Daiana platform with other software systems, facilitating data automation and synchronization.
-   **CRM:** Customer Relationship Management. System that allows companies to manage and analyze customer interactions, helping to improve business relationships and customer retention.
-   **ERP:** Enterprise Resource Planning. Software that manages and automates many business practices associated with the operations or production and distribution of a company.
-   **GDPR:** General Data Protection Regulation. Data protection and privacy regulation in the European Union that imposes guidelines for the collection and processing of personal information.
-   **ISO/IEC 27001:** International standard that describes how to manage information security in a company. Daiana is certified under this standard, ensuring the protection of corporate and customer data.
-   **PCI DSS:** Payment Card Industry Data Security Standard. Data security standard that organizations must follow to protect and secure credit card information.
-   **RBAC:** Role-Based Access Control. Method of managing access to the network and systems based on the individual roles of users within an organization.
-   **TLS:** Transport Layer Security. Protocol designed to provide security in communications over a network, such as the Internet. TLS 1.3 is the most recent and secure version of the protocol.
-   **Webhook:** Method to alter the behavior of a web page or web application with customizable callbacks. Webhooks allow other applications to receive real-time information, facilitating the integration of services like Daiana's.
-   **WebSocket:** Communication protocol that provides full-duplex communication channels over a single TCP socket. Used by Daiana to maintain a constant and real-time connection for the messaging service.

This terminology is essential to understand the technical operations and features of Daiana, allowing users and developers to interact more effectively with the platform.

## Annex B: Training

This annex provides definitions of the training process for virtual assistants in Daiana to ensure they improve in quality and effectiveness when answering user questions.

### Part 1: Training for Document-Based Virtual Assistants

The training process for document-based virtual assistants focuses on the assistant's ability to understand and provide accurate answers based on the information contained in documents uploaded by users. This type of training involves the following stages:

**1) Document Upload:**

-   **Document Selection:** The user selects the relevant documents containing the information the assistant needs to handle. These can be files in formats such as PDF, DOC, TXT, CSV, among others.
-   **Document Upload:** Documents are uploaded to the Daiana platform through the "Sources" section. Users can drag and drop files or select them from their device.

**2) Document Processing:**

-   **Text Extraction:** Once uploaded, documents are processed to extract meaningful text. This text is analyzed and segmented into manageable information units.
-   **Content Analysis:** Textual content is analyzed using natural language processing (NLP) techniques to identify entities, key concepts, and important relationships within the text.

**3) Model Training:**

-   **Content Indexing:** Extracted and analyzed text is indexed to facilitate fast and accurate access during queries.
-   **Response Creation:** Automatic responses are generated based on indexed content. The assistant is trained to understand questions in natural language and map them to the most meaningful answers within the documents.

**4) Evaluation and Adjustment:**

-   **Response Rating:** Users can interact with the assistant and rate the accuracy and usefulness of the provided answers. These ratings are used to adjust and improve the model.
-   **Data Update:** Documents and information can be updated regularly to reflect changes or add new data. The assistant is periodically retrained to incorporate these updates.

### Part 2: Training for Database-Based Virtual Assistants

Training for virtual assistants that use databases focuses on the assistant's ability to interact directly with structured databases and provide answers based on SQL queries. This process includes the following steps:

**1) Database Connection Configuration:**

-   **Connection Details:** The user provides the database connection details, including the database type (PostgreSQL, MySQL, SQL Server, etc.), host, schema, user, port, name, and password.
-   **Connection Verification:** The platform verifies the connection to the database to ensure the assistant can access the necessary data.

**2) Schema and Table Definition:**

-   **Schema Mapping:** The database schema is mapped so the assistant can understand the table structure and relationships between them.
-   **Relevant Data Identification:** Relevant tables and columns that the assistant will use to answer user queries are identified.

**3) Model Training:**

-   **Response Rating:** Similar to the document-based process, users can rate the accuracy and relevance of the answers provided by the assistant. These ratings are used to refine the model.
-   **Performance Monitoring:** The assistant's performance is monitored in terms of response time and accuracy. Any identified issues are addressed, and adjustments are made to improve efficiency and accuracy.

Both training methods, based on documents and databases, focus on using user ratings to continuously improve the accuracy and usefulness of the virtual assistant's responses, ensuring it provides the best possible support to end users.