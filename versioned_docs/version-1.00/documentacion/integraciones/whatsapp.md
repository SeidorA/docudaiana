---
title : "WhatsApp"
iconName: "Whatsapp"
---

## Creación de un Webhook para WhatsApp

**Introducción**
Un **webhook** es un mecanismo que permite recibir notificaciones automáticas en un servidor cuando ocurren ciertos eventos en una plataforma externa. En este caso, crearemos un webhook para WhatsApp que recibirá mensajes entrantes y eventos desde la **API de WhatsApp Cloud de Meta.**


Esta guía cubre los siguientes aspectos:
- Creación y configuración de un webhook

## Requisitos Previos

Antes de comenzar, asegúrese de contar con:
-	Una cuenta de Meta for Developers más instrucciones [aqui](https://developers.facebook.com/docs/development/register)
-	Una cuenta en Meta Business Suite para configurar el webhook [link](https://business.facebook.com/)
-	Una línea telefónica nueva o una que no hayas sido usada en WhatsApp.

## Configuración del Webhook en Meta
### Creación del Portafolio comercia

1.	Ingresa a [Meta Business Suite](https://business.facebook.com/)
2. Seguir las instrucciones para cear una, si por lo contrario quieres crear una nueva sigue estos pasos:
a. Clic en el recuadro debajo de inicio y luego en **Crear un portafolio comercial.**
![a.png](../img/integraciones/whatsapp/a.png)
b. Rellena los datos solicitados en el formulario y clic en crear. 
![a.png](../img/integraciones/whatsapp/b.png)
c.	Clic en **siguiente.** 
![a.png](../img/integraciones/whatsapp/c.png)
d.	Clic en **siguiente.** 
![a.png](../img/integraciones/whatsapp/d.png)
e.	Clic en **confirmar.** 
![a.png](../img/integraciones/whatsapp/e.png)

### Creación de una Aplicación en Meta Developers

1. Ingrese a [Meta for Developers](https://developers.facebook.com/)
2.	Seleccione mis apps y luego crear app.
![1a.png](../img/integraciones/whatsapp/1a.png)
3.	Siga el paso a paso
a.	Dar un nombre a la aplicación
![1a.png](../img/integraciones/whatsapp/1b.png)
b. Seleccione otro en caso de usos
![1a.png](../img/integraciones/whatsapp/1c.png)
c. Selecciones **Negocios**
![1a.png](../img/integraciones/whatsapp/1d.png)
d. Aquí debe seleccionar el portafolio comercial creado previamente. **Clic en crear app**.
![1a.png](../img/integraciones/whatsapp/1e.png)

4.	Vaya a la sección WhatsApp 
a.	WhatsApp clic en configurar
![1a.png](../img/integraciones/whatsapp/1.png)
Si tienes una cuenta comercial de Meta (MBA), se te pedirá que la adjuntes cuando agregues el producto WhatsApp a tu app. Si no tienes una MBA, deberás seguir unas instrucciones que te ayudarán a crear una. Una vez que adjuntes la MBA a tu app, tendrás todo listo para empezar a hacer las pruebas.
b.Selecciones **Continuar**
![1a.png](../img/integraciones/whatsapp/1g.png)

c. Clic en **Empezar a usar la API**
![1a.png](../img/integraciones/whatsapp/1h.png)

d. Clic en Generar token de acceso y sigue los pasos para loguearte y obtener un token.temporal.
![1a.png](../img/integraciones/whatsapp/1i.png)
e. Agrega un número de teléfono para hacer una prueba de conexión con el servidor, y sigue los pasos de las imágenes. 
![1a.png](../img/integraciones/whatsapp/1j.png)
 
f.Cambia al prefijo de tu país y coloca el numero con el que vas hacer la prueba
![1a.png](../img/integraciones/whatsapp/1q.png)

g.Ingresa el código de verificaron recibido en el móvil.
![1a.png](../img/integraciones/whatsapp/1k.png)

h. Clic en **Enviar mensaje**, deberías poder recibir un mensaje de prueba en tu **WhatsApp**.
![1a.png](../img/integraciones/whatsapp/1l.png)


## Configuración del Webhook
1.	En paso 3, haz clic en **Configurar webhooks**.
![2a.png](../img/integraciones/whatsapp/2a.png)
2.	Veras una página como esta
![2a.png](../img/integraciones/whatsapp/2b.png)

3. Es momento de generar un token permanente que deberás agregarlo a la configuración de DAIANA. Mas información [clic aquí.](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#business-integration-system-user-access-tokens)

	Para generar un token del sistema, accede al panel [Configuración del negocio](https://business.facebook.com/business/loginpage/?next=https%3A%2F%2Fbusiness.facebook.com%2Fsettings%2F) selecciona el negocio creado y haz clic en Usuarios del sistema:
  
![2a.png](../img/integraciones/whatsapp/2c.png)

Haz clic en el botón +Agregar y, cuando aparezca la ventana Crear usuario del sistema, ingresa un nombre de usuario del sistema y asígnale el rol Administrador o Empleado:
![2a.png](../img/integraciones/whatsapp/2d.png)

Una vez que el usuario administrador del sistema se haya creado, aparecerá en la lista de usuarios del sistema. Haz clic en el nombre del usuario del sistema para mostrar la imagen superpuesta de la asignación del activo.
![2e.png](../img/integraciones/whatsapp/2e.png)
![2e.png](../img/integraciones/whatsapp/2f.png)

Haz clic en el botón Asignar activos para mostrar la ventana **Seleccionar activos y asignar permisos:**
![2e.png](../img/integraciones/whatsapp/2g.png)

Selecciona tu app y otórgale a tu usuario del sistema el permiso **Administrar app**. Luego, haz clic en el botón Asignar activos para confirmar y cerrar la ventana.

Una vez de regreso en el panel Usuarios del sistema, vuelve a cargar la página para confirmar que a tu usuario del sistema se le haya concedido el permiso Control total de tu app. Es posible que se demore un poco la concesión de los permisos, así que deja pasar unos minutos y vuelve a cargar la página si tu app no aparece como un activo asignado. Cuando el activo se haya asignado, debería tener el siguiente aspecto:

![2e.png](../img/integraciones/whatsapp/2h.png)

Cuando veas que a tu usuario del sistema se le otorgó el control total de tu app, en la imagen superpuesta de la asignación del activo, haz clic en el botón Generar token. En la ventana que aparece, selecciona tu app, elige una preferencia de caducidad del token y asigna a tu app estos tres permisos de la API Graph:

- business_management
- whatsapp_business_management
- whatsapp_business_management

Puedes buscar "business" para encontrar estos permisos rápidamente:
![2e.png](../img/integraciones/whatsapp/2i.png)


4.	Agregue la URL de su servidor que encontraras en la configuración de Daiana (por ejemplo, https://tudominio.com/webhook)
5.	Ingrese el VERIFY_TOKEN definido en la configuración de DAIANA

	Hasta ahora deberías tener en la configuración de DAIANA los tres datos requeridos para su funcionamiento, el identificador del número telefónico (paso 4.a), el token creado anteriormente (paso 3.2-3) y el VERIFY_TOKEN (clave de su preferencia) que deberá ser el mismo en ambos. Clic en Verificar y guardar.

![2e.png](../img/integraciones/whatsapp/2j.png)

6.	Seleccione los eventos que desea recibir (mensajes, estados, etc.)
![2e.png](../img/integraciones/whatsapp/2q.png)
Hasta este punto solo hemos configurado el modo de desarrollo de la aplicación, para poder llevarlo a productivo deberá agregar un umero de teléfono real, sigue las instrucciones en este [link.](https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers)

![2e.png](../img/integraciones/whatsapp/2k.png)
![2e.png](../img/integraciones/whatsapp/2l.png)
Por último, deberás cambiar el modo de la app Desarrollo a Activo en la parte superior.

![2l.png](../img/integraciones/whatsapp/2m.png)
