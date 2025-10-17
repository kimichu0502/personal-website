import React, { useState } from 'react';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import './App.css';

  function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    const handleNavClick = (e, targetId) => {
      e.preventDefault();
      closeMenu();
      
      // Small delay to ensure menu closes before scrolling
      setTimeout(() => {
        // Get the target element
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Calculate offset based on screen size
          let offset = 70; // Default desktop navbar height
          
          if (window.innerWidth <= 320) {
            offset = 40; // Very small mobile
          } else if (window.innerWidth <= 480) {
            offset = 45; // Mobile
          } else if (window.innerWidth <= 768) {
            offset = 50; // Tablet
          }
          
          // Get the element's position relative to the viewport
          const elementPosition = targetElement.getBoundingClientRect().top;
          // Calculate the absolute position from the top of the document
          const absolutePosition = elementPosition + window.pageYOffset;
          // Apply the offset to account for the fixed navbar
          const scrollPosition = absolutePosition - offset;
          
          // Smooth scroll to the calculated position
          window.scrollTo({
            top: Math.max(0, scrollPosition), // Ensure we don't scroll to negative position
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure menu animation completes
    };

    return (
      <div className="App">
        <div className="wrapper">
          <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-name">
                <a href="#header" onClick={(e) => handleNavClick(e, 'header')}>Yi-An Chu</a>
              </div>
              
              <div className="hamburger" onClick={toggleMenu}>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              </div>
              
              <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
                <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
                <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
                <li><a href="#leadership" onClick={(e) => handleNavClick(e, 'leadership')}>Leadership</a></li>
              </ul>
            </div>
          </nav>

          {/* Main Section with Background Grid and Faded Text */}
          <header id="header" className="main-page-background">
            <div className="main-content">
              <h1 className="hero-name yellowtail-regular">Yi-An Chu</h1> {/* Name */}
              <p className="hero-title">Computer Science</p> {/* Subtitle */}
            </div>
          </header>

          <section id="education">
            <Education />
          </section>

          <hr />
          
          <section id="skills">
            <Skills />
          </section>

          <hr />

          <section id="projects">
            <Projects />
          </section>

          <hr />

          <section id="experience">
            <Experience />
          </section>

          <hr />

          <section id="leadership">
            <Leadership />
          </section>

          <footer className="footer-section">
            <h2>Let's Connect!</h2>
            <ul className="footer-links">
              <li><a href="https://github.com/kimichu0502" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/yi-an-chu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:yian.chu@mail.utoronto.ca">Email</a></li>
            </ul>
            <p className="footer-copyright">&copy; 2024 Yi-An Chu. </p>
          </footer>
        </div>
      </div>
  );
}

export default App;
