import React from 'react';
import { LogIn, LogOut } from 'lucide-react';

const Header = ({ token, userRole, handleLogout, setView }) => {
  return (
    <header className="bg-white border-bottom shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Left: Logo and Navigation */}
        <div className="d-flex align-items-center gap-4">
          {/* Logo */}
          <h1
            onClick={() => setView('home')}
            className="m-0 text-primary brand-logo"
          >
            HIRE<span className="text-dark">_HUNT</span>
          </h1>

          {/* Main Navigation */}
          <nav className="d-flex align-items-center gap-3">
            {[
              { label: 'Home', view: 'home' },
              { label: 'Company reviews', view: 'companyReviews'  }
            ].map(({ label, view }) => (
              <button
                key={view}
                onClick={() => setView(view)}
                className="btn btn-link text-dark p-0 nav-anim text-decoration-none"
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => setView('salaries')}
              className="btn btn-salary-guide"
            >
              Salary guide
            </button>
          </nav>
        </div>

        {/* Right: Auth & Post Job */}
        <div className="d-flex align-items-center gap-3">
          {token ? (
            <>
              <button
                onClick={handleLogout}
                className="btn btn-link text-primary fw-semibold p-0 nav-anim"
              >
                <LogOut size={16} className="me-1" /> Logout
              </button>
              {userRole === 'ROLE_RECRUITER' && (
                <button
                  onClick={() => setView('postJob')}
                  className="btn btn-link text-dark border-start ps-3 nav-anim"
                >
                  Employers / Post Job
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={() => setView('login')}
                className="btn btn-link text-primary fw-semibold p-0 nav-anim"
              >
                <LogIn size={16} className="me-1" /> Sign in
              </button>
              <button
                onClick={() => setView('postJob')}
                className="btn btn-link text-dark border-start ps-3 nav-anim"
              >
                Employers / Post Job
              </button>
            </>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .brand-logo {
          font-size: 1.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-anim {
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .nav-anim:hover {
          color: #0d6efd !important;
          transform: translateY(-2px);
        }

//        .btn-salary-guide {
//          background: linear-gradient(to right, #0d6efd, #6610f2);
//          color: white;
//          border: none;
//          font-weight: 600;
//          padding: 0.45rem 1.3rem;
//          font-size: 0.95rem;
//          border-radius: 9999px;
//          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//          transition: all 0.3s ease;
//        }

        .btn-salary-guide:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        .btn-salary-guide:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </header>
  );
};

export default Header;
