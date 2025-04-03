
import React, { useRef, useEffect } from "react";

interface Certification {
  id: number;
  name: string;
  provider: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

const Certifications: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Associate",
      provider: "Amazon Web Services",
      date: "2025",
      image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      credentialUrl: "https://www.credly.com/badges/c6af0343-5432-4b53-a207-0a12abe49c13/public_url",
    },
    {
      id: 2,
      name: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "2023",
      image: "https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      credentialUrl: "https://www.credly.com/badges/998c9f9d-6be9-440d-81d9-09c1b53fa813/public_url",
    },
    {
      id: 3,
      name: "AWS Academy Graduate - AWS Academy Cloud Developing",
      provider: "Amazon Web Services",
      date: "2025",
      image: "https://images.credly.com/size/680x680/images/119182cf-ca68-495a-a415-bff62dfdcc7e/image.png",
      credentialUrl: "https://www.credly.com/badges/73e74435-44c8-469b-ad14-19e18bd0c5da/public_url",
    },
    {
      id: 4,
      name: "AWS Academy Graduate - AWS Academy Cloud Operations",
      provider: "Amazon Web Services",
      date: "2025",
      image: "https://images.credly.com/size/680x680/images/fa80f3f2-0383-4d44-8c14-099e2eb3be36/image.png",
      credentialUrl: "https://www.credly.com/badges/96157f4f-a2ca-47d3-b96d-9ce1dd1b0e78/public_url",
    },
    {
      id: 5,
      name: "Red Hat System Administration I (RH124) - Ver. 9.3",
      provider: "Red Hat",
      date: "2025",
      image: "https://images.credly.com/size/680x680/images/9fd9c859-8720-44f6-9bc4-3cf719dae70e/Red_Hat_System_Administration_I.png",
      credentialUrl: "https://www.credly.com/badges/4992e850-a405-404b-a264-23304ca1f549/public_url",
    },
    {
      id: 6,
      name: "Red Hat System Administration II (RH134) - Ver. 9.3",
      provider: "Red Hat",
      date: "2025",
      image: "https://images.credly.com/size/680x680/images/9f6000df-9467-4f11-a8d5-120b365724dc/Red_Hat_System_Administration_II.png",
      credentialUrl: "https://www.credly.com/badges/169b8933-3eaf-4723-95df-3b57d86f82c3/public_url",
    },

  ];
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.cert-card');
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (containerTop < windowHeight && containerTop > -windowHeight) {
        cards.forEach((card, index) => {
          const scrollPosition = (windowHeight - containerTop) / (windowHeight * 2);
          const offset = (index - (cards.length - 1) / 2) * 20;
          (card as HTMLElement).style.transform = `translateY(${scrollPosition * offset}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-cloud-50">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div ref={containerRef} className="mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="cert-card card-glass p-6 rounded-xl flex flex-col transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{cert.provider}</h3>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </div>
                
                <h4 className="text-md font-semibold mb-4 flex-grow">{cert.name}</h4>
                
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm text-cloud-600 hover:text-cloud-700 mt-auto inline-flex items-center"
                  >
                    Verify Credential
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-cloud-200 opacity-50"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-cloud-300 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
