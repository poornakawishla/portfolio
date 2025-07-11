import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

import artwork1 from "../assets/artworks/artwork (1).jpg";
import artwork2 from "../assets/artworks/artwork (2).jpg";
import artwork3 from "../assets/artworks/artwork (3).jpg";
import artwork4 from "../assets/artworks/artwork (4).jpg";
import artwork5 from "../assets/artworks/artwork (5).jpg";

const artworks = [artwork1, artwork2, artwork3, artwork4, artwork5];


const AIImagesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBack = () => {
    navigate("/#projects");
  };

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setCurrentIndex(artworks.indexOf(image));
  };

  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : artworks.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(artworks[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < artworks.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(artworks[newIndex]);
  };

  const handleDownload = (imageUrl: string, filename?: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = filename || `ai-art-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <ThemeToggle />

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

            <span className="text-sm text-gray-500 dark:text-text-secondary">
              {artworks.length} Images
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-text-primary mb-6 leading-tight">
           Artworks Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            My AI-generated and manipulated visual collection — made for use as wallpapers, moodboards, or pure inspiration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artworks.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
            >
              <img
                src={image}
                alt={`Artwork ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => openLightbox(image)}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    onClick={() => handleDownload(image, `artwork-${index + 1}.jpg`)}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
            >
              <X size={24} />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative max-w-full max-h-full">
              <img
                src={selectedImage}
                alt="AI Artwork"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm opacity-80">
                    Image {currentIndex + 1} of {artworks.length}
                  </p>
                  <button
                    onClick={() => handleDownload(selectedImage)}
                    className="flex items-center space-x-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg"
                  >
                    <Download size={16} />
                    <span className="text-sm">Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-24 pt-16 border-t border-gray-200 dark:border-text-secondary/20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Want Custom Edits or AI Visuals?
          </h2>
          <p className="text-gray-600 dark:text-text-secondary mb-6 max-w-2xl mx-auto">
            I can create personalized visuals from scratch or remix AI images to match your vibe or project.
          </p>
          <button
            onClick={() => navigate("/#contact")}
            className="px-8 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Custom Work
          </button>
        </div>
      </main>
    </div>
  );
};

export default AIImagesPage;
