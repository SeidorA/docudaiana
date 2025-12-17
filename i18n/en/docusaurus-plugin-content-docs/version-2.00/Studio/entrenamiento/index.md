---
title: 'Daiana Studio Training'
iconName: "book"
sidebar_position: 1
---

## Introduction
In recent years, the fields of artificial intelligence (AI) and machine learning have experienced significant advancements. In particular, GPT (Generative Pre-trained Transformer), developed by OpenAI in 2018, has revolutionized the field of natural language processing (NLP). With the advent of **GPT-3**, the immense power of large language models was widely recognized, and **GPT-4** further enhanced its capabilities.

In this context, the development of applications based on large language models (LLMs) is progressing at a rapid pace. Companies and research institutions are rushing to adopt these technologies to extract valuable insights from vast amounts of text data and create new value. However, there is also a growing recognition of the lack of tools and frameworks to effectively utilize LLMs.

It is in this environment that **"DAIANA STUDIO"** was developed. DAIANA STUDIO is a tool designed to facilitate the simple and efficient development of applications that use LLMs. The reasons behind the development of DAIANA STUDIO include:

1.	**Simplifying complex processes:** Developing applications using LLMs requires advanced knowledge and complex procedures. DAIANA STUDIO simplifies this process, making it intuitive and visual, allowing developers to quickly prototype and move to production.
2.	**Integrated workflow:** A framework was needed that could integrally manage the different phases of LLM application development, including data preprocessing, model training, evaluation, and deployment. DAIANA STUDIO achieves this by providing a coherent workflow.
3.	**Scalability and flexibility:** DAIANA STUDIO allows integration with various data sources, storage systems, and APIs, offering developers the flexibility to customize it to their needs.

By using **DAIANA STUDIO**, developers and data scientists can enjoy several advantages:

- Increased efficiency: The intuitive user interface and comprehensive toolset significantly reduce development time, allowing more time to be dedicated to developing innovative applications and improving models.
- Guaranteed reproducibility: **DAIANA STUDIO**'s ability to record and manage each step of the workflow facilitates the reproducibility of experimental results, improving project reliability and quality.
- Scalability: Designed to handle large datasets and models, **DAIANA STUDIO** addresses scalability challenges as projects grow.
- Community and support: **DAIANA STUDIO** has an active community and extensive documentation, providing developers with the environment needed to quickly find the information they need.

This book offers concrete steps and best practices for creating LLM applications using DAIANA STUDIO. Through this guide, we hope that readers can leverage the latest AI technologies to develop innovative applications.

## Objectives of this guide
With this manual, you will systematically learn the knowledge and skills necessary to create applications in a practical way. Specifically, you will learn the following:

1. **Basic operations** and applications of DAIANA STUDIO
    - Detailed explanations from the installation of DAIANA STUDIO to basic operations, which will help you develop your first LLM application.
2. **Understanding DAIANA STUDIO nodes**
    - In-depth knowledge of key DAIANA STUDIO nodes, such as chains, language models, prompts, output parsers, and memory, and how to use them effectively.
3. **Creating RAG (Retrieval Augmented Generation) applications**
   - Master the use of data management tools such as Document loader, Redis, Chroma, SQLite, and learn how to create RAG applications using documents like PDFs, web pages, and Notion.
4. **Data management**
    - Understand data management in DAIANA STUDIO and learn how to manage chat flow ID, chat ID, and chat history.
5. **Using the DAIANA STUDIO API**
    - Learn the basics of the DAIANA STUDIO API, from fundamental usage to practical examples, expanding the scope of application development.

Through this book, by learning to create LLM applications using **DAIANA STUDIO** and LangChain, you will gain practical skills useful in the fields of data science, machine learning, and software engineering. Additionally, you will acquire a deep understanding of best practices for creating reproducible workflows and efficient data processing and management methods.

## Target Audience

This book is a practical guide for professionals related to data science and machine learning. It clearly describes the specific benefits that each reader can obtain by creating RAG applications using **DAIANA STUDIO** and aims to attract readers with relevant content, as indicated below:

1. **Data Scientists**
    - **Advantages:** Learn how to create efficient and reproducible data processing pipelines, and develop cutting-edge RAG applications with **DAIANA STUDIO**.
    - **Target Audience:** Professionals dedicated to data collection and analysis, and the development and evaluation of machine learning models.
    - **Required Skills:** Programming experience with Python or R, knowledge of data processing and analysis, and basic knowledge of machine learning algorithms.
    - **What you will gain:** Methods for efficient data processing and model creation using DAIANA STUDIO, implementation of RAG applications.
