import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ThemeToggle from "../../components/ThemeToggle";

// Image imports from provided paths
import artboard1 from "../../assets/AURAYA/Artboard1.jpg";
import artboard2 from "../../assets/AURAYA/Artboard2.jpg";
import aurayaLogo from "../../assets/AURAYA/AURAYA.jpg";
import firstStart from "../../assets/AURAYA/FirstStart.jpg";
import teaser from "../../assets/AURAYA/Teaser.jpg";

const AurayaGraphicDesign: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBack = () => {
    navigate("/#projects");
  };

  const handleViewDribbble = () => {
    window.open(
      "https://dribbble.com/shots/26149802-Introducing-AURAYA-a-luxury-handbag-concept-brand",
      "_blank"
    );
  };

  return (
    <div className="case-study-page min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
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

            <button
              onClick={handleViewDribbble}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <ExternalLink size={16} />
              <span>View on Dribbble</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image Showcase */}
        <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-text-primary mb-6 text-center">
            AURAYA - Luxury Handbag Concept
          </h1>
          <p className="text-lg text-gray-600 dark:text-text-secondary mb-12 max-w-3xl mx-auto text-center">
            A showcase of graphic design work for a luxury handbag brand, featuring social media assets and visual identity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <img
              src={teaser}
              alt="AURAYA teaser"
              className="rounded-lg w-full"
              loading="lazy"
            />
            <img
              src={aurayaLogo}
              alt="AURAYA logo"
              className="rounded-lg w-full"
              loading="lazy"
            />
            <img
              src={artboard1}
              alt="AURAYA social media design 1"
              className="rounded-lg w-full"
              loading="lazy"
            />
            <img
              src={artboard2}
              alt="AURAYA social media design 2"
              className="rounded-lg w-full"
              loading="lazy"
            />
            <img
              src={firstStart}
              alt="AURAYA photography"
              className="rounded-lg w-full"
              loading="lazy"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-gray-200 dark:border-text-secondary/20">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary">
            Thank You!
          </h3>
          <p className="text-lg text-gray-600 dark:text-text-secondary max-w-2xl mx-auto">
            Explore the creative graphic design process behind AURAYA’s luxury handbag branding.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AurayaGraphicDesign;