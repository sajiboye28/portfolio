import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitch = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 p-2 rounded-full bg-primary-light dark:bg-primary border-2 border-secondary z-50 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-14 h-8 flex items-center">
        {/* Sun Icon */}
        <motion.div
          initial={{ scale: darkMode ? 1 : 0 }}
          animate={{ scale: darkMode ? 0 : 1, opacity: darkMode ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute left-1"
        >
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          initial={{ scale: darkMode ? 0 : 1 }}
          animate={{ scale: darkMode ? 1 : 0, opacity: darkMode ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-1"
        >
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </motion.div>

        {/* Sliding Background */}
        <motion.div
          initial={{ x: darkMode ? 24 : 0 }}
          animate={{ x: darkMode ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute w-7 h-7 rounded-full bg-secondary/20 backdrop-blur-sm"
        />
      </div>
    </motion.button>
  );
};

export default ThemeSwitch;
