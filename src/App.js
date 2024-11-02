import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { AuthProvider, useAuthContext } from './context/AuthContext';
import './styles/App.css';

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to the "/login" page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Define the login route */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Define the dashboard route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default function RootApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
