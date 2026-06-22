import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout & Core Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NeuralAurora from './components/NeuralAurora';

// Pages
import Home from './pages/Home';
import Vault from './pages/Vault';
import Journey from './pages/Journey';
import Education from './pages/Education';
import Personal from './pages/Personal';

// Page Transition Wrapper Component
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="w-full flex flex-col min-h-screen"
    >
      {children}
    </motion.div>
  );
};

// Animated Routes Wrapper
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <PageWrapper>
              <Vault />
            </PageWrapper>
          } 
        />
        <Route 
          path="/journey" 
          element={
            <PageWrapper>
              <Journey />
            </PageWrapper>
          } 
        />
        <Route 
          path="/credentials" 
          element={
            <PageWrapper>
              <Education />
            </PageWrapper>
          } 
        />
        <Route 
          path="/personal" 
          element={
            <PageWrapper>
              <Personal />
            </PageWrapper>
          } 
        />
        {/* Fallback to Home */}
        <Route 
          path="*" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">

        {/* WebGL Wave Background */}
        <NeuralAurora />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow pt-24 pb-12 w-full">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
