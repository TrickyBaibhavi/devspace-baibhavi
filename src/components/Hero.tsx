
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-portfolio-blue-light section-padding pt-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <div className="inline-block mb-3 px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm font-medium">
            Full-Stack Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-portfolio-blue relative">
              Baibhavi Kumari
              <span className="absolute bottom-2 left-0 h-2 bg-portfolio-blue/20 w-full -z-10"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
            Dedicated Full-Stack Developer specializing in MERN stack, 
            passionate about creating impactful web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Button 
              asChild
              className="bg-portfolio-blue hover:bg-portfolio-blue-dark text-white px-8 py-6 rounded-md transition-colors group"
            >
              <a href="#portfolio">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-8 py-6 rounded-md transition-colors"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:baibhavikumari747@gmail.com" 
              className="text-gray-600 hover:text-portfolio-blue transition-colors hover:-translate-y-1 duration-200"
              aria-label="Email me">
              <Mail size={20} />
            </a>
            <a href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-blue transition-colors hover:-translate-y-1 duration-200"
              aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/TrickyBaibhavi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-blue transition-colors hover:-translate-y-1 duration-200"
              aria-label="GitHub profile">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-blue/60 to-portfolio-blue rounded-full blur-xl opacity-75"></div>
            <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-portfolio-blue-light/50 translate-x-6 -translate-y-6"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1590755958171-90168ab2a204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Baibhavi Kumari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
