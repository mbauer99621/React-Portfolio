import resume from "../assets/resume.jpg";

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <div className="resume-image-container">
        <img src={resume} alt="Resume Image" />
      </div>
    </section>
  );
}

export default Resume;
