

import { Link } from "react-router-dom";

function Navigation() {
  // const openResume = () => {
  //   window.open('/resume.pdf', '_blank');
  // };
  return (
   <nav className="navbar">
    <h1 className="navbar-brand">PORTFOLIO</h1>
    <ul className="navbar-menu">
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
