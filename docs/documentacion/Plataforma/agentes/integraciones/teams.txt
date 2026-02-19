---
title: Microsoft Teams
iconName: "Teams"
useBrand: true
sidebar_position: 1
---


**Integracion con Microsoft Teams.**
En esta guía encontrara detalladamente los pasos para integrar Daiana a Microsoft Teams.

## Prerrequisitos
- Cuenta de negocios de Microsoft 365

## Configuración de la integración de Microsoft Teams en Daiana
1. Ve a asistente virtuales, selecciona el asistente que dedeas integrar con Microsoft Teams y luego editar asistente




2. Selecciona la pestaña de integraciones y activa la opción de integrar con Microsoft Teams.


La integración de Microsoft Teams tiene la siguiente configuración:


- **App Id**: el identificador de aplicación del bot en Azure (se obtiene en los pasos siguientes)
- **App Password*: el secreto de la aplicación del bot en Azure (se obtiene en los pasos siguientes)
- **App Tenant**: el identificador del dueño de la aplicación. (Consultar con el administrador de TEAMS tu compañía)
- **URL**: La URL para recibir datos en Daiana. (Se genera automáticamente al activar la integración – será el EndPoint para crear tu bot en Teams)

Deberás proveer los valores solicitados siguiendo el paso a paso a continuación, estos se generan en el punto 2.Crear el bots … / 4. Campos requeridos



## 1.Accede a la plataforma de administración.
1. Abre Microsoft Teams.
2. En el menú izquierdo, haz clic en "Aplicaciones".

![fix1.jpeg](/img/integraciones/teams/fix/fix1.jpeg)

3. Si no tienes instalada la aplicación Developer Portal, sigue estos pasos:
 - Busca "Developer Portal" en la barra de búsqueda y selecciona la aplicación y haz clic en "Agregar".
 
![fix2.jpeg](/img/integraciones/teams/fix/fix2.jpeg)

-Confirma la instalación y vuelve a la sección de "Aplicaciones"

![fix2.jpeg](/img/integraciones/teams/fix/fix3.jpeg)
![fix2.jpeg](/img/integraciones/teams/fix/fix4.jpeg)


## 2. Crear el bot desde la pestaña de herramientas (Tools)

1. Abre Developer Portal.


![f5.jpeg](/img/integraciones/teams/fix/f5.jpeg)

2. Una vez dentro de Developer Portal, ve a la pestaña "Herramientas" o "Tools" en el menú  superior.

![f6.jpeg](/img/integraciones/teams/fix/f6.jpeg)

3. Selecciona la opción "Bot management" y luego “New Bot”.

![f7.jpeg](/img/integraciones/teams/fix/f7.jpeg)
![f8.jpeg](/img/integraciones/teams/fix/f8.jpeg)

4. Rellena los siguientes campos requeridos:
- Dale un nombre a tu bot y luego clic en “add”.

![f9.jpeg](/img/integraciones/teams/fix/f9.jpeg)

Veras algo así:

![f10.jpeg](/img/integraciones/teams/fix/f10.jpeg)

- Anota o copia el Bot ID generado que es requerido en la configuración de Daiana como “App ID”
- Selecciona el bot creado y configura el Endpoint que obtuviste en la configuración de Daiana como URL.

![f11.jpeg](/img/integraciones/teams/fix/f11.jpeg)

- Ahora has clic en “Client secrets” para generar la contraseña, luego clic en “Add a client secret for your bot”

![f12.jpeg](/img/integraciones/teams/fix/f12.jpeg)

- Asegúrate de copiar y guardar esta clave ya que que es requerido en la configuración de Daiana como “App Password”. Finaliza haciendo clic en “Ok”.

![f13.jpeg](/img/integraciones/teams/fix/f13.jpeg)



## 3. Crear una nueva aplicación

1. Hay dos formas de hacer haciendo clic en “Inicio” o en Aplicaciones".
- **Opción 1 (Inicio)**:

![g1.jpeg](/img/integraciones/teams/fix/g1.jpeg)
- Haz clic en "Crear aplicación".

- **Opción 2 (Aplicaciones)**:
  
![g2.jpeg](/img/integraciones/teams/fix/g2.jpeg)
- Has clic en “New app”.
- Ingresa un nombre para la aplicación (Ejemplo: "MiBot").

1. Presiona "Add" para continuar.
2. En el menú del lado izquierdo de la aplicación, vaya a la página App features en la sección Configurar y luego haga clic en "Bot".

![g2.jpeg](/img/integraciones/teams/fix/g3.jpeg)

1. Seleccione el bot cerado el paso anterior del menú desplegable. Compruebe los alcances deseados, Personal, Teams, Group Chat.

![g2.jpeg](/img/integraciones/teams/fix/g4.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g5.jpeg)

5. Rellene todos los campos obligatorios en la página Información básica de la sección Configurar

![g2.jpeg](/img/integraciones/teams/fix/g6.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g7.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g8.jpeg)

6. En la opción de **Branding** podrás configurar un logo para tu aplicación

![g2.jpeg](/img/integraciones/teams/fix/g9.jpeg)

7. Haga clic en Publicar y, a continuación, en Publicar en su organización, Ahora espere o consulte con el administrador de Teams que autorice la aplicación. Para más información haz clic  [aqui](https://learn.microsoft.com/es-mx/MicrosoftTeams/manage-apps)

![g2.jpeg](/img/integraciones/teams/fix/g10.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g11.jpeg)


8. Ve a la tienda de aplicaciones de Teams, busca la aplicación y añádela.
9. ¡El bot ahora está disponible en la sección Aplicación para todos los miembros de su organización!
