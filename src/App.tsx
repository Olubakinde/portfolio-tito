import { useState } from 'react'
import './App.css'
import IntroAnimation from './components/IntroAnimation'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="app">
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="portfolio">
          <header className="header">
            <h1>Your Name</h1>
            <nav>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <section id="about" className="section">
            <h2>About Me</h2>
            <p>Your compelling introduction goes here...</p>
          </section>

          <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
              {/* Add your project cards here */}
            </div>
          </section>

          <section id="contact" className="section">
            <h2>Contact</h2>
            <div className="contact-info">
              {/* Add your contact information here */}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
