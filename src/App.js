import React from 'react';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import './App.css';

  function App() {
    return (
      <div className="App">
        <div className="wrapper">
          <nav className="navbar">
            <ul className="navbar-links">
              <li className="navbar-name">
                <a href="#header">Yi-An Chu</a> {/* Name on the top left */}
              </li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#leadership">Leadership</a></li>
            </ul>
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
