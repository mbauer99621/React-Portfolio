function Contact() {
  return (
      <section id="contact">
          <h2>Contact</h2>

          <form action="https://formsubmit.co/mayalibauer@gmail.com" method="POST">
              <h3>Please Fill out this Form to Email Me:</h3>

              <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
              </div>

              <input type="hidden" name="_captcha" value="false" />

              <button type="submit">Send</button>
          </form>

          <address>
              <h3>Other Ways to Contact Me:</h3>
              <ul>
                <li><a href="tel:+6514926326">Phone</a></li>
                <li><a href="https://github.com/mbauer99621" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/maya-li-bauer-28620027b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
          </address>
      </section>
  );
}

export default Contact;
