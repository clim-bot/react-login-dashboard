import React from 'react';
import { useAuth } from '../hooks/useAuth';
import '../styles/Dashboard.css';

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <p>Here’s where you can manage your account and settings.</p>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}

export default Dashboard;
