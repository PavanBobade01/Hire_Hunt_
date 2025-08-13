import React from 'react';
import Header from '../components/Header';

const Layout = ({ children, token, userRole, handleLogout, setView }) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header
        token={token}
        userRole={userRole}
        handleLogout={handleLogout}
        setView={setView}
      />

      <main className="flex-grow-1 py-4">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="bg-white text-center py-3 border-top small text-muted">
        © {new Date().getFullYear()} HireHunt. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
