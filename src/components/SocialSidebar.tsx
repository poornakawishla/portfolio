import React from "react";
import { Linkedin, Instagram, Dribbble, MessageCircle } from "lucide-react";

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/poornakawishla/",
      color: "hover:bg-brand-primary",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/poornakawishla",
      color: "hover:bg-brand-gradient-end",
    },
    {
      icon: Dribbble,
      label: "Dribbble",
      url: "https://dribbble.com/poornakawishla",
      color: "hover:bg-brand-primary",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/94771234567",
      color: "hover:bg-green-500",
    },
  ];

  return (
    <>
      {/* Desktop - Fixed Left Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {socialLinks.map(({ icon: Icon, label, url, color }, index) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-12 h-12 bg-gray-700 dark:bg-text-secondary/20 rounded-full flex items-center justify-center text-white dark:text-text-secondary transition-all duration-200 hover:scale-110 ${color} shadow-sm hover:shadow-md animate-in slide-in-from-left-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon size={20} className="transition-transform duration-200" />

              {/* Hover tooltip */}
              <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="bg-gray-900 dark:bg-bg-dark text-white dark:text-text-primary px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-gray-700 dark:border-text-secondary/20 animate-in slide-in-from-left-2">
                  poornakawishla
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900 dark:border-r-bg-dark"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile - Fixed Bottom */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="flex items-center space-x-4 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-md rounded-full px-6 py-3 shadow-sm border border-gray-200 dark:border-text-secondary/20 animate-in slide-in-from-bottom-2">
          {socialLinks.map(({ icon: Icon, label, url, color }, index) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-10 h-10 bg-gray-700 dark:bg-text-secondary/20 rounded-full flex items-center justify-center text-white dark:text-text-secondary transition-all duration-200 hover:scale-110 ${color} shadow-sm hover:shadow-md`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon size={18} className="transition-transform duration-200" />

              {/* Mobile hover tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="bg-gray-900 dark:bg-bg-dark text-white dark:text-text-primary px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-lg border border-gray-700 dark:border-text-secondary/20 animate-in slide-in-from-bottom-2">
                  poornakawishla
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-bg-dark"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
