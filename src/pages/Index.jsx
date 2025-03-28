import '../css/index.css';


function Index() {
  // Scroll to section when clicking on the button
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-container');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="index-container">
      <h1><span id="greeting">Hi, I'm</span> <span id="name">Maya Li Bauer.</span></h1>
      <h2>Full Stack Software Developer</h2>
      
      <button id="contact-btn" onClick={scrollToContact}>Contact Me</button> 
      
      <div id="index-content"> 
       
      </div>
    </section>
  );
}

export default Index;
