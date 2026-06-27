import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.9.01.64.01 1.11.01 1.2 0 .21-.16.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);


export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Journey', path: '/journey' },
    { name: 'Credentials', path: '/credentials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-2 sm:px-4 md:px-8 xl:px-12 py-4 transition-colors duration-300">
      <div className="max-w-6xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-6 py-2.5 rounded-full glass-panel transition-all">
        {/* Brand Logo in Flowing Serif Italic Font */}
        <NavLink 
          to="/" 
          className="font-display italic text-lg font-bold tracking-wide text-text-heading hover:text-accent transition-colors"
        >
          Bennedict.
        </NavLink>

        {/* Desktop Navigation Links in Capsule */}
        <div className="hidden md:flex items-center space-x-1.5 bg-surface-2/40 p-1 rounded-full border border-border-token/10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-bg bg-accent shadow-sm shadow-accent/25'
                    : 'text-text-muted hover:text-text-heading hover:bg-surface-2/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Utility Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/BennedictQuanTon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 text-text-muted hover:text-text-heading transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/bennedictquanton"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 text-text-muted hover:text-text-heading transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
          
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 border border-border-token text-text-muted hover:text-text-heading transition-all shadow-sm"
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Controls (Menu Button + Theme Button) */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Theme Toggle for Mobile */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 border border-border-token text-text-muted transition-all shadow-sm"
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {theme === 'dark' ? <Sun size={18} className="text-accent" /> : <Moon size={18} />}
          </motion.button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-2 text-text-muted hover:text-text-heading transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 p-6 rounded-3xl glass-panel flex flex-col items-center space-y-6"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium tracking-wider uppercase transition-colors ${
                    isActive ? 'text-accent font-semibold' : 'text-text-muted'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center space-x-6 pt-4 border-t border-border-token w-full justify-center">
              <a
                href="https://github.com/BennedictQuanTon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-heading flex items-center space-x-2"
              >
                <GithubIcon size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/bennedictquanton"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-heading flex items-center space-x-2"
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
