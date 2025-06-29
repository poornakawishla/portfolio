import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, Lightbulb, Smartphone } from 'lucide-react';
import logo from '../assets/Standalone Symbol-4.png'

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: Code, text: 'Initializing Design System...', color: 'from-blue-500 to-purple-500' },
    { icon: Palette, text: 'Loading Creative Assets...', color: 'from-purple-500 to-pink-500' },
    { icon: Lightbulb, text: 'Preparing User Experience...', color: 'from-pink-500 to-orange-500' },
    { icon: Smartphone, text: 'Optimizing Interface...', color: 'from-orange-500 to-brand-primary' },
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 50; // Update every 50ms for smooth animation

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (duration / interval));
        
        // Update current step based on progress
        const newStep = Math.floor((newProgress / 100) * loadingSteps.length);
        if (newStep !== currentStep && newStep < loadingSteps.length) {
          setCurrentStep(newStep);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete, currentStep, loadingSteps.length]);

  const CurrentIcon = loadingSteps[currentStep]?.icon || Code;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-brand-gradient-start via-brand-primary to-brand-gradient-end flex items-center justify-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white max-w-md mx-auto px-6">
        {/* Logo Animation with Standalone Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="Poorna Logo" 
                className="w-10 h-10"
              />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-bold mb-2"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/80"
          >
            Crafting Digital Experiences
          </motion.p>
        </motion.div>

        {/* Loading Steps */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center space-x-3 mb-4"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
              >
                <CurrentIcon size={20} />
              </motion.div>
              <span className="text-lg font-medium">
                {loadingSteps[currentStep]?.text || 'Loading...'}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 text-sm font-medium"
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;