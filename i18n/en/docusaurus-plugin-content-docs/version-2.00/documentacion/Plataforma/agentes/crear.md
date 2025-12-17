---
title: Create Agent
iconName: "chats"
sidebar_position: 3
---
import {Banerimg} from '../../../Studio/efectsstudio.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Banerimg img="agentes/creara.gif" />

The **Create Agent** page guides the user through an assisted process (wizard) to configure a new conversational agent in Daiana step by step. This guided approach facilitates creation without requiring advanced technical knowledge.

---



## 1. Team Selection

![a](/img/agentes/crear/p1.png)

The first step is to assign the agent to one or more **teams**. This determines which user groups will be able to access and use the assistant once created.

---

## 2. General Settings

![a](/img/agentes/crear/p2.png)

In this stage, the key aspects of the agent's behavior are defined:

1.  **Assistant Name**
2.  **Welcome Message**: the first thing the user sees when starting a chat with the agent.
3.  **Incorrect Response**: the response shown when the agent cannot understand or answer a query.
4.  **Agent Description**: text that summarizes its purpose, area of action, or the type of queries it handles.
5.  **Custom Prompt**: instructions that define the agent's tone, style, and behavior for any interaction.

---

## 3. Select the Source.
You must select the source your agent will work with.

![a](/img/agentes/crear/fuentes.png)

The **knowledge sources** from which the agent can extract information to respond are selected. These may include:


<Tabs>
  <TabItem value="Daiana Studio" label="Daiana Studio" default>

![Select the Daiana Studio flow](/img/agentes/crear/studio.png)
1. Select the flow you want to connect to your agent.
2. Confirm the selection.

  </TabItem>
  <TabItem value="Local Documents" label="Local Documents">

1. LLM Model Selection
![a](/img/agentes/crear/p4.png)
In this step, the **language model** (LLM) that the agent will use to generate its responses is defined. For example:

- GPT
- Gemini
> The choice of model can affect response style, performance, and cost.

2. Select the documents
![a](/img/agentes/crear/documentos.png)


3. Train the agent with the selected documents.
![a](/img/agentes/crear/entrenar.png)

4. Confirm the selection.

  </TabItem>
  <TabItem value="Databases" label="Databases">

![select the database](/img/agentes/crear/datos.png)
1. Select the database you want to connect to your agent.

![Complete the data](/img/agentes/crear/forma.png)
2. Complete the requested data.

  </TabItem>

  <TabItem value="SAP" label="SAP">

![SAP](/img/agentes/crear/sap.png)
1. Select the SAP system you want to connect to your agent.
2. Complete the requested data.
    - Host
    - Port
    - Schema
    - Username
    - Password
3. Confirm the selection.

  </TabItem>

</Tabs>


---


## 4. Final Summary

![a](/img/agentes/crear/p5.png)
Before confirming creation, a **complete summary** of the configured agent is displayed:

- Assigned teams
- Name and description
- Configured messages
- Prompt
- Knowledge sources
- Assigned LLM model

From this view, the user can **modify** any section before finalizing.

::::info
Once validated, the agent is created and ready to be used or adjusted from the administration view.
:::::
