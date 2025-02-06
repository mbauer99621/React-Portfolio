import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
    <h1>Maya Li Bauer</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
