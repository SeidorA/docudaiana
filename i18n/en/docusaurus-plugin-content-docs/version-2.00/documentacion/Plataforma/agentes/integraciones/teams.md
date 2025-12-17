---
title: Microsoft Teams
iconName: "Teams"
useBrand: true
sidebar_position: 1
---


**Microsoft Teams Integration.**
In this guide, you will find detailed steps to integrate Daiana with Microsoft Teams.

## Prerequisites
- Microsoft 365 business account

## Configuring Microsoft Teams integration in Daiana
1. Go to virtual assistants, select the assistant you want to integrate with Microsoft Teams, and then edit the assistant.

2. Select the integrations tab and activate the option to integrate with Microsoft Teams.

The Microsoft Teams integration has the following configuration:

- **App Id**: The application identifier of the bot in Azure (obtained in the following steps)
- **App Password**: The application secret of the bot in Azure (obtained in the following steps)
- **App Tenant**: The identifier of the application owner. (Consult with your company's TEAMS administrator)
- **URL**: The URL to receive data in Daiana. (Automatically generated when activating the integration – this will be the Endpoint to create your bot in Teams)

You must provide the requested values by following the step-by-step instructions below; these are generated in point 2. Create the bot… / 4. Required fields.

## 1. Access the administration platform.
1. Open Microsoft Teams.
2. In the left menu, click "Apps".

![fix1.jpeg](/img/integraciones/teams/fix/fix1.jpeg)

3. If you don't have the Developer Portal app installed, follow these steps:
 - Search for "Developer Portal" in the search bar, select the application, and click "Add".

![fix2.jpeg](/img/integraciones/teams/fix/fix2.jpeg)

- Confirm the installation and return to the "Apps" section.

![fix2.jpeg](/img/integraciones/teams/fix/fix3.jpeg)
![fix2.jpeg](/img/integraciones/teams/fix/fix4.jpeg)

## 2. Create the bot from the Tools tab

1. Open Developer Portal.

![f5.jpeg](/img/integraciones/teams/fix/f5.jpeg)

2. Once inside Developer Portal, go to the "Tools" tab in the top menu.

![f6.jpeg](/img/integraciones/teams/fix/f6.jpeg)

3. Select the "Bot management" option and then "New Bot".

![f7.jpeg](/img/integraciones/teams/fix/f7.jpeg)
![f8.jpeg](/img/integraciones/teams/fix/f8.jpeg)

4. Fill in the following required fields:
- Give your bot a name and then click "add".

![f9.jpeg](/img/integraciones/teams/fix/f9.jpeg)

You will see something like this:

![f10.jpeg](/img/integraciones/teams/fix/f10.jpeg)

- Note or copy the generated Bot ID, which is required in Daiana's configuration as "App ID".
- Select the created bot and configure the Endpoint you obtained in Daiana's configuration as the URL.

![f11.jpeg](/img/integraciones/teams/fix/f11.jpeg)

- Now click on "Client secrets" to generate the password, then click on "Add a client secret for your bot".

![f12.jpeg](/img/integraciones/teams/fix/f12.jpeg)

- Make sure to copy and save this key as it is required in Daiana's configuration as "App Password". Finish by clicking "Ok".

![f13.jpeg](/img/integraciones/teams/fix/f13.jpeg)

## 3. Create a new application

1. There are two ways to do this: by clicking "Home" or "Apps".
- **Option 1 (Home)**:

![g1.jpeg](/img/integraciones/teams/fix/g1.jpeg)
- Click "Create app".

- **Option 2 (Apps)**:

![g2.jpeg](/img/integraciones/teams/fix/g2.jpeg)
- Click "New app".
- Enter a name for the application (Example: "MyBot").

1. Press "Add" to continue.
2. In the left-hand menu of the application, go to the App features page in the Configure section and then click "Bot".

![g2.jpeg](/img/integraciones/teams/fix/g3.jpeg)

1. Select the bot created in the previous step from the dropdown menu. Check the desired scopes: Personal, Teams, Group Chat.

![g2.jpeg](/img/integraciones/teams/fix/g4.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g5.jpeg)

5. Fill in all required fields on the Basic information page in the Configure section.

![g2.jpeg](/img/integraciones/teams/fix/g6.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g7.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g8.jpeg)

6. In the **Branding** option, you can configure a logo for your application.

![g2.jpeg](/img/integraciones/teams/fix/g9.jpeg)

7. Click Publish, then Publish to your organization. Now wait or consult with the Teams administrator to authorize the application. For more information, click [here](https://learn.microsoft.com/es-mx/MicrosoftTeams/manage-apps).

![g2.jpeg](/img/integraciones/teams/fix/g10.jpeg)
![g2.jpeg](/img/integraciones/teams/fix/g11.jpeg)

8. Go to the Teams app store, search for the application, and add it.
9. The bot is now available in the App section for all members of your organization!
