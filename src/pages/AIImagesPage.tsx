import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

interface AIImageCategory {
  id: string;
  name: string;
  description: string;
  images: string[];
  downloadUrl?: string;
}

const AIImagesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategoryImages, setCurrentCategoryImages] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // AI Image Categories - easily customizable
  const aiCategories: AIImageCategory[] = [
    {
      id: 'futuristic-ui',
      name: 'Futuristic UI Concepts',
      description: 'AI-generated user interface concepts exploring next-generation design patterns',
      images: [
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      downloadUrl: 'https://example.com/download/futuristic-ui.zip'
    },
    {
      id: 'abstract-landscapes',
      name: 'Abstract Digital Landscapes',
      description: 'AI-created abstract digital landscapes combining organic forms with tech elements',
      images: [
        'https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386429/pexels-photo-8386429.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386431/pexels-photo-8386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      downloadUrl: 'https://example.com/download/abstract-landscapes.zip'
    },
    {
      id: 'character-portraits',
      name: 'AI Character Portraits',
      description: 'Unique character designs and portraits generated through AI',
      images: [
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      downloadUrl: 'https://example.com/download/character-portraits.zip'
    },
    {
      id: 'architectural-concepts',
      name: 'Architectural Concepts',
      description: 'Futuristic architectural designs and space concepts',
      images: [
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      downloadUrl: 'https://example.com/download/architectural-concepts.zip'
    }
  ];

  const handleBack = () => {
    navigate('/#projects');
  };

  const getAllImages = () => {
    return aiCategories.flatMap(category => category.images);
  };

  const getDisplayedImages = () => {
    if (selectedCategory === 'all') {
      return getAllImages();
    }
    const category = aiCategories.find(cat => cat.id === selectedCategory);
    return category ? category.images : [];
  };

  const openLightbox = (image: string, images: string[]) => {
    setSelectedImage(image);
    setCurrentCategoryImages(images);
    setCurrentIndex(images.indexOf(image));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentCategoryImages([]);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : currentCategoryImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(currentCategoryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < currentCategoryImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(currentCategoryImages[newIndex]);
  };

  const handleDownload = (imageUrl: string, filename?: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename || `ai-image-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              className="flex items-center space-x-2 text-gray-600 dark:text-text-secondary hover:text-brand-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-text-secondary">
                {aiCategories.length} Collections • {getAllImages().length} Images
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
            AI Image Gallery
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            Explore my collection of AI-generated artwork. Each image represents a unique exploration 
            of creativity through artificial intelligence, available for download and use in your projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white shadow-lg'
                : 'bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 text-gray-700 dark:text-text-secondary hover:border-brand-primary'
            }`}
          >
            All Images ({getAllImages().length})
          </button>
          
          {aiCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white shadow-lg'
                  : 'bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 text-gray-700 dark:text-text-secondary hover:border-brand-primary'
              }`}
            >
              {category.name} ({category.images.length})
            </button>
          ))}
        </div>

        {/* Images Grid */}
        {selectedCategory === 'all' ? (
          // Show all categories
          <div className="space-y-16">
            {aiCategories.map((category) => (
              <div key={category.id} className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-2">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 dark:text-text-secondary">
                      {category.description}
                    </p>
                  </div>
                  {category.downloadUrl && (
                    <button
                      onClick={() => window.open(category.downloadUrl, '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                    >
                      <Download size={16} />
                      <span>Download All</span>
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
                    >
                      <img
                        src={image}
                        alt={`${category.name} - Image ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openLightbox(image, category.images)}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          >
                            <Eye size={20} />
                          </button>
                          <button
                            onClick={() => handleDownload(image, `${category.name}-${index + 1}.jpg`)}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          >
                            <Download size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show selected category
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            {(() => {
              const category = aiCategories.find(cat => cat.id === selectedCategory);
              if (!category) return null;
              
              return (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-2">
                        {category.name}
                      </h2>
                      <p className="text-gray-600 dark:text-text-secondary">
                        {category.description}
                      </p>
                    </div>
                    {category.downloadUrl && (
                      <button
                        onClick={() => window.open(category.downloadUrl, '_blank')}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                      >
                        <Download size={16} />
                        <span>Download All</span>
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
                      >
                        <img
                          src={image}
                          alt={`${category.name} - Image ${index + 1}`}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openLightbox(image, category.images)}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                            >
                              <Eye size={20} />
                            </button>
                            <button
                              onClick={() => handleDownload(image, `${category.name}-${index + 1}.jpg`)}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                            >
                              <Download size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
            >
              <X size={24} />
            </button>

            {currentCategoryImages.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="relative max-w-full max-h-full">
              <img
                src={selectedImage}
                alt="AI Generated Image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">
                      Image {currentIndex + 1} of {currentCategoryImages.length}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload(selectedImage)}
                    className="flex items-center space-x-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200"
                  >
                    <Download size={16} />
                    <span className="text-sm">Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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