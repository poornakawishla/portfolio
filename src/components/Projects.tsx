import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Figma, Eye, X, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { useParallax } from "../hooks/useParallax";
import Casestudycover from "../assets/case-studies/Thumbnail.png";
import Elara from "../assets/case-studies/elara.png";
import AURAYA from "../assets/case-studies/AURAYA.jpg";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const scrollY = useParallax();

  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const projects = [
    {
      id: 1,
      title: "My Dialog App – UX/UI Redesign for a Smoother Sri Lankan Telecom",
      description:
        "Complete UX/UI redesign of Dialog mobile app, focusing on improving user experience and streamlining telecom services for Sri Lankan users.",
      image: Casestudycover,
      tags: ["UI UX", "Case Study", "Research"],
      figmaUrl:
        "https://www.figma.com/team_invite/redeem/YjedF1SqGuPkDAcpQXIQb9",
      liveUrl:
        "https://www.figma.com/proto/9n1RBa9jPmUYn9uKj8pdrI/My-Dialog-App-Case-Study?node-id=5-1308&t=F8wqcfGI1A2PhKY4-1",
      category: "Mobile App",
      hasCaseStudy: true,
      isUIProject: true,
    },
    {
      id: 2,
      title: "ELARA - Sleep & Wellness Brand Design Report",
      description:
        "Comprehensive brand identity design for ELARA, a sleep and wellness brand, incorporating AI-driven insights and modern design principles.",
      image: Elara,
      tags: ["AI", "Brand Identity"],
      figmaUrl: "https://dribbble.com/shots/26195580-ELARA-Sleep-Wellness-brand-design-report",
      liveUrl:
        "https://dribbble.com/shots/26195580-ELARA-Sleep-Wellness-brand-design-report",
      category: "Brand Design",
      hasCaseStudy: false,
      isUIProject: false,
    },
    {
      id: 3,
      title: "Introducing AURAYA – A Luxury Handbag Concept Brand",
      description:
        "Creative concept development and social media design for AURAYA, a luxury handbag brand, featuring sophisticated visual identity and marketing materials.",
      image: AURAYA,
      tags: ["Social Media Post", "Photoshop"],
      liveUrl:
        "https://dribbble.com/shots/26149802-Introducing-AURAYA-a-luxury-handbag-concept-brand",
      category: "Brand Concept",
      hasCaseStudy: false,
      isUIProject: false,
    },
  ];

  const handleViewCaseStudy = (projectId: number) => {
    if (projectId === 1) {
      navigate("/case-study/mydialog", {
        state: { from: window.location.href },
      });
    } else {
      navigate("/error", { state: { from: window.location.href } });
    }
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
      setCurrentIndex((currentIndex - 1 + selectedImages.length) % selectedImages.length);
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
            transform: `translateY(${scrollY * 0.08}px) rotate(${45 + scrollY * 0.03}deg)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            A showcase of my recent design work, demonstrating user-centered
            design principles and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-bg-dark rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group border border-gray-100 dark:border-text-secondary/20"
            >
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
                            handleImagePreview(
                              [
                                "src/assets/AURAYA/AURAYA1.jpg",
                                "src/assets/AURAYA/AURAYA2.jpg",
                                "src/assets/AURAYA/AURAYA3.jpg",
                                "src/assets/AURAYA/AURAYA4.jpg",
                              ],
                              0
                            )
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
                            <button
                              onClick={() => handleFigmaClick(project.figmaUrl!)}
                              className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                              title="View Figma File"
                            >
                              <Figma size={18} />
                            </button>
                            <button
                              onClick={() => handleLiveClick(project.liveUrl)}
                              className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                              title="View Prototype"
                            >
                              <Layers size={18} />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleImagePreview([project.image])}
                          className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                          title="Preview"
                        >
                          <Eye size={18} />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleLiveClick(project.liveUrl)}
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
                  {project.tags.map((tag) => (
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
                        onClick={() => handleViewCaseStudy(project.id)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                      >
                        View Case Study
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          project.id === 3
                            ? handleImagePreview(
                                [
                                  "src/assets/AURAYA/AURAYA1.jpg",
                                  "src/assets/AURAYA/AURAYA2.jpg",
                                  "src/assets/AURAYA/AURAYA3.jpg",
                                  "src/assets/AURAYA/AURAYA4.jpg",
                                ],
                                0
                              )
                            : handleLiveClick(project.liveUrl)
                        }
                        className="w-full px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                      >
                        View Project
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

export default Projects;
