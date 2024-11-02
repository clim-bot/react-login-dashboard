import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/login" className="notfound-link">Go back to Login</Link>
    </div>
  );
}

export default NotFound;
