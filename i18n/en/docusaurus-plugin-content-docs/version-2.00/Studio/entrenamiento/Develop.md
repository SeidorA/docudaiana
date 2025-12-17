---
title: 'LLM Applications'
iconName: "book"
sidebar_position: 3
---

## Getting Started
Are you interested in developing innovative applications using Large Language Models (LLMs)? DAIANA STUDIO is the ideal tool for this. In this chapter, we will learn how to bring your ideas to life easily and effectively, and create applications that interact with users.

With **DAIANA STUDIO**, you can create a wide range of applications, such as chatbots, question-answering systems, and information retrieval agents, all based on natural language processing. Its flexibility and customization options allow you to quickly develop solutions tailored to your needs.
Let's take the first step to make your ideas a reality. With DAIANA STUDIO by your side, let's explore new possibilities together!

## Getting Started: Your First LLM Application
Here we will create a simple LLM application using DAIANA STUDIO and explain how it works.

### Create a New Chatflow
1. Click the **Add New** button to create a new chatflow.
![1](/img/studio/21.png)
2. Click **Save Chatflow** and set a name, for example, **Hello DAIANA STUDIO**.
<p align="center">
![1](/img/studio/22.png)
</p>

3. Type **Hello, DAIANA Studio** in the dialog box and click the Save button.
<p align="center">
![1](/img/studio/23.png)
</p>

4. A Chatflow named **Hello, DAIANA Studio** has been saved.
<p align="center">
![1](/img/studio/24.png)
</p>

### Create a Chain

1. Drag and drop the Chains / Conversational Chain from the **Add Nodes** button to the chatflow.
<p align="center">
![1](/img/studio/25.jpg)
</p>

2. A **Conversational Chain** node will be created in the chatflow after dropping it.
<p align="center">
![1](/img/studio/26.png)
</p>

3. Drag the **Conversational Chain** node in the chatflow and move it to the right for the next operation.
<p align="center">
![1](/img/studio/27.png)
</p>

### Create a Chat Model

1. From the **Add Nodes** button, scroll through the list of nodes under Chat Models until you find the "ChatOllama" node.
<p align="center">
![1](/img/studio/28.png)
</p>

2. Drag the "Chat Models / ChatOllama" node and drop it into the Chatflow.
<p align="center">
![1](/img/studio/29.jpg)
</p>

3. A "ChatOllama" node will be created in the chatflow after dropping it.
<p align="center">
![1](/img/studio/210.png)
</p>

4. Set "llama3:latest" as the model name for the "ChatOllama" node in the chatflow.
<p align="center">
![1](/img/studio/211.png)
</p>

5. Click **Save Chatflow** to save the creations made so far.
<p align="center">
![1](/img/studio/212.jpg)
</p>

### Connect the "ChatOllama" node to the **Conversational Chain** node.
1. Drag the output of the "ChatOllama" node with the mouse cursor and set it as input for the **Chat Model** in the **Conversational Chain** node.

<p align="center">
![1](/img/studio/213.jpg)
</p>

<p align="center">
![1](/img/studio/214.png)
</p>

2. Click **Save Chatflow** to save the creations made so far.

<p align="center">
![1](/img/studio/215.jpg)
</p>

### Create Memory
1. From the **Add Nodes** button, drag the **Memory / Buffer Memory** node and drop it into the chatflow.
<p align="center">
![1](/img/studio/216.jpg)
</p>

2. To facilitate editing, adjust the arrangement of the nodes by selecting them with the mouse cursor and dragging them to move them.
<p align="center">
![1](/img/studio/217.png)
</p>

### Buffer Memory
Connect the **Buffer Memory node** to the **Conversational Chain node**.

1. Drag the output of the **Buffer Memory** node with the mouse cursor and set it as input for the **Memory** in the **Conversational Chain** node.
<p align="center">
![1](/img/studio/218.png)
</p>

