// src/Learn.js
import React from 'react';

function Learn({ user, signOut }) {
  return (
    <div>
      <h1>Welcome to the Learn Page</h1>
      <p>This is the page you see after logging in.</p>
      <h1>Welcome, {user.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Learn;