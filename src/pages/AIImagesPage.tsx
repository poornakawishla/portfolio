import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { getProjectsByCategory } from '../data/updatedProjectsData';
import ThemeToggle from '../components/ThemeToggle';
import ImageGallery from '../components/projects/ImageGallery';

const AIImagesPage: React.FC = () => {
  const navigate = useNavigate();
  const aiProjects = getProjectsByCategory('ai-images');

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
              className="flex items-center space-x-2 text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-200 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-text-secondary">
                {aiProjects.length} AI Collections
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-full mb-6">
            <span className="text-2xl">🤖</span>
            <span className="text-sm font-medium text-brand-primary">AI Generated</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-text-primary mb-6 leading-tight">
            AI Image Collections
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            Explore my AI-generated artwork collections. Each piece represents a unique exploration 
            of creativity through artificial intelligence, available for download and use in your projects.
          </p>
        </div>

        {/* AI Projects Grid */}
        <div className="space-y-16">
          {aiProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-text-secondary">
                    {project.description}
                  </p>
                </div>
                
                {project.downloadUrl && (
                  <button
                    onClick={() => window.open(project.downloadUrl, '_blank')}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <Download size={20} />
                    <span>Download Collection</span>
                  </button>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image Gallery */}
              {project.images && (
                <ImageGallery 
                  images={project.images} 
                  title={project.title}
                  downloadUrl={project.downloadUrl}
                />
              )}

              {/* Project Details */}
              {project.features && (
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-text-secondary/20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">
                    Collection Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-16 border-t border-gray-200 dark:border-text-secondary/20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Need Custom AI Artwork?
          </h2>
          <p className="text-gray-600 dark:text-text-secondary mb-6 max-w-2xl mx-auto">
            I can create custom AI-generated artwork for your specific needs. 
            From concept art to marketing visuals, let's explore the possibilities together.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="px-8 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Custom AI Art
          </button>
        </div>
      </main>
    </div>
  );
};

export default AIImagesPage;