2. Click **Save Chatflow** to save the creations made so far.
<p align="center">
![1](/img/studio/219.jpg)
</p>

### Using LLM Applications

1. Click the Chat button to display the chat dialog box for the LLM application **Hello DAIANA STUDIO**.
<p align="center">
![1](/img/studio/220.jpg)
</p>

2. Type **Why is the sky blue?** in the chat dialog box and check that you receive a response similar to the image. If so, it means it worked.

<p align="center">
![1](/img/studio/221.png)
</p>

## Basic DAIANA STUDIO Operations
Here are some features of **DAIANA STUDIO** used in this article that were not covered in [Introduction to your first LLM application.](#create-a-new-chatflow) They are explained here.
### Navigating from a Chatflow to the Main Screen
1. You can navigate from the chatflow named **Hello, DAIANA STUDIO** to the main screen using the Back button on the left. It is recommended to click **Save Chatflow** before exiting to save your creations.
<p align="center">
![1](/img/studio/222.png)
</p>

2. You have returned to the top screen. Click to use this alternative.
<p align="center">
![1](/img/studio/223.png)
</p>

### Navigating from the Top Screen to a Chatflow
Click with the mouse cursor on the name of the chatflow you want to edit in the list of chatflows on the top screen.
- Navigate to the chatflow.
<p align="center">
![1](/img/studio/224.png)
</p>

### Editing the Chatflow Name
- To edit the name of the chatflow **Hello, DAIANA STUDIO**, click the **Edit Name** button on the right.
<p align="center">
![1](/img/studio/225.png)
</p>

After changing the chatflow name, you can save it by clicking the **Save Name** button on the right, or cancel the changes by clicking the **Cancel** button. After making changes, it is recommended to click **Save Chatflow** to save what has been created so far.
<p align="center">
![1](/img/studio/226.png)
</p>

### Export a Chatflow
- In the Options menu of a chatflow in the Chatflows list, select **Export** to start the export process.
<p align="center">
![1](/img/studio/227.png)
</p>

- A file will be saved in your browser's downloads folder.
<p align="center">
![1](/img/studio/228.png)
</p>

### Import a Chatflow
1. Click the **Add New** button to create a new chatflow.
<p align="center">
![1](/img/studio/229.png)
</p>

2. Select **Load Chatflow** from the Settings button.
<p align="center">
![1](/img/studio/230.png)
</p>

3. Select a Chatflow file and click the **Open** button.
<p align="center">
![1](/img/studio/231.png)
</p>

4. Click **Save Chatflow** to rename the chatflow.
<p align="center">
![1](/img/studio/232.png)
</p>

5. For more information, see [Create a New Chatflow.](#create-a-new-chatflow)
<p align="center">
![1](/img/studio/233.png)
</p>

### Duplicate a Chatflow
- In the Options menu of the original chatflow in the Chatflows list, select **Duplicate**.
<p align="center">
![1](/img/studio/234.png)
</p>

- You have imported the original chatflow into a new chatflow. Click **Save Chatflow** to rename the chatflow as needed.
<p align="center">
![1](/img/studio/235.png)
</p>

- For more information, see [Creating a New Chatflow](#create-a-new-chatflow).
<p align="center">
![1](/img/studio/236.png)
</p>

### Marketplace
- Templates for each use case are available in the Marketplace.
<p align="center">
![1](/img/studio/237.png)
</p>

Select a template, and when the chatflow opens, click the **Use Template** button to access a state similar to that described in [Duplicate a Chatflow](#duplicate-a-chatflow).
<p align="center">
![1](/img/studio/238.png)
![1](/img/studio/239.png)
</p>

### Credentials
- When using cloud services or similar, connection information such as credentials is stored in Credentials. You can create a new credential or select an existing one for nodes that require connection information.
<p align="center">
![1](/img/studio/240.png)
</p>

- Usage example
<p align="center">
![1](/img/studio/241.png)
</p>