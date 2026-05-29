---
title: Custom MCP | HubSpot
description: Agregar HubSpot al Custom MCP
sidebar_position: 1
sidebar_label: Custom MCP Tool
---

Si alguien de tu equipo ya configuró la conexión con HubSpot, esta guía te explica cómo usarla dentro de tus flujos en Daiana Studio, paso a paso y sin necesidad de conocimientos técnicos.

---

## Lo que vas a poder hacer

Una vez conectado el nodo, tu agente podrá:

- 🔍 Buscar contactos, empresas y negocios en HubSpot
- ➕ Crear nuevos contactos o empresas
- ✏️ Actualizar información existente en el CRM
- 📋 Consultar propiedades y etapas de negocios
- 🔗 Asociar contactos con empresas o negocios

Todo desde una conversación con tu agente, sin entrar a HubSpot manualmente.

---

### Paso 1 — Abrí tu flujo en Daiana Studio

Ingresá a Daiana Studio y abrí el flujo donde querés agregar la conexión con HubSpot, o creá uno nuevo.

---

### Paso 2 — Agregá el nodo Custom MCP Tool

1. En el panel de la izquierda, buscá el nodo llamado **Custom MCP Tool**.
2. Arrastralo al canvas (área de trabajo central).

:::::tip
Si no encontrás el nodo, escribí "MCP" en el buscador del panel de nodos.
:::::

---

### Paso 3 — Configurá la URL de conexión

1. Hacé clic sobre el nodo que acabás de agregar.
2. En el campo **URL**, pegá exactamente esta dirección:

```
{
    "url": "https://mcp-hubspot.daianadmo.seidoranalytics.com/mcp"
}
```

3. Hacé clic en el botón **Cargar herramientas** (o **Load Tools**).

Si la conexión está activa, vas a ver una lista de herramientas de HubSpot disponibles cargarse automáticamente.

:::::warning
**¿No carga nada?** Significa que la conexión con HubSpot todavía no está activa en tu entorno. Contactá a la persona de tu equipo que administra Daiana Studio para que la habilite.
:::::

---

### Paso 4 — Conectá el nodo a tu agente

1. Uní el nodo **Custom MCP Tool** al nodo de tu **Agente** (Agent) con una flecha.
2. Guardá el flujo con el botón **Save** (o **Guardar**).

---

### Paso 5 — Probá que funciona

Abrí el chat de tu flujo y escribile al agente algo como:

```
Buscá en HubSpot el contacto con el email ejemplo@empresa.com
```

Si todo está bien, el agente va a consultar HubSpot y mostrarte la respuesta en lenguaje natural.

---

## Ejemplos de cosas que podés pedirle al agente

| Lo que escribís | Lo que hace el agente |
|---|---|
| `Buscá el contacto Juan Pérez en HubSpot` | Busca por nombre en el CRM |
| `Creá un contacto con el email ana@empresa.com` | Crea un nuevo contacto |
| `¿En qué etapa está el negocio con Empresa XYZ?` | Consulta el deal en el pipeline |
| `Actualizá el teléfono de María López a +54 11 1234-5678` | Modifica el contacto |
| `Mostrá todas las empresas del rubro tecnología` | Busca empresas por categoría |

---

## ¿Algo no funciona?

| Lo que ves | Qué significa | Qué hacer |
|---|---|---|
| El nodo no carga herramientas | La conexión con HubSpot no está activa | Avisale al administrador de Daiana |
| El agente dice que no puede conectarse | El servicio está temporalmente caído | Esperá unos minutos y volvé a intentarlo |
| El agente responde pero con datos incorrectos | El agente interpretó mal tu pedido | Reformulá la pregunta siendo más específico |

---

*Seidor Analytics · Base de Conocimiento · Mayo 2026*