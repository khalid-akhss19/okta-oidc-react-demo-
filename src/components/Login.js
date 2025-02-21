import React from "react";

function Login({ onLogin }) {
  return (
    <div>
      <h2>Please Sign In</h2>
      <button onClick={onLogin}>Sign In with Okta</button>
    </div>
  );
}

export default Login;