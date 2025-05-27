

const educationData = [
  {
    institution: 'G. Narayanamma Institute of Technology and Science',
    degree: 'Bachelor of Technology in Computer Science',
    result: 'CGPA: 9.04'
  },
  {
    institution: 'Sri Chaitanya Junior College',
    degree: '12th; Telangana State Board of Intermediate Education',
    Result: 'Percentage: 98%'
  },
  {
    institution: 'St. Paul’s High School',
    degree: '10th; Secondary School Certificate',
    result: 'CGPA: 10'
  }
];

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-result">{edu.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
