---
title: Access Methods
iconName: "lock"
sidebar_position: 4
---
import {Banerimg} from '../../../Studio/efectsstudio.tsx'

<Banerimg img="gestion/acceso/index.png" />

In the **Access** tab, administrators can define the authentication methods available for users accessing the Daiana platform.

This section allows setting security policies and defining how users will enter the environment.

## Available Access Methods

Administrators can enable one or both of the following access methods:

![listado](/img/gestion/acceso/sso.png)

- **Email and password:** Traditional access using local credentials.
- **Login with Google (SSO):** Authentication using a corporate or personal Google account.

:::::info
The selected login method will affect all registered users.
:::::

---

## Additional Options

The following complementary functionalities can also be enabled:

![listado](/img/gestion/acceso/oppcion.png)

- **Allow account creation:** Users can register themselves using the registration form, without needing an invitation.
- **Allow password reset:** Option visible on the login screen that allows users to regain access if they forget their password.

:::::tip
These configurations are especially useful for organizations with open structures or in testing environments.
:::::