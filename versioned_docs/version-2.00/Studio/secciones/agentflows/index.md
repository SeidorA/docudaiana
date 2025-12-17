---
iconName: "usersMap"
title: 'Agentflows'
sidebar_position: 2
---
import {Banerimg} from '../../efectsstudio.tsx'
import {Cardcre} from '@site/docs/documentacion/cards/cards'


:::info
Esta documentación explorará tanto el enfoque de Sequential Agent como el de Multi-Agent, explicando sus características y cómo pueden ser utilizados para construir diferentes tipos de flujos de trabajo conversacionales.
:::

## Introducción

La sección Agentflows de Daiana Studio proporciona una plataforma para construir sistemas basados en agentes que pueden interactuar con herramientas y fuentes de datos externas.

Actualmente, Daiana Studio ofrece dos enfoques para diseñar estos sistemas: [**Multi-Agents**](Multi-Agents) y [**Sequential Agents**](sequential-agents). Estos enfoques proporcionan diferentes niveles de control y complejidad, permitiéndote elegir la mejor opción para tus necesidades.

<Banerimg img="studio/studiob.gif" />




##  Sistemas
Los **Multi-Agents**, construidos sobre la arquitectura de Sequential Agent, simplifican el proceso de construcción y gestión de equipos de agentes al preconfigurar elementos centrales y proporcionar una abstracción de más alto nivel.

Por otra parte los **Sequential Agents** proporcionan a los desarrolladores acceso directo a la estructura de flujo de trabajo subyacente, permitiendo un control granular sobre cada paso del flujo de conversación y ofreciendo máxima flexibilidad para construir aplicaciones conversacionales altamente personalizadas.
<div className="row">
    <div className="col">
        <Cardcre title="Multi-Agents" description="Simplifican el proceso de construcción y gestión de equipos de agentes" link="Multi-Agents" icon="usersMap" />
    </div>
    <div className="col">
        <Cardcre title="Sequential Agents" description="Proporcionan a los desarrolladores acceso directo a la estructura de flujo de trabajo subyacent" link="sequential-agents" icon="usersMap" />
    </div>
    
</div>
