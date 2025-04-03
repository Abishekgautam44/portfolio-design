
import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cloud-300 mix-blend-multiply filter blur-xl animate-slow-spin"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-cloud-200 mix-blend-multiply filter blur-xl animate-slow-spin" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cloud-100 mix-blend-multiply filter blur-xl animate-slow-spin" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl font-bold text-cloud-800">Abishek Gautam</h2>
            <div className="badge mb-2">Certified Cloud Engineer</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming <span className="text-gradient">Cloud</span> Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              I design and implement scalable, secure, and cost-effective cloud solutions
              to help businesses achieve their technological goals.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${loaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* AWS logo with glass effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cloud-100 to-cloud-50 rounded-full"></div>
              <div className="absolute inset-4 glass rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                  alt="AWS Logo" 
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              
              {/* Only AWS Certification badge */}
              <div className="absolute -right-4 top-1/4 glass p-3 rounded-lg shadow-lg animate-float">
                <div className="text-sm font-medium">AWS Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
