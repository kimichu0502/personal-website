import React from 'react';

function Experience() {
  return (
    <div className="section">
      <div class="section-title">
        <h2>Experience</h2>
      </div>

      <div className="experience">
        <h3  class="title-name2">Writer</h3>
        <div class="line-container2">
          <p class="location2">March 2024 – Current</p>
          <p class="place">Girls in STEAM</p>
        </div>
        <div class="description">
          <p>
            Created and managed created content profiles of women in STEAM, 
            raising awareness for STEAM fields and increasing engagement with over 700 followers.
            <br />Coordinated with team members to produce educational resources, 
            helping drive program attendance and supporting young girls interested in STEAM careers.
          </p>
        </div>
      </div>

      <div className="experience">
        <h3  class="title-name2">Summer Camp Counselor</h3>
        <div class="line-container2">
          <p class="location2">June 2023 – August 2023</p>
          <p class="place">Camp Taiwan</p>
        </div>
        <div class="description">
          <p>
            Led 6 week-long camp sessions, mentoring 100+ campers and ensuring a positive 
            environment by fostering collaboration and problem-solving among groups.
            <br /> Strengthened communication skills through regular interactions with others, 
            including campers, fellow counselors, and parents.
            <br /> Collaborated with co-counselors to create and implement structured activities, 
            contributing to a supportive camp community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
