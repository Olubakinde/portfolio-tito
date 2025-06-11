import '../styles/IntroAnimation.css';
import { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="netflix-inspired-container" onClick={onComplete}>
      <div className="animated-background" />
      <div className="fog-overlay" />

      <div className="intro-content">
        <h1 className="intro-title" data-text="PROJECT INITIATED">PROJECT INITIATED</h1>
        <p className="intro-subtitle">SYSTEM CORE ONLINE</p>
        <button className="intro-button">ENTER SYSTEM</button>
      </div>
      <div className="intro-timer">{formatTime(elapsedTime)}</div>
    </div>
  );
};

export default IntroAnimation;
