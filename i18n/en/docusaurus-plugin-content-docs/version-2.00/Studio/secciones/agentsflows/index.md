---
iconName: "usersMap"
title: 'Agentflows'
sidebar_position: 2
---
import {Banerimg} from '../../efectsstudio.tsx'
import {Cardcre} from '@site/docs/documentacion/cards/cards'


:::info
This documentation will explore both the Sequential Agent and Multi-Agent approaches, explaining their characteristics and how they can be used to build different types of conversational workflows.
:::

## Introduction

The Agentflows section of Daiana Studio provides a platform for building agent-based systems that can interact with external tools and data sources.

Currently, Daiana Studio offers two approaches to design these systems: [**Multi-Agents**](Multi-Agents) and [**Sequential Agents**](sequential-agents). These approaches provide different levels of control and complexity, allowing you to choose the best option for your needs.

<Banerimg img="studio/studiob.gif" />




## Systems
**Multi-Agents**, built on the Sequential Agent architecture, simplify the process of building and managing agent teams by pre-configuring core elements and providing a higher-level abstraction.

On the other hand, **Sequential Agents** provide developers direct access to the underlying workflow structure, allowing granular control over each step of the conversational flow and offering maximum flexibility to build highly customized conversational applications.
<div className="row">
    <div className="col">
        <Cardcre title="Multi-Agents" description="Simplify the process of building and managing agent teams" link="Multi-Agents" icon="usersMap" />
    </div>
    <div className="col">
        <Cardcre title="Sequential Agents" description="Provide developers direct access to the underlying workflow structure" link="sequential-agents" icon="usersMap" />
    </div>
    
</div>
