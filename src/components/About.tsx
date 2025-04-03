
import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: "AWS", level: 90 },
    { name: "Azure", level: 85 },
    { name: "Google Cloud", level: 80 },
    { name: "Kubernetes", level: 85 },
    { name: "Terraform", level: 75 },
    { name: "Docker", level: 90 },
    { name: "CI/CD", level: 80 },
    { name: "Python", level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-cloud-50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a certified cloud engineer with over 2 years of experience in designing, implementing, and managing cloud infrastructure for organizations of all sizes. My expertise spans across major cloud platforms including AWS, Azure, and Google Cloud.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My approach combines technical excellence with business understanding, ensuring that cloud solutions not only meet technical requirements but also align with organizational goals and constraints.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in cloud migration, infrastructure as code, containerization, and implementing DevOps practices that enable teams to deliver software faster and more reliably.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="badge">Cloud Architecture</span>
              <span className="badge">DevOps</span>
              <span className="badge">Serverless</span>
              <span className="badge">Microservices</span>
              <span className="badge">Infrastructure as Code</span>
              <span className="badge">Cost Optimization</span>
              <span className="badge">Security</span>
              <span className="badge">Performance Tuning</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
