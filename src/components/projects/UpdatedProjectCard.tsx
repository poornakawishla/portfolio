import React from "react";
import { ExternalLink, Figma, Eye, Layers } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  figmaUrl?: string;
  liveUrl?: string;
  images?: string[];
}

interface UpdatedProjectCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
  onQuickPreview: (project: Project) => void;
  onFigmaClick: (url: string) => void;
  onLiveClick: (url: string) => void;
  onImagePreview: (images: string[], index: number) => void;
}

const UpdatedProjectCard: React.FC<UpdatedProjectCardProps> = ({
  project,
  onViewProject,
  onQuickPreview,
  onFigmaClick,
  onLiveClick,
  onImagePreview,
}) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          onClick={() => project.images && onImagePreview(project.images, 0)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-primary/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            {/* Quick Preview Button */}
            <button
              onClick={() => onQuickPreview(project)}
              className="flex items-center space-x-2 px-4 py-2 bg-white/90 hover:bg-white text-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Eye size={16} />
              <span>Quick Preview</span>
            </button>
            
            {/* View Project Button */}
            <button
              onClick={() => onViewProject(project)}
              className="flex items-center space-x-2 px-4 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Layers size={16} />
              <span>View Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* External Links */}
        <div className="flex space-x-3">
          {project.figmaUrl && (
            <button
              onClick={() => onFigmaClick(project.figmaUrl!)}
              className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm transition-colors duration-200"
            >
              <Figma size={14} />
              <span>Figma</span>
            </button>
          )}
          {project.liveUrl && (
            <button
              onClick={() => onLiveClick(project.liveUrl!)}
              className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm transition-colors duration-200"
            >
              <ExternalLink size={14} />
              <span>Live</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdatedProjectCard;