import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Settings, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/skills', icon: Code, label: 'Skills' },
    { path: '/projects', icon: Briefcase, label: 'Projects' },
    { path: '/services', icon: Settings, label: 'Services' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
      <motion.div 
        className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-full p-2 border border-blue-200 dark:border-white/20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ul className="flex flex-col space-y-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="block p-3 rounded-full cursor-hover relative group"
              >
                <Icon 
                  className={`w-5 h-5 transition-colors ${
                    location.pathname === path 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
                  }`} 
                />
                {location.pathname === path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-blue-500/30 dark:bg-blue-500/20 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;