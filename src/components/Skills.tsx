
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", proficiency: 85 },
        { name: "Python", proficiency: 70 },
        { name: "Java", proficiency: 65 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", proficiency: 85 },
        { name: "HTML5", proficiency: 90 },
        { name: "CSS3", proficiency: 85 },
        { name: "Tailwind CSS", proficiency: 80 },
        { name: "Responsive Design", proficiency: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", proficiency: 80 },
        { name: "Express.js", proficiency: 80 },
        { name: "RESTful APIs", proficiency: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", proficiency: 80 },
        { name: "JSON data handling", proficiency: 85 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", proficiency: 75 },
        { name: "VS Code", proficiency: 90 },
        { name: "Postman", proficiency: 80 },
        { name: "Multer", proficiency: 70 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Neural Networks", proficiency: 60 },
        { name: "Digit Recognition", proficiency: 65 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                (bar as HTMLElement).style.width = width + '%';
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-blue-light/30 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-portfolio-blue-light/20 rounded-full translate-x-10 translate-y-20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-3 px-4 py-1.5 text-sm bg-portfolio-blue/10 text-portfolio-blue border-none hover:bg-portfolio-blue/20">
            My Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These are the technologies and skills I've worked with and continue to develop.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform duration-200 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue-dark flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-portfolio-blue"></span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs font-medium text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="progress-bar bg-gray-100">
                      <div 
                        className="progress-fill bg-gradient-to-r from-portfolio-blue to-portfolio-blue-dark rounded-full" 
                        data-width={skill.proficiency}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
