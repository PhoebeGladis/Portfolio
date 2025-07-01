import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/PhoebeGladis" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/phoebe-gladis-kaitha-75a270243/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
