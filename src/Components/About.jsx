import '../styles/Background.css'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function About() {
<<<<<<< HEAD
   return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-info">
          <h3 className="about-subtitle">Know who iam</h3>
          <h1 className="about-title">I'm PHOEBE GLADIS KAITHA</h1>
          <p className="about-description">
            I'm a Computer Science Engineering graduate with a strong foundation in Java and Object-Oriented Programming (OOP). Interned at S&P Global, gaining hands-on experience in a professional software development environment. Enthusiastic about learning emerging technologies and adapting to new challenges.
          </p>
=======
  return (
    <main className="hero container">
      <div className="hero-content">
        {
        <div className="info">
            <h3>Hi Guys</h3>
          <h1>Iam PHOEBE GLADIS KAITHA</h1>
          <h3>Iam a Computer Science Engineering graduate with a strong foundation in Java and Object-Oriented Programming (OOP). Interned at S&P Global, gaining hands-on experience in a professional software development environment. Enthusiastic about learning emerging technologies and adapting to new challenges.</h3>
>>>>>>> aa418cd206b53b3fde41dd338901bf76473f7720
        </div>
        {/* <div className="about-image">
          <img src="/images/phoebe.png" alt="Phoebe Gladis Kaitha" />
        </div> */}
      
      <div className="footer-icons">
        <a href="https://github.com/PhoebeGladis" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/phoebe-gladis-kaitha-75a270243/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
   
      </div>
     
      <div className="stars"></div>
    </section>
  );
};
