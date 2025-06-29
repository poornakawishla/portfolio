import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialSidebar from '../components/SocialSidebar';
import ThemeToggle from '../components/ThemeToggle';
import ScrollToTop from '../components/ScrollToTop';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <Projects />
      <Resources />
      <Contact />
      <Footer />
      <SocialSidebar />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;