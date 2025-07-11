import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle';

const ElaraBrandIdentity: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    navigate('/#projects');
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <ThemeToggle />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-md border-b border-gray-200/30 dark:border-text-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 dark:text-text-secondary hover:text-brand-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('https://dribbble.com/shots/26195580-ELARA-Sleep-Wellness-brand-design-report', '_blank')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:scale-105 transition-all duration-200"
              >
                <ExternalLink size={16} />
                <span>View on Dribbble</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-text-primary mb-6">
            ELARA - Sleep & Wellness Brand
          </h1>
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            A comprehensive brand identity design for a modern wellness company
          </p>
        </div>

        {/* Custom content for ELARA brand identity */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-4">
              Brand Identity System
            </h2>
            <p className="text-gray-600 dark:text-text-secondary mb-6">
              ELARA represents tranquility and innovation in the wellness space. This custom page showcases the complete brand identity system.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 dark:text-text-primary mb-2">Logo Design</h3>
                <p className="text-gray-600 dark:text-text-secondary text-sm">Custom logo with multiple variations</p>
              </div>
              <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 dark:text-text-primary mb-2">Color Palette</h3>
                <p className="text-gray-600 dark:text-text-secondary text-sm">Calming colors for wellness brand</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ElaraBrandIdentity;