---

title: Microsoft Teams
descripcion: "Guía paso a paso para crear la app “APP-Empresa” con pestaña personal"
iconName: "Teams"
useBrand: true
sidebar_position: 1
---


**Integracion de una aplicación personalizada en Microsoft Teams.**
En esta guía encontrara detalladamente los pasos para crear una aplicación personalizada en Microsoft Teams que incluya una pestaña personal que apunte a la URL de su asistente virtual Daiana.

## Crear la app

- Entrá a [dev.teams.microsoft](https://dev.teams.microsoft.com/)
- Clic en **Apps → + New app**.
- Completá:
    - Name: **APP-Empresa**.
    - Manifest version: Seleccioná Latest Stable (v1.23).

- Clic en **Create**.

--- 

## Completar información básica (obligatorio)
En el menú lateral, seleccioná **Basic information** y cargá los datos solicitados respetando el máximo de caracteres indicado:

- **Short name**: APP-Empresa.
- **Full name**: APP-Empresa esa Chat Integration.
- **Short description**: Accede a tu chatflow desde Teams.
- **Full description**: Esta aplicación permite interactuar con tu chatflow directamente en Microsoft Teams.

**Developer info**
- **Name**: SeidorAnalytics
- **Website URL**: https://www.seidoranalytics.com/daiana/
- **Privacy URL**: https://daiana-help.seidoranalytics.com/es/inicio/PoliticaDePrivacidad 
- **Terms of Use URL**: https://daiana-help.seidoranalytics.com/es/inicio/terminos_y_condiciones

:::tip
IMPORTANTE: Si no completás estas URLs, el manifiesto falla. Para pruebas podés usar https://example.com/....
:::

---

## Branding

1. Subí los íconos que representan gráficamente a este asistente:

   - Color icon: 192x192 px.
   - Outline icon: 32x32 px.

2. Elegí un color de acento **(Ej. #6264A7)**.


--- 

## Agregar la pestaña personal

1. Ir a App features → Add feature → Personal app.
2. Dentro de Personal app, agregá una tab:

   - Name: APP-Promesa.
   - Content URL: El link real de tu chatflow informad
   - como Shared Chatbot en la pantalla Embed in website or use as API ```(Ej. https://mi-chatflow.empresa.ai).```
   - Scope: team,groupChat,personal
3. Confirmá y guardá.

---

## Validar y probar

- Volvé al Dashboard.
- Clic en Preview in Teams.
- Si todo está cargado, la app se abrirá en Teams y mostrará tu chatflow.

--- 

## ¿Cuándo interviene el administrador de Teams?

- **Para pruebas personales**: No necesita intervención. Podés usar **Preview** in Teams hasta que estés conforme con el funcionamiento.
- **Para publicar en la organización:**:
  -  El administrador debe aprobar la app en el **Centro de administración de Teams.**
  -  Puede anclarla para todos los usuarios mediante **Setup Policies** dando acceso nominalmente y/o por grupos de usuarios.


---

## Guía para restringir una app en Teams a un grupo de usuarios

1. **Acceder al Centro de administración de Microsoft Teams**
    - Ir a https://admin.teams.microsoft.com.
    - Iniciar sesión con credenciales de administrador.

2. **Crear una directiva de permisos de aplicaciones**

    - En el menú lateral, ir a Aplicaciones > Directivas de permisos.
    - Hacer clic en Agregar para crear una nueva directiva.
    - Asignar un nombre descriptivo (por ejemplo: Acceso limitado a App X).

3. **Configurar la directiva**

    - En la sección Permitir aplicaciones personalizadas, seleccionar Permitir.
    - En Aplicaciones específicas permitidas, buscar tu app y agregarla.
    - Asegurarse de que otras apps no deseadas estén bloqueadas si es necesario.

4. **Asignar la directiva a usuarios específicos**

    - Ir a Usuarios en el Centro de administración.
    - Buscar cada usuario que debe tener acceso.
    - En su perfil, ir a Directiva de permisos de aplicaciones y asignar la nueva directiva creada.

:::tip
Si son muchos usuarios, se puede usar PowerShell para asignar la directiva en lote.
:::


5. **Verificar que la app esté publicada correctamente**
    - Asegurarse de que la app esté disponible en el catálogo de la organización.
    - Revisar que los scopes (team, groupChat, personal) estén correctamente definidos en el manifiesto.