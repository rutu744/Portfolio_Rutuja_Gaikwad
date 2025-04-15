
const Skills = () => {
  const programmingSkills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "PHP", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "SQL", level: 80 },
  ];

  const frontendSkills = [
    { name: "ReactJS", level: 75 },
    { name: "HTML", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "Bootstrap", level: 85 },
  ];

  const softSkills = [
    { name: "Teamwork", level: 90 },
    { name: "Problem-Solving", level: 85 },
    { name: "Communication", level: 85 },
    { name: "Creativity", level: 80 },
    { name: "Collaboration", level: 85 },
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-fade-in delay-100">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Programming Skills</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in delay-200">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Frontend Skills</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: '#8338ec' // Using secondary color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Soft Skills</h3>
          <div className="space-y-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: '#3a86ff' // Using primary color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Technologies I Use</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Java", "Python", "PHP", "ReactJS", "HTML", "Tailwind CSS", "JavaScript", "Bootstrap", 
              "SQL", "MySQL", "SQLite", "Github", "VS Code", "Android Studio"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white shadow-sm rounded-full border border-gray-200 text-gray-700 hover:border-portfolio-primary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
