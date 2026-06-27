import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { PageWrapper } from '../components/layout/PageWrapper';

import Home from '../pages/Home';
import Vault from '../pages/Vault';
import Journey from '../pages/Journey';
import Education from '../pages/Education';
import Personal from '../pages/Personal';

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Vault /></PageWrapper>} />
        <Route path="/journey" element={<PageWrapper><Journey /></PageWrapper>} />
        <Route path="/credentials" element={<PageWrapper><Education /></PageWrapper>} />
        <Route path="/personal" element={<PageWrapper><Personal /></PageWrapper>} />
        {/* Fallback */}
        <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};
