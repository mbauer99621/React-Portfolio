import React from 'react';
import headshot from '../assets/MayaLiHeadshot.png';
import Skills from '../components/Skills.jsx'; 
import '../css/about.css';


function About() {
  return (
    <section id="about-container">
      <div id="about-content">
        {/* About Me Text Section */}
        <div id="about-statement">
          <h2>About Me</h2>
          <p>
            My name is Maya Li Bauer and I am a passionate software developer based in Saint Paul, Minnesota. 
            I graduated Magna Cum Laude from Augsburg University in 2024 with a B.A. in Computer Science and 
            recently graduated in 2025 from the University of Minnesota's Full Stack Development Bootcamp, 
            which gave me hands-on experience with the MERN (MongoDB, Express.js, React, and Node.js) stack. 
            I have solid knowledge of Java, Python, and web development, as well as experience in other various languages, 
            technologies, and databases. You can explore my full skill set in the "Resume" section.
          </p>
        </div>

        {/* About Me Image Section */}
        <div id="about-image">
          <img src={headshot} alt="Maya Li Bauer Headshot" />
        </div>
      </div>

    </section>
  );
}

export default About;
