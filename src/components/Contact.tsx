
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    emailjs.send(
      'service_hqy4zmt', 
      'template_avb3d99', 
      templateParams, 
      'gw106xTrwr-d6tuuo'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setLoading(false);
      toast({
        title: "Message failed to send",
        description: "There was an issue sending your message. Please try again later.",
        variant: "destructive"
      });
    });
  };
  
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-blue-light p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a href="mailto:baibhavikumari747@gmail.com" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    baibhavikumari747@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-blue-light p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a href="tel:+918252540198" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    +91 8252540198
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-blue-light p-3 rounded-lg mr-4">
                  <Linkedin className="h-5 w-5 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">LinkedIn</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-blue-light p-3 rounded-lg mr-4">
                  <Github className="h-5 w-5 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">GitHub</h4>
                  <a href="https://github.com/TrickyBaibhavi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    github.com/TrickyBaibhavi
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-gray-300 focus-visible:ring-portfolio-blue"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 focus-visible:ring-portfolio-blue"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-gray-300 focus-visible:ring-portfolio-blue"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-gray-300 focus-visible:ring-portfolio-blue min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-portfolio-blue hover:bg-portfolio-blue-dark text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
