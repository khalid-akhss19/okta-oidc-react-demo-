# Okta OIDC React Demo

This is a simple React application demonstrating OpenID Connect (OIDC) authentication with Okta using the `@okta/okta-auth-js` library. The app allows users to sign in via Okta’s hosted login page and displays user information (email, name, access token, and ID token) upon successful authentication.

## Features
- Sign in with Okta using OIDC and PKCE (Proof Key for Code Exchange).
- Redirect-based authentication flow.
- Display authenticated user details (email, name, tokens).
- Logout functionality.
- Built with React and React Router.

## Prerequisites
- **Node.js**: Version 14.x or higher (includes npm).
- **Okta Developer Account**: You need an Okta organization and an application configured (see [Okta Setup](#okta-setup)).
- **Git**: To clone or push this repository.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/khalid-akhss19/okta-oidc-react-demo-
cd okta-oidc-react-demo


### 2. Install Dependencies
```bash
npm install

### 3. Configure Okta
#Create a file src/oktaConfig.js with your Okta application settings:
```bash
export const oktaConfig = {
  issuer: "https://<your-okta-domain>.okta.com/oauth2/default",
  clientId: "<your-client-id>",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
};

# Replace <your-okta-domain> and <your-client-id> with your Okta values (e.g., dev-70205164 and 0oangfe2s1BIluTWM5d7).

### 4. Run the Application
```bash
npm start

# The app will start at http://localhost:3000.

### Usage
## Sign In:
* Open http://localhost:3000 in your browser.
* Click "Sign In with Okta" to redirect to Okta’s login page.
* Enter your Okta credentials.
## View User Info:
- After successful login, you’ll be redirected back to the app, and it will display:
* Email
* Name (if available)
* Access Token
* ID Token
## Logout:
- Click the "Logout" button to clear tokens and return to the sign-in screen.


### Project Structure
```bash
okta-oidc-react-demo/
├── src/
│   ├── components/
│   │   ├── Login.js        # Sign-in button component
│   │   └── UserInfo.js     # User info display component
│   ├── App.js             # Main app logic
│   ├── authClient.js      # OktaAuth client setup
│   ├── oktaConfig.js      # Okta configuration
│   ├── App.css            # Basic styling
│   └── index.js           # Entry point with React Router
├── package.json           # Dependencies and scripts
└── README.md              # This file

### Okta Setup
#Create an Okta Application:
* Log in to your Okta Admin Console (https://<your-okta-domain>.okta.com).
* Go to Applications > Create App Integration:
-Choose "OIDC - OpenID Connect" and "Single-Page Application (SPA)".
-Set "Login redirect URIs" to http://localhost:3000/login/callback.
-Enable "Authorization Code" grant type.
* Save and note the Client ID.


### Contributing
Feel free to fork this repository, submit issues, or create pull requests!
