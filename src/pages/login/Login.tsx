import React, { useState } from 'react';
import { useStore } from '../../zustand/store';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await login(username, password);
    if (token) navigate('/');
  };

  return (
    <div className="plain-login-wrapper">
      <form className="plain-login-form" onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <div className="input-group">
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="input-group">
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <span className="error-text">{error}</span>}
      </form>
    </div>
  );
};

export default React.memo(Login);
