import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero-root">
      {/* Header */}
      <header className="hero-header">
        <div className="hero-avatar">OA</div>
        <nav className="hero-nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero-main">
        <h1 className="hero-title">
          <span className="typewriter-text">&gt; Oluwatito O.</span>
          <span className="block-cursor">█</span>
        </h1>

        <div className="hero-tagline">Building creative digital experiences.</div>
        <div className="hero-accent-bar" />
    
        <p className="hero-description">
        I’m a computer science student at the University of Delaware who thrives on transforming ideas into simple, elegant experiences. Curious by nature, I love tinkering with code, picking up new hobbies, or organizing events that bring people together. As a Resident Assistant, I get to build community and support students from all walks of life—and when I’m off duty, you’ll find me grabbing coffee with friends or lost in a good sci-fi movie. <br /> <br /> <span className="hero-description-accent">P.S | If life were a graph, I'd be Dijkstra's favored node.</span>
        </p>
      </main>
    </div>
  );
};

export default Hero;
