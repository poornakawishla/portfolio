import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Figma,
  Calendar,
  User,
  Target,
} from "lucide-react";
import ThemeToggle from "../../components/ThemeToggle";

// Placeholder images (replace with actual ELARA screenshots)
import coverImage from "../../assets/Elara/Cover.svg"; // ELARA branding cover
import logoDesign from "../../assets/Elara/Logo.svg"; // Logo design screenshot
import colorPalette from "../../assets/Elara/Color Palert.svg"; // Color palette screenshot
import typographySample from "../../assets/Elara/Typo.svg"; // Typography sample
import mockup1 from "../../assets/Elara/mockup.svg"; // Mockup screenshot 1

const ElaraBrandIdentity: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBack = () => {
    navigate("/#projects");
  };

  const handleViewDribbble = () => {
    window.open(
      "https://dribbble.com/shots/26258673-ELARA-Sleep-Wellness-Brand-Identity?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=poornakawishla&utm_content=ELARA%20-%20Sleep%20%26%20Wellness%20Brand%20Identity&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=poornakawishla&utm_content=ELARA%20-%20Sleep%20%26%20Wellness%20Brand%20Identity&utm_medium=Social_Share",
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
          {["Branding", "UX/UI Design", "Wellness", "Concept"].map(
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
          ELARA - Sleep & Wellness Brand Identity
        </h1>
        <p className="text-lg text-gray-600 dark:text-text-secondary mb-12 max-w-4xl">
          A comprehensive branding project combining ChatGPT and Figma to create
          a modern identity for a sleep and wellness brand focused on
          tranquility and innovation.
        </p>

        {/* Project Meta */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 p-6 bg-white dark:bg-bg-dark rounded-2xl border border-gray-200 dark:border-text-secondary/20 shadow-sm">
          {[
            { icon: Calendar, label: "Duration", value: "2 Days" },
            { icon: User, label: "Role", value: "Brand Designer" },
            { icon: Target, label: "Platform", value: "Digital & Print" },
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
            src={coverImage}
            alt="ELARA branding cover"
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
              This project aimed to create a complete branding system for ELARA,
              a concept sleep and wellness brand. Using ChatGPT and
              Figma, the process involved brand discovery, logo
              creation, color palette selection, typography, and mockups.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  title: "Brand Discovery",
                  desc: "Defining mission and audience",
                },
                { title: "Logo Design", desc: "Custom symbol and wordmark" },
                { title: "Visual Identity", desc: "Colors and typography" },
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

        {/* Logo Design */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Logo Design
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary mb-6">
              The ELARA logo combines a leaf-shaped symbol with a wordmark,
              representing nature, growth, and wellness. Iterations were refined
              using ChatGPT suggestions and Figma.
            </p>
            <img
              src={logoDesign}
              alt="ELARA logo design"
              className="rounded-lg mb-6 w-full"
              loading="lazy"
            />
            <ul className="space-y-3 text-gray-600 dark:text-text-secondary">
              {[
                "Leaf shape symbolizes nature and organic purity",
                "Spirals represent inner energy and mindfulness",
                "Designed for versatility across digital and print",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Color Palette
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary mb-6">
              The palette features calming tones inspired by nature, designed
              for accessibility and emotional impact.
            </p>
            <img
              src={colorPalette}
              alt="ELARA color palette"
              className="rounded-lg mb-6 w-full"
              loading="lazy"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { color: "#B8A6CA", label: "Primary: Dusty Lavender" },
                { color: "#E6D4BA", label: "Accent: Alabaster White" },
                { color: "#F0EBE0", label: "Neutral: Vanilla Cream" },
                { color: "#3D2C41", label: "Dark Text: Deep Plum" },
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

        {/* Typography */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Typography
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary mb-6">
              The typography system uses Editorial New and PP Neue Montreal for
              a modern, elegant feel.
            </p>
            <img
              src={typographySample}
              alt="ELARA typography sample"
              className="rounded-lg mb-6 w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Mockups */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              5
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Mockups
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary mb-6">
              Final mockups showcase the ELARA brand across digital and print
              applications.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <img
                src={mockup1}
                alt="ELARA mockup 1"
                className="rounded-lg w-full sm:w-[45%]"
                loading="lazy"
              />
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
              This branding project highlights a collaborative approach using AI
              and design tools to craft a cohesive identity for ELARA.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ElaraBrandIdentity;
