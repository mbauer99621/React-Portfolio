import resume from "../assets/MayaLiBauerSoftwareDevResume.pdf";

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="iframe-wrapper">
        <iframe
          src={resume}
          className="resume-iframe"
          title="Resume"
        />
      </div>
    </section>
    
  );
}

export default Resume;
