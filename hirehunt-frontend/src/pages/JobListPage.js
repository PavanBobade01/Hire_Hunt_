import React from 'react';
import JobCard from '../components/JobCard';

const JobListPage = ({ jobs, loading, error }) => {
  return (
    <div className="container py-5 fade-in">
      <h2 className="text-center mb-4">Available Jobs</h2>

      {/* Loading */}
      {loading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status" />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {/* Job Cards */}
      {!loading && !error && (
        <div className="row g-4">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div className="col-12 col-md-6 col-lg-4" key={job.id}>
                <JobCard job={job} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-muted fs-5 py-4">
              No jobs available.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListPage;
