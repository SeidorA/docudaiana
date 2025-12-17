---
title: Users
iconName: "user"
sidebar_position: 2
---
import {Banerimg} from '../../../Studio/efectsstudio.tsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Banerimg img="gestion/usuario/index.png" />
The **Users** section allows you to manage all registered accounts on the platform. From here, you can view, edit, delete, or invite new users, as well as manage their roles and access.

## User View

A list with the following information is displayed:
![User View](/img/gestion/usuario/vista.png)

- **Name**
- **Phone**
- **Email**
- **Role** (Custom, Admin, User, or Pending Invitation)
- **Available Actions** (edit or delete)


:::::info
Users with a pending invitation will appear marked as *"Invitation sent"* in the roles column.
:::::

---

## Actions

By clicking on the pencil icon, you can edit the following fields:

![Edit User](/img/gestion/usuario/editar.gif)


- Name
- User Role (Owner, Admin, User, Custom)
- Email
- Phone number
- Password

::::warning
You can also delete a user from the system if they should no longer have access.
:::::
---

## Add Users
To add a new user:

<p align="center">
![Add New User](/img/gestion/usuario/nuevo.gif)
</p>

1. Click the **"+"** button in the top right corner.
2. A modal will appear where you can choose between a simple invitation for a single user or a bulk invitation.

### Invite User
1. Fill in the requested data.
2. Once the account is created, it will be created with the indicated email, but it will not be added to any group, which is why you may not see any assistants.

### Bulk Invitation
You can invite people to join your team by entering their email addresses below or by uploading a CSV file with their information. They will receive an email invitation to join the team.

<Tabs>
<TabItem value="Bulk" label="Bulk" default>

![Bulk Invitation](/img/gestion/usuario/Invitacion_masiva.png)

1. Select the team(s) the invited people will join.
2. Enter the email addresses of the people you want to invite, separate entries with a comma.
</TabItem>
  
<TabItem value="UploadFile" label="Upload File">
Selecting this option allows you to upload a ```.csv``` or ````.xlsx```` file where a single upload will send invitations to all users in the file.

![Bulk Invitation Upload](/img/gestion/usuario/Invitacion_masiva2.png)

If you wish, here you can find sample formats for this type of upload:
- **csv**
- **xlsx**
</TabItem>

<TabItem value="AddByList" label="Add by List">

![Bulk Invitation List](/img/gestion/usuario/Invitacion_masiva3.png)

1. Select the team(s) the invited people will join.
2. Fill in the requested data for each user you wish to invite (Name, Email, and Phone).

</TabItem>

</Tabs>