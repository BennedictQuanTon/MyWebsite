import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Check localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // 2. Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // 3. Fallback to light
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    // Set theme attribute immediately (no transition class to avoid flash)
    root.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // Add temporary transition class for smooth color transition
    root.classList.add('theme-transition');
    
    setTheme(nextTheme);
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);

    // Clean up transition class after transition completes (300ms)
    setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 350);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
