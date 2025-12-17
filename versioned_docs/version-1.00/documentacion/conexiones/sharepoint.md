---
title: "SharePoint"
sidebar_position: 1
---

**Herramientas necesarias**: Acceso Azure Active directory, Postman 

En esta guía encontrara detalladamente los pasos para generar una aplicación en Azure, asignar roles, obtener las credenciales de acceso y los identificadores de su carpeta ShareFolder. 

En este párrafo encontrara las credenciales que necesitaremos cargar en la aplicación de Daiana: 

**ClientId**: Este es el identificador único de la aplicación que crearemos en Azure para poder leer nuestra carpeta de ShareFolder. 

**ClientSecret**: Esta es la clave secreta de la aplicación, con la que permitiremos los accesos de nuestra aplicación en ShareFolder. 

**TenantId**: Este es el identificador del dueño de la aplicación, indicando en donde fue creada  

**DomainId**: El domain ID pertenece a nuestro ShareFolder y es el ID de nuestras carpetas que contienen los archivos  

### Paso 1: Creación de la aplicación en Azure  
Desde el inicio del portal Azure debemos dirigirnos a nuestro Azure Active Directory  

![descargar.png](../img/screenshots/sharepoint/descargar.png)

En esta vista debemos apretar en “Add” y clickear en “App Registration” 
 
![descargar_(1).png](../img/screenshots/sharepoint/descargar_(1).png)
 
Debemos elegir el nombre de nuestra aplicación y, si esta pertenece a un solo tenant o si puede acceder a diferentes tenant, en este caso la opción “Single tenant” cumple con el requisito mientras el SharePoint se encuentre en el mismo tenant. 

Los campos opcionales quedaran vacíos. 

![3.png](../img/screenshots/sharepoint/3.png)

Una vez nuestra app queda registrada estaremos en una pantalla de este tipo en donde obtendremos el  client ID el tenant ID (cuadros azules) y el paso siguiente será obtener nuestra key secreta: 


![fix2.jpg](../img/screenshots/sharepoint/7.png)

Damos click en el cuadro rojo en “Add a certificate or secret”. En esta vista debemos elegir “New Client Secret” y elegimos la descripción de esta clave que se genera. 

![5.png](../img/screenshots/sharepoint/5.png)

Cuando aceptemos, debemos copiar estos dos valores que se generan (usaremos para la conexión es el campo “Value”).  

![6-fix.png](../img/screenshots/sharepoint/6-fix.png)

Si cumplimos con todos los pasos ya obtuvimos las siguientes keys: client ID, tenant ID y clientSecret. 


### Paso 2: Configuración de permisos  
En este paso configuraremos los permisos de nuestra aplicación para que pueda leer y ver los archivos de nuestro ShareFolder mediante la aplicación de Azure.  

Desde nuestra aplicación debes ir a “API permissions” y luego en “Add a permission” 

![1.png](../img/screenshots/sharepoint/paso2/1.png)
En esta vista seleccionamos “Microsoft Graph”  

![2.png](../img/screenshots/sharepoint/paso2/2.png)

Luego en “Application permissions”  
![3.png](../img/screenshots/sharepoint/paso2/3.png)

Debemos repetir este paso por cada permiso que debe concederse en la aplicación:  

Sites > Sites.FullControll.All  
![4.png](../img/screenshots/sharepoint/paso2/4.png)

Files>Files.ReadWrite.All 
![5.png](../img/screenshots/sharepoint/paso2/5.png)

Browser>Browser.SiteLists.ReadWrite.All
![6.png](../img/screenshots/sharepoint/paso2/6.png)

Una vez otorgados estos permisos, deben ser aprobados por un administrador (o nosotros mismos si tenemos los permisos necesarios en el Portal Azure). 
![7.png](../img/screenshots/sharepoint/paso2/7.png)

Una vez aprobados estos permisos, se visualizará de la siguiente manera:  
![8.png](../img/screenshots/sharepoint/paso2/8.png)


### Paso 3: Obtención identificador de carpeta ShareFolder 
En este paso obtendremos nuestro ID de nuestro ShareFolder, en el que necesitaremos la herramienta de peticiones Postman  y las credenciales de nuestra aplicación en Azure que conseguimos en los pasos anteriores:  
![1.png](../img/screenshots/sharepoint/paso3/1.png)
Una vez estemos en nuestra herramienta postman debemos configurar una petición a este link: ``https://login.microsoftonline.com/{tenantId}/oauth2/token`` reemplazando el ``{tenantId}`` con nuestra credencial de tenant ID. 

![fix3.jpg](../img/screenshots/sharepoint/paso3/fix3.jpg)
Seleccionar opciones en Body: 
- Selecciona Body. 
- Selecciona "x-www-form-urlencoded" (cuadros rojos). 

Cargar los siguientes campos en el formulario: 
- **grant_type**: client_credentials 
- **client_id**: [valor de tu credencial de Azure] 
- **resource**: https://graph.microsoft.com/ 
- **client_secret**: [valor de tu credencial de Azure] 

