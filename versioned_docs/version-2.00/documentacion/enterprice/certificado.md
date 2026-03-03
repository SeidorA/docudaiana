---
sidebar_position: 4
title: "Certificados SSl"
---
## Carga del nuevo certificado en el sistema
###  1. Acceso al portal
Debido a que los certificados están vencidos, se debe ingresar al sistema utilizando la **dirección IP** y el **puerto específico** (apuntando directamente a Nginx), preferiblemente a través de una conexión VPN si es necesario.


### 2. Navegación
![Acceso al portal](/img/certificado/a.png)
Una vez logueado con el usuario y contraseña proporcionados, se debe ir a la pestaña de "Certificates" (Certificados).


### 3. Agregar certificado manual
![Agregar certificado](/img/certificado/b.png)


- Seleccionar la opción "Custom" (Personalizado).

![Agregar certificado](/img/certificado/c.png)

- Asignar un **nombre distintivo**, se recomienda incluir el año (por ejemplo, ```Certificado 2026```) para diferenciarlo de los anteriores.
- Cargar los archivos correspondientes: primero el archivo de la llave ```.key``` y en segundo lugar el certificado A```.crt``` o ```.cer```.
- Opcional: Si existe un certificado intermedio, también se puede cargar, aunque no es obligatorio.

### 4. Validación
Al guardar, el sistema debe mostrar el nuevo certificado con el estado "Validado" y la nueva fecha de expiración (un año a partir de la carga).

## Actualización de los Proxy Hosts
Una vez cargado el certificado, este debe aplicarse a cada uno de los servicios configurados:

### 1. Ir al Dashboard 
Dirigirse a la sección de **"Proxy Hosts"**.
### 2. Editar cada Host 
En el listado de proxis (como ```dayana.casa``` y sus complementos), se debe hacer clic en los tres puntos a la derecha de cada uno y seleccionar "Edit" (Editar).
### 3. Configuración de SSL
Ir a la pestaña "SSL" dentro del menú de edición.
En el menú desplegable, seleccionar el nuevo certificado (ej. ```Certificado 2026```).
Reactivar los checks de seguridad: Es fundamental verificar que las opciones como Force SSL, HTTP/2 Support y HSTS queden activadas, ya que al cambiar el certificado es posible que se deshabiliten automáticamente.
### 4. Guardar cambios
Al finalizar, el estado del proxy debe aparecer como "Online".

## Verificación final

### Prueba de acceso
Se puede verificar haciendo clic directamente en el enlace del host desde el dashboard.

### Tiempo de respuesta
El cambio suele ser casi inmediato, tardando entre 30 segundos y un minuto como máximo en reflejarse.

### Confirmación visual
El navegador debería mostrar ahora la conexión como segura (HTTPS) sin el bloqueo previo por certificado vencido.