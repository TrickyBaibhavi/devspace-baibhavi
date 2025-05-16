
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-portfolio-blue">Baibhavi<span className="text-black">.</span></h2>
            <p className="text-gray-600 mt-2 max-w-md">
              Dedicated Full-Stack Developer specializing in MERN stack, passionate about creating impactful web applications.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:baibhavikumari747@gmail.com" 
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-portfolio-blue hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:+918252540198" 
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-portfolio-blue hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-portfolio-blue hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/TrickyBaibhavi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-portfolio-blue hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Baibhavi Kumari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
