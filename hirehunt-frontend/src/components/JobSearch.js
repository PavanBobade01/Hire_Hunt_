import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

export default function JobSearch({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ keyword, location });
  };

  return (
    <div className="container my-5">
      <form className="row g-2 align-items-center justify-content-center shadow-sm p-3 bg-white rounded" onSubmit={handleSubmit}>
        <div className="col-md-4 d-flex align-items-center">
          <FaSearch className="me-2 text-muted" />
          <input
            type="text"
            className="form-control"
            placeholder="Job title, keywords, or company"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <FaMapMarkerAlt className="me-2 text-muted" />
          <input
            type="text"
            className="form-control"
            placeholder='City, state, zip code, or "remote"'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md-2 d-grid">
          <button className="btn btn-primary" type="submit">
            Find jobs
          </button>
        </div>
      </form>
    </div>
  );
}
