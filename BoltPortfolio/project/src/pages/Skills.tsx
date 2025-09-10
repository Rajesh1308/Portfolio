import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe, Zap, Shield } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 88 },
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 80 },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "User Research", level: 75 },
        { name: "Prototyping", level: 88 },
        { name: "Design Systems", level: 90 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Globe,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 82 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 88 },
        { name: "Terraform", level: 70 },
      ]
    },
    {
      title: "Performance",
      icon: Zap,
      color: "from-yellow-400 to-orange-400",
      skills: [
        { name: "Web Vitals", level: 90 },
        { name: "Bundle Optimization", level: 85 },
        { name: "Caching Strategies", level: 88 },
        { name: "Progressive Web Apps", level: 82 },
        { name: "Lighthouse Optimization", level: 92 },
      ]
    },
    {
      title: "Security",
      icon: Shield,
      color: "from-indigo-400 to-purple-400",
      skills: [
        { name: "OWASP", level: 80 },
        { name: "JWT", level: 85 },
        { name: "OAuth", level: 82 },
        { name: "Data Encryption", level: 78 },
        { name: "Penetration Testing", level: 70 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-black dark:via-gray-900 dark:to-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies across 
            various domains of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ParallaxSection key={categoryIndex} speed={0.1 * (categoryIndex + 1)}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-200 dark:border-white/20 cursor-hover"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 rounded-full border border-blue-200 dark:border-gray-600 cursor-hover"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>

        {/* Technical Highlights */}
        <ParallaxSection speed={-0.1}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center cursor-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                <p className="text-gray-600 dark:text-gray-300">Programming Languages</p>
              </motion.div>
              <motion.div 
                className="text-center cursor-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">30+</div>
                <p className="text-gray-600 dark:text-gray-300">Frameworks & Libraries</p>
              </motion.div>
              <motion.div 
                className="text-center cursor-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
                <p className="text-gray-600 dark:text-gray-300">Development Tools</p>
              </motion.div>
              <motion.div 
                className="text-center cursor-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <p className="text-gray-600 dark:text-gray-300">Cloud Platforms</p>
              </motion.div>
            </div>
          </motion.div>
        </ParallaxSection>
      </div>
    </div>
  );
};

export default Skills;