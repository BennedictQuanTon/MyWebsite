import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AnimatedRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        {/* Fixed navigation */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow pt-24 pb-12 w-full">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
