import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Figma, Eye, X, Layers, ChevronLeft, ChevronRight, Sparkles, Palette, Wand2 } from "lucide-react";
import { useParallax } from "../hooks/useParallax";
import Casestudycover from "../assets/case-studies/Thumbnail.png";
import Elara from "../assets/case-studies/elara.png";
import AURAYA from "../assets/case-studies/AURAYA.jpg";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const scrollY = useParallax();

  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'projects' | 'ai-gallery'>('projects');

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
      images: [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg",
        "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg",
        "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
      ],
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
      images: [
        "src/assets/AURAYA/AURAYA1.jpg",
        "src/assets/AURAYA/AURAYA2.jpg",
        "src/assets/AURAYA/AURAYA3.jpg",
        "src/assets/AURAYA/AURAYA4.jpg"
      ],
      tags: ["Social Media Post", "Photoshop"],
      liveUrl:
        "https://dribbble.com/shots/26149802-Introducing-AURAYA-a-luxury-handbag-concept-brand",
      category: "Brand Concept",
      hasCaseStudy: false,
      isUIProject: false,
    },
    {
      id: 4,
      title: "Sample Design Project 01",
      description: "Creative design exploration showcasing modern UI/UX principles and innovative visual solutions.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
        "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg",
        "https://images.pexels.com/photos/196647/pexels-photo-196647.jpeg"
      ],
      tags: ["UI Design", "Concept"],
      liveUrl: "#",
      category: "Sample Work",
      hasCaseStudy: false,
      isUIProject: false,
    },
    {
      id: 5,
      title: "Sample Design Project 02",
      description: "Minimalist design approach focusing on clean aesthetics and user-centered design principles.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      images: [
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
      ],
      tags: ["Minimalism", "UI"],
      liveUrl: "#",
      category: "Sample Work",
      hasCaseStudy: false,
      isUIProject: false,
    }
  ];

  const aiGalleryImages = [
    {
      id: 1,
      title: "AI Generated Portrait",
      description: "Futuristic character design with cyberpunk aesthetics",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      category: "Character Design"
    },
    {
      id: 2,
      title: "Digital Landscape",
      description: "Surreal landscape with vibrant colors and abstract elements",
      image: "https://images.pexels.com/photos/8386441/pexels-photo-8386441.jpeg",
      category: "Landscape"
    },
    {
      id: 3,
      title: "Abstract Composition",
      description: "Geometric patterns with dynamic color gradients",
      image: "https://images.pexels.com/photos/8386442/pexels-photo-8386442.jpeg",
      category: "Abstract"
    },
    {
      id: 4,
      title: "AI Architecture",
      description: "Futuristic building design with organic curves",
      image: "https://images.pexels.com/photos/8386443/pexels-photo-8386443.jpeg",
      category: "Architecture"
    },
    {
      id: 5,
      title: "Digital Art Piece",
      description: "Mixed media digital artwork with AI enhancement",
      image: "https://images.pexels.com/photos/8386444/pexels-photo-8386444.jpeg",
      category: "Digital Art"
    },
    {
      id: 6,
      title: "Conceptual Design",
      description: "Abstract concept visualization with AI assistance",
      image: "https://images.pexels.com/photos/8386445/pexels-photo-8386445.jpeg",
      category: "Concept"
    },
    {
      id: 7,
      title: "AI Fashion Design",
      description: "Innovative fashion concept generated with AI",
      image: "https://images.pexels.com/photos/8386446/pexels-photo-8386446.jpeg",
      category: "Fashion"
    },
    {
      id: 8,
      title: "Sci-Fi Environment",
      description: "Futuristic environment design with AI enhancement",
      image: "https://images.pexels.com/photos/8386447/pexels-photo-8386447.jpeg",
      category: "Environment"
    },
    {
      id: 9,
      title: "Digital Portrait",
      description: "AI-enhanced portrait with artistic styling",
      image: "https://images.pexels.com/photos/8386448/pexels-photo-8386448.jpeg",
      category: "Portrait"
    },
    {
      id: 10,
      title: "Abstract Visualization",
      description: "Data visualization transformed into art",
      image: "https://images.pexels.com/photos/8386449/pexels-photo-8386449.jpeg",
      category: "Visualization"
    },
    {
      id: 11,
      title: "AI Product Design",
      description: "Innovative product concept with AI assistance",
      image: "https://images.pexels.com/photos/8386450/pexels-photo-8386450.jpeg",
      category: "Product"
    },
    {
      id: 12,
      title: "Digital Sculpture",
      description: "3D sculpture concept enhanced with AI",
      image: "https://images.pexels.com/photos/8386451/pexels-photo-8386451.jpeg",
      category: "Sculpture"
    },
    {
      id: 13,
      title: "AI Interface Design",
      description: "Futuristic UI concept generated with AI",
      image: "https://images.pexels.com/photos/8386452/pexels-photo-8386452.jpeg",
      category: "Interface"
    },
    {
      id: 14,
      title: "Creative Composition",
      description: "Artistic composition with AI-generated elements",
      image: "https://images.pexels.com/photos/8386453/pexels-photo-8386453.jpeg",
      category: "Composition"
    }
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
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            A showcase of my recent design work, demonstrating user-centered
            design principles and creative problem-solving.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-2 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white shadow-sm'
                  : 'text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary'
              }`}
            >
              <Palette size={18} />
              <span>Design Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-gallery')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'ai-gallery'
                  ? 'bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white shadow-sm'
                  : 'text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary'
              }`}
            >
              <Sparkles size={18} />
              <span>AI Gallery</span>
            </button>
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
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
                      {project.images ? (
                        <button
                          onClick={() => handleImagePreview(project.images!, 0)}
                          className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 group"
                          title="View Gallery"
                        >
                          <Eye size={18} />
                        </button>
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
                            project.images
                              ? handleImagePreview(project.images, 0)
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
        )}

        {/* AI Gallery Tab */}
        {activeTab === 'ai-gallery' && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-full text-brand-primary font-medium mb-4">
                <Wand2 size={18} />
                <span>AI-Generated Artwork</span>
              </div>
              <p className="text-gray-600 dark:text-text-secondary max-w-2xl mx-auto">
                Exploring the intersection of artificial intelligence and creative design through experimental AI-generated artwork and concepts.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {aiGalleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-white dark:bg-bg-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-text-secondary/20"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <h4 className="text-white font-medium text-sm mb-1 truncate">
                          {item.title}
                        </h4>
                        <p className="text-white/80 text-xs truncate">
                          {item.description}
                        </p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <button
                          onClick={() => handleImagePreview([item.image])}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                          title="View Full Size"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-text-secondary text-sm">
                <Sparkles size={16} />
                <span>All images generated using AI tools and enhanced with creative direction</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Slider Modal */}
      {selectedImages && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={closeImagePreview}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          >
            <X size={24} />
          </button>
          
          {selectedImages.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          <div className="relative max-w-5xl max-h-full">
            <img
              src={selectedImages[currentIndex]}
              alt="Project Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            />
            
            {selectedImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;