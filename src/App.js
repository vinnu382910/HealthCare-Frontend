// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SearchBarSection from './components/SearchBarSection';
import HomePage from './pages/HomePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import './App.css';

// Custom wrapper to use useLocation outside Router
const AppContent = () => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const showSearchBar = location.pathname === '/';

  return (
    <>
      <Header />
      {showSearchBar && <SearchBarSection query={query} setQuery={setQuery} />}
      <Routes>
        <Route path="/" element={<HomePage query={query} />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/appointments" element={<div>Your Appointments (Coming Soon)</div>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
