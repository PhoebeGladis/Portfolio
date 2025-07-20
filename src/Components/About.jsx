import '../styles/Background.css'
// import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function About() {
   return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-info">
          <h1 className="about-subtitle">Know who iam</h1>
          {/* <h1 className="about-title">I'm PHOEBE GLADIS KAITHA</h1> */}
          <p className="about-description">
            Hi, I’m <span style={{ color:'#2f80ed',fontWeight: 'bold' }}>Phoebe Gladis Kaitha</span> , a recent Computer Science and Engineering graduate from  GNITS, Hyderabad, India. I have a strong foundation in Java,Object-Oriented Programming (OOP), Data structures, and web technologies, with a keen interest in problem solving.I have hands-on experience with Streamlit, Snowflake, and SQL from my internship at S&P Global, where I built interactive dashboards for data analysis and visualization. Outside the screen, I’m into

<ul>
    <li>🏐 Playing Volleyball</li>
    <li>🎸 Strumming the Ukulele</li>
  </ul>          </p>
         
        </div>
      
      
      {/* <div className="footer-icons">
        <a href="https://github.com/PhoebeGladis" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/phoebe-gladis-kaitha-75a270243/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div> */}
   
      </div>
     
      <div className="stars"></div>
    </section>
  );
};
