import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import AnimatedCursor from './components/AnimatedCursor';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" }
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen overflow-x-hidden">
          <AnimatedCursor />
          <ThemeToggle />
          <Navigation />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div {...pageTransition}>
                    <Home />
                  </motion.div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <motion.div {...pageTransition}>
                    <About />
                  </motion.div>
                } 
              />
              <Route 
                path="/skills" 
                element={
                  <motion.div {...pageTransition}>
                    <Skills />
                  </motion.div>
                } 
              />
              <Route 
                path="/projects" 
                element={
                  <motion.div {...pageTransition}>
                    <Projects />
                  </motion.div>
                } 
              />
              <Route 
                path="/services" 
                element={
                  <motion.div {...pageTransition}>
                    <Services />
                  </motion.div>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <motion.div {...pageTransition}>
                    <Contact />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;