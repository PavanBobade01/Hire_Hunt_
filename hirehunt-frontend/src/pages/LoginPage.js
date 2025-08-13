import React, { useState } from 'react';
import { login } from '../api/authApi';

const LoginPage = ({ onLoginSuccess, setError, setView }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    try {
      const { token, role } = await login({ email, password });
      onLoginSuccess(token, role);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container fade-in py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow rounded-4">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-4 text-center text-dark">Sign in to HireHunt</h2>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label text-dark">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="form-control"
                    placeholder="••••••••"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </form>

              <div className="mt-3 text-center small">
                <button type="button" className="btn btn-link p-0" onClick={() => setView('signup')}>
                  New to HireHunt? Create an account
                </button>
              </div>

              <div className="mt-1 text-center small">
                <button type="button" className="btn btn-link p-0">Forgot password?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
