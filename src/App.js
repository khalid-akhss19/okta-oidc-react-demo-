import React, { useState, useEffect } from "react";
import authClient from "./authClient";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import { oktaConfig } from "./oktaConfig";
import "./App.css";

function App() {
  const [tokens, setTokens] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Handle redirect callback
    if (window.location.pathname === "/login/callback") {
      authClient.token
        .parseFromUrl()
        .then((tokenResponse) => {
          authClient.tokenManager.setTokens(tokenResponse.tokens);
          setTokens(tokenResponse.tokens);
          authClient.token
            .getUserInfo(tokenResponse.tokens.accessToken)
            .then(setUserInfo)
            .catch((err) => setError(err.message));
          window.history.replaceState({}, document.title, "/");
        })
        .catch((err) => setError(err.message));
    }

    // Check for existing tokens
    authClient.tokenManager.getTokens().then((storedTokens) => {
      if (storedTokens.accessToken) {
        setTokens(storedTokens);
        authClient.token
          .getUserInfo(storedTokens.accessToken)
          .then(setUserInfo)
          .catch((err) => setError(err.message));
      }
    });
  }, []);

  const handleLogin = () => {
    authClient.token.getWithRedirect({
      scopes: oktaConfig.scopes,
    });
  };

  const handleLogout = () => {
    authClient.signOut().then(() => {
      setTokens(null);
      setUserInfo(null);
      authClient.tokenManager.clear();
    });
  };

  return (
    <div className="App">
      <h1>Okta OIDC React Demo</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!tokens ? (
        <Login onLogin={handleLogin} />
      ) : (
        <UserInfo
          userInfo={userInfo}
          tokens={tokens}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;