Agregar tenantId a nuestro link: 
- Incluye tu tenantId en el enlace. 

Formato final de la petición: 
![3-fix.png](../img/screenshots/sharepoint/paso3/3-fix.png)

Damos click en send y obtendremos una respuesta en este formato: 
![4.png](../img/screenshots/sharepoint/paso3/4.png)

De esta respuesta necesitamos el valor dentro de “Access_token”, copiamos sin las comillas dobles. 

Una vez obtengamos nuestro token debemos hacer una petición a un nuevo link en este caso será a: https://graph.microsoft.com/v1.0/sites  

Este endpoint nos otorgara la lista de nuestros SharePoint en nuestro tenant de azure y nos otorgara nuestro DomainId. 

Una vez tengamos nuestra petición configurada en el link proporcionado 

Debemos elegir la opción Bearer Token en Authorization (cuadros rojos) y debemos poner el bearer token que copiamos en el paso anterior en  el input Token (Cuadro azul) 
![5.png](../img/screenshots/sharepoint/paso3/5.png)

La pantalla con el token cargado debe quedar de la siguiente manera: 
![6.png](../img/screenshots/sharepoint/paso3/6.png)

Le damos a send y obtendremos una lista en siguiente formato:  
![7-fix.png](../img/screenshots/sharepoint/paso3/7-fix.png)

El dato que necesitamos es el “id” (cuadro rojo) 

Cuando busquemos nuestro SharePoint en específico debemos buscar por nuestra dirección de SharePoint. 

Por ejemplo, la dirección de la carpeta SharePoint que busco es: https://seidoranalytics.sharepoint.com/sites/sharepointfeature/Documentos%20compartidos/Forms/ 

Nosotros necesitamos hasta el slash después de sites 
![8.png](../img/screenshots/sharepoint/paso3/8.png)

Luego en postman hacemos click sobre la lupa de búsqueda y pegamos la dirección y obtenemos el valor del “Id” 
![9.png](../img/screenshots/sharepoint/paso3/9.png)

En el caso que no lo encontremos es posible que se encuentre en la página siguiente, para acceder a esta página debemos hacer click en el principio de la respuesta. 
![10.png](../img/screenshots/sharepoint/paso3/10.png)

Se abre esta petición en donde debemos elegir el auth Type sea Bearer Token y pegar nuestro bearer. 
![11.png](../img/screenshots/sharepoint/paso3/11.png)

Al darle send podemos obtener la misma lista, pero de la página siguiente y repetimos el paso de búsqueda. 

El domainId este compuesto por la url seguido de dos IDS 

Ejemplo:  

`seidoranalytics-my.sharepoint.com,9321ae0e-db0b-4982-9636-c907593046b7,9393cd16-2bad-4842-8729-e987bc7c94a9 `

Una vez completados estos pasos debemos tener las siguientes claves: clientId, clientSecret, tenantId y domainId perteneciente a nuestro SharePoint. 

El paso siguiente es cargar nuestro asistente de Daiana con nuestras claves. 

### Paso 4: Crear asistente en Daiana 

Nos dirigimos a crear un nuevo asistente para Daiana y elegimos en “Connection Type” SharePoint  


![fix4.jpg](../img/screenshots/sharepoint/paso4/fix4.jpg)

Nos dirigimos a “Sources” y completamos con nuestras credenciales. Una vez completado este paso, esperamos que los documentos del SharePoint se carguen en el asistente y, en el caso de ser una carga exitosa, veremos en la tabla de abajo los documentos del SharePoint.  

![2.png](../img/screenshots/sharepoint/paso4/2.png)

En este caso, la subida de archivos será, en su totalidad, desde la raíz del SharePoint. 

Una vez verificamos la existencia de nuestros archivos, el asistente estará listo para responder preguntas.  

#### Conexión de carpeta a asistente de SharePoint :  
Si deseamos conectar nuestro asistente a una carpeta especifica de SharePoint, podemos seleccionar la opción “Upload document from folder”. De esta forma escribimos el nombre de nuestra carpeta y se cargaran los archivos que ésta contenga. 

![3.png](../img/screenshots/sharepoint/paso4/3.png)

Al aceptar esta opción tendremos el input para cargar el nombre de nuestra carpeta, no es case sensitive (es decir funciona de la misma forma si es mayúscula o minúscula) pero si respeta espacios (Por ejemplo: “Primera carpeta”). 

En caso de acceder a subcarpetas la dirección se va indicando con “/”, de la siguiente manera: 
![4.png](../img/screenshots/sharepoint/paso4/4.png)

NOTA: Para el folder name, tener en cuenta en NO colocar un Slash al final "/". 

 El contenido que trae es desde la carpeta indicada, si por ejemplo seleccionamos “thirdFolder” como en el ejemplo, traerá todos los documentos desde esa carpeta en adelante. 



