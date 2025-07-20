
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  // const openResume = () => {
  //   window.open('/resume.pdf', '_blank');
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   <nav className="navbar">
    <h1 className="navbar-brand">PORTFOLIO</h1>
     <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
      <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
        <li><Link to="/education" onClick={() => setIsOpen(false)}>Education</Link></li>
        <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
      
    </ul>
  </nav>
);
}

export default Navigation;
