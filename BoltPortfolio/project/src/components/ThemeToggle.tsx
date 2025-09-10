import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 cursor-hover"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-yellow-400" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;