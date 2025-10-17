import React from 'react';

function Projects() {
  return (
    <div className="section">
      <div class="section-title">
        <h2>Projects</h2>
      </div>

      <div className="project">
        <h3  class="title-name2">Pitch It Perfect (ConUHacks 2025)</h3>
        <div class="line-container2">
          <p class="location2">Web Application Development</p>
          <p class="place">February 2025</p>
        </div>
        <div class="description">
          <p>
            Developed an AI-powered pitch analysis web application using Next.js for the frontend and Flask for backend
            processing, integrating Google Gemini API for generative AI feedback on speech quality, persuasiveness, and
            sentiment.
            <br />Implemented machine learning-based speech analysis using NLTK, spaCy, and OpenCV, extracting features
            such as filler words, sentiment, voice modulation, and pacing to provide real-time constructive feedback for users.
          </p>
        </div>
      </div>

      <div className="project">
        <h3  class="title-name2">Soul Sync Dating App Developer</h3>
        <div class="line-container2">
          <p class="location2">Collaborative Software Development</p>
          <p class="place">November 2024</p>
        </div>
        <div class="description">
          <p>
            Built a compatibility matching system using Java, Java Swing, and MongoDB, adhering to Clean Architecture
            principles.
            <br />Designed intuitive user interfaces in Figma and integrated APIs for efficient data handling.
            <br />Collaborated in a team setting and managed version control with GitHub for seamless development.
          </p>
        </div>
      </div>

      <div className="project">
        <h3  class="title-name2">QloUni (NewHacks 2023)</h3>
        <div class="line-container2">
          <p class="location2">Application Development</p>
          <p class="place">November 2023</p>
        </div>
        <div class="description">
          <p>
            Collaborated in a team setting to develop an interactive web application using Flask, integrating APIs to fetch
            real-time weather data and provide tailored clothing recommendations.
            <br />Implemented functionality to process user-uploaded images with a pre-trained VGG16 model for image
            classification, ensuring dynamic and user-friendly application performance.
          </p>
        </div>
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
    </div>
  );
}

export default Projects;
