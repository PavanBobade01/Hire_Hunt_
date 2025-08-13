import React from 'react';
import { Briefcase } from 'lucide-react';

const JobCard = ({ job }) => {
  const shortDescription = job.description.length > 150
    ? job.description.slice(0, 150) + '...'
    : job.description;

  return (
    <div className="card shadow-sm border rounded-4 h-100">
      <div className="card-body p-4">
        {/* Job Title */}
        <h5 className="card-title fw-bold text-dark mb-1">
          {job.title}
        </h5>

        {/* Company Name */}
        <p className="mb-1 text-muted">{job.company}</p>

        {/* Job Type and Location */}
        <p className="text-secondary mb-3 d-flex align-items-center">
          <Briefcase size={16} className="me-2 text-muted" />
          {job.jobType} &nbsp;–&nbsp; {job.location}
        </p>

        {/* Short Description */}
        <p className="card-text text-muted small">{shortDescription}</p>

        {/* Footer */}
        <div className="d-flex justify-content-between align-items-center mt-4 text-muted small">
          <span>
            <strong>Salary:</strong> ${job.salaryRange}
          </span>
          <span>
            <strong>Posted:</strong> {new Date(job.postedDate).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
