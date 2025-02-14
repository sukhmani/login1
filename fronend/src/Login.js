import React, { useState } from 'react';
import { login } from './api';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(username, password);
      console.log('Login successful:', data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login">
      <h2 style={{backgroundColor:'lightblue'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{backgroundColor:'blue', color:'white'}}>Login</button>
      </form>
    </div>
  );
};

export default Login;
