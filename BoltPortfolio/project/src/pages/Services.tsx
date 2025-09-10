import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Zap, Shield, Headphones } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"],
      price: "Starting from $5,000",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Deployment", "Maintenance & Updates"],
      price: "Starting from $8,000",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      features: ["Online Store Setup", "Payment Gateway Integration", "Inventory Management", "Order Tracking"],
      price: "Starting from $6,000",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance your existing applications with speed improvements, SEO optimization, and better user experience.",
      features: ["Site Speed Optimization", "SEO Improvements", "Core Web Vitals", "CDN Implementation"],
      price: "Starting from $2,500",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security assessments and implementation of best practices to protect your applications.",
      features: ["Security Assessment", "Vulnerability Testing", "Compliance Check", "Security Implementation"],
      price: "Starting from $3,500",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Headphones,
      title: "Technical Consulting",
      description: "Expert guidance on technology choices, architecture decisions, and project planning for your business.",
      features: ["Technology Strategy", "Architecture Planning", "Code Reviews", "Team Mentoring"],
      price: "Starting from $200/hour",
      gradient: "from-indigo-500 to-purple-500"
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
            Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software development services tailored to meet your business needs 
            with cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ParallaxSection key={index} speed={0.1 * (index + 1)}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20 cursor-hover h-full flex flex-col"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="flex-grow">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.price}</div>
                  <motion.button
                    className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold cursor-hover`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>

        {/* Process Section */}
        <ParallaxSection speed={-0.1}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-md rounded-2xl p-12 border border-blue-200 dark:border-white/20"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">My Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your needs and project requirements" },
                { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
                { step: "03", title: "Development", description: "Building your solution with regular updates" },
                { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold text-blue-600/30 dark:text-blue-400/30 mb-4">{phase.step}</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ParallaxSection>

        {/* CTA Section */}
        <ParallaxSection speed={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology 
              and innovative solutions.
            </p>
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg cursor-hover"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </ParallaxSection>
      </div>
    </div>
  );
};

export default Services;