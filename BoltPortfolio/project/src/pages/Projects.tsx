import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const x = useTransform(scrollXProgress, [0, 1], [0, -2000]);

  const projects = [
    {
      title: "Medical Chatbot (Powered by RAG)",
      description:
        "An AI-powered chatbot that assists patients with medical queries by leveraging Retrieval-Augmented Generation (RAG) for accurate, context-aware responses.",
      image:
        "https://acropolium.com/img/articles/chatbots-in-healthcare/img01.jpg", // replace with your project screenshot if you have
      technologies: [
        "Next.js",
        "Python",
        "LangChain",
        "Pinecone",
        "Gemini API",
      ],
      liveUrl: "https://github.com/Rajesh1308/MedicalChatBot", // replace with your repo/demo link
      githubUrl: "https://github.com/Rajesh1308/MedicalChatBot",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "IoT Beehive Monitoring",
      description:
        "A real-time IoT monitoring system for beehives that tracks temperature, humidity, and hive activity, enabling predictive analysis and data-driven beekeeping decisions.",
      image:
        "https://hackster.imgix.net/uploads/attachments/1549212/_4seTfCbXHz.blob?auto=compress%2Cformat&w=900&h=675&fit=min", // replace with your project screenshot
      technologies: ["Flask", "Next.js", "MQTT", "PostgreSQL", "IoT Sensors"],
      liveUrl: "https://github.com/rajesh/beehive-monitoring", // replace with repo/demo link
      githubUrl: "https://github.com/rajesh/beehive-monitoring",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "IoT Fleet Management",
      description:
        "A fleet management system that leverages IoT sensors and real-time tracking for trucks, integrating Google Maps, weather APIs, and socket.io for live updates.",
      image:
        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800", // replace with your screenshot
      technologies: [
        "Node.js",
        "React.js",
        "Socket.io",
        "Google Maps API",
        "Weather API",
      ],
      liveUrl: "https://github.com/rajesh/iot-fleet-management", // replace with repo/demo link
      githubUrl: "https://github.com/rajesh/iot-fleet-management",
      gradient: "from-blue-500 to-cyan-600",
    },
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
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work, featuring cutting-edge technologies
            and innovative solutions.
          </p>
          {/* <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
            <ArrowRight className="w-5 h-5 mr-2" />
            <span>Scroll horizontally to explore</span>
          </div> */}
        </motion.div>

        {/* Horizontal Scrolling Section */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 pb-6 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {projects.map((project, index) => (
              <ParallaxSection key={index} speed={0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 md:w-96 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-200 dark:border-white/20 cursor-hover"
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}
                    ></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full cursor-hover"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full cursor-hover"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold cursor-hover`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </ParallaxSection>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <ParallaxSection speed={-0.1}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                label: "Projects Completed",
                value: "5+",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                label: "Lines of Code",
                value: "10K+",
                color: "text-cyan-600 dark:text-cyan-400",
              },
              {
                label: "Technologies Used",
                value: "10+",
                color: "text-green-600 dark:text-green-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-xl p-6 border border-blue-200 dark:border-white/10 cursor-hover"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </ParallaxSection>
      </div>
    </div>
  );
};

export default Projects;
