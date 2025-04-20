import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Counselor from './pages/Counselor';
import Client from './pages/Client';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<Admin />} />
        <Route path="/admin/reports" element={<Admin />} />
        <Route path="/admin/settings" element={<Admin />} />
        <Route path="/counselor" element={<Counselor />} />
        <Route path="/client" element={<Client />} />
        <Route path="/about-us" element={<Navigate to="/#about-us" replace />} />
        <Route path="/contact-us" element={<Navigate to="/#contact-us" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;