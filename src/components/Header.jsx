import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="header">
      <a className="headerA" href="#" id="left-header">
        <div id="logo">
          <p>MB</p>
        </div>
      </a>
      <section id="nav-bar-container">
        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about-container');
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resume');
              }}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact-container');
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
