import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/30 dark:bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <ParallaxSection speed={-0.3} className="min-h-screen flex items-center justify-center relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300 bg-clip-text text-transparent">
              Rajesh A
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Software Developer & Creative Technologist
            </h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with cutting-edge technology and innovative design. 
            Passionate about creating solutions that make a difference.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
            <motion.a
              href="https://github.com"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-hover"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-hover"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-white" />
            </motion.a>
            <motion.a
              href="mailto:rajesh@example.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-hover"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-white" />
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium cursor-hover"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-gray-400 dark:border-white/30 text-gray-700 dark:text-white rounded-full font-medium cursor-hover"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-500 dark:text-white/60" />
      </motion.div>
    </div>
  );
};

export default Home;