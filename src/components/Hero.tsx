import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Download,
  MessageCircle,
  Palette,
  Figma,
  Dribbble,
} from "lucide-react";
import { useParallax } from "../hooks/useParallax";

const Hero: React.FC = () => {
  const scrollY = useParallax();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+94777604869";
    const message = "Hi! I would like to discuss a design project with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleResumeClick = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1w4fUgStAoMSrAJn4CE67_6NHVxBKcWhY/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handleSocialClick = (platform: string) => {
    navigate("/error");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background Design Elements with Parallax - Only on larger screens */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-gradient-end/10 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-brand-gradient-end/10 to-brand-primary/10 rounded-lg rotate-45 blur-lg"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${
              45 + scrollY * 0.1
            }deg)`,
          }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-gradient-end/10 rounded-full blur-lg"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="scroll-reveal inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-sm border border-gray-200 dark:border-text-secondary/20 rounded-full text-sm font-medium text-gray-700 dark:text-text-secondary hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="scroll-reveal block text-gray-900 dark:text-text-primary">
                  Hi! Its{" "}
                  <span className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end bg-clip-text text-transparent">
                    poorna
                  </span>
                </span>
                <span className="scroll-reveal block text-gray-900 dark:text-text-primary"></span>
              </h1>
              <p className="scroll-reveal text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
                just call me Benji.I can help maximuize your business golas and
                user experience through design. &lt;3
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="scroll-reveal flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center space-x-2 hover:scale-105 group"
              >
                <MessageCircle
                  size={20}
                  className="transition-transform duration-200"
                />
                <span>Let's Chat on WhatsApp</span>
              </button>
              <button
                onClick={handleResumeClick}
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 group"
              >
                <Download
                  size={20}
                  className="transition-transform duration-200"
                />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="scroll-reveal flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <span className="text-sm text-gray-500 dark:text-text-secondary">
                Follow me:
              </span>
              <div className="flex space-x-3">
                <a
                  href="https://dribbble.com/poornakawishla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-10 h-10 bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 rounded-lg flex items-center justify-center text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:border-brand-primary/50 dark:hover:border-brand-primary/50 transition-all duration-200 hover:scale-110 group">
                    <Dribbble
                      size={18}
                      className="transition-transform duration-200"
                    />
                  </button>
                </a>
                <a
                  href="https://www.figma.com/@poornakawishla" target="_blank"
                >
                  <button className="w-10 h-10 bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 rounded-lg flex items-center justify-center text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary hover:border-brand-primary/50 dark:hover:border-brand-primary/50 transition-all duration-200 hover:scale-110 group">
                    <Figma
                      size={18}
                      className="transition-transform duration-200"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Design Card */}
            <div
              className="scroll-reveal relative bg-white dark:bg-bg-dark rounded-lg shadow-sm p-6 lg:p-8 border border-gray-100 dark:border-text-secondary/20 transition-all duration-300 mx-auto max-w-md lg:max-w-none"
              style={{
                transform:
                  window.innerWidth >= 1024
                    ? `translateY(${scrollY * 0.1}px)`
                    : "none",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 dark:text-text-secondary">
                  Design Process
                </div>
              </div>

              {/* Design Process Steps */}
              <div className="space-y-4 lg:space-y-6">
                {[
                  {
                    step: 1,
                    title: "Research",
                    desc: "User interviews & analysis",
                  },
                  { step: 2, title: "Ideate", desc: "Creating project concepts" },
                  {
                    step: 3,
                    title: "Design",
                    desc: "High-fidelity design and prototypes",
                  },
                  { step: 4, title: "Test", desc: "User testing & iteration" },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="flex items-center space-x-3 lg:space-x-4 group"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 dark:text-text-primary group-hover:text-brand-primary transition-colors duration-200 text-sm lg:text-base">
                        {item.title}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-500 dark:text-text-secondary">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Design Tools */}
              <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-100 dark:border-text-secondary/20">
                <div className="text-sm font-medium text-gray-700 dark:text-text-primary mb-3">
                  Favorite Tools
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3 flex-wrap gap-2">
                  {["Figma", "Photoshop", "Illustrator"].map((tool, index) => (
                    <div
                      key={tool}
                      className="px-2 lg:px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-xs font-medium hover:scale-110 transition-all duration-200 hover:bg-brand-primary/20"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements with Parallax - Only on larger screens */}
            <div
              className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform duration-200 hidden lg:flex"
              style={{
                transform:
                  window.innerWidth >= 1024
                    ? `translateY(${scrollY * 0.2}px)`
                    : "none",
              }}
            >
              <Palette size={20} className="lg:w-6 lg:h-6 animate-pulse" />
            </div>

            <div
              className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-full flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform duration-200 hidden lg:flex"
              style={{
                transform:
                  window.innerWidth >= 1024
                    ? `translateY(${scrollY * 0.15}px)`
                    : "none",
              }}
            >
              <Figma size={24} className="lg:w-7 lg:h-7 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="scroll-reveal absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 hover:scale-110 group"
        >
          <ChevronDown
            size={32}
            className="animate-bounce group-hover:animate-pulse"
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
