import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    // Create smooth morphing transition
    const button = document.querySelector('.theme-toggle-button') as HTMLElement;
    if (button) {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Create morphing overlay
      const overlay = document.createElement('div');
      overlay.className = 'theme-morph-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: ${centerY}px;
        left: ${centerX}px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: ${isDark ? 'linear-gradient(135deg, #F2F2F2, #E5E5E5)' : 'linear-gradient(135deg, #1A1A1A, #2D2D2D)'};
        z-index: 9999;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
      `;
      
      document.body.appendChild(overlay);
      
      // Trigger the morphing expansion
      requestAnimationFrame(() => {
        const maxDimension = Math.max(window.innerWidth, window.innerHeight) * 2.5;
        overlay.style.width = `${maxDimension}px`;
        overlay.style.height = `${maxDimension}px`;
        overlay.style.borderRadius = '0%';
      });
      
      // Toggle theme after expansion starts
      setTimeout(() => {
        toggleTheme();
      }, 400);
      
      // Remove overlay after animation
      setTimeout(() => {
        overlay.remove();
      }, 800);
    } else {
      toggleTheme();
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-40">
      <button
        onClick={handleThemeToggle}
        className="theme-toggle-button w-12 h-12 bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 rounded-full flex items-center justify-center text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 group relative overflow-hidden"
        aria-label="Toggle theme"
      >
        {/* Smooth icon transition */}
        <div className="relative w-5 h-5">
          <Sun 
            size={20} 
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isDark 
                ? 'rotate-180 scale-0 opacity-0' 
                : 'rotate-0 scale-100 opacity-100'
            }`} 
          />
          <Moon 
            size={20} 
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isDark 
                ? 'rotate-0 scale-100 opacity-100' 
                : '-rotate-180 scale-0 opacity-0'
            }`} 
          />
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/0 to-brand-gradient-end/0 group-hover:from-brand-primary/10 group-hover:to-brand-gradient-end/10 transition-all duration-300"></div>
      </button>
    </div>
  );
};

export default ThemeToggle;