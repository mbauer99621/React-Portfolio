import React from 'react';
import assembly from '../assets/Skills/assembly.png';
import css from '../assets/Skills/css.png';
import html from '../assets/Skills/html.png';
import java from '../assets/Skills/java.png';
import javascript from '../assets/Skills/javascript.png';
import jquery from '../assets/Skills/jquery.png';
import json from '../assets/Skills/json.png';
import lisp from '../assets/Skills/lisp.png';
import mongodb from '../assets/Skills/mongodb.png';
import nodejs from '../assets/Skills/nodejs.png';
import php from '../assets/Skills/php.png';
import postgresql from '../assets/Skills/postgresql.png';
import python from '../assets/Skills/python.png';
import react from '../assets/Skills/react.png';
import rstudio from '../assets/Skills/rstudio.png';
import sql from '../assets/Skills/sql.png';
import tailwind from '../assets/Skills/tailwind.png';
import typescript from '../assets/Skills/typescript.png';
import prolog from '../assets/Skills/prolog.svg';
import go from '../assets/Skills/go.svg';
import vite from '../assets/Skills/vite.svg';

function About() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { src: java, title: 'Java' },
        { src: python, title: 'Python' },
        { src: javascript, title: 'JavaScript' },
        { src: typescript, title: 'TypeScript' },
        { src: lisp, title: 'Lisp' },
        { src: assembly, title: 'Assembly' },
        { src: go, title: 'Go' },
        { src: php, title: 'PHP' },
        { src: prolog, title: 'Prolog' }
      ]
    },
    {
      title: 'Front-End Technologies',
      skills: [
        { src: html, title: 'HTML' },
        { src: css, title: 'CSS' },
        { src: react, title: 'React' },
        { src: tailwind, title: 'Tailwind CSS' },
        { src: jquery, title: 'jQuery' },
        { src: vite, title: 'Vite' }
      ]
    },
    {
      title: 'Back-End Technologies',
      skills: [
        { src: nodejs, title: 'Node.js' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { src: sql, title: 'SQL' },
        { src: mongodb, title: 'MongoDB' },
        { src: postgresql, title: 'PostgreSQL' }
      ]
    },
    {
      title: 'Other Technologies',
      skills: [
        { src: json, title: 'JSON' },
        { src: rstudio, title: 'RStudio' }
      ]
    }
  ];

  return (
    <section id="about-container">
      <div id="about-statement">
        <h2>About Me</h2>
        <p>
          My name is Maya Li Bauer, and I am a passionate software developer based in Saint Paul, Minnesota. 
          I graduated Magna Cum Laude from Augsburg University with a BA in Computer Science. 
          I have expertise in Python, Java, React, HTML/CSS/JavaScript, TypeScript, and Prolog. 
          In addition, I have experience in Go, Assembly, PHP, Lisp, SQL, and R.
        </p>
      </div>

      <div id="skills">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <img src={skill.src} alt={skill.title} className="skill-icon" />
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
