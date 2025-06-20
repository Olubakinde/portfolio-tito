import React from 'react';
import './Footer.css';

const links = [
  { href: 'mailto:olubakindetito@gmail.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/oluwatito-promise-olubakinde-43ab702a9/', label: 'LinkedIn' },
  { href: 'https://github.com/Olubakinde', label: 'GitHub' },
];

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer-container">
      <div className="footer-content">
        {/* Header section */}
        <div className="footer-header">
          <h3 className="footer-title">Let's Connect</h3>
          <div className="footer-divider"></div>
        </div>

        {/* Links section */}
        <div className="footer-links">
          {links.map(({ href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span className="link-text">{label}</span>
              <div className="underline"></div>
            </a>
          ))}
        </div>

        {/* Animated separator */}
        <div className="footer-separator">
          <div className="footer-dots">
            <div className="footer-dot"></div>
            <div className="footer-dot"></div>
            <div className="footer-dot"></div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="footer-copyright">
          <p className="footer-copyright-text">
            <span className="footer-copyright-symbol">©</span>
            <span className="footer-year">{new Date().getFullYear()}</span>
            <span className="footer-separator-dot">•</span>
            <span className="footer-name">Oluwatito O.</span>
          </p>
          <p className="footer-tagline">Crafted with precision</p>
        </div>

        {/* Floating decorative elements */}
        <div className="footer-float-1"></div>
        <div className="footer-float-2"></div>
        <div className="footer-float-3"></div>
      </div>
    </div>
  </footer>
);

export default Footer;