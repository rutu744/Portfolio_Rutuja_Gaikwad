
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  // Project information - edit or add more projects as needed
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js. Features include product browsing, cart functionality, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://ecommerce-demo.example.com",
      codeLink: "https://github.com/rutugaikwad/ecommerce-website",
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application that helps users organize their projects. Built with React and Firebase for real-time updates and authentication.",
      image: "https://images.unsplash.com/photo-1611224885990-2ae8a8bb85e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      tags: ["React", "Firebase", "CSS", "Redux"],
      liveLink: "https://task-manager.example.com",
      codeLink: "https://github.com/rutugaikwad/task-manager",
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application that helps users track their expenses, create budgets, and visualize spending habits through interactive charts and reports.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
      liveLink: "https://finance-tracker.example.com",
      codeLink: "https://github.com/rutugaikwad/finance-tracker",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides current weather and 5-day forecast for any location. Uses the OpenWeather API and geolocation services.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      liveLink: "https://weather-app.example.com",
      codeLink: "https://github.com/rutugaikwad/weather-app",
    },
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Here are some of my recent projects. Each one was carefully crafted to solve specific problems 
          and showcase different skills and technologies.
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
          <a href="https://github.com/rutugaikwad" className="btn-secondary inline-block" target="_blank" rel="noopener noreferrer">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
