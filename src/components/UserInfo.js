import React from "react";

function UserInfo({ userInfo, tokens, onLogout }) {
  return (
    <div>
      <h2>Authentication Successful!</h2>
      {userInfo && (
        <>
          <p>
            <strong>Email:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Name:</strong> {userInfo.name || "N/A"}
          </p>
        </>
      )}
      <p>
        <strong>Access Token:</strong> {tokens.accessToken.accessToken}
      </p>
      <p>
        <strong>ID Token:</strong> {tokens.idToken.idToken}
      </p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserInfo;