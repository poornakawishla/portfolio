import React from "react";
import { HiColorSwatch, HiUsers, HiLightBulb, HiTarget } from "react-icons/hi";
import { useParallax } from "../hooks/useParallax";

const About: React.FC = () => {
  const scrollY = useParallax();

  const skills = [
    {
      icon: HiColorSwatch,
      title: "Visual Design",
      description: "Creating beautiful, cohesive visual experiences",
    },
    {
      icon: HiUsers,
      title: "User Research",
      description: "Understanding user needs through research and testing",
    },
    {
      icon: HiLightBulb,
      title: "Problem Solving",
      description: "Turning complex problems into simple solutions",
    },
    {
      icon: HiTarget,
      title: "Strategy",
      description: "Aligning design decisions with business objectives",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-bg-dark transition-colors duration-300 relative overflow-hidden"
    >
      {/* Parallax Background Elements - Only on larger screens */}
      <div className="hidden lg:block">
        <div
          className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-brand-primary/5 to-brand-gradient-end/5 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-brand-gradient-end/5 to-brand-primary/5 rounded-lg rotate-12 blur-lg"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${
              12 + scrollY * 0.02
            }deg)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Do you know me?
          </h2>
          <p className="scroll-reveal text-xl text-gray-600 dark:text-text-secondary max-w-full mx-auto">
            I’m a passionate UI/UX designer focused on crafting meaningful,
            user-centered digital experiences. With an empathetic, calm,
            detail oriented “Blue” personality, I put users first in every
            design. And if you’re an F1 fan, let’s grab coffee and chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="scroll-reveal space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-text-primary">
              Designing with Purpose
            </h3>
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed">
              After 3+ years in design, I’ve realized something cool.Design
              isn’t just visual, it’s emotional. It’s like having a superpower.
              think you can control others emortion.With the right layout,
              color, or interaction, I can shift how someone feels, thinks, or
              acts. And that? That’s what keeps me obsessed.
            </p>
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed">
              I also believe that good design always considers the user +
              business goal. Because we cannot get a good output if we think
              about the business without thinking about the user, or if we think
              about the business without thinking about the user.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-text-primary">
                My Design Process:
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Research", color: "bg-brand-primary" },
                  { label: "Ideate", color: "bg-brand-gradient-end" },
                  { label: "Design", color: "bg-brand-primary" },
                  { label: "Testing", color: "bg-brand-gradient-end" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center space-x-2 group"
                  >
                    <div
                      className={`w-2 h-2 ${item.color} rounded-full group-hover:scale-150 transition-transform duration-200`}
                    ></div>
                    <span className="text-gray-600 dark:text-text-secondary group-hover:text-brand-primary transition-colors duration-200">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="scroll-reveal relative">
            <div className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-2xl p-8 text-white shadow-sm">
              <h4 className="text-xl font-bold mb-4">
                Design isn’t about how it looks. It’s about how it feels.
              </h4>
              <p className="text-white/90 leading-relaxed mb-4">
                "For me, great design is emotional. I’m drawn to minimalism, not
                because it looks clean, but because it respects people’s time,
                attention, and mind. It’s about designing with intention, not
                decoration. Every choice matters. Nothing extra."
              </p>
              {/* <div className="space-y-2">
                {[
                  "User-centered approach",
                  "Data-driven decisions",
                  "Continuous iteration",
                ].map((principle, index) => (
                  <div
                    key={principle}
                    className="flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-white rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-white/90 text-sm group-hover:text-white transition-colors duration-200">
                      {principle}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="scroll-reveal text-center group bg-white dark:bg-bg-dark rounded-2xl p-6 border border-gray-100 dark:border-text-secondary/20 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                <Icon size={28} className="transition-transform duration-200" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
                {title}
              </h4>
              <p className="text-gray-600 dark:text-text-secondary group-hover:text-gray-700 dark:group-hover:text-text-primary transition-colors duration-200">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
