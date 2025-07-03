import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import {
  User,
  Briefcase,
  Mail,
  ChevronDown,
  FileText,
  Edit3,
  Layers,
  Linkedin,
  X,
  Menu,
  Wrench,
  Globe,
  Palette,
  Code,
} from "lucide-react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Work", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const resourceItems = [
    {
      category: "Design Resources",
      items: [
        {
          icon: Palette,
          title: "Design Files",
          description: "Complete design files with all project components",
          url: "https://www.figma.com/community/file/1422427483108442267",
          isExternal: true,
        },
        {
          icon: Layers,
          title: "Design System",
          description: "Comprehensive design system and components",
          url: "https://www.figma.com/community/file/1508087863713557379/layrr-design-modern-ui-design-system-v1",
          isExternal: true,
        },
      ],
    },
    {
      category: "Content",
      items: [
        {
          icon: Edit3,
          title: "Medium Profile",
          description: "Read my latest articles and insights",
          url: "https://medium.com/@poornakawishla",
          isExternal: true,
        },
      ],
    },
    // {
    //   category: "Products",
    //   items: [
    //     {
    //       icon: Wrench,
    //       title: "Toolfolio",
    //       description: "Helpful tool collection for designers",
    //       url: "#",
    //       isExternal: true,
    //     },
    //     {
    //       icon: FileText,
    //       title: "Layrrmail",
    //       description: "Professional email signature templates",
    //       url: "#",
    //       isExternal: true,
    //     },
    //   ],
    // },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileResourcesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
    setIsMobileResourcesOpen(false);
  };

  const handleResourceClick = (url: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url);
    }
    setIsResourcesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileResourcesOpen(false);
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/poornakawishla/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileResourcesOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 z-50 pt-2 bg-white/95 dark:bg-bg-dark/95 backdrop-blur-md border-b border-gray-200/50 dark:border-text-secondary/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 group relative z-10"
            >
              <div className="relative">
                <img
                  src={Logo}
                  alt="Poorna Logo"
                  className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-gradient-start/20 to-brand-gradient-end/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
              </div>
            </button>

            {/* Navigation - Center (Desktop) */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`group relative flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "text-white bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end shadow-lg shadow-brand-primary/25"
                      : "text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon
                    size={16}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>{label}</span>
                  {activeSection !== id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  )}
                </button>
              ))}

              {/* Resources Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  className={`group relative flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isResourcesOpen
                      ? "text-white bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end shadow-lg shadow-brand-primary/25"
                      : "text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  <Globe
                    size={16}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>Resources</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isResourcesOpen ? "rotate-180" : ""
                    } group-hover:scale-110`}
                  />
                  {!isResourcesOpen && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  )}
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-80 transition-all duration-300 ${
                    isResourcesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  style={{ paddingTop: "8px" }}
                >
                  <div className="bg-white dark:bg-bg-dark rounded-2xl shadow-xl border border-gray-200/50 dark:border-text-secondary/20 py-6 backdrop-blur-md">
                    {resourceItems.map((category) => (
                      <div
                        key={category.category}
                        className="px-6 mb-6 last:mb-0"
                      >
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-text-secondary uppercase tracking-wider mb-4">
                          {category.category}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                handleResourceClick(item.url, item.isExternal)
                              }
                              className="w-full flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 group text-left"
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                                <item.icon size={18} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm font-semibold text-gray-900 dark:text-text-primary group-hover:text-brand-primary transition-colors duration-200">
                                    {item.title}
                                  </p>
                                  {item.isExternal && (
                                    <Globe
                                      size={12}
                                      className="text-gray-400 dark:text-text-secondary"
                                    />
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-text-secondary mt-1 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side - LinkedIn (Desktop only) */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleLinkedInClick}
                className="group relative flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-xl font-medium hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 hover:scale-105"
              >
                <Linkedin
                  size={16}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                <span>Connect</span>
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 hover:scale-110 group relative z-10"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-90 scale-0"
                      : "rotate-0 scale-100"
                  } group-hover:scale-110`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-0 scale-100"
                      : "-rotate-90 scale-0"
                  } group-hover:scale-110`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - Separate Portal */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white/98 dark:bg-bg-dark/98 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
          <div className="h-full flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-text-secondary/20">
              <button
                onClick={() => {
                  closeMobileMenu();
                  scrollToSection("hero");
                }}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
              >
                <img src={Logo} alt="Poorna Logo" className="h-10 w-auto" />
              </button>
              <button
                onClick={closeMobileMenu}
                className="p-2.5 rounded-xl text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto">
              {/* Mobile Navigation Links */}
              {navItems.map(({ id, label, icon: Icon }, index) => (
                <button
                  key={id}
                  onClick={() => handleMobileNavClick(id)}
                  className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl text-left font-medium transition-all duration-200 hover:scale-105 animate-in slide-in-from-left-2 ${
                    activeSection === id
                      ? "text-white bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end shadow-lg"
                      : "text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon
                    size={20}
                    className="transition-transform duration-200"
                  />
                  <span>{label}</span>
                </button>
              ))}

              {/* Mobile Resources Section */}
              <div
                className="border-t border-gray-200 dark:border-text-secondary/20 pt-4 animate-in slide-in-from-left-2"
                style={{ animationDelay: "400ms" }}
              >
                <button
                  onClick={() =>
                    setIsMobileResourcesOpen(!isMobileResourcesOpen)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded-xl font-medium"
                >
                  <div className="flex items-center space-x-4">
                    <Globe size={20} />
                    <span>Resources</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isMobileResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileResourcesOpen && (
                  <div className="mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
                    {resourceItems.map((category, categoryIndex) => (
                      <div key={category.category} className="ml-4">
                        <h5 className="text-xs font-medium text-gray-400 dark:text-text-secondary uppercase tracking-wider mb-2 px-4">
                          {category.category}
                        </h5>
                        {category.items.map((item, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleResourceClick(item.url, item.isExternal)
                            }
                            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 text-left rounded-xl hover:scale-105"
                          >
                            <item.icon
                              size={18}
                              className="transition-transform duration-200"
                            />
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">
                                {item.title}
                              </span>
                              {item.isExternal && (
                                <Globe
                                  size={12}
                                  className="text-gray-400 dark:text-text-secondary"
                                />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile LinkedIn Button */}
            <div
              className="border-t border-gray-200 dark:border-text-secondary/20 p-6 animate-in slide-in-from-bottom-2"
              style={{ animationDelay: "500ms" }}
            >
              <button
                onClick={() => {
                  handleLinkedInClick();
                  closeMobileMenu();
                }}
                className="w-full flex items-center justify-center space-x-3 px-5 py-4 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-xl font-medium hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-200 hover:scale-105"
              >
                <Linkedin
                  size={18}
                  className="transition-transform duration-200"
                />
                <span>Connect on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
