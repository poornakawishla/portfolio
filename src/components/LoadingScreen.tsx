import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFigma, 
  FaDribbble, 
  FaLinkedinIn, 
  FaInstagram, 
  FaBehance,
  FaWhatsapp,
  FaMediumM 
} from 'react-icons/fa';
import { 
  HiSparkles, 
  HiLightBulb, 
  HiDesktopComputer, 
  HiColorSwatch 
} from 'react-icons/hi';
import logo from '../assets/Symbol.svg';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadingSteps = [
    { icon: HiColorSwatch, text: 'Loading Assets...', color: 'from-blue-500 to-purple-500' },
    { icon: HiSparkles, text: 'Preparing Components...', color: 'from-purple-500 to-pink-500' },
    { icon: HiLightBulb, text: 'Optimizing Experience...', color: 'from-pink-500 to-orange-500' },
    { icon: HiDesktopComputer, text: 'Finalizing Interface...', color: 'from-orange-500 to-brand-primary' },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/poornakawishla/', color: 'hover:text-blue-600' },
    { icon: FaDribbble, url: 'https://dribbble.com/poornakawishla', color: 'hover:text-pink-500' },
    { icon: FaBehance, url: 'https://behance.net/poornakawishla', color: 'hover:text-blue-500' },
    { icon: FaFigma, url: 'https://www.figma.com/@poornakawishla', color: 'hover:text-purple-500' },
    { icon: FaInstagram, url: 'https://www.instagram.com/poornakawishla', color: 'hover:text-pink-600' },
    { icon: FaWhatsapp, url: 'https://wa.me/94777604869', color: 'hover:text-green-500' },
    { icon: FaMediumM, url: 'https://medium.com/@poornakawishla', color: 'hover:text-gray-700' },
  ];

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;
    let completionTimer: NodeJS.Timeout;

    const checkIfLoaded = () => {
      // Check if document is ready
      if (document.readyState === 'complete') {
        // Check if all images are loaded
        const images = document.querySelectorAll('img');
        const imagePromises = Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve; // Resolve even on error to prevent hanging
          });
        });

        Promise.all(imagePromises).then(() => {
          setIsLoaded(true);
        });
      }
    };

    // Start checking immediately and then periodically
    checkIfLoaded();
    const loadCheckInterval = setInterval(checkIfLoaded, 100);

    // Progress animation
    const duration = 3000; // 3 seconds minimum
    const interval = 50;

    progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (duration / interval);
        const newProgress = prev + increment;
        
        // Update current step based on progress
        const newStep = Math.floor((newProgress / 100) * loadingSteps.length);
        if (newStep !== currentStep && newStep < loadingSteps.length) {
          setCurrentStep(newStep);
        }

        // Don't go past 95% until everything is loaded
        if (newProgress >= 95 && !isLoaded) {
          return 95;
        }

        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Cleanup
    return () => {
      clearInterval(progressTimer);
      clearInterval(loadCheckInterval);
      if (completionTimer) clearTimeout(completionTimer);
    };
  }, [currentStep, loadingSteps.length, isLoaded]);

  // Complete loading when both progress is 100% and content is loaded
  useEffect(() => {
    if (progress >= 100 && isLoaded) {
      const completionTimer = setTimeout(() => {
        onLoadingComplete();
      }, 800);
      return () => clearTimeout(completionTimer);
    }
  }, [progress, isLoaded, onLoadingComplete]);

  // Force complete progress when content is loaded
  useEffect(() => {
    if (isLoaded && progress < 100) {
      setProgress(100);
    }
  }, [isLoaded, progress]);

  const CurrentIcon = loadingSteps[currentStep]?.icon || HiColorSwatch;

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-gradient-end/5"></div>
        {/* Floating geometric shapes - responsive count */}
        {[...Array(window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0.5,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 360,
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {i % 3 === 0 && (
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-brand-primary/20 to-brand-gradient-end/20 rounded-full blur-sm"></div>
            )}
            {i % 3 === 1 && (
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rotate-45"></div>
            )}
            {i % 3 === 2 && (
              <div className="w-1.5 h-4 md:w-2 md:h-6 bg-gradient-to-b from-blue-400/20 to-cyan-400/20 rounded-full"></div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center text-white max-w-sm md:max-w-md mx-auto px-4 md:px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 md:mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(108, 92, 231, 0.3)',
                  '0 0 40px rgba(108, 92, 231, 0.6)',
                  '0 0 20px rgba(108, 92, 231, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-r from-brand-primary to-brand-gradient-end rounded-2xl flex items-center justify-center mb-4 md:mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              >
                <img 
                  src={logo} 
                  alt="Poorna Logo" 
                  className="w-8 h-8 md:w-12 md:h-12 filter brightness-0 invert"
                />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Poorna Kawishla
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg"
          >
            UI/UX Designer Portfolio
          </motion.p>
        </motion.div>

        {/* Loading Steps */}
        <div className="mb-6 md:mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-6"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-brand-primary/20 to-brand-gradient-end/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10"
              >
                <CurrentIcon size={window.innerWidth < 768 ? 20 : 24} className="text-white" />
              </motion.div>
              <span className="text-base md:text-lg font-medium text-gray-200">
                {loadingSteps[currentStep]?.text || 'Loading...'}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Modern Progress Bar */}
          <div className="relative w-full bg-white/10 rounded-full h-2 md:h-3 mb-3 md:mb-4 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-primary to-brand-gradient-end rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 text-sm font-medium mb-4 md:mb-6"
          >
            {Math.round(progress)}% Complete
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Connect with me</p>
          <div className="flex justify-center space-x-2 md:space-x-4 flex-wrap gap-1 md:gap-2">
            {socialLinks.map(({ icon: Icon, url, color }, index) => (
              <motion.button
                key={url}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                onClick={() => handleSocialClick(url)}
                className={`w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/70 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20 border border-white/10 hover:border-white/30`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={window.innerWidth < 768 ? 16 : 20} />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Loading Animation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center space-x-1.5 md:space-x-2 mb-4 md:mb-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-brand-primary to-brand-gradient-end rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-xs md:text-sm text-gray-500 italic max-w-xs mx-auto leading-relaxed"
        >
          "Design is not just what it looks like and feels like. Design is how it works."
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;