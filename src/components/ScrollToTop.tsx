import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-20 z-40 w-12 h-12 bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 rounded-full flex items-center justify-center text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;