2. **Machine Learning Engineers**
    - **Advantages:** Learn how to implement RAG applications and master the latest model deployment techniques to deliver real-world data-driven solutions.
    - **Target Audience:** Engineers responsible for the implementation, deployment, and operation of machine learning models.
    - **Expected Skills:** Experience with machine learning frameworks (TensorFlow, PyTorch), experience in model deployment and monitoring.
    - **What you will gain:** Practical methods for creating RAG applications, model deployment techniques.
3. **Data Engineers**
    - **Advantages:** Acquire the skills needed to quickly create and manage reliable data pipelines using DAIANA STUDIO, and improve the efficiency of data acquisition and preprocessing.
    - **Target Audience:** Engineers involved in the design and implementation of data pipelines and the management of ETL processes.
    - **Required Skills:** SQL and database management, experience in designing and automating data flows.
    - **What you will gain:** Methods for building efficient data pipelines using DAIANA STUDIO, techniques for data acquisition and preprocessing.
4. **Software Engineers**
    - **Advantages:** Learn practical skills to integrate the backend and frontend of RAG applications, effectively implementing data processing and model interaction.
    - **Target Audience:** Engineers responsible for application development and maintenance.
    - **Required Skills:** Knowledge of web development, experience in API design and implementation, basic knowledge of machine learning.
    - **What you will gain:** Methods for integrating the backend and frontend of RAG applications, implementation of data processing and model interaction using DAIANA STUDIO.
5. **Researchers/Academics**
      - **Advantages:** Use DAIANA STUDIO to create highly reproducible data processing pipelines and efficiently conduct advanced research using RAG models.
      - **Target Audience:** Academic researchers conducting data-driven research.
      - **Expected Skills:** Statistics and data analysis, data processing to obtain research results.
      - **What you will gain:** Methods for building reproducible data processes, approaches for conducting research using RAG models.
6. **Business Analysts**
    - **Benefits:** Improve your ability to gain advanced business insights by creating efficient data analysis workflows using DAIANA STUDIO and RAG applications.
    - **Target Audience:** Analysts who provide business insights based on data.
    - **Required Skills:** Data analysis, data visualization, extraction of business insights.
    - **What you will gain:** Methods for building data analysis workflows using DAIANA STUDIO, improvement of business insights using RAG applications.
7. **IT Managers/Project Managers**
    - **Advantages:** Optimize data science projects using DAIANA STUDIO and gain a deep understanding of creating and managing RAG applications.
    - **Target Audience:** Managers overseeing data science or machine learning projects.
    - **Expected Skills:** Project management, basic knowledge of data science.
    - **What you will gain:** Methods for optimizing projects using DAIANA STUDIO, knowledge of creating and managing RAG applications.

## Prerequisites
**Prior Knowledge and Conditions**
To effectively understand and use this book, it is desirable for readers to meet the following knowledge and condition prerequisites:

1. **Programming Fundamentals**
   - **Required Knowledge:** Programming experience, mainly in Python or NodeJS. Understanding of basic data types, control structures (if statements, loops), functions, and object-oriented programming.
   - **Reason:** Since DAIANA STUDIO and LangChain code examples and configuration files are primarily written in NodeJS, basic knowledge of Python or NodeJS is necessary.
2. **Basic Data Science Knowledge**
   - **Required Knowledge:** Understanding of data preprocessing (cleaning, transformation), data analysis, and basic statistics.
   - **Reason:** Developing LLM applications involves processing and analyzing large amounts of text data, so basic data science knowledge is essential.
3. **Machine Learning Fundamentals**
   - **Required Knowledge:** Familiarity with machine learning concepts (training, testing, validation) and main algorithms (linear regression, decision trees, clustering).
   - **Reason:** When using DAIANA STUDIO to leverage LLMs, it is crucial to understand the process of training and evaluating machine learning models.
4. **Natural Language Processing (NLP) Fundamentals**
   - **Required Knowledge:** Understanding of NLP concepts (tokenization, stemming, TF-IDF) and experience with main NLP tools and libraries (NLTK, spaCy, transformers).
   - **Reason:** The book focuses on developing applications using LLMs, so basic NLP knowledge is beneficial.
5. **Basic Web Development Knowledge**
   - **Required Knowledge:** Proficiency in fundamental web development technologies (HTML, CSS, JavaScript) and understanding and experience with APIs.
   - **Reason:** This knowledge is necessary to develop the interface of applications created with DAIANA STUDIO and to manage data exchange through APIs.
6. **Database Fundamentals**
   - **Required Knowledge:** Understanding of SQL fundamentals, database design and management, and experience with major database systems (MySQL, PostgreSQL, SQLite).
   - **Reason:** DAIANA STUDIO often involves the use of databases to store and manage data, which requires knowledge of fundamental database operations.

By meeting these knowledge and condition prerequisites, readers will be able to easily understand the content of this book and effectively use DAIANA STUDIO to create LLM applications.