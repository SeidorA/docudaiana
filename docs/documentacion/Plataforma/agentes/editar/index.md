---
title: Editar agentes
iconName: "gear"
---
import {Banerimg} from '../../../../Studio/efectsstudio.tsx'


<Banerimg img="/agentes/admin/admin.gif" />

La pantalla **Editar Agente** permite modificar todas las configuraciones existentes de un agente ya creado, así como acceder a opciones avanzadas que no están disponibles durante la creación inicial.

---

## Estructura general

La estructura base es la misma que la del **Creación de agente**, dividida en pasos:

1. **Configuración general**
2. **Configuración del agente**
3. **Bases de conocimiento**
4. **Entrenamieto**
5. **Compartir**
6. **Integraciones**

---

## Configuraciones General del agente

![a](/img/agentes/admin/genral.png)
Además de los campos estándar, la edición del agente permite acceder a configuraciones específicas para personalizar aún más su comportamiento. Como el refinamiento del prompt personalizado para mejorar  su contestación o la personalización del chat.

## Configuración del agente

<p align="center">
![a](/img/agentes/admin/config.png)
</p>

- **¿Deseás dejar visibles las sentencias SQL en las respuestas del chat?**  
  Útil para entornos técnicos donde el usuario necesita ver la consulta que genera el agente.

- **¿Deseás visualizar las respuestas de las bases de datos en formato tabla?**  
  Mejora la legibilidad de respuestas estructuradas.

- **¿Deseás que tus agentes generen gráficos?**  
  Permite al agente representar datos mediante visualizaciones automáticas.

- **¿Deseás habilitar auto-entrenamiento en tu agente?**  
  Activa un sistema que mejora el rendimiento del agente con base en interacciones previas.

- **¿Deseás habilitar preguntas sugeridas en tu agente?**  
  Muestra preguntas comunes o relevantes para facilitar la interacción del usuario.

---

## Entrenar

![a](/img/agentes/admin/consola.png)

Opciones para **distribuir el agente fuera de Daiana**:

- **Enlace público:** genera un link directo al agente para compartirlo con terceros.
- **Embed:** proporciona un código HTML para **incrustar el asistente** en sitios web o aplicaciones externas.

---

## Integraciones

Desde el panel de integraciones, el agente puede conectarse con canales externos de mensajería. Actualmente están disponibles:

![a](/img/agentes/admin/integraciones.png)
- **WhatsApp**
- **Microsoft Teams**

:::::tip
Estas integraciones permiten extender la funcionalidad del agente hacia otras plataformas sin duplicar la lógica o la configuración.
:::::

---

> La pantalla de edición está diseñada para brindar control total sobre el comportamiento, la distribución y la evolución del agente.
