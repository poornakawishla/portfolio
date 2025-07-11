import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ExternalLink,
  Figma,
  Eye,
  X,
  Layers,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { useParallax } from "../../hooks/useParallax";
import { featuredProjects, additionalProjects } from "../../data/projectsData";
import UpdatedProjectCard from "./UpdatedProjectCard";
import ProjectModal from "./ProjectModal";

const UpdatedProjects: React.FC = () => {
  const navigate = useNavigate();
  const scrollY = useParallax();

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedProjects = showAllProjects
    ? [...featuredProjects, ...additionalProjects]
    : featuredProjects;

  const handleViewProject = (project: any) => {
    // Navigate to custom project pages
    if (project.id === 1) {
      navigate('/case-study/mydialog');
    } else if (project.id === 2) {
      navigate('/elara-brand-identity');
    } else if (project.id === 3) {
      navigate('/auraya-graphic-design');
    } else {
      navigate('/error');
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

  const goPrev = () => {
    if (selectedImages) {
      setCurrentIndex(
        (currentIndex - 1 + selectedImages.length) % selectedImages.length
      );
    }
  };

  const goNext = () => {
    if (selectedImages) {
      setCurrentIndex((currentIndex + 1) % selectedImages.length);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-bg-light dark:bg-bg-dark transition-colors duration-300 relative overflow-hidden"
    >
      {/* parallax decor */}
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
            {showAllProjects ? "All Projects" : "Featured Projects"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            A showcase of my recent design work, demonstrating user-centered
            design principles and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <UpdatedProjectCard
              key={project.id}
              project={project}
              onViewProject={handleViewProject}
              onQuickPreview={handleQuickPreview}
              onFigmaClick={handleFigmaClick}
              onLiveClick={handleLiveClick}
              onImagePreview={handleImagePreview}
            />
          ))}
        </div>

<<<<<<< HEAD

=======
        {/* View More Projects Button */}
        {!showAllProjects && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white dark:bg-bg-dark border-2 border-gray-200 dark:border-text-secondary/20 text-gray-700 dark:text-text-secondary rounded-xl font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <Plus size={20} className="transition-transform duration-200" />
              <span>View More Projects</span>
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="inline-flex items-center">
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() =>
                  window.open(
                    "https://www.behance.net/poornakawishla",
                    "_blank"
                  )
                }
                className="group relative flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-xl font-medium hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 hover:scale-105"
              >
                <FaBehance className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                <span>More UI Screens on My Behance</span>
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            </div>
          </button>
        </div>

        {/* Show Less Button */}
        {showAllProjects && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(false)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-100 dark:bg-text-secondary/20 text-gray-700 dark:text-text-secondary rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-text-secondary/30 transition-all duration-200 hover:scale-105"
            >
              <span>Show Less</span>
            </button>
          </div>
        )}
>>>>>>> 06d19c9ae185ee736c4f4dabe2aba9bdb6508b3f
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Image Slider Modal */}
      {selectedImages && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={closeImagePreview}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            <X size={20} />
          </button>
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={selectedImages[currentIndex]}
            alt="Project Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
          />
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default UpdatedProjects;