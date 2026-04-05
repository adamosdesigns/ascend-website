import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AccessibilityMenu from './components/AccessibilityMenu';
import HomePage from './pages/HomePage';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#020617] to-[#0f172a] text-[#f8fafc] font-sans selection:bg-[#3b82f6]/30 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none z-0"></div>

      <Navbar />

      <main className="relative z-10 flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <AccessibilityMenu />
    </div>
  );
}
