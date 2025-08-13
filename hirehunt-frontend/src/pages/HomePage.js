import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import JobSearch from '../components/JobSearch';

const HomePage = ({ onSearch, error }) => {
  return (
    <>
      <WelcomeSection />
      <JobSearch onSearch={onSearch} />
      {error && (
        <div className="alert alert-danger text-center my-4">
          {error}
        </div>
      )}
    </>
  );
};

export default HomePage;
