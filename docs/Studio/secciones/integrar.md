---
title: Integrar Agente de Daiana Studio
description: Aprende a integrar el Agente de Daiana Studio con Microsoft Teams para mejorar la comunicación y colaboración en tu equipo.
iconName: "Daiana"
useBrand: true
---

Procedimiento para integrar Agente de Daiana Studio con Asistente de Daiana Enterprise

1. Ingresa Studio y toma la url de agente de la siguiente forma, reenviamos [Link](https://daianastudiopsa.seidoranalytics.com/chatflows)

![url-agente](/img/studio/integrar/1.jpeg)


2. Seleccionas el Agente requerido en este caso será: SAP_Pedidos
![url-agente](/img/studio/integrar/2.jpeg)
![url-agente](/img/studio/integrar/3.jpeg)

3. Copiar la url sin las comillas, en el caso puntual de será:

```javascript
https://daianastudiopsa.seidoranalytics.com/api/v1/prediction/cb92beed-86bb-49cb-8e59-d0a1e82b17f6
```

![url-agente](/img/studio/integrar/4.jpeg)

4. Una ves copiada la url, debemos ingresas a Daiana Empremise y creamos un Asistente donde la fuente será

![url-agente](/img/studio/integrar/5.jpeg)

Procedemos a crear el asisten, asignando un nombre y un Equipo, adicional en Tipo de conexión despliegas y selecciona Diaana Studio, como se ve a continuación:

![url-agente](/img/studio/integrar/6.jpeg)
![url-agente](/img/studio/integrar/7.jpeg)


Una vez realizado esto seleccionas **Fuentes**

![url-agente](/img/studio/integrar/8.jpeg)

Y en Flow Id pegas el url del agente de Daiana Studio.