
import { Link } from "react-router-dom";
import '../styles/Background.css';
const Home = () => {
  return (
    
  <section className="home-section" id="home">
    <div className="home-content">
              <div className="stars"></div>
              <h1 className="home-greeting">Hi There! 👋🏼</h1>
              <h2 className="home-name">
                I'M <span className="highlight">PHOEBE GLADIS KAITHA.</span>
              </h2>
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
