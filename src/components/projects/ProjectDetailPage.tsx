import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import { featuredProjects, additionalProjects } from '../../data/projectsData';

const ProjectDetailPage: React.FC = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    navigate('/#projects');
  };

  // Route to specific project pages based on slug
  useEffect(() => {
    if (slug === 'mydialog-case-study') {
      navigate('/case-study/mydialog');
      return;
    }
    if (slug === 'elara-brand-identity') {
      navigate('/elara-brand-identity');
      return;
    }
    if (slug === 'auraya-graphic-design') {
      navigate('/auraya-graphic-design');
      return;
    }
    // If no specific route found, go to error page
    navigate('/error');
  }, [slug, navigate]);

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
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-text-primary mb-6">
            Loading Project...
          </h1>
          <p className="text-xl text-gray-600 dark:text-text-secondary">
            Redirecting to project page...
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;