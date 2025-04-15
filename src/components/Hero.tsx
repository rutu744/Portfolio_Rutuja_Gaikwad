
import { ArrowDown } from "lucide-react";

const Hero = () => {
  // Personal information - edit these details to customize your hero section
  const personalInfo = {
    name: "Rutu Gaikwad",
    title: "Web Developer & Designer",
    description: "I create beautiful, functional websites and digital experiences that help businesses grow and succeed online."
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="text-portfolio-dark">Hi, I'm </span>
            <span className="text-portfolio-primary">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in delay-100">
            <span className="typing-text">{personalInfo.title}</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
            {personalInfo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-portfolio-dark hover:text-portfolio-primary transition-colors duration-300 animate-bounce-subtle"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
