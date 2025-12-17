---
title : "WhatsApp"
iconName: "Whatsapp"
useBrand: true
---


## **Introduction**

A **webhook** is a mechanism that allows automatic notifications to be received on a server when certain events occur on an external platform. In this case, we will create a webhook for WhatsApp that will receive incoming messages and events from the **Meta WhatsApp Cloud API.**


This guide covers the following aspects:
- Webhook creation and configuration

## Prerequisites

Before you begin, make sure you have:
- A Meta for Developers account, more instructions [here](https://developers.facebook.com/docs/development/register)
- A Meta Business Suite account to configure the webhook [link](https://business.facebook.com/)
- A new phone line or one that has not been used on WhatsApp.

## Webhook Configuration in Meta
### Creating a Business Portfolio

1. Go to [Meta Business Suite](https://business.facebook.com/)
2. Follow the instructions to create one. If you want to create a new one, follow these steps:
a. Click on the box below "Home" and then on **Create a business portfolio.**
![a.png](/img/integraciones/whatsapp/a.png)
b. Fill in the requested data in the form and click "Create".
![a.png](/img/integraciones/whatsapp/b.png)
c. Click **Next.**
![a.png](/img/integraciones/whatsapp/c.png)
d. Click **Next.**
![a.png](/img/integraciones/whatsapp/d.png)
e. Click **Confirm.**
![a.png](/img/integraciones/whatsapp/e.png)

### Creating an App in Meta Developers

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Select "My Apps" and then "Create App".
![1a.png](/img/integraciones/whatsapp/1a.png)
3. Follow the step-by-step guide
a. Give the application a name
![1a.png](/img/integraciones/whatsapp/1b.png)
b. Select "Other" for use cases
![1a.png](/img/integraciones/whatsapp/1c.png)
c. Select **Business**
![1a.png](/img/integraciones/whatsapp/1d.png)
d. Here you must select the business portfolio created previously. **Click "Create App".**
![1a.png](/img/integraciones/whatsapp/1e.png)

4. Go to the WhatsApp section
a. WhatsApp click "Set up"
![1a.png](/img/integraciones/whatsapp/1.png)
If you have a Meta Business Account (MBA), you will be prompted to attach it when you add the WhatsApp product to your app. If you don't have an MBA, you'll need to follow instructions to help you create one. Once you attach the MBA to your app, you'll be ready to start testing.
b. Select **Continue**
![1a.png](/img/integraciones/whatsapp/1g.png)

c. Click **Get Started with the API**
![1a.png](/img/integraciones/whatsapp/1h.png)

d. Click "Generate access token" and follow the steps to log in and obtain a temporary token.
![1a.png](/img/integraciones/whatsapp/1i.png)
e. Add a phone number to test the connection with the server, and follow the steps in the images.
![1a.png](/img/integraciones/whatsapp/1j.png)

f. Change to your country's prefix and enter the number you will use for the test.
![1a.png](/img/integraciones/whatsapp/1q.png)

g. Enter the verification code received on your mobile.
![1a.png](/img/integraciones/whatsapp/1k.png)

h. Click **Send message**, you should receive a test message on your **WhatsApp**.
![1a.png](/img/integraciones/whatsapp/1l.png)


## Webhook Configuration
1. In step 3, click **Configure webhooks**.
![2a.png](/img/integraciones/whatsapp/2a.png)
2. You will see a page like this
![2a.png](/img/integraciones/whatsapp/2b.png)

3. It's time to generate a permanent token that you must add to the DAIANA configuration. More information [click here.](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#business-integration-system-user-access-tokens)

To generate a system token, access the [Business Settings](https://business.facebook.com/business/loginpage/?next=https%3A%2F%2Fbusiness.facebook.com%2Fsettings%2F) dashboard, select the created business, and click "System Users":

![2a.png](/img/integraciones/whatsapp/2c.png)

Click the "+Add" button, and when the "Create System User" window appears, enter a system user name and assign it the "Admin" or "Employee" role:
![2a.png](/img/integraciones/whatsapp/2d.png)

Once the system admin user has been created, it will appear in the list of system users. Click on the system user's name to display the asset assignment overlay.
![2e.png](/img/integraciones/whatsapp/2e.png)
![2e.png](/img/integraciones/whatsapp/2f.png)

Click the "Assign Assets" button to display the **Select Assets and Assign Permissions** window:
![2e.png](/img/integraciones/whatsapp/2g.png)

Select your app and grant your system user the **Manage app** permission. Then, click the "Assign Assets" button to confirm and close the window.

Once back in the System Users panel, reload the page to confirm that your system user has been granted "Full Control" permission for your app. It may take a while for permissions to be granted, so wait a few minutes and reload the page if your app does not appear as an assigned asset. When the asset has been assigned, it should look like this:

![2e.png](/img/integraciones/whatsapp/2h.png)

When you see that your system user has been granted full control of your app, in the asset assignment overlay, click the "Generate Token" button. In the window that appears, select your app, choose a token expiration preference, and assign your app these three Graph API permissions:

- business_management
- whatsapp_business_management
- whatsapp_business_messaging

You can search for "business" to find these permissions quickly:
![2e.png](/img/integraciones/whatsapp/2i.png)


4. Add your server's URL, which you will find in DAIANA's configuration (for example, https://yourdomain.com/webhook)
5. Enter the VERIFY_TOKEN defined in DAIANA's configuration

    By now, you should have the three required data points in DAIANA's configuration for its operation: the phone number identifier (step 4.a), the token created earlier (steps 3.2-3), and the VERIFY_TOKEN (key of your preference) which must be the same in both. Click "Verify and Save".

![2e.png](/img/integraciones/whatsapp/2j.png)

6. Select the events you want to receive (messages, statuses, etc.)
![2e.png](/img/integraciones/whatsapp/2q.png)
Up to this point, we have only configured the development mode of the application. To move it to production, you must add a real phone number; follow the instructions in this [link.](https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers)

![2e.png](/img/integraciones/whatsapp/2k.png)
![2e.png](/img/integraciones/whatsapp/2l.png)
Finally, you must change the app mode from "Development" to "Live" at the top.

![2l.png](/img/integraciones/whatsapp/2m.png)
