import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  const navItems = [
    { label: 'Home', ref: refs.home },
    { label: 'About', ref: refs.about },
    { label: 'Experience', ref: refs.experience },
    { label: 'Projects', ref: refs.projects },
    { label: 'Skills', ref: refs.skills },
    { label: 'Contact', ref: refs.contact }
  ];

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">
              {darkMode ? '🌙 AS' : '☀️ AS'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.ref)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    darkMode 
                      ? 'hover:bg-gray-700 hover:text-white' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <li className="ml-4">
                <ThemeToggle />
              </li>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-black hover:bg-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.ref)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  darkMode 
                    ? 'hover:bg-gray-700 hover:text-white' 
                    : 'hover:bg-gray-200'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <li className="mt-8">
              <ThemeToggle />
            </li>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
