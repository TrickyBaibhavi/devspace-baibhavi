
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-portfolio-blue-light/20 blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-3 px-4 py-1.5 text-sm bg-portfolio-blue/10 text-portfolio-blue border-none hover:bg-portfolio-blue/20">
            Who I Am
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A dedicated and enthusiastic learner seeking to enhance technical skills through impactful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-portfolio-card p-6 card-shadow rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-portfolio-blue/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-portfolio-blue/5 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-4 flex items-center relative z-10">
              <span className="h-8 w-8 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-portfolio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Education
            </h3>
            <ul className="space-y-4 text-sm relative z-10">
              <li className="p-3 bg-white rounded-lg shadow-sm">
                <div className="font-medium">B.Tech in Computer Science and Engineering</div>
                <div className="text-gray-600">Jodhpur Institute of Engineering and Technology</div>
                <div className="text-gray-500 flex items-center">
                  <Badge variant="outline" className="mr-2 bg-portfolio-blue/5 border-portfolio-blue/20 text-xs px-1.5">Expected 2026</Badge>
                  <span>CGPA 8.96</span>
                </div>
              </li>
              <li className="p-3 bg-white rounded-lg shadow-sm">
                <div className="font-medium">Diploma in Computer Science and Engineering</div>
                <div className="text-gray-600">State Board of Technical Education, Bihar</div>
                <div className="text-gray-500 flex items-center">
                  <Badge variant="outline" className="mr-2 bg-portfolio-blue/5 border-portfolio-blue/20 text-xs px-1.5">2022</Badge>
                  <span>CGPA 8.0, 2nd in batch</span>
                </div>
              </li>
              <li className="p-3 bg-white rounded-lg shadow-sm">
                <div className="font-medium">Senior Secondary Education</div>
                <div className="text-gray-500">Bihar School Examination Board</div>
              </li>
              <li className="p-3 bg-white rounded-lg shadow-sm">
                <div className="font-medium">Secondary Education</div>
                <div className="text-gray-500">Bihar School Examination Board</div>
              </li>
            </ul>
          </Card>

          <Card className="bg-portfolio-card p-6 card-shadow rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-portfolio-blue/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-portfolio-blue/5 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-4 flex items-center relative z-10">
              <span className="h-8 w-8 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-portfolio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Experience
            </h3>
            <div className="relative z-10 p-4 bg-white rounded-lg shadow-sm">
              <div className="font-medium text-portfolio-blue">Full-Stack Developer Intern</div>
              <div className="text-gray-600">Ardent Comptech Pvt. Ltd.</div>
              <div className="text-gray-500 mb-3">
                <Badge variant="outline" className="bg-portfolio-blue/5 border-portfolio-blue/20 text-xs px-1.5">May 2023 - Present</Badge>
              </div>
              <ul className="mt-2 text-sm list-disc list-inside text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-portfolio-blue inline-block mr-2 mt-1">•</span>
                  <span>Developed responsive web interfaces using React.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-blue inline-block mr-2 mt-1">•</span>
                  <span>Created RESTful APIs with Node.js and Express</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-blue inline-block mr-2 mt-1">•</span>
                  <span>Worked with MongoDB for database management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-blue inline-block mr-2 mt-1">•</span>
                  <span>Collaborated with senior developers on code reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-blue inline-block mr-2 mt-1">•</span>
                  <span>Participated in agile development processes</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="bg-portfolio-card p-6 card-shadow rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-portfolio-blue/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-portfolio-blue/5 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-4 flex items-center relative z-10">
              <span className="h-8 w-8 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-portfolio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Personal
            </h3>
            <div className="relative z-10 p-4 bg-white rounded-lg shadow-sm mb-3">
              <p className="text-gray-600 mb-4 text-sm">
                I'm a passionate full-stack developer who loves building web applications that solve real-world problems. My journey in tech started with curiosity and has developed into a deep interest in creating elegant, efficient solutions.
              </p>
            </div>
            <div className="relative z-10 p-4 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm">
                When not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge through online courses and technical documentation.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
