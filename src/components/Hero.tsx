import React from 'react';
import HeroBackground from './HeroBackground';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const { darkMode } = useTheme();

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  };

  const handleProjectsClick = () => {
    setCurrentPage?.('projects');
    window.location.hash = 'projects';
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    setCurrentPage?.('contact');
    window.location.hash = 'contact';
    window.scrollTo(0, 0);
  };

  return (
    <section 
      id="home"
      className={`relative w-full h-screen flex items-center justify-center 
      ${darkMode ? 'bg-primary text-lightText' : 'bg-primary-light text-lightText-dark'}`}
    >
      <HeroBackground className="w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <motion.h2 
              custom={0}
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-xl md:text-2xl mb-4 tracking-widest uppercase text-gray-500"
            >
              Hello, I'm
            </motion.h2>

            <motion.h1 
              custom={1}
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
            >
              Ajiboye Sunday
            </motion.h1>

            <motion.p 
              custom={2}
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-3xl md:text-5xl mb-8 text-gray-600 dark:text-gray-400"
            >
              Creative Web Developer
            </motion.p>

            <motion.p 
              custom={3}
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-lg md:text-xl mb-12 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Crafting innovative digital experiences with code and creativity
            </motion.p>

            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onClick={handleProjectsClick}
                className={`
                  px-10 py-4 rounded-full cursor-pointer
                  ${darkMode 
                    ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' 
                    : 'bg-gray-800 text-gray-100 hover:bg-gray-700'}
                  transition-colors duration-300
                `}
              >
                View Projects
              </motion.button>
              
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onClick={handleContactClick}
                className={`
                  px-10 py-4 rounded-full border-2 cursor-pointer
                  ${darkMode 
                    ? 'border-gray-700 text-gray-100 hover:bg-gray-700' 
                    : 'border-gray-800 text-gray-900 hover:bg-gray-800 hover:text-gray-100'}
                  transition-colors duration-300
                `}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </HeroBackground>
    </section>
  );
};

export default Hero;
