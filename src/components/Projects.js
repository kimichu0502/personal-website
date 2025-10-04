import React from 'react';

function Projects() {
  return (
    <div className="section">
      <div class="section-title">
        <h2>Projects</h2>
      </div>

      <div className="project">
        <h3  class="title-name2">Personal Website</h3>
        <div class="line-container2">
          <p class="location2">Web Development</p>
          <p class="place">September 2024</p>
        </div>
        <div class="description">
          <p>
            Independently developed a fully functional Minesweeper game in 
            Python using Tkinter: Implemented game logic, user interface, and interactive features.
            <br />Designed algorithms for bomb placement, adjacent cell number calculations, 
            and endgame scenarios, ensuring smooth gameplay and user experience.
          </p>
        </div>
      </div>

      <div className="project">
        <h3  class="title-name2">Kode with Klossy Participant</h3>
        <div class="line-container2">
          <p class="location2">Web Development</p>
          <p class="place">June 2022</p>
        </div>
        <div class="description">
          <p>
            Designed and developed a travel destination website using HTML, CSS, and JavaScript,
            showcasing top global destinations to enhance user engagement and interface design skills.
            <br />Gained hands-on experience with modern web development tools, resulting in an 
            understanding of full-stack web technologies.
          </p>
        </div>
      </div>

      <div className="project">
        <h3  class="title-name2">Minesweeper Game</h3>
        <div class="line-container2">
          <p class="location2">Game Development</p>
          <p class="place">May 2021</p>
        </div>
        <div class="description">
          <p>
            Independently developed a fully functional Minesweeper game in 
            Python using Tkinter: Implemented game logic, user interface, and interactive features.
            <br />Designed algorithms for bomb placement, adjacent cell number calculations, 
            and endgame scenarios, ensuring smooth gameplay and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
