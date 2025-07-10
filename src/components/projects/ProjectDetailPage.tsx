import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Figma, Calendar, User, Target, Download } from 'lucide-react';
import { getProjectBySlug } from '../../data/updatedProjectsData';
import ThemeToggle from '../ThemeToggle';
import ImageGallery from './ImageGallery';

const ProjectDetailPage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:scale-105 transition-all duration-200"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate('/#projects');
  };

  const handleExternalClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
              {project.figmaUrl && (
                <button
                  onClick={() => handleExternalClick(project.figmaUrl!)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:scale-105 transition-all duration-200"
                >
                  <Figma size={16} />
                  <span>View in Figma</span>
                </button>
              )}
              
              <button
                onClick={() => handleExternalClick(project.liveUrl)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:border-brand-primary hover:text-brand-primary transition-all duration-200 hover:scale-105"
              >
                <ExternalLink size={16} />
                <span>View Live</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium capitalize">
            {project.category.replace('-', ' ')}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-text-primary mb-6 leading-tight">
          {project.title}
        </h1>

        {/* Project Meta */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 p-6 bg-white dark:bg-bg-dark rounded-2xl border border-gray-200 dark:border-text-secondary/20 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-text-secondary">Duration</p>
              <p className="font-semibold text-gray-900 dark:text-text-primary">
                {project.duration || 'N/A'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-text-secondary">Role</p>
              <p className="font-semibold text-gray-900 dark:text-text-primary">
                {project.role || 'Designer'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
              <Target size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-text-secondary">Platform</p>
              <p className="font-semibold text-gray-900 dark:text-text-primary">
                {project.platform || 'Digital'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>
          {project.fullDescription && (
            <p className="text-gray-600 dark:text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>
          )}
        </div>

        {/* Features */}
        {project.features && (
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-6">
              Key Features
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Image Gallery for AI Images */}
        {project.category === 'ai-images' && project.images && (
          <ImageGallery 
            images={project.images} 
            title={project.title}
            downloadUrl={project.downloadUrl}
          />
        )}

        {/* Additional Images Gallery for other projects */}
        {project.category !== 'ai-images' && project.images && (
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-6">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                />
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {project.figmaUrl && (
            <button
              onClick={() => handleExternalClick(project.figmaUrl!)}
              className="flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:scale-105 transition-all duration-200"
            >
              <Figma size={20} />
              <span>View in Figma</span>
            </button>
          )}
          
          <button
            onClick={() => handleExternalClick(project.liveUrl)}
            className="flex items-center justify-center space-x-2 px-8 py-3 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:border-brand-primary hover:text-brand-primary transition-all duration-200 hover:scale-105"
          >
            <ExternalLink size={20} />
            <span>View Live Project</span>
          </button>

          {project.downloadUrl && (
            <button
              onClick={() => handleExternalClick(project.downloadUrl!)}
              className="flex items-center justify-center space-x-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200"
            >
              <Download size={20} />
              <span>Download</span>
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;