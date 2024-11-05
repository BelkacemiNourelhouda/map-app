import React, { useState } from 'react';
import './Loginp.css';

async function loginUser(credentials) {
  const response = await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    throw new Error('Invalid credentials');
  }
  
  return response.json();
}

export default function Loginp({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error messages

    try {
      const { token } = await loginUser({ username, password });
      setToken({ token, username }); // Save the token if login succeeds
    } catch (err) {
      setError(err.message); // Display error if login fails
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            className="username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            className="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button className="btnsubmit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
