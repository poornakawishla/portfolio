import React from 'react';
import { ExternalLink, Figma, Eye, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: any;
  onPreview: (project: any) => void;
  onViewCaseStudy?: (projectId: number) => void;
  onFigmaClick?: (url: string) => void;
  onLiveClick: (url: string) => void;
  onImagePreview?: (images: string[], index?: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onPreview,
  onViewCaseStudy,
  onFigmaClick,
  onLiveClick,
  onImagePreview
}) => {
  return (
    <div className="bg-white dark:bg-bg-dark rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group border border-gray-100 dark:border-text-secondary/20">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-text-secondary hover:scale-110 transition-transform duration-200">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {project.id === 3 ? (
              <>
                <button
                  onClick={() =>
                    onImagePreview && onImagePreview([
                      "src/assets/AURAYA/AURAYA1.jpg",
                      "src/assets/AURAYA/AURAYA2.jpg",
                      "src/assets/AURAYA/AURAYA3.jpg",
                      "src/assets/AURAYA/AURAYA4.jpg",
                    ], 0)
                  }
                  className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                  title="Preview Images"
                >
                  <Eye size={18} />
                </button>
              </>
            ) : (
              <>
                {project.isUIProject && (
                  <>
                    {project.figmaUrl && (
                      <button
                        onClick={() => onFigmaClick && onFigmaClick(project.figmaUrl)}
                        className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                        title="View Figma File"
                      >
                        <Figma size={18} />
                      </button>
                    )}
                    <button
                      onClick={() => onLiveClick(project.liveUrl)}
                      className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                      title="View Prototype"
                    >
                      <Layers size={18} />
                    </button>
                  </>
                )}
                <button
                  onClick={() => onPreview(project)}
                  className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                  title="Preview"
                >
                  <Eye size={18} />
                </button>
              </>
            )}
            <button
              onClick={() => onLiveClick(project.liveUrl)}
              className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
              title="View Project"
            >
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-text-secondary mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium hover:scale-110 hover:bg-brand-primary/20 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex justify-center">
            {project.hasCaseStudy ? (
              <button
                onClick={() => onViewCaseStudy && onViewCaseStudy(project.id)}
                className="w-full px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
              >
                View Case Study
              </button>
            ) : (
              <button
                onClick={() => onPreview(project)}
                className="w-full px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
              >
                View Project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;