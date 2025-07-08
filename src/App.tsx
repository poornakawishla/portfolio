import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import ErrorPage from './pages/ErrorPage';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/case-study/mydialog" 
          element={
            <PageTransition>
              <CaseStudyPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/error" 
          element={
            <PageTransition>
              <ErrorPage />
            </PageTransition>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageTransition>
              <ErrorPage />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  // Check if all content is loaded
  useEffect(() => {
    const checkContentReady = () => {
      if (document.readyState === 'complete') {
        // Additional check for images
        const images = document.querySelectorAll('img');
        const imagePromises = Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        });

        Promise.all(imagePromises).then(() => {
          setIsContentReady(true);
        });
      }
    };

    // Check immediately and on load
    checkContentReady();
    window.addEventListener('load', checkContentReady);
    
    return () => window.removeEventListener('load', checkContentReady);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <Router key="app">
            <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
              <AnimatedRoutes />
            </div>
          </Router>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;