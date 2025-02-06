import React from "react";
import inProgress from "../assets/inprogress.jpg";
import myHealth from "../assets/myhealth.jpg";
import starWars from "../assets/starwars.jpg";
import library from "../assets/library.jpg";
import yahtzee from "../assets/yahtzee.jpg";
import chronobyte from "../assets/chronobyte.jpg";
import readme from "../assets/readme.jpg";

function Portfolio() {
  const projects = [
    {
      title: "Photography Website for a Client",
      description: "An in-progress photography website showcasing a client's award-winning work. The link for this website can not be shared yet and does not have a git repository.",
      img: inProgress,
      github: "",
      //This is not code I can share on github
    },
    {
      title: "myHealth Website",
      description: "A collaborative health and fitness tracking website where users can monitor food intake and log fitness progress.  The link for this website can not be shared yet and does not have a git repository.",
      img: myHealth,
      github: "",
      //This is not code I can share on github
    },
    {
      title: "Cooking and Recipe Website",
      description: "An in-progress recipe website where users can learn new recipes or store their own. The link for this website can not be shared yet and does not have a git repository.",
      img: inProgress,
      github: "",
      //This is not code I can share on github yet
    },
    {
      title: "Chronobyte Stopwatch",
      description: "A stopwatch with 3 fun visual modes. Deployed application can be found here: https://mbauer99621.github.io/Stopwatch-Timer",
      img: chronobyte,
      github: "https://github.com/mbauer99621/Stopwatch-Timer",
    },
    {
      title: "README.md Generator",
      description: "A command line application which builds a README.md file using user input.",
      img: readme,
      github: "https://github.com/mbauer99621/ReadMe-Generator",
    },
    {
      title: "Star Wars Name Generator",
      description: "A website that utilizes a Star Wars API to generate an existing Star Wars character based on a user-input number.",
      img: starWars,
      github: "",
    },
    {
      title: "Library Website",
      description: "A website that utilizes a book API to store book information in a user's personal library.",
      img: library,
      github: "",
    },
    {
      title: "Yahtzee Game",
      description: "A classic game of Yahtzee where users can roll dice and keep track of their scores.",
      img: yahtzee,
      github: "",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>

      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div id="title">
              <h3>{project.title}</h3>
            </div>
            <div id="projectContent">
              <p>{project.description}</p>
              {project.github && (
                <p className="githubLink">
                  GitHub: <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>
                </p>
              )}
              <img src={project.img} alt={`Screenshot of ${project.title}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
