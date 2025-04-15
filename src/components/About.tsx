
import { User, Calendar, MapPin, Mail } from "lucide-react";

const About = () => {
  // Personal information - edit these details to customize your portfolio
  const personalInfo = {
    name: "Rutu Gaikwad",
    email: "rutugaikwad744@gmail.com",
    location: "Mumbai, India",
    experience: "2 Years",
    about: `I'm a passionate web developer with a strong background in creating responsive, 
    user-friendly websites and applications. With expertise in both front-end and 
    back-end technologies, I bring creative ideas to life through clean, efficient code.
    
    When I'm not coding, you can find me exploring new technologies, contributing to 
    open-source projects, or enjoying the outdoors. I believe in continuous learning 
    and staying up-to-date with the latest industry trends.`
  };

  return (
    <section id="about" className="section bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <div className="relative overflow-hidden rounded-xl shadow-xl h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="animate-fade-in delay-100">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-700 mb-6">
              {personalInfo.about.split('\n\n')[0]}
            </p>
            
            <p className="text-gray-700 mb-8">
              {personalInfo.about.split('\n\n')[1]}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="text-portfolio-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{personalInfo.name}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-portfolio-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-portfolio-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="text-portfolio-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium">{personalInfo.experience}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
