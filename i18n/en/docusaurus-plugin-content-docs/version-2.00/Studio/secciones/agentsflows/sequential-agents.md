---
iconName: "usersMap"
title: 'Sequential Agents'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sequential Agents

This guide offers a comprehensive overview of the Sequential Agent AI architecture within Daiana Studio, exploring its core components and workflow design principles.

::::warning
This documentation is intended to help Daiana Studio users understand and build conversational workflows using the Sequential Agent architecture. It is not intended to be an exhaustive technical reference of the LangGraph framework and should not be interpreted as defining industry standards or fundamental LangGraph concepts.
::::

## Concept

Built on **LangGraph**, Daiana Studio's Sequential Agents architecture facilitates the **development of conversational agentic systems by structuring the workflow as a directed cyclic graph (DCG)**, allowing controlled loops and iterative processes.

This graph, composed of interconnected nodes, defines the sequential flow of information and actions, allowing agents to process inputs, execute tasks, and generate responses in a structured manner.

```mermaid
flowchart TD
    n1["Start"] --> n2["Agent 1"]
    n2 --> n3["Agent 2"]
    n2 <--> n4["Agent Tool"]
    n3 --> n5["Conditional"]
    n5 --> n6["Loop"]
    n6 -.-> n2
    n5 --> n7["END"]
    n1:::diam
    n7:::diam

    classDef diam shape:diam;
