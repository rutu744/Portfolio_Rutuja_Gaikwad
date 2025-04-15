
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  // Project information based on your resume
  const projects = [
    {
      title: "NIRBHAYA: Women Safety and Support System",
      description: "Designed and developed a mobile app featuring voice-activated SOS, Shake-to-Activate SOS, Manual SOS button and a chatbot for real-time support, enhancing women's safety.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      tags: ["Java", "Android Studio", "XML", "SQLite"],
      liveLink: "#",
      codeLink: "https://github.com/rutu744/nirbhaya-app",
      year: "2024-2025"
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecast application that provides real-time weather data, 5-day forecasts, and location-based weather information with a clean, responsive UI.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      tags: ["React", "OpenWeather API", "JavaScript", "CSS"],
      liveLink: "#",
      codeLink: "https://github.com/rutu744/weather-dashboard",
      year: "2023"
    },
    {
      title: "Algorithm Visualizer",
      description: "Designed and implemented an interactive web-based tool to visualize various sorting algorithms, including Bubble Sort, Merge Sort, and Quick Sort, providing real-time visual feedback.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["JavaScript", "HTML", "CSS", "Algorithms"],
      liveLink: "#",
      codeLink: "https://github.com/rutu744/algorithm-visualizer",
      year: "2024"
    },
    {
      title: "BookMyMaid Web Application",
      description: "Created an online platform for booking domestic help services, featuring a user-friendly interface with Bootstrap templates. Implemented backend functionality using PHP and MySQL.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
      liveLink: "#",
      codeLink: "https://github.com/rutu744/bookmymaid",
      year: "2022"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Here are some of my key projects that showcase my skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-portfolio-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink} 
                    className="flex items-center text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  
                  <a 
                    href={project.codeLink} 
                    className="flex items-center text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/rutu744" className="btn-secondary inline-block" target="_blank" rel="noopener noreferrer">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
