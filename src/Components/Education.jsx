import '../styles/Background.css';
const educationData = [
  {
    institution: "G. Narayanamma Institute of Technology and Science,Hyderabad",
    degree: "B.Tech, Computer Science and Engineering",
    duration: "Nov 2021 - May 2025",
    grade: "9.04 CGPA",
    logo: "/images/gnits.jpeg",
  },
  {
    institution: "Sri Chaitanya Junior College,Hyderabad",
    degree: "Class XII (TSBIE)",
    duration: "Jun 2019 - Apr 2021",
    grade: "98%",
    logo: "/images/jrclg.jpeg",
  },
  {
    institution: "St. Paul’s High School.Armoor",
    degree: "Class X (SSC)",
    duration: "Jun 2018 - Apr 2019",
    grade: "10 GPA",
    logo: "/images/scl.jpeg",
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className={`timeline-container ${idx % 2 === 0 ? "left" : "right"}`}  data-date={edu.duration}>
            <div className="timeline-content">
              <img src={edu.logo} alt="logo" className="edu-logo" />
              <h3>{edu.institution}</h3>
              <h4>{edu.degree}</h4>
              <p className="edu-duration">{edu.duration}</p>
              <p><strong>Grade:</strong> {edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="stars"></div>
    </section>
  );
};

export default Education;
