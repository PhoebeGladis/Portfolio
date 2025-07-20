import '../styles/Background.css';
const projects = [
  {
    title: 'Weather Forecasting Application',
    description: ` Built a weather forecasting application with real-time weather APIs.Supports multi-city forecasts and search-based interactions.`,
    technologies: 'React.js , API'
  },
  {
    title: 'Portfolio Website',
    description: `Developed a personal portfolio website using React to showcase projects and technical skills in a clean layout.`,
    technologies: 'React, JavaScript, HTML, CSS'
  },
  {
    title: 'Ecommerce Web Application',
    description: `Developed a fully functional e-commerce application with a responsive React frontend
for an optimized user experience.`,
    technologies: 'MongoDB,Express.js,React.js, Node.js, Bootstrap'
  },
  {
    title: 'Smart Irrigation System',
    description: `Developed an irrigation system that optimizes water usage by integrating real-time soil moisture and environmental data from sensor networks (soil moisture, DHT11).`,
    technologies: 'IoT sensors, Fuzzy Logic'
  }
  // {
  //   title: 'Network Intrusion Detection System',
  //   description: `Developed an IDS to enhance network security by identifying unauthorized access using deep learning techniques.`,
  //   technologies: 'Python, TensorFlow, Scikit-learn, GAN'
  // }

];

const Projects = () => {
  return (
     <section className="projects-section" id="projects">
      <div className="stars"></div>
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list">
        <div className="stars"></div>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"><strong>Technologies Used:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
