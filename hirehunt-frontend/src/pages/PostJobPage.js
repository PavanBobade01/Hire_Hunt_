import React, { useState } from 'react';
import { createJob, fetchAllJobs } from '../api/jobsApi';

export default function PostJobPage({ token, setView, setError, setJobs }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    jobType: 'Full-Time', // default value
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const job = await createJob(formData, token);
      const updatedJobs = await fetchAllJobs();
      setJobs(updatedJobs);
      setView('jobs'); // Redirect to job list
    } catch (err) {
      setError('Failed to post job.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 fade-in">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm rounded-4 p-4">
            <h2 className="h4 fw-bold mb-4 text-center">Post a New Job</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Job Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="company" className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="form-control"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="jobType" className="form-label">Job Type</label>
                <select
                  name="jobType"
                  id="jobType"
                  className="form-select"
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                >
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? 'Posting...' : 'Post Job'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
