
import { User, Calendar, MapPin, Mail, Phone, Github } from "lucide-react";

const About = () => {
  // Personal information - edit these details to customize your portfolio
  const personalInfo = {
    name: "Rutuja Gaikwad",
    dob: "13/10/2003",
    email: "rutugaikwad744@gmail.com",
    phone: "(+91) 7447876967",
    location: "Solapur, India",
    github: "github.com/rutu744",
    about: `I'm a passionate and motivated Software Developer, eager to kickstart my career in building innovative digital solutions. 
    Recently completed my studies and gained hands-on experience in coding, problem-solving, and application development.
    
    I'm excited to apply my knowledge and grow in a collaborative team environment, continuously learning and adapting to new technologies.`
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
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
                <Phone className="text-portfolio-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="text-portfolio-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="font-medium">{personalInfo.dob}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Github className="text-portfolio-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-medium">{personalInfo.github}</p>
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
