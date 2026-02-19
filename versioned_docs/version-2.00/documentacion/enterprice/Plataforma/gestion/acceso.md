---
title: Métodos de acceso 
iconName: "lock"
sidebar_position: 4
---
import {Banerimg} from '../../../Studio/efectsstudio.tsx'

<Banerimg img="gestion/acceso/index.png" />

En la pestaña **Acceso**, los administradores pueden definir los métodos de autenticación disponibles para los usuarios que acceden a la plataforma Daiana.

Esta sección permite establecer políticas de seguridad y definir cómo ingresarán los usuarios al entorno.

## Métodos de acceso disponibles

Los administradores pueden habilitar uno o ambos de los siguientes métodos de acceso:

![listado](/img/gestion/acceso/sso.png)

- **Correo electrónico y contraseña:** acceso tradicional mediante credenciales locales.
- **Inicio de sesión con Google (SSO):** autenticación mediante cuenta de Google corporativa o personal.

:::::info
El método de inicio de sesión seleccionado afectará a todos los usuarios registrados
:::::



---

## Opciones adicionales

También pueden habilitarse las siguientes funcionalidades complementarias:

![listado](/img/gestion/acceso/oppcion.png)

- **Permitir creación de cuentas:** los usuarios pueden registrarse por sí mismos mediante el formulario de registro, sin necesidad de invitación.
- **Permitir restaurar contraseña:** opción visible en la pantalla de login que permite a los usuarios recuperar el acceso en caso de olvido.

:::::tip
Estas configuraciones son especialmente útiles para organizaciones con estructuras abiertas o en entornos de prueba.
:::::