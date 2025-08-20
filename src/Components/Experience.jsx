import '../styles/Background.css'
const experiences = [
  {
    role: 'Summer Intern',
    company: 'S&P Global',
    duration: 'June 2024 – Aug 2024',
    description: `Designed and implemented a dynamic dashboard using Streamlit and Snowflake enabling users to efficiently analyze data and extract actionable insights`,
    logo: '/images/S&P_Global_logo.svg.png', 
    skills: ['Snowflake', 'Streamlit', 'Python', 'SQL']
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-duration">{exp.duration}</p>
              </div>
            </div>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-skills">
              <strong>Skills:</strong>
              {exp.skills.map((skill, idx) => (
                <span className="skill-badge" key={idx}>• {skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="stars"></div>
    </section>
  );
};

export default Experience;


// const Experience = () => {
//   return (
//     <section className="experience-section" id="experience">
//       <h2 className="experience-heading">Experience</h2>
//       <div className="experience-card">
//         <div className="experience-header">
//           <img src="/images/S&P_Global_logo.svg.png" alt="S&P Global Logo" className="company-logo" />
        
//             {/* <h3 className="company-name">S&P Global</h3> */}
//             <p className="position">Summer Intern</p>
          
//         </div>
//         <p className="experience-description">
//           Designed and implemented a dynamic dashboard using <strong>Streamlit</strong> and <strong>Snowflake</strong>,
//           enabling users to efficiently analyze data and extract actionable insights.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Experience;

