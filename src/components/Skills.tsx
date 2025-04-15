
const Skills = () => {
  const technicalSkills = [
    { name: "HTML5/CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 65 },
  ];

  const softSkills = [
    { name: "Communication", level: 95 },
    { name: "Problem Solving", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Creativity", level: 75 },
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-fade-in delay-100">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
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
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
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
          <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Technologies I Use</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git", "Figma", "Next.js", "Redux"].map((tech, index) => (
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
