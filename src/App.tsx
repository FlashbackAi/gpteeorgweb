import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CyberLoader } from './components/CyberLoader';
import { Home } from './pages/Home';
import { Nodes } from './pages/Nodes';
import { P2PNetwork } from './pages/P2PNetwork';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <CyberLoader onComplete={handleLoadComplete} duration={3500} />}
      <Router>
        <div
          className="noise-overlay"
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0a0a0f 0%, #12101a 50%, #0a0a0f 100%)',
            display: 'flex',
            flexDirection: 'column',
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.5s ease',
          }}
        >
          <Header />
          <main style={{ flex: 1, paddingTop: '0' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nodes" element={<Nodes />} />
              <Route path="/p2p-network" element={<P2PNetwork />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
