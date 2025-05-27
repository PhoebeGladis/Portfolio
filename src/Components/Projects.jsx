
const projects = [
  {
    title: 'Smart Irrigation System',
    description: `Developed an irrigation system that optimizes water usage by integrating real-time soil moisture and environmental data from sensor networks (soil moisture, DHT11).`,
    technologies: 'IoT sensors, Fuzzy Logic'
  },
  {
    title: 'Portfolio Website',
    description: `Developed a personal portfolio website using React to showcase projects and technical skills in a clean layout.`,
    technologies: 'React, JavaScript, HTML, CSS'
  },
  {
    title: 'Network Intrusion Detection System',
    description: `Developed an IDS to enhance network security by identifying unauthorized access using deep learning techniques.`,
    technologies: 'Python, TensorFlow, Scikit-learn, GAN'
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"><strong>Technologies Used:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
