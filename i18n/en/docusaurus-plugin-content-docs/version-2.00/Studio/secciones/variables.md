---
title: 'Variables'
iconName: "code"
sidebar_position: 5
---

Flowise allows users to create variables that can be used in nodes. Variables can be Static or Runtime.

### Static

The static variable will be saved with the specified value and retrieved as is.

<p align="center">
![a](/img/studio/variable/a.png)
</p>
### Runtime

The variable's value will be obtained from the **.env** file using `process.env`.

<p align="center">
![a](/img/studio/variable/b.png)
</p>

### Override or Set Variables via API

To override a variable's value, the user must explicitly enable it from the **Chatflow Settings** -> **Security** tab:

<p align="center">
![a](/img/studio/variable/c.avif)
</p>

If a variable already exists, the variable value provided in the API will override the existing value.

```json
{
    "question": "hello",
    "overrideConfig": {
        "vars": {
            "var": "some-overridden-value"
        }
    }
}
```

### Using Variables

Variables can be used by nodes in Flowise. For example, a variable named **`character`** is created:

<p align="center">
![a](/img/studio/variable/d.avif)
</p>

Then we can use this variable as **`$vars.<variable-name>`** in the Function of the following nodes:

<p align="center">
![a](/img/studio/variable/e.png)
</p>

Additionally, the user can also use the variable in the text input of any node with the following format:

**`{{$vars.<variable-name>}}`**

For example, in the Agent System Message:

<p align="center">
![a](/img/studio/variable/f.png)
</p>

In the Prompt Template:

![a](/img/studio/variable/g.avif)
