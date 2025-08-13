import React, { useState } from 'react';
import { register } from '../api/authApi';

const SignupPage = ({ onSignupSuccess, setError, setView }) => {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const role = e.target.role.value;

    try {
      const { token, role: userRole } = await register({ email, password, role });
      onSignupSuccess(token, userRole);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
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
              <h2 className="h4 fw-bold mb-4 text-center text-dark">Create your HireHunt account</h2>

              <form onSubmit={handleSignup}>
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

                <div className="mb-3">
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

                <div className="mb-4">
                  <label htmlFor="role" className="form-label text-dark">Role</label>
                  <select name="role" id="role" className="form-select" defaultValue="ROLE_JOB_SEEKER">
                    <option value="ROLE_JOB_SEEKER">Job Seeker</option>
                    <option value="ROLE_RECRUITER">Recruiter</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? 'Creating account...' : 'Sign up'}
                </button>
              </form>

              <div className="mt-3 text-center small">
                <button type="button" className="btn btn-link p-0" onClick={() => setView('login')}>
                  Already have an account? Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
