---
title: Adminstradores
iconName: "user"
sidebar_position: 2
---


Al final de la barra lateral verás tu nombre y dando click en él veras un menú menú desplegarse hacia arriba, si tienes el rol de Administrador del Chat Avanzado verás 4 opciones:

![Admin](/img/chat/admin/1.png)

Este ambiente tiene un administrador de las funciones que explicaremos a continuación: Usuarios, Evaluaciones, Funciones y Ajustes.

## Administración de Usuarios:
Dentro de la pestaña Usuarios el administrador puede gestionarlos y también agruparlos para el control de acceso a los chatflows y agentflows realizados con [Daiana Studio](/docs/documentacion/Studio). 


## Usuarios 
![Admin](/img/chat/admin/2.png)

Dispone de una vista general de todos los usuarios con sus datos básicos, y las opciones de buscar los que contengan un carácter en el nombre (lupa), dar de alta un nuevo usuario (+) , y en la línea de los datos individuales por usuario tiene las opciones para ver sus chats (símbolo de conversación), editar su definición o eliminarlo.

Dando click en Grupos accede a una vista con los grupos existentes, donde podrá buscar  los que contengan un carácter en el nombre (lupa), dar de alta un nuevo grupo (+) , y en la línea de los datos individuales de los grupos tiene las opciones para ver lo cantidad de miembros, sus nombres y editar el grupo (en la ventana de esta opción podrá seleccionar borrarlo).


![Admin](/img/chat/admin/3.png)
![Admin](/img/chat/admin/4.png)

## Evaluaciones (Chats Multi-Modelo)
Por el momento no está en uso.
## Funciones
Las funciones son las que vinculan el Chat Avanzado con los Chatflows y Agentflows generados en Daiana Studio. Al abrir por primera vez esta pestaña tendrás una función de ejemplo que podrás:
1 clonar : haciendo click sobre los tres puntos
2 configurar: haciendo click sobre el engranaje 
3 habilitar/deshabilitar: haciendo click en el “botón?”

![Admin](/img/chat/admin/5.png)

Lo primero que debes hacer es clonarla, y luego deberás ir a Daiana Studio. 
Cada Workspace  tiene su Api Key que lo identifica, haz click en el ojo y luego en Copy.

![Admin](/img/chat/admin/6.png)

Vuelve a Funciones del Chat Avanzado y haz click sobre el engranaje de la función clonada, lo que abrirá una ventana como la siguiente, en la que deberás ingresar:
- en Daiana URL: [studio.daianadmo.seidoranalytics](https://studio.daianadmo.seidoranalytics.com)
- en Daiana Api Key: el dato copiado en la sección API Keys de Daiana Studio

![Admin](/img/chat/admin/7.png)

Al guardar esta configuración en la función clonada queda una vinculación establecida y verás como modelos del Chat avanzado todos los Chatflows y Agentflows que tengas en el Workspace de Daiana Studio al que corresponda al Api Key seleccionado.

A partir de esto los agentes que allí se agreguen o eliminen se reflejarán en los modelos que te muestre el Chat Avanzado para administrar, es decir: estarán sincronizados los ambientes. Claro que esto funcionará si está habilitada la función, que es el último paso que faltaba explicar.

Podrás hacer tantas funciones como Workspaces quieras llevar desde Daiana Studio al Chat Avanzado, pero no hay forma de administrarlos “filtrando” los modelos de uno u otro.

## Ajustes

Dentro de la pestaña de Ajustes debes ir a la opción de Modelos y verás los agentes hechos en Daiana Studio que has vinculado mediante las funciones que agregaste.

![Admin](/img/chat/admin/8.png)

Dando click en el engranaje, podrás :
- Reordenar en qué orden se muestran los modelos para ser seleccionados
- Seleccionar si algunos de estos deben mostrarse a los usuarios que tengan permiso de accederlos como “Modelos predeterminados”, es decir que ya aparecerán como el modelo seleccionado cuando el usuario acceda al Chat Avanzado (si son varios abrirá un chat por modelo y puede ser confuso)
- Debes dar click en “Guardar” para que estas opciones se apliquen 
- Puedes dar click en “Reiniciar Todos los modelos” y esto eliminará la lista de modelos del Chat Avanzado, pero si el PIPE sigue habilitado, de inmediato los volverás a ver ( lo que habrás eliminado es la seguridad de acceso que se explica a continuación ) 


![Admin](/img/chat/admin/9.png)

En la misma línea del nombre del modelo aparecen tres opciones que explicaremos a continuación:
- El selector: habilita o deshabilita que se utilice un “modelo” (Agentflow o Chatflow)
- Los tres puntos: permiten que el modelo se oculte, se comparta un enlace a hacia él o se descargue su definición como archivo Json.
- El lápiz: este es el más importante porque te permitirá “aplicar seguridad de acceso” a los modelos. Al dar click en el lápiz se abriá una ventana que te permite configurar su Visibilidad, permitiendo acceso Público o Privado, y si es privado deberás seleccionar un grupo de los que hayas creado en la pestaña Usuarios para que los que pertenezcan a dicho grupo pueda utilizar el modelo. 

![Admin](/img/chat/admin/10.png)

Guarda los cambios y se aplicará la seguridad de acceso según lo configurado.

