---
title: Usuarios
iconName: "user"
sidebar_position: 2
---
import {Banerimg} from '../../../Studio/efectsstudio.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Banerimg img="gestion/usuario/index.png" />
La sección **Usuarios** permite administrar todas las cuentas registradas en la plataforma. Desde aquí es posible visualizar, editar, eliminar o invitar nuevos usuarios, así como gestionar sus roles y accesos.

## Vista de usuarios

Se muestra un listado con la siguiente información:
![vista](/img/gestion/usuario/vista.png)

- **Nombre**
- **Teléfono**
- **Email**
- **Rol** (Custom, Admin, Usuario o Invitación pendiente)
- **Acciones** disponibles (editar o eliminar)


:::::info
Los usuarios con invitación pendiente aparecerán marcados como *“Invitación enviada”* en la columna de roles.
:::::

---

## Acciones

Al hacer clic en el ícono de lápiz, podrás editar los siguientes campos:

![vista](/img/gestion/usuario/editar.gif)


- Nombre
- Rol del usuario (Owner, Admin, Usuario, Custom)
- Email
- Número de teléfono
- Contraseña

::::warning
También se puede eliminar un usuario del sistema si ya no debe tener acceso.
:::::
---

## Agregar usuarios
Para incorporar un nuevo usuario:

<p align="center">
![vista](/img/gestion/usuario/nuevo.gif)
</p>

1. Haz clic en el botón **“+”** en la parte superior derecha.
2. Se desplegará un modal donde podrá elegir entre invitación simple para invitar a un solo usuario o masiva 

### Invitar usuario
1. Completa los datos solicitados.
2.	Una vez creada la cuenta, se creará la cuenta con correo indicado, pero no será agregada a ningún grupo, razón por la cual es posible que no vea ningún asistente.

### Invitación masiva
Puede invitar a personas a unirse a su equipo introduciendo sus direcciones de correo electrónico a continuación o cargando un archivo CSV con su información. Recibirán una invitación por correo electrónico para unirse al equipo.

<Tabs>
<TabItem value="Masiva" label="Masiva" default>

![vista](/img/gestion/usuario/Invitacion_masiva.png)

1. Seleccione el o los equipo al que ingresarán las personas invitadas.
2. Introduzca las direcciones de correo electrónico de las personas a las que desea invitar, separe las entradas con una coma.
</TabItem>
  
<TabItem value="Cargararchivo" label="Cargar archivo">
Seleccionando esta opción, permite cargar un archivo ```.csv``` o ````.xlsx```` donde con una sola carga enviará invitación a todos los usuarios en el archivo.

![vista](/img/gestion/usuario/Invitacion_masiva2.png)

Si desea acá encontrar los formatos de muestra para este tipo de carga :
- **csv**
- **xlsx**
</TabItem>

<TabItem value="Agregar por lista" label="Agregar por lista">

![vista](/img/gestion/usuario/Invitacion_masiva3.png)

1. Seleccione el o los equipo al que ingresarán las personas invitadas.
2. Complete los datos solicitados de cada uno de los usuarios que desea invitar (Nombre, Email y Telefono).

</TabItem>

</Tabs>