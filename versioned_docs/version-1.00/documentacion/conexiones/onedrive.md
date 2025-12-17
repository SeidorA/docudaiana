---
title: "One Drive"
sidebar_position: 2
---

## Herramientas necesarias
En esta guía encontrara detalladamente los pasos para generar una aplicación en One Drive, asignar roles, obtener las credenciales de acceso y los identificadores de su carpeta ShareFolder.

En este párrafo encontrara las credenciales que necesitaremos cargar en la aplicación de Daiana:
- Acceso Azure Active directory
- **icrosoft Graph**: acceso a la API de Microsoft Graph


Documentación para Registrar una App en el Portal de Azure y Otorgar Permisos a la API de Microsoft Graph

## 1. Acceso al Portal de Azure

1.	Ve al [Portal de Azure](https://portal.azure.com/).
2.	Inicia sesión con tu cuenta de Microsoft.
![p1.png](../img/integraciones/onedrive/p1.png)


## 2. Registro de la Aplicación
1. En el menú de navegación izquierdo, selecciona  **Microsoft Entra ID**.
![p1.png](../img/integraciones/onedrive/p2.png)
![p1.png](../img/integraciones/onedrive/p3.png)

2.	Haz clic en Registros de **aplicaciones > Nuevo registro.**
![p4.fixjpg.jpg](../img/integraciones/onedrive/p4.fixjpg.jpg)
![p5fix.jpg](../img/integraciones/onedrive/p5fix.jpg)

3.	Completa los siguientes campos:

-	Nombre: Asigna un nombre único a tu aplicación.
-	Tipos de cuentas admitidos: Elige el alcance de autenticación (por ejemplo, "Cuentas en este directorio organizativo").
- 	URI de redirección (opcional): Si necesitas autenticación interactiva, proporciona un URI válido (por ejemplo https://localhost:3000/auth/callback). 

:::danger
**NOTA**: no es requerido en nuestro caso, omitir.
::::

![p5fix.jpg](../img/integraciones/onedrive/p5fix.jpg)
4.	Haz clic en Registrar

## 3. Configurar Permisos para Microsoft Graph
1.	Ve a la página de la aplicación registrada.
![p1.png](../img/integraciones/onedrive/p7.png)

2. En el menú lateral, selecciona **Permisos de la API.**
![p1.png](../img/integraciones/onedrive/p8.png)

3.	Haz clic en **Agregar permiso**.
![p1.png](../img/integraciones/onedrive/p9.png)

4.	Selecciona Microsoft Graph.
![p1.png](../img/integraciones/onedrive/p11.png)

5.	Escoge el tipo de permiso:

-	Permisos delegados: Si la aplicación actúa en nombre del usuario.
-	Permisos de aplicación: Si la aplicación actúa de forma independiente. 


:::danger
 **NOTA**: para nuestro caso seleccionamos esta opción.
::::

6.	Busca y selecciona los permisos necesarios, por ejemplo:
![p1.png](../img/integraciones/onedrive/p12.png)

7.	Haz clic en **Agregar permisos**.
![p1.png](../img/integraciones/onedrive/p13.png)

## 4. Conceder Consentimiento del Administrador (Opcional)

1.	Si los permisos requieren consentimiento del administrador, haz clic en **Conceder consentimiento de administrador para [tu inquilino]**.
![p1.png](../img/integraciones/onedrive/p14.png)

2.	Confirma la acción.
3.	Cuando el administrador haya dado de alta los permisos se vera algo así:
![p1.png](../img/integraciones/onedrive/p15.png)

## 5. Configurar un Secreto de Cliente (Client Secret)
1.	En la configuración de la aplicación, selecciona Certificados y secretos.
![p1.png](../img/integraciones/onedrive/p16.png)

2.	Haz clic en Nuevo secreto de cliente.
![p1.png](../img/integraciones/onedrive/p17.png)

3.	Asigna una descripción y establece la duración del secreto.

![p8.png](../img/integraciones/onedrive/p18.png)
4.	Haz clic en Agregar.
5.	Copia el Valor del Secreto y guárdalo de manera segura.


## 6.Obtener las Credenciales de la Aplicación
- Ve a Información general para obtener el **ID de aplicación (cliente)** y el **ID de directorio (inquilino)**.
-	Estos serán necesarios para autenticar tu aplicación al consumir la API de **Microsoft Graph en Daiana**.


## 7.Crear asistente en Daiana 

Nos dirigimos a crear un nuevo asistente para Daiana y elegimos en “Connection Type” One Drive  


![1.png](../img/screenshots/sharepoint/paso4/1.png)

Nos dirigimos a “Sources” y completamos con nuestras credenciales. Una vez completado este paso, esperamos que los documentos del One Drive se carguen en el asistente y, en el caso de ser una carga exitosa, veremos en la tabla de abajo los documentos del OneDrive.  
