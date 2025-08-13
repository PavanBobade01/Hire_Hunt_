import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const AuthContainer = () => {
  const [view, setView] = useState('login'); // or 'signup'
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState({ token: null, role: null });

  const onLoginSuccess = (token, role) => {
    setAuth({ token, role });
    setError(null);
    // TODO: Redirect to dashboard or another page if you use routing
  };

  const onSignupSuccess = (token, role) => {
    setAuth({ token, role });
    setError(null);
    // TODO: Redirect to dashboard or another page if you use routing
  };

  if (auth.token) {
    return (
      <div className="container py-5">
        <h3>Welcome! You are logged in as <strong>{auth.role}</strong>.</h3>
        {/* Add a logout button or redirect logic here */}
      </div>
    );
  }

  return (
    <div>
      {view === 'login' && (
        <LoginPage onLoginSuccess={onLoginSuccess} setError={setError} setView={setView} />
      )}
      {view === 'signup' && (
        <SignupPage onSignupSuccess={onSignupSuccess} setError={setError} setView={setView} />
      )}
      {error && (
        <div className="alert alert-danger text-center mt-3" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default AuthContainer;
