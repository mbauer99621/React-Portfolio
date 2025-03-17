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
            My name is Maya Li Bauer, and I am a passionate software engineer based in Saint Paul, Minnesota. To be continued... 
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
