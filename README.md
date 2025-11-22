# Vue Basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Vue.js](https://vuejs.org/) apps in minutes. Use this repo with the [Vue quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=vue) to build and customize a new static site.

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Entra ID (Azure AD) authentication for Azure Static Web Apps

To enable Entra ID (Azure Active Directory) authentication when this app is deployed to Azure Static Web Apps, add an `auth` block to `staticwebapp.config.json` (already included in this repo). The Static Web App expects the client id and secret to be provided as application settings.

Needed application settings (configure these in your Static Web App -> Configuration):

- `AZURE_CLIENT_ID` — Application (client) ID from the registered app in Entra ID
- `AZURE_CLIENT_SECRET` — Client secret created for the app registration
- `AZURE_TENANT_ID` — Your tenant ID (used to construct the OpenID issuer)

When you register an app in Entra ID, set the redirect URI to:

```
https://<YOUR_STATIC_WEB_APP_NAME>.azurestaticapps.net/.auth/login/aad/callback
```

Replace `<YOUR_STATIC_WEB_APP_NAME>` with your Azure Static Web App hostname (or the production domain). The `staticwebapp.config.json` in this repo uses these setting names and a placeholder issuer URL `https://login.microsoftonline.com/<YOUR_TENANT_ID>/v2.0` — swap in your tenant ID or keep the placeholder and set `AZURE_TENANT_ID` in the Static Web App settings.

After configuring the app registration and application settings, users will be able to sign in with Entra ID when visiting protected routes (or you can add route rules in `staticwebapp.config.json` to require authentication).
