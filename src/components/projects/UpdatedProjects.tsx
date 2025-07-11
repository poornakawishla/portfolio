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
    console.log("Navigating for project:", project); // Debug log
    switch (project.id) {
      case 1:
        navigate("/case-study/mydialog"); // Matches existing route
        break;
      case 2:
        navigate("/Brand-identity/Elara"); // Uses dynamic route
        break;
      case 3:
        navigate("/graphic/Auraya"); // Uses dynamic route
        break;
      default:
        navigate("/error");
        break;
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