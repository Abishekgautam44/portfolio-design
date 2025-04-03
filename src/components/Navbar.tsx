
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { text: "Home", id: "home" },
    { text: "About", id: "about" },
    { text: "Projects", id: "projects" },
    { text: "Certifications", id: "certifications" },
    { text: "Contact", id: "contact" },
    { text: "Blog", id: "blog", external: true, url: "https://blog.abishekgautam.com.np" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient"></h1>
            </a>
          </div>

          {isMobile ? (
            <>
              <button
                className="p-2 rounded-md focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} className="text-cloud-800" />
              </button>

              {mobileMenuOpen && (
                <div className="absolute top-16 right-0 left-0 bg-white border-b shadow-lg animate-fadeIn">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.external ? item.url : `#${item.id}`}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          activeSection === item.id
                            ? "text-cloud-500 bg-cloud-50"
                            : "text-gray-700 hover:text-cloud-500 hover:bg-cloud-50"
                        }`}
                        onClick={(e) => {
                          if (!item.external) {
                            e.preventDefault();
                            onNavigate(item.id);
                            setMobileMenuOpen(false);
                          }
                        }}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.external ? item.url : `#${item.id}`}
                  className={`text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-cloud-600"
                      : "text-gray-700 hover:text-cloud-500"
                  }`}
                  onClick={(e) => {
                    if (!item.external) {
                      e.preventDefault();
                      onNavigate(item.id);
                    }
                  }}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          )}

          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cloud-600 hover:bg-cloud-700 shadow-sm transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
