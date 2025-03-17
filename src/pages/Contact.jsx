import '../css/contact.css';

function Contact() {
  return (
    <section id="contact-container">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:mayalibauer@gmail.com" className="blue-link">Mayalibauer@gmail.com</a></p>
        <p>Phone: <a href="tel:+6514926326" className="blue-link">(651)-492-6326</a></p>
        <p>GitHub: <a href="https://github.com/mbauer99621" className="blue-link">https://github.com/mbauer99621</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/maya-li-bauer-28620027b/" className="blue-link">www.linkedin.com/in/maya-li-bauer-28620027b</a></p>
      </div>

      

      <form className="contact-form" action="https://formsubmit.co/mayalibauer@gmail.com" method="POST">
        <h3>Please Fill out this Form to Email Me:</h3>
        <input type="text" name="name" placeholder="Full Name" required className="blue-input" />
        <input type="email" name="email" placeholder="E-Mail" required className="blue-input" />
        <textarea name="message" placeholder="Message" required className="blue-input"></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
