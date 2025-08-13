import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import JobListPage from './pages/JobListPage';
import PostJobPage from './pages/PostJobPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CompanyReviewPage from "./pages/CompanyReviewPage";
import { fetchAllJobs } from './api/jobsApi';

axios.defaults.baseURL = 'http://localhost:8080';

export default function App() {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [view, setView] = useState('home');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('userRole');
    if (storedToken) {
      setToken(storedToken);
      setUserRole(storedRole);
    }
  }, []);

  const handleLoginSuccess = (newToken, role) => {
    setToken(newToken);
    setUserRole(role);
    localStorage.setItem('token', newToken);
    localStorage.setItem('userRole', role);
    setView('home');
  };

  const handleSignupSuccess = (newToken, role) => {
    setToken(newToken);
    setUserRole(role);
    localStorage.setItem('token', newToken);
    localStorage.setItem('userRole', role);
    setView('home');
  };

  const handleLogout = () => {
    setToken(null);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setView('home');
  };

  const handleJobSearch = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const fetchedJobs = await fetchAllJobs(params);
      setJobs(fetchedJobs);
      setView('jobs');
    } catch (err) {
      setError('Failed to fetch jobs.');
    } finally {
      setLoading(false);
    }
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomePage setView={setView} onSearch={handleJobSearch} />;
      case 'jobs':
        return <JobListPage jobs={jobs} loading={loading} error={error} />;
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} setError={setError} setView={setView} />;
      case 'signup':
        return <SignupPage onSignupSuccess={handleSignupSuccess} setError={setError} setView={setView} />;
      case 'postJob':
        return <PostJobPage token={token} setView={setView} setError={setError} setJobs={setJobs} />;
      case 'companyReviews':
        return <CompanyReviewPage token={token} />;
      default:
        return <HomePage setView={setView} onSearch={handleJobSearch} />;
    }
  };

  return (
    <Layout token={token} userRole={userRole} handleLogout={handleLogout} setView={setView}>
      <div className="container my-4">
        {renderView()}
      </div>
    </Layout>
  );
}
