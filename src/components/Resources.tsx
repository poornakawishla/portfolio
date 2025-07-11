import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Figma,
  FileText,
  Edit3,
  Layers,
  ExternalLink,
  Wrench,
} from "lucide-react";

const Resources: React.FC = () => {
  const navigate = useNavigate();

  const resources = [
    {
      category: "Figma Resources",
      items: [
        {
          icon: FileText,
          title: "Design Files",
          description:
            "This file helps designers to hand over there design.and this file havd inbuild components and design system for fast your workflow.",
          url: "https://www.figma.com/community/file/1422427483108442267",
          color: "from-brand-gradient-start to-brand-gradient-end",
          isExternal: true,
        },
        {
          icon: Layers,
          title: "Layee Design System V1",
          description:
            "This is my personal design system, built with in-house components and a complete style guide. You can use it to streamline and speed up your design or development process.",
          url: "https://www.figma.com/community/file/1508087863713557379/layrr-design-modern-ui-design-system-v1",
          color: "from-brand-primary to-brand-gradient-end",
          isExternal: true,
        },
      ],
    },
    {
      category: "Content & Insights",
      items: [
        {
          icon: Edit3,
          title: "Follow Me on Medium",
          description:
            "Read my latest articles on UX design, design thinking, and industry best practices.",
          url: "https://medium.com/@poornakawishla",
          color: "from-brand-gradient-end to-brand-primary",
          isExternal: false,
        },
      ],
    },
    {
      category: "Image Resources",
      items: [
        {
          icon: Wrench,
          title: "Image Collections",
          description:
            "Browse and download My AI-generated and manipulated visual collection — made for use as wallpapers, moodboards, or pure inspiration.",
          url: "/artwoks",
          color: "from-purple-500 to-pink-500",
          isExternal: false,
        },
      ],
    },
    {
      category: "Products",
      items: [
        {
          icon: Wrench,
          title: "LayrrKit",
          description:
            "Helpful tool link collection for designers and developers to streamline their workflow.",
          url: "./error",
          color: "from-purple-500 to-indigo-500",
          isExternal: false,
        },
        // {
        //   icon: FileText,
        //   title: 'Layrrmail',
        //   description: 'Professional email signature templates and generator for modern businesses.',
        //   url: '#',
        //   color: 'from-blue-500 to-cyan-500',
        //   isExternal: true,
        // },
      ],
    },
  ];

  const handleResourceClick = (url: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url);
    }
  };

  return (
    <section
      id="resources"
      className="py-20 bg-white dark:bg-bg-dark transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Design Resources
          </h2>
          <p className="scroll-reveal text-xl text-gray-600 dark:text-text-secondary max-w-3xl mx-auto">
            Access my design files, templates, products, and insights to
            accelerate your design process and learn from real projects.
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={category.category}>
              <h3 className="scroll-reveal text-2xl font-bold text-gray-900 dark:text-text-primary mb-8 text-center">
                {category.category}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="scroll-reveal group relative bg-white dark:bg-bg-dark border border-gray-200 dark:border-text-secondary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <item.icon
                        size={24}
                        className="transition-transform duration-200"
                      />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-text-secondary mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <button
                      onClick={() =>
                        handleResourceClick(item.url, item.isExternal)
                      }
                      className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-gradient-end font-medium transition-all duration-200 group-hover:underline hover:scale-105"
                    >
                      <span>Access Resource</span>
                      {item.isExternal ? (
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      ) : (
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
