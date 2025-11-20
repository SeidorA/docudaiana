---
title: Crear agente
iconName: "chats"
sidebar_position: 3
---
import {Banerimg} from '../../../Studio/efectsstudio.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Banerimg img="agentes/creara.gif" />

La página **Crear Agente** guía al usuario a través de un proceso asistido (wizard) para configurar paso a paso un nuevo agente conversacional en Daiana. Este enfoque guiado facilita la creación sin requerir conocimientos técnicos avanzados.

---



## 1. Selección de equipo

![a](/img/agentes/crear/p1.png)

El primer paso consiste en asignar el agente a uno o más **equipos**. Esto determina qué grupos de usuarios podrán acceder y utilizar el asistente una vez creado.

---

## 2. Configuración general

![a](/img/agentes/crear/p2.png)

En esta etapa se definen los aspectos clave del comportamiento del agente:

1. **Nombre del asistente**
1. **Mensaje de bienvenida**: lo primero que el usuario ve al iniciar el chat con el agente.
2. **Respuesta incorrecta**: respuesta que se muestra cuando el agente no puede entender o responder una consulta.
3. **Descripción del agente**: texto que resume su propósito, área de acción o tipo de consultas que atiende.
4. **Prompt personalizado**: instrucciones que definen el tono, estilo y comportamiento del agente ante cualquier interacción.

---

## 3. Selecciona la Fuente.
Deberás seleccionar la fuente con la que trabajará tu agente.

![a](/img/agentes/crear/fuentes.png)

Se seleccionan las **fuentes de conocimiento** desde las que el agente podrá extraer información para responder. Estas pueden incluir:


<Tabs>
  <TabItem value="Daiana Studio" label="Daiana Studio" default>

![Seleccione el flujo de Daiana Studio](/img/agentes/crear/studio.png)
1. Seleccione el flujo que desea conectar a su agente.
2. Confirme la selección.

  </TabItem>
  <TabItem value="Documentos Locales" label="Documentos Locales">

1. Selección del modelo LLM
![a](/img/agentes/crear/p4.png)
En este paso se define qué **modelo de lenguaje** (LLM) utilizará el agente para generar sus respuestas. Por ejemplo:

- GPT
- Gemini
> La elección del modelo puede afectar el estilo de respuesta, el rendimiento y el costo.

2. Selecciona los documentos
![a](/img/agentes/crear/documentos.png)


3. Entrene el agente con los documentos seleccionados.
![a](/img/agentes/crear/entrenar.png)

4. Confirme la selección.

  </TabItem>
  <TabItem value="Bases de datos" label="Bases de datos">

![seleccione la base de datos](/img/agentes/crear/datos.png)
1. Seleccione la base de datos que desea conectar a su agente.

![Complete lso datos](/img/agentes/crear/forma.png)
2. Complete los datos solicitados.

  </TabItem>

  <TabItem value="SAP" label="SAP">

![SAP](/img/agentes/crear/sap.png)
1. Seleccione el sistema SAP que desea conectar a su agente.
2. Complete los datos solicitados.
    - Host
    - Port
    - Esquema
    - Usuario
    - Contraseña
3. Confirme la selección.

  </TabItem>

</Tabs>


---


## 4. Resumen final

![a](/img/agentes/crear/p5.png)
Antes de confirmar la creación, se muestra un **resumen completo** del agente configurado:

- Equipos asignados
- Nombre y descripción
- Mensajes configurados
- Prompt
- Fuentes de conociemito
- Modelo LLM asignado

Desde esta vista, el usuario puede **modificar** cualquier sección antes de finalizar.

::::info
Una vez validado, se crea el agente y queda listo para usarse o ser ajustado desde la vista de administración.
:::::


