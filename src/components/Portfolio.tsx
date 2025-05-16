
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      title: "ERP System Using MERN Stack",
      description: "A college management system with student records, course tracking, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/TrickyBaibhavi",
      demo: "#"
    },
    {
      title: "Word to PDF Converter Web App",
      description: "File upload and document conversion with Node.js and Multer, styled with Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express.js", "Multer", "Tailwind CSS"],
      github: "https://github.com/TrickyBaibhavi",
      demo: "#"
    },
    {
      title: "Password Manager with Hashing",
      description: "Secure password storage using salted hashes and JSON file backend.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "JavaScript", "Crypto", "JSON"],
      github: "https://github.com/TrickyBaibhavi"
    },
    {
      title: "Handwritten Digit Recognition",
      description: "Neural network model with Python and ML libraries, real-time prediction UI.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Machine Learning", "Neural Networks", "TensorFlow"],
      github: "https://github.com/TrickyBaibhavi"
    }
  ];

  const filters = [
    { name: 'all', label: 'All Projects' },
    { name: 'mern', label: 'MERN Stack' },
    { name: 'frontend', label: 'Frontend' },
    { name: 'backend', label: 'Backend' },
    { name: 'ml', label: 'Machine Learning' }
  ];

  const filterProjects = (projects: Project[], filter: string) => {
    if (filter === 'all') return projects;
    
    return projects.filter(project => {
      const tags = project.technologies.map(tech => tech.toLowerCase());
      
      switch(filter) {
        case 'mern':
          return tags.includes('react.js') && tags.includes('node.js') && tags.includes('mongodb');
        case 'frontend':
          return tags.includes('react.js') || tags.includes('html5') || tags.includes('css3') || tags.includes('tailwind css');
        case 'backend':
          return tags.includes('node.js') || tags.includes('express.js') || tags.includes('mongodb');
        case 'ml':
          return tags.includes('python') || tags.includes('machine learning') || tags.includes('neural networks');
        default:
          return true;
      }
    });
  };

  const filteredProjects = filterProjects(projects, activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-portfolio-blue-light/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-portfolio-blue-light/10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-3 px-4 py-1.5 text-sm bg-portfolio-blue/10 text-portfolio-blue border-none hover:bg-portfolio-blue/20">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each showcases different skills and technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.name
                    ? 'bg-portfolio-blue text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFilter(filter.name)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:-translate-y-2 transition-all duration-300 card-shadow rounded-xl border-none"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-portfolio-blue/60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="text-white text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader className="pt-6 pb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      className="bg-portfolio-blue-light text-portfolio-blue-dark hover:bg-portfolio-blue-light"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-4 pt-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-portfolio-blue transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-portfolio-blue transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
