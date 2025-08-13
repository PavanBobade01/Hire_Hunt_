import React from 'react';
import illustration from '../assets/team-illustration.jpg'; // Replace with your actual image path

export default function WelcomeSection() {
  return (
    <section className="text-center py-5 bg-light">
      <div className="container">
       <img
         src={illustration}
         alt="People working together illustration"
         className="img-fluid mb-4"
         style={{ maxHeight: 350, width: '100%' }} // or width: 400 for fixed width
       />


        <h2 className="fw-bold">Welcome to HireHunt!</h2>
        <p className="lead mb-4">
          Create an account or sign in to see your personalised job recommendations.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-primary btn-lg">Get Started →</button>
          <a href="#" className="btn btn-outline-secondary btn-lg">Post your resume</a>
        </div>

        <div className="mt-4 text-muted small">Indeed हिंदी में भी उपलब्ध है</div>

        <div className="mt-2">
          <a href="#" className="text-decoration-none">What's trending on HireHunt ▾</a>
        </div>
      </div>
    </section>
  );
}
