import React from "react";
import inProgress from "../assets/inprogress.jpg";
import myHealth from "../assets/myhealth.jpg";
import starWars from "../assets/starwars.jpg";
import library from "../assets/library.jpg";
import yahtzee from "../assets/yahtzee.jpg";
import chronobyte from "../assets/chronobyte.jpg";
import readme from "../assets/readme.jpg";
import bookSearch from "../assets/bookSearch.png";



function Portfolio() {
  const projects = [
    {
      title: "Photography Website for a Client",
      description:
        "An in-progress photography website showcasing a client's award-winning work. The link for this website cannot be shared yet and does not have a Git repository.",
      img: inProgress,
      github: "",
      deployed: "",
    },
    {
      title: "myHealth Website",
      description:
        "A collaborative health and fitness tracking website where users can monitor food intake and log fitness progress. The link for this website cannot be shared yet and does not have a Git repository.",
      img: myHealth,
      github: "",
      deployed: "",
    },
    {
      title: "Book Search",
      description: "A Book Search Engine that allows users to search for books using the Google Books API. ",
      img: bookSearch,
      github: "https://github.com/mbauer99621/Book-Search-Engine",
      deployed: "https://book-search-engine-mlb.onrender.com",
    },
    {
      title: "Cooking and Recipe Website",
      description:
        "An in-progress recipe website where users can learn new recipes or store their own. The link for this website cannot be shared yet and does not have a Git repository.",
      img: inProgress,
      github: "",
      deployed: "",
    },
    {
      title: "Chronobyte Stopwatch",
      description:
        "A stopwatch with 3 fun visual modes. Deployed application can be found here: https://mbauer99621.github.io/Stopwatch-Timer",
      img: chronobyte,
      github: "https://github.com/mbauer99621/Stopwatch-Timer",
      deployed: "https://mbauer99621.github.io/Stopwatch-Timer/",
    },
    {
      title: "README.md Generator",
      description: "A command-line application that builds a README.md file using user input.",
      img: readme,
      github: "https://github.com/mbauer99621/ReadMe-Generator",
      deployed: "",
    },
    {
      title: "Star Wars Name Generator",
      description: "A website that utilizes a Star Wars API to generate an existing Star Wars character based on a user-input number.",
      img: starWars,
      github: "",
      deployed: "",
    },
    {
      title: "Library Website",
      description: "A website that utilizes a book API to store book information in a user's personal library.",
      img: library,
      github: "",
      deployed: "",
    },
    {
      title: "Yahtzee Game",
      description: "A classic game of Yahtzee where users can roll dice and keep track of their scores.",
      img: yahtzee,
      github: "",
      deployed: "",
    },
   
    
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.github && (
                <p className="project-github">
                  GitHub:{" "}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.github}
                  </a>
                </p>
              )}
              {project.deployed && (
                <p className="project-deployed">
                  Deployed URL:{" "}
                  <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                    {project.deployed}
                  </a>
                </p>
              )}
            </div>
            <div className="project-image">
              <img src={project.img} alt={`Screenshot of ${project.title}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
