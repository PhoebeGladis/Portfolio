
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
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><Link to="/education">Education</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/projects">Projects</Link></li>

      <li><Link to="/resume">Resume</Link></li>
    </ul>
  </nav>
);
}

export default Navigation;
