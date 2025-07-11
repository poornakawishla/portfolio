import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, User, Target } from "lucide-react";
import ThemeToggle from "../../components/ThemeToggle";

// Images
import artboard1 from "../../assets/AURAYA/Artboard1.jpg";
import artboard2 from "../../assets/AURAYA/Artboard2.jpg";
import firstStart from "../../assets/AURAYA/FirstStart.jpg";
import teaser from "../../assets/AURAYA/Teaser.jpg";

const AurayaGraphicDesign: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBack = () => navigate("/#projects");
  const handleViewDribbble = () =>
    window.open(
      "https://dribbble.com/shots/26149802-Introducing-AURAYA-a-luxury-handbag-concept-brand",
      "_blank"
    );

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
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Graphic Design", "Luxury Branding", "Social Media", "Concept"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium hover:scale-110 hover:bg-brand-primary/20 transition-all duration-200"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Title & Description */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-text-primary mb-6 leading-tight">
          AURAYA - Luxury Handbag Concept
        </h1>
        <p className="text-lg text-gray-600 dark:text-text-secondary mb-12 max-w-4xl">
          A creative concept development and social media design project for a
          luxury handbag brand, blending elegance and modern aesthetics.
        </p>

        {/* Project Meta */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 p-6 bg-white dark:bg-bg-dark rounded-2xl border border-gray-200 dark:border-text-secondary/20 shadow-sm">
          {[
            { icon: Calendar, label: "Duration", value: "4 hours" },
            { icon: User, label: "Role", value: "Graphic Designer" },
            {
              icon: Target,
              label: "Platform",
              value: "Social Media & Digital",
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-text-secondary">
                  {item.label}
                </p>
                <p className="font-semibold text-gray-900 dark:text-text-primary">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-6">
              AURAYA is a luxury handbag concept brand designed to embody
              sophistication and exclusivity. This project involved creating
              social media assets, photography direction, and a cohesive visual
              identity.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Concept Development",
                  desc: "Brand story and vision",
                },
                { title: "Social Media", desc: "Instagram post designs" },
                { title: "Visual Identity", desc: "Premium aesthetic" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center p-4 bg-gray-50 dark:bg-text-secondary/10 rounded-xl"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="space-y-12">
          {[teaser, artboard1, artboard2, firstStart].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`AURAYA Showcase ${index + 1}`}
              className="rounded-2xl w-full shadow-sm"
              loading="lazy"
            />
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-200 dark:border-text-secondary/20 mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary">
              Thank You!
            </h3>
            <p className="text-lg text-gray-600 dark:text-text-secondary max-w-2xl mx-auto">
              This project showcases the creative process behind AURAYA’s luxury
              handbag branding and social media presence.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AurayaGraphicDesign;
