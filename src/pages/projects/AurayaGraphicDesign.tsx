import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Target,
} from "lucide-react";
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
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Graphic Design", "Luxury Branding", "Social Media", "Concept"].map(
            (tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium hover:scale-110 hover:bg-brand-primary/20 transition-all duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Title and Intro */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-text-primary mb-6 leading-tight">
          AURAYA - Luxury Handbag Concept
        </h1>
        <p className="text-lg text-gray-600 dark:text-text-secondary mb-12 max-w-4xl">
          A creative concept development and social media design project for a luxury handbag brand, blending elegance and modern aesthetics.
        </p>

        {/* Project Meta */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 p-6 bg-white dark:bg-bg-dark rounded-2xl border border-gray-200 dark:border-text-secondary/20 shadow-sm">
          {[
            { icon: Calendar, label: "Duration", value: "2 Weeks" },
            { icon: User, label: "Role", value: "Graphic Designer" },
            { icon: Target, label: "Platform", value: "Social Media & Digital" },
          ].map((item, index) => (
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

        {/* Cover Image */}
        <div className="mb-16">
          <img
            src={teaser}
            alt="AURAYA teaser"
            className="rounded-2xl w-full"
            loading="lazy"
          />
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Project Overview
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 mb-8 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-6">
              AURAYA is a luxury handbag concept brand designed to embody sophistication and exclusivity. This project involved creating social media assets, photography direction, and a cohesive visual identity.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { title: "Concept Development", desc: "Brand story and vision" },
                { title: "Social Media", desc: "Instagram post designs" },
                { title: "Visual Identity", desc: "Premium aesthetic" },
              ].map((item, index) => (
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

        {/* Social Media Designs */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Social Media Designs
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary mb-6">
              Instagram posts designed to highlight AURAYA’s luxury appeal with bold visuals and minimal text.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <img
                src={artboard1}
                alt="AURAYA social media design 1"
                className="rounded-lg w-full sm:w-[45%]"
                loading="lazy"
              />
              <img
                src={artboard2}
                alt="AURAYA social media design 2"
                className="rounded-lg w-full sm:w-[45%]"
                loading="lazy"
              />
            </div>
            <ul className="space-y-3 mt-6 text-gray-600 dark:text-text-secondary">
              {[
                "Bold imagery to showcase handbags",
                "Minimalist text for elegance",
                "Optimized for Instagram grid",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Photography */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Photography
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary mb-6">
              Directed photography to capture the luxurious texture and craftsmanship of AURAYA handbags.
            </p>
            <img
              src={firstStart}
              alt="AURAYA photography direction"
              className="rounded-lg mb-6 w-full"
              loading="lazy"
            />
            <ul className="space-y-3 text-gray-600 dark:text-text-secondary">
              {[
                "High-contrast lighting for premium feel",
                "Focus on texture and detail",
                "Styled for social media integration",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visual Identity */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Visual Identity
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary mb-6">
              A premium aesthetic with a focus on gold and black tones to reflect luxury.
            </p>
            <img
              src={aurayaLogo}
              alt="AURAYA visual identity logo"
              className="rounded-lg mb-6 w-full"
              loading="lazy"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { color: "#D4AF37", label: "Gold Accent" },
                { color: "#1C2526", label: "Deep Black" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-lg"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <p className="text-gray-900 dark:text-text-primary">
                    {item.label} ({item.color})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-200 dark:border-text-secondary/20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary">
              Thank You!
            </h3>
            <p className="text-lg text-gray-600 dark:text-text-secondary max-w-2xl mx-auto">
              This project showcases the creative process behind AURAYA’s luxury handbag branding and social media presence.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AurayaGraphicDesign;