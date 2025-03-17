import emailIcon from "../assets/mailIcon.svg"; 
import phoneIcon from "../assets/phoneIcon.svg";
import githubIcon from "../assets/githubIcon.svg"; 
import linkedinIcon from "../assets/linkedInIcon.svg"; 
import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-contact">
        <ul>    
          <li><a href="mailto:Mayalibauer@gmail.com"><img src={emailIcon} alt="Email" /></a></li>
          <li><a href="tel:+6514926326"><img src={phoneIcon} alt="Phone" /></a></li>
          <li><a href="https://github.com/mbauer99621" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a></li>
          <li><a href="https://www.linkedin.com/in/maya-li-bauer-28620027b/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 Maya Li Bauer. All rights reserved.</p>
      </div>
    </footer>
  );
}

  export default Footer;
  