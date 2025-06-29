import React from "react";
import { Heart, Code, Sparkles, Zap, Star, Rocket } from "lucide-react";
import logo from "../assets/Standalone Symbol-4.png"; // Adjust the path as necessary

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-bg-dark dark:via-gray-900 dark:to-bg-dark text-white dark:text-text-primary py-16 border-t border-gray-800 dark:border-text-secondary/20 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimal floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {i % 2 === 0 && <Star size={4} className="text-brand-primary/20" />}
            {i % 2 === 1 && (
              <div className="w-1 h-1 bg-brand-primary/20 rounded-full" />
            )}
          </div>
        ))}

        {/* Subtle gradient orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-brand-primary/5 to-brand-gradient-end/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-brand-gradient-end/5 to-brand-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="scroll-reveal flex items-center justify-center space-x-3 mb-8 group">
            <img
              src={logo}
              alt="Poorna Logo"
              className="h-[100px] w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>

          {/* Description */}
          <div className="scroll-reveal mb-10 space-y-4">
            <p className="text-gray-300 dark:text-text-secondary text-lg max-w-2xl mx-auto group hover:text-gray-200 dark:hover:text-text-primary transition-colors duration-200">
              I bring a user-first mindset to every design I create. Oh, and if
              you’re into Formula 1, we’ll have Cofee to talk about.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 dark:text-text-secondary">
              <div className="flex items-center space-x-2 group hover:text-brand-primary transition-colors duration-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-brand-primary transition-colors duration-200">
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span>Open to collaborations</span>
              </div>
            </div>
          </div>

          {/* Made With Section */}
          <div className="scroll-reveal mb-10">
            <div className="flex items-center justify-center space-x-3 text-gray-400 dark:text-text-secondary mb-6 flex-wrap">
              <span className="hover:text-brand-primary transition-colors duration-200">
                made with poorna
              </span>
              <Code
                size={18}
                className="text-brand-primary hover:scale-125 transition-transform duration-200 cursor-pointer"
              />
            </div>

            {/* Tech Stack */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {["Figma","Adobe", "React", "Tailwind CSS", "Framer"].map(
                (tech, index) => (
                  <div
                    key={tech}
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-brand-primary/10 transition-all duration-200 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="scroll-reveal relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700 dark:border-text-secondary/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-bg-dark dark:via-gray-900 dark:to-bg-dark px-6">
                <div className="flex space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-gradient-end rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="scroll-reveal space-y-4">
            <div className="text-gray-400 dark:text-text-secondary text-sm group">
              <p className="hover:text-brand-primary transition-colors duration-200 cursor-default mb-2">
                &copy; 2024 Poorna. All rights reserved.
              </p>
              <p className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                Designed & Developed with attention to detail and passion for
                great UX
              </p>
            </div>

            {/* Quote */}
            <div className="text-xs text-gray-500 dark:text-text-secondary italic opacity-60 hover:opacity-100 transition-opacity duration-200 max-w-md mx-auto">
              "Great design is not just what it looks like and feels like. Great
              design is how it works." - Steve Jobs
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
