
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Index = () => {
  return (
    <div className="antialiased bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
      
      {/* Adding CSS as a regular style tag */}
      <style>
        {`
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
        
        /* Typing text animation */
        .typing-text {
          border-right: 3px solid #3a86ff;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          animation: typing 4s steps(40) infinite, blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          0%, 100% { width: 0 }
          50%, 90% { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #3a86ff }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
