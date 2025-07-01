
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaJs, FaDatabase } from 'react-icons/fa';
import { SiC, SiMysql } from 'react-icons/si';
import '../styles/Background.css';
const skills = [
  { name: 'C', icon: <SiC className="icon c"/> },
  { name: 'Java', icon: <FaJava className="icon java"/> },
  { name: 'HTML', icon: <FaHtml5 className="icon html"/> },
  { name: 'CSS', icon: <FaCss3Alt className="icon css" /> },
  { name: 'JavaScript', icon: <FaJs className="icon javascript" /> },
  { name: 'ReactJS', icon: <FaReact className="icon react" /> },
  { name: 'MySQL', icon: <SiMysql className="icon mysql" /> },
];

const Skills = () => {
  return (
     <section className="skills-section" id="skills">
      <h2 className="skills-heading">Professional <span className="highlight">Skillset</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
      <div className='stars'></div>
    </section>
  );
};

export default Skills;
