import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Dribbble,
  Figma,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState("Web Design");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hi@poorna.xyz" },
    { icon: MapPin, label: "Location", value: "Kuliyapitiya,Sri Lanka" },
    { icon: Phone, label: "Phone", value: "(+94) 77 760 4869" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/poornakawishla/",
      color: "hover:text-brand-primary",
    },
    {
      icon: Dribbble,
      label: "Dribbble",
      url: "https://dribbble.com/poornakawishla",
      color: "hover:text-brand-gradient-end",
    },
    {
      icon: Figma,
      label: "Figma",
      url: "https://www.figma.com/@poornakawishla",
      color: "hover:text-brand-primary",
    },
  ];

  const projectTypes = [
    "Web Design",
    "Mobile App Design",
    "UX Research",
    "Design System",
    "Brand Identity",
    "UI/UX Audit",
    "Prototyping",
    "Other",
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProjectTypeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSocialLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleProjectTypeSelect = (type: string) => {
    setSelectedProjectType(type);
    setIsProjectTypeOpen(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-bg-light dark:bg-bg-dark transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="scroll-reveal text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            Have a design challenge? I'd love to help you create user
            experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-reveal bg-white dark:bg-bg-dark rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-text-secondary/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-6">
              Start a Project
            </h3>

            {/* Formspree form */}
            <form
              action="https://formspree.io/f/movwyoon"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-text-secondary/30 dark:bg-bg-dark dark:text-text-primary rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-text-secondary/30 dark:bg-bg-dark dark:text-text-primary rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-text-secondary/30 dark:bg-bg-dark dark:text-text-primary rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                  placeholder="john@company.com"
                />
              </div>

              {/* Hidden input to capture project type for Formspree */}
              <input
                type="hidden"
                name="projectType"
                value={selectedProjectType}
              />

              {/* Project Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-2">
                  Project Type
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-text-secondary/30 dark:bg-bg-dark dark:text-text-primary rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 flex items-center justify-between hover:border-brand-primary/50 dark:hover:border-brand-primary/50 text-left"
                  >
                    <span className="text-gray-900 dark:text-text-primary">
                      {selectedProjectType}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 dark:text-text-secondary transition-transform duration-200 ${
                        isProjectTypeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isProjectTypeOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 rounded-lg shadow-lg z-50 animate-in slide-in-from-top-2 duration-200 max-h-60 overflow-y-auto">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleProjectTypeSelect(type)}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-text-secondary/10 transition-colors duration-200 ${
                            selectedProjectType === type
                              ? "bg-brand-primary/10 text-brand-primary"
                              : "text-gray-700 dark:text-text-secondary hover:text-gray-900 dark:hover:text-text-primary"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{type}</span>
                            {selectedProjectType === type && (
                              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-text-secondary/30 dark:bg-bg-dark dark:text-text-primary rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
              >
                Send Project Brief
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="scroll-reveal bg-white dark:bg-bg-dark rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-text-secondary/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                      <Icon size={20} className="transition-transform duration-200" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-text-secondary">
                        {label}
                      </p>
                      <p className="text-lg text-gray-900 dark:text-text-primary group-hover:text-brand-primary transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-reveal bg-white dark:bg-bg-dark rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-text-secondary/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-6">
                Follow My Work
              </h3>

              <div className="flex space-x-4 mb-6">
                {socialLinks.map(({ icon: Icon, label, url, color }) => (
                  <button
                    key={label}
                    onClick={() => handleSocialLinkClick(url)}
                    className={`w-12 h-12 bg-gray-100 dark:bg-text-secondary/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-text-secondary ${color} transition-all duration-200 hover:scale-110 group`}
                    aria-label={label}
                  >
                    <Icon size={20} className="transition-transform duration-200" />
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleSocialLinkClick("https://wa.me/94777604869")}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 group"
                >
                  <MessageCircle size={20} className="transition-transform duration-200" />
                  <span>Contact on Whatsapp</span>
                </button>

                <button
                  onClick={() => handleSocialLinkClick("mailto:hi@poorna.xyz")}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 group"
                >
                  <Mail size={20} className="transition-transform duration-200"/>
                  <span>Drop an Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
