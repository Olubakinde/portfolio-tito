import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import TerminalPage from './components/TerminalPage';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Remove hash from URL on load
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  if (showIntro) {
    return (
      <div className="app">
        <IntroAnimation onComplete={() => {
          setShowIntro(false);
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname);
            window.scrollTo({ top: 0, behavior: 'auto' });
          }, 50); // 50ms delay
        }} />
      </div>
    );
  }

  return (
    <div className="app">
      <Hero />
      <TerminalPage />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
