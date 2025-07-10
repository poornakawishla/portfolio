import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Filter } from "lucide-react";
import { useParallax } from "../../hooks/useParallax";
import { allProjects, getFeaturedProjects } from "../../data/updatedProjectsData";
import { projectCategories } from "../../data/projectCategories";
import UpdatedProjectCard from "./UpdatedProjectCard";
import ProjectModal from "./ProjectModal";
import ImageGallery from "./ImageGallery";

const UpdatedProjects: React.FC = () => {
  const navigate = useNavigate();
  const scrollY = useParallax();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get projects based on category and view mode
  const getDisplayedProjects = () => {
    let projects = selectedCategory === 'all' ? allProjects : allProjects.filter(p => p.category === selectedCategory);
    
    if (!showAllProjects) {
      projects = selectedCategory === 'all' ? getFeaturedProjects() : projects.slice(0, 3);
    }
    
    return projects;
  };

  const displayedProjects = getDisplayedProjects();

  const handleViewProject = (project: any) => {
    if (project.hasCaseStudy && project.slug === 'mydialog-app-redesign') {
      navigate("/case-study/mydialog");
    } else {
      navigate(`/${project.category}/${project.slug}`);
    }
  };

  const handleQuickPreview = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleFigmaClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleLiveClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleImagePreview = (images: string[], index = 0) => {
    setSelectedImages(images);
    setCurrentIndex(index);
  };

  const closeImagePreview = () => {
    setSelectedImages(null);
    setCurrentIndex(0);
  };

  // Update category counts
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return allProjects.length;
    return allProjects.filter(p => p.category === categoryId).length;
  };

  return (
    <section
      id="projects"
      className="py-20 bg-bg-light dark:bg-bg-dark transition-colors duration-300 relative overflow-hidden"
    >
      {/* Parallax decor */}
      <div className="hidden lg:block">
        <div
          className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-brand-primary/5 to-brand-gradient-end/5 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        ></div>
        <div
          className="absolute bottom-10 right-20 w-20 h-20 bg-gradient-to-br from-brand-gradient-end/5 to-brand-primary/5 rounded-lg rotate-45 blur-lg"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${
              45 + scrollY * 0.03
            }deg)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            Explore my work across different categories - from UX case studies to AI-generated artwork.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white shadow-lg'
                : 'bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 text-gray-700 dark:text-text-secondary hover:border-brand-primary'
            }`}
          >
            <Filter size={16} />
            <span>All Projects ({getCategoryCount('all')})</span>
          </button>
          
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white shadow-lg'
                  : 'bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 text-gray-700 dark:text-text-secondary hover:border-brand-primary'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name} ({getCategoryCount(category.id)})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <UpdatedProjectCard
              key={project.id}
              project={project}
              onPreview={handleQuickPreview}
              onViewProject={handleViewProject}
              onFigmaClick={handleFigmaClick}
              onLiveClick={handleLiveClick}
              onImagePreview={handleImagePreview}
            />
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="text-center">
          {!showAllProjects && getDisplayedProjects().length < (selectedCategory === 'all' ? allProjects.length : allProjects.filter(p => p.category === selectedCategory).length) && (
            <button
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white dark:bg-bg-dark border-2 border-gray-200 dark:border-text-secondary/20 text-gray-700 dark:text-text-secondary rounded-xl font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <ChevronDown size={20} />
              <span>View More Projects</span>
            </button>
          )}

          {showAllProjects && (
            <button
              onClick={() => setShowAllProjects(false)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-100 dark:bg-text-secondary/20 text-gray-700 dark:text-text-secondary rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-text-secondary/30 transition-all duration-200 hover:scale-105"
            >
              <span>Show Less</span>
            </button>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Image Preview Modal */}
      {selectedImages && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <ImageGallery
            images={selectedImages}
            title="Project Images"
          />
          <button
            onClick={closeImagePreview}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default UpdatedProjects;