
import { Link } from "react-router-dom";
import '../styles/Background.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Home = () => {
  return (
    
  <section className="home-section" id="home">
    <div className="home-content">
              <div className="stars"></div>
              <h1 className="home-greeting">Hi There! 👋🏼</h1>
              <h2 className="home-name">
                I'M <span className="highlight">PHOEBE GLADIS KAITHA.</span>
              </h2>
              <div className="footer-icons">
        <a href="https://github.com/PhoebeGladis" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/phoebe-gladis-kaitha-75a270243/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
             
           </div>
    
            <div className="image">
              <img
                src="/images/girl.jpg"
                alt="Phoebe"
                className="img-fluid"
                style={{ maxHeight: "300px", borderRadius: "12px" }}
              />
            </div>
            
            
         
    </section>
   
  );
};

export default Home;
