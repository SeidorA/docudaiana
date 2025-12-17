---
title: 'Variables'
iconName: "code"
sidebar_position: 5
---

Flowise permite a los usuarios crear variables que pueden ser utilizadas en los nodos. Las variables pueden ser Estáticas o de Tiempo de Ejecución.

### Estáticas

La variable estática se guardará con el valor especificado y se recuperará tal cual.

<p align="center">
![a](/img/studio/variable/a.png)
</p>
### Tiempo de Ejecución

El valor de la variable se obtendrá del archivo **.env** usando `process.env`

<p align="center">
![a](/img/studio/variable/b.png)
</p>

### Sobrescribir o establecer variables a través de la API

Para sobrescribir el valor de una variable, el usuario debe habilitarlo explícitamente desde la pestaña **Configuración del Flujo de Chat** -> **Seguridad**:

<p align="center">
![a](/img/studio/variable/c.avif)
</p>

Si existe una variable creada, el valor de la variable proporcionado en la API sobrescribirá el valor existente.

```json
{
    "question": "hola",
    "overrideConfig": {
        "vars": {
            "var": "algun-valor-sobrescrito"
        }
    }
}
```

### Usando Variables

Las variables pueden ser utilizadas por los nodos en Flowise. Por ejemplo, se crea una variable llamada **`character`**:

<p align="center">
![a](/img/studio/variable/d.avif)
</p>

Luego podemos usar esta variable como **`$vars.<nombre-variable>`** en la Función de los siguientes nodos:

<p align="center">
![a](/img/studio/variable/e.png)
</p>

Además, el usuario también puede usar la variable en la entrada de texto de cualquier nodo con el siguiente formato:

**`{{$vars.<nombre-variable>}}`**

Por ejemplo, en el Mensaje del Sistema del Agente:

<p align="center">
![a](/img/studio/variable/f.png)
</p>

En la Plantilla de Prompt:

![a](/img/studio/variable/g.avif)
