// import { Link } from 'react-router-dom';
// function Navigation() {
//   return (
//      <nav>
//       <div className='logo'>
//         <img src='/images/brand_logo.png' alt=''/>
//       </div>
//       <ul>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/skills">Skills</Link></li>
//         {/* <li href='#'>About</li> */}
       
//         <li href='#'>Experience</li>
//         <li href='#'>Education</li>
//         <li href='#'>Resume</li>
//       </ul>
//       <button>login</button>
   
//      </nav> 
//   );
// }
// export default Navigation



function Navigation() {
  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };
  return (
    <nav>
      <div className="logo">
        <p>PORTFOLIO</p>
      </div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>

      </ul>
      <a href="/Phoebe_resume.pdf" target="_blank" rel="noopener noreferrer">
        <button>Resume</button>
      </a>
    </nav>
  );
}

export default Navigation;
