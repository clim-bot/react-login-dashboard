import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import { useAuthContext } from '../context/AuthContext';

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthContext();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard</h2>
        <p>Here’s where you can manage your account and settings.</p>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Dashboard;
