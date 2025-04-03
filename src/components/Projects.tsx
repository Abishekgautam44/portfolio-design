
import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      description: "Led the migration of a legacy on-premises infrastructure to AWS, resulting in 40% cost reduction and improved scalability.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["AWS", "Terraform", "CloudFormation", "Route53", "EC2", "RDS"],
    },
    {
      id: 2,
      title: "Multi-Cloud Architecture",
      description: "Designed and implemented a fault-tolerant, multi-region architecture across AWS and Azure for a financial services application.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
    },
    {
      id: 3,
      title: "Serverless Application Platform",
      description: "Built a serverless platform for processing real-time IoT data, handling millions of events daily with minimal operational overhead.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch", "SNS"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="card-glass rounded-xl overflow-hidden group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge">{tech}</span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-block mt-4 text-cloud-600 hover:text-cloud-700 font-medium"
                  >
                    View Details →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
