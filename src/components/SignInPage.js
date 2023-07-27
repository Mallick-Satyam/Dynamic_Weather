import React, { useState } from 'react';
import './SignInPage.css';
import DashboardPage from './DashboardPage';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    if (username === 'Celebal' && password === '12345') {
      setError('');
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    
<div className="signin-container">
      {isLoggedIn ? (
        <DashboardPage onSignOut={handleSignOut} />
      ) : (
        
        <div className="signin-form">
          <h1 className="signin-heading">Sign In</h1>
          <div className="signin-input-container">
            <label>Username</label>
            <input
            placeholder='Type Celebal'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signin-input-container">
            <label>Password</label>
            <input
              placeholder='12345'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="signin-error">{error}</p>}
          <button className="signin-button" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      )}
    </div>
    
    
  );
};

export default SignInPage;
