import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import LandingPage from './LandingPage';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav className="navbar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" className="nav-logo">
              <img src="/logo.png" alt="PaperEval Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
              PaperEval
            </Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </nav>

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <footer>
          <div className="container">
            <p style={{ marginBottom: '16px' }}>© {new Date().getFullYear()} PaperEval. All rights reserved.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <Link to="/privacy-policy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
              <a href="mailto:learncas@gmail.com" style={{ color: 'var(--text-muted)' }}>Contact Support</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
