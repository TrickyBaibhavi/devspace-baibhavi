
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-portfolio-blue-light section-padding pt-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-portfolio-blue">Baibhavi Kumari</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Dedicated Full-Stack Developer specializing in MERN stack, 
            passionate about creating impactful web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-portfolio-blue hover:bg-portfolio-blue-dark text-white px-8 py-6 rounded-md transition-colors"
            >
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-8 py-6 rounded-md transition-colors"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-portfolio-blue rounded-full opacity-10 blur-xl transform scale-110"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
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
