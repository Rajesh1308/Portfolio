import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ParallaxSection speed={0.2}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/60 dark:bg-white/5 border border-blue-200 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors cursor-hover"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/60 dark:bg-white/5 border border-blue-200 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors cursor-hover"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/5 border border-blue-200 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors cursor-hover"
                    placeholder="Project discussion"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/5 border border-blue-200 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors cursor-hover resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold flex items-center justify-center cursor-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </ParallaxSection>

          {/* Contact Info */}
          <div className="space-y-8">
            <ParallaxSection speed={0.3}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center cursor-hover"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-gray-800 dark:text-white font-medium">Email</div>
                      <div className="text-gray-600 dark:text-gray-300">rajesh@example.com</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center cursor-hover"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-green-500/20 rounded-xl mr-4">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-gray-800 dark:text-white font-medium">Phone</div>
                      <div className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center cursor-hover"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-purple-500/20 rounded-xl mr-4">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-gray-800 dark:text-white font-medium">Location</div>
                      <div className="text-gray-600 dark:text-gray-300">San Francisco, CA</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={0.1}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Follow Me</h2>
                
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    className="p-4 bg-white/5 rounded-xl cursor-hover"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6 text-gray-700 dark:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-4 bg-white/5 rounded-xl cursor-hover"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    className="p-4 bg-white/5 rounded-xl cursor-hover"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="w-6 h-6 text-cyan-400" />
                  </motion.a>
                </div>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={-0.1}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-blue-200 dark:border-white/20"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Available for Work</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's create something amazing together!
                </p>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium cursor-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                </motion.button>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;