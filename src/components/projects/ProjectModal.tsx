import React from 'react';
import { X, ExternalLink, Figma, Calendar, User, Target, Dribbble } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const handleExternalClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleBehanceClick = () => {
    window.open('https://behance.net/poornakawishla', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal - Full width, fixed to bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-bg-dark rounded-t-3xl max-h-[85vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-2 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-bg-dark border-b border-gray-200 dark:border-text-secondary/20 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            {/* Drag Handle */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-1 bg-gray-300 dark:bg-text-secondary/40 rounded-full"></div>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-text-primary truncate">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-text-secondary">
                  {project.category}
                </p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 dark:bg-text-secondary/20 rounded-full flex items-center justify-center text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 hover:scale-110 ml-4"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-4 sm:p-6">
          {/* Project Image */}
          <div className="mb-6">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover rounded-xl"
            />
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-text-secondary/10 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
                <Calendar size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-text-secondary">Duration</p>
                <p className="font-semibold text-gray-900 dark:text-text-primary text-sm">
                  {project.duration || '2-3 Weeks'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
                <User size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-text-secondary">Role</p>
                <p className="font-semibold text-gray-900 dark:text-text-primary text-sm">
                  {project.role || 'UI/UX Designer'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
                <Target size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-text-secondary">Platform</p>
                <p className="font-semibold text-gray-900 dark:text-text-primary text-sm">
                  {project.platform || 'Web/Mobile'}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-3">
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-text-secondary leading-relaxed mb-4">
              {project.description}
            </p>
            {project.fullDescription && (
              <p className="text-gray-600 dark:text-text-secondary leading-relaxed">
                {project.fullDescription}
              </p>
            )}
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {project.figmaUrl && (
              <button
                onClick={() => handleExternalClick(project.figmaUrl)}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105"
              >
                <Figma size={18} />
                <span>Figma</span>
              </button>
            )}
            
            <button
              onClick={() => handleExternalClick(project.liveUrl)}
              className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 hover:scale-105"
            >
              <ExternalLink size={18} />
              <span>Live View</span>
            </button>

            <button
              onClick={handleBehanceClick}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Dribbble size={18} />
              <span>Behance</span>
            </button>

            <button
              onClick={onClose}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-text-secondary/20 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-text-secondary/30 transition-all duration-200 hover:scale-105"
            >
              <X size={18} />
              <span>Close</span>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center py-4 border-t border-gray-200 dark:border-text-secondary/20">
            <p className="text-sm text-gray-500 dark:text-text-secondary">
              Want to see more work? Visit my{' '}
              <button
                onClick={handleBehanceClick}
                className="text-brand-primary hover:text-brand-gradient-end font-medium transition-colors duration-200"
              >
                Behance profile
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;