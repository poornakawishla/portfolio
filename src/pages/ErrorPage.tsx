import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, ArrowLeft, RefreshCw, Mail } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    // Get the referrer from the current location state or browser history
    const referrer = location.state?.from || document.referrer;
    
    if (referrer && referrer.includes(window.location.origin)) {
      // If we came from within our site, navigate to the specific section
      if (referrer.includes('#projects')) {
        navigate('/#projects');
      } else if (referrer.includes('#contact')) {
        navigate('/#contact');
      } else if (referrer.includes('#about')) {
        navigate('/#about');
      } else {
        // Default to going back in history
        window.history.back();
      }
    } else {
      // If no referrer or external referrer, go to home
      navigate('/');
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center relative overflow-hidden">
      <ThemeToggle />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-brand-primary/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <AlertTriangle size={48} className="text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-text-primary mb-4">
            <span className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-text-secondary mb-2">
            The page you're looking for doesn't exist or is currently under development.
          </p>
          <p className="text-gray-500 dark:text-text-secondary">
            Don't worry, even the best designers sometimes create dead ends!
          </p>
        </motion.div>

        {/* Error Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white dark:bg-bg-dark rounded-2xl p-6 border border-gray-200 dark:border-text-secondary/20 mb-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">
            What happened?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-text-primary">Possible reasons:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-text-secondary">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>The URL was typed incorrectly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>The page is under construction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>The link is outdated</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-text-primary">What you can do:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-text-secondary">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Check the URL for typos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Go back to where you came from</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contact me if the issue persists</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleGoHome}
            className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-xl font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
          >
            <Home size={20} />
            <span>Go to Homepage</span>
          </button>
          
          <button
            onClick={handleGoBack}
            className="flex items-center space-x-2 px-8 py-3 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-xl font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
          
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-8 py-3 bg-gray-100 dark:bg-text-secondary/20 text-gray-700 dark:text-text-secondary rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-text-secondary/30 transition-all duration-200 hover:scale-105"
          >
            <RefreshCw size={20} />
            <span>Refresh Page</span>
          </button>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-text-secondary/20"
        >
          <p className="text-gray-600 dark:text-text-secondary mb-4">
            Still having trouble? I'm here to help!
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-gradient-end font-medium transition-colors duration-200"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 text-sm text-gray-500 dark:text-text-secondary italic"
        >
          "Every great design starts with an even better error page." 😄
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;