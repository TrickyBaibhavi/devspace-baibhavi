
import React, { useEffect, useRef } from 'react';

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
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skills</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These are the technologies and skills I've worked with and continue to develop.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue-dark">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs font-medium text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill bg-portfolio-blue" 
                        data-width={skill.proficiency}
                        style={{ width: "0%" }} // Start at 0 and animate to full width
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
